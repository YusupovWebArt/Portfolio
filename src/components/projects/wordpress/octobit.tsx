import { Project } from '../project-types'

const octobit: Project = {
  id: 18000,
  title: 'Octobit',
  description:
    'Octobit is a Ukrainian informational portal focused on cryptocurrency and blockchain topics. It’s aimed both at beginners and more experienced users.',
  descriptionUa:
    'Octobit - український інформаційний портал, присвячений криптовалютам та блокчейну, орієнтований як на початківців, так і на досвідчених користувачів.',
  descriptionEs:
    'Octobit es un portal informativo ucraniano centrado en criptomonedas y blockchain, orientado tanto a principiantes como a usuarios con mayor experiencia.',
  descriptionDe:
    'Octobit ist ein ukrainisches Informationsportal rund um Kryptowährungen und Blockchain, das sich sowohl an Einsteiger als auch an erfahrene Nutzer richtet.',
  fullDescription:
    'Development of a custom cryptocurrency and blockchain news portal for Octobit. Designed and developed a bespoke WordPress theme from scratch utilizing Advanced Custom Fields (ACF Pro) for article structures and dynamic sections. Integrates live exchange API endpoints to display real-time coin values, market indexes, and interactive tables. Fully optimized for high-volume content loading, implementing server-side transients, technical SEO, and multilingual UA/RU support.',
  fullDescriptionUa:
    'Розробка індивідуального інформаційного порталу про криптовалюти та блокчейн для Octobit. Створено унікальну тему WordPress з нуля з використанням Advanced Custom Fields (ACF Pro) для побудови структури статей та динамічних секцій. Портал інтегровано з API бирж для відображення цін на монети в режимі реального часу, ринкових індексів та інтерактивних таблиць. Проєкт повністю оптимізований для високих навантажень завдяки серверному кешуванню (transients), технічному SEO та підтримці декількох мов (UA/RU).',
  fullDescriptionEs:
    'Desarrollo de un portal personalizado de noticias sobre criptomonedas y blockchain para Octobit. Se diseñó y desarrolló un tema de WordPress exclusivo desde cero utilizando Advanced Custom Fields (ACF Pro) para estructurar artículos y secciones dinámicas. Integra endpoints de API de exchanges en tiempo real para mostrar precios de criptomonedas, índices de mercado y tablas interactivas. El proyecto está completamente optimizado para cargas de contenido elevadas mediante transients en el servidor, SEO técnico y soporte multilingüe UA/RU.',
  fullDescriptionDe:
    'Entwicklung eines maßgeschneiderten Nachrichten- und Informationsportals für Kryptowährungen und Blockchain für Octobit. Konzeption und Entwicklung eines individuellen WordPress-Themes von Grund auf unter Einsatz von Advanced Custom Fields (ACF Pro) für Artikelstrukturen und dynamische Sektionen. Integriert Live-Börsen-API-Endpunkte zur Anzeige von Echtzeit-Coin-Kursen, Marktindizes und interaktiven Tabellen. Vollständig optimiert für hohes Inhaltsaufkommen durch serverseitige Transients, technisches SEO und mehrsprachige UA/RU-Unterstützung.',
  detailHeroLine: 'CUSTOM WORDPRESS · CRYPTO & BLOCKCHAIN MEDIA PORTAL',
  detailMetrics: [
    { value: '95+', label: 'PageSpeed', accent: 'green' },
    { value: '<1.1s', label: 'Page load', accent: 'green' },
    { value: 'PHP 8 / ACF Pro', label: 'Custom Engine', accent: 'darkGreen' },
    { value: 'API Sync', label: 'Live Crypto Feed', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
          { label: 'ACF Pro Fields' },
        ],
      },
      {
        rowLabel: 'DATA SYNC',
        steps: [
          { label: 'Crypto Exchange APIs' },
          { label: 'WP Transients Cache', highlight: true },
          { label: 'Nginx FastCGI' },
        ],
      },
    ],
    description:
      'An information portal optimized for blockchain content, syncing real-time prices using exchange REST APIs and displaying content via custom PHP loops. Utilizes transient database caching to prevent server overload.',
    descriptionDe:
      'Ein für Blockchain-Inhalte optimiertes Informationsportal, das Echtzeitkurse über Börsen-REST-APIs synchronisiert und Inhalte über eigene PHP-Loops darstellt. Nutzt Transient-Datenbank-Caching, um Serverüberlastungen zu vermeiden.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/octobit_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/octobit_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/octobit_thumb.webp',
      caption: 'Home page displaying live coin price tickers and featured crypto articles',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/octobit/octobit_slide2.webp',
      caption: 'Blockchain informational guides and news grid presentation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/octobit/octobit_slide3.webp',
      caption: 'Detailed article template layout with responsive text styling and banners',
    },
  ],
  technologies: {
    frontend: [
      'HTML5',
      'CSS3 (Flexbox/Grid)',
      'JavaScript (ES6)',
      'Responsive Layouts',
    ],
    backend: ['PHP 8+', 'MySQL', 'REST API Integration'],
    contentManagement: [
      'WordPress Core',
      'Advanced Custom Fields (ACF Pro)',
      'Custom Fields & Loops',
    ],
    devopsSecurity: ['Cloudflare Edge Caching', 'SSL encryption'],
    analytics: ['Google Analytics (GA4)', 'Google Search Console'],
    seo: ['Semantic HTML5', 'JSON-LD Crypto Schema', 'Meta Tags'],
    performanceOptimization: [
      'Next-gen WebP assets',
      'Object Caching',
      'Browser cache headers',
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      titleDe: 'Individuelle WordPress-Theme-Entwicklung',
      description:
        'Developed from scratch to provide maximum performance for high-traffic media portals.',
      descriptionDe:
        'Von Grund auf entwickelt, um maximale Performance für stark frequentierte Medienportale zu gewährleisten.',
    },
    {
      title: 'Real-time Crypto API Sync',
      titleDe: 'Echtzeit-Krypto-API-Synchronisation',
      description:
        'Integrated API endpoints from major exchanges to retrieve and display live cryptocurrency prices and market indexes.',
      descriptionDe:
        'Integration von API-Endpunkten führender Kryptobörsen zum Abrufen und Anzeigen von Live-Kryptowährungskursen und Marktindizes.',
    },
    {
      title: 'Modular ACF templates',
      titleDe: 'Modulare ACF-Templates',
      description:
        'Configured bespoke templates using ACF Pro, enabling content creators to build complex articles without code.',
      descriptionDe:
        'Konfiguration maßgeschneiderter Templates mit ACF Pro, sodass Redakteure komplexe Fachartikel ohne Programmierkenntnisse erstellen können.',
    },
    {
      title: 'Bilingual UA/RU structure',
      titleDe: 'Zweisprachige UA/RU-Struktur',
      description:
        'Implemented localized database views and language routing to serve regional audiences.',
      descriptionDe:
        'Implementierung lokalisierter Datenbankansichten und Sprach-Routings zur gezielten Ansprache regionaler Zielgruppen.',
    },
  ],
  challenges: [
    'Real-time API polling causing server load and performance degradation on high-traffic pages.',
    'Maintaining high PageSpeed scores with dynamic script widgets.',
  ],
  challengesUa: [
    'Опитування API в реальному часі спричиняло високе навантаження на сервер та зниження продуктивності на сторінках із великим трафіком.',
    'Підтримка високих показників PageSpeed за наявності динамічних скриптових віджетів.',
  ],
  challengesEs: [
    'Las consultas a la API en tiempo real provocaban carga en el servidor y degradación del rendimiento en páginas de alto tráfico.',
    'Mantener puntuaciones altas de PageSpeed con widgets de scripts dinámicos.',
  ],
  challengesDe: [
    'Echtzeit-API-Abfragen führten auf stark frequentierten Seiten zu hoher Serverlast und Leistungseinbußen.',
    'Aufrechterhaltung hoher PageSpeed-Werte trotz dynamischer Skript-Widgets.',
  ],
  solutions: [
    'Implemented server-side API caching with transient data storage to reduce external requests to once every 5 minutes.',
    'Deferred non-critical JavaScript widgets and optimized database queries using custom MySQL indexes.',
  ],
  solutionsUa: [
    'Впроваджено серверне кешування API за допомогою transient-сховища, щоб зменшити кількість зовнішніх запитів до одного разу на 5 хвилин.',
    'Відкладено завантаження некритичних JavaScript-віджетів та оптимізовано запити до бази даних за допомогою кастомних індексів MySQL.',
  ],
  solutionsEs: [
    'Se implementó almacenamiento en caché de API en el servidor mediante transients para reducir las solicitudes externas a una cada 5 minutos.',
    'Se aplazaron los widgets de JavaScript no críticos y se optimizaron las consultas a la base de datos mediante índices MySQL personalizados.',
  ],
  solutionsDe: [
    'Serverseitiges API-Caching über Transient-Datenspeicher implementiert, um externe Anfragen auf einmal alle 5 Minuten zu reduzieren.',
    'Nicht-kritische JavaScript-Widgets verzögert geladen und Datenbankabfragen mithilfe benutzerdefinierter MySQL-Indizes optimiert.',
  ],
  liveUrl: 'https://octobit.com.ua/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default octobit
