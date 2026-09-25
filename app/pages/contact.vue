<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">Get in Touch</h1>
        <p class="text-dark-500 text-lg max-w-2xl">
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-padding pt-0 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Form -->
          <div class="lg:col-span-2">
            <form class="bg-dark-50 border border-dark-200 rounded-2xl p-8 space-y-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-dark-700 mb-2">Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full bg-white border border-dark-300 rounded-lg px-4 py-3 text-dark-900 text-sm placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-dark-700 mb-2">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full bg-white border border-dark-300 rounded-lg px-4 py-3 text-dark-900 text-sm placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-dark-700 mb-2">Company</label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full bg-white border border-dark-300 rounded-lg px-4 py-3 text-dark-900 text-sm placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-dark-700 mb-2">Service Interest</label>
                <select
                  v-model="form.service"
                  class="w-full bg-white border border-dark-300 rounded-lg px-4 py-3 text-dark-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="solution-architecture">Solution Architecture</option>
                  <option value="ai-agents">Custom AI Agents</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-dark-700 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full bg-white border border-dark-300 rounded-lg px-4 py-3 text-dark-900 text-sm placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div class="hidden" aria-hidden="true">
                <label>Website <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" /></label>
              </div>
              <p v-if="errorMessage" class="text-sm text-red-600" role="alert">{{ errorMessage }}</p>
              <p v-if="submitted" class="text-sm text-green-700" role="status">
                Thank you! Your message has been sent. We'll get back to you soon.
              </p>
              <button type="submit" class="btn-primary w-full" :disabled="sending">
                {{ sending ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="font-semibold text-dark-900 mb-3">Contact Information</h3>
              <div class="space-y-4 text-sm">
                <div class="flex items-center gap-3 text-dark-600">
                  <span class="text-accent-500">📧</span>
                  <span>info@corescale.dev</span>
                </div>
                <div class="flex items-center gap-3 text-dark-600">
                  <span class="text-accent-500">📞</span>
                  <a href="tel:+94727433525" class="hover:text-brand-900 transition-colors">+94 72 743 3525</a>
                </div>
                <div class="flex items-center gap-3 text-dark-600">
                  <span class="text-accent-500">📍</span>
                  <span>Sri Lanka · Working with clients worldwide</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-dark-900 mb-3">Business Hours <span class="text-dark-400 text-xs font-normal">(Sri Lanka time, GMT+5:30)</span></h3>
              <div class="space-y-2 text-sm text-dark-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-dark-900 mb-3">Follow Us</h3>
              <div class="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/corescale-dev" target="_blank" rel="noopener noreferrer" aria-label="Corescale on LinkedIn" class="w-10 h-10 bg-dark-100 rounded-lg flex items-center justify-center text-dark-500 hover:text-white hover:bg-brand-900 transition-colors">
                  in
                </a>
                <a href="https://www.facebook.com/corescale.dev" target="_blank" rel="noopener noreferrer" aria-label="Corescale on Facebook" class="w-10 h-10 bg-dark-100 rounded-lg flex items-center justify-center text-dark-500 hover:text-white hover:bg-brand-900 transition-colors">
                  f
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Corescale',
  description: 'Get in touch with Corescale for enterprise web development, solution architecture, and custom AI agent projects.',
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
  website: '',
})

const submitted = ref(false)
const sending = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  if (sending.value) return
  sending.value = true
  errorMessage.value = ''
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    submitted.value = true
    form.name = ''
    form.email = ''
    form.company = ''
    form.service = ''
    form.message = ''
    form.website = ''
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Please email info@corescale.dev instead.'
  } finally {
    sending.value = false
  }
}
</script>
