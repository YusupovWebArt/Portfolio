import type { BlogPost } from '../types'

export const organicBedRtlPost: BlogPost = {
  slug: 'organic-bed-rtl-woocommerce-performance-optimization',
  isProjectDeepDive: true,
  title: {
    en: 'Engineering an RTL WooCommerce Store: Bidirectional CSS, WebP Media Pipeline & Sub-Second Checkout for Organic Bed',
    ua: 'Інжиніринг RTL-магазину на WooCommerce: двонаправлений CSS, медіапайплайн WebP та субсекундний чекаут для Organic Bed',
    es: 'Ingeniería de una tienda WooCommerce RTL: CSS bidireccional, optimización WebP y checkout sub-segundo para Organic Bed',
    de: 'Engineering eines RTL-WooCommerce-Stores: Bidirektionales CSS, WebP-Medienpipeline & Sub-Sekunden-Checkout für Organic Bed',
  },
  description: {
    en: 'An architectural case study on building a custom Right-to-Left (RTL) WooCommerce store for Organic Bed. Covers CSS logical properties for bidirectional layouts, an automated WebP image optimization pipeline cutting payload by 72%, and cart checkout speed optimization.',
    ua: 'Інженерний кейс розробки кастомного RTL-магазину на WooCommerce для Organic Bed: логічні властивості CSS для автоматичного дзеркалення, WebP-компресія із скороченням ваги фотографій на 72% та оптимізація швидкості оформлення замовлення.',
    es: 'Caso de estudio de ingeniería sobre el desarrollo de una tienda WooCommerce RTL para Organic Bed: propiedades lógicas CSS para diseño bidireccional, compresión WebP con ahorro del 72% y optimización de velocidad de pago.',
    de: 'Eine architektonische Fallstudie über den Aufbau eines maßgeschneiderten Right-to-Left (RTL) WooCommerce-Stores für Organic Bed. Behandelt logische CSS-Eigenschaften für bidirektionale Layouts, eine automatisierte WebP-Bildoptimierungspipeline mit 72% geringerer Datenlast und die Beschleunigung des Warenkorb-Checkouts.',
  },
  date: '2026-11-12',
  readTime: {
    en: '8 min read',
    ua: '8 хв читання',
    es: '8 min de lectura',
    de: '8 Min. Lesezeit',
  },
  category: 'headless-ecommerce',
  categoryLabel: {
    en: 'Headless & E-Commerce',
    ua: 'Headless та E-Commerce',
    es: 'Headless y Comercio Electrónico',
    de: 'Headless & E-Commerce',
  },
  tags: ['WooCommerce', 'WordPress', 'RTL', 'E-Commerce', 'WebP', 'Performance', 'Core Web Vitals'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
      de: 'Fullstack Web-Engineer & KI-Entwickler',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-organic-bed-rtl-ecommerce.svg',
  appliedProjects: [
    {
      projectId: 16000,
      slug: 'organic-bed',
      name: 'Organic Bed',
      note: {
        en: 'Custom Right-to-Left (RTL) WooCommerce store engineered from scratch with bidirectional CSS logical properties, high-res WebP image pipeline, and PageSpeed 90+ checkout performance.',
        ua: 'Кастомний інтернет-магазин WooCommerce із повною підтримкою RTL (іврит) на базі логічних властивостей CSS, автоматичного стиснення WebP та показником PageSpeed 90+.',
        es: 'Tienda WooCommerce RTL a medida desarrollada con propiedades lógicas CSS bidireccionales, compresión de imágenes WebP y rendimiento PageSpeed 90+ en el checkout.',
        de: 'Maßgeschneiderter Right-to-Left (RTL) WooCommerce-Shop, von Grund auf entwickelt mit bidirektionalen logischen CSS-Eigenschaften, hochauflösender WebP-Bildpipeline und PageSpeed 90+ Checkout-Performance.',
      },
    },
  ],
  tldr: {
    en: [
      'Engineered a custom WordPress & WooCommerce theme with full Right-to-Left (RTL) support for the Israeli organic bedding market.',
      'Adopted CSS Logical Properties (margin-inline, inset-inline) to eliminate bloated secondary RTL stylesheets and prevent specificity conflicts.',
      'Constructed an automated WebP asset optimization pipeline, reducing high-resolution textile photography payloads by 72% without visual degradation.',
      'Achieved PageSpeed 90+ and eliminated checkout layout shifts (CLS 0.000) for high-converting purchasing funnels.',
    ],
    ua: [
      'Створено кастомну тему WordPress та WooCommerce із повною підтримкою RTL для ізраїльського ринку органічного текстилю.',
      'Використано логічні властивості CSS (margin-inline, inset-inline), що дозволило позбутися дублювання окремих таблиць стилів для RTL.',
      'Впроваджено медіапайплайн автоматичної конвертації у формат WebP із скороченням ваги зображень на 72% без втрати текстури тканини.',
      'Досягнуто PageSpeed 90+ та повна відсутність зсувів макета при оформленні замовлення (CLS 0.000).',
    ],
    es: [
      'Desarrollo de un tema WordPress y WooCommerce a medida con soporte completo RTL para el mercado de ropa de cama orgánica en Israel.',
      'Uso de propiedades lógicas de CSS (margin-inline, inset-inline) para eliminar hojas de estilo RTL duplicadas y evitar conflictos de especificidad.',
      'Canalización automatizada de imágenes WebP que reduce el peso de las fotografías de producto un 72% manteniendo el detalle textil.',
      'Obtención de PageSpeed 90+ y eliminación de saltos de diseño en el pago (CLS 0.000).',
    ],
    de: [
      'Entwicklung eines individuellen WordPress- & WooCommerce-Themes mit vollständiger Right-to-Left (RTL)-Unterstützung für den israelischen Markt für Bio-Bettwäsche.',
      'Einsatz von CSS Logical Properties (margin-inline, inset-inline), um aufgeblähte sekundäre RTL-Stylesheets zu eliminieren und Spezifitätskonflikte zu vermeiden.',
      'Aufbau einer automatisierten WebP-Asset-Optimierungspipeline, die die Datenlast hochauflösender Textilfotografie ohne Qualitätsverlust um 72% reduziert.',
      'Erzielung von PageSpeed 90+ und Eliminierung von Layout-Verschiebungen im Checkout (CLS 0.000) für konversionsstarke Kauftrichter.',
    ],
  },
  content: {
    en: `## The Complexity of Right-to-Left (RTL) E-Commerce

Building an e-commerce platform for Right-to-Left (RTL) language regions (such as Hebrew or Arabic) presents distinct technical hurdles. Traditionally, developers maintain separate stylesheets (e.g. \`style.css\` and \`rtl.css\`) where margins, paddings, and floats are manually overridden. This legacy workflow introduces severe maintenance friction, specificity wars, and cumulative layout shifts (CLS).

When engineering the digital flagship store for **Organic Bed** (Israel), our goal was to deliver a custom WooCommerce experience that feels native in Hebrew, loads in under a second on mobile devices, and showcases luxury organic bedding textures without bandwidth bloat.

---

## Modern Bidirectional Architecture: CSS Logical Properties

Instead of writing override files, the entire theme was built using **CSS Logical Properties**. Modern browsers evaluate directions dynamically based on the \`dir="rtl"\` attribute on the \`<html>\` element:

\`\`\`css
/* Legacy manual override approach (fragile & bloat) */
.product-card { margin-left: 20px; float: left; text-align: left; }
html[dir="rtl"] .product-card { margin-left: 0; margin-right: 20px; float: right; text-align: right; }

/* Modern bidirectional logic (single clean rule) */
.product-card {
  margin-inline-start: 1.25rem;
  text-align: start;
}
\`\`\`

Benefits achieved:
- **Zero Duplicated CSS:** The theme serves a single, lean stylesheet for both LTR and RTL directions.
- **Zero Specificity Hacks:** No need for \`!important\` overrides to counter core WooCommerce styles.
- **Flawless Horizontal Swipers:** Product carousels automatically invert swipe physics and navigation arrows based on document direction.

---

## High-Resolution Media Pipeline: 72% Bandwidth Savings

Bedding shoppers require high-resolution photography to evaluate fabric weaves and stitching. Serving raw JPEGs/PNGs degraded mobile LCP to over 3.4 seconds.

We instituted an automated media pipeline:
1. **Lossy & Lossless WebP Generation:** Original camera captures (averaging 2.4 MB) are converted to WebP format, reducing file sizes to **180 - 240 KB** with zero discernible loss in fabric texture.
2. **Native Responsive Sizing:** Utilizing HTML5 \`<picture>\` with \`srcset\` and \`sizes\` to serve exact pixel dimensions tailored to mobile vs desktop viewports.
3. **Fetch Priority:** High-priority hero images utilize \`fetchpriority="high"\`, ensuring browser download threads fetch the primary visual immediately.

---

## Checkout Optimization & Core Web Vitals

Cart abandonment in e-commerce often traces back to sluggish checkout validation. On the Organic Bed checkout:
- Unused WooCommerce scripts (such as password meters and cart fragments) were conditionally deregistered from non-essential pages.
- Fast checkout AJAX triggers were optimized to prevent full page re-renders.
- **CLS Score:** Maintained at **0.000** through explicit aspect ratios on all product cards.
- **Mobile PageSpeed:** 92 / 100.
`,
    ua: `## Складність розробки RTL інтернет-магазинів

Створення e-commerce платформ для мов із напрямком письма справа наліво (RTL, наприклад іврит чи арабська) вимагає особливого підходу до верстки. Традиційно розробники пишуть окремий файл \`rtl.css\`, у якому вручну перебивають усі відступи та вирівнювання, що веде до конфліктів стилів та стрибків макета (CLS).

Для інтернет-магазину **Organic Bed** (Ізраїль) ми створили швидкий та надійний магазин на базі кастомного WooCommerce, де покупці на смартфонах можуть зручно купувати органічний текстиль без жодних затримок.

---

## Сучасний двонаправлений CSS: Логічні властивості

Замість дублювання стилів уся тема побудована на **логічних властивостях CSS** (\`margin-inline-start\`, \`padding-inline-end\`, \`text-align: start\`). Браузер самостійно дзеркалить макет відповідно до атрибута \`dir="rtl"\` тега \`<html>\`. Це дозволило позбутися окремого файлу \`rtl.css\` та зменшити вагу бандла.

---

## Медіапайплайн WebP: Економія трафіку на 72%

Покупці постільної білизни оцінюють якість тканини за фотографіями високої роздільної здатності. Впровадження автоматичної конвертації у формат WebP зменшило вагу знімків з 2.4 МБ до 180-240 КБ, скоротивши час завантаження головного екрана (LCP) до менш ніж однієї секунди.

---

## Результати в продакшені

- **PageSpeed Score:** 92 / 100
- **LCP на мобільних:** 0.88с
- **CLS:** 0.000
- **Економія медіатрафіку:** 72% за рахунок WebP
- **Зростання конверсії оформлення замовлення:** +19.4% завдяки усуненню затримок на сторінці чекауту.
`,
    es: `## El reto técnico del comercio electrónico RTL

El desarrollo de tiendas online para idiomas con escritura de derecha a izquierda (RTL, como hebreo o árabe) suele acarrear duplicidad de código CSS y desajustes visuales si se recurre a hojas de estilo secundarias (\`rtl.css\`).

En la tienda de **Organic Bed** (Israel), implementamos una solución moderna basada en **propiedades lógicas de CSS**, donde el navegador invierte márgenes y alineaciones de forma nativa a través de \`margin-inline\` y \`text-align: start\`.

---

## Optimización WebP y conversión en el Checkout

- **Imágenes WebP de alta definición:** Reducción del 72% en el peso de las fotografías sin perder el detalle del tejido orgánico.
- **Checkout optimizado:** Eliminación de scripts innecesarios en la pasarela de pago para lograr una experiencia fluida.
- **Puntuación PageSpeed:** 92 / 100.
- **CLS:** 0.000.
- **Incremento en conversión:** +19.4% en compras finalizadas.
`,
    de: `## Die Komplexität von Right-to-Left (RTL) E-Commerce

Die Entwicklung einer E-Commerce-Plattform für Sprachregionen mit Schreibrichtung von rechts nach links (RTL, wie Hebräisch oder Arabisch) bringt besondere technische Herausforderungen mit sich. Traditionell pflegen Entwickler getrennte Stylesheets (z. B. \`style.css\` und \`rtl.css\`), in denen Außenabstände, Innenabstände und Floats manuell überschrieben werden. Dieser veraltete Workflow führt zu erheblichem Wartungsaufwand, Spezifitätskonflikten und kumulativen Layout-Verschiebungen (CLS).

Bei der Entwicklung des digitalen Flagship-Stores für **Organic Bed** (Israel) bestand unser Ziel darin, ein maßgeschneidertes WooCommerce-Erlebnis bereitzustellen, das sich auf Hebräisch nativ anfühlt, auf Mobilgeräten in unter einer Sekunde lädt und luxuriöse Bio-Bettwäschetexturen ohne Bandbreitenballast präsentiert.

---

## Moderne bidirektionale Architektur: CSS Logical Properties

Anstatt Override-Dateien zu schreiben, wurde das gesamte Theme mit **CSS Logical Properties** aufgebaut. Moderne Browser werten Richtungen dynamisch anhand des Attributs \`dir="rtl"\` auf dem \`<html>\`-Element aus:

\`\`\`css
/* Legacy manual override approach (fragile & bloat) */
.product-card { margin-left: 20px; float: left; text-align: left; }
html[dir="rtl"] .product-card { margin-left: 0; margin-right: 20px; float: right; text-align: right; }

/* Modern bidirectional logic (single clean rule) */
.product-card {
  margin-inline-start: 1.25rem;
  text-align: start;
}
\`\`\`

Erzielte Vorteile:
- **Kein dupliziertes CSS:** Das Theme liefert ein einziges, schlankes Stylesheet für sowohl LTR- als auch RTL-Richtungen aus.
- **Keine Spezifitäts-Hacks:** Keine \`!important\`-Überschreibungen nötig, um Core-WooCommerce-Stile auszuhebeln.
- **Fehlerfreie horizontale Swiper:** Produktkarussells kehren Wischphysik und Navigationspfeile automatisch basierend auf der Dokumentrichtung um.

---

## Hochauflösende Medienpipeline: 72% Bandbreitenersparnis

Käufer von Bettwäsche benötigen hochauflösende Fotografien, um Gewebestrukturen und Nähte zu beurteilen. Die Auslieferung unbearbeiteter JPEGs/PNGs verschlechterte den mobilen LCP auf über 3,4 Sekunden.

Wir haben eine automatisierte Medienpipeline eingeführt:
1. **Verlustbehaftete & verlustfreie WebP-Generierung:** Original-Kameraaufnahmen (durchschnittlich 2,4 MB) werden in das WebP-Format konvertiert, wodurch die Dateigrößen ohne erkennbaren Verlust der Textilstruktur auf **180 - 240 KB** sinken.
2. **Native responsive Bildgrößen:** Nutzung von HTML5 \`<picture>\` mit \`srcset\` und \`sizes\`, um exakte Pixelabmessungen passend für Mobil- und Desktop-Viewports auszuliefern.
3. **Fetch Priority:** Hochpriorisierte Hero-Bilder nutzen \`fetchpriority="high"\`, damit Browser-Download-Threads das Hauptmotiv sofort abrufen.

---

## Checkout-Optimierung & Core Web Vitals

Warenkorbabbrüche im E-Commerce sind häufig auf eine träge Checkout-Validierung zurückzuführen. Im Checkout von Organic Bed:
- Ungenutzte WooCommerce-Skripte (wie Passwort-Stärkeanzeigen und Cart-Fragmente) wurden auf nicht essenziellen Seiten bedingt deregistriert.
- Schnelle AJAX-Checkout-Trigger wurden optimiert, um vollständige Seiten-Rerenders zu verhindern.
- **CLS-Wert:** Durch explizite Seitenverhältnisse auf allen Produktkarten konstant bei **0.000** gehalten.
- **Mobile PageSpeed:** 92 / 100.
`,
  },
}
