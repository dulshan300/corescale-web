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
            <span class="text-accent-600 text-xs font-medium tracking-wide uppercase">Enterprise Solutions</span>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-dark-900">
            Building the Future of<br />
            <span class="text-gradient">Digital Enterprise</span>
          </h1>
          <p class="text-dark-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Corescale delivers cutting-edge web development and solution architecture services that transform how businesses operate in the digital age.
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
        <p class="text-dark-400 text-xs font-medium tracking-wide uppercase mb-5">Also work with us on trusted global platforms</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <span
            v-for="platform in platforms"
            :key="platform"
            class="px-6 py-2.5 bg-dark-50 border border-dark-200 rounded-lg text-dark-600 font-semibold text-lg tracking-tight"
          >
            {{ platform }}
          </span>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding bg-dark-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3 block">What We Do</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-dark-900">Enterprise Solutions</h2>
          <p class="text-dark-500 max-w-xl mx-auto">
            End-to-end technology solutions designed to scale with your business.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="group relative bg-white border border-dark-200 rounded-2xl p-8 hover:border-accent-500/30 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-300"
          >
            <div class="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-50 transition-colors">
              <span class="text-2xl">{{ service.icon }}</span>
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

    <!-- Why Choose Us -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-accent-500 text-sm font-medium tracking-wide uppercase mb-3 block">Why Corescale</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-dark-900">Enterprise Teams Trust Us</h2>
            <p class="text-dark-500 mb-8 leading-relaxed">
              We combine deep technical expertise with business acumen to deliver solutions that drive real outcomes. Our architecture-first approach ensures your systems are built to last.
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
            <div class="relative bg-dark-50 border border-dark-200 rounded-2xl p-8">
              <h3 class="text-sm font-medium text-dark-400 mb-6 uppercase tracking-wide">Tech Stack</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="tech in technologies" :key="tech.name" class="flex items-center gap-3 bg-white rounded-xl p-3 border border-dark-100">
                  <div class="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
          <p class="text-brand-200 max-w-xl mx-auto mb-10">
            Let's discuss how Corescale can help you build scalable, future-proof digital solutions.
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
useSeoMeta({
  title: 'Corescale | Web Development, Solution Architecture & AI Agents',
  description: 'Corescale builds custom web applications, enterprise architecture, and AI agents that automate corporate workflows for growing businesses.',
})

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
]

const platforms = ['Fiverr', 'Upwork']

const services = [
  {
    icon: '⚡',
    pain: 'Software that is slow or hard to change?',
    title: 'Web Development That Fits Your Business',
    description: 'We build fast, reliable web platforms around the way you work, so customers get a smooth experience and your team stops fighting its tools.',
  },
  {
    icon: '🏗️',
    pain: 'Unsure what to build, or afraid of costly mistakes?',
    title: 'A Clear Plan Before You Build',
    description: 'We turn your goals into a simple, proven blueprint, so you invest once, avoid rework, and can grow with confidence.',
  },
  {
    icon: '🤖',
    pain: 'Your team loses hours to repetitive admin work?',
    title: 'Automate the Busywork with AI Agents',
    description: 'Custom AI agents handle routine tasks like data entry, reports, and customer queries, so your people can focus on work that grows the business.',
  },
]

const points = [
  { title: 'Architecture-First Approach', description: 'We design systems that scale with your business needs.' },
  { title: 'Full-Stack Expertise', description: 'From frontend to infrastructure, we handle the complete technology stack.' },
  { title: 'Enterprise-Grade Security', description: 'Security is built into every layer of our solutions.' },
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
