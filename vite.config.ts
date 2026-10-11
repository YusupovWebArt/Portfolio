import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons') || id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            if (id.includes('ai') || id.includes('@ai-sdk')) {
              return 'vendor-ai'
            }
            return 'vendor'
          }
          if (id.includes('src/components/projects/') || id.includes('src/lib/projectRegistry')) {
            return 'projects-data'
          }
          if (id.includes('src/locales/')) {
            return 'locales'
          }
        },
      },
    },
  },
})

