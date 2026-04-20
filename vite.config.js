import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    strictPort: true,
  },
  preview: {
    strictPort: true,
  },
  test: {
    globals: true,
    projects: [{
      test: {
        name: 'unit-test',
        environment: 'node',
        include: ['tests/unit/**/*.tsx']
      }
    },{
      test: {
        name: 'component-test',
        environment: 'jsdom',
        include: ['tests/component/**/*.tsx']
      }
    }]
  }
})