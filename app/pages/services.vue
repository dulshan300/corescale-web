<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">Web Development &amp; AI Agent Services</h1>
        <p class="text-dark-500 text-lg max-w-2xl">
          Practical technology that helps startups and growing businesses save time and get more done.
        </p>
      </div>
    </section>

    <!-- Services List -->
    <section class="section-padding pt-0 bg-white">
      <div class="container-custom space-y-16">
        <div
          v-for="(service, index) in services"
          :id="service.slug"
          :key="service.title"
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-28"
          :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
        >
          <div :class="{ 'lg:order-2': index % 2 === 1 }">
            <div class="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-3 py-1 mb-4">
              <span class="text-accent-700 text-xs font-medium">{{ service.tag }}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold mb-2 text-dark-900">{{ service.title }}</h2>
            <p class="text-accent-700 font-medium mb-4">{{ service.pain }}</p>
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
          <div :class="{ 'lg:order-1': index % 2 === 1 }" class="bg-gradient-to-br from-brand-50 to-accent-50 border border-brand-100 rounded-2xl p-4 sm:p-6 flex items-center justify-center">
            <ServiceIllustration :name="service.illustration" class="w-full max-w-md h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding bg-brand-50 border-y border-brand-100">
      <div class="container-custom max-w-3xl">
        <div class="text-center mb-12">
          <span class="text-accent-700 text-sm font-medium tracking-wide uppercase mb-3 block">FAQ</span>
          <h2 class="text-3xl font-bold mb-4 text-dark-900">Frequently Asked Questions</h2>
          <p class="text-dark-500">Quick answers to what clients ask us most.</p>
        </div>
        <div class="space-y-3">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group bg-white border border-dark-200 rounded-xl px-6 py-4 open:border-accent-500/40"
          >
            <summary class="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-dark-900">
              {{ faq.question }}
              <svg class="w-5 h-5 text-accent-500 flex-shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <p class="text-dark-500 leading-relaxed mt-3">{{ faq.answer }}</p>
          </details>
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
  title: 'Web Development & AI Agent Services | Corescale',
  description: 'Web app development, solution architecture, custom AI agents, and digital transformation that help startups and growing businesses save time.',
})

const faqs = [
  {
    question: 'What services does Corescale offer?',
    answer: 'We build web applications, plan solution architecture, create custom AI agents that automate business work, and modernize old systems through digital transformation.',
  },
  {
    question: 'What is a custom AI agent, and how can it help my business?',
    answer: 'An AI agent is software that can carry out routine tasks for your team, such as entering data, preparing reports, sorting emails, or answering common customer questions. It works with the systems you already use and can run around the clock, while your people review the important decisions.',
  },
  {
    question: 'Which technologies do you use?',
    answer: 'For websites and apps we mainly use Vue, Next.js, Laravel (PHP), FastAPI (Python), and Node.js. For AI agents we work with leading AI models and tools such as OpenAI, Anthropic, and LangChain. We choose what fits your project, not what is fashionable.',
  },
  {
    question: 'How much does a project cost, and how long does it take?',
    answer: 'It depends on what you need. After we understand your goals, we send a written quote with a clear scope and timeline before any work begins. Anything outside that scope is quoted separately, so there are no surprise bills.',
  },
  {
    question: 'Can you work with the systems we already have?',
    answer: 'Yes. We regularly connect new tools and AI agents to existing systems such as ERP, CRM, databases, and APIs, so you do not have to start from scratch.',
  },
  {
    question: 'Do you work with clients outside Sri Lanka?',
    answer: 'Yes. We work with clients around the world, including through platforms like Fiverr and Upwork. We communicate by email, chat, and video call, and our working hours are Sri Lanka time (GMT+5:30).',
  },
  {
    question: 'Will I own the code and the finished product?',
    answer: 'Yes. Once you have paid in full, you own the custom work we create for you, unless your agreement says otherwise. You can read the details in our Terms of Service.',
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes. We stay with you after launch to fix issues, keep things running smoothly, and improve results over time.',
  },
  {
    question: 'How do I get started?',
    answer: 'Send us a message through our contact page or email info@corescale.dev. Tell us briefly what you need, and we will reply to arrange a conversation.',
  },
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }),
    },
  ],
})

const services = [
  {
    slug: 'web-development',
    illustration: 'web' as const,
    tag: 'Development',
    title: 'Web Application Development',
    pain: 'Is your software slow, hard to change, or a poor fit for how you work?',
    description: 'We build fast, reliable web applications around your real processes. Your customers get a smooth experience, your team gets tools that help instead of get in the way, and the system keeps working as you grow.',
    features: [
      'Custom React, Vue, and Next.js front ends',
      'Backend systems in Laravel (PHP), FastAPI (Python), and Node.js',
      'RESTful and GraphQL API development',
      'Progressive Web Apps (PWA)',
      'Microservices architecture',
      'Performance optimization',
    ],
  },
  {
    slug: 'solution-architecture',
    illustration: 'architecture' as const,
    tag: 'Architecture',
    title: 'Solution Architecture & Consulting',
    pain: 'Not sure what to build, or worried about expensive mistakes?',
    description: 'We work with your team to turn your goals into a clear, practical plan. You get a simple blueprint, the right technology choices, and a roadmap that saves you from costly rework later.',
    features: [
      'System architecture design',
      'Technical strategy & roadmapping',
      'System integration planning',
      'Technology stack evaluation',
      'Code review & architecture audits',
    ],
  },
  {
    slug: 'ai-agents',
    illustration: 'ai' as const,
    tag: 'Automation',
    title: 'Custom AI Agents',
    pain: 'Is your team losing hours every week to repetitive admin work?',
    description: 'We build AI agents that take over routine tasks like data entry, report preparation, and customer queries. They work with the systems you already use, run around the clock, and free your people for higher-value work.',
    features: [
      'Custom AI agent design & development',
      'Business workflow & process automation',
      'LLM integration & orchestration',
      'Integrations with your tools (CRM, ERP, APIs)',
      'Human-in-the-loop oversight & monitoring',
    ],
  },
  {
    slug: 'digital-transformation',
    illustration: 'transformation' as const,
    tag: 'Digital',
    title: 'Digital Transformation',
    pain: 'Stuck with old systems, spreadsheets, and manual processes?',
    description: 'We move your business from outdated tools to modern, connected systems step by step, without stopping day-to-day operations, so you work faster and keep up with competitors.',
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
