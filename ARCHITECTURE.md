# Portfolio Architecture Specification

A technical overview of the directory structure, build system, deployment mechanisms, and runtime logic of the Artur Yusupov Portfolio Application.

---

## 1. System Architecture

The application is structured as a high-performance **Single Page Application (SPA)** using React 19, TypeScript, and Vite, running on **Node.js 24 LTS**.

```mermaid
graph TD
    A[Vite Dev Server / Builder] --> B[React 19 Core App]
    B --> C[ThemeContext Provider]
    B --> C2[LanguageContext Provider]
    B --> D[Header / Lang & Theme Toggle]
    B --> E[Hero / Typewriter]
    B --> F[About / Bio & Journey]
    B --> G[AiWorkflow Stepper]
    B --> H[Projects Section 69 Case Studies]
    B --> I[Skills / T-Shaped Specialist]
    B --> J[B2bServices / Pymes & Marca Blanca]
    B --> K[Contact Section]
    B --> L[ChatModal FAQ & AI Console]
    B --> M[Footer / RGPD Legal Line]
```

---

## 2. Directory Structure

The core files and components are structured as follows:

```text
Portfolio/
├── .agents/
│   └── AGENTS.md           # Workspace Rules & AI Harness Constraints
├── .github/
│   ├── dependabot.yml      # Automated Dependency Governance
│   └── workflows/
│       └── deploy.yml      # CI/CD Automated Security & Deploy Workflow
├── src/
│   ├── assets/             # Global visual resources and images
│   ├── components/         # Modular React Components
│   │   ├── projects/       # 69 Individual project case study files
│   │   ├── About.tsx       # Bio & journey timeline
│   │   ├── AiWorkflow.tsx  # Dynamic Spec-Driven SDLC stepper
│   │   ├── B2bServices.tsx # Dual-tab B2B services (Pymes & White-Label)
│   │   ├── Header.tsx      # Sticky navigation, theme & 3-lang dropdown
│   │   ├── Skills.tsx      # T-Shaped Specialist component
│   │   ├── ChatModal.tsx   # Floating client-side FAQ bot & console
│   │   └── Footer.tsx      # Legal RGPD notice & footer links
│   ├── contexts/           # Theme (Dark/Light) & Language (i18n) providers
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   └── chatFaq.ts      # Multilingual FAQ Chatbot database (EN/UA/ES)
│   ├── locales/            # i18n Translation dictionaries & types
│   │   ├── types.ts        # Strict Translation interface
│   │   ├── en.ts           # English translations
│   │   ├── ua.ts           # Ukrainian translations
│   │   └── es.ts           # Spanish translations
│   ├── App.tsx             # Root Layout manager
│   ├── index.css           # Tailwind v4 import & custom styles
│   └── main.tsx            # Application entrypoint mount
├── DESIGN_SYSTEM.md        # Styles, typography, and grids spec
├── SECURITY.md             # CSP, Base64 encryption, and secrets policy
├── ARCHITECTURE.md         # Current file (System overview)
└── package.json            # Dependencies and scripts definitions
```

---

## 3. Runtime Logic & Navigation

### Theme Context
- A React Context (`ThemeContext`) controls dark-mode state by toggling the `.dark` class on the root `document.documentElement` element.
- Tailwind CSS v4 custom variant rules map the `.dark` selector to apply dark-themed styles (`dark:bg-*`, `dark:text-*`).

### Internationalization (i18n) Subsystem
- Driven by a custom `LanguageContext` providing strict type-checked translations via `useLanguage()`.
- **Supported Languages:** 4 languages - English (`en`), Ukrainian (`ua`), Spanish (`es`), and German (`de`).
- **Header Language Switcher:** A 4-language interactive dropdown menu (`EN`, `UA`, `ES`, `DE`) with custom SVG flag icons and click-outside dismissal.
- **Auto-Detection:** Detects visitor's browser language on first load (`navigator.language`).
- **Persistence:** Persists language preference in `localStorage.portfolio_lang`.
- **Localization:** Supports `en.ts`, `ua.ts`, `es.ts`, and `de.ts` translation dictionaries. Project case studies include localized descriptions across all 4 locales.

### Smooth Scroll Navigation
- Navigation uses standard HTML `#anchor` links mapped to section `id`s.
- Active states are tracked via scroll event listeners on window offsets, automatically highlighting the corresponding header menu item.

### Client-Side Multilingual FAQ Chatbot
- Driven by a keyword-matching algorithm inside `src/data/chatFaq.ts`.
- Supports trilingual FAQ matching (`question`, `questionUa`, `questionEs` & `answer`, `answerUa`, `answerEs`), returning localized answers via `getBotAnswer(question, lang)`.

---

### View Transitions Navigation Architecture
- **Native W3C Standard:** State transitions between the project grid and `ProjectDetail.tsx` are wrapped in `document.startViewTransition()` with strict TypeScript bindings and graceful non-blocking fallback.
- **Hardware GPU Morphing:** `viewTransitionName: 'project-thumb-${project.id}'` seamlessly morphs thumbnails into full case study banners at 120 FPS with 0 KB external library overhead.
- **Project Card Architecture:** Displays curated top 4 technologies with an interactive `+N` / `- less` toggle per card, fixed 3-line description clamping (`line-clamp-3`), and sticky bottom CTA alignment.

### Progressive Web App (PWA) & Offline Subsystem
- **Web App Manifest (`public/manifest.webmanifest`):** Declares standalone display mode, orientation, brand colors (`#0f172a` / `#7c3aed`), and 192x192/512x512/maskable app icons for native mobile (iOS/Android) and desktop home-screen installation.
- **Service Worker (`public/sw.js`):** Implements a **Stale-While-Revalidate** caching strategy with CacheStorage API, enabling instant sub-second page loads and offline case study navigation with automated background cache invalidation.

### Spec-Driven AI Harness Engineering (SDD 2026 Architecture)
- **Immutable Constitution:** Governed by [`.specify/memory/constitution.md`](file:///d:/PORTFOLIO/Portfolio/.specify/memory/constitution.md), establishing permanent non-negotiable standards (Zero-`any`, Base64 security, CWV budgets, i18n parity, WCAG 2.2 AA / EAA 2026).
- **Rules Layer:** Always-active workspace boundaries in [`.agents/rules/project-context.md`](file:///d:/PORTFOLIO/Portfolio/.agents/rules/project-context.md) and [`.agents/rules/code-style.md`](file:///d:/PORTFOLIO/Portfolio/.agents/rules/code-style.md).
- **Modular Skills Catalog:** On-demand procedural modules in [`.agents/skills/`](file:///d:/PORTFOLIO/Portfolio/.agents/skills/) (`tdd-react`, `a11y-wcag22`, `perf-cwv`, `i18n-locales`, `seo-pseo`) compatible across Antigravity, Claude Code, and Cursor.
- **Isolated Feature Specs:** Lifecycle-governed feature development managed in `specs/<feature-slug>/` (`spec.md`, `plan.md`, `tasks.md`, `analysis.md`).
- **Deterministic Verification:** Every automated step enforces SAST (TypeScript strict compilation, ESLint 10), SCA (production dependency audits), and sub-second bundle budget guardrails.

---

## 4. Build, CI/CD, & Deploy Pipeline

- **Local Compilation:** Vite uses the Rolldown bundler to perform code splitting, generating small modular files for vendor packages, icons, and components. Main bundle is optimized under 200 KB (`198.09 kB`, 53.62 kB gzip).
- **Package Management:** Managed via **pnpm 11** with global NTFS content-addressable storage (`D:\.pnpm-store`), ensuring zero-duplication hard links and strict non-flat node_modules resolution.
- **Continuous Integration (GitHub Actions):** On every push to the `master` branch:
  1. Spins up an Ubuntu Linux container on Node.js 24 LTS and sets up `pnpm/action-setup@v4`.
  2. Installs clean deterministic dependencies (`pnpm install --frozen-lockfile`).
  3. Executes SAST: Type checks (`pnpm exec tsc --noEmit`) and lints (`pnpm lint`).
  4. Executes SCA: Production vulnerability audit (`pnpm audit --prod --audit-level=high`).
  5. Compiles production bundle (`pnpm build`).
  6. Automatically authenticates with `${{ secrets.GITHUB_TOKEN }}` and deploys the `dist` folder to the `gh-pages` branch, making changes live instantly.

---

## 5. Future Roadmap: Hybrid RAG AI Chatbot Architecture

A planned upgrade to transition the current client-side keyword matching FAQ chatbot into an enterprise **Hybrid RAG (Retrieval-Augmented Generation)** assistant while preserving 100% of the existing UI/UX:

```mermaid
graph TD
    User([Website Visitor]) --> Choice{Interaction Method}
    Choice -- Quick FAQ Button Click --> LocalFAQ[Instant Local chatFaq.ts Matching 0ms]
    Choice -- Free-Text Query --> EdgeRAG[Cloudflare Serverless Worker /api/chat]
    
    subgraph RAG Pipeline
        EdgeRAG --> VectorDB[Vector Knowledge Base: 69 Projects, Resume, Specs]
        VectorDB --> TopKContext[Top 3-5 Relevant Markdown Chunks]
        TopKContext --> LLM[GPT-4o-mini / Gemini Flash Streaming]
    end
    
    LLM -- SSE Token Stream --> ChatUI[ChatModal.tsx Console Bubble]
    LocalFAQ --> ChatUI
    EdgeRAG -. Failure / Network Timeout .-> LocalFAQ
```

### Key Milestones:
1. **Knowledge Extraction & Vectorization:** Chunking 69 project case studies, resume data, and spec contracts into semantic vector embeddings.
2. **Serverless Edge Microservice:** Cloudflare Worker endpoint handling semantic search and streaming LLM responses.
3. **Frontend Progressive Adapter:** `src/services/chatService.ts` providing feature-flagged hybrid routing with seamless fallback to static FAQ.
4. **Security Enforcement:** Full compliance with the 6-tier security roadmap defined in [**`SECURITY.md` (Section 5)**](file:///d:/PORTFOLIO/Portfolio/SECURITY.md#5-future-rag-architecture-security-roadmap-ai-chatbot-upgrade).

---

## 6. Analytics, Telemetry & Search Engine Infrastructure (GA4 & GSC)

### Privacy-Preserving GA4 Telemetry (Consent Mode v2 Basic)
- **Zero Pre-Consent Dispatches:** By default, Google Consent Mode v2 initializes with `ad_storage: denied`, `analytics_storage: denied`, `ad_user_data: denied`, and `ad_personalization: denied`. No tracking cookies or network requests reach Google servers until the user provides explicit opt-in through `ConsentModal.tsx`.
- **SSR-Safe Hydration:** Consent state is synchronized via React 19 `useSyncExternalStore` in `ConsentContext.tsx`, eliminating SSR hydration mismatches across static Next.js 16 routes.
- **14-Month Data Retention:** Configured in the `Webart React Portfolio` (`yusupovartur.com`) property to preserve user and event cohorts for up to 14 months for long-term funnel analysis.
- **Enhanced Measurement:** Captures page views across client-side App Router history state changes, outbound link clicks, file downloads, and 90% scroll depth.

### Event Taxonomy & Custom Dimensions
- **Key Events (Conversions):**
  - `contact_click`: Triggered when visitors initiate communication via Telegram, Email, WhatsApp, LinkedIn, or GitHub.
  - `cv_download`: Triggered when visitors download Artur Yusupov CV PDF from any UI component.
- **Custom Dimensions (Event-Scoped):**
  - `Contact Channel` (`contact_channel`): Categorizes the specific platform selected (`telegram`, `email`, `whatsapp`, `linkedin`, `github`).
  - `Download Source` (`download_source`): Categorizes the UI origin initiating the CV download (`hero`, `header`, `about`, `footer`, `skills`).
  - `Chat Action` (`chat_action`): Categorizes interactions with the Hybrid RAG AI chat assistant (`open`, `close`, `suggestion_click`, `ask_question`, `tool_call`).

### Google Search Console (GSC) Domain Property Integration
- **DNS-Verified Domain Property:** Configured under `sc-domain:yusupovartur.com`, aggregating search performance across all subdomains and protocol variants.
- **Direct GA4 Link:** GSC is linked directly to GA4 stream `Artur Yusupov Production`, feeding Organic Google Search impressions, clicks, search queries, and landing page metrics directly into GA4 reports.
- **Automated Multilingual XML Sitemap:** Built on Next.js 16 App Router `app/sitemap.ts`, serving `https://www.yusupovartur.com/sitemap.xml` with 512+ discovered URLs across 4 localized variants (`en`, `ua`, `es`, `de` + `x-default`) with bidirectional hreflang annotations.
- **Proactive 4xx Resolution:** Automated verification and remediation of crawl anomalies and historical draft slugs.

### Zero-Commit Secrets Compliance
- In accordance with `SECURITY.md`, the repository remains 100% public-safe: zero private Google service keys, OAuth tokens, DNS registrar credentials, or Measurement Protocol API secrets are stored in code or specifications. Public client identifiers (`G-STZ8DN2KND`) operate exclusively within browser-safe boundaries.

