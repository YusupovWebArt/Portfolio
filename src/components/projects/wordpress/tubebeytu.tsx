import { Project } from '../project-types'

const tuBebeYTu: Project = {
  id: 10950,
  title: 'Tu bebe y tu',
  description:
    'Spanish online store specializing in products for babies and mothers.',
  descriptionUa:
    'Іспанський інтернет-магазин, що спеціалізується на товарах для немовлят та матерів.',
  descriptionEs:
    'Tienda en línea española especializada en productos para bebés y madres.',
  descriptionDe:
    'Spanischer Online-Shop, spezialisiert auf Produkte für Babys und Mütter.',
  fullDescription:
    'Tu bebe y tu is a Spanish WooCommerce online store for baby and mother products, built on a custom WordPress theme with a fully populated product catalogue. The project included adding all product listings with descriptions and images, responsive design, SEO optimization for the Spanish market, and Google Maps integration for store location visibility.',
  fullDescriptionUa:
    'Tu bebe y tu - це іспанський інтернет-магазин на WooCommerce з товарами для немовлят і матерів, побудований на унікальній темі WordPress із повністю наповненим каталогом. Проєкт передбачав додавання всіх товарних позицій з описами та зображеннями, адаптивний дизайн, SEO-оптимізацію під іспанський ринок та інтеграцію з Google Maps API для відображення розташування магазину.',
  fullDescriptionEs:
    'Tu bebe y tu es una tienda en línea española de WooCommerce para productos de bebé y maternidad, construida sobre un tema de WordPress personalizado con un catálogo de productos completamente poblado. El proyecto incluyó la carga de todos los artículos con descripciones e imágenes, diseño responsivo, optimización SEO para el mercado español e integración con Google Maps API para mostrar la ubicación de la tienda.',
  fullDescriptionDe:
    'Tu bebe y tu ist ein spanischer WooCommerce-Online-Shop für Baby- und Mutterschaftsprodukte, der auf einem individuellen WordPress-Theme mit vollständig eingepflegtem Produktkatalog basiert. Das Projekt umfasste das Anlegen sämtlicher Artikel mit Beschreibungen und Bildern, ein responsives Design, eine SEO-Optimierung für den spanischen Markt sowie eine Google Maps-Integration zur Darstellung des Ladenstandorts.',
  detailHeroLine: 'CUSTOM WORDPRESS · BABY & MOTHER STORE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'WooCommerce', label: 'E-Commerce Engine', accent: 'darkGreen' },
    { value: 'ES Market', label: 'Target Audience', accent: 'neutral' },
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
      'A custom WordPress theme hosts the WooCommerce store, managing the full product catalogue for baby and mother items with cart and checkout functionality. Custom CSS3 and JavaScript deliver a warm, brand-consistent shopping experience, while Nginx and Cloudflare ensure fast, secure delivery to Spanish shoppers.',
    descriptionUa:
      'Індивідуальна тема WordPress обслуговує магазин WooCommerce, керуючи повним каталогом товарів для немовлят і матерів із функціями кошика та оформлення замовлення. Кастомні CSS3 та JavaScript створюють теплий, узгоджений із брендом досвід покупок, а Nginx і Cloudflare забезпечують швидку та безпечну доставку іспанським покупцям.',
    descriptionEs:
      'Un tema de WordPress personalizado aloja la tienda WooCommerce, gestionando el catálogo completo de productos para bebés y madres con funciones de carrito y pago. El CSS3 y JavaScript personalizados brindan una experiencia de compra cálida y coherente con la marca, mientras que Nginx y Cloudflare garantizan una entrega rápida y segura en España.',
    descriptionDe:
      'Ein individuelles WordPress-Theme bildet die Basis für den WooCommerce-Shop und verwaltet den gesamten Produktkatalog für Baby- und Mutterschaftsartikel inklusive Warenkorb- und Checkout-Funktion. Maßgeschneidertes CSS3 und JavaScript sorgen für ein einladendes, markengerechtes Einkaufserlebnis, während Nginx und Cloudflare eine schnelle, sichere Auslieferung an spanische Kunden gewährleisten.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/tubebeytu_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/tubebeytu_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/tubebeytu_thumb.webp',
      caption: 'Home page with featured baby and mother product categories and hero banner',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/tubebeytu/tubebeytu_slide2.webp',
      caption: 'Product catalogue page with WooCommerce listings for baby and maternity items',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and Spanish SEO-optimized store pages' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive Grid layouts and warm brand-consistent styling' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product displays and shopping cart behavior' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side store logic' },
      { short: 'MySQL', full: 'MySQL database for product catalogue, orders, and customer data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the e-commerce platform foundation' },
      { short: 'WooCommerce', full: 'WooCommerce providing complete product management, cart, and checkout functionality' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built to match the baby and mother brand identity' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection in the Spanish market' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer sessions and payment transactions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WooCommerce performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying the store\'s physical location for local shoppers' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking e-commerce conversions, product views, and revenue metrics' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Spanish-language SEO targeting baby and maternity product searches in Spain' },
      { short: 'Schema.org Markup', full: 'Product structured data for rich search results with pricing and availability' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green Core Web Vitals scores across store pages' },
      { short: 'WebP Images', full: 'WebP product images for fast loading without sacrificing visual quality' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing tools for Spanish-market promotions and customer engagement campaigns' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Індивідуальна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A fully custom WordPress theme was developed to create a warm, welcoming brand environment tailored specifically to the baby and mother market in Spain.',
      descriptionUa:
        'Повністю кастомна тема WordPress була розроблена для створення теплої, гостинної атмосфери бренду, спеціально адаптованої до ринку товарів для немовлят і матерів в Іспанії.',
      descriptionEs:
        'Se desarrolló un tema de WordPress totalmente personalizado para crear un entorno de marca cálido y acogedor adaptado específicamente al mercado de bebés y maternidad en España.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes WordPress-Theme wurde entwickelt, um eine warme, einladende Markenwelt speziell für den Baby- und Mutterschaftsmarkt in Spanien zu schaffen.',
    },
    {
      title: 'WooCommerce Integration',
      titleUa: 'Інтеграція WooCommerce',
      titleEs: 'Integración de WooCommerce',
      titleDe: 'WooCommerce-Integration',
      description:
        'WooCommerce was fully integrated to power the online store, including product catalogue management, shopping cart, secure checkout, and payment gateway support.',
      descriptionUa:
        'WooCommerce було повністю інтегровано для забезпечення роботи інтернет-магазину, включаючи управління каталогом товарів, кошик, безпечне оформлення замовлення та підтримку платіжних шлюзів.',
      descriptionEs:
        'WooCommerce se integró por completo para impulsar la tienda en línea, incluyendo la gestión del catálogo de productos, carrito de compras, pago seguro y pasarelas de pago.',
      descriptionDe:
        'WooCommerce wurde vollständig integriert, um den Online-Shop inklusive Produktkatalogverwaltung, Warenkorb, sicherem Checkout und Zahlungsanbindungen zu betreiben.',
    },
    {
      title: 'Full Product Catalogue Setup',
      titleUa: 'Повне налаштування каталогу товарів',
      titleEs: 'Configuración completa del catálogo de productos',
      titleDe: 'Vollständige Einrichtung des Produktkatalogs',
      description:
        'All baby and mother products were entered with detailed descriptions, categories, images, and pricing to provide shoppers with comprehensive product information.',
      descriptionUa:
        'Усі товари для немовлят і матерів були внесені з детальними описами, категоріями, зображеннями та цінами для надання покупцям вичерпної інформації про продукцію.',
      descriptionEs:
        'Todos los productos para bebés y madres se cargaron con descripciones detalladas, categorías, imágenes y precios para ofrecer a los compradores información completa.',
      descriptionDe:
        'Alle Baby- und Mutterschaftsprodukte wurden mit ausführlichen Beschreibungen, Kategorien, Bildern und Preisen eingepflegt, um Käufern umfassende Produktinformationen zu bieten.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The store is fully responsive across desktops, tablets, and smartphones, ensuring Spanish parents can browse and purchase products conveniently from any device.',
      descriptionUa:
        'Магазин повністю адаптивний на комп\'ютерах, планшетах і смартфонах, завдяки чому іспанські батьки можуть зручно переглядати та купувати товари з будь-якого пристрою.',
      descriptionEs:
        'La tienda es totalmente responsiva en ordenadores, tabletas y teléfonos inteligentes, permitiendo a los padres españoles navegar y comprar cómodamente desde cualquier dispositivo.',
      descriptionDe:
        'Der Shop ist auf Desktops, Tablets und Smartphones vollständig responsiv, sodass Eltern in Spanien bequem von jedem Endgerät aus stöbern und einkaufen können.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Spanish-language SEO with Schema.org product markup and optimized meta tags drives organic search visibility for baby and maternity product queries in Spain.',
      descriptionUa:
        'Іспаномовне SEO з товарною розміткою Schema.org та оптимізованими мета-тегами підвищує органічну видимість за пошуковими запитами товарів для немовлят і вагітних в Іспанії.',
      descriptionEs:
        'El SEO en español con marcado de productos Schema.org y metaetiquetas optimizadas impulsa la visibilidad orgánica para búsquedas de artículos de bebé y maternidad en España.',
      descriptionDe:
        'Spanischsprachiges SEO mit Schema.org-Produkt-Markup und optimierten Meta-Tags steigert die organische Sichtbarkeit für Suchanfragen nach Baby- und Umstandsartikeln in Spanien.',
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
  liveUrl: 'https://www.tubebeytu.es/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default tuBebeYTu
