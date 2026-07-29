import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this app from a /my-portfolio/ sub-path, so the production
  // build needs that base. Locally there's no sub-path, so dev serves from /.
  base: command === 'build' ? '/my-portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
}));
