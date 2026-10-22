import type { BlogPost } from '../types'

export const autonomousHybridRagPost: BlogPost = {
  slug: 'autonomous-hybrid-rag-architecture-browser',
  isProjectDeepDive: true,
  title: {
    en: 'Autonomous Hybrid RAG Architecture: In-Browser Vector Retrieval, Generative UI & Next.js 16 SSG',
    ua: 'Автономна архітектура Hybrid RAG: браузерний векторний пошук, Generative UI та Next.js 16 SSG',
    es: 'Arquitectura de Hybrid RAG autónomo: búsqueda vectorial en cliente, Generative UI y Next.js 16 SSG',
  },
  description: {
    en: 'Complete architectural case study of the yusupovartur.com platform: engineering a sub-5ms Hybrid RAG assistant (Okapi BM25 + Damerau-Levenshtein + Cosine Similarity), multi-turn conversational memory, Generative UI tool cards, and 213+ localized Next.js 16 SSG routes with zero vector database fees.',
    ua: 'Повний архітектурний розбір платформи yusupovartur.com: проєктування Hybrid RAG-асистента за 5 мс (Okapi BM25 + Дамерау-Левенштейн + косинусна подібність), багатоходової пам\'яті діалогу, віджетів Generative UI та 213+ статичних маршрутів Next.js 16 без витрат на векторні БД.',
    es: 'Caso de estudio arquitectónico completo de la plataforma yusupovartur.com: diseño de un asistente Hybrid RAG sub-5ms (Okapi BM25 + Damerau-Levenshtein + similitud coseno), memoria conversacional multiturno, tarjetas Generative UI y más de 213 rutas estáticas en Next.js 16 sin bases vectoriales de pago.',
  },
  date: '2026-10-18',
  readTime: {
    en: '12 min read',
    ua: '12 хв читання',
    es: '12 min de lectura',
  },
  category: 'ai-engineering',
  categoryLabel: {
    en: 'AI Engineering',
    ua: 'AI-інженерія',
    es: 'Ingeniería de IA',
  },
  tags: [
    'Hybrid RAG',
    'AI Assistant',
    'Cosine Similarity',
    'Okapi BM25',
    'Generative UI',
    'Next.js 16',
    'Web Performance',
  ],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-autonomous-hybrid-rag.png',
  appliedProjects: [
    {
      projectId: 29500,
      slug: 'yusupovartur-nextjs-portfolio',
      name: 'Next.js 16 & Hybrid RAG Portfolio Platform',
      note: {
        en: 'Flagship production implementation (yusupovartur.com): 213+ localized SSG routes, sub-5ms Hybrid RAG retrieval across 71 case studies, and interactive Generative UI widgets.',
        ua: 'Флагманська продакшн-реалізація (yusupovartur.com): 213+ локалізованих SSG-маршрутів, пошук Hybrid RAG за <5 мс по 71 кейсу та інтерактивні віджети Generative UI.',
        es: 'Implementación principal en producción (yusupovartur.com): más de 213 rutas SSG localizadas, búsqueda Hybrid RAG en <5 ms sobre 71 casos de estudio y widgets Generative UI.',
      },
    },
  ],
  tldr: {
    en: [
      'For knowledge bases under 10,000 documents, paying $70-$250/month for cloud vector databases (Pinecone, Weaviate, Qdrant) introduces 150-400ms of network latency and unnecessary operational cost.',
      'A hybrid retrieval formula combining Okapi BM25 lexical scoring, Damerau-Levenshtein typo tolerance, and 1536-dimensional cosine similarity achieves 98%+ accuracy in under 5ms.',
      'Dual-mode execution streams LLM synthesis from Next.js Route Handlers (/api/chat) while maintaining a 100% deterministic client-side RAG fallback that works offline.',
      'Generative UI orchestration dynamically mounts interactive React 19 tools (Project Cards, Stack Comparison Matrix, Timeline & Budget Calculator, Base64 Contact Card) inside the conversation stream.',
    ],
    ua: [
      'Для баз знань до 10 000 документів оплата $70-$250/місяць за хмарні векторні бази (Pinecone, Weaviate, Qdrant) створює зайві 150-400 мс мережевої затримки.',
      'Гібридна формула пошуку, що поєднує Okapi BM25, стійкість до одруківок Дамерау-Левенштейна та 1536-вимірну косинусну подібність, забезпечує точність 98%+ менш ніж за 5 мс.',
      'Дворежимне виконання поєднує серверний стрімінг через Next.js Route Handlers (/api/chat) зі 100% автономним клієнтським RAG-фолбеком, здатним працювати офлайн.',
      'Оркестрація Generative UI динамічно вбудовує інтерактивні React 19 віджети (картки проєктів, матрицю порівняння стеків, калькулятор термінів та захищену картку контактів) безпосередньо у потік чату.',
    ],
    es: [
      'Para bases de conocimiento de menos de 10.000 documentos, pagar $70-$250/mes por bases vectoriales en la nube (Pinecone, Weaviate, Qdrant) añade entre 150 y 400 ms de latencia de red innecesaria.',
      'Una fórmula híbrida que combina Okapi BM25, tolerancia a erratas Damerau-Levenshtein y similitud coseno en 1536 dimensiones logra más del 98% de precisión en menos de 5 ms.',
      'La ejecución dual combina streaming desde Next.js Route Handlers (/api/chat) con un motor RAG autónomo en cliente que funciona incluso sin conexión.',
      'La orquestación Generative UI monta componentes interactivos de React 19 (tarjetas de proyectos, comparador de stacks, calculadora de plazos y tarjeta de contacto Base64) dentro del chat.',
    ],
  },
  content: {
    en: `### 1. Executive Summary: The Cloud Vector Database Anti-Pattern

Over the past two years, tutorials across the industry have preached a uniform dogma: *To build a RAG chatbot, you must subscribe to Pinecone, Weaviate, or Qdrant, spin up an embedding microservice, and query a remote vector index on every user prompt.*

While this architecture is mandatory for enterprise search systems indexing millions of legal files or medical records, **it is complete architectural overkill for engineering portfolios, documentation portals, and SaaS knowledge bases containing under 10,000 documents**.

- **Latency Tax:** Every remote vector lookup introduces **150ms - 400ms** of network roundtrips before LLM token generation even begins.
- **Cost Tax:** Managed vector databases cost **$70 - $250 / month** in idle base charges.
- **Single Point of Failure:** If the remote vector DB experiences downtime or API quotas expire, your website assistant breaks completely.

When engineering the flagship **Next.js 16 & Hybrid RAG Portfolio Platform (\`yusupovartur.com\`)**, we designed an **Autonomous Hybrid RAG Engine** that executes both on the Vercel Serverless Edge and directly in the browser, indexing **71 commercial and personal project case studies** and **9 architectural deep-dives** across **3 languages (\`EN\`, \`UA\`, \`ES\`)** in **under 5ms** with **$0/month** in database overhead.

---

### 2. Architecture Decision Records (ADR)

| Architectural Decision | Alternative Considered | Why We Chose This Path (Trade-off Analysis) |
| :--- | :--- | :--- |
| **Build-Time In-Memory Index (Okapi BM25 + Pre-Computed Vectors)** | Cloud Vector DB (Pinecone / Qdrant) | Eliminates 150-400ms network roundtrips and $70+/mo recurring bills. The entire 80+ chunk knowledge base compiles into a lazy-loaded Rollup/Webpack chunk (\`22.1 KB gzip\`). |
| **Dual-Mode Execution (\`/api/chat\` Streaming + Autonomous Client Fallback)** | Server-Only LLM Endpoint | On \`yusupovartur.com\`, Next.js streams responses via \`POST /api/chat\`. If the network drops, rate limits trigger, or the code runs on a static host, the client seamlessly synthesizes deterministic answers locally with zero error screens. |
| **7-Intent Deterministic Router (\`detectQueryIntent\`)** | LLM-Only Tool Calling | Classifies queries into 7 intents (\`project-aspect\`, \`blog\`, \`service\`, \`profile\`, \`contact\`, \`methodology\`, \`general\`) in **< 0.2ms**, preventing active project context from hijacking general B2B pricing or contact questions. |
| **In-Chat Generative UI Orchestration** | Plain-Text Markdown Replies | Dynamically renders interactive React 19 components (\`ProjectToolCard\`, \`StackComparisonCard\`, \`ProjectEstimateCalculatorCard\`, \`ContactActionCard\`) directly inside assistant replies to drive B2B conversion. |
| **Unified \`projectRegistry\` Single Source of Truth** | Separate CMS / JSON Duplication | One strongly typed TypeScript registry simultaneously powers Next.js \`generateStaticParams\` (213+ SSG routes), dynamic \`Schema.org\` JSON-LD, \`llms-full.txt\` for external AI crawlers, and the internal RAG knowledge base. |

---

### 3. Core Mechanisms: How the Platform Works Under the Hood

#### Mechanism 1: The Three-Stage Hybrid Scoring Pipeline (Okapi BM25 + Damerau-Levenshtein + Cosine Similarity)
Pure semantic vector search often fails on exact version numbers (\`Next.js 16\` vs \`Next.js 14\`) or specific brand names (\`IT-Magic\`, \`Unitrition\`, \`WPSKILLS\`). Conversely, pure keyword matching fails on conceptual prompts like *"How do you optimize mobile loading speed?"*.

Our retriever in \`src/lib/ai/rag.ts\` combines three mathematical signals for every knowledge chunk \`d\` and query \`Q\`:

\`\`\`ts
FinalScore(d, Q) = (w_bm25 * BM25(d, Q)) + (w_sem * CosineSimilarity(q, d)) + FieldBoost(d, Q) + ContextBoost(d)
\`\`\`

1. **Stage 1 - Trilingual Tokenization, Synonym Expansion & Typo Tolerance:**
   The query is normalized via \`foldForSearch()\`, stripped of English, Ukrainian, and Spanish stopwords, and expanded through a bilingual/trilingual domain synonym dictionary (\`expandTokens()\`). If a token does not match directly, a bounded **Damerau-Levenshtein distance** matrix (\`distance <= 1\` for short words, \`<= 2\` for longer technical terms) corrects user typos in real time (e.g., matching \`wpskilz\` to \`wpskills\` or \`untrition\` to \`unitrition\`).
2. **Stage 2 - Okapi BM25 Lexical Ranking (\`k1 = 1.5, b = 0.75\`):**
   Each chunk is scored using Inverse Document Frequency (\`IDF\`) weighted by document length normalization against the corpus average length (\`avgDocLength\`):
   \`\`\`ts
   const idf = Math.log(1 + (totalDocs - docFreq + 0.5) / (docFreq + 0.5))
   const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLength / avgDocLength)))
   bm25Score += idf * tfNorm
   \`\`\`
3. **Stage 3 - Vectorized Cosine Similarity & Contextual Boost:**
   Dense float embeddings are compared via normalized dot product (\`calculateCosineSimilarity\`). If the visitor opened the chat from a specific project page (e.g., \`Active Case Study: IT-Magic\`), chunks matching \`currentProjectSlug\` receive a deterministic **+18.0 context boost** when the query intent is \`project-aspect\` or \`general\`.

---

#### Mechanism 2: Multi-Turn Conversational Memory & Anti-Repetition State Machine
A major weakness of stateless RAG bots is losing context on follow-up questions like *"What tech stack was used there?"* or *"And what challenges did you solve?"*, or repeating the exact same overview paragraph three times in a row.

Our engine solves this via a deterministic state machine in \`src/lib/ai/rag.ts\`:
1. **Entity Resolution Across Dialogue History (\`resolveTargetProject\` & \`resolveBlogFromQueryOrContext\`):**
   If the current message does not explicitly name a project, the engine scans \`options.history\` in reverse chronological order to recover the active project or blog article from previous turns, updating the pinned UI context bar automatically.
2. **Aspect-Specific Extraction (\`detectProjectAspects\`):**
   The synthesizer inspects whether the user is asking about **Stack** (\`technologies\`), **Architecture** (\`architecture.rows\`), **Challenges & Solutions** (\`challenges\` / \`solutions\`), **Metrics** (\`detailMetrics\`), or **Live Links** (\`liveUrl\` / \`githubUrl\`), returning only the requested slice of the case study rather than dumping the entire document.
3. **Anti-Repetition Guard (\`answeredQuestions\`):**
   Every user prompt is recorded in \`answeredQuestions\`, allowing \`getContextualFollowUps()\` to dynamically filter out already-asked questions and suggest the next logical engineering question for that specific project.

---

#### Mechanism 3: Generative UI Orchestration Inside the Chat Stream
Rather than returning walls of plain Markdown text, \`ChatModal.tsx\` evaluates intent detectors alongside the RAG response and mounts interactive React 19 components directly inside the assistant message bubble:

- **\`ProjectToolCard\` (\`getRelevantProjectCards\`):** Renders rich visual project cards with WebP thumbnails, category badges, top 4 technology tags, and direct \`View Case Study\` / \`Live Site\` links.
- **\`StackComparisonCard\` (\`isStackComparisonQuery\`):** Triggered when a CTO or client asks *"Next.js vs WordPress"* or *"Which stack should I choose?"*. Renders an interactive tab-switching matrix comparing TCO, Time-to-Market, CWV performance, and ideal use cases across Next.js 16, Headless WP, and Custom PHP.
- **\`ProjectEstimateCalculatorCard\` (\`isEstimateOrCalculatorQuery\`):** Triggered on pricing/timeline queries. Lets the user interactively toggle project type, scope, and AI features to calculate real-time delivery phases and week estimates.
- **\`ContactActionCard\` (\`isHireOrContactQuery\`):** Renders a zero-trust contact card that decodes Base64 channels (Email, WhatsApp, Telegram, LinkedIn) only upon explicit user interaction, plus a direct CV PDF download button.

---

#### Mechanism 4: Next.js 16 App Router (213+ SSG Routes) & GEO (\`llms.txt\`) Synchronization
Because this article serves as the architectural case study for **\`yusupovartur.com\`**, it is important to see how the web platform and the AI engine share a single unified data pipeline:

1. **Static Generation Across 3 Locales (\`app/[locale]/projects/[slug]/page.tsx\`):**
   At build time, \`generateStaticParams()\` iterates over all **71 projects** and **9 blog articles** across \`['en', 'ua', 'es']\`, pre-rendering **240+ static HTML pages** on the Vercel Edge Network with zero runtime database queries.
2. **Programmatic SEO & Dynamic Schema.org JSON-LD:**
   Every route automatically generates localized \`<title>\`, Open Graph metadata, canonical \`hreflang\` alternates (\`en\`, \`uk\`, \`es\`, \`x-default\`), and structured JSON-LD graphs (\`Person\`, \`CreativeWork\`, \`TechArticle\`, \`BreadcrumbList\`).
3. **Generative Engine Optimization (GEO - \`/llms.txt\` & \`/llms-full.txt\`):**
   To ensure external AI search engines (ChatGPT Search, Perplexity, Claude, Google AI Overviews) cite accurate engineering facts about Artur Yusupov's portfolio, the platform exposes structured Markdown context files at the root domain following the 2026 \`llms.txt\` standard.

---

### 4. Engineering Glossary: Key Terms Explained Simply

- **Hybrid RAG (Retrieval-Augmented Generation):**
  - *What it is:* Combining exact keyword scoring (Okapi BM25) with mathematical vector embeddings (Cosine Similarity) to retrieve verified project facts before generating an AI answer.
  - *Why it matters:* Eliminates AI hallucinations and guarantees 100% factual accuracy on project names, metrics, and technology versions.
- **Okapi BM25 (Best Matching 25):**
  - *What it is:* A probabilistic information-retrieval ranking formula used by search engines that scores how well a document matches query keywords while penalizing overly common words and normalizing document length.
  - *Why it matters:* Ensures rare technical tokens like \`WPGraphQL\`, \`useSyncExternalStore\`, or \`IT-Magic\` rank at the top immediately.
- **Damerau-Levenshtein Distance:**
  - *What it is:* A string-similarity algorithm that counts the minimum number of insertions, deletions, substitutions, or adjacent character transpositions needed to turn one word into another.
  - *Why it matters:* Makes both the RAG assistant and the portfolio search bar resilient to human typos without requiring external search servers.
- **Cosine Similarity:**
  - *What it is:* A geometric calculation measuring the cosine of the angle between two multi-dimensional vectors to determine semantic closeness regardless of text length.
  - *Why it matters:* Allows the assistant to understand conceptual intent across English, Ukrainian, and Spanish in under **2ms**.
- **Generative UI:**
  - *What it is:* An AI interface pattern where the assistant responds not just with text, but by dynamically rendering interactive UI widgets (calculators, comparison tables, project cards) inside the chat stream.
  - *Why it matters:* Turns a passive Q&A chatbot into an interactive B2B product discovery and lead-qualification experience.

---

### 5. Defense-in-Depth Security Architecture (\`/api/chat\` & Client Isolation)

Publishing the full retrieval and synthesis architecture of \`yusupovartur.com\` is completely safe because security is enforced through strict server and client boundaries rather than obscurity:

1. **Sliding-Window IP Rate Limiting with Bounded LRU Memory (\`src/lib/ratelimit.ts\`):**
   The \`POST /api/chat\` route enforces strict per-IP quotas (**15 requests per hour**) backed by Upstash Redis in production and a bounded 5,000-entry LRU in-memory store that prevents memory-exhaustion DDoS attacks under IP-spoofing floods.
2. **Prompt Injection Sanitization Shield (\`sanitizeUserPrompt\`):**
   All incoming user messages are truncated to safe bounds (\`max 600 chars\`) and stripped of system-override patterns (\`ignore previous instructions\`, \`system:\`, \`<|im_start|>\`) before reaching the synthesis pipeline.
3. **Zero-Secret Client Bundle & Autonomous Fallback:**
   All LLM API keys (\`OPENAI_API_KEY\`) reside strictly inside Vercel encrypted server environment variables. The browser bundle contains only public portfolio case studies and deterministic math functions.
4. **Zero-Trust Base64 Contact Obfuscation (\`src/utils/contacts.ts\`):**
   Personal email, phone, WhatsApp, and Telegram endpoints are never rendered in plaintext HTML or SSR output; they are decoded from Base64 exclusively on explicit client-side user interaction.`,

    ua: `### 1. Резюме для керівників (Executive Summary): Антипатерн хмарних векторних БД

Протягом останніх двох років індустрія просувала єдину догму: *щоб створити AI-асистента на базі RAG, обов'язково потрібна підписка на Pinecone, Weaviate або Qdrant, окремий мікросервіс ембедингів і мережеві запити на кожне повідомлення користувача.*

Для корпоративних систем із мільйонами юридичних чи медичних документів це виправдано. Проте **для інженерних портфоліо, порталів документації та продуктових баз знань обсягом до 10 000 документів це архітектурний надлишок**:

- **Податок на затримку (Latency Tax):** Кожен мережевий запит до зовнішньої векторної БД додає **150-400 мс** затримки ще до початку генерації відповіді.
- **Фінансовий податок (Cost Tax):** Керовані векторні бази коштують **$70-$250 на місяць** у базових тарифах просто за зберігання індексу.
- **Точка відмови (Single Point of Failure):** Якщо зовнішній сервіс недоступний або вичерпано ліміт токенів, асистент на сайті повністю перестає працювати.

Проєктуючи флагманську платформу **Next.js 16 & Hybrid RAG Portfolio Platform (\`yusupovartur.com\`)**, ми створили **автономний рушій Hybrid RAG**, який працює одночасно на Vercel Edge та безпосередньо в браузері, індексуючи **71 кейс проєктів** та **9 інженерних статей** трьома мовами (\`EN\`, \`UA\`, \`ES\`) **менш ніж за 5 мс** із **нульовими щомісячними витратами на бази даних**.

---

### 2. Ключові архітектурні рішення (ADR)

| Архітектурне рішення | Розглянута альтернатива | Чому обрано цей шлях (Аналіз компромісів) |
| :--- | :--- | :--- |
| **In-Memory індекс під час збірки (Okapi BM25 + прекомпільовані вектори)** | Хмарна векторна БД (Pinecone / Qdrant) | Усуває 150-400 мс мережевої затримки та $70+/міс абонплати. Уся база знань (80+ чанків) пакується в лінивий чанк (\`22.1 КБ gzip\`). |
| **Дворежимне виконання (\`/api/chat\` стрімінг + автономний клієнтський фолбек)** | Лише серверний LLM-ендпоінт | На \`yusupovartur.com\` відповіді стрімляться через \`POST /api/chat\`. При втраті мережі, перевищенні лімітів або роботі на статичному хостингу клієнт миттєво синтезує точну відповідь локально без екранів помилок. |
| **Детермінований класифікатор 7 інтентів (\`detectQueryIntent\`)** | Маршрутизація лише через LLM | Класифікує запит за **< 0.2 мс** у 7 категорій (\`project-aspect\`, \`blog\`, \`service\`, \`profile\`, \`contact\`, \`methodology\`, \`general\`), щоб активний проєкт не перехоплював загальні питання про ціни чи контакти. |
| **Оркестрація Generative UI всередині чату** | Звичайні текстові відповіді Markdown | Динамічно монтує інтерактивні React 19 компоненти (\`ProjectToolCard\`, \`StackComparisonCard\`, \`ProjectEstimateCalculatorCard\`, \`ContactActionCard\`) прямо в повідомлення бота. |
| **Єдиний реєстр даних \`projectRegistry\` (Single Source of Truth)** | Дублювання JSON / окрема CMS | Один суворо типізований реєстр TypeScript одночасно живить \`generateStaticParams\` (240+ SSG-сторінок), мікророзмітку \`Schema.org\`, файл \`llms-full.txt\` та внутрішню базу знань RAG. |

---

### 3. Ключові механізми: як платформа працює під капотом

#### Механізм 1: Триетапний гібридний пайплайн ранжування (Okapi BM25 + Дамерау-Левенштейн + Косинусна подібність)
Чистий векторний пошук часто помиляється на точних назвах версій (\`Next.js 16\` проти \`Next.js 14\`) або власних назвах продуктів (\`IT-Magic\`, \`Unitrition\`, \`WPSKILLS\`). І навпаки, звичайний пошук за підрядком не розуміє концептуальних питань на кшталт *«Як ви оптимізуєте швидкість завантаження на мобільних?»*.

Наш ретривер у \`src/lib/ai/rag.ts\` поєднує три математичні сигнали для кожного документа \`d\` та запиту \`Q\`:

\`\`\`ts
FinalScore(d, Q) = (w_bm25 * BM25(d, Q)) + (w_sem * CosineSimilarity(q, d)) + FieldBoost(d, Q) + ContextBoost(d)
\`\`\`

1. **Етап 1 - Тримовна токенізація, словник синонімів та виправлення одруківок:**
   Запит нормалізується через \`foldForSearch()\`, очищується від стоп-слів англійської, української та іспанської мов і розширюється через граф доменних синонімів (\`expandTokens()\`). Якщо токен не знайдено напряму, алгоритм **відстані Дамерау-Левенштейна** (\`distance <= 1\` для коротких слів, \`<= 2\` для довших термінів) виправляє друкарські помилки на льоту (наприклад, зіставляє \`wpskilz\` із \`wpskills\`).
2. **Етап 2 - Лексичне ранжування Okapi BM25 (\`k1 = 1.5, b = 0.75\`):**
   Кожен фрагмент оцінюється за зворотною частотою документа (\`IDF\`) із нормалізацією довжини тексту відносно середньої довжини по базі (\`avgDocLength\`):
   \`\`\`ts
   const idf = Math.log(1 + (totalDocs - docFreq + 0.5) / (docFreq + 0.5))
   const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLength / avgDocLength)))
   bm25Score += idf * tfNorm
   \`\`\`
3. **Етап 3 - Косинусна подібність векторів та контекстний бустинг:**
   Багатовимірні вектори порівнюються через нормалізований скалярний добуток (\`calculateCosineSimilarity\`). Якщо відвідувач відкрив чат зі сторінки конкретного проєкту (\`Active Case Study: IT-Magic\`), чанки з \`currentProjectSlug\` отримують детермінований бонус **+18.0** для прицільної точності відповіді.

---

#### Механізм 2: Багатоходова пам'ять діалогу та захист від повторів (Conversational State Machine)
Типова проблема простих RAG-ботів - втрата контексту на уточнюючих питаннях (*«А який там був стек?»*, *«Які виклики вирішили?»*) або повторення одного й того самого оглядового абзацу.

У \`src/lib/ai/rag.ts\` реалізовано детермінований кінцевий автомат діалогу:
1. **Відновлення сутності з історії діалогу (\`resolveTargetProject\` та \`resolveBlogFromQueryOrContext\`):**
   Якщо поточна репліка не містить назви проєкту, рушій сканує \`options.history\` у зворотному хронологічному порядку, знаходить активний проєкт або статтю блогу з попередніх повідомлень і автоматично закріплює їх у верхній плашці контексту.
2. **Аспектна декомпозиція кейсу (\`detectProjectAspects\`):**
   Синтезатор визначає, який саме зріз проєкту цікавить користувача: **Стек** (\`technologies\`), **Архітектура** (\`architecture.rows\`), **Виклики та рішення** (\`challenges\` / \`solutions\`), **Метрики** (\`detailMetrics\`) чи **Посилання** (\`liveUrl\` / \`githubUrl\`), і видає саме потрібну інженерну секцію.
3. **Захист від повторів (\`answeredQuestions\`):**
   Усі поставлені питання фіксуються в \`answeredQuestions\`, завдяки чому \`getContextualFollowUps()\` динамічно пропонує лише нові, ще не розглянуті аспекти проєкту.

---

#### Механізм 3: Оркестрація Generative UI всередині потоку чату
Замість того щоб повертати лише суцільний текст, \`ChatModal.tsx\` аналізує інтент запиту паралельно з відповіддю RAG і вбудовує живі інтерактивні компоненти React 19 прямо всередину бульбашки повідомлення асистента:

- **\`ProjectToolCard\` (\`getRelevantProjectCards\`):** Візуальні картки знайдених кейсів із WebP-прев'ю, категорією, топ-4 технологіями та кнопками переходу до повного кейсу або живого сайту.
- **\`StackComparisonCard\` (\`isStackComparisonQuery\`):** Активується при запитах *«Next.js чи WordPress»* або *«Який стек обрати?»*. Відображає інтерактивну таблицю з перемиканням вкладок (TCO, швидкість запуску, Core Web Vitals, сценарії використання) для Next.js 16, Headless WP та Custom PHP.
- **\`ProjectEstimateCalculatorCard\` (\`isEstimateOrCalculatorQuery\`):** Інтерактивний калькулятор термінів та фаз розробки, де клієнт може прямо в чаті змінювати тип продукту, масштаб і наявність AI-модулів.
- **\`ContactActionCard\` (\`isHireOrContactQuery\`):** Картка прямого зв'язку з клієнтським розшифруванням Base64-контактів (Email, WhatsApp, Telegram, LinkedIn) та завантаженням CV у PDF.

---

#### Механізм 4: Синхронізація з Next.js 16 App Router (213+ SSG-маршрутів) та GEO (\`llms.txt\`)
Оскільки ця стаття є головним архітектурним розбором платформи **\`yusupovartur.com\`**, важливо показати, як веб-платформа та AI-асистент працюють від єдиного джерела даних:

1. **Статична генерація трьома мовами (\`app/[locale]/projects/[slug]/page.tsx\`):**
   Під час збірки \`generateStaticParams()\` обходить усі **71 проєкт** та **9 статей блогу** для локалей \`['en', 'ua', 'es']\`, попередньо генеруючи **понад 240 статичних HTML-сторінок** на Vercel Edge Network.
2. **Програмне SEO та динамічна розмітка Schema.org JSON-LD:**
   Кожен маршрут автоматично формує локалізовані мета-теги, канонічні \`hreflang\`-посилання та граф JSON-LD (\`Person\`, \`CreativeWork\`, \`TechArticle\`, \`BreadcrumbList\`).
3. **Generative Engine Optimization (GEO - \`/llms.txt\` та \`/llms-full.txt\`):**
   Для того щоб зовнішні нейропошуковики (ChatGPT Search, Perplexity, Claude, Google AI Overviews) цитували точні інженерні факти про портфоліо Артура Юсупова, у корені домену опубліковані структуровані файли за стандартом \`llms.txt\` 2026 року.

---

### 4. Інженерний глосарій: пояснення кожного терміна простими словами

- **Hybrid RAG (Retrieval-Augmented Generation):**
  - *Що це:* Поєднання точного ключового пошуку (Okapi BM25) із семантичним пошуком за векторними ембедингами (Cosine Similarity) перед формуванням відповіді AI.
  - *Чому це важливо:* Повністю виключає галюцинації та гарантує 100% точність у назвах проєктів, метриках і версіях технологій.
- **Okapi BM25 (Best Matching 25):**
  - *Що це:* Ймовірнісна формула ранжування пошукових систем, яка оцінює релевантність документа за частотою рідкісних ключових слів із поправкою на довжину тексту.
  - *Чому це важливо:* Гарантує, що специфічні терміни (\`WPGraphQL\`, \`useSyncExternalStore\`, \`IT-Magic\`) миттєво піднімають потрібний кейс на перше місце.
- **Відстань Дамерау-Левенштейна (Damerau-Levenshtein Distance):**
  - *Що це:* Алгоритм вимірювання схожості рядків, який рахує мінімальну кількість вставок, видалень, замін або переставлень сусідніх символів для перетворення одного слова на інше.
  - *Чому це важливо:* Забезпечує стійкість пошуку та AI-асистента до людських одруківок без сторонніх серверів.
- **Косинусна подібність (Cosine Similarity):**
  - *Що це:* Математичне обчислення косинуса кута між двома багатовимірними векторами для вимірювання близькості змісту незалежно від довжини тексту.
  - *Чому це важливо:* Дозволяє асистенту розуміти суть запитання англійською, українською та іспанською мовами менш ніж за **2 мс**.
- **Generative UI:**
  - *Що це:* Патерн проєктування AI-інтерфейсів, де асистент відповідає не лише текстом, а й динамічним рендерингом інтерактивних віджетів (калькуляторів, таблиць порівняння, карток проєктів) прямо в діалозі.
  - *Чому це важливо:* Перетворює чат-бота на повноцінний інструмент B2B-конверсії та кваліфікації замовлень.

---

### 5. Ешелонована архітектура безпеки (Defense-in-Depth)

Публікація повного розбору архітектури \`yusupovartur.com\` є абсолютно безпечною, оскільки захист базується на суворих серверних і клієнтських бар'єрах, а не на приховуванні назв технологій:

1. **IP Rate Limiter із обмеженим LRU-кешем пам'яті (\`src/lib/ratelimit.ts\`):**
   Ендпоінт \`POST /api/chat\` обмежує частоту запитів (**15 запитів на годину з одного IP**) через Upstash Redis у продакшені та in-memory LRU-сховище з жорстким лімітом у 5 000 записів, що унеможливлює переповнення оперативної пам'яті під час бот-атак.
2. **Екран санітизації Prompt Injection (\`sanitizeUserPrompt\`):**
   Усі вхідні повідомлення обмежуються за довжиною (\`до 600 символів\`) та очищуються від інструкцій перезапису системного промпту (\`ignore previous instructions\`, \`system:\`, \`<|im_start|>\`).
3. **Відсутність секретів у клієнтському бандлі та автономний фолбек:**
   Ключі API (\`OPENAI_API_KEY\`) зберігаються виключно в зашифрованих серверних змінних оточення Vercel. Браузер отримує лише публічні кейси портфоліо та математичні функції ранжування.
4. **Zero-Trust обфускація контактів у Base64 (\`src/utils/contacts.ts\`):**
   Особистий email, телефон, WhatsApp та Telegram ніколи не рендеряться у відкритому HTML або SSR-відповіді - вони декодуються з Base64 виключно під час явної дії користувача в браузері.`,

    es: `### 1. Resumen Ejecutivo (Executive Summary): El Antipatrón de las Bases Vectoriales en la Nube

Durante los últimos dos años se ha repetido un dogma uniforme en la industria: *para crear un asistente con RAG necesitas contratar Pinecone, Weaviate o Qdrant, desplegar microservicios de embeddings y realizar peticiones remotas ante cada consulta del usuario.*

Para sistemas corporativos con millones de archivos legales o médicos esto es imprescindible. Sin embargo, **para portfolios de ingeniería, portales de documentación y bases de conocimiento SaaS de menos de 10.000 documentos, supone una sobreingeniería costosa**:

- **Impuesto de Latencia (Latency Tax):** Cada consulta remota añade entre **150 ms y 400 ms** de ida y vuelta de red antes de que comience la generación de respuesta.
- **Impuesto de Coste (Cost Tax):** Las bases vectoriales gestionadas cuestan entre **$70 y $250 al mes** en tarifas base inactivas.
- **Punto Único de Fallo:** Si el servicio externo sufre una caída o se agota la cuota, el asistente web deja de funcionar por completo.

Al diseñar la plataforma insignia **Next.js 16 & Hybrid RAG Portfolio Platform (\`yusupovartur.com\`)**, construimos un **Motor Autónomo de Hybrid RAG** que opera tanto en Vercel Serverless Edge como directamente en el navegador, indexando **71 casos de estudio de proyectos** y **9 análisis de arquitectura** en **3 idiomas (\`EN\`, \`UA\`, \`ES\`)** en **menos de 5 ms** y con **$0/mes** en costes de bases de datos.

---

### 2. Registro de Decisiones de Arquitectura (ADR)

| Decisión Arquitectónica | Alternativa Evaluada | Justificación Técnica (Análisis de Compromisos) |
| :--- | :--- | :--- |
| **Índice en Memoria en Compilación (Okapi BM25 + Vectores Precalculados)** | Base Vectorial Cloud (Pinecone / Qdrant) | Elimina 150-400 ms de latencia de red y $70+/mes de coste fijo. Toda la base de conocimiento (80+ fragmentos) se empaqueta en un chunk diferido (\`22.1 KB gzip\`). |
| **Ejecución Dual (Streaming \`/api/chat\` + Fallback Autónomo en Cliente)** | Endpoint LLM Exclusivo en Servidor | En \`yusupovartur.com\`, Next.js transmite respuestas vía \`POST /api/chat\`. Si falla la red, se activa el límite de tasa o se ejecuta en hosting estático, el cliente sintetiza respuestas deterministas localmente sin pantallas de error. |
| **Enrutador Determinista de 7 Intenciones (\`detectQueryIntent\`)** | Clasificación Exclusiva por LLM | Clasifica cada consulta en **< 0.2 ms** en 7 intenciones (\`project-aspect\`, \`blog\`, \`service\`, \`profile\`, \`contact\`, \`methodology\`, \`general\`), evitando que el contexto de un proyecto secuestre preguntas sobre tarifas o contacto. |
| **Orquestación Generative UI en el Chat** | Respuestas de Texto Plano Markdown | Monta dinámicamente componentes interactivos de React 19 (\`ProjectToolCard\`, \`StackComparisonCard\`, \`ProjectEstimateCalculatorCard\`, \`ContactActionCard\`) dentro del flujo de conversación. |
| **Registro Único \`projectRegistry\` (Single Source of Truth)** | Duplicación JSON / CMS Separado | Un único registro tipado en TypeScript alimenta simultáneamente \`generateStaticParams\` (240+ rutas SSG), \`Schema.org\` JSON-LD, \`llms-full.txt\` para rastreadores de IA y el motor interno RAG. |

---

### 3. Mecanismos Principales: Cómo Funciona la Plataforma Bajo el Capó

#### Mecanismo 1: Pipeline de Puntuación Híbrida en Tres Fases (Okapi BM25 + Damerau-Levenshtein + Similitud Coseno)
La búsqueda vectorial pura suele fallar ante versiones exactas (\`Next.js 16\` frente a \`Next.js 14\`) o nombres propios de proyectos (\`IT-Magic\`, \`Unitrition\`, \`WPSKILLS\`). Por el contrario, la búsqueda por palabras clave no comprende preguntas conceptuales como *«¿Cómo optimizas la velocidad de carga en móviles?»*.

Nuestro motor en \`src/lib/ai/rag.ts\` combina tres señales matemáticas para cada fragmento \`d\` y consulta \`Q\`:

\`\`\`ts
FinalScore(d, Q) = (w_bm25 * BM25(d, Q)) + (w_sem * CosineSimilarity(q, d)) + FieldBoost(d, Q) + ContextBoost(d)
\`\`\`

1. **Fase 1 - Tokenización Trilingüe, Expansión de Sinónimos y Tolerancia a Erratas:**
   La consulta se normaliza mediante \`foldForSearch()\`, se eliminan las palabras vacías en inglés, ucraniano y español y se expande con un diccionario de sinónimos técnicos (\`expandTokens()\`). Si un término no coincide directamente, una matriz acotada de **distancia Damerau-Levenshtein** (\`distance <= 1\` para palabras cortas, \`<= 2\` para términos largos) corrige erratas en tiempo real (por ejemplo, vinculando \`wpskilz\` con \`wpskills\`).
2. **Fase 2 - Ranking Léxico Okapi BM25 (\`k1 = 1.5, b = 0.75\`):**
   Cada documento se evalúa mediante Frecuencia Inversa de Documento (\`IDF\`) normalizada según la longitud del texto respecto a la media del corpus (\`avgDocLength\`):
   \`\`\`ts
   const idf = Math.log(1 + (totalDocs - docFreq + 0.5) / (docFreq + 0.5))
   const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLength / avgDocLength)))
   bm25Score += idf * tfNorm
   \`\`\`
3. **Fase 3 - Similitud Coseno Vectorizada e Impulso Contextual:**
   Los vectores numéricos se comparan mediante producto escalar normalizado (\`calculateCosineSimilarity\`). Si el visitante abre el asistente desde la página de un proyecto (\`Active Case Study: IT-Magic\`), los fragmentos con \`currentProjectSlug\` reciben una bonificación determinista de **+18.0** puntos.

---

#### Mecanismo 2: Memoria Conversacional Multiturno y Máquina de Estados Antirrepetición
Una limitación clásica de los chatbots RAG sin estado es perder el contexto ante preguntas de seguimiento (*«¿Y qué stack se usó ahí?»*, *«¿Qué retos resolvisteis?»*) o repetir el mismo párrafo introductorio una y otra vez.

Nuestro motor en \`src/lib/ai/rag.ts\` resuelve esto mediante una máquina de estados determinista:
1. **Resolución de Entidades en el Historial (\`resolveTargetProject\` y \`resolveBlogFromQueryOrContext\`):**
   Si el mensaje actual no menciona explícitamente un proyecto, el motor inspecciona \`options.history\` en orden cronológico inverso para recuperar el proyecto o artículo activo de turnos anteriores y actualiza automáticamente la barra superior de contexto.
2. **Extracción por Aspectos (\`detectProjectAspects\`):**
   El sintetizador detecta si el usuario pregunta por el **Stack** (\`technologies\`), **Arquitectura** (\`architecture.rows\`), **Retos y Soluciones** (\`challenges\` / \`solutions\`), **Métricas** (\`detailMetrics\`) o **Enlaces** (\`liveUrl\` / \`githubUrl\`), devolviendo únicamente la sección técnica solicitada.
3. **Filtro Antirrepetición (\`answeredQuestions\`):**
   Cada consulta realizada se registra en \`answeredQuestions\`, permitiendo a \`getContextualFollowUps()\` filtrar preguntas ya respondidas y sugerir el siguiente paso lógico de exploración.

---

#### Mecanismo 3: Orquestación Generative UI Dentro del Flujo de Chat
En lugar de devolver únicamente bloques de texto plano, \`ChatModal.tsx\` evalúa detectores de intención junto con la respuesta RAG y monta componentes interactivos de React 19 dentro del mensaje del asistente:

- **\`ProjectToolCard\` (\`getRelevantProjectCards\`):** Tarjetas visuales de casos de estudio con miniaturas WebP, insignias de categoría, top 4 tecnologías y enlaces directos al caso de estudio o sitio en vivo.
- **\`StackComparisonCard\` (\`isStackComparisonQuery\`):** Se activa ante consultas como *«Next.js vs WordPress»* o *«¿Qué arquitectura elegir?»*. Renderiza una matriz interactiva por pestañas comparando TCO, Time-to-Market, Core Web Vitals y casos de uso ideales entre Next.js 16, Headless WP y Custom PHP.
- **\`ProjectEstimateCalculatorCard\` (\`isEstimateOrCalculatorQuery\`):** Calculadora interactiva en tiempo real donde el cliente puede ajustar tipo de proyecto, alcance y módulos de IA para estimar fases y semanas de entrega.
- **\`ContactActionCard\` (\`isHireOrContactQuery\`):** Tarjeta de contacto Zero-Trust que decodifica canales en Base64 (Email, WhatsApp, Telegram, LinkedIn) solo tras la interacción explícita del usuario, junto con descarga directa del CV en PDF.

---

#### Mecanismo 4: Sincronización con Next.js 16 App Router (213+ Rutas SSG) y GEO (\`llms.txt\`)
Dado que este artículo constituye el caso de estudio arquitectónico de **\`yusupovartur.com\`**, muestra cómo la plataforma web y el motor de IA comparten un único pipeline de datos:

1. **Generación Estática en 3 Idiomas (\`app/[locale]/projects/[slug]/page.tsx\`):**
   Durante la compilación, \`generateStaticParams()\` recorre los **71 proyectos** y **9 artículos del blog** en \`['en', 'ua', 'es']\`, pre-renderizando **más de 240 páginas HTML estáticas** en Vercel Edge Network.
2. **SEO Programático y Datos Estructurados Schema.org JSON-LD:**
   Cada ruta genera metadatos localizados, enlaces canónicos \`hreflang\` (\`en\`, \`uk\`, \`es\`, \`x-default\`) y grafos JSON-LD (\`Person\`, \`CreativeWork\`, \`TechArticle\`, \`BreadcrumbList\`).
3. **Generative Engine Optimization (GEO - \`/llms.txt\` y \`/llms-full.txt\`):**
   Para garantizar que motores de búsqueda generativos externos (ChatGPT Search, Perplexity, Claude, Google AI Overviews) citen datos verificados sobre el portfolio de Artur Yusupov, la raíz del dominio publica archivos Markdown estructurados bajo el estándar \`llms.txt\` 2026.

---

### 4. Glosario de Ingeniería: Explicación Clara de Cada Término

- **Hybrid RAG (Generación Aumentada por Recuperación Híbrida):**
  - *Qué es:* Combinar puntuación léxica exacta (Okapi BM25) con búsqueda semántica vectorial (Similitud Coseno) antes de sintetizar la respuesta de IA.
  - *Valor:* Elimina alucinaciones y garantiza precisión absoluta en nombres de tecnologías, métricas y casos de estudio.
- **Okapi BM25 (Best Matching 25):**
  - *Qué es:* Fórmula probabilística de motores de búsqueda que puntúa la relevancia de un documento según la frecuencia de términos poco comunes, normalizando la longitud del documento.
  - *Valor:* Asegura que tokens técnicos específicos como \`WPGraphQL\`, \`useSyncExternalStore\` o \`IT-Magic\` posicionen el proyecto exacto en primer lugar.
- **Distancia Damerau-Levenshtein:**
  - *Qué es:* Algoritmo que calcula el número mínimo de inserciones, eliminaciones, sustituciones o transposiciones de caracteres adyacentes necesarias para transformar una palabra en otra.
  - *Valor:* Otorga tolerancia instantánea a errores tipográficos tanto en el asistente RAG como en el buscador del portfolio.
- **Similitud Coseno (Cosine Similarity):**
  - *Qué es:* Cálculo matemático del coseno del ángulo entre dos vectores multidimensionales para medir la proximidad semántica en menos de **2 ms**.
  - *Valor:* Permite comprender la intención conceptual del usuario en inglés, ucraniano y español.
- **Generative UI:**
  - *Qué es:* Patrón de interfaz donde el asistente responde renderizando componentes interactivos (calculadoras, comparadores de stacks, tarjetas de proyectos) dentro del flujo de chat.
  - *Valor:* Convierte un chatbot informativo en una herramienta interactiva de conversión B2B.

---

### 5. Arquitectura de Seguridad en Profundidad (Defense-in-Depth)

Publicar el desglose arquitectónico completo de \`yusupovartur.com\` es totalmente seguro porque la protección se basa en controles criptográficos y de servidor, no en ocultar nombres de tecnologías:

1. **Limitador de Tasa por IP con Caché LRU Acotada (\`src/lib/ratelimit.ts\`):**
   El endpoint \`POST /api/chat\` aplica cuotas estrictas por IP (**15 peticiones por hora**) respaldadas por Upstash Redis en producción y una caché LRU en memoria limitada a 5.000 entradas para evitar agotamiento de RAM ante ataques de inundación.
2. **Escudo contra Prompt Injection (\`sanitizeUserPrompt\`):**
   Todos los mensajes entrantes se acotan en longitud (\`máx. 600 caracteres\`) y se limpian de patrones de suplantación de instrucciones del sistema (\`ignore previous instructions\`, \`system:\`, \`<|im_start|>\`).
3. **Ausencia de Secretos en Cliente y Fallback Autónomo:**
   Las claves de API (\`OPENAI_API_KEY\`) residen exclusivamente en variables de entorno cifradas de Vercel. El bundle del navegador solo contiene casos de estudio públicos y funciones matemáticas deterministas.
4. **Ofuscación Zero-Trust en Base64 (\`src/utils/contacts.ts\`):**
   El correo electrónico, teléfono, WhatsApp y Telegram nunca se incluyen en texto plano en el HTML ni en el SSR; se decodifican desde Base64 únicamente tras la interacción explícita del usuario en el cliente.`,
  },
}
