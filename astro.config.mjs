import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `base` is provisional until the deployment repo is chosen (see P5).
// For a project page at levitampus.github.io/<repo>, set base to '/<repo>'.
export default defineConfig({
  output: 'static',
  site: 'https://levitampus.github.io',
  base: '/portfolio-redesign',
  integrations: [sitemap()],
});
