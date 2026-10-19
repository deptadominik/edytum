import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const repoName = process.env.BASE_PATH;

export default defineConfig({
  base: repoName || '/',
  plugins: [react()],
});
