import { Project } from '../project-types'

const adwoodsDesign: Project = {
  id: 13000,
  title: 'Adwoods Design',
  description:
    '3D Artists with experience in construction, architecture, and design, present ideas in visual language.',
  descriptionUa:
    '3D-художники з досвідом у будівництві, архітектурі та дизайні презентують ідеї візуальною мовою.',
  descriptionEs:
    'Artistas 3D con experiencia en construcción, arquitectura y diseño que presentan ideas en lenguaje visual.',
  descriptionDe:
    '3D-Künstler mit Erfahrung in Bauwesen, Architektur und Design präsentieren Ideen in visueller Sprache.',
  fullDescription:
    'A custom WordPress theme built from scratch using the Divi page builder at the client\'s request, enhanced with custom CSS3, JavaScript, and PHP for unique styling and extended functionality. The site showcases architectural 3D visualization work through a custom gallery, blog, and a multi-step contact form designed to streamline client inquiries.',
  fullDescriptionUa:
    'Кастомна тема WordPress, створена з нуля з використанням пейдж-білдера Divi на прохання клієнта та доповнена кастомними CSS3, JavaScript і PHP для унікального стилю та розширеної функціональності. Сайт презентує роботи з архітектурної 3D-візуалізації через кастомну галерею, блог та багатокрокову контактну форму для зручного прийому заявок клієнтів.',
  fullDescriptionEs:
    'Un tema de WordPress personalizado construido desde cero utilizando el maquetador Divi a petición del cliente, mejorado con CSS3, JavaScript y PHP personalizados para un estilo único y funcionalidad extendida. El sitio exhibe trabajos de visualización 3D arquitectónica a través de una galería personalizada, blog y un formulario de contacto de varios pasos diseñado para agilizar las consultas de los clientes.',
  fullDescriptionDe:
    'Ein von Grund auf neu erstelltes WordPress-Theme auf Basis des vom Kunden gewünschten Divi-Page-Builders, erweitert durch individuelles CSS3, JavaScript und PHP für ein einzigartiges Styling und erweiterte Funktionen. Die Website präsentiert architektonische 3D-Visualisierungen über eine maßgeschneiderte Galerie, einen Blog sowie ein mehrstufiges Kontaktformular zur optimalen Erfassung von Kundenanfragen.',
  detailHeroLine: 'CUSTOM WORDPRESS · ARCHITECTURE & 3D VISUALIZATION',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Divi Builder', label: 'Page Engine', accent: 'darkGreen' },
    { value: 'Multi-step Form', label: 'Lead Capture', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Divi Builder + Custom PHP', highlight: true },
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
      'The site uses WordPress with the Divi page builder as a client-editable content layer, while custom PHP, CSS3, and JavaScript extend it beyond Divi\'s default capabilities. A multi-step contact form drives lead generation, and Cloudflare CDN ensures fast global delivery of the high-resolution 3D visualization assets.',
    descriptionUa:
      'Сайт використовує WordPress із конструктором Divi як зручний для клієнта шар редагування контенту, тоді як кастомні PHP, CSS3 та JavaScript розширюють його поза стандартні можливості Divi. Багатокрокова контактна форма стимулює генерацію лідів, а Cloudflare CDN забезпечує швидку глобальну доставку високоякісних 3D-рендерів.',
    descriptionEs:
      'El sitio utiliza WordPress con el constructor Divi como capa de contenido editable por el cliente, mientras que PHP, CSS3 y JavaScript personalizados lo amplían más allá de las capacidades predeterminadas de Divi. Un formulario de varios pasos impulsa la captación de leads y Cloudflare CDN garantiza la entrega rápida de los recursos 3D de alta resolución.',
    descriptionDe:
      'Die Website nutzt WordPress mit dem Divi-Page-Builder als vom Kunden bearbeitbare Inhaltsebene, während individuelles PHP, CSS3 und JavaScript die Plattform über die Standardfunktionen von Divi hinaus erweitern. Ein mehrstufiges Kontaktformular fördert die Lead-Generierung, und das Cloudflare CDN sorgt weltweit für eine schnelle Auslieferung hochauflösender 3D-Visualisierungen.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/adwoods-design_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/adwoods-design_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/adwoods-design_thumb.webp',
      caption: 'Home page highlighting 3D architectural visualization services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/adwoods-design/adwoods-design_gallery.webp',
      caption: 'Custom gallery page showcasing 3D renders and architectural projects',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/adwoods-design/adwoods-design_blog.webp',
      caption: 'Custom blog page for sharing industry insights and project updates',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/adwoods-design/adwoods-design_multistep-contact-form.webp',
      caption: 'Custom multi-step contact form for streamlined client project inquiries',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and well-organized content' },
      { short: 'CSS3', full: 'Custom CSS3 for unique animations and styling beyond Divi defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive elements including the multi-step contact form' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ code extending Divi functionality and powering dynamic features' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, gallery items, and blog posts' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation' },
      { short: 'Divi Builder', full: 'Divi page builder used per client requirement for self-managed content editing' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of high-resolution 3D image assets' },
      { short: 'SSL/TLS', full: 'HTTPS encryption for secure communication across all site pages' },
      { short: 'Nginx', full: 'Nginx web server configured for optimal performance and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 for tracking visitor behavior, gallery engagement, and form conversions' },
      { short: 'Google Maps API', full: 'Google Maps API for displaying the studio location on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'On-page and technical SEO to improve visibility for architectural visualization searches' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimizations ensuring green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP format used for all 3D render gallery images to reduce load times' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with Divi Builder',
      titleUa: 'Кастомна тема WordPress із Divi Builder',
      titleEs: 'Tema de WordPress personalizado con Divi Builder',
      titleDe: 'Maßgeschneidertes WordPress-Theme mit Divi Builder',
      description:
        'The theme was built from scratch and enhanced with the Divi page builder at the client\'s request, allowing them to independently edit layouts while maintaining a polished, custom visual identity.',
      descriptionUa:
        'Тему створено з нуля та доповнено конструктором Divi на прохання клієнта, що дозволяє самостійно редагувати макети зі збереженням витонченої індивідуальної візуальної айдентики.',
      descriptionEs:
        'El tema fue construido desde cero y mejorado con el maquetador Divi a petición del cliente, permitiéndole editar diseños de forma independiente mientras mantiene una identidad visual personalizada.',
      descriptionDe:
        'Das Theme wurde von Grund auf neu entwickelt und auf Kundenwunsch mit dem Divi-Page-Builder erweitert, sodass Layouts eigenständig bearbeitet werden können und gleichzeitig eine hochwertige, individuelle visuelle Identität erhalten bleibt.',
    },
    {
      title: 'Multi-step Contact Form',
      titleUa: 'Багатокрокова контактна форма',
      titleEs: 'Formulario de contacto de varios pasos',
      titleDe: 'Mehrstufiges Kontaktformular',
      description:
        'A custom multi-step contact form guides potential clients through a structured inquiry process, improving lead quality and conversion rates for the studio.',
      descriptionUa:
        'Кастомна багатокрокова контактна форма проводить потенційних клієнтів через структурований процес опитування, підвищуючи якість лідів та конверсію для студії.',
      descriptionEs:
        'Un formulario de contacto personalizado de varios pasos guía a los clientes potenciales a través de un proceso de consulta estructurado, mejorando la calidad de los leads y la conversión.',
      descriptionDe:
        'Ein individuell entwickeltes mehrstufiges Kontaktformular führt potenzielle Kunden durch einen strukturierten Anfrageprozess und verbessert so die Lead-Qualität sowie die Konversionsrate des Studios.',
    },
    {
      title: 'Custom Portfolio Gallery',
      titleUa: 'Кастомна галерея портфоліо',
      titleEs: 'Galería de portafolio personalizada',
      titleDe: 'Individuelle Portfolio-Galerie',
      description:
        'A bespoke gallery module displays 3D architectural renders in a visually immersive layout, tailored to showcase the studio\'s expertise in construction and interior design.',
      descriptionUa:
        'Індивідуальний модуль галереї демонструє архітектурні 3D-рендери у візуально захопливому форматі, підкреслюючи експертизу студії в будівництві та дизайні інтер\'єрів.',
      descriptionEs:
        'Un módulo de galería a medida muestra renders arquitectónicos 3D en un diseño visualmente inmersivo, adaptado para destacar la experiencia del estudio en construcción e interiorismo.',
      descriptionDe:
        'Ein maßgeschneidertes Galeriemodul präsentiert architektonische 3D-Renderings in einem visuell beeindruckenden Layout, das gezielt die Expertise des Studios in Bauwesen und Innenarchitektur hervorhebt.',
    },
    {
      title: 'Blog & Content Management',
      titleUa: 'Блог та управління контентом',
      titleEs: 'Blog y gestión de contenidos',
      titleDe: 'Blog und Content-Management',
      description:
        'A custom-designed blog section enables the team to publish case studies, project updates, and industry insights, supporting SEO and client engagement.',
      descriptionUa:
        'Кастомний розділ блогу дозволяє команді публікувати кейси, оновлення проєктів та галузеву аналітику, підтримуючи SEO і залученість клієнтів.',
      descriptionEs:
        'Una sección de blog de diseño personalizado permite al equipo publicar casos de estudio, actualizaciones de proyectos y análisis del sector, apoyando el SEO y la interacción.',
      descriptionDe:
        'Ein individuell gestalteter Blog-Bereich ermöglicht es dem Team, Fallstudien, Projekt-Updates und Branchen-Insights zu veröffentlichen, was sowohl die SEO als auch die Kundenbindung stärkt.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      titleUa: 'Адаптивність та оптимізація швидкодії',
      titleEs: 'Diseño responsivo y optimizado en rendimiento',
      titleDe: 'Responsiv und performance-optimiert',
      description:
        'Fully responsive design combined with image optimization and Cloudflare CDN ensures fast load times and a seamless experience on all devices.',
      descriptionUa:
        'Повністю адаптивний дизайн у поєднанні з оптимізацією зображень та Cloudflare CDN гарантує швидке завантаження й бездоганну роботу на всіх пристроях.',
      descriptionEs:
        'El diseño totalmente responsivo combinado con la optimización de imágenes y Cloudflare CDN garantiza tiempos de carga rápidos y una experiencia fluida en todos los dispositivos.',
      descriptionDe:
        'Vollständig responsives Design in Kombination mit Bildoptimierung und Cloudflare CDN sorgt für schnelle Ladezeiten und ein reibungsloses Nutzererlebnis auf allen Endgeräten.',
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
  liveUrl: 'https://test.adwoods-design.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default adwoodsDesign
