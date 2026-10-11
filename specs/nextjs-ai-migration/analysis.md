# Baseline & Impact Analysis: Next.js 16 AI-Harness Migration with OpenAI RAG Agent and Dedicated Project Pages

## 1. Executive Summary & Objective
- **Feature Scope**: Architectural migration from React 19 + Vite SPA (GitHub Pages) to Next.js 16.4.0 (App Router, Turbopack, React 19.3.0, Tailwind CSS 4.3.3, pnpm, Vercel) featuring 69 standalone SSG/GEO project pages and a fullstack RAG AI Agent using Vercel AI SDK 7.x and OpenAI `gpt-4o-mini`.
- **Baseline Date**: 2026-10-11
- **Environment**: Node.js 24 LTS, Windows 10, pnpm 11.24.0, Vite 8.2, Vitest 5.0, Playwright 1.63, Chromium.

---

## 2. Test Coverage Metrics
*Measured via Vitest coverage reporter with @vitest/coverage-v8.*

| Metric | Baseline (React 19 SPA) | Target (Next.js 16) | Actual Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Statements | 30.47% | >= 30.00% | Pending | [Pending Phase 7] |
| Branches | 16.66% | >= 15.00% | Pending | [Pending Phase 7] |
| Functions | 15.29% | >= 14.00% | Pending | [Pending Phase 7] |
| Lines | 31.50% | >= 30.00% | Pending | [Pending Phase 7] |

---

## 3. Bundle Size Analysis
*Measured from production build output via `scripts/check-bundle-budget.mjs`.*

| Asset / Chunk | Baseline Size (Raw) | Baseline Size (Gzip) | Budget Limit | Actual Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Main Entry Chunk | 116.18 KB | 27.26 KB | < 200 KB (< 60 KB gz) | Pending | [Pending Phase 7] |
| Total Initial Eager JS | 418.54 KB | 124.43 KB | < 450 KB (< 130 KB gz) | Pending | [Pending Phase 7] |
| Projects Catalog Chunk | 423.55 KB (Deferred) | 92.73 KB | Deferred / SSG | Pending | [Pending Phase 7] |
| Locales Chunk | 96.76 KB | 31.28 KB | Split Chunks | Pending | [Pending Phase 7] |

---

## 4. Lighthouse & Core Web Vitals
*Targeted thresholds in .lighthouserc.json and Next.js SSG.*

| Metric | Baseline | Target / Constitution Threshold | Post-Implementation | Status |
| :--- | :--- | :--- | :--- | :--- |
| Performance Score | 0.85 - 0.95 | >= 0.85 | Pending | [Pending Phase 7] |
| Largest Contentful Paint (LCP) | ~1.1s | <= 1.2s | Pending | [Pending Phase 7] |
| Total Blocking Time (TBT) | < 200ms | <= 200ms | Pending | [Pending Phase 7] |
| Cumulative Layout Shift (CLS) | 0.00 | 0.00 | Pending | [Pending Phase 7] |
| First Contentful Paint (FCP) | < 0.8s | <= 0.8s | Pending | [Pending Phase 7] |
| Accessibility Score | 1.00 | >= 0.95 | Pending | [Pending Phase 7] |
| Best Practices Score | 1.00 | >= 0.90 | Pending | [Pending Phase 7] |
| SEO Score | 1.00 | 1.00 | Pending | [Pending Phase 7] |

---

## 5. Automated Accessibility Audit (axe-core)
*Measured via Playwright axe-core scan on desktop and mobile across all views.*

| Violation Severity | Baseline Count | Target Count | Post-Implementation Count | Status |
| :--- | :--- | :--- | :--- | :--- |
| Critical | 0 | 0 | Pending | [Pending Phase 7] |
| Serious | 0 | 0 | Pending | [Pending Phase 7] |
| Moderate | 0 | 0 | Pending | [Pending Phase 7] |
| Minor | 0 | 0 | Pending | [Pending Phase 7] |

---

## 6. Architecture & Capabilities Comparison

| Dimension | Baseline (React 19 + Vite SPA) | Next.js 16 AI-Harness Architecture |
| :--- | :--- | :--- |
| **Hosting Model** | GitHub Pages (Static CDN) | Vercel (Edge Runtime + Serverless Functions) |
| **Project Pages** | Modals on single index page | 69 standalone SSG pages (`/projects/[slug]`) |
| **Search Engine Discovery** | 1 indexable URL (`/`) | 69 indexable URLs + GEO-optimized Schema.org microdata |
| **Open Graph Previews** | Single static preview for entire site | Dynamic per-project OG images with individual titles & stats |
| **AI Assistant Capability** | Algorithmic regex keyword matching | Fullstack RAG Agent (OpenAI `gpt-4o-mini` + Tool Calling) |
| **Knowledge Grounding** | Static FAQ object (15 questions) | Vectorized Knowledge Base (69 projects, bio, services, architecture) |
| **Project Entrypoint to AI** | General modal only | Contextual button on each project page with tailored chips |
| **Security & Rate Limiting** | Client-only CSP | Server-side Upstash Redis rate limiting + Zero Secrets |

---

## 7. Conclusions and Initial Findings
- **Strategic Impact**: Upgrading to Next.js 16 elevates Artur Yusupov from a strong frontend engineer to an enterprise-grade AI Fullstack Engineer, capable of designing multi-agent RAG architectures, generative UIs, and deep SEO/GEO pipelines.
- **Safety Strategy**: The current production site on GitHub Pages remains fully active and unaffected during migration. All changes will be developed and verified incrementally in compliance with the Constitution.
