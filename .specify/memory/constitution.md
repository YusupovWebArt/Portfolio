# Project Constitution: Artur Yusupov Portfolio

This document represents the permanent, immutable core contract for the Artur Yusupov Portfolio application.
All AI coding agents (Antigravity, Claude Code, Cursor) and human contributors MUST align with these non-negotiable principles before planning, refactoring, or generating code.

---

## 1. Non-Negotiable Core Principles

### Principle 1: Strict Type Safety and Zero-`any` Policy
- Every TypeScript file must pass strict compiler verification with zero `any` types.
- Never use type assertions (`as any`) or suppressed compiler errors (`@ts-ignore`, `@ts-nocheck`).
- Every pull request and build gate enforces `pnpm exec tsc --noEmit` before commit.

### Principle 2: Security and Privacy by Design
- **Zero Credentials in Git:** Never write API keys, internal tokens, server secrets, or private domains into code.
- **Anti-Scraping Obfuscation:** Personal contact information (email, phone, Telegram, WhatsApp) must remain Base64-obfuscated in source files and decrypted exclusively at runtime on client interaction.
- **Compliance:** Full compliance with EU RGPD and LOPDGDD. Cookie-free, tracker-free baseline architecture.
- **Content Security Policy:** Production builds enforce sandboxed headers (`camera=(), microphone=(), geolocation=()`).

### Principle 3: Performance and Core Web Vitals Budget
- **Initial Load:** Sub-second First Contentful Paint (FCP <= 0.8s) and Largest Contentful Paint (LCP <= 1.2s).
- **Layout Stability:** Cumulative Layout Shift (CLS) must remain exactly 0.00.
- **Bundle Budget:** Main JavaScript bundle must remain under 200 KB (`< 60 KB` gzip).
- **Assets:** All project showcase media must use WebP/AVIF format with explicit dimensions and `loading="lazy"`.

### Principle 4: Trilingual Localization Parity (i18n)
- The application supports three official languages: English (`en`), Ukrainian (`ua`), and Spanish (`es`).
- All language dictionaries (`src/locales/en.ts`, `ua.ts`, `es.ts`) must maintain 100% key parity with identical schema (`types.ts`).
- No hardcoded user-facing strings are permitted in React UI components.

### Principle 5: Typography and Design System Discipline
- **No Em Dashes:** Never use em dashes in texts, descriptions, UI labels, or code comments; always use standard hyphens `-`.
- **No Emojis in Data:** Never use emojis in technical project titles, feature names, or stack tags.
- **Visual Design:** Strictly adhere to tokens and components documented in `DESIGN_SYSTEM.md`.

### Principle 6: Accessibility (European Accessibility Act 2026 / WCAG 2.2 AA)
- Semantic HTML landmarks (`header`, `main`, `nav`, `section`, `footer`) are required on all views.
- Full keyboard operability: interactive elements must support `Tab`, `Enter`, `Space`, and `Escape` for modals.
- Minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text across both light and dark themes.

### Principle 7: Spec-Driven Lifecycle (SDD + SDLC + TDD)
- Development follows a deterministic phase pipeline:
  `Specify` -> `Clarify` -> `Plan` -> `Tasks` -> `Analyze` -> `Implement` -> `Verify`.
- Tasks with architectural impact require verified test specifications before code generation.
- No direct commit to `master` without passing SAST (`tsc`, `lint`), SCA (`pnpm audit`), and production build.

---

## 2. Evolution and Governance

- This constitution can only be modified with explicit user authorization.
- Feature specifications inside `specs/<feature-slug>/` inherit all constraints from this document.
- In case of conflict between a feature plan and this constitution, the constitution always takes precedence.
