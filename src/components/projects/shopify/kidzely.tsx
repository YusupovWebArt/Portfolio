import { Project } from '../project-types'

const kidzely: Project = {
  id: 6700,
  title: 'Kidzely',
  description: 'USA-based online store for baby products.',
  descriptionUa: 'Американський інтернет-магазин товарів для немовлят та дітей.',
  descriptionEs: 'Tienda online estadounidense de productos para bebés y niños.',
  descriptionDe: 'US-amerikanischer Online-Shop für Baby- und Kinderprodukte.',
  fullDescription:
    'Kidzely is a US-based Shopify store specializing in baby and kids products. The store was built with a warm, family-friendly custom Liquid theme, a full product catalogue with size and colour variants, and app integrations for marketing and customer engagement.',
  fullDescriptionUa:
    'Kidzely - це американський інтернет-магазин на базі Shopify, що спеціалізується на товарах для немовлят та дітей. Магазин створено з теплою, сімейною кастомною темою Liquid, повним каталогом товарів із варіантами розмірів і кольорів, а також інтеграціями додатків для маркетингу та залучення клієнтів.',
  fullDescriptionEs:
    'Kidzely es una tienda Shopify con sede en Estados Unidos especializada en productos para bebés y niños. La tienda fue desarrollada con un tema Liquid personalizado de ambiente cálido y familiar, un catálogo de productos completo con variantes de talla y color, e integraciones de aplicaciones para marketing y captación de clientes.',
  fullDescriptionDe:
    'Kidzely ist ein in den USA ansässiger Shopify-Shop für Baby- und Kinderprodukte. Der Shop wurde mit einem warmen, familienfreundlichen Liquid-Theme, einem vollständigen Produktkatalog mit Größen- und Farbvarianten sowie App-Integrationen für Marketing und Kundenbindung aufgebaut.',
  detailHeroLine: 'SHOPIFY · BABY & KIDS STORE',
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
      'Kidzely operates on Shopify\'s managed platform with a custom Liquid theme tailored for a baby and kids retail audience. Products with size and colour variants are handled through the Shopify Admin, while integrated apps power email marketing and reviews. Assets are delivered via Shopify\'s CDN with fully encrypted checkout.',
    descriptionUa:
      'Kidzely працює на керованій платформі Shopify із кастомною темою Liquid, створеною для аудиторії дитячих товарів. Товари з варіантами розмірів і кольорів адмініструються через Shopify Admin, а інтегровані додатки забезпечують email-маркетинг і відгуки. Ресурси доставляються через CDN Shopify із захищеним чекаутом.',
    descriptionEs:
      'Kidzely opera en la plataforma gestionada de Shopify con un tema Liquid personalizado para el sector infantil. Los productos con variantes de talla y color se gestionan desde Shopify Admin, mientras las aplicaciones integradas impulsan el email marketing y las reseñas. Los recursos se sirven vía CDN con pago cifrado.',
    descriptionDe:
      'Kidzely läuft auf der verwalteten Shopify-Plattform mit einem maßgeschneiderten Liquid-Theme für den Baby- und Kinderbereich. Produkte mit Größen- und Farbvarianten werden über den Shopify-Admin gepflegt, während integrierte Apps E-Mail-Marketing und Bewertungen steuern. Alle Assets werden über das Shopify-CDN mit verschlüsseltem Checkout ausgeliefert.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/kidzely_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/shopify/kidzely_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/kidzely_thumb.webp',
      caption: 'Kidzely homepage featuring baby and kids product collections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/kidzely/kidzely_slide2.webp',
      caption: 'Product collection page with category filters and product cards',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/kidzely/kidzely_slide3.webp',
      caption: 'Individual product page with size variants and add-to-cart button',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/kidzely/kidzely_slide4.webp',
      caption: 'Mobile-optimized view of the Kidzely store storefront',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating used to build a warm, family-friendly storefront for Kidzely' },
      { short: 'CSS3', full: 'Custom CSS3 for responsive, child-friendly visual design and colour palette' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for product galleries, cart interactions, and UI features' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing all products, collections, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor customization to create a family-friendly brand experience' },
      { short: 'App Integration', full: 'Apps integrated for email marketing, customer reviews, and shipping notifications' },
      { short: 'Product Management', full: 'Baby and kids products set up with size/colour variants, pricing, and inventory' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting ensuring reliable performance for US-market traffic' },
      { short: 'SSL/TLS', full: 'Full SSL/TLS encryption on all pages and checkout to protect customer data' },
      { short: 'CDN', full: 'Shopify CDN for fast delivery of product images and assets to US customers' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics dashboard for monitoring sales, traffic, and conversion rates' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting US baby product search terms' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions across all store pages for search visibility' },
    ],
  },
  features: [
    {
      title: 'Family-Friendly Theme Design',
      titleUa: 'Сімейний дизайн теми',
      titleEs: 'Diseño de tema familiar',
      titleDe: 'Familienfreundliches Theme-Design',
      description: 'A warm, welcoming Shopify Liquid theme was customized with soft colours, playful typography, and a layout designed to appeal to parents shopping for baby and kids products.',
      descriptionUa: 'Теплу та привітну тему Shopify Liquid було адаптовано з м’якими кольорами, грайливою типографікою та макетом, орієнтованим на батьків, які купують товари для дітей.',
      descriptionEs: 'Se personalizó un tema Shopify Liquid cálido y acogedor con colores suaves, tipografía alegre y un diseño pensado para padres que compran productos infantiles.',
      descriptionDe: 'Ein warmes, einladendes Shopify-Liquid-Theme wurde mit sanften Farben, verspielter Typografie und einem Layout gestaltet, das gezielt Eltern beim Kauf von Baby- und Kinderprodukten anspricht.',
    },
    {
      title: 'Product Variants & Inventory',
      titleUa: 'Варіанти товарів та облік запасів',
      titleEs: 'Variantes de producto e inventario',
      titleDe: 'Produktvarianten und Bestandsverwaltung',
      description: 'All baby products were set up with multiple size and colour variants, inventory tracking, and clear pricing to simplify the shopping experience for parents.',
      descriptionUa: 'Усі дитячі товари налаштовано з декількома варіантами розмірів і кольорів, відстеженням наявності та зрозумілими цінами для зручності покупок.',
      descriptionEs: 'Todos los productos para bebés se configuraron con múltiples variantes de talla y color, seguimiento de inventario y precios claros para simplificar la experiencia de compra.',
      descriptionDe: 'Alle Babyprodukte wurden mit mehreren Größen- und Farbvarianten, Bestandsverfolgung und transparenter Preisgestaltung eingerichtet, um Eltern den Einkauf zu erleichtern.',
    },
    {
      title: 'Marketing App Integrations',
      titleUa: 'Інтеграція маркетингових додатків',
      titleEs: 'Integración de aplicaciones de marketing',
      titleDe: 'Marketing-App-Integrationen',
      description: 'Email marketing automation, customer review apps, and shipping notification tools were integrated from the Shopify App Store to drive repeat purchases and build customer trust.',
      descriptionUa: 'Інтегровано інструменти автоматизації email-маркетингу, відгуків клієнтів та сповіщень про доставку з Shopify App Store для стимулювання повторних покупок і довіри.',
      descriptionEs: 'Se integraron herramientas de automatización de email marketing, aplicaciones de reseñas y notificaciones de envío desde la Shopify App Store para fomentar compras recurrentes y generar confianza.',
      descriptionDe: 'E-Mail-Marketing-Automatisierung, Bewertungs-Apps und Versandbenachrichtigungen aus dem Shopify App Store wurden integriert, um Wiederkäufe zu fördern und Kundenvertrauen aufzubauen.',
    },
    {
      title: 'SEO-Optimized Product Pages',
      titleUa: 'SEO-оптимізовані сторінки товарів',
      titleEs: 'Páginas de producto optimizadas para SEO',
      titleDe: 'SEO-optimierte Produktseiten',
      description: 'Each product and collection page was optimized with targeted meta titles, descriptions, and alt text to improve visibility in US baby product search queries.',
      descriptionUa: 'Кожну сторінку товару та колекції оптимізовано з цільовими мета-заголовками, описами та alt-текстами для підвищення видимості в пошукових запитах у США.',
      descriptionEs: 'Cada página de producto y colección se optimizó con metatítulos, descripciones y textos alternativos específicos para mejorar la visibilidad en búsquedas del mercado estadounidense.',
      descriptionDe: 'Jede Produkt- und Kollektionsseite wurde mit gezielten Meta-Titeln, Beschreibungen und Alt-Texten optimiert, um die Sichtbarkeit bei Suchanfragen nach Babyprodukten im US-Markt zu steigern.',
    },
    {
      title: 'Secure US Checkout',
      titleUa: 'Безпечний чекаут для ринку США',
      titleEs: 'Checkout seguro para EE. UU.',
      titleDe: 'Sicherer US-Checkout',
      description: 'Shopify Payments with full SSL encryption provides a safe, familiar checkout experience for US customers, supporting major credit cards and digital wallets.',
      descriptionUa: 'Shopify Payments із повним SSL-шифруванням забезпечує безпечне та звичне оформлення замовлення для клієнтів у США з підтримкою основних карток і цифрових гаманців.',
      descriptionEs: 'Shopify Payments con cifrado SSL completo ofrece una experiencia de pago segura y familiar para clientes estadounidenses, admitiendo las principales tarjetas y billeteras digitales.',
      descriptionDe: 'Shopify Payments mit vollständiger SSL-Verschlüsselung bietet US-Kunden ein sicheres, vertrautes Checkout-Erlebnis mit Unterstützung aller gängigen Kreditkarten und digitalen Wallets.',
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
  liveUrl: 'https://www.kidzely.com/',
  githubUrl: '#',
  category: ['shopify'],
}

export default kidzely
