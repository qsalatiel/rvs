import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './src/tests/setup.ts',
      environment: 'jsdom',
      environmentMatchGlobs: [['**/**/*.tsx', 'jsdom']],
    },
  })
)
