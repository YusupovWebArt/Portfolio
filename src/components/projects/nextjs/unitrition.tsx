import { Project } from '../project-types'

const unitrition: Project = {
  id: 29000,
  title: 'Unitrition',
  description:
    'A full-stack nutrition platform that helps users find the right foods for their specific dietary plans - pick a plan, search foods, and get an instant color-coded comparison of what fits and what doesn\'t. Built with headless WordPress as CMS, a Next.js 16 (React 19) App Router frontend, Supabase authentication, and a custom Bread Units Calculator integrated with the USDA FoodData Central API. Supports 10 diet frameworks, bilingual content (EN/ES), and an educational nutrition blog with Schema.org markup.',
  descriptionUa:
    'Full-stack платформа для підбору продуктів під 10 спеціалізованих дієтичних планів. Створена на базі Headless WordPress, Next.js 16 (React 19) App Router, Supabase Auth та калькулятора Хлібних Одиниць з інтеграцією USDA FoodData Central API. Включає кольорове скорингове кодування, двомовність EN/ES та освітній блог про харчування з розміткою Schema.org.',
  descriptionEs:
    'Plataforma de nutrición full-stack para encontrar alimentos adecuados según planes dietéticos específicos: elija un plan, busque alimentos y obtenga comparación instantánea por colores. Desarrollada con Headless WordPress, Next.js 16 (React 19) App Router, Supabase Auth y Calculadora de Unidades de Pan con API USDA FoodData Central. Incluye 10 dietas, soporte bilingüe EN/ES y blog educativo de nutrición con Schema.org.',
  fullDescription:
    'An educational nutrition and dietary self-monitoring platform engineered for precision nutritional modeling. Powered by Headless WordPress as CMS, Next.js 16 (React 19 with Server Components), Supabase authentication with PostgreSQL, and real-time USDA FoodData Central API integration for precise Bread Units calculation. Supports 10 specialized dietary frameworks, CGM glycemic curve simulations, dynamic PDF reports, and bilingual (EN/ES) content architecture.',
  fullDescriptionUa:
    'Освітня платформа харчування та дієтичного самоконтролю для моделювання персонального раціону. Працює на Headless WordPress як CMS, Next.js 16 (React 19 з Server Components), Supabase авторизації з PostgreSQL та інтеграції USDA FoodData Central API для точного розрахунку Хлібних Одиниць (ХО). Підтримує 10 спеціалізованих дієтичних планів, візуалізацію глікемічних кривих CGM, експорт у PDF та двомовну архітектуру EN/ES.',
  fullDescriptionEs:
    'Plataforma educativa de nutrición y automonitorización dietética diseñada para el modelado nutricional personalizado. Desarrollada con Headless WordPress como CMS, Next.js 16 (React 19 con Server Components), autenticación Supabase con PostgreSQL e integración en tiempo real con la API USDA FoodData Central para el cálculo de Unidades de Pan. Soporta 10 marcos dietéticos, visualización de curvas glucémicas CGM, exportación a PDF y arquitectura bilingüe EN/ES.',
  detailHeroLine: 'FULLSTACK · HEADLESS CMS · Spec-Driven AI SDLC',
  detailMetrics: [
    { value: '95+', label: 'PageSpeed', accent: 'green' },
    { value: '<1s', label: 'Page load', accent: 'green' },
    { value: 'SSR', label: 'Rendering', accent: 'darkGreen' },
    { value: 'CI/CD', label: 'Auto-deploy', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CONTENT',
        steps: [
          { label: 'WordPress CMS' },
          { label: 'WP REST API' },
          { label: 'Next.js SSR / RSC', highlight: true },
          { label: 'Vercel CDN' },
        ],
      },
      {
        rowLabel: 'DATA',
        steps: [
          { label: 'USDA FoodData API' },
          { label: 'Node / Express API' },
          { label: 'Next.js SSR', highlight: true },
        ],
      },
      {
        rowLabel: 'AUTH',
        steps: [
          { label: 'Supabase Auth' },
          { label: 'PostgreSQL DB' },
          { label: 'Next.js Middleware', highlight: true },
          { label: 'Protected Dashboard' },
        ],
      },
      {
        rowLabel: 'DEPLOY',
        steps: [
          { label: 'GitHub CI/CD' },
          { label: 'Vercel Edge' },
          { label: 'Cloudflare WAF / SSL', highlight: true },
        ],
      },
    ],
    description:
      'Two primary data streams converge at Next.js - educational nutrition content from headless WordPress and nutritional data from USDA API via a custom Express service. User authentication and dietary preferences are securely managed by Supabase (PostgreSQL). All requests are proxied via Cloudflare for edge caching, SSL enforcement, and DDoS protection.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition-hero-section.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/nextjs/unitrition/screenshot-unitrition.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-hero-section.webp',
      caption: 'Unitrition Hero Section - Precision Dietary Modeling and Nutrition Platform',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-diets.webp',
      caption: 'Interactive 10-Diet Framework Selector with Real-Time Nutrient Compatibility Scoring',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-carb-units.webp',
      caption: 'Bread Units Calculator with USDA FoodData Central Real-Time API Integration',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-ai-meal-plate-builder.webp',
      caption: 'AI Meal Plate Builder - Dynamic Macro Balancing and Visual Portion Modeling',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-ai-meal-plate-builder-page.webp',
      caption: 'Complete AI Meal Plate Builder Page with CGM Glycemic Curve Simulation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-blog.webp',
      caption: 'Headless WordPress Nutrition Blog Feed with Schema.org Educational Content',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-article-page.webp',
      caption: 'Educational Nutrition Article View with Dynamic Medical Disclaimer and Next.js Typography',
    },
  ],
  technologies: {
    frontend: [
      {
        short: 'Next.js 16',
        full: 'Next.js 16 (App Router) with Server Components (RSC), SSR, and generateMetadata()',
      },
      {
        short: 'React 19',
        full: 'React 19 - latest stable with Server Actions and React Server Components',
      },
      {
        short: 'TypeScript 5.9',
        full: 'TypeScript 5.9 - strict type safety across all frontend and API layers',
      },
      {
        short: 'Tailwind CSS',
        full: 'Tailwind CSS 3.4 with @tailwindcss/typography plugin for clean article formatting',
      },
      {
        short: 'Recharts 3',
        full: 'Recharts 3 - blood glucose CGM glycemic curve simulation and macro/micro nutrition charts',
      },
      {
        short: 'Node.js 24 LTS',
        full: 'Node.js 24 LTS runtime environment for builds and server-side execution',
      },
    ],
    backend: [
      {
        short: 'Node.js + Express',
        full: 'Node.js & Express - dedicated microservice for nutritional scoring and data aggregation',
      },
      {
        short: 'Supabase (PostgreSQL)',
        full: 'Supabase managed PostgreSQL database for user preferences, custom meal logs, and diet settings',
      },
    ],
    api: [
      {
        short: 'USDA FoodData API',
        full: 'USDA FoodData Central API - real-time food nutrition database access across 500,000+ foods',
      },
      {
        short: 'WP REST API',
        full: 'WordPress REST API - headless content delivery for articles, categories, and media',
      },
      {
        short: 'Internal REST API',
        full: 'Internal Next.js API route handlers (/api/blog/views, /api/auth, /api/calculator)',
      },
    ],
    contentManagement: [
      {
        short: 'Headless WordPress',
        full: 'Headless WordPress CMS managing nutrition articles, authoritative references, categories, and media assets.',
      },
    ],
    devopsSecurity: [
      {
        short: 'GitHub (CI/CD)',
        full: 'GitHub version control with automated CI/CD branch deployment workflows',
      },
      {
        short: 'Vercel Deployment',
        full: 'Vercel automated deployment pipeline, Edge Network, and Serverless compute',
      },
      {
        short: 'Cloudflare WAF',
        full: 'Cloudflare CDN, DDoS mitigation, SSL/TLS encryption, and HTTP edge security headers',
      },
      {
        short: 'OWASP Security',
        full: 'OWASP-aligned input validation, parameterized database queries, and endpoint rate limiting',
      },
    ],
    analytics: [
      {
        short: 'Google Analytics 4',
        full: 'GA4 integration tracking user journeys, diet selection conversions, and engagement funnels',
      },
    ],
    aiTools: [
      {
        short: 'Claude Code',
        full: 'Claude Code with Spec-Driven Development (SDD) methodology for core architecture and structural development',
      },
      {
        short: 'Google Gemini',
        full: 'Google Gemini (Deep Research) for strategy, nutritional copywriting, and AI-driven visual asset generation',
      },
      {
        short: 'Claude',
        full: 'Claude for advanced reasoning for complex architectural decisions and data validation',
      },
    ],
    seo: [
      {
        short: 'Schema.org JSON-LD',
        full: 'Rich Schema.org structured data (Article, BreadcrumbList, FAQPage, WebSite) for AI Overviews and Google rich snippets',
      },
      {
        short: 'Next.js Metadata API',
        full: 'Dynamic Open Graph, Twitter Cards, canonical tags, and auto-generated social metadata',
      },
      {
        short: 'Hreflang (EN/ES)',
        full: 'Bilingual hreflang alternate headers for seamless English and Spanish multi-region indexing',
      },
      {
        short: 'Sitemap & robots.ts',
        full: 'Dynamic XML sitemap with 1-hour revalidation and programmatic robots.txt configuration',
      },
    ],
    technicalOptimization: [
      {
        short: 'Lighthouse 95+',
        full: 'Optimized to achieve 95+ PageSpeed scores and sub-second Largest Contentful Paint (LCP)',
      },
      {
        short: 'Image Optimization',
        full: 'Next.js Image component with WebP conversion, responsive sizes, and lazy loading',
      },
      {
        short: 'Code Splitting & RSC',
        full: 'Route-based code splitting and React Server Components reducing client JavaScript payload',
      },
    ],
    digitalMarketing: [
      {
        short: 'AI Content Generation',
        full: 'AI-assisted copywriting for diet comparisons, educational articles, and informational guides',
      },
      {
        short: 'Professional Copywriting',
        full: 'Evidence-based nutrition copywriting citing authoritative sources (PubMed, USDA, ADA, KDIGO)',
      },
      {
        short: 'Social Strategy',
        full: 'Strategic content planning and posting across social platforms to build audience and engagement',
      },
    ],
  },
  features: [
    {
      title: 'Diet-Specific Scoring Engine',
      description:
        'Nutritional scoring across 10 specialized diet frameworks (Diabetes/BU, Renal, Keto, DASH, Mediterranean, Paleo, Vegan, AIP, Cardiac, General Wellness) with per-nutrient traffic-light indicators.',
    },
    {
      title: 'Bread Units Calculator',
      description:
        'Real-time USDA FoodData Central API integration for precise Bread Units (BU/ХО) calculation with product selector and fuzzy search across 500k+ foods and UPF badge detection.',
    },
    {
      title: 'Meal Builder',
      description:
        'Add foods to a meal session to see cumulative nutrition totals vs diet thresholds in real-time, natural language AI meal input (AiMealInputModal), A4 PDF export with macro/micro charts, and meal sharing.',
    },
    {
      title: 'CGM Spike Visualization',
      description:
        'Blood glucose glycemic curve simulation (CgmSpikeChart) per food or meal powered by Recharts SVG charts.',
    },
    {
      title: 'Educational Nutrition Blog Engine',
      description:
        'Headless WordPress integration with WP REST API, dynamic SSR blog/[slug] routes, auto-generated Table of Contents, view counter, reading time, authoritative citations (PubMed, USDA, ADA, KDIGO), and Schema.org Article + BreadcrumbList.',
    },
    {
      title: 'Authentication',
      description:
        'Supabase email/password login, session persistence, protected dashboard route, and paywall modal for Pro features.',
    },
    {
      title: 'Bilingual Support (i18n)',
      description:
        'Full EN/ES translations via LanguageContext, localized URLs, hreflang, and dynamic metadata.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://www.unitrition.info',
  githubUrl: '#',
  category: ['nextjs', 'wordpress'],
}

export default unitrition
