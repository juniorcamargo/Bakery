import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      all: true,
      exclude: ['**/node_modules/**', '**/dist/**', '**/test/**', '**/src/**.ts', '**.{ts,js}']
    }
  }
});
