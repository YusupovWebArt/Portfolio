import { Project } from '../project-types'

const webartReactPortfolio: Project = {
  id: 3950,
  title: 'My React Portfolio Website',
  description:
    'Personal portfolio site of Artur Yusupov, showcasing his professional skills and completed projects as a WordPress and React developer',
  descriptionUa:
    'Особистий сайт-портфоліо Артура Юсупова, що демонструє його професійні навички та виконані проєкти як WordPress та React розробника',
  descriptionEs:
    'Sitio web de portfolio personal de Artur Yusupov, que muestra sus habilidades profesionales y proyectos realizados como desarrollador de WordPress y React',
  fullDescription:
    'This portfolio website is a high-performance single-page application (SPA) built with React 19, TypeScript 6.x, and Tailwind CSS v4. It showcases a strict Spec-Driven Development (SDD) process, integrating agentic AI coding environments (Claude Code, Cursor, Google Antigravity) directly into the SDLC. The project is governed by local workspace rules (AGENTS.md) and reference specifications (DESIGN_SYSTEM.md, SECURITY.md, ARCHITECTURE.md) to ensure absolute styling consistency, anti-scraping contact obfuscation, and hardened security headers (CSP).',
  fullDescriptionUa:
    'Цей сайт-портфоліо — це високопродуктивний односторінковий додаток (SPA), розроблений на React 19, TypeScript 6.x та Tailwind CSS v4. Він демонструє суворий процес розробки на основі специфікацій (Spec-Driven Development, SDD) з інтеграцією агентних AI-середовищ розробки (Claude Code, Cursor, Google Antigravity) безпосередньо в SDLC. Проєкт підпорядковується локальним правилам робочого простору (AGENTS.md) та еталонним специфікаціям (DESIGN_SYSTEM.md, SECURITY.md, ARCHITECTURE.md) для забезпечення абсолютної узгодженості стилів, обфускації контактів від скрапінгу та посилених заголовків безпеки (CSP).',
  fullDescriptionEs:
    'Este sitio web de portfolio es una aplicación de página única (SPA) de alto rendimiento construida con React 19, TypeScript 6.x y Tailwind CSS v4. Demuestra un riguroso proceso de Spec-Driven Development (SDD), integrando entornos de codificación con IA agéntica (Claude Code, Cursor, Google Antigravity) directamente en el SDLC. El proyecto está gobernado por reglas de workspace locales (AGENTS.md) y especificaciones de referencia (DESIGN_SYSTEM.md, SECURITY.md, ARCHITECTURE.md) para garantizar una coherencia de estilos absoluta, la ofuscación de contactos anti-scraping y cabeceras de seguridad reforzadas (CSP).',
  detailHeroLine: 'REACT 19 · TYPESCRIPT 6 · TAILWIND v4 · AI SDD',
  detailMetrics: [
    { value: 'React 19', label: 'UI Framework', accent: 'green' },
    { value: 'TS 6.x', label: 'Strict Typing', accent: 'green' },
    { value: 'Vite 8 & Tailwind v4', label: 'Modern Build', accent: 'darkGreen' },
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
      'The portfolio is built as a React SPA with TypeScript. The CI/CD pipeline triggers on push to master, running security audits, TypeScript checks, and lints before deploying to GitHub Pages.',
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
      { short: 'Tailwind CSS v4', full: 'Utility-first framework utilizing CSS variables and native light/dark variants' },
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
      title: 'Spec-Driven AI Development',
      description:
        'Every feature is built using the Spec-Driven Development (SDD) methodology, leveraging AI agents (Claude Code, Cursor, Antigravity) working inside strict boundaries defined by root specification documents.',
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
      title: 'Filterable Project Gallery',
      description:
        'Projects are displayed in a responsive card grid with category-based filters, allowing recruiters and clients to quickly browse relevant work.',
    },
    {
      title: 'Light & Dark Mode',
      description:
        'A fully implemented theme switcher lets visitors toggle between light and dark modes, with preferences persisted across sessions.',
    },
  ],
  challenges: [
    'Configuring major package updates (e.g. TypeScript 7.0 and Lucide-React 1.0) without causing linter crashes or missing icon exports.',
    'Managing AI context drift during prolonged programming sessions across multiple files and structures.',
    'Maintaining a clean, custom design system using Tailwind v4 while handling dark mode class overrides.',
  ],
  solutions: [
    'Implemented custom Dependabot ignore filters to block breaking major upgrades while permitting minor/patch updates in the 0.x series.',
    'Created a strict workspace rule (AGENTS.md) that forces AI agents to read DESIGN_SYSTEM.md, SECURITY.md, and ARCHITECTURE.md before coding.',
    'Overrode the default dark variant in Tailwind v4 using custom CSS variant rules mapped to the .dark selector class.',
  ],
  liveUrl: 'https://yusupovwebart.github.io/Portfolio/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['react'],
}

export default webartReactPortfolio
