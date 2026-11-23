import fs from 'node:fs'
import path from 'node:path'

const ROOT_DIR = process.cwd()
const BASE_URL = 'https://www.yusupovartur.com'
const LOCALES = ['en', 'ua', 'es', 'de']

function sanitizeDashes(str) {
  return str.replace(/[\u2014\u2013]/g, '-')
}

function unescapeTsString(raw) {
  return raw
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractFieldEn(content, fieldName) {
  const blockRegex = new RegExp(`${fieldName}\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, 'm')
  const blockMatch = content.match(blockRegex)
  if (!blockMatch) return ''
  const block = blockMatch[1]
  // Match en: '...' or en: "..." (handling escaped quotes)
  const singleMatch = block.match(/en\s*:\s*'((?:\\'|[^'])*)'/)
  if (singleMatch) return sanitizeDashes(unescapeTsString(singleMatch[1]))
  const doubleMatch = block.match(/en\s*:\s*"((?:\\"|[^"])*)"/)
  if (doubleMatch) return sanitizeDashes(unescapeTsString(doubleMatch[1]))
  return ''
}

function parseBlogPostsInCanonicalOrder() {
  const indexPath = path.resolve(ROOT_DIR, 'src/data/blog/index.ts')
  const indexContent = fs.readFileSync(indexPath, 'utf8')

  // Map variable name -> relative post file path
  const importMap = new Map()
  const importRegex = /import\s+\{\s*(\w+)\s*\}\s+from\s+['"]\.\/posts\/([^'"]+)['"]/g
  let m
  while ((m = importRegex.exec(indexContent)) !== null) {
    importMap.set(m[1], `${m[2]}.ts`)
  }

  // Extract canonical order from export const allBlogPosts: BlogPost[] = [ ... ]
  const arrayMatch = indexContent.match(/export const allBlogPosts\s*:\s*BlogPost\[\]\s*=\s*\[([\s\S]*?)\]/)
  if (!arrayMatch) {
    throw new Error('Could not locate allBlogPosts array in src/data/blog/index.ts')
  }

  const varNames = arrayMatch[1]
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('//'))

  const posts = []
  for (const varName of varNames) {
    const fileName = importMap.get(varName)
    if (!fileName) continue
    const filePath = path.resolve(ROOT_DIR, 'src/data/blog/posts', fileName)
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')

    const slugMatch = content.match(/slug\s*:\s*['"]([^'"]+)['"]/)
    const dateMatch = content.match(/date\s*:\s*['"]([^'"]+)['"]/)
    const tagsMatch = content.match(/tags\s*:\s*\[([\s\S]*?)\]/)

    const slug = slugMatch ? slugMatch[1] : fileName.replace(/\.ts$/, '')
    const date = dateMatch ? dateMatch[1] : '2026-11-12'
    const titleEn = extractFieldEn(content, 'title') || slug
    const descriptionEn = extractFieldEn(content, 'description') || titleEn
    const tags = tagsMatch
      ? tagsMatch[1]
          .split(',')
          .map((t) => t.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean)
      : []

    posts.push({
      slug,
      date,
      title: titleEn,
      description: descriptionEn,
      tags,
    })
  }

  return posts
}

function countProjects() {
  const registryPath = path.resolve(ROOT_DIR, 'src/lib/projectRegistry.ts')
  const content = fs.readFileSync(registryPath, 'utf8')
  const matches = content.match(/slug\s*:\s*['"][^'"]+['"]/g)
  return matches ? matches.length : 71
}

function countServices() {
  const servicesPath = path.resolve(ROOT_DIR, 'src/data/services/index.ts')
  const content = fs.readFileSync(servicesPath, 'utf8')
  const arrayMatch = content.match(/export const allServices\s*:\s*ServiceItem\[\]\s*=\s*\[([\s\S]*?)\]/)
  if (!arrayMatch) return 5
  return arrayMatch[1]
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('//')).length
}

function extractExistingProjectIndex() {
  const fullPath = path.resolve(ROOT_DIR, 'public/llms-full.txt')
  if (!fs.existsSync(fullPath)) return ''
  const existing = fs.readFileSync(fullPath, 'utf8')
  const idx = existing.indexOf('\n1. **Next.js 16 & Hybrid RAG Portfolio Platform**')
  if (idx === -1) return ''
  let section5Body = existing.slice(idx + 1).trim()
  // Refresh item 1 to accurately reflect 4 locales (EN/UA/ES/DE) and 71 projects
  section5Body = section5Body.replace(
    'Trilingual i18n (/en, /ua, /es)',
    '4-Locale i18n (/en, /ua, /es, /de)',
  )
  section5Body = section5Body.replace(
    'indexing 70 project case studies across 210+ localized SSG routes (EN/UA/ES)',
    'indexing 71 project case studies and 47 engineering articles across 512 localized SSG routes (EN/UA/ES/DE)',
  )
  return sanitizeDashes(section5Body)
}

function buildLlmsTxt({ blogPosts, projectCount, serviceCount, totalSitemapRoutes }) {
  const blogLines = blogPosts
    .map((p) => `- [${p.title}](${BASE_URL}/en/blog/${p.slug}): ${p.description}`)
    .join('\n')

  return sanitizeDashes(`# Artur Yusupov - Senior Fullstack Web Engineer & AI Developer

> Official portfolio and engineering knowledge base of Artur Yusupov (Seville, Spain, European Union). Specializing in Next.js 16 (React 19 Server Components), Custom & Headless WordPress (PHP 8+, ACF Pro, REST/GraphQL), TypeScript, Autonomous Hybrid RAG AI Assistants, Shopify Liquid, and WCAG 2.2 AA / EAA 2026 web accessibility compliance. Entity Disambiguation: Artur Yusupov is a Software Engineer and AI Developer residing in Seville, Spain (distinct from chess grandmaster Artur Mayakovich Jussupow and professional footballer Artur Rimovich Yusupov).

- Website (English): ${BASE_URL}/en
- Ukrainian Version: ${BASE_URL}/ua
- Spanish Version: ${BASE_URL}/es
- German Version (DACH): ${BASE_URL}/de
- Engineering Blog (${blogPosts.length} Articles): ${BASE_URL}/en/blog
- RSS / Atom Feed: ${BASE_URL}/feed.xml
- Extended Context: ${BASE_URL}/llms-full.txt
- Sitemap (${totalSitemapRoutes} Localized URLs): ${BASE_URL}/sitemap.xml
- LinkedIn: https://www.linkedin.com/in/artur-iusupov/
- Twitter / X: https://x.com/yusupovwebart
- GitHub: https://github.com/YusupovWebArt
- Privacy Policy (RGPD / LOPDGDD): ${BASE_URL}/en/privacy-policy (ES: ${BASE_URL}/es/privacy-policy | DE: ${BASE_URL}/de/privacy-policy)
- Cookie Policy (LSSI-CE & Consent Mode v2): ${BASE_URL}/en/cookie-policy (ES: ${BASE_URL}/es/cookie-policy | DE: ${BASE_URL}/de/cookie-policy)

## Core Engineering Capabilities & B2B Services

- **Fullstack Next.js 16 & React 19 Applications**: App Router, Server Components, TypeScript 6, Tailwind CSS v4, Supabase, sub-second Core Web Vitals (95-100 Lighthouse, LCP < 0.8s, CLS 0.00).
- **Custom & Headless WordPress Architecture**: Bespoke PHP 8+ themes, ACF Pro flexible content blocks, WooCommerce HPOS + Redis, WPGraphQL / REST API headless decoupling, AWS cloud migrations.
- **AI Engineering & Hybrid RAG Systems**: Custom in-browser and server-side Retrieval-Augmented Generation (RAG) assistants, Okapi BM25 + dense vector embeddings, deterministic fallback engines, and Spec-Driven AI SDLC.
- **EU Accessibility & DevSecOps Compliance**: WCAG 2.2 Level AA & European Accessibility Act (EAA 2026 / EN 301 549) keyboard/screen-reader engineering, strict CSP/HSTS headers, and zero-leak client-side contact obfuscation.

## Commercial B2B Services (${serviceCount} Services across EN / UA / ES / DE)

- [B2B Services Directory](${BASE_URL}/en/services) (ES: ${BASE_URL}/es/services | DE: ${BASE_URL}/de/services | UA: ${BASE_URL}/ua/services)
- [White-Label Web Engineering for Agencies](${BASE_URL}/en/services/white-label-agency-partner) (ES: ${BASE_URL}/es/services/white-label-agency-partner | DE: ${BASE_URL}/de/services/white-label-agency-partner): Bespoke Next.js 16 and WordPress development under strict NDA, 24-48h scoping turnaround.
- [Headless WordPress & Legacy Migration](${BASE_URL}/en/services/headless-wordpress-nextjs-migration) (ES: ${BASE_URL}/es/services/headless-wordpress-nextjs-migration | DE: ${BASE_URL}/de/services/headless-wordpress-nextjs-migration): Decoupled Next.js 16 frontend with sub-second speeds, zero downtime, and 100% SEO preservation.
- [Core Web Vitals & Performance Optimization](${BASE_URL}/en/services/web-performance-core-web-vitals) (ES: ${BASE_URL}/es/services/web-performance-core-web-vitals | DE: ${BASE_URL}/de/services/web-performance-core-web-vitals): Sub-0.8s load times, Google Ads Quality Score improvement, and reduced CPC.
- [Custom Web Development for Seville & Spain SMEs](${BASE_URL}/en/services/custom-web-development-seville) (ES: ${BASE_URL}/es/services/custom-web-development-seville | DE: ${BASE_URL}/de/services/custom-web-development-seville): Client-generating websites for businesses and clinics, local SEO, EAA 2026 accessibility.
- [Custom RAG AI Assistants & Business Automation](${BASE_URL}/en/services/rag-ai-assistants-business) (ES: ${BASE_URL}/es/services/rag-ai-assistants-business | DE: ${BASE_URL}/de/services/rag-ai-assistants-business): Grounded AI conversational agents answering strictly from business documents with 0% hallucinations.

## Personal Flagship Products

- [Next.js 16 & Hybrid RAG Portfolio Platform](${BASE_URL}/en/projects/yusupovartur-nextjs-portfolio): Enterprise fullstack platform with React 19 Server Components, autonomous Hybrid RAG engine indexing ${projectCount} case studies and ${blogPosts.length} engineering articles across ${totalSitemapRoutes} localized SSG routes (EN/UA/ES/DE), and WCAG 2.2 AA compliance.
- [Fullstack AI Lab](${BASE_URL}/en/projects/fullstack-ai-lab): Interactive EdTech platform for Fullstack mastery (React 19, Next.js 16, WordPress core internals, TypeScript) powered by native Rust MDX-RS compilation across 1,135+ lessons, in-browser WASM WordPress 7.0 / PHP 8.4 Playground, AI Technical Interview Engine, Google NotebookLM Audio Overview prompt generator, and Supabase personal cloud progress synchronization. Live: https://www.fullstackailab.com
- [Unitrition](${BASE_URL}/en/projects/unitrition): Personalized nutrition modeling platform supporting 10 dietary regimens, built with Next.js 16 App Router, Headless WordPress, Supabase, and USDA FoodData Central API. Live: https://www.unitrition.info
- [My React Portfolio Website](${BASE_URL}/en/projects/webart-react-portfolio): High-performance SPA/PWA built with React 19, TypeScript, Tailwind CSS v4, View Transitions API, and Vitest test suite.

## Selected Commercial Case Studies (${projectCount} Total Indexed)

- [IT-Magic (AWS Advanced Consulting Partner)](${BASE_URL}/en/projects/it-magic): Enterprise cloud consulting platform with custom PHP/WordPress architecture, Schema.org structured data, and top Google organic rankings.
- [Buhl WISO FinTech Germany](${BASE_URL}/en/projects/buhl-de): Zero-builder custom WordPress portal for German tax software with BaFin data security, strict GDPR compliance, and sub-90ms TTFB.
- [All Day Medical Care USA](${BASE_URL}/en/projects/alldaymedicalcare): HIPAA-compliant medical clinic portal with PHI encryption and sub-0.8s mobile booking.
- [AWS Migration Services](${BASE_URL}/en/projects/aws-migration-services): Dedicated cloud migration landing and lead-generation platform on AWS CloudFront, EC2, and RDS.
- [Front Desk Helpers](${BASE_URL}/en/projects/front-desk-helpers): Scalable B2B remote staffing and outsourcing platform with custom knowledge base and multi-tier blog.
- [Organic Bed RTL WooCommerce](${BASE_URL}/en/projects/organic-bed): Bidirectional RTL WooCommerce storefront with automated WebP pipeline and sub-second checkout.
- [Kidzely Shopify Store](${BASE_URL}/en/projects/kidzely): International Shopify Liquid e-commerce storefront with optimized checkout conversion and mobile UX.

## Engineering Blog & Architectural Deep Dives (${blogPosts.length} Articles)

${blogLines}
`)
}

function buildLlmsFullTxt({
  blogPosts,
  projectCount,
  serviceCount,
  totalSitemapRoutes,
  projectIndexBody,
}) {
  const blogEntries = blogPosts
    .map(
      (p, i) =>
        `${i + 1}. **${p.title}**: ${BASE_URL}/en/blog/${p.slug}\n` +
        `   - **Published**: ${p.date} | **Tags**: ${p.tags.join(', ')}\n` +
        `   - **Summary**: ${p.description}`,
    )
    .join('\n')

  const blogRouteCount = blogPosts.length * LOCALES.length
  const projectRouteCount = projectCount * LOCALES.length

  return sanitizeDashes(`# Artur Yusupov - Extended Engineering Profile & ${projectCount}-Project Portfolio Index (llms-full.txt)

> Comprehensive reference document for AI search engines, technical recruiters, and CTOs evaluating Artur Yusupov's software engineering capabilities, production metrics, architectural patterns, and case studies.

## 1. Executive Summary

- **Name**: Artur Yusupov
- **Role**: Senior Fullstack Web Engineer & AI Developer
- **Location**: Seville, Spain (European Union) - Available for remote roles, B2B contracts, and agency partnerships.
- **Experience**: 5+ years of commercial software engineering across ${projectCount} production web platforms, e-commerce stores, cloud portals, and interactive web applications.
- **Entity Disambiguation**: Artur Yusupov is a Software Engineer and AI Developer residing in Seville, Spain (distinct from chess grandmaster Artur Mayakovich Jussupow and professional footballer Artur Rimovich Yusupov).
- **Languages**: English, Spanish, Ukrainian, German UI/SEO, Russian (Full 4-locale UI/SEO support on yusupovartur.com in EN, UA, ES, DE across ${totalSitemapRoutes} localized sitemap routes).
- **Primary URLs**: ${BASE_URL}/en | ${BASE_URL}/ua | ${BASE_URL}/es | ${BASE_URL}/de
- **RSS / Atom Feed**: ${BASE_URL}/feed.xml
- **GitHub**: https://github.com/YusupovWebArt
- **LinkedIn**: https://www.linkedin.com/in/artur-iusupov/
- **Twitter / X**: https://x.com/yusupovwebart
- **Privacy Policy (RGPD / LOPDGDD)**: ${BASE_URL}/en/privacy-policy (ES: ${BASE_URL}/es/privacy-policy | DE: ${BASE_URL}/de/privacy-policy)
- **Cookie Policy (LSSI-CE & Consent Mode v2)**: ${BASE_URL}/en/cookie-policy (ES: ${BASE_URL}/es/cookie-policy | DE: ${BASE_URL}/de/cookie-policy)
- **B2B Services Directory (${serviceCount} Services)**: ${BASE_URL}/en/services (ES: ${BASE_URL}/es/services | DE: ${BASE_URL}/de/services)
- **White-Label Agency Web Development**: ${BASE_URL}/en/services/white-label-agency-partner
- **Headless WordPress & Next.js 16 Migration**: ${BASE_URL}/en/services/headless-wordpress-nextjs-migration
- **Web Performance & Core Web Vitals Optimization**: ${BASE_URL}/en/services/web-performance-core-web-vitals
- **Custom Web Development in Seville & Spain**: ${BASE_URL}/en/services/custom-web-development-seville
- **Custom RAG AI Assistants for Businesses**: ${BASE_URL}/en/services/rag-ai-assistants-business

## 2. Technical Stack & Engineering Standards

- **Frontend & Modern Web**: Next.js 16 (App Router, React Server Components, SSG/ISR), React 19, TypeScript 6 (Strict Zero-\`any\`), Tailwind CSS v4, HTML5, CSS3/SASS, View Transitions API, Zustand v5.
- **Backend & CMS Platforms**: WordPress Core Internals, Custom PHP 8+ Themes & Plugins, Advanced Custom Fields (ACF Pro), Headless WordPress (WP REST API & WPGraphQL), WooCommerce HPOS + Redis, Node.js, Supabase (PostgreSQL + RLS), Shopify Liquid, Wix Velo.
- **AI & RAG Engineering**: Custom Hybrid Retrieval-Augmented Generation (Okapi BM25 + cosine similarity + Damerau-Levenshtein typo tolerance + deterministic multilingual synthesis across EN/UA/ES/DE), Vercel AI SDK, Google Gemini / NotebookLM prompt pipelines, Spec-Driven AI SDLC.
- **Cloud, DevSecOps & Quality**: AWS (EC2, S3, CloudFront, RDS, Route 53), Vercel Edge Network, Cloudflare WAF/CDN, Docker, GitHub Actions CI/CD, Vitest + React Testing Library (239+ automated tests), Playwright E2E + Axe-Core WCAG 2.2 AA / EAA 2026 compliance, strict HTTP security headers (CSP, HSTS, X-Frame-Options).

## 3. Flagship Case Studies (Detailed Breakdown)

### 3.1. Fullstack AI Lab - Interactive Fullstack Engineering Platform
- **Case Study URL**: ${BASE_URL}/en/projects/fullstack-ai-lab
- **Deep-Dive Article**: ${BASE_URL}/en/blog/fullstack-ai-lab-interactive-edtech-architecture
- **Live URL**: https://www.fullstackailab.com
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Rust MDX-RS, Zustand v5, Supabase, Vitest, Gemini NotebookLM Audio Prompt Engine.
- **Highlights**:
  - Compiles 1,135+ MDX lessons and 1,700+ static pages in under 90 seconds (reduced from 21.6 minutes via an in-memory content caching pipeline and native Rust MDX-RS).
  - Features interactive Explorable Explanations (\`<ArchitectureFlow>\`, \`<StepFlow>\`, WordPress hook lifecycle and production outage simulators), in-browser WASM WordPress 7.0 / PHP 8.4 Playground, formative checkpoints (+15 XP), Spaced Repetition flashcards, and Supabase-backed personal cloud progress synchronization.
  - Automated zero-metaphor first-principles prompt generator for Google NotebookLM Deep Dive Audio Overviews across 4 locales (EN/RU/UK/ES).

### 3.2. Next.js 16 & Hybrid RAG Portfolio Platform
- **Case Study URL**: ${BASE_URL}/en/projects/yusupovartur-nextjs-portfolio
- **Deep-Dive Article**: ${BASE_URL}/en/blog/autonomous-hybrid-rag-architecture-browser
- **Live URL**: ${BASE_URL}
- **Stack**: Next.js 16 App Router, React 19 Server Components, TypeScript 6, Tailwind CSS v4, Vercel AI SDK, Custom Hybrid RAG Engine, Vitest.
- **Highlights**:
  - Dual-runtime architecture supporting SSR/SSG on Vercel (${projectRouteCount} localized project pages, ${blogRouteCount} blog article routes, and ${totalSitemapRoutes} total localized sitemap URLs across EN/UA/ES/DE) and static SPA export on GitHub Pages.
  - Built-in Hybrid RAG AI Assistant indexing all ${projectCount} projects and ${blogPosts.length} engineering articles with interactive generative UI cards, timeline estimator, stack comparison matrix, and zero-leak Base64 contact protection.

### 3.3. Unitrition - Personalized Nutrition & Dietary Platform
- **Case Study URL**: ${BASE_URL}/en/projects/unitrition
- **Deep-Dive Article**: ${BASE_URL}/en/blog/unitrition-headless-healthtech-architecture
- **Live URL**: https://www.unitrition.info
- **Stack**: Next.js 16 App Router, React 19, TypeScript, Headless WordPress, Supabase, USDA FoodData Central API, Tailwind CSS.
- **Highlights**:
  - Supports 10 specialized diet regimens with real-time Bread Units and macro/micronutrient modeling and bilingual localization.

### 3.4. My React Portfolio Website (WebArt SPA/PWA)
- **Case Study URL**: ${BASE_URL}/en/projects/webart-react-portfolio
- **Deep-Dive Article**: ${BASE_URL}/en/blog/sub-second-cwv-bundle-optimization
- **Live URL**: https://yusupovwebart.github.io/Portfolio/
- **Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, View Transitions API, Vitest.
- **Highlights**:
  - Sub-second Core Web Vitals (98KB initial JS bundle, 0.7s LCP, 0.00 CLS) and custom windowing pagination across ${projectCount} projects.

### 3.5. IT-Magic - Enterprise AWS Consulting Portal
- **Case Study URL**: ${BASE_URL}/en/projects/it-magic
- **Live URL**: https://itmagic.pro/
- **Stack**: Custom WordPress Theme (PHP 8+), ACF Pro, AWS CloudFront, S3, EC2, Schema.org JSON-LD, Core Web Vitals Optimization.
- **Highlights**:
  - Engineered for an AWS Advanced Consulting Partner with 95+ PageSpeed scores, multilingual architecture, and top Google rankings for competitive DevOps keywords.

## 4. Complete Engineering Blog Index (${blogPosts.length} Articles across EN / UA / ES / DE = ${blogRouteCount} Routes)

${blogEntries}

## 5. Complete ${projectCount}-Project Portfolio Index (${projectRouteCount} Localized Case Study Routes across EN / UA / ES / DE)

${projectIndexBody}
`)
}

function main() {
  const blogPosts = parseBlogPostsInCanonicalOrder()
  const projectCount = countProjects()
  const serviceCount = countServices()
  // Per locale: 1 home + projectCount + 1 blog index + blogPosts.length + 1 services index + serviceCount + 2 legal
  const totalSitemapRoutes =
    LOCALES.length * (1 + projectCount + 1 + blogPosts.length + 1 + serviceCount + 2)

  const projectIndexBody = extractExistingProjectIndex()

  const llmsTxt = buildLlmsTxt({ blogPosts, projectCount, serviceCount, totalSitemapRoutes })
  const llmsFullTxt = buildLlmsFullTxt({
    blogPosts,
    projectCount,
    serviceCount,
    totalSitemapRoutes,
    projectIndexBody,
  })

  fs.writeFileSync(path.resolve(ROOT_DIR, 'public/llms.txt'), llmsTxt, 'utf8')
  fs.writeFileSync(path.resolve(ROOT_DIR, 'public/llms-full.txt'), llmsFullTxt, 'utf8')

  console.log(
    `[OK] Generated public/llms.txt and public/llms-full.txt (${blogPosts.length} blog posts, ${projectCount} projects, ${serviceCount} services, ${totalSitemapRoutes} localized URLs)`,
  )
}

main()
