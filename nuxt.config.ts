// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Corescale | Enterprise Web Development & Solution Architecture',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Corescale delivers cutting-edge web development and solution architecture services that transform how businesses operate in the digital age.' },
        { name: 'keywords', content: 'enterprise web development, solution architecture, software development, digital transformation, Corescale' },
        { property: 'og:title', content: 'Corescale | Enterprise Web Development & Solution Architecture' },
        { property: 'og:description', content: 'Enterprise web development and solution architecture services.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://corescale.dev' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
})
