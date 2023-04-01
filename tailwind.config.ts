import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: 'hsl(245deg 50% 10%)',
          800: 'hsl(245deg 45% 20%)',
          700: 'hsl(245deg 50% 28%)',
          600: 'hsl(245deg 42% 42%)',
          500: 'hsl(245deg 45% 50%)',
          400: 'hsl(245deg 35% 65%)',
          300: 'hsl(245deg 50% 80%)',
          200: 'hsl(245deg 40% 95%)',
          100: 'hsl(245deg 40% 98%)',
        },
        gold: {
          100: 'hsl(40deg 36% 50%)',
        },
      },
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
