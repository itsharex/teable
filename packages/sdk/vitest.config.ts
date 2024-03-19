import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

const testFiles = ['./src/**/*.{test,spec}.{js,jsx,ts,tsx}'];
export default defineConfig({
  plugins: [
    react({
      devTarget: 'es2022',
    }),
    tsconfigPaths(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/include: ['src/**/*'],
      svgrOptions: {},
    }),
  ],
  cacheDir: '../../.cache/vitest/sdk',
  test: {
    globals: true,
    environment: 'happy-dom',
    typecheck: {
      enabled: false,
    },
    passWithNoTests: false,
    setupFiles: './config/tests/setupVitest.ts',
    coverage: {
      provider: 'v8',
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['src/**/*'],
    },
    include: testFiles,
    exclude: [...configDefaults.exclude, '**/.next/**'],
  },
});
