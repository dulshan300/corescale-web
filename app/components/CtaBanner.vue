<template>
  <section class="relative overflow-hidden bg-hero">
    <div class="absolute inset-0 bg-grid-dark" aria-hidden="true"></div>
    <ClientOnly><HeroNetwork dark /></ClientOnly>
    <div class="relative section-padding">
      <div v-reveal class="container-custom text-center">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-white">{{ heading }}</h2>
        <p class="text-brand-100/80 text-lg max-w-xl mx-auto mb-10">{{ text }}</p>
        <NuxtLink to="/contact" class="btn-primary text-base gap-2">
          {{ label }}
          <ArrowRight class="w-5 h-5" :stroke-width="2" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(defineProps<{ heading: string, text: string, label?: string }>(), { label: 'Get in Touch' })
</script>
