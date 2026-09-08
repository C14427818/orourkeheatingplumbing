/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1C2C',
          light: '#14324A',
          dark: '#061018',
        },
        charcoal: {
          DEFAULT: '#2C333A',
          light: '#4A5259',
        },
        copper: {
          // Brand orange #E85D04 fails AA (~3.5:1) with white text on small UI.
          // DEFAULT/dark are darkened for WCAG AA button text; light is brand orange for accents on navy.
          DEFAULT: '#C54F03',
          dark: '#A34202',
          light: '#E85D04',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
