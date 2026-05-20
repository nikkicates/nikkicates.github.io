import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://strategictransformations.net',
  output: 'static',
  integrations: [tailwind()],
});
