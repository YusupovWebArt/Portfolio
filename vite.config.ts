import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const SPA_CSP = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://yusupovwebart.github.io https://*.google-analytics.com https://www.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

const injectCsp = (): Plugin => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: SPA_CSP },
      injectTo: 'head-prepend',
    },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectCsp()],
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
          if (id.includes('src/lib/contacts')) {
            return 'contacts'
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
