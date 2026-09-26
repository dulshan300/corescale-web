<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-500/5 via-transparent to-transparent"></div>
      <ClientOnly><HeroNetwork /></ClientOnly>
      <div class="relative section-padding pt-32 pb-24">
        <div class="container-custom text-center">
          <div class="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-4 py-1.5 mb-8">
            <span class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            <span class="text-accent-600 text-xs font-medium tracking-wide uppercase">For Startups &amp; Growing Businesses</span>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-dark-900">
            Automate the Busywork.<br />
            <span class="text-gradient">Grow Faster.</span>
          </h1>
          <p class="text-dark-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Custom web apps and AI agents that give startups and growing businesses their time back.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/services" class="btn-primary text-base">
              Explore Services
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary text-base">
              Schedule a Consultation
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="border-y border-dark-200 bg-white">
      <div class="container-custom grid grid-cols-2 md:grid-cols-4 divide-x divide-dark-200">
        <div v-for="stat in stats" :key="stat.label" class="px-6 py-12 text-center group">
          <div class="text-3xl md:text-4xl font-bold text-brand-900 mb-2 group-hover:text-accent-500 transition-colors">{{ stat.value }}</div>
          <div class="text-dark-500 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Platforms -->
    <section class="bg-white py-10 border-b border-dark-200">
      <div class="container-custom px-6 text-center">
        <p class="text-dark-400 text-xs font-medium tracking-wide uppercase mb-5">Experience working with international companies</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <span
            v-for="platform in platforms"
            :key="platform.name"
            class="flex items-center gap-2.5 px-6 h-14 bg-brand-50 border border-brand-100 rounded-lg text-brand-900 hover:text-accent-500 hover:border-accent-500/30 transition-colors"
          >
            <svg :viewBox="platform.viewBox" :class="platform.class" fill="currentColor" role="img" :aria-label="platform.name">
              <path :d="platform.path" />
            </svg>
            <span v-if="platform.showName" class="font-semibold text-lg tracking-tight">{{ platform.name }}</span>
            <span v-if="platform.note" class="text-dark-500 text-sm border-l border-dark-200 pl-2.5">{{ platform.note }}</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding bg-brand-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3 block">What We Do</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-dark-900">Solutions That Save You Time</h2>
          <p class="text-dark-500 max-w-xl mx-auto">
            Practical technology that removes busywork and helps your business grow without adding headcount.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="group relative bg-white border border-dark-200 rounded-2xl p-8 hover:border-accent-500/30 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-300"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-brand-900 to-accent-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-accent-500/20 group-hover:scale-105 transition-transform">
              <component :is="service.icon" class="w-7 h-7" :stroke-width="1.75" />
            </div>
            <p class="text-accent-600 text-sm font-medium mb-2">{{ service.pain }}</p>
            <h3 class="text-xl font-semibold mb-3 text-dark-900">{{ service.title }}</h3>
            <p class="text-dark-500 text-sm leading-relaxed">{{ service.description }}</p>
            <div class="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg class="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/services" class="btn-secondary inline-flex items-center gap-2">
            View All Services
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3 block">How We Work</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-dark-900">From First Call to Launch in 5 Simple Steps</h2>
          <p class="text-dark-500 max-w-xl mx-auto">
            You always know what happens next, what it costs, and who is doing the work.
          </p>
        </div>
        <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <li
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative bg-brand-50 border border-brand-100 rounded-2xl p-6"
          >
            <div class="w-10 h-10 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="font-semibold text-dark-900 mb-2">{{ step.title }}</h3>
            <p class="text-dark-500 text-sm leading-relaxed">{{ step.description }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding bg-brand-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3 block">Why Corescale</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-dark-900">Why Growing Teams Choose Us</h2>
            <p class="text-dark-500 mb-8 leading-relaxed">
              We pair strong technical skills with a practical business mindset. You get a small, responsive team that keeps things simple, respects your budget, and builds systems that grow with you.
            </p>
            <div class="space-y-5">
              <div v-for="point in points" :key="point.title" class="flex items-start gap-4">
                <div class="w-8 h-8 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-900 mb-1">{{ point.title }}</h4>
                  <p class="text-dark-500 text-sm">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-accent-500/5 rounded-3xl blur-3xl"></div>
            <div class="relative bg-white border border-dark-200 rounded-2xl p-8">
              <h3 class="text-sm font-medium text-dark-400 mb-6 uppercase tracking-wide">Tech Stack</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="tech in technologies" :key="tech.name" class="flex items-center gap-3 bg-brand-50 rounded-xl p-3 border border-brand-100">
                  <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-brand-600 font-mono text-sm font-medium">{{ tech.abbr }}</span>
                  </div>
                  <div>
                    <h4 class="font-medium text-dark-900 text-sm">{{ tech.name }}</h4>
                    <p class="text-dark-400 text-xs">{{ tech.category }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative overflow-hidden bg-brand-900">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-500/20 via-transparent to-transparent"></div>
      <ClientOnly><HeroNetwork dark /></ClientOnly>
      <div class="relative section-padding">
        <div class="container-custom text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Save Time and Grow Faster?</h2>
          <p class="text-brand-200 max-w-xl mx-auto mb-10">
            Tell us where your team loses time each week. We'll show you what can be automated or built to fix it.
          </p>
          <NuxtLink to="/contact" class="btn-primary text-base inline-flex items-center gap-2">
            Start a Conversation
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Code2, Network, Bot } from 'lucide-vue-next'

useSeoMeta({
  title: 'Corescale | Web Development, Solution Architecture & AI Agents',
  description: 'Corescale builds custom web apps and AI agents that automate repetitive work, helping startups and growing businesses boost productivity.',
})

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '180+', label: 'Projects Delivered' },
  { value: '10+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
]

const platforms = [
  {
    name: 'Fiverr',
    viewBox: '0 8 24 8',
    class: 'h-6 w-[72px]',
    showName: false,
    note: '130+ projects completed',
    path: 'M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z',
  },
  {
    name: 'Upwork',
    viewBox: '0 0 24 24',
    class: 'h-7 w-7',
    showName: true,
    note: '50+ projects completed',
    path: 'M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z',
  },
]

const services = [
  {
    icon: Code2,
    pain: 'Software that is slow or hard to change?',
    title: 'Web Development That Fits Your Business',
    description: 'We build fast, reliable web platforms around the way you work, so customers get a smooth experience and your team stops fighting its tools.',
  },
  {
    icon: Network,
    pain: 'Unsure what to build, or afraid of costly mistakes?',
    title: 'A Clear Plan Before You Build',
    description: 'We turn your goals into a simple, proven blueprint, so you invest once, avoid rework, and can grow with confidence.',
  },
  {
    icon: Bot,
    pain: 'Your team loses hours to repetitive admin work?',
    title: 'Automate the Busywork with AI Agents',
    description: 'Custom AI agents handle routine tasks like data entry, reports, and customer queries, so your people can focus on work that grows the business.',
  },
]

const steps = [
  { title: 'Discovery', description: 'We listen to your goals, problems, and budget, and ask the right questions.' },
  { title: 'Plan', description: 'You get a clear scope, timeline, and quote in writing before any work begins.' },
  { title: 'Build', description: 'We build in small stages and show you progress, so there are no surprises.' },
  { title: 'Launch', description: 'We test everything, then take your solution live and train your team.' },
  { title: 'Support', description: 'We stay with you after launch to fix issues and improve results.' },
]

const points = [
  { title: 'Architecture-First Approach', description: 'We design systems that scale with your business needs.' },
  { title: 'Full-Stack Expertise', description: 'From the screen your customers see to the systems behind it, we handle the whole stack.' },
  { title: 'Clear Communication', description: 'Regular updates in plain language, so you always know where your project stands.' },
  { title: 'Ongoing Partnership', description: 'We provide continued support and optimization after launch.' },
]

const technologies = [
  { name: 'React / Next.js', abbr: 'Re', category: 'Frontend' },
  { name: 'Python / FastAPI', abbr: 'Py', category: 'Backend' },
  { name: 'PHP / Laravel', abbr: 'PH', category: 'Backend' },
  { name: 'Node.js / Express', abbr: 'No', category: 'Backend' },
  { name: 'OpenAI / Anthropic / LangChain', abbr: 'AI', category: 'AI Agents' },
  { name: 'PostgreSQL / MongoDB', abbr: 'DB', category: 'Database' },
  { name: 'Docker / Kubernetes', abbr: 'K8', category: 'Infrastructure' },
  { name: 'TypeScript', abbr: 'TS', category: 'Language' },
]
</script>
