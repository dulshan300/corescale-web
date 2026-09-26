<template>
  <div>
    <section class="bg-gradient-to-b from-brand-50 to-white section-padding pt-32 pb-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-900">Privacy Policy</h1>
        <p class="text-dark-500 text-lg max-w-2xl">
          How Corescale collects, uses, and protects your information. Last updated: {{ updated }}.
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
          <h2 class="text-xl font-bold mb-2 text-dark-900">Questions about your privacy?</h2>
          <p class="text-dark-500">
            Email us at
            <a href="mailto:info@corescale.dev" class="text-accent-700 hover:underline">info@corescale.dev</a>
            or visit our <NuxtLink to="/contact" class="text-accent-700 hover:underline">contact page</NuxtLink>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | Corescale',
  description: 'Read how Corescale collects, uses, and protects the personal information you share when you contact us or use our website.',
})

const updated = 'September 25, 2026'

const sections = [
  {
    title: 'Who we are',
    paragraphs: [
      'Corescale Pvt Ltd ("Corescale", "we", "us") is a technology company based in Sri Lanka. We build web applications, provide solution architecture, and create custom AI agents for businesses. This policy explains how we handle personal information on corescale.dev.',
    ],
  },
  {
    title: 'Information we collect',
    paragraphs: ['We only collect what we need to respond to you and run our business.'],
    items: [
      'Details you give us: your name, email address, company name, the service you are interested in, and the message you write in our contact form or send by email or phone.',
      'Basic technical data: information your browser shares automatically, such as device type, browser, pages visited, and approximate location, which helps us keep the site secure and working well.',
      'Website usage data: if you accept analytics cookies, we use Google Analytics to see, in aggregate, how visitors find and use our site, such as which pages are popular and which countries visitors come from. This data is used only to improve our website. If you decline, we do not load Google Analytics at all.',
    ],
  },
  {
    title: 'How we use your information',
    paragraphs: ['We use your information to:'],
    items: [
      'Reply to your enquiries and prepare proposals or quotes.',
      'Deliver, support, and improve our services and this website.',
      'Keep our website and systems secure and prevent misuse.',
      'Meet our legal and accounting obligations.',
    ],
  },
  {
    title: 'What we do not do',
    paragraphs: [
      'We do not sell your personal information. We do not use the messages you send us to train AI models. We only send you marketing emails if you have asked for them, and you can opt out at any time.',
    ],
  },
  {
    title: 'Sharing your information',
    paragraphs: [
      'We share information only with trusted service providers who help us run our business, such as Resend (which delivers the emails sent through our contact form), Netlify (website hosting), and Google Analytics (website usage statistics), and only as needed for them to do their job. We may also share information if the law requires it. If we work with you through a platform such as Fiverr or Upwork, that platform\'s own privacy policy applies to the information you give it.',
    ],
  },
  {
    title: 'Client project data',
    paragraphs: [
      'When we build something for you, we may handle your business data. We treat it as confidential, use it only to deliver your project, and handle it under the terms of our agreement with you. If we build an AI agent for you, we will agree with you which systems and data it can access.',
    ],
  },
  {
    title: 'How long we keep information',
    paragraphs: [
      'We keep enquiry details for as long as needed to respond to you and follow up, and project records for as long as needed for our work with you and for legal and accounting purposes. After that, we delete or anonymize them.',
    ],
  },
  {
    title: 'Keeping your information safe',
    paragraphs: [
      'We use reasonable technical and organizational measures to protect your information, including secure connections and limited access. No system is completely secure, but we work to reduce risk and will act quickly if something goes wrong.',
    ],
  },
  {
    title: 'Your rights',
    paragraphs: [
      'Under Sri Lanka\'s Personal Data Protection Act and similar laws that may apply to you, you can ask to see the personal information we hold about you, correct it, or ask us to delete it. To make a request, email info@corescale.dev. We may need to confirm your identity first.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Our website only sets cookies if you accept them. The only optional cookies we use are Google Analytics cookies, which help us understand how visitors use the site and do not identify you by name. When you first visit, you can accept or decline them, and we remember your choice on your device.',
      'You can change your mind at any time using "Cookie Settings" in the footer, or by clearing cookies in your browser settings. The site works the same either way.',
    ],
  },
  {
    title: 'Links to other websites',
    paragraphs: [
      'Our site links to other websites, such as LinkedIn and Facebook. We are not responsible for their privacy practices, so please read their policies.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. When we do, we will change the "Last updated" date at the top of this page.',
    ],
  },
]
</script>
