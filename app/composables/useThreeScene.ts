import type { Ref } from 'vue'

type Three = typeof import('three')

export interface ThreeSceneContext {
  THREE: Three
  el: HTMLElement
  renderer: InstanceType<Three['WebGLRenderer']>
  scene: InstanceType<Three['Scene']>
  camera: InstanceType<Three['PerspectiveCamera']>
  /** Visitor asked for reduced motion: scenes still move, but slower and without pointer parallax */
  reduceMotion: boolean
  small: boolean
  pixelRatio: number
  /** Smoothed pointer position, -1..1 on both axes (stays 0 in reduced motion) */
  pointer: { x: number, y: number }
  /** How far the host has scrolled out of view at the top, 0..1 */
  scroll: number
}

export interface ThreeSceneHooks {
  update: (dt: number, elapsed: number) => void
  resize?: (width: number, height: number) => void
}

/** Soft round glow sprite: a solid core with a faint halo. Expects vColor and vAlpha varyings. */
export const glowPointFragment = /* glsl */ `
  uniform float uOpacity;
  uniform float uCore;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float core = (1.0 - smoothstep(uCore * 0.75, uCore, d)) * step(0.001, uCore);
    float halo = pow(1.0 - smoothstep(0.0, 0.5, d), 1.6) * 0.45;
    float a = max(core, halo) * vAlpha * uOpacity;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
    #include <colorspace_fragment>
  }
`

/**
 * Mounts a transparent three.js canvas inside `host` and drives it with an animation
 * loop that pauses when the host is off-screen or the tab is hidden. three.js is loaded
 * lazily on the client, and everything added to the scene is disposed on unmount.
 */
export function useThreeScene(
  host: Ref<HTMLElement | null>,
  setup: (ctx: ThreeSceneContext) => ThreeSceneHooks,
  options: { fov?: number, cameraZ?: number } = {},
) {
  let disposed = false
  let cleanup: (() => void) | undefined

  onMounted(async () => {
    const THREE = await import('three')
    const el = host.value
    if (disposed || !el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.innerWidth < 768
    const speed = reduceMotion ? 0.35 : 1

    let renderer: ThreeSceneContext['renderer']
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    } catch {
      return
    }
    const pixelRatio = Math.min(window.devicePixelRatio, small ? 1.5 : 2)
    renderer.setPixelRatio(pixelRatio)
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block'
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(options.fov ?? 45, 1, 0.1, 2000)
    camera.position.z = options.cameraZ ?? 10

    const ctx: ThreeSceneContext = {
      THREE, el, renderer, scene, camera, reduceMotion, small, pixelRatio,
      pointer: { x: 0, y: 0 },
      scroll: 0,
    }
    const hooks = setup(ctx)

    const target = { x: 0, y: 0 }
    const onPointerMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    if (!reduceMotion) window.addEventListener('pointermove', onPointerMove, { passive: true })

    let elapsed = 0
    const frame = (dt: number) => {
      const rect = el.getBoundingClientRect()
      ctx.scroll = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)))
      ctx.pointer.x += (target.x - ctx.pointer.x) * Math.min(1, dt * 3)
      ctx.pointer.y += (target.y - ctx.pointer.y) * Math.min(1, dt * 3)
      elapsed += dt * speed
      hooks.update(dt * speed, elapsed)
      renderer.render(scene, camera)
    }

    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      frame(dt)
    }

    let inView = true
    const updateLoop = () => {
      const run = inView && !document.hidden
      if (run) last = performance.now()
      renderer.setAnimationLoop(run ? loop : null)
    }

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      hooks.resize?.(w, h)
      frame(0)
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(el)
    resize()

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = !!entry?.isIntersecting
      updateLoop()
    })
    intersectionObserver.observe(el)
    document.addEventListener('visibilitychange', updateLoop)
    updateLoop()

    cleanup = () => {
      renderer.setAnimationLoop(null)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', updateLoop)
      window.removeEventListener('pointermove', onPointerMove)
      scene.traverse((obj) => {
        const mesh = obj as InstanceType<Three['Mesh']>
        mesh.geometry?.dispose()
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
        materials.forEach(m => m?.dispose())
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  })

  onBeforeUnmount(() => {
    disposed = true
    cleanup?.()
  })
}
