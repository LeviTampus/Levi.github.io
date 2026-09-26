import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Case-study markdown uses `##`/`###`, and those headings render inside a
// card whose title is an `h2`. Demote them one level (so `##` becomes `h3`,
// `###` becomes `h4`) and drop generated ids so repeated case-study headings
// never collide (`id="problem"`, etc.).
const demoteHeadings = () => (tree) => {
  const walk = (node) => {
    if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
      node.tagName = `h${Math.min(6, Number(node.tagName[1]) + 1)}`;
      if (node.properties) {
        delete node.properties.id;
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  walk(tree);
};

export default defineConfig({
  output: 'static',
  site: 'https://levitampus.github.io',
  // Deployed as a GitHub project site at /Levi.github.io
  // (repo: LeviTampus/Levi.github.io).
  base: '/Levi.github.io',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [demoteHeadings],
  },
});
