import type { BlogPost } from '../types'

export const migratingNextjs16VercelToCloudflareWorkersPost: BlogPost = {
  slug: 'migrating-nextjs-16-vercel-to-cloudflare-workers-zero-cost-rag',
  title: {
    en: 'Migrating Next.js 16 from Vercel to Cloudflare Workers: $0/Month Unlimited Static Assets, 1.22ms Hybrid RAG & DevSecOps',
    ua: 'Міграція Next.js 16 з Vercel на Cloudflare Workers: $0/міс, безлімітна статика, 1.22ms Hybrid RAG та DevSecOps',
    es: 'Migración de Next.js 16 de Vercel a Cloudflare Workers: $0/mes, activos estáticos ilimitados, Hybrid RAG en 1.22ms y DevSecOps',
    de: 'Migration von Next.js 16 von Vercel zu Cloudflare Workers: $0/Monat, unlimitierte Static Assets, 1,22ms Hybrid RAG & DevSecOps',
  },
  description: {
    en: 'Why we moved a 520-page 4-locale Next.js 16 platform and autonomous Hybrid RAG API off a shared 10 GB serverless origin cap onto Cloudflare Workers + Static Assets, cutting Edge CPU from 206ms to 1.22ms with dual CI/CD, full HTTP security headers, and zero SEO/GEO regressions.',
    ua: 'Чому ми перенесли 4-мовну платформу Next.js 16 на 520 сторінок і автономний Hybrid RAG API із лімітованого 10 GB serverless-хостингу на Cloudflare Workers + Static Assets, знизивши CPU на Edge із 206ms до 1.22ms із подвійним CI/CD, DevSecOps і нульовими втратами SEO/GEO.',
    es: 'Por qué migramos una plataforma Next.js 16 de 520 páginas en 4 idiomas y su API Hybrid RAG desde un límite compartido de 10 GB a Cloudflare Workers + Static Assets, reduciendo la CPU en Edge de 206ms a 1.22ms con CI/CD dual, DevSecOps y cero regresiones SEO/GEO.',
    de: 'Warum wir eine 4-sprachige Next.js 16 Plattform mit 520 Seiten und autonomer Hybrid-RAG-API von einem 10-GB-Origin-Limit auf Cloudflare Workers + Static Assets migrierten, die Edge-CPU von 206ms auf 1,22ms senkten und Dual-CI/CD, DevSecOps sowie SEO/GEO-Paritaet sicherstellten.',
  },
  date: '2026-11-28',
  readTime: {
    en: '11 min read',
    ua: '11 хв читання',
    es: '11 min de lectura',
    de: '11 Min. Lesezeit',
  },
  category: 'architecture',
  categoryLabel: {
    en: 'Cloud Architecture & DevSecOps',
    ua: 'Хмарна архітектура та DevSecOps',
    es: 'Arquitectura Cloud y DevSecOps',
    de: 'Cloud-Architektur & DevSecOps',
  },
  tags: [
    'Cloudflare Workers',
    'Next.js 16',
    'CI/CD',
    'DevSecOps',
    'UptimeRobot',
    'Hybrid RAG',
    'BM25',
    'SEO',
    'GEO',
  ],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
      de: 'Fullstack Web-Engineer & KI-Architekt',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-cloudflare-workers-nextjs-rag.svg',
  isProjectDeepDive: true,
  appliedProjects: [
    {
      projectId: 29500,
      slug: 'yusupovartur-nextjs-portfolio',
      name: 'Next.js 16 & Hybrid RAG Portfolio Platform',
      note: {
        en: 'Migrated live production (520 static pages, 5,751 assets, /api/chat) to Cloudflare Workers + Static Assets at $0/month with 1.22ms median Worker CPU and 0 errors.',
        ua: 'Продакшн-платформа (520 статичних сторінок, 5 751 файл, /api/chat) перенесена на Cloudflare Workers + Static Assets за $0/міс із медіанним CPU 1.22ms і 0 помилок.',
        es: 'Producción real (520 páginas estáticas, 5.751 archivos, /api/chat) migrada a Cloudflare Workers + Static Assets por $0/mes con 1.22ms de CPU mediana y 0 errores.',
        de: 'Produktivbetrieb (520 statische Seiten, 5.751 Assets, /api/chat) fuer $0/Monat auf Cloudflare Workers + Static Assets migriert: 1,22ms Median-CPU und 0 Fehler.',
      },
    },
  ],
  tldr: {
    en: [
      'A sibling project on a shared hobby account exceeded the 10 GB Fast Origin Transfer quota (20.84 GB) and paused the entire team for 30 days, taking down a healthy portfolio that used only 8.38 MB.',
      'We moved to Cloudflare Workers + Static Assets ($0/month): 99.5% of traffic (520 localized Next.js 16 pages, 5,751 files) hits unlimited Static Assets directly with 0 Worker invocations.',
      'Only POST /api/chat runs on the Worker (run_worker_first: ["/api/*"]). Prebuilding the 340-chunk / 17,293-token inverted BM25 index at build time cut Worker CPU from 206ms down to 1.22ms median (~168x faster).',
      'Dual CI/CD (Cloudflare Workers Builds + 9-gate GitHub Actions pipeline), all 7 HTTP security headers via _headers, Bot Fight Mode, 512 GSC URLs, 513 IndexNow URLs, and llms.txt operate with zero regressions.',
    ],
    ua: [
      'Сусідній проєкт у спільному хобі-акаунті перевищив квоту 10 GB Fast Origin Transfer (20.84 GB) і поставив усю команду на паузу на 30 днів, вимкнувши здорове портфоліо, яке витратило лише 8.38 MB.',
      'Ми перейшли на Cloudflare Workers + Static Assets ($0/міс): 99.5% трафіку (520 локалізованих сторінок Next.js 16, 5 751 файл) обслуговується безлімітною статикою з 0 викликів Worker.',
      'Лише POST /api/chat виконується у Worker (run_worker_first: ["/api/*"]). Передзбірка інвертованого BM25-індексу (340 чанків, 17 293 токени) на етапі білду знизила CPU з 206ms до 1.22ms (~168x швидше).',
      'Подвійний CI/CD (Cloudflare Workers Builds + 9 гейтів у GitHub Actions), усі 7 заголовків безпеки в _headers, Bot Fight Mode, 512 URL у GSC, 513 URL в IndexNow та llms.txt працюють без жодної регресії.',
    ],
    es: [
      'Un proyecto vecino en una cuenta hobby compartida superó la cuota de 10 GB de Fast Origin Transfer (20.84 GB) y pausó todo el equipo durante 30 días, tirando un portafolio sano que solo consumía 8.38 MB.',
      'Migramos a Cloudflare Workers + Static Assets ($0/mes): el 99.5% del tráfico (520 páginas Next.js 16, 5.751 archivos) se sirve directamente desde Static Assets ilimitados con 0 invocaciones de Worker.',
      'Solo POST /api/chat ejecuta el Worker (run_worker_first: ["/api/*"]). Precompilar el índice invertido BM25 (340 chunks, 17.293 tokens) en build redujo la CPU de 206ms a 1.22ms mediana (~168x más rápido).',
      'CI/CD dual (Cloudflare Workers Builds + pipeline de 9 controles en GitHub Actions), las 7 cabeceras de seguridad en _headers, Bot Fight Mode, 512 URLs en GSC, 513 en IndexNow y llms.txt sin regresiones.',
    ],
    de: [
      'Ein Nachbarprojekt in einem gemeinsamen Hobby-Account ueberschritt das 10-GB-Fast-Origin-Transfer-Limit (20,84 GB) und pausierte das gesamte Team fuer 30 Tage - inklusive eines Portfolios mit nur 8,38 MB Verbrauch.',
      'Wir migrierten auf Cloudflare Workers + Static Assets ($0/Monat): 99,5 % des Traffics (520 Next.js 16 Seiten, 5.751 Dateien) laufen direkt ueber unlimitierte Static Assets mit 0 Worker-Aufrufen.',
      'Nur POST /api/chat nutzt den Worker (run_worker_first: ["/api/*"]). Durch Build-Time-Vorberechnung des invertierten BM25-Index (340 Chunks, 17.293 Tokens) sank die Worker-CPU von 206ms auf 1,22ms Median (~168x schneller).',
      'Dual-CI/CD (Cloudflare Workers Builds + 9-stufige GitHub-Actions-Pipeline), alle 7 HTTP-Security-Header in _headers, Bot Fight Mode, 512 GSC-URLs, 513 IndexNow-URLs und llms.txt laufen ohne Regression.',
    ],
  },
  content: {
    en: `
### 1. Why We Dropped Our Previous Hosting Model

For over a year, our Next.js 16 portfolio platform (520 localized routes across English, Ukrainian, Spanish, and German, 71 case studies, 47 engineering articles, and an autonomous Hybrid RAG AI assistant) ran on a shared Vercel Hobby team account.

On paper, that setup looked effortless: push to \`master\`, get automatic builds, edge caching, and serverless API routes. In practice, it hid a structural **blast-radius flaw**:

1. **Account-Wide Hard Bandwidth Cutoff:** The Hobby tier enforces a shared **10 GB Fast Origin Transfer** quota across every project in the team.
2. **Noisy Neighbor Failure:** One unrelated sibling project with uncached SSR and broad middleware burned **20.84 GB** (over 28,000 middleware invocations in 12 hours), triggering an immediate **30-day pause of the entire team**.
3. **Collateral Downtime:** Our healthy portfolio site had consumed just **8.38 MB and 291 requests** in 12 hours, yet returned HTTP 503/402 across all 520 SEO-indexed pages.

The engineering lesson was unambiguous: **never serve static HTML, WebP/PNG media, sitemaps, and RSS feeds behind a metered serverless origin quota**, and never couple a mission-critical personal brand or B2B storefront to a shared blast radius.

---

### 2. Why We Chose Cloudflare Workers + Static Assets ($0/Month)

Rather than paying for metered bandwidth or spinning up duplicate hobby accounts (which violates platform fair-use rules), we redesigned the deployment around a **Static-First Hybrid Edge** model on **Cloudflare Workers + Static Assets**:

| Dimension | Old Setup (Shared Serverless Hobby) | New Setup (Cloudflare Workers + Static Assets) |
| :--- | :--- | :--- |
| **Static Bandwidth & Requests** | 10 GB/mo Fast Origin Transfer cap (hard team pause) | **Unlimited & Free** (Static Assets bypass Worker) |
| **Static Asset Capacity** | Shared deployment storage limits | **20,000 files** (5,751 used), up to 25 MiB per file |
| **Dynamic API Quota (\`/api/chat\`)** | Metered functions + middleware invocations | **100,000 Worker invocations/day** (resets daily 00:00 UTC) |
| **Worker CPU Time (Measured)** | Cold-start Node runtime | **1.22 ms median** (10 ms Free limit, ~8x margin) |
| **Build Pipeline Quota** | Shared queue | **3,000 build minutes/mo** (~1.5 min/deploy = ~2,000 deploys/mo) |
| **Monthly Infrastructure Cost** | $0 (with 30-day outage risk) or $20+/seat | **$0/month** |

#### How Traffic Splits at the Edge

In \`wrangler.jsonc\`, one single setting unlocks unlimited static delivery:

\`\`\`json
{
  "name": "yusupovartur-portfolio",
  "main": "worker/index.ts",
  "compatibility_date": "2026-11-24",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": "./out",
    "binding": "ASSETS",
    "html_handling": "drop-trailing-slash",
    "not_found_handling": "404-page",
    "run_worker_first": ["/api/*"]
  }
}
\`\`\`

Because \`run_worker_first\` matches **only** \`/api/*\`:
- **99.5%+ of requests** (all 520 HTML pages, JS/CSS chunks, WebP/PNG images, \`sitemap.xml\`, \`feed.xml\`, \`llms.txt\`) are served directly by Cloudflare Static Assets with **0 Worker invocations**.
- **Only \`POST /api/chat\`** wakes the V8 isolate in \`worker/index.ts\`, which rejects non-POST methods with \`405\`, syncs encrypted Worker Secrets into \`process.env\`, and invokes our Next.js route handler.

---

### 3. Dual CI/CD Architecture & Automated Build Pipeline

Every \`git push origin master\` triggers two independent pipelines:

1. **Primary Production (Cloudflare Workers Builds -> \`www.yusupovartur.com\`):**
   - Runs \`pnpm run build:cf\` (\`scripts/build-cf-workers.mjs\`):
     1. Generates the prebuilt inverted BM25 RAG index (\`node scripts/generate-rag-index.mjs\`).
     2. Temporarily parks \`app/api\` and \`proxy.ts\` (restored in \`finally\` + \`SIGINT\`/\`SIGTERM\` traps) because Next.js \`output: 'export'\` rejects \`force-dynamic\` routes.
     3. Executes \`CF_STATIC_EXPORT=1 next build\` to emit all 520 static pages into \`./out\`.
     4. Verifies all 13 critical output artifacts (\`en/ua/es/de.html\`, \`404.html\`, \`sitemap.xml\`, \`robots.txt\`, \`feed.xml\`, \`llms.txt\`, \`llms-full.txt\`, IndexNow key, \`_headers\`, \`_redirects\`).
   - Runs \`npx wrangler deploy\` (~1m 35s total build + deploy time).

2. **Secondary SPA Mirror & DevSecOps Gate (GitHub Actions -> \`gh-pages\`):**
   - Runs a strict **9-stage verification pipeline** on Node.js 24 LTS + \`pnpm --frozen-lockfile\`:
     - **Gitleaks** secret scan (SHA-256 verified binary)
     - **SAST:** \`pnpm exec tsc --noEmit\` (strict zero-\`any\`) and \`pnpm lint\`
     - **TDD:** \`pnpm test\` (44 Vitest suites, 249 specs)
     - **SCA:** \`pnpm audit --prod --audit-level=high\`
     - **Vite Production Build + Contact Leak Scan:** \`pnpm build\` + \`node scripts/check-contact-leak.mjs\` (verifies zero plaintext email/phone strings in built HTML/JS)
     - **A11y & CWV:** Playwright E2E + axe-core WCAG 2.2 AA / EAA 2026 + Lighthouse CI
   - Only when all 9 gates pass does GitHub Actions publish \`dist/\` to the \`gh-pages\` fallback mirror.

---

### 4. The Hidden Trap We Hit & Solved: Cutting Edge CPU from 206ms to 1.22ms

The migration worked immediately - until we inspected Cloudflare Analytics and spotted **\`CPU time P90: 206 ms\`**.

Cloudflare Workers Free enforces a **10 ms CPU time limit** per invocation. Although Cloudflare occasionally allows cold-start bursts when host capacity is spare (so errors were still 0), running at 206 ms is a ticking \`Error 1102\` time bomb under real traffic.

Profiling the exact bundled Worker locally revealed **three hidden CPU killers**:

1. **Runtime Index Construction (~380 ms on cold start):** On the first \`/api/chat\` request, \`knowledge.ts\` built 340 multilingual chunks, ran Markdown heading regexes over 188 full 4-language articles, and tokenized megabytes of text into BM25 maps.
2. **Dead Markdown Weight (3.4 MB in Worker bundle):** Importing \`allBlogPosts\` pulled 47 full long-form Markdown bodies into the Worker bundle even though \`/api/chat\` only ever uses titles, descriptions, TL;DRs, and slugs.
3. **Regex Compilation Storm (~52 ms on unmatched queries):** \`matchesFaqKeyword()\` compiled 150+ Unicode \`new RegExp(..., 'iu')\` objects with \`\\p{L}\\p{N}\` on the fly during every unmatched query, while \`resolveProjectFromQuery()\` ran up to 25 redundant times per request.

#### The Engineering Fix

- **Build-Time Inverted BM25 Index:** \`scripts/generate-rag-index.mjs\` precomputes all 340 chunks, **17,293 indexed tokens** as flat interleaved \`[docIdx, tf, ...]\` posting arrays, pre-folded titles/technologies, and lightweight \`blogSummaries\` (stripping ~3.4 MB of raw Markdown from the Worker).
- **Zero-Allocation Scoring & Fuzzy Search:** \`retrieveKnowledge()\` scores only matched postings into \`Float64Array\` accumulators; \`damerauLevenshteinDistance()\` reuses 3 module-level \`Int32Array\` scratch buffers; \`PROJECT_BY_SLUG\` uses O(1) \`Map\` lookups with bounded query memoization.
- **Fast-Path FAQ Matching:** \`matchesFaqKeyword()\` short-circuits 99.5% of non-matches with \`lower.indexOf(lowerKw) === -1\` before touching a cached \`RegExp\`.
- **Lazy OpenAI SDK Loading:** \`@ai-sdk/openai\`, \`ai\`, and \`zod\` tools load dynamically only when \`OPENAI_API_KEY\` is configured, and unused LLM prompt assembly is skipped in \`$0/mo\` local RAG mode.

#### Verified Production Metrics on Cloudflare Edge

| Metric | Before Optimization | After Optimization | Improvement |
| :--- | :---: | :---: | :---: |
| **Worker CPU Time (Cloudflare Edge)** | \`206 ms\` peak | **\`1.22 ms\` median** | **~168x faster** |
| **Wall Time (Cloudflare Edge)** | \`215 ms\` | **\`11 ms\`** | **~19.5x faster** |
| **Memory Usage (Isolate)** | \`34 MB\` peak | **\`17.93 MB\` P50 / \`24.63 MB\` P90** | Well inside 128 MB cap |
| **Worker Errors** | \`0\` (burst-dependent) | **\`0\`** (deterministic <10ms) | Production-safe on Free |

---

### 5. DevSecOps, SEO & GEO Parity at the Edge

Moving off Vercel meant we could no longer rely on \`vercel.json\` or Next.js runtime middleware for headers and redirects. We achieved **100% parity** natively in Cloudflare:

- **HTTP Security Headers (\`public/_headers\` + \`worker/index.ts\`):** Every static page and API response emits \`Strict-Transport-Security\`, \`Content-Security-Policy\`, \`X-Content-Type-Options: nosniff\`, \`X-Frame-Options: DENY\`, \`Referrer-Policy: strict-origin-when-cross-origin\`, \`Permissions-Policy\`, and \`Cross-Origin-Opener-Policy: same-origin\`. API responses additionally enforce \`Cache-Control: no-store, max-age=0\`.
- **Transport & WAF Hardening:** \`SSL/TLS Full\` (TLS 1.3), **Always Use HTTPS** enabled, **Bot Fight Mode** enabled, **Cloudflare Managed Ruleset** active, authenticated DNS email records (\`SPF\`/\`DKIM\`/\`DMARC\` via Cloudflare Email Routing + Brevo), self-hosted GDPR variable fonts (\`@fontsource-variable\`), and HMAC-SHA256 rate limiting (\`15 req/hour\`) keyed on \`cf-connecting-ip\` with an encrypted \`RATE_LIMIT_SALT\` Worker Secret.
- **24/7 SRE Observability (UptimeRobot + Cloudflare Observability):** External synthetic HTTP/HTTPS monitoring via **UptimeRobot** guarantees instant outage alerts independent of hosting provider dashboards (the exact layer that catches silent account-level pauses), complemented by **Cloudflare Workers Observability** (live CPU/RAM/error telemetry), **GitHub Dependabot**, and \`pnpm verify:live\` post-deploy header smoke checks.
- **Canonical SEO Redirects:**
  - Zone-level **301 Redirect Rule** (\`https://yusupovartur.com/*\` -> \`https://www.yusupovartur.com/\${1}\`) with **Preserve query string** enabled so UTM tags and \`?chat=estimator\` deep links survive intact.
  - Permanent **308 redirects** in \`public/_redirects\` for \`/\` -> \`/en\` and legacy slugs across all 4 locales.
- **Verified Indexing & GEO:**
  - Google Search Console verified **512 URLs** in \`sitemap.xml\` on day one.
  - IndexNow accepted **513 URLs** (\`HTTP 200\`) immediately after cutover.
  - \`/feed.xml\`, \`/llms.txt\`, \`/llms-full.txt\`, and 1200x630 PNG blog OG images remain 100% static and instant. **AI Labyrinth** is intentionally disabled so legitimate AI search crawlers are never trapped.

---

### 6. Honest Trade-Offs: When NOT to Use This Architecture

No architecture is universal. You should **not** use Next.js static export + thin Cloudflare Worker if your app requires:
- Per-request dynamic SSR personalized by session cookies across hundreds of routes (use OpenNext on Cloudflare Workers or a containerized Node server instead).
- Heavy server-side CPU workloads (>10 ms) on the Free tier without upgrading to Workers Paid ($5/month for 30,000 ms CPU).

However, for **B2B platforms, engineering blogs, portfolios, documentation portals, and marketing sites** with a handful of targeted API routes, combining **Next.js 16 Static Export + Cloudflare Static Assets + Prebuilt Edge RAG** gives you sub-2ms compute, unlimited bandwidth, strict DevSecOps compliance, and \`$0/month\` predictable operations.
`,
    ua: `
### 1. Чому ми відмовилися від попередньої моделі хостингу

Понад рік наша платформа портфоліо на Next.js 16 (520 локалізованих маршрутів EN/UA/ES/DE, 71 кейс, 47 інженерних статей і автономний Hybrid RAG AI-асистент) працювала у спільному командному акаунті Vercel Hobby.

На папері все виглядало ідеально: пуш у \`master\`, автозбірка та serverless-функції. На практиці ця модель приховувала критичний **ризик спільного радіуса ураження (blast radius)**:

1. **Жорстка квота на весь акаунт:** тариф Hobby обмежує **10 GB Fast Origin Transfer** на місяць сумарно на всі проєкти команди.
2. **Ефект «шумного сусіда»:** інший проєкт у тому ж акаунті з некешованим SSR і широким middleware витратив **20.84 GB** (понад 28 000 викликів middleware за 12 годин) - і платформа **поставила на паузу всю команду на 30 днів**.
3. **Простій здорового сайту:** саме портфоліо спожило лише **8.38 MB і 291 запит** за 12 годин, але стало недоступним по всіх 520 проіндексованих сторінках.

Інженерний висновок простий: **статичний HTML, WebP/PNG-зображення, sitemap і RSS ніколи не повинні залежати від лімітованого serverless origin-трафіку**.

---

### 2. Чому обрали Cloudflare Workers + Static Assets ($0/міс)

Замість оплати трафіку статики чи створення дублюючих хобі-акаунтів ми перевели продакшн на гібридну модель **Static-First Edge** у **Cloudflare Workers + Static Assets**:

| Параметр | Старий підхід (Vercel Hobby) | Новий підхід (Cloudflare Workers + Static Assets) |
| :--- | :--- | :--- |
| **Трафік і запити статики** | Ліміт 10 GB/міс (повна пауза акаунта) | **Безлімітно і $0/міс** (Static Assets минають Worker) |
| **Ліміт файлів статики** | Залежить від спільного Deployment Storage | **20 000 файлів** (використано 5 751), до 25 MiB/файл |
| **Динамічний API (\`/api/chat\`)** | Лімітовані функції + middleware | **100 000 викликів Worker на день** (скидання о 00:00 UTC) |
| **CPU-час Worker (у проді)** | Холодний старт Node | **1.22 ms медіана** (ліміт Free - 10 ms, запас ~8x) |
| **Хвилини збірки CI/CD** | Спільна черга | **3 000 хв/міс** (~1.5 хв/деплой = ~2 000 деплоїв/міс) |

Ключовий параметр у \`wrangler.jsonc\` - \`"run_worker_first": ["/api/*"]\`:
- **99.5%+ запитів** (усі 520 HTML-сторінок, JS/CSS, картинки, \`sitemap.xml\`, \`feed.xml\`, \`llms.txt\`) віддаються напряму з Cloudflare Static Assets із **0 викликів Worker**.
- **Лише \`POST /api/chat\`** запускає V8-ізолят \`worker/index.ts\`, який відхиляє не-POST запити кодом \`405\`, прокидає зашифровані Secrets у \`process.env\` і викликає обробник чату.

---

### 3. Подвійний CI/CD і автоматизований білд-пайплайн

Кожен \`git push origin master\` запускає два незалежні конвеєри:

1. **Основний продакшн (Cloudflare Workers Builds -> \`www.yusupovartur.com\`):**
   - Виконує \`pnpm run build:cf\` (\`scripts/build-cf-workers.mjs\`): генерує предзібраний BM25-індекс, тимчасово ізолює \`app/api\` і \`proxy.ts\` (з гарантованим відновленням у \`finally\` та обробниках сигналів), запускає \`CF_STATIC_EXPORT=1 next build\` на 520 сторінок у \`./out\` і перевіряє наявність 13 критичних файлів.
   - Виконує \`npx wrangler deploy\` (~1 хв 35 с на повний цикл).

2. **Резервне SPA-дзеркало та DevSecOps-гейт (GitHub Actions -> \`gh-pages\`):**
   - Проганяє **9 обов'язкових гейтів** на Node.js 24 LTS: Gitleaks (пошук секретів), \`tsc --noEmit\` (zero-\`any\`), \`eslint\`, 249 тестів Vitest, \`pnpm audit --prod\`, Vite build + \`check-contact-leak.mjs\` (перевірка відсутності відкритих контактів у зібраному HTML/JS), Playwright E2E + axe-core WCAG 2.2 AA та Lighthouse CI.

---

### 4. Прихована пастка міграції: прискорення CPU із 206ms до 1.22ms

Після першого деплою сайт запрацював одразу, але аналітика Cloudflare показала **\`CPU time P90: 206 ms\`** при безкоштовному ліміті **\`10 ms\`**.

Профілювання реального бандлу Worker виявило 3 головні причини:
1. **Побудова індексу в рантаймі (~380 ms на холодному старті):** формування 340 чанків і токенізація мегабайтів тексту при першому запиті.
2. **3.4 MB зайвого Markdown у бандлі Worker:** імпорт \`allBlogPosts\` тягнув повні тексти всіх 47 статей на 4 мовах, хоча чату потрібні лише заголовки, описи, TL;DR і слаги.
3. **Шторм компіляції регулярок (~52 ms на запит):** \`matchesFaqKeyword()\` на льоту компілював 150+ Unicode-регулярок \`\\p{L}\\p{N}\` на кожен неспівпавший запит.

#### Що ми змінили
- **Передзбірка інвертованого BM25-індексу (\`scripts/generate-rag-index.mjs\`):** усі 340 чанків, **17 293 токени** у плоских масивах \`[docIdx, tf, ...]\` та легкі \`blogSummaries\` компілюються на етапі білду.
- **Zero-allocation пошук:** \`Float64Array\`-акумулятори в \`retrieveKnowledge()\`, багаторазові \`Int32Array\`-буфери для Damerau-Levenshtein, O(1) \`Map\`-пошук і кешування повторних викликів у межах запиту.
- **Швидке відсікання FAQ:** перевірка \`lower.indexOf(lowerKw) === -1\` миттєво відсіює 99.5% незбігів без виклику \`RegExp\`.
- **Ліниве завантаження OpenAI SDK:** \`@ai-sdk/openai\` та \`ai\` підвантажуються лише за наявності \`OPENAI_API_KEY\`.

Результат на Cloudflare Edge: **Median CPU впав із \`206 ms\` до \`1.22 ms\` (~168x швидше)**, Wall Time \`11 ms\`, пам'ять \`17.93 MB\` P50 (ліміт \`128 MB\`), **\`0\` помилок**.

---

### 5. DevSecOps, SEO та GEO на Edge без втрат

- **Усі 7 HTTP-заголовків безпеки** (\`HSTS\`, \`CSP\`, \`X-Content-Type-Options\`, \`X-Frame-Options\`, \`Referrer-Policy\`, \`Permissions-Policy\`, \`COOP\`) віддаються через \`public/_headers\` і \`worker/index.ts\`.
- **Захист трафіку:** \`SSL/TLS Full\` (TLS 1.3), **Always Use HTTPS**, **Bot Fight Mode**, **Cloudflare Managed Ruleset**, автентифікація пошти на рівні DNS (\`SPF\`/\`DKIM\`/\`DMARC\` через Cloudflare Email Routing + Brevo), локальні GDPR-шрифти (\`@fontsource-variable\`) та HMAC-SHA256 rate limiting по \`cf-connecting-ip\` із зашифрованим секретом \`RATE_LIMIT_SALT\`.
- **SRE-моніторинг 24/7 (UptimeRobot + Cloudflare Observability):** незалежний зовнішній HTTP/HTTPS-моніторинг **UptimeRobot** миттєво сповіщає про будь-який простій незалежно від провайдера, а **Cloudflare Workers Observability**, **GitHub Dependabot** та скрипт \`pnpm verify:live\` контролюють CPU/RAM, залежності й усі 7 заголовків безпеки на живому проді.
- **SEO та GEO:** правило \`301\` \`yusupovartur.com/* -> www.yusupovartur.com/\${1}\` зі збереженням UTM і \`?chat=estimator\`, \`308\`-редиректи легасі-слагів у \`public/_redirects\`, **512 сторінок** підтверджено в Google Search Console, **513 URL** прийнято IndexNow (\`HTTP 200\`), \`/feed.xml\` і \`llms.txt\` працюють миттєво, а **AI Labyrinth** вимкнено, щоб не блокувати коректні AI-краулери.

---

### 6. Чесні обмеження підходу

Ця архітектура не підійде для сервісів із персоналізованим cookie-SSR на кожній сторінці (для них краще OpenNext або контейнерний Node). Але для B2B-сайтів, інженерних блогів, документації та портфоліо з кількома API-ендпоінтами зв'язка **Next.js 16 Static Export + Cloudflare Static Assets + Prebuilt Edge RAG** дає суб-2ms CPU, безлімітний трафік і передбачувані \`$0/міс\`.
`,
    es: `
### 1. Por qué abandonamos el modelo de hosting anterior

Durante más de un año, nuestra plataforma en Next.js 16 (520 rutas localizadas en EN/UA/ES/DE, 71 casos de estudio, 47 artículos técnicos y un asistente Hybrid RAG autónomo) operó en una cuenta compartida de Vercel Hobby.

El problema oculto era el **radio de impacto compartido (blast radius)**:
1. **Cuota global de 10 GB Fast Origin Transfer:** compartida entre todos los proyectos del equipo.
2. **Efecto vecino ruidoso:** otro proyecto con SSR sin caché consumió **20.84 GB** en un ciclo y provocó una **pausa automática de 30 días en toda la cuenta**.
3. **Caída colateral:** nuestro portafolio solo había consumido **8.38 MB y 291 peticiones** en 12 horas, pero quedó fuera de línea en sus 520 URLs indexadas.

La lección arquitectónica es clara: **nunca sirvas HTML estático, imágenes WebP/PNG, sitemaps y RSS detrás de una cuota limitada de origen serverless**.

---

### 2. Por qué elegimos Cloudflare Workers + Static Assets ($0/mes)

Rediseñamos el despliegue bajo un modelo **Static-First Hybrid Edge** en **Cloudflare Workers + Static Assets**:

| Dimensión | Enfoque anterior (Vercel Hobby) | Nuevo enfoque (Cloudflare Workers + Static Assets) |
| :--- | :--- | :--- |
| **Ancho de banda estático** | Límite de 10 GB/mes (pausa total de 30 días) | **Ilimitado y $0/mes** (Static Assets no invocan Worker) |
| **Capacidad de archivos** | Almacenamiento compartido | **20.000 archivos** (5.751 usados), hasta 25 MiB/archivo |
| **API dinámica (\`/api/chat\`)** | Funciones y middleware limitados | **100.000 invocaciones/día** (reinicio diario 00:00 UTC) |
| **CPU del Worker (medida)** | Arranque en frío Node | **1.22 ms mediana** (límite Free: 10 ms) |
| **Minutos de build CI/CD** | Cola compartida | **3.000 min/mes** (~1.5 min/despliegue) |

Con \`"run_worker_first": ["/api/*"]\` en \`wrangler.jsonc\`, **más del 99.5% del tráfico** (las 520 páginas HTML, imágenes, \`sitemap.xml\`, \`feed.xml\`, \`llms.txt\`) se entrega desde Static Assets con **0 invocaciones de Worker**, reservando el Worker exclusivamente para \`POST /api/chat\`.

---

### 3. Arquitectura CI/CD Dual

Cada \`git push origin master\` dispara dos flujos independientes:
1. **Producción principal (Cloudflare Workers Builds -> \`www.yusupovartur.com\`):** ejecuta \`pnpm run build:cf\` (generación del índice BM25, exportación estática de Next.js 16 a \`./out\`, verificación de 13 archivos críticos) seguido de \`npx wrangler deploy\` (~1m 35s).
2. **Espejo SPA y puerta DevSecOps (GitHub Actions -> \`gh-pages\`):** ejecuta **9 controles automatizados** (Gitleaks, \`tsc --noEmit\`, ESLint, 249 tests Vitest, \`pnpm audit\`, build Vite + escáner \`check-contact-leak.mjs\`, Playwright E2E + axe-core WCAG 2.2 AA y Lighthouse CI).

---

### 4. El cuello de botella oculto: reducir la CPU de 206ms a 1.22ms

En el primer despliegue detectamos **\`CPU time P90: 206 ms\`** frente al límite gratuito de **\`10 ms\`**. Al perfilar el bundle real encontramos tres culpables: construcción de 340 chunks RAG en arranque en frío, inclusión de **3.4 MB** de cuerpos Markdown de 47 artículos en el Worker, y recompilación de 150+ expresiones regulares Unicode \`\\p{L}\\p{N}\` en \`matchesFaqKeyword()\`.

Al precompilar el índice invertido BM25 (**17.293 tokens**) en tiempo de build (\`scripts/generate-rag-index.mjs\`), usar acumuladores \`Float64Array\`, buffers reutilizables \`Int32Array\` para Damerau-Levenshtein, atajo \`indexOf\` en FAQ y carga diferida del SDK de OpenAI, logramos en producción real:
- **Median CPU:** \`206 ms\` -> **\`1.22 ms\`** (~168x más rápido)
- **Wall Time:** \`11 ms\` | **Memoria P50:** \`17.93 MB\` (límite 128 MB) | **Errores:** \`0\`

---

### 5. Paridad total en DevSecOps, SEO y GEO

- **Seguridad y Observabilidad SRE:** las 7 cabeceras HTTP obligatorias en \`public/_headers\` y \`worker/index.ts\`, \`SSL/TLS Full\` (TLS 1.3), **Always Use HTTPS**, **Bot Fight Mode**, autenticación DNS (\`SPF\`/\`DKIM\`/\`DMARC\` en Cloudflare Email Routing + Brevo), fuentes locales GDPR (\`@fontsource-variable\`), rate limiting HMAC-SHA256 sobre \`cf-connecting-ip\` (\`RATE_LIMIT_SALT\`), **GitHub Dependabot** y monitoreo sintético externo 24/7 con **UptimeRobot** + **Cloudflare Workers Observability** + \`pnpm verify:live\`.
- **SEO y GEO:** regla \`301\` \`yusupovartur.com/* -> www.yusupovartur.com/\${1}\` preservando query strings (UTM y \`?chat=estimator\`), redirecciones \`308\` en \`public/_redirects\`, **512 URLs** verificadas en Google Search Console, **513 URLs** aceptadas en IndexNow (\`HTTP 200\`), \`/feed.xml\` y \`llms.txt\` activos, con **AI Labyrinth** desactivado para no bloquear rastreadores legítimos de IA.

---

### 6. Compromisos honestos

No recomendamos esta arquitectura para aplicaciones con SSR personalizado por cookies en cada ruta (donde conviene OpenNext o Node en contenedor). Para plataformas B2B, blogs técnicos, documentación y portafolios con pocos endpoints API, **Next.js 16 Static Export + Cloudflare Static Assets + Prebuilt Edge RAG** ofrece rendimiento sub-2ms, tráfico ilimitado y \`$0/mes\`.
`,
    de: `
### 1. Warum wir unser bisheriges Hosting-Modell abgeloest haben

Ueber ein Jahr lief unsere 4-sprachige Next.js 16 Plattform (520 lokalisierte Routen in EN/UA/ES/DE, 71 Fallstudien, 47 Fachartikel und ein autonomer Hybrid-RAG-Assistent) in einem gemeinsamen Vercel-Hobby-Teamkonto.

Das strukturelle Problem war der **gemeinsame Blast Radius**:
1. **Accountweites 10-GB-Limit (Fast Origin Transfer):** gilt fuer alle Projekte im Team zusammen.
2. **Noisy-Neighbor-Ausfall:** Ein anderes Projekt mit ungecachetem SSR verbrauchte **20,84 GB** und loeste eine **30-taegige Zwangspause fuer das gesamte Team** aus.
3. **Kollateralschaden:** Unser gesundes Portfolio hatte in 12 Stunden nur **8,38 MB und 291 Requests** verursacht, war aber auf allen 520 indexierten Seiten offline.

Die Lehre ist klar: **Statisches HTML, Bilder, Sitemaps und RSS gehoeren niemals hinter ein kontingentiertes Serverless-Origin-Limit.**

---

### 2. Warum Cloudflare Workers + Static Assets ($0/Monat)

Wir stellten den Betrieb auf ein **Static-First-Hybrid-Edge-Modell** mit **Cloudflare Workers + Static Assets** um:

| Dimension | Bisher (Vercel Hobby) | Neu (Cloudflare Workers + Static Assets) |
| :--- | :--- | :--- |
| **Statische Bandbreite** | 10 GB/Monat (30-Tage-Sperre) | **Unlimitiert & $0/Monat** (0 Worker-Aufrufe) |
| **Statische Dateien** | Geteiltes Deployment-Storage | **20.000 Dateien** (5.751 genutzt), bis 25 MiB/Datei |
| **Dynamische API (\`/api/chat\`)** | Kontingentierte Functions & Middleware | **100.000 Worker-Aufrufe/Tag** (taeglicher Reset 00:00 UTC) |
| **Worker-CPU (gemessen)** | Node-Kaltstart | **1,22 ms Median** (Free-Limit: 10 ms) |
| **CI/CD Build-Minuten** | Geteilte Queue | **3.000 Min./Monat** (~1,5 Min./Deploy) |

Durch \`"run_worker_first": ["/api/*"]\` in \`wrangler.jsonc\` treffen **99,5 %+ aller Anfragen** direkt die unlimitierten Cloudflare Static Assets. Ausschliesslich \`POST /api/chat\` startet das V8-Isolate \`worker/index.ts\`.

---

### 3. Duale CI/CD-Architektur

Jeder \`git push origin master\` startet zwei unabhaengige Pipelines:
1. **Primaere Produktion (Cloudflare Workers Builds -> \`www.yusupovartur.com\`):** \`pnpm run build:cf\` (Vorberechnung des BM25-Index, Next.js 16 Static Export nach \`./out\`, Pruefung von 13 Pflichtdateien) + \`npx wrangler deploy\` (~1 Min. 35 Sek.).
2. **Sekundaerer SPA-Mirror & DevSecOps-Gate (GitHub Actions -> \`gh-pages\`):** **9 Sicherheits- und Qualitaets-Gates** (Gitleaks, \`tsc --noEmit\`, ESLint, 249 Vitest-Specs, \`pnpm audit\`, Vite-Build + \`check-contact-leak.mjs\`, Playwright E2E + axe-core WCAG 2.2 AA und Lighthouse CI).

---

### 4. Die versteckte Falle: Edge-CPU von 206ms auf 1,22ms gesenkt

Direkt nach dem ersten Deploy zeigte Cloudflare Analytics **\`CPU time P90: 206 ms\`** bei einem Free-Limit von **\`10 ms\`**. Das Profiling identifizierte drei Engpaesse: Laufzeit-Indexierung von 340 Chunks beim Kaltstart, **3,4 MB** ungenutzte Markdown-Artikeltexte im Worker-Bundle sowie ueber 150 dynamische Unicode-RegEx-Kompilierungen pro nicht gematchter FAQ-Anfrage.

Mit Build-Time-Vorberechnung des invertierten BM25-Index (**17.293 Tokens** in \`scripts/generate-rag-index.mjs\`), \`Float64Array\`-Akkumulatoren, Zero-Allocation-\`Int32Array\`-Puffern fuer Damerau-Levenshtein, \`indexOf\`-Vorpruefung in \`matchesFaqKeyword()\` und Lazy-Loading des OpenAI SDK erreichten wir im Live-Betrieb:
- **Median-CPU:** \`206 ms\` -> **\`1,22 ms\`** (~168x schneller)
- **Wall Time:** \`11 ms\` | **RAM P50:** \`17,93 MB\` (128-MB-Limit) | **Fehler:** \`0\`

---

### 5. DevSecOps-, SEO- & GEO-Paritaet am Edge

- **Sicherheit & SRE-Observability:** Alle 7 Pflicht-Security-Header in \`public/_headers\` und \`worker/index.ts\`, \`SSL/TLS Full\` (TLS 1.3), **Always Use HTTPS**, **Bot Fight Mode**, DNS-E-Mail-Authentifizierung (\`SPF\`/\`DKIM\`/\`DMARC\` via Cloudflare Email Routing + Brevo), DSGVO-konforme Self-Hosted-Fonts (\`@fontsource-variable\`), HMAC-SHA256-Rate-Limiting ueber \`cf-connecting-ip\` (\`RATE_LIMIT_SALT\`), **GitHub Dependabot** sowie externes 24/7-Monitoring per **UptimeRobot** + **Cloudflare Workers Observability** + \`pnpm verify:live\`.
- **SEO & GEO:** \`301\`-Redirect-Rule \`yusupovartur.com/* -> www.yusupovartur.com/\${1}\` inklusive Query-Strings (UTM & \`?chat=estimator\`), \`308\`-Legacy-Redirects in \`public/_redirects\`, **512 URLs** in der Google Search Console verifiziert, **513 URLs** per IndexNow (\`HTTP 200\`) angenommen sowie \`/feed.xml\` und \`llms.txt\` aktiv (**AI Labyrinth** bleibt bewusst deaktiviert).

---

### 6. Ehrliche Abwaegung

Fuer Anwendungen mit cookie-basiertem dynamischem SSR auf jeder Seite ist OpenNext oder ein Node-Container besser geeignet. Fuer B2B-Plattformen, Engineering-Blogs, Dokumentation und Portfolios mit gezielten API-Endpunkten liefert **Next.js 16 Static Export + Cloudflare Static Assets + Prebuilt Edge RAG** jedoch Sub-2ms-Compute, unlimitierte Bandbreite und planbare \`$0/Monat\`.
`,
  },
}
