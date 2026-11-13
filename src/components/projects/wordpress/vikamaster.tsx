import { Project } from '../project-types'

const vikaMaster: Project = {
  id: 10860,
  title: 'Vikamaster',
  description:
    'Handcrafted jewelry brand based in Ukraine, offering an array of beautifully artisan-made accessories.',
  descriptionUa:
    'Український бренд дизайнерських прикрас ручної роботи, що пропонує широкий асортимент вишуканих аксесуарів.',
  descriptionEs:
    'Marca ucraniana de joyería artesanal que ofrece una amplia variedad de accesorios elaborados a mano con exquisita calidad.',
  descriptionDe:
    'Ukrainische Marke für handgefertigten Schmuck mit einer vielfältigen Auswahl an kunstvoll gearbeiteten Accessoires.',
  fullDescription:
    'Vikamaster is a Ukrainian artisan jewelry online store built on a fully custom WordPress theme with WooCommerce integration. The project included setting up a complete product catalogue with handcrafted jewelry items, custom CSS3 and JavaScript styling for a premium boutique aesthetic, and SEO optimization to drive organic traffic for unique jewelry searches in Ukraine.',
  fullDescriptionUa:
    'Vikamaster - це український інтернет-магазин авторських прикрас, побудований на повністю унікальній темі WordPress із підтримкою WooCommerce. Проєкт включав створення повного каталогу товарів ручної роботи, кастомні стилі на CSS3 та JavaScript для створення естетики преміального бутіка, а також SEO-оптимізацію для залучення органічного трафіку за запитами унікальних прикрас в Україні.',
  fullDescriptionEs:
    'Vikamaster es una tienda en línea ucraniana de joyería artesanal construida sobre un tema de WordPress completamente personalizado con integración de WooCommerce. El proyecto incluyó la creación de un catálogo de productos artesanales completo, estilos personalizados en CSS3 y JavaScript para lograr una estética de boutique premium, y optimización SEO para atraer tráfico orgánico por búsquedas de joyería exclusiva en Ucrania.',
  fullDescriptionDe:
    'Vikamaster ist ein ukrainischer Online-Shop für handgefertigten Kunsthandwerksschmuck, der auf einem vollständig individuellen WordPress-Theme mit WooCommerce-Integration basiert. Das Projekt umfasste den Aufbau eines kompletten Produktkatalogs für Schmuckstücke in Handarbeit, individuelles CSS3- und JavaScript-Styling für eine edle Boutique-Ästhetik sowie SEO-Optimierung zur Steigerung des organischen Traffics bei Schmucksuchanfragen in der Ukraine.',
  detailHeroLine: 'CUSTOM WORDPRESS · ARTISAN JEWELRY STORE',
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
      'A custom WordPress theme designed for boutique jewelry presentation hosts WooCommerce for complete store functionality. Custom CSS3 ensures a premium visual aesthetic for product galleries, while JavaScript enhances interactive shopping elements. Cloudflare CDN and Nginx deliver fast, secure pages to Ukrainian customers.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена для презентації бутіка прикрас, використовує WooCommerce для повного функціоналу магазину. Кастомний CSS3 забезпечує преміальну візуальну естетику галерей товарів, а JavaScript покращує інтерактивні елементи покупок. Cloudflare CDN та Nginx гарантують швидку й безпечну доставку сторінок українським покупцям.',
    descriptionEs:
      'Un tema de WordPress personalizado diseñado para la presentación de joyería de boutique aloja WooCommerce para ofrecer funcionalidad completa de tienda. El CSS3 personalizado garantiza una estética visual premium en las galerías de productos, mientras que JavaScript mejora los elementos interactivos de compra. Cloudflare CDN y Nginx entregan páginas rápidas y seguras a los clientes en Ucrania.',
    descriptionDe:
      'Ein für die edle Schmuckpräsentation entworfenes WordPress-Theme nutzt WooCommerce für sämtliche Shop-Funktionen. Individuelles CSS3 sorgt für eine hochwertige Optik der Produktgalerien, während JavaScript interaktive Einkaufselemente bereichert. Cloudflare CDN und Nginx liefern schnelle, sichere Seiten für Kunden in der Ukraine.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/vikamaster_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/vikamaster_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/vikamaster_thumb.webp',
      caption: 'Home page with artisan jewelry hero banner and featured handcrafted collections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/vikamaster/vikamaster_slide2.webp',
      caption: 'Product catalogue with WooCommerce jewelry listings and category filters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/vikamaster/vikamaster_slide3.webp',
      caption: 'Individual jewelry product detail page with photos, description, and add-to-cart',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and SEO-optimized jewelry store pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a premium boutique aesthetic for product galleries and layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive product displays and shopping cart enhancements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress and WooCommerce server-side store logic' },
      { short: 'MySQL', full: 'MySQL database for jewelry product data, orders, and customer records' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the e-commerce and content management foundation' },
      { short: 'WooCommerce', full: 'WooCommerce providing product catalogue, cart, checkout, and payment processing' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for the artisan jewelry boutique aesthetic' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection in the Ukrainian market' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer data and payment transactions' },
      { short: 'Nginx', full: 'Nginx web server optimized for WooCommerce store performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API showing the brand\'s physical studio location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking product views, add-to-cart events, and sales conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Ukrainian jewelry SEO targeting artisan and handcrafted accessory search queries' },
      { short: 'Schema.org Markup', full: 'Product JSON-LD structured data for rich search results with pricing details' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals across all store pages' },
      { short: 'WebP Images', full: 'WebP format for high-quality jewelry product photography with fast loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for jewelry promotions and customer retention' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Індивідуальна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A bespoke WordPress theme was developed from scratch to capture the boutique aesthetic of a handcrafted jewelry brand, ensuring every design element supports premium product presentation.',
      descriptionUa:
        'Індивідуальна тема WordPress була розроблена з нуля, щоб передати естетику бутіка бренду прикрас ручної роботи та забезпечити преміальну презентацію кожного виробу.',
      descriptionEs:
        'Se desarrolló un tema de WordPress a medida desde cero para capturar la estética de boutique de una marca de joyería artesanal, garantizando una presentación de producto premium.',
      descriptionDe:
        'Ein maßgeschneidertes WordPress-Theme wurde von Grund auf entwickelt, um die Boutique-Ästhetik einer Manufaktur-Schmuckmarke einzufangen und eine erstklassige Produktpräsentation zu gewährleisten.',
    },
    {
      title: 'WooCommerce Integration',
      titleUa: 'Інтеграція WooCommerce',
      titleEs: 'Integración de WooCommerce',
      titleDe: 'WooCommerce-Integration',
      description:
        'WooCommerce was fully integrated to power the online store with product catalogue management, shopping cart, secure checkout, and payment gateway support for Ukrainian customers.',
      descriptionUa:
        'WooCommerce було повністю інтегровано для роботи інтернет-магазину з управлінням каталогом товарів, кошиком, безпечним оформленням замовлення та підтримкою платіжних шлюзів для українських покупців.',
      descriptionEs:
        'WooCommerce se integró por completo para impulsar la tienda en línea con gestión de catálogo, carrito de compras, pago seguro y pasarelas de pago para clientes ucranianos.',
      descriptionDe:
        'WooCommerce wurde vollständig integriert, um den Online-Shop mit Katalogverwaltung, Warenkorb, sicherem Checkout und Zahlungsanbindungen für ukrainische Kunden auszustatten.',
    },
    {
      title: 'Full Product Catalogue Setup',
      titleUa: 'Повне налаштування каталогу товарів',
      titleEs: 'Configuración completa del catálogo de productos',
      titleDe: 'Vollständige Einrichtung des Produktkatalogs',
      description:
        'All artisan jewelry items were added with detailed descriptions, high-quality photography, material specifications, and categorization to maximize customer engagement and conversions.',
      descriptionUa:
        'Усі авторські прикраси були додані з детальними описами, високоякісними фотографіями, характеристиками матеріалів та категоризацією для максимізації залучення покупців і конверсій.',
      descriptionEs:
        'Todas las piezas de joyería artesanal se añadieron con descripciones detalladas, fotografía de alta calidad, especificaciones de materiales y categorización para maximizar la conversión.',
      descriptionDe:
        'Sämtliche handgefertigten Schmuckstücke wurden mit detaillierten Beschreibungen, hochwertiger Fotografie, Materialangaben und Kategorisierung eingepflegt, um Kundenbindung und Konversionen zu maximieren.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The store is fully responsive across desktops, tablets, and smartphones, giving shoppers a seamless jewelry browsing and purchase experience from any device.',
      descriptionUa:
        'Магазин повністю адаптивний на комп\'ютерах, планшетах і смартфонах, надаючи покупцям бездоганний досвід перегляду та купівлі прикрас з будь-якого пристрою.',
      descriptionEs:
        'La tienda es totalmente responsiva en ordenadores, tabletas y teléfonos inteligentes, ofreciendo a los compradores una experiencia fluida de navegación y compra desde cualquier dispositivo.',
      descriptionDe:
        'Der Shop ist auf Desktops, Tablets und Smartphones vollständig responsiv und bietet Käufern auf jedem Endgerät ein nahtloses Stöber- und Einkaufserlebnis.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Ukrainian jewelry SEO with Schema.org product markup and optimized meta tags drives organic visibility for handcrafted and artisan accessory search queries.',
      descriptionUa:
        'Українське ювелірне SEO з товарною розміткою Schema.org та оптимізованими мета-тегами стимулює органічну видимість за пошуковими запитами аксесуарів ручної роботи.',
      descriptionEs:
        'El SEO de joyería para Ucrania con marcado de productos Schema.org y metaetiquetas optimizadas impulsa la visibilidad orgánica para búsquedas de accesorios artesanales.',
      descriptionDe:
        'Ukrainisches Schmuck-SEO mit Schema.org-Produkt-Markup und optimierten Meta-Tags steigert die organische Sichtbarkeit bei Suchanfragen nach handgefertigten Accessoires.',
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
  liveUrl: 'https://vikamaster.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default vikaMaster
