import { Project } from '../project-types'

const sportpit24: Project = {
  id: 8900,
  title: 'Sportpit24',
  description:
    'Ukrainian online store specializing in high-quality sports nutrition and fitness supplements.',
  descriptionUa:
    'Український інтернет-магазин високоякісного спортивного харчування та добавок для фітнесу.',
  descriptionEs:
    'Tienda online ucraniana especializada en nutrición deportiva y suplementos de fitness de alta calidad.',
  descriptionDe:
    'Ukrainischer Online-Shop mit Spezialisierung auf hochwertige Sporternährung und Fitness-Supplements.',
  fullDescription:
    'A fully custom OpenCart-powered online store for Sportpit24, a Ukrainian sports nutrition retailer. The project involved custom theme development tailored to the brand, complete eCommerce configuration including product catalog management, multi-language support, payment gateway integration, and SEO optimization for improved organic search visibility.',
  fullDescriptionUa:
    'Кастомний інтернет-магазин на OpenCart для Sportpit24, українського ритейлера спортивного харчування. Проєкт включав розробку унікальної теми під бренд, повне налаштування eCommerce, включаючи управління каталогом товарів, багатомовність, інтеграцію платіжних систем та SEO-оптимізацію для підвищення видимості в органічному пошуку.',
  fullDescriptionEs:
    'Una tienda online completamente personalizada en OpenCart para Sportpit24, minorista ucraniano de nutrición deportiva. El proyecto incluyó el desarrollo de un tema personalizado adaptado a la marca, la configuración completa del eCommerce -incluyendo la gestión del catálogo de productos, soporte multilingüe, integración de pasarelas de pago- y la optimización SEO para mejorar la visibilidad en búsqueda orgánica.',
  fullDescriptionDe:
    'Ein vollständig maßgeschneiderter, auf OpenCart basierender Online-Shop für Sportpit24, einen ukrainischen Einzelhändler für Sporternährung. Das Projekt umfasste eine individuell auf die Marke abgestimmte Theme-Entwicklung, die vollständige E-Commerce-Konfiguration einschließlich Produktkatalogverwaltung, mehrsprachiger Unterstützung und Zahlungs-Gateway-Integration sowie eine SEO-Optimierung für bessere Sichtbarkeit in der organischen Suche.',
  detailHeroLine: 'OPENCART · ECOMMERCE · SPORTS NUTRITION',
  detailMetrics: [
    { value: 'OpenCart', label: 'CMS Platform', accent: 'green' },
    { value: 'eCommerce', label: 'Full Shop', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'OpenCart Core' },
          { label: 'Custom Theme', highlight: true },
          { label: 'Extensions' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'PHP Engine', highlight: true },
          { label: 'Web Server' },
        ],
      },
    ],
    description:
      'The store is built on OpenCart with a fully custom PHP theme providing brand-aligned UI and shopping experience. OpenCart\'s core eCommerce engine handles catalog, cart, and checkout, with MySQL storing all product and order data served through PHP on a cPanel hosting environment.',
    descriptionUa:
      'Магазин побудовано на OpenCart із повністю кастомною PHP-темою, що забезпечує брендований інтерфейс і зручний досвід покупок. Ядро eCommerce OpenCart відповідає за каталог, кошик та оформлення замовлення, а MySQL зберігає всі дані про товари та замовлення на cPanel-хостингу.',
    descriptionEs:
      'La tienda está construida sobre OpenCart con un tema PHP completamente personalizado que ofrece una interfaz y experiencia de compra alineadas con la marca. El motor eCommerce de OpenCart gestiona el catálogo, el carrito y el pago, mientras MySQL almacena todos los datos de productos y pedidos servidos mediante PHP en un entorno de alojamiento cPanel.',
    descriptionDe:
      'Der Shop basiert auf OpenCart mit einem vollständig maßgeschneiderten PHP-Theme, das eine markengerechte Benutzeroberfläche und ein optimales Einkaufserlebnis bietet. Die E-Commerce-Engine von OpenCart verwaltet Katalog, Warenkorb und Checkout, während MySQL alle Produkt- und Bestelldaten speichert, die über PHP in einer cPanel-Hosting-Umgebung bereitgestellt werden.',
  },
  image: '/Portfolio/images/portfolio/thumbs/other-cms/sportpit24_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/other-cms/sportpit24_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/sportpit24_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/sportpit24/sportpit24_slide2.webp',
      caption: 'Sports nutrition product catalog with category filters and pricing',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/sportpit24/sportpit24_slide3.webp',
      caption: 'Product detail page with supplement description and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all store page templates' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the sports nutrition brand aesthetic and responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript powering interactive UI elements, filters, and cart updates' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP driving OpenCart CMS server-side rendering, routing, and eCommerce logic' },
      { short: 'MySQL', full: 'MySQL storing all product catalog, order, customer, and configuration data' },
    ],
    contentManagement: [
      { short: 'OpenCart', full: 'OpenCart eCommerce platform managing the full product catalog and shop configuration' },
      { short: 'Custom Template Development', full: 'Fully custom OpenCart PHP theme tailored to the Sportpit24 brand identity' },
      { short: 'Product Management', full: 'Complete product catalog populated with sports nutrition items, pricing, and images' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed hosting environment running the OpenCart application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer data and payment transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking eCommerce events, product views, and conversion funnels' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'SEO-friendly URLs, metadata, and clean HTML structure configured for search visibility' },
      { short: 'Schema.org Markup', full: 'Product structured data enabling rich results in Google Shopping and search' },
    ],
  },
  features: [
    {
      title: 'Custom OpenCart Theme Development',
      titleUa: 'Розробка кастомної теми OpenCart',
      titleEs: 'Desarrollo de tema personalizado en OpenCart',
      titleDe: 'Individuelle OpenCart-Theme-Entwicklung',
      description:
        'A fully custom OpenCart PHP theme was developed to reflect the Sportpit24 brand, providing a distinctive shopping experience with tailored layouts and UI components.',
      descriptionUa:
        'Розроблено повністю кастомну PHP-тему OpenCart, що відображає бренд Sportpit24 і забезпечує унікальний досвід покупок із індивідуальними макетами та UI-компонентами.',
      descriptionEs:
        'Se desarrolló un tema PHP de OpenCart completamente personalizado para reflejar la marca Sportpit24, ofreciendo una experiencia de compra distintiva con diseños y componentes de interfaz a medida.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes OpenCart-PHP-Theme wurde entwickelt, um die Marke Sportpit24 widerzuspiegeln und ein unverwechselbares Einkaufserlebnis mit individuellen Layouts und UI-Komponenten zu bieten.',
    },
    {
      title: 'Full eCommerce Product Catalog',
      titleUa: 'Повний eCommerce-каталог товарів',
      titleEs: 'Catálogo completo de productos eCommerce',
      titleDe: 'Vollständiger E-Commerce-Produktkatalog',
      description:
        'The complete sports nutrition product range was configured with categories, descriptions, pricing, images, and inventory management through the OpenCart admin panel.',
      descriptionUa:
        'Повний асортимент спортивного харчування налаштовано з категоріями, описами, цінами, зображеннями та управлінням запасами через адмін-панель OpenCart.',
      descriptionEs:
        'La gama completa de productos de nutrición deportiva se configuró con categorías, descripciones, precios, imágenes y gestión de inventario a través del panel de administración de OpenCart.',
      descriptionDe:
        'Das gesamte Sortiment an Sporternährung wurde mit Kategorien, Beschreibungen, Preisen, Bildern und Bestandsverwaltung über das OpenCart-Admin-Panel konfiguriert.',
    },
    {
      title: 'Multi-language & Payment Integration',
      titleUa: 'Багатомовність та інтеграція оплати',
      titleEs: 'Soporte multilingüe e integración de pagos',
      titleDe: 'Mehrsprachigkeit und Zahlungsintegration',
      description:
        'OpenCart\'s native multi-language support was configured for Ukrainian and Russian markets, paired with secure payment gateway integrations for seamless checkout.',
      descriptionUa:
        'Налаштовано нативну багатомовну підтримку OpenCart для українського ринку разом із інтеграцією безпечних платіжних шлюзів для зручного оформлення замовлення.',
      descriptionEs:
        'Se configuró el soporte multilingüe nativo de OpenCart junto con integraciones de pasarelas de pago seguras para ofrecer un proceso de compra fluido.',
      descriptionDe:
        'Die native mehrsprachige Unterstützung von OpenCart wurde für den lokalen Markt konfiguriert und mit sicheren Zahlungs-Gateways für einen reibungslosen Checkout kombiniert.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'SEO-friendly URL structures, meta tag configuration, clean HTML, and fast loading speeds were implemented to improve organic search rankings for supplement keywords.',
      descriptionUa:
        'Впроваджено SEO-дружні URL-структури, налаштування мета-тегів, чистий HTML та високу швидкість завантаження для покращення позицій в органічному пошуку за ключовими запитами.',
      descriptionEs:
        'Se implementaron estructuras de URL amigables para SEO, configuración de metaetiquetas, HTML limpio y velocidades de carga rápidas para mejorar el posicionamiento orgánico en búsquedas de suplementos.',
      descriptionDe:
        'SEO-freundliche URL-Strukturen, Meta-Tag-Konfiguration, sauberer HTML-Code und schnelle Ladezeiten wurden implementiert, um das organische Suchranking für Supplement-Keywords zu verbessern.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The custom theme delivers a fully responsive shopping experience, ensuring product browsing and checkout work smoothly on mobile, tablet, and desktop devices.',
      descriptionUa:
        'Кастомна тема забезпечує повністю адаптивний досвід покупок, гарантуючи плавний перегляд товарів та оформлення замовлення на смартфонах, планшетах і десктопах.',
      descriptionEs:
        'El tema personalizado ofrece una experiencia de compra totalmente responsiva, garantizando que la navegación de productos y el pago funcionen sin problemas en móviles, tabletas y ordenadores.',
      descriptionDe:
        'Das maßgeschneiderte Theme bietet ein vollständig responsives Einkaufserlebnis und stellt sicher, dass Produktnavigation und Checkout auf Smartphones, Tablets und Desktop-Geräten reibungslos funktionieren.',
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
  liveUrl: 'https://sportpit24.com.ua/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default sportpit24
