<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="solid ? 'bg-white/85 backdrop-blur-xl border-b border-dark-200/70 shadow-sm shadow-brand-900/5' : 'bg-transparent border-b border-transparent'"
  >
    <div class="container-custom flex items-center justify-between h-16 md:h-20 px-6 transition-all duration-300">
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/logo-full.png"
          alt="Corescale"
          class="h-12 md:h-14 object-contain transition-[filter] duration-300"
          :class="solid ? '' : 'brightness-0 invert'"
        />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1 rounded-full p-1 transition-colors duration-300" :class="solid ? 'bg-brand-50/80' : 'bg-white/5 border border-white/10 backdrop-blur'">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
          :class="solid ? 'text-dark-600 hover:text-brand-900' : 'text-white/75 hover:text-white'"
          :active-class="solid ? '!text-brand-900 bg-white shadow-sm' : '!text-white bg-white/10'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <NuxtLink to="/contact" class="btn-primary text-sm !px-5 !py-2.5 hidden sm:inline-flex">
          Get in Touch
        </NuxtLink>
        <button
          class="md:hidden transition-colors"
          :class="solid ? 'text-dark-600 hover:text-dark-900' : 'text-white/80 hover:text-white'"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden border-t border-dark-200 bg-white">
        <nav class="flex flex-col px-6 py-4 gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-sm text-dark-600 hover:text-brand-900 hover:bg-brand-50 transition-colors font-medium px-3 py-3 rounded-lg"
            active-class="!text-accent-700 bg-brand-50"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary text-sm text-center mt-3" @click="mobileOpen = false">
            Get in Touch
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const scrolled = ref(false)
const solid = computed(() => scrolled.value || mobileOpen.value)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const onScroll = () => { scrolled.value = window.scrollY > 24 }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
