<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">Our Services</h1>
        <p class="text-dark-500 text-lg max-w-2xl">
          Comprehensive technology solutions tailored to your enterprise needs.
        </p>
      </div>
    </section>

    <!-- Services List -->
    <section class="section-padding pt-0 bg-white">
      <div class="container-custom space-y-16">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
        >
          <div :class="{ 'lg:order-2': index % 2 === 1 }">
            <div class="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-3 py-1 mb-4">
              <span class="text-accent-600 text-xs font-medium">{{ service.tag }}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-dark-900">{{ service.title }}</h2>
            <p class="text-dark-500 mb-6 leading-relaxed">{{ service.description }}</p>
            <ul class="space-y-3">
              <li v-for="item in service.features" :key="item" class="flex items-center gap-2 text-sm text-dark-600">
                <svg class="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
          <div :class="{ 'lg:order-1': index % 2 === 1 }" class="bg-dark-50 border border-dark-200 rounded-2xl p-8 h-64 flex items-center justify-center">
            <span class="text-6xl">{{ service.icon }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-brand-900">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
        <p class="text-brand-200 max-w-xl mx-auto mb-8">
          Every business is unique. Let's discuss how we can tailor our services to meet your specific requirements.
        </p>
        <NuxtLink to="/contact" class="btn-primary">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Services | Corescale',
  description: 'Enterprise web development, solution architecture, cloud infrastructure, and digital transformation services by Corescale.',
})

const services = [
  {
    icon: '⚡',
    tag: 'Development',
    title: 'Web Application Development',
    description: 'We build custom web applications using modern frameworks and best practices. From single-page applications to complex enterprise systems, our development team delivers solutions that perform at scale.',
    features: [
      'Custom React, Vue, and Next.js applications',
      'RESTful and GraphQL API development',
      'Progressive Web Apps (PWA)',
      'Microservices architecture',
      'Performance optimization',
    ],
  },
  {
    icon: '🏗️',
    tag: 'Architecture',
    title: 'Solution Architecture & Consulting',
    description: 'Our architects work closely with your team to design technology solutions that align with your business goals. We create detailed technical blueprints that guide implementation and ensure long-term success.',
    features: [
      'Enterprise architecture design',
      'Technical strategy & roadmapping',
      'System integration planning',
      'Technology stack evaluation',
      'Code review & architecture audits',
    ],
  },
  {
    icon: '🤖',
    tag: 'Automation',
    title: 'Custom AI Agents',
    description: 'We design and build intelligent AI agents tailored to your corporate processes. From automating repetitive back-office tasks to orchestrating multi-step operational workflows, our agents integrate seamlessly with your existing systems to boost efficiency and cut costs.',
    features: [
      'Custom AI agent design & development',
      'Corporate workflow & process automation',
      'LLM integration & orchestration',
      'Enterprise system integrations (CRM, ERP, APIs)',
      'Human-in-the-loop oversight & monitoring',
    ],
  },
  {
    icon: '🔒',
    tag: 'Security',
    title: 'Security & Compliance',
    description: 'Security is not an afterthought. We integrate security practices throughout the development lifecycle and help you meet compliance requirements for your industry.',
    features: [
      'Security architecture review',
      'Penetration testing',
      'SOC 2 & GDPR compliance',
      'Authentication & authorization systems',
      'Secure coding practices',
    ],
  },
  {
    icon: '📱',
    tag: 'Digital',
    title: 'Digital Transformation',
    description: 'Modernize your legacy systems and processes with our digital transformation services. We help enterprises embrace new technologies to stay competitive.',
    features: [
      'Legacy system modernization',
      'Process automation',
      'Data migration & integration',
      'API-first strategy',
      'Digital experience platforms',
    ],
  },
]
</script>
