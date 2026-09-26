<template>
  <svg
    :viewBox="`0 0 ${map.w} ${map.h}`"
    role="img"
    aria-label="World map highlighting the countries Corescale has worked with, and Sri Lanka as our home base"
    class="w-full h-auto"
  >
    <path
      v-for="country in map.countries"
      :key="country.n"
      :d="country.d"
      :class="labels.has(country.n) ? 'served' : 'other'"
    >
      <title v-if="labels.has(country.n)">{{ labels.get(country.n) }}</title>
    </path>
    <g :transform="`translate(${map.home[0]} ${map.home[1]})`">
      <circle class="ring" r="7" fill="#1e9cd7" />
      <circle r="5" fill="#1e9cd7" stroke="#fff" stroke-width="2" />
      <g class="pin-label">
        <path d="M-3 7L-14 38" stroke="#1e9cd7" stroke-width="1.5" />
        <rect x="-118" y="38" width="122" height="24" rx="12" fill="#fff" stroke="#adc7eb" />
        <text x="-57" y="54" text-anchor="middle" font-size="11" font-weight="600" fill="#0f2a52">Corescale · Sri Lanka</text>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import map from '~/assets/data/world-map.json'

const props = defineProps<{ countries: { id: string; name: string }[] }>()
const labels = computed(() => new Map(props.countries.map((c) => [c.id, c.name])))
</script>

<style scoped>
.other {
  fill: #dbe7f6;
  stroke: #fff;
  stroke-width: 0.6;
}
.served {
  fill: #0f2a52;
  stroke: #fff;
  stroke-width: 0.6;
  transition: fill 0.2s;
}
.served:hover {
  fill: #1e9cd7;
}
.ring {
  transform-box: fill-box;
  transform-origin: center;
  animation: ring 2s ease-out infinite;
}
@media (max-width: 640px) {
  .pin-label { display: none; }
}
@keyframes ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(3.2); opacity: 0; }
}
</style>
