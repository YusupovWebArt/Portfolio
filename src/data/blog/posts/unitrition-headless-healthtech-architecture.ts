import type { BlogPost } from '../types'

export const unitritionHeadlessHealthtechArchitecturePost: BlogPost = {
  slug: 'unitrition-headless-healthtech-architecture',
  title: {
    en: 'Unitrition Architecture Deep-Dive: Engineering a Headless HealthTech & Precision Nutrition Platform with Next.js 16, WordPress & Supabase',
    ua: 'Повний розбір архітектури Unitrition: розробка Headless HealthTech-платформи персоналізованого харчування на Next.js 16, WordPress та Supabase',
    es: 'Análisis profundo de la arquitectura Unitrition: ingeniería de una plataforma HealthTech Headless con Next.js 16, WordPress y Supabase',
  },
  description: {
    en: 'Executive and technical breakdown of Unitrition (unitrition.info): decoupling WordPress CMS from Next.js 16 App Router, integrating USDA FoodData Central API for real-time Bread Units and glycemic curve modeling across 10 clinical diet frameworks, and securing user data with Supabase RLS.',
    ua: 'Технічний та архітектурний розбір платформи Unitrition (unitrition.info): поєднання Headless WordPress із Next.js 16 App Router, інтеграція USDA FoodData Central API для розрахунку Хлібних Одиниць і глікемічних кривих для 10 дієт та захист даних через Supabase RLS.',
    es: 'Desglose ejecutivo y técnico de Unitrition (unitrition.info): desacoplamiento de WordPress CMS con Next.js 16 App Router, integración de la API USDA FoodData Central para el cálculo de Unidades de Pan y curvas glucémicas en 10 dietas, y seguridad con Supabase RLS.',
  },
  date: '2026-10-21',
  readTime: {
    en: '8 min read',
    ua: '8 хв читання',
    es: '8 min de lectura',
  },
  category: 'architecture-comparison',
  categoryLabel: {
    en: 'System Architecture',
    ua: 'Системна архітектура',
    es: 'Arquitectura de Sistemas',
  },
  tags: ['Next.js 16', 'Headless WordPress', 'Supabase', 'USDA API', 'HealthTech', 'TypeScript', 'Schema.org'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/portfolio/sliders/nextjs/unitrition/unitrition-slide1.webp',
  appliedProjects: [
    {
      projectId: 29000,
      slug: 'unitrition',
      name: 'Unitrition',
      note: {
        en: 'Fullstack precision nutrition platform supporting 10 dietary protocols, USDA FoodData Central API integration, Bread Units calculator, and bilingual EN/ES architecture.',
        ua: 'Fullstack-платформа персоналізованого харчування з підтримкою 10 дієтичних протоколів, інтеграцією USDA API, калькулятором Хлібних Одиниць та двомовною архітектурою EN/ES.',
        es: 'Plataforma fullstack de nutrición personalizada con soporte para 10 protocolos dietéticos, integración con API USDA, calculadora de Unidades de Pan y arquitectura bilingüe EN/ES.',
      },
    },
  ],
  tldr: {
    en: [
      'Decoupled Hybrid Architecture: WordPress acts strictly as a headless editorial CMS via REST API, while Next.js 16 App Router delivers sub-second SSR/ISR pages and interactive dietary calculators.',
      'Server-side USDA FoodData Central API proxy normalizes raw macro/micronutrient payloads and powers real-time Bread Units (BU) and Continuous Glucose Monitoring (CGM) curve simulations.',
      'Deterministic 10-Diet Scoring Engine evaluates foods instantaneously against clinical thresholds (Keto, Low-GI, Mediterranean, Low-FODMAP, Renal, Diabetic, etc.) with color-coded traffic-light indicators.',
      'Zero-Trust user data isolation: personal dietary profiles and authentication are handled in Supabase PostgreSQL with Row Level Security (RLS), completely separated from the editorial CMS.',
    ],
    ua: [
      'Розділена гібридна архітектура: WordPress виступає виключно як headless-редакційна CMS через REST API, тоді як Next.js 16 App Router забезпечує субсекундний SSR/ISR рендеринг та інтерактивні калькулятори.',
      'Серверний проксі-шар до державної бази USDA FoodData Central API нормалізує нутрієнти та обчислює Хлібні Одиниці (ХО) і прогнозні глікемічні криві (CGM) у реальному часі.',
      'Детермінований рушій скорингу для 10 дієтичних протоколів миттєво оцінює продукти за клінічними порогами з колірним кодуванням («Дозволено / Помірно / Заборонено»).',
      'Zero-Trust ізоляція даних: авторизація та персональні профілі харчування зберігаються у Supabase PostgreSQL із Row Level Security (RLS) окремо від CMS.',
    ],
    es: [
      'Arquitectura híbrida desacoplada: WordPress actúa exclusivamente como CMS editorial headless vía REST API, mientras que Next.js 16 App Router ofrece páginas SSR/ISR subsegundo y calculadoras interactivas.',
      'Un proxy servidor para la API USDA FoodData Central normaliza macronutrientes y calcula Unidades de Pan (BU) y simulaciones de curvas glucémicas (CGM) en tiempo real.',
      'El motor determinista de puntuación para 10 dietas evalúa alimentos al instante frente a umbrales clínicos con indicadores visuales por colores.',
      'Aislamiento Zero-Trust de datos: la autenticación y los perfiles dietéticos se gestionan en Supabase PostgreSQL con Row Level Security (RLS), separados del CMS editorial.',
    ],
  },
  content: {
    en: `### 1. Executive Summary & The HealthTech Challenge

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
3. **Input Validation & Rate Protection**: Search queries and calculator inputs are sanitized and debounced before hitting the server proxy, preventing upstream API quota exhaustion.`,

    ua: `### 1. Executive Summary та задача HealthTech-інженерії

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
3. **Захист від перевантаження API**: Дебаунсинг на клієнті та серверне кешування захищають зовнішні шлюзи від спам-запитів.`,

    es: `### 1. Resumen Ejecutivo y el Desafío en HealthTech

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
3. **Validación y Control de Tasa**: Las búsquedas pasan por debounce y caché en el servidor para evitar abusos de cuota.`,
  },
}
