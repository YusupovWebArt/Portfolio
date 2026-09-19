import { Project } from '../project-types'

const webartReactPortfolio: Project = {
  id: 3950,
  title: 'My React Portfolio Website',
  description:
    'High-performance single-page portfolio application built with React 19, TypeScript 6, Tailwind CSS v4, and a 3-language i18n engine (EN/UA/ES) powered by a 4-layer 2026 AI Harness (SDD + SDLC + TDD) with Vitest, Playwright axe-core (WCAG 2.2 AA), and Lighthouse CI.',
  descriptionUa:
    'Високопродуктивний односторінковий застосунок-портфоліо на React 19, TypeScript 6, Tailwind CSS v4 та 3-мовній i18n екосистемі (EN/UA/ES), створений за 4-шаровою методологією AI-харнеса 2026 року (SDD + SDLC + TDD) із Vitest, Playwright axe-core (WCAG 2.2 AA) та Lighthouse CI.',
  descriptionEs:
    'Aplicación SPA de portfolio de alto rendimiento construida con React 19, TypeScript 6, Tailwind CSS v4 y motor i18n trilingüe (EN/UA/ES), impulsada por un AI Harness de 4 capas (SDD + SDLC + TDD) con Vitest, Playwright axe-core (WCAG 2.2 AA) y Lighthouse CI.',
  fullDescription:
    'This portfolio website is a high-performance single-page application (SPA) and Progressive Web App (PWA) built with React 19, TypeScript 6.x, Tailwind CSS v4, the native W3C View Transitions API for GPU-accelerated card morphing, and a complete 3-language internationalization system (English, Ukrainian, Spanish). Developed following the 2026 AI-Harness methodology (SDD + SDLC + TDD), it incorporates an immutable project Constitution, specialized Antigravity agent skills, a full Vitest and React Testing Library unit suite, automated Playwright and axe-core accessibility audits for European Accessibility Act (EAA 2026 / WCAG 2.2 AA) compliance, and a 9-step GitHub Actions CI/CD deployment pipeline with Lighthouse CI Core Web Vitals performance budgets.',
  fullDescriptionUa:
    'Цей сайт-портфоліо - це високопродуктивний односторінковий застосунок (SPA) та Progressive Web App (PWA), розроблений на React 19, TypeScript 6.x, Tailwind CSS v4, нативному W3C View Transitions API для апаратного GPU-морфінгу карток та повній 3-мовній системі інтернаціоналізації (англійська, українська, іспанська). Створений за методологією AI-харнеса 2026 року (SDD + SDLC + TDD), він містить незмінну Конституцію проєкту, спеціалізовані скіли агентів Antigravity, повний набір модульних тестів на Vitest і React Testing Library, автоматизовані аудити доступності Playwright і axe-core на відповідність European Accessibility Act (EAA 2026 / WCAG 2.2 AA), а також 9-етапний CI/CD пайплайн у GitHub Actions із контролем бюджетів продуктивності Core Web Vitals через Lighthouse CI.',
  fullDescriptionEs:
    'Este sitio web de portfolio es una aplicación de página única (SPA) y Progressive Web App (PWA) de alto rendimiento construida con React 19, TypeScript 6.x, Tailwind CSS v4, la API nativa W3C View Transitions para el morphing acelerado por GPU de tarjetas y un sistema completo de internacionalización en 3 idiomas (inglés, ucraniano, español). Desarrollado siguiendo la metodología AI-Harness 2026 (SDD + SDLC + TDD), incorpora una Constitución de proyecto inmutable, habilidades especializadas para agentes Antigravity, una suite completa de pruebas unitarias con Vitest y React Testing Library, auditorías automatizadas de accesibilidad con Playwright y axe-core para el cumplimiento de la European Accessibility Act (EAA 2026 / WCAG 2.2 AA), y un pipeline CI/CD de 9 pasos en GitHub Actions con presupuestos de rendimiento Core Web Vitals mediante Lighthouse CI.',
  detailHeroLine: 'REACT 19 · TYPESCRIPT 6 · 2026 AI HARNESS (SDD + TDD) · VITEST · PLAYWRIGHT WCAG 2.2 AA · LIGHTHOUSE CI · PWA',
  detailMetrics: [
    { value: 'React 19', label: 'UI Framework', accent: 'green' },
    { value: 'WCAG 2.2 AA', label: 'A11y (EAA 2026)', accent: 'green' },
    { value: 'TDD & E2E', label: 'Vitest & Playwright', accent: 'darkGreen' },
    { value: 'AI Harness (SDD)', label: 'Antigravity SDLC', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'SPECIFICATION & HARNESS',
        steps: [
          { label: 'Constitution (.specify)' },
          { label: 'Agent Skills (.agents/skills)', highlight: true },
          { label: 'DESIGN_SYSTEM.md' },
          { label: 'SECURITY.md' },
        ],
      },
      {
        rowLabel: 'TDD & VERIFICATION',
        steps: [
          { label: 'Vitest Unit & RTL' },
          { label: 'Playwright & axe-core (WCAG 2.2 AA)', highlight: true },
          { label: 'Strict Zero-any (TSC)' },
          { label: 'ESLint Guardrails' },
        ],
      },
      {
        rowLabel: 'CI/CD & QUALITY GATES',
        steps: [
          { label: 'SCA Audit (pnpm audit)' },
          { label: 'Lighthouse CI (CWV Budgets)', highlight: true },
          { label: 'GitHub Pages Automated Deploy' },
        ],
      },
    ],
    description:
      'The portfolio is engineered with a 4-layer 2026 AI-Harness: Spec-Driven Development (SDD) backed by an immutable Constitution and specialized Antigravity agent skills, a full TDD suite with Vitest and React Testing Library, automated browser accessibility audits via Playwright and axe-core (WCAG 2.2 AA / EAA 2026), and a 9-step GitHub Actions CI/CD deployment pipeline with Lighthouse CI Core Web Vitals performance budgets.',
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
      { short: 'React 19', full: 'Component-based UI with modern hooks for state, effect, and context management' },
      { short: 'TypeScript 6.x', full: 'Strict type safety with zero-any compiler enforcement across the entire workspace' },
      { short: 'PWA & Service Worker', full: 'Progressive Web App standard with offline support, Stale-While-Revalidate caching, and native app installation' },
      { short: 'View Transitions API', full: 'Native W3C View Transitions API for 120 FPS hardware-accelerated card morphing and seamless transitions' },
      { short: 'Tailwind CSS v4', full: 'Utility-first styling utilizing modern CSS variables and native light/dark selector variants' },
      { short: 'Trilingual i18n (EN/UA/ES)', full: 'Custom React LanguageContext with browser language auto-detection and localStorage persistence' },
      { short: 'Lucide & React Icons', full: 'Accessible vector iconography with aria-hidden wrappers and strict SVG contrast ratios' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: '2026 AI-Harness (SDD)', full: 'Spec-first coding pipeline guided by an immutable Constitution and specialized Antigravity agent skills' },
      { short: 'GitHub Actions 9-Step CI/CD', full: 'Automated CI/CD workflow executing SAST, SCA, TDD, E2E, and Lighthouse CI gates before deployment' },
      { short: 'Unified Verification Gate', full: 'Single-command verification pipeline (pnpm verify) chaining compiler, linter, tests, audits, and bundle builds' },
      { short: 'Base64 Contact Obfuscation', full: 'Client-side Base64 encryption and interaction-based decoding to protect contact channels from web scrapers' },
      { short: 'Hardened CSP & Meta Security', full: 'Strict Content Security Policy, Referrer-Policy, and sandboxed Permissions-Policy meta headers' },
      { short: 'Vite 8 & Rolldown', full: 'Next-generation bundler delivering high-velocity HMR, automatic code-splitting, and optimized production chunks' },
    ],
    technicalOptimization: [
      { short: 'Vitest & RTL (TDD)', full: 'Automated unit and component test suite running under isolated JSDOM environments' },
      { short: 'Playwright & axe-core', full: 'Automated end-to-end browser tests verifying navigation, language mutation, and WCAG 2.2 AA compliance' },
      { short: 'Lighthouse CI CWV Budgets', full: 'Automated performance assertion engine validating LCP, FCP, CLS, accessibility, and SEO thresholds' },
      { short: 'WCAG 2.2 Level AA / EAA 2026', full: 'Compliance with European Accessibility Act standards, 4.5:1 contrast ratios, and 24x24px minimum touch targets' },
      { short: 'WebP Image Pipeline', full: 'Next-gen responsive media assets with explicit dimensions preventing cumulative layout shifts (CLS 0.00)' },
    ],
    aiTools: [
      { short: 'Google Antigravity', full: 'Advanced agentic IDE harness orchestrating multi-agent SDLC workflows and custom agent skills' },
      { short: 'Claude Code', full: 'Autonomous agentic system utilized for architectural specifications, refactoring, and code analysis' },
      { short: 'Cursor Composer', full: 'Context-engineered IDE workspace enforcing strict project boundaries and .agents rules' },
      { short: 'Interactive AI FAQ Chatbot', full: 'Client-side algorithmic matching engine providing localized answers with interactive suggestion chips' },
    ],
    analytics: [
      { short: 'Google Analytics 4', full: 'Privacy-compliant visitor engagement tracking and performance telemetry' },
      { short: 'Google Search Console', full: 'Monitoring indexing status, crawl diagnostics, and search visibility' },
    ],
    seo: [
      { short: 'JSON-LD Structured Data', full: 'Schema.org microdata implementation for Person, WebSite, and ProfessionalService indexing' },
      { short: 'Open Graph & GEO Optimization', full: 'Rich metadata and structured content engineered for discovery by modern generative AI search engines' },
    ],
  },
  features: [
    {
      title: '2026 AI-Harness (SDD + SDLC + TDD)',
      description:
        'Engineered following the 2026 AI-Harness methodology: development is driven by an immutable Constitution (.specify/memory/constitution.md) and 5 specialized Antigravity agent skills (.agents/skills/), ensuring deterministic, regression-free AI code generation.',
    },
    {
      title: 'European Accessibility Act (EAA 2026) & WCAG 2.2 AA',
      description:
        'Fully audited with Playwright and axe-core to achieve zero critical or serious accessibility violations, meeting European Accessibility Act (EN 301 549) standards with 4.5:1 text contrast ratios and 24x24px minimum target sizes.',
    },
    {
      title: 'Automated TDD Unit Test Suite (Vitest & RTL)',
      description:
        'Comprehensive unit and component test coverage built with Vitest and React Testing Library, validating theme toggles, trilingual state persistence, and catalog filtering across isolated test environments.',
    },
    {
      title: 'Core Web Vitals Budgets & Lighthouse CI Gate',
      description:
        'Continuous performance enforcement with Lighthouse CI (.lighthouserc.json) asserting 95+ Accessibility, 95+ SEO, 90+ Best Practices, and sub-second Core Web Vitals thresholds (LCP, CLS, FCP) in automated deployment pipelines.',
    },
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
      title: 'Trilingual i18n Engine & Locale Persistence',
      description:
        'Full support for English, Ukrainian, and Spanish across all site sections, interactive chatbot FAQs, and 69 project case studies, complete with custom SVG flags, browser auto-detection, and document lang mutation.',
    },
    {
      title: 'Interactive Multilingual AI FAQ Chatbot',
      description:
        'Client-side virtual assistant powered by localized keyword matching algorithms, serving instantaneous responses in English, Ukrainian, and Spanish with interactive suggestion chips and zero external API dependencies.',
    },
    {
      title: '9-Step CI/CD Quality Pipeline with pnpm verify',
      description:
        'Robust GitHub Actions deployment pipeline executing TypeScript type verification, ESLint guardrails, Vitest unit specs, SCA security audit, bundle build, Playwright browser a11y tests, and Lighthouse CI before deploying to GitHub Pages.',
    },
    {
      title: 'Base64 Contact Obfuscation & Hardened CSP',
      description:
        'Protects developer email, phone, and messaging links via client-side Base64 encryption and interaction-based decryption to defeat automated scrapers, backed by sandboxed Content Security Policy meta headers.',
    },
    {
      title: 'Filterable 69-Project Showcase Grid',
      description:
        '69 commercial and architectural projects displayed in a responsive card grid with multi-category filters, full screenshots, tech stacks, and comprehensive modal case studies.',
    },
    {
      title: 'Synchronized Dark & Light Theme System',
      description:
        'Complete dark and light mode styling with Tailwind v4 CSS variables, automated system preference detection, smooth color transitions, and persistent user preference storage.',
    },
  ],
  challenges: [
    'Maintaining strict zero-any type safety, architectural integrity, and regression-free delivery during rapid AI-assisted development cycles.',
    'Ensuring full legal and technical accessibility compliance under the European Accessibility Act (EAA 2026 / EN 301 549) and WCAG 2.2 Level AA across both dark and light modes.',
    'Enforcing sub-second performance budgets and preventing Core Web Vitals regressions in CI/CD without manual testing.',
  ],
  solutions: [
    'Implemented a 4-layer 2026 AI-Harness featuring an immutable project Constitution, 5 specialized Antigravity agent skills (.agents/skills), and a unified pre-push quality gate (pnpm verify).',
    'Integrated Playwright with @axe-core/playwright to automatically audit DOM landmarks, color contrast ratios (>= 4.5:1), interactive target sizes (>= 24x24px), and decorative SVG accessibility on every build.',
    'Configured Lighthouse CI (.lighthouserc.json) with automated assertions on LCP, CLS, and FCP, combined with a Stale-While-Revalidate Service Worker and next-gen WebP image pipeline.',
  ],
  liveUrl: 'https://yusupovwebart.github.io/Portfolio/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['react'],
}

export default webartReactPortfolio
