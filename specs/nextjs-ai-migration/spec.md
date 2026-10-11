# Feature Specification: Next.js 16 AI-Harness Migration with OpenAI RAG Agent and Dedicated Project Pages

## 1. Context and Problem Statement
- **Background**: The Artur Yusupov portfolio is currently an enterprise-grade Single Page Application (SPA) built with React 19, Vite 8, TypeScript 6, and Tailwind CSS v4, deployed to GitHub Pages. It features 69 detailed project case studies, trilingual i18n, a rigorous AI-Harness (SDD + SDLC + TDD), WCAG 2.2 AA compliance, and sub-450 KB initial bundle budgets.
- **Problem Statement**: While the current React SPA provides excellent speed for direct portfolio visits, it has two major strategic limitations for high-value client acquisition:
  1. The AI chatbot is currently a client-side keyword matcher with pre-scripted suggestions. It cannot conduct natural language reasoning, cite contextual case study facts dynamically, or execute server-side tools due to the lack of a secure backend for LLM API keys.
  2. All 69 case studies live inside modal representations on a single index page. They lack individual indexable URLs, dedicated Schema.org microdata, and standalone Open Graph preview cards, severely restricting organic SEO and modern Generative Engine Optimization (GEO) across AI search engines (Perplexity, ChatGPT Search, Gemini, Claude).
- **Scope**:
  - **In-scope**:
    - Phased migration to Next.js 16.4.0 App Router with React 19.3.0, Tailwind CSS 4.3.3, and pnpm.
    - Generation of 69 standalone static pages (SSG) at `app/[locale]/projects/[slug]/page.tsx` with dedicated metadata, breadcrumbs, Schema.org microdata (`CaseStudy`, `TechArticle`, `Person`), and dynamic Open Graph image generation.
    - Contextual AI Agent CTA button on every dedicated project page (`[Ask AI about this project]`), opening the chat with active project context and contextual suggestion chips.
    - Fullstack RAG AI Agent using Vercel AI SDK 7.x (`@ai-sdk/react`, `@ai-sdk/openai`), OpenAI `gpt-4o-mini`, and `text-embedding-3-small`.
    - Hybrid retrieval engine combining exact keyword matching (for specific technologies) with semantic vector similarity across a pre-embedded knowledge base of 69 case studies, skills, services, and bio.
    - Generative UI and Tool Calling (`showProjects`) enabling the agent to return interactive project cards directly inside the streaming chat interface.
    - Server-side rate limiting via Upstash Redis and prompt injection guardrails.
    - Migration and expansion of the AI-Harness test suite (Vitest unit/RAG tests, Playwright E2E browser tests, axe-core WCAG 2.2 AA audits).
    - Production deployment configuration for Vercel with zero downtime for the existing site.
  - **Out-of-scope**:
    - Redesigning visual branding, typography scale, or core color tokens from `DESIGN_SYSTEM.md`.
    - Creating an external CMS dashboard or user authentication.

---

## 2. User Stories and Functional Requirements

### User Stories
- **US-1 (Client/Recruiter Case Study Deep Dive)**: As a potential client, recruiter, or engineering manager, I want to open a dedicated, distraction-free URL for any case study (e.g., `/projects/it-magic`), view complete architectural diagrams and metrics, and share the link on LinkedIn or Telegram with an accurate, rich Open Graph preview card.
- **US-2 (Contextual AI Assistant on Project Pages)**: As a client reviewing a specific project, I want to click a prominent action button on that page to ask the AI Agent technical or delivery questions about that exact project and receive precise answers grounded in the project facts.
- **US-3 (Fullstack Conversational RAG Representative)**: As a prospective client visiting the portfolio, I want to converse with an AI Agent that answers questions about Artur's availability, pricing models, technology stack, and commercial experience with zero hallucinations.
- **US-4 (Generative UI in Chat)**: As a user interacting with the AI Agent, I want the agent to render live, interactive project cards with direct case study links and suggestion chips inside the chat stream when recommending past work.
- **US-5 (Search Engine & GEO Visibility)**: As an AI search engine (Perplexity, ChatGPT Search, Google Gemini), I want semantic HTML, structured JSON-LD microdata, and localized hreflang tags for all 69 projects to discover and cite Artur Yusupov as an authoritative engineer.

### Functional Requirements (FR)
- **FR-1 (Next.js 16 App Router Architecture)**: Implement a clean Next.js 16 application structure utilizing `pnpm`, with strict separation between Server Components (pre-rendered metadata and layout) and Client Components (`'use client'` for interactive UI).
- **FR-2 (69 Standalone SSG Project Pages)**: Create dynamic routes at `app/[locale]/projects/[slug]/page.tsx` using `generateStaticParams` to pre-render all 69 projects across `en`, `ua`, and `es`.
- **FR-3 (Automated SEO & GEO Metadata)**: Implement `generateMetadata` for each project page producing localized `title`, `description`, canonical links, hreflang alternatives, OpenGraph previews, and Schema.org JSON-LD microdata (`CaseStudy`, `TechArticle`, `Person`).
- **FR-4 (Contextual Project Chat Entrypoint)**: Implement a contextual CTA on each project page that opens the `ChatModal` with pre-populated project context and 3 to 4 tailored suggestion chips.
- **FR-5 (Serverless Streaming Route Handler)**: Create `app/api/chat/route.ts` using Vercel AI SDK 7.x (`streamText`) and OpenAI `gpt-4o-mini` with streaming responses (Server-Sent Events).
- **FR-6 (Hybrid RAG Knowledge Retrieval)**: Construct a pre-indexed knowledge base of 69 projects, profile details, and services; implement hybrid retrieval combining exact keyword scoring with cosine similarity over `text-embedding-3-small` vector embeddings.
- **FR-7 (Tool Calling & Generative UI)**: Equip the agent with tools (`showProjects`, `getContactInfo`) to return interactive React project cards and contact actions inside the message list.
- **FR-8 (Abuse Prevention & Rate Limiting)**: Implement IP-based rate limiting on `/api/chat` using Upstash Redis to prevent bot abuse and excessive token consumption.
- **FR-9 (Feature Parity)**: Preserve all existing capabilities: trilingual dictionary switching (`LanguageContext`), theme switching (`ThemeContext`), Consent Mode v2 Basic (`ConsentContext`), and Base64 contact obfuscation.

---

## 3. Non-Functional Requirements (NFR)

- **NFR-1 (Type Safety)**: Strict TypeScript 6 with zero `any` types across server and client code, verified via `pnpm exec tsc --noEmit`.
- **NFR-2 (Security & Privacy)**: Zero commit secrets in git (`SECURITY.md`); API keys stored exclusively in server-side environment variables on Vercel; client-side Base64 obfuscation for contact details maintained.
- **NFR-3 (Performance & Budgets)**: Next.js SSG pages must maintain Core Web Vitals budgets (LCP <= 1.2s, CLS 0.00, FCP <= 0.8s); initial chat streaming time-to-first-token (TTFB) must be under 500ms.
- **NFR-4 (i18n Parity)**: 100% key and metadata parity across English (`en`), Ukrainian (`ua`), and Spanish (`es`).
- **NFR-5 (Accessibility)**: European Accessibility Act (EAA 2026) and WCAG 2.2 Level AA compliance with zero axe-core errors; all chat interactions and project pages must be fully operable via keyboard.
- **NFR-6 (Style Constraints)**: Zero em dashes in texts, descriptions, UI labels, or code comments; standard hyphens `-` only. Zero emojis in technical project data.

---

## 4. Architectural Boundaries and Decisions

### Core Decisions
- **Framework & Runtime**: Next.js 16.4.0 (App Router, Turbopack) on React 19.3.0 and Node.js 24 LTS.
- **Package Manager**: `pnpm@11.x` with strict dependency resolution.
- **AI Infrastructure**: Vercel AI SDK 7.x (`ai`, `@ai-sdk/react`, `@ai-sdk/openai`), OpenAI `gpt-4o-mini` for completions, `text-embedding-3-small` for embeddings.
- **Vector Storage**: In-memory pre-computed vector index for project chunks (~80 chunks, <300 KB) with optional Upstash Vector sync, ensuring sub-5ms retrieval latency with zero database connection overhead.
- **Routing Paradigm**:
  - `/` (or `/[locale]`): Main landing page with Hero, About, Skills, filterable Project Showcase grid, and Contact.
  - `/[locale]/projects/[slug]`: Standalone SSG case study pages with deep technical breakdowns, metrics, and contextual AI CTAs.
  - W3C View Transitions API for smooth morphing transitions between showcase grid and standalone pages.
- **Deployment Platform**: Vercel for native Edge runtime, Server Actions, and automatic preview deployments.

---

## 5. Verification and Acceptance Criteria

- [ ] `spec.md`, `plan.md`, `tasks.md`, and `analysis.md` completed and approved.
- [ ] Strict TDD Red-Green cycle followed with failure proofs documented in `tasks.md`.
- [ ] Next.js 16 app compiles cleanly with zero TypeScript errors (`pnpm exec tsc --noEmit`).
- [ ] All 69 project pages pre-render statically (SSG) with dedicated metadata and Schema.org blocks.
- [ ] `/api/chat` streams valid OpenAI completions and invokes `showProjects` tool correctly.
- [ ] Contextual project chat CTA correctly pre-loads project context and suggestion chips.
- [ ] Rate limiting enforces request limits on `/api/chat`.
- [ ] All Vitest unit tests pass (`pnpm test`).
- [ ] Playwright E2E and axe-core accessibility tests pass (`pnpm test:e2e`).
- [ ] Full quality gate passes (`pnpm verify`).
