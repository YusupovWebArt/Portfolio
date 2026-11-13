import { Project } from '../project-types'

const yusupovarturNextjsPortfolio: Project = {
  id: 29500,
  isPersonal: true,
  title: 'Next.js 16 & Hybrid RAG Portfolio Platform',
  description:
    'Enterprise-grade fullstack portfolio and AI engineering platform built with Next.js 16 App Router, React 19 Server Components, TypeScript 6, and a custom Hybrid RAG AI Assistant indexing 70 project case studies across 210+ localized SSG routes (EN/UA/ES), deployed on Vercel with Cloudflare DNS and WCAG 2.2 AA compliance.',
  descriptionUa:
    'Корпоративна fullstack-платформа портфоліо на Next.js 16 App Router, React 19 Server Components, TypeScript 6 та кастомному Hybrid RAG AI-асистенті з індексацією 70 кейсів на 210+ статичних маршрутах (EN/UA/ES), розгорнута на Vercel із Cloudflare DNS та відповідністю WCAG 2.2 AA.',
  descriptionEs:
    'Plataforma fullstack de portfolio de nivel empresarial construida con Next.js 16 App Router, React 19 Server Components, TypeScript 6 y un asistente de IA Hybrid RAG propio que indexa 70 casos de estudio en más de 210 rutas estáticas localizadas (EN/UA/ES), desplegada en Vercel con Cloudflare DNS y accesibilidad WCAG 2.2 AA.',
  descriptionDe:
    'Enterprise-Fullstack-Portfolio- und KI-Engineering-Plattform auf Basis von Next.js 16 App Router, React 19 Server Components, TypeScript 6 und einem maßgeschneiderten Hybrid-RAG-KI-Assistenten, der 70 Projekt-Fallstudien über mehr als 210 lokalisierte SSG-Routen (EN/UA/ES/DE) indexiert, bereitgestellt auf Vercel mit Cloudflare DNS und WCAG 2.2 AA-Konformität.',
  fullDescription:
    'This production fullstack platform (yusupovartur.com) represents the Next.js 16 App Router evolution of Artur Yusupov\'s engineering portfolio. It pre-renders 210+ localized static routes (/en, /ua, /es) across 70 commercial case studies using React 19 Server Components and dynamic JSON-LD structured data. At its core is an autonomous Hybrid RAG (Retrieval-Augmented Generation) AI engine that indexes all 70 project architectures, technology stacks, metrics, and FAQs, delivering context-aware multilingual answers via a streaming /api/chat route protected by IP rate limiting (Upstash Redis / in-memory fallback). Engineered under the 2026 AI-Harness methodology (SDD + TDD), it features useSyncExternalStore SSR-safe Consent Mode v2 privacy controls, WCAG 2.2 Level AA / EAA 2026 compliance, and edge delivery via Vercel and Cloudflare.',
  fullDescriptionUa:
    'Ця продакшн fullstack-платформа (yusupovartur.com) є еволюцією інженерного портфоліо Артура Юсупова на базі Next.js 16 App Router. Система попередньо генерує понад 210 локалізованих статичних маршрутів (/en, /ua, /es) для 70 комерційних кейсів із використанням React 19 Server Components та динамічної мікророзмітки JSON-LD. Ядром платформи є автономний Hybrid RAG (Retrieval-Augmented Generation) AI-двигун, який індексує архітектуру, стек технологій, метрики та виклики всіх 70 проєктів, надаючи точні контекстно-залежні відповіді трьома мовами через захищений API-роут /api/chat із IP rate limiting. Створено за методологією AI-харнеса 2026 року (SDD + TDD) із підтримкою SSR-безпечного Consent Mode v2, стандартів WCAG 2.2 AA / EAA 2026 та доставкою через Vercel і Cloudflare.',
  fullDescriptionEs:
    'Esta plataforma fullstack en producción (yusupovartur.com) representa la evolución en Next.js 16 App Router del portfolio de ingeniería de Artur Yusupov. Pre-renderiza más de 210 rutas estáticas localizadas (/en, /ua, /es) para 70 casos de estudio comerciales mediante React 19 Server Components y datos estructurados JSON-LD dinámicos. Su núcleo es un motor autónomo de IA con arquitectura Hybrid RAG (Retrieval-Augmented Generation) que indexa las arquitecturas, stacks tecnológicos, métricas y soluciones de los 70 proyectos, ofreciendo respuestas contextuales multilingües a través del endpoint /api/chat protegido por limitación de tasa IP. Desarrollado bajo la metodología AI-Harness 2026 (SDD + TDD), incorpora Consent Mode v2 seguro para SSR, cumplimiento WCAG 2.2 AA / EAA 2026 y distribución edge con Vercel y Cloudflare.',
  fullDescriptionDe:
    'Diese produktive Fullstack-Plattform (yusupovartur.com) repräsentiert die Next.js 16 App Router-Evolution des Engineering-Portfolios von Artur Yusupov. Sie rendert vorab über 210 lokalisierte statische Routen (/en, /ua, /es) für 70 kommerzielle Fallstudien unter Einsatz von React 19 Server Components und dynamischen strukturierten JSON-LD-Daten. Das Herzstück bildet eine autonome Hybrid-RAG-KI-Engine (Retrieval-Augmented Generation), die sämtliche 70 Projektarchitekturen, Technologie-Stacks, Metriken und FAQs indexiert und kontextbezogene mehrsprachige Antworten über eine Streaming-Route (/api/chat) mit IP-Rate-Limiting (Upstash Redis / In-Memory-Fallback) liefert. Entwickelt nach der 2026 AI-Harness-Methodik (SDD + TDD), bietet sie SSR-sichere Consent Mode v2-Datenschutzkontrollen via useSyncExternalStore, WCAG 2.2 Level AA / EAA 2026-Barrierefreiheit sowie Edge-Auslieferung über Vercel und Cloudflare.',
  detailHeroLine:
    'NEXT.JS 16 APP ROUTER · HYBRID RAG AI ENGINE · 210+ SSG ROUTES (EN/UA/ES) · VERCEL EDGE & CLOUDFLARE · WCAG 2.2 AA',
  detailMetrics: [
    { value: 'Hybrid RAG', label: '70 Projects AI Engine', accent: 'green' },
    { value: '210+ Routes', label: 'SSG i18n (EN/UA/ES)', accent: 'green' },
    { value: 'Next.js 16', label: 'App Router & RSC', accent: 'darkGreen' },
    { value: 'WCAG 2.2 AA', label: 'EAA 2026 & Consent v2', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'NEXT.JS 16 SSG & I18N',
        steps: [
          { label: 'App Router ([locale])' },
          { label: 'generateStaticParams (210+ Pages)', highlight: true },
          { label: 'Dynamic JSON-LD & Sitemap' },
          { label: 'Vercel Edge Network' },
        ],
      },
      {
        rowLabel: 'HYBRID RAG PIPELINE',
        steps: [
          { label: '70-Project Knowledge Base' },
          { label: 'Token & Cosine Scoring', highlight: true },
          { label: 'Contextual Project Boost' },
          { label: 'Autonomous Multilingual Synthesis' },
        ],
      },
      {
        rowLabel: 'SECURITY & QUALITY',
        steps: [
          { label: 'IP Rate Limiter (/api/chat)' },
          { label: 'Consent Mode v2 (SSR-Safe)', highlight: true },
          { label: 'Vitest & Playwright TDD' },
          { label: 'Cloudflare DNS & SSL' },
        ],
      },
    ],
    description:
      'The platform combines Next.js 16 App Router static generation across 3 locales (English, Ukrainian, Spanish) with an autonomous server-side Hybrid RAG engine. Project pages dispatch contextual triggers to the RAG assistant, which scores 70+ structured knowledge chunks using lexical token overlap, active project boosting, and cosine similarity to synthesize instant, hallucination-free technical answers.',
    descriptionUa:
      'Платформа поєднує статичну генерацію Next.js 16 App Router для 3 локалей (англійська, українська, іспанська) з автономним серверним двигуном Hybrid RAG. Сторінки проєктів передають контекстні тригери до RAG-асистента, який оцінює понад 70 структурованих блоків знань за допомогою лексичного збігу токенів, бустингу активного проєкту та косинусної подібності для синтезу миттєвих технічних відповідей без галюцинацій.',
    descriptionEs:
      'La plataforma combina la generación estática de Next.js 16 App Router en 3 idiomas (inglés, ucraniano, español) con un motor Hybrid RAG autónomo en el servidor. Las páginas de proyectos envían disparadores contextuales al asistente RAG, que evalúa más de 70 fragmentos estructurados de conocimiento mediante coincidencia léxica de tokens, impulso del proyecto activo y similitud del coseno para sintetizar respuestas técnicas instantáneas y sin alucinaciones.',
    descriptionDe:
      'Die Plattform kombiniert die statische Generierung des Next.js 16 App Routers über mehrere Sprachen hinweg mit einer autonomen serverseitigen Hybrid-RAG-Engine. Projektseiten senden kontextbezogene Trigger an den RAG-Assistenten, der über 70 strukturierte Wissenseinheiten mittels lexikalischer Token-Überschneidung, Active-Project-Boosting und Kosinus-Ähnlichkeit bewertet, um sofortige, halluzinationsfreie technische Antworten zu synthetisieren.',
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
      caption: 'About section with trilingual engineering biography and career timeline',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide4.webp',
      caption: 'Filterable 70-project catalog with Next.js, WordPress, and React categories',
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
      { short: 'Next.js 16 (App Router)', full: 'Server Components, generateStaticParams for 210+ localized routes, and Next.js API Route Handlers' },
      { short: 'React 19', full: 'Concurrent rendering, useSyncExternalStore SSR-safe state hydration, and interactive client islands' },
      { short: 'TypeScript 6.x', full: 'Strict zero-any static type checking across Next.js routes, RAG pipelines, and UI components' },
      { short: 'Tailwind CSS v4', full: 'High-contrast utility styling with synchronized light and dark mode theme variables' },
      { short: 'Trilingual i18n (/en, /ua, /es)', full: 'URL-based locale routing with automatic language persistence and 100% dictionary key parity' },
    ],
    backend: [
      { short: 'Next.js Route Handlers', full: 'Serverless POST /api/chat endpoint with streaming responses and autonomous local RAG synthesis' },
      { short: 'Hybrid RAG Engine', full: 'Custom retrieval and synthesis engine indexing 70 projects, tech stacks, architectures, and FAQs' },
      { short: 'IP Rate Limiter', full: 'Sliding-window rate limiting (15 requests/hour per IP) with Upstash Redis and in-memory fallback' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vercel Cloud & Edge', full: 'Automated production deployments from GitHub master branch with global CDN caching' },
      { short: 'Cloudflare DNS & SSL', full: 'Custom domain routing (yusupovartur.com), strict SSL/TLS encryption, and edge protection' },
      { short: 'Base64 Contact Obfuscation', full: 'Client-side Base64 decoding on user interaction to protect personal contact channels from bots' },
      { short: 'Prompt Injection Guardrails', full: 'System prompt boundaries and deterministic local RAG synthesis preventing AI hallucinations' },
      { short: '2026 AI-Harness (SDD + TDD)', full: 'Spec-Driven Development lifecycle enforced by Vitest unit specs and Playwright E2E checks' },
    ],
    technicalOptimization: [
      { short: 'Static Site Generation (SSG)', full: 'Pre-rendered HTML and JSON payloads for all 70 project case studies across 3 languages' },
      { short: 'SSR-Safe Consent Mode v2', full: 'Zero-hydration-mismatch cookie consent persistence built on React 19 useSyncExternalStore' },
      { short: 'WCAG 2.2 AA / EAA 2026', full: 'Accessible modal dialogs, keyboard navigation, ARIA landmarks, and 4.5:1 contrast compliance' },
      { short: 'WebP Asset Rewrites', full: 'Zero-duplication Next.js rewrite rules serving optimized WebP thumbnails and full-page layouts' },
    ],
    aiTools: [
      { short: 'Custom Hybrid RAG', full: 'Lexical token overlap, cosine similarity, and active project context boosting across 70 case studies' },
      { short: 'Vercel AI SDK', full: 'Streaming text protocol and structured tool-calling definitions (showProjectCard, getContactOptions)' },
      { short: 'Google Antigravity & Claude Code', full: 'Spec-driven multi-agent engineering workflow with automated compiler and test verification' },
    ],
    analytics: [
      { short: 'Google Analytics 4', full: 'Privacy-first telemetry gated behind explicit user opt-in via Consent Mode v2 Basic' },
      { short: 'Google Search Console', full: 'Domain verification, multilingual sitemap indexing, and Core Web Vitals monitoring' },
    ],
    seo: [
      { short: 'Dynamic JSON-LD Schemas', full: 'Programmatic Schema.org CreativeWork, BreadcrumbList, Person, and WebSite structured data per route' },
      { short: 'Multilingual Sitemap & Robots', full: 'Automated /sitemap.xml and /robots.txt generation covering all localized project URLs' },
      { short: 'GEO & llms.txt Ready', full: 'Structured semantic metadata engineered for citation by ChatGPT, Claude, Perplexity, and Gemini' },
    ],
  },
  features: [
    {
      title: 'Autonomous Hybrid RAG AI Assistant (70 Projects Indexed)',
      titleUa: 'Автономний Hybrid RAG AI-асистент (70 проіндексованих проєктів)',
      titleEs: 'Asistente de IA Hybrid RAG autónomo (70 proyectos indexados)',
      titleDe: 'Autonomer Hybrid-RAG-KI-Assistent (70 indexierte Projekte)',
      description:
        'Custom-built Retrieval-Augmented Generation (RAG) engine that indexes all 70 portfolio case studies, tech stacks, architecture diagrams, and FAQs. Synthesizes structured answers in English, Ukrainian, and Spanish without requiring paid external LLM API keys.',
      descriptionUa:
        'Кастомний двигун Retrieval-Augmented Generation (RAG), що індексує всі 70 кейсів портфоліо, технологічні стеки, архітектурні схеми та FAQ. Синтезує структуровані відповіді англійською, українською та іспанською мовами без платних зовнішніх LLM API-ключів.',
      descriptionEs:
        'Motor propio de Generación Aumentada por Recuperación (RAG) que indexa los 70 casos de estudio del portfolio, stacks tecnológicos, diagramas de arquitectura y preguntas frecuentes. Sintetiza respuestas estructuradas en inglés, ucraniano y español sin requerir claves externas de pago de API LLM.',
      descriptionDe:
        'Eigenentwickelte Retrieval-Augmented-Generation-Engine (RAG), die alle 70 Portfolio-Fallstudien, Tech-Stacks, Architekturdiagramme und FAQs indexiert. Synthetisiert strukturierte Antworten auf Englisch, Ukrainisch, Spanisch und Deutsch ohne kostenpflichtige externe LLM-API-Schlüssel.',
    },
    {
      title: 'Context-Aware Project AI Triggers',
      titleUa: 'Контекстно-залежні AI-тригери проєктів',
      titleEs: 'Disparadores de IA con contexto de proyecto',
      titleDe: 'Kontextsensitive Projekt-KI-Trigger',
      description:
        'Every project case study page features an interactive "Explore with RAG AI" trigger that opens the assistant pre-loaded with that project\'s active context and tailored architectural questions.',
      descriptionUa:
        'Кожна сторінка кейсу містить інтерактивну кнопку "Explore with RAG AI", яка відкриває асистента з попередньо завантаженим контекстом активного проєкту та релевантними архітектурними запитаннями.',
      descriptionEs:
        'Cada página de caso de estudio incluye un botón interactivo "Explore with RAG AI" que abre el asistente precargado con el contexto activo de ese proyecto y preguntas arquitectónicas adaptadas.',
      descriptionDe:
        'Jede Fallstudienseite verfügt über einen interaktiven "Explore with RAG AI"-Trigger, der den Assistenten mit dem aktiven Projektkontext und passenden Architekturfragen vorab geladen öffnet.',
    },
    {
      title: '210+ Statically Generated Multilingual Routes (SSG)',
      titleUa: '210+ статично згенерованих багатомовних маршрутів (SSG)',
      titleEs: '210+ rutas multilingües generadas estáticamente (SSG)',
      titleDe: '210+ statisch generierte mehrsprachige Routen (SSG)',
      description:
        'Uses Next.js 16 App Router and generateStaticParams to pre-build localized pages (/en, /ua, /es) for all 70 projects, delivering instant page loads and complete search engine indexability.',
      descriptionUa:
        'Використовує Next.js 16 App Router та generateStaticParams для попередньої генерації локалізованих сторінок (/en, /ua, /es) для всіх 70 проєктів, забезпечуючи миттєве завантаження та повну індексацію пошуковими системами.',
      descriptionEs:
        'Utiliza Next.js 16 App Router y generateStaticParams para precompilar páginas localizadas (/en, /ua, /es) para los 70 proyectos, ofreciendo cargas instantáneas y completa indexación en buscadores.',
      descriptionDe:
        'Nutzt den Next.js 16 App Router und generateStaticParams, um lokalisierte Seiten (/en, /ua, /es) für alle 70 Projekte vorab zu erstellen und sofortige Ladezeiten sowie vollständige Suchmaschinen-Indexierbarkeit zu gewährleisten.',
    },
    {
      title: 'Programmatic SEO & Dynamic JSON-LD Microdata',
      titleUa: 'Програмне SEO та динамічна мікророзмітка JSON-LD',
      titleEs: 'SEO programático y microdatos JSON-LD dinámicos',
      titleDe: 'Programmatisches SEO & dynamische JSON-LD-Mikrodaten',
      description:
        'Automatically generates localized Open Graph tags, canonical alternates, BreadcrumbList, and CreativeWork Schema.org JSON-LD payloads for every individual case study.',
      descriptionUa:
        'Автоматично генерує локалізовані теги Open Graph, канонічні альтернативи, BreadcrumbList та структуровані дані CreativeWork Schema.org JSON-LD для кожного окремого кейсу.',
      descriptionEs:
        'Genera automáticamente etiquetas Open Graph localizadas, alternativos canónicos, BreadcrumbList y datos estructurados CreativeWork Schema.org JSON-LD para cada caso de estudio.',
      descriptionDe:
        'Generiert automatisch lokalisierte Open-Graph-Tags, kanonische Sprachalternativen sowie BreadcrumbList- und CreativeWork-Schema.org-JSON-LD-Strukturen für jede einzelne Fallstudie.',
    },
    {
      title: 'SSR-Safe GDPR Consent Mode v2 Basic',
      titleUa: 'SSR-безпечний GDPR Consent Mode v2 Basic',
      titleEs: 'GDPR Consent Mode v2 Basic seguro para SSR',
      titleDe: 'SSR-sicherer DSGVO Consent Mode v2 Basic',
      description:
        'Engineered with React 19 useSyncExternalStore to persist cookie consent across route transitions and page reloads without SSR hydration mismatches or unauthorized third-party requests.',
      descriptionUa:
        'Розроблено з використанням React 19 useSyncExternalStore для збереження згоди на cookie між переходами та перезавантаженнями без помилок гідратації SSR чи несанкціонованих сторонніх запитів.',
      descriptionEs:
        'Diseñado con useSyncExternalStore de React 19 para persistir el consentimiento de cookies entre transiciones de ruta y recargas sin errores de hidratación SSR ni peticiones de terceros no autorizadas.',
      descriptionDe:
        'Entwickelt mit React 19 useSyncExternalStore, um die Cookie-Einwilligung über Routenwechsel und Seitenneuladungen hinweg ohne SSR-Hydration-Mismatches oder unautorisierte Drittanbieter-Anfragen zu speichern.',
    },
    {
      title: 'IP Rate Limiting & Prompt Defense',
      titleUa: 'Обмеження частоти запитів за IP та захист промптів',
      titleEs: 'Limitación de tasa por IP y defensa de prompts',
      titleDe: 'IP-Rate-Limiting & Prompt-Abwehr',
      description:
        'Protects the /api/chat endpoint with a 15-requests-per-hour sliding window limiter (Upstash Redis with automatic in-memory fallback) and strict anti-hallucination guardrails.',
      descriptionUa:
        'Захищає ендпоінт /api/chat за допомогою ковзного вікна на 15 запитів на годину (Upstash Redis із автоматичним in-memory резервом) та суворих обмежень проти галюцинацій.',
      descriptionEs:
        'Protege el endpoint /api/chat con un limitador de ventana deslizante de 15 solicitudes por hora (Upstash Redis con respaldo automático en memoria) y estrictas barreras contra alucinaciones.',
      descriptionDe:
        'Schützt den Endpunkt /api/chat durch einen Sliding-Window-Limiter mit 15 Anfragen pro Stunde (Upstash Redis mit automatischem In-Memory-Fallback) sowie strikte Leitplanken gegen Halluzinationen.',
    },
  ],
  challenges: [
    'Migrating a 70-project single-page React catalog into a fullstack Next.js 16 App Router architecture with localized URL routing (/en, /ua, /es) while preserving rich interactive galleries and architecture tabs.',
    'Delivering intelligent, project-specific AI answers across 70 case studies in 3 languages without relying on costly external LLM API calls or risking AI hallucinations.',
    'Eliminating React 19 SSR hydration mismatches and strict ESLint set-state-in-effect violations in client-side storage consumers like the GDPR Cookie Consent banner.',
  ],
  challengesUa: [
    'Міграція односторінкового React-каталогу на 70 проєктів у fullstack-архітектуру Next.js 16 App Router із локалізованою маршрутизацією (/en, /ua, /es) зі збереженням інтерактивних галерей та вкладок архітектури.',
    'Забезпечення точних контекстних AI-відповідей за 70 кейсами трьома мовами без залежності від дорогих зовнішніх LLM API та без ризику галюцинацій.',
    'Усунення розбіжностей SSR-гідратації React 19 та порушень суворих правил ESLint set-state-in-effect у клієнтських компонентах збереження стану, таких як банер GDPR Cookie Consent.',
  ],
  challengesEs: [
    'Migrar un catálogo React SPA de 70 proyectos a una arquitectura fullstack Next.js 16 App Router con enrutamiento localizado (/en, /ua, /es) conservando las galerías interactivas y pestañas de arquitectura.',
    'Ofrecer respuestas de IA inteligentes y específicas para 70 casos de estudio en 3 idiomas sin depender de costosas llamadas a APIs LLM externas ni arriesgar alucinaciones.',
    'Eliminar las discrepancias de hidratación SSR en React 19 y las infracciones estrictas de ESLint set-state-in-effect en consumidores de almacenamiento cliente como el banner GDPR de cookies.',
  ],
  challengesDe: [
    'Migration eines einseitigen React-Katalogs mit 70 Projekten in eine Fullstack-Next.js-16-App-Router-Architektur mit lokalisiertem URL-Routing (/en, /ua, /es) unter Beibehaltung interaktiver Galerien und Architektur-Tabs.',
    'Bereitstellung intelligenter, projektspezifischer KI-Antworten über 70 Fallstudien in mehreren Sprachen hinweg, ohne auf kostspielige externe LLM-API-Aufrufe angewiesen zu sein oder KI-Halluzinationen zu riskieren.',
    'Beseitigung von React 19 SSR-Hydration-Mismatches und strikten ESLint-set-state-in-effect-Verstößen bei clientseitigen Storage-Konsumenten wie dem DSGVO-Cookie-Consent-Banner.',
  ],
  solutions: [
    'Implemented generateStaticParams across [locale]/projects/[slug] and unified the standalone case study route with the rich ProjectDetail component, pre-rendering 210+ SEO-optimized pages.',
    'Built an autonomous local Hybrid RAG synthesis engine (synthesizeLocalRagAnswer) combining lexical scoring, active project context boosting, and structured multilingual formatters with source citations.',
    'Refactored ConsentContext to use React 19 useSyncExternalStore with custom storage events, ensuring instant client reactivity and zero hydration mismatches on Vercel.',
  ],
  solutionsUa: [
    'Реалізовано generateStaticParams для маршрутів [locale]/projects/[slug] та уніфіковано окрему сторінку кейсу з компонентом ProjectDetail, попередньо генеруючи понад 210 SEO-оптимізованих сторінок.',
    'Створено автономний локальний двигун синтезу Hybrid RAG (synthesizeLocalRagAnswer), що поєднує лексичний скоринг, бустинг активного проєкту та структуроване багатомовне форматування з цитуванням джерел.',
    'Рефакторинговано ConsentContext із використанням React 19 useSyncExternalStore та кастомних подій сховища, що забезпечило миттєву реактивність клієнта та нуль помилок гідратації на Vercel.',
  ],
  solutionsEs: [
    'Se implementó generateStaticParams en [locale]/projects/[slug] y se unificó la ruta individual de cada caso de estudio con el componente ProjectDetail, pre-renderizando más de 210 páginas optimizadas para SEO.',
    'Se construyó un motor local autónomo de síntesis Hybrid RAG (synthesizeLocalRagAnswer) que combina puntuación léxica, impulso de contexto del proyecto activo y formateadores multilingües con citas de fuentes.',
    'Se refactorizó ConsentContext para usar useSyncExternalStore de React 19 con eventos de almacenamiento personalizados, garantizando reactividad instantánea en cliente y cero errores de hidratación en Vercel.',
  ],
  solutionsDe: [
    'Implementierung von generateStaticParams über [locale]/projects/[slug] und Vereinheitlichung der eigenständigen Fallstudien-Route mit der umfangreichen ProjectDetail-Komponente zum Vorab-Rendern von über 210 SEO-optimierten Seiten.',
    'Entwicklung einer autonomen lokalen Hybrid-RAG-Synthese-Engine (synthesizeLocalRagAnswer), die lexikalisches Scoring, Active-Project-Context-Boosting und strukturierte mehrsprachige Formatierer mit Quellenangaben kombiniert.',
    'Refactoring des ConsentContext auf React 19 useSyncExternalStore mit benutzerdefinierten Storage-Events für sofortige Client-Reaktivität und null Hydration-Mismatches auf Vercel.',
  ],
  liveUrl: 'https://www.yusupovartur.com/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['nextjs'],
  deepDiveBlogSlug: 'autonomous-hybrid-rag-architecture-browser',
}

export default yusupovarturNextjsPortfolio
