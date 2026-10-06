<template>
  <ServiceLanding
    eyebrow="Custom Web Development"
    title="Custom Web Development for Startups & Growing Businesses"
    intro="We design and build custom web applications and websites around the way your business actually works: fast, reliable, and ready to grow with you. No templates, no bloat, and a clear written quote before we start."
    illustration="web"
    build-heading="What we build"
    build-intro="From a first version that gets your idea in front of customers to internal systems that replace spreadsheets, we build the web software your business needs."
    :offerings="offerings"
    :sections="sections"
    pricing-heading="Pricing that suits startup budgets"
    pricing-intro="Start small, prove the idea, and expand when you are ready. Here is what projects typically look like."
    :tiers="tiers"
    :faqs="faqs"
    :related="related"
    cta-heading="Have a Web Project in Mind?"
    cta-text="Tell us what you need and we will reply with honest advice and a written quote. If the budget is tight, tell us. We can usually find a smart way to start."
  />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Custom Web Development Company | Corescale',
  description: 'Custom web app and website development for startups and growing businesses. Laravel, Vue, Next.js, and FastAPI. Projects from $1,500, with a written quote up front.',
  ogTitle: 'Custom Web Development Company | Corescale',
  ogDescription: 'Custom web apps and websites built around your business. Startup-friendly pricing from $1,500.',
})

const offerings = [
  { title: 'Custom web applications', description: 'Customer portals, dashboards, booking systems, marketplaces, and SaaS products built to your exact process.' },
  { title: 'Business websites', description: 'Fast, search-friendly company websites with a content system your team can update without a developer.' },
  { title: 'Internal tools & admin systems', description: 'Replace spreadsheets and manual processes with systems your team will actually enjoy using.' },
  { title: 'MVPs for startups', description: 'A focused first version, built quickly, so you can test your idea with real users before investing more.' },
  { title: 'APIs & integrations', description: 'Connect your app to payment gateways, CRMs, ERPs, and other tools through clean REST or GraphQL APIs.' },
  { title: 'Upgrades & rescue work', description: 'Slow, buggy, or outdated software? We review it, fix what matters, and modernize it step by step.' },
]

const sections = [
  {
    heading: 'Why custom instead of a template or no-code tool',
    paragraphs: [
      'Templates and no-code tools are great for getting started. But once your process is specific, they start to get in the way: workarounds pile up, monthly fees grow, and you cannot change the things that matter.',
      'Custom development gives you software that fits your business, which you own, and which can change as you do.',
    ],
  },
  {
    heading: 'Our technology: Laravel, Vue, Next.js, FastAPI',
    paragraphs: [
      'We choose the right tool for the job rather than the fashionable one. Laravel (PHP) is one of our core frameworks. It is mature, fast to build with, and well suited to business applications, dashboards, and APIs, which keeps cost and delivery time down.',
      'For modern interfaces we use Vue and Next.js, and for data-heavy or AI-connected backends we use FastAPI (Python) or Node.js.',
    ],
    points: [
      'Laravel (PHP) for business apps, admin systems, and APIs',
      'Vue.js, React, and Next.js for fast, modern front ends',
      'FastAPI (Python) and Node.js for APIs and AI-connected systems',
      'PostgreSQL and MongoDB for data',
      'Docker-based deployment for reliable releases',
    ],
  },
  {
    heading: 'How a project works',
    paragraphs: [
      'We start by listening to your goals, problems, and budget. You then get a written scope, timeline, and quote before any work begins. We build in small stages and show you progress along the way, then test, launch, and stay with you after go-live to fix issues and improve results.',
    ],
  },
]

const tiers = [
  {
    name: 'Starter',
    price: '$1,500',
    description: 'A professional business website or focused web application designed to launch an idea, establish your online presence, or validate a new concept.',
    includes: [
      'Up to ~5 pages or 1 focused core feature',
      'Custom responsive design',
      'Technical SEO fundamentals',
      'Contact forms and simple admin functionality',
      'Production deployment',
      'Launch and handover',
    ],
  },
  {
    name: 'Growth',
    price: '$4,000',
    description: 'A custom web application or MVP built around your business processes, customers, and data.',
    includes: [
      'User accounts and role-based access',
      'Custom workflows and dashboards',
      'Database-backed functionality',
      'Payment and third-party integrations',
      'Testing and production deployment',
      'Documentation and team training',
    ],
  },
  {
    name: 'Platform',
    price: '$10,000',
    description: 'A larger custom software platform designed for complex workflows, multiple systems, integrations, and future growth.',
    includes: [
      'Multi-role, multi-module systems',
      'ERP, CRM, and third-party integrations',
      'Custom APIs and system integrations',
      'Architecture and technical planning',
      'Scalable cloud infrastructure',
      'Ongoing support and development available',
    ],
  },
]

const faqs = [
  {
    question: 'How much does custom web development cost?',
    answer: 'Small websites and focused web apps typically start from about $1,500. Working MVPs and business applications usually start from about $4,000, and larger platforms from about $10,000. These are starting points, and we are happy to discuss scope and budget. You always get a written quote before any work begins.',
  },
  {
    question: 'Do you work with startups on small budgets?',
    answer: 'Yes. Many of our clients are startups. We often suggest starting with a focused first version and adding features in stages, so you spend on what proves its value first.',
  },
  {
    question: 'Do you build with Laravel?',
    answer: 'Yes. Laravel (PHP) is one of our core frameworks and a good fit for business applications, admin systems, and APIs. We also build with Vue, Next.js, FastAPI (Python), and Node.js, and we recommend whichever suits your project best.',
  },
  {
    question: 'How long does a project take?',
    answer: 'A business website or small app often takes 2 to 4 weeks. An MVP or business application usually takes 6 to 12 weeks. We give you a clear timeline in the written quote.',
  },
  {
    question: 'Will I own the code?',
    answer: 'Yes. Once you have paid in full, you own the custom work we create for you, unless your agreement says otherwise. Details are in our Terms of Service.',
  },
  {
    question: 'Can you improve or take over an existing web application?',
    answer: 'Yes. We can review your current system, fix performance and security issues, and continue development, or modernize it gradually without stopping your business.',
  },
  {
    question: 'Can you add an AI agent to my web app?',
    answer: 'Yes. We build custom AI agents that connect to web apps and existing systems to automate routine work such as data entry, reports, and customer queries.',
  },
]

const related = [
  { to: '/ai-agents', label: 'Custom AI Agents' },
  { to: '/services', label: 'All services' },
  { to: '/about', label: 'About Corescale' },
]
</script>
