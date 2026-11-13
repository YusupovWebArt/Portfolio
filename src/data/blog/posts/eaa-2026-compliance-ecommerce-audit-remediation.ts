import type { BlogPost } from '../types'

export const eaa2026EcommerceCompliancePost: BlogPost = {
  slug: 'eaa-2026-compliance-ecommerce-audit-remediation',
  title: {
    en: 'European Accessibility Act (EAA 2026) for E-Commerce: Compliance Architecture, Penalties & Remediation Blueprint',
    ua: 'Європейський акт про доступність (EAA 2026) для E-Commerce: архітектура відповідності, штрафи та план ремедіації',
    es: 'Ley Europea de Accesibilidad (EAA 2026) para E-Commerce: arquitectura de cumplimiento, sanciones y plan de remediación',
    de: 'European Accessibility Act (EAA 2026 / BFSG) im E-Commerce: Compliance-Architektur, Bußgelder & technischer Umsetzungsleitfaden',
  },
  description: {
    en: 'A comprehensive engineering guide on achieving European Accessibility Act (EAA 2026 / Directive 2019/882 / EN 301 549) and WCAG 2.2 Level AA compliance for online stores in the EU. Legal implications, fines up to 100,000 EUR, checkout accessibility, screen reader patterns, and practical remediation code.',
    ua: 'Повний інженерний посібник з досягнення відповідності European Accessibility Act (EAA 2026 / Директива 2019/882 / EN 301 549) та WCAG 2.2 Level AA для онлайн-магазинів у ЄС: юридичні наслідки, штрафи до 100 000 євро, доступний чекаут та код виправлення.',
    es: 'Guía técnica exhaustiva para cumplir con la Ley Europea de Accesibilidad (EAA 2026 / Directiva 2019/882 / EN 301 549) y WCAG 2.2 Nivel AA en tiendas online en la UE: sanciones de hasta 100.000 euros, accesibilidad en el checkout y código práctico de remediación.',
    de: 'Ein umfassender technischer Leitfaden zur Erfüllung des European Accessibility Act (EAA 2026 / Richtlinie 2019/882 / EN 301 549 / BFSG) und WCAG 2.2 Level AA für Online-Shops in der EU. Rechtliche Folgen, Bußgelder bis zu 100.000 EUR, barrierefreier Checkout, Screenreader-Muster und praxisnaher Remediation-Code.',
  },
  date: '2026-11-12',
  readTime: {
    en: '10 min read',
    ua: '10 хв читання',
    es: '10 min de lectura',
    de: '10 Min. Lesezeit',
  },
  category: 'accessibility-compliance',
  categoryLabel: {
    en: 'Accessibility & Compliance',
    ua: 'Доступність та стандарти',
    es: 'Accesibilidad y Normativa',
    de: 'Barrierefreiheit & Compliance',
  },
  tags: ['EAA 2026', 'WCAG 2.2 AA', 'E-Commerce', 'WooCommerce', 'React 19', 'A11y', 'EN 301 549', 'Compliance'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
      de: 'Fullstack Web-Engineer & KI-Entwickler',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-eaa-2026-ecommerce-compliance.svg',
  appliedProjects: [
    {
      projectId: 15600,
      slug: 'organic-bed',
      name: 'Organic Bed Israel & EU',
      note: {
        en: 'High-performance bidirectional WooCommerce store engineered with strict WCAG 2.2 AA compliance, accessible cart drawers, and RTL keyboard navigation.',
        ua: 'Високопродуктивний двонаправлений магазин WooCommerce зі суворою відповідністю WCAG 2.2 AA, доступними кошиками та RTL-навігацією.',
        es: 'Tienda WooCommerce bidireccional de alto rendimiento desarrollada con estricto cumplimiento WCAG 2.2 AA, carritos accesibles y navegación RTL por teclado.',
        de: 'Hochperformanter bidirektionaler WooCommerce-Shop mit strikter WCAG 2.2 AA-Konformität, barrierefreien Warenkorb-Drawern und RTL-Tastaturnavigation.',
      },
    },
    {
      projectId: 29000,
      slug: 'unitrition',
      name: 'Unitrition E-Commerce Platform',
      note: {
        en: 'Certified enterprise nutrition e-commerce platform featuring accessible multi-step checkout, contrast validation, and screen reader live announcements.',
        ua: 'Сертифікована e-commerce платформа спортивного харчування з доступним покроковим чекаутом, валідацією контрасту та живими оголошеннями для screen reader.',
        es: 'Plataforma de comercio electrónico certificada con checkout accesible paso a paso, validación de contraste y anuncios en vivo para lectores de pantalla.',
        de: 'Zertifizierte Enterprise-E-Commerce-Plattform für Ernährung mit barrierefreiem mehrstufigem Checkout, Kontrastvalidierung und Live-Ansagen für Screenreader.',
      },
    },
    {
      projectId: 15500,
      slug: 'buhl-de',
      name: 'Buhl WISO Tax Software',
      note: {
        en: 'Regulated German digital software platform adhering to BFSG barrier-free accessibility guidelines and high-contrast user interfaces.',
        ua: 'Регульований німецький цифровий портал із дотриманням вимог доступності BFSG та висококонтрастним користувацьким інтерфейсом.',
        es: 'Plataforma digital alemana regulada que cumple con las directrices de accesibilidad BFSG e interfaces de usuario de alto contraste.',
        de: 'Regulierte deutsche Softwareplattform unter Einhaltung der Barrierefreiheitsrichtlinien des BFSG und kontrastreicher Benutzeroberflächen.',
      },
    },
  ],
  tldr: {
    en: [
      'The European Accessibility Act (Directive 2019/882 / EN 301 549) is legally mandatory across all 27 EU member states in 2026 for all B2C e-commerce websites and digital services.',
      'Non-compliance risks severe administrative sanctions: fines up to 100,000 EUR under German BFSG and Spanish Real Decreto 193/2023, along with injunctions and market exclusions.',
      'WCAG 2.2 Level AA introduces critical new success criteria for online stores: Focus Not Obscured (2.4.11), Target Size minimum 24x24px (2.5.8), and Redundant Entry prevention (3.3.7).',
      'Overlay widgets (third-party JS overlays) fail regulatory audits and do not prevent lawsuits; only true semantic DOM architecture and keyboard accessibility provide complete legal immunity.',
    ],
    ua: [
      'Європейський акт про доступність (Директива 2019/882 / EN 301 549) є обов язковим до виконання в усіх 27 країнах ЄС у 2026 році для всіх e-commerce сайтів та цифрових сервісів.',
      'Порушення вимог загрожує суворими санкціями: штрафи до 100 000 євро згідно з німецьким BFSG та іспанським Real Decreto 193/2023, а також судовими заборонами на торгівлю.',
      'Стандарт WCAG 2.2 Level AA вводить критичні нові критерії для інтернет-магазинів: видимість фокусу (2.4.11), мінімальний розмір кнопок 24x24px (2.5.8) та усунення повторного введення даних (3.3.7).',
      'Сторонні віджети доступності (JS overlays) не проходять регуляторний аудит і не захищають від позовів; лише нативна семантична архітектура DOM гарантує повний правовий захист.',
    ],
    es: [
      'La Ley Europea de Accesibilidad (Directiva 2019/882 / EN 301 549) es de obligado cumplimiento en los 27 estados de la UE en 2026 para tiendas online y servicios digitales B2C.',
      'El incumplimiento acarrea graves sanciones administrativas: multas de hasta 100.000 euros bajo la BFSG alemana y el Real Decreto 193/2023 en España, además del bloqueo de mercado.',
      'El estándar WCAG 2.2 Nivel AA introduce criterios cruciales para e-commerce: Foco no oculto (2.4.11), Tamaño de objetivo mínimo 24x24px (2.5.8) y Entrada redundante (3.3.7).',
      'Los widgets superpuestos (overlays de JavaScript) no superan las auditorías oficiales ni evitan demandas; únicamente una arquitectura semántica nativa del DOM ofrece inmunidad legal.',
    ],
    de: [
      'Der European Accessibility Act (Richtlinie 2019/882 / EN 301 549) ist 2026 in allen 27 EU-Mitgliedstaaten für sämtliche B2C-E-Commerce-Websites und digitalen Dienste gesetzlich verpflichtend.',
      'Bei Verstößen drohen empfindliche behördliche Sanktionen: Bußgelder bis zu 100.000 EUR nach dem deutschen BFSG und dem spanischen Real Decreto 193/2023 sowie Unterlassungsverfügungen und Vertriebsverbote.',
      'WCAG 2.2 Level AA führt entscheidende neue Erfolgskriterien für Online-Shops ein: Fokus nicht verdeckt (2.4.11), Mindestzielgröße 24x24px (2.5.8) und Vermeidung redundanter Eingaben (3.3.7).',
      'Overlay-Widgets (Drittanbieter-JS-Overlays) fallen bei behördlichen Prüfungen durch und schützen nicht vor Abmahnungen; nur eine echte semantische DOM-Architektur und vollständige Tastaturbedienbarkeit bieten Rechtssicherheit.',
    ],
  },
  content: {
    en: `
### 1. The Legal Reality: Directive 2019/882 & National Transpositions in 2026

The European Accessibility Act (EAA), codified under **Directive (EU) 2019/882** and harmonized technical standard **EN 301 549**, is no longer a forward-looking proposal. As of 2026, it is actively enforced across all 27 European Union member states.

Unlike previous accessibility directives that applied exclusively to public sector bodies, the EAA directly regulates private commercial entities operating in the EU digital single market.

\`\`\`
Scope of the European Accessibility Act:
┌────────────────────────────────────────────────────────────────────────┐
│ - E-Commerce websites, mobile applications & checkout funnels          │
│ - Banking, consumer credit & payment gateway interfaces                │
│ - Ticketing, travel booking & passenger transport services             │
│ - Digital media, e-books & streaming software platforms                │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

#### Penalties Across Key EU Jurisdictions
Member states have transposed the directive into stringent domestic statutes with severe financial enforcement mechanisms:
- **Germany (BFSG - Barrierefreiheitsstärkungsgesetz):** Regulatory authorities can issue administrative fines up to **100,000 EUR** per non-compliant system, accompanied by immediate cease-and-desist orders that can halt online sales.
- **Spain (Real Decreto 193/2023 & Ley 11/2023):** Imposes tiered fines ranging from 30,000 EUR for moderate infringements up to **1,000,000 EUR** for very serious continuous violations.
- **France (Loi n° 2023-171):** Fines up to 50,000 EUR per commercial product with mandatory public disclosure of violations.

Furthermore, international companies selling into the EU are subject to extraterritorial jurisdiction: if an online store accepts EUR, delivers to EU addresses, or targets EU consumers, it must comply regardless of corporate headquarters.

---

### 2. The Fallacy of Accessibility Overlays

Many e-commerce merchants have attempted to achieve compliance by installing third-party JavaScript accessibility overlay widgets (such as accessiBe, UserWay, or EqualWeb). In 2026, regulatory bodies and courts have explicitly rejected this approach:

1. **Failure to Modify Core DOM:** Overlays operate on top of broken markup rather than fixing underlying semantic issues, failing automated scanner validation and manual assistive technology tests.
2. **Screen Reader Interference:** Popular screen readers (NVDA, JAWS, VoiceOver) frequently malfunction when conflicting overlay scripts hijack native keyboard navigation loops.
3. **Legal Vulnerability:** The European Commission and independent accessibility consortia have confirmed that third-party overlays do not meet EN 301 549 specifications. Relying on an overlay leaves an online store fully exposed to statutory fines.

---

### 3. Critical WCAG 2.2 AA Criteria for E-Commerce

While WCAG 2.1 focused on responsive layouts and contrast, **WCAG 2.2 Level AA** introduces several success criteria that directly impact the e-commerce purchase lifecycle:

#### A. 3.3.7 Redundant Entry (Level A)
Information previously entered by the user must either be auto-populated or available for selection in subsequent checkout steps. In e-commerce, forcing users to re-enter billing addresses when they match shipping addresses is now a direct compliance failure.

\`\`\`tsx
// Accessible Shipping/Billing Sync Pattern
export function BillingAddressSync({ shippingAddress, onSyncChange }: BillingSyncProps) {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  return (
    <fieldset className="mt-6 border-t border-slate-700 pt-4">
      <legend className="text-base font-semibold text-slate-200">
        Billing Details
      </legend>
      <label className="flex items-center gap-3 cursor-pointer py-2">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={(e) => {
            setSameAsShipping(e.target.checked);
            onSyncChange(e.target.checked ? shippingAddress : null);
          }}
          className="h-5 w-5 rounded border-slate-600 bg-slate-900 text-purple-600 focus-visible:ring-2 focus-visible:ring-purple-500"
        />
        <span className="text-sm text-slate-300">
          Billing address is identical to shipping address
        </span>
      </label>
      {!sameAsShipping && (
        <div className="mt-4 space-y-4" role="region" aria-label="Separate Billing Address">
          {/* Billing Inputs */}
        </div>
      )}
    </fieldset>
  );
}
\`\`\`

#### B. 2.4.11 Focus Not Obscured (Minimum) (Level AA)
When an element receives keyboard focus, it must not be entirely hidden behind sticky banners, floating discount bars, cookie consent banners, or sticky checkout buttons.

\`\`\`css
/* Scroll margin ensures sticky headers do not obscure focused form inputs */
:focus-visible {
  outline: 2px solid #a855f7;
  outline-offset: 3px;
  scroll-margin-top: 96px; /* Accounts for fixed sticky header height */
  scroll-margin-bottom: 80px; /* Accounts for sticky checkout action bar */
}
\`\`\`

#### C. 2.5.8 Target Size (Minimum) (Level AA)
All interactive controls (quantity increment buttons, product variant selectors, remove-from-cart icons) must have a touch target of at least **24x24 CSS pixels**, or sufficient spacing so that a 24px diameter circle centered on the target does not intersect another target.

\`\`\`tsx
// Accessible Quantity Selector with 44x44px Touch Boundaries
export function AccessibleQuantityStepper({ quantity, onChange, min = 1, max = 99 }: Props) {
  return (
    <div className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease item quantity"
        className="flex h-11 w-11 items-center justify-center text-slate-300 hover:text-white disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        <MinusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <span
        aria-live="polite"
        aria-atomic="true"
        className="w-12 text-center font-mono text-sm font-semibold text-slate-100"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase item quantity"
        className="flex h-11 w-11 items-center justify-center text-slate-300 hover:text-white disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        <PlusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
\`\`\`

---

### 4. Accessible E-Commerce Checkout Stepper Architecture

A major source of regulatory non-compliance in e-commerce is the multi-step checkout. Blind users and keyboard navigators frequently become disoriented without proper progress announcements and landmark semantics.

Here is an enterprise-grade accessible stepper implementation adhering to EN 301 549:

\`\`\`tsx
interface CheckoutStep {
  id: string;
  name: string;
  isComplete: boolean;
  isCurrent: boolean;
}

export function AccessibleCheckoutNav({ steps }: { steps: CheckoutStep[] }) {
  const currentStep = steps.find((s) => s.isCurrent);

  return (
    <nav aria-label="Checkout Progress" className="py-6">
      {/* Screen reader live notification on step transition */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentStep ? \`Currently on Step: \${currentStep.name}\` : ''}
      </div>

      <ol className="flex items-center justify-between gap-4">
        {steps.map((step, idx) => (
          <li key={step.id} className="flex-1 flex items-center">
            <div
              className="flex items-center gap-3"
              aria-current={step.isCurrent ? 'step' : undefined}
            >
              <span
                className={\`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold \${
                  step.isComplete
                    ? 'bg-emerald-600 text-white'
                    : step.isCurrent
                      ? 'border-2 border-purple-500 bg-purple-950 text-purple-200'
                      : 'border border-slate-700 bg-slate-900 text-slate-500'
                }\`}
              >
                {step.isComplete ? '✓' : idx + 1}
              </span>
              <span
                className={\`text-sm font-medium \${
                  step.isCurrent
                    ? 'text-purple-300 font-semibold'
                    : step.isComplete
                      ? 'text-slate-200'
                      : 'text-slate-500'
                }\`}
              >
                {step.name}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={\`flex-1 h-0.5 mx-4 \${
                  step.isComplete ? 'bg-emerald-600' : 'bg-slate-800'
                }\`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
\`\`\`

---

### 5. Production Remediation Checklist for EU Online Stores

Before launching or maintaining an e-commerce platform in the European market in 2026, verify the following checklist:

| Audit Item | WCAG 2.2 Standard | Implementation Requirement |
| :--- | :--- | :--- |
| **Color Contrast** | 1.4.3 (4.5:1 text, 3:1 UI) | Tested in both dark and light modes with zero fails on prices and badges |
| **Keyboard Tab Flow** | 2.1.1 & 2.1.2 | No focus traps in cart drawer, coupon modals, or image lightboxes |
| **Focus Rings** | 2.4.7 & 2.4.11 | Minimum 2px visible focus ring with 3:1 contrast against surrounding background |
| **Form Error Summary** | 3.3.1 & 3.3.3 | Live region error summary placed at top of checkout form on validation failure |
| **Touch Target Size** | 2.5.8 | All clickable buttons and icons have minimum 24x24px bounding box |
| **Payment Gateways** | EN 301 549 9.3.3.8 | Stripe/PayPal iframes have accessible labels and don't trap tab navigation |
| **No Auto-Advancing Sliders** | 2.2.2 Pause/Stop | Hero product carousels have explicit pause/play controls for vestibular safety |

Investing in native accessibility is not merely legal risk mitigation; it expands the addressable market by 15% to 20% of consumers who rely on assistive technologies, while driving higher SEO rankings and superior conversion metrics.
`,
    ua: `
### 1. Юридичні реалії: Директива 2019/882 та національні закони у 2026 році

Європейський акт про доступність (EAA), зафіксований у **Директиві (ЄС) 2019/882** та гармонізованому технічному стандарті **EN 301 549**, у 2026 році набув чинності в усіх 27 країнах Європейського Союзу як обов язковий закон.

На відміну від попередніх директив, які поширювалися лише на державний сектор, EAA регулює приватний комерційний бізнес, що працює на цифровому ринку ЄС.

\`\`\`
Сфера дії Європейського акту про доступність:
┌────────────────────────────────────────────────────────────────────────┐
│ - Інтернет-магазини, мобільні додатки та чекаут-воронки                 │
│ - Онлайн-банкінг, споживче кредитування та платіжні шлюзи              │
│ - Квиткові сервіси, бронювання подорожей та пасажирський транспорт      │
│ - Цифрові медіа, електронні книги та стрімінгові платформи              │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

#### Штрафи у ключових юрисдикціях ЄС
Країни-члени транспонували директиву у суворі національні закони з серйозними фінансовими наслідками:
- **Німеччина (BFSG - Barrierefreiheitsstärkungsgesetz):** Регуляторні органи накладають адміністративні штрафи до **100 000 EUR** за кожну невідповідну систему з правом судової заборони онлайн-торгівлі.
- **Іспанія (Real Decreto 193/2023 та Ley 11/2023):** Штрафи від 30 000 євро за помірні порушення до **1 000 000 EUR** за грубі тривалі порушення доступності.
- **Франція (Loi n° 2023-171):** Штрафи до 50 000 євро за продукт із обов язковою публічною публікацією переліку порушників.

Крім того, міжнародні магазини (з США, Великобританії, України), які продають товари в ЄС, приймають євро або здійснюють доставку європейським клієнтам, підпадають під юрисдикцію EAA незалежно від місця реєстрації компанії.

---

### 2. Ілюзія сторонніх віджетів доступності (Overlays)

Багато власників магазинів намагалися вирішити проблему встановленням сторонніх JS-віджетів (accessiBe, UserWay тощо). У 2026 році регулятори та суди в ЄС остаточно визнали такий підхід нелегітимним:

1. **Відсутність виправлення нативного DOM:** Віджети накладають стилі поверх зламаної розмітки, що не проходить аудит автоматичних сканерів та ручне тестування.
2. **Конфлікт зі Screen Reader:** Популярні програми зчитування екрана (NVDA, JAWS, VoiceOver) збоять, коли скрипти віджета перехоплюють фокус клавіатури.
3. **Юридична вразливість:** Єврокомісія та асоціації доступності офіційно підтвердили, що віджети не відповідають стандарту EN 301 549. Магазин з оверлеєм залишається повністю відкритим для штрафів.

---

### 3. Критичні критерії WCAG 2.2 AA для E-Commerce

Стандарт **WCAG 2.2 Level AA** містить кілька успішних критеріїв, які безпосередньо впливають на процес онлайн-покупок:

#### A. 3.3.7 Redundant Entry (Повторне введення даних)
Дані, які користувач уже ввів на попередньому кроці, повинні або підставлятися автоматично, або бути доступними для вибору. Вимога знову вводити адресу виставлення рахунку, якщо вона збігається з адресою доставки, є прямим порушенням стандарту.

\`\`\`tsx
// Патерн доступної синхронізації адрес
export function BillingAddressSync({ shippingAddress, onSyncChange }: BillingSyncProps) {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  return (
    <fieldset className="mt-6 border-t border-slate-700 pt-4">
      <legend className="text-base font-semibold text-slate-200">
        Платіжні дані
      </legend>
      <label className="flex items-center gap-3 cursor-pointer py-2">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={(e) => {
            setSameAsShipping(e.target.checked);
            onSyncChange(e.target.checked ? shippingAddress : null);
          }}
          className="h-5 w-5 rounded border-slate-600 bg-slate-900 text-purple-600 focus-visible:ring-2 focus-visible:ring-purple-500"
        />
        <span className="text-sm text-slate-300">
          Платіжна адреса збігається з адресою доставки
        </span>
      </label>
    </fieldset>
  );
}
\`\`\`

#### B. 2.4.11 Focus Not Obscured (Видимість фокусу)
Елемент у фокусі клавіатури не повинен перекриватися фіксованими шапками, плаваючими банерами купонів чи кнопками чекауту.

\`\`\`css
/* Відступи прокрутки запобігають перекриттю фокусу */
:focus-visible {
  outline: 2px solid #a855f7;
  outline-offset: 3px;
  scroll-margin-top: 96px; /* Враховує висоту фіксованої шапки */
  scroll-margin-bottom: 80px; /* Враховує плаваючу панель замовлення */
}
\`\`\`

#### C. 2.5.8 Target Size (Розмір клікабельної області)
Усі інтерактивні елементи (кнопки зміни кількості, вибір розміру, видалення з кошика) повинні мати область натискання не менше **24x24 CSS пікселів**.

---

### 4. Архітектура доступного покрокового чекауту

Багатоступеневий чекаут часто дезорієнтує незрячих користувачів через відсутність живих оголошень про зміну кроків. Семантичний компонент чекауту вирішує це завдання за допомогою \`aria-current="step"\` та \`aria-live="polite"\`:

\`\`\`tsx
export function AccessibleCheckoutNav({ steps }: { steps: CheckoutStep[] }) {
  const currentStep = steps.find((s) => s.isCurrent);

  return (
    <nav aria-label="Прогрес оформлення замовлення" className="py-6">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentStep ? \`Поточний крок: \${currentStep.name}\` : ''}
      </div>

      <ol className="flex items-center justify-between gap-4">
        {steps.map((step, idx) => (
          <li key={step.id} className="flex-1 flex items-center">
            <div
              className="flex items-center gap-3"
              aria-current={step.isCurrent ? 'step' : undefined}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold">
                {step.isComplete ? '✓' : idx + 1}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
\`\`\`

---

### 5. Чек-лист аудиту інтернет-магазину для ринку ЄС

| Критерій | Стандарт WCAG 2.2 | Вимога до впровадження |
| :--- | :--- | :--- |
| **Колірний контраст** | 1.4.3 (4.5:1 для тексту) | Перевірено у світлій та темній темах без помилок на цінах та бейджах |
| **Клавіатурний потік** | 2.1.1 та 2.1.2 | Відсутність пасток фокусу в кошику, модальних вікнах та фотогалереях |
| **Фокусні рамки** | 2.4.7 та 2.4.11 | Чітка рамка товщиною від 2px із контрастом 3:1 до фону |
| **Зведення помилок** | 3.3.1 та 3.3.3 | Блок помилок на початку форми з live-оголошенням для screen reader |
| **Розмір цілей** | 2.5.8 | Мінімальний розмір усіх кнопок та іконок 24x24px |
| **Платіжні шлюзи** | EN 301 549 9.3.3.8 | Фрейми Stripe/PayPal мають доступні підписи та коректну навігацію |

Впровадження нативної доступності розширює цільову аудиторію на 15%-20% користувачів, покращує SEO-показники та захищає бізнес від великих штрафів.
`,
    es: `
### 1. La realidad jurídica: Directiva 2019/882 y leyes nacionales en 2026

La Ley Europea de Accesibilidad (EAA), articulada a través de la **Directiva (UE) 2019/882** y la norma armonizada **EN 301 549**, es plenamente vinculante en los 27 países de la Unión Europea en 2026.

A diferencia de normativas anteriores dirigidas únicamente al sector público, la EAA regula directamente a las empresas comerciales privadas que operan en el mercado digital europeo.

\`\`\`
Ámbito de aplicación de la Ley Europea de Accesibilidad:
┌────────────────────────────────────────────────────────────────────────┐
│ - Tiendas online, aplicaciones móviles y procesos de checkout          │
│ - Banca digital, créditos al consumo y pasarelas de pago               │
│ - Venta de billetes, reservas de viajes y transporte de viajeros       │
│ - Medios digitales, libros electrónicos y plataformas de streaming     │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

#### Sanciones en las principales jurisdicciones de la UE
Los Estados miembros han transpuesto la directiva con severos mecanismos sancionadores:
- **Alemania (BFSG - Barrierefreiheitsstärkungsgesetz):** Sanciones administrativas de hasta **100.000 EUR** por sistema no conforme, con órdenes de cese inmediato de la actividad comercial online.
- **España (Real Decreto 193/2023 y Ley 11/2023):** Multas que van desde 30.000 EUR para faltas moderadas hasta **1.000.000 EUR** para infracciones graves continuadas de accesibilidad.
- **Francia (Loi n° 2023-171):** Multas de hasta 50.000 EUR por producto y publicación obligatoria del listado de infractores.

Cualquier tienda internacional que comercialice productos hacia la UE, cobre en euros o realice envíos a consumidores europeos está obligada a cumplir la directiva.

---

### 2. El fracaso de los plugins de accesibilidad (Overlays)

Muchos comercios han intentado resolver la accesibilidad instalando widgets externos de JavaScript (como accessiBe o UserWay). En 2026, los tribunales y organismos reguladores de la UE han dictaminado unánimemente que estos complementos no cumplen la normativa:

1. **No corrigen el DOM nativo:** Los overlays aplican estilos superficiales sin solucionar la estructura semántica de fondo.
2. **Conflictos con lectores de pantalla:** NVDA, JAWS y VoiceOver fallan con frecuencia al ser interceptados por el código del overlay.
3. **Vulnerabilidad legal:** La Comisión Europea confirmó que los overlays no acreditan conformidad con EN 301 549. El comercio sigue expuesto a sanciones.

---

### 3. Criterios clave de WCAG 2.2 AA para E-Commerce

**WCAG 2.2 Nivel AA** añade criterios de éxito determinantes para el flujo de compra online:

#### A. 3.3.7 Entrada redundante (Nivel A)
La información introducida previamente no debe volver a solicitarse. Obligar al usuario a reescribir su dirección de facturación si es idéntica a la de envío constituye un incumplimiento normativo directo.

#### B. 2.4.11 Foco no oculto (Nivel AA)
El elemento activo bajo el foco del teclado no puede quedar tapado por barras flotantes, cabeceras fijas o avisos de cookies.

\`\`\`css
/* scroll-margin evita que elementos con foco queden ocultos */
:focus-visible {
  outline: 2px solid #a855f7;
  outline-offset: 3px;
  scroll-margin-top: 96px;
  scroll-margin-bottom: 80px;
}
\`\`\`

#### C. 2.5.8 Tamaño de objetivo (Mínimo 24x24px)
Todos los controles interactivos (selectores de talla, botones de incremento de unidades, iconos de eliminación) deben tener un área mínima de **24x24 píxeles CSS**.

---

### 4. Arquitectura de checkout accesible paso a paso

Un proceso de pago multietapa accesible requiere navegación secuencial clara, gestión de foco y anuncios en vivo mediante \`aria-live="polite"\` y \`aria-current="step"\`, permitiendo que usuarios con discapacidad visual completen su compra de forma autónoma.

---

### 5. Lista de verificación para tiendas online en la UE

| Criterio | Estándar WCAG 2.2 | Requisito de implementación |
| :--- | :--- | :--- |
| **Contraste de color** | 1.4.3 (4.5:1 texto) | Verificado en temas claro y oscuro en precios, botones y etiquetas |
| **Navegación por teclado** | 2.1.1 y 2.1.2 | Sin trampas de foco en carrito lateral, modales de descuento o zoom |
| **Indicador de foco** | 2.4.7 y 2.4.11 | Anillo visible de mínimo 2px con contraste 3:1 respecto al fondo |
| **Resumen de errores** | 3.3.1 y 3.3.3 | Bloque de alerta al inicio del formulario con lectura en vivo |
| **Tamaño táctil** | 2.5.8 | Mínimo 24x24px en todos los botones e iconos clicables |
| **Pasarelas de pago** | EN 301 549 9.3.3.8 | Los iframes de Stripe/Redsys/PayPal cuentan con etiquetas accesibles |

Desarrollar una tienda con accesibilidad nativa no es solo cumplir la ley: aumenta las conversiones, optimiza el posicionamiento SEO y abre el mercado a millones de usuarios.
`,
    de: `
### 1. Die rechtliche Realität: Richtlinie 2019/882 & nationale Gesetze im Jahr 2026

Der European Accessibility Act (EAA), verankert in der **Richtlinie (EU) 2019/882** und der harmonisierten technischen Norm **EN 301 549**, ist kein bloßer Zukunftsentwurf mehr. Seit 2026 wird er in allen 27 Mitgliedstaaten der Europäischen Union verbindlich durchgesetzt.

Im Gegensatz zu früheren Barrierefreiheitsrichtlinien, die ausschließlich für öffentliche Stellen galten, reguliert der EAA direkt private Wirtschaftsunternehmen auf dem digitalen EU-Binnenmarkt.

\`\`\`
Anwendungsbereich des European Accessibility Act:
┌────────────────────────────────────────────────────────────────────────┐
│ - E-Commerce-Websites, mobile Apps & Checkout-Strecken                 │
│ - Online-Banking, Verbraucherkredite & Zahlungsgateways                │
│ - Ticketing, Reisebuchungen & Personenverkehrsdienste                  │
│ - Digitale Medien, E-Books & Streaming-Plattformen                     │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

#### Bußgelder in wichtigen EU-Rechtsordnungen
Die Mitgliedstaaten haben die Richtlinie in strenge nationale Gesetze mit empfindlichen finanziellen Sanktionen umgesetzt:
- **Deutschland (BFSG - Barrierefreiheitsstärkungsgesetz):** Marktüberwachungsbehörden können Bußgelder von bis zu **100.000 EUR** pro nicht konformem System verhängen, begleitet von sofortigen Untersagungsverfügungen, die den Online-Vertrieb stoppen können.
- **Spanien (Real Decreto 193/2023 & Ley 11/2023):** Sieht gestaffelte Bußgelder von 30.000 EUR bei mittelschweren Verstößen bis zu **1.000.000 EUR** bei sehr schweren dauerhaften Verstößen vor.
- **Frankreich (Loi n° 2023-171):** Bußgelder bis zu 50.000 EUR pro Produkt sowie verpflichtende öffentliche Bekanntmachung der Verstöße.

Darüber hinaus unterliegen internationale Unternehmen, die in die EU verkaufen, dem Marktortprinzip: Wenn ein Online-Shop Zahlungen in EUR akzeptiert, an EU-Adressen liefert oder gezielt EU-Verbraucher anspricht, muss er die Vorgaben unabhängig vom Firmensitz erfüllen.

---

### 2. Der Irrtum von Accessibility-Overlays

Viele Online-Händler haben versucht, Barrierefreiheit durch die Installation von Drittanbieter-JavaScript-Overlays (wie accessiBe, UserWay oder EqualWeb) zu erreichen. Im Jahr 2026 haben Aufsichtsbehörden und Gerichte diesen Ansatz ausdrücklich zurückgewiesen:

1. **Keine Korrektur des nativen DOM:** Overlays legen sich lediglich über fehlerhaftes Markup, anstatt zugrunde liegende semantische Defizite zu beheben, und bestehen weder automatisierte Scanner-Prüfungen noch manuelle Tests mit assistiven Technologien.
2. **Störung von Screenreadern:** Verbreitete Screenreader (NVDA, JAWS, VoiceOver) versagen häufig, wenn Overlay-Skripte native Tastaturnavigationsschleifen abfangen.
3. **Rechtliche Angreifbarkeit:** Die Europäische Kommission und unabhängige Fachverbände haben bestätigt, dass Drittanbieter-Overlays die Anforderungen der EN 301 549 nicht erfüllen. Wer sich auf ein Overlay verlässt, bleibt dem vollen Bußgeldrisiko ausgesetzt.

---

### 3. Kritische WCAG 2.2 AA-Kriterien für den E-Commerce

Während sich WCAG 2.1 auf responsive Layouts und Kontraste konzentrierte, führt **WCAG 2.2 Level AA** mehrere Erfolgskriterien ein, die den Kaufprozess im E-Commerce direkt betreffen:

#### A. 3.3.7 Redundante Eingabe (Level A)
Vom Nutzer bereits eingegebene Informationen müssen in nachfolgenden Checkout-Schritten entweder automatisch vorausgefüllt oder zur Auswahl bereitgestellt werden. Im E-Commerce stellt der Zwang, die Rechnungsadresse erneut einzutippen, obwohl sie mit der Lieferadresse übereinstimmt, einen direkten Verstoß dar.

\`\`\`tsx
// Accessible Shipping/Billing Sync Pattern
export function BillingAddressSync({ shippingAddress, onSyncChange }: BillingSyncProps) {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  return (
    <fieldset className="mt-6 border-t border-slate-700 pt-4">
      <legend className="text-base font-semibold text-slate-200">
        Billing Details
      </legend>
      <label className="flex items-center gap-3 cursor-pointer py-2">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={(e) => {
            setSameAsShipping(e.target.checked);
            onSyncChange(e.target.checked ? shippingAddress : null);
          }}
          className="h-5 w-5 rounded border-slate-600 bg-slate-900 text-purple-600 focus-visible:ring-2 focus-visible:ring-purple-500"
        />
        <span className="text-sm text-slate-300">
          Billing address is identical to shipping address
        </span>
      </label>
      {!sameAsShipping && (
        <div className="mt-4 space-y-4" role="region" aria-label="Separate Billing Address">
          {/* Billing Inputs */}
        </div>
      )}
    </fieldset>
  );
}
\`\`\`

#### B. 2.4.11 Fokus nicht verdeckt (Minimum) (Level AA)
Wenn ein Element den Tastaturfokus erhält, darf es nicht vollständig hinter fixierten Bannern, schwebenden Rabattleisten, Cookie-Bannern oder fixierten Checkout-Buttons verdeckt werden.

\`\`\`css
/* Scroll margin ensures sticky headers do not obscure focused form inputs */
:focus-visible {
  outline: 2px solid #a855f7;
  outline-offset: 3px;
  scroll-margin-top: 96px; /* Accounts for fixed sticky header height */
  scroll-margin-bottom: 80px; /* Accounts for sticky checkout action bar */
}
\`\`\`

#### C. 2.5.8 Zielgröße (Minimum) (Level AA)
Alle interaktiven Bedienelemente (Mengenauswahl-Buttons, Varianten-Umschalter, Löschen-Symbole im Warenkorb) müssen eine Klickfläche von mindestens **24x24 CSS-Pixeln** aufweisen oder über ausreichenden Abstand verfügen, sodass ein Kreis mit 24px Durchmesser auf dem Ziel kein anderes Ziel schneidet.

\`\`\`tsx
// Accessible Quantity Selector with 44x44px Touch Boundaries
export function AccessibleQuantityStepper({ quantity, onChange, min = 1, max = 99 }: Props) {
  return (
    <div className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease item quantity"
        className="flex h-11 w-11 items-center justify-center text-slate-300 hover:text-white disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        <MinusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <span
        aria-live="polite"
        aria-atomic="true"
        className="w-12 text-center font-mono text-sm font-semibold text-slate-100"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase item quantity"
        className="flex h-11 w-11 items-center justify-center text-slate-300 hover:text-white disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        <PlusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
\`\`\`

---

### 4. Barrierefreie E-Commerce-Checkout-Stepper-Architektur

Eine häufige Ursache für behördliche Beanstandungen im E-Commerce ist der mehrstufige Checkout. Blinde Nutzer und Tastaturnutzer verlieren ohne korrekte Fortschrittsansagen und Landmarken-Semantik schnell die Orientierung.

Hier ist eine produktionsreife, barrierefreie Stepper-Implementierung gemäß EN 301 549:

\`\`\`tsx
interface CheckoutStep {
  id: string;
  name: string;
  isComplete: boolean;
  isCurrent: boolean;
}

export function AccessibleCheckoutNav({ steps }: { steps: CheckoutStep[] }) {
  const currentStep = steps.find((s) => s.isCurrent);

  return (
    <nav aria-label="Checkout Progress" className="py-6">
      {/* Screen reader live notification on step transition */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentStep ? \`Currently on Step: \${currentStep.name}\` : ''}
      </div>

      <ol className="flex items-center justify-between gap-4">
        {steps.map((step, idx) => (
          <li key={step.id} className="flex-1 flex items-center">
            <div
              className="flex items-center gap-3"
              aria-current={step.isCurrent ? 'step' : undefined}
            >
              <span
                className={\`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold \${
                  step.isComplete
                    ? 'bg-emerald-600 text-white'
                    : step.isCurrent
                      ? 'border-2 border-purple-500 bg-purple-950 text-purple-200'
                      : 'border border-slate-700 bg-slate-900 text-slate-500'
                }\`}
              >
                {step.isComplete ? '✓' : idx + 1}
              </span>
              <span
                className={\`text-sm font-medium \${
                  step.isCurrent
                    ? 'text-purple-300 font-semibold'
                    : step.isComplete
                      ? 'text-slate-200'
                      : 'text-slate-500'
                }\`}
              >
                {step.name}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={\`flex-1 h-0.5 mx-4 \${
                  step.isComplete ? 'bg-emerald-600' : 'bg-slate-800'
                }\`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
\`\`\`

---

### 5. Produktions-Checkliste für EU-Online-Shops

Überprüfen Sie vor dem Start oder beim Betrieb einer E-Commerce-Plattform auf dem europäischen Markt im Jahr 2026 die folgende Checkliste:

| Prüfpunkt | WCAG 2.2 Standard | Technische Anforderung |
| :--- | :--- | :--- |
| **Farbkontrast** | 1.4.3 (4.5:1 Text, 3:1 UI) | In Dark- und Light-Mode getestet ohne Fehler bei Preisen und Badges |
| **Tastatur-Tab-Fluss** | 2.1.1 & 2.1.2 | Keine Fokusfallen im Warenkorb-Drawer, in Gutschein-Modals oder Bildergalerien |
| **Fokusringe** | 2.4.7 & 2.4.11 | Mindestens 2px sichtbarer Fokusring mit 3:1 Kontrast zum umgebenden Hintergrund |
| **Formularfehler-Übersicht** | 3.3.1 & 3.3.3 | Live-Region-Fehlerzusammenfassung oben im Checkout-Formular bei Validierungsfehlern |
| **Touch-Zielgröße** | 2.5.8 | Alle klickbaren Buttons und Icons haben eine Mindestfläche von 24x24px |
| **Zahlungsgateways** | EN 301 549 9.3.3.8 | Stripe/PayPal-Iframes besitzen barrierefreie Labels und blockieren nicht die Tab-Navigation |
| **Keine Auto-Slider ohne Stopp** | 2.2.2 Pause/Stop | Hero-Produktkarussells bieten explizite Pause-/Abspiel-Steuerelemente |

Die Investition in native Barrierefreiheit ist nicht nur rechtliche Risikominderung; sie erweitert den adressierbaren Markt um 15% bis 20% der Verbraucher, die auf assistive Technologien angewiesen sind, und sorgt gleichzeitig für bessere SEO-Rankings und höhere Konversionsraten.
`,
  },
}
