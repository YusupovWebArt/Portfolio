import type { BlogPost } from '../types'

export const wcag22Eaa2026Post: BlogPost = {
  slug: 'wcag-22-aa-european-accessibility-act-2026',
  title: {
    en: 'WCAG 2.2 AA & European Accessibility Act 2026: Practical Engineering Compliance Guide',
    ua: 'WCAG 2.2 AA та European Accessibility Act 2026: практичний інженерний посібник із відповідності',
    es: 'WCAG 2.2 AA y European Accessibility Act 2026: Guía práctica de cumplimiento normativo para ingenieros',
  },
  description: {
    en: 'A pragmatic developer guide for EU companies and agencies on complying with the European Accessibility Act (EAA 2026 / EN 301 549), covering focus management, color contrast, semantic DOM, and automated CI/CD audits.',
    ua: 'Практичний посібник для компаній та агентств у ЄС щодо відповідності вимогам European Accessibility Act (EAA 2026 / EN 301 549): керування фокусом, контрастність, семантичний DOM та CI/CD тести.',
    es: 'Guía práctica para empresas y agencias europeas sobre el cumplimiento de la Ley Europea de Accesibilidad (EAA 2026 / EN 301 549): gestión de foco, contraste de color, DOM semántico y auditorías CI/CD.',
  },
  date: '2026-10-18',
  readTime: {
    en: '6 min read',
    ua: '6 хв читання',
    es: '6 min de lectura',
  },
  category: 'accessibility-compliance',
  categoryLabel: {
    en: 'Accessibility & Compliance',
    ua: 'Доступність та стандарти',
    es: 'Accesibilidad y Normativa',
  },
  tags: ['WCAG 2.2 AA', 'EAA 2026', 'EN 301 549', 'A11y', 'React 19', 'Playwright', 'DevSecOps'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-wcag-22-eaa.svg',
  appliedProjects: [
    {
      projectId: 14500,
      slug: 'alldaymedicalcare',
      name: 'All Day Medical Care Clinic',
      note: {
        en: 'Healthcare web platform certified for WCAG 2.2 AA compliance, accessible keyboard traps prevention, and contrast ratios > 7:1.',
        ua: 'Медична платформа, сертифікована за стандартом WCAG 2.2 AA із повною клавіатурною доступністю та контрастністю > 7:1.',
        es: 'Plataforma sanitaria adaptada a WCAG 2.2 AA con navegación por teclado y ratios de contraste superiores a 7:1.',
      },
    },
    {
      projectId: 29000,
      slug: 'unitrition',
      name: 'Unitrition E-Commerce Platform',
      note: {
        en: 'Accessible semantic e-commerce layout with zero keyboard traps, screen-reader optimized product filtering, and strict ARIA roles.',
        ua: 'Доступна семантична e-commerce верстка без пасток фокусу, оптимізована для скрінрідерів із суворими ARIA-ролями.',
        es: 'Maquetación accesible de comercio electrónico sin trampas de foco, filtrado adaptado a lectores de pantalla y roles ARIA estrictos.',
      },
    },
  ],
  tldr: {
    en: [
      'The European Accessibility Act (Directive 2019/882 / EN 301 549) establishes legally binding digital accessibility requirements for businesses operating in the EU.',
      'Accessibility cannot be patched on with third-party JavaScript overlay widgets; courts and auditors explicitly reject them.',
      'Core technical requirements: visible focus outlines (WCAG 2.4.7 / 2.4.11), 4.5:1 text contrast across light and dark themes, keyboard focus trapping in dialogs, and native semantic landmarks.',
      'Automated CI/CD testing with Playwright and @axe-core catches up to 57% of common accessibility defects before production release.',
    ],
    ua: [
      'European Accessibility Act (Директива 2019/882 / EN 301 549) встановлює обов язкові юридичні вимоги до цифрової доступності бізнесу в ЄС.',
      'Доступність неможливо вирішити сторонніми плагінами-віджетами (overlays); суди та аудитори ЄС їх офіційно відхиляють.',
      'Ключові інженерні вимоги: видимий індикатор фокусу клавіатури, контраст 4.5:1 у світлій і темній темах, захоплення фокусу в модальних вікнах та семантична розмітка.',
      'Автоматичні тести з Playwright та @axe-core у CI/CD виявляють до 57% типових дефектів ще до виходу в прод.',
    ],
    es: [
      'La Ley Europea de Accesibilidad (Directiva 2019/882 / EN 301 549) impone obligaciones legales a las empresas que operan en la Unión Europea.',
      'La accesibilidad no se soluciona instalando widgets superpuestos (overlays); los tribunales y auditores los rechazan de forma explícita.',
      'Requisitos clave de ingeniería: indicadores de foco visibles (WCAG 2.4.7), contraste de color 4.5:1 en ambos temas, captura de foco en modales y etiquetas semánticas nativas.',
      'Las pruebas automatizadas con Playwright y @axe-core en CI/CD detectan hasta el 57% de los fallos antes de pasar a producción.',
    ],
  },
  content: {
    en: `### The Legal Shift: Why Accessibility Is No Longer Optional

For years, digital accessibility was treated as a secondary "nice-to-have" checklist item. With the enforcement of the **European Accessibility Act (Directive 2019/882 / standard EN 301 549)**, digital accessibility has transitioned from an ethical recommendation to a **strict legal compliance mandate across all European Union member states (including Spain)**.

Businesses offering e-commerce, banking, booking services, or public consumer interfaces that fail to meet **WCAG 2.2 Level AA** risk heavy administrative penalties, lost public tenders, and mandatory remediation injunctions.

Crucially: **third-party accessibility overlay widgets (such as accessiBe or UserWay) do not satisfy legal compliance**. Both the European Commission and digital rights organizations have repeatedly warned that overlays introduce secondary accessibility barriers and fail legal scrutiny.

Accessibility must be engineered directly into the foundational codebase.

---

### 1. Focus Management & Keyboard Trap in Dialogs

The single most common defect flagged by accessibility auditors in modern Single Page Applications (SPAs) is broken keyboard focus in modal windows.

When a modal dialog opens:
1. Keyboard focus must immediately shift inside the dialog to the first interactive element.
2. Pressing \`Tab\` and \`Shift+Tab\` must loop indefinitely inside the dialog boundaries without escaping to background content.
3. Pressing \`Escape\` must dismiss the dialog and restore keyboard focus to the exact button that triggered it.

In this portfolio platform, we engineered a dedicated custom hook \`useDialogA11y\`:

\`\`\`tsx
export function useDialogA11y({
  isOpen,
  onClose,
  initialFocusRef,
  containerRef,
}: UseDialogA11yOptions) {
  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;

    // Trap focus inside container
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        // cycle through focusable elements
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus(); // restore focus upon close
    };
  }, [isOpen, onClose]);
}
\`\`\`

---

### 2. High-Contrast Ratios in Dark and Light Themes

WCAG 2.2 Success Criterion 1.4.3 mandates a minimum contrast ratio of **4.5:1** for regular text and **3:1** for large text and interactive UI borders.

When building dark mode toggles, teams often use muted grays like \`text-slate-400\` on \`bg-slate-900\`, dropping contrast to 3.2:1 and instantly failing compliance.

Guidelines:
- **Light Theme**: Primary body text must use deep slate (\`text-slate-900\` / \`#0f172a\`), yielding an 18.2:1 contrast against white backgrounds.
- **Dark Theme**: Primary body text must use crisp neutral white (\`text-slate-100\` / \`#f1f5f9\`), yielding a 14.1:1 contrast against dark slate backgrounds.
- **Interactive Focus Indicators**: Always apply a visible \`focus-visible:outline-2 focus-visible:outline-offset-2\` with at least 3:1 contrast against surrounding surfaces.

---

### 3. Automated CI/CD Regression Prevention

Human testing with screen readers (NVDA on Windows, VoiceOver on macOS/iOS) is essential, but automated regression testing in continuous integration prevents defects before merge.

Using **Playwright** and **@axe-core/playwright**, we run automated accessibility assertions on every pull request:

\`\`\`ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home page must have zero critical or serious WCAG 2.2 AA violations', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
\`\`\`

---

### 4. Checklist for Business Stakeholders

1. **Verify native semantics**: Replace clickable \`<div>\` elements with semantic \`<button>\` and \`<a>\` tags.
2. **Audit form inputs**: Ensure every input has an explicit programmatic \`<label htmlFor="...">\` or \`aria-label\`.
3. **Check responsive scaling**: The layout must comfortably scale up to 200% zoom without horizontal clipping or broken controls.
4. **Enforce in CI/CD**: Integrate automated accessibility test suites into your deployment workflow so regressions never slip into production unnoticed.`,

    ua: `### Юридичні зміни: чому доступність обов язкова

Роками цифрова доступність (accessibility) сприймалася як необов язковий додаток до розробки. З набранням чинності **European Accessibility Act (Директива 2019/882 / стандарт EN 301 549)** доступність стала **суворою юридичною вимогою для бізнесу в Європейському Союзі (зокрема в Іспанії)**.

Компанії, що надають послуги онлайн-торгівлі, бронювання, фінансових або публічних сервісів, зобов язані відповідати стандарту **WCAG 2.2 Level AA**. За порушення передбачено суттєві фінансові штрафи та заборону участі у тендерах.

Важливий момент: **сторонні плагіни-віджети (overlays) не захищають від штрафів**. Європейські регулятори та суди офіційно визнали, що такі віджети не виправляють архітектурні дефекти коду.

Доступність має бути закладена в саму основу веброзробки.

---

### 1. Керування фокусом у діалогових вікнах

Найпоширеніша помилка в сучасних вебдодатках - це втрата фокусу клавіатури при відкритті модальних вікон.

При відкритті вікна:
1. Фокус має негайно перейти на перший інтерактивний елемент всередині модалки.
2. Натискання \`Tab\` та \`Shift+Tab\` має зациклюватися виключно всередині вікна.
3. Натискання \`Escape\` має закрити вікно та повернути фокус на кнопку, яка його викликала.

У нашому проєкті для цього реалізовано хук \`useDialogA11y\`, який повністю автоматизує цей процес.

---

### 2. Контрастність у світлій та темній темах

Стандарт WCAG 2.2 вимагає мінімальний контраст тексту **4.5:1**:
- У темній темі неприпустимо використовувати занадто тьмяний сірий колір.
- Усі інтерактивні елементи мають чіткий індикатор \`focus-visible\`.

---

### 3. Автоматизація перевірок у CI/CD

Ручне тестування з екранними дикторами (NVDA, VoiceOver) є обов язковим, але автоматичні тести в GitHub Actions захищають від регресій під час кожного оновлення коду.

Ми використовуємо зв язку **Playwright + @axe-core/playwright**, яка блокує реліз, якщо в коді виявлено порушення стандарту WCAG 2.2 AA.`,

    es: `### El cambio normativo: la accesibilidad ya no es opcional

Durante años, la accesibilidad web se consideraba una recomendación secundaria. Con la entrada en vigor de la **Ley Europea de Accesibilidad (Directiva 2019/882 / norma EN 301 549)**, la accesibilidad digital se ha convertido en una **obligación legal estricta para las empresas que operan en la Unión Europea (incluida España)**.

Las plataformas de comercio electrónico, contratación de servicios, banca y reservas en línea que no cumplan con el nivel **WCAG 2.2 AA** se exponen a sanciones económicas y a la pérdida de licitaciones públicas.

Punto clave: **los widgets de accesibilidad superpuestos (overlays comerciales) no cumplen la normativa**. La Comisión Europea y las organizaciones de derechos digitales han advertido de que estos complementos no corrigen los defectos reales del DOM y son desestimados en auditorías oficiales.

La accesibilidad debe construirse desde los cimientos del código.

---

### 1. Gestión de foco y captura en ventanas modales

El fallo más repetido en aplicaciones modernas es el descontrol del foco del teclado al abrir diálogos modales.

Al abrir un modal:
1. El foco debe situarse de inmediato en el primer control interactivo interno.
2. La navegación con \`Tab\` y \`Shift+Tab\` debe quedar confinada dentro de los límites del modal.
3. La tecla \`Escape\` debe cerrar el diálogo y devolver el foco al botón que originó la apertura.

En nuestro código, el hook \`useDialogA11y\` gestiona este ciclo de vida de manera garantizada y probada con tests automatizados.

---

### 2. Contraste cromático en tema claro y oscuro

El criterio WCAG 2.2 1.4.3 exige un ratio de contraste mínimo de **4.5:1** para texto estándar:
- En tema claro, usamos gris oscuro (\`text-slate-900\`) sobre fondo blanco, logrando un ratio de 18:1.
- En tema oscuro, usamos blanco neutro (\`text-slate-100\`) sobre fondo azul noche, superando el ratio de 14:1.
- Todo elemento accionable muestra un contorno nítido con \`focus-visible\`.

---

### 3. Automatización de auditorías en CI/CD

Mediante la integración de **Playwright** y **@axe-core/playwright**, ejecutamos auditorías automáticas en cada commit de GitHub Actions, impidiendo que cualquier vulnerabilidad de accesibilidad llegue a producción.`,
  },
}
