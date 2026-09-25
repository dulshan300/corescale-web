<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Corescale',
        url: 'https://corescale.dev',
        logo: 'https://corescale.dev/logo-full.png',
        email: 'info@corescale.dev',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Colombo',
          addressCountry: 'LK',
        },
        sameAs: [],
      }),
    },
  ],
})
</script>
