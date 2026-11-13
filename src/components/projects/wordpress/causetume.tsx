import { Project } from '../project-types'

const causetume: Project = {
  id: 11500,
  title: 'Causetume',
  description: 'Knitwear Brand. Cloth store',
  descriptionUa: 'Бренд трикотажного одягу. Магазин одягу',
  descriptionEs: 'Marca de ropa de punto. Tienda de moda.',
  descriptionDe: 'Strickmoden-Marke. Online-Bekleidungsgeschäft.',
  fullDescription:
    'A WooCommerce online store built on a premium WordPress theme, customized with CSS3 and JavaScript to match the Causetume knitwear brand identity. Full product catalog setup including product content, images, categories, and variant configuration was completed, giving the brand a polished e-commerce presence for their knitwear collections.',
  fullDescriptionUa:
    'Онлайн-магазин WooCommerce, побудований на преміальній темі WordPress та адаптований за допомогою CSS3 і JavaScript відповідно до айдентики бренду трикотажного одягу Causetume. Виконано повне налаштування каталогу товарів, включаючи контент, зображення, категорії та конфігурацію варіантів, що забезпечило бренду елегантну e-commerce присутність для їхніх трикотажних колекцій.',
  fullDescriptionEs:
    'Tienda online WooCommerce construida sobre un tema premium de WordPress y personalizada con CSS3 y JavaScript para reflejar la identidad de la marca de ropa de punto Causetume. Se completó la configuración íntegra del catálogo de productos, incluyendo contenido, imágenes, categorías y configuración de variantes, dotando a la marca de una presencia de e-commerce elegante para sus colecciones de punto.',
  fullDescriptionDe:
    'Ein WooCommerce-Onlineshop auf Basis eines Premium-WordPress-Themes, individuell mit CSS3 und JavaScript an die Markenidentität des Strickmoden-Labels Causetume angepasst. Der gesamte Produktkatalog einschließlich Produktinhalten, Bildern, Kategorien und Variantenkonfiguration wurde vollständig eingerichtet, sodass die Marke eine stilvolle E-Commerce-Präsenz für ihre Strickkollektionen erhielt.',
  detailHeroLine: 'PREMIUM WORDPRESS · KNITWEAR · E-COMMERCE STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'Premium Theme', label: 'Customized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'WooCommerce + Premium Theme', highlight: true },
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
      'WordPress with WooCommerce manages the complete e-commerce layer including product listings, cart, checkout, and payment gateways. A premium WordPress theme was customized with CSS3 and JavaScript to reflect the Causetume knitwear brand. Cloudflare CDN ensures fast delivery of product photography to global shoppers.',
    descriptionUa:
      'WordPress із WooCommerce управляє всім рівнем електронної комерції, включаючи списки товарів, кошик, оформлення замовлення та платіжні шлюзи. Преміальну тему WordPress було кастомізовано за допомогою CSS3 та JavaScript для відображення бренду трикотажу Causetume. Cloudflare CDN забезпечує швидку доставку фотографій товарів покупцям по всьому світу.',
    descriptionEs:
      'WordPress con WooCommerce gestiona toda la capa de comercio electrónico, incluyendo listados de productos, carrito, pago y pasarelas de pago. Se personalizó un tema premium de WordPress con CSS3 y JavaScript para reflejar la marca de punto Causetume. Cloudflare CDN garantiza una entrega rápida de las fotografías de producto a compradores de todo el mundo.',
    descriptionDe:
      'WordPress mit WooCommerce steuert die gesamte E-Commerce-Schicht einschließlich Produktlisten, Warenkorb, Checkout und Zahlungs-Gateways. Ein Premium-WordPress-Theme wurde mit CSS3 und JavaScript individuell angepasst, um die Strickmoden-Marke Causetume widerzuspiegeln. Das Cloudflare CDN sorgt weltweit für eine schnelle Auslieferung der Produktfotografie.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/causetume_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/causetume_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/causetume_thumb.webp',
      caption: 'Home page showcasing the Causetume knitwear brand and featured collections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/causetume/causetume_slide2.webp',
      caption: 'WooCommerce product catalog displaying knitwear collections by category',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/causetume/causetume_slide3.webp',
      caption: 'Individual product detail page with size variants, description, and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible product and category pages' },
      { short: 'CSS3', full: 'Custom CSS3 tailoring the premium theme to match the Causetume knitwear brand identity' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product gallery and cart functionality' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce store logic' },
      { short: 'MySQL', full: 'MySQL database for product catalog, orders, customer data, and settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation for the store' },
      { short: 'WooCommerce', full: 'WooCommerce for product management, checkout flow, and payment processing' },
      { short: 'Premium Theme', full: 'Premium WordPress theme customized with CSS3/JS for the Causetume brand' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast global delivery of knitwear product photography' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer checkout and payment transactions' },
      { short: 'Nginx', full: 'Nginx server configured for WooCommerce performance and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 e-commerce tracking for product views, cart events, and purchases' },
      { short: 'Google Maps API', full: 'Google Maps API for brand showroom or pickup location display' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Product and category SEO targeting knitwear and fashion store search terms' },
      { short: 'Schema.org Markup', full: 'JSON-LD Product schema for rich price and availability snippets in search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Store performance tuned for green Core Web Vitals to support conversions' },
      { short: 'WebP Images', full: 'WebP format for all knitwear product photography ensuring fast page loads' },
    ],
  },
  features: [
    {
      title: 'WooCommerce Store Setup',
      titleUa: 'Налаштування магазину WooCommerce',
      titleEs: 'Configuración de tienda WooCommerce',
      titleDe: 'Einrichtung des WooCommerce-Shops',
      description:
        'Full WooCommerce configuration including product catalog, category structure, size variants, checkout flow, and payment gateway integration for the Causetume knitwear brand.',
      descriptionUa:
        'Повна конфігурація WooCommerce, включаючи каталог товарів, структуру категорій, варіанти розмірів, процес оформлення замовлення та інтеграцію платіжних шлюзів для бренду трикотажу Causetume.',
      descriptionEs:
        'Configuración completa de WooCommerce que incluye catálogo de productos, estructura de categorías, variantes de talla, flujo de pago e integración de pasarelas de pago para la marca Causetume.',
      descriptionDe:
        'Vollständige WooCommerce-Konfiguration inklusive Produktkatalog, Kategoriestruktur, Größenvarianten, Checkout-Prozess und Zahlungs-Gateway-Integration für die Strickmoden-Marke Causetume.',
    },
    {
      title: 'Premium Theme Customization',
      titleUa: 'Кастомізація преміальної теми',
      titleEs: 'Personalización de tema premium',
      titleDe: 'Anpassung des Premium-Themes',
      description:
        'A premium WordPress theme was selected and customized using CSS3 and JavaScript to precisely reflect the brand\'s aesthetic, delivering a professional knitwear store without a custom build from scratch.',
      descriptionUa:
        'Преміальну тему WordPress було обрано та кастомізовано за допомогою CSS3 і JavaScript для точного відображення естетики бренду, що дозволило створити професійний магазин без розробки з нуля.',
      descriptionEs:
        'Se seleccionó y personalizó un tema premium de WordPress mediante CSS3 y JavaScript para reflejar con precisión la estética de la marca, logrando una tienda profesional sin un desarrollo desde cero.',
      descriptionDe:
        'Ein Premium-WordPress-Theme wurde ausgewählt und mit CSS3 sowie JavaScript präzise an die Markenästhetik angepasst, um ohne komplette Neuentwicklung einen hochwertigen Strickmoden-Shop bereitzustellen.',
    },
    {
      title: 'Product Content & Catalog Setup',
      titleUa: 'Наповнення контентом і налаштування каталогу',
      titleEs: 'Configuración de catálogo y contenido de productos',
      titleDe: 'Produktinhalte & Katalogaufbau',
      description:
        'Complete product content was created and uploaded, including product descriptions, high-quality images, categories, and variant configurations ready for the store launch.',
      descriptionUa:
        'Створено та завантажено повний контент товарів, включаючи описи, високоякісні зображення, категорії та конфігурації варіантів, готові до запуску магазину.',
      descriptionEs:
        'Se creó y cargó todo el contenido de productos, incluyendo descripciones, imágenes de alta calidad, categorías y configuraciones de variantes listas para el lanzamiento.',
      descriptionDe:
        'Sämtliche Produktinhalte wurden erstellt und eingepflegt - inklusive Produktbeschreibungen, hochauflösender Bilder, Kategorien und Variantenkonfigurationen für den Shop-Launch.',
    },
    {
      title: 'SEO & Schema.org for Products',
      titleUa: 'SEO та Schema.org для товарів',
      titleEs: 'SEO y Schema.org para productos',
      titleDe: 'SEO & Schema.org für Produkte',
      description:
        'Product pages include JSON-LD Schema markup and optimized metadata, driving rich search snippets with pricing and availability to attract fashion shoppers organically.',
      descriptionUa:
        'Сторінки товарів містять розмітку JSON-LD Schema та оптимізовані метадані, формуючи розширені сніпети з цінами й наявністю для органічного залучення покупців моди.',
      descriptionEs:
        'Las páginas de productos incluyen marcado Schema JSON-LD y metadatos optimizados, generando fragmentos enriquecidos con precios y disponibilidad para atraer compradores de moda de forma orgánica.',
      descriptionDe:
        'Die Produktseiten enthalten JSON-LD-Schema-Markup und optimierte Metadaten, die Rich Snippets mit Preisen und Verfügbarkeiten erzeugen, um Modekäufer organisch anzusprechen.',
    },
    {
      title: 'Responsive Shopping Experience',
      titleUa: 'Адаптивний досвід покупок',
      titleEs: 'Experiencia de compra responsive',
      titleDe: 'Responsives Einkaufserlebnis',
      description:
        'Fully responsive layout ensures customers can browse collections and complete purchases seamlessly across desktop, tablet, and mobile devices.',
      descriptionUa:
        'Повністю адаптивний макет гарантує, що клієнти можуть зручно переглядати колекції та здійснювати покупки з десктопів, планшетів і смартфонів.',
      descriptionEs:
        'El diseño totalmente responsive garantiza que los clientes puedan explorar las colecciones y completar sus compras sin problemas en ordenadores, tabletas y móviles.',
      descriptionDe:
        'Das vollständig responsive Layout stellt sicher, dass Kunden Kollektionen auf Desktop, Tablet und Smartphone gleichermaßen komfortabel entdecken und bestellen können.',
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
  liveUrl: 'https://causetume.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default causetume
