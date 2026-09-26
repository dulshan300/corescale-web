<template>
  <svg v-if="name === 'web'" viewBox="0 0 420 260" role="img" aria-label="A website shown on a browser window and a phone">
    <defs>
      <linearGradient id="sv-web" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0f2a52" />
        <stop offset="1" stop-color="#1e9cd7" />
      </linearGradient>
    </defs>
    <circle cx="26" cy="34" r="5" fill="#1e9cd7" opacity=".45" />
    <circle cx="396" cy="238" r="7" fill="#0f2a52" opacity=".12" />
    <rect x="40" y="34" width="256" height="184" rx="14" fill="#fff" stroke="#d5e3f5" stroke-width="2" />
    <path d="M40 48a14 14 0 0 1 14-14h228a14 14 0 0 1 14 14v22H40z" fill="#0f2a52" />
    <circle cx="58" cy="52" r="4.5" fill="#1e9cd7" />
    <circle cx="74" cy="52" r="4.5" fill="#7da5dc" />
    <circle cx="90" cy="52" r="4.5" fill="#d5e3f5" />
    <rect x="108" y="46" width="120" height="12" rx="6" fill="#264580" />
    <rect x="58" y="86" width="130" height="14" rx="7" fill="#0f2a52" />
    <rect x="58" y="108" width="104" height="8" rx="4" fill="#adc7eb" />
    <rect x="58" y="122" width="118" height="8" rx="4" fill="#d5e3f5" />
    <rect x="58" y="142" width="60" height="20" rx="10" fill="url(#sv-web)" />
    <rect x="200" y="84" width="80" height="80" rx="10" fill="#eef4fb" />
    <rect x="212" y="130" width="12" height="22" rx="3" fill="#adc7eb" />
    <rect x="230" y="116" width="12" height="36" rx="3" fill="#1e9cd7" />
    <rect x="248" y="100" width="12" height="52" rx="3" fill="#0f2a52" />
    <rect x="58" y="178" width="68" height="28" rx="8" fill="#eef4fb" />
    <rect x="134" y="178" width="68" height="28" rx="8" fill="#eef4fb" />
    <rect x="210" y="178" width="70" height="28" rx="8" fill="#eef4fb" />
    <rect x="300" y="80" width="84" height="150" rx="16" fill="#0f2a52" />
    <rect x="308" y="94" width="68" height="124" rx="9" fill="#fff" />
    <rect x="326" y="84" width="32" height="5" rx="2.5" fill="#264580" />
    <rect x="316" y="104" width="34" height="8" rx="4" fill="#1e9cd7" />
    <rect x="316" y="120" width="52" height="6" rx="3" fill="#d5e3f5" />
    <rect x="316" y="132" width="42" height="6" rx="3" fill="#d5e3f5" />
    <rect x="316" y="148" width="52" height="36" rx="8" fill="#e6f4fb" />
    <circle cx="330" cy="166" r="7" fill="#1e9cd7" />
    <rect x="316" y="192" width="52" height="16" rx="8" fill="url(#sv-web)" />
    <g class="float">
      <circle cx="340" cy="46" r="24" fill="url(#sv-web)" />
      <path d="M332 39l-8 7 8 7M348 39l8 7-8 7M343 37l-6 18" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>
  </svg>

  <svg v-else-if="name === 'architecture'" viewBox="0 0 420 260" role="img" aria-label="A system blueprint connecting users, an API hub, and services">
    <defs>
      <linearGradient id="sv-arch" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0f2a52" />
        <stop offset="1" stop-color="#1e9cd7" />
      </linearGradient>
      <pattern id="sv-dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="#adc7eb" />
      </pattern>
    </defs>
    <rect width="420" height="260" fill="url(#sv-dots)" opacity=".55" />
    <g fill="none" stroke="#1e9cd7" stroke-width="2.5" stroke-linecap="round">
      <path class="flow" d="M210 56V98" />
      <path class="flow" d="M72 122H130" />
      <path class="flow" d="M290 122H348" />
      <path class="flow" d="M210 146C210 172 90 166 90 192" />
      <path class="flow" d="M210 146V192" />
      <path class="flow" d="M210 146C210 172 330 166 330 192" />
    </g>
    <rect x="160" y="18" width="100" height="38" rx="12" fill="#0f2a52" />
    <circle cx="194" cy="32" r="5" fill="#fff" />
    <path d="M185 47a9 9 0 0 1 18 0z" fill="#fff" />
    <rect x="210" y="29" width="36" height="6" rx="3" fill="#7da5dc" />
    <rect x="210" y="40" width="24" height="6" rx="3" fill="#264580" />
    <circle cx="58" cy="122" r="14" fill="#fff" stroke="#7da5dc" stroke-width="2" />
    <circle cx="58" cy="122" r="5" fill="#1e9cd7" />
    <circle cx="362" cy="122" r="14" fill="#fff" stroke="#7da5dc" stroke-width="2" />
    <circle cx="362" cy="122" r="5" fill="#1e9cd7" />
    <rect x="130" y="98" width="160" height="48" rx="14" fill="url(#sv-arch)" />
    <path d="M172 122H204M216 122H248" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".6" />
    <circle cx="166" cy="122" r="6.5" fill="#fff" />
    <circle cx="210" cy="122" r="6.5" fill="#fff" />
    <circle cx="254" cy="122" r="6.5" fill="#fff" />
    <rect x="50" y="192" width="80" height="50" rx="12" fill="#fff" stroke="#adc7eb" stroke-width="2" />
    <rect x="170" y="192" width="80" height="50" rx="12" fill="#fff" stroke="#adc7eb" stroke-width="2" />
    <rect x="290" y="192" width="80" height="50" rx="12" fill="#fff" stroke="#adc7eb" stroke-width="2" />
    <path d="M76 208v14c0 3 6 5 14 5s14-2 14-5v-14" fill="#d5e3f5" stroke="#0f2a52" stroke-width="2.5" />
    <ellipse cx="90" cy="208" rx="14" ry="5" fill="#1e9cd7" stroke="#0f2a52" stroke-width="2.5" />
    <path d="M76 215c0 3 6 5 14 5s14-2 14-5" fill="none" stroke="#0f2a52" stroke-width="2.5" />
    <path d="M203 205c-4 0-5 2-5 5v3c0 2-1 3-3 3 2 0 3 1 3 3v3c0 3 1 5 5 5M217 205c4 0 5 2 5 5v3c0 2 1 3 3 3-2 0-3 1-3 3v3c0 3-1 5-5 5" fill="none" stroke="#0f2a52" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="210" cy="219" r="3" fill="#1e9cd7" />
    <path d="M330 204l16 8-16 8-16-8z" fill="#1e9cd7" />
    <path d="M314 220l16 8 16-8M314 227l16 8 16-8" fill="none" stroke="#0f2a52" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  <svg v-else-if="name === 'ai'" viewBox="0 0 420 260" role="img" aria-label="A robot agent taking in emails, documents and data, and returning finished tasks">
    <g fill="none" stroke="#1e9cd7" stroke-width="2.5" stroke-linecap="round">
      <path class="flow" d="M108 66C132 66 132 96 158 96" />
      <path class="flow" d="M108 130H158" />
      <path class="flow" d="M108 194C132 194 132 132 158 132" />
      <path class="flow" d="M262 96C288 96 288 66 312 66" />
      <path class="flow" d="M262 116C288 116 288 130 312 130" />
      <path class="flow" d="M262 132C288 132 288 194 312 194" />
    </g>
    <rect x="20" y="44" width="88" height="44" rx="12" fill="#fff" stroke="#d5e3f5" stroke-width="2" />
    <rect x="32" y="56" width="28" height="20" rx="4" fill="#eef4fb" stroke="#1e9cd7" stroke-width="2" />
    <path d="M32 60l14 10 14-10" fill="none" stroke="#1e9cd7" stroke-width="2" stroke-linejoin="round" />
    <rect x="68" y="58" width="30" height="6" rx="3" fill="#adc7eb" />
    <rect x="68" y="69" width="20" height="6" rx="3" fill="#d5e3f5" />
    <rect x="20" y="108" width="88" height="44" rx="12" fill="#fff" stroke="#d5e3f5" stroke-width="2" />
    <rect x="34" y="118" width="22" height="26" rx="4" fill="#eef4fb" stroke="#1e9cd7" stroke-width="2" />
    <rect x="39" y="125" width="12" height="3" rx="1.5" fill="#1e9cd7" />
    <rect x="39" y="132" width="12" height="3" rx="1.5" fill="#adc7eb" />
    <rect x="68" y="122" width="30" height="6" rx="3" fill="#adc7eb" />
    <rect x="68" y="133" width="20" height="6" rx="3" fill="#d5e3f5" />
    <rect x="20" y="172" width="88" height="44" rx="12" fill="#fff" stroke="#d5e3f5" stroke-width="2" />
    <rect x="34" y="192" width="7" height="14" rx="2" fill="#adc7eb" />
    <rect x="44" y="185" width="7" height="21" rx="2" fill="#1e9cd7" />
    <rect x="54" y="178" width="7" height="28" rx="2" fill="#0f2a52" />
    <rect x="68" y="186" width="30" height="6" rx="3" fill="#adc7eb" />
    <rect x="68" y="197" width="20" height="6" rx="3" fill="#d5e3f5" />

    <path d="M210 72V56" stroke="#0f2a52" stroke-width="4" stroke-linecap="round" />
    <circle class="pulse" cx="210" cy="48" r="8" fill="#1e9cd7" />
    <rect x="148" y="98" width="12" height="34" rx="6" fill="#1e9cd7" />
    <rect x="260" y="98" width="12" height="34" rx="6" fill="#1e9cd7" />
    <rect x="160" y="72" width="100" height="86" rx="26" fill="#0f2a52" />
    <rect x="172" y="88" width="76" height="46" rx="16" fill="#e6f4fb" />
    <circle cx="194" cy="108" r="6" fill="#0f2a52" />
    <circle cx="226" cy="108" r="6" fill="#0f2a52" />
    <path d="M197 121q13 9 26 0" fill="none" stroke="#1e9cd7" stroke-width="3" stroke-linecap="round" />
    <rect x="176" y="164" width="68" height="52" rx="18" fill="#264580" />
    <circle cx="210" cy="190" r="9" fill="#1e9cd7" />
    <circle cx="210" cy="190" r="4" fill="#fff" />

    <g v-for="y in [44, 108, 172]" :key="y">
      <rect x="312" :y="y" width="88" height="44" rx="12" fill="#fff" stroke="#d5e3f5" stroke-width="2" />
      <circle cx="336" :cy="y + 22" r="11" fill="#1e9cd7" />
      <path :d="`M330 ${y + 22}l4 4 8-8`" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="354" :y="y + 14" width="34" height="6" rx="3" fill="#adc7eb" />
      <rect x="354" :y="y + 25" width="22" height="6" rx="3" fill="#d5e3f5" />
    </g>
  </svg>

  <svg v-else viewBox="0 0 420 260" role="img" aria-label="An old paper spreadsheet being transformed into a modern connected dashboard">
    <defs>
      <linearGradient id="sv-tr" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0f2a52" />
        <stop offset="1" stop-color="#1e9cd7" />
      </linearGradient>
    </defs>
    <g transform="rotate(6 90 130)">
      <rect x="30" y="62" width="128" height="140" rx="8" fill="#e9ecef" stroke="#ced4da" stroke-width="2" />
    </g>
    <g transform="rotate(-4 90 130)">
      <rect x="26" y="58" width="128" height="140" rx="8" fill="#fff" stroke="#ced4da" stroke-width="2" />
      <path d="M26 66a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v14H26z" fill="#dee2e6" />
      <rect x="58" y="104" width="40" height="24" fill="#f1f3f5" />
      <rect x="98" y="152" width="28" height="24" fill="#f1f3f5" />
      <path d="M26 104H154M26 128H154M26 152H154M26 176H154M58 80V198M98 80V198M126 80V198" stroke="#dee2e6" stroke-width="2" fill="none" />
    </g>
    <circle cx="188" cy="94" r="3" fill="#1e9cd7" opacity=".6" />
    <circle cx="232" cy="98" r="2.5" fill="#0f2a52" opacity=".3" />
    <circle cx="236" cy="168" r="4" fill="#1e9cd7" opacity=".5" />
    <g class="float">
      <circle cx="210" cy="130" r="28" fill="url(#sv-tr)" />
      <path d="M197 130h26M214 121l9 9-9 9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <rect x="262" y="52" width="140" height="156" rx="16" fill="#fff" stroke="#adc7eb" stroke-width="2" />
    <path d="M262 68a16 16 0 0 1 16-16h108a16 16 0 0 1 16 16v14H262z" fill="#0f2a52" />
    <circle cx="278" cy="67" r="3.5" fill="#1e9cd7" />
    <circle cx="290" cy="67" r="3.5" fill="#7da5dc" />
    <rect x="330" y="64" width="56" height="7" rx="3.5" fill="#264580" />
    <rect x="274" y="94" width="56" height="32" rx="8" fill="#eef4fb" />
    <rect x="282" y="102" width="20" height="5" rx="2.5" fill="#adc7eb" />
    <rect x="282" y="112" width="30" height="8" rx="4" fill="#1e9cd7" />
    <rect x="338" y="94" width="52" height="32" rx="8" fill="#eef4fb" />
    <rect x="346" y="102" width="20" height="5" rx="2.5" fill="#adc7eb" />
    <rect x="346" y="112" width="26" height="8" rx="4" fill="#0f2a52" />
    <rect x="274" y="136" width="116" height="60" rx="8" fill="#eef4fb" />
    <path d="M282 184L304 166L324 174L348 150L368 158L382 144" fill="none" stroke="#1e9cd7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <g fill="#fff" stroke="#1e9cd7" stroke-width="2.5">
      <circle cx="304" cy="166" r="3.5" />
      <circle cx="348" cy="150" r="3.5" />
      <circle cx="382" cy="144" r="3.5" />
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ name: 'web' | 'architecture' | 'ai' | 'transformation' }>()
</script>

<style scoped>
.float {
  animation: float 4s ease-in-out infinite;
}
.flow {
  stroke-dasharray: 5 7;
  animation: flow 1s linear infinite;
}
.pulse {
  transform-box: fill-box;
  transform-origin: center;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes flow {
  to { stroke-dashoffset: -12; }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: .7; }
}
@media (prefers-reduced-motion: reduce) {
  .float { animation: none; }
}
</style>
