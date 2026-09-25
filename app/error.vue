<template>
  <NuxtLayout>
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-40 pb-32">
      <div class="container-custom text-center">
        <p class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3">
          {{ is404 ? 'Error 404' : `Error ${error.statusCode}` }}
        </p>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-dark-900">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="text-dark-500 text-lg max-w-xl mx-auto mb-10">
          {{ is404
            ? 'The page you are looking for may have moved or no longer exists. Try one of these instead.'
            : 'We hit an unexpected problem. Please try again, or contact us if it keeps happening.' }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="btn-primary" @click="handleError">Back to Home</button>
          <NuxtLink to="/services" class="btn-secondary" @click="clearError()">View Services</NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary" @click="clearError()">Contact Us</NuxtLink>
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
