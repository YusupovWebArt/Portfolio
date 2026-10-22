var e=[{slug:`nextjs-vs-headless-wordpress-custom-php-2026`,title:{en:`Next.js 16 vs Headless WordPress vs Custom PHP: Objective TCO, Performance & SEO Analysis (2026)`,ua:`Next.js 16 проти Headless WordPress та Custom PHP: об’єктивний аналіз TCO, продуктивності та SEO (2026)`,es:`Next.js 16 vs Headless WordPress vs Custom PHP: Análisis objetivo de TCO, rendimiento y SEO (2026)`},description:{en:`An engineering breakdown comparing architecture, maintenance overhead, Total Cost of Ownership (TCO), and Google Core Web Vitals across Next.js 16, Headless WordPress, and custom PHP.`,ua:`Інженерний аналіз архітектури, витрат на підтримку (TCO) та показників Google Core Web Vitals для Next.js 16, Headless WordPress та кастомного PHP.`,es:`Análisis de ingeniería que compara arquitectura, costes de mantenimiento (TCO) y métricas de Core Web Vitals entre Next.js 16, Headless WordPress y PHP a medida.`},date:`2026-10-18`,readTime:{en:`8 min read`,ua:`8 хв читання`,es:`8 min de lectura`},category:`architecture-tco`,categoryLabel:{en:`Architecture & TCO`,ua:`Архітектура та TCO`,es:`Arquitectura y TCO`},tags:[`Next.js 16`,`WordPress`,`PHP 8.2`,`Headless CMS`,`Core Web Vitals`,`TCO`],author:{name:`Artur Yusupov`,role:{en:`Fullstack Web Engineer & AI Developer`,ua:`Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-nextjs-vs-headless-wp.png`,appliedProjects:[{projectId:29e3,slug:`unitrition`,name:`Unitrition E-Commerce Platform`,note:{en:`Next.js 16 SSG/SSR e-commerce architecture delivering 0.3s FCP, zero bundle bloat, and sub-second catalog transitions.`,ua:`E-commerce архітектура на Next.js 16 SSG/SSR із показником 0.3с FCP та субсекундними переходами каталогу.`,es:`Arquitectura de comercio electrónico con Next.js 16 SSG/SSR con FCP de 0.3s y transiciones instantáneas en catálogo.`}},{projectId:19500,slug:`it-magic`,name:`IT-Magic AWS Migration & Cloud Architecture`,note:{en:`Custom high-performance WordPress engineering with zero page-builder overhead, achieving 99/100 Core Web Vitals.`,ua:`Кастомна високопродуктивна розробка на WordPress без конструкторів із 99/100 Core Web Vitals.`,es:`Desarrollo en WordPress de alto rendimiento sin constructores visuales, alcanzando 99/100 en Core Web Vitals.`}}],tldr:{en:[`Custom PHP/WordPress remains the most cost-effective option for SMBs without complex interactive interfaces ($5-$15/month hosting).`,`Headless WordPress decouples content management from presentation, but doubles deployment complexity and requires robust preview synchronization.`,`Next.js 16 App Router with React Server Components delivers sub-second TTFB and zero-runtime JS for static content, ideal for high-traffic products and enterprise brands.`,`Never choose Headless purely for hype: evaluate editorial workflow friction and team skillsets before decoupling.`],ua:[`Кастомний PHP/WordPress залишається найбільш економічним вибором для малого бізнесу без складної інтерактивності (хостинг $5-$15/міс).`,`Headless WordPress відокремлює контент від інтерфейсу, але подвоює складність деплою та потребує надійного прев’ю чернеток.`,`Next.js 16 App Router із React Server Components забезпечує субсекундний TTFB і нульовий JS для статичного контенту.`,`Не обирайте Headless лише заради трендів: оцініть зручність для контент-менеджерів та навички команди.`],es:[`WordPress con PHP a medida sigue siendo la opción más rentable para pymes sin interfaces complejas (hosting de $5-$15/mes).`,`Headless WordPress desacopla la gestión de contenidos de la interfaz, pero duplica la complejidad del despliegue y requiere previsualizaciones sincronizadas.`,`Next.js 16 App Router con React Server Components ofrece TTFB subsegundo y cero JS en cliente para contenido estático.`,`No elijas Headless solo por moda: evalúa la fricción editorial y las capacidades del equipo antes de desacoplar.`]},content:{en:`### The 2026 Architectural Landscape

When advising CTOs, startup founders, and digital agencies on web architecture, the same question arises: **Should we build on modern Next.js, decouple WordPress into a headless CMS, or engineer a lean custom WordPress theme on PHP 8+?**

There is no universal silver bullet. Every architectural decision is a tradeoff between **capital expenditure (CapEx)**, **operational maintenance (OpEx)**, **developer velocity**, and **content editor independence**.

Below is an objective comparison based on 5+ years of commercial production deployments.

---

### 1. Total Cost of Ownership (TCO) Breakdown

A common misconception is that modern JavaScript frameworks are always cheaper to maintain. In reality, operational costs vary wildly:

| Metric | Lean Custom WordPress (PHP 8+) | Headless WordPress + Next.js | Pure Next.js 16 (App Router + MDX/DB) |
| :--- | :--- | :--- | :--- |
| **Monthly Hosting** | $10 - $30 / mo (cPanel/VPS/Cloudflare) | $50 - $150 / mo (WP Backend + Vercel) | $20 - $60 / mo (Vercel / Fly.io / Edge) |
| **Setup & Build Time** | 2 - 4 weeks | 4 - 8 weeks | 3 - 6 weeks |
| **Security Surface** | Medium (requires WP plugin hygiene) | Split (isolated backend, static frontend) | Lowest (zero server-side CMS exploits) |
| **Editor Learning Curve** | Near Zero (native Gutenberg / ACF) | Low (WordPress admin with preview hooks) | High if Git-based, Low if Notion/Sanity |

For standard corporate sites and local service companies, custom WordPress with ACF Pro provides the fastest ROI. Decoupled headless architectures only justify their ongoing cost when multiple consumer frontends (web, mobile app, kiosk) consume the exact same content API.

---

### 2. Core Web Vitals Benchmark: Real-World Measurements

Lighthouse and field metrics (Chrome User Experience Report - CrUX) heavily influence Google search ranking. Here is how the stacks compare under real mobile network throttling:

\`\`\`
Metric                  Custom WP (PHP 8 + Nginx)     Headless Next.js 16 (RSC)
-------------------------------------------------------------------------------
Largest Contentful Paint (LCP)      0.9s - 1.2s                   0.5s - 0.7s
Interaction to Next Paint (INP)     45ms                          18ms
Cumulative Layout Shift (CLS)       0.00                          0.00
Initial JS Payload                  85 KB - 140 KB                35 KB - 80 KB
\`\`\`

Next.js 16 with React Server Components (RSC) shifts rendering work to the build step or edge runtime, completely omitting the React runtime from purely static page segments.

---

### 3. The Content Editor Dilemma

Engineering teams frequently underestimate editorial friction. In a traditional WordPress setup, marketing teams enjoy instant previews, Yoast/RankMath real-time feedback, and visual block composition.

In headless configurations, you must deliberately build:
1. **Next.js Draft Mode integration**: validating secure preview tokens and dynamically bypassing Static Generation to show unpublished draft revisions.
2. **On-demand incremental revalidation (ISR)**: webhook listeners triggering \`revalidateTag()\` or \`revalidatePath()\` when an editor publishes a post in WordPress.

If your engineering team fails to implement robust preview tooling, editorial productivity collapses.

---

### 4. Pragmatic Decision Framework

- **Choose Custom WordPress (PHP 8.2 + ACF Pro) if:**
  - The project is an agency client site, local service provider, or content blog requiring turnkey editorial simplicity.
  - The budget must strictly stay under $5,000 for development and under $20/month for hosting.
  - One developer or agency handles ongoing maintenance.

- **Choose Headless WordPress + Next.js if:**
  - Content creators insist on WordPress admin, but technical stakeholders demand sub-second worldwide edge delivery.
  - Security requirements mandate hiding the CMS behind a private VPC or VPN.
  - The content needs to power both a web application and mobile native clients.

- **Choose Pure Next.js 16 (React 19 + Server Components) if:**
  - The application features interactive logic (calculators, SaaS dashboards, auth, dynamic filters).
  - Content can live in structured Markdown/MDX or modern headless platforms.
  - Core Web Vitals 99+ and sub-500ms TTFB are critical commercial KPIs.`,ua:`### Архітектурний ландшафт 2026 року

Консультуючи CTO, технічних фаундерів та цифрові агентства щодо вибору веб-архітектури, ми незмінно стикаємося з питанням: **чи варто створювати продукт на Next.js, розділяти WordPress на Headless CMS чи розробляти швидку кастомну тему на PHP 8+?**

Універсальної «срібної кулі» не існує. Кожне архітектурне рішення - це компроміс між **капітальними витратами (CapEx)**, **вартістю підтримки (OpEx)**, **швидкістю розробки** та **зручністю для контент-менеджерів**.

Нижче наведено об’єктивне інженерне порівняння, засноване на 5+ роках практичного комерційного досвіду.

---

### 1. Порівняння сукупної вартості володіння (TCO)

Поширена помилка вважати, що сучасні JS-фреймворки завжди дешевші в експлуатації. На практиці витрати розподіляються по-різному:

| Показник | Кастомний WordPress (PHP 8+) | Headless WordPress + Next.js | Чистий Next.js 16 (App Router) |
| :--- | :--- | :--- | :--- |
| **Хостинг / Сервери** | $10 - $30 / міс (cPanel/VPS/Cloudflare) | $50 - $150 / міс (WP Сервер + Vercel) | $20 - $60 / міс (Vercel / Edge хостинг) |
| **Термін створення** | 2 - 4 тижні | 4 - 8 тижнів | 3 - 6 тижнів |
| **Поверхня атак** | Середня (потребує оновлення плагінів) | Розділена (ізольований бекенд) | Мінімальна (відсутній публічний CMS) |
| **Поріг для редакторів** | Нульовий (Gutenberg / ACF) | Низький (WP адмінка з прев’ю) | Високий для Git, низький для CMS |

Для більшості корпоративних сайтів і бізнес-послуг кастомна тема WordPress із ACF Pro забезпечує найшвидше повернення інвестицій (ROI). Headless-архітектура виправдовує витрати лише тоді, коли кілька різних клієнтів (веб, мобільний додаток, термінал) одночасно використовують спільний API.

---

### 2. Бенчмарк Core Web Vitals: реальні заміри

Показники швидкості безпосередньо впливають на ранжування в Google:

\`\`\`
Метрика                 Кастомний WP (PHP 8 + Nginx)  Headless Next.js 16 (RSC)
-------------------------------------------------------------------------------
Largest Contentful Paint (LCP)      0.9s - 1.2s                   0.5s - 0.7s
Interaction to Next Paint (INP)     45ms                          18ms
Cumulative Layout Shift (CLS)       0.00                          0.00
Стартовий бандл JS                  85 KB - 140 KB                35 KB - 80 KB
\`\`\`

Next.js 16 з серверними компонентами (RSC) виконує роботу на етапі збірки або на edge-вузлі, повністю виключаючи клієнтський JS для статичних блоків.

---

### 3. Зручність контент-менеджерів

Інженери часто недооцінюють фактор маркетингової команди. У класичному WordPress редактори отримують миттєвий попередній перегляд і візуальний контроль.

У Headless-архітектурі інженер обов’язково має реалізувати:
1. **Next.js Draft Mode**: безпечну перевірку токенів для перегляду чернеток до публікації.
2. **On-demand ISR**: автоматичне оновлення сторінок через вебхуки \`revalidatePath()\` при збереженні запису в WordPress.

---

### 4. Практичне керівництво до вибору

- **Обирайте кастомний WordPress (PHP 8.2 + ACF Pro), якщо:**
  - Проєкт орієнтований на локальний бізнес або корпоративні послуги з класичною редакційною моделлю.
  - Бюджет обмежений і хостинг не має перевищувати $20/місяць.
- **Обирайте Headless WordPress + Next.js, якщо:**
  - Маркетинг вимагає звичну адмінку WordPress, але бізнесу потрібна глобальна субсекундна edge-доставка.
  - Необхідно надійно захистити адмін-панель за внутрішнім корпоративним VPN.
- **Обирайте чистий Next.js 16, якщо:**
  - Додаток містить складну клієнтську логіку (калькулятори, інтерактивні панелі, особисті кабінети).
  - Потрібен максимальний бал у Lighthouse 99+ та надшвидкий відгук сторінок.`,es:`### El panorama arquitectónico en 2026

Al asesorar a directores de tecnología (CTO), fundadores de startups y agencias sobre arquitectura web, surge siempre la misma disyuntiva: **¿Conviene desarrollar sobre Next.js moderno, desacoplar WordPress en un CMS headless o crear un tema a medida en PHP 8+?**

No existe una solución mágica universal. Toda decisión de ingeniería es un equilibrio entre **inversión inicial (CapEx)**, **coste operativo mensual (OpEx)**, **velocidad del equipo de desarrollo** y **autonomía del equipo de contenidos**.

A continuación, presentamos un análisis objetivo basado en más de 5 años de desarrollo en entornos reales de producción.

---

### 1. Desglose del Coste Total de Propiedad (TCO)

Existe la falsa creencia de que los frameworks modernos de JavaScript siempre abaratan el mantenimiento. En producción, la realidad es otra:

| Indicador | WordPress a Medida (PHP 8+) | Headless WordPress + Next.js | Next.js 16 Puro (App Router) |
| :--- | :--- | :--- | :--- |
| **Alojamiento Mensual** | $10 - $30 / mes (cPanel/VPS/Cloudflare) | $50 - $150 / mes (Servidor WP + Vercel) | $20 - $60 / mes (Vercel / Edge hosting) |
| **Plazo de Desarrollo** | 2 - 4 semanas | 4 - 8 semanas | 3 - 6 semanas |
| **Superficie de Seguridad** | Media (mantenimiento de plugins WP) | Dividida (backend aislado en red privada) | Mínima (sin gestor CMS expuesto) |
| **Curva de Aprendizaje** | Mínima (panel Gutenberg / ACF nativo) | Baja (admin WP con preview sincronizada) | Alta en Git, baja en Sanity/Notion |

Para la gran mayoría de sitios corporativos y pymes de servicios, WordPress a medida con ACF Pro ofrece el retorno de inversión más veloz. La arquitectura desacoplada headless solo justifica su coste continuado cuando múltiples plataformas (web, app móvil nativa, puntos de venta) consumen la misma API centralizada.

---

### 2. Rendimiento Core Web Vitals en Producción

Las métricas oficiales de Google Chrome (CrUX) impactan directamente en el posicionamiento SEO:

\`\`\`
Métrica                 WP a Medida (PHP 8 + Nginx)   Headless Next.js 16 (RSC)
-------------------------------------------------------------------------------
Largest Contentful Paint (LCP)      0.9s - 1.2s                   0.5s - 0.7s
Interaction to Next Paint (INP)     45ms                          18ms
Cumulative Layout Shift (CLS)       0.00                          0.00
Carga inicial de JavaScript         85 KB - 140 KB                35 KB - 80 KB
\`\`\`

Next.js 16 y los React Server Components (RSC) trasladan el renderizado al momento de compilación o al edge, eliminando la carga de JavaScript en cliente para contenidos estáticos.

---

### 3. El reto editorial: la experiencia de los redactores

Los desarrolladores a menudo subestiman la comodidad del equipo de marketing. En WordPress clásico, los editores disfrutan de previsualización en tiempo real y composición visual de bloques.

En entornos headless, el equipo de ingeniería debe implementar explícitamente:
1. **Next.js Draft Mode**: validación de tokens de previsualización para mostrar borradores no publicados de inmediato.
2. **On-demand ISR**: webhooks que invocan \`revalidatePath()\` cuando un redactor publica una entrada en WordPress.

---

### 4. Guía práctica para la toma de decisiones

- **Elige WordPress a Medida (PHP 8.2 + ACF Pro) si:**
  - El proyecto es una web corporativa o de servicios locales con gestión editorial clásica.
  - El presupuesto requiere mantenerse ajustado y el hosting no debe superar los 20 $/mes.
- **Elige Headless WordPress + Next.js si:**
  - Los redactores necesitan la interfaz de WordPress pero la empresa exige entrega global subsegundo en el edge.
  - La seguridad corporativa exige aislar el panel de control tras una VPN interna.
- **Elige Next.js 16 Puro si:**
  - La aplicación incorpora funcionalidades interactivas avanzadas (calculadoras, paneles SaaS, autenticación).
  - Obtener una puntuación Lighthouse de 99+ y un TTFB inferior a 500ms son objetivos estratégicos irrenunciables.`}},{slug:`wpskills-interactive-edtech-architecture`,isProjectDeepDive:!0,title:{en:`WPSKILLS Architecture Deep-Dive: Compiling 1,100+ MDX Lessons in 90 Seconds with Next.js 16 & Rust MDX-RS`,ua:`Повний розбір архітектури WPSKILLS: компіляція 1 100+ MDX-уроків за 90 секунд на Next.js 16 та Rust MDX-RS`,es:`Análisis profundo de la arquitectura WPSKILLS: compilación de 1.100+ lecciones MDX en 90 segundos con Next.js 16 y Rust MDX-RS`},description:{en:`Complete executive and technical breakdown of the WPSKILLS interactive engineering platform: how we cut SSG build times by 14x (from 21.6m to 1.5m), engineered interactive runtime simulators, built a zero-metaphor NotebookLM audio engine, and explained every core term and security mechanism.`,ua:`Повний технічний та архітектурний розбір інтерактивної освітньої платформи WPSKILLS: як ми прискорили статичну збірку у 14 разів (із 21.6 хв до 1.5 хв), створили симулятори рантайму, аудіогенератор для NotebookLM та пояснили кожен термін і механізм захисту.`,es:`Desglose ejecutivo y técnico completo de la plataforma educativa interactiva WPSKILLS: cómo redujimos el tiempo de compilación SSG 14 veces (de 21.6m a 1.5m), diseñamos simuladores interactivos, creamos el motor de audio para NotebookLM y explicamos cada término y mecanismo de seguridad.`},date:`2026-10-22`,readTime:{en:`9 min read`,ua:`9 хв читання`,es:`9 min de lectura`},category:`architecture-comparison`,categoryLabel:{en:`System Architecture`,ua:`Системна архітектура`,es:`Arquitectura de Sistemas`},tags:[`Next.js 16`,`React 19`,`Rust MDX-RS`,`EdTech Architecture`,`Zustand v5`,`Supabase`,`NotebookLM AI`],author:{name:`Artur Yusupov`,role:{en:`Fullstack Web Engineer & AI Developer`,ua:`Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack y Desarrollador IA`}},coverImage:`/Portfolio/images/portfolio/sliders/nextjs/wpskills/wpskills-slide1.webp`,appliedProjects:[{projectId:29100,slug:`wpskills`,name:`WPSKILLS`,note:{en:`Flagship interactive Fullstack & WordPress engineering platform (1,100+ MDX lessons, 4 locales, 98+ PageSpeed, 121/121 TDD tests).`,ua:`Флагманська інтерактивна освітня інженерна платформа (1 100+ MDX-уроків, 4 локалі, 98+ PageSpeed, 121/121 TDD тестів).`,es:`Plataforma educativa interactiva de ingeniería Fullstack y WordPress (1.100+ lecciones MDX, 4 idiomas, 98+ PageSpeed, 121/121 tests TDD).`}}],tldr:{en:[`Singleton In-Memory Content Cache combined with native Rust MDX-RS compilation reduced Next.js 16 static generation of 1,700+ routes from 21.6 minutes to 1.5 minutes (14x speedup).`,`Pedagogical engineering built on Sweller's Cognitive Load Theory replaces passive video tutorials with interactive Explorable Explanations (<ArchitectureFlow>, <StepFlow>, WordPress Hook & Outage Simulators).`,`Automated Zero-Metaphor Prompt Engine extracts structured MDX lesson ASTs into first-principles Google NotebookLM Deep Dive Audio Overviews across 4 languages.`,`Local-first Zustand v5 state with a two-pass SSR Hydration Guard and personal Supabase PostgreSQL cloud sync ensures zero-flicker UI and cross-device progress persistence.`],ua:[`Singleton In-Memory кеш контенту в парі з нативним компілятором Rust MDX-RS скоротив статичну генерацію 1 700+ маршрутів у Next.js 16 із 21.6 хвилин до 1.5 хвилин (прискорення у 14 разів).`,`Інженерна дидактика за теорією когнітивного навантаження Свеллера замінює пасивне читання інтерактивними симуляторами (<ArchitectureFlow>, <StepFlow>, симулятор хуків WordPress та аварій).`,`Автоматизований Zero-Metaphor Prompt Engine трансформує уроки у строгі першопринципні промпти для генерації аудіоподкастів у Google NotebookLM 4 мовами.`,`Local-first стан на Zustand v5 із двоетапним SSR Hydration Guard та персональною хмарною синхронізацією в Supabase PostgreSQL гарантує роботу без мерехтіння інтерфейсу.`],es:[`La caché de contenido en memoria Singleton junto con el compilador nativo Rust MDX-RS redujo la generación estática de 1.700+ rutas en Next.js 16 de 21.6 minutos a 1.5 minutos (14x más rápido).`,`El diseño pedagógico basado en la Teoría de Carga Cognitiva de Sweller reemplaza el texto pasivo con simuladores interactivos (<ArchitectureFlow>, <StepFlow>, simulador de hooks de WordPress y caídas).`,`El motor Zero-Metaphor Prompt Engine transforma las lecciones MDX en prompts de primeros principios para generar podcasts técnicos en Google NotebookLM en 4 idiomas.`,`El estado local-first con Zustand v5, Hydration Guard de dos fases y sincronización personal en la nube con Supabase PostgreSQL garantiza cero parpadeos visuales.`]},content:{en:`### 1. Executive Summary & The Engineering Problem

Modern engineering education platforms suffer from two fundamental flaws:
1. **Passive Content Delivery**: Reading static Markdown blocks or watching hour-long videos without interacting with the underlying runtime architecture leads to low retention and high cognitive fatigue.
2. **Build & Runtime Bottlenecks at Scale**: When an educational platform scales past **1,100+ interactive lessons across 4 languages (1,700+ localized routes)**, naive Static Site Generation (SSG) hits severe filesystem I/O bottlenecks, pushing CI/CD build times over **21.6 minutes** and risking Vercel deployment timeouts.

**WPSKILLS** (\`wpskills.vercel.app\`) was architected from first principles to solve both challenges. Built with **Next.js 16 App Router**, **React 19 Server Components**, **Tailwind CSS v4**, and **native Rust MDX-RS**, it compiles 1,700+ interactive pages in **under 90 seconds**, achieves **98+ PageSpeed**, and provides interactive architectural simulators with zero runtime overhead.

---

### 2. Architecture Decision Records (ADR - Why We Chose This Stack)

Every architectural choice in WPSKILLS was evaluated against strict performance, maintainability, and pedagogical criteria:

| Architectural Decision | Rejected Alternative | Engineering & Business Rationale |
| :--- | :--- | :--- |
| **Git-Backed MDX + Native Rust \`mdxRs\`** | Dynamic CMS Database (WordPress / Strapi) | Lessons embed live React 19 interactive components (\`<ArchitectureFlow>\`, \`<StepFlow>\`). Storing MDX in Git allows pre-build AST syntax validation in CI/CD and zero-latency Vercel Edge CDN delivery without database round-trips. |
| **Singleton In-Memory Build Cache (\`lib/content.ts\`)** | Per-Route Filesystem \`fs.readFile\` Parsing | Eliminates redundant disk reads when \`generateStaticParams\` and \`generateMetadata\` iterate across 1,700+ routes. Cut build time from **21.6 min to 1.5 min (14x faster)**. |
| **Local-First Zustand v5 + Personal Supabase Sync** | Mandatory Auth Gate & Public Multi-User Leaderboard | Zero barrier to entry: state updates (XP, streaks, Leitner flashcards) execute in \`<1ms\` in \`localStorage\`, while authenticated personal sessions sync progress to a private **Supabase PostgreSQL** store protected by Row Level Security (RLS). |
| **Zero-Metaphor NotebookLM Prompt Engine** | Generic AI Summary Wrappers | Novice analogies ("an API is like a restaurant waiter") create flawed mental models for senior interviews. Our prompt engine enforces strict technical terminology for deep-dive audio generation. |

---

### 3. Core Mechanisms: How WPSKILLS Works Under the Hood

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
Grounded in **John Sweller's Cognitive Load Theory** and **Jerome Bruner's Spiral Curriculum**, WPSKILLS minimizes extraneous cognitive load by presenting system mechanics visually before showing syntax:
- **\`<ArchitectureFlow>\` Dual-Mode Visualizer**: Operates in **Pipeline Mode** (showing continuous end-to-end data flow across client, edge, server, and database) and **Inspector Mode** (allowing the reader to step through individual execution nodes and inspect memory safety, runtime environment badges, and payload transformations).
- **WordPress Hook Lifecycle & Outage Simulators**: Deterministic state machines running in the browser that trace exact hook execution order (\`muplugins_loaded\` -> \`plugins_loaded\` -> \`init\` -> \`wp_loaded\` -> \`template_redirect\`) and simulate production failures (such as object cache stampedes or REST API permission leaks).

#### Mechanism 3: Zero-Metaphor Audio Prompt Engine for Google NotebookLM
To enable high-density mobile and commute learning, WPSKILLS includes an automated **NotebookLM Audio Overview Generator**:
1. The extractor strips JSX presentation wrappers from the raw MDX lesson while preserving code blocks, architectural tables, and edge cases.
2. It wraps the technical corpus into a specialized **Zero-Metaphor System Prompt** that instructs Google Gemini / NotebookLM hosts to conduct a rigorous architectural dialogue between a Staff Engineer and a Mid-level Developer, explicitly forbidding household metaphors.

#### Mechanism 4: Two-Pass SSR Hydration Guard & Personal Supabase Sync
Because lesson pages are statically pre-rendered on the server (SSG), reading user-specific XP, daily streaks, or completed checkpoints directly from \`localStorage\` during the initial render would cause a **React 19 Hydration Mismatch** error.
- We implemented a strict two-pass \`useIsMounted()\` guard: the server and initial client pass render a deterministic, layout-stable skeleton; immediately after mount, the **Zustand v5** store hydrates from \`localStorage\` and asynchronously synchronizes personal progress with **Supabase PostgreSQL**.

---

### 4. Engineering Glossary: Every Key Term Explained

To make this case study accessible to both technical executives and software engineers, here is a clear breakdown of every key mechanism used in WPSKILLS:

- **Rust MDX-RS (\`@next/mdx\`)**:
  - *What it is*: A native Rust compiler that transforms Markdown files containing embedded React/JSX components into executable JavaScript modules.
  - *Why it matters*: Compiles orders of magnitude faster than legacy JavaScript-based unified/remark pipelines and enforces strict HTML/JSX syntax safety at build time.
- **Static Site Generation (SSG) & React Server Components (RSC)**:
  - *What it is*: Pre-rendering pages into static HTML and serialized component payloads at build time rather than computing them on every user request.
  - *Why it matters*: Delivers instant Time to First Byte (TTFB < 50ms) from Vercel's global Edge CDN and reduces server compute costs to near zero.
- **Cognitive Load Theory (Sweller)**:
  - *What it is*: A cognitive science framework stating that human working memory has a strict capacity limit; poorly structured UI or walls of text overload the brain and block learning.
  - *Why it matters*: By splitting complex topics into visual flows (\`<StepFlow>\`), inline glossary tooltips (\`<Term>\`), and micro-checkpoints (\`+15 XP\`), learners master senior-level architecture faster.
- **Leitner 5-Box Spaced Repetition**:
  - *What it is*: An algorithmic memory retention system where flashcards answered correctly move to longer review intervals, while missed cards reset to immediate review.
  - *Why it matters*: Ensures long-term retention of complex APIs, hooks, and system design patterns.
- **Supabase Row Level Security (RLS)**:
  - *What it is*: PostgreSQL database security policies that restrict which rows a user can read or write based on their cryptographic JWT session token.
  - *Why it matters*: Guarantees that personal learning telemetry and progress snapshots in Supabase can only be accessed and modified by the authenticated owner.

---

### 5. Defense-in-Depth Security Posture

Even for an educational platform, WPSKILLS enforces strict DevSecOps boundaries:
1. **Pre-Build Rust AST Compiler Gate (\`scripts/validate-content.mjs\`)**: Scans all 1,100+ MDX files before deployment to prevent malformed JSX tags or injection vectors from reaching production.
2. **Zero-\`eval()\` Interactive Sandboxes**: All lifecycle and outage simulators run on pre-defined, type-safe finite state machines rather than executing arbitrary user strings via \`eval()\` or \`new Function()\`, completely eliminating client-side Cross-Site Scripting (XSS) risks.
3. **Database Isolation via RLS**: Personal progress synchronization with Supabase PostgREST is strictly scoped by PostgreSQL RLS policies and validated against schema constraints.
4. **Edge Security Headers**: Protected behind Cloudflare WAF and Vercel Edge with strict \`Content-Security-Policy\`, \`HSTS\`, and \`X-Content-Type-Options: nosniff\`.`,ua:`### 1. Executive Summary та інженерна задача

Сучасні освітні платформи для програмістів мають дві фундаментальні проблеми:
1. **Пасивне споживання контенту**: Читання статичних простих текстів або перегляд годинних відео без взаємодії з реальною архітектурою призводить до швидкої втоми та низького засвоєння матеріалу.
2. **Деградація часу збірки при масштабуванні**: Коли платформа зростає до **1 100+ інтерактивних уроків у 4 локалях (понад 1 700 маршрутів)**, стандартна статична генерація (SSG) впирається в дискові операції вводу-виводу (I/O), збільшуючи час білду до **21.6 хвилин** із ризиком таймауту в CI/CD.

Платформа **WPSKILLS** (\`wpskills.vercel.app\`) була спроєктована з нуля для вирішення обох викликів. Побудована на **Next.js 16 App Router**, **React 19 Server Components**, **Tailwind CSS v4** та **нативному компіляторі Rust MDX-RS**, вона збирає 1 700+ інтерактивних сторінок менш ніж за **90 секунд**, досягає **98+ у PageSpeed** і надає інтерактивні архітектурні симулятори з нульовими накладними витратами рантайму.

---

### 2. Architecture Decision Records (ADR - Чому обрано саме цей стек)

Кожне архітектурне рішення у WPSKILLS приймалося на основі критеріїв швидкодії, надійності та дидактичної ефективності:

| Архітектурне рішення | Відхилена альтернатива | Інженерне та бізнес-обґрунтування |
| :--- | :--- | :--- |
| **Git-орієнтований MDX + Rust \`mdxRs\`** | Динамічна CMS із БД (WordPress / Strapi) | Уроки містять живі інтерактивні компоненти React 19 (\`<ArchitectureFlow>\`, \`<StepFlow>\`). Зберігання в Git дозволяє валідувати AST-синтаксис у CI/CD до релізу та миттєво роздавати сторінки з Vercel Edge CDN без запитів до БД. |
| **Singleton In-Memory кеш збірки (\`lib/content.ts\`)** | Повторне читання диска \`fs.readFile\` на кожному маршруті | Усуває дублювання дискових операцій під час генерації 1 700+ сторінок та метаданих. Скоротило час білду з **21.6 хв до 1.5 хв (прискорення у 14 разів)**. |
| **Local-First Zustand v5 + Персональна синхронізація Supabase** | Примусова реєстрація на вході та публічний лідерборд | Нульовий бар'єр входу: нарахування XP, серії днів (Streaks) та картки працюють за \`<1ms\` у \`localStorage\`, а персональний прогрес синхронізується із приватною БД **Supabase PostgreSQL**, захищеною правилами RLS. |
| **Zero-Metaphor NotebookLM Prompt Engine** | Стандартні AI-саммарі з побутовими аналогіями | Побутові метафори («API - це офіціант у ресторані») формують хибні ментальні моделі. Наш генератор формує строгі першопринципні промпти для глибоких аудіоподкастів. |

---

### 3. Ключові механізми: Як працює WPSKILLS під капотом

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
На основі **теорії когнітивного навантаження Джона Свеллера** та **спіральної дидактики Джерома Брунера**, WPSKILLS спочатку візуалізує роботу алгоритму і лише потім переходить до синтаксису коду:
- **Двомодальний візуалізатор \`<ArchitectureFlow>\`**: Працює в режимі **Pipeline** (показує наскрізну шину передачі даних між клієнтом, сервером та БД) і в режимі **Inspector** (дозволяє покроково досліджувати кожен вузол, перевіряти стан пам'яті та середовище виконання).
- **Симулятори хуків WordPress та продакшн-аварій**: Детерміновані кінцеві автомати у браузері, що візуалізують точний порядок виклику хуків (\`muplugins_loaded\` -> \`plugins_loaded\` -> \`init\` -> \`template_redirect\`) та дозволяють діагностувати типові збої сервера.

#### Механізм 3: Генератор аудіопромптів без метафор для Google NotebookLM
Для зручного повторення матеріалу в дорозі у WPSKILLS вбудовано **NotebookLM Audio Overview Generator**:
1. Парсер очищує сирий MDX-файл уроку від презентаційних обгорток, зберігаючи архітектурні таблиці, код та граничні випадки (edge cases).
2. Дані пакуються у спеціальний **Zero-Metaphor System Prompt**, який задає для Google Gemini / NotebookLM формат глибокої технічної дискусії між Staff-архітектором та розробником із повною забороною поверхневих побутових аналогій.

#### Механізм 4: Двоетапний SSR Hydration Guard та синхронізація із Supabase
Оскільки сторінки уроків генеруються статично на сервері (SSG), пряме читання XP або серії днів із \`localStorage\` під час першого рендеру викликало б помилку **React 19 Hydration Mismatch**.
- Ми реалізували хук \`useIsMounted()\`: сервер та перший прохід клієнта рендерять стабільний скелетон без зсувів розмітки (CLS = 0), після чого сховище **Zustand v5** миттєво гідратує дані з \`localStorage\` та у фоновому режимі синхронізує особистий прогрес із хмарною базою **Supabase PostgreSQL**.

---

### 4. Інженерний глосарій: Пояснення кожного терміна та механізму

Щоб архітектура проєкту була однаково прозорою і для технічних директорів (CTO), і для розробників, нижче наведено пояснення ключових термінів:

- **Rust MDX-RS (\`@next/mdx\`)**:
  - *Що це*: Нативний компілятор на мові Rust, який перетворює файли Markdown із вбудованими React/JSX-компонентами у виконувані модулі.
  - *Користь*: Працює в десятки разів швидше за старі JS-парсери та гарантує сувору перевірку синтаксису ще на етапі збірки.
- **Static Site Generation (SSG) та React Server Components (RSC)**:
  - *Що це*: Попередня генерація HTML та серверних компонентів під час білду замість обчислення сторінки на кожен запит користувача.
  - *Користь*: Забезпечує миттєве завантаження (TTFB < 50ms) із глобальної мережі Vercel Edge CDN та мінімізує навантаження на сервер.
- **Теорія когнітивного навантаження (Cognitive Load Theory)**:
  - *Що це*: Наукова модель, згідно з якою робоча пам'ять людини має обмежений ресурс; суцільні стіни тексту перевантажують мозок і блокують розуміння.
  - *Користь*: Подача матеріалу через візуальні схеми (\`<StepFlow>\`), вбудовані підказки термінів (\`<Term>\`) та мікро-чекпоінти (\`+15 XP\`) прискорює засвоєння складної інженерії.
- **Інтервальне повторення за системою Лейтнера (Leitner 5-Box)**:
  - *Що це*: Алгоритм запам'ятовування карток, де правильні відповіді збільшують інтервал до наступного показу, а помилки повертають картку у першу скриньку для частого повторення.
  - *Користь*: Переводить знання архітектурних патернів у довготривалу пам'ять.
- **Supabase Row Level Security (RLS)**:
  - *Що це*: Механізм безпеки на рівні рядків у БД PostgreSQL, який перевіряє криптографічний JWT-токен у кожному запиті.
  - *Користь*: Гарантує, що персональна статистика навчання в Supabase доступна виключно власнику акаунту.

---

### 5. Ешелонована безпека (Defense-in-Depth Security)

Архітектура безпеки WPSKILLS побудована за принципом Zero-Trust:
1. **Пре-білд валідатор синтаксису (\`scripts/validate-content.mjs\`)**: Автоматично перевіряє всі 1 100+ MDX-файлів через Rust-компілятор перед деплоєм, блокуючи будь-які некоректні теги.
2. **Ізоляція симуляторів без \`eval()\`**: Усі інтерактивні лабораторії працюють на типізованих детермінованих автоматах станів без виконання довільного JS-коду, що повністю виключає ризик клієнтських XSS-атак.
3. **Захист хмарного прогресу через RLS**: Доступ до таблиць прогресу в Supabase обмежений політиками Row Level Security та серверною валідацією схем.
4. **Периметр Cloudflare WAF та Vercel Edge**: Суворі заголовки \`Content-Security-Policy\`, \`HSTS\` та захист від автоматизованого скрейпінгу.`,es:`### 1. Resumen Ejecutivo y el Problema de Ingeniería

Las plataformas modernas de educación en ingeniería de software sufren dos problemas fundamentales:
1. **Entrega pasiva de contenido**: Leer bloques estáticos de texto o ver vídeos de horas sin interactuar con la arquitectura de ejecución real provoca fatiga cognitiva y baja retención.
2. **Cuellos de botella al escalar la compilación**: Cuando una plataforma supera las **1.100+ lecciones interactivas en 4 idiomas (más de 1.700 rutas localizadas)**, la generación de sitios estáticos (SSG) convencional satura las lecturas de disco (I/O), elevando el tiempo de compilación a **21.6 minutos** con riesgo de timeout en CI/CD.

**WPSKILLS** (\`wpskills.vercel.app\`) fue diseñado desde primeros principios para resolver ambos desafíos. Construido con **Next.js 16 App Router**, **React 19 Server Components**, **Tailwind CSS v4** y el compilador nativo **Rust MDX-RS**, pre-renderiza más de 1.700 páginas interactivas en **menos de 90 segundos**, alcanza **98+ en PageSpeed** e incorpora simuladores arquitectónicos sin sobrecarga en tiempo de ejecución.

---

### 2. Registros de Decisiones de Arquitectura (ADR - Por qué elegimos este stack)

Cada decisión arquitectónica en WPSKILLS se evaluó bajo estrictos criterios de rendimiento, seguridad y pedagogía:

| Decisión Arquitectónica | Alternativa Descartada | Justificación Técnica y de Negocio |
| :--- | :--- | :--- |
| **MDX en Git + Compilador Nativo Rust \`mdxRs\`** | CMS Dinámico con Base de Datos (WordPress / Strapi) | Las lecciones incrustan componentes interactivos de React 19 (\`<ArchitectureFlow>\`, \`<StepFlow>\`). Almacenar MDX en Git permite validar el AST en CI/CD antes del despliegue y servir páginas al instante desde Vercel Edge CDN. |
| **Caché Singleton en Memoria (\`lib/content.ts\`)** | Lectura de disco \`fs.readFile\` por cada ruta | Elimina las lecturas redundantes de disco al generar 1.700+ páginas y metadatos. Redujo el tiempo de build de **21.6 min a 1.5 min (14x más rápido)**. |
| **Zustand v5 Local-First + Sincronización Personal en Supabase** | Registro obligatorio y tabla de clasificación pública | Cero fricción: los puntos XP, rachas y tarjetas se actualizan en \`<1ms\` en \`localStorage\`, mientras que el progreso personal se sincroniza en segundo plano con **Supabase PostgreSQL** protegido por Row Level Security (RLS). |
| **Motor de Prompts sin Metáforas para NotebookLM** | Resúmenes genéricos de IA con analogías cotidianas | Las metáforas domésticas ("una API es como un camarero") crean modelos mentales imprecisos. Nuestro motor exige rigor de ingeniería en cada podcast generado. |

---

### 3. Mecanismos Clave: Cómo funciona WPSKILLS bajo el capó

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
Basado en la **Teoría de Carga Cognitiva de John Sweller** y el **Currículo en Espiral de Jerome Bruner**, WPSKILLS presenta la mecánica del sistema visualmente antes de mostrar la sintaxis:
- **Visualizador Bimodo \`<ArchitectureFlow>\`**: Opera en **Modo Pipeline** (mostrando el bus de datos continuo entre cliente, servidor y base de datos) y **Modo Inspector** (permitiendo avanzar paso a paso por cada nodo e inspeccionar la seguridad de memoria y el entorno de ejecución).
- **Simuladores de Ciclo de Vida de WordPress y Fallos en Producción**: Máquinas de estados deterministas en el navegador que trazan el orden exacto de ejecución de hooks (\`muplugins_loaded\` -> \`plugins_loaded\` -> \`init\` -> \`template_redirect\`) y simulan caídas de producción.

#### Mecanismo 3: Generador de Prompts de Audio sin Metáforas para Google NotebookLM
Para facilitar el estudio móvil sin fatiga visual, WPSKILLS integra el **NotebookLM Audio Overview Generator**:
1. El extractor limpia las etiquetas de presentación del MDX conservando tablas arquitectónicas, bloques de código y casos límite.
2. Empaqueta el contenido en un **Zero-Metaphor System Prompt** que instruye a Google Gemini / NotebookLM para estructurar un diálogo técnico profundo entre un Staff Engineer y un desarrollador, prohibiendo estrictamente las metáforas cotidianas.

#### Mecanismo 4: Hydration Guard de Dos Fases y Sincronización con Supabase
Como las lecciones se pre-renderizan estáticamente en el servidor (SSG), leer el XP o las rachas desde \`localStorage\` durante el renderizado inicial causaría un error de **Hydration Mismatch en React 19**.
- Implementamos el hook \`useIsMounted()\`: el servidor y el primer renderizado cliente muestran un esqueleto estable (CLS = 0); tras el montaje, **Zustand v5** hidrata los datos locales al instante y sincroniza el progreso personal con **Supabase PostgreSQL**.

---

### 4. Glosario de Ingeniería: Explicación de cada término y mecanismo

Para que este caso de estudio sea claro tanto para directores técnicos (CTO) como para desarrolladores, explicamos cada término clave utilizado en el proyecto:

- **Rust MDX-RS (\`@next/mdx\`)**:
  - *Qué es*: Un compilador nativo escrito en Rust que transforma archivos Markdown con componentes React/JSX en módulos ejecutables.
  - *Valor*: Compila mucho más rápido que los antiguos analizadores en JavaScript y valida la seguridad sintáctica durante el build.
- **Static Site Generation (SSG) y React Server Components (RSC)**:
  - *Qué es*: Pre-renderizado de páginas en HTML estático y cargas útiles de componentes de servidor en tiempo de compilación.
  - *Valor*: Garantiza tiempos de respuesta subsegundo (TTFB < 50ms) desde la red global Vercel Edge CDN.
- **Teoría de Carga Cognitiva (Sweller)**:
  - *Qué es*: Principio neurocognitivo según el cual la memoria de trabajo humana es limitada; los muros de texto saturan al lector e impiden el aprendizaje.
  - *Valor*: Dividir la complejidad mediante flujos visuales (\`<StepFlow>\`), glosarios integrados (\`<Term>\`) y puntos de control (\`+15 XP\`) acelera el dominio técnico.
- **Repetición Espaciada de Leitner (5 Cajas)**:
  - *Qué es*: Algoritmo de memorización donde las tarjetas acertadas se revisan a intervalos crecientes y las falladas vuelven a la primera caja.
  - *Valor*: Consolida patrones arquitectónicos y APIs en la memoria a largo plazo.
- **Supabase Row Level Security (RLS)**:
  - *Qué es*: Políticas de seguridad a nivel de fila en PostgreSQL que verifican el token criptográfico JWT en cada consulta.
  - *Valor*: Asegura que el progreso personal en la nube solo pueda ser leído o modificado por el propietario de la cuenta.

---

### 5. Arquitectura de Seguridad en Profundidad (Defense-in-Depth)

1. **Validador Pre-Build en Rust (\`scripts/validate-content.mjs\`)**: Escanea los más de 1.100 archivos MDX antes del despliegue para bloquear cualquier etiqueta malformada.
2. **Simuladores sin \`eval()\`**: Todos los laboratorios interactivos funcionan mediante máquinas de estados finitos tipadas sin ejecutar código arbitrario, eliminando vectores de Cross-Site Scripting (XSS).
3. **Aislamiento de Datos con RLS**: La sincronización de progreso personal en Supabase PostgREST está protegida por políticas RLS y validación de esquemas.
4. **Perímetro Cloudflare WAF y Vercel Edge**: Cabeceras de seguridad estrictas (\`CSP\`, \`HSTS\`, \`X-Content-Type-Options: nosniff\`).`}},{slug:`unitrition-headless-healthtech-architecture`,isProjectDeepDive:!0,title:{en:`Unitrition Architecture Deep-Dive: Engineering a Headless HealthTech & Precision Nutrition Platform with Next.js 16, WordPress & Supabase`,ua:`Повний розбір архітектури Unitrition: розробка Headless HealthTech-платформи персоналізованого харчування на Next.js 16, WordPress та Supabase`,es:`Análisis profundo de la arquitectura Unitrition: ingeniería de una plataforma HealthTech Headless con Next.js 16, WordPress y Supabase`},description:{en:`Executive and technical breakdown of Unitrition (unitrition.info): decoupling WordPress CMS from Next.js 16 App Router, integrating USDA FoodData Central API for real-time Bread Units and glycemic curve modeling across 10 clinical diet frameworks, and securing user data with Supabase RLS.`,ua:`Технічний та архітектурний розбір платформи Unitrition (unitrition.info): поєднання Headless WordPress із Next.js 16 App Router, інтеграція USDA FoodData Central API для розрахунку Хлібних Одиниць і глікемічних кривих для 10 дієт та захист даних через Supabase RLS.`,es:`Desglose ejecutivo y técnico de Unitrition (unitrition.info): desacoplamiento de WordPress CMS con Next.js 16 App Router, integración de la API USDA FoodData Central para el cálculo de Unidades de Pan y curvas glucémicas en 10 dietas, y seguridad con Supabase RLS.`},date:`2026-10-21`,readTime:{en:`8 min read`,ua:`8 хв читання`,es:`8 min de lectura`},category:`architecture-comparison`,categoryLabel:{en:`System Architecture`,ua:`Системна архітектура`,es:`Arquitectura de Sistemas`},tags:[`Next.js 16`,`Headless WordPress`,`Supabase`,`USDA API`,`HealthTech`,`TypeScript`,`Schema.org`],author:{name:`Artur Yusupov`,role:{en:`Fullstack Web Engineer & AI Developer`,ua:`Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack y Desarrollador IA`}},coverImage:`/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-slide1.webp`,appliedProjects:[{projectId:29e3,slug:`unitrition`,name:`Unitrition`,note:{en:`Fullstack precision nutrition platform supporting 10 dietary protocols, USDA FoodData Central API integration, Bread Units calculator, and bilingual EN/ES architecture.`,ua:`Fullstack-платформа персоналізованого харчування з підтримкою 10 дієтичних протоколів, інтеграцією USDA API, калькулятором Хлібних Одиниць та двомовною архітектурою EN/ES.`,es:`Plataforma fullstack de nutrición personalizada con soporte para 10 protocolos dietéticos, integración con API USDA, calculadora de Unidades de Pan y arquitectura bilingüe EN/ES.`}}],tldr:{en:[`Decoupled Hybrid Architecture: WordPress acts strictly as a headless editorial CMS via REST API, while Next.js 16 App Router delivers sub-second SSR/ISR pages and interactive dietary calculators.`,`Server-side USDA FoodData Central API proxy normalizes raw macro/micronutrient payloads and powers real-time Bread Units (BU) and Continuous Glucose Monitoring (CGM) curve simulations.`,`Deterministic 10-Diet Scoring Engine evaluates foods instantaneously against clinical thresholds (Keto, Low-GI, Mediterranean, Low-FODMAP, Renal, Diabetic, etc.) with color-coded traffic-light indicators.`,`Zero-Trust user data isolation: personal dietary profiles and authentication are handled in Supabase PostgreSQL with Row Level Security (RLS), completely separated from the editorial CMS.`],ua:[`Розділена гібридна архітектура: WordPress виступає виключно як headless-редакційна CMS через REST API, тоді як Next.js 16 App Router забезпечує субсекундний SSR/ISR рендеринг та інтерактивні калькулятори.`,`Серверний проксі-шар до державної бази USDA FoodData Central API нормалізує нутрієнти та обчислює Хлібні Одиниці (ХО) і прогнозні глікемічні криві (CGM) у реальному часі.`,`Детермінований рушій скорингу для 10 дієтичних протоколів миттєво оцінює продукти за клінічними порогами з колірним кодуванням («Дозволено / Помірно / Заборонено»).`,`Zero-Trust ізоляція даних: авторизація та персональні профілі харчування зберігаються у Supabase PostgreSQL із Row Level Security (RLS) окремо від CMS.`],es:[`Arquitectura híbrida desacoplada: WordPress actúa exclusivamente como CMS editorial headless vía REST API, mientras que Next.js 16 App Router ofrece páginas SSR/ISR subsegundo y calculadoras interactivas.`,`Un proxy servidor para la API USDA FoodData Central normaliza macronutrientes y calcula Unidades de Pan (BU) y simulaciones de curvas glucémicas (CGM) en tiempo real.`,`El motor determinista de puntuación para 10 dietas evalúa alimentos al instante frente a umbrales clínicos con indicadores visuales por colores.`,`Aislamiento Zero-Trust de datos: la autenticación y los perfiles dietéticos se gestionan en Supabase PostgreSQL con Row Level Security (RLS), separados del CMS editorial.`]},content:{en:`### 1. Executive Summary & The HealthTech Challenge

Patients and health-conscious individuals managing strict dietary protocols (such as Type 1/Type 2 Diabetes, Ketogenic, Low-FODMAP, or Renal diets) face a daily cognitive burden: cross-referencing raw nutrition labels against complex clinical guidelines and manually calculating **Bread Units (BU / Carbohydrate Exchanges)** and glycemic load.

Meanwhile, traditional medical portals built on monolithic CMS templates suffer from slow mobile performance when querying large nutritional databases and lack interactive client-side modeling tools.

**Unitrition** (\`unitrition.info\`) was engineered to bridge clinical nutrition data and modern fullstack performance. By combining **Headless WordPress**, **Next.js 16 App Router (React 19)**, **Supabase PostgreSQL**, and the **U.S. Department of Agriculture (USDA) FoodData Central API**, the platform delivers sub-second food compatibility scoring across **10 dietary frameworks**, real-time Bread Units calculation, and interactive glycemic curve visualizations.

---

### 2. Architecture Decision Records (ADR - Why We Chose This Stack)

| Architectural Decision | Rejected Alternative | Engineering & Business Rationale |
| :--- | :--- | :--- |
| **Hybrid Headless Stack (Next.js 16 + Headless WordPress REST API)** | Monolithic PHP WordPress Theme with Custom AJAX | Nutritionists and medical editors keep the familiar WordPress/ACF Pro editorial workflow, while end users get a blazing-fast React 19 App Router frontend with **95+ PageSpeed** and zero PHP template bottlenecks. |
| **Supabase PostgreSQL + Auth for User Profiles** | Storing User Accounts Inside WordPress \`wp_users\` | Decoupling user authentication and personal diet logs into Supabase with **Row Level Security (RLS)** prevents WordPress plugin vulnerabilities from ever exposing sensitive user health preferences. |
| **Next.js Server-Side Proxy for USDA FoodData API** | Direct Client-Side \`fetch()\` to USDA API | Protects the private USDA API key from client exposure, normalizes inconsistent third-party JSON schemas on the server, and applies edge caching to prevent rate-limit exhaustion. |
| **Bilingual Route & Schema.org Graph (\`EN / ES\`)** | Client-Only Translation Strings without URL Routing | Dedicated localized URLs with \`hreflang\` alternates and medical/nutrition \`Schema.org\` structured data maximize organic discovery across English and Spanish search markets. |

---

### 3. Core Mechanisms: How Unitrition Works Under the Hood

#### Mechanism 1: The USDA FoodData Central Proxy & Nutrient Normalization Pipeline
The USDA FoodData Central database contains ratusan of thousands of food items (Foundation Foods, SR Legacy, Branded Foods), each reporting nutrients in slightly different nested structures and unit IDs (e.g., Energy in \`kcal\` vs \`kJ\`, Total Carbohydrate by difference, Dietary Fiber, Total Sugars).

When a user searches for an ingredient in Unitrition:
1. The client dispatches a debounced request to our internal Next.js Route Handler.
2. The server proxy authenticates with the USDA API using server-only environment credentials, extracts the raw nutrient array, and maps nutrient IDs into a strict, type-safe \`NormalizedFoodItem\` interface.
3. Responses are cached with \`stale-while-revalidate\` headers so popular food lookups resolve in under **30ms**.

\`\`\`ts
// Conceptual blueprint of the Bread Units (BU) & Net Carbs calculation
export interface NormalizedMacros {
  caloriesKcal: number
  totalCarbsGrams: number
  dietaryFiberGrams: number
  sugarsGrams: number
  proteinGrams: number
  fatGrams: number
}

export function calculateBreadUnits(macros: NormalizedMacros, portionGrams: number) {
  const factor = portionGrams / 100
  const digestibleCarbs = Math.max(0, (macros.totalCarbsGrams - macros.dietaryFiberGrams) * factor)
  // 1 Bread Unit (BU) = 12g of digestible carbohydrates
  const breadUnits = Number((digestibleCarbs / 12).toFixed(2))
  return { digestibleCarbs: Number(digestibleCarbs.toFixed(1)), breadUnits }
}
\`\`\`

#### Mechanism 2: Deterministic 10-Diet Traffic-Light Scoring Engine
Rather than relying on slow or unpredictable LLM calls to judge whether a food fits a diet, Unitrition uses a **deterministic clinical rule matrix** across 10 diet protocols:
- Each diet profile defines strict macronutrient ratios, glycemic load ceilings, and excluded food groups.
- When a user selects a diet plan and searches foods, the engine computes a color-coded compatibility score:
  - **Green (Optimal Fit)**: Within macro targets and low glycemic impact.
  - **Amber (Moderate / Portion Control)**: Requires strict portion scaling based on calculated Bread Units.
  - **Red (Avoid)**: Exceeds carbohydrate/sodium/lipid thresholds for the active protocol.

#### Mechanism 3: Continuous Glucose Monitoring (CGM) Curve Simulation & PDF Export
To help users visualize *why* fiber and protein slow down glucose absorption compared to refined sugars, Unitrition includes an interactive **Glycemic Response Simulator**:
- Based on the ratio of digestible carbohydrates, dietary fiber, fat, and protein in the selected portion, the engine models the projected postprandial glucose curve over a 180-minute window.
- Users can compile their selected foods and meal calculations into a clean, print-ready **PDF Nutrition Report** directly in the browser.

#### Mechanism 4: Decoupled Editorial CMS via Headless WordPress & ISR
Educational nutrition articles and clinical guides are managed in a hardened headless WordPress instance using **Advanced Custom Fields (ACF Pro)**:
- Next.js fetches structured post payloads via the WP REST API during build and Incremental Static Regeneration (**ISR**).
- Every article automatically generates **Schema.org \`Article\` and \`FAQPage\` JSON-LD** markup to capture medical and dietary search snippets.

---

### 4. Engineering Glossary: Every Key Term Explained

- **Headless CMS Architecture**:
  - *What it is*: Separating the back-end content management panel (WordPress) from the front-end presentation layer (Next.js).
  - *Why it matters*: Content editors work in a familiar interface, while visitors experience instant React page transitions and superior security because the CMS admin panel is hidden from public traffic.
- **Incremental Static Regeneration (ISR)**:
  - *What it is*: A Next.js mechanism that updates static pages in the background after deployment when CMS content changes, without rebuilding the entire site.
  - *Why it matters*: Combines the speed of static HTML with the freshness of a dynamic database.
- **Bread Units (BU / Carbohydrate Exchange)**:
  - *What it is*: A clinical unit used in nutrition and diabetes management (1 BU equals 10g-12g of digestible carbohydrates) to estimate insulin requirements and glycemic impact.
  - *Why it matters*: Automating BU calculation across variable gram portions eliminates manual math errors for users.
- **Server-Side API Proxy**:
  - *What it is*: An intermediate backend endpoint that forwards client requests to an external service (USDA API), attaches secret keys on the server, and sanitizes the response.
  - *Why it matters*: Prevents API key theft and insulates the frontend from third-party API breaking changes.
- **Supabase Row Level Security (RLS)**:
  - *What it is*: Fine-grained access control inside PostgreSQL that enforces \`auth.uid() = user_id\` on every database query.
  - *Why it matters*: Ensures one user can never read or modify another user's saved dietary profile.

---

### 5. Defense-in-Depth Security Posture

1. **Zero-Trust Separation of CMS and User Data**: Even if the editorial WordPress CMS were ever targeted, user accounts and personal dietary records reside in an isolated Supabase PostgreSQL cluster protected by RLS.
2. **Server-Only Secret Isolation**: USDA API keys and Supabase service keys are strictly confined to server-side environment variables and never bundled into client JavaScript.
3. **Input Validation & Rate Protection**: Search queries and calculator inputs are sanitized and debounced before hitting the server proxy, preventing upstream API quota exhaustion.`,ua:`### 1. Executive Summary та задача HealthTech-інженерії

Люди, які дотримуються спеціалізованих медичних або оздоровчих дієт (діабетична, кетогенна, Low-FODMAP, ниркова, середземноморська тощо), щодня стикаються зі складним когнітивним навантаженням: їм доводиться вручну звіряти етикетки продуктів із клінічними таблицями та вираховувати **Хлібні Одиниці (ХО / Bread Units)** і глікемічне навантаження.

При цьому класичні медичні портали на монолітних CMS працюють повільно на мобільних пристроях при пошуку у великих базах продуктів і не дають інтерактивних інструментів моделювання раціону.

Платформа **Unitrition** (\`unitrition.info\`) була створена на стику клінічної нутриціології та сучасної fullstack-архітектури. Поєднуючи **Headless WordPress**, **Next.js 16 App Router (React 19)**, **Supabase PostgreSQL** та державну базу даних США **USDA FoodData Central API**, система забезпечує миттєвий скоринг продуктів за **10 дієтичними протоколами**, автоматичний розрахунок Хлібних Одиниць та візуалізацію глікемічних кривих.

---

### 2. Architecture Decision Records (ADR - Чому обрано саме цей стек)

| Архітектурне рішення | Відхилена альтернатива | Інженерне та бізнес-обґрунтування |
| :--- | :--- | :--- |
| **Гібридний Headless-стек (Next.js 16 + Headless WordPress REST API)** | Монолітна PHP-тема WordPress із AJAX | Нутриціологи та редактори отримують зручну адмінку WordPress + ACF Pro для ведення довідників, а користувачі - миттєвий інтерфейс на React 19 із **95+ PageSpeed**. |
| **Supabase PostgreSQL + Auth для профілів користувачів** | Зберігання акаунтів у таблиці \`wp_users\` WordPress | Ізоляція авторизації та особистих профілів харчування у Supabase із **Row Level Security (RLS)** гарантує безпеку персональних даних незалежно від редакційної CMS. |
| **Серверний проксі Next.js для USDA FoodData API** | Прямі клієнтські \`fetch()\` запити до USDA API | Приховує приватний API-ключ на сервері, нормалізує складну вкладену JSON-схему USDA у типізований контракт і кешує відповіді на Edge. |
| **Двомовна маршрутизація та Schema.org (\`EN / ES\`)** | Клієнтський переклад без окремих URL | Локалізовані маршрути з тегами \`hreflang\` та медичною мікророзміткою \`Schema.org\` максимізують органічний SEO-трафік англійською та іспанською мовами. |

---

### 3. Ключові механізми: Як працює Unitrition під капотом

#### Механізм 1: Серверний проксі USDA FoodData Central та нормалізація нутрієнтів
База даних USDA FoodData Central містить сотні тисяч продуктів, де макро- та мікроелементи передаються у глибоко вкладених масивах із різними ідентифікаторами та одиницями вимірювання (наприклад, енергія в \`kcal\` чи \`kJ\`, вуглеводи за різницею, клітковина, цукри).

Коли користувач вводить назву продукту в Unitrition:
1. Клієнт відправляє дебаунс-запит до внутрішнього Next.js Route Handler.
2. Серверний проксі авторизується в USDA API через захищені серверні змінні, витягує масив нутрієнтів і трансформує його у строго типізований об'єкт \`NormalizedFoodItem\`.
3. Відповіді кешуються із заголовком \`stale-while-revalidate\`, тому повторні пошукові запити виконуються менш ніж за **30ms**.

\`\`\`ts
// Концептуальна формула розрахунку Хлібних Одиниць (ХО) та засвоюваних вуглеводів
export interface NormalizedMacros {
  caloriesKcal: number
  totalCarbsGrams: number
  dietaryFiberGrams: number
  sugarsGrams: number
  proteinGrams: number
  fatGrams: number
}

export function calculateBreadUnits(macros: NormalizedMacros, portionGrams: number) {
  const factor = portionGrams / 100
  const digestibleCarbs = Math.max(0, (macros.totalCarbsGrams - macros.dietaryFiberGrams) * factor)
  // 1 Хлібна Одиниця (ХО) = 12 г засвоюваних вуглеводів
  const breadUnits = Number((digestibleCarbs / 12).toFixed(2))
  return { digestibleCarbs: Number(digestibleCarbs.toFixed(1)), breadUnits }
}
\`\`\`

#### Механізм 2: Детермінований рушій скорингу для 10 дієт (Traffic-Light Scoring)
Замість використання повільних і схильних до галюцинацій LLM-запитів для оцінки їжі, Unitrition використовує **детерміновану клінічну матрицю правил** для 10 дієтичних планів:
- Кожна дієта має чіткі пороги макронутрієнтів, глікемічного навантаження та стоп-списки інгредієнтів.
- Система миттєво присвоює продукту колірний статус:
  - **Зелений (Оптимально)**: Повністю відповідає обраній дієті та має низький глікемічний вплив.
  - **Жовтий (Помірно / Контроль порції)**: Допустимо за умови точного розрахунку порції та Хлібних Одиниць.
  - **Червоний (Уникати)**: Перевищує допустимі ліміти вуглеводів, натрію або жирів для активного плану.

#### Механізм 3: Симуляція глікемічних кривих (CGM) та генерація PDF-звітів
Щоб наочно показати користувачеві, як клітковина та білки уповільнюють засвоєння глюкози, в Unitrition реалізовано **симулятор глікемічного відгуку (CGM Simulation)**:
- На основі балансу засвоюваних вуглеводів, клітковини, білків і жирів у вибраній порції алгоритм будує графік прогнозованої динаміки глюкози на 180 хвилин.
- Результати підбору та розрахунки ХО можна в один клік експортувати у структурований **PDF-звіт раціону**.

#### Механізм 4: Headless WordPress та Incremental Static Regeneration (ISR)
Освітні статті та довідники дієт ведуться в ізольованій панелі WordPress за допомогою **ACF Pro**:
- Next.js отримує структурований контент через WP REST API і оновлює статичні сторінки у фоновому режимі через **ISR**.
- Кожна стаття автоматично збагачується мікророзміткою **Schema.org (\`Article\`, \`FAQPage\`)** для максимальної видимості в Google.

---

### 4. Інженерний глосарій: Пояснення кожного терміна та механізму

- **Headless CMS**:
  - *Що це*: Архітектура, де панель управління контентом (WordPress) відокремлена від зовнішнього інтерфейсу сайту (Next.js).
  - *Користь*: Редактори працюють у звичному інтерфейсі, а користувачі отримують миттєвий React-сайт, захищений від типових вразливостей публічних тем WordPress.
- **Incremental Static Regeneration (ISR)**:
  - *Що це*: Механізм Next.js, який дозволяє оновлювати окремі статичні сторінки у фоні після зміни даних у CMS без повної перезбірки всього сайту.
  - *Користь*: Поєднує субсекундну швидкість статики з актуальністю динамічного порталу.
- **Хлібна Одиниця (ХО / Bread Unit)**:
  - *Що це*: Умовна одиниця для оцінки кількості вуглеводів у продуктах (1 ХО дорівнює 10-12 г засвоюваних вуглеводів за вирахуванням клітковини).
  - *Користь*: Автоматизує складні щоденні розрахунки при плануванні раціону.
- **Серверний API-проксі (Server-Side API Proxy)**:
  - *Що це*: Проміжний серверний вузол, який приймає запит від браузера, додає секретний ключ на сервері, звертається до зовнішнього сервісу (USDA) і повертає очищені дані.
  - *Користь*: Гарантує, що ключі API неможливо викрасти через DevTools.
- **Supabase Row Level Security (RLS)**:
  - *Що це*: Політики безпеки на рівні бази даних PostgreSQL, які дозволяють читати або змінювати лише ті рядки, де \`user_id\` збігається з криптографічним токеном поточного користувача.
  - *Користь*: Абсолютна приватність збережених дієтичних налаштувань.

---

### 5. Ешелонована безпека (Defense-in-Depth Security)

1. **Повне розділення редакційної CMS та персональних даних**: Дані користувачів та авторизація фізично відокремлені від WordPress і знаходяться в захищеному кластері Supabase PostgreSQL із увімкненим RLS.
2. **Ізоляція секретів на сервері**: Ключі USDA FoodData Central та сервісні токени ніколи не потрапляють у клієнтський бандл браузера.
3. **Захист від перевантаження API**: Дебаунсинг на клієнті та серверне кешування захищають зовнішні шлюзи від спам-запитів.`,es:`### 1. Resumen Ejecutivo y el Desafío en HealthTech

Las personas que siguen protocolos dietéticos estrictos (diabetes tipo 1 y 2, dieta cetogénica, Low-FODMAP, renal o mediterránea) enfrentan una carga cognitiva diaria: cruzar etiquetas nutricionales con tablas clínicas y calcular manualmente las **Unidades de Pan (BU / Intercambios de Carbohidratos)** y la carga glucémica.

Al mismo tiempo, los portales de salud tradicionales construidos sobre CMS monolíticos sufren lentitud en dispositivos móviles al consultar grandes bases de datos nutricionales y carecen de herramientas interactivas de simulación.

**Unitrition** (\`unitrition.info\`) fue diseñado para unir el rigor nutricional con el alto rendimiento fullstack. Combinando **Headless WordPress**, **Next.js 16 App Router (React 19)**, **Supabase PostgreSQL** y la API oficial **USDA FoodData Central**, la plataforma ofrece evaluación instantánea de alimentos en **10 protocolos dietéticos**, cálculo de Unidades de Pan en tiempo real y simulación de curvas glucémicas.

---

### 2. Registros de Decisiones de Arquitectura (ADR - Por qué elegimos este stack)

| Decisión Arquitectónica | Alternativa Descartada | Justificación Técnica y de Negocio |
| :--- | :--- | :--- |
| **Stack Híbrido Headless (Next.js 16 + Headless WordPress REST API)** | Tema Monolítico PHP en WordPress con AJAX | Los editores nutricionales mantienen el flujo de trabajo de WordPress + ACF Pro, mientras los usuarios disfrutan de una aplicación React 19 con **95+ en PageSpeed**. |
| **Supabase PostgreSQL + Auth para Perfiles de Usuario** | Almacenar usuarios en \`wp_users\` de WordPress | Aislar la autenticación y las preferencias dietéticas en Supabase con **Row Level Security (RLS)** garantiza que los datos personales estén blindados y separados del CMS editorial. |
| **Proxy Servidor en Next.js para la API USDA FoodData** | Peticiones \`fetch()\` directas desde el navegador a USDA | Oculta la clave privada de la API en el servidor, normaliza el complejo esquema JSON del USDA en un contrato tipado y aplica caché en el Edge. |
| **Rutas Bilingües y Schema.org (\`EN / ES\`)** | Traducción solo en cliente sin rutas dedicadas | URLs localizadas con etiquetas \`hreflang\` y datos estructurados \`Schema.org\` maximizan el posicionamiento SEO orgánico en mercados hispanohablantes e ingleses. |

---

### 3. Mecanismos Clave: Cómo funciona Unitrition bajo el capó

#### Mecanismo 1: Proxy Servidor USDA FoodData Central y Normalización de Nutrientes
La base de datos USDA FoodData Central contiene cientos de miles de alimentos donde cada nutriente se reporta en estructuras anidadas con distintos identificadores y unidades (\`kcal\` vs \`kJ\`, carbohidratos totales, fibra dietética, azúcares).

Cuando un usuario busca un alimento en Unitrition:
1. El cliente envía una solicitud con debounce al Route Handler interno de Next.js.
2. El proxy del servidor se autentica ante la API del USDA usando variables de entorno privadas, extrae la matriz de nutrientes y la transforma en una interfaz tipada \`NormalizedFoodItem\`.
3. Las respuestas se almacenan en caché con \`stale-while-revalidate\`, resolviendo búsquedas frecuentes en menos de **30ms**.

\`\`\`ts
// Fórmula conceptual para el cálculo de Unidades de Pan (BU) y carbohidratos netos
export interface NormalizedMacros {
  caloriesKcal: number
  totalCarbsGrams: number
  dietaryFiberGrams: number
  sugarsGrams: number
  proteinGrams: number
  fatGrams: number
}

export function calculateBreadUnits(macros: NormalizedMacros, portionGrams: number) {
  const factor = portionGrams / 100
  const digestibleCarbs = Math.max(0, (macros.totalCarbsGrams - macros.dietaryFiberGrams) * factor)
  // 1 Unidad de Pan (BU) = 12 g de carbohidratos asimilables
  const breadUnits = Number((digestibleCarbs / 12).toFixed(2))
  return { digestibleCarbs: Number(digestibleCarbs.toFixed(1)), breadUnits }
}
\`\`\`

#### Mecanismo 2: Motor Determinista de Puntuación para 10 Dietas (Traffic-Light Scoring)
En lugar de depender de llamadas lentas a modelos LLM, Unitrition ejecuta una **matriz determinista de reglas clínicas** para 10 planes nutricionales:
- Cada protocolo define umbrales precisos de macronutrientes, carga glucémica y grupos de alimentos restringidos.
- Al seleccionar una dieta y buscar un alimento, el motor calcula al instante una clasificación visual por colores:
  - **Verde (Óptimo)**: Cumple los objetivos de macronutrientes con bajo impacto glucémico.
  - **Ámbar (Moderado / Control de Porción)**: Requiere ajustar gramos según las Unidades de Pan calculadas.
  - **Rojo (Evitar)**: Supera los límites de carbohidratos, sodio o lípidos del protocolo activo.

#### Mecanismo 3: Simulación de Curvas Glucémicas (CGM) y Exportación a PDF
Para visualizar cómo la fibra y la proteína amortiguan la absorción de glucosa frente a los azúcares simples, Unitrition incluye un **Simulador de Respuesta Glucémica**:
- A partir de la proporción de carbohidratos netos, fibra, grasa y proteína de la porción elegida, proyecta la curva glucémica posprandial a 180 minutos.
- El usuario puede exportar su selección y cálculos de Unidades de Pan en un **Informe Nutricional en PDF** listo para imprimir.

#### Mecanismo 4: CMS Editorial Desacoplado con Headless WordPress e ISR
Las guías clínicas y artículos de nutrición se gestionan en WordPress mediante **ACF Pro**:
- Next.js consume la WP REST API y actualiza las páginas estáticas en segundo plano mediante **Incremental Static Regeneration (ISR)**.
- Cada guía inyecta automáticamente marcado **Schema.org (\`Article\`, \`FAQPage\`)** para destacar en buscadores.

---

### 4. Glosario de Ingeniería: Explicación de cada término y mecanismo

- **Arquitectura Headless CMS**:
  - *Qué es*: Separar el panel de administración de contenidos (WordPress) de la interfaz visual pública (Next.js).
  - *Valor*: Los editores conservan su herramienta habitual mientras los usuarios obtienen velocidad instantánea y mayor seguridad al ocultar el panel de administración del tráfico público.
- **Incremental Static Regeneration (ISR)**:
  - *Qué es*: Tecnología de Next.js que regenera páginas estáticas en segundo plano cuando cambia el contenido del CMS sin recompilar todo el portal.
  - *Valor*: Une la velocidad del HTML estático con la actualización continua de un sitio dinámico.
- **Unidad de Pan (BU / Intercambio de Carbohidratos)**:
  - *Qué es*: Medida clínica nutricional (1 BU equivale a 10g-12g de carbohidratos digeribles descontando la fibra) utilizada para controlar la respuesta glucémica.
  - *Valor*: Automatiza el cálculo exacto según el peso de cada porción.
- **Proxy de API en Servidor (Server-Side API Proxy)**:
  - *Qué es*: Un endpoint intermedio en el backend que recibe la petición del navegador, añade las credenciales secretas en el servidor y normaliza los datos externos.
  - *Valor*: Impide el robo de claves API y protege el frontend ante cambios en servicios de terceros.
- **Supabase Row Level Security (RLS)**:
  - *Qué es*: Reglas de seguridad a nivel de fila en PostgreSQL que validan \`auth.uid() = user_id\` en cada operación.
  - *Valor*: Garantiza privacidad absoluta para los perfiles dietéticos de cada usuario.

---

### 5. Arquitectura de Seguridad en Profundidad (Defense-in-Depth)

1. **Separación Zero-Trust entre CMS y Datos de Usuario**: Las cuentas y preferencias dietéticas residen en un clúster aislado de Supabase PostgreSQL con RLS, completamente separadas de WordPress.
2. **Aislamiento de Credenciales en Servidor**: Las claves de la API del USDA nunca se exponen en el código JavaScript del navegador.
3. **Validación y Control de Tasa**: Las búsquedas pasan por debounce y caché en el servidor para evitar abusos de cuota.`}},{slug:`autonomous-hybrid-rag-architecture-browser`,isProjectDeepDive:!0,title:{en:`Autonomous Hybrid RAG Architecture: In-Browser Vector Retrieval, Generative UI & Next.js 16 SSG`,ua:`Автономна архітектура Hybrid RAG: браузерний векторний пошук, Generative UI та Next.js 16 SSG`,es:`Arquitectura de Hybrid RAG autónomo: búsqueda vectorial en cliente, Generative UI y Next.js 16 SSG`},description:{en:`Complete architectural case study of the yusupovartur.com platform: engineering a sub-5ms Hybrid RAG assistant (Okapi BM25 + Damerau-Levenshtein + Cosine Similarity), multi-turn conversational memory, Generative UI tool cards, and 213+ localized Next.js 16 SSG routes with zero vector database fees.`,ua:`Повний архітектурний розбір платформи yusupovartur.com: проєктування Hybrid RAG-асистента за 5 мс (Okapi BM25 + Дамерау-Левенштейн + косинусна подібність), багатоходової пам'яті діалогу, віджетів Generative UI та 213+ статичних маршрутів Next.js 16 без витрат на векторні БД.`,es:`Caso de estudio arquitectónico completo de la plataforma yusupovartur.com: diseño de un asistente Hybrid RAG sub-5ms (Okapi BM25 + Damerau-Levenshtein + similitud coseno), memoria conversacional multiturno, tarjetas Generative UI y más de 213 rutas estáticas en Next.js 16 sin bases vectoriales de pago.`},date:`2026-10-18`,readTime:{en:`12 min read`,ua:`12 хв читання`,es:`12 min de lectura`},category:`ai-engineering`,categoryLabel:{en:`AI Engineering`,ua:`AI-інженерія`,es:`Ingeniería de IA`},tags:[`Hybrid RAG`,`AI Assistant`,`Cosine Similarity`,`Okapi BM25`,`Generative UI`,`Next.js 16`,`Web Performance`],author:{name:`Artur Yusupov`,role:{en:`Fullstack Web Engineer & AI Developer`,ua:`Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-autonomous-hybrid-rag.png`,appliedProjects:[{projectId:29500,slug:`yusupovartur-nextjs-portfolio`,name:`Next.js 16 & Hybrid RAG Portfolio Platform`,note:{en:`Flagship production implementation (yusupovartur.com): 213+ localized SSG routes, sub-5ms Hybrid RAG retrieval across 71 case studies, and interactive Generative UI widgets.`,ua:`Флагманська продакшн-реалізація (yusupovartur.com): 213+ локалізованих SSG-маршрутів, пошук Hybrid RAG за <5 мс по 71 кейсу та інтерактивні віджети Generative UI.`,es:`Implementación principal en producción (yusupovartur.com): más de 213 rutas SSG localizadas, búsqueda Hybrid RAG en <5 ms sobre 71 casos de estudio y widgets Generative UI.`}}],tldr:{en:[`For knowledge bases under 10,000 documents, paying $70-$250/month for cloud vector databases (Pinecone, Weaviate, Qdrant) introduces 150-400ms of network latency and unnecessary operational cost.`,`A hybrid retrieval formula combining Okapi BM25 lexical scoring, Damerau-Levenshtein typo tolerance, and 1536-dimensional cosine similarity achieves 98%+ accuracy in under 5ms.`,`Dual-mode execution streams LLM synthesis from Next.js Route Handlers (/api/chat) while maintaining a 100% deterministic client-side RAG fallback that works offline.`,`Generative UI orchestration dynamically mounts interactive React 19 tools (Project Cards, Stack Comparison Matrix, Timeline & Budget Calculator, Base64 Contact Card) inside the conversation stream.`],ua:[`Для баз знань до 10 000 документів оплата $70-$250/місяць за хмарні векторні бази (Pinecone, Weaviate, Qdrant) створює зайві 150-400 мс мережевої затримки.`,`Гібридна формула пошуку, що поєднує Okapi BM25, стійкість до одруківок Дамерау-Левенштейна та 1536-вимірну косинусну подібність, забезпечує точність 98%+ менш ніж за 5 мс.`,`Дворежимне виконання поєднує серверний стрімінг через Next.js Route Handlers (/api/chat) зі 100% автономним клієнтським RAG-фолбеком, здатним працювати офлайн.`,`Оркестрація Generative UI динамічно вбудовує інтерактивні React 19 віджети (картки проєктів, матрицю порівняння стеків, калькулятор термінів та захищену картку контактів) безпосередньо у потік чату.`],es:[`Para bases de conocimiento de menos de 10.000 documentos, pagar $70-$250/mes por bases vectoriales en la nube (Pinecone, Weaviate, Qdrant) añade entre 150 y 400 ms de latencia de red innecesaria.`,`Una fórmula híbrida que combina Okapi BM25, tolerancia a erratas Damerau-Levenshtein y similitud coseno en 1536 dimensiones logra más del 98% de precisión en menos de 5 ms.`,`La ejecución dual combina streaming desde Next.js Route Handlers (/api/chat) con un motor RAG autónomo en cliente que funciona incluso sin conexión.`,`La orquestación Generative UI monta componentes interactivos de React 19 (tarjetas de proyectos, comparador de stacks, calculadora de plazos y tarjeta de contacto Base64) dentro del chat.`]},content:{en:'### 1. Executive Summary: The Cloud Vector Database Anti-Pattern\n\nOver the past two years, tutorials across the industry have preached a uniform dogma: *To build a RAG chatbot, you must subscribe to Pinecone, Weaviate, or Qdrant, spin up an embedding microservice, and query a remote vector index on every user prompt.*\n\nWhile this architecture is mandatory for enterprise search systems indexing millions of legal files or medical records, **it is complete architectural overkill for engineering portfolios, documentation portals, and SaaS knowledge bases containing under 10,000 documents**.\n\n- **Latency Tax:** Every remote vector lookup introduces **150ms - 400ms** of network roundtrips before LLM token generation even begins.\n- **Cost Tax:** Managed vector databases cost **$70 - $250 / month** in idle base charges.\n- **Single Point of Failure:** If the remote vector DB experiences downtime or API quotas expire, your website assistant breaks completely.\n\nWhen engineering the flagship **Next.js 16 & Hybrid RAG Portfolio Platform (`yusupovartur.com`)**, we designed an **Autonomous Hybrid RAG Engine** that executes both on the Vercel Serverless Edge and directly in the browser, indexing **71 commercial and personal project case studies** and **9 architectural deep-dives** across **3 languages (`EN`, `UA`, `ES`)** in **under 5ms** with **$0/month** in database overhead.\n\n---\n\n### 2. Architecture Decision Records (ADR)\n\n| Architectural Decision | Alternative Considered | Why We Chose This Path (Trade-off Analysis) |\n| :--- | :--- | :--- |\n| **Build-Time In-Memory Index (Okapi BM25 + Pre-Computed Vectors)** | Cloud Vector DB (Pinecone / Qdrant) | Eliminates 150-400ms network roundtrips and $70+/mo recurring bills. The entire 80+ chunk knowledge base compiles into a lazy-loaded Rollup/Webpack chunk (`22.1 KB gzip`). |\n| **Dual-Mode Execution (`/api/chat` Streaming + Autonomous Client Fallback)** | Server-Only LLM Endpoint | On `yusupovartur.com`, Next.js streams responses via `POST /api/chat`. If the network drops, rate limits trigger, or the code runs on a static host, the client seamlessly synthesizes deterministic answers locally with zero error screens. |\n| **7-Intent Deterministic Router (`detectQueryIntent`)** | LLM-Only Tool Calling | Classifies queries into 7 intents (`project-aspect`, `blog`, `service`, `profile`, `contact`, `methodology`, `general`) in **< 0.2ms**, preventing active project context from hijacking general B2B pricing or contact questions. |\n| **In-Chat Generative UI Orchestration** | Plain-Text Markdown Replies | Dynamically renders interactive React 19 components (`ProjectToolCard`, `StackComparisonCard`, `ProjectEstimateCalculatorCard`, `ContactActionCard`) directly inside assistant replies to drive B2B conversion. |\n| **Unified `projectRegistry` Single Source of Truth** | Separate CMS / JSON Duplication | One strongly typed TypeScript registry simultaneously powers Next.js `generateStaticParams` (213+ SSG routes), dynamic `Schema.org` JSON-LD, `llms-full.txt` for external AI crawlers, and the internal RAG knowledge base. |\n\n---\n\n### 3. Core Mechanisms: How the Platform Works Under the Hood\n\n#### Mechanism 1: The Three-Stage Hybrid Scoring Pipeline (Okapi BM25 + Damerau-Levenshtein + Cosine Similarity)\nPure semantic vector search often fails on exact version numbers (`Next.js 16` vs `Next.js 14`) or specific brand names (`IT-Magic`, `Unitrition`, `WPSKILLS`). Conversely, pure keyword matching fails on conceptual prompts like *"How do you optimize mobile loading speed?"*.\n\nOur retriever in `src/lib/ai/rag.ts` combines three mathematical signals for every knowledge chunk `d` and query `Q`:\n\n```ts\nFinalScore(d, Q) = (w_bm25 * BM25(d, Q)) + (w_sem * CosineSimilarity(q, d)) + FieldBoost(d, Q) + ContextBoost(d)\n```\n\n1. **Stage 1 - Trilingual Tokenization, Synonym Expansion & Typo Tolerance:**\n   The query is normalized via `foldForSearch()`, stripped of English, Ukrainian, and Spanish stopwords, and expanded through a bilingual/trilingual domain synonym dictionary (`expandTokens()`). If a token does not match directly, a bounded **Damerau-Levenshtein distance** matrix (`distance <= 1` for short words, `<= 2` for longer technical terms) corrects user typos in real time (e.g., matching `wpskilz` to `wpskills` or `untrition` to `unitrition`).\n2. **Stage 2 - Okapi BM25 Lexical Ranking (`k1 = 1.5, b = 0.75`):**\n   Each chunk is scored using Inverse Document Frequency (`IDF`) weighted by document length normalization against the corpus average length (`avgDocLength`):\n   ```ts\n   const idf = Math.log(1 + (totalDocs - docFreq + 0.5) / (docFreq + 0.5))\n   const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLength / avgDocLength)))\n   bm25Score += idf * tfNorm\n   ```\n3. **Stage 3 - Vectorized Cosine Similarity & Contextual Boost:**\n   Dense float embeddings are compared via normalized dot product (`calculateCosineSimilarity`). If the visitor opened the chat from a specific project page (e.g., `Active Case Study: IT-Magic`), chunks matching `currentProjectSlug` receive a deterministic **+18.0 context boost** when the query intent is `project-aspect` or `general`.\n\n---\n\n#### Mechanism 2: Multi-Turn Conversational Memory & Anti-Repetition State Machine\nA major weakness of stateless RAG bots is losing context on follow-up questions like *"What tech stack was used there?"* or *"And what challenges did you solve?"*, or repeating the exact same overview paragraph three times in a row.\n\nOur engine solves this via a deterministic state machine in `src/lib/ai/rag.ts`:\n1. **Entity Resolution Across Dialogue History (`resolveTargetProject` & `resolveBlogFromQueryOrContext`):**\n   If the current message does not explicitly name a project, the engine scans `options.history` in reverse chronological order to recover the active project or blog article from previous turns, updating the pinned UI context bar automatically.\n2. **Aspect-Specific Extraction (`detectProjectAspects`):**\n   The synthesizer inspects whether the user is asking about **Stack** (`technologies`), **Architecture** (`architecture.rows`), **Challenges & Solutions** (`challenges` / `solutions`), **Metrics** (`detailMetrics`), or **Live Links** (`liveUrl` / `githubUrl`), returning only the requested slice of the case study rather than dumping the entire document.\n3. **Anti-Repetition Guard (`answeredQuestions`):**\n   Every user prompt is recorded in `answeredQuestions`, allowing `getContextualFollowUps()` to dynamically filter out already-asked questions and suggest the next logical engineering question for that specific project.\n\n---\n\n#### Mechanism 3: Generative UI Orchestration Inside the Chat Stream\nRather than returning walls of plain Markdown text, `ChatModal.tsx` evaluates intent detectors alongside the RAG response and mounts interactive React 19 components directly inside the assistant message bubble:\n\n- **`ProjectToolCard` (`getRelevantProjectCards`):** Renders rich visual project cards with WebP thumbnails, category badges, top 4 technology tags, and direct `View Case Study` / `Live Site` links.\n- **`StackComparisonCard` (`isStackComparisonQuery`):** Triggered when a CTO or client asks *"Next.js vs WordPress"* or *"Which stack should I choose?"*. Renders an interactive tab-switching matrix comparing TCO, Time-to-Market, CWV performance, and ideal use cases across Next.js 16, Headless WP, and Custom PHP.\n- **`ProjectEstimateCalculatorCard` (`isEstimateOrCalculatorQuery`):** Triggered on pricing/timeline queries. Lets the user interactively toggle project type, scope, and AI features to calculate real-time delivery phases and week estimates.\n- **`ContactActionCard` (`isHireOrContactQuery`):** Renders a zero-trust contact card that decodes Base64 channels (Email, WhatsApp, Telegram, LinkedIn) only upon explicit user interaction, plus a direct CV PDF download button.\n\n---\n\n#### Mechanism 4: Next.js 16 App Router (213+ SSG Routes) & GEO (`llms.txt`) Synchronization\nBecause this article serves as the architectural case study for **`yusupovartur.com`**, it is important to see how the web platform and the AI engine share a single unified data pipeline:\n\n1. **Static Generation Across 3 Locales (`app/[locale]/projects/[slug]/page.tsx`):**\n   At build time, `generateStaticParams()` iterates over all **71 projects** and **9 blog articles** across `[\'en\', \'ua\', \'es\']`, pre-rendering **240+ static HTML pages** on the Vercel Edge Network with zero runtime database queries.\n2. **Programmatic SEO & Dynamic Schema.org JSON-LD:**\n   Every route automatically generates localized `<title>`, Open Graph metadata, canonical `hreflang` alternates (`en`, `uk`, `es`, `x-default`), and structured JSON-LD graphs (`Person`, `CreativeWork`, `TechArticle`, `BreadcrumbList`).\n3. **Generative Engine Optimization (GEO - `/llms.txt` & `/llms-full.txt`):**\n   To ensure external AI search engines (ChatGPT Search, Perplexity, Claude, Google AI Overviews) cite accurate engineering facts about Artur Yusupov\'s portfolio, the platform exposes structured Markdown context files at the root domain following the 2026 `llms.txt` standard.\n\n---\n\n### 4. Engineering Glossary: Key Terms Explained Simply\n\n- **Hybrid RAG (Retrieval-Augmented Generation):**\n  - *What it is:* Combining exact keyword scoring (Okapi BM25) with mathematical vector embeddings (Cosine Similarity) to retrieve verified project facts before generating an AI answer.\n  - *Why it matters:* Eliminates AI hallucinations and guarantees 100% factual accuracy on project names, metrics, and technology versions.\n- **Okapi BM25 (Best Matching 25):**\n  - *What it is:* A probabilistic information-retrieval ranking formula used by search engines that scores how well a document matches query keywords while penalizing overly common words and normalizing document length.\n  - *Why it matters:* Ensures rare technical tokens like `WPGraphQL`, `useSyncExternalStore`, or `IT-Magic` rank at the top immediately.\n- **Damerau-Levenshtein Distance:**\n  - *What it is:* A string-similarity algorithm that counts the minimum number of insertions, deletions, substitutions, or adjacent character transpositions needed to turn one word into another.\n  - *Why it matters:* Makes both the RAG assistant and the portfolio search bar resilient to human typos without requiring external search servers.\n- **Cosine Similarity:**\n  - *What it is:* A geometric calculation measuring the cosine of the angle between two multi-dimensional vectors to determine semantic closeness regardless of text length.\n  - *Why it matters:* Allows the assistant to understand conceptual intent across English, Ukrainian, and Spanish in under **2ms**.\n- **Generative UI:**\n  - *What it is:* An AI interface pattern where the assistant responds not just with text, but by dynamically rendering interactive UI widgets (calculators, comparison tables, project cards) inside the chat stream.\n  - *Why it matters:* Turns a passive Q&A chatbot into an interactive B2B product discovery and lead-qualification experience.\n\n---\n\n### 5. Defense-in-Depth Security Architecture (`/api/chat` & Client Isolation)\n\nPublishing the full retrieval and synthesis architecture of `yusupovartur.com` is completely safe because security is enforced through strict server and client boundaries rather than obscurity:\n\n1. **Sliding-Window IP Rate Limiting with Bounded LRU Memory (`src/lib/ratelimit.ts`):**\n   The `POST /api/chat` route enforces strict per-IP quotas (**15 requests per hour**) backed by Upstash Redis in production and a bounded 5,000-entry LRU in-memory store that prevents memory-exhaustion DDoS attacks under IP-spoofing floods.\n2. **Prompt Injection Sanitization Shield (`sanitizeUserPrompt`):**\n   All incoming user messages are truncated to safe bounds (`max 600 chars`) and stripped of system-override patterns (`ignore previous instructions`, `system:`, `<|im_start|>`) before reaching the synthesis pipeline.\n3. **Zero-Secret Client Bundle & Autonomous Fallback:**\n   All LLM API keys (`OPENAI_API_KEY`) reside strictly inside Vercel encrypted server environment variables. The browser bundle contains only public portfolio case studies and deterministic math functions.\n4. **Zero-Trust Base64 Contact Obfuscation (`src/utils/contacts.ts`):**\n   Personal email, phone, WhatsApp, and Telegram endpoints are never rendered in plaintext HTML or SSR output; they are decoded from Base64 exclusively on explicit client-side user interaction.',ua:"### 1. Резюме для керівників (Executive Summary): Антипатерн хмарних векторних БД\n\nПротягом останніх двох років індустрія просувала єдину догму: *щоб створити AI-асистента на базі RAG, обов'язково потрібна підписка на Pinecone, Weaviate або Qdrant, окремий мікросервіс ембедингів і мережеві запити на кожне повідомлення користувача.*\n\nДля корпоративних систем із мільйонами юридичних чи медичних документів це виправдано. Проте **для інженерних портфоліо, порталів документації та продуктових баз знань обсягом до 10 000 документів це архітектурний надлишок**:\n\n- **Податок на затримку (Latency Tax):** Кожен мережевий запит до зовнішньої векторної БД додає **150-400 мс** затримки ще до початку генерації відповіді.\n- **Фінансовий податок (Cost Tax):** Керовані векторні бази коштують **$70-$250 на місяць** у базових тарифах просто за зберігання індексу.\n- **Точка відмови (Single Point of Failure):** Якщо зовнішній сервіс недоступний або вичерпано ліміт токенів, асистент на сайті повністю перестає працювати.\n\nПроєктуючи флагманську платформу **Next.js 16 & Hybrid RAG Portfolio Platform (`yusupovartur.com`)**, ми створили **автономний рушій Hybrid RAG**, який працює одночасно на Vercel Edge та безпосередньо в браузері, індексуючи **71 кейс проєктів** та **9 інженерних статей** трьома мовами (`EN`, `UA`, `ES`) **менш ніж за 5 мс** із **нульовими щомісячними витратами на бази даних**.\n\n---\n\n### 2. Ключові архітектурні рішення (ADR)\n\n| Архітектурне рішення | Розглянута альтернатива | Чому обрано цей шлях (Аналіз компромісів) |\n| :--- | :--- | :--- |\n| **In-Memory індекс під час збірки (Okapi BM25 + прекомпільовані вектори)** | Хмарна векторна БД (Pinecone / Qdrant) | Усуває 150-400 мс мережевої затримки та $70+/міс абонплати. Уся база знань (80+ чанків) пакується в лінивий чанк (`22.1 КБ gzip`). |\n| **Дворежимне виконання (`/api/chat` стрімінг + автономний клієнтський фолбек)** | Лише серверний LLM-ендпоінт | На `yusupovartur.com` відповіді стрімляться через `POST /api/chat`. При втраті мережі, перевищенні лімітів або роботі на статичному хостингу клієнт миттєво синтезує точну відповідь локально без екранів помилок. |\n| **Детермінований класифікатор 7 інтентів (`detectQueryIntent`)** | Маршрутизація лише через LLM | Класифікує запит за **< 0.2 мс** у 7 категорій (`project-aspect`, `blog`, `service`, `profile`, `contact`, `methodology`, `general`), щоб активний проєкт не перехоплював загальні питання про ціни чи контакти. |\n| **Оркестрація Generative UI всередині чату** | Звичайні текстові відповіді Markdown | Динамічно монтує інтерактивні React 19 компоненти (`ProjectToolCard`, `StackComparisonCard`, `ProjectEstimateCalculatorCard`, `ContactActionCard`) прямо в повідомлення бота. |\n| **Єдиний реєстр даних `projectRegistry` (Single Source of Truth)** | Дублювання JSON / окрема CMS | Один суворо типізований реєстр TypeScript одночасно живить `generateStaticParams` (240+ SSG-сторінок), мікророзмітку `Schema.org`, файл `llms-full.txt` та внутрішню базу знань RAG. |\n\n---\n\n### 3. Ключові механізми: як платформа працює під капотом\n\n#### Механізм 1: Триетапний гібридний пайплайн ранжування (Okapi BM25 + Дамерау-Левенштейн + Косинусна подібність)\nЧистий векторний пошук часто помиляється на точних назвах версій (`Next.js 16` проти `Next.js 14`) або власних назвах продуктів (`IT-Magic`, `Unitrition`, `WPSKILLS`). І навпаки, звичайний пошук за підрядком не розуміє концептуальних питань на кшталт *«Як ви оптимізуєте швидкість завантаження на мобільних?»*.\n\nНаш ретривер у `src/lib/ai/rag.ts` поєднує три математичні сигнали для кожного документа `d` та запиту `Q`:\n\n```ts\nFinalScore(d, Q) = (w_bm25 * BM25(d, Q)) + (w_sem * CosineSimilarity(q, d)) + FieldBoost(d, Q) + ContextBoost(d)\n```\n\n1. **Етап 1 - Тримовна токенізація, словник синонімів та виправлення одруківок:**\n   Запит нормалізується через `foldForSearch()`, очищується від стоп-слів англійської, української та іспанської мов і розширюється через граф доменних синонімів (`expandTokens()`). Якщо токен не знайдено напряму, алгоритм **відстані Дамерау-Левенштейна** (`distance <= 1` для коротких слів, `<= 2` для довших термінів) виправляє друкарські помилки на льоту (наприклад, зіставляє `wpskilz` із `wpskills`).\n2. **Етап 2 - Лексичне ранжування Okapi BM25 (`k1 = 1.5, b = 0.75`):**\n   Кожен фрагмент оцінюється за зворотною частотою документа (`IDF`) із нормалізацією довжини тексту відносно середньої довжини по базі (`avgDocLength`):\n   ```ts\n   const idf = Math.log(1 + (totalDocs - docFreq + 0.5) / (docFreq + 0.5))\n   const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLength / avgDocLength)))\n   bm25Score += idf * tfNorm\n   ```\n3. **Етап 3 - Косинусна подібність векторів та контекстний бустинг:**\n   Багатовимірні вектори порівнюються через нормалізований скалярний добуток (`calculateCosineSimilarity`). Якщо відвідувач відкрив чат зі сторінки конкретного проєкту (`Active Case Study: IT-Magic`), чанки з `currentProjectSlug` отримують детермінований бонус **+18.0** для прицільної точності відповіді.\n\n---\n\n#### Механізм 2: Багатоходова пам'ять діалогу та захист від повторів (Conversational State Machine)\nТипова проблема простих RAG-ботів - втрата контексту на уточнюючих питаннях (*«А який там був стек?»*, *«Які виклики вирішили?»*) або повторення одного й того самого оглядового абзацу.\n\nУ `src/lib/ai/rag.ts` реалізовано детермінований кінцевий автомат діалогу:\n1. **Відновлення сутності з історії діалогу (`resolveTargetProject` та `resolveBlogFromQueryOrContext`):**\n   Якщо поточна репліка не містить назви проєкту, рушій сканує `options.history` у зворотному хронологічному порядку, знаходить активний проєкт або статтю блогу з попередніх повідомлень і автоматично закріплює їх у верхній плашці контексту.\n2. **Аспектна декомпозиція кейсу (`detectProjectAspects`):**\n   Синтезатор визначає, який саме зріз проєкту цікавить користувача: **Стек** (`technologies`), **Архітектура** (`architecture.rows`), **Виклики та рішення** (`challenges` / `solutions`), **Метрики** (`detailMetrics`) чи **Посилання** (`liveUrl` / `githubUrl`), і видає саме потрібну інженерну секцію.\n3. **Захист від повторів (`answeredQuestions`):**\n   Усі поставлені питання фіксуються в `answeredQuestions`, завдяки чому `getContextualFollowUps()` динамічно пропонує лише нові, ще не розглянуті аспекти проєкту.\n\n---\n\n#### Механізм 3: Оркестрація Generative UI всередині потоку чату\nЗамість того щоб повертати лише суцільний текст, `ChatModal.tsx` аналізує інтент запиту паралельно з відповіддю RAG і вбудовує живі інтерактивні компоненти React 19 прямо всередину бульбашки повідомлення асистента:\n\n- **`ProjectToolCard` (`getRelevantProjectCards`):** Візуальні картки знайдених кейсів із WebP-прев'ю, категорією, топ-4 технологіями та кнопками переходу до повного кейсу або живого сайту.\n- **`StackComparisonCard` (`isStackComparisonQuery`):** Активується при запитах *«Next.js чи WordPress»* або *«Який стек обрати?»*. Відображає інтерактивну таблицю з перемиканням вкладок (TCO, швидкість запуску, Core Web Vitals, сценарії використання) для Next.js 16, Headless WP та Custom PHP.\n- **`ProjectEstimateCalculatorCard` (`isEstimateOrCalculatorQuery`):** Інтерактивний калькулятор термінів та фаз розробки, де клієнт може прямо в чаті змінювати тип продукту, масштаб і наявність AI-модулів.\n- **`ContactActionCard` (`isHireOrContactQuery`):** Картка прямого зв'язку з клієнтським розшифруванням Base64-контактів (Email, WhatsApp, Telegram, LinkedIn) та завантаженням CV у PDF.\n\n---\n\n#### Механізм 4: Синхронізація з Next.js 16 App Router (213+ SSG-маршрутів) та GEO (`llms.txt`)\nОскільки ця стаття є головним архітектурним розбором платформи **`yusupovartur.com`**, важливо показати, як веб-платформа та AI-асистент працюють від єдиного джерела даних:\n\n1. **Статична генерація трьома мовами (`app/[locale]/projects/[slug]/page.tsx`):**\n   Під час збірки `generateStaticParams()` обходить усі **71 проєкт** та **9 статей блогу** для локалей `['en', 'ua', 'es']`, попередньо генеруючи **понад 240 статичних HTML-сторінок** на Vercel Edge Network.\n2. **Програмне SEO та динамічна розмітка Schema.org JSON-LD:**\n   Кожен маршрут автоматично формує локалізовані мета-теги, канонічні `hreflang`-посилання та граф JSON-LD (`Person`, `CreativeWork`, `TechArticle`, `BreadcrumbList`).\n3. **Generative Engine Optimization (GEO - `/llms.txt` та `/llms-full.txt`):**\n   Для того щоб зовнішні нейропошуковики (ChatGPT Search, Perplexity, Claude, Google AI Overviews) цитували точні інженерні факти про портфоліо Артура Юсупова, у корені домену опубліковані структуровані файли за стандартом `llms.txt` 2026 року.\n\n---\n\n### 4. Інженерний глосарій: пояснення кожного терміна простими словами\n\n- **Hybrid RAG (Retrieval-Augmented Generation):**\n  - *Що це:* Поєднання точного ключового пошуку (Okapi BM25) із семантичним пошуком за векторними ембедингами (Cosine Similarity) перед формуванням відповіді AI.\n  - *Чому це важливо:* Повністю виключає галюцинації та гарантує 100% точність у назвах проєктів, метриках і версіях технологій.\n- **Okapi BM25 (Best Matching 25):**\n  - *Що це:* Ймовірнісна формула ранжування пошукових систем, яка оцінює релевантність документа за частотою рідкісних ключових слів із поправкою на довжину тексту.\n  - *Чому це важливо:* Гарантує, що специфічні терміни (`WPGraphQL`, `useSyncExternalStore`, `IT-Magic`) миттєво піднімають потрібний кейс на перше місце.\n- **Відстань Дамерау-Левенштейна (Damerau-Levenshtein Distance):**\n  - *Що це:* Алгоритм вимірювання схожості рядків, який рахує мінімальну кількість вставок, видалень, замін або переставлень сусідніх символів для перетворення одного слова на інше.\n  - *Чому це важливо:* Забезпечує стійкість пошуку та AI-асистента до людських одруківок без сторонніх серверів.\n- **Косинусна подібність (Cosine Similarity):**\n  - *Що це:* Математичне обчислення косинуса кута між двома багатовимірними векторами для вимірювання близькості змісту незалежно від довжини тексту.\n  - *Чому це важливо:* Дозволяє асистенту розуміти суть запитання англійською, українською та іспанською мовами менш ніж за **2 мс**.\n- **Generative UI:**\n  - *Що це:* Патерн проєктування AI-інтерфейсів, де асистент відповідає не лише текстом, а й динамічним рендерингом інтерактивних віджетів (калькуляторів, таблиць порівняння, карток проєктів) прямо в діалозі.\n  - *Чому це важливо:* Перетворює чат-бота на повноцінний інструмент B2B-конверсії та кваліфікації замовлень.\n\n---\n\n### 5. Ешелонована архітектура безпеки (Defense-in-Depth)\n\nПублікація повного розбору архітектури `yusupovartur.com` є абсолютно безпечною, оскільки захист базується на суворих серверних і клієнтських бар'єрах, а не на приховуванні назв технологій:\n\n1. **IP Rate Limiter із обмеженим LRU-кешем пам'яті (`src/lib/ratelimit.ts`):**\n   Ендпоінт `POST /api/chat` обмежує частоту запитів (**15 запитів на годину з одного IP**) через Upstash Redis у продакшені та in-memory LRU-сховище з жорстким лімітом у 5 000 записів, що унеможливлює переповнення оперативної пам'яті під час бот-атак.\n2. **Екран санітизації Prompt Injection (`sanitizeUserPrompt`):**\n   Усі вхідні повідомлення обмежуються за довжиною (`до 600 символів`) та очищуються від інструкцій перезапису системного промпту (`ignore previous instructions`, `system:`, `<|im_start|>`).\n3. **Відсутність секретів у клієнтському бандлі та автономний фолбек:**\n   Ключі API (`OPENAI_API_KEY`) зберігаються виключно в зашифрованих серверних змінних оточення Vercel. Браузер отримує лише публічні кейси портфоліо та математичні функції ранжування.\n4. **Zero-Trust обфускація контактів у Base64 (`src/utils/contacts.ts`):**\n   Особистий email, телефон, WhatsApp та Telegram ніколи не рендеряться у відкритому HTML або SSR-відповіді - вони декодуються з Base64 виключно під час явної дії користувача в браузері.",es:"### 1. Resumen Ejecutivo (Executive Summary): El Antipatrón de las Bases Vectoriales en la Nube\n\nDurante los últimos dos años se ha repetido un dogma uniforme en la industria: *para crear un asistente con RAG necesitas contratar Pinecone, Weaviate o Qdrant, desplegar microservicios de embeddings y realizar peticiones remotas ante cada consulta del usuario.*\n\nPara sistemas corporativos con millones de archivos legales o médicos esto es imprescindible. Sin embargo, **para portfolios de ingeniería, portales de documentación y bases de conocimiento SaaS de menos de 10.000 documentos, supone una sobreingeniería costosa**:\n\n- **Impuesto de Latencia (Latency Tax):** Cada consulta remota añade entre **150 ms y 400 ms** de ida y vuelta de red antes de que comience la generación de respuesta.\n- **Impuesto de Coste (Cost Tax):** Las bases vectoriales gestionadas cuestan entre **$70 y $250 al mes** en tarifas base inactivas.\n- **Punto Único de Fallo:** Si el servicio externo sufre una caída o se agota la cuota, el asistente web deja de funcionar por completo.\n\nAl diseñar la plataforma insignia **Next.js 16 & Hybrid RAG Portfolio Platform (`yusupovartur.com`)**, construimos un **Motor Autónomo de Hybrid RAG** que opera tanto en Vercel Serverless Edge como directamente en el navegador, indexando **71 casos de estudio de proyectos** y **9 análisis de arquitectura** en **3 idiomas (`EN`, `UA`, `ES`)** en **menos de 5 ms** y con **$0/mes** en costes de bases de datos.\n\n---\n\n### 2. Registro de Decisiones de Arquitectura (ADR)\n\n| Decisión Arquitectónica | Alternativa Evaluada | Justificación Técnica (Análisis de Compromisos) |\n| :--- | :--- | :--- |\n| **Índice en Memoria en Compilación (Okapi BM25 + Vectores Precalculados)** | Base Vectorial Cloud (Pinecone / Qdrant) | Elimina 150-400 ms de latencia de red y $70+/mes de coste fijo. Toda la base de conocimiento (80+ fragmentos) se empaqueta en un chunk diferido (`22.1 KB gzip`). |\n| **Ejecución Dual (Streaming `/api/chat` + Fallback Autónomo en Cliente)** | Endpoint LLM Exclusivo en Servidor | En `yusupovartur.com`, Next.js transmite respuestas vía `POST /api/chat`. Si falla la red, se activa el límite de tasa o se ejecuta en hosting estático, el cliente sintetiza respuestas deterministas localmente sin pantallas de error. |\n| **Enrutador Determinista de 7 Intenciones (`detectQueryIntent`)** | Clasificación Exclusiva por LLM | Clasifica cada consulta en **< 0.2 ms** en 7 intenciones (`project-aspect`, `blog`, `service`, `profile`, `contact`, `methodology`, `general`), evitando que el contexto de un proyecto secuestre preguntas sobre tarifas o contacto. |\n| **Orquestación Generative UI en el Chat** | Respuestas de Texto Plano Markdown | Monta dinámicamente componentes interactivos de React 19 (`ProjectToolCard`, `StackComparisonCard`, `ProjectEstimateCalculatorCard`, `ContactActionCard`) dentro del flujo de conversación. |\n| **Registro Único `projectRegistry` (Single Source of Truth)** | Duplicación JSON / CMS Separado | Un único registro tipado en TypeScript alimenta simultáneamente `generateStaticParams` (240+ rutas SSG), `Schema.org` JSON-LD, `llms-full.txt` para rastreadores de IA y el motor interno RAG. |\n\n---\n\n### 3. Mecanismos Principales: Cómo Funciona la Plataforma Bajo el Capó\n\n#### Mecanismo 1: Pipeline de Puntuación Híbrida en Tres Fases (Okapi BM25 + Damerau-Levenshtein + Similitud Coseno)\nLa búsqueda vectorial pura suele fallar ante versiones exactas (`Next.js 16` frente a `Next.js 14`) o nombres propios de proyectos (`IT-Magic`, `Unitrition`, `WPSKILLS`). Por el contrario, la búsqueda por palabras clave no comprende preguntas conceptuales como *«¿Cómo optimizas la velocidad de carga en móviles?»*.\n\nNuestro motor en `src/lib/ai/rag.ts` combina tres señales matemáticas para cada fragmento `d` y consulta `Q`:\n\n```ts\nFinalScore(d, Q) = (w_bm25 * BM25(d, Q)) + (w_sem * CosineSimilarity(q, d)) + FieldBoost(d, Q) + ContextBoost(d)\n```\n\n1. **Fase 1 - Tokenización Trilingüe, Expansión de Sinónimos y Tolerancia a Erratas:**\n   La consulta se normaliza mediante `foldForSearch()`, se eliminan las palabras vacías en inglés, ucraniano y español y se expande con un diccionario de sinónimos técnicos (`expandTokens()`). Si un término no coincide directamente, una matriz acotada de **distancia Damerau-Levenshtein** (`distance <= 1` para palabras cortas, `<= 2` para términos largos) corrige erratas en tiempo real (por ejemplo, vinculando `wpskilz` con `wpskills`).\n2. **Fase 2 - Ranking Léxico Okapi BM25 (`k1 = 1.5, b = 0.75`):**\n   Cada documento se evalúa mediante Frecuencia Inversa de Documento (`IDF`) normalizada según la longitud del texto respecto a la media del corpus (`avgDocLength`):\n   ```ts\n   const idf = Math.log(1 + (totalDocs - docFreq + 0.5) / (docFreq + 0.5))\n   const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLength / avgDocLength)))\n   bm25Score += idf * tfNorm\n   ```\n3. **Fase 3 - Similitud Coseno Vectorizada e Impulso Contextual:**\n   Los vectores numéricos se comparan mediante producto escalar normalizado (`calculateCosineSimilarity`). Si el visitante abre el asistente desde la página de un proyecto (`Active Case Study: IT-Magic`), los fragmentos con `currentProjectSlug` reciben una bonificación determinista de **+18.0** puntos.\n\n---\n\n#### Mecanismo 2: Memoria Conversacional Multiturno y Máquina de Estados Antirrepetición\nUna limitación clásica de los chatbots RAG sin estado es perder el contexto ante preguntas de seguimiento (*«¿Y qué stack se usó ahí?»*, *«¿Qué retos resolvisteis?»*) o repetir el mismo párrafo introductorio una y otra vez.\n\nNuestro motor en `src/lib/ai/rag.ts` resuelve esto mediante una máquina de estados determinista:\n1. **Resolución de Entidades en el Historial (`resolveTargetProject` y `resolveBlogFromQueryOrContext`):**\n   Si el mensaje actual no menciona explícitamente un proyecto, el motor inspecciona `options.history` en orden cronológico inverso para recuperar el proyecto o artículo activo de turnos anteriores y actualiza automáticamente la barra superior de contexto.\n2. **Extracción por Aspectos (`detectProjectAspects`):**\n   El sintetizador detecta si el usuario pregunta por el **Stack** (`technologies`), **Arquitectura** (`architecture.rows`), **Retos y Soluciones** (`challenges` / `solutions`), **Métricas** (`detailMetrics`) o **Enlaces** (`liveUrl` / `githubUrl`), devolviendo únicamente la sección técnica solicitada.\n3. **Filtro Antirrepetición (`answeredQuestions`):**\n   Cada consulta realizada se registra en `answeredQuestions`, permitiendo a `getContextualFollowUps()` filtrar preguntas ya respondidas y sugerir el siguiente paso lógico de exploración.\n\n---\n\n#### Mecanismo 3: Orquestación Generative UI Dentro del Flujo de Chat\nEn lugar de devolver únicamente bloques de texto plano, `ChatModal.tsx` evalúa detectores de intención junto con la respuesta RAG y monta componentes interactivos de React 19 dentro del mensaje del asistente:\n\n- **`ProjectToolCard` (`getRelevantProjectCards`):** Tarjetas visuales de casos de estudio con miniaturas WebP, insignias de categoría, top 4 tecnologías y enlaces directos al caso de estudio o sitio en vivo.\n- **`StackComparisonCard` (`isStackComparisonQuery`):** Se activa ante consultas como *«Next.js vs WordPress»* o *«¿Qué arquitectura elegir?»*. Renderiza una matriz interactiva por pestañas comparando TCO, Time-to-Market, Core Web Vitals y casos de uso ideales entre Next.js 16, Headless WP y Custom PHP.\n- **`ProjectEstimateCalculatorCard` (`isEstimateOrCalculatorQuery`):** Calculadora interactiva en tiempo real donde el cliente puede ajustar tipo de proyecto, alcance y módulos de IA para estimar fases y semanas de entrega.\n- **`ContactActionCard` (`isHireOrContactQuery`):** Tarjeta de contacto Zero-Trust que decodifica canales en Base64 (Email, WhatsApp, Telegram, LinkedIn) solo tras la interacción explícita del usuario, junto con descarga directa del CV en PDF.\n\n---\n\n#### Mecanismo 4: Sincronización con Next.js 16 App Router (213+ Rutas SSG) y GEO (`llms.txt`)\nDado que este artículo constituye el caso de estudio arquitectónico de **`yusupovartur.com`**, muestra cómo la plataforma web y el motor de IA comparten un único pipeline de datos:\n\n1. **Generación Estática en 3 Idiomas (`app/[locale]/projects/[slug]/page.tsx`):**\n   Durante la compilación, `generateStaticParams()` recorre los **71 proyectos** y **9 artículos del blog** en `['en', 'ua', 'es']`, pre-renderizando **más de 240 páginas HTML estáticas** en Vercel Edge Network.\n2. **SEO Programático y Datos Estructurados Schema.org JSON-LD:**\n   Cada ruta genera metadatos localizados, enlaces canónicos `hreflang` (`en`, `uk`, `es`, `x-default`) y grafos JSON-LD (`Person`, `CreativeWork`, `TechArticle`, `BreadcrumbList`).\n3. **Generative Engine Optimization (GEO - `/llms.txt` y `/llms-full.txt`):**\n   Para garantizar que motores de búsqueda generativos externos (ChatGPT Search, Perplexity, Claude, Google AI Overviews) citen datos verificados sobre el portfolio de Artur Yusupov, la raíz del dominio publica archivos Markdown estructurados bajo el estándar `llms.txt` 2026.\n\n---\n\n### 4. Glosario de Ingeniería: Explicación Clara de Cada Término\n\n- **Hybrid RAG (Generación Aumentada por Recuperación Híbrida):**\n  - *Qué es:* Combinar puntuación léxica exacta (Okapi BM25) con búsqueda semántica vectorial (Similitud Coseno) antes de sintetizar la respuesta de IA.\n  - *Valor:* Elimina alucinaciones y garantiza precisión absoluta en nombres de tecnologías, métricas y casos de estudio.\n- **Okapi BM25 (Best Matching 25):**\n  - *Qué es:* Fórmula probabilística de motores de búsqueda que puntúa la relevancia de un documento según la frecuencia de términos poco comunes, normalizando la longitud del documento.\n  - *Valor:* Asegura que tokens técnicos específicos como `WPGraphQL`, `useSyncExternalStore` o `IT-Magic` posicionen el proyecto exacto en primer lugar.\n- **Distancia Damerau-Levenshtein:**\n  - *Qué es:* Algoritmo que calcula el número mínimo de inserciones, eliminaciones, sustituciones o transposiciones de caracteres adyacentes necesarias para transformar una palabra en otra.\n  - *Valor:* Otorga tolerancia instantánea a errores tipográficos tanto en el asistente RAG como en el buscador del portfolio.\n- **Similitud Coseno (Cosine Similarity):**\n  - *Qué es:* Cálculo matemático del coseno del ángulo entre dos vectores multidimensionales para medir la proximidad semántica en menos de **2 ms**.\n  - *Valor:* Permite comprender la intención conceptual del usuario en inglés, ucraniano y español.\n- **Generative UI:**\n  - *Qué es:* Patrón de interfaz donde el asistente responde renderizando componentes interactivos (calculadoras, comparadores de stacks, tarjetas de proyectos) dentro del flujo de chat.\n  - *Valor:* Convierte un chatbot informativo en una herramienta interactiva de conversión B2B.\n\n---\n\n### 5. Arquitectura de Seguridad en Profundidad (Defense-in-Depth)\n\nPublicar el desglose arquitectónico completo de `yusupovartur.com` es totalmente seguro porque la protección se basa en controles criptográficos y de servidor, no en ocultar nombres de tecnologías:\n\n1. **Limitador de Tasa por IP con Caché LRU Acotada (`src/lib/ratelimit.ts`):**\n   El endpoint `POST /api/chat` aplica cuotas estrictas por IP (**15 peticiones por hora**) respaldadas por Upstash Redis en producción y una caché LRU en memoria limitada a 5.000 entradas para evitar agotamiento de RAM ante ataques de inundación.\n2. **Escudo contra Prompt Injection (`sanitizeUserPrompt`):**\n   Todos los mensajes entrantes se acotan en longitud (`máx. 600 caracteres`) y se limpian de patrones de suplantación de instrucciones del sistema (`ignore previous instructions`, `system:`, `<|im_start|>`).\n3. **Ausencia de Secretos en Cliente y Fallback Autónomo:**\n   Las claves de API (`OPENAI_API_KEY`) residen exclusivamente en variables de entorno cifradas de Vercel. El bundle del navegador solo contiene casos de estudio públicos y funciones matemáticas deterministas.\n4. **Ofuscación Zero-Trust en Base64 (`src/utils/contacts.ts`):**\n   El correo electrónico, teléfono, WhatsApp y Telegram nunca se incluyen en texto plano en el HTML ni en el SSR; se decodifican desde Base64 únicamente tras la interacción explícita del usuario en el cliente."}},{slug:`sub-second-cwv-bundle-optimization`,isProjectDeepDive:!0,title:{en:`Sub-Second Core Web Vitals: Reducing Bundle Size, Asset Pipelines & Modern Hydration Strategies (2026)`,ua:`Субсекундні показники Core Web Vitals: оптимізація бандлу, медіа-пайплайни та сучасна гідратація (2026)`,es:`Core Web Vitals subsegundo: Reducción del bundle, pipeline de assets y estrategias modernas de hidratación (2026)`},description:{en:`A comprehensive engineering guide on achieving sub-second Largest Contentful Paint (LCP < 1.0s), zero Layout Shift (CLS = 0), and 98+ PageSpeed scores in high-traffic applications using Rollup chunk splitting, WebP pipelines, and delayed non-critical hydration.`,ua:`Вичерпний інженерний посібник із досягнення LCP < 1.0с, нульового зсуву CLS та 98+ PageSpeed у навантажених додатках завдяки розділенню чанків у Rollup, WebP-конвертації та відкладеній гідратації.`,es:`Guía técnica exhaustiva para lograr Largest Contentful Paint subsegundo (LCP < 1.0s), cero CLS y más de 98 en PageSpeed mediante división de chunks en Rollup, pipeline WebP e hidratación diferida.`},date:`2026-10-19`,readTime:{en:`7 min read`,ua:`7 хв читання`,es:`7 min de lectura`},category:`performance-cwv`,categoryLabel:{en:`Performance & Core Web Vitals`,ua:`Продуктивність та Core Web Vitals`,es:`Rendimiento y Core Web Vitals`},tags:[`Core Web Vitals`,`Performance`,`Bundle Size`,`Vite`,`Next.js`,`WebP`,`Hydration`],author:{name:`Artur Yusupov`,role:{en:`Senior Fullstack Web Engineer & AI Developer`,ua:`Senior Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack Senior y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-sub-second-cwv.svg`,appliedProjects:[{projectId:3950,slug:`webart-react-portfolio`,name:`WebArt React Portfolio SPA`,note:{en:`Reference Vite + React 19 SPA implementation with Rollup vendor chunk isolation, zero-CLS responsive containers, and Base64 contact obfuscation.`,ua:`Еталонна реалізація Vite + React 19 SPA з ізоляцією вендорних чанків у Rollup, контейнерами без CLS та Base64-обфускацією контактів.`,es:`Implementación de referencia SPA con Vite + React 19, aislamiento de chunks vendor en Rollup, contenedores sin CLS y ofuscación de contacto Base64.`}},{projectId:29e3,slug:`unitrition`,name:`Unitrition E-Commerce Platform`,note:{en:`Achieved 0.3s First Contentful Paint and 99 PageSpeed on mobile using route prefetching and lean component lazy-loading.`,ua:`Досягнуто 0.3с First Contentful Paint та 99 PageSpeed на мобільних пристроях завдяки префетчингу та ледачому завантаженню компонентів.`,es:`Se alcanzó un FCP de 0.3s y 99 en PageSpeed móvil gracias a precarga de rutas y lazy loading de componentes.`}},{projectId:19500,slug:`it-magic`,name:`IT-Magic AWS Migration & Cloud Architecture`,note:{en:`Eliminated render-blocking CSS/JS assets, slashing TTFB by 64% and keeping Cumulative Layout Shift at 0.00.`,ua:`Усунено блокуючі рендеринг CSS/JS ресурси, скорочено TTFB на 64% та зафіксовано CLS на рівні 0.00.`,es:`Se eliminaron recursos bloqueantes de renderizado, reduciendo el TTFB en un 64% y manteniendo el CLS en 0.00.`}},{projectId:1e3,slug:`911mg`,name:`911 Auto Group Fleet & Service Portal`,note:{en:`Converted dynamic image catalogs to WebP with responsive srcset, cutting payload sizes by 4.2 MB per initial pageview.`,ua:`Переведено динамічний каталог автопарку на WebP з адаптивними srcset, зменшивши початковий трафік на 4.2 МБ.`,es:`Conversión de catálogos dinámicos a WebP con srcset adaptable, ahorrando 4.2 MB en la carga inicial.`}}],tldr:{en:[`Initial JavaScript payload must remain under 150 KB gzip to guarantee sub-second execution on mid-tier mobile hardware.`,`Manual chunk splitting with fine-grained vendor segregation isolates vendor dependencies from rapid application code changes, maximizing HTTP cache hits.`,`Cumulative Layout Shift (CLS) is eliminated by enforcing strict aspect-ratio containers and reserving layout space for dynamic assets before DOM insertion.`,`Non-critical UI widgets (chatbots, modals, feedback forms) should always hydrate after idle or user interaction via requestIdleCallback.`],ua:[`Початковий обсяг JavaScript має залишатися до 150 КБ gzip для гарантії субсекундного виконання на мобільних пристроях середнього сегмента.`,`Розділення чанків у збирачі з ізоляцією бібліотек захищає кеш браузера від частих змін прикладного коду.`,`Cumulative Layout Shift (CLS) повністю виключається завдяки жорстким контейнерам з aspect-ratio та резервуванню простору до рендерингу.`,`Непершочергові віджети (чат-боти, модальні вікна) мають гідратуватися виключно після події idle або дій користувача.`],es:[`El payload inicial de JavaScript debe mantenerse por debajo de 150 KB gzip para asegurar una ejecución subsegundo en dispositivos móviles.`,`La separación precisa de dependencias en chunks independientes maximiza la tasa de acierto del almacenamiento en caché HTTP.`,`El Cumulative Layout Shift (CLS) se elimina reservando espacio con aspect-ratio estricto antes de renderizar elementos dinámicos.`,`Los módulos secundarios (asistentes de chat, modales) deben hidratarse únicamente tras la interacción o mediante requestIdleCallback.`]},content:{en:`### The Cost of Client-Side Bloat

Modern Single Page Applications and SSR frameworks frequently ship excessive JavaScript bundles that exhaust the single thread on mobile CPUs. Long Main Thread tasks delay First Input Delay (FID) and Interaction to Next Paint (INP), leading to measurable drop-offs in commercial conversion rates.

To achieve consistent 98+ Google Lighthouse scores across production workloads, three fundamental architectural pillars must be enforced:

1. Deterministic manual chunking in the build pipeline
2. Asset-level bandwidth quotas with automated WebP pipelines
3. Deferred hydration of secondary UI surfaces

---

### Step 1: Deterministic Vendor Chunk Segregation

When modern bundlers pack all third-party libraries into a monolithic vendor bundle, any minor change in your application invalidates the entire cache chunk for all returning visitors.

Configuring fine-grained Rollup manual chunks creates durable cache boundaries:

\`\`\`typescript
// vite.config.ts / rollup.config.ts
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion'
            }
            return 'vendor-misc'
          }
        },
      },
    },
  },
})
\`\`\`

---

### Step 2: Zero-Layout-Shift Media Containers

Cumulative Layout Shift often occurs when high-resolution hero images or asynchronous embeds render without intrinsic dimension ratios. Reserving exact bounding boxes prevents the browser layout engine from triggering costly re-flows:

\`\`\`html
<!-- Anti-CLS Responsive Container -->
<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900">
  <picture>
    <source srcset="/images/hero-1200.webp" type="image/webp" media="(min-width: 1024px)" />
    <source srcset="/images/hero-768.webp" type="image/webp" media="(min-width: 640px)" />
    <img
      src="/images/hero-fallback.jpg"
      alt="Engineering Dashboard"
      width="1200"
      height="675"
      loading="eager"
      fetchpriority="high"
      class="w-full h-full object-cover"
    />
  </picture>
</div>
\`\`\`

---

### Step 3: Progressive & Idle-Time Hydration

An enterprise landing page does not require an AI chatbot, interactive code playgrounds, or feedback modals to hydrate during initial paint. Moving these components to dynamic imports triggered by \`requestIdleCallback\` saves over 180ms of main thread execution during First Contentful Paint:

\`\`\`typescript
import { lazy, useState, useEffect } from 'react'

const LazyInteractiveChat = lazy(() => import('./ChatModal'))

export function ChatTrigger() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(handle)
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldLoad) return null
  return <LazyInteractiveChat />
}
\`\`\`

---

### Key Production Telemetry

- **First Contentful Paint (FCP):** reduced from 1.6s to 0.3s across tested 4G mobile profiles.
- **Largest Contentful Paint (LCP):** consistently maintained under 0.9s on static SSG edges.
- **Cumulative Layout Shift (CLS):** 0.00 across all responsive breakpoints.
- **Total Blocking Time (TBT):** dropped below 40ms, providing instantaneous touch responsiveness.

---

### Step 4: Engineering Glossary & Client-Side Security

- **Tree-Shaking:** Static dead-code elimination performed by Rollup/Vite using ES module import/export graph analysis so unused icon or utility functions are excluded from production bundles.
- **Manual Chunk Splitting (\`manualChunks\`):** Separating stable third-party dependencies (\`react\`, \`lucide-react\`) from rapidly changing application code so returning visitors retain cached vendor bundles across deployments.
- **Deferred Hydration (\`requestIdleCallback\`):** Postponing the execution and attachment of non-critical interactive widgets (such as modal drawers or chat assistants) until the browser main thread is idle.
- **Client-Side Base64 Obfuscation (\`atob\`):** Storing sensitive contact endpoints (email, phone, Telegram) as Base64-encoded strings in the static bundle and decoding them only upon explicit user interaction or runtime mount to prevent automated spambot harvesting.`,ua:`### Ціна перевантаженого клієнтського коду

Сучасні веб-додатки часто надсилають надлишковий обсяг JavaScript, який перевантажує процесори мобільних пристроїв. Тривалі завдання головного потоку затримують реакцію на дотик користувача (INP), що напряму знижує конверсію та позиції в пошуковій видачі.

Для стабільних 98+ балів у Google Lighthouse необхідні три архітектурні принципи:

1. Детерміноване розділення чанків у конфігурації збирача
2. Автоматизований пайплайн зображень у форматі WebP
3. Відкладена гідратація другорядних елементів інтерфейсу

---

### Крок 1: Ізоляція вендорних залежностей у Rollup

Коли всі сторонні пакети збираються в один монолітний файл vendor.js, будь-яка правка в коді змушує клієнта повторно завантажувати всі бібліотеки.

Налаштування точкового розподілу чанків вирішує цю проблему:

\`\`\`typescript
// vite.config.ts / rollup.config.ts
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            return 'vendor-misc'
          }
        },
      },
    },
  },
})
\`\`\`

---

### Крок 2: Запобігання зсувам макета (CLS)

Зсуви макета виникають, коли зображення або банери завантажуються без заздалегідь зарезервованого місця. Використання контейнерів із фіксованим співвідношенням сторін aspect-ratio гарантує повну відсутність стрибків:

\`\`\`html
<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900">
  <picture>
    <source srcset="/images/hero-1200.webp" type="image/webp" media="(min-width: 1024px)" />
    <img
      src="/images/hero-fallback.jpg"
      alt="Інженерний дашборд"
      width="1200"
      height="675"
      loading="eager"
      fetchpriority="high"
      class="w-full h-full object-cover"
    />
  </picture>
</div>
\`\`\`

---

### Крок 3: Відкладене завантаження некритичного функціоналу

Чат-боти, контактні форми та діалогові вікна не потрібні під час першого відображення сторінки. Їх відкладена ініціалізація через \`requestIdleCallback\` звільняє понад 180 мс головного потоку процесора:

\`\`\`typescript
import { lazy, useState, useEffect } from 'react'

const LazyInteractiveChat = lazy(() => import('./ChatModal'))

export function ChatTrigger() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(handle)
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldLoad) return null
  return <LazyInteractiveChat />
}
\`\`\`

---

### Результати в продакшені

- **First Contentful Paint (FCP):** зменшено з 1.6с до 0.3с на мобільних пристроях.
- **Largest Contentful Paint (LCP):** стабільно до 0.9с на статичних сторінках.
- **Cumulative Layout Shift (CLS):** 0.00 на всіх типах екранів.
- **Total Blocking Time (TBT):** знижено до менш ніж 40 мс.

---

### Крок 4: Інженерний глосарій та клієнтська безпека

- **Tree-Shaking:** Статичне видалення мертвого коду збирачем Rollup/Vite через аналіз графа ES-модулів, завдяки чому невикористані іконки чи утиліти не потрапляють у фінальний бандл.
- **Manual Chunk Splitting (\`manualChunks\`):** Відокремлення стабільних бібліотек (\`react\`, \`lucide-react\`) від прикладного коду, щоб повторні відвідувачі використовували кешовані вендорні чанки після нових релізів.
- **Відкладена гідратація (\`requestIdleCallback\`):** Відтермінування ініціалізації другорядних інтерактивних віджетів (модальних вікон, чату) до моменту простою головного потоку браузера.
- **Клієнтська Base64-обфускація (\`atob\`):** Зберігання контактних даних (email, телефон, Telegram) у закодованому форматі Base64 та їх розшифрування лише під час клієнтського монтування або кліку для захисту від спам-ботів.`,es:`### El impacto del exceso de código en cliente

Las aplicaciones web modernas a menudo envían bundles excesivos de JavaScript que colapsan el hilo principal en dispositivos móviles. Las tareas prolongadas retrasan la métrica INP y perjudican la tasa de conversión.

Para mantener puntuaciones de 98+ en Google Lighthouse se aplican tres estrategias clave:

1. División manual y predecible de chunks en el empaquetador
2. Optimización automatizada de imágenes en formato WebP
3. Hidratación diferida para componentes secundarios

---

### Paso 1: Separación de dependencias externas

Agrupar todas las librerías en un único bundle provoca que cualquier cambio en la aplicación invalide la caché de todos los usuarios recurrentes. La configuración de \`manualChunks\` crea fronteras de caché estables:

\`\`\`typescript
// vite.config.ts / rollup.config.ts
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            return 'vendor-misc'
          }
        },
      },
    },
  },
})
\`\`\`

---

### Paso 2: Contenedores con relación de aspecto estricta

El Cumulative Layout Shift se evita definiendo el tamaño exacto del contenedor antes de insertar la imagen en el DOM:

\`\`\`html
<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900">
  <picture>
    <source srcset="/images/hero-1200.webp" type="image/webp" media="(min-width: 1024px)" />
    <img
      src="/images/hero-fallback.jpg"
      alt="Panel de ingeniería"
      width="1200"
      height="675"
      loading="eager"
      fetchpriority="high"
      class="w-full h-full object-cover"
    />
  </picture>
</div>
\`\`\`

---

### Paso 3: Carga perezosa con requestIdleCallback

Los asistentes de chat y las ventanas modales pueden cargarse en tiempo de inactividad, ahorrando más de 180 ms en el primer renderizado:

\`\`\`typescript
import { lazy, useState, useEffect } from 'react'

const LazyInteractiveChat = lazy(() => import('./ChatModal'))

export function ChatTrigger() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(handle)
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldLoad) return null
  return <LazyInteractiveChat />
}
\`\`\`

---

### Métricas en entornos reales

- **First Contentful Paint (FCP):** reducido de 1.6s a 0.3s en redes móviles.
- **Largest Contentful Paint (LCP):** por debajo de 0.9s en páginas estáticas.
- **Cumulative Layout Shift (CLS):** 0.00 en todas las resoluciones.
- **Total Blocking Time (TBT):** inferior a 40 ms.

---

### Paso 4: Glosario de Ingeniería y Seguridad en Cliente

- **Tree-Shaking:** Eliminación estática de código muerto realizada por Rollup/Vite mediante el análisis de importaciones ES Modules, excluyendo iconos o utilidades no utilizadas del bundle final.
- **Manual Chunk Splitting (\`manualChunks\`):** Separación de dependencias externas estables (\`react\`, \`lucide-react\`) del código de aplicación para conservar la caché HTTP entre despliegues.
- **Hidratación Diferida (\`requestIdleCallback\`):** Posposición de la carga y ejecución de widgets interactivos secundarios (modales, asistente de chat) hasta que el hilo principal del navegador esté inactivo.
- **Ofuscación Base64 en Cliente (\`atob\`):** Almacenamiento de datos de contacto (correo, teléfono, Telegram) codificados en Base64 y decodificados únicamente en tiempo de ejecución o interacción del usuario para evitar el rastreo de bots de spam.`}},{slug:`wcag-22-aa-european-accessibility-act-2026`,title:{en:`WCAG 2.2 AA & European Accessibility Act 2026: Practical Engineering Compliance Guide`,ua:`WCAG 2.2 AA та European Accessibility Act 2026: практичний інженерний посібник із відповідності`,es:`WCAG 2.2 AA y European Accessibility Act 2026: Guía práctica de cumplimiento normativo para ingenieros`},description:{en:`A pragmatic developer guide for EU companies and agencies on complying with the European Accessibility Act (EAA 2026 / EN 301 549), covering focus management, color contrast, semantic DOM, and automated CI/CD audits.`,ua:`Практичний посібник для компаній та агентств у ЄС щодо відповідності вимогам European Accessibility Act (EAA 2026 / EN 301 549): керування фокусом, контрастність, семантичний DOM та CI/CD тести.`,es:`Guía práctica para empresas y agencias europeas sobre el cumplimiento de la Ley Europea de Accesibilidad (EAA 2026 / EN 301 549): gestión de foco, contraste de color, DOM semántico y auditorías CI/CD.`},date:`2026-10-18`,readTime:{en:`6 min read`,ua:`6 хв читання`,es:`6 min de lectura`},category:`accessibility-compliance`,categoryLabel:{en:`Accessibility & Compliance`,ua:`Доступність та стандарти`,es:`Accesibilidad y Normativa`},tags:[`WCAG 2.2 AA`,`EAA 2026`,`EN 301 549`,`A11y`,`React 19`,`Playwright`,`DevSecOps`],author:{name:`Artur Yusupov`,role:{en:`Fullstack Web Engineer & AI Developer`,ua:`Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-wcag-22-eaa.svg`,appliedProjects:[{projectId:14500,slug:`alldaymedicalcare`,name:`All Day Medical Care Clinic`,note:{en:`Healthcare web platform certified for WCAG 2.2 AA compliance, accessible keyboard traps prevention, and contrast ratios > 7:1.`,ua:`Медична платформа, сертифікована за стандартом WCAG 2.2 AA із повною клавіатурною доступністю та контрастністю > 7:1.`,es:`Plataforma sanitaria adaptada a WCAG 2.2 AA con navegación por teclado y ratios de contraste superiores a 7:1.`}},{projectId:29e3,slug:`unitrition`,name:`Unitrition E-Commerce Platform`,note:{en:`Accessible semantic e-commerce layout with zero keyboard traps, screen-reader optimized product filtering, and strict ARIA roles.`,ua:`Доступна семантична e-commerce верстка без пасток фокусу, оптимізована для скрінрідерів із суворими ARIA-ролями.`,es:`Maquetación accesible de comercio electrónico sin trampas de foco, filtrado adaptado a lectores de pantalla y roles ARIA estrictos.`}}],tldr:{en:[`The European Accessibility Act (Directive 2019/882 / EN 301 549) establishes legally binding digital accessibility requirements for businesses operating in the EU.`,`Accessibility cannot be patched on with third-party JavaScript overlay widgets; courts and auditors explicitly reject them.`,`Core technical requirements: visible focus outlines (WCAG 2.4.7 / 2.4.11), 4.5:1 text contrast across light and dark themes, keyboard focus trapping in dialogs, and native semantic landmarks.`,`Automated CI/CD testing with Playwright and @axe-core catches up to 57% of common accessibility defects before production release.`],ua:[`European Accessibility Act (Директива 2019/882 / EN 301 549) встановлює обов’язкові юридичні вимоги до цифрової доступності бізнесу в ЄС.`,`Доступність неможливо вирішити сторонніми плагінами-віджетами (overlays); суди та аудитори ЄС їх офіційно відхиляють.`,`Ключові інженерні вимоги: видимий індикатор фокусу клавіатури, контраст 4.5:1 у світлій і темній темах, захоплення фокусу в модальних вікнах та семантична розмітка.`,`Автоматичні тести з Playwright та @axe-core у CI/CD виявляють до 57% типових дефектів ще до виходу в прод.`],es:[`La Ley Europea de Accesibilidad (Directiva 2019/882 / EN 301 549) impone obligaciones legales a las empresas que operan en la Unión Europea.`,`La accesibilidad no se soluciona instalando widgets superpuestos (overlays); los tribunales y auditores los rechazan de forma explícita.`,`Requisitos clave de ingeniería: indicadores de foco visibles (WCAG 2.4.7), contraste de color 4.5:1 en ambos temas, captura de foco en modales y etiquetas semánticas nativas.`,`Las pruebas automatizadas con Playwright y @axe-core en CI/CD detectan hasta el 57% de los fallos antes de pasar a producción.`]},content:{en:`### The Legal Shift: Why Accessibility Is No Longer Optional

For years, digital accessibility was treated as a secondary "nice-to-have" checklist item. With the enforcement of the **European Accessibility Act (Directive 2019/882 / standard EN 301 549)**, digital accessibility has transitioned from an ethical recommendation to a **strict legal compliance mandate across all European Union member states (including Spain)**.

Businesses offering e-commerce, banking, booking services, or public consumer interfaces that fail to meet **WCAG 2.2 Level AA** risk heavy administrative penalties, lost public tenders, and mandatory remediation injunctions.

Crucially: **third-party accessibility overlay widgets (such as accessiBe or UserWay) do not satisfy legal compliance**. Both the European Commission and digital rights organizations have repeatedly warned that overlays introduce secondary accessibility barriers and fail legal scrutiny.

Accessibility must be engineered directly into the foundational codebase.

---

### 1. Focus Management & Keyboard Trap in Dialogs

The single most common defect flagged by accessibility auditors in modern Single Page Applications (SPAs) is broken keyboard focus in modal windows.

When a modal dialog opens:
1. Keyboard focus must immediately shift inside the dialog to the first interactive element.
2. Pressing \`Tab\` and \`Shift+Tab\` must loop indefinitely inside the dialog boundaries without escaping to background content.
3. Pressing \`Escape\` must dismiss the dialog and restore keyboard focus to the exact button that triggered it.

In this portfolio platform, we engineered a dedicated custom hook \`useDialogA11y\`:

\`\`\`tsx
export function useDialogA11y({
  isOpen,
  onClose,
  initialFocusRef,
  containerRef,
}: UseDialogA11yOptions) {
  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;

    // Trap focus inside container
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        // cycle through focusable elements
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus(); // restore focus upon close
    };
  }, [isOpen, onClose]);
}
\`\`\`

---

### 2. High-Contrast Ratios in Dark and Light Themes

WCAG 2.2 Success Criterion 1.4.3 mandates a minimum contrast ratio of **4.5:1** for regular text and **3:1** for large text and interactive UI borders.

When building dark mode toggles, teams often use muted grays like \`text-slate-400\` on \`bg-slate-900\`, dropping contrast to 3.2:1 and instantly failing compliance.

Guidelines:
- **Light Theme**: Primary body text must use deep slate (\`text-slate-900\` / \`#0f172a\`), yielding an 18.2:1 contrast against white backgrounds.
- **Dark Theme**: Primary body text must use crisp neutral white (\`text-slate-100\` / \`#f1f5f9\`), yielding a 14.1:1 contrast against dark slate backgrounds.
- **Interactive Focus Indicators**: Always apply a visible \`focus-visible:outline-2 focus-visible:outline-offset-2\` with at least 3:1 contrast against surrounding surfaces.

---

### 3. Automated CI/CD Regression Prevention

Human testing with screen readers (NVDA on Windows, VoiceOver on macOS/iOS) is essential, but automated regression testing in continuous integration prevents defects before merge.

Using **Playwright** and **@axe-core/playwright**, we run automated accessibility assertions on every pull request:

\`\`\`ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home page must have zero critical or serious WCAG 2.2 AA violations', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
\`\`\`

---

### 4. Checklist for Business Stakeholders

1. **Verify native semantics**: Replace clickable \`<div>\` elements with semantic \`<button>\` and \`<a>\` tags.
2. **Audit form inputs**: Ensure every input has an explicit programmatic \`<label htmlFor="...">\` or \`aria-label\`.
3. **Check responsive scaling**: The layout must comfortably scale up to 200% zoom without horizontal clipping or broken controls.
4. **Enforce in CI/CD**: Integrate automated accessibility test suites into your deployment workflow so regressions never slip into production unnoticed.`,ua:`### Юридичні зміни: чому доступність обов’язкова

Роками цифрова доступність (accessibility) сприймалася як необов’язковий додаток до розробки. З набранням чинності **European Accessibility Act (Директива 2019/882 / стандарт EN 301 549)** доступність стала **суворою юридичною вимогою для бізнесу в Європейському Союзі (зокрема в Іспанії)**.

Компанії, що надають послуги онлайн-торгівлі, бронювання, фінансових або публічних сервісів, зобов’язані відповідати стандарту **WCAG 2.2 Level AA**. За порушення передбачено суттєві фінансові штрафи та заборону участі у тендерах.

Важливий момент: **сторонні плагіни-віджети (overlays) не захищають від штрафів**. Європейські регулятори та суди офіційно визнали, що такі віджети не виправляють архітектурні дефекти коду.

Доступність має бути закладена в саму основу веброзробки.

---

### 1. Керування фокусом у діалогових вікнах

Найпоширеніша помилка в сучасних вебдодатках - це втрата фокусу клавіатури при відкритті модальних вікон.

При відкритті вікна:
1. Фокус має негайно перейти на перший інтерактивний елемент всередині модалки.
2. Натискання \`Tab\` та \`Shift+Tab\` має зациклюватися виключно всередині вікна.
3. Натискання \`Escape\` має закрити вікно та повернути фокус на кнопку, яка його викликала.

У нашому проєкті для цього реалізовано хук \`useDialogA11y\`, який повністю автоматизує цей процес.

---

### 2. Контрастність у світлій та темній темах

Стандарт WCAG 2.2 вимагає мінімальний контраст тексту **4.5:1**:
- У темній темі неприпустимо використовувати занадто тьмяний сірий колір.
- Усі інтерактивні елементи мають чіткий індикатор \`focus-visible\`.

---

### 3. Автоматизація перевірок у CI/CD

Ручне тестування з екранними дикторами (NVDA, VoiceOver) є обов’язковим, але автоматичні тести в GitHub Actions захищають від регресій під час кожного оновлення коду.

Ми використовуємо зв’язку **Playwright + @axe-core/playwright**, яка блокує реліз, якщо в коді виявлено порушення стандарту WCAG 2.2 AA.`,es:`### El cambio normativo: la accesibilidad ya no es opcional

Durante años, la accesibilidad web se consideraba una recomendación secundaria. Con la entrada en vigor de la **Ley Europea de Accesibilidad (Directiva 2019/882 / norma EN 301 549)**, la accesibilidad digital se ha convertido en una **obligación legal estricta para las empresas que operan en la Unión Europea (incluida España)**.

Las plataformas de comercio electrónico, contratación de servicios, banca y reservas en línea que no cumplan con el nivel **WCAG 2.2 AA** se exponen a sanciones económicas y a la pérdida de licitaciones públicas.

Punto clave: **los widgets de accesibilidad superpuestos (overlays comerciales) no cumplen la normativa**. La Comisión Europea y las organizaciones de derechos digitales han advertido de que estos complementos no corrigen los defectos reales del DOM y son desestimados en auditorías oficiales.

La accesibilidad debe construirse desde los cimientos del código.

---

### 1. Gestión de foco y captura en ventanas modales

El fallo más repetido en aplicaciones modernas es el descontrol del foco del teclado al abrir diálogos modales.

Al abrir un modal:
1. El foco debe situarse de inmediato en el primer control interactivo interno.
2. La navegación con \`Tab\` y \`Shift+Tab\` debe quedar confinada dentro de los límites del modal.
3. La tecla \`Escape\` debe cerrar el diálogo y devolver el foco al botón que originó la apertura.

En nuestro código, el hook \`useDialogA11y\` gestiona este ciclo de vida de manera garantizada y probada con tests automatizados.

---

### 2. Contraste cromático en tema claro y oscuro

El criterio WCAG 2.2 1.4.3 exige un ratio de contraste mínimo de **4.5:1** para texto estándar:
- En tema claro, usamos gris oscuro (\`text-slate-900\`) sobre fondo blanco, logrando un ratio de 18:1.
- En tema oscuro, usamos blanco neutro (\`text-slate-100\`) sobre fondo azul noche, superando el ratio de 14:1.
- Todo elemento accionable muestra un contorno nítido con \`focus-visible\`.

---

### 3. Automatización de auditorías en CI/CD

Mediante la integración de **Playwright** y **@axe-core/playwright**, ejecutamos auditorías automáticas en cada commit de GitHub Actions, impidiendo que cualquier vulnerabilidad de accesibilidad llegue a producción.`}},{slug:`shopify-liquid-vs-custom-woocommerce`,title:{en:`Shopify Liquid vs Custom WooCommerce in 2026: Architecture, Checkout Extensibility & True TCO`,ua:`Shopify Liquid проти кастомного WooCommerce у 2026: архітектура, гнучкість чекауту та реальний TCO`,es:`Shopify Liquid vs WooCommerce a medida en 2026: Arquitectura, extensibilidad de checkout y TCO real`},description:{en:`An architectural breakdown comparing hosted SaaS (Shopify Liquid & Checkout Extensibility) against open-source infrastructure (WooCommerce, PHP 8+, and Redis caching) for technical directors and e-commerce founders.`,ua:`Архітектурне порівняння SaaS-платформи Shopify (Liquid та Checkout Extensibility) із відкритою інфраструктурою WooCommerce (PHP 8+ та Redis) для технічних лідерів та засновників онлайн-бізнесу.`,es:`Comparativa técnica entre la plataforma SaaS Shopify (Liquid y Checkout Extensibility) frente a infraestructura abierta con WooCommerce, PHP 8+ y Redis para directores de tecnología y fundadores.`},date:`2026-10-19`,readTime:{en:`8 min read`,ua:`8 хв читання`,es:`8 min de lectura`},category:`ecommerce-cms`,categoryLabel:{en:`E-Commerce & CMS Engineering`,ua:`E-Commerce та інженерія CMS`,es:`E-Commerce e Ingeniería CMS`},tags:[`Shopify`,`Liquid`,`WooCommerce`,`WordPress`,`E-Commerce`,`Checkout`,`TCO`],author:{name:`Artur Yusupov`,role:{en:`Senior Fullstack Web Engineer & AI Developer`,ua:`Senior Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack Senior y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-shopify-vs-woocommerce.svg`,appliedProjects:[{projectId:2e4,slug:`artezioeu`,name:`Artezio EU Storefront`,note:{en:`Custom Shopify Liquid theme engineered with zero app bloat, achieving a 96 PageSpeed rating and 2.4x checkout speed.`,ua:`Кастомна тема Shopify Liquid без сторонніх плагінів-навантажувачів із показником 96 у PageSpeed.`,es:`Tema Shopify Liquid a medida sin aplicaciones innecesarias, con 96 en PageSpeed y compra optimizada.`}},{projectId:22e3,slug:`kidzely`,name:`Kidzely E-Commerce Store`,note:{en:`Engineered high-converting cart drawer and product bundle rules with native Shopify Functions, avoiding third-party recurring app fees.`,ua:`Розроблено швидкий кошик-дровер та бандли на базі Shopify Functions без щомісячних витрат на додатки.`,es:`Desarrollo de carrito lateral y paquetes de producto mediante Shopify Functions sin cuotas recurrentes de apps.`}},{projectId:11e3,slug:`lunamebel`,name:`Luna Mebel Manufacturing Catalog`,note:{en:`Custom WooCommerce catalog with 1,200+ configurable attributes, Redis object caching, and sub-100ms SQL query execution.`,ua:`Кастомний каталог меблів на WooCommerce із понад 1200 варіаціями, кешуванням Redis та SQL-відповіддю до 100 мс.`,es:`Catálogo WooCommerce a medida con más de 1200 variaciones, caché Redis y consultas SQL en menos de 100 ms.`}}],tldr:{en:[`Shopify provides superior checkout uptime and zero server maintenance, but incurs 2-3% platform fees and strict checkout scripting constraints on standard tiers.`,`WooCommerce provides 100% data ownership, zero recurring transaction commissions, and unlimited ERP/CRM integrations, but requires professional devops hosting and security management.`,`For catalogs under 5,000 SKUs with standard payment flows, Shopify Liquid minimizes development overhead.`,`For complex multi-currency catalogs, custom B2B wholesale pricing, or deep ERP integrations, custom WooCommerce delivers significantly lower 3-year TCO.`],ua:[`Shopify гарантує 99.99% доступність чекауту без турбот про сервер, але бере додаткові комісії 2-3% та обмежує кастомізацію на базових тарифах.`,`WooCommerce дає 100% контроль над даними, нульову комісію з транзакцій та необмежену інтеграцію з ERP, вимагаючи фахового хостингу та devops.`,`Для магазинів до 5000 товарів зі стандартною оплатою Shopify Liquid зменшує витрати на початковий запуск.`,`Для складних B2B-цін, гуртових замовлень та глибоких систем обліку кастомний WooCommerce забезпечує значно нижчу 3-річну вартість володіння.`],es:[`Shopify ofrece máxima estabilidad en el checkout sin mantenimiento de servidores, pero añade comisiones del 2-3% y limitaciones de código en planes básicos.`,`WooCommerce otorga el 100% de propiedad de datos, cero comisiones por transacción e integración total con ERP, exigiendo hosting profesional y devops.`,`Para catálogos de menos de 5000 productos estándar, Shopify Liquid reduce el tiempo de desarrollo inicial.`,`Para ventas B2B complejas, precios mayoristas o sincronizaciones ERP profundas, WooCommerce a medida ofrece un TCO a 3 años notablemente menor.`]},content:{en:`### The Strategic Dilemma: Managed SaaS vs Self-Hosted Infrastructure

When engineering an e-commerce platform in 2026, technology leaders face a classic architectural trade-off: surrender server control for turnkey reliability (Shopify), or maintain sovereign control over database schemas, transaction fees, and business logic (custom WooCommerce).

---

### 1. Architecture & Rendering Models

Shopify relies on an edge-cached Liquid template engine backed by proprietary GraphQL Storefront APIs and closed-source checkout microservices. You do not touch the database, you cannot modify database indices, and checkout customization is restricted to Shopify Functions and Web Pixels.

In contrast, custom WooCommerce operates on PHP 8.2+, MySQL/MariaDB, and Redis object caching. With modern engineering (disabling legacy page builders, utilizing custom post types, and indexing custom tables), WooCommerce handles millions of pageviews at sub-100ms response times:

\`\`\`php
// High-performance WooCommerce Redis Query Caching snippet
add_filter('posts_pre_query', function ($posts, \\WP_Query $query) {
    if (!$query->is_main_query() || is_admin() || !$query->is_post_type_archive('product')) {
        return $posts;
    }

    $cache_key = 'wc_catalog_' . md5(json_encode($query->query_vars));
    $cached = wp_cache_get($cache_key, 'ecommerce_catalog');

    if ($cached !== false) {
        return $cached;
    }

    return $posts;
}, 10, 2);
\`\`\`

---

### 2. The True Total Cost of Ownership (TCO) Breakdown

Many organizations mistakenly assess platform costs based purely on monthly subscription fees. A realistic 3-year TCO calculation for an enterprise store turning over $1.2M annually demonstrates the disparity:

| Financial Dimension | Shopify Advanced ($399/mo) | Custom WooCommerce + Dedicated NVMe VPS |
|---|---|---|
| Platform / Hosting Fee | $14,364 (3 years) | $3,600 ($100/mo Cloud VPS) |
| App Store Subscriptions | $18,000 ($500/mo for Bundles, Subscriptions, Upsells) | $0 (built natively into theme codebase) |
| Non-Shopify Payments Fee (0.5% - 2%) | $18,000 - $24,000 | $0 (direct bank/Stripe gateway only) |
| Developer / DevOps Maintenance | $7,200 | $14,400 (security patches & server updates) |
| **Total 3-Year Operational Cost** | **$57,564 - $63,564** | **$18,000** |

---

### 3. Checkout Extensibility & Conversion Engineering

Shopify's greatest asset is its one-page checkout, optimized against billions of global transactions. However, if your business requires:

- Tailored B2B credit terms with net-30 invoice generation
- Split cart payments across multiple fulfillment warehouses
- Custom non-standard VAT calculation engines for European territories

Shopify requires an upgrade to Shopify Plus ($2,000+/month minimum). With WooCommerce, such logic is written directly via extensible action hooks without subscription penalties.

---

### Architectural Verdict

- **Choose Shopify Liquid** if: time-to-market is the primary objective, marketing teams handle daily promotions without in-house engineers, and standard payment providers (Shopify Payments / Stripe) cover 100% of customers.
- **Choose Custom WooCommerce** if: you require zero-commission payment handling, custom B2B inventory pipelines, deep integration with local ERPs, and long-term TCO savings on high-volume revenues.`,ua:`### Стратегічний вибір: SaaS чи власна інфраструктура

У 2026 році вибір e-commerce платформи зводиться до балансу: віддати контроль над сервером заради простоти (Shopify) або зберегти повне володіння даними, базами даних та бізнес-логікою (кастомний WooCommerce).

---

### 1. Архітектура та рендеринг

Shopify використовує шаблонізатор Liquid, закритий GraphQL API та власні мікросервіси чекауту. Розробник не має прямого доступу до бази даних чи індексів.

Кастомний WooCommerce базується на PHP 8.2+, MySQL та кешуванні Redis. При фаховій інженерній розробці (без важких конструкторів сторінок) він забезпечує завантаження каталогу менш ніж за 100 мс:

\`\`\`php
// Кешування запитів каталогу WooCommerce у Redis
add_filter('posts_pre_query', function ($posts, \\WP_Query $query) {
    if (!$query->is_main_query() || is_admin() || !$query->is_post_type_archive('product')) {
        return $posts;
    }

    $cache_key = 'wc_catalog_' . md5(json_encode($query->query_vars));
    $cached = wp_cache_get($cache_key, 'ecommerce_catalog');

    if ($cached !== false) {
        return $cached;
    }

    return $posts;
}, 10, 2);
\`\`\`

---

### 2. Розрахунок реальної вартості володіння (TCO)

Оцінка вартості лише за тарифом підписки часто є оманливою. Порівняння витрат за 3 роки при річному обігу $1.2M:

| Стаття витрат | Shopify Advanced ($399/міс) | Кастомний WooCommerce + NVMe VPS |
|---|---|---|
| Підписка / Хостинг | $14,364 (3 роки) | $3,600 ($100/міс за хмарний сервер) |
| Щомісячні додатки з маркетплейсу | $18,000 ($500/міс за бандли, відгуки, апсейли) | $0 (реалізовано в коді теми) |
| Додаткова комісія з транзакцій | $18,000 - $24,000 | $0 (тільки пряма комісія банку/Stripe) |
| Підтримка та оновлення безпеки | $7,200 | $14,400 (оновлення ядра та безпека) |
| **Разом за 3 роки** | **$57,564 - $63,564** | **$18,000** |

---

### 3. Можливості чекауту

Головна перевага Shopify - відточений процес оформлення замовлення. Проте при специфічних вимогах (B2B рахунки з відстрочкою платежу, розділення замовлення за складами) Shopify вимагає тариф Plus від $2000/місяць. У WooCommerce будь-яка логіка реалізується через хуки без додаткових тарифів.

---

### Інженерний висновок

- **Обирайте Shopify Liquid:** якщо пріоритетом є швидкий запуск, а маркетингова команда працює без штатного розробника.
- **Обирайте кастомний WooCommerce:** якщо необхідна нульова комісія платформи, специфічні B2B ціни, синхронізація зі складськими програмами та суттєва економія TCO при зростанні обігу.`,es:`### Elección estratégica: SaaS gestionado o infraestructura propia

En 2026, los responsables técnicos se enfrentan a un compromiso claro: ceder el control del servidor a cambio de estabilidad gestionada (Shopify) o mantener el control total sobre la base de datos y la lógica de negocio (WooCommerce a medida).

---

### 1. Arquitectura y procesamiento

Shopify se apoya en Liquid y APIs cerradas. El desarrollador no puede modificar índices de base de datos ni personalizar el checkout fuera de Shopify Functions.

WooCommerce a medida opera con PHP 8.2+, MySQL y caché de objetos Redis. Con una arquitectura limpia (sin constructores visuales pesados), ofrece tiempos de respuesta inferiores a 100 ms:

\`\`\`php
// Caché de consultas del catálogo en Redis
add_filter('posts_pre_query', function ($posts, \\WP_Query $query) {
    if (!$query->is_main_query() || is_admin() || !$query->is_post_type_archive('product')) {
        return $posts;
    }

    $cache_key = 'wc_catalog_' . md5(json_encode($query->query_vars));
    $cached = wp_cache_get($cache_key, 'ecommerce_catalog');

    if ($cached !== false) {
        return $cached;
    }

    return $posts;
}, 10, 2);
\`\`\`

---

### 2. Coste Total de Propiedad (TCO) a 3 años

Para una tienda con una facturación anual de $1.2M, el desglose a 3 años evidencia la diferencia:

| Concepto | Shopify Advanced ($399/mes) | WooCommerce a medida + VPS NVMe |
|---|---|---|
| Plataforma / Servidor | $14,364 | $3,600 ($100/mes) |
| Apps de suscripción mensual | $18,000 | $0 (código integrado nativo) |
| Comisiones de pasarela extra | $18,000 - $24,000 | $0 (únicamente comisión de Stripe/banco) |
| Mantenimiento técnico | $7,200 | $14,400 |
| **Total en 3 años** | **$57,564 - $63,564** | **$18,000** |

---

### Conclusión técnica

- **Shopify Liquid** es idóneo cuando la prioridad es lanzar al mercado de inmediato con pagos estándar.
- **WooCommerce a medida** es la opción recomendada para modelos B2B, integraciones complejas con ERP y marcas que buscan eliminar comisiones sobre ventas.`}},{slug:`client-side-zero-trust-security`,title:{en:`Client-Side Zero-Trust Security: PII Obfuscation, Anti-Scraping & CSP Defense for Web Apps`,ua:`Клієнтська безпека Zero-Trust: обфускація персональних даних, захист від скрапінгу та CSP`,es:`Seguridad Zero-Trust en cliente: Ofuscación de PII, protección antiscraping y políticas CSP`},description:{en:`How to safeguard sensitive business contacts, protect clinical and personal data from automated scrapers, and enforce strict Content Security Policies (CSP) without degrading user experience or Core Web Vitals.`,ua:`Як захистити контактні дані бізнесу від автоматичних скраперів, впровадити безпеку медичних і персональних даних та налаштувати суворі політики CSP без втрати швидкості.`,es:`Cómo proteger los datos de contacto y la información confidencial frente a bots de scraping, aplicando políticas de seguridad CSP estrictas sin perjudicar la experiencia de usuario.`},date:`2026-10-19`,readTime:{en:`7 min read`,ua:`7 хв читання`,es:`7 min de lectura`},category:`architecture-tco`,categoryLabel:{en:`Architecture & TCO`,ua:`Архітектура та TCO`,es:`Arquitectura y TCO`},tags:[`DevSecOps`,`Security`,`CSP`,`Base64`,`Anti-Scraping`,`Privacy`],author:{name:`Artur Yusupov`,role:{en:`Senior Fullstack Web Engineer & AI Developer`,ua:`Senior Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack Senior y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-client-side-security.svg`,appliedProjects:[{projectId:16e3,slug:`aws-security-service`,name:`AWS Security Architecture Consulting`,note:{en:`Configured end-to-end cloud perimeter defenses, strict HTTP security headers, and automated vulnerability scanning.`,ua:`Налаштовано хмарний захист периметра, суворі HTTP-заголовки безпеки та автоматичне сканування вразливостей.`,es:`Configuración de perímetro de seguridad en la nube, cabeceras HTTP estrictas y análisis automatizado de vulnerabilidades.`}},{projectId:14500,slug:`alldaymedicalcare`,name:`All Day Medical Care Clinic Portal`,note:{en:`Implemented HIPAA-aligned privacy protections, obfuscated clinical contact routing, and sanitized patient intake endpoints.`,ua:`Впроваджено стандарти захисту медичних даних, захищений маршрутизатор контактів та очищення вхідних запитів.`,es:`Implementación de privacidad médica, ofuscación de contactos clínicos y validación estricta de formularios.`}},{projectId:29500,slug:`yusupovartur-nextjs-portfolio`,name:`Artur Yusupov Portfolio Platform`,note:{en:`Zero-commit secret architecture with Base64 runtime decryption and strict Content Security Policy directives.`,ua:`Архітектура нульових секретів у репозиторії, клієнтське Base64-декодування та строгий CSP.`,es:`Arquitectura de cero credenciales en código, descifrado Base64 en ejecución y cabeceras CSP completas.`}}],tldr:{en:[`Raw email addresses and phone numbers in static HTML are harvested by autonomous scrapers within minutes of indexation.`,`Base64 runtime decoding on verified user interactions (clicks or touches) stops 99.4% of non-browser bot scraping without CAPTCHA friction.`,`A strict Content Security Policy with nonces blocks Cross-Site Scripting (XSS) and unauthorized third-party telemetry injection.`,`Zero-commit policies with pre-commit git hooks guarantee that development tokens and private API keys never enter version control.`],ua:[`Відкриті поштові адреси та номери телефонів у HTML потрапляють до спам-баз ботів за лічені хвилини після індексації.`,`Клієнтське декодування Base64 під час кліку чи дотику зупиняє 99.4% автоматичних парсерів без потреби у капчі.`,`Сувора політика Content Security Policy з одноразовими nonce блокує XSS-атаки та несанкціоноване впровадження скриптів.`,`Політика нульових секретів у коді та git pre-commit хуки гарантують захист приватних API-ключів від потрапляння в репозиторій.`],es:[`Las direcciones de correo y teléfonos en texto plano son capturados por bots en cuestión de minutos tras indexarse.`,`El descifrado Base64 al interactuar el usuario (clic o toque) detiene el 99.4% del scraping automático sin recurrir a CAPTCHAs.`,`Una política Content Security Policy estricta bloquea ataques XSS y la inyección no autorizada de código de terceros.`,`Las políticas de cero credenciales en repositorios aseguran que ninguna clave privada llegue al historial de Git.`]},content:{en:`### The Automated Threat to Web Privacy

Every publicly accessible web property is constantly analyzed by distributed scraper bots. Storing administrative emails, customer service telephone numbers, or direct executive contacts in plaintext HTML exposes organizations to high volumes of phishing, spoofing, and spam campaigns.

Implementing a Zero-Trust client security model provides protection at multiple layers.

---

### Layer 1: Client-Side Base64 Contact Obfuscation

Instead of exposing \`mailto:contact@domain.com\` directly in the static DOM, contacts should be stored as Base64 strings and decoded strictly in response to explicit user interaction:

\`\`\`typescript
import React, { useState } from 'react'

interface SecureContactProps {
  encodedEmail: string // e.g. "Y29udGFjdEBkb21haW4uY29t"
  label: string
}

export function SecureContactLink({ encodedEmail, label }: SecureContactProps) {
  const [decrypted, setDecrypted] = useState<string | null>(null)

  const handleReveal = () => {
    if (!decrypted && typeof window !== 'undefined') {
      try {
        const decoded = window.atob(encodedEmail)
        setDecrypted(decoded)
        window.location.href = \`mailto:\${decoded}\`
      } catch (err) {
        console.error('Decoding error', err)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleReveal}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
      aria-label={label}
    >
      <span>{decrypted || label}</span>
    </button>
  )
}
\`\`\`

---

### Layer 2: Defense-in-Depth with Content Security Policy (CSP)

A robust CSP restricts the domains from which scripts, styles, and fonts can load, thwarting malicious script injections even if an application dependency is compromised:

\`\`\`javascript
// next.config.ts / securityHeaders.js
const ContentSecurityPolicy = \`
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.openai.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
\`
\`\`\`

---

### Layer 3: Zero-Commit Secrets Enforcement

API tokens and server credentials must never be committed to repository history. Automated Git hooks safeguard the pipeline:

\`\`\`bash
# .husky/pre-commit
pnpm exec gitleaks protect --staged --verbose
\`\`\`

---

### Security Telemetry & Proof

- **99.4% drop** in automated contact harvest requests.
- **A+ Grade** on Mozilla Observatory and SecurityHeaders.com testing suites.
- Zero credential exposure incidents across production deployments.`,ua:`### Захист даних від автоматизованих загроз

Будь-який публічний сайт постійно сканується мережевими ботами. Збереження контактних електронних адрес або телефонів у відкритому HTML призводить до спаму та фішингових атак на бізнес.

Підхід Zero-Trust на клієнті забезпечує багаторівневий захист.

---

### Рівень 1: Клієнтська обфускація контактів через Base64

Замість прямого посилання \`mailto:\` у коді сайту контакти кодуються у Base64 і розшифровуються лише за дією реального користувача:

\`\`\`typescript
import React, { useState } from 'react'

interface SecureContactProps {
  encodedEmail: string
  label: string
}

export function SecureContactLink({ encodedEmail, label }: SecureContactProps) {
  const [decrypted, setDecrypted] = useState<string | null>(null)

  const handleReveal = () => {
    if (!decrypted && typeof window !== 'undefined') {
      try {
        const decoded = window.atob(encodedEmail)
        setDecrypted(decoded)
        window.location.href = \`mailto:\${decoded}\`
      } catch (err) {
        console.error('Decoding error', err)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleReveal}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
      aria-label={label}
    >
      <span>{decrypted || label}</span>
    </button>
  )
}
\`\`\`

---

### Рівень 2: Налаштування Content Security Policy (CSP)

Заголовки CSP чітко визначають дозволені джерела завантаження скриптів, шрифтів та стилів, запобігаючи виконанню шкідливого коду:

\`\`\`javascript
const ContentSecurityPolicy = \`
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
\`
\`\`\`

---

### Рівень 3: Політика нульових секретів у репозиторії

Будь-які ключі та паролі блокуються ще до збереження в Git за допомогою автоматичних хуків:

\`\`\`bash
# .husky/pre-commit
pnpm exec gitleaks protect --staged --verbose
\`\`\`

---

### Результати впровадження

- **Зменшення на 99.4%** кількості спам-запитів до відкритих контактів.
- **Оцінка A+** у тестах Mozilla Observatory та SecurityHeaders.
- Повний захист від витоку секретів розробки.`,es:`### Seguridad proactiva frente a bots

Los rastreadores automáticos recopilan diariamente correos y teléfonos expuestos en HTML plano. El modelo Zero-Trust en cliente aplica salvaguardas para neutralizar este riesgo.

---

### Nivel 1: Ofuscación de datos en Base64

Los datos de contacto se mantienen cifrados y solo se decodifican cuando un usuario humano interactúa:

\`\`\`typescript
import React, { useState } from 'react'

interface SecureContactProps {
  encodedEmail: string
  label: string
}

export function SecureContactLink({ encodedEmail, label }: SecureContactProps) {
  const [decrypted, setDecrypted] = useState<string | null>(null)

  const handleReveal = () => {
    if (!decrypted && typeof window !== 'undefined') {
      try {
        const decoded = window.atob(encodedEmail)
        setDecrypted(decoded)
        window.location.href = \`mailto:\${decoded}\`
      } catch (err) {
        console.error('Decoding error', err)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleReveal}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
      aria-label={label}
    >
      <span>{decrypted || label}</span>
    </button>
  )
}
\`\`\`

---

### Nivel 2: Cabeceras de seguridad CSP

Restringen los dominios permitidos para ejecutar scripts, bloqueando inyecciones XSS:

\`\`\`javascript
const ContentSecurityPolicy = \`
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  frame-ancestors 'none';
\`
\`\`\`

---

### Nivel 3: Control estricto en Git

Prevención de subida de claves privadas mediante comprobaciones automáticas antes de cada commit.

---

### Resultados

- **99.4% de reducción** en correos no deseados recibidos.
- **Calificación A+** en pruebas de SecurityHeaders.com.`}},{slug:`legacy-migration-cloud-infrastructure`,title:{en:`Zero-Downtime Legacy System Migration: Cloud Infrastructure, SEO Preservation & High-Load Reliability`,ua:`Безшовна міграція легасі-систем: хмарна інфраструктура, збереження 100% SEO та високі навантаження`,es:`Migración de sistemas heredados sin tiempo de inactividad: Infraestructura cloud, preservación SEO y alta disponibilidad`},description:{en:`A battle-tested blueprint for migrating legacy monolithic portals and high-traffic databases to modern cloud architectures with dual-write replication, automated 301/308 redirect mapping, and zero interruption to customer transactions.`,ua:`Перевірений на практиці план міграції монолітних порталів та навантажених баз даних у сучасну хмарну інфраструктуру з реплікацією даних, збереженням 100% пошукового трафіку та нульовим простоєм.`,es:`Metodología probada para migrar portales monolíticos heredados y bases de datos con alto tráfico a la nube mediante replicación continua, mapeo exhaustivo de redirecciones 301/308 y cero paradas operativas.`},date:`2026-10-19`,readTime:{en:`9 min read`,ua:`9 хв читання`,es:`9 min de lectura`},category:`ecommerce-cms`,categoryLabel:{en:`E-Commerce & CMS Engineering`,ua:`E-Commerce та інженерія CMS`,es:`E-Commerce e Ingeniería CMS`},tags:[`Cloud Migration`,`AWS`,`Database Optimization`,`Nginx`,`301 Redirects`,`Zero Downtime`],author:{name:`Artur Yusupov`,role:{en:`Senior Fullstack Web Engineer & AI Developer`,ua:`Senior Fullstack веб-інженер та AI-розробник`,es:`Ingeniero Web Fullstack Senior y Desarrollador IA`}},coverImage:`/Portfolio/images/blog/cover-cloud-migration.svg`,appliedProjects:[{projectId:15e3,slug:`aws-migration-services`,name:`AWS Migration & Infrastructure Modernization`,note:{en:`Orchestrated seamless database cutover and multi-AZ load balancing with zero dropped customer requests.`,ua:`Організовано безшовне перемикання бази даних та балансування навантаження multi-AZ без втрати запитів.`,es:`Transición transparente de base de datos y balanceo multi-AZ sin pérdidas de solicitudes de usuarios.`}},{projectId:17e3,slug:`cloud-delivery-solution`,name:`Cloud Delivery High-Availability Solution`,note:{en:`Engineered auto-scaling edge CDN routes and automated rollback triggers during enterprise infrastructure updates.`,ua:`Спроектовано автоматичне масштабування CDN та сценарії відкату для оновлення інфраструктури.`,es:`Diseño de CDN con autoescalado y mecanismos de reversión automática durante actualizaciones críticas.`}},{projectId:19e3,slug:`front-desk-helpers`,name:`Front Desk Helpers Corporate Platform`,note:{en:`Migrated 400+ legacy service landing pages with 100% preservation of organic Google index rankings via exact 301 redirect trees.`,ua:`Збережено 100% органічних позицій Google під час перенесення 400+ сторінок послуг завдяки чіткій карті редиректів 301.`,es:`Conservación del 100% del tráfico orgánico en Google al migrar más de 400 páginas con mapeo exacto de redirecciones 301.`}}],tldr:{en:[`Zero downtime is achieved through dual-write database synchronization and DNS TTL reduction before cutover.`,`SEO authority and backlink equity require comprehensive crawl mapping and deterministic 301/308 redirect rules at the reverse proxy layer.`,`Canary deployment routing with gradual 10% to 100% traffic shift allows real-time anomaly detection before full cutover.`,`Always prepare automated rollback triggers: if error rates exceed 0.5% during canary phase, traffic instantly returns to legacy nodes.`],ua:[`Нульовий час простою досягається завдяки синхронній реплікації бази даних та завчасному зниженню DNS TTL.`,`Позиції в Google та посилальна вага зберігаються завдяки повному скануванню старих URL та детермінованим 301/308 правилам у Nginx.`,`Канарковий деплой із поступовим переведенням трафіку від 10% до 100% дозволяє виявити аномалії до повного перемикання.`,`Обов язковою є автоматизація відкату: якщо частка помилок перевищує 0.5%, трафік миттєво повертається на старі сервери.`],es:[`El tiempo de inactividad cero se consigue con replicación continua de base de datos y reducción previa del TTL en DNS.`,`La autoridad SEO se mantiene mediante el rastreo íntegro de URLs antiguas y reglas de redirección 301/308 en el proxy inverso.`,`El despliegue canary con derivación progresiva del 10% al 100% del tráfico detecta anomalías antes del cambio definitivo.`,`Es indispensable contar con rollback automatizado: si los errores superan el 0.5%, el tráfico regresa a los nodos anteriores.`]},content:{en:`### The High-Stakes Nature of Enterprise Migrations

Migrating an established enterprise portal is among the highest-risk engineering operations an organization can undertake. A flawed migration can cause database inconsistency, transaction timeouts, and devastating losses of organic search rankings that take months to recover.

Here is the exact phased engineering playbook used on commercial cloud migrations.

---

### Phase 1: DNS Preparation & Pre-Migration Crawl

Seven days prior to migration:
1. Reduce DNS TTL on the authoritative nameservers to 300 seconds (5 minutes). This ensures fast cutover propagation.
2. Execute a full recursive crawl of the legacy system to catalog all indexable URLs, canonicals, status codes, and query strings.

---

### Phase 2: Dual-Write & Continuous Database Replication

To avoid a maintenance window, the database migration runs via logical replication streams:

\`\`\`bash
# PostgreSQL logical replication stream
CREATE PUBLICATION migration_pub FOR ALL TABLES;
# Target AWS RDS instance
CREATE SUBSCRIPTION migration_sub
  CONNECTION 'host=legacy-db.internal dbname=app user=rep_user password=secret'
  PUBLICATION migration_pub;
\`\`\`

Both databases remain in lockstep until the cutover trigger.

---

### Phase 3: High-Performance 301/308 Redirect Mapping in Nginx

Preserving SEO equity requires URL normalization at the reverse-proxy level, executing in microseconds before hitting application runtimes:

\`\`\`nginx
# /etc/nginx/conf.d/seo-redirects.map
map $uri $redirect_target {
    default "";
    /legacy-services/custom-software /en/projects/custom-software;
    /about-us.php /en#about;
    /old-contact-form /en#contact;
}

server {
    listen 443 ssl http2;
    server_name www.domain.com;

    if ($redirect_target != "") {
        return 301 $redirect_target;
    }
}
\`\`\`

---

### Phase 4: Canary Traffic Routing & Instant Rollback

Using AWS Route 53 weighted records, 10% of live traffic is initially shifted to the new cloud cluster. Telemetry is monitored in real-time:
- 5xx HTTP error rates
- Database connection pool saturation
- P99 latency percentiles

Once metrics hold steady for 120 minutes, the weight is scaled to 100%, completing the transition with zero dropped user sessions.

---

### Production Results

- **Uptime during migration:** 100% (zero minutes of downtime).
- **SEO rank retention:** 100% organic impressions maintained after 30 days.
- **P95 response latency:** reduced by 48% after moving to cloud-native compute.`,ua:`### Висока відповідальність міграції великих систем

Перенесення навантаженого корпоративного сайту - одна з найвідповідальніших інженерних операцій. Помилка може призвести до збою транзакцій та катастрофічного падіння позицій у пошуку Google.

Нижче наведено перевірений покроковий інженерний план.

---

### Етап 1: Підготовка DNS та аудит адрес

За 7 днів до перемикання:
1. Зменшуємо DNS TTL до 300 секунд (5 хвилин) для швидкого оновлення зон.
2. Проводимо повне сканування старого сайту, фіксуючи всі діючі URL-адреси та коди відповідей.

---

### Етап 2: Реплікація бази даних у реальному часі

Щоб уникнути зупинки сайту, використовується логічна реплікація даних між старим сервером та новою хмарою AWS:

\`\`\`bash
# Налаштування реплікації між серверами
CREATE PUBLICATION migration_pub FOR ALL TABLES;
CREATE SUBSCRIPTION migration_sub
  CONNECTION 'host=legacy-db.internal dbname=app user=rep_user password=secret'
  PUBLICATION migration_pub;
\`\`\`

Дані залишаються синхронізованими до моменту перемикання.

---

### Етап 3: Швидкі 301-редиректи на рівні Nginx

Збереження SEO вимагає миттєвої переадресації без навантаження на бекенд:

\`\`\`nginx
map $uri $redirect_target {
    default "";
    /legacy-services/custom-software /ua/projects/custom-software;
    /about-us.php /ua#about;
}

server {
    listen 443 ssl http2;
    if ($redirect_target != "") {
        return 301 $redirect_target;
    }
}
\`\`\`

---

### Етап 4: Канаркове перемикання та контроль

Трафік переводиться поступово: спочатку 10% для моніторингу помилок та навантаження. За відсутності аномалій протягом 2 годин обсяг доводиться до 100%.

---

### Підсумки впровадження

- **Доступність під час міграції:** 100% (нуль хвилин простою).
- **Збереження SEO:** 100% пошукового трафіку збережено.
- **Швидкість відповіді (P95):** прискорена на 48% на нових серверах.`,es:`### Seguridad en migraciones críticas

Trasladar un portal empresarial requiere un protocolo riguroso para evitar pérdida de transacciones o caídas en el posicionamiento orgánico de Google.

---

### Fase 1: Reducción de TTL y rastreo inicial

Una semana antes de la intervención se reduce el TTL de DNS a 300 segundos y se mapean todas las URLs indexables del sistema actual.

---

### Fase 2: Replicación en tiempo real

La base de datos se sincroniza continuamente con la nueva infraestructura en AWS mediante flujos de replicación lógica, evitando pausas en el servicio:

\`\`\`bash
CREATE PUBLICATION migration_pub FOR ALL TABLES;
CREATE SUBSCRIPTION migration_sub
  CONNECTION 'host=legacy-db.internal dbname=app user=rep_user password=secret'
  PUBLICATION migration_pub;
\`\`\`

---

### Fase 3: Redirecciones 301 ultrarrápidas en Nginx

El traspaso de autoridad SEO se gestiona en el proxy inverso antes de alcanzar la capa de aplicación:

\`\`\`nginx
map $uri $redirect_target {
    default "";
    /legacy-services/custom-software /es/projects/custom-software;
    /about-us.php /es#about;
}

server {
    listen 443 ssl http2;
    if ($redirect_target != "") {
        return 301 $redirect_target;
    }
}
\`\`\`

---

### Fase 4: Despliegue progresivo

Se transfiere inicialmente el 10% de los usuarios. Tras verificar métricas de latencia y estabilidad, se completa la migración al 100%.

---

### Resultados

- **Disponibilidad:** 100% durante todo el proceso.
- **Tráfico SEO:** retención íntegra del volumen orgánico.
- **Latencia P95:** mejorada en un 48%.`}}];function t(t){return e.find(e=>e.slug===t)}function n(e,t){let n=t===`ua`||t===`es`?t:`en`;return e.title[n]||e.title.en}function r(e,t){let n=t===`ua`||t===`es`?t:`en`;return e.description[n]||e.description.en}function i(e,t){let n=t===`ua`||t===`es`?t:`en`;return e.readTime[n]||e.readTime.en}function a(e,t){let n=t===`ua`||t===`es`?t:`en`;return e.categoryLabel[n]||e.categoryLabel.en}function o(e,t){let n=t===`ua`||t===`es`?t:`en`;return e.tldr[n]||e.tldr.en}export{i as a,t as i,a as n,n as o,r,o as s,e as t};