import { Project } from '../project-types'

const LueirisLashes: Project = {
  id: 6800,
  title: 'Lueiris lashes',
  description: 'US-based lashes beauty store.',
  descriptionUa: "Американський інтернет-магазин б'юті-товарів для вій.",
  descriptionEs: 'Tienda de belleza online estadounidense especializada en productos para pestañas.',
  descriptionDe: 'US-amerikanischer Online-Beauty-Shop mit Spezialisierung auf Wimpernprodukte.',
  fullDescription:
    'Lueiris Lashes is a US-based Shopify beauty store specializing in eyelash products and accessories. The store features a sleek, beauty-focused custom Liquid theme, a curated product catalogue with detailed variant options, and app integrations for customer engagement and marketing.',
  fullDescriptionUa:
    "Lueiris Lashes - це американський б'юті-магазин на базі Shopify, який спеціалізується на продуктах для вій та аксесуарах. Магазин має елегантну кастомну тему Liquid у б'юті-стилі, підібраний каталог товарів із детальними варіантами, а також інтеграції додатків для залучення клієнтів і маркетингу.",
  fullDescriptionEs:
    'Lueiris Lashes es una tienda de belleza Shopify con sede en Estados Unidos especializada en productos y accesorios para pestañas. La tienda cuenta con un tema Liquid personalizado y elegante con estética beauty, un catálogo de productos cuidadosamente seleccionado con opciones de variantes detalladas, e integraciones de aplicaciones para la captación de clientes y el marketing.',
  fullDescriptionDe:
    'Lueiris Lashes ist ein in den USA ansässiger Shopify-Beauty-Shop für Wimpernprodukte und Zubehör. Der Shop verfügt über ein elegantes, auf die Kosmetikbranche zugeschnittenes Liquid-Theme, einen kuratierten Produktkatalog mit detaillierten Variantenoptionen sowie App-Integrationen für Kundenbindung und Marketing.',
  detailHeroLine: 'SHOPIFY · BEAUTY & LASHES STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
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
      'Lueiris Lashes runs on Shopify\'s managed platform with a custom Liquid theme designed for the beauty market. Products are managed through the Shopify Admin with detailed variant configurations, while integrated apps handle reviews and marketing. The Shopify CDN ensures fast asset delivery with SSL-secured checkout for US customers.',
    descriptionUa:
      'Lueiris Lashes працює на керованій платформі Shopify із кастомною темою Liquid, створеною для ринку краси. Товари керуються через Shopify Admin із детальними конфігураціями варіантів, а інтегровані додатки відповідають за відгуки та маркетинг. CDN Shopify забезпечує швидку доставку ресурсів і захищений SSL-чекаут.',
    descriptionEs:
      'Lueiris Lashes funciona en la plataforma gestionada de Shopify con un tema Liquid personalizado para el sector de la belleza. Los productos se administran desde Shopify Admin con configuraciones detalladas de variantes, mientras las aplicaciones gestionan reseñas y marketing. El CDN de Shopify garantiza entrega rápida con pago SSL.',
    descriptionDe:
      'Lueiris Lashes läuft auf der verwalteten Shopify-Plattform mit einem maßgeschneiderten Liquid-Theme für den Beauty-Markt. Produkte werden über den Shopify-Admin mit detaillierten Variantenkonfigurationen verwaltet, während integrierte Apps Bewertungen und Marketing steuern. Das Shopify-CDN sorgt für schnelle Auslieferung und SSL-gesicherten Checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/lueirislashes_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/shopify/lueirislashes_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/lueirislashes_thumb.webp',
      caption: 'Lueiris Lashes homepage showcasing the beauty brand and product range',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/lueirislashes/lueirislashes_slide2.webp',
      caption: 'Product collection page with lash product cards and category navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/lueirislashes/lueirislashes_slide3.webp',
      caption: 'Individual lash product page with variant selection and add-to-cart',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/lueirislashes/lueirislashes_slide4.webp',
      caption: 'Mobile-optimized store view with beauty-focused visual design',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating used to build the sleek, beauty-focused Lueiris Lashes storefront' },
      { short: 'CSS3', full: 'Custom CSS3 for a premium beauty aesthetic with responsive design across all devices' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for product image galleries, cart interactions, and UI effects' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing lash products, collections, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor and Liquid code customization to create a premium beauty brand feel' },
      { short: 'App Integration', full: 'Apps integrated for customer reviews, email marketing, and loyalty programmes' },
      { short: 'Product Management', full: 'Lash products configured with style variants, pricing, inventory, and imagery' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting ensuring consistent uptime for the US beauty market' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption protecting customer data and payment information at checkout' },
      { short: 'CDN', full: 'Shopify CDN delivering high-quality product images and assets quickly to US shoppers' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics used to track sales performance, traffic sources, and conversion rates' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting US beauty and lash search terms' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions on all store pages for improved search rankings' },
    ],
  },
  features: [
    {
      title: 'Premium Beauty Theme',
      titleUa: 'Преміальна б’юті-тема',
      titleEs: 'Tema de belleza premium',
      titleDe: 'Premium-Beauty-Theme',
      description: 'A sleek, feminine Shopify Liquid theme was customized with elegant typography, high-contrast imagery, and a layout designed to highlight beauty products and drive purchase decisions.',
      descriptionUa: 'Елегантну жіночну тему Shopify Liquid було адаптовано з витонченою типографікою, контрастними зображеннями та макетом, покликаним підкреслити б’юті-товари та стимулювати покупки.',
      descriptionEs: 'Se personalizó un tema Shopify Liquid elegante y femenino con tipografía refinada, imágenes de alto contraste y un diseño pensado para destacar productos de belleza e impulsar las ventas.',
      descriptionDe: 'Ein elegantes, feminines Shopify-Liquid-Theme wurde mit stilvoller Typografie, kontrastreichen Bildern und einem verkaufsfördernden Layout für Beauty-Produkte individuell angepasst.',
    },
    {
      title: 'Lash Product Catalogue',
      titleUa: 'Каталог товарів для вій',
      titleEs: 'Catálogo de productos para pestañas',
      titleDe: 'Produktkatalog für Wimpern',
      description: 'All eyelash products and accessories were set up with detailed style variants, high-quality product imagery, clear descriptions, and pricing to support confident purchase decisions.',
      descriptionUa: 'Усі товари для вій та аксесуари налаштовано з детальними варіантами стилів, якісними фотографіями, чіткими описами та цінами для впевненого вибору покупців.',
      descriptionEs: 'Todos los productos y accesorios para pestañas se configuraron con variantes de estilo detalladas, fotografías de alta calidad, descripciones claras y precios para facilitar la decisión de compra.',
      descriptionDe: 'Sämtliche Wimpernprodukte und Accessoires wurden mit detaillierten Stilvarianten, hochwertigen Produktbildern, klaren Beschreibungen und Preisen eingerichtet.',
    },
    {
      title: 'Customer Reviews & Trust Signals',
      titleUa: 'Відгуки клієнтів та фактори довіри',
      titleEs: 'Reseñas de clientes y señales de confianza',
      titleDe: 'Kundenbewertungen und Vertrauenssignale',
      description: 'A product review app was integrated to showcase customer testimonials and user-generated content, building social proof and increasing conversion rates for the lash store.',
      descriptionUa: 'Інтегровано додаток відгуків для демонстрації вражень клієнтів і користувацького контенту, що формує соціальний доказ і підвищує конверсію магазину.',
      descriptionEs: 'Se integró una aplicación de reseñas para mostrar testimonios de clientas y contenido generado por usuarias, reforzando la prueba social y aumentando la tasa de conversión.',
      descriptionDe: 'Eine Produktbewertungs-App wurde integriert, um Kundenmeinungen und nutzergenerierte Inhalte zu präsentieren, Social Proof aufzubauen und die Conversion-Rate zu steigern.',
    },
    {
      title: 'Email Marketing Integration',
      titleUa: 'Інтеграція email-маркетингу',
      titleEs: 'Integración de email marketing',
      titleDe: 'E-Mail-Marketing-Integration',
      description: 'Email marketing tools were connected to capture subscribers at checkout and run targeted campaigns for new product launches, promotions, and customer retention.',
      descriptionUa: 'Підключено інструменти email-маркетингу для залучення підписників під час оформлення замовлення та проведення цільових кампаній для новинок і акцій.',
      descriptionEs: 'Se conectaron herramientas de email marketing para captar suscriptores en el checkout y ejecutar campañas segmentadas de nuevos lanzamientos, promociones y fidelización.',
      descriptionDe: 'E-Mail-Marketing-Tools wurden angebunden, um Abonnenten beim Checkout zu gewinnen und gezielte Kampagnen für Produktneuheiten, Aktionen und Kundenbindung durchzuführen.',
    },
    {
      title: 'Secure & Seamless Checkout',
      titleUa: 'Безпечний та зручний чекаут',
      titleEs: 'Checkout seguro y fluido',
      titleDe: 'Sicherer und nahtloser Checkout',
      description: 'Shopify Payments with full SSL encryption delivers a secure, one-page checkout experience optimized for US customers using credit cards and digital payment methods.',
      descriptionUa: 'Shopify Payments із повним SSL-шифруванням забезпечує безпечний односторінковий чекаут, оптимізований для клієнтів у США з підтримкою карток і цифрових методів оплати.',
      descriptionEs: 'Shopify Payments con cifrado SSL completo ofrece un proceso de pago seguro en una sola página, optimizado para clientes de EE. UU. con tarjetas y métodos digitales.',
      descriptionDe: 'Shopify Payments mit vollständiger SSL-Verschlüsselung bietet einen sicheren One-Page-Checkout, optimiert für US-Kunden mit Kreditkarten und digitalen Zahlungsmethoden.',
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
  liveUrl: 'https://lueirislashes.com/',
  githubUrl: '#',
  category: ['shopify'],
}

export default LueirisLashes
