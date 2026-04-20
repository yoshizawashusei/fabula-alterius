import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
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