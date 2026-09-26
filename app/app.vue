<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly><CookieBanner /></ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute()
const canonical = computed(() => `https://corescale.dev${route.path === '/' ? '' : route.path.replace(/\/$/, '')}`)

useHead({
  link: [{ rel: 'canonical', href: () => canonical.value }],
  meta: [{ property: 'og:url', content: () => canonical.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Corescale',
        description: 'Corescale builds custom web apps and AI agents that automate repetitive work for startups and growing businesses.',
        url: 'https://corescale.dev',
        logo: 'https://corescale.dev/logo-full.png',
        email: 'info@corescale.dev',
        telephone: '+94727433525',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'LK',
        },
        sameAs: [
          'https://www.linkedin.com/company/corescale-dev',
          'https://www.facebook.com/corescale.dev',
        ],
      }),
    },
  ],
})
</script>
