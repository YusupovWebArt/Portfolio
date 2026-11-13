import { Project } from '../project-types'

const vinEnergo: Project = {
  id: 8700,
  title: 'VIN Energo',
  description:
    'Ukrainian company specializing in the production and sale of Pini Kay wood and charcoal briquettes, as well as the manufacture of equipment for briquette production.',
  descriptionUa:
    'Українська компанія, що спеціалізується на виробництві та продажу паливних та вугільних брикетів Pini Kay, а також виготовленні обладнання для їх виробництва.',
  descriptionEs:
    'Empresa ucraniana especializada en la producción y venta de briquetas de madera y carbón Pini Kay, así como en la fabricación de equipos para la producción de briquetas.',
  descriptionDe:
    'Ukrainisches Unternehmen mit Spezialisierung auf die Herstellung und den Verkauf von Pini-Kay-Holz- und Holzkohlebriketts sowie den Bau von Anlagen zur Brikettproduktion.',
  fullDescription:
    'A Joomla-powered corporate website for VIN Energo, a Ukrainian manufacturer and seller of Pini Kay wood and charcoal briquettes. The project delivered a fully custom Joomla template, VirtueMart eCommerce integration for the product catalog, content population, and SEO optimization, enabling the company to present its products and services professionally online.',
  fullDescriptionUa:
    'Корпоративний вебсайт на Joomla для VIN Energo, українського виробника та продавця паливних та вугільних брикетів Pini Kay. Проєкт забезпечив розробку кастомного шаблону Joomla, інтеграцію VirtueMart eCommerce для каталогу продукції, наповнення контентом та SEO-оптимізацію для професійної презентації компанії в мережі.',
  fullDescriptionEs:
    'Un sitio web corporativo desarrollado con Joomla para VIN Energo, fabricante y vendedor ucraniano de briquetas de madera y carbón Pini Kay. El proyecto proporcionó una plantilla Joomla completamente personalizada, la integración de eCommerce con VirtueMart para el catálogo de productos, la carga de contenido y la optimización SEO, permitiendo a la empresa presentar sus productos y servicios de forma profesional en internet.',
  fullDescriptionDe:
    'Eine auf Joomla basierende Unternehmenswebsite für VIN Energo, einen ukrainischen Hersteller und Vertreiber von Pini-Kay-Holz- und Holzkohlebriketts. Das Projekt umfasste ein vollständig maßgeschneidertes Joomla-Template, die VirtueMart-E-Commerce-Integration für den Produktkatalog, die Inhaltspflege sowie eine SEO-Optimierung, damit das Unternehmen seine Produkte und Anlagen professionell online präsentieren kann.',
  detailHeroLine: 'JOOMLA · ECOMMERCE · MANUFACTURING',
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
      'Built on Joomla CMS with a custom PHP template developed to match the industrial briquette manufacturing brand. VirtueMart provides the eCommerce catalog and order management layer. MySQL stores all product and content data, served through PHP on a cPanel-managed server.',
    descriptionUa:
      'Побудовано на Joomla CMS із кастомним PHP-шаблоном, розробленим відповідно до промислового бренду виробництва брикетів. VirtueMart забезпечує рівень eCommerce-каталогу та управління замовленнями. MySQL зберігає всі дані про продукцію та контент, що подаються через PHP на сервері з cPanel.',
    descriptionEs:
      'Construido sobre Joomla CMS con una plantilla PHP personalizada adaptada a la marca industrial de fabricación de briquetas. VirtueMart proporciona la capa de catálogo eCommerce y gestión de pedidos. MySQL almacena todos los datos de productos y contenidos, servidos mediante PHP en un servidor con cPanel.',
    descriptionDe:
      'Aufgebaut auf Joomla CMS mit einem maßgeschneiderten PHP-Template, das auf die Industriemarke für Brikettherstellung abgestimmt ist. VirtueMart stellt den E-Commerce-Katalog und die Bestellverwaltung bereit. MySQL speichert alle Produkt- und Inhaltsdaten, die über PHP auf einem cPanel-Server ausgeliefert werden.',
  },
  image: '/Portfolio/images/portfolio/thumbs/other-cms/vinenergo_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/other-cms/vinenergo_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/vinenergo_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/vinenergo/vinenergo_slide2.webp',
      caption: 'Products page displaying briquette types with specifications and pricing',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 forming the accessible structure of all Joomla template pages' },
      { short: 'CSS3', full: 'Custom CSS3 delivering an industrial-themed visual design with responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing interactive UI elements and product gallery components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and eCommerce logic' },
      { short: 'MySQL', full: 'MySQL database storing all product catalog, content, and order information' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing site content, product listings, menus, and configuration' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built to reflect the VIN Energo brand identity' },
      { short: 'VirtueMart', full: 'VirtueMart eCommerce extension managing the briquette product catalog and orders' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed server environment hosting the Joomla application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing customer data and inquiry submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking visitor traffic, product page views, and inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Clean URLs, meta tags, and structured content configured for search engine visibility' },
      { short: 'Schema.org Markup', full: 'Product structured data supporting rich search results for briquette product listings' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template Development',
      titleUa: 'Розробка кастомного шаблону Joomla',
      titleEs: 'Desarrollo de plantilla personalizada en Joomla',
      titleDe: 'Individuelle Joomla-Template-Entwicklung',
      description:
        'A fully custom PHP Joomla template was built from scratch to match the industrial character of the briquette manufacturing business, with complete layout and styling control.',
      descriptionUa:
        'З нуля створено повністю кастомний PHP-шаблон Joomla, що відповідає промисловому характеру бізнесу з виробництва брикетів і забезпечує повний контроль над макетом та стилями.',
      descriptionEs:
        'Se construyó desde cero una plantilla PHP para Joomla completamente personalizada, acorde al carácter industrial del negocio de fabricación de briquetas, con control total del diseño y los estilos.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes PHP-Joomla-Template wurde von Grund auf neu entwickelt, um dem industriellen Charakter der Brikettherstellung gerecht zu werden und volle Layout- und Styling-Kontrolle zu bieten.',
    },
    {
      title: 'VirtueMart Product Catalog',
      titleUa: 'Каталог продукції на VirtueMart',
      titleEs: 'Catálogo de productos con VirtueMart',
      titleDe: 'VirtueMart-Produktkatalog',
      description:
        'VirtueMart eCommerce was configured to showcase the full product range of Pini Kay wood and charcoal briquettes with descriptions, specifications, and pricing.',
      descriptionUa:
        'Налаштовано VirtueMart eCommerce для демонстрації повного асортименту деревних та вугільних брикетів Pini Kay з описами, характеристиками та цінами.',
      descriptionEs:
        'Se configuró VirtueMart eCommerce para mostrar la gama completa de briquetas de madera y carbón Pini Kay con descripciones, especificaciones técnicas y precios.',
      descriptionDe:
        'VirtueMart E-Commerce wurde konfiguriert, um das gesamte Sortiment an Pini-Kay-Holz- und Holzkohlebriketts mit Beschreibungen, Spezifikationen und Preisen zu präsentieren.',
    },
    {
      title: 'Production Equipment Section',
      titleUa: 'Розділ виробничого обладнання',
      titleEs: 'Sección de equipos de producción',
      titleDe: 'Bereich für Produktionsanlagen',
      description:
        'A dedicated section presents the company\'s briquette production equipment range, helping B2B customers explore manufacturing solutions alongside retail products.',
      descriptionUa:
        'Окремий розділ презентує лінійку обладнання компанії для виробництва брикетів, допомагаючи B2B-клієнтам ознайомитися з виробничими рішеннями поряд із роздрібною продукцією.',
      descriptionEs:
        'Una sección dedicada presenta la línea de equipos de producción de briquetas de la empresa, ayudando a los clientes B2B a explorar soluciones de fabricación junto con los productos minoristas.',
      descriptionDe:
        'Ein eigener Bereich präsentiert das Sortiment an Brikett-Produktionsanlagen des Unternehmens und unterstützt B2B-Kunden dabei, Fertigungslösungen neben den Endprodukten zu entdecken.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Joomla SEO tools were configured with clean URLs, optimized meta tags, and semantic HTML to improve visibility for Ukrainian industrial and fuel product search terms.',
      descriptionUa:
        'Інструменти SEO в Joomla налаштовано з чистими URL-адресами, оптимізованими мета-тегами та семантичним HTML для підвищення видимості за промисловими та паливними пошуковими запитами.',
      descriptionEs:
        'Las herramientas SEO de Joomla se configuraron con URL limpias, metaetiquetas optimizadas y HTML semántico para mejorar la visibilidad en términos de búsqueda de combustibles y productos industriales.',
      descriptionDe:
        'Die Joomla-SEO-Tools wurden mit sauberen URLs, optimierten Meta-Tags und semantischem HTML konfiguriert, um die Sichtbarkeit für Suchbegriffe rund um Industrie- und Brennstoffprodukte zu verbessern.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The custom template is fully responsive, ensuring the corporate site displays correctly on mobile phones, tablets, and desktop screens.',
      descriptionUa:
        'Кастомний шаблон є повністю адаптивним, що гарантує коректне відображення корпоративного сайту на смартфонах, планшетах і десктопних екранах.',
      descriptionEs:
        'La plantilla personalizada es totalmente responsiva, garantizando que el sitio corporativo se muestre correctamente en teléfonos móviles, tabletas y pantallas de escritorio.',
      descriptionDe:
        'Das maßgeschneiderte Template ist vollständig responsiv und stellt sicher, dass die Unternehmenswebsite auf Smartphones, Tablets und Desktop-Bildschirmen optimal dargestellt wird.',
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
  liveUrl: 'http://vinenergo.com.ua/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default vinEnergo
