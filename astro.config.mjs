import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alyf-de.github.io',
  base: '/erpnext-europe',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
