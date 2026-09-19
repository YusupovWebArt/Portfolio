---
name: i18n-locales
description: Trilingual internationalization (i18n) standards, key parity enforcement across EN/UA/ES, and locale persistence rules.
---

# Internationalization Skill: Trilingual Engine (EN / UA / ES)

This skill governs multi-language support across the Artur Yusupov Portfolio application.

---

## 1. Supported Locales and Directory Structure

- `en` - English (Primary reference dictionary)
- `ua` - Ukrainian (Official localized dictionary)
- `es` - Spanish (Official localized dictionary)

All dictionary definitions reside in `src/locales/`:
```text
src/locales/
├── en.ts       # English translations
├── ua.ts       # Ukrainian translations
├── es.ts       # Spanish translations
└── types.ts    # Strict TypeScript interface for all dictionary keys
```

---

## 2. Mandatory Key Parity Rules

1. **Schema Compliance:** Every key added to `en.ts` MUST also be added to `ua.ts` and `es.ts` and declared in `types.ts`.
2. **Zero Hardcoded Text:** Never embed raw English, Ukrainian, or Spanish text directly in UI templates. Always consume translations via `useLanguage()`:
   ```tsx
   const { t } = useLanguage();
   return <h2>{t.nav.projects}</h2>;
   ```
3. **Project Case Studies:** Each of the 69 project case studies in `src/components/projects/` contains localized fields (`description`, `descriptionUa`, `descriptionEs`, `challengesUa`, `challengesEs`, etc.). All localized fields must be fully populated without placeholder text.

---

## 3. Locale Persistence & Detection

- On initial visitor arrival, detect `navigator.language`.
- If the browser locale starts with `uk`, default to `ua`. If `es`, default to `es`. Otherwise default to `en`.
- Persist the selected language in `localStorage.getItem('language')`.
- On user selection, update the document `<html lang="...">` attribute to ensure search engines and screen readers parse the correct language.
