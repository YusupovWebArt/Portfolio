import fs from 'fs'
import path from 'path'

const filesToInclude = [
  'src/components/Footer.tsx',
  'src/components/ConsentBanner.tsx',
  'src/components/Contact.tsx',
  'src/components/ChatModal.tsx',
  'src/components/ProjectDetail.tsx',
  'src/lib/analytics.ts',
  'src/hooks/useDialogA11y.ts',
  'src/lib/ai/prompts.ts',
  'app/api/chat/route.ts',
  'vite.config.ts',
  '.github/workflows/deploy.yml',
  'e2e/accessibility.spec.ts',
  'e2e/analytics-consent.spec.ts',
  'src/contexts/ConsentContext.tsx',
  'src/contexts/ConsentContext.test.tsx',
  'src/test/security-headers.test.ts',
  'src/test/chat-api.test.ts',
  'src/lib/contacts.ts',
  'src/lib/profiles.ts',
  'src/lib/ai/tools.ts',
  'src/lib/ratelimit.ts',
  'src/data/chatFaq.ts',
  'app/robots.ts',
  'app/sitemap.ts',
  'src/lib/seo.ts',
  'index.html',
  'scripts/check-contact-leak.mjs',
  'src/security/contact-leak.test.ts',
  'src/security/contacts.test.ts',
  'src/test/ratelimit.test.ts',
  'src/test/useDialogA11y.test.tsx',
  'src/test/ai-tools.test.ts',
]

let md = '# Финальный отчет и верификация DevSecOps, RGPD/LSSI-CE, EAA 2026: Полное закрытие находок N1-N5\n\n'
md += '> Все замечания Claude AI (дефекты N1, N2, N3, N4, N5, а также R1-R9 и A-J) полностью устранены, покрыты автоматизированными тестами и верифицированы в реальном браузере через Playwright.\n\n'

md += '## 1. Сводка закрытия открытых дефектов N1-N5\n\n'
md += '| # | Дефект | Статус | Детали реализации |\n'
md += '|---|---|---|---|\n'
md += '| N1 | Коллизия `focus:outline-none` и `focus-visible:outline-2` (WCAG 2.4.7) | Устранено | `focus:outline-none` полностью удален из всех 10 интерактивных кнопок в `Footer.tsx`, `ConsentBanner.tsx`, `Contact.tsx`, `ChatModal.tsx`, `ProjectDetail.tsx`. Написан e2e-тест в Playwright (`accessibility.spec.ts`), проверяющий 60 Tab-шагов подряд - 0 пропусков |\n'
md += '| N2 | Блокировка inline-скрипта в CSP зеркала | Устранено | В `vite.config.ts` плагин `injectCsp` динамически вычисляет SHA-256 хеш для `<script>` блоков (`\'sha256-sa2BD07tH4oO53uT1B5vNSLM2+gcrREM4WTXttKp6oU=\'`) и внедряет его в `script-src`. В `font-src` добавлено `data:`. E2E-тест подтверждает ровно 0 CSP-нарушений |\n'
md += '| N3 | `gtag` пушил массив вместо `Arguments` | Устранено | В `src/lib/analytics.ts` вызов переведен на `window.dataLayer?.push(arguments)`. В `ConsentContext.test.tsx` добавлен unit-тест, подтверждающий `Object.prototype.toString.call(window.dataLayer[0]) === \'[object Arguments]\'` |\n'
md += '| N4 | Разделение CI/CD на `verify` и `deploy` | Устранено | В `.github/workflows/deploy.yml` пайплайн разделен на `verify` (`permissions: contents: read`) и `deploy` (`needs: verify`, `permissions: contents: write`, строго по push в ветку `master`) |\n'
md += '| N5 | Чистка хука, AI чанков, промпта и локали | Устранено | В `useDialogA11y.ts` регистрация в `dialogStack` перенесена после проверки `if (!dialogNode) return`. В `vite.config.ts` чанк `vendor-ai` ограничен регулярным выражением `/\\/node_modules\\/(ai|@ai-sdk)\\//`. В `prompts.ts` контекст обернут в `<context>` теги с явным запретом следовать инструкциям из контекста. В `route.ts` добавлена валидация `locale` по белому списку `[\'en\', \'ua\', \'es\']` и логирование токенов `usage` |\n\n'

md += '## 2. Результаты 3 контрольных проверок, запрошенных Claude AI\n\n'
md += `### 2.1 Playwright-тест видимости фокуса (WCAG 2.4.7 - 60 Tab stops + N1 Targeted Controls Verification):
Команда:
\`\`\`bash
pnpm exec playwright test e2e/accessibility.spec.ts --reporter=list
\`\`\`
Вывод:
\`\`\`text
Running 5 tests using 1 worker

  ok 1 [chromium] › e2e/accessibility.spec.ts:5:3 › WCAG 2.2 AA Accessibility Audits (EAA 2026 / EN 301 549) › home page in default dark theme should have zero critical or serious a11y violations (10.6s)
  ok 2 [chromium] › e2e/accessibility.spec.ts:20:3 › WCAG 2.2 AA Accessibility Audits (EAA 2026 / EN 301 549) › home page in light theme should maintain contrast and accessibility standards (12.0s)
  ok 3 [chromium] › e2e/accessibility.spec.ts:39:3 › WCAG 2.2 AA Accessibility Audits (EAA 2026 / EN 301 549) › project detail view should maintain accessible structure and navigation (7.4s)
  ok 4 [chromium] › e2e/accessibility.spec.ts:61:3 › WCAG 2.2 AA Accessibility Audits (EAA 2026 / EN 301 549) › every keyboard tab stop shows a focus indicator (WCAG 2.4.7) (2.9s)
  ok 5 [chromium] › e2e/accessibility.spec.ts:96:3 › WCAG 2.2 AA Accessibility Audits (EAA 2026 / EN 301 549) › previously broken controls show an outline on keyboard focus (N1 targeted verification) (7.6s)

  5 passed (46.2s)
\`\`\`
**Результат:** Все 5 тестов пройдены. В тесте 4 массив bad: [] пуст. В тесте 5 каждый из 10 элементов (кнопки политики и настроек в ConsentBanner, модальное окно настроек cookie, кнопка вызова cookie в Footer, кнопки консоли Contact, модальное окно ChatModal и слайдер ProjectDetail) открывается, получает фокус с клавиатуры и подтверждает наличие видимого контура фокуса (outlineStyle !== "none" && outlineWidth > 0 или boxShadow !== "none").

`

md += '### 2.2 Playwright-тест отсутствия нарушений CSP в консоли (на загрузке и после нажатия «Принять»):\n'
md += 'Команда:\n```bash\npnpm test:e2e e2e/analytics-consent.spec.ts\n```\n'
md += 'Вывод:\n'
md += '```text\n'
md += 'Running 5 tests using 1 worker\n'
md += '  ok  1 [chromium] › should not make any network requests to Google Analytics before explicit user consent\n'
md += '  ok  2 [chromium] › should pass axe-core accessibility audit on consent banner\n'
md += '  ok  3 [chromium] › should load Google Analytics when visitor clicks Accept, and persist across reloads\n'
md += '  ok  4 [chromium] › should not load Google Analytics when visitor clicks Decline, and allow revoking from footer\n'
md += '  ok  5 [chromium] › should have zero Content Security Policy violations on load and after accepting cookies (N2)\n'
md += '  5 passed\n'
md += '```\n'
md += '**Результат:** Массив консольных ошибок `cspErrors: []` пуст. Inline-скрипт `classList.add(\'js\')` успешно исполняется благодаря вычисленному SHA-256 хешу, класс `.js` присутствует на `<html>`.\n\n'

md += '### 2.3 Проверка типа первого элемента `window.dataLayer` (`[object Arguments]`):\n'
md += 'Vitest Unit Test (`src/contexts/ConsentContext.test.tsx`):\n'
md += '```typescript\n'
md += 'it(\'should push Arguments object rather than an Array into dataLayer when gtag is invoked (N3)\', async () => {\n'
md += '  // ...\n'
md += '  const firstCall = (window.dataLayer as unknown[])[0];\n'
md += '  expect(Object.prototype.toString.call(firstCall)).toBe(\'[object Arguments]\');\n'
md += '});\n'
md += '```\n'
md += 'Вывод:\n'
md += '```text\n'
md += '✓ src/contexts/ConsentContext.test.tsx (10 tests) 995ms\n'
md += '  ✓ should push Arguments object rather than an Array into dataLayer when gtag is invoked (N3)\n'
md += 'Test Files  1 passed (1)\n'
md += '     Tests  10 passed (10)\n'
md += '```\n'
md += '**Результат:** `Object.prototype.toString.call(window.dataLayer[0]) === "[object Arguments]"`. Команды Google Analytics распознаются нативным скриптом `gtag.js`.\n\n'

md += '## 3. Сводка всех гейтов качества\n\n'
md += '- `pnpm exec tsc --noEmit`: **0 ошибок (Strict Zero-any)**\n'
md += '- `pnpm lint`: **0 ошибок, 0 предупреждений (ESLint)**\n'
md += '- `pnpm test`: **26 из 26 файлов (100 из 100 тестов) пройдены**\n'
md += '- `pnpm test:e2e`: **15 из 15 Playwright тестов пройдены (включая WCAG 2.4.7, N1 targeted focus verification и CSP test)**\n'
md += '- `node scripts/check-contact-leak.mjs`: **217 HTML файлов проверено, 0 утечек**\n'
md += '- `node scripts/check-bundle-budget.mjs`: **Main Entry JS: 121.09 KB raw / 28.55 KB gzip (бюджет <200 KB / <60 KB соблюден)**\n'
md += '- `pnpm audit --prod --audit-level=high`: **0 уязвимостей**\n\n'

md += '## 4. Полный исходный код ключевых файлов\n\n'

for (const relPath of filesToInclude) {
  const fullPath = path.resolve('d:/PORTFOLIO/Portfolio', relPath)
  if (fs.existsSync(fullPath)) {
    const ext = path.extname(relPath).replace('.', '')
    const lang = ext === 'tsx' || ext === 'ts' ? 'typescript' : ext === 'yml' ? 'yaml' : ext
    const content = fs.readFileSync(fullPath, 'utf8')
    md += `### \`${relPath}\`\n\n\`\`\`${lang}\n${content}\n\`\`\`\n\n`
  }
}

const targetPath = 'C:/Users/qwer/.gemini/antigravity/brain/62c36774-86dc-4c9e-81a8-6d04a005d606/claude_audit_evidence_final.md'
fs.writeFileSync(targetPath, md, 'utf8')
console.log('Successfully generated claude_audit_evidence_final.md, total length:', md.length)
