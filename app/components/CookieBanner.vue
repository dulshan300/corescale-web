<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="ready && bannerOpen"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      class="fixed z-[60] bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white border border-brand-100 rounded-2xl shadow-2xl shadow-brand-900/15 p-5"
    >
      <h2 id="cookie-title" class="font-semibold text-dark-900">We value your privacy</h2>
      <p id="cookie-text" class="mt-2 text-sm text-dark-600 leading-relaxed">
        We use Google Analytics cookies to see how visitors use our site, so we can improve it. They are optional and
        only set if you accept. Read our
        <NuxtLink to="/privacy-policy" class="text-accent-700 underline hover:text-brand-900">Privacy Policy</NuxtLink>.
      </p>
      <div class="mt-4 flex gap-3">
        <button
          type="button"
          class="flex-1 px-4 py-2.5 rounded-lg border border-brand-900 text-brand-900 text-sm font-semibold hover:bg-brand-50 transition-colors"
          @click="decline"
        >
          Decline
        </button>
        <button
          type="button"
          class="flex-1 px-4 py-2.5 rounded-lg bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition-colors"
          @click="accept"
        >
          Accept
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { ready, bannerOpen, accept, decline } = useCookieConsent()
</script>
