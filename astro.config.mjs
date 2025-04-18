import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://julianpinedayyz.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [tailwind(), react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});