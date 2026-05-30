import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Conditional Vite config: omit rollupOptions.input during SSR builds to avoid Nitro errors.
export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  ...(ssrBuild
    ? {}
    : {
        build: {
          rollupOptions: {
            input: {
              main: './src/main.tsx',
              index: './index.html',
            },
          },
        },
      }),
})
