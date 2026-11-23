import fs from 'node:fs'
import path from 'node:path'
import { chromium } from '@playwright/test'

const ROOT_DIR = process.cwd()
const BLOG_IMG_DIR = path.resolve(ROOT_DIR, 'public/images/blog')
const OG_OUT_DIR = path.resolve(BLOG_IMG_DIR, 'og')

const FONT_JAKARTA_PATH = path.resolve(
  ROOT_DIR,
  'node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2',
)
const FONT_MONO_PATH = path.resolve(
  ROOT_DIR,
  'node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
)

const jakartaBase64 = fs.existsSync(FONT_JAKARTA_PATH)
  ? `data:font/woff2;base64,${fs.readFileSync(FONT_JAKARTA_PATH).toString('base64')}`
  : ''
const monoBase64 = fs.existsSync(FONT_MONO_PATH)
  ? `data:font/woff2;base64,${fs.readFileSync(FONT_MONO_PATH).toString('base64')}`
  : ''

const fontCss = `
  ${jakartaBase64 ? `@font-face { font-family: 'Plus Jakarta Sans'; src: url('${jakartaBase64}') format('woff2'); font-weight: 100 900; font-style: normal; }` : ''}
  ${monoBase64 ? `@font-face { font-family: 'JetBrains Mono'; src: url('${monoBase64}') format('woff2'); font-weight: 100 800; font-style: normal; }` : ''}
`

async function main() {
  if (!fs.existsSync(OG_OUT_DIR)) {
    fs.mkdirSync(OG_OUT_DIR, { recursive: true })
  }

  const svgFiles = fs
    .readdirSync(BLOG_IMG_DIR)
    .filter((f) => f.endsWith('.svg'))
    .sort()

  console.log(`Rendering ${svgFiles.length} blog SVG covers into 1200x630 PNG assets...`)

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  })
  const page = await context.newPage()

  let rendered = 0
  for (const svgFile of svgFiles) {
    const svgPath = path.join(BLOG_IMG_DIR, svgFile)
    const pngName = svgFile.replace(/\.svg$/i, '.png')
    const outPath = path.join(OG_OUT_DIR, pngName)
    const svgRaw = fs.readFileSync(svgPath, 'utf8')

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  ${fontCss}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: #030712;
  }
  svg {
    display: block;
    width: 1200px;
    height: 630px;
  }
</style>
</head>
<body>${svgRaw}</body>
</html>`

    await page.setContent(html, { waitUntil: 'load' })
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({
      path: outPath,
      type: 'png',
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    })
    rendered++
  }

  await browser.close()
  console.log(`[OK] Rendered ${rendered} PNG covers into public/images/blog/og/`)
}

main().catch((err) => {
  console.error('[ERROR] Failed to render blog OG PNGs:', err)
  process.exit(1)
})
