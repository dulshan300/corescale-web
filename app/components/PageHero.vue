<template>
  <section class="relative overflow-hidden bg-hero text-white">
    <div class="absolute inset-0 bg-grid-dark" aria-hidden="true"></div>
    <ClientOnly><HeroNetwork dark /></ClientOnly>
    <div class="relative section-padding pt-36 md:pt-44 !pb-20 md:!pb-24">
      <div class="container-custom" :class="{ 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center': $slots.aside }">
        <div>
          <span v-if="eyebrow" class="eyebrow-dark mb-6">
            <span class="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></span>
            {{ eyebrow }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">{{ title }}</h1>
          <p v-if="subtitle || $slots.subtitle" class="text-brand-100/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            <slot name="subtitle">{{ subtitle }}</slot>
          </p>
          <slot />
        </div>
        <div v-if="$slots.aside" class="animate-float-slow">
          <slot name="aside" />
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ eyebrow?: string, title: string, subtitle?: string }>()
</script>
