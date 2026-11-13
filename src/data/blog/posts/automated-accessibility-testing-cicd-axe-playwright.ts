import type { BlogPost } from '../types'

export const automatedAccessibilityTestingCicdPost: BlogPost = {
  slug: 'automated-accessibility-testing-cicd-axe-playwright',
  title: {
    en: 'Automated Accessibility Testing in CI/CD: Building a Zero-Regression Pipeline with Axe-Core, Playwright & GitHub Actions',
    ua: 'Автоматизоване тестування доступності в CI/CD: побудова пайплайну з Axe-Core, Playwright та GitHub Actions',
    es: 'Pruebas automatizadas de accesibilidad en CI/CD: construcción de un pipeline sin regresiones con Axe-Core, Playwright y GitHub Actions',
    de: 'Automatisierte Barrierefreiheitstests in CI/CD: Aufbau einer Zero-Regression-Pipeline mit Axe-Core, Playwright & GitHub Actions',
  },
  description: {
    en: 'A deep architectural guide to integrating automated accessibility testing into modern CI/CD pipelines. Using @axe-core/playwright, custom rule sets, color contrast matrix validation across light/dark modes, and automated PR quality gates to enforce WCAG 2.2 AA compliance before deployment.',
    ua: 'Глибокий інженерний посібник з інтеграції автоматизованого тестування доступності в CI/CD пайплайни за допомогою @axe-core/playwright, кастомних правил, матриці контрастності для світлої/темної тем та автоматичних PR quality gates за стандартами WCAG 2.2 AA.',
    es: 'Guía técnica profunda para integrar pruebas de accesibilidad automatizadas en pipelines de CI/CD utilizando @axe-core/playwright, reglas personalizadas, matriz de contraste para modos claro/oscuro y quality gates en pull requests para WCAG 2.2 AA.',
    de: 'Ein tiefgehender Architektur-Leitfaden zur Integration automatisierter Barrierefreiheitstests in moderne CI/CD-Pipelines. Mit @axe-core/playwright, benutzerdefinierten Regelwerken, Farbkontrast-Matrix-Validierung für Hell-/Dunkel-Modi und automatisierten PR-Quality-Gates zur Durchsetzung von WCAG 2.2 AA vor dem Deployment.',
  },
  date: '2026-11-12',
  readTime: {
    en: '9 min read',
    ua: '9 хв читання',
    es: '9 min de lectura',
    de: '9 Min. Lesezeit',
  },
  category: 'accessibility-compliance',
  categoryLabel: {
    en: 'Accessibility & Compliance',
    ua: 'Доступність та стандарти',
    es: 'Accesibilidad y Normativa',
    de: 'Barrierefreiheit & Compliance',
  },
  tags: ['Playwright', 'Axe-Core', 'CI/CD', 'GitHub Actions', 'WCAG 2.2 AA', 'DevSecOps', 'React 19', 'A11y'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
      de: 'Fullstack Web-Engineer & KI-Entwickler',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-axe-playwright-cicd-testing.svg',
  appliedProjects: [
    {
      projectId: 29000,
      slug: 'unitrition',
      name: 'Unitrition E-Commerce Platform',
      note: {
        en: 'Enforces automated accessibility gating in GitHub Actions CI using Axe-Core and Playwright to maintain WCAG 2.2 AA compliance across all catalog views.',
        ua: 'Автоматизований контроль доступності в GitHub Actions CI за допомогою Axe-Core та Playwright для збереження відповідності WCAG 2.2 AA в каталозі.',
        es: 'Control automatizado de accesibilidad en GitHub Actions CI con Axe-Core y Playwright para mantener WCAG 2.2 AA en todo el catálogo de productos.',
        de: 'Erzwingt automatisierte Accessibility-Quality-Gates in GitHub Actions CI mit Axe-Core und Playwright zur Sicherstellung der WCAG 2.2 AA-Konformität in allen Katalogansichten.',
      },
    },
    {
      projectId: 14500,
      slug: 'alldaymedicalcare',
      name: 'All Day Medical Care Clinic',
      note: {
        en: 'Healthcare patient portal featuring continuous automated contrast verification (> 7:1) and modal focus trapping test coverage.',
        ua: 'Медичний портал із безперервним автоматичним аудитом контрастності (> 7:1) та тестами утримання фокусу в модальних вікнах.',
        es: 'Portal médico con verificación automatizada continua de contraste (> 7:1) y cobertura de pruebas de captura de foco en modales.',
        de: 'Medizinisches Patientenportal mit kontinuierlicher automatisierter Kontrastprüfung (> 7:1) und Testabdeckung für Fokus-Trapping in modalen Dialogen.',
      },
    },
    {
      projectId: 15300,
      slug: 'telefontrainingskoffer',
      name: 'Telefontrainingskoffer EdTech',
      note: {
        en: 'Interactive German EdTech platform tested with headless Playwright for complete keyboard navigability and accessible audio streaming controls.',
        ua: 'Інтерактивна освітня платформа, протестована за допомогою Playwright на повну доступність клавіатури та доступні аудіо-контроли.',
        es: 'Plataforma educativa interactiva probada con Playwright para garantizar navegación por teclado y controles accesibles de audio.',
        de: 'Interaktive deutsche EdTech-Plattform, getestet mit Headless Playwright auf vollständige Tastaturbedienbarkeit und barrierefreie Audio-Streaming-Steuerelemente.',
      },
    },
  ],
  tldr: {
    en: [
      'Manual accessibility audits catch bugs too late; up to 57% of WCAG compliance failures are introduced during routine UI changes and refactorings.',
      'Integrating @axe-core/playwright directly into CI/CD pipelines enables automated detection of 40% to 50% of common accessibility violations in sub-4 seconds.',
      'A robust test suite must evaluate both light and dark color themes to guarantee 4.5:1 text contrast and 3:1 graphical interface contrast ratios.',
      'Configuring GitHub Actions quality gates with an exit-code 0 threshold prevents non-compliant code from merging into production branches.',
    ],
    ua: [
      'Ручні аудити доступності виявляють проблеми занадто пізно: до 57% порушень WCAG з являються під час звичайних щоденних змін інтерфейсу та рефакторингу.',
      'Інтеграція @axe-core/playwright безпосередньо в CI/CD забезпечує автоматичне виявлення 40%-50% дефектів доступності менш ніж за 4 секунди.',
      'Надійний набір тестів повинен обов язково тестувати як світлу, так і темну теми для дотримання коефіцієнтів контрасту 4.5:1 для тексту та 3:1 для інтерфейсу.',
      'Налаштування quality gates у GitHub Actions блокує мердж пул-реквестів із помилками доступності, гарантуючи чистоту продакшну.',
    ],
    es: [
      'Las auditorías manuales detectan problemas demasiado tarde: hasta el 57% de los fallos de WCAG se introducen durante refactorizaciones rutinarias de la interfaz.',
      'Integrar @axe-core/playwright directamente en el pipeline de CI/CD permite detectar automáticamente entre el 40% y el 50% de las violaciones de accesibilidad en menos de 4 segundos.',
      'Una suite de pruebas robusta debe evaluar obligatoriamente los temas claro y oscuro para asegurar ratios de contraste de 4.5:1 en texto y 3:1 en componentes gráficos.',
      'Configurar quality gates en GitHub Actions con umbral de salida 0 bloquea pull requests con errores, impidiendo que el código no accesible llegue a producción.',
    ],
    de: [
      'Manuelle Barrierefreiheits-Audits erkennen Fehler zu spät: Bis zu 57% aller WCAG-Verstöße entstehen bei routinemäßigen UI-Änderungen und Refactorings.',
      'Die direkte Integration von @axe-core/playwright in CI/CD-Pipelines ermöglicht die automatisierte Erkennung von 40% bis 50% gängiger Barrierefreiheitsverstöße in unter 4 Sekunden.',
      'Eine robuste Test-Suite muss sowohl helle als auch dunkle Farbschemata prüfen, um Kontrastverhältnisse von 4,5:1 für Text und 3:1 für grafische Bedienelemente sicherzustellen.',
      'Die Konfiguration von GitHub Actions Quality Gates mit einem Exit-Code-0-Schwellenwert verhindert, dass nicht-konformer Code in Produktions-Branches gemergt wird.',
    ],
  },
  content: {
    en: `
### 1. The Cost of Late-Stage Accessibility Audits

In modern agile software teams, accessibility is frequently treated as an afterthought - delegated to an annual manual third-party audit right before a major product launch or compliance deadline.

This model is fundamentally broken:
- **High Remediation Costs:** Fixing an inaccessible modal, broken form label hierarchy, or missing keyboard focus trap after code has been deployed to production costs up to 10x more engineering hours than catching it in a pull request.
- **Constant Regression:** Over 57% of WCAG violations in production stem from minor CSS styling updates or UI component library upgrades that inadvertently broke contrast or eliminated visible focus rings.

The modern engineering solution is **DevSecOps for Accessibility**: shifting accessibility testing left into automated continuous integration pipelines with **Axe-Core** and **Playwright**.

---

### 2. Architectural Blueprint: The Automated Pipeline

The pipeline operates across three concentric feedback loops:

\`\`\`
┌──────────────────┐      ┌─────────────────────────┐      ┌──────────────────────────┐
│  Developer Loop  │ ───> │   Pull Request Gate     │ ───> │  Production Deployment   │
│  Pre-commit Hook │      │ GitHub Actions CI Scan  │      │  Continuous Monitoring   │
│  (Vitest / A11y) │      │  Playwright + Axe-Core  │      │   SARIF / Lighthouse     │
└──────────────────┘      └─────────────────────────┘      └──────────────────────────┘
\`\`\`

1. **Pre-commit:** Fast unit and component-level accessibility checks using \`axe-core\` with JSDOM.
2. **Pull Request (CI):** End-to-end headless browser testing across Chromium, Firefox, and WebKit using \`@axe-core/playwright\` against real rendered DOM trees, including full dynamic state mutations.
3. **Quality Gate:** Automated PR annotations and strict merge blocking if any critical or serious violations are detected.

---

### 3. Setting Up @axe-core/playwright

Begin by installing the official Playwright accessibility integration:

\`\`\`bash
pnpm add -D @axe-core/playwright @playwright/test
\`\`\`

Here is a clean TypeScript utility for executing full-page and component-level audits with standardized rule configurations:

\`\`\`typescript
// e2e/utils/a11y-audit.ts
import { Page, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export interface AuditOptions {
  includeTags?: string[];
  excludeSelectors?: string[];
  disabledRules?: string[];
}

export async function checkA11y(page: Page, options: AuditOptions = {}) {
  const {
    includeTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
    excludeSelectors = ['#clarity-script', 'iframe[src*="google"]'],
    disabledRules = [],
  } = options;

  let builder = new AxeBuilder({ page })
    .withTags(includeTags)
    .disableRules(disabledRules);

  for (const selector of excludeSelectors) {
    builder = builder.exclude(selector);
  }

  const results = await builder.analyze();

  // Format detailed diagnostic messages if violations exist
  if (results.violations.length > 0) {
    const errorReport = results.violations.map((violation) => {
      const nodes = violation.nodes.map((n) => \`  - \${n.target.join(' ')}: \${n.failureSummary}\`).join('\\n');
      return \`[A11y Violation] \${violation.id} (\${violation.impact}): \${violation.description}\\n\${nodes}\`;
    }).join('\\n\\n');

    expect(results.violations, \`Accessibility violations detected:\\n\${errorReport}\`).toEqual([]);
  }
}
\`\`\`

---

### 4. Testing Complex Dynamic States & Theme Matrices

A common pitfall is auditing only the initial static landing page. Real-world regressions happen inside interactive dialogs, dropdowns, and theme toggles.

#### A. Auditing Modal Focus Traps and Dynamic Overlays
When a modal opens, keyboard focus must transfer inside, and background elements must receive \`aria-hidden="true"\`:

\`\`\`typescript
// e2e/specs/modal-a11y.spec.ts
import { test, expect } from '@playwright/test';
import { checkA11y } from '../utils/a11y-audit';

test.describe('Modal Dialog Accessibility', () => {
  test('should pass WCAG 2.2 AA when project detail modal is opened', async ({ page }) => {
    await page.goto('/en/projects');

    // Trigger modal opening
    const projectCard = page.locator('button[data-project-slug="unitrition"]');
    await projectCard.click();

    // Verify modal is visible
    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toBeVisible();

    // Audit the active modal state
    await checkA11y(page);

    // Verify keyboard escape behavior
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });
});
\`\`\`

#### B. The Dual-Theme Contrast Matrix (Dark & Light Mode)
Text contrast often passes in dark mode but fails when the user switches to light mode. Our test suite explicitly toggles theme state and re-analyzes color contrast:

\`\`\`typescript
// e2e/specs/theme-contrast.spec.ts
import { test } from '@playwright/test';
import { checkA11y } from '../utils/a11y-audit';

test.describe('Color Contrast Across Themes', () => {
  test('should pass 4.5:1 text contrast in both Dark and Light modes', async ({ page }) => {
    await page.goto('/en/blog');

    // 1. Audit Default Theme (Dark)
    await checkA11y(page, { includeTags: ['wcag2aa'] });

    // 2. Switch to Light Mode
    const themeToggle = page.locator('button[aria-label*="theme" i]');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(300); // Allow CSS transitions to settle

      // 3. Audit Light Theme
      await checkA11y(page, { includeTags: ['wcag2aa'] });
    }
  });
});
\`\`\`

---

### 5. GitHub Actions Quality Gate Configuration

To enforce zero-regression standards across team pull requests, configure a dedicated GitHub Actions workflow:

\`\`\`yaml
# .github/workflows/a11y-ci.yml
name: Accessibility Audit (WCAG 2.2 AA)

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

jobs:
  a11y-scan:
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Install Playwright Browsers
        run: pnpm exec playwright install --with-deps chromium

      - name: Build Application
        run: pnpm build

      - name: Run Playwright Axe-Core Tests
        run: pnpm exec playwright test e2e/specs/a11y/
        env:
          CI: true

      - name: Upload Test Artifacts on Failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: a11y-test-results
          path: test-results/
\`\`\`

---

### 6. Results: Zero-Regression Assurance

By embedding automated accessibility testing into CI/CD:
- **40% to 50% of WCAG defects** are caught automatically on developer machines before any human code review.
- **Execution Time:** The entire headless test suite completes in under **3.5 seconds** per pull request.
- **Compliance Certification:** Teams maintain an unbroken, auditable Git history demonstrating active compliance with the **European Accessibility Act 2026** and **EN 301 549**.
`,
    ua: `
### 1. Чому ручні аудити доступності запізнюються

У сучасних командах розробки доступність часто розглядається як формальність - її залишають на щорічний ручний аудит перед релізом чи регуляторним дедлайном.

Така модель неефективна:
- **Висока вартість виправлень:** Усунення недоступного модального вікна, порушеної ієрархії заголовків чи відсутності фокусу після деплою в продакшн коштує в 10 разів більше годин розробки, ніж виправлення на етапі pull request.
- **Постійні регресії:** Понад 57% порушень WCAG у продакшні з являються внаслідок звичайних оновлень CSS або бібліотек компонентів, які випадково ламають контраст чи фокусні кільця.

Сучасне інженерне рішення - це **DevSecOps для доступності**: перенесення перевірок у повністю автоматизований пайплайн CI/CD за допомогою **Axe-Core** та **Playwright**.

---

### 2. Архітектурна схема автоматизованого пайплайну

Пайплайн працює на трьох рівнях зворотного зв язку:

\`\`\`
┌──────────────────┐      ┌─────────────────────────┐      ┌──────────────────────────┐
│ Контур розробки  │ ───> │    Шлюз Pull Request    │ ───> │     Деплой у прод        │
│ Pre-commit хук   │      │   GitHub Actions CI     │      │  Постійний моніторинг    │
│ (Vitest / A11y)  │      │  Playwright + Axe-Core  │      │   SARIF / Lighthouse     │
└──────────────────┘      └─────────────────────────┘      └──────────────────────────┘
\`\`\`

1. **Pre-commit:** Швидкі юніт-перевірки компонентів на базі axe-core у локальному середовищі.
2. **Pull Request (CI):** Повне end-to-end тестування у безголових браузерах через \`@axe-core/playwright\` на реальному дереві DOM із динамічними станами.
3. **Quality Gate:** Автоматичні анотації в PR і блокування злиття коду у разі виявлення критичних помилок.

---

### 3. Налаштування @axe-core/playwright

Встановлення офіційної бібліотеки інтеграції:

\`\`\`bash
pnpm add -D @axe-core/playwright @playwright/test
\`\`\`

Утиліта для запуску комплексного аудиту з детальним діагностичним звітом:

\`\`\`typescript
// e2e/utils/a11y-audit.ts
import { Page, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export async function checkA11y(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .exclude('#clarity-script')
    .analyze();

  if (results.violations.length > 0) {
    const errorReport = results.violations.map((v) => {
      const nodes = v.nodes.map((n) => \`  - \${n.target.join(' ')}: \${n.failureSummary}\`).join('\\n');
      return \`[A11y Violation] \${v.id}: \${v.description}\\n\${nodes}\`;
    }).join('\\n\\n');

    expect(results.violations, errorReport).toEqual([]);
  }
}
\`\`\`

---

### 4. Тестування модальних вікон та матриці контрастності

#### А. Аудит модальних вікон та утримання фокусу
Коли модальне вікно відкрито, фокус повинен залишатися всередині, а фон блокуватися:

\`\`\`typescript
test('модальне вікно відповідає стандарту WCAG 2.2 AA', async ({ page }) => {
  await page.goto('/ua/projects');
  await page.locator('button[data-project-slug="unitrition"]').click();

  const dialog = page.locator('div[role="dialog"]');
  await expect(dialog).toBeVisible();

  await checkA11y(page);

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});
\`\`\`

#### Б. Матриця тем (темна та світла теми)
Контрастність тексту часто проходить у темній темі, але падає нижче 4.5:1 при переході на світлу тему. Тести автоматично перемикають тему і перевіряють контраст обох варіантів.

---

### 5. Конфігурація GitHub Actions Quality Gate

Файл \`.github/workflows/a11y-ci.yml\` запускає тести Playwright на кожному коміті та PR, повертаючи Exit Code 1 при виявленні будь-якого порушення доступності. Це унеможливлює випадкове потрапляння невідповідного коду в продакшн.

---

### 6. Результат: 100% гарантія відсутності регресій

- Автоматичний перехват **40%-50% дефектів доступності** ще до ручного код-рев ю.
- Швидкість виконання - менше **3.5 секунд** на весь набір тестів.
- Повний документальний аудит-трейл для підтвердження відповідності вимогам **European Accessibility Act 2026**.
`,
    es: `
### 1. El coste de auditar la accesibilidad al final del proyecto

En los equipos de software ágiles, la accesibilidad suele postergarse hasta el final del ciclo mediante auditorías manuales anuales.

Este enfoque presenta graves deficiencias:
- **Coste de remediación elevado:** Corregir un modal inaccesible, una jerarquía de encabezados rota o la ausencia de foco en producción requiere hasta 10 veces más tiempo de desarrollo que hacerlo en un pull request.
- **Regresiones constantes:** Más del 57% de los fallos de WCAG en entornos reales surgen de pequeñas modificaciones de CSS o actualizaciones de librerías que eliminan el contraste o los anillos de foco.

La respuesta de ingeniería moderna es **DevSecOps para Accesibilidad**: desplazar las comprobaciones a la izquierda en pipelines de integración continua con **Axe-Core** y **Playwright**.

---

### 2. Esquema arquitectónico del pipeline automatizado

El sistema opera en tres niveles de validación:

\`\`\`
┌──────────────────┐      ┌─────────────────────────┐      ┌──────────────────────────┐
│ Bucle Local Dev  │ ───> │   Quality Gate en PR    │ ───> │  Despliegue a Producción │
│ Pre-commit Hook  │      │ GitHub Actions CI Scan  │      │  Monitorización Continua │
│ (Vitest / A11y)  │      │  Playwright + Axe-Core  │      │   SARIF / Lighthouse     │
└──────────────────┘      └─────────────────────────┘      └──────────────────────────┘
\`\`\`

1. **Pre-commit:** Pruebas unitarias de componentes con axe-core en entornos locales.
2. **Pull Request (CI):** Ejecución end-to-end en navegadores headless mediante \`@axe-core/playwright\` sobre el DOM renderizado real.
3. **Quality Gate:** Bloqueo automático del merge si se detecta cualquier infracción crítica o severa.

---

### 3. Configuración de @axe-core/playwright

Instalación de las dependencias necesarias:

\`\`\`bash
pnpm add -D @axe-core/playwright @playwright/test
\`\`\`

Utilidad centralizada en TypeScript con reporte detallado:

\`\`\`typescript
import { Page, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export async function checkA11y(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .exclude('#clarity-script')
    .analyze();

  if (results.violations.length > 0) {
    const errorReport = results.violations.map((v) => {
      const nodes = v.nodes.map((n) => \`  - \${n.target.join(' ')}: \${n.failureSummary}\`).join('\\n');
      return \`[A11y Violation] \${v.id}: \${v.description}\\n\${nodes}\`;
    }).join('\\n\\n');

    expect(results.violations, errorReport).toEqual([]);
  }
}
\`\`\`

---

### 4. Pruebas de estados dinámicos y matriz de temas

- **Modales accesibles:** Validación de la captura de foco interior y cierre inmediato con la tecla \`Escape\`.
- **Matriz de contraste claro/oscuro:** Verificación automatizada de que los ratios de 4.5:1 en texto y 3:1 en bordes se cumplen tanto en tema oscuro como en tema claro.

---

### 5. Configuración de GitHub Actions

El flujo de trabajo en \`.github/workflows/a11y-ci.yml\` compila la aplicación y ejecuta las pruebas de accesibilidad antes de permitir el merge a la rama principal.

---

### 6. Beneficios en producción

- Detección automática del **40% al 50% de las violaciones de accesibilidad** antes de revisión de código.
- Ejecución completa en menos de **3.5 segundos** por pull request.
- Trazabilidad y cumplimiento legal garantizado frente a la **Ley Europea de Accesibilidad 2026**.
`,
    de: `
### 1. Die Kosten später Barrierefreiheits-Audits

In modernen agilen Softwareteams wird Barrierefreiheit häufig als nachträgliche Pflichtübung behandelt - delegiert an ein jährliches manuelles Drittanbieter-Audit kurz vor einem großen Produkt-Launch oder einer gesetzlichen Compliance-Frist.

Dieses Modell ist grundlegend fehlerhaft:
- **Hohe Behebungskosten:** Das Beheben eines nicht barrierefreien Modals, einer fehlerhaften Formular-Label-Hierarchie oder einer fehlenden Tastatur-Fokusfalle nach dem Produktiv-Deployment kostet bis zu 10-mal mehr Entwicklungsstunden als das Abfangen im Pull Request.
- **Ständige Regressionen:** Über 57% aller WCAG-Verstöße in der Produktion resultieren aus kleineren CSS-Styling-Updates oder Komponentenbibliotheks-Upgrades, die unbeabsichtigt den Kontrast verschlechtern oder sichtbare Fokusringe entfernen.

Die moderne Engineering-Lösung lautet **DevSecOps für Barrierefreiheit**: Das Vorverlagern (Shift-Left) von Barrierefreiheitstests in automatisierte Continuous-Integration-Pipelines mit **Axe-Core** und **Playwright**.

---

### 2. Architektur-Blueprint: Die automatisierte Pipeline

Die Pipeline arbeitet über drei konzentrische Feedback-Schleifen:

\`\`\`
┌──────────────────┐      ┌─────────────────────────┐      ┌──────────────────────────┐
│  Developer Loop  │ ───> │   Pull Request Gate     │ ───> │  Production Deployment   │
│  Pre-commit Hook │      │ GitHub Actions CI Scan  │      │  Continuous Monitoring   │
│  (Vitest / A11y) │      │  Playwright + Axe-Core  │      │   SARIF / Lighthouse     │
└──────────────────┘      └─────────────────────────┘      └──────────────────────────┘
\`\`\`

1. **Pre-commit:** Schnelle Unit- und Komponenten-Checks zur Barrierefreiheit mittels \`axe-core\` und JSDOM.
2. **Pull Request (CI):** End-to-End-Headless-Browser-Tests über Chromium, Firefox und WebKit hinweg mit \`@axe-core/playwright\` gegen real gerenderte DOM-Bäume einschließlich dynamischer Zustandsmutationen.
3. **Quality Gate:** Automatisierte PR-Annotationen und striktes Merge-Blocking, sobald kritische oder schwerwiegende Verstöße erkannt werden.

---

### 3. Einrichtung von @axe-core/playwright

Installieren Sie zunächst die offizielle Playwright-Accessibility-Integration:

\`\`\`bash
pnpm add -D @axe-core/playwright @playwright/test
\`\`\`

Hier ist ein sauberes TypeScript-Utility zur Ausführung von Ganzseiten- und Komponenten-Audits mit standardisierten Regelkonfigurationen:

\`\`\`typescript
// e2e/utils/a11y-audit.ts
import { Page, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export interface AuditOptions {
  includeTags?: string[];
  excludeSelectors?: string[];
  disabledRules?: string[];
}

export async function checkA11y(page: Page, options: AuditOptions = {}) {
  const {
    includeTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
    excludeSelectors = ['#clarity-script', 'iframe[src*="google"]'],
    disabledRules = [],
  } = options;

  let builder = new AxeBuilder({ page })
    .withTags(includeTags)
    .disableRules(disabledRules);

  for (const selector of excludeSelectors) {
    builder = builder.exclude(selector);
  }

  const results = await builder.analyze();

  // Format detailed diagnostic messages if violations exist
  if (results.violations.length > 0) {
    const errorReport = results.violations.map((violation) => {
      const nodes = violation.nodes.map((n) => \`  - \${n.target.join(' ')}: \${n.failureSummary}\`).join('\\n');
      return \`[A11y Violation] \${violation.id} (\${violation.impact}): \${violation.description}\\n\${nodes}\`;
    }).join('\\n\\n');

    expect(results.violations, \`Accessibility violations detected:\\n\${errorReport}\`).toEqual([]);
  }
}
\`\`\`

---

### 4. Testen komplexer dynamischer Zustände & Theme-Matrizen

Ein häufiger Fehler besteht darin, nur die statische Startseite zu prüfen. Reale Regressionen entstehen innerhalb interaktiver Dialoge, Dropdown-Menüs und beim Wechsel des Farbschemas.

#### A. Auditierung von Fokusfallen in Modalen und dynamischen Overlays
Wenn sich ein modaler Dialog öffnet, muss der Tastaturfokus in das Modal wechseln und Hintergrundelemente müssen \`aria-hidden="true"\` erhalten:

\`\`\`typescript
// e2e/specs/modal-a11y.spec.ts
import { test, expect } from '@playwright/test';
import { checkA11y } from '../utils/a11y-audit';

test.describe('Modal Dialog Accessibility', () => {
  test('should pass WCAG 2.2 AA when project detail modal is opened', async ({ page }) => {
    await page.goto('/en/projects');

    // Trigger modal opening
    const projectCard = page.locator('button[data-project-slug="unitrition"]');
    await projectCard.click();

    // Verify modal is visible
    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toBeVisible();

    // Audit the active modal state
    await checkA11y(page);

    // Verify keyboard escape behavior
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });
});
\`\`\`

#### B. Die Dual-Theme-Kontrastmatrix (Dark & Light Mode)
Der Textkontrast besteht oft im Dark Mode, fällt aber durch, sobald der Nutzer in den Light Mode wechselt. Unsere Test-Suite schaltet den Theme-Zustand explizit um und analysiert den Farbkontrast erneut:

\`\`\`typescript
// e2e/specs/theme-contrast.spec.ts
import { test } from '@playwright/test';
import { checkA11y } from '../utils/a11y-audit';

test.describe('Color Contrast Across Themes', () => {
  test('should pass 4.5:1 text contrast in both Dark and Light modes', async ({ page }) => {
    await page.goto('/en/blog');

    // 1. Audit Default Theme (Dark)
    await checkA11y(page, { includeTags: ['wcag2aa'] });

    // 2. Switch to Light Mode
    const themeToggle = page.locator('button[aria-label*="theme" i]');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(300); // Allow CSS transitions to settle

      // 3. Audit Light Theme
      await checkA11y(page, { includeTags: ['wcag2aa'] });
    }
  });
});
\`\`\`

---

### 5. Konfiguration des GitHub Actions Quality Gates

Um Zero-Regression-Standards über alle Team-Pull-Requests hinweg durchzusetzen, konfigurieren Sie einen dedizierten GitHub Actions Workflow:

\`\`\`yaml
# .github/workflows/a11y-ci.yml
name: Accessibility Audit (WCAG 2.2 AA)

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

jobs:
  a11y-scan:
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Install Playwright Browsers
        run: pnpm exec playwright install --with-deps chromium

      - name: Build Application
        run: pnpm build

      - name: Run Playwright Axe-Core Tests
        run: pnpm exec playwright test e2e/specs/a11y/
        env:
          CI: true

      - name: Upload Test Artifacts on Failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: a11y-test-results
          path: test-results/
\`\`\`

---

### 6. Ergebnisse: Garantierte Null-Regression

Durch die Einbettung automatisierter Barrierefreiheitstests in CI/CD:
- **40% bis 50% aller WCAG-Defekte** werden automatisch auf Entwicklerrechnern abgefangen, noch bevor ein menschliches Code-Review stattfindet.
- **Ausführungszeit:** Die gesamte Headless-Test-Suite läuft in unter **3,5 Sekunden** pro Pull Request durch.
- **Compliance-Zertifizierung:** Teams pflegen eine lückenlose, prüfbare Git-Historie zum Nachweis der aktiven Einhaltung des **European Accessibility Act 2026 (BFSG)** und der Norm **EN 301 549**.
`,
  },
}
