import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://julianpineda.com',
  integrations: [tailwind(), react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});