// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE ?? '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
