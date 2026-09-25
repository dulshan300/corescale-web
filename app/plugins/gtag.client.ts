const GA_ID = 'G-E7XQ2TF019'

export default defineNuxtPlugin(() => {
  if (import.meta.dev) return

  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
      {
        innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
      },
    ],
  })
})
