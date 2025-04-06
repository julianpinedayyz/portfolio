/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#3b82f6',
          600: '#2563eb',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        lime: {
          300: '#C5F56C',
          400: '#B2F042',
          500: '#A3E635',
        },
        purple: {
          400: '#B286FC',
          500: '#A066FC',
          600: '#8F46FB',
        },
        charcoal: {
          900: '#262626',
          800: '#2E2E2E',
          700: '#363636',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#059669',
              '&:hover': {
                color: '#10b981',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};