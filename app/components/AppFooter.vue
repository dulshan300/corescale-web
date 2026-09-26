<template>
  <footer class="border-t border-brand-100 bg-brand-50">
    <div class="container-custom px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="mb-4">
            <img src="/logo-full.png" alt="Corescale" class="h-14 object-contain" />
          </div>
          <p class="text-dark-700 text-sm max-w-md">
            Custom web apps and AI agents that help startups and growing businesses save time and get more done.
          </p>
          <div class="flex items-center gap-3 mt-4">
            <a href="https://www.linkedin.com/company/corescale-dev" target="_blank" rel="noopener noreferrer" aria-label="Corescale on LinkedIn" class="w-9 h-9 bg-white border border-brand-100 rounded-lg flex items-center justify-center text-sm text-dark-700 hover:text-white hover:bg-brand-900 transition-colors"><Linkedin class="w-4 h-4" :stroke-width="1.75" /></a>
            <a href="https://www.facebook.com/corescale.dev" target="_blank" rel="noopener noreferrer" aria-label="Corescale on Facebook" class="w-9 h-9 bg-white border border-brand-100 rounded-lg flex items-center justify-center text-sm text-dark-700 hover:text-white hover:bg-brand-900 transition-colors"><Facebook class="w-4 h-4" :stroke-width="1.75" /></a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-dark-900 mb-3 text-sm">Services</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/services#web-development" class="text-sm text-dark-700 hover:text-brand-900 transition-colors">Web Development</NuxtLink></li>
            <li><NuxtLink to="/services#solution-architecture" class="text-sm text-dark-700 hover:text-brand-900 transition-colors">Solution Architecture</NuxtLink></li>
            <li><NuxtLink to="/services#ai-agents" class="text-sm text-dark-700 hover:text-brand-900 transition-colors">Custom AI Agents</NuxtLink></li>
            <li><NuxtLink to="/services#digital-transformation" class="text-sm text-dark-700 hover:text-brand-900 transition-colors">Digital Transformation</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-dark-900 mb-3 text-sm">Company</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="text-sm text-dark-700 hover:text-brand-900 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-dark-700 hover:text-brand-900 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-brand-100 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-dark-700 text-xs">&copy; {{ new Date().getFullYear() }} Corescale Pvt Ltd. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/privacy-policy" class="text-dark-700 hover:text-brand-900 transition-colors text-xs">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-of-service" class="text-dark-700 hover:text-brand-900 transition-colors text-xs">Terms of Service</NuxtLink>
          <button type="button" class="text-dark-700 hover:text-brand-900 transition-colors text-xs" @click="openSettings">Cookie Settings</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Linkedin, Facebook } from 'lucide-vue-next'

const { openSettings } = useCookieConsent()
</script>
