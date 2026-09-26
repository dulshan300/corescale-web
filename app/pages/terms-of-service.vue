<template>
  <div>
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">Terms of Service</h1>
        <p class="text-dark-500 text-lg max-w-2xl">
          The simple ground rules for using our website and working with Corescale. Last updated: {{ updated }}.
        </p>
      </div>
    </section>

    <section class="section-padding pt-0 bg-white">
      <div class="container-custom max-w-3xl space-y-10">
        <div v-for="section in sections" :key="section.title">
          <h2 class="text-xl md:text-2xl font-bold mb-3 text-dark-900">{{ section.title }}</h2>
          <p v-for="text in section.paragraphs" :key="text" class="text-dark-500 leading-relaxed mb-3">{{ text }}</p>
          <ul v-if="section.items" class="list-disc pl-5 space-y-2 text-dark-500 leading-relaxed">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="bg-brand-50 border border-brand-100 rounded-2xl p-6">
          <h2 class="text-xl font-bold mb-2 text-dark-900">Questions about these terms?</h2>
          <p class="text-dark-500">
            Email us at
            <a href="mailto:info@corescale.dev" class="text-accent-600 hover:underline">info@corescale.dev</a>
            or visit our <NuxtLink to="/contact" class="text-accent-600 hover:underline">contact page</NuxtLink>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service | Corescale',
  description: 'The terms that apply when you use the Corescale website or work with us on web development, solution architecture, and custom AI agent projects.',
})

const updated = 'September 25, 2026'

const sections = [
  {
    title: 'About these terms',
    paragraphs: [
      'These terms apply to your use of corescale.dev and to general enquiries about our services. When we agree to work together, we will also sign a project agreement or accept a written proposal that sets out the details. If that agreement conflicts with these terms, the agreement wins.',
    ],
  },
  {
    title: 'Using our website',
    paragraphs: ['You agree to use this website lawfully and not to:'],
    items: [
      'Try to break into, disrupt, or overload the site or our systems.',
      'Send spam, malware, or misleading messages through our contact form.',
      'Copy or reuse our content or branding without our written permission.',
    ],
  },
  {
    title: 'Our services',
    paragraphs: [
      'We provide web application development, solution architecture and consulting, custom AI agents, and digital transformation. The scope, timeline, deliverables, and price of each project are agreed in writing before work starts. Anything outside that scope is quoted separately.',
    ],
  },
  {
    title: 'Quotes and payment',
    paragraphs: [
      'Quotes are estimates based on the information you give us, and remain valid for the period stated in the quote. Payment terms, including deposits and milestones, are set out in your agreement. Overdue invoices may pause work until they are paid.',
    ],
  },
  {
    title: 'What we need from you',
    paragraphs: [
      'To deliver on time, we rely on you to provide accurate information, timely feedback, and access to the systems and content we need. Delays on your side may move the project schedule.',
    ],
  },
  {
    title: 'Ownership of work',
    paragraphs: [
      'Once you have paid in full, you own the custom work we create for you, unless your agreement says otherwise. We keep ownership of our own tools, templates, and general know-how that existed before your project or that we develop independently, and we give you the right to use them as part of your solution. Open-source and third-party components stay under their own licenses.',
    ],
  },
  {
    title: 'Confidentiality',
    paragraphs: [
      'We keep your non-public business information confidential and use it only to deliver your project. You agree to do the same for any non-public information we share with you.',
    ],
  },
  {
    title: 'AI agents',
    paragraphs: [
      'AI agents can make mistakes. We design them with testing, limits, and human oversight, but you remain responsible for reviewing important decisions and outputs, and for the data you allow an agent to access. We will agree with you what each agent is allowed to do.',
    ],
  },
  {
    title: 'Work through other platforms',
    paragraphs: [
      'If we work together through a platform such as Fiverr or Upwork, that platform\'s own terms also apply to the engagement, including how payments and disputes are handled.',
    ],
  },
  {
    title: 'Warranties and limits of liability',
    paragraphs: [
      'We do our work with professional care, but we cannot promise that a website or software will be free of every error or always be available. To the fullest extent the law allows, Corescale is not liable for indirect or consequential losses, such as lost profits or lost data, and our total liability for any claim is limited to the amount you paid us for the work the claim relates to.',
    ],
  },
  {
    title: 'Ending our work together',
    paragraphs: [
      'Either of us can end a project by giving written notice, as set out in the agreement. You will pay for work completed up to that point, and we will hand over the completed work for which you have paid.',
    ],
  },
  {
    title: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of Sri Lanka. We will always try to resolve any disagreement through friendly discussion first.',
    ],
  },
  {
    title: 'Changes to these terms',
    paragraphs: [
      'We may update these terms from time to time. When we do, we will change the "Last updated" date at the top of this page. Continuing to use the site after a change means you accept the updated terms.',
    ],
  },
]
</script>
