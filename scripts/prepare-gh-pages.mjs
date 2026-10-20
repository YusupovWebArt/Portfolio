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

console.log('✅ Generated dist/vercel.json (instructs Vercel to ignore gh-pages branch)')
