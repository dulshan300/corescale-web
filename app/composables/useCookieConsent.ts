const STORAGE_KEY = 'corescale-cookie-consent'
const GA_ID = 'G-E7XQ2TF019'

type Choice = 'granted' | 'denied' | null

let analyticsLoaded = false

function loadAnalytics() {
  if (import.meta.dev || analyticsLoaded) return
  analyticsLoaded = true
  const w = window as any
  w[`ga-disable-${GA_ID}`] = false
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', GA_ID)
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

function disableAnalytics() {
  const w = window as any
  w[`ga-disable-${GA_ID}`] = true
  const host = location.hostname
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0]?.trim()
    if (!name || !name.startsWith('_ga')) continue
    for (const domain of [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  }
}

export function useCookieConsent() {
  const choice = useState<Choice>('cookie-choice', () => null)
  const ready = useState('cookie-ready', () => false)
  const bannerOpen = useState('cookie-banner-open', () => false)

  function save(value: 'granted' | 'denied') {
    choice.value = value
    bannerOpen.value = false
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // storage blocked: the choice still applies for this visit
    }
  }

  function init() {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
      stored = null
    }
    choice.value = stored === 'granted' || stored === 'denied' ? stored : null
    ready.value = true
    bannerOpen.value = choice.value === null
    if (choice.value === 'granted') loadAnalytics()
  }

  function accept() {
    save('granted')
    loadAnalytics()
  }

  function decline() {
    save('denied')
    disableAnalytics()
  }

  function openSettings() {
    bannerOpen.value = true
  }

  return { choice, ready, bannerOpen, init, accept, decline, openSettings }
}
