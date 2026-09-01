# Workspace Rules

These rules apply to any AI coding assistant (such as Antigravity, Claude, or other agentic frameworks) operating in this workspace.

---

## 🛠️ Mandatory Reference Files

Before designing, refactoring, writing code, or suggesting modifications, the agent **MUST** read and align its execution plan with the following root specification files:

1. **[DESIGN_SYSTEM.md](file:///d:/PORTFOLIO/Portfolio/DESIGN_SYSTEM.md):** Defines layout constraints, color palettes, spacing, typography scale, dark-mode styling, and custom stepper pagination logic.
2. **[SECURITY.md](file:///d:/PORTFOLIO/Portfolio/SECURITY.md):** Defines security headers, client-side Base64 decryption, noscript fallbacks, and the zero-commit secrets policy.
3. **[ARCHITECTURE.md](file:///d:/PORTFOLIO/Portfolio/ARCHITECTURE.md):** Details directory structure, imports, dynamic stepper calculations, chatbot FAQ matching triggers, and GitHub Actions CI/CD workflows.
4. **[docs/OPTIMIZATION.md](file:///d:/PORTFOLIO/Portfolio/docs/OPTIMIZATION.md):** Defines search filtering (`.ignore`), AI context optimization, token conservation, and ripgrep/fd performance standards.

---

## 📜 Coding Style Constraints

- **Strict Type Checking:** Never use `any` types. Run `pnpm exec tsc --noEmit` before proposing code additions.
- **Linting Compliance:** Run `pnpm lint` on all changed files and fix all errors before committing.
- **Search & Context Optimization:** Adhere to the repository [`.ignore`](file:///d:/PORTFOLIO/Portfolio/.ignore) rules to avoid search noise from lockfiles, binary media assets, and temporary test artifacts.
- **Maintain Obfuscation:** Never store raw email, phone numbers, or social usernames in standard text formats on the main layout. Obfuscate them to Base64 format to align with `SECURITY.md`.
- **Incremental Refactoring:** When updating files (especially upgraded components or case studies), do not rewrite from scratch unless explicitly requested. Preserve code history and documentation comments.
- **No Em Dashes:** Never use em dashes `—` in texts, descriptions, UI labels, or code comments; always use standard hyphens `-`.
- **No Emojis in Project Data:** Never use emojis in project titles, feature names, or technology descriptions.
