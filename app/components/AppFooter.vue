<template>
  <footer class="relative overflow-hidden bg-brand-950 text-brand-200">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" aria-hidden="true"></div>
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true"></div>
    <div class="relative container-custom px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <div class="mb-4">
            <img src="/logo-full.png" alt="Corescale" class="h-14 object-contain brightness-0 invert" />
          </div>
          <p class="text-brand-200 text-sm max-w-md leading-relaxed">
            Custom web apps and AI agents that help startups and growing businesses save time and get more done.
          </p>
          <div class="flex items-center gap-3 mt-6">
            <a href="https://www.linkedin.com/company/corescale-dev" target="_blank" rel="noopener noreferrer" aria-label="Corescale on LinkedIn" class="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-brand-100 hover:text-white hover:bg-accent-500 hover:border-accent-500 transition-colors"><Linkedin class="w-4 h-4" :stroke-width="1.75" /></a>
            <a href="https://www.facebook.com/corescale.dev" target="_blank" rel="noopener noreferrer" aria-label="Corescale on Facebook" class="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-brand-100 hover:text-white hover:bg-accent-500 hover:border-accent-500 transition-colors"><Facebook class="w-4 h-4" :stroke-width="1.75" /></a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-white mb-4 text-sm">Services</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/custom-web-development" class="text-sm text-brand-200 hover:text-accent-300 transition-colors">Web Development</NuxtLink></li>
            <li><NuxtLink to="/services#solution-architecture" class="text-sm text-brand-200 hover:text-accent-300 transition-colors">Solution Architecture</NuxtLink></li>
            <li><NuxtLink to="/ai-agents" class="text-sm text-brand-200 hover:text-accent-300 transition-colors">Custom AI Agents</NuxtLink></li>
            <li><NuxtLink to="/services#digital-transformation" class="text-sm text-brand-200 hover:text-accent-300 transition-colors">Digital Transformation</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-white mb-4 text-sm">Company</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/about" class="text-sm text-brand-200 hover:text-accent-300 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-brand-200 hover:text-accent-300 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-brand-300 text-xs">&copy; {{ new Date().getFullYear() }} Corescale Pvt Ltd. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/privacy-policy" class="text-brand-300 hover:text-white transition-colors text-xs">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-of-service" class="text-brand-300 hover:text-white transition-colors text-xs">Terms of Service</NuxtLink>
          <button type="button" class="text-brand-300 hover:text-white transition-colors text-xs" @click="openSettings">Cookie Settings</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Linkedin, Facebook } from 'lucide-vue-next'

const { openSettings } = useCookieConsent()
</script>
