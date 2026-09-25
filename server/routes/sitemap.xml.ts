const site = 'https://corescale.dev'

const pages = [
  { path: '', priority: '1.0' },
  { path: '/services', priority: '0.9' },
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.8' },
  { path: '/privacy-policy', priority: '0.3' },
  { path: '/terms-of-service', priority: '0.3' },
]

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  const urls = pages
    .map((p) => `  <url>\n    <loc>${site}${p.path}</loc>\n    <priority>${p.priority}</priority>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
