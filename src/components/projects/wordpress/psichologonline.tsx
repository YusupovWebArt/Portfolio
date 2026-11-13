import { Project } from '../project-types'

const psichologonline: Project = {
  id: 10810,
  title: 'Psichologonline',
  description: 'Elena Grechka is a qualified Ukrainian psychologist.',
  descriptionUa: 'Олена Гречка - кваліфікований український психолог.',
  descriptionEs: 'Elena Grechka es una psicóloga ucraniana cualificada.',
  descriptionDe: 'Elena Grechka ist eine qualifizierte ukrainische Psychologin.',
  fullDescription:
    'Psichologonline is a personal professional website for Ukrainian psychologist Elena Grechka, built on a custom WordPress theme from scratch using Elementor with advanced CSS3 and JavaScript enhancements. The site conveys trust and approachability, featuring service descriptions, an online booking inquiry form, and SEO optimization to attract Ukrainian-language counselling clients.',
  fullDescriptionUa:
    'Psichologonline - це персональний професійний вебсайт українського психолога Олени Гречки, створений на унікальній темі WordPress з нуля з використанням Elementor та розширеними допрацюваннями на CSS3 і JavaScript. Сайт викликає довіру, містить описи послуг, форму запису на консультацію та розширену SEO-оптимізацію для залучення україномовних клієнтів.',
  fullDescriptionEs:
    'Psichologonline es el sitio web profesional personal de la psicóloga ucraniana Elena Grechka, construido sobre un tema de WordPress personalizado desde cero con Elementor y mejoras avanzadas en CSS3 y JavaScript. El sitio transmite confianza y accesibilidad, con descripciones de servicios, un formulario de solicitud de consulta en línea y optimización SEO para atraer clientes de habla ucraniana.',
  fullDescriptionDe:
    'Psichologonline ist die persönliche Fachwebsite der ukrainischen Psychologin Elena Grechka, die von Grund auf mit einem individuellen WordPress-Theme sowie Elementor und erweiterten CSS3- und JavaScript-Optimierungen entwickelt wurde. Die Website vermittelt Vertrauen und Nahbarkeit, bietet detaillierte Leistungsbeschreibungen, ein Online-Anfrageformular für Beratungen sowie eine gezielte SEO-Optimierung zur Gewinnung ukrainischsprachiger Klienten.',
  detailHeroLine: 'CUSTOM WORDPRESS · PSYCHOLOGY PRACTICE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + Elementor', accent: 'darkGreen' },
    { value: 'UA Market', label: 'Target Audience', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'Elementor + CSS3/JS', highlight: true },
          { label: 'PHP 8+ Backend' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx + SSL', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'A custom WordPress theme built from scratch provides the structural foundation, while Elementor enables the client to independently edit page content in the future. Custom CSS3 and JavaScript significantly extend Elementor\'s capabilities with precise animations and interactive elements beyond default builder limitations.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена з нуля, забезпечує структурну основу, тоді як Elementor дозволяє клієнтці самостійно редагувати контент сторінок у майбутньому. Кастомні CSS3 та JavaScript значно розширюють можливості Elementor завдяки точним анімаціям та інтерактивним елементам поза стандартними обмеженнями конструктора.',
    descriptionEs:
      'Un tema de WordPress personalizado creado desde cero proporciona la base estructural, mientras que Elementor permite a la cliente editar de forma independiente el contenido de las páginas en el futuro. El CSS3 y JavaScript personalizados amplían significativamente las capacidades de Elementor con animaciones precisas y elementos interactivos más allá de las limitaciones predeterminadas del constructor.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme bildet das strukturelle Fundament, während Elementor der Kundin ermöglicht, Seiteninhalte künftig eigenständig zu bearbeiten. Individuelles CSS3 und JavaScript erweitern die Funktionen von Elementor erheblich um präzise Animationen und interaktive Elemente jenseits der Standardgrenzen des Page Builders.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/psichologonline_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/psichologonline_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/psichologonline_thumb.webp',
      caption: 'Home page introducing Elena Grechka with a professional hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/psichologonline/psichologonline_slide2.webp',
      caption: 'Services section describing available psychology and counselling sessions',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/psichologonline/psichologonline_slide3.webp',
      caption: 'About page with psychologist biography, credentials, and approach',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/psichologonline/psichologonline_slide4.webp',
      caption: 'Contact and booking inquiry section with consultation request form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup providing accessible and SEO-ready page structure' },
      { short: 'CSS3', full: 'Custom CSS3 with animations and precise responsive layouts beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI components and smooth user experience' },
      { short: 'Elementor', full: 'Elementor page builder integrated for client self-editing capability post-launch' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic, custom functions, and form handling' },
      { short: 'MySQL', full: 'MySQL database storing all page content and contact form data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the platform for content publishing and management' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for a unique, professional aesthetic' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure visitor connections and form data privacy' },
      { short: 'Nginx', full: 'Nginx web server with caching for optimized WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedded to show the practitioner\'s location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking visitor sessions, traffic sources, and inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Ukrainian-language SEO with optimized meta tags for psychology practice searches' },
      { short: 'Schema.org Markup', full: 'Person and LocalBusiness JSON-LD structured data for enhanced search visibility' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP images for fast loading of professional photography across all pages' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools to support client acquisition and brand awareness' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Індивідуальна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A bespoke WordPress theme was built from scratch to give the psychologist a unique, trust-inspiring professional presence tailored to her brand and client audience.',
      descriptionUa:
        'Індивідуальна тема WordPress була створена з нуля, щоб забезпечити психологу унікальну, надійну професійну присутність, адаптовану до її бренду та клієнтської аудиторії.',
      descriptionEs:
        'Se desarrolló un tema de WordPress a medida desde cero para brindar a la psicóloga una presencia profesional única que inspire confianza, adaptada a su marca y público objetivo.',
      descriptionDe:
        'Ein maßgeschneidertes WordPress-Theme wurde von Grund auf entwickelt, um der Psychologin eine einzigartige, vertrauenswürdige und professionelle Online-Präsenz zu verleihen, die exakt auf ihre Marke und Klientel abgestimmt ist.',
    },
    {
      title: 'Elementor with Advanced Customization',
      titleUa: 'Elementor із розширеною кастомізацією',
      titleEs: 'Elementor con personalización avanzada',
      titleDe: 'Elementor mit erweiterter Anpassung',
      description:
        'Elementor was integrated at the client\'s request for future self-editing, enhanced with custom CSS3 and JavaScript to achieve advanced animations and precise styling beyond the builder\'s standard toolkit.',
      descriptionUa:
        'Elementor було інтегровано за запитом клієнтки для подальшого самостійного редагування та доповнено кастомним CSS3 і JavaScript для досягнення просунутих анімацій і точного стилізування поза стандартним набором інструментів.',
      descriptionEs:
        'Elementor se integró a petición de la cliente para futuras ediciones autónomas, mejorado con CSS3 y JavaScript personalizados para lograr animaciones avanzadas y un estilo preciso más allá de las herramientas estándar del constructor.',
      descriptionDe:
        'Elementor wurde auf Wunsch der Kundin für die spätere Selbstbearbeitung integriert und durch individuelles CSS3 sowie JavaScript erweitert, um anspruchsvolle Animationen und präzises Styling über das Standard-Toolkit hinaus zu realisieren.',
    },
    {
      title: 'Online Consultation Inquiry Form',
      titleUa: 'Форма онлайн-запису на консультацію',
      titleEs: 'Formulario de solicitud de consulta en línea',
      titleDe: 'Online-Anfrageformular für Beratungen',
      description:
        'A styled contact and booking form allows potential clients to request consultations directly from the website, with server-side PHP validation and email notifications.',
      descriptionUa:
        'Стилізована форма контакту та бронювання дозволяє потенційним клієнтам залишати запити на консультації безпосередньо на сайті з серверною PHP-валідацією та email-сповіщеннями.',
      descriptionEs:
        'Un formulario estilizado de contacto y reserva permite a los clientes potenciales solicitar consultas directamente desde el sitio web, con validación PHP en el servidor y notificaciones por correo electrónico.',
      descriptionDe:
        'Ein ansprechend gestaltetes Kontakt- und Buchungsformular ermöglicht potenziellen Klienten, Beratungstermine direkt über die Website anzufragen, inklusive serverseitiger PHP-Validierung und E-Mail-Benachrichtigungen.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The website is fully responsive, providing a comfortable, professional experience for clients browsing on any device including mobile phones and tablets.',
      descriptionUa:
        'Вебсайт повністю адаптивний і забезпечує комфортний професійний досвід для клієнтів, які переглядають сторінки з будь-якого пристрою, включаючи смартфони та планшети.',
      descriptionEs:
        'El sitio web es totalmente responsivo, proporcionando una experiencia cómoda y profesional para los clientes que navegan desde cualquier dispositivo, incluidos teléfonos móviles y tabletas.',
      descriptionDe:
        'Die Website ist vollständig responsiv und bietet Klienten auf allen Endgeräten - einschließlich Smartphones und Tablets - ein komfortables und professionelles Nutzungserlebnis.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Technical SEO with Schema.org markup and Ukrainian-language optimization ensures the practice appears prominently in local psychological counselling search results.',
      descriptionUa:
        'Технічне SEO з розміткою Schema.org та оптимізацією українською мовою гарантує високу видимість практики в локальних результатах пошуку психологічних консультацій.',
      descriptionEs:
        'El SEO técnico con marcado Schema.org y optimización en idioma ucraniano garantiza que la consulta aparezca de forma destacada en los resultados de búsqueda locales de asesoramiento psicológico.',
      descriptionDe:
        'Technisches SEO mit Schema.org-Markup und ukrainischsprachiger Optimierung stellt sicher, dass die Praxis in lokalen Suchergebnissen für psychologische Beratung prominent platziert wird.',
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
  liveUrl: 'https://psichologonline.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default psichologonline
