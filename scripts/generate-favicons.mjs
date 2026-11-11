import fs from 'node:fs'
import path from 'node:path'
import { chromium } from '@playwright/test'

const SVG_CONTENT = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="22" fill="#0B0F19"/>
  <rect x="2" y="2" width="96" height="96" rx="20" stroke="#334155" stroke-width="2.5" stroke-opacity="0.6"/>
  <!-- Clear Letter A -->
  <path d="M14 78L28 22H40L54 78H42L38.5 63H26.5L23 78H14ZM29 52H36L32.5 36L29 52Z" fill="url(#g-ay-purp)"/>
  <!-- Clear Letter Y -->
  <path d="M52 22H64L69.5 39L75 22H87L75.5 50V78H63.5V50L52 22Z" fill="url(#g-ay-lime)"/>
  <defs>
    <linearGradient id="g-ay-purp" x1="14" y1="22" x2="54" y2="78" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A855F7"/>
      <stop offset="1" stop-color="#6366F1"/>
    </linearGradient>
    <linearGradient id="g-ay-lime" x1="52" y1="22" x2="87" y2="78" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BEF264"/>
      <stop offset="0.6" stop-color="#A3E635"/>
      <stop offset="1" stop-color="#10B981"/>
    </linearGradient>
  </defs>
</svg>`

const SVG_MASKABLE_CONTENT = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0B0F19"/>
  <g transform="translate(10, 10) scale(0.8)">
    <rect width="100" height="100" rx="22" fill="#0B0F19"/>
    <rect x="2" y="2" width="96" height="96" rx="20" stroke="#334155" stroke-width="2.5" stroke-opacity="0.6"/>
    <!-- Clear Letter A -->
    <path d="M14 78L28 22H40L54 78H42L38.5 63H26.5L23 78H14ZM29 52H36L32.5 36L29 52Z" fill="url(#gm-ay-purp)"/>
    <!-- Clear Letter Y -->
    <path d="M52 22H64L69.5 39L75 22H87L75.5 50V78H63.5V50L52 22Z" fill="url(#gm-ay-lime)"/>
  </g>
  <defs>
    <linearGradient id="gm-ay-purp" x1="14" y1="22" x2="54" y2="78" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A855F7"/>
      <stop offset="1" stop-color="#6366F1"/>
    </linearGradient>
    <linearGradient id="gm-ay-lime" x1="52" y1="22" x2="87" y2="78" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BEF264"/>
      <stop offset="0.6" stop-color="#A3E635"/>
      <stop offset="1" stop-color="#10B981"/>
    </linearGradient>
  </defs>
</svg>`

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length
  const headerSize = 6
  const dirEntrySize = 16
  let offset = headerSize + count * dirEntrySize

  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0) // Reserved
  header.writeUInt16LE(1, 2) // Type 1 = ICO
  header.writeUInt16LE(count, 4) // Count

  const dirEntries = []
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize)
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0)
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1)
    entry.writeUInt8(0, 2) // Color count (0 = >=8bpp)
    entry.writeUInt8(0, 3) // Reserved
    entry.writeUInt16LE(1, 4) // Color planes
    entry.writeUInt16LE(32, 6) // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8) // Size of image data
    entry.writeUInt32LE(offset, 12) // Offset of image data
    dirEntries.push(entry)
    offset += item.buffer.length
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((b) => b.buffer)])
}

async function main() {
  console.log('Generating Side-by-Side Cyber Bold Favicon Suite...')

  const rootDir = process.cwd()
  const publicDir = path.join(rootDir, 'public')
  const appDir = path.join(rootDir, 'app')
  const iconsDir = path.join(publicDir, 'images', 'icons')

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true })
  }

  // 1. Write vector SVGs
  const publicSvgPath = path.join(publicDir, 'icon.svg')
  const appSvgPath = path.join(appDir, 'icon.svg')
  fs.writeFileSync(publicSvgPath, SVG_CONTENT, 'utf-8')
  fs.writeFileSync(appSvgPath, SVG_CONTENT, 'utf-8')
  console.log('Saved SVG icon to public/icon.svg and app/icon.svg')

  // 2. Launch Chromium for high-DPI rendering
  const browser = await chromium.launch()
  const page = await browser.newPage()

  async function renderSvgToPng(svg, size) {
    await page.setViewportSize({ width: size, height: size })
    const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: ${size}px; height: ${size}px; background: transparent; overflow: hidden; }
    svg { width: 100%; height: 100%; display: block; }
  </style>
</head>
<body>
  ${svg}
</body>
</html>`
    await page.setContent(html)
    return await page.screenshot({ type: 'png', omitBackground: true })
  }

  // Render required sizes
  console.log('Rendering raster sizes...')
  const png16 = await renderSvgToPng(SVG_CONTENT, 16)
  const png32 = await renderSvgToPng(SVG_CONTENT, 32)
  const png48 = await renderSvgToPng(SVG_CONTENT, 48)
  const png180 = await renderSvgToPng(SVG_CONTENT, 180)
  const png192 = await renderSvgToPng(SVG_CONTENT, 192)
  const png512 = await renderSvgToPng(SVG_CONTENT, 512)
  const pngMaskable512 = await renderSvgToPng(SVG_MASKABLE_CONTENT, 512)

  // Save PNG files
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16)
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32)
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), png48)
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180)
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180)
  fs.writeFileSync(path.join(iconsDir, 'icon-192x192.png'), png192)
  fs.writeFileSync(path.join(iconsDir, 'icon-512x512.png'), png512)
  fs.writeFileSync(path.join(iconsDir, 'maskable-icon-512x512.png'), pngMaskable512)
  console.log('Saved PNG icons across all resolutions (16, 32, 48, 180, 192, 512)')

  // 3. Assemble multi-size ICO
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ])

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer)
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer)
  fs.writeFileSync(path.join(publicDir, 'images', 'favicon.ico'), icoBuffer)
  console.log('Saved multi-resolution ICO (16, 32, 48) to public/favicon.ico, app/favicon.ico, public/images/favicon.ico')

  await browser.close()
  console.log('Favicon suite generation completed successfully!')
}

main().catch((err) => {
  console.error('Failed to generate favicons:', err)
  process.exit(1)
})
