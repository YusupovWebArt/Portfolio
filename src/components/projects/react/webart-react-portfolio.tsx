import { Project } from '../project-types'

const webartReactPortfolio: Project = {
  id: 3950,
  title: 'My React Portfolio Website',
  description:
    'High-performance single-page portfolio application built with React 19, TypeScript 6, Tailwind CSS v4, and a 3-language i18n engine (EN/UA/ES) powered by the 2026 AI-Harness methodology (SDD + SDLC + TDD) with 29 Vitest specs, 11 Playwright E2E tests (WCAG 2.2 AA), Consent Mode v2 Basic, and 50.3% bundle code-splitting.',
  descriptionUa:
    'Високопродуктивний односторінковий застосунок-портфоліо на React 19, TypeScript 6, Tailwind CSS v4 та 3-мовній i18n екосистемі (EN/UA/ES), створений за методологією AI-харнеса 2026 року (SDD + SDLC + TDD) із 29 Vitest тестами, 11 Playwright E2E сьютами (WCAG 2.2 AA), Consent Mode v2 Basic та скороченням бандла на 50.3%.',
  descriptionEs:
    'Aplicación SPA de portfolio de alto rendimiento construida con React 19, TypeScript 6, Tailwind CSS v4 y motor i18n trilingüe (EN/UA/ES), impulsada por la metodología AI-Harness 2026 (SDD + SDLC + TDD) con 29 specs de Vitest, 11 pruebas E2E en Playwright (WCAG 2.2 AA), Consent Mode v2 Basic y reducción del 50.3% del bundle inicial.',
  fullDescription:
    'This portfolio website is an enterprise-grade single-page application (SPA) and Progressive Web App (PWA) built with React 19, TypeScript 6.x, Tailwind CSS v4, the native W3C View Transitions API for GPU-accelerated card morphing, and a complete 3-language internationalization system (English, Ukrainian, Spanish). Developed following the 2026 AI-Harness methodology (SDD + SDLC + TDD), it incorporates an immutable project Constitution, specialized Antigravity agent skills, 29 automated Vitest unit and component tests across 7 suites with enforced coverage ratchets, 11 automated Playwright and axe-core E2E tests for European Accessibility Act (EAA 2026 / WCAG 2.2 AA) compliance, Google Analytics 4 Consent Mode v2 Basic privacy controls, and an automated bundle budget gate that slashed initial eager JavaScript by 50.3% (from 843 KB to 418 KB). Deployed via an automated 10-step GitHub Actions CI/CD pipeline with Lighthouse CI Core Web Vitals performance budgets.',
  fullDescriptionUa:
    'Цей сайт-портфоліо - це корпоративного рівня односторінковий застосунок (SPA) та Progressive Web App (PWA), розроблений на React 19, TypeScript 6.x, Tailwind CSS v4, нативному W3C View Transitions API для апаратного GPU-морфінгу карток та повній 3-мовній системі інтернаціоналізації (англійська, українська, іспанська). Створений за методологією AI-харнеса 2026 року (SDD + SDLC + TDD), він містить незмінну Конституцію проєкту, спеціалізовані скіли агентів Antigravity, 29 автоматизованих модульних тестів Vitest у 7 сьютах із контролем порогів покриття (coverage ratchets), 11 автоматизованих Playwright і axe-core E2E тестів на відповідність European Accessibility Act (EAA 2026 / WCAG 2.2 AA), керування приватністю Google Analytics 4 Consent Mode v2 Basic, а також автоматичний контроль бандл-бюджету, що скоротив початковий JavaScript на 50.3% (із 843 КБ до 418 КБ). Розгортається через автоматизований 10-етапний CI/CD пайплайн у GitHub Actions із контролем бюджетів Core Web Vitals через Lighthouse CI.',
  fullDescriptionEs:
    'Este sitio web de portfolio es una aplicación SPA de nivel empresarial y Progressive Web App (PWA) de alto rendimiento construida con React 19, TypeScript 6.x, Tailwind CSS v4, la API nativa W3C View Transitions para el morphing acelerado por GPU de tarjetas y un sistema completo de internacionalización en 3 idiomas (inglés, ucraniano, español). Desarrollado siguiendo la metodología AI-Harness 2026 (SDD + SDLC + TDD), incorpora una Constitución de proyecto inmutable, habilidades especializadas para agentes Antigravity, 29 pruebas unitarias automatizadas con Vitest en 7 suites con umbrales de cobertura obligatorios, 11 pruebas E2E con Playwright y axe-core para el cumplimiento de la European Accessibility Act (EAA 2026 / WCAG 2.2 AA), gestión de privacidad con Google Analytics 4 Consent Mode v2 Basic, y control automatizado de presupuestos de bundle que redujo el JavaScript inicial en un 50.3% (de 843 KB a 418 KB). Se despliega mediante un pipeline CI/CD de 10 pasos en GitHub Actions con presupuestos Core Web Vitals en Lighthouse CI.',
  detailHeroLine: 'REACT 19 · TYPESCRIPT 6 · 2026 AI HARNESS (SDD + TDD) · 29 VITEST SPECS · 11 PLAYWRIGHT E2E · CONSENT MODE V2 · BUNDLE BUDGET',
  detailMetrics: [
    { value: '29 Specs', label: 'Vitest TDD (7 Suites)', accent: 'green' },
    { value: 'WCAG 2.2 AA', label: 'EAA 2026 (axe-core)', accent: 'green' },
    { value: '-50.3% JS', label: 'Initial Bundle Budget', accent: 'darkGreen' },
    { value: 'AI Harness', label: 'SDD + SDLC + Stop Hook', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'SPECIFICATION & HARNESS',
        steps: [
          { label: 'Constitution (.specify)' },
          { label: 'Agent Skills (.agents/skills)', highlight: true },
          { label: 'Quality Stop Hook (.agents/hooks)' },
          { label: 'DESIGN_SYSTEM & SECURITY' },
        ],
      },
      {
        rowLabel: 'TDD & VERIFICATION',
        steps: [
          { label: 'Vitest (29 Specs / 7 Suites)' },
          { label: 'Coverage Ratchets (v8)', highlight: true },
          { label: 'Playwright (11 E2E & A11y)' },
          { label: 'Strict Zero-any (TSC)' },
        ],
      },
      {
        rowLabel: 'PERFORMANCE & CI/CD GATES',
        steps: [
          { label: 'Bundle Budget (-50.3% JS)', highlight: true },
          { label: 'Consent Mode v2 Basic' },
          { label: 'Lighthouse CI (CWV Budgets)' },
          { label: 'GitHub Pages Automated Deploy' },
        ],
      },
    ],
    description:
      'The portfolio is engineered with a 4-layer 2026 AI-Harness: Spec-Driven Development (SDD) backed by an immutable Constitution and specialized Antigravity agent skills, a full TDD suite with 29 Vitest specs and enforced coverage ratchets, 11 automated Playwright E2E and axe-core accessibility tests (WCAG 2.2 AA / EAA 2026), a bundle budget checker reducing initial JavaScript by 50.3%, Google Analytics Consent Mode v2 Basic privacy controls, and an automated GitHub Actions deployment pipeline with Lighthouse CI Core Web Vitals budgets.',
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
      { short: '2026 AI-Harness (SDD)', full: 'Spec-first coding pipeline guided by an immutable Constitution (.specify) and specialized Antigravity agent skills' },
      { short: 'AI Harness Stop Hook', full: 'Automated pre-commit validation (.agents/hooks/quality-gate.mjs) enforcing zero em dashes and zero TypeScript compiler errors' },
      { short: 'GitHub Actions 10-Step CI/CD', full: 'Automated CI/CD workflow executing SAST, SCA, TDD, bundle budget, E2E, and Lighthouse CI gates before deployment' },
      { short: 'Unified Verification Gate', full: 'Single-command verification pipeline (pnpm verify) chaining compiler, linter, tests, audits, bundle budgets, and builds' },
      { short: 'Base64 Contact Obfuscation', full: 'Client-side Base64 encryption and interaction-based decoding to protect contact channels from web scrapers' },
      { short: 'Hardened CSP & Meta Security', full: 'Strict Content Security Policy, Referrer-Policy, and sandboxed Permissions-Policy meta headers' },
      { short: 'Vite 8 & Rolldown', full: 'Next-generation bundler delivering high-velocity HMR, automatic code-splitting, and optimized production chunks' },
    ],
    technicalOptimization: [
      { short: 'Vitest & RTL (29 Specs)', full: 'Automated unit and component test suite (7 suites, 29 specs) running under isolated JSDOM environments' },
      { short: 'Coverage Ratchets (v8)', full: 'Strict test coverage ratchets (Statements >= 30%, Branches >= 15%, Functions >= 14%, Lines >= 30%) enforcing quality gates' },
      { short: 'Bundle Budget Verifier', full: 'Automated check (scripts/check-bundle-budget.mjs) asserting Main Entry < 200 KB and Initial JS < 450 KB (-50.3% reduction)' },
      { short: 'Lazy-Loaded Case Studies', full: 'Dynamic code-splitting separating the 423 KB projects chunk and 96 KB locales chunk from the critical boot path' },
      { short: 'Playwright & axe-core (11 Specs)', full: 'Automated end-to-end browser tests verifying navigation, language mutation, Consent Mode, and WCAG 2.2 AA compliance' },
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
      { short: 'Google Analytics 4', full: 'Privacy-compliant visitor engagement telemetry operated strictly under Consent Mode v2 Basic mode' },
      { short: 'Consent Mode v2 Basic', full: 'Opt-in cookie banner preventing third-party script execution before consent, with instant revocation via footer Cookie Settings' },
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
        'Engineered following the 2026 AI-Harness methodology: development is driven by an immutable Constitution (.specify/memory/constitution.md) and 6 specialized Antigravity agent skills (.agents/skills/), ensuring deterministic, regression-free AI code generation.',
    },
    {
      title: 'Automated TDD Test Suite (29 Vitest Specs)',
      description:
        'Comprehensive unit and component test suite covering ThemeContext, LanguageContext, Projects catalog, ConsentContext, contacts security, and i18n parity scanner across 7 test suites with enforced coverage ratchets.',
    },
    {
      title: 'Bundle Size Optimization & Budget Gate (-50.3% JS)',
      description:
        'Slashed initial eager JavaScript by 50.3% (from 843 KB to 418 KB raw / 124 KB gz) by lazy-loading the 423 KB projects catalog and isolating locales, strictly enforced in CI via scripts/check-bundle-budget.mjs.',
    },
    {
      title: 'Privacy-First Telemetry (Consent Mode v2 Basic)',
      description:
        'Implemented strict opt-in Google Analytics 4 Consent Mode v2 Basic: zero network requests before user consent, accessible cookie modal, and footer settings trigger with automatic cookie purger.',
    },
    {
      title: 'European Accessibility Act (EAA 2026) & WCAG 2.2 AA',
      description:
        'Audited with Playwright and axe-core to achieve zero critical or serious accessibility violations, meeting European Accessibility Act (EN 301 549) standards with 4.5:1 text contrast ratios and 24x24px minimum target sizes.',
    },
    {
      title: 'End-to-End Browser Verification (11 Playwright Specs)',
      description:
        'Automated Playwright test suite validating critical user flows across Chromium, mobile viewports, theme switching, trilingual dictionary mutations, and Consent Mode acceptance/denial lifecycles.',
    },
    {
      title: 'Core Web Vitals Budgets & Lighthouse CI Gate',
      description:
        'Continuous performance enforcement with Lighthouse CI (.lighthouserc.json) asserting 95+ Accessibility, 95+ SEO, 90+ Best Practices, and Core Web Vitals threshold assertions (LCP, CLS, FCP) in automated deployment pipelines.',
    },
    {
      title: 'Progressive Web App (PWA) & Offline Mode',
      description:
        'Engineered full PWA capabilities with Web App Manifest and custom Service Worker caching (Stale-While-Revalidate), enabling instant loading, standalone mobile/desktop installation, and offline case study browsing.',
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
      title: '10-Step CI/CD Quality Pipeline with pnpm verify',
      description:
        'Robust GitHub Actions deployment pipeline executing TypeScript type verification, ESLint guardrails, 29 Vitest specs, SCA security audit, bundle build, bundle budget verification, Playwright browser a11y tests, and Lighthouse CI before deploying to GitHub Pages.',
    },
    {
      title: 'Base64 Contact Obfuscation & Hardened CSP',
      description:
        'Protects developer email, phone, and messaging links via client-side Base64 encryption and interaction-based decryption to defeat automated scrapers, backed by sandboxed Content Security Policy meta headers and contacts.test.ts scanner.',
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
    'Eliminating the 433 KB initial JavaScript parsing overhead caused by eager project metadata imports on the critical boot path.',
    'Guaranteeing GDPR and ePrivacy compliance for Google Analytics 4 telemetry without blocking user experience or executing untracked third-party requests prior to explicit consent.',
    'Maintaining strict zero-any type safety, architectural integrity, and regression-free delivery during rapid AI-assisted development cycles.',
    'Ensuring full legal and technical accessibility compliance under the European Accessibility Act (EAA 2026 / EN 301 549) and WCAG 2.2 Level AA across both dark and light modes.',
  ],
  solutions: [
    'Separated project case studies with React lazy-loading and isolated locale dictionaries into a dedicated chunk, reducing initial eager JavaScript by 50.3% (from 843 KB to 418 KB) and locking budgets via scripts/check-bundle-budget.mjs.',
    'Implemented Consent Mode v2 Basic mode with an accessible banner, dynamic gtag.js injection upon explicit consent, and a footer Cookie Settings trigger with automatic cookie purging upon revocation.',
    'Established an immutable Constitution (.specify), specialized Antigravity agent skills, 29 automated Vitest specs with enforced coverage ratchets, and an automated Stop hook (.agents/hooks/quality-gate.mjs) blocking em dashes and TypeScript errors.',
    'Integrated Playwright with @axe-core/playwright to automatically audit DOM landmarks, color contrast ratios (>= 4.5:1), interactive target sizes (>= 24x24px), and decorative SVG accessibility on every build.',
  ],
  liveUrl: 'https://yusupovwebart.github.io/Portfolio/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['react'],
}

export default webartReactPortfolio
