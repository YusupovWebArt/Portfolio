import { Project } from '../project-types'

const buhlDe: Project = {
  id: 15500,
  title: 'Buhl WISO',
  deepDiveBlogSlug: 'buhl-wiso-fintech-wordpress-architecture-gdpr',
  description: 'Steuer Jetzt Geld zurückholen. Germany',
  descriptionUa: 'Повернення податків уже зараз. Німеччина',
  descriptionEs: 'Recupere su devolución de impuestos ahora. Alemania',
  descriptionDe: 'Steuer: Jetzt Geld zurückholen. Deutschland.',
  fullDescription:
    'A custom WordPress theme built from scratch using pure code - no page builder - for Buhl\'s WISO tax software product, targeting the German market. Custom CSS3 and JavaScript deliver a polished, conversion-focused landing experience that communicates the software\'s key tax-return benefits and drives product downloads, aligned with the Buhl brand identity.',
  fullDescriptionUa:
    'Кастомна тема WordPress, створена з нуля на чистому коді - без пейдж-білдерів - для податкового програмного забезпечення WISO від Buhl, орієнтованого на німецький ринок. Кастомні CSS3 та JavaScript забезпечують елегантний, орієнтований на конверсію посадковий екран, який передає ключові переваги ПЗ для повернення податків та стимулює завантаження продукту відповідно до айдентики бренду Buhl.',
  fullDescriptionEs:
    'Tema WordPress personalizada construida desde cero con código puro -sin constructor de páginas- para el software fiscal WISO de Buhl, orientado al mercado alemán. CSS3 y JavaScript personalizados ofrecen una experiencia de landing page pulida y centrada en la conversión que comunica las principales ventajas del software para la declaración de la renta e impulsa las descargas del producto, alineada con la identidad de marca de Buhl.',
  fullDescriptionDe:
    'Ein von Grund auf in reinem Code - ohne Page-Builder - entwickeltes Custom-WordPress-Theme für die Steuersoftware WISO von Buhl auf dem deutschen Markt. Maßgeschneidertes CSS3 und JavaScript sorgen für ein geschliffenes, konversionsorientiertes Landingpage-Erlebnis, das die wichtigsten Vorteile bei der Steuererklärung klar vermittelt, Produkt-Downloads steigert und exakt auf die Markenidentität von Buhl abgestimmt ist.',
  detailHeroLine: 'CUSTOM WORDPRESS · TAX SOFTWARE · GERMANY',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Theme', label: 'Pure PHP/CSS/JS', accent: 'darkGreen' },
    { value: 'German Market', label: 'Localized SEO', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
          { label: 'MySQL Database' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Nginx Server' },
          { label: 'Cloudflare CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'A fully custom PHP WordPress theme without any page builder provides complete control over the markup and performance of the tax software landing pages. MySQL stores all content and settings. Cloudflare CDN ensures fast delivery for German market visitors, while Nginx handles server-side caching for optimal performance.',
    descriptionUa:
      'Повністю кастомна PHP-тема WordPress без жодного конструктора сторінок забезпечує повний контроль над розміткою та продуктивністю лендінгів податкового ПЗ. MySQL зберігає весь контент і налаштування. Cloudflare CDN гарантує швидку доставку для відвідувачів із Німеччини, а Nginx відповідає за серверне кешування для оптимальної швидкодії.',
    descriptionEs:
      'Un tema PHP de WordPress totalmente personalizado y sin constructores de páginas ofrece control absoluto sobre el marcado y el rendimiento de las landing pages del software fiscal. MySQL almacena todo el contenido y la configuración. Cloudflare CDN asegura una entrega rápida para los visitantes del mercado alemán, mientras que Nginx gestiona la caché en el servidor.',
    descriptionDe:
      'Ein vollständig maßgeschneidertes PHP-WordPress-Theme ohne Page-Builder ermöglicht die volle Kontrolle über Markup und Performance der Landingpages für die Steuersoftware. MySQL speichert alle Inhalte und Einstellungen. Das Cloudflare CDN gewährleistet eine schnelle Auslieferung für Besucher in Deutschland, während Nginx das serverseitige Caching für optimale Ladezeiten übernimmt.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/buhl-de_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/buhl-de_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/buhl-de_thumb.webp',
      caption: 'Home page presenting WISO tax software with conversion-focused hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/buhl-de/buhl-de_slide2.webp',
      caption: 'Features and benefits section showcasing WISO tax return capabilities',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/buhl-de/buhl-de_slide3.webp',
      caption: 'Pricing and download CTA section for the German tax software product',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and well-organized tax software content' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive grid layout aligned to the Buhl brand identity' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product feature highlights and UI behaviors' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme with no page builder for full markup and performance control' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, landing page data, and settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all WISO product pages and content' },
      { short: 'Custom Theme', full: 'Fully hand-coded WordPress theme matching the Buhl brand design system' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery to German users and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic for the German market' },
      { short: 'Nginx', full: 'Nginx server with caching configuration for high-performance delivery' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for German market visitor behavior and conversion analysis' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'German-market SEO targeting tax software and Steuer keywords for local search' },
      { short: 'Schema.org Markup', full: 'JSON-LD SoftwareApplication schema for rich results in German Google Search' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization delivering green Core Web Vitals for the German audience' },
      { short: 'WebP Images', full: 'WebP format for product screenshots and graphics reducing page weight' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Кастомна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Maßgeschneidertes WordPress-Theme von Grund auf',
      description:
        'The entire theme was hand-coded in PHP without a page builder, delivering precise control over every element and ensuring the fastest possible page performance for German users.',
      descriptionUa:
        'Усю тему було написано вручну на PHP без конструктора сторінок, що забезпечило точний контроль над кожним елементом і максимально високу швидкість завантаження для німецьких користувачів.',
      descriptionEs:
        'Todo el tema fue programado a mano en PHP sin constructor de páginas, ofreciendo un control preciso sobre cada elemento y garantizando el máximo rendimiento para los usuarios alemanes.',
      descriptionDe:
        'Das gesamte Theme wurde ohne Page-Builder in PHP handcodiert, was präzise Kontrolle über jedes Element und schnellstmögliche Ladezeiten für Nutzer in Deutschland garantiert.',
    },
    {
      title: 'Conversion-Focused Landing Design',
      titleUa: 'Дизайн лендінгу, орієнтований на конверсію',
      titleEs: 'Diseño de landing page enfocado en la conversión',
      titleDe: 'Konversionsorientiertes Landingpage-Design',
      description:
        'The page layout is structured to guide visitors from software benefits to product download CTA, following proven conversion rate optimization patterns for software products.',
      descriptionUa:
        'Макет сторінки структурований так, щоб вести відвідувачів від переваг програми до заклику завантажити продукт, дотримуючись перевірених патернів оптимізації конверсії для ПЗ.',
      descriptionEs:
        'El diseño de la página está estructurado para guiar a los visitantes desde los beneficios del software hasta el CTA de descarga, siguiendo patrones probados de optimización de conversión.',
      descriptionDe:
        'Das Seitenlayout führt Besucher gezielt von den Produktvorteilen bis zum Download-CTA und folgt bewährten CRO-Mustern für Softwareprodukte.',
    },
    {
      title: 'German Market SEO',
      titleUa: 'SEO для німецького ринку',
      titleEs: 'SEO para el mercado alemán',
      titleDe: 'SEO für den deutschen Markt',
      description:
        'Localized SEO strategy with German-language meta tags and Schema.org SoftwareApplication markup targets tax-related keywords to drive organic traffic in the German market.',
      descriptionUa:
        'Локалізована SEO-стратегія з німецькомовними метатегами та розміткою Schema.org SoftwareApplication націлена на податкові ключові слова для залучення органічного трафіку в Німеччині.',
      descriptionEs:
        'La estrategia SEO localizada con metaetiquetas en alemán y marcado Schema.org SoftwareApplication apunta a palabras clave fiscales para atraer tráfico orgánico en el mercado alemán.',
      descriptionDe:
        'Eine lokalisierte SEO-Strategie mit deutschsprachigen Meta-Tags und Schema.org-SoftwareApplication-Markup zielt auf steuerbezogene Keywords ab, um organischen Traffic im deutschen Markt zu gewinnen.',
    },
    {
      title: 'Buhl Brand Alignment',
      titleUa: 'Відповідність бренду Buhl',
      titleEs: 'Alineación con la marca Buhl',
      titleDe: 'Markenkonformes Buhl-Design',
      description:
        'Custom CSS3 and JavaScript ensure the design is precisely aligned with Buhl\'s established brand identity, maintaining visual consistency across the product marketing site.',
      descriptionUa:
        'Кастомні CSS3 та JavaScript забезпечують точну відповідність дизайну усталеній айдентиці бренду Buhl, підтримуючи візуальну цілісність маркетингового сайту продукту.',
      descriptionEs:
        'CSS3 y JavaScript personalizados garantizan que el diseño esté perfectamente alineado con la identidad de marca de Buhl, manteniendo la coherencia visual en todo el sitio.',
      descriptionDe:
        'Individuelles CSS3 und JavaScript stellen sicher, dass das Design exakt auf die etablierte Markenidentität von Buhl abgestimmt ist und über den gesamten Produktauftritt hinweg visuelle Konsistenz wahrt.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      titleUa: 'Адаптивний дизайн та оптимізація продуктивності',
      titleEs: 'Diseño responsive y rendimiento optimizado',
      titleDe: 'Responsives Design & Performance-Optimierung',
      description:
        'Fully responsive design with WebP images and Cloudflare CDN ensures fast load times and a professional experience for German tax filers on all devices.',
      descriptionUa:
        'Повністю адаптивний дизайн із зображеннями WebP та Cloudflare CDN забезпечує швидке завантаження і професійний досвід для німецьких платників податків на всіх пристроях.',
      descriptionEs:
        'El diseño totalmente responsive con imágenes WebP y Cloudflare CDN garantiza tiempos de carga rápidos y una experiencia profesional para los contribuyentes alemanes en cualquier dispositivo.',
      descriptionDe:
        'Ein vollständig responsives Design mit WebP-Bildern und Cloudflare CDN sorgt auf allen Endgeräten für schnelle Ladezeiten und ein professionelles Nutzungserlebnis für Steuerzahler in Deutschland.',
    },
  ],
  challenges: [],
  challengesUa: [],
  challengesEs: [],
  challengesDe: [],
  solutions: [],
  solutionsUa: [],
  solutionsEs: [],
  solutionsDe: [],
  liveUrl: 'https://www.buhl.de/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default buhlDe
