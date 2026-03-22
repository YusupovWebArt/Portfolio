import { Project } from '../project-types'

const unitrition: Project = {
  id: 29000,
  title: 'Unitrition',
  description:
    'Choosing the right foods for a specific diet is confusing — Unitrition makes it instant. Pick a diet plan, add foods, and the app shows a clear nutritional comparison: what fits your goals and what doesn\'t. Built as a fullstack headless WordPress + Next.js application with diet-specific scoring, custom nutrition data, and a Bread Units Calculator integrated with the USDA FoodData API.',
  fullDescription:
    "A smart nutrition tool that helps users find the right foods for their diet — pick a plan, add foods, and get an instant comparison of what fits and what doesn't. Built with headless WordPress as CMS and a Next.js App Router frontend. Bread Units Calculator also integrates real-time data from the USDA FoodData API.",
  detailHeroLine: 'FULLSTACK · HEADLESS CMS',
  detailMetrics: [
    { value: '95+', label: 'PageSpeed', accent: 'green' },
    { value: '<1s', label: 'Page load', accent: 'green' },
    { value: 'SSR', label: 'Rendering', accent: 'darkGreen' },
    { value: 'CI/CD', label: 'Auto-deploy', accent: 'neutral' },
  ],
  image:
    '/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/nextjs/unitrition/unitrition_thumb.webp',
      caption: 'General view of the application Unitrition',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/diet-exchanger.webp',
      caption:
        'Interface for each diet counting elements for selected products',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/bread-units.webp',
      caption: 'Bread Units Calculator',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition_slide3.webp',
      caption: 'Blog page with posts from Headless WordPress',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition_slide4.webp',
      caption: 'Custom article page with content from Headless WordPress',
    },
  ],
  technologies: {
    frontend: [
      {
        short: 'Next.js (App Router)',
        full: 'Next.js App Router architecture for performance and SEO',
      },
      {
        short: 'TypeScript',
        full: 'TypeScript',
      },
      {
        short: 'Tailwind CSS',
        full: 'Tailwind CSS',
      },
    ],
    backend: [
      {
        short: 'Node.js',
        full: 'Node.js & Express.js',
      },
    ],
    api: [
      {
        short: 'Express.js',
        full: 'Scalable API for nutritional data and analytics queries',
      },
      {
        short: 'REST API',
        full: 'REST API',
      },
      {
        short: 'USDA API',
        full: 'USDA FoodData Central API',
      },
    ],
    contentManagement: [
      {
        short: 'Headless WordPress',
        full: 'Headless WordPress for content management of posts and custom nutrition articles, with REST API–driven content delivery.',
      },
    ],
    devopsSecurity: [
      {
        short: 'GitHub (CI/CD)',
        full: 'GitHub (CI/CD)',
      },
      {
        short: 'Vercel deployment',
        full: 'Vercel deployment',
      },
      {
        short: 'Cloudflare',
        full: 'Cloudflare integration for CDN, DDoS protection, and performance optimization',
      },
      { short: 'SSL', full: 'HTTPS encryption for all traffic' },
      {
        short: 'OWASP Security',
        full: 'OWASP-aligned input/output and rate limits',
      },
    ],
    analytics: [
      {
        short: 'Google Analytics',
        full: 'Google Analytics was integrated to track user sessions, event conversions and behavior flows',
      },
    ],
    aiTools: [
      {
        short: 'Cursor',
        full: 'Used Cursor to architect the core application skeleton and manage complex structural development from the ground up',
      },
      {
        short: 'GitHub Copilot',
        full: 'GitHub Copilot for continuous feature development, AI-assisted code generation, and significant acceleration of the refactoring process and the implementation of new features',
      },
      {
        short: 'Google Gemini',
        full: 'Leveraging Google Gemini (Deep Research) for strategic brainstorming, professional copywriting, and AI-driven visual asset generation to accelerate the creative process.',
      },
    ],
    seo: [
      {
        short: 'Next.js SEO',
        full: 'Next.js built-in SEO features including meta tags, structured data, and server-side rendering for optimal search engine visibility',
      },
      {
        short: 'Schema.org markup',
        full: 'Schema.org structured data markup for rich snippets and enhanced search results',
      },
    ],
    technicalOptimization: [
      {
        short: 'Lighthouse',
        full: 'Google Lighthouse for performance auditing and optimization recommendations',
      },
      {
        short: 'Image optimization',
        full: 'Next.js Image component with automatic WebP conversion and lazy loading for optimal performance',
      },
      {
        short: 'Code splitting',
        full: 'Automatic code splitting and dynamic imports to reduce initial bundle size',
      },
    ],
    digitalMarketing: [
      {
        short: 'AI Content Generation',
        full: 'AI-powered content creation using Claude and Google Gemini for articles, descriptions, and marketing copy',
      },
      {
        short: 'Copywriting',
        full: 'Professional copywriting for landing pages, emails, and promotional materials to drive conversions',
      },
      {
        short: 'Social Media Strategy',
        full: 'Strategic content planning and posting across social platforms to build audience and engagement',
      },
    ],
  },
  features: [
    {
      title: 'AI-Driven Development Workflow',
      description:
        'Engineered the entire application lifecycle using advanced AI-augmented workflows, significantly accelerating time-to-market while maintaining high code quality and architectural integrity.',
    },
    {
      title: 'Seamless Headless Integration',
      description:
        'Successfully decoupled the backend (WordPress) from the frontend (Next.js), ensuring sub-second page loads and superior SEO performance through Server-Side Rendering (SSR).',
    },
    {
      title: 'Complex Data Processing',
      description:
        'Developed a custom Node.js/Express API to fetch, process, and synchronize nutritional data from multiple internal and external sources.',
    },
    {
      title: 'Performance-First Architecture',
      description:
        'Achieved optimal Core Web Vitals via Vercel-automated deployments and efficient TypeScript type-safety across the entire stack.',
    },
    {
      title: 'Version Control & CI/CD',
      description:
        'Source code is managed with GitHub using branches, pull requests, and CI/CD workflows.',
    },
    {
      title: 'Automated Deployment',
      description:
        'Automatically deployed on Vercel, ensuring smooth updates and optimized performance for Next.js apps.',
    },
    {
      title: 'Analytics & Monitoring',
      description:
        'Integrated Google Analytics to monitor user interactions, page views, and engagement patterns.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://unitrition.info/',
  githubUrl: '#',
  category: ['nextjs', 'wordpress'],
}

export default unitrition
