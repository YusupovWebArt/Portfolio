import { Project } from '../project-types'

const lunaMebel: Project = {
  id: 10880,
  title: 'Lunamebel',
  description: 'Ukrainian online furniture store.',
  descriptionUa: 'Український інтернет-магазин меблів.',
  descriptionEs: 'Tienda de muebles en línea ucraniana.',
  descriptionDe: 'Ukrainischer Online-Möbelshop.',
  fullDescription:
    'Lunamebel is a Ukrainian online furniture store built on WordPress with WooCommerce, featuring a fully customized premium theme, a complete product catalogue, and secure checkout. The project included adding all product data and content, with SEO optimization and Google Maps integration to drive local traffic.',
  fullDescriptionUa:
    'Lunamebel - це український інтернет-магазин меблів, розроблений на WordPress із використанням WooCommerce, який має повністю кастомізовану преміум-тему, повний каталог товарів та безпечне оформлення замовлення. Проєкт включав наповнення сайту всіма даними про товари та контентом, SEO-оптимізацію та інтеграцію з Google Maps API для залучення локального трафіку.',
  fullDescriptionEs:
    'Lunamebel es una tienda de muebles en línea ucraniana desarrollada en WordPress con WooCommerce, con un tema premium completamente personalizado, un catálogo de productos completo y un proceso de pago seguro. El proyecto incluyó la carga de todos los datos de productos y contenido, optimización SEO e integración con Google Maps API para atraer tráfico local.',
  fullDescriptionDe:
    'Lunamebel ist ein ukrainischer Online-Möbelshop auf Basis von WordPress und WooCommerce mit einem vollständig angepassten Premium-Theme, einem umfassenden Produktkatalog und einem sicheren Checkout-Prozess. Das Projekt umfasste die Einpflege sämtlicher Produktdaten und Inhalte sowie SEO-Optimierung und eine Google-Maps-Integration zur Steigerung des lokalen Traffics.',
  detailHeroLine: 'CUSTOM WORDPRESS · WOOCOMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'UA Market', label: 'Target Audience', accent: 'neutral' },
    { value: 'Full Catalogue', label: 'Product Setup', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'STORE LAYER',
        steps: [
          { label: 'Premium WP Theme' },
          { label: 'WooCommerce', highlight: true },
          { label: 'PHP 8+ Backend' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx + SSL', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'The store runs on WordPress with WooCommerce handling the complete e-commerce layer including product management, cart, and payment gateways. A premium theme was customized with CSS3 and JavaScript for brand-specific styling, while Cloudflare CDN ensures fast delivery to Ukrainian customers.',
    descriptionDe:
      'Der Shop läuft auf WordPress, wobei WooCommerce die gesamte E-Commerce-Ebene einschließlich Produktverwaltung, Warenkorb und Zahlungs-Gateways abwickelt. Ein Premium-Theme wurde mit CSS3 und JavaScript für ein markenspezifisches Design angepasst, während Cloudflare CDN eine schnelle Auslieferung an ukrainische Kunden gewährleistet.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/lunamebel_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/lunamebel_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/lunamebel_thumb.webp',
      caption: 'Home page with featured furniture collections and hero banner',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/lunamebel/lunamebel_slide2.webp',
      caption: 'Product catalogue page with WooCommerce category listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/lunamebel/lunamebel_slide3.webp',
      caption: 'Individual product detail page with description and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and SEO-friendly store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with Grid and Flexbox for responsive product layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product carousels and UI elements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side logic' },
      { short: 'MySQL', full: 'MySQL database storing product data, orders, and customer information' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the foundation for store management and content' },
      { short: 'WooCommerce', full: 'WooCommerce e-commerce plugin for product listings, cart, and checkout' },
      { short: 'Premium WP Theme', full: 'Premium WordPress theme customized to match the furniture brand aesthetic' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast content delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer data and transactions' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedded to show the store\'s physical location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking e-commerce events, sessions, and conversion funnels' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'On-page SEO with optimized product meta tags and category structure' },
      { short: 'Schema.org Markup', full: 'Product structured data for rich search results and price display' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP product images for faster page loads and better user experience' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for promotions and customer retention' },
    ],
  },
  features: [
    {
      title: 'Premium WordPress Theme Customization',
      titleDe: 'Anpassung eines Premium-WordPress-Themes',
      description:
        'A premium WordPress theme was customized using CSS3 and JavaScript to reflect the Lunamebel brand aesthetic and provide an engaging shopping experience.',
      descriptionDe:
        'Ein Premium-WordPress-Theme wurde mit CSS3 und JavaScript individuell angepasst, um die Markenästhetik von Lunamebel widerzuspiegeln und ein ansprechendes Einkaufserlebnis zu bieten.',
    },
    {
      title: 'WooCommerce Integration',
      titleDe: 'WooCommerce-Integration',
      description:
        'WooCommerce was fully integrated to power the online store, including product catalogue management, shopping cart, secure checkout, and payment gateway support.',
      descriptionDe:
        'WooCommerce wurde vollständig integriert, um den Online-Shop inklusive Produktkatalogverwaltung, Warenkorb, sicherem Checkout und Zahlungs-Gateways zu betreiben.',
    },
    {
      title: 'Full Product Catalogue Setup',
      titleDe: 'Vollständige Einrichtung des Produktkatalogs',
      description:
        'All furniture products were added to the store with detailed descriptions, categorization, pricing, and high-quality images to maximize conversion rates.',
      descriptionDe:
        'Sämtliche Möbelprodukte wurden mit detaillierten Beschreibungen, Kategorisierungen, Preisen und hochwertigen Bildern eingepflegt, um die Conversion-Raten zu maximieren.',
    },
    {
      title: 'Responsive Design',
      titleDe: 'Responsives Design',
      description:
        'The store is fully optimized for all screen sizes, ensuring a seamless shopping experience on desktops, tablets, and mobile devices.',
      descriptionDe:
        'Der Shop ist für alle Bildschirmgrößen vollständig optimiert und bietet ein nahtloses Einkaufserlebnis auf Desktops, Tablets und Mobilgeräten.',
    },
    {
      title: 'SEO Optimization',
      titleDe: 'SEO-Optimierung',
      description:
        'Implemented technical SEO with product-specific Schema.org markup, optimized meta tags, and fast load times to improve search visibility in the Ukrainian market.',
      descriptionDe:
        'Technisches SEO mit produktspezifischem Schema.org-Markup, optimierten Meta-Tags und schnellen Ladezeiten zur Verbesserung der Sichtbarkeit auf dem ukrainischen Markt.',
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
  liveUrl: 'https://lunamebel.com.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default lunaMebel
