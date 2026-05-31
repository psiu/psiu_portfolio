import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// Plain SPA config — no SSR/Nitro. Produces a static dist/ that Netlify
// serves under /c/ via the redirect rules in netlify.toml.
export default defineConfig({
  base: '/c/',
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
