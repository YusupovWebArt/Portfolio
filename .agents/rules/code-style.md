# Code Style and Verification Rules

Permanent coding constraints and quality guardrails for all AI coding agents.

---

## 1. Mandatory Pre-Commit Verification Suite

Before proposing or committing any modifications, the agent MUST run and verify the following commands in sequence:

```bash
# 1. Static Type Checking (Strict Zero-any)
pnpm exec tsc --noEmit

# 2. Linting & Code Quality
pnpm lint

# 3. Production Build Validation
pnpm build
```

Every command must exit with code 0.

---

## 2. Coding Style Constraints

- **Strict Type Checking:** Never use `any` types. Provide explicit interfaces or inferred strict types.
- **Maintain Obfuscation:** Store email, phone, and social handles in Base64 format as documented in `SECURITY.md`.
- **Incremental Refactoring:** When updating components or case studies, never rewrite from scratch unless explicitly requested. Preserve code history and documentation comments.
- **No Em Dashes:** Never use em dashes in texts, descriptions, UI labels, or code comments; always use standard hyphens `-`.
- **No Emojis in Project Data:** Never use emojis in technical project titles, feature names, or technology descriptions.
- **Imports Order:**
  1. React core (`react`, `react-dom`)
  2. Third-party packages (`lucide-react`, `react-icons`)
  3. Contexts and custom hooks
  4. Local components
  5. Data, types, and utilities
