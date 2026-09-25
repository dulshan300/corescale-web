const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

const serviceLabels: Record<string, string> = {
  'web-development': 'Web Development',
  'solution-architecture': 'Solution Architecture',
  'ai-agents': 'Custom AI Agents',
  'digital-transformation': 'Digital Transformation',
  other: 'Other',
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Hidden field real visitors never fill in; bots do.
  if (clean(body?.website, 100)) return { ok: true }

  const name = clean(body?.name, 100)
  const email = clean(body?.email, 200)
  const company = clean(body?.company, 150)
  const service = serviceLabels[clean(body?.service, 50)] ?? ''
  const message = clean(body?.message, 5000)

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please fill in your name, a valid email, and a message.' })
  }

  const config = useRuntimeConfig(event)
  if (!config.resendApiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    throw createError({ statusCode: 500, statusMessage: 'Contact form is not available right now.' })
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '-'],
    ['Service', service || '-'],
  ]
  const html = `
    <h2>New enquiry from corescale.dev</h2>
    <table cellpadding="6">${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v!)}</td></tr>`).join('')}</table>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.resendApiKey}` },
      body: {
        from: config.contactFromEmail,
        to: config.contactToEmail,
        reply_to: email,
        subject: `New enquiry from ${name}${service ? ` - ${service}` : ''}`,
        html,
      },
    })
  } catch (err) {
    console.error('[contact] Resend request failed', err)
    throw createError({ statusCode: 502, statusMessage: 'We could not send your message. Please email info@corescale.dev instead.' })
  }

  return { ok: true }
})
