import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://c14427818.github.io',
  base: '/orourkeheatingplumbing/',
  integrations: [tailwind()],
  output: 'static',
});
