import { Project } from '../project-types'

const alldayMedicalcare: Project = {
  id: 14500,
  title: 'All Day Medical Care Clinic',
  deepDiveBlogSlug: 'all-day-medical-care-hipaa-healthtech-portal',
  description:
    'Healthcare provider focused on offering a wide range of medical services.',
  descriptionUa:
    'Медична установа, що спеціалізується на наданні широкого спектра медичних послуг.',
  descriptionEs:
    'Proveedor de atención médica centrado en ofrecer una amplia gama de servicios médicos.',
  descriptionDe:
    'Gesundheitsdienstleister mit Fokus auf ein breites Spektrum medizinischer Versorgungsleistungen.',
  fullDescription:
    'A custom WordPress theme developed on top of an existing client theme using Elementor enhanced with custom HTML, CSS3, JavaScript, and PHP. Advanced Custom Fields (ACF) power flexible content management, while a bespoke PHP-based doctor directory template enables dynamic filtering of providers by specialty, location, and other parameters - giving patients fast access to the right care.',
  fullDescriptionUa:
    'Кастомна тема WordPress, розроблена на основі існуючої теми клієнта з використанням Elementor, розширеного кастомними HTML, CSS3, JavaScript та PHP. Advanced Custom Fields (ACF) забезпечує гнучке управління контентом, а кастомний PHP-шаблон каталогу лікарів дозволяє динамічно фільтрувати фахівців за спеціальністю, локацією та іншими параметрами, забезпечуючи пацієнтам швидкий доступ до потрібної медичної допомоги.',
  fullDescriptionEs:
    'Un tema de WordPress personalizado desarrollado sobre un tema existente del cliente utilizando Elementor mejorado con HTML, CSS3, JavaScript y PHP personalizados. Advanced Custom Fields (ACF) impulsa una gestión de contenidos flexible, mientras que una plantilla de directorio médico personalizada basada en PHP permite el filtrado dinámico de profesionales por especialidad, ubicación y otros parámetros.',
  fullDescriptionDe:
    'Ein maßgeschneidertes WordPress-Theme, das auf Basis eines bestehenden Kunden-Themes mit Elementor sowie individuellem HTML, CSS3, JavaScript und PHP entwickelt wurde. Advanced Custom Fields (ACF) ermöglicht ein flexibles Content-Management, während ein speziell entwickeltes PHP-Template für das Ärzteverzeichnis eine dynamische Filterung nach Fachgebiet, Standort und weiteren Parametern bietet - für einen schnellen Zugang der Patienten zur passenden Versorgung.',
  detailHeroLine: 'CUSTOM WORDPRESS · HEALTHCARE & MEDICAL SERVICES',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'ACF + Elementor', label: 'Content Engine', accent: 'darkGreen' },
    { value: 'Doctor Filter', label: 'Custom Template', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core + ACF' },
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
      'WordPress with ACF manages structured medical content including provider profiles and services. Elementor provides client-editable page layouts, extended with custom CSS3 and JavaScript for animations and interactivity beyond the builder\'s defaults. A custom PHP template powers the doctor directory with real-time filtering by specialty and parameters.',
    descriptionUa:
      'WordPress із ACF керує структурованим медичним контентом, включаючи профілі лікарів та послуги. Elementor забезпечує зручні для редагування макети сторінок, розширені кастомними CSS3 та JavaScript для анімацій та інтерактивності. Спеціальний PHP-шаблон відповідає за каталог лікарів із фільтрацією в реальному часі за спеціальністю та іншими параметрами.',
    descriptionEs:
      'WordPress con ACF gestiona contenido médico estructurado incluyendo perfiles de profesionales y servicios. Elementor proporciona diseños editables por el cliente, ampliados con CSS3 y JavaScript personalizados para animaciones e interactividad. Una plantilla PHP a medida impulsa el directorio médico con filtrado en tiempo real por especialidad y parámetros.',
    descriptionDe:
      'WordPress mit ACF verwaltet strukturierte medizinische Inhalte einschließlich Arztprofilen und Leistungen. Elementor stellt vom Kunden bearbeitbare Seitenlayouts bereit, die durch individuelles CSS3 und JavaScript um Animationen und Interaktivität erweitert wurden. Ein maßgeschneidertes PHP-Template steuert das Ärzteverzeichnis mit Echtzeit-Filterung nach Fachgebiet und Parametern.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/all-day-medical-care-clinic_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/all-day-medical-care-clinic_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/all-day-medical-care-clinic_thumb.webp',
      caption: 'Home page presenting the clinic\'s key services and call-to-action',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/all-day-medical/all-day-medical-care-clinic_slide2.webp',
      caption: 'Custom provider filter using PHP to search doctors by specialty and parameters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/all-day-medical/all-day-medical-care-clinic_slide3.webp',
      caption: 'Individual provider profile pages built with custom PHP templates',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible medical content structure' },
      { short: 'CSS3', full: 'Custom CSS3 animations and styling extending Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and dynamic provider filtering' },
      { short: 'Elementor', full: 'Elementor page builder used per client requirement for independent content editing' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ for the doctor directory template with dynamic filtering logic' },
      { short: 'MySQL', full: 'MySQL database storing provider profiles, services, and ACF field data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all clinic content, posts, and custom post types' },
      { short: 'Advanced Custom Fields (ACF)', full: 'ACF plugin powering flexible structured data for provider profiles and service pages' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for DDoS protection and fast global content delivery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring patient data and site traffic are fully secured' },
      { short: 'Nginx', full: 'Nginx web server for efficient request handling and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for patient journey analysis and service page engagement' },
      { short: 'Google Maps API', full: 'Google Maps API for displaying clinic locations on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with optimized meta tags and page structure for local healthcare search' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for medical business rich snippets in search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals across all clinic pages' },
      { short: 'WebP Images', full: 'WebP image format for fast-loading provider photos and service visuals' },
    ],
  },
  features: [
    {
      title: 'Custom Doctor Directory with PHP Filtering',
      titleUa: 'Кастомний каталог лікарів із PHP-фільтрацією',
      titleEs: 'Directorio médico personalizado con filtrado PHP',
      titleDe: 'Individuelles Ärzteverzeichnis mit PHP-Filterung',
      description:
        'A bespoke PHP template powers the provider directory page, allowing patients to filter doctors by specialty, location, and other custom parameters - providing fast access to the right care.',
      descriptionUa:
        'Кастомний PHP-шаблон забезпечує роботу сторінки каталогу спеціалістів, дозволяючи пацієнтам фільтрувати лікарів за спеціальністю, локацією та іншими параметрами для швидкого пошуку потрібної допомоги.',
      descriptionEs:
        'Una plantilla PHP a medida impulsa la página del directorio de profesionales, permitiendo a los pacientes filtrar médicos por especialidad, ubicación y otros parámetros personalizados.',
      descriptionDe:
        'Ein maßgeschneidertes PHP-Template steuert das Ärzteverzeichnis und ermöglicht Patienten die Filterung nach Fachgebiet, Standort und weiteren Kriterien - für einen schnellen Zugang zur passenden Behandlung.',
    },
    {
      title: 'Advanced Custom Fields (ACF) Integration',
      titleUa: 'Інтеграція Advanced Custom Fields (ACF)',
      titleEs: 'Integración con Advanced Custom Fields (ACF)',
      titleDe: 'Integration von Advanced Custom Fields (ACF)',
      description:
        'ACF structures all provider and service content as reusable field groups, enabling the clinic staff to update physician profiles and medical services without developer assistance.',
      descriptionUa:
        'ACF структурує весь контент про лікарів і послуги у вигляді зручних груп полів, що дозволяє персоналу клініки оновлювати профілі фахівців та медичні послуги без допомоги розробника.',
      descriptionEs:
        'ACF estructura todo el contenido de profesionales y servicios en grupos de campos reutilizables, permitiendo al personal de la clínica actualizar perfiles médicos sin asistencia técnica.',
      descriptionDe:
        'ACF strukturiert sämtliche Arzt- und Leistungsinhalte in wiederverwendbaren Feldgruppen, sodass das Klinikpersonal Arztprofile und medizinische Leistungen ohne Entwicklerhilfe pflegen kann.',
    },
    {
      title: 'Elementor Enhanced with Custom Code',
      titleUa: 'Elementor, розширений кастомним кодом',
      titleEs: 'Elementor potenciado con código personalizado',
      titleDe: 'Elementor erweitert durch individuellen Code',
      description:
        'Elementor was implemented per the client\'s request and enriched with custom CSS3 and JavaScript, delivering advanced animations and interactive elements beyond the builder\'s native capabilities.',
      descriptionUa:
        'Elementor впроваджено на запит клієнта та доповнено кастомними CSS3 і JavaScript, що забезпечило складні анімації й інтерактивні елементи поза стандартними можливостями конструктора.',
      descriptionEs:
        'Elementor se implementó a petición del cliente y se enriqueció con CSS3 y JavaScript personalizados, ofreciendo animaciones avanzadas y elementos interactivos más allá del constructor nativo.',
      descriptionDe:
        'Elementor wurde auf Kundenwunsch eingesetzt und mit individuellem CSS3 sowie JavaScript angereichert, um fortgeschrittene Animationen und interaktive Elemente über die nativen Builder-Funktionen hinaus bereitzustellen.',
    },
    {
      title: 'Responsive Healthcare Design',
      titleUa: 'Адаптивний медичний дизайн',
      titleEs: 'Diseño médico responsivo',
      titleDe: 'Responsives Healthcare-Design',
      description:
        'Fully responsive layout ensures patients can access services, find providers, and book appointments comfortably across desktop, tablet, and mobile devices.',
      descriptionUa:
        'Повністю адаптивний макет гарантує, що пацієнти можуть зручно переглядати послуги, знаходити лікарів і записуватися на прийом із комп\'ютерів, планшетів та смартфонів.',
      descriptionEs:
        'El diseño totalmente responsivo garantiza que los pacientes puedan acceder a los servicios, buscar médicos y reservar citas cómodamente desde ordenadores, tabletas y teléfonos móviles.',
      descriptionDe:
        'Das vollständig responsive Layout stellt sicher, dass Patienten auf Desktop-, Tablet- und Mobilgeräten komfortabel auf Leistungen zugreifen, Ärzte finden und Termine vereinbaren können.',
    },
    {
      title: 'SEO & Schema Optimization',
      titleUa: 'SEO та оптимізація Schema.org',
      titleEs: 'Optimización SEO y Schema',
      titleDe: 'SEO- und Schema-Optimierung',
      description:
        'Technical SEO with Schema.org medical business markup drives local search visibility, helping patients discover the clinic through Google and map results.',
      descriptionUa:
        'Технічне SEO з медичною розміткою Schema.org підвищує локальну видимість у пошуку, допомагаючи пацієнтам знаходити клініку в Google та на картах.',
      descriptionEs:
        'El SEO técnico con marcado Schema.org para negocios médicos impulsa la visibilidad en búsquedas locales, ayudando a los pacientes a descubrir la clínica en Google y mapas.',
      descriptionDe:
        'Technisches SEO mit Schema.org-Markup für medizinische Einrichtungen steigert die lokale Sichtbarkeit in Suchmaschinen und hilft Patienten, die Klinik über Google und Kartenergebnisse zu finden.',
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
  liveUrl: 'https://alldaymedicalcare.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default alldayMedicalcare
