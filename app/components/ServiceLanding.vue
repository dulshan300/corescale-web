<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-3 py-1 mb-4">
            <span class="text-accent-700 text-xs font-medium">{{ eyebrow }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">{{ title }}</h1>
          <p class="text-dark-500 text-lg mb-8 leading-relaxed">{{ intro }}</p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-primary">Get a Free Quote</NuxtLink>
            <a href="#pricing" class="btn-secondary">See Pricing</a>
          </div>
        </div>
        <div class="bg-gradient-to-br from-brand-50 to-accent-50 border border-brand-100 rounded-2xl p-4 sm:p-6 flex items-center justify-center">
          <ServiceIllustration :name="illustration" class="w-full max-w-md h-auto" />
        </div>
      </div>
    </section>

    <!-- What we build -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-2xl mb-10">
          <h2 class="text-3xl font-bold mb-3 text-dark-900">{{ buildHeading }}</h2>
          <p class="text-dark-500">{{ buildIntro }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in offerings" :key="item.title" class="border border-dark-200 rounded-xl p-6">
            <h3 class="font-semibold text-dark-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-dark-500 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail sections -->
    <section v-for="section in sections" :key="section.heading" class="section-padding pt-0 bg-white">
      <div class="container-custom max-w-3xl">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-dark-900">{{ section.heading }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-dark-500 leading-relaxed mb-4">{{ paragraph }}</p>
        <ul v-if="section.points" class="space-y-3 mt-4">
          <li v-for="point in section.points" :key="point" class="flex items-start gap-2 text-sm text-dark-600">
            <svg class="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ point }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="section-padding bg-brand-50 border-y border-brand-100 scroll-mt-20">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-accent-700 text-sm font-medium tracking-wide uppercase mb-3 block">Pricing</span>
          <h2 class="text-3xl font-bold mb-3 text-dark-900">{{ pricingHeading }}</h2>
          <p class="text-dark-500">{{ pricingIntro }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="tier in tiers" :key="tier.name" class="bg-white border border-dark-200 rounded-2xl p-6 flex flex-col">
            <h3 class="font-semibold text-dark-900">{{ tier.name }}</h3>
            <p class="text-3xl font-bold text-brand-900 mt-3">
              <span class="text-sm font-medium text-dark-500">from</span> {{ tier.price }}
            </p>
            <p class="text-sm text-dark-500 mt-3 mb-5 leading-relaxed">{{ tier.description }}</p>
            <ul class="space-y-2 mt-auto">
              <li v-for="item in tier.includes" :key="item" class="flex items-start gap-2 text-sm text-dark-600">
                <svg class="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <p class="text-center text-sm text-dark-500 mt-8 max-w-2xl mx-auto">
          These are starting prices, not fixed rates. Every project is different, <strong class="text-dark-700">and we can always discuss</strong> scope and budget to find a fit that works for you. You get a written quote before any work begins.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding bg-white">
      <div class="container-custom max-w-3xl">
        <div class="text-center mb-12">
          <span class="text-accent-700 text-sm font-medium tracking-wide uppercase mb-3 block">FAQ</span>
          <h2 class="text-3xl font-bold mb-4 text-dark-900">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-3">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group bg-white border border-dark-200 rounded-xl px-6 py-4 open:border-accent-500/40"
          >
            <summary class="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-dark-900">
              {{ faq.question }}
              <svg class="w-5 h-5 text-accent-500 flex-shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <p class="text-dark-500 leading-relaxed mt-3">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Related -->
    <section class="section-padding pt-0 bg-white">
      <div class="container-custom max-w-3xl">
        <p class="text-sm text-dark-500">
          Also see:
          <template v-for="(link, i) in related" :key="link.to">
            <NuxtLink :to="link.to" class="text-accent-700 hover:underline">{{ link.label }}</NuxtLink><span v-if="i < related.length - 1">, </span>
          </template>
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-brand-900">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4 text-white">{{ ctaHeading }}</h2>
        <p class="text-brand-200 max-w-xl mx-auto mb-8">{{ ctaText }}</p>
        <NuxtLink to="/contact" class="btn-primary">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Offering { title: string; description: string }
interface Section { heading: string; paragraphs: string[]; points?: string[] }
interface Tier { name: string; price: string; description: string; includes: string[] }
interface Faq { question: string; answer: string }
interface Link { to: string; label: string }

const props = defineProps<{
  eyebrow: string
  title: string
  intro: string
  illustration: 'web' | 'architecture' | 'ai' | 'transformation'
  buildHeading: string
  buildIntro: string
  offerings: Offering[]
  sections: Section[]
  pricingHeading: string
  pricingIntro: string
  tiers: Tier[]
  faqs: Faq[]
  related: Link[]
  ctaHeading: string
  ctaText: string
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }),
    },
  ],
})
</script>
