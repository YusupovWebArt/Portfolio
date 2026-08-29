import { Project } from '../project-types'

const webartReactPortfolio: Project = {
  id: 3950,
  title: 'My React Portfolio Website',
  description:
    'High-performance single-page portfolio application built with React 19, TypeScript 6, Tailwind CSS v4, and a 3-language i18n engine (EN/UA/ES) using a Spec-Driven AI Harness Architecture (SDD).',
  descriptionUa:
    'Високопродуктивний односторінковий сайт-портфоліо на React 19, TypeScript 6, Tailwind CSS v4 та 3-мовною i18n екосистемою (EN/UA/ES) із застосуванням методології Spec-Driven AI Harnessing (SDD).',
  descriptionEs:
    'Aplicación de portfolio SPA de alto rendimiento construida con React 19, TypeScript 6, Tailwind CSS v4 y motor i18n trilingüe (EN/UA/ES) siguiendo la metodología Spec-Driven AI Harnessing (SDD).',
  fullDescription:
    'This portfolio website is a high-performance single-page application (SPA) and Progressive Web App (PWA) built with React 19, TypeScript 6.x, Tailwind CSS v4, the native W3C View Transitions API for GPU-accelerated card morphing, and a complete 3-language internationalization system (English, Ukrainian, Spanish). It features an offline-capable Service Worker with Stale-While-Revalidate caching, standalone app installation across iOS, Android, and Desktop, a strict Spec-Driven AI Harness Architecture (SDD), Base64 contact obfuscation, hardened security headers (CSP), and an interactive 69-project showcase.',
  fullDescriptionUa:
    'Цей сайт-портфоліо - це високопродуктивний односторінковий додаток (SPA) та Progressive Web App (PWA), розроблений на React 19, TypeScript 6.x, Tailwind CSS v4, нативному W3C View Transitions API для апаратного GPU-морфінгу карток та повній 3-мовній системі інтернаціоналізації (англійська, українська, іспанська). Включає автономний Service Worker із кэшуванням Stale-While-Revalidate, встановлення на iOS, Android та Desktop як нативного застосунку, процес розробки Spec-Driven AI Harness Architecture (SDD), обфускацію контактів Base64, посилені заголовки безпеки (CSP) та портфоліо з 69 проєктів.',
  fullDescriptionEs:
    'Este sitio web de portfolio es una aplicación de página única (SPA) y Progressive Web App (PWA) de alto rendimiento construida con React 19, TypeScript 6.x, Tailwind CSS v4, la API nativa W3C View Transitions para el morphing acelerado por GPU de tarjetas y un sistema completo de internacionalización en 3 idiomas (inglés, ucraniano, español). Cuenta con un Service Worker con soporte offline mediante almacenamiento en caché Stale-While-Revalidate, instalación standalone en iOS, Android y Desktop, metodología Spec-Driven AI Harness Architecture (SDD), ofuscación de contactos Base64, cabeceras de seguridad (CSP) y un escaparate interactivo de 69 proyectos.',
  detailHeroLine: 'REACT 19 · TYPESCRIPT 6 · PWA & SERVICE WORKER · VIEW TRANSITIONS API · TRILINGUAL i18n · AI SDD',
  detailMetrics: [
    { value: 'React 19', label: 'UI Framework', accent: 'green' },
    { value: 'PWA / Offline', label: 'Web App Standard', accent: 'green' },
    { value: 'View Transitions', label: 'W3C Standard', accent: 'darkGreen' },
    { value: 'Spec-Driven (SDD)', label: 'AI SDLC Workflow', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'SPECIFICATION',
        steps: [
          { label: 'DESIGN_SYSTEM.md' },
          { label: 'SECURITY.md', highlight: true },
          { label: 'ARCHITECTURE.md' },
        ],
      },
      {
        rowLabel: 'DEVELOPMENT',
        steps: [
          { label: 'Spec-Driven AI Code' },
          { label: 'Strict Type-Check (TSC)', highlight: true },
          { label: 'ESLint & WPCS Audit' },
        ],
      },
      {
        rowLabel: 'DEPLOYMENT',
        steps: [
          { label: 'GHA Trigger' },
          { label: 'CI/CD Pipeline Build', highlight: true },
          { label: 'GitHub Pages Deploy' },
        ],
      },
    ],
    description:
      'The portfolio is built as a React SPA with TypeScript and i18n subsystem. The CI/CD pipeline triggers on push to master, running security audits, TypeScript checks, and lints before deploying to GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
      caption: 'Hero section and project grid overview of the React portfolio',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide2.webp',
      caption: 'Light and Dark Mode',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide3.webp',
      caption: 'About section with skills and experience summary',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide4.webp',
      caption: 'Project cards grid with category filter navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide5.webp',
      caption: 'Project detail modal with technology stack and screenshots',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide6.webp',
      caption: 'Contact section with social links and contact form',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide7.webp',
      caption: 'Mobile-responsive layout on small screen devices',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide8.webp',
      caption: 'Dark mode theme applied across all portfolio sections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide9.webp',
      caption: 'Footer with navigation links and social media icons',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React 19', full: 'Component-based UI with hooks for state, effect, and context management' },
      { short: 'TypeScript 6.x', full: 'Strict type safety across the entire application workspace' },
      { short: 'PWA & Service Worker', full: 'Progressive Web App standard with offline support, CacheStorage precaching, and native app installation' },
      { short: 'View Transitions API', full: 'Native W3C View Transitions API for 120 FPS hardware-accelerated card morphing and seamless page state transitions without external animation libraries' },
      { short: 'Tailwind CSS v4', full: 'Utility-first framework utilizing CSS variables and native light/dark variants' },
      { short: 'Trilingual i18n (EN/UA/ES)', full: 'Custom React LanguageContext with browser auto-detection and localStorage persistence' },
      { short: 'Lucide Icons', full: 'Vector icons integrated throughout the UI for navigation clarity' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite 8 & Rolldown', full: 'Ultra-fast bundler providing tree-shaking, fast HMR, and optimized chunks' },
      { short: 'GitHub Actions', full: 'CI/CD workflow running static code tests, compilations, and deploys on push' },
      { short: 'Workspace Rules (.agents)', full: 'AGENTS.md guidelines locking AI execution to strict specification files' },
      { short: 'Spec-Driven Dev (SDD)', full: 'Spec-first coding pipeline utilizing Claude Code, Cursor, and Antigravity' },
      { short: 'Base64 Obfuscation', full: 'Dynamic Base64 encryption and interaction-based decoding to prevent email and phone harvesting' },
      { short: 'CSP & Meta Security', full: 'Content Security Policy, Referrer-Policy, and Permissions-Policy via meta headers' },
    ],
    analytics: [
      { short: 'Google Analytics 4', full: 'Visitor traffic analytics and engagement tracking integration' },
      { short: 'Search Console', full: 'Monitoring indexing status and search performance metrics' },
    ],
    seo: [
      { short: 'Structured Schemas', full: 'JSON-LD schema microdata optimization for Person and WebSite queries' },
      { short: 'Open Graph & GEO', full: 'Open Graph previews and custom descriptions for search engines and AI crawlers' },
    ],
  },
  features: [
    {
      title: 'Progressive Web App (PWA) & Offline Mode',
      description:
        'Engineered full PWA capabilities with Web App Manifest and custom Service Worker caching (Stale-While-Revalidate), enabling 0ms instant loading, standalone mobile/desktop installation, and offline case study browsing.',
    },
    {
      title: 'Native View Transitions API',
      description:
        'Implemented the official W3C View Transitions API standard, enabling hardware-accelerated GPU card morphing from grid thumbnails into full case studies without third-party library overhead.',
    },
    {
      title: 'Spec-Driven AI Development (SDD)',
      description:
        'Every feature is built using the Spec-Driven Development (SDD) methodology, leveraging AI agents (Claude Code, Cursor, Antigravity) working inside strict boundaries defined by root specification documents.',
    },
    {
      title: 'Trilingual i18n Engine & Dropdown',
      description:
        'Full support for English, Ukrainian, and Spanish across all site sections, interactive chatbot FAQs, and 69 project case studies, complete with custom SVG flags and browser auto-detection.',
    },
    {
      title: 'Multilingual AI FAQ Chatbot',
      description:
        'Interactive virtual assistant powered by client-side keyword matching algorithms, serving instantaneous localized responses in English, Ukrainian, and Spanish with interactive suggestion chips.',
    },
    {
      title: 'Workspace Rules (.agents)',
      description:
        'Ironclad workspace guidelines (AGENTS.md) that force AI tools to read DESIGN_SYSTEM.md, SECURITY.md, and ARCHITECTURE.md before proposing code changes.',
    },
    {
      title: 'CI/CD & Automated Audits',
      description:
        'Features automated weekly dependency audits via Dependabot and a GitHub Actions pipeline that verifies types, lints code, and runs security checks before deploying.',
    },
    {
      title: 'Contact Obfuscation & Security Headers',
      description:
        'Enforces local security policies via CSP/Referrer meta headers, and protects email, phone, and Telegram links with dynamic Base64 decryption on interaction.',
    },
    {
      title: 'Filterable 69-Project Showcase',
      description:
        '69 projects displayed in a responsive card grid with category-based filters and comprehensive modal case studies, allowing recruiters to quickly evaluate technical depth.',
    },
    {
      title: 'Light & Dark Mode',
      description:
        'A fully implemented theme switcher lets visitors toggle between light and dark modes, with preferences persisted across sessions.',
    },
  ],
  challenges: [
    'Configuring major package updates without causing linter crashes or missing icon exports.',
    'Managing AI context drift during prolonged programming sessions across multiple files and structures.',
    'Maintaining a clean, custom design system using Tailwind v4 while handling dark mode class overrides and trilingual layouts.',
  ],
  solutions: [
    'Implemented custom Dependabot ignore filters to block breaking major upgrades while permitting minor/patch updates in the 0.x series.',
    'Created a strict workspace rule (AGENTS.md) that forces AI agents to read DESIGN_SYSTEM.md, SECURITY.md, and ARCHITECTURE.md before coding.',
    'Overrode the default dark variant in Tailwind v4 using custom CSS variant rules mapped to the .dark selector class, and implemented dynamic language state routing.',
  ],
  liveUrl: 'https://yusupovwebart.github.io/Portfolio/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['react'],
}

export default webartReactPortfolio
