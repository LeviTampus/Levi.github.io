import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Case-study markdown uses `##`/`###`, but those headings render inside a
// card that already sits under a section `h2` and a card `h3`. Demote them
// two levels and drop generated ids so repeated case-study headings never
// collide (`id="problem"`, etc.).
const demoteHeadings = () => (tree) => {
  const walk = (node) => {
    if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
      node.tagName = `h${Math.min(6, Number(node.tagName[1]) + 2)}`;
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
  // Deployed as a GitHub project site; preserved until the deploy repo is final.
  base: '/portfolio-redesign',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [demoteHeadings],
  },
});
