import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://julianpineda.com',
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});