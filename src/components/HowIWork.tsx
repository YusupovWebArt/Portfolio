import { useState } from 'react'
import {
  Cpu,
  TrendingUp,
  Brain,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { SiReact, SiWordpress } from 'react-icons/si'

interface StepDetail {
  name: string
  description: string
}

interface WorkflowStep {
  title: string
  details: StepDetail[]
  techs: string[]
  aiTools: string[]
}

interface WorkflowCategory {
  title: string
  icon: React.ReactNode
  color: string
  baseColor: string
  description: string
  steps: WorkflowStep[]
}

const HowIWork = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const workflowCategories: WorkflowCategory[] = [
    {
      title: 'WordPress Development',
      icon: <SiWordpress className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      baseColor: 'blue',
      description: 'Custom Themes, Plugins, and WooCommerce scaling',
      steps: [
        {
          title: 'Deep Diagnostic Audit & Specs',
          details: [
            {
              name: 'Legacy Profiling',
              description: 'Inspecting legacy PHP code, identifying database query bottlenecks, and analyzing server error logs.',
            },
            {
              name: 'Plugin & Builder Audit',
              description: 'Analyzing the impact of third-party plugins and visual page builders on TTFB, render blocking, and stability.',
            },
            {
              name: 'Coding Standards Audit',
              description: 'Reviewing codebases for strict compliance with WordPress Coding Standards (WPCS) and PSR-12 guidelines.',
            },
            {
              name: 'Performance Baseline',
              description: 'Measuring initial speed metrics (Lighthouse, Core Web Vitals) and creating a detailed architectural optimization plan.',
            },
          ],
          techs: ['WP-CLI', 'Lighthouse', 'WPCS Standards', 'PSR-12 Coding'],
          aiTools: ['Claude Code', 'Google Antigravity'],
        },
        {
          title: 'Database & WooCommerce Architecture',
          details: [
            {
              name: 'Modern OOP PHP 8.x',
              description: 'Developing with object-oriented PHP 8.x, leveraging typed properties, enums, and fibers for asynchronous processes.',
            },
            {
              name: 'Custom Post Types & schemas',
              description: 'Designing clean metadata schemas and CPT relationships to eliminate database bloat and excessive joins.',
            },
            {
              name: 'ACF Pro Layouts',
              description: 'Developing flexible, structured, block-friendly layouts for modular content editing in the admin panel.',
            },
            {
              name: 'WooCommerce Customization',
              description: 'Configuring enterprise-level e-commerce structures, custom checkout pipelines, gateways, and REST API/Webhook workflows.',
            },
          ],
          techs: ['PHP 8.x (Fibers/Enums)', 'WooCommerce Core', 'ACF Pro', 'REST API / Webhooks'],
          aiTools: ['ACF AI Schema Builder', 'Claude Code'],
        },
        {
          title: 'Bespoke Coding & FSE Integration',
          details: [
            {
              name: 'Custom Themes from Scratch',
              description: 'Developing unique, lightweight themes using pure PHP/SASS, completely avoiding bloated pre-made themes.',
            },
            {
              name: 'Gutenberg Block Dev',
              description: 'Programming custom Gutenberg editor blocks using React.js and incorporating Full Site Editing (FSE) concepts.',
            },
            {
              name: 'Headless WP Architectures',
              description: 'Designing headless configurations using WP REST API or WPGraphQL in combination with Next.js.',
            },
            {
              name: 'Theme Refactoring',
              description: 'Deep customization, optimization, and code refactoring for existing client setups (Divi, Elementor, etc.).',
            },
          ],
          techs: ['React.js', 'Full Site Editing (FSE)', 'WPGraphQL', 'Next.js'],
          aiTools: ['Cursor AI', 'GitHub Copilot'],
        },
        {
          title: 'High-Load Optimization & Caching',
          details: [
            {
              name: 'Object Caching',
              description: 'Configuring server-level in-memory object caching (Redis and Memcached) to minimize database read overhead.',
            },
            {
              name: 'Cloud Environments',
              description: 'Deploying and managing websites across robust cloud infrastructures including AWS, GCP, and Cloudflare Workers.',
            },
            {
              name: 'Asset Pipelines',
              description: 'Implementing automatic media conversion to modern WebP/AVIF formats and on-the-fly JS/CSS minification.',
            },
            {
              name: 'Edge Caching Rules',
              description: 'Configuring smart caching rules on CDN edge nodes while preserving dynamic cart states for e-commerce.',
            },
          ],
          techs: ['Redis / Memcached', 'Cloudflare Workers', 'AWS / GCP', 'Brotli Compression'],
          aiTools: ['Google Antigravity', 'Cloudflare AI Rules'],
        },
        {
          title: 'Secure CI/CD & DevOps',
          details: [
            {
              name: 'DevOps Tooling',
              description: 'Utilizing Composer, NPM, Docker, and Git to manage dependencies, isolate environments, and track versions.',
            },
            {
              name: 'Git-Based Deployment',
              description: 'Setting up automated, zero-downtime deployment pipelines via Git and CI/CD webhooks.',
            },
            {
              name: 'Server Hardening & Audits',
              description: 'Performing security audits, securing admin routes, blocking brute-force attacks, and setting up SSL.',
            },
            {
              name: 'Backup Automation',
              description: 'Integrating automated daily database and file backups to secure, isolated cloud storage buckets.',
            },
          ],
          techs: ['Composer / Docker', 'Git / GitHub Actions', 'Security Audits', 'CI/CD Pipelines'],
          aiTools: ['Google Antigravity', 'Snyk AI'],
        },
      ],
    },
    {
      title: 'App Development',
      icon: <SiReact className="w-5 h-5" />,
      color: 'from-sky-400 to-sky-600',
      baseColor: 'sky',
      description: 'React, Next.js, TypeScript, and modern web applications',
      steps: [
        {
          title: 'System Architecture & API Design',
          details: [
            {
              name: 'Next.js 15+ & App Router',
              description: 'Designing system architectures leveraging Next.js 15+ capabilities and modular App Router directory structure.',
            },
            {
              name: 'React Server Components',
              description: 'Establishing strict architectural boundaries between Server Components (RSC) and Client Components.',
            },
            {
              name: 'State & Data Fetching',
              description: 'Selecting optimal state patterns using React Context, Redux Toolkit, Zustand, or SWR/React Query.',
            },
            {
              name: 'End-to-End Typing & ORM',
              description: 'Configuring end-to-end data typing from database schemas to the UI layer using Prisma or Drizzle ORM.',
            },
          ],
          techs: ['Next.js 15+ (App Router)', 'React Server Components', 'Zustand / SWR', 'Drizzle / Prisma ORM'],
          aiTools: ['Eraser.io AI', 'Claude Code'],
        },
        {
          title: 'Component Engineering & UI',
          details: [
            {
              name: 'React 19 Server Actions',
              description: 'Leveraging React 19 standards, including Server Actions, to execute secure async backend tasks directly from UI components.',
            },
            {
              name: 'Modular Component Design',
              description: 'Creating highly reusable, isolated, and strictly typed UI components following Atomic Design principles.',
            },
            {
              name: 'Responsive Token Systems',
              description: 'Building responsive layouts grounded in design system design tokens (typography, spacing, grids).',
            },
            {
              name: 'Accessibility Compliance',
              description: 'Ensuring strict EAA (European Accessibility Act) and ADA compliance using screen readers (ARIA) and keyboard navigation.',
            },
          ],
          techs: ['React 19 Server Actions', 'Tailwind CSS', 'EAA & ADA Compliance', 'WCAG 2.2 Level AA'],
          aiTools: ['v0.dev', 'Tailwind Copilot'],
        },
        {
          title: 'Server Rendering & Data Layer',
          details: [
            {
              name: 'Hybrid Rendering',
              description: 'Balancing performance and dynamic requirements by combining SSR, SSG, and Incremental Static Regeneration (ISR).',
            },
            {
              name: 'Data Streaming & Suspense',
              description: 'Integrating data streaming utilizing React Suspense to render complex, content-heavy layouts progressively.',
            },
            {
              name: 'Server-Side Tracking',
              description: 'Implementing server-side analytical integrations (Server-Side Tracking) for strict GDPR compliance.',
            },
            {
              name: 'Granular Hydration',
              description: 'Optimizing the page hydration lifecycle to prevent main-thread blockages and improve responsiveness.',
            },
          ],
          techs: ['React Suspense (Streaming)', 'Server-Side Tracking', 'Next.js Hybrid Rendering', 'GDPR Compliance'],
          aiTools: ['Cursor Composer', 'Google Antigravity'],
        },
        {
          title: 'Diagnostics & Performance Profiling',
          details: [
            {
              name: 'Bundle Size Minimization',
              description: 'Fine-tuning tree-shaking, code splitting, dynamic imports, and removing duplicate bundle packages.',
            },
            {
              name: 'Render Cycle Profiling',
              description: 'Tracking and eliminating redundant component renders using React Profiler and targeted memoization.',
            },
            {
              name: 'Core Web Vitals Tuning',
              description: 'Minimizing Layout Shifts (CLS) and optimizing interaction latency (INP) for near-zero delay.',
            },
            {
              name: 'Security & Static Analysis',
              description: 'Ensuring application security against common vulnerabilities (CSRF, input validation) via static analysis.',
            },
          ],
          techs: ['Chrome DevTools', 'React Profiler', 'INP / CLS Tuning', 'CSRF Protection'],
          aiTools: ['Chrome DevTools AI Assistant', 'Claude Code'],
        },
        {
          title: 'Production Operations & CI/CD',
          details: [
            {
              name: 'Vercel Edge Deployment',
              description: 'Deploying optimized builds to global edge networks like Vercel for rapid asset delivery.',
            },
            {
              name: 'Docker Containerization',
              description: 'Containerizing Next.js applications in Docker environments for deployment outside of Vercel to optimize hosting costs.',
            },
            {
              name: 'Build Pipelines',
              description: 'Setting up automated pre-commit and pre-build pipelines to run linters, type checks, and tests.',
            },
            {
              name: 'Telemetry & Monitoring',
              description: 'Integrating real-time logging and telemetry tools to instantly capture and address production issues.',
            },
          ],
          techs: ['Docker Containers', 'Vercel / Global Edge', 'GitHub Actions', 'Telemetry Logging'],
          aiTools: ['Vercel AI Analytics', 'Google Antigravity'],
        },
      ],
    },
    {
      title: 'Technical Optimization',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-emerald-400 to-emerald-600',
      baseColor: 'emerald',
      description: 'Core Web Vitals, caching, database tuning, and performance',
      steps: [
        {
          title: 'Advanced Performance Profiling',
          details: [
            {
              name: 'Synthetic Benchmarks',
              description: 'Testing Largest Contentful Paint (LCP) under simulated slow 3G/4G network conditions.',
            },
            {
              name: 'Network Waterfall Analysis',
              description: 'Analyzing HTTP request flows and defining high-priority asset preloading schedules.',
            },
            {
              name: 'CPU Throttling Audits',
              description: 'Identifying CPU-bound long tasks while simulating mobile processors to pinpoint main-thread bottlenecks.',
            },
            {
              name: 'Payload Breakdowns',
              description: 'Decomposing build asset sizes to formulate targeted file size reduction strategies.',
            },
          ],
          techs: ['Lighthouse', 'WebPageTest', 'PageSpeed API', 'Chrome DevTools'],
          aiTools: ['PageSpeed AI Agent', 'Google Antigravity'],
        },
        {
          title: 'Rendering Path Optimization',
          details: [
            {
              name: 'Critical CSS Injection',
              description: 'Generating and inlining above-the-fold CSS styles directly into the document <head> for rapid FCP.',
            },
            {
              name: 'Font Display Tuning',
              description: 'Preloading web fonts and applying font-display: swap to eliminate Flash of Invisible Text (FOIT).',
            },
            {
              name: 'Non-blocking Javascript',
              description: 'Optimizing script attributes (defer/async) and offloading third-party tags to background workers.',
            },
            {
              name: 'DOM Node Reduction',
              description: 'Simplifying deeply nested HTML elements to accelerate browser style recalculations and layouts.',
            },
          ],
          techs: ['PostCSS / Autoprefixer', 'Vite / ESBuild', 'Resource Preloading', 'DOM Tree Optimization'],
          aiTools: ['AI Critical-CSS Generator', 'Claude Code'],
        },
        {
          title: 'Server & Edge Caching Strategy',
          details: [
            {
              name: 'In-Memory Caching',
              description: 'Setting up Redis caching clusters to store frequently accessed database query results.',
            },
            {
              name: 'Edge Page Caching',
              description: 'Configuring CDN edge caching using Cloudflare Workers to deliver static HTML pages globally under 100ms.',
            },
            {
              name: 'Brotli Compression',
              description: 'Enabling highly efficient Brotli text compression on web servers to minimize transit data sizes.',
            },
            {
              name: 'Cache-Control Headers',
              description: 'Defining precise Cache-Control, max-age, and ETag rules to optimize local browser cache lifetimes.',
            },
          ],
          techs: ['Nginx / Redis', 'Cloudflare Workers', 'Brotli Compression', 'HTTP Headers'],
          aiTools: ['Cloudflare AI Rules', 'Google Antigravity'],
        },
        {
          title: 'Database & Engine Tuning',
          details: [
            {
              name: 'SQL Query Optimization',
              description: 'Identifying slow database queries lacking appropriate indexes or containing redundant JOIN operations.',
            },
            {
              name: 'Database Indexing',
              description: 'Structuring and creating precise indexes on frequently searched columns to speed up lookups.',
            },
            {
              name: 'Database Housekeeping',
              description: 'Pruning database bloat, cleaning out system logs, historical revisions, and orphaned metadata.',
            },
            {
              name: 'Connection Pooling',
              description: 'Configuring database connection pooling to handle high traffic spikes efficiently.',
            },
          ],
          techs: ['SQL Indexing', 'WP-Optimize', 'Query Monitor', 'Connection Pools'],
          aiTools: ['AI Database Tuner', 'Claude Code'],
        },
        {
          title: 'Performance Regression Guard',
          details: [
            {
              name: 'CI/CD Performance Budgets',
              description: 'Enforcing strict build weight and loading speed thresholds to prevent regression.',
            },
            {
              name: 'Automated Price Consistency',
              description: 'Implementing Puppeteer scripts to automatically verify price consistency between the UI and structured metadata.',
            },
            {
              name: 'Continuous Auditing',
              description: 'Scheduling automated production audits to monitor Core Web Vitals metrics over time.',
            },
            {
              name: 'Uptime & TTFB Monitoring',
              description: 'Configuring worldwide monitoring nodes to track server availability and Time to First Byte (TTFB).',
            },
          ],
          techs: ['GitHub Actions', 'Puppeteer Testing', 'PageSpeed API', 'Uptime Monitoring'],
          aiTools: ['AI Regression Analyzer', 'Google Antigravity'],
        },
      ],
    },
    {
      title: 'SEO Optimization',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-orange-400 to-orange-600',
      baseColor: 'orange',
      description: 'Semantic markup, JSON-LD schemas, indexation, and analytics',
      steps: [
        {
          title: 'Semantic & Accessibility Audits',
          details: [
            {
              name: 'Heading Hierarchy',
              description: 'Ensuring a single, optimized <h1> tag per page and maintaining a logical h2-h6 heading flow.',
            },
            {
              name: 'HTML5 Semantic Elements',
              description: 'Replacing generic divs with semantic tags (article, section, nav) to improve search engine indexing.',
            },
            {
              name: 'Image & Media Audits',
              description: 'Adding descriptive, keyword-rich alt attributes to images for screen readers and search crawler indexing.',
            },
            {
              name: 'Internationalization (hreflang)',
              description: 'Configuring HTML lang attributes and hreflang tags for multi-language indexation.',
            },
          ],
          techs: ['SEO Spider', 'W3C Validator', 'hreflang Markup', 'Screaming Frog'],
          aiTools: ['Screaming Frog AI Integration', 'Claude Code'],
        },
        {
          title: 'Advanced JSON-LD Schema',
          details: [
            {
              name: 'Person E-E-A-T Schema',
              description: "Implementing advanced E-E-A-T structured data to establish professional authority in Google's search graph.",
            },
            {
              name: 'Website & Search Schemas',
              description: 'Adding site navigation and search box schema to display rich search box results in SERPs.',
            },
            {
              name: 'Entity sameAs Markup',
              description: 'Configuring detailed Entity-based schemas to link author identities with properties like sameAs.',
            },
            {
              name: 'FAQPage & Rich Snippets',
              description: 'Designing high-complexity JSON-LD schemas (FAQPage, Product, HowTo, Article) to capture rich search features.',
            },
          ],
          techs: ['JSON-LD Schema', 'sameAs Entities', 'FAQPage / Product Schema', 'Rich Results Test'],
          aiTools: ['Schema.org AI Generator', 'Google Antigravity'],
        },
        {
          title: 'Meta & OpenGraph Optimization',
          details: [
            {
              name: 'Generative Engine Optimization',
              description: 'Applying GEO principles (fact density control, inverted pyramid content structures) to secure citations in ChatGPT and Google AI Overviews.',
            },
            {
              name: 'Title & Meta Description CTR',
              description: 'Writing compelling meta descriptions to maximize click-through rates from search results without keyword stuffing.',
            },
            {
              name: 'OpenGraph Previews',
              description: 'Configuring OpenGraph tags to ensure visually appealing previews when links are shared on social media.',
            },
            {
              name: 'Twitter Card Layouts',
              description: 'Optimizing metadata specifically for rich media presentation on the X platform.',
            },
          ],
          techs: ['GEO Optimization', 'Fact Density Control', 'OpenGraph Meta', 'Twitter Dev Tools'],
          aiTools: ['Claude Code', 'OG Image AI Generator'],
        },
        {
          title: 'Indexation & Crawl Control',
          details: [
            {
              name: 'Robots Directives',
              description: 'Using robots meta tags to precisely control how search engines crawl and index specific pages.',
            },
            {
              name: 'AI Bot Traffic Rules',
              description: 'Structuring robots.txt rules to conserve crawl budget, specifically segmenting access for classic crawlers and AI bots (GPTBot, OAI-SearchBot).',
            },
            {
              name: 'JavaScript SEO Verification',
              description: 'Validating client-side rendering of dynamic content to ensure crawlers index AJAX/React elements correctly.',
            },
            {
              name: 'Sitemap & Canonical Rules',
              description: 'Automating sitemap generation and setting canonical tags to prevent duplicate content indexation.',
            },
          ],
          techs: ['AI Crawler Rules (GPTBot)', 'Robots.txt Architecture', 'JavaScript SEO', 'Sitemap / Canonical'],
          aiTools: ['AI Sitemap Analyzer', 'Claude Code'],
        },
        {
          title: 'Web Analytics & GDPR Compliance',
          details: [
            {
              name: 'Server-Side Analytics',
              description: 'Integrating analytical setups strictly on the server-side (sGTM/Stape) to prevent unauthorized third-party tracking.',
            },
            {
              name: 'Cookieless Tracking',
              description: 'Deploying GDPR-compliant cookieless analytics engines (Matomo, Piwik PRO, Litlyx) hosted in the EU, avoiding intrusive cookie consent banners.',
            },
            {
              name: 'Event Tracking Architecture',
              description: 'Organizing Google Tag Manager containers and server-side tracking to capture key conversion actions.',
            },
            {
              name: 'Search Console Audits',
              description: 'Monitoring search rankings, search impressions, click rates, and crawl errors in Search Console.',
            },
          ],
          techs: ['Server-Side GTM (sGTM)', 'Stape.io', 'Cookieless Matomo / Piwik PRO', 'Google Search Console'],
          aiTools: ['GA4 AI Analytics Insights', 'GSC AI Trend Analyzer'],
        },
      ],
    },
    {
      title: 'AI-Augmented Development',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-violet-400 to-violet-600',
      baseColor: 'violet',
      description: 'Rapid prototyping, intelligent coding, automated tests, and CI/CD',
      steps: [
        {
          title: 'Rapid Prototyping & Setup',
          details: [
            {
              name: 'Spec-Driven Development',
              description: 'Applying spec-driven development concepts where clean code structures are synthesized directly from formal architectural specifications.',
            },
            {
              name: 'AI Project Scaffolding',
              description: 'Rapidly generating boilerplates, configurations, and directory frameworks using agentic prompts.',
            },
            {
              name: 'Architecture Visualization',
              description: 'Modeling data flow structures, component hierarchies, and database relations using AI-driven diagrams.',
            },
            {
              name: 'API Payload Mocking',
              description: 'Instantly producing mock JSON payloads to facilitate concurrent frontend and backend engineering.',
            },
          ],
          techs: ['Spec-Driven Dev', 'AI Prompt Engineering', 'System Diagrams', 'Mock JSON Gen'],
          aiTools: ['Google Antigravity', 'Midjourney', 'Gemini'],
        },
        {
          title: 'Accelerated Coding',
          details: [
            {
              name: 'Agentic Programming',
              description: 'Developing within agentic, multi-file codebases using specialized programming agents (Claude Code, Cursor, Windsurf).',
            },
            {
              name: 'Context Engineering',
              description: 'Constructing and managing precise context configurations (context engineering) to keep LLMs strictly aligned with project guidelines.',
            },
            {
              name: 'Intelligent Autocomplete',
              description: 'Leveraging context-aware inline code autocomplete to accelerate development speed and eliminate typos.',
            },
            {
              name: 'Legacy Code Refactoring',
              description: 'Converting outdated blocks of code (e.g., PHP 7 legacy syntax) into highly optimized, modern React or PHP 8 structures.',
            },
          ],
          techs: ['Agentic Workspaces', 'Context Engineering', 'Windsurf IDE', 'Cursor Composer'],
          aiTools: ['Claude Code', 'GitHub Copilot'],
        },
        {
          title: 'Static Analysis & Security',
          details: [
            {
              name: 'EU AI Act Compliance',
              description: 'Ensuring strict licensing compliance and checking the provenance of AI-synthesized code to align with legal requirements.',
            },
            {
              name: 'Data Leak Prevention',
              description: 'Implementing security measures to prevent proprietary company source code from leaking into public training models.',
            },
            {
              name: 'TypeScript Compiler Audits',
              description: 'Running strict compiler type-checking to proactively identify potential runtime edge cases.',
            },
            {
              name: 'Vulnerability Auditing',
              description: 'Automating dependency vulnerability scanning and code quality checks at the pre-commit stage.',
            },
          ],
          techs: ['EU AI Act Compliance', 'Data Leak Prevention', 'TypeScript Compiler', 'ESLint / Prettier'],
          aiTools: ['SonarQube AI', 'Snyk AI'],
        },
        {
          title: 'Automated Testing',
          details: [
            {
              name: 'AI Code Evaluation',
              description: 'Setting up automated evaluation frameworks (eval frameworks) to assess the output quality of AI-generated code.',
            },
            {
              name: 'Unit & Integration Tests',
              description: 'Generating unit tests for pure helper functions and rendering tests for React components.',
            },
            {
              name: 'AI Agent Regression Guard',
              description: 'Setting up continuous regression testing systems to ensure AI agents do not introduce performance regressions.',
            },
            {
              name: 'Mock Database Generation',
              description: 'Synthesizing high-volume, highly realistic mockup database records to seed stress-testing environments.',
            },
          ],
          techs: ['Eval Frameworks', 'Vitest / Jest', 'AI Regression Testing', 'Playwright E2E'],
          aiTools: ['CodiumAI', 'Playwright AI Codegen'],
        },
        {
          title: 'CI/CD Feedback Loop',
          details: [
            {
              name: 'Multi-Agent Debugging',
              description: 'Tracing, logging, and debugging concurrent multi-agent operations, and identifying API or database interface failures.',
            },
            {
              name: 'Technical Rigor Shift',
              description: 'Relocating technical rigor from writing basic syntax to designing resilient system architectures, error handlers, and review protocols.',
            },
            {
              name: 'Pre-commit Guardrails',
              description: 'Integrating Husky hooks that automatically reject commits failing static quality or test runs.',
            },
            {
              name: 'AI Log Analysis',
              description: 'Utilizing AI engines to parse server logs and detect trace anomalies or rare runtime bugs.',
            },
          ],
          techs: ['Multi-Agent Tracing', 'System Rigor shifting', 'Husky Hooks', 'GitHub Actions CI'],
          aiTools: ['Log Analyzer AI', 'OpsGPT'],
        },
      ],
    },
  ]

  const handleTabChange = (index: number) => {
    setActiveTab(index)
    setActiveStep(0)
  }

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1)
    }
  }

  const getTabActiveClasses = (category: WorkflowCategory, isActive: boolean) => {
    if (!isActive) {
      return 'border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-sm'
    }
    switch (category.baseColor) {
      case 'blue':
        return 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold shadow-md shadow-blue-500/5'
      case 'sky':
        return 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold shadow-md shadow-sky-500/5'
      case 'emerald':
        return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold shadow-md shadow-emerald-500/5'
      case 'orange':
        return 'border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold shadow-md shadow-orange-500/5'
      case 'violet':
        return 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold shadow-md shadow-violet-500/5'
      default:
        return 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold shadow-md shadow-purple-500/5'
    }
  }

  const currentCategory = workflowCategories[activeTab]
  const currentStep = currentCategory.steps[activeStep]

  return (
    <section
      id="how-i-work"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How I Work
          </h2>
          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            My workflow blends senior-level software engineering with cutting-edge artificial intelligence. 
            I execute the majority of routine, architectural, and optimization tasks faster and more reliably 
            by amplifying my expertise with specialized AI tools like{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Claude Code</span> and{' '}
            <span className="font-semibold text-sky-600 dark:text-sky-400">Google Antigravity</span>, 
            allowing me to focus on high-level quality and deliver projects in a fraction of the time.
          </p>
        </div>

        {/* Top Horizontal Row of Tabs (Titles Only) */}
        <div className="w-full mb-8">
          <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-3 pb-3 scrollbar-none snap-x snap-mandatory">
            {workflowCategories.map((category, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`snap-start flex-shrink-0 flex items-center space-x-2.5 px-5 py-3 rounded-full border transition-all duration-300 text-xs font-semibold
                    ${getTabActiveClasses(category, isActive)}
                  `}
                  type="button"
                >
                  <span
                    className={`shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'scale-110 text-slate-900 dark:text-white'
                        : 'text-slate-450 dark:text-slate-500 group-hover:text-slate-650'
                    }`}
                  >
                    {category.icon}
                  </span>
                  <span>{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Interactive Step Card (T-Shaped Specialist style panel) */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 lg:backdrop-blur-xl lg:bg-white/60 lg:dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 transition-all duration-500 ease-out shadow-xl shadow-slate-200/50 dark:shadow-black/20 animate-fade-in">
            {/* Specular Reflection Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 pointer-events-none" />

            {/* Background Liquid Glow */}
            <div
              className={`hidden lg:block absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br ${currentCategory.color} rounded-full blur-3xl opacity-10 dark:opacity-20 pointer-events-none transition-all duration-500`}
            />

            {/* Card Header with Category Icon, Step Title, and Step Progress Bar */}
            <div className="relative z-10 flex flex-col mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-850">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-br ${currentCategory.color} text-white shadow-lg`}
                >
                  {currentCategory.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                    {currentCategory.title} — Step {activeStep + 1} of 5
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5 truncate">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              {/* Sleek Specular Step Progress Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-5 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${currentCategory.color} transition-all duration-500 ease-out`}
                  style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Card Content Elements */}
            <div className="relative z-10 flex flex-col gap-6">
              {/* Workflow Details Section in 2x2 Grid */}
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                  Step Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentStep.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 hover:border-slate-300 dark:hover:border-white/10 transition-colors duration-300"
                    >
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center">
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCategory.color} mr-2 flex-shrink-0`}
                        />
                        {detail.name}
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-[13px] leading-relaxed pl-3.5">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Divider */}
              <div className="border-t border-slate-150 dark:border-slate-800/80 my-1" />

              {/* Technologies & AI Tools Section */}
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                  Technologies & AI Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentStep.techs.map((tech, techIndex) => (
                    <div
                      key={`tech-${techIndex}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100/40 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 rounded-full transition-all duration-300"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCategory.color} flex-shrink-0`}
                      />
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-tight">
                        {tech}
                      </span>
                    </div>
                  ))}
                  {currentStep.aiTools.map((aiTool, aiIndex) => (
                    <div
                      key={`ai-${aiIndex}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-purple-50/55 dark:bg-purple-950/10 border border-purple-200/50 dark:border-purple-500/25 rounded-full shadow-sm shadow-purple-500/5 transition-all duration-300 hover:scale-[1.03]"
                    >
                      <Brain className="w-3.5 h-3.5 text-purple-500 dark:text-purple-450 flex-shrink-0" />
                      <span className="text-purple-700 dark:text-purple-300 text-xs font-semibold leading-tight">
                        {aiTool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Navigation Footer */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80">
                {/* Step dots (5 dots) on the left */}
                <div className="flex items-center space-x-2.5">
                  {[0, 1, 2, 3, 4].map((stepIdx) => (
                    <button
                      key={stepIdx}
                      onClick={() => setActiveStep(stepIdx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeStep === stepIdx
                          ? `bg-gradient-to-r ${currentCategory.color} w-4 scale-105 shadow-sm`
                          : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                      }`}
                      aria-label={`Go to step ${stepIdx + 1}`}
                      type="button"
                    />
                  ))}
                </div>

                {/* Left/Right Circular Arrow Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrevStep}
                    disabled={activeStep === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      activeStep === 0
                        ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                        : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:scale-105 active:scale-95'
                    }`}
                    aria-label="Previous workflow step"
                    type="button"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={activeStep === 4}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      activeStep === 4
                        ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                        : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:scale-105 active:scale-95 shadow-sm'
                    }`}
                    aria-label="Next workflow step"
                    type="button"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIWork
