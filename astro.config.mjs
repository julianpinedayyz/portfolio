import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://www.julianpineda.com',
  // base: '/portfolio',
  output: 'static',
  integrations: [tailwind(), react()],
  build: {
    // Optimize CSS and JS for production
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Optimize chunk loading
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Reduce the number of chunks
          manualChunks: undefined,
          // Match the expected naming pattern
          assetFileNames: '_astro/[name].[hash][extname]',
          chunkFileNames: '_astro/[name].[hash].js',
          entryFileNames: '_astro/[name].[hash].js',
        },
      },
    },
    // Optimize CSS processing
    css: {
      devSourcemap: false,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});