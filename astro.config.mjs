import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://strategictransformations.net',
  output: 'static',
  // /bootcamp/ is hidden, not deleted (source parked at src/pages/bootcamp/_index.astro).
  // The redirect page Astro generates includes a meta refresh and noindex.
  // /strategic-reset/ and its quiz are hidden the same way until the SRI is revamped.
  redirects: {
    '/bootcamp': '/speaking-training/',
    '/strategic-reset': '/',
    '/strategic-reset/quiz': '/',
  },
  integrations: [
    tailwind(),
    sitemap({ filter: (page) => !page.includes('/bootcamp') && !page.includes('/strategic-reset') && !page.includes('/thank-you') }),
  ],
});
