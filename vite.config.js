import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': 'src',
      '@Image': '/src/assets',
      '@Component': 'src/component',
      '@Imports': 'src/imports/*',
      '@Styles': 'src/styles',
      '@Pages': 'src/pages',
    },
  },
});
