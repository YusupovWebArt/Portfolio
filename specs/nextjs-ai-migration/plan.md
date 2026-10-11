# Implementation Plan: Next.js 16 AI-Harness Migration with OpenAI RAG Agent and Dedicated Project Pages

## 1. Executive Summary
- **Target Feature**: `specs/nextjs-ai-migration`
- **Primary Objectives**:
  1. Migrate the portfolio frontend from React 19 + Vite SPA to Next.js 16.4.0 (App Router, Turbopack, React 19.3.0, Tailwind CSS 4.3.3, pnpm).
  2. Implement 69 standalone static case study pages (SSG) at `app/[locale]/projects/[slug]/page.tsx` with dedicated SEO, GEO, Schema.org JSON-LD microdata (`CaseStudy`, `TechArticle`, `Person`), and dynamic Open Graph image generation.
  3. Implement a contextual AI Agent CTA button on each project page (`[Ask AI about this project]`), opening the chat with pre-loaded project context and tailored suggestion chips.
  4. Build a fullstack conversational RAG Agent at `app/api/chat/route.ts` using Vercel AI SDK 7.x, OpenAI `gpt-4o-mini`, and `text-embedding-3-small`.
  5. Implement hybrid knowledge retrieval (exact keyword + vector cosine similarity) over 69 projects, services, and profile chunks.
  6. Implement Tool Calling (`showProjects`) and Generative UI for interactive project cards inside the streaming chat interface.
  7. Implement Upstash Redis rate limiting and prompt injection defenses.
  8. Adapt the AI-Harness (Constitution, 29+ Vitest tests, Playwright E2E suite, axe-core WCAG 2.2 AA) to Next.js 16 with zero regressions.
- **Guiding Principles**: Constitution compliance, strict TDD (Red-first), Zero-`any` TypeScript, zero em dashes (standard hyphens `-` only), zero emojis in technical data.

---

## 2. Architectural Blueprint and Component Structure

### Next.js 16 App Router Directory Layout
```text
Portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx                 # Root HTML, fonts, LanguageContext, ThemeContext, ConsentContext
│   │   ├── page.tsx                   # Main landing page (Hero, About, Skills, Showcase Grid, Contact)
│   │   ├── projects/
│   │   │   ├── page.tsx               # Full filterable project directory page
│   │   │   └── [slug]/
│   │   │       ├── page.tsx           # Standalone SSG case study page (SEO, GEO, Schema.org, AI CTA)
│   │   │       └── opengraph-image.tsx# Dynamic localized Open Graph card generator
│   │   └── not-found.tsx
│   ├── api/
│   │   └── chat/
│   │       └── route.ts               # Streaming RAG Agent Route Handler (Vercel AI SDK 7 + OpenAI)
│   └── globals.css                    # Tailwind CSS v4 directives and CSS variables
├── src/
│   ├── components/                    # Modular UI components (Server & Client)
│   │   ├── ChatModal.tsx              # Interactive AI Chat with Generative UI cards & suggestion chips
│   │   ├── ProjectDetailView.tsx      # Case study layout component for standalone page
│   │   ├── ProjectsGrid.tsx           # Filterable showcase grid on landing page
│   │   └── ...                        # Hero, About, Skills, Contact, Header, Footer
│   ├── contexts/                      # LanguageContext, ThemeContext, ConsentContext
│   ├── lib/
│   │   ├── ai/
│   │   │   ├── rag.ts                 # Hybrid search retriever (BM25 + Cosine Similarity)
│   │   │   ├── tools.ts               # Tool definitions (showProjects, getContactInfo)
│   │   │   └── prompts.ts             # System prompt with persona & injection guardrails
│   │   ├── analytics.ts               # GA4 Consent Mode v2 dynamic loader & cookie purger
│   │   └── ratelimit.ts               # Upstash Redis rate limiting helper
│   ├── data/
│   │   ├── knowledge-base.json        # Structured RAG knowledge chunks (projects, bio, services)
│   │   └── embeddings.json            # Pre-computed vector embeddings (text-embedding-3-small)
│   └── locales/                       # Trilingual dictionaries (en.ts, ua.ts, es.ts)
```

### Server vs Client Component Boundaries
- **Server Components (Default)**:
  - `app/[locale]/layout.tsx` (static document shell, metadata generation, font loading)
  - `app/[locale]/page.tsx` (static landing page sections)
  - `app/[locale]/projects/[slug]/page.tsx` (static case study page with full SEO/GEO/Schema.org markup)
- **Client Components (`'use client'`)**:
  - `src/components/ChatModal.tsx` (streaming chat state, user input, audio/chips, tool card rendering)
  - `src/components/ProjectChatTrigger.tsx` (contextual project CTA opening chat with active project payload)
  - `src/contexts/ThemeContext.tsx`, `LanguageContext.tsx`, `ConsentContext.tsx`
  - Sliders, image zoom modals, and interactive filter controls

---

## 3. Phased Execution Roadmap

### Phase 1: RAG Knowledge Base and Vector Index
- **Scope**:
  - Extract structured semantic chunks from all 69 project case studies, profile data, B2B services, and architecture principles.
  - Implement a generation script `scripts/generate-embeddings.mjs` using OpenAI `text-embedding-3-small`.
  - Author the hybrid retriever in `src/lib/ai/rag.ts` combining keyword matching and vector cosine similarity.
- **Deliverables**: `src/data/knowledge-base.json`, `src/data/embeddings.json`, `src/lib/ai/rag.ts`, and retriever unit tests.

### Phase 2: Next.js 16 App Router Scaffolding and Core UI Migration
- **Scope**:
  - Update `package.json` dependencies to `next@16.4.0`, `react@19.3.0`, `react-dom@19.3.0`, `ai@7.x`, `@ai-sdk/openai`, and `@ai-sdk/react`.
  - Configure `next.config.ts` for Turbopack, standalone output, and security headers.
  - Establish `app/[locale]/layout.tsx` and migrate `globals.css` with Tailwind CSS v4.
  - Migrate core sections (Hero, About, Skills, Contact, Footer, ThemeContext, LanguageContext, ConsentContext).
- **Deliverables**: Working Next.js 16 landing page with clean compilation and full theme/language parity.

### Phase 3: Standalone SSG Project Pages and SEO/GEO Optimization
- **Scope**:
  - Implement dynamic route `app/[locale]/projects/[slug]/page.tsx` with `generateStaticParams` for all 69 projects across `en`, `ua`, and `es`.
  - Implement `generateMetadata` delivering unique title, description, canonical, hreflang, and Open Graph tags.
  - Implement Schema.org JSON-LD microdata (`CaseStudy`, `TechArticle`, `Person`, `BreadcrumbList`).
  - Build `ProjectDetailView.tsx` with dedicated layout, metrics grid, architecture flow, and case study narrative.
  - Implement the contextual AI CTA button `[Ask AI about this project]` linking into chat state.
- **Deliverables**: 69 statically pre-rendered project pages with automated metadata, breadcrumbs, and contextual chat triggers.

### Phase 4: Fullstack RAG Agent and Streaming Route Handler
- **Scope**:
  - Implement `app/api/chat/route.ts` using Vercel AI SDK 7 `streamText` and OpenAI `gpt-4o-mini`.
  - Connect the hybrid RAG retriever to augment prompt context based on user inquiry.
  - Author system prompt in `src/lib/ai/prompts.ts` with strict persona, project grounding, and injection guardrails.
  - Implement client-side chat integration in `ChatModal.tsx` using `@ai-sdk/react` (`useChat`) with streaming display.
- **Deliverables**: Fully operational streaming conversational agent answering questions with accurate project facts.

### Phase 5: Tool Calling and Generative UI in Chat
- **Scope**:
  - Define agent tools in `src/lib/ai/tools.ts`:
    - `showProjects`: Accepts technology names, category, or project IDs, and returns structured project data.
    - `getContactInfo`: Returns secure contact channels.
  - Connect tools into `streamText` on the server and handle tool rendering on the client in `ChatModal.tsx`.
  - Render interactive project cards with direct case study links inside the chat stream.
- **Deliverables**: Generative UI chat interface displaying interactive project cards and suggestion chips.

### Phase 6: DevSecOps, Rate Limiting and Safety Hardening
- **Scope**:
  - Implement Upstash Redis rate limiting in `src/lib/ratelimit.ts` to restrict requests per IP address.
  - Protect contact channels via Base64 obfuscation (`contacts.test.ts`).
  - Harden Content Security Policy for Next.js 16 to allow OpenAI API streaming and secure fonts.
- **Deliverables**: Production-hardened server routes preventing token exhaustion and bot abuse.

### Phase 7: AI-Harness Test Suite Adaptation and Deployment
- **Scope**:
  - Adapt Vitest configuration for Next.js 16 and verify all 29+ unit/component specs pass.
  - Author new unit tests for RAG retriever, tool definitions, and rate limiting.
  - Adapt Playwright E2E tests for Next.js navigation, project pages, and chat streaming.
  - Verify zero axe-core accessibility violations (WCAG 2.2 AA).
  - Configure Vercel deployment pipeline and execute full verification (`pnpm verify`).
- **Deliverables**: Green CI/CD pipeline, Vercel preview deployment, and verified Core Web Vitals.

---

## 4. Risk Matrix and Mitigations

| Risk | Probability | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **API Token Cost Overrun** | Low | High | Enforce Upstash Redis rate limiting (15 requests/IP/hour) and use ultra-low-cost OpenAI `gpt-4o-mini`. |
| **Prompt Injection / Jailbreak** | Medium | Medium | Strict system prompt boundaries; context framing; model instructed to never execute arbitrary instructions outside Artur's portfolio scope. |
| **Hydration Mismatches in App Router** | Low | Medium | Strict separation between Server Components and Client Components; isolated localStorage hooks in Context providers. |
| **Next.js 16 Async Params Breaking Static Pages** | Low | High | Ensure all `params` in Next.js 16 page components are explicitly resolved with `await params`. |
| **Regression in Core Web Vitals** | Medium | High | Pre-render all 69 project pages with SSG; keep initial JavaScript minimal; enforce bundle budgets via CI/CD. |

---

## 5. Verification Pipeline and Quality Gates

- **Gate 1 (Red Stage)**: Author failing unit/RAG/component tests before implementing production code.
- **Gate 2 (Green Stage)**: Implement minimum code required to pass tests.
- **Gate 3 (Refactor Stage)**: Refactor code while maintaining passing tests and zero em dashes.
- **Gate 4 (Unified Verify Gate)**: Execute `pnpm verify` covering TypeScript (`tsc --noEmit`), ESLint, Vitest, Playwright, and production build.
- **Gate 5 (User Review Gate)**: Present deliverables to the user at the conclusion of each phase before proceeding.
