<template>
  <div ref="host" class="absolute inset-0 pointer-events-none hero-network" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const props = defineProps<{ dark?: boolean }>()
const host = ref<HTMLElement | null>(null)

const pointVertex = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float depth = clamp((-mv.z - 260.0) / 340.0, 0.0, 1.0);
    vAlpha = mix(1.0, 0.3, depth);
    gl_PointSize = aSize * uPixelRatio * (420.0 / -mv.z);
    vColor = aColor;
  }
`

useThreeScene(host, ({ THREE, scene, small, pixelRatio, pointer }) => {
  const COUNT = small ? 55 : 110
  const LINK_DIST = small ? 90 : 110
  const MAX_LINKS = COUNT * 8
  const PULSES = small ? 4 : 10
  const HALF_Y = 190
  const HALF_Z = 150
  let halfX = HALF_Y * 2

  const group = new THREE.Group()
  scene.add(group)

  const palette = (props.dark ? ['#1e9cd7', '#ffffff'] : ['#1e9cd7', '#0f2a52']).map(c => new THREE.Color(c))
  const accent = new THREE.Color('#1e9cd7')
  const linkOpacity = props.dark ? 0.6 : 0.45

  // Nodes
  const pos = new Float32Array(COUNT * 3)
  const vel = new Float32Array(COUNT * 3)
  const nodeColors = new Float32Array(COUNT * 3)
  const nodeSizes = new Float32Array(COUNT)
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3 + 1] = (Math.random() * 2 - 1) * HALF_Y
    pos[i * 3 + 2] = (Math.random() * 2 - 1) * HALF_Z
    for (let k = 0; k < 3; k++) vel[i * 3 + k] = (Math.random() - 0.5) * 0.5
    const c = palette[Math.random() < 0.6 ? 0 : 1]!
    nodeColors.set([c.r, c.g, c.b], i * 3)
    nodeSizes[i] = 12 + Math.random() * 12
  }

  const makePointMaterial = (opacity: number) => new THREE.ShaderMaterial({
    vertexShader: pointVertex,
    fragmentShader: glowPointFragment,
    uniforms: { uPixelRatio: { value: pixelRatio }, uOpacity: { value: opacity }, uCore: { value: 0.22 } },
    transparent: true,
    depthWrite: false,
  })

  const nodeGeo = new THREE.BufferGeometry()
  const nodePosAttr = new THREE.BufferAttribute(pos, 3)
  nodeGeo.setAttribute('position', nodePosAttr)
  nodeGeo.setAttribute('aColor', new THREE.BufferAttribute(nodeColors, 3))
  nodeGeo.setAttribute('aSize', new THREE.BufferAttribute(nodeSizes, 1))
  const nodes = new THREE.Points(nodeGeo, makePointMaterial(props.dark ? 0.9 : 0.75))
  nodes.frustumCulled = false
  nodes.renderOrder = 1
  group.add(nodes)

  // Links
  const linkPos = new Float32Array(MAX_LINKS * 6)
  const linkCol = new Float32Array(MAX_LINKS * 8)
  const linkPairs = new Uint16Array(MAX_LINKS * 2)
  let linkCount = 0
  const linkGeo = new THREE.BufferGeometry()
  const linkPosAttr = new THREE.BufferAttribute(linkPos, 3)
  const linkColAttr = new THREE.BufferAttribute(linkCol, 4)
  linkGeo.setAttribute('position', linkPosAttr)
  linkGeo.setAttribute('color', linkColAttr)
  const links = new THREE.LineSegments(linkGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false }))
  links.frustumCulled = false
  group.add(links)

  // Pulses travelling along links ("data flow")
  const pulsePos = new Float32Array(PULSES * 3)
  const pulseSizes = new Float32Array(PULSES)
  const pulseColors = new Float32Array(PULSES * 3)
  const pulses = Array.from({ length: PULSES }, () => ({ from: -1, to: -1, t: Math.random(), speed: 0 }))
  for (let i = 0; i < PULSES; i++) pulseColors.set([accent.r, accent.g, accent.b], i * 3)
  const pulseGeo = new THREE.BufferGeometry()
  const pulsePosAttr = new THREE.BufferAttribute(pulsePos, 3)
  const pulseSizeAttr = new THREE.BufferAttribute(pulseSizes, 1)
  pulseGeo.setAttribute('position', pulsePosAttr)
  pulseGeo.setAttribute('aColor', new THREE.BufferAttribute(pulseColors, 3))
  pulseGeo.setAttribute('aSize', pulseSizeAttr)
  const pulsePoints = new THREE.Points(pulseGeo, makePointMaterial(1))
  pulsePoints.frustumCulled = false
  pulsePoints.renderOrder = 2
  group.add(pulsePoints)

  const bounds = [halfX, HALF_Y, HALF_Z]
  const LD2 = LINK_DIST * LINK_DIST
  let spread = false

  return {
    resize(w, h) {
      halfX = HALF_Y * (w / h)
      bounds[0] = halfX
      // Spread nodes across the real width before the first frame
      if (!spread) {
        for (let i = 0; i < COUNT; i++) pos[i * 3] = (Math.random() * 2 - 1) * halfX
        spread = true
      }
    },
    update(dt, elapsed) {
      const f = dt * 60
      for (let i = 0; i < COUNT * 3; i++) {
        pos[i]! += vel[i]! * f
        const b = bounds[i % 3]!
        if (pos[i]! > b) vel[i] = -Math.abs(vel[i]!)
        else if (pos[i]! < -b) vel[i] = Math.abs(vel[i]!)
      }
      nodePosAttr.needsUpdate = true

      linkCount = 0
      for (let i = 0; i < COUNT && linkCount < MAX_LINKS; i++) {
        const ax = pos[i * 3]!, ay = pos[i * 3 + 1]!, az = pos[i * 3 + 2]!
        for (let j = i + 1; j < COUNT && linkCount < MAX_LINKS; j++) {
          const bx = pos[j * 3]!, by = pos[j * 3 + 1]!, bz = pos[j * 3 + 2]!
          const dx = ax - bx, dy = ay - by, dz = az - bz
          const d2 = dx * dx + dy * dy + dz * dz
          if (d2 > LD2) continue
          const a = (1 - Math.sqrt(d2) / LINK_DIST) * linkOpacity
          linkPos.set([ax, ay, az, bx, by, bz], linkCount * 6)
          linkCol.set([accent.r, accent.g, accent.b, a, accent.r, accent.g, accent.b, a], linkCount * 8)
          linkPairs[linkCount * 2] = i
          linkPairs[linkCount * 2 + 1] = j
          linkCount++
        }
      }
      linkGeo.setDrawRange(0, linkCount * 2)
      linkPosAttr.needsUpdate = true
      linkColAttr.needsUpdate = true

      pulses.forEach((p, i) => {
        p.t += p.speed * dt
        if (p.from < 0 || p.t >= 1) {
          if (linkCount === 0) { pulseSizes[i] = 0; return }
          const l = Math.floor(Math.random() * linkCount)
          const flip = Math.random() < 0.5
          p.from = linkPairs[l * 2 + (flip ? 1 : 0)]!
          p.to = linkPairs[l * 2 + (flip ? 0 : 1)]!
          p.t = 0
          p.speed = 0.6 + Math.random() * 0.6
        }
        for (let k = 0; k < 3; k++) {
          pulsePos[i * 3 + k] = pos[p.from * 3 + k]! + (pos[p.to * 3 + k]! - pos[p.from * 3 + k]!) * p.t
        }
        pulseSizes[i] = 22 * Math.sin(Math.PI * p.t)
      })
      pulsePosAttr.needsUpdate = true
      pulseSizeAttr.needsUpdate = true

      group.rotation.y = Math.sin(elapsed * 0.15) * 0.3 + pointer.x * 0.3
      group.rotation.x = Math.sin(elapsed * 0.1) * 0.1 + pointer.y * 0.18
    },
  }
}, { fov: 50, cameraZ: 420 })
</script>

<style scoped>
.hero-network {
  mask-image: radial-gradient(ellipse at center, #000 35%, transparent 90%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 35%, transparent 90%);
}
</style>
