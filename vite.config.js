import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    strictPort: true,
  },
  preview: {
    strictPort: true,
  },
  test: {
    globals: true,
    projects: [
      {
        test: {
          name: 'unit-test',
          environment: 'node',
          include: ['tests/unit/**/*.tsx'],
        },
      },
      {
        test: {
          name: 'component-test',
          environment: 'jsdom',
          include: ['tests/component/**/*.tsx'],
        },
      },
    ],
  },
});
