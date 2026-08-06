import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// base defaults to '/' (correct for Vercel staging and any other host
// serving from its own domain root). Only GitHub Pages needs the
// '/milmoe.com/' repo-name subpath, so that's opt-in via GH_PAGES, set
// explicitly in .github/workflows/deploy.yml's build step — deliberately
// NOT keyed off Vercel's own env vars, since those aren't guaranteed to be
// exposed to the build without an extra per-project toggle. When this
// branch is eventually promoted to main, deploy.yml's build step there
// needs `env: GH_PAGES: 'true'` added too, or production will build with
// the wrong base path.
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES ? '/milmoe.com/' : '/',
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
