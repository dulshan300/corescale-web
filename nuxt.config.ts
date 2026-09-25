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
