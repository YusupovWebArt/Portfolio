import fs from 'node:fs'
import path from 'node:path'
import { chromium } from '@playwright/test'

const ROOT_DIR = process.cwd()
const HERO_PIC_PATH = path.resolve(ROOT_DIR, 'public/images/hero-pic.webp')
const OUT_JPG_PATH = path.resolve(ROOT_DIR, 'public/images/og-image.jpg')
const OUT_PNG_PATH = path.resolve(ROOT_DIR, 'public/images/og-image.png')

const FONT_JAKARTA_PATH = path.resolve(
  ROOT_DIR,
  'node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2',
)
const FONT_MONO_PATH = path.resolve(
  ROOT_DIR,
  'node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
)

const heroBase64 = `data:image/webp;base64,${fs.readFileSync(HERO_PIC_PATH).toString('base64')}`
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

const htmlA1 = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  ${fontCss}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #0b0f19;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    color: #f8fafc;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    padding: 58px 68px;
  }
  .bg-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(148, 163, 184, 0.14) 1.5px, transparent 1.5px);
    background-size: 32px 32px;
    opacity: 0.7;
  }
  .glow-purple {
    position: absolute;
    top: -160px;
    left: -120px;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147, 51, 234, 0.28) 0%, rgba(147, 51, 234, 0) 70%);
  }
  .glow-lime {
    position: absolute;
    bottom: -180px;
    right: -60px;
    width: 580px;
    height: 580px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(163, 230, 53, 0.20) 0%, rgba(163, 230, 53, 0) 70%);
  }
  .layout {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    align-self: flex-start;
    padding: 10px 18px;
    border-radius: 999px;
    background: rgba(163, 230, 53, 0.10);
    border: 1.5px solid rgba(163, 230, 53, 0.35);
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #bef264;
    text-transform: uppercase;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #a3e635;
    box-shadow: 0 0 12px #a3e635;
  }
  .name {
    font-size: 74px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.02;
    color: #ffffff;
  }
  .role {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    color: #a3e635;
    letter-spacing: -0.01em;
  }
  .chips {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, max-content));
    gap: 14px;
    margin-top: 6px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 20px;
    border-radius: 14px;
    background: rgba(30, 41, 59, 0.85);
    border: 1.5px solid rgba(148, 163, 184, 0.22);
    font-size: 20px;
    font-weight: 700;
    color: #e2e8f0;
    white-space: nowrap;
  }
  .chip.accent {
    background: rgba(126, 34, 206, 0.22);
    border-color: rgba(192, 132, 252, 0.42);
    color: #f3e8ff;
  }
  .chip-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #a3e635;
    flex-shrink: 0;
  }
  .chip.accent .chip-dot {
    background: #c084fc;
  }
  .footer-url {
    margin-top: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 19px;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0.02em;
  }
  .right {
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .avatar-ring {
    width: 332px;
    height: 332px;
    border-radius: 50%;
    padding: 6px;
    background: linear-gradient(135deg, #a3e635 0%, #9333ea 100%);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55), 0 0 50px rgba(147, 51, 234, 0.30);
  }
  .avatar-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: #0f172a;
    border: 4px solid #0b0f19;
  }
  .avatar-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 18%;
    transform: scale(1.08);
    filter: contrast(1.08) brightness(1.03);
  }
  .rag-badge {
    position: absolute;
    bottom: -14px;
    padding: 10px 20px;
    border-radius: 999px;
    background: #0f172a;
    border: 1.5px solid rgba(163, 230, 53, 0.55);
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    font-weight: 700;
    color: #a3e635;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.6);
    letter-spacing: 0.05em;
  }
</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="glow-purple"></div>
  <div class="glow-lime"></div>
  <div class="layout">
    <div class="left">
      <div class="status-pill"><span class="dot"></span> 71+ PROJECTS · 5+ YRS EXPERIENCE</div>
      <div class="name">Artur Yusupov</div>
      <div class="role">Full-Stack Engineer &amp; AI-First Developer</div>
      <div class="chips">
        <div class="chip"><span class="chip-dot"></span> Next.js 16 · React 19</div>
        <div class="chip"><span class="chip-dot"></span> WordPress · Headless</div>
        <div class="chip accent"><span class="chip-dot"></span> Spec-Driven AI (SDD) + TDD</div>
        <div class="chip accent"><span class="chip-dot"></span> Technical SEO &amp; GEO</div>
      </div>
      <div class="footer-url">yusupovartur.com · Interactive Hybrid RAG Portfolio</div>
    </div>
    <div class="right">
      <div class="avatar-ring">
        <div class="avatar-inner">
          <img src="${heroBase64}" alt="Artur Yusupov" />
        </div>
      </div>
      <div class="rag-badge">HYBRID RAG AI INSIDE</div>
    </div>
  </div>
</body>
</html>`

async function generate() {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    })
    await page.setContent(htmlA1, { waitUntil: 'load' })
    await page.screenshot({ path: OUT_JPG_PATH, type: 'jpeg', quality: 92 })
    await page.screenshot({ path: OUT_PNG_PATH, type: 'png' })

    const jpgKb = (fs.statSync(OUT_JPG_PATH).size / 1024).toFixed(1)
    const pngKb = (fs.statSync(OUT_PNG_PATH).size / 1024).toFixed(1)
    console.log(`Generated ${OUT_JPG_PATH} (${jpgKb} KB) and ${OUT_PNG_PATH} (${pngKb} KB)`)
  } finally {
    await browser.close()
  }
}

generate().catch((error) => {
  console.error(error)
  process.exit(1)
})
