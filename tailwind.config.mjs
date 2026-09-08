/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
          light: '#14304A',
          dark: '#071521',
        },
        charcoal: {
          DEFAULT: '#2C333A',
          light: '#4A5259',
        },
        copper: {
          DEFAULT: '#C4813A',
          dark: '#A66B2E',
          light: '#D4A05C',
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
