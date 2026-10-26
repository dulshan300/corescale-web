<template>
  <NuxtLayout>
    <section class="relative overflow-hidden bg-hero section-padding pt-40 pb-32 min-h-[80svh] flex items-center">
      <div class="absolute inset-0 bg-grid-dark" aria-hidden="true"></div>
      <ClientOnly><HeroNetwork dark /></ClientOnly>
      <div class="relative w-full container-custom text-center">
        <p class="eyebrow-dark mb-6">
          {{ is404 ? 'Error 404' : `Error ${error.statusCode}` }}
        </p>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-5 text-white">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="text-brand-100/80 text-lg max-w-xl mx-auto mb-10">
          {{ is404
            ? 'The page you are looking for may have moved or no longer exists. Try one of these instead.'
            : 'We hit an unexpected problem. Please try again, or contact us if it keeps happening.' }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="btn-primary" @click="handleError">Back to Home</button>
          <NuxtLink to="/services" class="btn-ghost" @click="clearError()">View Services</NuxtLink>
          <NuxtLink to="/contact" class="btn-ghost" @click="clearError()">Contact Us</NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (is404.value ? 'Page Not Found | Corescale' : 'Error | Corescale'),
  robots: 'noindex, follow',
})

const handleError = () => clearError({ redirect: '/' })
</script>
