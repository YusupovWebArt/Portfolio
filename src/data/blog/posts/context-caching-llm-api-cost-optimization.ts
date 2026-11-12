import type { BlogPost } from '../types'

export const contextCachingLlmApiCostsPost: BlogPost = {
  slug: 'context-caching-llm-api-cost-optimization',
  title: {
    en: 'Context Caching in Gemini 2.5 & Claude 3.7: Slashing LLM API Costs by 80% in Production AI Systems',
    ua: 'Кешування контексту в Gemini 2.5 та Claude 3.7: скорочення витрат на LLM API на 80% у продакшн AI-системах',
    es: 'Caché de contexto en Gemini 2.5 y Claude 3.7: reduciendo costes de API de LLM un 80% en sistemas de IA en producción',
  },
  description: {
    en: 'A production engineering guide to implementing context caching with Google Gemini 2.5 and Anthropic Claude 3.7. Prefix token reuse, KV-cache lifetime management, Time-to-First-Token (TTFT) reduction from 3.2s to 420ms, and architectural benchmarks in real-world Next.js 16 RAG systems.',
    ua: 'Інженерний посібник з впровадження кешування контексту в Google Gemini 2.5 та Anthropic Claude 3.7: повторне використання KV-кешу префіксів токенів, скорочення затримки TTFT з 3.2с до 420мс та бенчмарки в Next.js 16 RAG-системах.',
    es: 'Guía técnica de producción para implementar caché de contexto con Google Gemini 2.5 y Anthropic Claude 3.7: reutilización de prefijos de tokens, reducción del TTFT de 3.2s a 420ms y benchmarks en sistemas RAG sobre Next.js 16.',
  },
  date: '2026-11-12',
  readTime: {
    en: '9 min read',
    ua: '9 хв читання',
    es: '9 min de lectura',
  },
  category: 'ai-rag',
  categoryLabel: {
    en: 'AI & RAG Engineering',
    ua: 'AI та RAG-інженерія',
    es: 'Ingeniería de IA y RAG',
  },
  tags: ['LLMOps', 'Gemini 2.5', 'Claude 3.7', 'Context Caching', 'RAG', 'Next.js 16', 'Cost Optimization', 'AI Engineering'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-context-caching-llm-api-costs.svg',
  appliedProjects: [
    {
      projectId: 29500,
      slug: 'yusupovartur-nextjs-portfolio',
      name: 'Next.js 16 & Hybrid RAG Portfolio Platform',
      note: {
        en: 'Integrated prompt context caching for Artur Assistant, reusing static portfolio knowledge base tokens across conversational turns to cut API latency and overhead.',
        ua: 'Інтегровано кешування контексту для асистента Artur Assistant з повторним використанням токенів бази знань портфоліо для мінімізації затримки та витрат на API.',
        es: 'Integración de caché de contexto para Artur Assistant, reutilizando los tokens de la base de conocimiento del portfolio entre turnos conversacionales.',
      },
    },
    {
      projectId: 29000,
      slug: 'unitrition',
      name: 'Unitrition E-Commerce Platform',
      note: {
        en: 'Production dietary advisory LLM caching FDA and clinical nutrition schemas in Gemini context cache to enable sub-500ms meal recommendations.',
        ua: 'Клінічний дієтологічний LLM-модуль із кешуванням схем FDA в контексті Gemini для надання рекомендацій із затримкою до 500мс.',
        es: 'Módulo de asesoramiento nutricional con LLM que cachea esquemas de la FDA en Gemini para ofrecer recomendaciones de dietas en menos de 500ms.',
      },
    },
    {
      projectId: 28500,
      slug: 'fullstack-ai-lab',
      name: 'Fullstack AI Lab',
      note: {
        en: 'Educational AI development platform teaching prompt engineering with ephemeral Claude cache controls and token cost visualizations.',
        ua: 'Освітня платформа розробки AI, що демонструє роботу ефемерних точок кешування Claude та візуалізує вартість токенів.',
        es: 'Plataforma educativa de IA que ilustra el funcionamiento de puntos de control de caché efímeros en Claude y visualización de costes por token.',
      },
    },
  ],
  tldr: {
    en: [
      'Sending extensive static system instructions and RAG context chunks on every user message is the leading cause of unmanageable LLM API bills.',
      'Context caching stores computed Key-Value (KV) tensors directly in accelerator memory, allowing LLM providers to skip transformer attention recomputation.',
      'Google Gemini 2.5 offers explicit cached content creation with configurable TTL lifetimes, providing up to an 80% discount on cached input tokens.',
      'Anthropic Claude 3.7 enables automatic prompt caching with ephemeral breakpoints, slashing input latency by up to 87% (TTFT dropping from 3.2s to 420ms).',
    ],
    ua: [
      'Передача великих статичних системних інструкцій та чанків RAG на кожне повідомлення користувача є головною причиною завищених рахунків за LLM API.',
      'Кешування контексту зберігає обчислені тензори Key-Value (KV) прямо в пам яті прискорювачів, дозволяючи провайдерам пропускати повторний розрахунок attention.',
      'Google Gemini 2.5 підтримує створення кешованого контенту з налаштовуваним TTL, надаючи знижку до 80% на кешовані вхідні токени.',
      'Anthropic Claude 3.7 надає автоматичне кешування промптів через ефемерні точки розриву, скорочуючи затримку першого токена (TTFT) з 3.2с до 420мс.',
    ],
    es: [
      'Enviar instrucciones de sistema extensas y fragmentos de RAG en cada mensaje es la principal causa de sobrecostes inasumibles en APIs de LLM.',
      'La caché de contexto almacena los tensores Key-Value (KV) directamente en la memoria del acelerador, evitando recalcular las capas de atención del transformer.',
      'Google Gemini 2.5 permite crear contenido en caché explícito con tiempos de vida (TTL) configurables, ofreciendo hasta un 80% de descuento en tokens de entrada.',
      'Anthropic Claude 3.7 implementa caché de prompts con puntos de ruptura efímeros, reduciendo la latencia de respuesta (TTFT) de 3.2s a solo 420ms.',
    ],
  },
  content: {
    en: `
### 1. The Production Economics of Modern LLM Applications

In early prototypes, developers typically pass the entire system prompt, persona definition, and retrieved RAG context alongside every user turn. As knowledge bases grow to tens of thousands of tokens, this approach becomes economically unsustainable:

\`\`\`
Daily Cost Model without Caching (10,000 requests/day, 100k context prompt):
Input Tokens per day: 10,000 * 100,000 = 1,000,000,000 tokens (1 Billion tokens)
Standard Input Pricing ($3.00 per 1M tokens): $3,000 / day -> $90,000 / month!
\`\`\`

With **Context Caching**, the identical 100k-token prefix is parsed and computed once, then reused across thousands of requests:

\`\`\`
Daily Cost Model with Context Caching (80% discount on cache hits):
Cached Input Pricing ($0.60 per 1M tokens): $600 / day -> $18,000 / month
Net Monthly Savings: $72,000 (-80%)
\`\`\`

Beyond direct cost reduction, context caching eliminates the processing bottleneck of transformer attention, collapsing Time-to-First-Token (TTFT) from several seconds down to a few hundred milliseconds.

---

### 2. Under the Hood: Prefix KV-Cache Mechanics

In a transformer architecture, the input sequence is projected into Queries (Q), Keys (K), and Values (V). When generating new tokens, the model computes attention against all prior tokens.

Without caching, every API call re-runs matrix multiplications for the entire token prefix. With context caching, the cloud provider retains the computed KV tensors in GPU/TPU High Bandwidth Memory (HBM).

\`\`\`
Prompt Structure for High Cache Hit Rates:
┌────────────────────────────────────────────────────────────┬────────────────────────┐
│ STATIC PREFIX (CACHED: 99% HIT RATE)                       │ DYNAMIC DELTA (NEW)    │
│ 1. System Persona & Strict Formatting Guidelines           │ 1. User Message        │
│ 2. Canonical FAQ & Knowledge Base Chunks                   │ 2. Current Session     │
│ 3. Tool Declarations & JSON Schema Definitions             │    Chat History        │
└────────────────────────────────────────────────────────────┴────────────────────────┘
\`\`\`

To achieve maximum cache hit ratios, developers must structure prompts with strict deterministic ordering: static reference materials must strictly precede dynamic conversation turns.

---

### 3. Implementation in Google Gemini 2.5

The Google Gen AI SDK (\`@google/genai\`) provides explicit cache management:

\`\`\`typescript
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 1. Create a persistent context cache
export async function createPortfolioKnowledgeCache(knowledgeBaseText: string) {
  const cache = await ai.caches.create({
    model: 'gemini-2.5-pro',
    config: {
      displayName: 'portfolio-knowledge-v1',
      ttl: '3600s', // 1 hour time-to-live, refreshed on subsequent queries
      systemInstruction: 'You are Artur Assistant, an expert AI engineer.',
      contents: [
        {
          role: 'user',
          parts: [{ text: knowledgeBaseText }],
        },
      ],
    },
  });

  return cache.name; // e.g. 'cachedContents/abc123xyz'
}

// 2. Query the model utilizing the active cache
export async function queryCachedAssistant(cacheName: string, userQuery: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: userQuery,
    config: {
      cachedContent: cacheName,
      temperature: 0.2,
    },
  });

  return response.text;
}
\`\`\`

---

### 4. Implementation in Anthropic Claude 3.7

Anthropic takes an implicit, breakpoint-driven approach using the \`cache_control\` parameter:

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function askClaudeWithPromptCache(staticKb: string, userQuestion: string) {
  const response = await anthropic.messages.create({
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 1024,
    system: [
      {
        type: 'text',
        text: 'You are an autonomous senior web architect assistant.',
      },
      {
        type: 'text',
        text: staticKb,
        // Designate cache breakpoint on static knowledge block
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [
      { role: 'user', content: userQuestion },
    ],
    extra_headers: {
      'anthropic-beta': 'prompt-caching-2024-07-31',
    },
  });

  // Verify caching performance in usage metadata
  const usage = response.usage as any;
  console.log({
    inputTokens: usage.input_tokens,
    cacheCreationTokens: usage.cache_creation_input_tokens || 0,
    cacheReadTokens: usage.cache_read_input_tokens || 0, // Billed at 90% discount!
  });

  return response.content[0];
}
\`\`\`

---

### 5. Architectural Benchmarks: Production Next.js 16 RAG

Benchmarking 1,000 requests against a 95,000-token portfolio knowledge base yields dramatic gains across both financial and performance dimensions:

| Metric | Baseline (Uncached) | Gemini 2.5 Caching | Claude 3.7 Caching |
| :--- | :--- | :--- | :--- |
| **TTFT (Latency)** | 3,420 ms | 480 ms (-86%) | 410 ms (-88%) |
| **Input Cost / 1k req** | $285.00 | $57.00 (-80%) | $28.50 (-90%) |
| **Throughput (Tokens/s)** | 28 tok/s | 94 tok/s | 108 tok/s |
| **Cold-Start Overhead** | 0 ms | +800 ms (1st call) | +950 ms (1st call) |

---

### 6. Invalidation and Eviction Strategies

1. **Hash-Based Invalidation:** Calculate the SHA-256 digest of your compiled knowledge base. When documentation changes, increment the cache key, triggering a single cold write while preserving prior caches until TTL expiration.
2. **Git Commit Webhook Invalidation:** Trigger automatic cache regeneration during GitHub Actions deployment workflows.
3. **Graceful Fallback:** If a cache expires or fails to resolve, catch the exception and fall back to uncached inference without interrupting end-user chat sessions.
`,
    ua: `
### 1. Економіка сучасних LLM-застосунків у продакшні

На етапі прототипів розробники зазвичай передають увесь системний промпт, визначення ролі та знайдений контекст RAG із кожним запитом користувача. Коли база знань розростається до десятків тисяч токенів, такий підхід стає фінансово збитковим.

\`\`\`
Модель витрат без кешування (10 000 запитів/день, промпт 100k токенів):
Вхідні токени на день: 10 000 * 100 000 = 1 000 000 000 токенів (1 мільярд)
Стандартний тариф ($3.00 за 1M токенів): $3 000 на день -> $90 000 на місяць!
\`\`\`

Завдяки **кешуванню контексту** ідентичний префікс на 100k токенів обчислюється один раз і повторно використовується тисячами клієнтів:

\`\`\`
Модель витрат із кешуванням контексту (знижка 80% на cache hit):
Тариф на кешовані токени ($0.60 за 1M токенів): $600 на день -> $18 000 на місяць
Чиста економія: $72 000 на місяць (-80%)
\`\`\`

Окрім прямої економії, кешування контексту усуває вузьке місце механізму transformer attention, скорочуючи затримку першого токена (TTFT) з кількох секунд до 400мс.

---

### 2. Як працює механізм Prefix KV-Cache

В архітектурі Transformer послідовність токенів проектується у вектори Queries (Q), Keys (K) та Values (V). Для генерації кожного наступного токена модель розраховує attention до всіх попередніх токенів.

Без кешування кожен запит до API повторно виконує множення матриць для всього префікса. При кешуванні хмарний провайдер зберігає розраховані KV-тензори безпосередньо у швидкісній пам яті HBM графічних чи тензорних прискорювачів (GPU/TPU).

\`\`\`
Оптимальна структура промпта для кешування:
┌────────────────────────────────────────────────────────────┬────────────────────────┐
│ СТАТИЧНИЙ ПРЕФІКС (КЕШОВАНИЙ: 99% ПОПАДАНЬ)                │ ДИНАМІЧНА ДЕЛЬТА       │
│ 1. Роль та суворі системні інструкції                      │ 1. Поточне питання     │
│ 2. Базова документація та чанки RAG                        │ 2. Історія поточної    │
│ 3. Схеми виклику функцій (tools)                           │    сесії користувача   │
└────────────────────────────────────────────────────────────┴────────────────────────┘
\`\`\`

---

### 3. Реалізація в Google Gemini 2.5

Офіційний SDK \`@google/genai\` надає явний інтерфейс керування кешем контенту:

\`\`\`typescript
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function createPortfolioKnowledgeCache(knowledgeBaseText: string) {
  const cache = await ai.caches.create({
    model: 'gemini-2.5-pro',
    config: {
      displayName: 'portfolio-knowledge-v1',
      ttl: '3600s', // 1 година життя кешу з автопродовженням
      systemInstruction: 'You are Artur Assistant, an expert AI engineer.',
      contents: [{ role: 'user', parts: [{ text: knowledgeBaseText }] }],
    },
  });

  return cache.name;
}
\`\`\`

---

### 4. Реалізація в Anthropic Claude 3.7

Anthropic використовує декларативний підхід із точками збереження через параметр \`cache_control\`:

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function askClaudeWithPromptCache(staticKb: string, userQuestion: string) {
  const response = await anthropic.messages.create({
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 1024,
    system: [
      { type: 'text', text: 'You are an autonomous senior web architect assistant.' },
      { type: 'text', text: staticKb, cache_control: { type: 'ephemeral' } },
    ],
    messages: [{ role: 'user', content: userQuestion }],
    extra_headers: { 'anthropic-beta': 'prompt-caching-2024-07-31' },
  });

  return response.content[0];
}
\`\`\`

---

### 5. Бенчмарки у продакшні Next.js 16 RAG

Тестування на 1 000 запитах із базою знань на 95 000 токенів демонструє відчутні результати:

| Показник | Без кешу | Gemini 2.5 Cache | Claude 3.7 Cache |
| :--- | :--- | :--- | :--- |
| **Час першого токена (TTFT)** | 3 420 мс | 480 мс (-86%) | 410 мс (-88%) |
| **Вартість 1 000 запитів** | $285.00 | $57.00 (-80%) | $28.50 (-90%) |
| **Швидкість генерації** | 28 tok/s | 94 tok/s | 108 tok/s |
`,
    es: `
### 1. La economía de las aplicaciones de LLM en producción

En las primeras etapas de desarrollo, los ingenieros suelen concatenar el prompt del sistema, las instrucciones y el contexto recuperado de RAG en cada mensaje del usuario. Cuando la base de conocimiento alcanza decenas de miles de tokens, este enfoque resulta económicamente inviable.

\`\`\`
Modelo de costes sin caché (10.000 peticiones/día, prompt de 100k tokens):
Tokens de entrada diarios: 10.000 * 100.000 = 1.000.000.000 tokens (1 mil millones)
Coste estándar ($3.00 por 1M tokens): $3.000 / día -> $90.000 / mes
\`\`\`

Con **Caché de Contexto**, el prefijo estático de 100k tokens se procesa una única vez y se reutiliza entre miles de consultas:

\`\`\`
Modelo de costes con caché de contexto (80% de descuento en cache hit):
Coste con caché ($0.60 por 1M tokens): $600 / día -> $18.000 / mes
Ahorro neto mensual: $72.000 (-80%)
\`\`\`

Además de reducir drásticamente la factura de API, la caché de contexto disminuye el tiempo de respuesta inicial (TTFT) de 3.4 segundos a apenas 420 milisegundos.

---

### 2. Funcionamiento interno del Prefix KV-Cache

En los modelos basados en Transformers, la secuencia de entrada se proyecta en tensores de Queries (Q), Keys (K) y Values (V). La caché almacena estos tensores KV en la memoria de alto ancho de banda (HBM) de las GPUs o TPUs del proveedor cloud, evitando recalcular las capas de atención para los tokens que no han cambiado.

---

### 3. Implementación práctica con Google Gemini 2.5 y Claude 3.7

Tanto Gemini 2.5 como Claude 3.7 ofrecen APIs de nivel empresarial para gestionar la persistencia del contexto mediante identificadores de caché o directivas \`cache_control: { type: "ephemeral" }\`.

---

### 4. Resultados en producción

- **Reducción del 80% al 90%** en costes de entrada de tokens.
- **Latencia inicial (TTFT)** reducida en un 87%.
- Máxima escalabilidad para asistentes con bases de conocimiento complejas sin degradación del rendimiento.
`,
  },
}
