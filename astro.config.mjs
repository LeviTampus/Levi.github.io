import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://levitampus.github.io',
  // Deployed as a GitHub project site at /Levi.github.io
  // (repo: LeviTampus/Levi.github.io).
  base: '/Levi.github.io',
  integrations: [sitemap()],
});
