// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Corescale | Web Development, Solution Architecture & AI Agents',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Corescale builds custom web applications, enterprise architecture, and AI agents that automate corporate workflows. Enterprise technology solutions that scale.' },
        { name: 'keywords', content: 'enterprise web development, solution architecture, custom AI agents, AI automation, Laravel development, FastAPI development, Python, PHP, software development, digital transformation, Corescale' },
        { property: 'og:title', content: 'Corescale | Web Development, Solution Architecture & AI Agents' },
        { property: 'og:description', content: 'Enterprise web development, solution architecture, and custom AI agent automation services.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://corescale.dev' },
        { property: 'og:image', content: 'https://corescale.dev/logo-full.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'theme-color', content: '#0f2a52' },
        { name: 'apple-mobile-web-app-title', content: 'Corescale' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  runtimeConfig: {
    resendApiKey: '',
    contactToEmail: 'info@corescale.dev',
    contactFromEmail: 'Corescale Website <onboarding@resend.dev>',
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
})
