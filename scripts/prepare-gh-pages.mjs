import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "pnpm build" before deploying.')
  process.exit(1)
}

// Write vercel.json into dist to explicitly instruct Vercel to ignore builds on gh-pages branch
const vercelConfig = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: null,
  ignoreCommand: 'exit 0',
}

fs.writeFileSync(
  path.join(distDir, 'vercel.json'),
  JSON.stringify(vercelConfig, null, 2),
  'utf8',
)

// Remove duplicate sitemap.xml from gh-pages build so search engines only index yusupovartur.com
const distSitemap = path.join(distDir, 'sitemap.xml')
if (fs.existsSync(distSitemap)) {
  fs.unlinkSync(distSitemap)
}

// Write dedicated robots.txt for gh-pages demo to prevent duplicate content indexing
const ghPagesRobots = `# GitHub Pages React SPA Demo - Canonical site is https://www.yusupovartur.com/en
User-agent: *
Disallow: /

Sitemap: https://www.yusupovartur.com/sitemap.xml
`
fs.writeFileSync(path.join(distDir, 'robots.txt'), ghPagesRobots, 'utf8')

console.log('[OK] Generated dist/vercel.json and SEO-isolated dist/robots.txt for gh-pages')
