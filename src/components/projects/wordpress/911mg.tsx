import { Project } from '../project-types'

const mg911: Project = {
  id: 11000,
  title: '911mg',
  description:
    'US online health resource offering an extensive database of medications.',
  descriptionUa:
    'Онлайн-ресурс про здоров’я у США, який пропонує розширену базу даних лікарських препаратів.',
  descriptionEs:
    'Recurso de salud en línea de EE.UU. que ofrece una amplia base de datos de medicamentos.',
  descriptionDe:
    'US-amerikanisches Online-Gesundheitsportal mit einer umfassenden Medikamentendatenbank.',
  fullDescription:
    'A custom WordPress theme built entirely from scratch using pure PHP, custom CSS3, and JavaScript ES6, with no page builder dependency. The site serves as a comprehensive US medication database, featuring structured drug categories, coupon listings, product detail pages, and user reviews. Full SEO optimization and Google Analytics integration were implemented to maximize organic reach.',
  fullDescriptionUa:
    'Кастомна тема WordPress, розроблена з нуля з використанням чистого PHP, кастомних CSS3 та JavaScript ES6 без використання конструкторів сторінок. Сайт слугує вичерпною базою даних медикаментів у США, включаючи структуровані категорії препаратів, списки купонів, детальні сторінки продуктів та відгуки користувачів. Реалізовано повну SEO-оптимізацію та інтеграцію з Google Analytics для максимального органічного охоплення.',
  fullDescriptionEs:
    'Un tema de WordPress personalizado construido completamente desde cero utilizando PHP puro, CSS3 y JavaScript ES6, sin dependencia de constructores de páginas. El sitio sirve como una base de datos de medicamentos completa en EE.UU., con categorías estructuradas, listados de cupones, páginas de detalles de productos y opiniones de usuarios. Se implementó una optimización SEO completa e integración con Google Analytics para maximizar el alcance orgánico.',
  fullDescriptionDe:
    'Ein vollständig von Grund auf neu entwickeltes WordPress-Theme auf Basis von reinem PHP, individuellem CSS3 und JavaScript ES6 ohne Abhängigkeit von Page-Buildern. Die Website dient als umfassende US-Medikamentendatenbank mit strukturierten Arzneimittelkategorien, Gutscheinlisten, Produktdetailseiten und Nutzerbewertungen. Eine vollständige SEO-Optimierung sowie die Integration von Google Analytics wurden implementiert, um die organische Reichweite zu maximieren.',
  detailHeroLine: 'CUSTOM WORDPRESS · HEALTH & MEDICATION DATABASE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Theme', label: 'Pure PHP/CSS/JS', accent: 'darkGreen' },
    { value: 'Schema.org', label: 'Structured Data', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
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
      'The site is powered by a fully custom WordPress PHP theme with no page builder, enabling precise control over markup and performance. MySQL stores all medication data, categories, and user reviews. Cloudflare CDN and Nginx handle caching and global content delivery, ensuring fast load times across the US market.',
    descriptionUa:
      'Сайт працює на повністю кастомній PHP-темі WordPress без конструкторів сторінок, що забезпечує точний контроль над розміткою та швидкодією. MySQL зберігає всі дані про медикаменти, категорії та відгуки користувачів. Cloudflare CDN та Nginx відповідають за кешування й доставку контенту, гарантуючи швидке завантаження на ринку США.',
    descriptionEs:
      'El sitio funciona con un tema PHP de WordPress totalmente personalizado sin constructor de páginas, lo que permite un control preciso sobre el marcado y el rendimiento. MySQL almacena todos los datos de medicamentos, categorías y reseñas. Cloudflare CDN y Nginx gestionan el almacenamiento en caché y la entrega de contenido con tiempos de carga rápidos en EE. UU.',
    descriptionDe:
      'Die Website basiert auf einem vollständig maßgeschneiderten WordPress-PHP-Theme ohne Page-Builder, was eine präzise Kontrolle über Markup und Performance ermöglicht. MySQL speichert sämtliche Medikamentendaten, Kategorien und Nutzerbewertungen. Cloudflare CDN und Nginx übernehmen das Caching und die globale Auslieferung für schnelle Ladezeiten im gesamten US-Markt.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/911mg_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/911mg_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/911mg_thumb.webp',
      caption: 'Home page showcasing the medication database hero and navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide2.webp',
      caption: 'Individual medication product page with dosage and details',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide3.webp',
      caption: 'Medication categories browse view with filtering',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide4.webp',
      caption: 'Product categories listing page with structured layout',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide5.webp',
      caption: 'Coupons and discount offers section for medications',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide6.webp',
      caption: 'Category page displaying grouped medication listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/911mg/911mg_slide7.webp',
      caption: 'User reviews section with ratings for medications',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and structured content' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive grid layout for all screen sizes' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and dynamic filtering' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme logic for dynamic medication data rendering' },
      { short: 'MySQL', full: 'MySQL database for storing medication records, categories, and reviews' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all content, categories, and posts' },
      { short: 'Custom Theme', full: 'Fully hand-coded WordPress theme with no page builder dependency' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for DDoS protection and global content delivery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure data transmission for all users' },
      { short: 'Nginx', full: 'Nginx web server with caching configuration for fast response times' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for user sessions, popular medications, and traffic sources' },
      { short: 'Google Maps API', full: 'Google Maps API for location-based pharmacy finder functionality' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with optimized meta tags, headings, and canonical URLs' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for rich search results on medication pages' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance-tuned for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'Next-gen WebP image format delivering faster page loads' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Кастомна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Maßgeschneidertes WordPress-Theme von Grund auf',
      description:
        'The entire theme was hand-coded in PHP without any page builder, giving full control over every HTML element, performance characteristic, and design decision specific to a medication database site.',
      descriptionUa:
        'Усю тему написано вручну на PHP без жодного конструктора сторінок, що дало повний контроль над кожним HTML-елементом, показниками швидкодії та дизайнерськими рішеннями для бази даних медикаментів.',
      descriptionEs:
        'Todo el tema fue codificado a mano en PHP sin ningún constructor de páginas, otorgando control total sobre cada elemento HTML, el rendimiento y el diseño específico de una base de datos de medicamentos.',
      descriptionDe:
        'Das gesamte Theme wurde ohne Page-Builder in PHP handcodiert, was die volle Kontrolle über jedes HTML-Element, die Performance-Eigenschaften und das spezifische Design einer Medikamentendatenbank ermöglicht.',
    },
    {
      title: 'Structured Medication Database',
      titleUa: 'Структурована база даних препаратів',
      titleEs: 'Base de datos de medicamentos estructurada',
      titleDe: 'Strukturierte Medikamentendatenbank',
      description:
        'Medications are organized into hierarchical categories with individual product pages, dosage information, and coupon listings, making it easy for users to find and compare options.',
      descriptionUa:
        'Медикаменти організовано в ієрархічні категорії з індивідуальними сторінками препаратів, інформацією про дозування та купонами, що дозволяє легко знаходити й порівнювати варіанти.',
      descriptionEs:
        'Los medicamentos están organizados en categorías jerárquicas con páginas individuales, información de dosificación y listados de cupones, facilitando la búsqueda y comparación de opciones.',
      descriptionDe:
        'Medikamente sind in hierarchischen Kategorien mit eigenen Produktseiten, Dosierungsinformationen und Gutscheinangeboten organisiert, sodass Nutzer Optionen einfach finden und vergleichen können.',
    },
    {
      title: 'User Reviews System',
      titleUa: 'Система відгуків користувачів',
      titleEs: 'Sistema de reseñas de usuarios',
      titleDe: 'Nutzerbewertungssystem',
      description:
        'A custom reviews module allows site visitors to leave ratings and written feedback on specific medications, increasing trust and dwell time.',
      descriptionUa:
        'Кастомний модуль відгуків дозволяє відвідувачам залишати оцінки й текстові коментарі щодо конкретних препаратів, підвищуючи довіру та час перебування на сайті.',
      descriptionEs:
        'Un módulo de reseñas personalizado permite a los visitantes dejar valoraciones y comentarios escritos sobre medicamentos específicos, aumentando la confianza y el tiempo de permanencia.',
      descriptionDe:
        'Ein individuell entwickeltes Bewertungsmodul ermöglicht es Besuchern, Sternebewertungen und Erfahrungsberichte zu einzelnen Medikamenten abzugeben, was das Vertrauen und die Verweildauer erhöht.',
    },
    {
      title: 'SEO & Schema.org Integration',
      titleUa: 'SEO та інтеграція Schema.org',
      titleEs: 'Integración de SEO y Schema.org',
      titleDe: 'SEO- und Schema.org-Integration',
      description:
        'Built-in technical SEO best practices combined with JSON-LD Schema.org markup on medication pages drive rich snippets in search results and improved organic rankings.',
      descriptionUa:
        'Вбудовані практики технічного SEO у поєднанні з розміткою JSON-LD Schema.org на сторінках препаратів забезпечують розширені сніпети в пошуковій видачі та вищі органічні позиції.',
      descriptionEs:
        'Las mejores prácticas de SEO técnico combinadas con el marcado JSON-LD de Schema.org en las páginas de medicamentos generan fragmentos enriquecidos en los resultados de búsqueda y mejor posicionamiento.',
      descriptionDe:
        'Integrierte Best Practices für technisches SEO in Kombination mit JSON-LD-Schema.org-Markup auf den Medikamentenseiten sorgen für Rich Snippets in den Suchergebnissen und bessere organische Rankings.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'Fully responsive CSS Grid layout ensures an optimal browsing experience across desktop, tablet, and mobile devices for US health consumers.',
      descriptionUa:
        'Повністю адаптивний макет на CSS Grid забезпечує оптимальний перегляд на десктопах, планшетах і смартфонах для американських споживачів медичних послуг.',
      descriptionEs:
        'El diseño totalmente responsivo con CSS Grid garantiza una experiencia de navegación óptima en ordenadores, tabletas y móviles para los consumidores de salud en EE. UU.',
      descriptionDe:
        'Ein vollständig responsives CSS-Grid-Layout gewährleistet eine optimale Nutzung auf Desktop-, Tablet- und Mobilgeräten für Gesundheitsinteressierte in den USA.',
    },
  ],
  challenges: [
    'Managing an extensive US pharmaceutical database with fast client-side searching and category navigation without server bloat.',
    'Implementing structured Schema.org drug metadata for rich snippets while maintaining strict zero-pagebuilder performance.',
  ],
  challengesUa: [
    'Управління великою базою даних фармацевтичних препаратів США зі швидким клієнтським пошуком та навігацією без перевантаження сервера.',
    'Впровадження структурованих метаданих Schema.org для розширених сніпетів за збереження високої швидкодії без конструкторів сторінок.',
  ],
  challengesEs: [
    'Gestión de una extensa base de datos farmacéutica de EE. UU. con búsqueda rápida en el cliente y navegación por categorías sin sobrecargar el servidor.',
    'Implementación de metadatos estructurados Schema.org para fragmentos enriquecidos manteniendo un rendimiento estricto sin constructores de páginas.',
  ],
  challengesDe: [
    'Verwaltung einer umfangreichen US-Arzneimitteldatenbank mit schneller clientseitiger Suche und Kategorienavigation ohne Server-Ballast.',
    'Implementierung strukturierter Schema.org-Arzneimittel-Metadaten für Rich Snippets bei gleichzeitiger Einhaltung höchster Performance ohne Page-Builder.',
  ],
  solutions: [
    'Engineered a custom PHP and MySQL architecture with lightweight indexing, responsive UI grid, and Cloudflare CDN caching.',
    'Authored valid JSON-LD schemas directly in custom theme templates, achieving 90+ PageSpeed score and Google rich results.',
  ],
  solutionsUa: [
    'Спроєктовано кастомну архітектуру PHP та MySQL з легким індексуванням, адаптивною CSS-сіткою та кешуванням Cloudflare CDN.',
    'Створено валідні схеми JSON-LD безпосередньо у шаблонах теми, досягнувши показника PageSpeed 90+ та розширених результатів Google.',
  ],
  solutionsEs: [
    'Diseño de una arquitectura personalizada de PHP y MySQL con indexación ligera, cuadrícula adaptable y almacenamiento en caché de Cloudflare CDN.',
    'Creación de esquemas JSON-LD válidos directamente en las plantillas del tema, logrando una puntuación de PageSpeed de 90+ y resultados enriquecidos de Google.',
  ],
  solutionsDe: [
    'Entwicklung einer maßgeschneiderten PHP- und MySQL-Architektur mit schlanker Indizierung, responsivem UI-Grid und Cloudflare-CDN-Caching.',
    'Direkte Einbindung valider JSON-LD-Schemata in die individuellen Theme-Templates, wodurch ein PageSpeed-Wert von 90+ sowie Google Rich Results erzielt wurden.',
  ],
  liveUrl: 'https://www.911mg.org/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default mg911
