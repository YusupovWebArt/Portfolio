import { Project } from '../project-types'

const artezioeu: Project = {
  id: 6950,
  title: 'Artezioeu',
  description: 'Spain-based painting by numbers store.',
  descriptionUa: 'Іспанський інтернет-магазин картин за номерами.',
  descriptionEs: 'Tienda española de kits de pintura por números.',
  descriptionDe: 'Spanischer Online-Shop für Malen-nach-Zahlen-Sets.',
  fullDescription:
    'Artezioeu is a Spain-based Shopify e-commerce store specializing in painting-by-numbers kits. The store was built with a fully customized Shopify theme using Liquid templating, with all products, content pages, and app integrations configured for a smooth customer experience.',
  fullDescriptionUa:
    'Artezioeu - це іспанський інтернет-магазин на базі Shopify, що спеціалізується на наборах картин за номерами. Магазин створено з використанням повністю кастомної теми Shopify на шаблонізаторі Liquid, а всі товари, контентні сторінки та інтеграції додатків налаштовано для забезпечення зручної взаємодії з клієнтами.',
  fullDescriptionEs:
    'Artezioeu es una tienda de comercio electrónico en Shopify con sede en España, especializada en kits de pintura por números. La tienda fue desarrollada con un tema Shopify completamente personalizado mediante plantillas Liquid, con todos los productos, páginas de contenido e integraciones de aplicaciones configuradas para ofrecer una experiencia de compra fluida.',
  fullDescriptionDe:
    'Artezioeu ist ein in Spanien ansässiger Shopify-Online-Shop, der auf Malen-nach-Zahlen-Sets spezialisiert ist. Der Shop wurde mit einem vollständig angepassten Shopify-Theme auf Basis von Liquid-Templates erstellt, wobei sämtliche Produkte, Inhaltsseiten und App-Integrationen für ein reibungsloses Einkaufserlebnis konfiguriert wurden.',
  detailHeroLine: 'SHOPIFY · E-COMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'Multi-currency', label: 'Payments', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'STORE ENGINE',
        steps: [
          { label: 'Shopify Liquid' },
          { label: 'Theme Customization', highlight: true },
          { label: 'App Integration' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Shopify CDN' },
          { label: 'SSL/TLS', highlight: true },
          { label: 'Customer Checkout' },
        ],
      },
    ],
    description:
      'The store runs on Shopify\'s fully managed infrastructure, with a customized Liquid theme driving the storefront. Products and collections are managed through the Shopify Admin, while third-party apps extend functionality. Content is delivered globally via Shopify\'s built-in CDN with SSL-secured checkout.',
    descriptionUa:
      'Магазин працює на керованій інфраструктурі Shopify із кастомною темою Liquid, що формує вітрину. Товари та колекції адмініструються через Shopify Admin, а сторонні додатки розширюють функціональність. Контент доставляється глобально через вбудований CDN Shopify із захищеним SSL-чекаутом.',
    descriptionEs:
      'La tienda funciona sobre la infraestructura gestionada de Shopify, con un tema Liquid personalizado que impulsa el escaparate digital. Los productos y colecciones se administran desde Shopify Admin, mientras las aplicaciones de terceros amplían la funcionalidad. El contenido se entrega globalmente mediante el CDN integrado con pago protegido por SSL.',
    descriptionDe:
      'Der Shop läuft auf der vollständig verwalteten Infrastruktur von Shopify, wobei ein angepasstes Liquid-Theme die Storefront steuert. Produkte und Kollektionen werden über den Shopify-Admin gepflegt, während Drittanbieter-Apps den Funktionsumfang erweitern. Die Auslieferung erfolgt global über das integrierte Shopify-CDN mit SSL-gesichertem Checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/artezioeu_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/shopify/artezioeu_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/artezioeu_thumb.webp',
      caption: 'Homepage of the Artezioeu painting-by-numbers Shopify store',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/artezioeu/artezioeu_slide2.webp',
      caption: 'Product collection page showcasing painting kits',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/artezioeu/artezioeu_slide3.webp',
      caption: 'Individual product page with detailed description and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating engine used to build and customize the Shopify storefront' },
      { short: 'CSS3', full: 'Custom CSS3 styling for brand-aligned visual design and responsive layouts' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for interactive UI elements and dynamic cart behaviour' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin dashboard for managing products, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor and Liquid code customization to match brand identity' },
      { short: 'App Integration', full: 'Shopify App Store integrations for email marketing, reviews, and upselling' },
      { short: 'Product Management', full: 'Full product catalogue setup with variants, pricing, and inventory tracking' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed cloud hosting with 99.99% uptime and global redundancy' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption on all store pages and checkout flows' },
      { short: 'CDN', full: 'Shopify CDN for fast global asset delivery and reduced page load times' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Built-in Shopify Analytics for tracking sales, traffic, and customer behaviour' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'On-page SEO configuration including meta titles, descriptions, and URL structure' },
      { short: 'Meta Tags Optimization', full: 'Optimized meta tags across all product and collection pages for search visibility' },
    ],
  },
  features: [
    {
      title: 'Custom Shopify Theme',
      titleUa: 'Кастомна тема Shopify',
      titleEs: 'Tema personalizado de Shopify',
      titleDe: 'Individuelles Shopify-Theme',
      description: 'The storefront was built using a fully customized Shopify Liquid theme, tailored to reflect the Artezioeu brand with cohesive colours, typography, and layout across all pages.',
      descriptionUa: 'Вітрину створено на базі повністю кастомної теми Shopify Liquid, адаптованої під бренд Artezioeu зі гармонійними кольорами, типографікою та версткою на всіх сторінках.',
      descriptionEs: 'El escaparate digital se desarrolló utilizando un tema Shopify Liquid completamente personalizado, adaptado para reflejar la marca Artezioeu con colores, tipografía y diseño coherentes en todas las páginas.',
      descriptionDe: 'Die Storefront wurde mit einem vollständig angepassten Shopify-Liquid-Theme umgesetzt, das die Marke Artezioeu durch stimmige Farben, Typografie und Layouts auf allen Seiten widerspiegelt.',
    },
    {
      title: 'Product Catalogue & Management',
      titleUa: 'Каталог товарів та управління',
      titleEs: 'Catálogo y gestión de productos',
      titleDe: 'Produktkatalog und Verwaltung',
      description: 'All painting-by-numbers kits were set up with detailed titles, descriptions, high-quality images, variant options, pricing, and inventory tracking via the Shopify Admin dashboard.',
      descriptionUa: 'Усі набори картин за номерами налаштовано з детальними назвами, описами, якісними зображеннями, варіантами, цінами та обліком запасів через панель Shopify Admin.',
      descriptionEs: 'Todos los kits de pintura por números se configuraron con títulos detallados, descripciones, imágenes de alta calidad, opciones de variantes, precios y control de inventario mediante el panel Shopify Admin.',
      descriptionDe: 'Alle Malen-nach-Zahlen-Sets wurden mit detaillierten Titeln, Beschreibungen, hochauflösenden Bildern, Variantenoptionen, Preisen und Bestandsverfolgung über das Shopify-Admin-Dashboard eingerichtet.',
    },
    {
      title: 'App Integrations',
      titleUa: 'Інтеграція додатків',
      titleEs: 'Integración de aplicaciones',
      titleDe: 'App-Integrationen',
      description: 'Third-party Shopify apps were integrated to extend store functionality, including email marketing automation, customer review collection, and upsell/cross-sell prompts.',
      descriptionUa: 'Інтегровано сторонні додатки Shopify для розширення функціональності магазину, включаючи автоматизацію email-маркетингу, збір відгуків клієнтів та upsell/cross-sell пропозиції.',
      descriptionEs: 'Se integraron aplicaciones de terceros de Shopify para ampliar la funcionalidad de la tienda, incluyendo automatización de email marketing, recopilación de reseñas y sugerencias de venta cruzada.',
      descriptionDe: 'Drittanbieter-Apps für Shopify wurden integriert, um die Shop-Funktionen zu erweitern - darunter E-Mail-Marketing-Automatisierung, Kundenbewertungen sowie Upselling- und Cross-Selling-Impulse.',
    },
    {
      title: 'SEO & Content Pages',
      titleUa: 'SEO та контентні сторінки',
      titleEs: 'SEO y páginas de contenido',
      titleDe: 'SEO und Inhaltsseiten',
      description: 'Custom static pages (About, FAQ, Shipping Policy) and SEO-optimized meta tags were configured to improve search engine visibility and reduce customer support inquiries.',
      descriptionUa: 'Налаштовано статичні сторінки (Про нас, FAQ, Доставка) та SEO-оптимізовані мета-теги для підвищення видимості в пошукових системах і зменшення звернень до підтримки.',
      descriptionEs: 'Se configuraron páginas estáticas personalizadas (Sobre nosotros, FAQ, Política de envíos) y metaetiquetas optimizadas para SEO con el fin de mejorar la visibilidad en buscadores y reducir consultas de soporte.',
      descriptionDe: 'Individuelle statische Seiten (Über uns, FAQ, Versandrichtlinien) und SEO-optimierte Meta-Tags wurden eingerichtet, um die Sichtbarkeit in Suchmaschinen zu erhöhen und Supportanfragen zu reduzieren.',
    },
    {
      title: 'Secure Checkout & Payments',
      titleUa: 'Безпечний чекаут та оплата',
      titleEs: 'Pago y checkout seguros',
      titleDe: 'Sicherer Checkout und Zahlungen',
      description: 'Shopify\'s built-in payment gateway with SSL encryption ensures a secure and seamless checkout experience for customers across Spain and Europe.',
      descriptionUa: 'Вбудований платіжний шлюз Shopify із SSL-шифруванням забезпечує безпечне та зручне оформлення замовлення для клієнтів в Іспанії та Європі.',
      descriptionEs: 'La pasarela de pago integrada de Shopify con cifrado SSL garantiza una experiencia de compra segura y fluida para los clientes en España y toda Europa.',
      descriptionDe: 'Das integrierte Zahlungs-Gateway von Shopify mit SSL-Verschlüsselung gewährleistet ein sicheres und reibungsloses Checkout-Erlebnis für Kunden in Spanien und ganz Europa.',
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
  liveUrl: 'https://www.artezio.es/',
  githubUrl: '#',
  category: ['shopify'],
}

export default artezioeu
