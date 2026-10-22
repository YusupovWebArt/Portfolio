import { Project } from '../project-types'

const wpskills: Project = {
  id: 29100,
  isPersonal: true,
  title: 'WPSKILLS',
  description:
    'An interactive engineering educational platform designed for mastering modern Fullstack development, React 19, Next.js 16 App Router, WordPress core internals, TypeScript, and AI-augmented software engineering. Powered by Rust-based MDX-RS compilation across 1,100+ lessons, interactive Explorable Explanations (<ArchitectureFlow>, <StepFlow>, checkpoints), zero-metaphor Gemini NotebookLM Audio Overview generators, gamified XP/Streak engine, and 4-locale internationalization (EN/RU/UK/ES).',
  descriptionUa:
    'Інтерактивна освітня інженерна платформа для вивчення сучасного Fullstack-стеку: React 19, Next.js 16 App Router, внутрішньої архітектури WordPress, TypeScript та AI-розробки. Побудована на нативному Rust-компіляторі MDX-RS із понад 1 100 уроками, інтерактивними симуляторами (<ArchitectureFlow>, <StepFlow>, чекпоінтами), генератором аудіопідкастів для Gemini NotebookLM без побутових метафор, гейміфікацією з XP та підтримкою 4 локалей (EN/RU/UK/ES).',
  descriptionEs:
    'Plataforma educativa interactiva de ingeniería para dominar el desarrollo Fullstack moderno: React 19, Next.js 16 App Router, arquitectura interna de WordPress, TypeScript e ingeniería asistida por IA. Impulsada por compilación Rust MDX-RS con más de 1.100 lecciones, explicaciones explorables (<ArchitectureFlow>, <StepFlow>), generador de prompts de audio para Gemini NotebookLM sin metáforas cotidianas, sistema gamificado de XP y soporte multilingüe en 4 idiomas (EN/RU/UK/ES).',
  fullDescription:
    'An enterprise-grade interactive engineering learning ecosystem built on Cognitive Load Theory (Sweller) and Bruner\'s Spiral Curriculum. Architected with Next.js 16 (React 19 with Server Components and View Transitions), Tailwind CSS v4, and a high-performance in-memory caching pipeline that renders 1,700+ static pages in under 90 seconds. Features interactive visual architecture flows, hook lifecycle and outage simulators, formative section assessments (+15 XP), Spaced Repetition flashcards, Supabase-backed personal cloud progress synchronization, and automated zero-metaphor Audio Overview prompts for Google NotebookLM across 4 languages.',
  fullDescriptionUa:
    'Інтерактивна інженерна освітня екосистема, спроєктована на основі теорії когнітивного навантаження Свеллера та спіральної дидактики Брунера. Побудована на базі Next.js 16 (React 19 із Server Components та View Transitions), Tailwind CSS v4 та оптимізованого in-memory контентного кешу, що збирає понад 1 700 статичних сторінок менш ніж за 90 секунд. Включає інтерактивні архітектурні конвеєри, симулятори хуків WordPress та аварій, формувальні чекпоінти (+15 XP), інтервальне повторення карток, персональну хмарну синхронізацію прогресу на Supabase та генерацію глибоких аудіопромптів для Google NotebookLM 4 мовами.',
  fullDescriptionEs:
    'Ecosistema educativo interactivo de ingeniería de nivel empresarial basado en la Teoría de Carga Cognitiva de Sweller y el currículo en espiral de Bruner. Diseñado con Next.js 16 (React 19 con Server Components y View Transitions), Tailwind CSS v4 y una canalización de caché en memoria de alto rendimiento que pre-renderiza más de 1.700 páginas estáticas en menos de 90 segundos. Cuenta con flujos arquitectónicos interactivos, simuladores de ciclo de vida de WordPress y fallos, evaluaciones formativas (+15 XP), tarjetas con repetición espaciada, sincronización personal de progreso en la nube con Supabase y generación de prompts de audio sin metáforas para Google NotebookLM en 4 idiomas.',
  detailHeroLine: 'FULLSTACK · INTERACTIVE EDTECH · SPEC-DRIVEN AI SDLC',
  detailMetrics: [
    { value: '98+', label: 'PageSpeed', accent: 'green' },
    { value: '<1s', label: 'Page load', accent: 'green' },
    { value: '1,100+', label: 'MDX Lessons', accent: 'darkGreen' },
    { value: '121/121', label: 'Tests Passing', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CONTENT',
        steps: [
          { label: '1,100+ MDX Files' },
          { label: 'Rust MDX-RS / Turbopack' },
          { label: 'In-Memory Content Cache' },
          { label: 'Next.js SSG / RSC', highlight: true },
          { label: 'Vercel Edge CDN' },
        ],
      },
      {
        rowLabel: 'DIDACTICS',
        steps: [
          { label: '<ArchitectureFlow>' },
          { label: '<StepFlow> & <Term>' },
          { label: 'WP Lifecycle Simulator', highlight: true },
          { label: 'Formative Checkpoints (+15 XP)' },
        ],
      },
      {
        rowLabel: 'AUDIO AI',
        steps: [
          { label: 'Lesson MDX Extractor' },
          { label: 'Zero-Metaphor Prompt Engine', highlight: true },
          { label: 'Gemini NotebookLM' },
          { label: 'Deep Dive Audio Overview' },
        ],
      },
      {
        rowLabel: 'PROGRESS',
        steps: [
          { label: 'Zustand v5 Store' },
          { label: 'LocalStorage Hydration Guard', highlight: true },
          { label: 'Supabase Progress Sync API' },
          { label: 'Personal Mastery Dashboard' },
        ],
      },
      {
        rowLabel: 'QUALITY',
        steps: [
          { label: 'Spec-Driven AI Harness' },
          { label: 'Rust Syntax Validator' },
          { label: 'Vitest 4 (121 TDD Tests)', highlight: true },
          { label: 'Cloudflare WAF / Edge' },
        ],
      },
    ],
    description:
      'High-velocity static generation architecture: 1,100+ MDX lessons and 1,700+ routes compile via native Rust-based MDX-RS and Turbopack, accelerated by an in-memory content cache that reduced build times from 21.6 minutes to 1.5 minutes. The client layer combines React 19 Server Components with a Zustand v5 client store protected by an explicit hydration guard hook for zero-flicker XP and streak tracking. Interactive pedagogical widgets (<ArchitectureFlow>, Outage Simulator, Flashcards) deliver explorable learning. An automated pipeline extracts lesson insights into zero-metaphor first-principles prompts for Google NotebookLM Audio Overviews. All edge responses are cached with stale-while-revalidate headers.',
    descriptionUa:
      'Високошвидкісна архітектура статичної генерації: понад 1 100 MDX-уроків та 1 700+ маршрутів компілюються через нативний Rust-компілятор MDX-RS і Turbopack під керуванням in-memory контентного кешу, що скоротив час збірки з 21.6 хвилин до 1.5 хвилин. Клієнтський шар поєднує React 19 Server Components зі сховищем Zustand v5 із захистом від hydration mismatch для обліку XP та серій днів без мерехтіння. Інтерактивні віджети (<ArchitectureFlow>, симулятор збоїв, картки) забезпечують наочне дослідження коду. Автоматизований пайплайн генерує першопринципні промпти без побутових метафор для аудіооглядів Google NotebookLM. Усі відповіді кешуються на Edge CDN.',
    descriptionEs:
      'Arquitectura de generación estática de alta velocidad: más de 1.100 lecciones MDX y 1.700+ rutas se compilan mediante MDX-RS nativo en Rust y Turbopack, acelerados por una caché de contenido en memoria que redujo el tiempo de compilación de 21.6 minutos a 1.5 minutos. La capa cliente combina React 19 Server Components con Zustand v5 protegido contra errores de hidratación para registrar XP y rachas sin parpadeos. Widgets pedagógicos interactivos (<ArchitectureFlow>, simulador de fallos, tarjetas) proporcionan aprendizaje explorable. Un pipeline automatizado genera prompts de primeros principios sin metáforas para Google NotebookLM Audio Overviews. Respuestas cacheadas en Edge CDN.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/nextjs/wpskills/wpskills-thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/nextjs/wpskills/screenshot-wpskills.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide1.webp',
      caption: 'WPSKILLS Hero Section - Interactive Engineering EdTech Platform for Fullstack Developers',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide2.webp',
      caption: 'Deep-Dive Lesson View with <ArchitectureFlow> Dual-Mode Visualizer (Pipeline and Inspector)',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide3.webp',
      caption: 'Interactive WordPress Hook Lifecycle and Production Outage Simulators with Execution Tracing',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide4.webp',
      caption: 'Gemini NotebookLM Export Modal Generating Zero-Metaphor First-Principles Audio Prompts',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide5.webp',
      caption: 'Supabase-Powered Personal Progress Sync, XP Mastery Levels, and Daily Streak Tracking',
    },
  ],
  technologies: {
    frontend: [
      {
        short: 'Next.js 16.3',
        full: 'Next.js 16.3 (App Router, Turbopack, and @next/mdx with native Rust mdxRs enabled)',
      },
      {
        short: 'React 19.2',
        full: 'React 19.2 - Server Components (RSC), Server Actions, and <ViewTransition>',
      },
      {
        short: 'TypeScript 5.8',
        full: 'TypeScript 5.8 - strict type safety across all components and API handlers with zero any tolerance',
      },
      {
        short: 'Tailwind CSS v4',
        full: 'Tailwind CSS v4 with @theme design tokens, CSS variables, dark-mode glassmorphism, and tw-animate-css',
      },
      {
        short: 'Zustand v5',
        full: 'Zustand v5 state management with localStorage persistence and custom useIsMounted hydration guard',
      },
      {
        short: 'Lucide React & Base UI',
        full: 'Lucide React iconography and @base-ui/react primitives for accessible UI components',
      },
      {
        short: 'Node.js 24 LTS',
        full: 'Node.js 24 LTS runtime environment for high-performance builds and pre-render pipelines',
      },
    ],
    backend: [
      {
        short: 'Next.js Route Handlers',
        full: 'Edge and Node.js Serverless Route Handlers (/api/notebooklm, /api/progress, /api/interview, /api/revalidate)',
      },
      {
        short: 'Supabase (PostgreSQL)',
        full: 'Supabase managed PostgreSQL database with Row Level Security (RLS) for personal cloud progress synchronization',
      },
      {
        short: 'In-Memory Content Cache',
        full: 'Custom high-speed in-memory compilation and caching layer reducing SSG build time from 21.6m to 1.5m',
      },
    ],
    api: [
      {
        short: 'Google NotebookLM API',
        full: 'NotebookLM customized audio prompt pipeline generating first-principles podcasts in 4 languages',
      },
      {
        short: 'Supabase PostgREST API',
        full: 'RESTful database access layer with Row Level Security (RLS) for cross-device personal progress sync',
      },
      {
        short: 'AI Interview Engine',
        full: 'Interactive interview assessment API validating architectural answers against Senior developer criteria',
      },
      {
        short: 'Internal Content API',
        full: 'Dynamic lesson metadata and localized search index generator across 1,100+ MDX documents',
      },
    ],
    contentManagement: [
      {
        short: 'Rust MDX-RS Engine',
        full: 'High-density file-based MDX architecture with 1,100+ lessons compiled via Rust MDX-RS parser',
      },
      {
        short: 'Automated Tree Generators',
        full: 'Pre-build AST scripts generating module trees, lesson URL maps, and multilingual navigation graphs',
      },
    ],
    devopsSecurity: [
      {
        short: 'GitHub Actions CI/CD',
        full: 'Automated build pipeline running TypeScript typecheck, Vitest test suites, and Rust content validation',
      },
      {
        short: 'Vercel Edge Platform',
        full: 'Automated production deployment with Global Edge Network, SSG pre-rendering, and instant rollbacks',
      },
      {
        short: 'MDX-RS Syntax Validator',
        full: 'Automated pre-build content validator (scripts/validate-content.mjs) ensuring 100% Rust compiler safety',
      },
      {
        short: 'Cloudflare WAF & Security',
        full: 'Cloudflare edge proxy with SSL/TLS encryption, DDoS protection, and hardened HTTP response headers',
      },
    ],
    analytics: [
      {
        short: 'XP & Streak Telemetry',
        full: 'Local and cloud-synced tracking of lesson completions, quiz scores, daily streaks, and rank progression',
      },
      {
        short: 'Google Analytics 4',
        full: 'GA4 integration tracking user journeys, module completion rates, and learning retention funnels',
      },
    ],
    aiTools: [
      {
        short: 'Google Antigravity SDD',
        full: 'Spec-Driven Development (SDD) methodology using Antigravity AI harness, modular rules, and quality hooks',
      },
      {
        short: 'NotebookLM Prompt Engine',
        full: 'Zero-metaphor audio prompt synthesizer transforming MDX structures into deep-dive technical dialogues',
      },
      {
        short: 'Claude & Gemini Research',
        full: 'Used for rigorous architectural stress-testing, didactic spiral curriculum design, and TDD test authoring',
      },
    ],
    seo: [
      {
        short: 'Dynamic Metadata API',
        full: 'Next.js generateMetadata() generating OpenGraph, Twitter Cards, canonical URLs, and schema markup per lesson',
      },
      {
        short: 'Multilingual Hreflang',
        full: 'Complete 4-locale hreflang alternate headers (EN, RU, UK, ES) ensuring accurate multi-region Google indexing',
      },
      {
        short: '1,700+ URLs Sitemap',
        full: 'Automated XML sitemap with 1,707 static URLs, canonical routing, and programmatic robots.ts',
      },
      {
        short: 'Schema.org JSON-LD',
        full: 'Rich structured data (TechArticle, Course, LearningResource, BreadcrumbList) optimized for Google Rich Snippets and AI Overviews',
      },
    ],
    technicalOptimization: [
      {
        short: '98+ PageSpeed & CWV',
        full: 'Engineered for Core Web Vitals budgets: INP < 200ms, LCP < 1.2s, CLS < 0.05, sub-second TTFB',
      },
      {
        short: 'SSG Prerendering',
        full: '1,707 static pages prerendered at build time with in-memory caching for near-instant navigation',
      },
      {
        short: 'Hydration Mismatch Guard',
        full: 'Custom useIsMounted hook eliminating React 19 hydration flickers for user-specific XP and streak state',
      },
      {
        short: 'Zero Unexplained Terms',
        full: 'Automated <Term> interactive tooltips and <KeyPoint> callouts minimizing cognitive load during reading',
      },
    ],
    digitalMarketing: [
      {
        short: 'Cognitive Load Architecture',
        full: 'Didactics built on Sweller\'s Cognitive Load Theory: algorithm first (<StepFlow>), syntax second, formative testing third',
      },
      {
        short: 'Gamified EdTech Retention',
        full: 'Retention mechanics: XP rewards, mastery level badges, daily streak counts, and personal cloud sync',
      },
      {
        short: 'Audio-First Accessibility',
        full: 'First-principles podcast audio overviews enabling hands-free commute and mobile learning without screen fatigue',
      },
    ],
  },
  features: [
    {
      title: '1,100+ Deep Engineering Lessons (MDX-RS)',
      titleUa: '1 100+ глибоких інженерних уроків (MDX-RS)',
      titleEs: '1.100+ lecciones profundas de ingeniería (MDX-RS)',
      description:
        'Comprehensive curriculum spanning React 19, Next.js 16 App Router, TypeScript, WordPress Core Internals, Testing (Vitest/Playwright), and AI Engineering (MCP, Computer Use). Compiled natively with Rust MDX-RS.',
      descriptionUa:
        'Повний навчальний план, що охоплює React 19, Next.js 16 App Router, TypeScript, внутрішню архітектуру WordPress, тестування (Vitest/Playwright) та AI Engineering (MCP, Computer Use). Нативна компіляція на Rust MDX-RS.',
      descriptionEs:
        'Plan de estudios integral que abarca React 19, Next.js 16 App Router, TypeScript, arquitectura interna de WordPress, testing (Vitest/Playwright) e ingeniería de IA (MCP, Computer Use). Compilación nativa con Rust MDX-RS.',
    },
    {
      title: '<ArchitectureFlow> Interactive Visualizer',
      titleUa: 'Інтерактивний візуалізатор <ArchitectureFlow>',
      titleEs: 'Visualizador interactivo <ArchitectureFlow>',
      description:
        'Custom dual-mode engineering component featuring a continuous vertical data bus (Pipeline mode) and focused step-by-step state examination (Inspector mode) with runtime badges, subsystem roles, and memory safety notes.',
      descriptionUa:
        'Кастомний двомодальний інженерний компонент: безперервна вертикальна шина даних (режим Pipeline) та покроковий аналіз стану (режим Inspector) із бейджами рантайму, ролями підсистем та примітками щодо безпеки пам\'яті.',
      descriptionEs:
        'Componente de ingeniería bimodo con bus de datos vertical continuo (modo Pipeline) y análisis paso a paso de estados (modo Inspector) con insignias de ejecución, roles de subsistema y notas de seguridad de memoria.',
    },
    {
      title: 'Zero-Metaphor Gemini NotebookLM Audio Generator',
      titleUa: 'Генератор аудіопромптів Gemini NotebookLM без метафор',
      titleEs: 'Generador de audio para Gemini NotebookLM sin metáforas',
      description:
        'Integrated export tool that cleans raw MDX into dense source documents and generates customized audio podcast prompts with a strict ban on household metaphors, structured as a mentor-junior dialogue across 4 languages.',
      descriptionUa:
        'Інтегрований інструмент експорту, що очищує MDX у щільні джерела та генерує персоналізовані промпти для подкастів із суворою забороною побутових метафор у форматі діалогу mentor-junior 4 мовами.',
      descriptionEs:
        'Herramienta de exportación integrada que limpia MDX en documentos fuente densos y genera prompts de podcasts de audio con prohibición estricta de metáforas cotidianas, estructurada como diálogo mentor-junior en 4 idiomas.',
    },
    {
      title: 'Formative Section Checkpoints (+15 XP)',
      titleUa: 'Формувальні секційні чекпоінти (+15 XP)',
      titleEs: 'Puntos de control formativos (+15 XP)',
      description:
        'Every lesson includes interactive diagnostic checkpoints targeting real-world misconceptions, providing instant technical feedback and award-based gamification experience points upon correct answers.',
      descriptionUa:
        'Кожен урок містить інтерактивні діагностичні чекпоінти проти типових помилок, що надають миттєвий технічний зворотний зв\'язок і бали досвіду (+15 XP) за правильні відповіді.',
      descriptionEs:
        'Cada lección incluye puntos de control diagnósticos interactivos dirigidos a conceptos erróneos reales, con retroalimentación técnica instantánea y puntos de experiencia (+15 XP) por respuestas correctas.',
    },
    {
      title: 'Interactive WordPress Hook & Outage Simulators',
      titleUa: 'Інтерактивні симулятори хуків WordPress та аварій',
      titleEs: 'Simuladores interactivos de hooks de WordPress y fallos',
      description:
        'In-browser simulation engines allowing developers to trace hook execution order (mu-plugins, plugins_loaded, init, template_redirect) and diagnose simulated production outages in an interactive lab workspace.',
      descriptionUa:
        'Браузерні симулятори для відстеження порядку виконання хуків (mu-plugins, plugins_loaded, init, template_redirect) та діагностики аварій у продакшені в інтерактивній лабораторній пісочниці.',
      descriptionEs:
        'Motores de simulación en navegador que permiten rastrear el orden de ejecución de hooks (mu-plugins, plugins_loaded, init, template_redirect) y diagnosticar caídas simuladas de producción en un laboratorio interactivo.',
    },
    {
      title: 'Spaced Repetition Flashcards & Quizzes',
      titleUa: 'Картки з інтервальним повторенням та квізи',
      titleEs: 'Tarjetas de repetición espaciada y cuestionarios',
      description:
        'Interactive flashcard decks powered by the Leitner 5-box spaced repetition algorithm alongside modular multiple-choice quizzes with detailed technical explanations.',
      descriptionUa:
        'Інтерактивні колоди карток на базі 5-рівневого алгоритму інтервального повторення Лейтнера разом із модульними квізами з вибором відповідей та детальними технічними поясненнями.',
      descriptionEs:
        'Barajas interactivas de tarjetas impulsadas por el algoritmo de repetición espaciada de 5 cajas de Leitner junto con cuestionarios de opción múltiple con explicaciones técnicas detalladas.',
    },
    {
      title: 'Gamified XP, Streaks & Supabase Cloud Sync',
      titleUa: 'Гейміфікація XP, серії днів та хмарна синхронізація Supabase',
      titleEs: 'Gamificación con XP, rachas y sincronización en Supabase',
      description:
        'Zustand v5-powered state tracking with hydration protection, daily learning streak counters, XP mastery badges, and personal progress synchronization backed by Supabase PostgreSQL.',
      descriptionUa:
        'Трекінг прогресу на Zustand v5 із захистом від гідратаційних розбіжностей, лічильником щоденних серій, бейджами рівнів XP та персональною хмарною синхронізацією прогресу через Supabase PostgreSQL.',
      descriptionEs:
        'Seguimiento de estado con Zustand v5 y protección de hidratación, contadores de rachas diarias, insignias de nivel XP y sincronización personal de progreso en la nube con Supabase PostgreSQL.',
    },
    {
      title: '4-Locale Internationalization (i18n)',
      titleUa: '4-мовна інтернаціоналізація (i18n)',
      titleEs: 'Internacionalización en 4 idiomas (i18n)',
      description:
        'Full multilingual architecture supporting English, Russian, Ukrainian, and Spanish with localized routes, hreflang alternates, module translations, and dynamic metadata.',
      descriptionUa:
        'Повноцінна багатомовна архітектура з підтримкою англійської, української, іспанської та російської мов із локалізованими маршрутами, hreflang-тегами, перекладами модулів та динамічними метаданими.',
      descriptionEs:
        'Arquitectura multilingüe completa con soporte para inglés, español, ucraniano y ruso, con rutas localizadas, etiquetas hreflang, traducciones de módulos y metadatos dinámicos.',
    },
  ],
  challenges: [
    'Build Time Scaling with 1,100+ MDX Lessons: Compiling over 1,100 lessons into 1,700+ static routes caused Next.js build times to skyrocket to 21.6 minutes due to repeated filesystem disk reads and AST parsing on every language iteration.',
    'MDX-RS Rust Compiler Character Strictness: The Rust-based MDX compiler (mdxRs: true) crashed on raw < characters in performance benchmarks (< 50 ms) and unquoted JSX-like tags (<html>, <Link>) inside Markdown blocks.',
    'React 19 Hydration Mismatches with Client State: Synchronous access to localStorage for user XP, streak counters, and completed lessons caused server/client markup discrepancies and jarring hydration layout shifts.',
  ],
  challengesUa: [
    'Масштабування часу збірки для 1 100+ MDX-уроків: Компіляція понад 1 100 уроків у 1 700+ статичних маршрутів збільшувала час збірки Next.js до 21.6 хвилин через повторні дискові операції та AST-парсинг на кожній мовній ітерації.',
    'Суворість нативного Rust-компілятора MDX-RS: Компілятор MDX на базі Rust (mdxRs: true) аварійно завершував роботу на сирих символах < у бенчмарках (< 50 ms) та незаекранованих тегах на кшталт <html> або <Link> у блоках Markdown.',
    'Hydration mismatch у React 19 із клієнтським станом: Синхронний доступ до localStorage для збереження XP, серій днів та завершених уроків спричиняв розбіжності між сервером і клієнтом та візуальні зсуви розмітки.',
  ],
  challengesEs: [
    'Escalado del tiempo de compilación con 1.100+ lecciones MDX: Compilar más de 1.100 lecciones en 1.700+ rutas estáticas disparó el tiempo de compilación de Next.js a 21.6 minutos debido a lecturas repetidas de disco y parseo de AST en cada idioma.',
    'Rigor sintáctico del compilador Rust MDX-RS: El compilador MDX en Rust (mdxRs: true) fallaba con caracteres < sin escapar en métricas (< 50 ms) y etiquetas tipo JSX (<html>, <Link>) dentro de bloques Markdown.',
    'Errores de hidratación en React 19 con estado cliente: El acceso síncrono a localStorage para XP, rachas y lecciones completadas generaba discrepancias entre servidor y cliente con saltos visuales durante la hidratación.',
  ],
  solutions: [
    'In-Memory Content Cache & Pre-Generated URL Maps: Implemented an in-memory content cache layer (lib/content.ts) that parses each MDX document once and reuses the AST in memory. Cut production build time from 21.6 minutes down to 1.5 minutes (a 14x speedup).',
    'Automated Rust Syntax Pre-Validator: Engineered scripts/validate-content.mjs, an automated pre-build tool binding directly to the Rust MDX compiler to validate all 1,100+ files and ensure 100% compiler safety before build or deployment.',
    'Two-Pass useIsMounted Hydration Architecture: Developed a centralized useIsMounted() hook and skeleton fallback pattern, ensuring server components render clean universal skeletons while client widgets safely hydrate user data without flickers.',
  ],
  solutionsUa: [
    'In-Memory контентний кеш та мапи URL: Впроваджено in-memory шар кешування контенту (lib/content.ts), який парсить кожен MDX-документ один раз та перевикористовує AST у пам\'яті. Це скоротило час збірки з 21.6 хвилин до 1.5 хвилин (прискорення у 14 разів).',
    'Автоматизований пре-валідатор Rust-синтаксису: Створено утиліту scripts/validate-content.mjs, яка безпосередньо взаємодіє з Rust MDX-компілятором для перевірки всіх 1 100+ файлів та гарантує 100% сумісність перед збіркою в CI/CD.',
    'Двоетапна архітектура гідратації useIsMounted: Розроблено централізований хук useIsMounted() із патерном скелетонів, завдяки чому серверні компоненти генерують універсальну структуру, а клієнтські віджети гідратують персональні дані без мерехтіння.',
  ],
  solutionsEs: [
    'Caché de contenido en memoria y mapas de URL: Se implementó una capa de caché de contenido en memoria (lib/content.ts) que parsea cada documento MDX una sola vez y reutiliza el AST. Redujo el tiempo de compilación de 21.6 minutos a 1.5 minutos (14x más rápido).',
    'Prevalidador automatizado de sintaxis Rust: Se diseñó scripts/validate-content.mjs, una herramienta pre-build vinculada al compilador Rust MDX para validar los 1.100+ archivos y garantizar un 100% de compatibilidad antes del despliegue.',
    'Arquitectura de hidratación en dos fases useIsMounted: Se creó el hook centralizado useIsMounted() y un patrón de esqueletos de carga, garantizando que el servidor renderice esqueletos universales y el cliente hidrate los datos del usuario sin parpadeos.',
  ],
  liveUrl: 'https://wpskills.vercel.app',
  githubUrl: '#',
  category: ['nextjs', 'react', 'wordpress', 'fullstack'],
  deepDiveBlogSlug: 'wpskills-interactive-edtech-architecture',
}

export default wpskills
