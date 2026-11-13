import { Project } from '../project-types'

const healthLinesPro: Project = {
  id: 8850,
  title: 'Health Linespro',
  description: 'US-based Wellness Hub',
  descriptionUa: 'Американський велнес-хаб',
  descriptionEs: 'Hub de bienestar estadounidense',
  descriptionDe: 'US-amerikanisches Wellness-Portal',
  fullDescription:
    'A custom Joomla-powered wellness hub website for a US-based health brand. The project included full custom template development, eCommerce integration for health products, SEO optimization, and ongoing content management - delivering a professional, conversion-focused wellness platform.',
  fullDescriptionUa:
    'Велнес-хаб на Joomla для американського бренду товарів для здоров’я. Проєкт включав розробку унікального шаблону, інтеграцію eCommerce для товарів для здоров’я, SEO-оптимізацію та контент-менеджмент, що забезпечило створення професійної платформи, орієнтованої на конверсію.',
  fullDescriptionEs:
    'Un sitio web hub de bienestar desarrollado con Joomla para una marca de salud estadounidense. El proyecto incluyó el desarrollo íntegro de una plantilla personalizada, la integración de eCommerce para productos de salud, la optimización SEO y la gestión de contenido, dando como resultado una plataforma profesional orientada a la conversión.',
  fullDescriptionDe:
    'Ein maßgeschneidertes Wellness-Portal auf Basis von Joomla CMS für eine US-amerikanische Gesundheitsmarke. Das Projekt umfasste die vollständige Entwicklung eines individuellen Templates, die eCommerce-Integration für Gesundheitsprodukte, SEO-Optimierung sowie das laufende Content-Management - mit dem Ergebnis einer professionellen, konversionsstarken Wellness-Plattform.',
  detailHeroLine: 'JOOMLA · ECOMMERCE · WELLNESS HUB',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'eCommerce', label: 'Shop Ready', accent: 'green' },
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
          { label: 'eCommerce Extension' },
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
      'Built on Joomla CMS with a custom PHP template developed from scratch. An eCommerce extension handles the product catalog and checkout workflow. MySQL stores all content and product data, served through PHP on a cPanel hosting environment.',
    descriptionUa:
      'Побудовано на Joomla CMS із кастомним PHP-шаблоном, розробленим з нуля. Розширення eCommerce відповідає за каталог товарів та процес оформлення замовлення. MySQL зберігає весь контент і дані про товари, що обслуговуються через PHP у середовищі хостингу cPanel.',
    descriptionEs:
      'Construido sobre Joomla CMS con una plantilla PHP personalizada desarrollada desde cero. Una extensión de eCommerce gestiona el catálogo de productos y el flujo de pago. MySQL almacena todo el contenido y los datos de productos, servidos mediante PHP en un entorno de alojamiento cPanel.',
    descriptionDe:
      'Aufgebaut auf Joomla CMS mit einem von Grund auf neu entwickelten PHP-Template. Eine eCommerce-Erweiterung steuert den Produktkatalog und den Checkout-Prozess. MySQL speichert alle Inhalts- und Produktdaten, die über PHP in einer cPanel-Hosting-Umgebung bereitgestellt werden.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/other-cms/healthlinespro_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/other-cms/healthlinespro_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/healthlinespro_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/healthlinespro/healthlinespro_slide2.webp',
      caption: 'Wellness products catalog page with category navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/healthlinespro/healthlinespro_slide3.webp',
      caption: 'Content page with health articles and product information',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all Joomla template views' },
      { short: 'CSS3', full: 'Custom CSS3 delivering the wellness brand visual design and responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing interactive UI elements across the site' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and content delivery' },
      { short: 'MySQL', full: 'MySQL database storing all site content, product listings, and user data' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing site content, modules, menus, and eCommerce data' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template developed to match the wellness brand identity' },
      { short: 'eCommerce Integration', full: 'Joomla eCommerce extension providing product management, cart, and secure checkout' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed web server hosting the Joomla application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer data and online transactions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking user behaviour, traffic sources, and conversion goals' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Clean URLs, meta tags, and semantic markup configured for search engine visibility' },
      { short: 'Schema.org Markup', full: 'Structured data improving product and content indexing in search results' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template Development',
      titleUa: 'Розробка кастомного шаблону Joomla',
      titleEs: 'Desarrollo de plantilla personalizada en Joomla',
      titleDe: 'Individuelle Joomla-Template-Entwicklung',
      description:
        'A brand-aligned Joomla PHP template was built from the ground up, offering complete control over layout, module zones, and visual styling tailored to the wellness niche.',
      descriptionUa:
        'Кастомний PHP-шаблон Joomla створено з нуля відповідно до стилю бренду, що дало повний контроль над версткою, модульними зонами та візуальним оформленням у велнес-ніші.',
      descriptionEs:
        'Se construyó desde cero una plantilla PHP de Joomla alineada con la marca, ofreciendo control total sobre el diseño, las zonas de módulos y el estilo visual adaptado al nicho del bienestar.',
      descriptionDe:
        'Ein markengerechtes Joomla-PHP-Template wurde von Grund auf neu erstellt und bietet volle Kontrolle über Layout, Modulpositionen und visuelles Styling für den Wellness-Bereich.',
    },
    {
      title: 'eCommerce Product Shop',
      titleUa: 'Інтернет-магазин товарів',
      titleEs: 'Tienda online de productos',
      titleDe: 'eCommerce-Produktshop',
      description:
        'Full eCommerce capabilities were integrated, including a product catalog, category browsing, shopping cart, and secure payment checkout for health and wellness products.',
      descriptionUa:
        'Інтегровано повний функціонал електронної комерції, включаючи каталог товарів, навігацію за категоріями, кошик та безпечну оплату товарів для здоров\'я та велнесу.',
      descriptionEs:
        'Se integraron capacidades completas de comercio electrónico, incluyendo catálogo de productos, navegación por categorías, carrito de compras y pago seguro para productos de salud y bienestar.',
      descriptionDe:
        'Vollständige eCommerce-Funktionen wurden integriert, darunter ein Produktkatalog, Kategorienavigation, Warenkorb und ein sicherer Bezahlvorgang für Gesundheits- und Wellnessprodukte.',
    },
    {
      title: 'Content & Product Management',
      titleUa: 'Управління контентом і товарами',
      titleEs: 'Gestión de contenidos y productos',
      titleDe: 'Content- & Produktmanagement',
      description:
        'Health articles, product descriptions, and media assets were populated and organized through the Joomla admin panel, keeping the hub fresh and informative.',
      descriptionUa:
        'Статті про здоров\'я, описи товарів та медіафайли були наповнені й впорядковані через адмін-панель Joomla, підтримуючи актуальність та інформативність платформи.',
      descriptionEs:
        'Los artículos de salud, las descripciones de productos y los recursos multimedia se cargaron y organizaron a través del panel de administración de Joomla, manteniendo el portal actualizado e informativo.',
      descriptionDe:
        'Gesundheitsartikel, Produktbeschreibungen und Medieninhalte wurden über das Joomla-Admin-Panel eingepflegt und strukturiert, sodass das Portal stets aktuell und informativ bleibt.',
    },
    {
      title: 'SEO & Performance Optimization',
      titleUa: 'SEO та оптимізація продуктивності',
      titleEs: 'Optimización de rendimiento y SEO',
      titleDe: 'SEO- & Performance-Optimierung',
      description:
        'Joomla SEO tools were configured with clean URLs, meta descriptions, and optimized image loading to support organic search traffic growth.',
      descriptionUa:
        'Налаштовано SEO-інструменти Joomla з чистими URL-адресами, метаописами та оптимізованим завантаженням зображень для зростання органічного пошукового трафіку.',
      descriptionEs:
        'Se configuraron las herramientas SEO de Joomla con URLs limpias, metadescripciones y carga optimizada de imágenes para impulsar el crecimiento del tráfico orgánico.',
      descriptionDe:
        'Die Joomla-SEO-Werkzeuge wurden mit sauberen URLs, Meta-Beschreibungen und optimiertem Laden von Bildern konfiguriert, um das organische Suchmaschinenwachstum zu fördern.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The custom template is fully responsive, delivering a consistent and usable experience across desktops, tablets, and mobile devices.',
      descriptionUa:
        'Кастомний шаблон є повністю адаптивним і забезпечує стабільний та зручний досвід користування на десктопах, планшетах і смартфонах.',
      descriptionEs:
        'La plantilla personalizada es totalmente responsiva y ofrece una experiencia consistente y fácil de usar en ordenadores, tabletas y dispositivos móviles.',
      descriptionDe:
        'Das maßgeschneiderte Template ist vollständig responsiv und bietet ein einheitliches, benutzerfreundliches Erlebnis auf Desktops, Tablets und Mobilgeräten.',
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
  liveUrl: '#',
  githubUrl: '#',
  category: ['other-cms'],
}

export default healthLinesPro
