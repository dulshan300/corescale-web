<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-dark-200">
    <div class="container-custom flex items-center justify-between h-16 px-6">
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo-full.png" alt="Corescale" class="h-14 object-contain" />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm text-dark-600 hover:text-brand-900 transition-colors font-medium"
          active-class="!text-accent-700"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <NuxtLink to="/contact" class="btn-primary text-sm hidden sm:inline-flex">
          Get in Touch
        </NuxtLink>
        <button
          class="md:hidden text-dark-600 hover:text-dark-900"
          @click="mobileOpen = !mobileOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="md:hidden border-t border-dark-200 bg-white">
      <nav class="flex flex-col px-6 py-4 gap-4">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm text-dark-600 hover:text-brand-900 transition-colors font-medium"
          active-class="!text-accent-700"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary text-sm text-center" @click="mobileOpen = false">
          Get in Touch
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
</script>
