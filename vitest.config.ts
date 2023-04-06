import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      exclude: ['**/node_modules/**', '**/dist/**', '**/test/**', '**/src/**.ts', '**.{ts,js}']
    }
  }
});
