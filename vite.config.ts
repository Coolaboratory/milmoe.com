import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: '/milmoe.com/',
  build: {
    rollupOptions: {
      // Native multi-page build: each case-study one-pager is a real static
      // HTML file at build time (dist/work/<slug>/index.html), served
      // directly by GitHub Pages with no client-side router and no
      // 404->redirect hack. See work/<slug>/index.html + main.tsx for the
      // per-page entries, all mounting the shared WorkStub component.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        geDigital: fileURLToPath(new URL('./work/ge-digital/index.html', import.meta.url)),
        blueOrigin: fileURLToPath(new URL('./work/blue-origin/index.html', import.meta.url)),
        ontrak: fileURLToPath(new URL('./work/ontrak/index.html', import.meta.url)),
      },
    },
  },
})
