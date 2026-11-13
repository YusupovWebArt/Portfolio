import { Project } from '../project-types'

const umanTravel: Project = {
  id: 8800,
  title: 'Uman travel',
  description:
    'Historical and cultural tourism information center based in Uman, Ukraine.',
  descriptionUa:
    'Туристично-інформаційний центр історико-культурного туризму в Умані, Україна.',
  descriptionEs:
    'Centro de información turística histórica y cultural ubicado en Uman, Ucrania.',
  descriptionDe:
    'Touristisches Informationszentrum für historischen und kulturellen Tourismus in Uman, Ukraine.',
  fullDescription:
    'A tourism information website for Uman Travel, a cultural and historical tourism center based in Uman, Ukraine. Built on Joomla CMS with a fully custom template, the site presents travel destinations, tour packages, and cultural points of interest, supported by Google Maps integration and SEO optimization for local and regional search visibility.',
  fullDescriptionUa:
    'Туристично-інформаційний вебсайт для Uman Travel, центру культурного та історичного туризму в Умані, Україна. Створений на Joomla CMS з унікальним кастомним шаблоном, сайт презентує туристичні локації, екскурсійні пакети та культурні пам’ятки за підтримки інтеграції Google Maps та SEO-оптимізації для локального пошуку.',
  fullDescriptionEs:
    'Un sitio web de información turística para Uman Travel, centro de turismo cultural e histórico ubicado en Uman, Ucrania. Desarrollado en Joomla CMS con una plantilla completamente personalizada, el sitio presenta destinos de viaje, paquetes turísticos y puntos de interés cultural, respaldado por la integración de Google Maps y la optimización SEO para búsquedas locales y regionales.',
  fullDescriptionDe:
    'Eine Tourismus-Informationswebsite für Uman Travel, ein Zentrum für Kultur- und Geschichtstourismus in Uman, Ukraine. Die auf Joomla CMS basierende Website verfügt über ein vollständig maßgeschneidertes Template und präsentiert Reiseziele, Reisepakete sowie kulturelle Sehenswürdigkeiten, unterstützt durch Google-Maps-Integration und SEO-Optimierung für lokale und regionale Suchanfragen.',
  detailHeroLine: 'JOOMLA · CUSTOM TEMPLATE · TRAVEL & TOURISM',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'green' },
    { value: 'Google Maps', label: 'Location', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'Joomla Core' },
          { label: 'Custom Template', highlight: true },
          { label: 'Modules & Extensions' },
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
      'The travel site is built on Joomla CMS with a custom PHP template developed to capture the cultural character of Uman tourism. Joomla modules manage tour listings, contact forms, and the Google Maps widget. All content and tour data are stored in MySQL, served through PHP on a cPanel-managed server.',
    descriptionUa:
      'Туристичний сайт створено на Joomla CMS із кастомним PHP-шаблоном, що передає культурний характер туризму в Умані. Модулі Joomla керують списками турів, контактними формами та віджетом Google Maps. Усі матеріали й дані турів зберігаються в MySQL і подаються через PHP на сервері з cPanel.',
    descriptionEs:
      'El sitio de viajes está construido sobre Joomla CMS con una plantilla PHP personalizada diseñada para reflejar el carácter cultural del turismo en Uman. Los módulos de Joomla gestionan los listados de tours, formularios de contacto y el widget de Google Maps. Todo el contenido se almacena en MySQL y se sirve mediante PHP en un servidor con cPanel.',
    descriptionDe:
      'Die Tourismus-Website basiert auf Joomla CMS mit einem maßgeschneiderten PHP-Template, das den kulturellen Charakter von Uman widerspiegelt. Joomla-Module verwalten Tourenangebote, Kontaktformulare und das Google-Maps-Widget. Alle Inhalte und Tourdaten werden in MySQL gespeichert und über PHP auf einem cPanel-Server ausgeliefert.',
  },
  image: '/Portfolio/images/portfolio/thumbs/other-cms/umantravel_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/other-cms/umantravel_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/umantravel_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/umantravel/umantravel_slide2.webp',
      caption: 'Tour packages and cultural destinations listing page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/umantravel/umantravel_slide3.webp',
      caption: 'Destination detail page with description and location map',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring all tour listing and destination pages accessibly' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a culturally inspired visual design with responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript enhancing navigation, interactive maps, and gallery components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP powering Joomla CMS server-side rendering and content delivery' },
      { short: 'MySQL', full: 'MySQL storing all tour content, destination data, and contact information' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing tour listings, articles, menus, and site configuration' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built to represent the Uman tourism brand' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed server environment hosting the Joomla application and MySQL database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing user data and contact form submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking visitor traffic, popular destination pages, and inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Joomla SEO settings configured with clean URLs, meta tags, and structured content' },
      { short: 'Google Maps API', full: 'Google Maps embedded to display tour locations and help visitors plan their trips' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template',
      titleUa: 'Кастомний шаблон Joomla',
      titleEs: 'Plantilla personalizada en Joomla',
      titleDe: 'Individuelles Joomla-Template',
      description:
        'A fully custom PHP template was built to reflect the cultural and historical character of Uman, giving the tourism center a unique and professional online identity.',
      descriptionUa:
        'Створено повністю кастомний PHP-шаблон, що відображає культурний та історичний характер Умані й надає туристичному центру унікальну професійну онлайн-ідентичність.',
      descriptionEs:
        'Se desarrolló una plantilla PHP completamente personalizada para reflejar el carácter cultural e histórico de Uman, otorgando al centro turístico una identidad online única y profesional.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes PHP-Template wurde entwickelt, um den kulturellen und historischen Charakter von Uman widerzuspiegeln und dem Tourismuszentrum eine einzigartige Online-Identität zu verleihen.',
    },
    {
      title: 'Tour & Destination Listings',
      titleUa: 'Каталог турів та локацій',
      titleEs: 'Listados de tours y destinos',
      titleDe: 'Touren- und Reisezielverzeichnis',
      description:
        'Tour packages and cultural destinations are organized into browsable categories with detailed descriptions, photos, and inquiry contact options.',
      descriptionUa:
        'Екскурсійні пакети та культурні локації організовано в зручні категорії з детальними описами, фотографіями та формами запиту.',
      descriptionEs:
        'Los paquetes turísticos y destinos culturales están organizados en categorías navegables con descripciones detalladas, fotografías y opciones de contacto para consultas.',
      descriptionDe:
        'Reisepakete und kulturelle Ziele sind in übersichtliche Kategorien mit detaillierten Beschreibungen, Fotos und Kontaktmöglichkeiten für Anfragen gegliedert.',
    },
    {
      title: 'Google Maps Integration',
      titleUa: 'Інтеграція Google Maps',
      titleEs: 'Integración de Google Maps',
      titleDe: 'Google-Maps-Integration',
      description:
        'An embedded Google Maps widget displays tour locations and points of interest, helping visitors plan their journeys before arrival.',
      descriptionUa:
        'Вбудований віджет Google Maps відображає туристичні локації та цікаві місця, допомагаючи відвідувачам спланувати подорож заздалегідь.',
      descriptionEs:
        'Un widget integrado de Google Maps muestra las ubicaciones de los tours y puntos de interés, ayudando a los visitantes a planificar su viaje antes de llegar.',
      descriptionDe:
        'Ein eingebettetes Google-Maps-Widget zeigt Tour-Standorte und Sehenswürdigkeiten an und hilft Besuchern, ihre Reise im Voraus zu planen.',
    },
    {
      title: 'SEO for Local Tourism',
      titleUa: 'SEO для локального туризму',
      titleEs: 'SEO para turismo local',
      titleDe: 'SEO für lokalen Tourismus',
      description:
        'On-page SEO was configured with clean URLs, optimized meta tags, and semantic HTML to improve visibility in local and regional travel search queries.',
      descriptionUa:
        'Налаштовано внутрішню SEO-оптимізацію з чистими URL-адресами, оптимізованими мета-тегами та семантичним HTML для покращення видимості в регіональних туристичних запитах.',
      descriptionEs:
        'El SEO on-page se configuró con URL limpias, metaetiquetas optimizadas y HTML semántico para mejorar la visibilidad en búsquedas de viajes locales y regionales.',
      descriptionDe:
        'On-Page-SEO wurde mit sauberen URLs, optimierten Meta-Tags und semantischem HTML konfiguriert, um die Sichtbarkeit bei lokalen und regionalen Reise-Suchanfragen zu erhöhen.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The template is fully responsive, ensuring travellers browsing on mobile devices get the same quality experience as desktop users.',
      descriptionUa:
        'Шаблон є повністю адаптивним, що гарантує мандрівникам на мобільних пристроях таку ж високу якість користування, як і на десктопах.',
      descriptionEs:
        'La plantilla es totalmente responsiva, garantizando que los viajeros que navegan desde dispositivos móviles obtengan la misma experiencia de calidad que los usuarios de escritorio.',
      descriptionDe:
        'Das Template ist vollständig responsiv und stellt sicher, dass Reisende auf mobilen Geräten dieselbe hochwertige Nutzererfahrung erhalten wie Desktop-Nutzer.',
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
  liveUrl: 'https://umantravel.com.ua/',
  githubUrl: '#',
  category: ['other-cms'],
}

export default umanTravel
