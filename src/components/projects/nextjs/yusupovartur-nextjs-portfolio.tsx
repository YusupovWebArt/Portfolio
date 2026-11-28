import { Project } from '../project-types'

const yusupovarturNextjsPortfolio: Project = {
  id: 29500,
  isPersonal: true,
  title: 'Next.js 16 & Hybrid RAG Portfolio Platform',
  description:
    'Enterprise-grade fullstack portfolio and AI engineering platform built with Next.js 16 App Router, React 19 Server Components, TypeScript 6, and a build-time precomputed Hybrid RAG AI Assistant (1.22ms median Edge CPU) indexing 71 case studies and 48 engineering articles across 520+ static routes (EN/UA/ES/DE). Deployed on Cloudflare Workers + Static Assets ($0/mo unlimited static bandwidth) with Dual CI/CD, 7 edge HTTP security headers, privacy-first GA4 Consent Mode v2, GSC + IndexNow, and WCAG 2.2 AA compliance.',
  descriptionUa:
    'Корпоративна fullstack-платформа портфоліо на Next.js 16 App Router, React 19 Server Components, TypeScript 6 та передзібраному Hybrid RAG AI-асистенті (1.22ms медіанний Edge CPU) з індексацією 71 кейсу та 48 інженерних статей на 520+ статичних маршрутах (EN/UA/ES/DE). Розгорнута на Cloudflare Workers + Static Assets ($0/міс, безлімітна статика) із подвійним CI/CD, 7 edge-заголовками безпеки, GA4 Consent Mode v2, GSC + IndexNow та WCAG 2.2 AA.',
  descriptionEs:
    'Plataforma fullstack de portfolio de nivel empresarial construida con Next.js 16 App Router, React 19 Server Components, TypeScript 6 y un asistente de IA Hybrid RAG precompilado en build (1.22ms CPU mediana en Edge) que indexa 71 casos de estudio y 48 artículos técnicos en 520+ rutas estáticas (EN/UA/ES/DE). Desplegada en Cloudflare Workers + Static Assets ($0/mes, ancho de banda estático ilimitado) con CI/CD dual, 7 cabeceras de seguridad, GA4 Consent Mode v2, GSC + IndexNow y WCAG 2.2 AA.',
  descriptionDe:
    'Enterprise-Fullstack-Portfolio- und KI-Engineering-Plattform auf Basis von Next.js 16 App Router, React 19 Server Components, TypeScript 6 und einem zur Build-Zeit vorberechneten Hybrid-RAG-KI-Assistenten (1,22ms Median-Edge-CPU), der 71 Fallstudien und 48 Fachartikel auf 520+ statischen Routen (EN/UA/ES/DE) indexiert. Gehostet auf Cloudflare Workers + Static Assets ($0/Monat, unlimitierte Static Assets) mit Dual-CI/CD, 7 HTTP-Security-Headern, GA4 Consent Mode v2, GSC + IndexNow und WCAG 2.2 AA.',
  fullDescription:
    'This production fullstack platform (yusupovartur.com) represents the Next.js 16 App Router evolution of Artur Yusupov\'s engineering portfolio, engineered for $0/month predictable operations on Cloudflare Workers + Static Assets. Its static export pipeline pre-renders 520+ localized pages (5,751 static assets) across four languages (/en, /ua, /es, /de) for 71 case studies, 48 technical deep-dives, and 5 B2B service pages, serving 99.5%+ of traffic directly from unlimited Cloudflare Static Assets with 0 Worker invocations. Exclusively POST /api/chat invokes the thin Cloudflare Worker (run_worker_first: ["/api/*"]), backed by a build-time precomputed inverted BM25 index (341 chunks, 17,393 tokens, Float64Array scoring, zero-allocation Damerau-Levenshtein) that runs at 1.22ms median CPU (down from 206ms) and 17.93 MB P50 RAM with HMAC-SHA256 rate limiting via cf-connecting-ip. Automated Dual CI/CD combines Cloudflare Workers Builds for primary production with a 9-stage GitHub Actions DevSecOps pipeline (Gitleaks, strict zero-any tsc, ESLint, 249 Vitest specs, pnpm audit, contact-leak scan, Playwright + axe-core WCAG 2.2 AA, LHCI) deploying the SPA fallback mirror. All 7 HTTP security headers, Always Use HTTPS, Bot Fight Mode, GA4 Consent Mode v2 Basic, GSC domain sitemap (516 URLs), IndexNow, RSS 2.0 (/feed.xml), and automated llms.txt operate in production with zero errors.',
  fullDescriptionUa:
    'Ця продакшн fullstack-платформа (yusupovartur.com) є еволюцією інженерного портфоліо Артура Юсупова на базі Next.js 16 App Router, спроєктованою для стабільної роботи за $0/міс на Cloudflare Workers + Static Assets. Пайплайн статичного експорту попередньо генерує 520+ локалізованих сторінок (5 751 статичний файл) чотирма мовами (/en, /ua, /es, /de) для 71 кейсу, 48 інженерних статей і 5 B2B-послуг, віддаючи 99.5%+ трафіку напряму з безлімітних Cloudflare Static Assets із 0 викликів Worker. Лише POST /api/chat запускає тонкий Cloudflare Worker (run_worker_first: ["/api/*"]) із передзібраним на етапі білду інвертованим BM25-індексом (341 чанк, 17 393 токени, Float64Array-скоринг, zero-allocation Damerau-Levenshtein), що працює за 1.22ms медіанного CPU (знижено з 206ms) і 17.93 MB P50 RAM з HMAC-SHA256 rate limiting по cf-connecting-ip. Автоматизований подвійний CI/CD поєднує Cloudflare Workers Builds для основного продакшну та 9-етапний DevSecOps-конвеєр GitHub Actions (Gitleaks, zero-any tsc, ESLint, 249 тестів Vitest, pnpm audit, сканер витоку контактів, Playwright + axe-core WCAG 2.2 AA, LHCI) для резервного SPA-дзеркала. Усі 7 HTTP-заголовків безпеки, Always Use HTTPS, Bot Fight Mode, GA4 Consent Mode v2 Basic, Google Search Console (516 URL), IndexNow, RSS 2.0 (/feed.xml) та автоматизований llms.txt працюють у проді без жодної помилки.',
  fullDescriptionEs:
    'Esta plataforma fullstack en producción (yusupovartur.com) representa la evolución en Next.js 16 App Router del portfolio de ingeniería de Artur Yusupov, diseñada para operar a $0/mes en Cloudflare Workers + Static Assets. Su pipeline de exportación estática pre-renderiza 520+ páginas localizadas (5.751 archivos estáticos) en cuatro idiomas (/en, /ua, /es, /de) para 71 casos de estudio, 48 artículos técnicos y 5 páginas B2B, sirviendo más del 99.5% del tráfico desde Cloudflare Static Assets ilimitados con 0 invocaciones de Worker. Solo POST /api/chat ejecuta el Cloudflare Worker (run_worker_first: ["/api/*"]), respaldado por un índice invertido BM25 precompilado en build (341 chunks, 17.393 tokens, puntuación Float64Array, Damerau-Levenshtein sin asignaciones) que opera en 1.22ms de CPU mediana (frente a 206ms) y 17.93 MB P50 RAM con rate limiting HMAC-SHA256 sobre cf-connecting-ip. El CI/CD dual combina Cloudflare Workers Builds para producción principal con un pipeline DevSecOps de 9 etapas en GitHub Actions (Gitleaks, tsc zero-any, ESLint, 249 tests Vitest, pnpm audit, escáner de fuga de contactos, Playwright + axe-core WCAG 2.2 AA, LHCI) para el espejo SPA. Las 7 cabeceras de seguridad, Always Use HTTPS, Bot Fight Mode, GA4 Consent Mode v2 Basic, GSC (516 URLs), IndexNow, RSS 2.0 (/feed.xml) y llms.txt automatizado operan en producción con cero errores.',
  fullDescriptionDe:
    'Diese produktive Fullstack-Plattform (yusupovartur.com) ist die Next.js 16 App Router-Evolution des Engineering-Portfolios von Artur Yusupov, ausgelegt auf $0/Monat Betrieb auf Cloudflare Workers + Static Assets. Die Static-Export-Pipeline rendert 520+ lokalisierte Seiten (5.751 statische Dateien) in vier Sprachen (/en, /ua, /es, /de) für 71 Fallstudien, 48 Fachartikel und 5 B2B-Leistungen vor und liefert 99,5 %+ des Traffics direkt über unlimitierte Cloudflare Static Assets mit 0 Worker-Aufrufen aus. Ausschließlich POST /api/chat ruft den schlanken Cloudflare Worker (run_worker_first: ["/api/*"]) mit einem zur Build-Zeit vorberechneten invertierten BM25-Index auf (341 Chunks, 17.393 Tokens, Float64Array-Scoring, Zero-Allocation-Damerau-Levenshtein) - mit 1,22ms Median-CPU (von 206ms reduziert), 17,93 MB P50 RAM und HMAC-SHA256-Rate-Limiting über cf-connecting-ip. Das automatisierte Dual-CI/CD verbindet Cloudflare Workers Builds für die Hauptproduktion mit einer 9-stufigen GitHub-Actions-DevSecOps-Pipeline (Gitleaks, zero-any tsc, ESLint, 249 Vitest-Specs, pnpm audit, Contact-Leak-Scan, Playwright + axe-core WCAG 2.2 AA, LHCI) für den SPA-Mirror. Alle 7 HTTP-Security-Header, Always Use HTTPS, Bot Fight Mode, GA4 Consent Mode v2 Basic, GSC (516 URLs), IndexNow, RSS 2.0 (/feed.xml) und automatisiertes llms.txt laufen fehlerfrei im Produktivbetrieb.',
  detailHeroLine:
    'NEXT.JS 16 + CLOUDFLARE WORKERS ($0/MO) · 1.22MS PREBUILT HYBRID RAG · 520+ SSG ROUTES (EN/UA/ES/DE) · DUAL CI/CD & DEVSECOPS · WCAG 2.2 AA',
  detailMetrics: [
    { value: '1.22 ms', label: 'Edge Worker Median CPU (~168x faster)', accent: 'green' },
    { value: '$0 / mo', label: 'Unlimited Static Assets (5,751 Files)', accent: 'green' },
    { value: '520+ Pages', label: '71 Projects · 48 Blogs (EN/UA/ES/DE)', accent: 'darkGreen' },
    { value: '9 CI Gates', label: '249 Tests · 7 Security Headers · WCAG 2.2 AA', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'STATIC-FIRST EDGE & DUAL CI/CD (520+ PAGES)',
        steps: [
          { label: 'Next.js 16 Static Export (./out)' },
          { label: 'Cloudflare Static Assets (99.5% Traffic)', highlight: true },
          { label: 'public/_headers & 308 _redirects' },
          { label: 'Dual CI/CD: CF Builds + 9-Gate GH Actions' },
        ],
      },
      {
        rowLabel: 'PREBUILT HYBRID RAG WORKER (1.22MS CPU)',
        steps: [
          { label: 'Build-Time BM25 Index (17,393 Tokens)' },
          { label: 'run_worker_first: ["/api/*"] Only', highlight: true },
          { label: 'Float64Array + Zero-Alloc Fuzzy Search' },
          { label: 'HMAC cf-connecting-ip Rate Limiter' },
        ],
      },
      {
        rowLabel: 'DEVSECOPS, TELEMETRY & SEO / GEO',
        steps: [
          { label: '7 Security Headers + Bot Fight Mode', highlight: true },
          { label: 'GA4 Consent Mode v2 (Basic Mode)' },
          { label: 'GSC 516 URLs + IndexNow HTTP 200' },
          { label: 'Automated llms.txt + RSS 2.0 (/feed.xml)' },
        ],
      },
    ],
    description:
      'The platform combines Next.js 16 static export on unlimited Cloudflare Static Assets (99.5%+ of traffic, 0 Worker calls) with a thin /api/chat Cloudflare Worker powered by a build-time precomputed inverted BM25 RAG index (1.22ms median CPU, 17.93 MB RAM). Dual CI/CD pairs Cloudflare Workers Builds with a 9-stage GitHub Actions DevSecOps pipeline, full HTTP security headers, GA4 Consent Mode v2 Basic, GSC, IndexNow, RSS 2.0, and automated llms.txt.',
    descriptionUa:
      'Платформа поєднує статичний експорт Next.js 16 на безлімітних Cloudflare Static Assets (99.5%+ трафіку, 0 викликів Worker) із тонким Cloudflare Worker для /api/chat на базі передзібраного інвертованого BM25 RAG-індексу (1.22ms медіанний CPU, 17.93 MB RAM). Подвійний CI/CD об\'єднує Cloudflare Workers Builds і 9-етапний DevSecOps-пайплайн GitHub Actions, 7 заголовків безпеки, GA4 Consent Mode v2 Basic, GSC, IndexNow, RSS 2.0 та автоматизований llms.txt.',
    descriptionEs:
      'La plataforma combina la exportación estática de Next.js 16 sobre Cloudflare Static Assets ilimitados (99.5%+ del tráfico, 0 llamadas a Worker) con un Cloudflare Worker ligero para /api/chat impulsado por un índice invertido BM25 precompilado en build (1.22ms CPU mediana, 17.93 MB RAM). El CI/CD dual une Cloudflare Workers Builds con un pipeline DevSecOps de 9 etapas en GitHub Actions, 7 cabeceras de seguridad, GA4 Consent Mode v2 Basic, GSC, IndexNow, RSS 2.0 y llms.txt automatizado.',
    descriptionDe:
      'Die Plattform kombiniert Next.js 16 Static Export auf unlimitierten Cloudflare Static Assets (99,5 %+ Traffic, 0 Worker-Aufrufe) mit einem schlanken /api/chat Cloudflare Worker auf Basis eines zur Build-Zeit vorberechneten invertierten BM25-RAG-Index (1,22ms Median-CPU, 17,93 MB RAM). Dual-CI/CD verbindet Cloudflare Workers Builds mit einer 9-stufigen GitHub-Actions-DevSecOps-Pipeline, 7 HTTP-Security-Headern, GA4 Consent Mode v2 Basic, GSC, IndexNow, RSS 2.0 und automatisiertem llms.txt.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
      caption: 'Next.js 16 Hero section with RAG AI Assistant trigger and specialization badges',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide2.webp',
      caption: 'Synchronized Dark and Light Mode across Next.js App Router layouts',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide3.webp',
      caption: 'About section with 4-language engineering biography and career timeline',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide4.webp',
      caption: 'Filterable 71-project catalog with Next.js, WordPress, React, and Shopify categories',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide5.webp',
      caption: 'Dedicated SSG case study view with architecture flow and Context-Aware RAG AI button',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide6.webp',
      caption: 'Contact section with Base64 obfuscated channels and live RAG AI console',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide7.webp',
      caption: 'Mobile-first responsive layout optimized for sub-second Core Web Vitals',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide8.webp',
      caption: 'Dark theme styling across interactive skill dashboards and B2B service cards',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide9.webp',
      caption: 'Footer with EU legal compliance notice and instant Cookie Settings trigger',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Next.js 16 (App Router)', full: 'React Server Components, generateStaticParams for 520+ localized static routes, and conditional static export (./out)' },
      { short: 'React 19', full: 'Concurrent rendering, useSyncExternalStore SSR-safe state hydration, and interactive client islands' },
      { short: 'TypeScript 6.x', full: 'Strict zero-any static type checking across Next.js routes, Cloudflare Worker, RAG engine, and UI components' },
      { short: 'Tailwind CSS v4', full: 'High-contrast utility styling with synchronized light and dark mode theme variables' },
      { short: '4-Locale i18n (/en, /ua, /es, /de)', full: 'URL-based locale routing with automatic language persistence, 520+ static routes, and 100% dictionary key parity' },
    ],
    backend: [
      { short: 'Cloudflare Workers (worker/index.ts)', full: 'Thin V8 isolate handling POST /api/chat via run_worker_first: ["/api/*"] with 1.22ms median CPU and 17.93 MB P50 RAM' },
      { short: 'Prebuilt Inverted BM25 RAG', full: 'Build-time precomputed index (341 chunks, 17,393 tokens) with Float64Array scoring and zero-allocation Damerau-Levenshtein' },
      { short: 'HMAC-SHA256 IP Rate Limiter', full: '15 requests/hour per hashed cf-connecting-ip using encrypted RATE_LIMIT_SALT Worker Secret with optional Upstash Redis' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Cloudflare Workers + Static Assets', full: 'Unlimited $0/mo static bandwidth for 5,751 files, automated Cloudflare Workers Builds (~1m 35s), and Wrangler 4 deploys' },
      { short: 'Dual CI/CD (GitHub Actions 9 Gates)', full: 'Gitleaks secret scan, tsc --noEmit, ESLint, 249 Vitest specs, pnpm audit, contact-leak scan, Playwright + axe-core, and LHCI' },
      { short: 'Edge Security & WAF', full: 'All 7 HTTP security headers via public/_headers and worker/index.ts, SSL/TLS Full (TLS 1.3), Always Use HTTPS, and Bot Fight Mode' },
      { short: 'Base64 Contact Obfuscation', full: 'Client-side Base64 decoding on user interaction verified by automated built-output contact-leak scanning' },
      { short: 'Prompt Injection Guardrails', full: 'Strict origin/role/payload validation, input sanitization, and deterministic local RAG synthesis preventing hallucinations' },
    ],
    technicalOptimization: [
      { short: 'Static-First Edge Delivery', full: 'Pre-rendered HTML and assets for 71 projects, 48 articles, and 5 B2B services served with 0 Worker invocations' },
      { short: 'Build-Time Index Precomputation', full: 'Reduced Worker CPU from 206ms cold start to 1.22ms median (~168x faster) and stripped 3.4 MB of raw Markdown from Worker bundle' },
      { short: 'SSR-Safe Consent Mode v2', full: 'Zero-hydration-mismatch cookie consent persistence built on React 19 useSyncExternalStore' },
      { short: 'WCAG 2.2 AA / EAA 2026', full: 'Accessible modal dialogs, keyboard navigation, ARIA landmarks, and automated Playwright + axe-core CI verification' },
    ],
    aiTools: [
      { short: 'Autonomous Hybrid RAG', full: 'Prebuilt inverted Okapi BM25, TF-IDF cosine similarity, zero-alloc Damerau-Levenshtein, and Generative UI metadata across 71 projects and 48 articles' },
      { short: 'Vercel AI SDK (Lazy-Loaded)', full: 'Optional gpt-4o-mini streaming and tool calling dynamically imported only when OPENAI_API_KEY is configured' },
      { short: 'Google Antigravity & Claude Code', full: 'Spec-driven multi-agent AI-Harness workflow (SDD + TDD) governed by constitution.md and automated quality gates' },
    ],
    analytics: [
      { short: 'Google Analytics 4', full: 'Privacy-first telemetry gated behind explicit user opt-in via Consent Mode v2 Basic with 14-month data retention' },
      { short: 'GA4 Custom Dimensions', full: 'Event-scoped dimensions (contact_channel, download_source, chat_action) for granular interaction analysis' },
      { short: 'Google Search Console', full: 'DNS-verified domain property (sc-domain:yusupovartur.com) with 516 localized sitemap URLs indexed and direct GA4 link' },
      { short: 'Bing Webmaster & IndexNow', full: 'Automated batch URL indexing via IndexNow protocol (513+ URLs accepted HTTP 200)' },
    ],
    seo: [
      { short: 'Dynamic JSON-LD & PNG OG Covers', full: 'Programmatic Schema.org JSON-LD per route plus automated 1200x630 PNG OG images for all 48 blog articles' },
      { short: 'Multilingual Sitemap, RSS & 301/308 Rules', full: 'Static /sitemap.xml, /feed.xml (RSS 2.0), zone-level 301 root-to-www rule preserving UTM params, and 308 legacy slug redirects' },
      { short: 'GEO & Automated llms.txt', full: 'Auto-generated /llms.txt and /llms-full.txt synced with all 71 projects, 48 articles, and 5 services (AI Labyrinth disabled)' },
    ],
  },
  features: [
    {
      title: 'Static-First Cloudflare Workers + Static Assets Architecture ($0/mo)',
      titleUa: 'Архітектура Static-First на Cloudflare Workers + Static Assets ($0/міс)',
      titleEs: 'Arquitectura Static-First en Cloudflare Workers + Static Assets ($0/mes)',
      titleDe: 'Static-First-Architektur auf Cloudflare Workers + Static Assets ($0/Monat)',
      description:
        'Routes 99.5%+ of traffic (520+ localized Next.js 16 pages, 5,751 static files) directly through unlimited Cloudflare Static Assets with 0 Worker invocations, eliminating shared serverless bandwidth cutoffs.',
      descriptionUa:
        'Спрямовує 99.5%+ трафіку (520+ локалізованих сторінок Next.js 16, 5 751 статичний файл) напряму через безлімітні Cloudflare Static Assets із 0 викликів Worker, усуваючи ризик блокування через ліміти трафіку.',
      descriptionEs:
        'Enruta más del 99.5% del tráfico (520+ páginas Next.js 16, 5.751 archivos estáticos) directamente a través de Cloudflare Static Assets ilimitados con 0 invocaciones de Worker, eliminando cortes por cuota de ancho de banda.',
      descriptionDe:
        'Leitet 99,5 %+ des Traffics (520+ lokalisierte Next.js 16 Seiten, 5.751 statische Dateien) direkt über unlimitierte Cloudflare Static Assets mit 0 Worker-Aufrufen aus und eliminiert Bandbreiten-Sperren.',
    },
    {
      title: '1.22ms Prebuilt Hybrid RAG AI Assistant (71 Projects & 48 Articles)',
      titleUa: 'Передзібраний Hybrid RAG AI-асистент за 1.22ms (71 проєкт і 48 статей)',
      titleEs: 'Asistente IA Hybrid RAG precompilado en 1.22ms (71 proyectos y 48 artículos)',
      titleDe: 'Vorberechneter 1,22ms Hybrid-RAG-KI-Assistent (71 Projekte & 48 Artikel)',
      description:
        'Precomputes a 341-chunk, 17,393-token inverted BM25 index at build time with Float64Array scoring and zero-allocation Damerau-Levenshtein matching, cutting Edge Worker CPU from 206ms to 1.22ms median across EN/UA/ES/DE.',
      descriptionUa:
        'Попередньо обчислює інвертований BM25-індекс на 341 чанк і 17 393 токени під час білду з Float64Array-скорингом та zero-allocation Damerau-Levenshtein, прискоривши Edge Worker CPU з 206ms до 1.22ms медіанно (EN/UA/ES/DE).',
      descriptionEs:
        'Precalcula en build un índice invertido BM25 de 341 chunks y 17.393 tokens con puntuación Float64Array y Damerau-Levenshtein sin asignaciones, reduciendo la CPU del Worker de 206ms a 1.22ms mediana en EN/UA/ES/DE.',
      descriptionDe:
        'Berechnet zur Build-Zeit einen invertierten BM25-Index mit 341 Chunks und 17.393 Tokens inklusive Float64Array-Scoring und Zero-Allocation-Damerau-Levenshtein und senkt die Edge-Worker-CPU von 206ms auf 1,22ms Median (EN/UA/ES/DE).',
    },
    {
      title: 'Dual CI/CD Pipeline & 9-Stage DevSecOps Verification',
      titleUa: 'Подвійний CI/CD-пайплайн та 9-етапна DevSecOps-верифікація',
      titleEs: 'Pipeline CI/CD dual y verificación DevSecOps en 9 etapas',
      titleDe: 'Duale CI/CD-Pipeline & 9-stufige DevSecOps-Verifikation',
      description:
        'Every push to master triggers Cloudflare Workers Builds (~1m 35s) for primary production and a 9-gate GitHub Actions pipeline (Gitleaks, tsc, ESLint, 249 Vitest specs, pnpm audit, contact-leak scan, Playwright + axe-core, LHCI) for the SPA mirror.',
      descriptionUa:
        'Кожен пуш у master запускає Cloudflare Workers Builds (~1хв 35с) для основного продакшну та 9-гейтовий конвеєр GitHub Actions (Gitleaks, tsc, ESLint, 249 тестів Vitest, pnpm audit, перевірка витоку контактів, Playwright + axe-core, LHCI) для SPA-дзеркала.',
      descriptionEs:
        'Cada push a master dispara Cloudflare Workers Builds (~1m 35s) para producción principal y un pipeline de 9 controles en GitHub Actions (Gitleaks, tsc, ESLint, 249 tests Vitest, pnpm audit, escáner de contactos, Playwright + axe-core, LHCI) para el espejo SPA.',
      descriptionDe:
        'Jeder Push auf master startet Cloudflare Workers Builds (~1 Min. 35 Sek.) für die Hauptproduktion sowie eine 9-stufige GitHub-Actions-Pipeline (Gitleaks, tsc, ESLint, 249 Vitest-Specs, pnpm audit, Contact-Leak-Scan, Playwright + axe-core, LHCI) für den SPA-Mirror.',
    },
    {
      title: 'Edge DevSecOps: 7 Security Headers, WAF & HMAC Rate Limiting',
      titleUa: 'Edge DevSecOps: 7 заголовків безпеки, WAF та HMAC Rate Limiting',
      titleEs: 'Edge DevSecOps: 7 cabeceras de seguridad, WAF y Rate Limiting HMAC',
      titleDe: 'Edge DevSecOps: 7 Security-Header, WAF & HMAC-Rate-Limiting',
      description:
        'Enforces all 7 mandatory HTTP security headers via public/_headers and worker/index.ts, Always Use HTTPS, Bot Fight Mode, origin allowlisting, and HMAC-SHA256 rate limiting (15 req/hour) via cf-connecting-ip and encrypted RATE_LIMIT_SALT.',
      descriptionUa:
        'Забезпечує всі 7 обов\'язкових HTTP-заголовків безпеки через public/_headers і worker/index.ts, Always Use HTTPS, Bot Fight Mode, білий список Origin та HMAC-SHA256 rate limiting (15 запитів/год) по cf-connecting-ip із секретом RATE_LIMIT_SALT.',
      descriptionEs:
        'Aplica las 7 cabeceras HTTP de seguridad obligatorias mediante public/_headers y worker/index.ts, Always Use HTTPS, Bot Fight Mode, lista blanca de Origin y rate limiting HMAC-SHA256 (15 req/hora) sobre cf-connecting-ip con secreto RATE_LIMIT_SALT.',
      descriptionDe:
        'Erzwingt alle 7 Pflicht-Security-Header über public/_headers und worker/index.ts, Always Use HTTPS, Bot Fight Mode, Origin-Allowlisting sowie HMAC-SHA256-Rate-Limiting (15 Req./Std.) via cf-connecting-ip und verschlüsseltem RATE_LIMIT_SALT.',
    },
    {
      title: 'Programmatic SEO, GEO Automation, RSS 2.0 & IndexNow',
      titleUa: 'Програмне SEO, автоматизація GEO, RSS 2.0 та IndexNow',
      titleEs: 'SEO programático, automatización GEO, RSS 2.0 e IndexNow',
      titleDe: 'Programmatisches SEO, GEO-Automatisierung, RSS 2.0 & IndexNow',
      description:
        'Combines DNS-verified Google Search Console (516 localized URLs), automated IndexNow submissions, 1200x630 PNG blog OG covers, RSS 2.0 (/feed.xml), automated /llms.txt + /llms-full.txt, and 301/308 canonical redirects preserving UTM and ?chat=estimator params.',
      descriptionUa:
        'Поєднує DNS-верифікований Google Search Console (516 локалізованих URL), автоматичний IndexNow, 1200x630 PNG OG-обкладинки блогу, RSS 2.0 (/feed.xml), автоматизований /llms.txt + /llms-full.txt та 301/308 редиректи зі збереженням UTM і ?chat=estimator.',
      descriptionEs:
        'Combina Google Search Console verificado por DNS (516 URLs localizadas), envíos automatizados IndexNow, portadas PNG OG 1200x630, RSS 2.0 (/feed.xml), /llms.txt + /llms-full.txt automatizados y redirecciones 301/308 preservando UTM y ?chat=estimator.',
      descriptionDe:
        'Vereint DNS-verifizierte Google Search Console (516 lokalisierte URLs), automatisierte IndexNow-Übermittlung, 1200x630 PNG-Blog-OG-Bilder, RSS 2.0 (/feed.xml), automatisiertes /llms.txt + /llms-full.txt sowie 301/308-Redirects unter Erhalt von UTM- und ?chat=estimator-Parametern.',
    },
    {
      title: 'Privacy-First GA4 Telemetry & Context-Aware Project AI Triggers',
      titleUa: 'Приватна телеметрія GA4 та контекстні AI-тригери проєктів',
      titleEs: 'Telemetría GA4 privada y disparadores de IA con contexto de proyecto',
      titleDe: 'Datenschutzkonforme GA4-Telemetrie & kontextsensitive Projekt-KI-Trigger',
      description:
        'Uses Consent Mode v2 Basic (zero pings before explicit opt-in, 14-month retention, custom dimensions) alongside interactive "Explore with RAG AI" and ?chat=estimator triggers on every project and blog page.',
      descriptionUa:
        'Використовує Consent Mode v2 Basic (нуль запитів до явної згоди, зберігання 14 місяців, кастомні виміри) разом із інтерактивними тригерами "Explore with RAG AI" і ?chat=estimator на кожній сторінці проєкту та блогу.',
      descriptionEs:
        'Implementa Consent Mode v2 Basic (cero peticiones antes del opt-in explícito, retención de 14 meses, dimensiones personalizadas) junto con botones interactivos "Explore with RAG AI" y ?chat=estimator en cada proyecto y artículo.',
      descriptionDe:
        'Nutzt Consent Mode v2 Basic (keine Pings vor expliziter Einwilligung, 14 Monate Aufbewahrung, benutzerdefinierte Dimensionen) sowie interaktive "Explore with RAG AI"- und ?chat=estimator-Trigger auf jeder Projekt- und Blogseite.',
    },
  ],
  challenges: [
    'Eliminating shared serverless bandwidth blast radius (10 GB Fast Origin Transfer caps) while migrating 520+ localized Next.js 16 routes and a live /api/chat endpoint to $0/month infrastructure with zero SEO/GEO regressions.',
    'Fitting a multilingual 71-project and 48-article Hybrid RAG engine strictly inside the Cloudflare Workers Free 10ms CPU limit after initial profiling exposed a 206ms cold-start spike and 3.4 MB of bundled blog Markdown.',
    'Maintaining 100% parity for all 7 HTTP security headers, 301/308 canonical redirects, HMAC IP rate limiting, Base64 anti-scrape protection, and WCAG 2.2 AA compliance without Next.js runtime middleware.',
  ],
  challengesUa: [
    'Усунення спільного радіуса ураження serverless-лімітів трафіку (10 GB Fast Origin Transfer) під час міграції 520+ локалізованих маршрутів Next.js 16 та живого /api/chat на інфраструктуру за $0/міс без втрат SEO/GEO.',
    'Вміщення 4-мовного Hybrid RAG рушія (71 проєкт і 48 статей) у суворий безкоштовний ліміт Cloudflare Workers 10ms CPU після того, як профілювання виявило пік холодного старту 206ms і 3.4 MB зайвого Markdown у бандлі.',
    'Збереження 100% паритету для всіх 7 HTTP-заголовків безпеки, 301/308 канонічних редиректів, HMAC IP rate limiting, Base64-обфускації контактів і WCAG 2.2 AA без рантайм-middleware Next.js.',
  ],
  challengesEs: [
    'Eliminar el radio de impacto de cuotas compartidas de origen serverless (10 GB Fast Origin Transfer) al migrar 520+ rutas localizadas de Next.js 16 y el endpoint /api/chat a infraestructura de $0/mes sin regresiones SEO/GEO.',
    'Ajustar un motor Hybrid RAG multilingüe (71 proyectos y 48 artículos) dentro del límite gratuito de 10ms de CPU en Cloudflare Workers tras detectar un pico inicial de 206ms y 3.4 MB de Markdown innecesario en el bundle.',
    'Mantener paridad total en las 7 cabeceras HTTP de seguridad, redirecciones canónicas 301/308, rate limiting HMAC por IP, ofuscación Base64 de contactos y cumplimiento WCAG 2.2 AA sin middleware runtime de Next.js.',
  ],
  challengesDe: [
    'Beseitigung gemeinsamer Serverless-Bandbreitenlimits (10 GB Fast Origin Transfer) bei der Migration von 520+ lokalisierten Next.js 16 Routen und /api/chat auf $0/Monat-Infrastruktur ohne SEO-/GEO-Regressionen.',
    'Einpassung einer 4-sprachigen Hybrid-RAG-Engine (71 Projekte, 48 Artikel) in das strenge 10ms-CPU-Limit von Cloudflare Workers Free nach einem initialen 206ms-Kaltstart-Peak und 3,4 MB gebündeltem Blog-Markdown.',
    'Erhalt voller Parität bei allen 7 HTTP-Security-Headern, 301/308-Canonical-Redirects, HMAC-IP-Rate-Limiting, Base64-Kontaktschutz und WCAG 2.2 AA ohne Next.js-Runtime-Middleware.',
  ],
  solutions: [
    'Engineered scripts/build-cf-workers.mjs to export 520+ static pages (5,751 files) to unlimited Cloudflare Static Assets and configured wrangler.jsonc with run_worker_first: ["/api/*"] so 99.5%+ of traffic bypasses the Worker completely.',
    'Built scripts/generate-rag-index.mjs to precompute the 341-chunk / 17,393-token inverted BM25 index and lightweight blogSummaries at build time, combined with Float64Array scoring, zero-allocation Damerau-Levenshtein buffers, indexOf FAQ short-circuiting, and lazy OpenAI SDK loading - reducing Edge CPU from 206ms to 1.22ms median.',
    'Implemented edge security headers and 308 redirects in public/_headers, public/_redirects, and worker/index.ts, paired with Cloudflare Always Use HTTPS, Bot Fight Mode, a 301 root-to-www rule preserving UTM queries, encrypted RATE_LIMIT_SALT, and a 9-gate GitHub Actions DevSecOps pipeline.',
  ],
  solutionsUa: [
    'Створено scripts/build-cf-workers.mjs для експорту 520+ статичних сторінок (5 751 файл) на безлімітні Cloudflare Static Assets та налаштовано wrangler.jsonc із run_worker_first: ["/api/*"], завдяки чому 99.5%+ трафіку обходить Worker.',
    'Реалізовано scripts/generate-rag-index.mjs для передзбірки інвертованого BM25-індексу (341 чанк, 17 393 токени) і легких blogSummaries під час білду разом із Float64Array-скорингом, zero-allocation буферами Damerau-Levenshtein, indexOf-відсіканням FAQ та лінивим OpenAI SDK - Edge CPU знижено з 206ms до 1.22ms медіанно.',
    'Перенесено всі 7 заголовків безпеки та 308-редиректи у public/_headers, public/_redirects і worker/index.ts, підключено Cloudflare Always Use HTTPS, Bot Fight Mode, 301-правило root -> www зі збереженням UTM, зашифрований RATE_LIMIT_SALT та 9-гейтовий DevSecOps-конвеєр GitHub Actions.',
  ],
  solutionsEs: [
    'Se diseñó scripts/build-cf-workers.mjs para exportar 520+ páginas estáticas (5.751 archivos) a Cloudflare Static Assets ilimitados y se configuró wrangler.jsonc con run_worker_first: ["/api/*"] para que más del 99.5% del tráfico omita el Worker.',
    'Se creó scripts/generate-rag-index.mjs para precompilar el índice invertido BM25 (341 chunks, 17.393 tokens) y blogSummaries ligeros en build, sumando puntuación Float64Array, buffers Damerau-Levenshtein sin asignaciones, atajo indexOf en FAQ y carga diferida de OpenAI SDK, reduciendo la CPU de 206ms a 1.22ms mediana.',
    'Se trasladaron las 7 cabeceras de seguridad y redirecciones 308 a public/_headers, public/_redirects y worker/index.ts, junto con Cloudflare Always Use HTTPS, Bot Fight Mode, regla 301 root -> www con preservación de UTM, secreto RATE_LIMIT_SALT y pipeline DevSecOps de 9 etapas en GitHub Actions.',
  ],
  solutionsDe: [
    'Entwicklung von scripts/build-cf-workers.mjs für den Export von 520+ statischen Seiten (5.751 Dateien) auf unlimitierte Cloudflare Static Assets sowie wrangler.jsonc mit run_worker_first: ["/api/*"], sodass 99,5 %+ des Traffics den Worker umgehen.',
    'Aufbau von scripts/generate-rag-index.mjs zur Build-Time-Vorberechnung des invertierten BM25-Index (341 Chunks, 17.393 Tokens) und schlanker blogSummaries samt Float64Array-Scoring, Zero-Allocation-Damerau-Levenshtein-Puffern, indexOf-FAQ-Check und Lazy-Loading des OpenAI SDK - Senkung der Edge-CPU von 206ms auf 1,22ms Median.',
    'Umsetzung aller 7 Security-Header und 308-Redirects in public/_headers, public/_redirects und worker/index.ts, kombiniert mit Cloudflare Always Use HTTPS, Bot Fight Mode, 301-Rule root -> www mit UTM-Erhalt, verschlüsseltem RATE_LIMIT_SALT und 9-stufiger GitHub-Actions-DevSecOps-Pipeline.',
  ],
  liveUrl: 'https://www.yusupovartur.com/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['nextjs'],
  deepDiveBlogSlug: 'migrating-nextjs-16-vercel-to-cloudflare-workers-zero-cost-rag',
}

export default yusupovarturNextjsPortfolio
