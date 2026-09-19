# Workspace Rules

These rules apply to any AI coding assistant (such as Antigravity, Claude, or other agentic frameworks) operating in this workspace.

---

## 🛠️ Mandatory Reference Files & AI Harness (2026)

Before designing, refactoring, writing code, or proposing modifications, the agent **MUST** read and align its execution plan with the foundational project specifications:

0. **[Constitution (.specify/memory/constitution.md)](file:///d:/PORTFOLIO/Portfolio/.specify/memory/constitution.md):** Permanent immutable project contract (Strict zero-`any`, DevSecOps, CWV budgets, i18n parity, WCAG 2.2 AA / EAA 2026, SDLC phase gating).
1. **[DESIGN_SYSTEM.md](file:///d:/PORTFOLIO/Portfolio/DESIGN_SYSTEM.md):** Defines layout constraints, color palettes, spacing, typography scale, dark-mode styling, and custom stepper pagination logic.
2. **[SECURITY.md](file:///d:/PORTFOLIO/Portfolio/SECURITY.md):** Defines security headers, client-side Base64 decryption, noscript fallbacks, and the zero-commit secrets policy.
3. **[ARCHITECTURE.md](file:///d:/PORTFOLIO/Portfolio/ARCHITECTURE.md):** Details directory structure, imports, dynamic stepper calculations, chatbot FAQ matching triggers, and GitHub Actions CI/CD workflows.
4. **[docs/OPTIMIZATION.md](file:///d:/PORTFOLIO/Portfolio/docs/OPTIMIZATION.md):** Defines search filtering (`.ignore`), AI context optimization, token conservation, and ripgrep/fd performance standards.

---

## 🧭 Modular Rules and Skills

- **Active Rules:** Consult [`.agents/rules/project-context.md`](file:///d:/PORTFOLIO/Portfolio/.agents/rules/project-context.md) and [`.agents/rules/code-style.md`](file:///d:/PORTFOLIO/Portfolio/.agents/rules/code-style.md) for architectural boundaries and verification suites.
- **On-Demand Skills:** Consult [`.agents/skills/`](file:///d:/PORTFOLIO/Portfolio/.agents/skills/) for domain-specific procedures:
  - `tdd-react`: TDD Red-Green-Refactor discipline and semantic role-based queries.
  - `a11y-wcag22`: European Accessibility Act 2026 and WCAG 2.2 AA standards.
  - `perf-cwv`: Core Web Vitals performance budgets and image pipelines.
  - `i18n-locales`: 3-language synchronization (`en`, `ua`, `es`) and key parity checks.
  - `seo-pseo`: JSON-LD structured data and programmatic metadata.
- **Feature Specs:** All new roadmap features must be lifecycle-managed under `specs/<feature-slug>/` (`spec.md`, `plan.md`, `tasks.md`, `analysis.md`).

---

## 📜 Coding Style Constraints

- **Strict Type Checking:** Never use `any` types. Run `pnpm exec tsc --noEmit` before proposing code additions.
- **Linting Compliance:** Run `pnpm lint` on all changed files and fix all errors before committing.
- **Search & Context Optimization:** Adhere to the repository [`.ignore`](file:///d:/PORTFOLIO/Portfolio/.ignore) rules to avoid search noise from lockfiles, binary media assets, and temporary test artifacts.
- **Maintain Obfuscation:** Never store raw email, phone numbers, or social usernames in standard text formats on the main layout. Obfuscate them to Base64 format to align with `SECURITY.md`.
- **Incremental Refactoring:** When updating files (especially upgraded components or case studies), do not rewrite from scratch unless explicitly requested. Preserve code history and documentation comments.
- **No Em Dashes:** Never use em dashes in texts, descriptions, UI labels, or code comments; always use standard hyphens `-`.
- **No Emojis in Project Data:** Never use emojis in project titles, feature names, or technology descriptions.
