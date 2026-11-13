import { Project } from '../project-types'

const eliteHealthWarrior: Project = {
  id: 8950,
  title: 'Elite Health Warrior',
  description: 'US-based Health and Wellness',
  descriptionUa: 'Американський бренд товарів для здоров’я та самопочуття',
  descriptionEs: 'Marca estadounidense de salud y bienestar',
  descriptionDe: 'US-amerikanische Marke für Gesundheit und Wellness',
  fullDescription:
    'A custom Joomla-powered health and wellness website for a US-based brand, featuring a fully custom-built template, VirtueMart eCommerce integration, product catalog management, and SEO optimization. The project involved complete template development, CSS/JS customization, and ongoing content population.',
  fullDescriptionUa:
    'Вебсайт на Joomla для американського бренду товарів для здоров’я та самопочуття, що включає повністю кастомний шаблон, інтеграцію VirtueMart eCommerce, управління каталогом товарів та SEO-оптимізацію. Проєкт охоплював повну розробку шаблону, налаштування CSS/JS та наповнення контентом.',
  fullDescriptionEs:
    'Un sitio web de salud y bienestar desarrollado con Joomla para una marca estadounidense, con una plantilla completamente personalizada, integración de eCommerce con VirtueMart, gestión del catálogo de productos y optimización SEO. El proyecto incluyó el desarrollo íntegro de la plantilla, la personalización de CSS/JS y la carga de contenido.',
  fullDescriptionDe:
    'Eine maßgeschneiderte Gesundheits- und Wellness-Website auf Joomla-Basis für eine US-amerikanische Marke mit vollständig individuell entwickeltem Template, VirtueMart-eCommerce-Integration, Produktkatalogverwaltung und SEO-Optimierung. Das Projekt umfasste die komplette Template-Entwicklung, CSS/JS-Anpassungen sowie die fortlaufende Inhaltspflege.',
  detailHeroLine: 'JOOMLA · ECOMMERCE · HEALTH & WELLNESS',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'VirtueMart', label: 'eCommerce', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'Joomla Core' },
          { label: 'Custom Template', highlight: true },
          { label: 'VirtueMart' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'PHP Engine', highlight: true },
          { label: 'Web Server' },
        ],
      },
    ],
    description:
      'The site is built on Joomla CMS with a fully custom PHP template developed from scratch. VirtueMart powers the eCommerce layer with product catalog, cart, and checkout. MySQL stores all content and product data, served through PHP on a cPanel hosting environment with Cloudflare CDN protection.',
    descriptionUa:
      'Сайт побудовано на Joomla CMS із повністю кастомним PHP-шаблоном, розробленим з нуля. VirtueMart забезпечує шар електронної комерції з каталогом товарів, кошиком та оформленням замовлення. MySQL зберігає весь контент і дані про товари, які обслуговуються через PHP на cPanel-хостингу під захистом Cloudflare CDN.',
    descriptionEs:
      'El sitio está construido sobre Joomla CMS con una plantilla PHP totalmente personalizada desarrollada desde cero. VirtueMart impulsa la capa de comercio electrónico con catálogo de productos, carrito y pago. MySQL almacena todo el contenido y los datos de productos, servidos mediante PHP en un entorno de alojamiento cPanel con protección CDN de Cloudflare.',
    descriptionDe:
      'Die Website basiert auf Joomla CMS mit einem von Grund auf neu entwickelten PHP-Template. VirtueMart steuert die eCommerce-Schicht inklusive Produktkatalog, Warenkorb und Checkout. MySQL speichert sämtliche Inhalts- und Produktdaten, die über PHP in einer cPanel-Hosting-Umgebung mit Cloudflare-CDN-Schutz ausgeliefert werden.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/other-cms/elitehealthwarrior_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/other-cms/elitehealthwarrior_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/elitehealthwarrior_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/elitehealthwarrior/elitehealthwarrior_slide2.webp',
      caption: 'Product catalog page with health supplement listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/elitehealthwarrior/elitehealthwarrior_slide3.webp',
      caption: 'Inner content page with wellness articles and product details',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all template layouts' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the brand-aligned visual design and responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing interactive UI elements and animations' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and business logic' },
      { short: 'MySQL', full: 'MySQL database storing all site content, product data, and user information' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing all site content, modules, and eCommerce data' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built from scratch to match brand identity' },
      { short: 'VirtueMart', full: 'VirtueMart eCommerce extension handling product catalog, cart, and checkout' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed server environment hosting the Joomla application' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all customer data and transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking user sessions, traffic sources, and conversion events' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Joomla SEO settings with clean URLs, meta tags, and semantic HTML structure' },
      { short: 'Schema.org Markup', full: 'Structured data markup improving product and business visibility in search results' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template Development',
      titleUa: 'Розробка кастомного шаблону Joomla',
      titleEs: 'Desarrollo de plantilla personalizada en Joomla',
      titleDe: 'Individuelle Joomla-Template-Entwicklung',
      description:
        'A fully custom Joomla PHP template was designed and built from scratch to match the brand\'s health and wellness identity, providing complete control over layout, typography, and module placement.',
      descriptionUa:
        'Повністю кастомний PHP-шаблон для Joomla був спроєктований та створений з нуля відповідно до айдентики бренду здоров\'я та велнесу, забезпечуючи повний контроль над сіткою, типографікою та розміщенням модулів.',
      descriptionEs:
        'Se diseñó y construyó desde cero una plantilla PHP personalizada para Joomla acorde a la identidad de salud y bienestar de la marca, ofreciendo control total sobre el diseño, la tipografía y la ubicación de módulos.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes Joomla-PHP-Template wurde von Grund auf entworfen und umgesetzt, um die Gesundheits- und Wellness-Identität der Marke widerzuspiegeln und volle Kontrolle über Layout, Typografie und Modulplatzierung zu bieten.',
    },
    {
      title: 'VirtueMart eCommerce Integration',
      titleUa: 'Інтеграція електронної комерції VirtueMart',
      titleEs: 'Integración de eCommerce con VirtueMart',
      titleDe: 'VirtueMart-eCommerce-Integration',
      description:
        'VirtueMart was integrated to deliver a complete eCommerce solution including product catalog management, shopping cart, secure checkout, and multiple payment gateway support.',
      descriptionUa:
        'Інтегровано VirtueMart для створення повноцінного eCommerce-рішення, що включає управління каталогом товарів, кошик, безпечне оформлення замовлення та підтримку кількох платіжних шлюзів.',
      descriptionEs:
        'Se integró VirtueMart para ofrecer una solución completa de comercio electrónico que incluye gestión del catálogo de productos, carrito de compras, pago seguro y soporte para múltiples pasarelas de pago.',
      descriptionDe:
        'VirtueMart wurde integriert, um eine vollständige eCommerce-Lösung mit Produktkatalogverwaltung, Warenkorb, sicherem Checkout und Unterstützung mehrerer Zahlungsanbieter bereitzustellen.',
    },
    {
      title: 'Product & Content Management',
      titleUa: 'Управління товарами та контентом',
      titleEs: 'Gestión de productos y contenidos',
      titleDe: 'Produkt- & Content-Management',
      description:
        'Health supplement products were added with descriptions, pricing, and imagery, alongside wellness articles and informational content managed through the Joomla admin panel.',
      descriptionUa:
        'Додано дієтичні добавки з описами, цінами та зображеннями разом із велнес-статтями та інформаційними матеріалами, що керуються через адмін-панель Joomla.',
      descriptionEs:
        'Se añadieron suplementos de salud con descripciones, precios e imágenes, junto con artículos de bienestar y contenido informativo gestionado desde el panel de administración de Joomla.',
      descriptionDe:
        'Nahrungsergänzungsmittel wurden samt Beschreibungen, Preisen und Produktbildern eingepflegt, ergänzt durch Wellness-Artikel und Informationsinhalte über das Joomla-Administrationspanel.',
    },
    {
      title: 'SEO & Technical Optimization',
      titleUa: 'SEO та технічна оптимізація',
      titleEs: 'Optimización técnica y SEO',
      titleDe: 'SEO- & technische Optimierung',
      description:
        'Implemented Joomla\'s native SEO tools with clean URLs, optimized meta tags, fast loading times, and semantic HTML to improve organic search visibility.',
      descriptionUa:
        'Впроваджено нативні SEO-інструменти Joomla з чистими URL-адресами, оптимізованими метатегами, швидким завантаженням та семантичним HTML для покращення видимості в органічному пошуку.',
      descriptionEs:
        'Se implementaron las herramientas SEO nativas de Joomla con URLs limpias, metaetiquetas optimizadas, tiempos de carga rápidos y HTML semántico para mejorar la visibilidad orgánica.',
      descriptionDe:
        'Implementierung der nativen Joomla-SEO-Werkzeuge mit sprechenden URLs, optimierten Meta-Tags, schnellen Ladezeiten und semantischem HTML zur Steigerung der organischen Sichtbarkeit.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The custom template was optimized for seamless performance across desktops, tablets, and mobile devices, ensuring accessibility for all visitors.',
      descriptionUa:
        'Кастомний шаблон оптимізовано для бездоганної роботи на десктопах, планшетах і мобільних пристроях, що гарантує зручність для всіх відвідувачів.',
      descriptionEs:
        'La plantilla personalizada se optimizó para un rendimiento fluido en ordenadores de escritorio, tabletas y teléfonos móviles, garantizando la accesibilidad para todos los visitantes.',
      descriptionDe:
        'Das maßgeschneiderte Template wurde für eine reibungslose Darstellung auf Desktops, Tablets und Smartphones optimiert und gewährleistet hohen Bedienkomfort für alle Besucher.',
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
  liveUrl: 'https://elitehealthwarrior.com/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default eliteHealthWarrior
