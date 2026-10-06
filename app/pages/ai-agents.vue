<template>
  <ServiceLanding
    eyebrow="Custom AI Agents"
    title="Custom AI Agents That Automate the Busywork"
    intro="We are an AI agency that builds custom AI agents for startups and growing businesses. They handle repetitive tasks such as data entry, reports, and customer queries, work with the tools you already use, and keep your team in control."
    illustration="ai"
    build-heading="What an AI agent can do for your business"
    build-intro="An AI agent is software that carries out tasks on your behalf, using AI to understand requests, make routine decisions, and work across your systems."
    :offerings="offerings"
    :sections="sections"
    pricing-heading="AI agent pricing, built for startup budgets"
    pricing-intro="Begin with one well-defined task and expand once you see the results. Typical project ranges are below."
    :tiers="tiers"
    :faqs="faqs"
    :related="related"
    cta-heading="Ready to Automate Your Busywork?"
    cta-text="Tell us which tasks take up your team's time. We will tell you honestly whether an AI agent is the right fit, and what it would cost."
  />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'AI Agency: Custom AI Agent Development | Corescale',
  description: 'Corescale is an AI agency building custom AI agents that automate data entry, reports, and customer support. Startup-friendly pricing from $1,000.',
  ogTitle: 'AI Agency: Custom AI Agent Development | Corescale',
  ogDescription: 'Custom AI agents that automate repetitive work for startups and growing businesses. Projects from $1,000.',
})

const offerings = [
  { title: 'Customer support agents', description: 'Answer common questions on your website or chat 24/7, and hand over to your team when a human is needed.' },
  { title: 'Data entry & document processing', description: 'Read emails, invoices, and forms, then enter the data into your systems accurately.' },
  { title: 'Reporting agents', description: 'Collect figures from different tools and prepare summaries and reports automatically.' },
  { title: 'Sales & lead agents', description: 'Qualify leads, draft follow-ups, and update your CRM so nothing slips through.' },
  { title: 'Internal knowledge assistants', description: 'Let your team ask questions and get answers from your own documents and data.' },
  { title: 'Workflow automation', description: 'Connect several steps and systems into one process that runs on its own with human review where it counts.' },
]

const sections = [
  {
    heading: 'What is an AI agent?',
    paragraphs: [
      'An AI agent is software that can carry out a task for you. Unlike a simple chatbot that only answers questions, an agent can take actions: look up a record, update a system, send a message, or prepare a report, following rules you set.',
      'Agents work with the systems you already use, run around the clock, and escalate to your people when a decision matters.',
    ],
  },
  {
    heading: 'How we build agents you can trust',
    paragraphs: [
      'We build on leading AI models and tools such as OpenAI, Anthropic, and LangChain, and connect them to your CRM, ERP, databases, and APIs. We choose the approach that fits the task, not the one that sounds most impressive.',
    ],
    points: [
      'Human-in-the-loop review for important decisions',
      'Monitoring and logging so you can see what the agent did',
      'Clear limits on what the agent can and cannot access',
      'Integrations with your existing tools, so there is no need to start over',
      'Built into your web app or website when you need it, as we also build custom web apps',
    ],
  },
  {
    heading: 'Custom AI agent or off-the-shelf tool?',
    paragraphs: [
      'Ready-made AI tools work well for general tasks. A custom agent is worth it when the work depends on your data, your rules, and your systems. We will tell you honestly if an off-the-shelf tool is enough for your case.',
    ],
  },
]

const tiers = [
  {
    name: 'Starter Agent',
    price: '$1,000',
    description: 'A focused AI agent designed to handle one clearly defined task, such as answering questions, searching documents, or assisting with a specific workflow.',
    includes: [
      'One task and one primary channel',
      'Grounded in your content or knowledge base',
      'Basic conversation and response handling',
      'Basic monitoring and usage tracking',
      'Production launch and handover',
    ],
  },
  {
    name: 'Workflow Agent',
    price: '$3,000',
    description: 'An AI agent connected to your business tools to automate a real workflow from start to finish, with appropriate rules and human oversight.',
    includes: [
      'Integrations with 1–3 business systems',
      'Custom business rules and workflow logic',
      'Human approval and review steps',
      'Knowledge retrieval and contextual responses',
      'Error handling and workflow testing',
      'Production launch and team training',
    ],
  },
  {
    name: 'Multi-Agent System',
    price: '$8,000',
    description: 'A coordinated AI system where multiple specialized agents work together across business functions, systems, and workflows.',
    includes: [
      'Multiple specialized AI agents',
      'ERP, CRM, API, and third-party integrations',
      'Agent-to-agent workflows and orchestration',
      'Dashboards, activity tracking, and audit logs',
      'Architecture and security planning up front',
      'Production deployment and testing',
      'Ongoing support and optimization available',
    ],
  },
]

const faqs = [
  {
    question: 'How much does a custom AI agent cost?',
    answer: 'A simple, focused AI agent typically starts from about $1,000. An agent that automates a full workflow across your tools usually starts from about $3,000, and larger multi-agent systems from about $8,000. These are starting points and we are happy to discuss scope and budget. Running costs, such as AI model usage, depend on volume and are usually modest, and we explain them in the quote.',
  },
  {
    question: 'Can I create my own AI agent?',
    answer: 'Yes, simple agents can be built with no-code tools. A custom build makes sense when you need the agent to use your private data, connect to your own systems, follow strict rules, or run reliably at scale. We can also start with a small pilot so you can see value quickly.',
  },
  {
    question: 'How is an AI agent different from a chatbot?',
    answer: 'A chatbot mainly answers questions. An AI agent can also take actions, such as updating a record, sorting emails, or preparing a report, across your systems, and it can follow multi-step processes.',
  },
  {
    question: 'Can you add an AI agent to my existing website or web app?',
    answer: 'Yes. We regularly add agents to existing websites and web apps, and connect them to systems such as ERP, CRM, databases, and APIs. We also build the web app itself when you need one.',
  },
  {
    question: 'Is it safe to give an AI agent access to my business data?',
    answer: 'We limit what each agent can access, log what it does, and add human review for important decisions. We also agree with you how your data is handled, as set out in our Privacy Policy and Terms of Service.',
  },
  {
    question: 'How long does it take to build an AI agent?',
    answer: 'A focused starter agent can often be ready in 1 to 3 weeks. Workflow agents usually take 4 to 8 weeks, depending on the number of systems involved. You get a timeline in the written quote.',
  },
  {
    question: 'Do you only work with startups?',
    answer: 'No. We work with startups and growing businesses of all sizes, in more than 25 countries.',
  },
]

const related = [
  { to: '/custom-web-development', label: 'Custom Web Development' },
  { to: '/services', label: 'All services' },
  { to: '/contact', label: 'Contact us' },
]
</script>
