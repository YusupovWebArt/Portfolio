# Workspace Rules

These rules apply to any AI coding assistant (such as Antigravity, Claude, or other agentic frameworks) operating in this workspace.

---

## 🛠️ Mandatory Reference Files

Before designing, refactoring, writing code, or suggesting modifications, the agent **MUST** read and align its execution plan with the following root specification files:

1. **[DESIGN_SYSTEM.md](file:///d:/PORTFOLIO/Portfolio/DESIGN_SYSTEM.md):** Defines layout constraints, color palettes, spacing, typography scale, dark-mode styling, and custom stepper pagination logic.
2. **[SECURITY.md](file:///d:/PORTFOLIO/Portfolio/SECURITY.md):** Defines security headers, client-side Base64 decryption, noscript fallbacks, and the zero-commit secrets policy.
3. **[ARCHITECTURE.md](file:///d:/PORTFOLIO/Portfolio/ARCHITECTURE.md):** Details directory structure, imports, dynamic stepper calculations, chatbot FAQ matching triggers, and GitHub Actions CI/CD workflows.

---

## 📜 Coding Style Constraints

- **Strict Type Checking:** Never use `any` types. Run `npx tsc --noEmit` before proposing code additions.
- **Linting Compliance:** Run `npm run lint` on all changed files and fix all errors before committing.
- **Maintain Obfuscation:** Never store raw email, phone numbers, or social usernames in standard text formats on the main layout. Obfuscate them to Base64 format to align with `SECURITY.md`.
- **Incremental Refactoring:** When updating files (especially upgraded components or case studies), do not rewrite from scratch unless explicitly requested. Preserve code history and documentation comments.
