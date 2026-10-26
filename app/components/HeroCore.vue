<template>
  <div ref="host" class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const host = ref<HTMLElement | null>(null)

// Particles spiral from the outer field into the core, then respawn. Computed on the GPU.
const streamVertex = /* glsl */ `
  attribute vec3 aDir;
  attribute float aSpeed;
  attribute float aOffset;
  attribute float aSize;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float t = fract(aOffset + uTime * aSpeed);
    float r = mix(7.0, 1.25, pow(t, 1.7));
    float ang = t * 2.6;
    float c = cos(ang), s = sin(ang);
    vec3 d = vec3(aDir.x * c - aDir.z * s, aDir.y, aDir.x * s + aDir.z * c);
    vec4 mv = modelViewMatrix * vec4(d * r, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * (10.0 / -mv.z);
    vAlpha = smoothstep(0.0, 0.2, t) * (1.0 - smoothstep(0.82, 1.0, t));
    vColor = mix(uColorA, uColorB, t);
  }
`

// Static glow points (core vertices, stars, satellites) with an optional twinkle.
const glowVertex = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uTwinkle;
  uniform vec3 uColor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float tw = 1.0 - uTwinkle * 0.5 * (1.0 + sin(uTime * 2.0 + aPhase));
    gl_PointSize = aSize * uPixelRatio * (10.0 / -mv.z) * mix(0.7, 1.0, tw);
    vAlpha = tw;
    vColor = uColor;
  }
`

// Fresnel shell: transparent in the middle, glowing at the rim.
const shellVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`
const shellFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uStrength;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float f = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);
    float pulse = 0.85 + 0.15 * sin(uTime * 1.6);
    gl_FragColor = vec4(uColor, (f * 0.9 + 0.04) * uStrength * pulse);
    #include <colorspace_fragment>
  }
`

useThreeScene(host, (ctx) => {
  const { THREE, scene, camera, small, pixelRatio, pointer } = ctx
  const accent = new THREE.Color('#1e9cd7')
  const accentLight = new THREE.Color('#80cced')
  const white = new THREE.Color('#ffffff')

  const root = new THREE.Group()
  scene.add(root)
  const core = new THREE.Group()
  root.add(core)

  const time = { value: 0 }
  const pr = { value: pixelRatio }

  const glowMaterial = (color: InstanceType<typeof THREE.Color>, opts: { core?: number, opacity?: number, twinkle?: number } = {}) =>
    new THREE.ShaderMaterial({
      vertexShader: glowVertex,
      fragmentShader: glowPointFragment,
      uniforms: {
        uTime: time, uPixelRatio: pr, uColor: { value: color },
        uOpacity: { value: opts.opacity ?? 1 }, uCore: { value: opts.core ?? 0.2 }, uTwinkle: { value: opts.twinkle ?? 0 },
      },
      transparent: true,
      depthWrite: false,
    })

  const glowPoints = (positions: Float32Array, size: [number, number], material: InstanceType<typeof THREE.ShaderMaterial>) => {
    const n = positions.length / 3
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aSize', new THREE.BufferAttribute(Float32Array.from({ length: n }, () => size[0] + Math.random() * (size[1] - size[0])), 1))
    geo.setAttribute('aPhase', new THREE.BufferAttribute(Float32Array.from({ length: n }, () => Math.random() * Math.PI * 2), 1))
    const points = new THREE.Points(geo, material)
    points.frustumCulled = false
    return points
  }

  // Glowing shells
  const shell = (radius: number, color: InstanceType<typeof THREE.Color>, strength: number) => new THREE.Mesh(
    new THREE.IcosahedronGeometry(radius, 5),
    new THREE.ShaderMaterial({
      vertexShader: shellVertex,
      fragmentShader: shellFragment,
      uniforms: { uColor: { value: color }, uStrength: { value: strength }, uTime: time },
      transparent: true,
      depthWrite: false,
    }),
  )
  core.add(shell(1.05, accent, 0.9))
  core.add(shell(0.42, accentLight, 1.2))
  core.add(glowPoints(new Float32Array([0, 0, 0]), [70, 70], glowMaterial(accentLight, { core: 0, opacity: 0.8 })))

  // Wireframe lattices, rotating against each other
  const inner = new THREE.Group()
  const innerGeo = new THREE.IcosahedronGeometry(1.45, 1)
  inner.add(new THREE.LineSegments(new THREE.EdgesGeometry(innerGeo), new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.6 })))
  const vertexMap = new Map<string, number[]>()
  const vp = innerGeo.getAttribute('position')
  for (let i = 0; i < vp.count; i++) {
    const v = [vp.getX(i), vp.getY(i), vp.getZ(i)]
    vertexMap.set(v.map(n => n.toFixed(3)).join(','), v)
  }
  innerGeo.dispose()
  inner.add(glowPoints(new Float32Array([...vertexMap.values()].flat()), [7, 11], glowMaterial(white, { core: 0.2, twinkle: 0.8 })))
  core.add(inner)

  const outer = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.05, 0)),
    new THREE.LineBasicMaterial({ color: accentLight, transparent: true, opacity: 0.22 }),
  )
  core.add(outer)

  // Orbit rings with satellites
  const rings = [
    { radius: 2.6, tilt: [1.2, 0.3], speed: 0.5, sats: 3 },
    { radius: 3.05, tilt: [1.75, -0.5], speed: -0.35, sats: 2 },
    { radius: 3.5, tilt: [0.95, 0.9], speed: 0.25, sats: 3 },
  ].map((cfg) => {
    const group = new THREE.Group()
    group.rotation.set(cfg.tilt[0]!, cfg.tilt[1]!, 0)
    const pts = new THREE.EllipseCurve(0, 0, cfg.radius, cfg.radius).getPoints(160).map(p => new THREE.Vector3(p.x, p.y, 0))
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineDashedMaterial({ color: accent, transparent: true, opacity: 0.35, dashSize: 0.12, gapSize: 0.08 }),
    )
    line.computeLineDistances()
    group.add(line)
    const satPos = new Float32Array(cfg.sats * 3)
    const sats = glowPoints(satPos, [16, 22], glowMaterial(accentLight, { core: 0.22 }))
    group.add(sats)
    root.add(group)
    return { cfg, satPos, sats, offset: Math.random() * Math.PI * 2 }
  })

  // Data stream flowing into the core
  const STREAM = small ? 700 : 1600
  const streamGeo = new THREE.BufferGeometry()
  streamGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(STREAM * 3), 3))
  const dirs = new Float32Array(STREAM * 3)
  const dir = new THREE.Vector3()
  for (let i = 0; i < STREAM; i++) {
    dir.randomDirection()
    dir.y *= 0.55
    dir.normalize().toArray(dirs, i * 3)
  }
  streamGeo.setAttribute('aDir', new THREE.BufferAttribute(dirs, 3))
  streamGeo.setAttribute('aSpeed', new THREE.BufferAttribute(Float32Array.from({ length: STREAM }, () => 0.04 + Math.random() * 0.06), 1))
  streamGeo.setAttribute('aOffset', new THREE.BufferAttribute(Float32Array.from({ length: STREAM }, () => Math.random()), 1))
  streamGeo.setAttribute('aSize', new THREE.BufferAttribute(Float32Array.from({ length: STREAM }, () => 3 + Math.random() * 7), 1))
  const stream = new THREE.Points(streamGeo, new THREE.ShaderMaterial({
    vertexShader: streamVertex,
    fragmentShader: glowPointFragment,
    uniforms: {
      uTime: time, uPixelRatio: pr, uColorA: { value: accent }, uColorB: { value: white },
      uOpacity: { value: 0.85 }, uCore: { value: 0.18 },
    },
    transparent: true,
    depthWrite: false,
  }))
  stream.frustumCulled = false
  root.add(stream)

  // Ambient starfield for depth, spread across the whole hero
  const STARS = small ? 160 : 360
  const starPos = new Float32Array(STARS * 3)
  for (let i = 0; i < STARS; i++) {
    starPos.set([(Math.random() * 2 - 1) * 16, (Math.random() * 2 - 1) * 9, -4 - Math.random() * 10], i * 3)
  }
  const stars = glowPoints(starPos, [4, 10], glowMaterial(accentLight, { core: 0.2, opacity: 0.55, twinkle: 0.9 }))
  scene.add(stars)

  let baseX = 0
  let baseScale = 1
  const baseZ = camera.position.z

  return {
    resize(w, h) {
      const aspect = w / h
      const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * baseZ
      if (aspect > 1.15) {
        // Desktop: the core sits on the right, next to the headline
        baseScale = Math.min(0.95, (halfH * aspect * 0.5) / 3.8)
        baseX = halfH * aspect * 0.46
      } else {
        // Mobile: centred behind the text
        baseScale = 0.72
        baseX = 0
      }
      root.scale.setScalar(baseScale)
    },
    update(dt, elapsed) {
      time.value = elapsed
      const breathe = 1 + Math.sin(elapsed * 1.2) * 0.025
      core.scale.setScalar(breathe)
      inner.rotation.y += dt * 0.3
      inner.rotation.x += dt * 0.12
      outer.rotation.y -= dt * 0.15
      outer.rotation.z += dt * 0.08
      stream.rotation.y += dt * 0.05
      stars.rotation.z += dt * 0.004

      for (const ring of rings) {
        const n = ring.cfg.sats
        for (let i = 0; i < n; i++) {
          const a = ring.offset + elapsed * ring.cfg.speed + (i / n) * Math.PI * 2
          ring.satPos.set([Math.cos(a) * ring.cfg.radius, Math.sin(a) * ring.cfg.radius, 0], i * 3)
        }
        ring.sats.geometry.getAttribute('position').needsUpdate = true
      }

      // Pointer parallax and scroll: the core drifts up and away as the hero scrolls out
      const s = ctx.scroll
      root.position.set(baseX + pointer.x * 0.25, s * 2.2 - pointer.y * 0.15, 0)
      root.rotation.set(pointer.y * 0.25 + s * 0.6, pointer.x * 0.35 + s * 0.8, 0)
      camera.position.z = baseZ + s * 2.5
    },
  }
}, { fov: 45, cameraZ: 10 })
</script>
