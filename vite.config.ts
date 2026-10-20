import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'

const SPA_CSP = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://yusupovwebart.github.io https://*.google-analytics.com https://www.google-analytics.com",
  "font-src 'self' data:",
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
  transformIndexHtml(html) {
    const hashes = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(
      (m) => `'sha256-${createHash('sha256').update(m[1].replace(/\r\n?/g, '\n')).digest('base64')}'`,
    )
    const csp = SPA_CSP.replace("script-src 'self'", `script-src 'self' ${hashes.join(' ')}`)
    return [
      {
        tag: 'meta',
        attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
        injectTo: 'head-prepend',
      },
    ]
  },
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
            if (/\/node_modules\/(ai|@ai-sdk)\//.test(id)) {
              return 'vendor-ai'
            }
            return 'vendor'
          }
          if (id.includes('src/components/projects/') || id.includes('src/lib/projectRegistry')) {
            return 'projects-data'
          }
          if (id.includes('src/data/blog')) {
            return 'blog-data'
          }
          if (id.includes('src/locales/ua')) {
            return 'locale-ua'
          }
          if (id.includes('src/locales/es')) {
            return 'locale-es'
          }
          if (id.includes('src/locales/')) {
            return 'locale-en'
          }
        },
      },
    },
  },
})
