import type { BlogPost } from '../types'

export const fullstackAiLabInteractiveEdtechArchitecturePost: BlogPost = {
  slug: 'fullstack-ai-lab-interactive-edtech-architecture',
  isProjectDeepDive: true,
  title: {
    en: 'Fullstack AI Lab Architecture Deep-Dive: Compiling 1,135+ MDX Lessons in 90 Seconds with Next.js 16 & Rust MDX-RS',
    ua: 'Повний розбір архітектури Fullstack AI Lab: компіляція 1 135+ MDX-уроків за 90 секунд на Next.js 16 та Rust MDX-RS',
    es: 'Análisis profundo de la arquitectura Fullstack AI Lab: compilación de 1.135+ lecciones MDX en 90 segundos con Next.js 16 y Rust MDX-RS',
  },
  description: {
    en: 'Complete executive and technical breakdown of the Fullstack AI Lab interactive engineering platform: how we cut SSG build times by 14x (from 21.6m to 1.5m), engineered an in-browser WebAssembly WordPress sandbox, an AI Technical Interview Engine, interactive runtime simulators, and a zero-metaphor NotebookLM audio engine.',
    ua: 'Повний технічний та архітектурний розбір інтерактивної освітньої платформи Fullstack AI Lab: як ми прискорили статичну збірку у 14 разів (із 21.6 хв до 1.5 хв), створили браузерну WebAssembly-пісочницю WordPress, симулятор AI-співбесід, інтерактивні симулятори рантайму та аудіогенератор для NotebookLM.',
    es: 'Desglose ejecutivo y técnico completo de la plataforma educativa interactiva Fullstack AI Lab: cómo redujimos el tiempo de compilación SSG 14 veces (de 21.6m a 1.5m), diseñamos un sandbox WebAssembly de WordPress en el navegador, un simulador de entrevistas técnicas con IA, visualizadores interactivos y un motor de audio para NotebookLM.',
  },
  date: '2026-10-22',
  readTime: {
    en: '9 min read',
    ua: '9 хв читання',
    es: '9 min de lectura',
  },
  category: 'architecture-comparison',
  categoryLabel: {
    en: 'System Architecture',
    ua: 'Системна архітектура',
    es: 'Arquitectura de Sistemas',
  },
  tags: [
    'Next.js 16',
    'React 19',
    'Rust MDX-RS',
    'WebAssembly',
    'AI Interview Engine',
    'EdTech Architecture',
    'Zustand v5',
    'Supabase',
    'NotebookLM AI',
  ],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide1.webp',
  appliedProjects: [
    {
      projectId: 29100,
      slug: 'fullstack-ai-lab',
      name: 'Fullstack AI Lab',
      note: {
        en: 'Flagship interactive Fullstack & WordPress engineering platform (1,135+ MDX lessons, WASM Playground, AI Interview Engine, 4 locales, 98+ PageSpeed, 225/225 tests).',
        ua: 'Флагманська інтерактивна інженерна платформа (1 135+ MDX-уроків, WASM Playground, симулятор AI-співбесід, 4 мови, 98+ PageSpeed, 225/225 тестів).',
        es: 'Plataforma educativa interactiva de ingeniería Fullstack y WordPress (1.135+ lecciones MDX, WASM Playground, simulador de entrevistas con IA, 4 idiomas, 98+ PageSpeed, 225/225 tests).',
      },
    },
  ],
  tldr: {
    en: [
      'Singleton In-Memory Content Cache combined with native Rust MDX-RS compilation reduced Next.js 16 static generation of 1,700+ routes across 1,135+ lessons from 21.6 minutes to 1.5 minutes (14x speedup).',
      'Pedagogical engineering built on Sweller\'s Cognitive Load Theory replaces passive video tutorials with interactive Explorable Explanations (<ArchitectureFlow>, <StepFlow>, WordPress Hook & Outage Simulators, +15 XP formative assessments).',
      'In-browser WebAssembly WordPress 7.0 / PHP 8.4 Playground on SQLite VFS coupled with an AI Technical Interview Simulator provides instant senior rubric feedback with zero server execution cost.',
      'Automated Zero-Metaphor Prompt Engine extracts structured MDX lesson ASTs into first-principles Google NotebookLM Deep Dive Audio Overviews across 4 languages.',
      'Local-first Zustand v5 state with a two-pass SSR Hydration Guard and personal Supabase PostgreSQL cloud sync ensures dual-tier PRO entitlements and cross-device progress persistence.',
    ],
    ua: [
      'Singleton In-Memory кеш контенту в парі з нативним компілятором Rust MDX-RS скоротив статичну генерацію 1 700+ маршрутів для 1 135+ уроків у Next.js 16 із 21.6 хвилин до 1.5 хвилин (прискорення у 14 разів).',
      'Інженерна дидактика за теорією когнітивного навантаження Свеллера замінює пасивне читання інтерактивними симуляторами (<ArchitectureFlow>, <StepFlow>, симулятор хуків WordPress, аварій та формувальні чекпоінти +15 XP).',
      'Браузерна WebAssembly-пісочниця WordPress 7.0 / PHP 8.4 на базі SQLite VFS разом із симулятором AI-співбесід надає миттєву оцінку за критеріями Senior-рівня з нульовими витратами на серверний бекенд.',
      'Автоматизований Zero-Metaphor Prompt Engine трансформує уроки у строгі першопринципні промпти для генерації аудіоподкастів у Google NotebookLM 4 мовами.',
      'Local-first стан на Zustand v5 із двоетапним SSR Hydration Guard та персональною хмарною синхронізацією в Supabase PostgreSQL гарантує дворівневий PRO-доступ і надійне збереження прогресу.',
    ],
    es: [
      'La caché de contenido en memoria Singleton junto con el compilador nativo Rust MDX-RS redujo la generación estática de 1.700+ rutas en más de 1.135 lecciones en Next.js 16 de 21.6 minutos a 1.5 minutos (14x más rápido).',
      'El diseño pedagógico basado en la Teoría de Carga Cognitiva de Sweller reemplaza el texto pasivo con simuladores interactivos (<ArchitectureFlow>, <StepFlow>, simulador de hooks de WordPress, fallos en producción y evaluaciones formativas +15 XP).',
      'El sandbox WebAssembly de WordPress 7.0 / PHP 8.4 en el navegador sobre SQLite VFS combinado con un simulador de entrevistas técnicas con IA ofrece evaluación inmediata con rúbricas Senior sin costes de cómputo en el servidor.',
      'El motor Zero-Metaphor Prompt Engine transforma las lecciones MDX en prompts de primeros principios para generar podcasts técnicos en Google NotebookLM en 4 idiomas.',
      'El estado local-first con Zustand v5, Hydration Guard de dos fases y sincronización personal en la nube con Supabase PostgreSQL garantiza permisos de nivel PRO y persistencia entre dispositivos.',
    ],
  },
  content: {
    en: `### 1. Executive Summary & The Engineering Problem

Modern engineering education platforms suffer from two fundamental flaws:
1. **Passive Content Delivery**: Reading static Markdown blocks or watching hour-long videos without interacting with the underlying runtime architecture leads to low retention and high cognitive fatigue.
2. **Build & Runtime Bottlenecks at Scale**: When an educational platform scales past **1,135+ interactive lessons across 4 languages (1,700+ localized routes)**, naive Static Site Generation (SSG) hits severe filesystem I/O bottlenecks, pushing CI/CD build times over **21.6 minutes** and risking Vercel deployment timeouts.

**Fullstack AI Lab** (\`https://www.fullstackailab.com\`) was architected from first principles to solve both challenges. Built with **Next.js 16 App Router**, **React 19 Server Components**, **Tailwind CSS v4**, and **native Rust MDX-RS**, it compiles 1,700+ interactive pages in **under 90 seconds**, achieves **98+ PageSpeed**, passes **225/225 automated tests**, and provides interactive architectural simulators alongside in-browser WebAssembly sandboxes with zero server runtime overhead.

---

### 2. Architecture Decision Records (ADR - Why We Chose This Stack)

Every architectural choice in Fullstack AI Lab was evaluated against strict performance, maintainability, and pedagogical criteria:

| Architectural Decision | Rejected Alternative | Engineering & Business Rationale |
| :--- | :--- | :--- |
| **Git-Backed MDX + Native Rust \`mdxRs\`** | Dynamic CMS Database (WordPress / Strapi) | Lessons embed live React 19 interactive components (\`<ArchitectureFlow>\`, \`<StepFlow>\`). Storing MDX in Git allows pre-build AST syntax validation in CI/CD and zero-latency Vercel Edge CDN delivery without database round-trips. |
| **Singleton In-Memory Build Cache (\`lib/content.ts\`)** | Per-Route Filesystem \`fs.readFile\` Parsing | Eliminates redundant disk reads when \`generateStaticParams\` and \`generateMetadata\` iterate across 1,700+ routes. Cut build time from **21.6 min to 1.5 min (14x faster)**. |
| **In-Browser WebAssembly WP 7.0 / PHP 8.4 (SQLite VFS)** | Ephemeral Docker Containers on AWS/Fly.io | Docker clusters cost thousands in monthly server infrastructure and require strict sandboxing against malicious PHP code. Running WordPress 7.0 inside client WebAssembly with SQLite VFS runs entirely client-side, zero cloud bill, instant sub-second spin-up. |
| **AI Technical Interview Simulator with Senior Rubrics** | Generic Chatbot Prompts | Generic LLM chats praise syntactically correct code while ignoring system design trade-offs. The custom engine evaluates candidates against strict Senior rubrics (time complexity, concurrency safety, edge failures, memory overhead). |
| **Local-First Zustand v5 + Personal Supabase Sync** | Mandatory Auth Gate & Public Multi-User Leaderboard | Zero barrier to entry: state updates (XP, streaks, Leitner flashcards) execute in \`<1ms\` in \`localStorage\`, while authenticated personal sessions sync progress and dual-tier PRO entitlements to a private **Supabase PostgreSQL** store protected by Row Level Security (RLS). |
| **Zero-Metaphor NotebookLM Prompt Engine** | Generic AI Summary Wrappers | Novice analogies ("an API is like a restaurant waiter") create flawed mental models for senior interviews. Our prompt engine enforces strict technical terminology for deep-dive audio generation. |

---

### 3. Core Mechanisms: How Fullstack AI Lab Works Under the Hood

#### Mechanism 1: The 14x Build Speedup via Singleton In-Memory Content Cache
In Next.js App Router, rendering 1,700+ localized routes requires resolving navigation trees, breadcrumbs, sibling links (Previous/Next lesson), and SEO metadata for every page. Initially, each route invoked \`fs.readFileSync\` across the curriculum directory, resulting in **over 1.8 million redundant filesystem calls** during a single build.

We engineered a **Singleton In-Memory Content Cache**:
- On the first build worker request, the engine scans the MDX tree once, parses frontmatter and AST metadata, and freezes the structured index inside a process-level \`Map\`.
- All subsequent 1,700+ route renders and metadata generators read directly from RAM in \`O(1)\` time.

\`\`\`ts
// Conceptual blueprint of the Singleton In-Memory Content Cache
const lessonIndexCache = new Map<string, ParsedCurriculumTree>()

export function getCurriculumTree(locale: Locale): ParsedCurriculumTree {
  const cached = lessonIndexCache.get(locale)
  if (cached) return cached

  const tree = scanAndValidateMdxDirectory(locale)
  lessonIndexCache.set(locale, Object.freeze(tree))
  return tree
}
\`\`\`

#### Mechanism 2: Interactive Explorable Explanations (\`<ArchitectureFlow>\` & Simulators)
Grounded in **John Sweller's Cognitive Load Theory** and **Jerome Bruner's Spiral Curriculum**, Fullstack AI Lab minimizes extraneous cognitive load by presenting system mechanics visually before showing syntax:
- **\`<ArchitectureFlow>\` Dual-Mode Visualizer**: Operates in **Pipeline Mode** (showing continuous end-to-end data flow across client, edge, server, and database) and **Inspector Mode** (allowing the reader to step through individual execution nodes and inspect memory safety, runtime environment badges, and payload transformations).
- **WordPress Hook Lifecycle & Outage Simulators**: Deterministic state machines running in the browser that trace exact hook execution order (\`muplugins_loaded\` -> \`plugins_loaded\` -> \`init\` -> \`wp_loaded\` -> \`template_redirect\`) and simulate production failures (such as object cache stampedes or REST API permission leaks).
- **Formative Checkpoints (+15 XP)**: Interactive micro-quizzes embedded directly into lesson sections that validate conceptual understanding before users proceed to complex implementations.

#### Mechanism 3: WebAssembly WordPress Playground & AI Technical Interview Engine
- **In-Browser WebAssembly Playground**: Compiles PHP 8.4 and WordPress 7.0 core into WebAssembly via SQLite VFS. Users execute real PHP code, test custom hooks, and experiment with database queries directly inside the browser with zero remote server infrastructure.
- **AI Technical Interview Simulator**: Simulates real-world Senior technical interviews. Candidates answer architectural questions under timed conditions and receive structured rubric evaluations scoring performance, memory efficiency, fault tolerance, and security considerations.

#### Mechanism 4: Zero-Metaphor Audio Prompt Engine for Google NotebookLM
To enable high-density mobile and commute learning, Fullstack AI Lab includes an automated **NotebookLM Audio Overview Generator**:
1. The extractor strips JSX presentation wrappers from the raw MDX lesson while preserving code blocks, architectural tables, and edge cases.
2. It wraps the technical corpus into a specialized **Zero-Metaphor System Prompt** that instructs Google Gemini / NotebookLM hosts to conduct a rigorous architectural dialogue between a Staff Engineer and a Mid-level Developer, explicitly forbidding household metaphors.

#### Mechanism 5: Two-Pass SSR Hydration Guard & Dual-Tier Supabase Sync
Because lesson pages are statically pre-rendered on the server (SSG), reading user-specific XP, daily streaks, or completed checkpoints directly from \`localStorage\` during the initial render would cause a **React 19 Hydration Mismatch** error.
- We implemented a strict two-pass \`useIsMounted()\` guard: the server and initial client pass render a deterministic, layout-stable skeleton; immediately after mount, the **Zustand v5** store hydrates from \`localStorage\` and asynchronously synchronizes personal progress and dual-tier PRO entitlements with **Supabase PostgreSQL**.

---

### 4. Engineering Glossary: Every Key Term Explained

To make this case study accessible to both technical executives and software engineers, here is a clear breakdown of every key mechanism used in Fullstack AI Lab:

- **Rust MDX-RS (\`@next/mdx\`)**:
  - *What it is*: A native Rust compiler that transforms Markdown files containing embedded React/JSX components into executable JavaScript modules.
  - *Why it matters*: Compiles orders of magnitude faster than legacy JavaScript-based unified/remark pipelines and enforces strict HTML/JSX syntax safety at build time.
- **Static Site Generation (SSG) & React Server Components (RSC)**:
  - *What it is*: Pre-rendering pages into static HTML and serialized component payloads at build time rather than computing them on every user request.
  - *Why it matters*: Delivers instant Time to First Byte (TTFB < 50ms) from Vercel's global Edge CDN and reduces server compute costs to near zero.
- **WebAssembly WordPress Playground (PHP 8.4 / SQLite VFS)**:
  - *What it is*: A full WordPress 7.0 and PHP 8.4 execution stack compiled to WebAssembly running completely inside client browser memory using a virtual SQLite file system.
  - *Why it matters*: Provides an isolated sandbox for testing code without requiring container infrastructure or backend server hosting.
- **AI Technical Interview Simulator & Senior Rubrics**:
  - *What it is*: An AI-driven assessment engine that scores candidate responses against standardized Senior architectural competencies.
  - *Why it matters*: Delivers actionable, objective technical feedback without human reviewer bottlenecks.
- **Cognitive Load Theory (Sweller)**:
  - *What it is*: A cognitive science framework stating that human working memory has a strict capacity limit; poorly structured UI or walls of text overload the brain and block learning.
  - *Why it matters*: By splitting complex topics into visual flows (\`<StepFlow>\`), inline glossary tooltips (\`<Term>\`), and micro-checkpoints (\`+15 XP\`), learners master senior-level architecture faster.
- **Leitner 5-Box Spaced Repetition**:
  - *What it is*: An algorithmic memory retention system where flashcards answered correctly move to longer review intervals, while missed cards reset to immediate review.
  - *Why it matters*: Ensures long-term retention of complex APIs, hooks, and system design patterns.
- **Supabase Row Level Security (RLS) & Dual-Tier PRO Entitlements**:
  - *What it is*: PostgreSQL database security policies that restrict which rows a user can read or write based on their cryptographic JWT session token, with entitlement gates distinguishing Free and PRO access.
  - *Why it matters*: Guarantees that personal learning telemetry and progress snapshots in Supabase can only be accessed and modified by the authenticated owner.

---

### 5. Defense-in-Depth Security Posture

Even for an educational platform, Fullstack AI Lab enforces strict DevSecOps boundaries:
1. **Pre-Build Rust AST Compiler Gate (\`scripts/validate-content.mjs\`)**: Scans all 1,135+ MDX files before deployment to prevent malformed JSX tags or injection vectors from reaching production.
2. **Client-Side WebAssembly Isolation**: The WebAssembly PHP runtime operates inside a dedicated Web Worker sandbox with SQLite VFS in browser memory, isolated from DOM cookies and sensitive storage.
3. **Zero-\`eval()\` Interactive Sandboxes**: All lifecycle and outage simulators run on pre-defined, type-safe finite state machines rather than executing arbitrary user strings via \`eval()\` or \`new Function()\`, completely eliminating client-side Cross-Site Scripting (XSS) risks.
4. **Database Isolation via RLS**: Personal progress synchronization with Supabase PostgREST is strictly scoped by PostgreSQL RLS policies and validated against schema constraints.
5. **Edge Security Headers**: Protected behind Cloudflare WAF and Vercel Edge with strict \`Content-Security-Policy\`, \`HSTS\`, and \`X-Content-Type-Options: nosniff\`.`,

    ua: `### 1. Executive Summary та інженерна задача

Сучасні освітні платформи для програмістів мають дві фундаментальні проблеми:
1. **Пасивне споживання контенту**: Читання статичних простих текстів або перегляд годинних відео без взаємодії з реальною архітектурою призводить до швидкої втоми та низького засвоєння матеріалу.
2. **Деградація часу збірки при масштабуванні**: Коли платформа зростає до **1 135+ інтерактивних уроків у 4 локалях (понад 1 700 маршрутів)**, стандартна статична генерація (SSG) впирається в дискові операції вводу-виводу (I/O), збільшуючи час білду до **21.6 хвилин** із ризиком таймауту в CI/CD.

Платформа **Fullstack AI Lab** (\`https://www.fullstackailab.com\`) була спроєктована з нуля для вирішення обох викликів. Побудована на **Next.js 16 App Router**, **React 19 Server Components**, **Tailwind CSS v4** та **нативному компіляторі Rust MDX-RS**, вона збирає 1 700+ інтерактивних сторінок менш ніж за **90 секунд**, досягає **98+ у PageSpeed**, успішно проходить **225/225 автоматизованих тестів** і надає інтерактивні архітектурні симулятори разом із браузерною WebAssembly-пісочницею з нульовими накладними витратами на серверний бекенд.

---

### 2. Architecture Decision Records (ADR - Чому обрано саме цей стек)

Кожне архітектурне рішення у Fullstack AI Lab приймалося на основі критеріїв швидкодії, надійності та дидактичної ефективності:

| Архітектурне рішення | Відхилена альтернатива | Інженерне та бізнес-обґрунтування |
| :--- | :--- | :--- |
| **Git-орієнтований MDX + Rust \`mdxRs\`** | Динамічна CMS із БД (WordPress / Strapi) | Уроки містять живі інтерактивні компоненти React 19 (\`<ArchitectureFlow>\`, \`<StepFlow>\`). Зберігання в Git дозволяє валідувати AST-синтаксис у CI/CD до релізу та миттєво роздавати сторінки з Vercel Edge CDN без запитів до БД. |
| **Singleton In-Memory кеш збірки (\`lib/content.ts\`)** | Повторне читання диска \`fs.readFile\` на кожному маршруті | Усуває дублювання дискових операцій під час генерації 1 700+ сторінок та метаданих. Скоротило час білду з **21.6 хв до 1.5 хв (прискорення у 14 разів)**. |
| **Браузерний WebAssembly WP 7.0 / PHP 8.4 (SQLite VFS)** | Docker-контейнери на AWS/Fly.io | Хмарні Docker-кластери коштують тисячі доларів щомісяця і потребують складного захисту від шкідливого PHP-коду. Запуск ядра WordPress 7.0 у WebAssembly клієнта на базі SQLite VFS працює повністю у браузері з нульовим рахунком за хмару та субсекундним запуском. |
| **Симулятор AI-співбесід із критеріями Senior** | Звичайні чат-боти на базі LLM | Прості чат-боти хвалять синтаксично робочий код, ігноруючи архітектурні компроміси. Спеціалізований рушій оцінює кандидатів за суворими критеріями Senior (складність алгоритмів, безпека паралелізму, відмовостійкість, пам'ять). |
| **Local-First Zustand v5 + Персональна синхронізація Supabase** | Примусова реєстрація на вході та публічний лідерборд | Нульовий бар'єр входу: нарахування XP, серії днів (Streaks) та картки працюють за \`<1ms\` у \`localStorage\`, а персональний прогрес та доступ PRO синхронізуються із приватною БД **Supabase PostgreSQL**, захищеною правилами RLS. |
| **Zero-Metaphor NotebookLM Prompt Engine** | Стандартні AI-саммарі з побутовими аналогіями | Побутові метафори («API - це офіціант у ресторані») формують хибні ментальні моделі. Наш генератор формує строгі першопринципні промпти для глибоких аудіоподкастів. |

---

### 3. Ключові механізми: Як працює Fullstack AI Lab під капотом

#### Механізм 1: Прискорення збірки у 14 разів через Singleton In-Memory Content Cache
У Next.js App Router генерація 1 700+ локалізованих маршрутів вимагає побудови дерева навігації, хлібних крихт, посилань «Попередній/Наступний урок» та SEO-метаданих для кожної сторінки. Спочатку кожен маршрут звертався до файлової системи через \`fs.readFileSync\`, створюючи понад **1.8 мільйона повторних операцій читання диска** за один білд.

Ми розробили **Singleton In-Memory Content Cache**:
- При першому зверненні воркера збірки рушій одноразово сканує MDX-дерево, парсить метадані та заморожує індекс в оперативній пам'яті (\`Map\`).
- Усі наступні 1 700+ маршрутів та генератори метаданих читають готові структури з ОЗП за час \`O(1)\`.

\`\`\`ts
// Концептуальна схема Singleton In-Memory Content Cache
const lessonIndexCache = new Map<string, ParsedCurriculumTree>()

export function getCurriculumTree(locale: Locale): ParsedCurriculumTree {
  const cached = lessonIndexCache.get(locale)
  if (cached) return cached

  const tree = scanAndValidateMdxDirectory(locale)
  lessonIndexCache.set(locale, Object.freeze(tree))
  return tree
}
\`\`\`

#### Механізм 2: Інтерактивні симулятори (\`<ArchitectureFlow>\` та симулятори аварій)
На основі **теорії когнітивного навантаження Джона Свеллера** та **спіральної дидактики Джерома Брунера**, Fullstack AI Lab спочатку візуалізує роботу алгоритму і лише потім переходить до синтаксису коду:
- **Двомодальний візуалізатор \`<ArchitectureFlow>\`**: Працює в режимі **Pipeline** (показує наскрізну шину передачі даних між клієнтом, сервером та БД) і в режимі **Inspector** (дозволяє покроково досліджувати кожен вузол, перевіряти стан пам'яті та середовище виконання).
- **Симулятори хуків WordPress та продакшн-аварій**: Детерміновані кінцеві автомати у браузері, що візуалізують точний порядок виклику хуків (\`muplugins_loaded\` -> \`plugins_loaded\` -> \`init\` -> \`template_redirect\`) та дозволяють діагностувати типові збої сервера.
- **Формувальні чекпоінти (+15 XP)**: Інтерактивні мікро-квізи, вбудовані безпосередньо в розділи уроків для закріплення знань перед переходом до складної реалізації.

#### Механізм 3: WebAssembly-пісочниця WordPress та симулятор AI-співбесід
- **Браузерний WebAssembly Playground**: Компілює ядро WordPress 7.0 та PHP 8.4 у WebAssembly на базі SQLite VFS. Користувачі запускають реальний PHP-код, тестують кастомні хуки та виконують SQL-запити прямо у браузері без віддалених серверів.
- **Симулятор технічних AI-співбесід**: Моделює реальні співбесіди рівня Senior. Кандидати відповідають на складні системні питання в умовах таймінгу й отримують детальну оцінку за критеріями продуктивності, безпеки пам'яті, відмовостійкості та архітектурної зрілості.

#### Механізм 4: Генератор аудіопромптів без метафор для Google NotebookLM
Для зручного повторення матеріалу в дорозі у Fullstack AI Lab вбудовано **NotebookLM Audio Overview Generator**:
1. Парсер очищує сирий MDX-файл уроку від презентаційних обгорток, зберігаючи архітектурні таблиці, код та граничні випадки (edge cases).
2. Дані пакуються у спеціальний **Zero-Metaphor System Prompt**, який задає для Google Gemini / NotebookLM формат глибокої технічної дискусії між Staff-архітектором та розробником із повною забороною поверхневих побутових аналогій.

#### Механізм 5: Двоетапний SSR Hydration Guard та синхронізація із Supabase
Оскільки сторінки уроків генеруються статично на сервері (SSG), пряме читання XP або серії днів із \`localStorage\` під час першого рендеру викликало б помилку **React 19 Hydration Mismatch**.
- Ми реалізували хук \`useIsMounted()\`: сервер та перший прохід клієнта рендерять стабільний скелетон без зсувів розмітки (CLS = 0), після чого сховище **Zustand v5** миттєво гідратує дані з \`localStorage\` та у фоновому режимі синхронізує особистий прогрес і статус PRO із хмарною базою **Supabase PostgreSQL**.

---

### 4. Інженерний глосарій: Пояснення кожного терміна та механізму

Щоб архітектура проєкту була однаково прозорою і для технічних директорів (CTO), і для розробників, нижче наведено пояснення ключових термінів:

- **Rust MDX-RS (\`@next/mdx\`)**:
  - *Що це*: Нативний компілятор на мові Rust, який перетворює файли Markdown із вбудованими React/JSX-компонентами у виконувані модулі.
  - *Користь*: Працює в десятки разів швидше за старі JS-парсери та гарантує сувору перевірку синтаксису ще на етапі збірки.
- **Static Site Generation (SSG) та React Server Components (RSC)**:
  - *Що це*: Попередня генерація HTML та серверних компонентів під час білду замість обчислення сторінки на кожен запит користувача.
  - *Користь*: Забезпечує миттєве завантаження (TTFB < 50ms) із глобальної мережі Vercel Edge CDN та мінімізує навантаження на сервер.
- **WebAssembly WordPress Playground (PHP 8.4 / SQLite VFS)**:
  - *Що це*: Повноцінне середовище виконання WordPress 7.0 та PHP 8.4, скомпільоване у WebAssembly, що працює повністю в пам'яті браузера через віртуальну файлову систему SQLite.
  - *Користь*: Надає ізольовану пісочницю для запуску та налагодження коду без витрат на серверні контейнери.
- **Симулятор AI-співбесід та критерії Senior**:
  - *Що це*: Інтелектуальний рушій тестування, який зіставляє відповіді користувача зі стандартизованими матрицями компетенцій архітектора.
  - *Користь*: Надає об'єктивний зворотний зв'язок без залучення дорогих інтерв'юерів.
- **Теорія когнітивного навантаження (Cognitive Load Theory)**:
  - *Що це*: Наукова модель, згідно з якою робоча пам'ять людини має обмежений ресурс; суцільні стіни тексту перевантажують мозок і блокують розуміння.
  - *Користь*: Подача матеріалу через візуальні схеми (\`<StepFlow>\`), вбудовані підказки термінів (\`<Term>\`) та мікро-чекпоінти (\`+15 XP\`) прискорює засвоєння складної інженерії.
- **Інтервальне повторення за системою Лейтнера (Leitner 5-Box)**:
  - *Що це*: Алгоритм запам'ятовування карток, де правильні відповіді збільшують інтервал до наступного показу, а помилки повертають картку у першу скриньку для частого повторення.
  - *Користь*: Переводить знання архітектурних патернів у довготривалу пам'ять.
- **Supabase Row Level Security (RLS) та дворівневий доступ PRO**:
  - *Що це*: Механізм безпеки на рівні рядків у БД PostgreSQL, який перевіряє криптографічний JWT-токен у кожному запиті та відкриває можливості Free/PRO.
  - *Користь*: Гарантує, що персональна статистика навчання в Supabase доступна виключно власнику акаунту.

---

### 5. Ешелонована безпека (Defense-in-Depth Security)

Архітектура безпеки Fullstack AI Lab побудована за принципом Zero-Trust:
1. **Пре-білд валідатор синтаксису (\`scripts/validate-content.mjs\`)**: Автоматично перевіряє всі 1 135+ MDX-файлів через Rust-компілятор перед деплоєм, блокуючи будь-які некоректні теги.
2. **Клієнтська пісочниця WebAssembly**: Рантайм WebAssembly PHP виконується у виділеному Web Worker із SQLite VFS у пам'яті браузера, повністю ізольовано від системних куків та чутливих сховищ.
3. **Ізоляція симуляторів без \`eval()\`**: Усі інтерактивні лабораторії працюють на типізованих детермінованих автоматах станів без виконання довільного JS-коду, що повністю виключає ризик клієнтських XSS-атак.
4. **Захист хмарного прогресу через RLS**: Доступ до таблиць прогресу в Supabase обмежений політиками Row Level Security та серверною валідацією схем.
5. **Периметр Cloudflare WAF та Vercel Edge**: Суворі заголовки \`Content-Security-Policy\`, \`HSTS\` та захист від автоматизованого скрейпінгу.`,

    es: `### 1. Resumen Ejecutivo y el Problema de Ingeniería

Las plataformas modernas de educación en ingeniería de software sufren dos problemas fundamentales:
1. **Entrega pasiva de contenido**: Leer bloques estáticos de texto o ver vídeos de horas sin interactuar con la arquitectura de ejecución real provoca fatiga cognitiva y baja retención.
2. **Cuellos de botella al escalar la compilación**: Cuando una plataforma supera las **1.135+ lecciones interactivas en 4 idiomas (más de 1.700 rutas localizadas)**, la generación de sitios estáticos (SSG) convencional satura las lecturas de disco (I/O), elevando el tiempo de compilación a **21.6 minutos** con riesgo de timeout en CI/CD.

**Fullstack AI Lab** (\`https://www.fullstackailab.com\`) fue diseñado desde primeros principios para resolver ambos desafíos. Construido con **Next.js 16 App Router**, **React 19 Server Components**, **Tailwind CSS v4** y el compilador nativo **Rust MDX-RS**, pre-renderiza más de 1.700 páginas interactivas en **menos de 90 segundos**, alcanza **98+ en PageSpeed**, supera **225/225 pruebas automatizadas** e incorpora simuladores arquitectónicos y sandboxes WebAssembly en el navegador sin costes de infraestructura remota.

---

### 2. Registros de Decisiones de Arquitectura (ADR - Por qué elegimos este stack)

Cada decisión arquitectónica en Fullstack AI Lab se evaluó bajo estrictos criterios de rendimiento, seguridad y pedagogía:

| Decisión Arquitectónica | Alternativa Descartada | Justificación Técnica y de Negocio |
| :--- | :--- | :--- |
| **MDX en Git + Compilador Nativo Rust \`mdxRs\`** | CMS Dinámico con Base de Datos (WordPress / Strapi) | Las lecciones incrustan componentes interactivos de React 19 (\`<ArchitectureFlow>\`, \`<StepFlow>\`). Almacenar MDX en Git permite validar el AST en CI/CD antes del despliegue y servir páginas al instante desde Vercel Edge CDN. |
| **Caché Singleton en Memoria (\`lib/content.ts\`)** | Lectura de disco \`fs.readFile\` por cada ruta | Elimina las lecturas redundantes de disco al generar 1.700+ páginas y metadatos. Redujo el tiempo de build de **21.6 min a 1.5 min (14x más rápido)**. |
| **WebAssembly WP 7.0 / PHP 8.4 en el Navegador (SQLite VFS)** | Contenedores Docker en la nube (AWS/Fly.io) | Los clústeres Docker implican costes mensuales recurrentes y requieren aislamiento estricto contra código PHP malicioso. Ejecutar WordPress 7.0 sobre WebAssembly en el navegador con SQLite VFS se procesa en el cliente con coste cero de servidor y arranque inmediato. |
| **Simulador de Entrevistas Técnicas con IA y Rúbricas Senior** | Prompts genéricos de Chatbot | Las respuestas estándar de chat elogian código funcional ignorando compensaciones de escalabilidad. El motor evalúa a los ingenieros bajo rúbricas Senior (complejidad temporal, concurrencia segura, tolerancia a fallos y memoria). |
| **Zustand v5 Local-First + Sincronización Personal en Supabase** | Registro obligatorio y tabla de clasificación pública | Cero fricción: los puntos XP, rachas y tarjetas se actualizan en \`<1ms\` en \`localStorage\`, mientras que el progreso personal y el plan PRO se sincronizan en segundo plano con **Supabase PostgreSQL** protegido por Row Level Security (RLS). |
| **Motor de Prompts sin Metáforas para NotebookLM** | Resúmenes genéricos de IA con analogías cotidianas | Las metáforas domésticas ("una API es como un camarero") crean modelos mentales imprecisos. Nuestro motor exige rigor de ingeniería en cada podcast generado. |

---

### 3. Mecanismos Clave: Cómo funciona Fullstack AI Lab bajo el capó

#### Mecanismo 1: Aceleración de compilación 14x mediante Caché Singleton en Memoria
En Next.js App Router, generar 1.700+ rutas localizadas requiere construir árboles de navegación, migas de pan, enlaces de lección anterior/siguiente y metadatos SEO para cada página. Inicialmente, cada ruta invocaba \`fs.readFileSync\`, provocando más de **1.8 millones de lecturas de disco redundantes** por compilación.

Diseñamos una **Caché de Contenido Singleton en Memoria**:
- En la primera solicitud del worker de compilación, el motor escanea el directorio MDX una sola vez, procesa el AST y congela el índice en un \`Map\` en memoria RAM.
- Las 1.700+ rutas siguientes leen directamente desde la memoria RAM en tiempo \`O(1)\`.

\`\`\`ts
// Esquema conceptual de la Caché Singleton en Memoria
const lessonIndexCache = new Map<string, ParsedCurriculumTree>()

export function getCurriculumTree(locale: Locale): ParsedCurriculumTree {
  const cached = lessonIndexCache.get(locale)
  if (cached) return cached

  const tree = scanAndValidateMdxDirectory(locale)
  lessonIndexCache.set(locale, Object.freeze(tree))
  return tree
}
\`\`\`

#### Mecanismo 2: Explicaciones Explorables Interactivas (\`<ArchitectureFlow>\` y Simuladores)
Basado en la **Teoría de Carga Cognitiva de John Sweller** y el **Currículo en Espiral de Jerome Bruner**, Fullstack AI Lab presenta la mecánica del sistema visualmente antes de mostrar la sintaxis:
- **Visualizador Bimodo \`<ArchitectureFlow>\`**: Opera en **Modo Pipeline** (mostrando el bus de datos continuo entre cliente, servidor y base de datos) y **Modo Inspector** (permitiendo avanzar paso a paso por cada nodo e inspeccionar la seguridad de memoria y el entorno de ejecución).
- **Simuladores de Ciclo de Vida de WordPress y Fallos en Producción**: Máquinas de estados deterministas en el navegador que trazan el orden exacto de ejecución de hooks (\`muplugins_loaded\` -> \`plugins_loaded\` -> \`init\` -> \`template_redirect\`) y simulan caídas de producción.
- **Puntos de Control Formativos (+15 XP)**: Micro-evaluaciones interactivas incrustadas directamente en las secciones de cada lección para validar el entendimiento conceptual antes del código complejo.

#### Mecanismo 3: Sandbox WebAssembly de WordPress y Motor de Entrevistas con IA
- **Sandbox WebAssembly en el Navegador**: Compila PHP 8.4 y WordPress 7.0 a WebAssembly mediante SQLite VFS. Los usuarios ejecutan código PHP real, prueban hooks y lanzan consultas SQL directamente en el navegador sin infraestructura remota.
- **Simulador de Entrevistas Técnicas con IA**: Recrea entrevistas técnicas de nivel Senior. Los candidatos responden a desafíos de diseño de sistemas bajo tiempo límite y reciben evaluaciones objetivas basadas en rendimiento, memoria, tolerancia a fallos y seguridad.

#### Mecanismo 4: Generador de Prompts de Audio sin Metáforas para Google NotebookLM
Para facilitar el estudio móvil sin fatiga visual, Fullstack AI Lab integra el **NotebookLM Audio Overview Generator**:
1. El extractor limpia las etiquetas de presentación del MDX conservando tablas arquitectónicas, bloques de código y casos límite.
2. Empaqueta el contenido en un **Zero-Metaphor System Prompt** que instruye a Google Gemini / NotebookLM para estructurar un diálogo técnico profundo entre un Staff Engineer y un desarrollador, prohibiendo estrictamente las metáforas cotidianas.

#### Mecanismo 5: Hydration Guard de Dos Fases y Sincronización con Supabase
Como las lecciones se pre-renderizan estáticamente en el servidor (SSG), leer el XP o las rachas desde \`localStorage\` durante el renderizado inicial causaría un error de **Hydration Mismatch en React 19**.
- Implementamos el hook \`useIsMounted()\`: el servidor y el primer renderizado cliente muestran un esqueleto estable (CLS = 0); tras el montaje, **Zustand v5** hidrata los datos locales al instante y sincroniza el progreso personal y el plan PRO con **Supabase PostgreSQL**.

---

### 4. Glosario de Ingeniería: Explicación de cada término y mecanismo

Para que este caso de estudio sea claro tanto para directores técnicos (CTO) como para desarrolladores, explicamos cada término clave utilizado en el proyecto:

- **Rust MDX-RS (\`@next/mdx\`)**:
  - *Qué es*: Un compilador nativo escrito en Rust que transforma archivos Markdown con componentes React/JSX en módulos ejecutables.
  - *Valor*: Compila mucho más rápido que los antiguos analizadores en JavaScript y valida la seguridad sintáctica durante el build.
- **Static Site Generation (SSG) y React Server Components (RSC)**:
  - *Qué es*: Pre-renderizado de páginas en HTML estático y cargas útiles de componentes de servidor en tiempo de compilación.
  - *Valor*: Garantiza tiempos de respuesta subsegundo (TTFB < 50ms) desde la red global Vercel Edge CDN.
- **Sandbox WebAssembly de WordPress (PHP 8.4 / SQLite VFS)**:
  - *Qué es*: Pila completa de WordPress 7.0 y PHP 8.4 compilada a WebAssembly que se ejecuta íntegramente en la memoria del navegador con SQLite VFS.
  - *Valor*: Proporciona un entorno seguro y aislado para probar código sin incurrir en costes de servidores en la nube.
- **Simulador de Entrevistas Técnicas con IA y Rúbricas Senior**:
  - *Qué es*: Motor de evaluación inteligente que mide las respuestas del usuario frente a matrices de competencias de nivel Senior.
  - *Valor*: Brinda retroalimentación técnica precisa sin intermediación humana.
- **Teoría de Carga Cognitiva (Sweller)**:
  - *Qué es*: Principio neurocognitivo según el cual la memoria de trabajo humana es limitada; los muros de texto saturan al lector e impiden el aprendizaje.
  - *Valor*: Dividir la complejidad mediante flujos visuales (\`<StepFlow>\`), glosarios integrados (\`<Term>\`) y puntos de control (\`+15 XP\`) acelera el dominio técnico.
- **Repetición Espaciada de Leitner (5 Cajas)**:
  - *Qué es*: Algoritmo de memorización donde las tarjetas acertadas se revisan a intervalos crecientes y las falladas vuelven a la primera caja.
  - *Valor*: Consolida patrones arquitectónicos y APIs en la memoria a largo plazo.
- **Supabase Row Level Security (RLS) y Plan PRO**:
  - *Qué es*: Políticas de seguridad a nivel de fila en PostgreSQL que verifican el token criptográfico JWT en cada consulta, habilitando niveles Free y PRO.
  - *Valor*: Asegura que el progreso personal en la nube solo pueda ser leído o modificado por el propietario de la cuenta.

---

### 5. Arquitectura de Seguridad en Profundidad (Defense-in-Depth)

1. **Validador Pre-Build en Rust (\`scripts/validate-content.mjs\`)**: Escanea los más de 1.135 archivos MDX antes del despliegue para bloquear cualquier etiqueta malformada.
2. **Aislamiento en WebAssembly en el Cliente**: El entorno PHP WebAssembly se ejecuta en un Web Worker dedicado con SQLite VFS en memoria, aislado del acceso al DOM, cookies o almacenamiento de sesión.
3. **Simuladores sin \`eval()\`**: Todos los laboratorios interactivos funcionan mediante máquinas de estados finitos tipadas sin ejecutar código arbitrario, eliminando vectores de Cross-Site Scripting (XSS).
4. **Aislamiento de Datos con RLS**: La sincronización de progreso personal en Supabase PostgREST está protegida por políticas RLS y validación de esquemas.
5. **Perímetro Cloudflare WAF y Vercel Edge**: Cabeceras de seguridad estrictas (\`CSP\`, \`HSTS\`, \`X-Content-Type-Options: nosniff\`).`,
  },
}
