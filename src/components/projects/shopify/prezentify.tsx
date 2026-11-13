import { Project } from '../project-types'

const prezentify: Project = {
  id: 6900,
  title: 'Prezentify',
  description: 'Polish online store specializing in personalized gifts.',
  descriptionUa: 'Польський інтернет-магазин персоналізованих подарунків.',
  descriptionEs: 'Tienda online polaca especializada en regalos personalizados.',
  descriptionDe: 'Polnischer Online-Shop mit Spezialisierung auf personalisierte Geschenke.',
  fullDescription:
    'Prezentify is a Polish Shopify store offering a wide range of personalized gift products. The store was built with a fully customized Liquid theme reflecting a warm gifting aesthetic, complete product catalogue with personalization options, and app integrations for marketing and customer engagement in the Polish market.',
  fullDescriptionUa:
    'Prezentify - це польський інтернет-магазин на базі Shopify, який пропонує широкий асортимент персоналізованих подарунків. Магазин створено з повністю кастомною темою Liquid у затишній подарунковій естетиці, повним каталогом товарів із опціями персоналізації та інтеграціями додатків для маркетингу й взаємодії з клієнтами на польському ринку.',
  fullDescriptionEs:
    'Prezentify es una tienda polaca en Shopify que ofrece una amplia gama de productos de regalo personalizados. La tienda fue desarrollada con un tema Liquid completamente personalizado que refleja una estética cálida de regalo, un catálogo de productos completo con opciones de personalización, e integraciones de aplicaciones para marketing y captación de clientes en el mercado polaco.',
  fullDescriptionDe:
    'Prezentify ist ein polnischer Shopify-Shop mit einem breiten Sortiment an personalisierten Geschenkartikeln. Der Shop wurde mit einem vollständig angepassten Liquid-Theme in warmer Geschenk-Ästhetik, einem umfangreichen Produktkatalog mit Personalisierungsoptionen sowie App-Integrationen für Marketing und Kundenbindung auf dem polnischen Markt umgesetzt.',
  detailHeroLine: 'SHOPIFY · PERSONALIZED GIFTS STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Shopify Liquid', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'PLN Currency', label: 'Polish Market', accent: 'neutral' },
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
      'Prezentify is built on Shopify\'s managed platform with a custom Liquid theme tailored for the personalized gifts market in Poland. Products with customization options are managed via the Shopify Admin, and apps handle email marketing and order management. Content is delivered globally via Shopify\'s CDN with fully encrypted checkout.',
    descriptionUa:
      'Prezentify створено на керованій платформі Shopify із кастомною темою Liquid, адаптованою для ринку персоналізованих подарунків у Польщі. Товари з опціями кастомізації керуються через Shopify Admin, а додатки відповідають за email-маркетинг і замовлення. Контент доставляється через CDN Shopify із захищеним чекаутом.',
    descriptionEs:
      'Prezentify está construido sobre la plataforma gestionada de Shopify con un tema Liquid personalizado para el mercado de regalos en Polonia. Los productos con opciones de personalización se administran desde Shopify Admin, mientras las aplicaciones gestionan el email marketing y los pedidos, servidos vía CDN con pago cifrado.',
    descriptionDe:
      'Prezentify basiert auf der verwalteten Shopify-Plattform mit einem maßgeschneiderten Liquid-Theme für den polnischen Markt für personalisierte Geschenke. Produkte mit Individualisierungsoptionen werden über den Shopify-Admin gepflegt, während Apps E-Mail-Marketing und Bestellabwicklung unterstützen. Die Auslieferung erfolgt über das Shopify-CDN mit verschlüsseltem Checkout.',
  },
  image: '/Portfolio/images/portfolio/thumbs/shopify/prezentify_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/shopify/prezentify_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/shopify/prezentify_thumb.webp',
      caption: 'Prezentify homepage showcasing personalized gift categories',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide2.webp',
      caption: 'Gift collection page with product cards and category navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide3.webp',
      caption: 'Individual gift product page with personalization options',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide4.webp',
      caption: 'Seasonal gift collection and promotional banner section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/shopify/prezentify/prezentify_slide5.webp',
      caption: 'Mobile-optimized store view with responsive gift browsing layout',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Shopify Liquid', full: 'Liquid templating engine used to build the warm, gift-focused Prezentify storefront' },
      { short: 'CSS3', full: 'Custom CSS3 styling for a festive, gift-shop aesthetic with responsive layouts' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for personalization input fields, galleries, and cart behaviour' },
    ],
    contentManagement: [
      { short: 'Shopify Admin', full: 'Shopify Admin for managing personalized gift products, orders, and store settings' },
      { short: 'Theme Customization', full: 'Theme editor customization to create a warm, festive Polish gifting brand feel' },
      { short: 'App Integration', full: 'Apps integrated for product personalization, email marketing, and customer reviews' },
      { short: 'Product Management', full: 'Gift products configured with personalization options, variants, and pricing in PLN' },
    ],
    devopsSecurity: [
      { short: 'Shopify Hosting', full: 'Shopify-managed hosting ensuring reliable performance for the Polish market' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption on all store pages and checkout flows to protect customer data' },
      { short: 'CDN', full: 'Shopify CDN for fast global delivery of product images and store assets' },
    ],
    analytics: [
      { short: 'Shopify Analytics', full: 'Shopify Analytics used to track sales, traffic sources, and conversion performance' },
    ],
    seo: [
      { short: 'Shopify SEO', full: 'SEO-optimized product and collection pages targeting Polish personalized gift keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions in Polish for improved local search visibility' },
    ],
  },
  features: [
    {
      title: 'Personalized Gift Theme',
      titleUa: 'Тема магазину персоналізованих подарунків',
      titleEs: 'Tema para regalos personalizados',
      titleDe: 'Theme für personalisierte Geschenke',
      description: 'A warm, festive Shopify Liquid theme was customized to evoke the feeling of gift-giving, using rich colours, decorative elements, and a layout that highlights personalization options.',
      descriptionUa: 'Теплу святкову тему Shopify Liquid було адаптовано для створення атмосфери дарування за допомогою насичених кольорів, декоративних елементів і макета з акцентом на персоналізацію.',
      descriptionEs: 'Se personalizó un tema Shopify Liquid cálido y festivo para evocar la experiencia de regalar, utilizando colores intensos, elementos decorativos y un diseño que resalta las opciones de personalización.',
      descriptionDe: 'Ein warmes, festliches Shopify-Liquid-Theme wurde mit kräftigen Farben, dekorativen Elementen und einem Layout gestaltet, das die Personalisierungsoptionen optimal hervorhebt.',
    },
    {
      title: 'Product Personalization Options',
      titleUa: 'Опції персоналізації товарів',
      titleEs: 'Opciones de personalización de productos',
      titleDe: 'Optionen zur Produktpersonalisierung',
      description: 'Gift products were configured with custom text input fields and variant selectors so customers can personalize items with names, messages, or dates before adding to cart.',
      descriptionUa: 'Подарункові товари налаштовано з кастомними текстовими полями та селекторами варіантів, щоб покупці могли додавати імена, побажання чи дати перед додаванням у кошик.',
      descriptionEs: 'Los productos de regalo se configuraron con campos de texto personalizados y selectores de variantes para que los clientes puedan añadir nombres, mensajes o fechas antes de comprar.',
      descriptionDe: 'Geschenkartikel wurden mit individuellen Texteingabefeldern und Variantenauswahlen ausgestattet, sodass Kunden Produkte vor dem Hinzufügen zum Warenkorb mit Namen, Botschaften oder Daten personalisieren können.',
    },
    {
      title: 'Polish Market Configuration',
      titleUa: 'Налаштування під польський ринок',
      titleEs: 'Configuración para el mercado polaco',
      titleDe: 'Konfiguration für den polnischen Markt',
      description: 'The store was configured for the Polish market with PLN currency, Polish-language content pages, and locally relevant shipping and payment options for customers in Poland.',
      descriptionUa: 'Магазин налаштовано для польського ринку з валютою PLN, польськомовними сторінками контенту та актуальними локальними способами доставки й оплати.',
      descriptionEs: 'La tienda se configuró para el mercado polaco con moneda PLN, páginas de contenido en polaco y opciones de envío y pago adaptadas a los clientes en Polonia.',
      descriptionDe: 'Der Shop wurde mit der Währung PLN, polnischsprachigen Inhaltsseiten sowie lokal relevanten Versand- und Zahlungsoptionen gezielt für den polnischen Markt eingerichtet.',
    },
    {
      title: 'Marketing & Email Integrations',
      titleUa: 'Маркетингові та email-інтеграції',
      titleEs: 'Integraciones de marketing y correo',
      titleDe: 'Marketing- und E-Mail-Integrationen',
      description: 'Email marketing apps and customer review tools were integrated to run seasonal gift campaigns, capture subscribers, and build social proof through post-purchase review requests.',
      descriptionUa: 'Інтегровано додатки email-маркетингу та інструменти відгуків для проведення сезонних подарункових кампаній, збору підписників і формування соціального доказу.',
      descriptionEs: 'Se integraron aplicaciones de email marketing y herramientas de reseñas para lanzar campañas estacionales de regalos, captar suscriptores y generar confianza tras la compra.',
      descriptionDe: 'E-Mail-Marketing-Apps und Bewertungstools wurden integriert, um saisonale Geschenkkampagnen durchzuführen, Abonnenten zu gewinnen und durch Bewertungsanfragen Vertrauen aufzubauen.',
    },
    {
      title: 'SEO & Content Strategy',
      titleUa: 'SEO та контентна стратегія',
      titleEs: 'Estrategia SEO y de contenidos',
      titleDe: 'SEO- und Content-Strategie',
      description: 'Product and collection pages were optimized with Polish-language meta tags and SEO-friendly URLs to improve organic visibility for gift-related search queries in Poland.',
      descriptionUa: 'Сторінки товарів і колекцій оптимізовано з польськомовними мета-тегами та SEO-дружніми URL-адресами для підвищення органічної видимості за подарунковими запитами в Польщі.',
      descriptionEs: 'Las páginas de productos y colecciones se optimizaron con metaetiquetas en polaco y URL amigables para SEO con el fin de mejorar la visibilidad orgánica en búsquedas de regalos en Polonia.',
      descriptionDe: 'Produkt- und Kollektionsseiten wurden mit polnischsprachigen Meta-Tags und SEO-freundlichen URLs optimiert, um die organische Sichtbarkeit für Suchanfragen rund um Geschenke in Polen zu erhöhen.',
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
  liveUrl: 'https://prezentify.pl/',
  githubUrl: '#',
  category: ['shopify'],
}

export default prezentify
