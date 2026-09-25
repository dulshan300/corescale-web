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
