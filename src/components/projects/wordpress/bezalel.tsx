import { Project } from '../project-types'

const bezalel: Project = {
  id: 10870,
  title: 'Bezalel Care Management',
  description: 'Care coordination agency located in New York City.',
  descriptionUa: 'Агентство з координації догляду, розташоване в Нью-Йорку.',
  descriptionEs: 'Agencia de coordinación de cuidados con sede en Nueva York.',
  descriptionDe: 'Agentur für Pflegekoordination mit Sitz in New York City.',
  fullDescription:
    'A custom WordPress theme built from scratch for a New York City care coordination agency, using Elementor enhanced with custom CSS3, JavaScript, and PHP. The site clearly presents care management services, provider information, and contact channels to families and individuals seeking professional care coordination support in the NYC area.',
  fullDescriptionUa:
    'Кастомна тема WordPress, створена з нуля для нью-йоркського агентства з координації догляду, з використанням Elementor, доповненого кастомними CSS3, JavaScript та PHP. Сайт чітко представляє послуги з управління доглядом, інформацію про спеціалістів та канали зв’язку для родин і приватних осіб, які шукають професійну підтримку з координації догляду в районі Нью-Йорка.',
  fullDescriptionEs:
    'Tema WordPress personalizada construida desde cero para una agencia de coordinación de cuidados en Nueva York, utilizando Elementor ampliado con CSS3, JavaScript y PHP propios. El sitio presenta con claridad los servicios de gestión de cuidados, la información sobre los profesionales y los canales de contacto para familias e individuos que buscan apoyo profesional en coordinación de cuidados en el área de Nueva York.',
  fullDescriptionDe:
    'Ein von Grund auf neu entwickeltes Custom-WordPress-Theme für eine Agentur für Pflegekoordination in New York City, umgesetzt mit Elementor sowie individuellem CSS3, JavaScript und PHP. Die Website präsentiert übersichtlich Pflege-Management-Leistungen, Informationen für Dienstleister und Kontaktkanäle für Familien und Einzelpersonen, die im Raum NYC professionelle Unterstützung bei der Pflegekoordination suchen.',
  detailHeroLine: 'CUSTOM WORDPRESS · CARE MANAGEMENT · NEW YORK CITY',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Elementor', label: 'Page Builder', accent: 'darkGreen' },
    { value: 'Schema.org', label: 'Structured Data', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Elementor + Custom PHP', highlight: true },
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
      'WordPress with Elementor powers the page layout and content management layer, extended with custom PHP, CSS3, and JavaScript for unique design elements and enhanced functionality. MySQL stores all agency content and service information. Cloudflare CDN ensures fast delivery for NYC-area visitors.',
    descriptionUa:
      'WordPress із Elementor забезпечує роботу макета сторінок і рівня управління контентом, розширеного кастомними PHP, CSS3 та JavaScript для унікальних елементів дизайну й додаткової функціональності. MySQL зберігає весь контент агентства та інформацію про послуги. Cloudflare CDN гарантує швидку доставку для відвідувачів у районі Нью-Йорка.',
    descriptionEs:
      'WordPress con Elementor impulsa la capa de diseño de páginas y gestión de contenidos, ampliada con PHP, CSS3 y JavaScript personalizados para lograr elementos de diseño únicos y funcionalidad mejorada. MySQL almacena todo el contenido de la agencia y la información de servicios. Cloudflare CDN asegura una entrega rápida para los visitantes del área de Nueva York.',
    descriptionDe:
      'WordPress mit Elementor bildet die Grundlage für Seitenlayout und Content-Management, erweitert durch individuelles PHP, CSS3 und JavaScript für maßgeschneiderte Designelemente und erweiterte Funktionen. MySQL speichert sämtliche Agenturinhalte und Serviceinformationen. Das Cloudflare CDN sorgt für schnelle Ladezeiten für Besucher im Großraum New York City.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/bezalelservices_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/bezalelservices_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/bezalelservices_thumb.webp',
      caption: 'Home page presenting care coordination services with trust-focused design',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bezalelservices/bezalelservices_slide2.webp',
      caption: 'Services overview page detailing care management and coordination offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bezalelservices/bezalelservices_slide3.webp',
      caption: 'About and team section building client trust and credibility',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bezalelservices/bezalelservices_slide4.webp',
      caption: 'Contact page with Google Maps and appointment inquiry form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible healthcare service content' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a warm, trust-focused visual design for the agency' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth page transitions' },
      { short: 'Elementor', full: 'Elementor page builder enabling client-managed layout editing' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with agency-specific functionality' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, service pages, and form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all care management content and service pages' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast NYC-area delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing client inquiry and contact form data' },
      { short: 'Nginx', full: 'Nginx server with caching for responsive performance under traffic' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for service page engagement and inquiry conversion analysis' },
      { short: 'Google Maps API', full: 'Google Maps API displaying the NYC agency location on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local SEO targeting NYC care coordination and care management keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD LocalBusiness and HealthAndBeautyBusiness schema for local search rich results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP image format for faster loading of team photos and service visuals' },
    ],
  },
  features: [
    {
      title: 'Elementor Enhanced with Custom Code',
      titleUa: 'Elementor, розширений кастомним кодом',
      titleEs: 'Elementor potenciado con código personalizado',
      titleDe: 'Elementor erweitert durch individuellen Code',
      description:
        'Elementor provides a client-editable page structure, extended with custom CSS3 and JavaScript for advanced animations and a refined aesthetic beyond the builder\'s native capabilities.',
      descriptionUa:
        'Elementor забезпечує зручну для редагування клієнтом структуру сторінок, розширену кастомними CSS3 та JavaScript для просунутих анімацій і витонченої естетики за межами стандартних можливостей конструктора.',
      descriptionEs:
        'Elementor ofrece una estructura de páginas editable por el cliente, ampliada con CSS3 y JavaScript personalizados para lograr animaciones avanzadas y una estética refinada que supera las capacidades nativas del constructor.',
      descriptionDe:
        'Elementor bietet eine vom Kunden pflegbare Seitenstruktur, die durch individuelles CSS3 und JavaScript um anspruchsvolle Animationen und eine edle Ästhetik jenseits der nativen Builder-Funktionen erweitert wurde.',
    },
    {
      title: 'Service & Provider Information Pages',
      titleUa: 'Інформаційні сторінки про послуги та спеціалістів',
      titleEs: 'Páginas informativas de servicios y proveedores',
      titleDe: 'Informationsseiten zu Leistungen & Dienstleistern',
      description:
        'Clear service pages explain the agency\'s care coordination offerings and provider network, helping families understand what support is available and how to engage.',
      descriptionUa:
        'Зрозумілі сторінки послуг пояснюють пропозиції агентства з координації догляду та мережу спеціалістів, допомагаючи родинам дізнатися про доступну підтримку та порядок звернення.',
      descriptionEs:
        'Páginas de servicios claras explican las ofertas de coordinación de cuidados y la red de proveedores de la agencia, ayudando a las familias a comprender qué apoyo está disponible y cómo solicitarlo.',
      descriptionDe:
        'Übersichtliche Leistungsseiten erläutern die Angebote zur Pflegekoordination sowie das Partnernetzwerk der Agentur und helfen Familien zu verstehen, welche Unterstützung verfügbar ist.',
    },
    {
      title: 'Local NYC SEO & Schema Markup',
      titleUa: 'Локальне SEO для Нью-Йорка та розмітка Schema',
      titleEs: 'SEO local para NYC y marcado Schema',
      titleDe: 'Lokales NYC-SEO & Schema-Markup',
      description:
        'Local SEO strategy with Schema.org markup targets NYC care management search queries, improving visibility in Google Maps and local search results for families in need.',
      descriptionUa:
        'Стратегія локального SEO з розміткою Schema.org націлена на пошукові запити щодо управління доглядом у Нью-Йорку, покращуючи видимість у Google Maps та локальній видачі для родин, які потребують допомоги.',
      descriptionEs:
        'La estrategia de SEO local con marcado Schema.org apunta a consultas de búsqueda sobre gestión de cuidados en Nueva York, mejorando la visibilidad en Google Maps y en resultados locales para las familias.',
      descriptionDe:
        'Eine lokale SEO-Strategie mit Schema.org-Markup zielt auf Suchanfragen rund um Pflege-Management in NYC ab und verbessert die Sichtbarkeit in Google Maps sowie in lokalen Suchergebnissen.',
    },
    {
      title: 'Contact & Inquiry System',
      titleUa: 'Система контактів та запитів',
      titleEs: 'Sistema de contacto y consultas',
      titleDe: 'Kontakt- & Anfragesystem',
      description:
        'An integrated contact form and Google Maps display make it easy for potential clients to reach the agency and find the office location in New York City.',
      descriptionUa:
        'Інтегрована контактна форма та карта Google Maps дозволяють потенційним клієнтам легко зв’язатися з агентством і знайти розташування офісу в Нью-Йорку.',
      descriptionEs:
        'Un formulario de contacto integrado y la visualización de Google Maps facilitan que los clientes potenciales se comuniquen con la agencia y encuentren su oficina en Nueva York.',
      descriptionDe:
        'Ein integriertes Kontaktformular und eine Google-Maps-Ansicht machen es potenziellen Klienten leicht, die Agentur zu kontaktieren und den Bürostandort in New York City zu finden.',
    },
    {
      title: 'Responsive & Accessible Design',
      titleUa: 'Адаптивний та доступний дизайн',
      titleEs: 'Diseño responsive y accesible',
      titleDe: 'Responsives & barrierefreies Design',
      description:
        'Fully responsive design ensures caregivers and family members can access information and make inquiries seamlessly from any device, including mobile phones.',
      descriptionUa:
        'Повністю адаптивний дизайн гарантує, що опікуни та члени родин можуть зручно отримувати інформацію та залишати запити з будь-якого пристрою, включно зі смартфонами.',
      descriptionEs:
        'El diseño totalmente responsive garantiza que cuidadores y familiares puedan acceder a la información y realizar consultas sin problemas desde cualquier dispositivo, incluidos teléfonos móviles.',
      descriptionDe:
        'Das vollständig responsive Design stellt sicher, dass Pflegekräfte und Angehörige auf jedem Endgerät - einschließlich Smartphones - problemlos Informationen abrufen und Anfragen stellen können.',
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
  liveUrl: 'https://www.bezalelservices.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default bezalel
