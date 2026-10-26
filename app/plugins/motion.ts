import type { Directive } from 'vue'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * v-reveal="delayMs": fades an element in when it scrolls into view. Elements that are
 * already visible on mount are left alone, so server-rendered content never flashes.
 */
const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) return
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      el.classList.add('is-visible')
      observer.disconnect()
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    observer.observe(el)
  },
}

/** v-tilt: 3D tilt toward the cursor plus --mx/--my for the .card-glow spotlight. */
const tilt: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const max = binding.value ?? 6
    el.dataset.tilt = ''
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.classList.add('is-tilting')
      el.style.setProperty('--mx', `${x * 100}%`)
      el.style.setProperty('--my', `${y * 100}%`)
      el.style.setProperty('--rx', `${(0.5 - y) * max}deg`)
      el.style.setProperty('--ry', `${(x - 0.5) * max}deg`)
    })
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting')
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    })
  },
}

/** v-count: counts the leading number in the element's text up from 0 when it comes into view. */
const count: Directive<HTMLElement> = {
  getSSRProps: () => ({}),
  mounted(el) {
    const match = el.textContent?.trim().match(/^(\d+)(.*)$/)
    if (!match || !('IntersectionObserver' in window)) return
    const end = Number(match[1])
    const suffix = match[2]
    const duration = prefersReducedMotion() ? 900 : 1600
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        el.textContent = `${Math.round(end * (1 - Math.pow(1 - t, 3)))}${suffix}`
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    observer.observe(el)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
  nuxtApp.vueApp.directive('tilt', tilt)
  nuxtApp.vueApp.directive('count', count)
})
