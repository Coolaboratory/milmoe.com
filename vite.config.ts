import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// base is '/' everywhere — milmoe.com is served from its own domain root
// via GitHub Pages' CNAME custom-domain support (public/CNAME), not from
// the github.io/milmoe.com/ repo-name subpath, so no path prefix is ever
// needed for any environment (Vercel staging or production).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      // Native multi-page build: each case-study one-pager is a real static
      // HTML file at build time (dist/work/<slug>/index.html), served
      // directly by GitHub Pages with no client-side router and no
      // 404->redirect hack. See work/<slug>/index.html + main.tsx for the
      // per-page entries, all mounting the shared OnePager component with
      // per-page content.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        geDigital: fileURLToPath(new URL('./work/ge-digital/index.html', import.meta.url)),
        blueOrigin: fileURLToPath(new URL('./work/blue-origin/index.html', import.meta.url)),
        ontrak: fileURLToPath(new URL('./work/ontrak/index.html', import.meta.url)),
      },
    },
  },
})
