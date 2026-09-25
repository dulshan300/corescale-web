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
              Corescale was founded with a clear mission: to help enterprises navigate the complexity of modern technology and build solutions that drive real business outcomes.
            </p>
            <p class="text-dark-500 leading-relaxed mb-4">
              We believe that great software starts with great architecture. By taking the time to understand your business, your users, and your technical constraints, we create solutions that are not just functional but truly transformative.
            </p>
            <p class="text-dark-500 leading-relaxed">
              As a Pvt Ltd company, we are committed to long-term partnerships with our clients, delivering consistent quality and building systems that stand the test of time.
            </p>
          </div>
          <div class="space-y-6">
            <div v-for="value in values" :key="value.title" class="bg-dark-50 border border-dark-200 rounded-xl p-6">
              <h3 class="font-semibold text-dark-900 mb-2">{{ value.title }}</h3>
              <p class="text-dark-500 text-sm leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section-padding bg-dark-50 border-y border-dark-200">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4 text-dark-900">Our Expertise</h2>
        <p class="text-dark-500 max-w-xl mx-auto mb-12">
          Deep technical knowledge across the full stack and across industries.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="expertise in expertiseList" :key="expertise.label" class="bg-white border border-dark-200 rounded-xl p-6">
            <div class="text-2xl font-bold text-accent-500 mb-1">{{ expertise.years }}+</div>
            <div class="text-dark-900 font-medium text-sm mb-1">{{ expertise.label }}</div>
            <div class="text-dark-400 text-xs">{{ expertise.detail }}</div>
          </div>
        </div>
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
  description: 'Learn about Corescale - our mission, values, and expertise in enterprise web development and solution architecture.',
})

const values = [
  { title: 'Quality First', description: 'We never cut corners. Every line of code, every architecture decision, every deployment is done with care and attention to detail.' },
  { title: 'Transparency', description: 'We believe in open communication. You\'ll always know where your project stands, what we\'re working on, and why we\'re making certain decisions.' },
  { title: 'Long-Term Thinking', description: 'We build systems that last. Our solutions are designed to evolve with your business, not become technical debt.' },
]

const expertiseList = [
  { years: 10, label: 'Web Development', detail: 'React, Vue, Next.js, Node.js' },
  { years: 8, label: 'Cloud Architecture', detail: 'AWS, Azure, GCP' },
  { years: 12, label: 'Enterprise Systems', detail: 'ERP, CRM, Custom Platforms' },
  { years: 6, label: 'DevOps & SRE', detail: 'CI/CD, Monitoring, Automation' },
]
</script>
