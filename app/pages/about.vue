<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">About Corescale</h1>
        <p class="text-dark-500 text-lg max-w-2xl">
          We're a team of engineers and architects passionate about building technology that matters.
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="section-padding pt-0 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-dark-900">Our Mission</h2>
            <p class="text-dark-500 leading-relaxed mb-4">
              Corescale was founded with a clear mission: to help startups and growing businesses use technology to save time, cut busywork, and grow without adding extra headcount.
            </p>
            <p class="text-dark-500 leading-relaxed mb-4">
              We believe that great software starts with great architecture. By taking the time to understand your business, your users, and your technical constraints, we create solutions that are not just functional but genuinely make your team more productive.
            </p>
            <p class="text-dark-500 leading-relaxed">
              As a Pvt Ltd company, we are committed to long-term partnerships with our clients, delivering consistent quality and building systems that stand the test of time.
            </p>
          </div>
          <div class="space-y-6">
            <div v-for="value in values" :key="value.title" class="bg-brand-50 border border-brand-100 rounded-xl p-6">
              <h3 class="font-semibold text-dark-900 mb-2">{{ value.title }}</h3>
              <p class="text-dark-500 text-sm leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="relative overflow-hidden section-padding bg-brand-50 border-y border-brand-100">
      <ClientOnly><HeroNetwork /></ClientOnly>
      <div class="relative container-custom text-center">
        <h2 class="text-3xl font-bold mb-4 text-dark-900">Our Expertise</h2>
        <p class="text-dark-500 max-w-xl mx-auto mb-12">
          Deep technical knowledge across the full stack and across industries.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="expertise in expertiseList" :key="expertise.label" class="bg-white border border-dark-200 rounded-xl p-6">
            <div class="text-2xl font-bold text-accent-500 mb-1">
              {{ expertise.value }}+ <span class="text-sm font-medium text-dark-400">{{ expertise.unit }}</span>
            </div>
            <div class="text-dark-900 font-medium text-sm mb-1">{{ expertise.label }}</div>
            <div class="text-dark-400 text-xs">{{ expertise.detail }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global reach -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-10">
          <span class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3 block">Global Reach</span>
          <h2 class="text-3xl font-bold mb-4 text-dark-900">Clients Around the World</h2>
          <p class="text-dark-500 max-w-xl mx-auto">
            Based in Sri Lanka, we have worked with clients in 25+ countries across six continents.
          </p>
        </div>
        <div class="bg-brand-50 border border-brand-100 rounded-3xl p-4 sm:p-8">
          <WorldMap :countries="clientCountries" />
          <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs text-dark-700">
            <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-sm bg-brand-900"></span>Countries we have worked with</span>
            <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-accent-500"></span>Our home base</span>
          </div>
        </div>
        <ul class="flex flex-wrap justify-center gap-2 mt-8">
          <li
            v-for="country in clientCountries"
            :key="country.id"
            class="text-xs px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-dark-700"
          >
            {{ country.name }}
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4 text-dark-900">Let's Work Together</h2>
        <p class="text-dark-500 max-w-xl mx-auto mb-8">
          Have a project in mind? We'd love to hear about it.
        </p>
        <NuxtLink to="/contact" class="btn-primary">
          Contact Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About | Corescale',
  description: 'Learn about Corescale - our mission, values, and expertise in web development, solution architecture, and custom AI agents.',
})

const clientCountries = [
  { id: 'Australia', name: 'Australia' },
  { id: 'Austria', name: 'Austria' },
  { id: 'Belgium', name: 'Belgium' },
  { id: 'Costa Rica', name: 'Costa Rica' },
  { id: 'Ecuador', name: 'Ecuador' },
  { id: 'France', name: 'France' },
  { id: 'Germany', name: 'Germany' },
  { id: 'Ghana', name: 'Ghana' },
  { id: 'Greece', name: 'Greece' },
  { id: 'India', name: 'India' },
  { id: 'Indonesia', name: 'Indonesia' },
  { id: 'Ireland', name: 'Ireland' },
  { id: 'Kenya', name: 'Kenya' },
  { id: 'Malaysia', name: 'Malaysia' },
  { id: 'Morocco', name: 'Morocco' },
  { id: 'Netherlands', name: 'Netherlands' },
  { id: 'Nigeria', name: 'Nigeria' },
  { id: 'Norway', name: 'Norway' },
  { id: 'Pakistan', name: 'Pakistan' },
  { id: 'Panama', name: 'Panama' },
  { id: 'Philippines', name: 'Philippines' },
  { id: 'Portugal', name: 'Portugal' },
  { id: 'Somalia', name: 'Somalia' },
  { id: 'South Africa', name: 'South Africa' },
  { id: 'Spain', name: 'Spain' },
  { id: 'Trinidad and Tobago', name: 'Trinidad and Tobago' },
  { id: 'United Arab Emirates', name: 'United Arab Emirates' },
  { id: 'United Kingdom', name: 'United Kingdom' },
  { id: 'United States of America', name: 'United States' },
]

const values = [
  { title: 'Quality First', description: 'We never cut corners. Every line of code, every architecture decision, every deployment is done with care and attention to detail.' },
  { title: 'Transparency', description: 'We believe in open communication. You\'ll always know where your project stands, what we\'re working on, and why we\'re making certain decisions.' },
  { title: 'Long-Term Thinking', description: 'We build systems that last. Our solutions are designed to evolve with your business, not become technical debt.' },
]

const expertiseList = [
  { value: 70, unit: 'projects', label: 'Web Development', detail: 'Vue, Next.js, Laravel, FastAPI' },
  { value: 8, unit: 'projects', label: 'Custom AI Agents', detail: 'LLM integration, workflow automation' },
  { value: 15, unit: 'projects', label: 'Enterprise Systems', detail: 'ERP, CRM, Custom Platforms' },
]
</script>
