<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-hero min-h-[min(100svh,980px)] flex items-center">
      <div class="absolute inset-0 bg-grid-dark" aria-hidden="true"></div>
      <div class="absolute inset-0 opacity-60 md:opacity-100">
        <ClientOnly><HeroCore /></ClientOnly>
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/30 to-transparent hidden md:block pointer-events-none" aria-hidden="true"></div>
      <div class="relative w-full section-padding pt-32 md:pt-36">
        <div class="container-custom text-center md:text-left">
          <div class="max-w-2xl mx-auto md:mx-0">
            <span class="eyebrow-dark mb-8">
              <span class="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              For Startups &amp; Growing Businesses
            </span>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight text-white">
              Automate the Busywork.<br />
              <span class="text-gradient-light">Grow Faster.</span>
            </h1>
            <p class="text-brand-100/80 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Custom web apps and AI agents that give startups and growing businesses their time back.
            </p>
            <div class="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <NuxtLink to="/services" class="btn-primary text-base gap-2">
                Explore Services
                <ArrowRight class="w-5 h-5" :stroke-width="2" />
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-ghost text-base">
                Schedule a Consultation
              </NuxtLink>
            </div>

            <dl class="mt-14 grid grid-cols-3 gap-3 max-w-lg mx-auto md:mx-0">
              <div v-for="stat in stats" :key="stat.label" class="glass-dark rounded-2xl px-3 py-4 md:px-5 text-center md:text-left flex flex-col-reverse">
                <dt class="text-brand-200 text-xs md:text-sm mt-1">{{ stat.label }}</dt>
                <dd v-count class="text-2xl md:text-3xl font-bold text-white tabular-nums">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <a href="#services" class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex text-brand-200/70 hover:text-white transition-colors" aria-label="Scroll to services">
        <span class="w-6 h-10 rounded-full border border-current flex justify-center pt-2">
          <span class="w-1 h-2 rounded-full bg-current animate-scroll-cue"></span>
        </span>
      </a>
      <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" aria-hidden="true"></div>
    </section>

    <!-- Platforms -->
    <section class="bg-white py-10 border-b border-dark-200">
      <div class="container-custom px-6 text-center">
        <p class="text-dark-400 text-xs font-medium tracking-[0.18em] uppercase mb-5">Experience working with international companies</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <span
            v-for="platform in platforms"
            :key="platform.name"
            class="flex items-center gap-2.5 px-6 h-14 bg-brand-50 border border-brand-100 rounded-xl text-brand-900 hover:text-accent-500 hover:border-accent-500/30 transition-colors"
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
    <section id="services" class="relative section-padding bg-white scroll-mt-16">
      <div class="absolute inset-0 bg-grid services-grid-fade" aria-hidden="true"></div>
      <div class="relative container-custom">
        <div v-reveal class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div class="max-w-2xl">
            <span class="eyebrow">What We Do</span>
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-dark-900">AI Agents &amp; Custom Software That Save You Time</h2>
          </div>
          <p class="text-dark-500 max-w-sm md:text-right">
            Practical technology that removes busywork and helps your business grow without adding headcount.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(service, index) in services" :key="service.title" v-reveal="index * 120">
            <NuxtLink
              v-tilt
              :to="service.to"
              class="group card-glow flex flex-col h-full p-8"
            >
              <div class="relative flex items-start justify-between mb-8">
                <div class="w-14 h-14 bg-gradient-to-br from-brand-900 to-accent-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <component :is="service.icon" class="w-7 h-7" :stroke-width="1.75" />
                </div>
                <span class="text-5xl font-bold text-brand-100 group-hover:text-accent-100 transition-colors tabular-nums">0{{ index + 1 }}</span>
              </div>
              <p class="relative text-accent-700 text-sm font-medium mb-2">{{ service.pain }}</p>
              <h3 class="relative text-xl font-semibold mb-3 text-dark-900">{{ service.title }}</h3>
              <p class="relative text-dark-500 text-sm leading-relaxed mb-8">{{ service.description }}</p>
              <span class="relative mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-900 group-hover:text-accent-600 transition-colors">
                Learn more
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" :stroke-width="2" />
              </span>
            </NuxtLink>
          </div>
        </div>
        <div v-reveal class="text-center mt-12">
          <NuxtLink to="/services" class="btn-secondary gap-2">
            View All Services
            <ArrowRight class="w-4 h-4" :stroke-width="2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="relative overflow-hidden section-padding bg-brand-950">
      <div class="absolute inset-0 bg-grid-dark" aria-hidden="true"></div>
      <div class="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true"></div>
      <div class="relative container-custom">
        <div v-reveal class="text-center mb-16">
          <span class="eyebrow !text-accent-300">How We Work</span>
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">From First Call to Launch in 5 Simple Steps</h2>
          <p class="text-brand-200 max-w-xl mx-auto">
            You always know what happens next, what it costs, and who is doing the work.
          </p>
        </div>
        <div ref="stepsRef" class="relative">
          <div class="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/10 rounded-full overflow-hidden" aria-hidden="true">
            <div
              class="h-full bg-gradient-to-r from-accent-700 via-accent-500 to-accent-300 origin-left transition-transform duration-[1800ms] ease-out"
              :class="stepsVisible ? 'scale-x-100' : 'scale-x-0'"
            ></div>
          </div>
          <div class="lg:hidden absolute left-8 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-white/10 rounded-full overflow-hidden" aria-hidden="true">
            <div
              class="h-full w-full bg-gradient-to-b from-accent-700 to-accent-300 origin-top transition-transform duration-[1800ms] ease-out"
              :class="stepsVisible ? 'scale-y-100' : 'scale-y-0'"
            ></div>
          </div>
          <ol class="relative grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            <li
              v-for="(step, index) in steps"
              :key="step.title"
              class="group flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center transition-all duration-700"
              :class="stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
              :style="{ transitionDelay: `${index * 180}ms` }"
            >
              <div class="relative flex-shrink-0">
                <div class="absolute inset-0 rounded-2xl bg-accent-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                <div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-800 to-accent-500 text-white flex items-center justify-center shadow-lg shadow-accent-500/25 ring-4 ring-brand-950 group-hover:-translate-y-1 transition-transform">
                  <component :is="step.icon" class="w-7 h-7" :stroke-width="1.75" />
                </div>
                <span class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center shadow-sm ring-2 ring-brand-950">{{ index + 1 }}</span>
              </div>
              <div class="lg:mt-6">
                <h3 class="font-semibold text-white mb-2">{{ step.title }}</h3>
                <p class="text-brand-200 text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding bg-brand-50 overflow-hidden">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-reveal>
            <span class="eyebrow">Why Corescale</span>
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-dark-900">Why Growing Teams Choose Us</h2>
            <p class="text-dark-500 mb-10 leading-relaxed">
              We pair strong technical skills with a practical business mindset. You get a small, responsive team that keeps things simple, respects your budget, and builds systems that grow with you.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="(point, index) in points"
                :key="point.title"
                v-reveal="index * 100"
                class="bg-white border border-brand-100 rounded-2xl p-5 hover:border-accent-500/40 hover:shadow-lg hover:shadow-accent-500/5 transition-all"
              >
                <div class="w-9 h-9 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center mb-3">
                  <Check class="w-4 h-4" :stroke-width="2.5" />
                </div>
                <h3 class="font-semibold text-dark-900 mb-1">{{ point.title }}</h3>
                <p class="text-dark-500 text-sm">{{ point.description }}</p>
              </div>
            </div>
          </div>
          <div v-reveal="150" class="relative min-w-0">
            <div class="absolute inset-0 bg-accent-500/10 rounded-3xl blur-3xl" aria-hidden="true"></div>
            <div v-tilt="3" class="card-glow !rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-900/5">
              <h3 class="relative font-semibold text-dark-900 text-lg">Our Tech Stack</h3>
              <p class="relative text-dark-500 text-sm mt-1">Modern, proven tools, chosen to fit your project.</p>
              <div class="relative mt-4 divide-y divide-brand-100">
                <div
                  v-for="group in techGroups"
                  :key="group.title"
                  class="py-4 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5"
                >
                  <div class="flex items-center gap-3 sm:w-36 flex-shrink-0">
                    <span class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-900 to-accent-500 text-white flex items-center justify-center flex-shrink-0">
                      <component :is="group.icon" class="w-[18px] h-[18px]" :stroke-width="1.75" />
                    </span>
                    <span class="text-sm font-semibold text-dark-900">{{ group.title }}</span>
                  </div>
                  <ul class="flex flex-wrap gap-2 min-w-0">
                    <li
                      v-for="item in group.items"
                      :key="item"
                      class="px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-sm text-dark-800 hover:border-accent-500/40 hover:text-accent-700 transition-colors"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tech marquee -->
      <div class="marquee mt-20 -mx-6 md:-mx-12 lg:-mx-24 overflow-hidden" aria-hidden="true">
        <div class="marquee-track flex w-max gap-4 pr-4">
          <span
            v-for="(item, i) in [...allTech, ...allTech]"
            :key="i"
            class="px-5 py-2.5 rounded-full bg-white border border-brand-100 text-brand-900 font-medium text-sm whitespace-nowrap"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <CtaBanner
      heading="Ready to Save Time and Grow Faster?"
      text="Tell us where your team loses time each week. We'll show you what can be automated or built to fix it."
      label="Start a Conversation"
    />
  </div>
</template>

<script setup lang="ts">
import { Code2, Network, Bot, Search, ClipboardList, Hammer, Rocket, HeartHandshake, Monitor, Server, Database, Wrench, ArrowRight, Check } from 'lucide-vue-next'

useSeoMeta({
  title: 'Custom Web Development & AI Agents for Startups | Corescale',
  description: 'Corescale is a custom web development company and AI agency. We build web apps and AI agents that automate repetitive work for startups and growing businesses.',
})

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '180+', label: 'Projects Delivered' },
  { value: '25+', label: 'Countries Served' },
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
    slug: 'web-development',
    to: '/custom-web-development',
    icon: Code2,
    pain: 'Software that is slow or hard to change?',
    title: 'Web Development That Fits Your Business',
    description: 'We build fast, reliable web platforms around the way you work, so customers get a smooth experience and your team stops fighting its tools.',
  },
  {
    slug: 'solution-architecture',
    to: '/services#solution-architecture',
    icon: Network,
    pain: 'Unsure what to build, or afraid of costly mistakes?',
    title: 'A Clear Plan Before You Build',
    description: 'We turn your goals into a simple, proven blueprint, so you invest once, avoid rework, and can grow with confidence.',
  },
  {
    slug: 'ai-agents',
    to: '/ai-agents',
    icon: Bot,
    pain: 'Your team loses hours to repetitive admin work?',
    title: 'Automate the Busywork with AI Agents',
    description: 'Custom AI agents handle routine tasks like data entry, reports, and customer queries, so your people can focus on work that grows the business.',
  },
]

const stepsRef = ref<HTMLElement | null>(null)
const stepsVisible = ref(false)

onMounted(() => {
  if (!stepsRef.value || !('IntersectionObserver' in window)) {
    stepsVisible.value = true
    return
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      stepsVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.25 })
  observer.observe(stepsRef.value)
})

const steps = [
  { icon: Search, title: 'Discovery', description: 'We listen to your goals, problems, and budget, and ask the right questions.' },
  { icon: ClipboardList, title: 'Plan', description: 'You get a clear scope, timeline, and quote in writing before any work begins.' },
  { icon: Hammer, title: 'Build', description: 'We build in small stages and show you progress, so there are no surprises.' },
  { icon: Rocket, title: 'Launch', description: 'We test everything, then take your solution live and train your team.' },
  { icon: HeartHandshake, title: 'Support', description: 'We stay with you after launch to fix issues and improve results.' },
]

const points = [
  { title: 'Architecture-First Approach', description: 'We design systems that scale with your business needs.' },
  { title: 'Full-Stack Expertise', description: 'From the screen your customers see to the systems behind it, we handle the whole stack.' },
  { title: 'Clear Communication', description: 'Regular updates in plain language, so you always know where your project stands.' },
  { title: 'Ongoing Partnership', description: 'We provide continued support and optimization after launch.' },
]

const techGroups = [
  { title: 'Frontend', icon: Monitor, items: ['Vue.js', 'React', 'Next.js', 'TypeScript'] },
  { title: 'Backend', icon: Server, items: ['Laravel (PHP)', 'FastAPI (Python)', 'Node.js', 'Express'] },
  { title: 'AI Agents', icon: Bot, items: ['OpenAI', 'Anthropic', 'LangChain'] },
  { title: 'Data', icon: Database, items: ['PostgreSQL', 'MongoDB'] },
  { title: 'Tools', icon: Wrench, items: ['Docker', 'Kubernetes'] },
]

const allTech = techGroups.flatMap(group => group.items)
</script>
