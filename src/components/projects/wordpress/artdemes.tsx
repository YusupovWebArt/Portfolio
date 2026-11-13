import { Project } from '../project-types'

const artDemes: Project = {
  id: 10890,
  title: 'Artdemes',
  description: 'Artesania creativa. Spain store.',
  descriptionUa: 'Креативний ремісничий магазин в Іспанії.',
  descriptionEs: 'Tienda de artesanía creativa en España.',
  descriptionDe: 'Kreatives Kunsthandwerk. Online-Shop in Spanien.',
  fullDescription:
    'A custom WooCommerce store built on a hand-coded WordPress theme using Elementor, extended with custom CSS3 and JavaScript for a creative artisan aesthetic. The project included full product catalog setup with crafted content and category management, serving the Spanish handmade goods market with a visually rich and SEO-optimized shopping experience.',
  fullDescriptionUa:
    'Кастомний магазин WooCommerce, побудований на написаній вручну темі WordPress з використанням Elementor, розширений кастомними CSS3 та JavaScript для створення ремісничої естетики. Проєкт включав повне налаштування каталогу товарів із якісним контентом та управлінням категоріями, надаючи іспанському ринку хендмейд-товарів візуально багатий та SEO-оптимізований онлайн-шопінг.',
  fullDescriptionEs:
    'Tienda WooCommerce personalizada construida sobre un tema WordPress codificado a mano con Elementor, enriquecida con CSS3 y JavaScript personalizados para lograr una estética artesanal única. El proyecto incluyó la configuración completa del catálogo de productos con contenido cuidado y gestión de categorías, ofreciendo al mercado español de productos artesanales una experiencia de compra visualmente rica y optimizada para SEO.',
  fullDescriptionDe:
    'Ein maßgeschneiderter WooCommerce-Shop auf Basis eines handcodierten WordPress-Themes mit Elementor, erweitert durch individuelles CSS3 und JavaScript für eine kreative Kunsthandwerksästhetik. Das Projekt umfasste den vollständigen Aufbau des Produktkatalogs mit sorgfältig aufbereiteten Inhalten und Kategorieverwaltung und bietet dem spanischen Markt für handgefertigte Produkte ein visuell ansprechendes und SEO-optimiertes Einkaufserlebnis.',
  detailHeroLine: 'CUSTOM WORDPRESS · ARTISAN E-COMMERCE · SPAIN',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'Elementor', label: 'Page Builder', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'WooCommerce + Custom Theme', highlight: true },
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
      'WordPress with WooCommerce handles the full e-commerce layer including product management, cart, checkout, and payment gateways. Elementor provides the client-editable page structure, enriched with custom CSS3 and JavaScript for advanced styling and animations. Cloudflare CDN ensures fast delivery of product imagery across Spain.',
    descriptionUa:
      'WordPress із WooCommerce відповідає за весь рівень e-commerce, включаючи управління товарами, кошик, оформлення замовлення та платіжні шлюзи. Elementor забезпечує зручну для редагування клієнтом структуру сторінок, доповнену кастомними CSS3 та JavaScript для розширеної стилізації й анімацій. Cloudflare CDN гарантує швидку доставку зображень товарів по всій Іспанії.',
    descriptionEs:
      'WordPress con WooCommerce gestiona toda la capa de comercio electrónico, incluyendo administración de productos, carrito, pago y pasarelas de pago. Elementor proporciona la estructura de páginas editable por el cliente, enriquecida con CSS3 y JavaScript personalizados para estilos avanzados y animaciones. Cloudflare CDN asegura la entrega rápida de imágenes de productos en toda España.',
    descriptionDe:
      'WordPress mit WooCommerce übernimmt die gesamte E-Commerce-Schicht einschließlich Produktverwaltung, Warenkorb, Checkout und Zahlungs-Gateways. Elementor stellt die vom Kunden bearbeitbare Seitenstruktur bereit, ergänzt durch individuelles CSS3 und JavaScript für erweitertes Styling und Animationen. Das Cloudflare CDN sorgt für eine schnelle Auslieferung der Produktbilder in ganz Spanien.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/artdemes_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/artdemes_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/artdemes_thumb.webp',
      caption: 'Home page showcasing the artisan store\'s creative brand and featured products',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/artdemes/artdemes_slide2.webp',
      caption: 'WooCommerce product catalog with artisan goods organized by category',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/artdemes/artdemes_slide3.webp',
      caption: 'Individual product detail page with description, images, and add-to-cart',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/artdemes/artdemes_slide4.webp',
      caption: 'Category browsing page with filtered artisan product listings',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and well-structured store pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the artisan aesthetic and advanced product grid animations' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product filtering and dynamic cart behavior' },
      { short: 'Elementor', full: 'Elementor page builder for flexible layout management per client requirement' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WooCommerce and WordPress with store-specific logic' },
      { short: 'MySQL', full: 'MySQL database for product catalog, orders, customer data, and categories' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content and e-commerce management foundation' },
      { short: 'WooCommerce', full: 'WooCommerce powering product management, checkout, and payment processing' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of product images and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure customer checkout and payment transactions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WooCommerce store performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 e-commerce tracking for product views, cart events, and purchases' },
      { short: 'Google Maps API', full: 'Google Maps API for studio and pickup location display' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Product and category page SEO targeting Spanish artisan market search terms' },
      { short: 'Schema.org Markup', full: 'JSON-LD Product schema for rich price and availability snippets in Google' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Store performance tuned for green Core Web Vitals to reduce cart abandonment' },
      { short: 'WebP Images', full: 'WebP format for all product photography ensuring fast page loads' },
    ],
  },
  features: [
    {
      title: 'WooCommerce E-Commerce Integration',
      titleUa: 'Інтеграція електронної комерції WooCommerce',
      titleEs: 'Integración de comercio electrónico WooCommerce',
      titleDe: 'WooCommerce-E-Commerce-Integration',
      description:
        'Full WooCommerce setup including product catalog, category management, secure checkout, and payment gateway integration - providing a complete online shopping experience for artisan goods.',
      descriptionUa:
        'Повне налаштування WooCommerce, включаючи каталог товарів, управління категоріями, безпечне оформлення замовлення та інтеграцію платіжних шлюзів - забезпечуючи повноцінний онлайн-шопінг ремісничих виробів.',
      descriptionEs:
        'Configuración completa de WooCommerce que incluye catálogo de productos, gestión de categorías, pago seguro e integración de pasarelas de pago, ofreciendo una experiencia de compra online integral para artículos artesanales.',
      descriptionDe:
        'Vollständige WooCommerce-Einrichtung mit Produktkatalog, Kategorieverwaltung, sicherem Checkout und Integration von Zahlungs-Gateways - für ein rundum gelungenes Online-Shopping-Erlebnis für Kunsthandwerk.',
    },
    {
      title: 'Elementor Enhanced with Custom Code',
      titleUa: 'Elementor, розширений кастомним кодом',
      titleEs: 'Elementor potenciado con código personalizado',
      titleDe: 'Elementor erweitert durch individuellen Code',
      description:
        'Elementor was used per the client\'s requirement and enriched with custom CSS3 and JavaScript, delivering advanced animations and precise styling unique to the Artdemes brand.',
      descriptionUa:
        'Elementor було використано за вимогою клієнта та доповнено кастомними CSS3 і JavaScript, що забезпечило складні анімації та точну стилізацію, унікальну для бренду Artdemes.',
      descriptionEs:
        'Se utilizó Elementor según el requisito del cliente y se enriqueció con CSS3 y JavaScript personalizados, logrando animaciones avanzadas y un estilo preciso exclusivo de la marca Artdemes.',
      descriptionDe:
        'Elementor wurde auf Kundenwunsch eingesetzt und mit individuellem CSS3 sowie JavaScript angereichert, um anspruchsvolle Animationen und ein präzises, auf die Marke Artdemes zugeschnittenes Styling zu realisieren.',
    },
    {
      title: 'Product Catalog & Content Setup',
      titleUa: 'Налаштування каталогу товарів і контенту',
      titleEs: 'Configuración de catálogo de productos y contenido',
      titleDe: 'Einrichtung von Produktkatalog & Inhalten',
      description:
        'Complete product content was created and organized into logical categories, including descriptions, images, and pricing, ready for the Spanish artisan market launch.',
      descriptionUa:
        'Повний контент товарів було створено та організовано в логічні категорії, включаючи описи, зображення та ціни, готовий до запуску на іспанському ринку ремісничих виробів.',
      descriptionEs:
        'Se creó y organizó todo el contenido de productos en categorías lógicas, incluyendo descripciones, imágenes y precios, listo para su lanzamiento en el mercado artesanal español.',
      descriptionDe:
        'Sämtliche Produktinhalte wurden erstellt und inklusive Beschreibungen, Bildern und Preisen in logische Kategorien gegliedert - startklar für den spanischen Kunsthandwerksmarkt.',
    },
    {
      title: 'SEO & Schema.org for Products',
      titleUa: 'SEO та Schema.org для товарів',
      titleEs: 'SEO y Schema.org para productos',
      titleDe: 'SEO & Schema.org für Produkte',
      description:
        'Product pages feature JSON-LD Schema markup and optimized meta tags, driving rich search snippets with price and availability information in Spanish and international search results.',
      descriptionUa:
        'Сторінки товарів містять розмітку JSON-LD Schema та оптимізовані метатеги, формуючи розширені сніпети з ціною та наявністю в іспанській і міжнародній пошуковій видачі.',
      descriptionEs:
        'Las páginas de productos incluyen marcado Schema JSON-LD y metaetiquetas optimizadas, generando fragmentos enriquecidos con información de precio y disponibilidad en buscadores españoles e internacionales.',
      descriptionDe:
        'Die Produktseiten verfügen über JSON-LD-Schema-Markup und optimierte Meta-Tags, die Rich Snippets mit Preis- und Verfügbarkeitsangaben in spanischen und internationalen Suchergebnissen erzeugen.',
    },
    {
      title: 'Responsive Shopping Experience',
      titleUa: 'Адаптивний досвід покупок',
      titleEs: 'Experiencia de compra responsive',
      titleDe: 'Responsives Einkaufserlebnis',
      description:
        'The store is fully responsive across desktop, tablet, and mobile, ensuring artisan shoppers can browse and purchase from any device with a seamless checkout flow.',
      descriptionUa:
        'Магазин повністю адаптивний для десктопів, планшетів та смартфонів, дозволяючи покупцям переглядати товари та оформлювати замовлення з будь-якого пристрою.',
      descriptionEs:
        'La tienda es totalmente responsive en ordenador, tableta y móvil, garantizando que los compradores puedan navegar y adquirir productos desde cualquier dispositivo con un proceso de pago fluido.',
      descriptionDe:
        'Der Shop ist auf Desktop, Tablet und Smartphone vollständig responsiv, sodass Kunden von jedem Gerät aus stöbern und über einen reibungslosen Checkout einkaufen können.',
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
  liveUrl: 'https://artdemes.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default artDemes
