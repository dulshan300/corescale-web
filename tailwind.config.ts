import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4fb',
          100: '#d5e3f5',
          200: '#adc7eb',
          300: '#7da5dc',
          400: '#5587cd',
          500: '#3a6cb8',
          600: '#2d569a',
          700: '#264580',
          800: '#1e3666',
          900: '#0f2a52',
          950: '#091a36',
        },
        accent: {
          50: '#e6f4fb',
          100: '#b3e0f4',
          200: '#80cced',
          300: '#4db8e6',
          400: '#26a9e0',
          500: '#1e9cd7',
          600: '#1a8bc0',
          700: '#1573a0',
          800: '#105c80',
          900: '#0a3d56',
          950: '#05202e',
        },
        dark: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#6c757d',
          500: '#575e66',
          600: '#495057',
          700: '#343a40',
          800: '#2b3035',
          900: '#212529',
          950: '#16191d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
