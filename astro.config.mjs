// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE ?? '/',
  output: 'static',
});
