import { Project } from '../project-types'

const bemol: Project = {
  id: 10980,
  title: 'Bemol',
  description: 'Czech plumbing and heating services provider.',
  descriptionUa: 'Чеський постачальник сантехнічних та опалювальних послуг.',
  descriptionEs: 'Proveedor checo de servicios de fontanería y calefacción.',
  descriptionDe: 'Tschechischer Anbieter für Sanitär- und Heizungsdienstleistungen.',
  fullDescription:
    'A custom WordPress theme built from scratch for a Czech plumbing and heating company, using Elementor enhanced with custom CSS3, JavaScript, and PHP. The site presents the company\'s services, product offerings, and contact options in a clean, professional layout designed for local Czech trades customers searching for reliable sanitary and heating solutions.',
  fullDescriptionUa:
    'Кастомна тема WordPress, створена з нуля для чеської сантехнічної та опалювальної компанії з використанням Elementor, розширеного кастомними CSS3, JavaScript та PHP. Сайт презентує послуги компанії, асортимент товарів та варіанти зв’язку у чистому, професійному макеті, розробленому для місцевих чеських клієнтів, які шукають надійні рішення для сантехніки та опалення.',
  fullDescriptionEs:
    'Tema WordPress personalizada construida desde cero para una empresa checa de fontanería y calefacción, utilizando Elementor ampliado con CSS3, JavaScript y PHP propios. El sitio presenta los servicios de la empresa, su oferta de productos y las opciones de contacto en un diseño limpio y profesional, concebido para los clientes locales checos que buscan soluciones de fontanería y calefacción de confianza.',
  fullDescriptionDe:
    'Ein von Grund auf neu entwickeltes Custom-WordPress-Theme für ein tschechisches Sanitär- und Heizungsunternehmen, umgesetzt mit Elementor sowie individuellem CSS3, JavaScript und PHP. Die Website präsentiert die Dienstleistungen, Produktangebote und Kontaktmöglichkeiten des Unternehmens in einem klaren, professionellen Layout für lokale Kunden in Tschechien, die zuverlässige Sanitär- und Heizungslösungen suchen.',
  detailHeroLine: 'CUSTOM WORDPRESS · PLUMBING & HEATING SERVICES · CZECH',
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
      'WordPress with Elementor provides the content management and page layout layer, with custom PHP, CSS3, and JavaScript extending the builder for unique interactions and styling. MySQL stores all service data and content. Cloudflare CDN ensures fast delivery for Czech market visitors, while Nginx handles server-side caching.',
    descriptionUa:
      'WordPress із Elementor забезпечує рівень управління контентом і макетом сторінок, а кастомні PHP, CSS3 та JavaScript розширюють можливості конструктора для унікальних інтеракцій та стилізації. MySQL зберігає всі дані про послуги та контент. Cloudflare CDN гарантує швидку доставку для відвідувачів чеського ринку, а Nginx відповідає за серверне кешування.',
    descriptionEs:
      'WordPress con Elementor proporciona la capa de gestión de contenidos y diseño de páginas, mientras que PHP, CSS3 y JavaScript personalizados amplían el constructor para lograr interacciones y estilos únicos. MySQL almacena todos los datos de servicios y contenidos. Cloudflare CDN asegura una entrega rápida para los visitantes del mercado checo y Nginx gestiona la caché en el servidor.',
    descriptionDe:
      'WordPress mit Elementor bildet die Schicht für Content-Management und Seitenlayout, während individuelles PHP, CSS3 und JavaScript den Builder um maßgeschneiderte Interaktionen und Stile erweitern. MySQL speichert sämtliche Servicedaten und Inhalte. Das Cloudflare CDN sorgt für schnelle Ladezeiten für Besucher im tschechischen Markt, während Nginx das serverseitige Caching übernimmt.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/bemol_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/bemol_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/bemol_thumb.webp',
      caption: 'Home page presenting plumbing and heating services with key service highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bemol/bemol_slide2.webp',
      caption: 'Products and services catalog page with category organization',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/bemol/bemol_slide3.webp',
      caption: 'Contact and service request section with Google Maps location',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for structured service and product content' },
      { short: 'CSS3', full: 'Custom CSS3 providing unique animations and styling beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and dynamic service filters' },
      { short: 'Elementor', full: 'Elementor page builder for flexible and client-manageable page layouts' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with additional functionality' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, service pages, and media' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all plumbing and heating service content' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection for Czech market visitors' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and contact form data' },
      { short: 'Nginx', full: 'Nginx server with caching for fast response times' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for service page engagement and lead generation analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for service area and office location display' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting Czech plumbing and heating search terms for local visibility' },
      { short: 'Schema.org Markup', full: 'JSON-LD LocalBusiness schema for rich results in Czech Google Search' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP image format for faster loading of service and product visuals' },
    ],
  },
  features: [
    {
      title: 'Elementor Enhanced with Custom Code',
      titleUa: 'Elementor, розширений кастомним кодом',
      titleEs: 'Elementor potenciado con código personalizado',
      titleDe: 'Elementor erweitert durch individuellen Code',
      description:
        'Elementor provides the page layout foundation and was enriched with custom CSS3 and JavaScript for advanced animations and precise styling, resulting in a design that stands out from standard builder templates.',
      descriptionUa:
        'Elementor забезпечує основу макета сторінки та був доповнений кастомними CSS3 і JavaScript для просунутих анімацій та точної стилізації, що створило дизайн, який вирізняється серед стандартних шаблонів конструктора.',
      descriptionEs:
        'Elementor proporciona la base del diseño de página y fue enriquecido con CSS3 y JavaScript personalizados para lograr animaciones avanzadas y un estilo preciso, dando lugar a un diseño que destaca frente a las plantillas estándar.',
      descriptionDe:
        'Elementor bildet das Fundament des Seitenlayouts und wurde mit individuellem CSS3 und JavaScript für anspruchsvolle Animationen und präzises Styling erweitert, sodass sich das Design deutlich von Standard-Builder-Vorlagen abhebt.',
    },
    {
      title: 'Service & Product Showcase',
      titleUa: 'Вітрина послуг і товарів',
      titleEs: 'Catálogo de servicios y productos',
      titleDe: 'Präsentation von Dienstleistungen & Produkten',
      description:
        'Dedicated service and product pages present the company\'s plumbing and heating solutions in a structured, easy-to-navigate format designed for Czech trades customers.',
      descriptionUa:
        'Спеціалізовані сторінки послуг і товарів презентують сантехнічні та опалювальні рішення компанії у структурованому та зручному для навігації форматі, розробленому для чеських клієнтів.',
      descriptionEs:
        'Páginas específicas de servicios y productos presentan las soluciones de fontanería y calefacción de la empresa en un formato estructurado y fácil de navegar para los clientes checos.',
      descriptionDe:
        'Dedizierte Service- und Produktseiten stellen die Sanitär- und Heizungslösungen des Unternehmens in einem klar strukturierten, leicht navigierbaren Format für tschechische Handwerks- und Privatkunden vor.',
    },
    {
      title: 'Local SEO & Schema Markup',
      titleUa: 'Локальне SEO та розмітка Schema',
      titleEs: 'SEO local y marcado Schema',
      titleDe: 'Lokales SEO & Schema-Markup',
      description:
        'LocalBusiness Schema.org markup combined with Czech-targeted SEO helps the company rank for local plumbing and heating searches and appear in Google Maps results.',
      descriptionUa:
        'Розмітка LocalBusiness Schema.org у поєднанні з SEO, орієнтованим на чеський ринок, допомагає компанії ранжуватися за локальними запитами щодо сантехніки та опалення й відображатися в результатах Google Maps.',
      descriptionEs:
        'El marcado LocalBusiness de Schema.org combinado con SEO orientado al mercado checo ayuda a la empresa a posicionarse en búsquedas locales de fontanería y calefacción y a aparecer en Google Maps.',
      descriptionDe:
        'LocalBusiness-Schema.org-Markup in Kombination mit auf Tschechien ausgerichtetem SEO unterstützt das Unternehmen beim Ranking für lokale Sanitär- und Heizungsanfragen sowie bei der Sichtbarkeit in Google Maps.',
    },
    {
      title: 'Google Maps Integration',
      titleUa: 'Інтеграція з Google Maps',
      titleEs: 'Integración con Google Maps',
      titleDe: 'Google-Maps-Integration',
      description:
        'An interactive Google Maps embed on the contact page shows the company\'s service area and office location, making it easy for local customers to find and reach the business.',
      descriptionUa:
        'Інтерактивна карта Google Maps на сторінці контактів показує зону обслуговування та розташування офісу компанії, допомагаючи місцевим клієнтам легко знайти бізнес.',
      descriptionEs:
        'Un mapa interactivo de Google Maps integrado en la página de contacto muestra el área de servicio y la ubicación de la oficina, facilitando que los clientes locales encuentren la empresa.',
      descriptionDe:
        'Eine interaktive Google-Maps-Einbindung auf der Kontaktseite zeigt das Einsatzgebiet und den Bürostandort des Unternehmens, sodass lokale Kunden den Betrieb schnell finden und erreichen können.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      titleUa: 'Адаптивний дизайн та оптимізація продуктивності',
      titleEs: 'Diseño responsive y rendimiento optimizado',
      titleDe: 'Responsives Design & Performance-Optimierung',
      description:
        'Fully responsive layout with WebP images ensures fast load times and a seamless experience for customers browsing on mobile devices at service job sites.',
      descriptionUa:
        'Повністю адаптивний макет із зображеннями WebP забезпечує швидке завантаження та бездоганний досвід для клієнтів, які переглядають сайт із мобільних пристроїв безпосередньо на об’єктах.',
      descriptionEs:
        'El diseño totalmente responsive con imágenes WebP garantiza tiempos de carga rápidos y una experiencia fluida para los clientes que navegan desde dispositivos móviles en obras o instalaciones.',
      descriptionDe:
        'Ein vollständig responsives Layout mit WebP-Bildern sorgt für schnelle Ladezeiten und eine reibungslose Nutzung für Kunden, die mobil direkt von Baustellen oder Einsatzorten aus zugreifen.',
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
  liveUrl: 'https://bemol.cz/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default bemol
