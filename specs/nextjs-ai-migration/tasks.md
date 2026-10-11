# Task Breakdown: Next.js 16 AI-Harness Migration with OpenAI RAG Agent and Dedicated Project Pages

## Execution Rules
1. Every implementation task with behavioral logic must have a corresponding Red test.
2. The failing test must be executed and its failure output captured in the "Red Failure Proof" field before writing production code.
3. Once green, perform refactoring if necessary while maintaining all tests passing.
4. Keep commit history clean and structured: `test(...)` -> `feat/fix(...)` -> `refactor(...)`.
5. Zero em dashes in code, comments, or documentation; use standard hyphens `-` only.

---

## Phase 1: RAG Knowledge Base and Hybrid Retriever

### Task 1.1: Structured RAG Knowledge Base Extraction
- **Status**: DONE
- **Dependencies**: None
- **Red Test File**: `src/lib/ai/knowledge.test.ts`
- **Red Test Case**: `it('should load structured knowledge base containing all 69 project case studies with required schema', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/lib/ai/knowledge.test.ts [ src/lib/ai/knowledge.test.ts ]
  Error: Failed to resolve import "./knowledge" from "src/lib/ai/knowledge.test.ts". Does the file exist?
    File: D:/PORTFOLIO/Portfolio/src/lib/ai/knowledge.test.ts:7:7
    1  |  import { describe, it, expect } from "vitest";
    2  |  import { loadKnowledgeBase, findChunkBySlug, getAllKnowledgeChunks } from "./knowledge";
       |                                                                             ^
  Test Files  1 failed (1)
  Tests  no tests
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/ai/knowledge.ts`, `src/lib/ai/knowledge.test.ts`
  - Implementation summary: Dynamically extracted and indexed all 69 project case studies plus profile, service, and methodology chunks with zero em dashes and strict types.
- **Green Verification Proof**:
  ```text
  ✓ src/lib/ai/knowledge.test.ts (5 tests) 46ms
  Test Files  8 passed (8)
  Tests  34 passed (34)
  Duration  20.80s
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

### Task 1.2: Hybrid Knowledge Retriever Test & Implementation
- **Status**: DONE
- **Dependencies**: Task 1.1
- **Red Test File**: `src/lib/ai/rag.test.ts`
- **Red Test Case**: `it('should accurately retrieve relevant project chunks using keyword matching and cosine similarity', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/lib/ai/rag.test.ts [ src/lib/ai/rag.test.ts ]
  Error: Failed to resolve import "./rag" from "src/lib/ai/rag.test.ts". Does the file exist?
    File: D:/PORTFOLIO/Portfolio/src/lib/ai/rag.test.ts:6:7
    1  |  import { describe, it, expect } from "vitest";
    2  |  import { retrieveKnowledge, formatContextForLLM, calculateCosineSimilarity } from "./rag";
       |                                                                                     ^
  Test Files  1 failed (1)
  Tests  no tests
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/ai/rag.ts`, `src/lib/ai/rag.test.ts`
  - Implementation summary: Built hybrid retriever with keyword tokenization, technology exact-match boosts, active project context prioritization, cosine vector similarity, and LLM prompt context formatter.
- **Green Verification Proof**:
  ```text
  ✓ src/lib/ai/rag.test.ts (6 tests) 34ms
  Test Files  9 passed (9)
  Tests  40 passed (40)
  Duration  19.60s
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

---

## Phase 2: Next.js 16 App Router Scaffolding and Core UI Migration

### Task 2.1: Next.js 16 Configuration & Package Migration
- **Status**: DONE
- **Dependencies**: Phase 1
- **Red Test File**: `src/test/next-config.test.ts`
- **Red Test Case**: `it('should validate Next.js 16 configuration with Turbopack and security headers', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/next-config.test.ts > Next.js 16 Configuration & Package Specification (TDD)
  AssertionError: expected false to be true
   ❯ src/test/next-config.test.ts:8:39
        8|     expect(fs.existsSync(configPath)).toBe(true)
  AssertionError: expected undefined to be defined
   ❯ src/test/next-config.test.ts:21:35
       21|     expect(pkg.dependencies.next).toBeDefined()
  Test Files  1 failed (1)
  Tests  2 failed (2)
  ```
- **Green Implementation**:
  - Files created/modified: `package.json`, `next.config.ts`, `src/test/next-config.test.ts`
  - Implementation summary: Installed `next@16.4.0`, `ai@7.0.137`, `@ai-sdk/openai`, `@ai-sdk/react`, `zod`, and created `next.config.ts` with strict security headers (CSP, HSTS, X-Frame-Options) and zero em dashes.
- **Green Verification Proof**:
  ```text
  ✓ src/test/next-config.test.ts (2 tests) 12ms
  Test Files  1 passed (1)
  Tests  2 passed (2)
  Duration  3.10s
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

### Task 2.2: Root Layout, Providers, and Landing Page
- **Status**: DONE
- **Dependencies**: Task 2.1
- **Red Test File**: `src/test/landing-layout.test.tsx`
- **Red Test Case**: `it('should render root layout with LanguageContext, ThemeContext, and ConsentContext', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/landing-layout.test.tsx > Next.js 16 Root Layout & Landing Page Specification (TDD)
  AssertionError: expected false to be true
   ❯ src/test/landing-layout.test.tsx:8:39
        8|     expect(fs.existsSync(layoutPath)).toBe(true)
  AssertionError: expected false to be true
   ❯ src/test/landing-layout.test.tsx:21:37
       21|     expect(fs.existsSync(pagePath)).toBe(true)
  Test Files  1 failed (1)
  Tests  2 failed (2)
  ```
- **Green Implementation**:
  - Files created/modified: `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`, `app/globals.css`, `src/components/Providers.tsx`, `src/test/landing-layout.test.tsx`
  - Implementation summary: Built Next.js 16 App Router root layout with Providers wrapper, Header, Footer, ConsentBanner, ScrollToTopButton, and landing page with Hero, About, AiWorkflow, Projects, Skills, B2bServices, and Contact.
- **Green Verification Proof**:
  ```text
  ✓ src/test/landing-layout.test.tsx (2 tests) 13ms
  Test Files  11 passed (11)
  Tests  44 passed (44)
  Duration  23.29s
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

---

## Phase 3: Standalone 69 SSG Project Pages and SEO/GEO Optimization

### Task 3.1: Dynamic SSG Route Implementation
- **Status**: DONE
- **Dependencies**: Phase 2
- **Red Test File**: `src/test/project-ssg.test.ts`
- **Red Test Case**: `it('should generate static params for all 69 projects across en, ua, and es locales', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/project-ssg.test.ts > Standalone SSG Project Pages Specification (TDD)
  Error: Cannot find module '../../src/lib/projects'
  Test Files  1 failed (1)
  Tests  3 failed (3)
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/projects.ts`, `app/[locale]/projects/[slug]/page.tsx`, `src/components/ProjectDetailView.tsx`
  - Implementation summary: Built dynamic route for all 69 project case studies across `en`, `ua`, `es` generating 207 static SSG paths using async `params` resolution in Next.js 16.
- **Green Verification Proof**:
  ```text
  ✓ src/test/project-ssg.test.ts (3 tests) 553ms
  Test Files  1 passed (1)
  Tests  3 passed (3)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

### Task 3.2: Automated Project SEO/GEO Metadata & Schema.org JSON-LD
- **Status**: DONE
- **Dependencies**: Task 3.1
- **Red Test File**: `src/test/project-seo.test.ts`
- **Red Test Case**: `it('should generate valid localized metadata, hreflang tags, and Schema.org CaseStudy microdata', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/project-seo.test.ts > Automated Project SEO/GEO Metadata Specification (TDD)
  Error: Cannot find module '../lib/seo'
  Test Files  1 failed (1)
  Tests  2 failed (2)
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/seo.ts`, `app/[locale]/projects/[slug]/page.tsx`
  - Implementation summary: Built `buildProjectJsonLd` and `buildProjectBreadcrumbsJsonLd` providing Schema.org `TechArticle`, `SoftwareApplication`, and `BreadcrumbList` structured data, along with localized hreflang tags and Open Graph cards.
- **Green Verification Proof**:
  ```text
  ✓ src/test/project-seo.test.ts (2 tests) 17ms
  Test Files  1 passed (1)
  Tests  2 passed (2)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

### Task 3.3: Contextual Project AI Chat Trigger CTA
- **Status**: DONE
- **Dependencies**: Task 3.1
- **Red Test File**: `src/test/project-chat-cta.test.tsx`
- **Red Test Case**: `it('should dispatch project context payload to ChatModal when contextual CTA is clicked', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/project-chat-cta.test.tsx > Contextual Project AI Chat Trigger Specification (TDD) > should listen to open-ai-chat-context event in ChatModal and show project-specific chips
  TestingLibraryElementError: Unable to find an element with the text: /Ask about IT-Magic/i
  Test Files  1 failed (1)
  Tests  1 failed | 1 passed (2)
  ```
- **Green Implementation**:
  - Files created/modified: `src/components/ProjectChatTrigger.tsx`, `src/components/ChatModal.tsx`, `src/components/ProjectDetailView.tsx`
  - Implementation summary: Connected `open-ai-chat-context` event emitter and listener, dynamically revealing tailored question chips for the active project case study inside `ChatModal`.
- **Green Verification Proof**:
  ```text
  ✓ src/test/project-chat-cta.test.tsx (2 tests) 370ms
  Test Files  1 passed (1)
  Tests  2 passed (2)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

---

## Phase 4: Fullstack RAG Agent and Streaming Route Handler

### Task 4.1: Vercel AI SDK 7 Streaming Route Handler
- **Status**: DONE
- **Dependencies**: Phase 1, Phase 2
- **Red Test File**: `src/test/chat-api.test.ts`
- **Red Test Case**: `it('should accept chat message, retrieve RAG context, and stream response from OpenAI gpt-4o-mini', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/chat-api.test.ts [ src/test/chat-api.test.ts ]
  Error: Failed to resolve import "../lib/ai/prompts" from "src/test/chat-api.test.ts". Does the file exist?
  Test Files  1 failed (1)
  Tests  no tests
  ```
- **Green Implementation**:
  - Files created/modified: `app/api/chat/route.ts`, `src/lib/ai/prompts.ts`, `src/test/chat-api.test.ts`
  - Implementation summary: Built `buildSystemPrompt` enforcing strict Artur persona, RAG context injection, anti-injection guardrails, and zero em dashes. Built Next.js 16 route handler `app/api/chat/route.ts` utilizing `streamText` and offline fallback.
- **Green Verification Proof**:
  ```text
  ✓ src/test/chat-api.test.ts (3 tests) 38ms
  Test Files  1 passed (1)
  Tests  3 passed (3)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

### Task 4.2: Client-side Streaming Integration in ChatModal
- **Status**: DONE
- **Dependencies**: Task 4.1
- **Red Test File**: `src/test/chat-modal-streaming.test.tsx`
- **Red Test Case**: `it('should render streaming assistant messages and contextual chips using useChat hook', ...)`
- **Red Failure Proof**:
  ```text
  FAIL  src/test/chat-modal-streaming.test.tsx > ChatModal Client-side Streaming & Fallback Specification (TDD) > should call /api/chat with project context and stream response
  AssertionError: expected 'Hi! I am Artur\'s AI assistant. 🤖 Fe…' to be 'What architecture is used in IT-Magic?'
  Test Files  1 failed (1)
  Tests  1 failed | 1 passed (2)
  ```
- **Green Implementation**:
  - Files created/modified: `src/components/ChatModal.tsx`, `src/test/chat-modal-streaming.test.tsx`
  - Implementation summary: Connected client streaming to `/api/chat` with SSE/reader consumption, real-time message state update, project context passing, and automated fallback to static FAQ engine on network disconnection.
- **Green Verification Proof**:
  ```text
  ✓ src/test/chat-modal-streaming.test.tsx (2 tests) 301ms
  Test Files  1 passed (1)
  Tests  2 passed (2)
  ```
- **Review Check**:
  - [x] Strict type safety (zero `any`).
  - [x] Zero em dashes in code or comments.
  - [x] Passes `pnpm exec tsc --noEmit`.

---

## Phase 5: Tool Calling and Generative UI in Chat

### Task 5.1: Agent Tool Definitions (showProjects & getContactInfo)
- **Status**: TODO
- **Dependencies**: Phase 4
- **Red Test File**: `src/test/ai-tools.test.ts`
- **Red Test Case**: `it('should define showProjects and getContactInfo tools with strict Zod validation schemas', ...)`
- **Red Failure Proof**:
  ```text
  [Pending Red Execution]
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/ai/tools.ts`, `app/api/chat/route.ts`
  - Implementation summary: Tool calling schemas using `zod` for `showProjects` and `getContactInfo`.
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.

### Task 5.2: Generative UI Project Cards in Chat Stream
- **Status**: TODO
- **Dependencies**: Task 5.1
- **Red Test File**: `src/test/chat-generative-ui.test.tsx`
- **Red Test Case**: `it('should render interactive project card components when model invokes showProjects tool', ...)`
- **Red Failure Proof**:
  ```text
  [Pending Red Execution]
  ```
- **Green Implementation**:
  - Files created/modified: `src/components/chat/ProjectToolCard.tsx`, `src/components/ChatModal.tsx`
  - Implementation summary: Render interactive cards with thumbnail, tech pills, and link to case study inside chat message stream.
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.

---

## Phase 6: DevSecOps, Rate Limiting and Safety Hardening

### Task 6.1: Upstash Redis Rate Limiting on /api/chat
- **Status**: TODO
- **Dependencies**: Phase 4
- **Red Test File**: `src/test/ratelimit.test.ts`
- **Red Test Case**: `it('should reject requests with 429 Too Many Requests when IP rate limit is exceeded', ...)`
- **Red Failure Proof**:
  ```text
  [Pending Red Execution]
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/ratelimit.ts`, `app/api/chat/route.ts`
  - Implementation summary: Implement IP rate limiting (15 requests/hour) using Upstash Redis.
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.

### Task 6.2: Prompt Injection Defenses & Contact Obfuscation
- **Status**: TODO
- **Dependencies**: Task 6.1
- **Red Test File**: `src/test/security-hardening.test.ts`
- **Red Test Case**: `it('should verify system prompt safety boundaries and ensure no raw contacts in client bundle', ...)`
- **Red Failure Proof**:
  ```text
  [Pending Red Execution]
  ```
- **Green Implementation**:
  - Files created/modified: `src/lib/ai/prompts.ts`, `src/security/contacts.test.ts`
  - Implementation summary: Harden system prompt and ensure Base64 contact obfuscation is preserved.
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.

---

## Phase 7: AI-Harness Test Suite Adaptation, Verification & Vercel Setup

### Task 7.1: Vitest & Playwright E2E Suite Adaptation
- **Status**: TODO
- **Dependencies**: All prior tasks
- **Red Test File**: `e2e/nextjs-navigation.spec.ts`
- **Red Test Case**: `it('should navigate between landing page and dedicated project pages with full a11y compliance', ...)`
- **Red Failure Proof**:
  ```text
  [Pending Red Execution]
  ```
- **Green Implementation**:
  - Files created/modified: `vitest.config.ts`, `playwright.config.ts`, `e2e/accessibility.spec.ts`, `e2e/critical-flows.spec.ts`
  - Implementation summary: Adapt existing 29 Vitest tests and 11 Playwright E2E tests for Next.js 16.
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm exec tsc --noEmit`.

### Task 7.2: Final Verification and Vercel Configuration
- **Status**: TODO
- **Dependencies**: Task 7.1
- **Red Test File**: `scripts/verify-deployment.test.ts`
- **Red Test Case**: `it('should verify production build artifacts, bundle sizes, and environment variables', ...)`
- **Red Failure Proof**:
  ```text
  [Pending Red Execution]
  ```
- **Green Implementation**:
  - Files created/modified: `package.json`, `vercel.json`, `specs/nextjs-ai-migration/analysis.md`
  - Implementation summary: Configure Vercel deployment settings, record post-implementation metrics, and pass `pnpm verify`.
- **Review Check**:
  - [ ] Strict type safety (zero `any`).
  - [ ] Zero em dashes in code or comments.
  - [ ] Passes `pnpm verify`.
