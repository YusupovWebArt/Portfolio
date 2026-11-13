import { Project } from '../project-types'

const cloudDeliverySolution: Project = {
  id: 10900,
  title: 'Cloud Delivery solution',
  description:
    'System for dispatching, planning, and tracking your deliveries and courier.',
  descriptionUa:
    'Система для диспетчеризації, планування та відстеження ваших доставок і кур’єрів.',
  descriptionEs:
    'Sistema para la gestión, planificación y seguimiento de sus entregas y mensajeros.',
  descriptionDe:
    'System zur Disposition, Tourenplanung und Echtzeit-Verfolgung von Lieferungen und Kurieren.',
  fullDescription:
    'A WordPress landing page for the FDH Cloud Delivery Solution, built using the Bootstrap 5 CSS framework for a responsive, mobile-first layout. Custom CSS3 and JavaScript were added for tailored styling and interactivity, presenting the dispatch, planning, and courier tracking capabilities in a clear, conversion-focused single-page format.',
  fullDescriptionUa:
    'Лендінг на WordPress для FDH Cloud Delivery Solution, побудований з використанням CSS-фреймворку Bootstrap 5 для створення адаптивного mobile-first макета. Кастомні CSS3 та JavaScript додані для індивідуального стилю та інтерактивності, представляючи можливості диспетчеризації, планування та відстеження кур’єрів у зрозумілому, орієнтованому на конверсію односторінковому форматі.',
  fullDescriptionEs:
    'Landing page en WordPress para FDH Cloud Delivery Solution, construida con el framework CSS Bootstrap 5 para una maquetación responsive y mobile-first. Se añadieron CSS3 y JavaScript personalizados para un estilo propio e interactividad, presentando las capacidades de gestión de envíos, planificación y seguimiento de mensajeros en un formato de página única claro y orientado a la conversión.',
  fullDescriptionDe:
    'Eine WordPress-Landingpage für die FDH Cloud Delivery Solution, entwickelt mit dem CSS-Framework Bootstrap 5 für ein responsives Mobile-First-Layout. Individuelles CSS3 und JavaScript sorgen für maßgeschneidertes Styling und Interaktivität und präsentieren die Funktionen für Disposition, Routenplanung und Kurier-Tracking in einem klaren, konversionsorientierten One-Page-Format.',
  detailHeroLine: 'CUSTOM WORDPRESS · CLOUD DELIVERY · SAAS LANDING PAGE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Bootstrap 5', label: 'CSS Framework', accent: 'darkGreen' },
    { value: 'Landing Page', label: 'Conversion Focus', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme + Bootstrap 5', highlight: true },
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
      'A custom WordPress PHP theme uses Bootstrap 5 as its responsive CSS foundation, enriched with custom CSS3 and JavaScript for brand-specific styling and interactive elements. MySQL handles all WordPress content. Cloudflare CDN ensures fast global delivery of the landing page to potential business customers.',
    descriptionUa:
      'Кастомна PHP-тема WordPress використовує Bootstrap 5 як адаптивну CSS-основу, доповнену кастомними CSS3 та JavaScript для фірмової стилізації й інтерактивних елементів. MySQL обробляє весь контент WordPress. Cloudflare CDN забезпечує швидку глобальну доставку лендінгу потенційним бізнес-клієнтам.',
    descriptionEs:
      'Un tema PHP de WordPress personalizado utiliza Bootstrap 5 como base CSS responsive, enriquecida con CSS3 y JavaScript propios para estilos específicos de marca y elementos interactivos. MySQL gestiona todo el contenido de WordPress. Cloudflare CDN garantiza una entrega global rápida de la landing page a clientes empresariales potenciales.',
    descriptionDe:
      'Ein maßgeschneidertes WordPress-PHP-Theme nutzt Bootstrap 5 als responsives CSS-Fundament, ergänzt durch individuelles CSS3 und JavaScript für markenspezifisches Styling und interaktive Elemente. MySQL verwaltet sämtliche WordPress-Inhalte. Das Cloudflare CDN stellt eine schnelle weltweite Auslieferung der Landingpage für potenzielle Geschäftskunden sicher.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/delivery-fdh_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/delivery-fdh_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/delivery-fdh_thumb.webp',
      caption: 'Home page presenting the FDH Cloud Delivery Solution with hero and key features',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/delivery-fdh/delivery-fdh_slide2.webp',
      caption: 'Dispatch and planning features section with visual breakdown of capabilities',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/delivery-fdh/delivery-fdh_slide3.webp',
      caption: 'Courier tracking and CTA section with contact and demo request form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for structured and accessible landing page content' },
      { short: 'CSS3', full: 'Custom CSS3 for brand-specific styling layered on top of Bootstrap defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth scroll behaviors' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 CSS framework providing a responsive, mobile-first layout grid' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ for WordPress theme logic and dynamic content rendering' },
      { short: 'MySQL', full: 'MySQL database for WordPress content and landing page settings' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all landing page content and media' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast global delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and form submissions' },
      { short: 'Nginx', full: 'Nginx web server for efficient request handling and page caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for landing page engagement and demo request conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting delivery software and courier tracking keywords' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Bootstrap-based layout optimized for green Core Web Vitals performance scores' },
      { short: 'WebP Images', full: 'WebP format for all landing page imagery ensuring fast load times' },
    ],
  },
  features: [
    {
      title: 'Bootstrap 5 Responsive Landing Page',
      titleUa: 'Адаптивний лендінг на Bootstrap 5',
      titleEs: 'Landing page responsive con Bootstrap 5',
      titleDe: 'Responsive Landingpage mit Bootstrap 5',
      description:
        'Bootstrap 5 provides a solid, mobile-first responsive grid as the layout foundation, ensuring the delivery solution landing page adapts perfectly to all screen sizes and devices.',
      descriptionUa:
        'Bootstrap 5 забезпечує надійну адаптивну mobile-first сітку як основу макета, гарантуючи ідеальне відображення лендінгу на всіх розмірах екранів і пристроях.',
      descriptionEs:
        'Bootstrap 5 proporciona una cuadrícula responsive mobile-first sólida como base del diseño, garantizando que la landing page se adapte perfectamente a todos los tamaños de pantalla y dispositivos.',
      descriptionDe:
        'Bootstrap 5 liefert ein solides Mobile-First-Raster als Layout-Fundament und stellt sicher, dass sich die Landingpage der Lieferlösung optimal an alle Bildschirmgrößen und Endgeräte anpasst.',
    },
    {
      title: 'Custom CSS3 & JavaScript Styling',
      titleUa: 'Кастомна стилізація CSS3 та JavaScript',
      titleEs: 'Estilizado personalizado con CSS3 y JavaScript',
      titleDe: 'Individuelles CSS3- & JavaScript-Styling',
      description:
        'Custom CSS3 and JavaScript layer brand-specific visual elements and interactive behaviors on top of Bootstrap, giving the page a unique identity beyond the framework defaults.',
      descriptionUa:
        'Кастомні CSS3 та JavaScript додають фірмові візуальні елементи й інтерактивну поведінку поверх Bootstrap, надаючи сторінці унікальної айдентики за межами стандартного фреймворку.',
      descriptionEs:
        'CSS3 y JavaScript personalizados añaden elementos visuales de marca y comportamientos interactivos sobre Bootstrap, otorgando a la página una identidad única más allá de los valores predeterminados del framework.',
      descriptionDe:
        'Maßgeschneidertes CSS3 und JavaScript ergänzen Bootstrap um markenspezifische visuelle Elemente und interaktive Funktionen, die der Seite eine eigenständige Identität verleihen.',
    },
    {
      title: 'Dispatch & Tracking Feature Showcase',
      titleUa: 'Презентація функцій диспетчеризації та відстеження',
      titleEs: 'Presentación de funciones de gestión y seguimiento',
      titleDe: 'Funktionsübersicht für Disposition & Tracking',
      description:
        'Dedicated content sections clearly present the platform\'s dispatching, route planning, and real-time courier tracking capabilities to potential business customers.',
      descriptionUa:
        'Спеціалізовані контентні секції чітко презентують можливості платформи з диспетчеризації, планування маршрутів і відстеження кур’єрів у реальному часі для потенційних бізнес-клієнтів.',
      descriptionEs:
        'Secciones de contenido específicas presentan con claridad las capacidades de despacho, planificación de rutas y seguimiento de mensajeros en tiempo real a los clientes empresariales potenciales.',
      descriptionDe:
        'Dedizierte Inhaltsbereiche stellen potenziellen Geschäftskunden übersichtlich die Funktionen für Disposition, Routenplanung und Echtzeit-Kurierverfolgung vor.',
    },
    {
      title: 'Conversion-Focused Layout',
      titleUa: 'Макет, орієнтований на конверсію',
      titleEs: 'Diseño enfocado en la conversión',
      titleDe: 'Konversionsorientiertes Layout',
      description:
        'The single-page landing structure guides visitors from feature awareness to contact and demo request CTA, optimized for lead generation and product trial sign-ups.',
      descriptionUa:
        'Односторінкова структура лендінгу веде відвідувачів від ознайомлення з функціями до форми контакту й запиту демоверсії, оптимізуючи генерацію лідів і реєстрації на пробний період.',
      descriptionEs:
        'La estructura de página única guía a los visitantes desde el conocimiento de las funciones hasta el CTA de contacto y solicitud de demostración, optimizada para la generación de leads.',
      descriptionDe:
        'Die One-Page-Struktur führt Besucher gezielt von der Funktionsübersicht bis zum Kontakt- und Demo-CTA und ist auf Lead-Generierung sowie Testanmeldungen optimiert.',
    },
    {
      title: 'SEO & Performance Optimization',
      titleUa: 'SEO та оптимізація продуктивності',
      titleEs: 'Optimización SEO y de rendimiento',
      titleDe: 'SEO- & Performance-Optimierung',
      description:
        'Technical SEO and Core Web Vitals optimization ensure the landing page loads fast and ranks for relevant delivery software and courier management search terms.',
      descriptionUa:
        'Технічне SEO та оптимізація Core Web Vitals забезпечують швидке завантаження лендінгу та ранжування за релевантними пошуковими запитами щодо ПЗ для доставки й управління кур’єрами.',
      descriptionEs:
        'El SEO técnico y la optimización de Core Web Vitals garantizan que la landing page cargue rápido y se posicione para términos de búsqueda relevantes de software de entregas y gestión de mensajeros.',
      descriptionDe:
        'Technisches SEO und Core-Web-Vitals-Optimierung sorgen dafür, dass die Landingpage schnell lädt und für relevante Suchbegriffe rund um Liefersoftware und Kurier-Management rankt.',
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
  liveUrl:
    'https://frontdeskhelpers.com/remote-virtual-services/delivery-solution-fdh-cloud/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default cloudDeliverySolution
