import { Project } from '../project-types'

const vival: Project = {
  id: 10830,
  title: 'Vival',
  description:
    'Ukrainian online store specializing in premium construction materials, particularly for roofing and industrial flooring.',
  descriptionUa:
    'Український інтернет-магазин, що спеціалізується на преміальних будівельних матеріалах, зокрема для покрівлі та промислових підлог.',
  descriptionEs:
    'Tienda en línea ucraniana especializada en materiales de construcción premium, en particular para tejados y suelos industriales.',
  descriptionDe:
    'Ukrainischer Online-Shop für hochwertige Baustoffe, insbesondere für Dächer und Industrieböden.',
  fullDescription:
    'Vival is a Ukrainian WooCommerce online store for premium construction materials including roofing and industrial flooring products. Built on a fully custom WordPress theme from scratch, the project included a complete product catalogue setup, responsive design, and SEO optimization with Schema.org markup to drive organic traffic for construction material searches across Ukraine.',
  fullDescriptionUa:
    'Vival - це український інтернет-магазин на базі WooCommerce із преміальними будівельними матеріалами, включаючи товари для покрівлі та промислових підлог. Розроблений на повністю унікальній темі WordPress з нуля, проєкт охоплював повне налаштування каталогу товарів, адаптивний дизайн та SEO-оптимізацію з розміткою Schema.org для залучення органічного трафіку на ринку України.',
  fullDescriptionEs:
    'Vival es una tienda en línea ucraniana de WooCommerce para materiales de construcción premium, incluyendo productos para tejados y suelos industriales. Desarrollada sobre un tema de WordPress completamente personalizado desde cero, el proyecto abarcó la configuración completa del catálogo de productos, diseño responsivo y optimización SEO con marcado Schema.org para atraer tráfico orgánico en el mercado ucraniano.',
  fullDescriptionDe:
    'Vival ist ein ukrainischer WooCommerce-Online-Shop für erstklassige Baustoffe, darunter Produkte für Dacheindeckungen und Industrieböden. Das von Grund auf mit einem individuellen WordPress-Theme entwickelte Projekt umfasste die vollständige Einrichtung des Produktkatalogs, ein responsives Design sowie eine SEO-Optimierung mit Schema.org-Markup, um organischen Traffic für Baustoff-Suchanfragen in der gesamten Ukraine zu gewinnen.',
  detailHeroLine: 'CUSTOM WORDPRESS · CONSTRUCTION MATERIALS STORE',
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
          { label: 'Custom WP Theme' },
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
      'A custom WordPress theme built from scratch hosts the WooCommerce store for construction and roofing materials. Custom CSS3 and JavaScript deliver a professional, industrial-grade visual experience while maintaining fast load times. MySQL stores the full product catalogue, and Cloudflare CDN ensures reliable delivery to Ukrainian business customers.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена з нуля, обслуговує магазин WooCommerce для будівельних та покрівельних матеріалів. Кастомні CSS3 та JavaScript забезпечують професійний промисловий візуальний досвід при збереженні швидкого завантаження. MySQL зберігає повний каталог товарів, а Cloudflare CDN гарантує надійну доставку українським бізнес-клієнтам.',
    descriptionEs:
      'Un tema de WordPress personalizado construido desde cero aloja la tienda WooCommerce de materiales de construcción y techado. El CSS3 y JavaScript personalizados brindan una experiencia visual de carácter industrial profesional manteniendo tiempos de carga rápidos. MySQL almacena el catálogo completo y Cloudflare CDN asegura una entrega fiable a los clientes empresariales en Ucrania.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme bildet die Grundlage für den WooCommerce-Shop für Bau- und Bedachungsmaterialien. Individuelles CSS3 und JavaScript sorgen für ein professionelles, industriegerechtes Erscheinungsbild bei gleichzeitig schnellen Ladezeiten. MySQL speichert den gesamten Produktkatalog, und das Cloudflare CDN gewährleistet eine zuverlässige Auslieferung an ukrainische Geschäftskunden.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/vival_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/vival_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/vival_thumb.webp',
      caption: 'Home page with premium construction materials hero and featured product categories',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/vival/vival_slide2.webp',
      caption: 'Product catalogue with roofing and industrial flooring WooCommerce listings',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and SEO-optimized construction store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive Grid layouts and professional industrial-style design' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product displays and shopping cart functionality' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side logic and form handling' },
      { short: 'MySQL', full: 'MySQL database for construction product catalogue, orders, and customer data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS providing the e-commerce and content management foundation' },
      { short: 'WooCommerce', full: 'WooCommerce enabling product catalogue management, cart, and secure checkout' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for a professional construction brand presence' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and security across Ukraine' },
      { short: 'SSL/TLS', full: 'HTTPS encryption protecting customer data and business transaction security' },
      { short: 'Nginx', full: 'Nginx web server configured for optimal WooCommerce store performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedded to show warehouse and pickup location for customers' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking product page views, add-to-cart events, and purchase conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Ukrainian construction material SEO targeting roofing and flooring product searches' },
      { short: 'Schema.org Markup', full: 'Product JSON-LD structured data for rich search results with pricing and availability' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP format for construction product images ensuring fast loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations supporting Ukrainian B2B and B2C customer acquisition' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Індивідуальна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A fully custom WordPress theme was built from scratch to present construction materials in a professional, trustworthy manner appropriate for the Ukrainian B2B and B2C markets.',
      descriptionUa:
        'Повністю кастомна тема WordPress була розроблена з нуля для професійної та надійної презентації будівельних матеріалів для українського ринку B2B та B2C.',
      descriptionEs:
        'Se construyó un tema de WordPress totalmente personalizado desde cero para presentar los materiales de construcción de forma profesional y fiable para los mercados B2B y B2C en Ucrania.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes WordPress-Theme wurde von Grund auf entwickelt, um Baustoffe professionell und vertrauenswürdig für den ukrainischen B2B- und B2C-Markt zu präsentieren.',
    },
    {
      title: 'WooCommerce Integration',
      titleUa: 'Інтеграція WooCommerce',
      titleEs: 'Integración de WooCommerce',
      titleDe: 'WooCommerce-Integration',
      description:
        'WooCommerce was fully integrated providing product catalogue management, shopping cart, and secure checkout for roofing and flooring material purchases.',
      descriptionUa:
        'WooCommerce було повністю інтегровано для забезпечення управління каталогом товарів, кошика та безпечного оформлення замовлень покрівельних і підлогових матеріалів.',
      descriptionEs:
        'WooCommerce se integró por completo proporcionando gestión de catálogo, carrito de compras y pago seguro para la adquisición de materiales de techado y suelos.',
      descriptionDe:
        'WooCommerce wurde vollständig integriert und bietet Produktkatalogverwaltung, Warenkorb sowie einen sicheren Checkout für den Kauf von Dach- und Bodenbelagsmaterialien.',
    },
    {
      title: 'Full Product Catalogue Setup',
      titleUa: 'Повне налаштування каталогу товарів',
      titleEs: 'Configuración completa del catálogo de productos',
      titleDe: 'Vollständige Einrichtung des Produktkatalogs',
      description:
        'All construction products including roofing materials and industrial flooring were entered with detailed technical specifications, images, and pricing for professional buyer decision-making.',
      descriptionUa:
        'Усі будівельні товари, включаючи покрівельні матеріали та промислові підлоги, були внесені з детальними технічними характеристиками, зображеннями та цінами для прийняття рішень професійними покупцями.',
      descriptionEs:
        'Todos los productos de construcción, incluidos materiales para tejados y suelos industriales, se cargaron con especificaciones técnicas detalladas, imágenes y precios para facilitar la decisión de compra.',
      descriptionDe:
        'Sämtliche Bauprodukte - einschließlich Bedachungsmaterialien und Industrieböden - wurden mit detaillierten technischen Daten, Bildern und Preisen für fundierte Kaufentscheidungen eingepflegt.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The store is fully responsive across all devices, enabling contractors and buyers to browse and order construction materials from mobile, tablet, or desktop.',
      descriptionUa:
        'Магазин повністю адаптивний на всіх пристроях, що дозволяє підрядникам і покупцям переглядати та замовляти будівельні матеріали зі смартфона, планшета чи комп\'ютера.',
      descriptionEs:
        'La tienda es totalmente responsiva en todos los dispositivos, permitiendo a contratistas y compradores consultar y pedir materiales de construcción desde móvil, tableta o escritorio.',
      descriptionDe:
        'Der Shop ist auf allen Endgeräten vollständig responsiv, sodass Bauunternehmer und Einkäufer Baustoffe bequem per Smartphone, Tablet oder Desktop auswählen und bestellen können.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Ukrainian market SEO with Schema.org product markup and construction-specific meta tags drives organic search visibility for roofing and flooring material queries.',
      descriptionUa:
        'SEO для українського ринку з товарною розміткою Schema.org та спеціалізованими будівельними мета-тегами підвищує органічну видимість за запитами покрівельних і підлогових матеріалів.',
      descriptionEs:
        'El SEO para el mercado ucraniano con marcado de productos Schema.org y metaetiquetas específicas del sector impulsa la visibilidad orgánica en búsquedas de materiales para tejados y suelos.',
      descriptionDe:
        'SEO für den ukrainischen Markt mit Schema.org-Produkt-Markup und branchenspezifischen Meta-Tags steigert die organische Sichtbarkeit für Suchanfragen rund um Dach- und Bodenbaustoffe.',
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
  liveUrl: 'https://vival.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default vival
