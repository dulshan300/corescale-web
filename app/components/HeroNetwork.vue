<template>
  <div ref="host" class="absolute inset-0 pointer-events-none hero-network" aria-hidden="true"></div>
</template>

<script setup lang="ts">
import { tsParticles, type Container } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const host = ref<HTMLElement | null>(null)
let container: Container | undefined

onMounted(async () => {
  if (!host.value) return
  const id = `hero-particles-${Math.random().toString(36).slice(2)}`
  host.value.id = id
  await loadSlim(tsParticles)
  container = await tsParticles.load({
    id,
    options: {
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 85, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ['#1e9cd7', '#0f2a52'] },
        shape: { type: ['circle', 'triangle', 'polygon'], options: { polygon: { sides: 5 } } },
        opacity: { value: { min: 0.35, max: 0.7 } },
        size: { value: { min: 2, max: 5 } },
        rotate: { value: { min: 0, max: 360 }, animation: { enable: true, speed: 4 } },
        links: { enable: true, distance: 150, color: '#1e9cd7', opacity: 0.3, width: 1, triangles: { enable: true, color: '#1e9cd7', opacity: 0.03 } },
        move: { enable: true, speed: 1.2, outModes: { default: 'bounce' } },
      },
      interactivity: {
        detectsOn: 'window',
        events: { onHover: { enable: true, mode: ['grab', 'repulse'] }, onClick: { enable: true, mode: 'push' } },
        modes: {
          grab: { distance: 190, links: { opacity: 0.6 } },
          repulse: { distance: 90, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
    },
  })
})

onBeforeUnmount(() => container?.destroy())
</script>

<style scoped>
.hero-network {
  mask-image: radial-gradient(ellipse at center, #000 35%, transparent 90%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 35%, transparent 90%);
}
</style>
