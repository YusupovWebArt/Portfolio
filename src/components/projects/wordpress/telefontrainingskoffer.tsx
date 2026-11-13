import { Project } from '../project-types'

const telefonTrainingskoffer: Project = {
  id: 17500,
  title: 'Telefontrainingskoffer',
  deepDiveBlogSlug: 'telefontrainingskoffer-interactive-edtech-streaming',
  description: 'Callcenter Akademie',
  descriptionUa: 'Академія кол-центрів',
  descriptionEs: 'Academia de centros de llamadas',
  descriptionDe: 'Callcenter Akademie',
  fullDescription:
    'Development of a custom WordPress portal for Telefontrainingskoffer, a professional German call center academy training service. Engineered a custom WordPress theme from scratch utilizing Advanced Custom Fields (ACF) and WPBakery Page Builder for dynamic layout block styling. Focused on strict German DACH market GDPR compliance for interactive contact forms and intake systems, coupled with server-side performance tuning.',
  fullDescriptionUa:
    'Розробка індивідуального порталу WordPress для Telefontrainingskoffer - сервісу навчання німецької академії кол-центрів. Розроблено унікальну тему WordPress з нуля з використанням Advanced Custom Fields (ACF) та WPBakery Page Builder для стилізації динамічних блоків. Особливу увагу приділено суворому дотриманню правил GDPR на ринку DACH (Німеччина) для інтерактивних контактних форм та систем прийому заявок, а також оптимізації продуктивності на стороні сервера.',
  fullDescriptionEs:
    'Desarrollo de un portal personalizado de WordPress para Telefontrainingskoffer, un servicio de formación profesional de la academia alemana de centros de llamadas. Se diseñó un tema de WordPress exclusivo desde cero utilizando Advanced Custom Fields (ACF) y WPBakery Page Builder para la estilización de bloques de contenido dinámico. Se prestó especial atención al cumplimiento estricto del GDPR en el mercado DACH (Alemania) para los formularios de contacto interactivos y los sistemas de captación de solicitudes, junto con la optimización del rendimiento en el servidor.',
  fullDescriptionDe:
    'Entwicklung eines maßgeschneiderten WordPress-Portals für Telefontrainingskoffer, einen professionellen Trainingsdienst der deutschen Callcenter Akademie. Ein individuelles WordPress-Theme wurde von Grund auf mit Advanced Custom Fields (ACF) und dem WPBakery Page Builder für die dynamische Gestaltung von Layoutblöcken realisiert. Besonderer Fokus lag auf der strikten DSGVO-Konformität für den deutschen DACH-Markt bei interaktiven Kontaktformularen und Anfrageprozessen sowie auf serverseitiger Performance-Optimierung.',
  detailHeroLine: 'CUSTOM WORDPRESS · CALL CENTER ACADEMY SYSTEM',
  detailMetrics: [
    { value: '96+', label: 'PageSpeed', accent: 'green' },
    { value: '<0.9s', label: 'Page load', accent: 'green' },
    { value: 'WPBakery / ACF', label: 'Layout Builder', accent: 'darkGreen' },
    { value: 'DACH (DE) Ready', label: 'Target Market', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP Theme', highlight: true },
          { label: 'WPBakery Page Builder' },
        ],
      },
      {
        rowLabel: 'DELIVERY FLOW',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx FastCGI', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'A custom WordPress portal designed for professional call center training services in Germany, using WPBakery templates and custom PHP scripts. Optimised through Nginx caching layers.',
    descriptionUa:
      'Індивідуальний портал на WordPress, розроблений для професійних послуг навчання кол-центрів у Німеччині з використанням шаблонів WPBakery та кастомних PHP-скриптів. Оптимізовано за допомогою рівнів кешування Nginx.',
    descriptionEs:
      'Un portal de WordPress personalizado diseñado para servicios profesionales de formación de centros de llamadas en Alemania, utilizando plantillas WPBakery y scripts PHP personalizados. Optimizado mediante capas de caché de Nginx.',
    descriptionDe:
      'Ein individuelles WordPress-Portal für professionelle Callcenter-Schulungsdienste in Deutschland unter Einsatz von WPBakery-Vorlagen und maßgeschneiderten PHP-Skripten, optimiert durch mehrstufiges Nginx-Caching.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/telefontrainingskoffer_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wordpress/telefontrainingskoffer.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/telefontrainingskoffer_thumb.webp',
      caption: 'Home page presenting call center training equipment and academy details',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telefontrainingskoffer/telefontrainingskoffer_slide2.webp',
      caption: 'Visual course outline sheets and training materials catalog',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telefontrainingskoffer/telefontrainingskoffer_slide3.webp',
      caption: 'Bespoke contact and booking request forms for academy courses',
    },
  ],
  technologies: {
    frontend: [
      'HTML5',
      'CSS3 (Flexbox)',
      'JavaScript (ES6)',
      'WPBakery Page Builder',
    ],
    backend: ['PHP 8+', 'MySQL'],
    contentManagement: ['WordPress Core', 'Advanced Custom Fields (ACF)'],
    devopsSecurity: [
      'Nginx Hosting',
      'SSL Encryption',
      'Secure server-side forms',
    ],
    analytics: ['Google Analytics', 'Conversion tracking'],
    seo: ['Google-friendly structured schema', 'German local SEO'],
    performanceOptimization: [
      'Gzip compression',
      'WebP image formats',
      'Deferred JS loading',
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      titleUa: 'Розробка індивідуальної теми WordPress',
      titleEs: 'Desarrollo de tema de WordPress personalizado',
      titleDe: 'Entwicklung eines individuellen WordPress-Themes',
      description:
        'Built a completely bespoke theme matching the corporate identity of the Call Center Academy in Germany.',
      descriptionUa:
        'Створено повністю індивідуальну тему, що відповідає корпоративній айдентиці Академії кол-центрів у Німеччині.',
      descriptionEs:
        'Se construyó un tema completamente a medida acorde con la identidad corporativa de la Academia de Centros de Llamadas en Alemania.',
      descriptionDe:
        'Entwicklung eines vollständig maßgeschneiderten Themes passend zur Corporate Identity der Callcenter Akademie in Deutschland.',
    },
    {
      title: 'WPBakery Page Builder Integration',
      titleUa: 'Інтеграція конструктора сторінок WPBakery',
      titleEs: 'Integración del constructor de páginas WPBakery',
      titleDe: 'WPBakery Page Builder Integration',
      description:
        'Configured custom content elements in WPBakery, allowing editors to create visually engaging course layouts.',
      descriptionUa:
        'Налаштовано кастомні елементи контенту у WPBakery, що дозволяє редакторам створювати візуально привабливі макети курсів.',
      descriptionEs:
        'Se configuraron elementos de contenido personalizados en WPBakery, permitiendo a los editores crear diseños de cursos visualmente atractivos.',
      descriptionDe:
        'Konfiguration individueller Inhaltselemente in WPBakery, sodass Redakteure visuell ansprechende Kurs-Layouts erstellen können.',
    },
    {
      title: 'High-Performance CSS/JS',
      titleUa: 'Високопродуктивні CSS/JS',
      titleEs: 'CSS/JS de alto rendimiento',
      titleDe: 'Hochperformantes CSS/JS',
      description:
        'Implemented custom stylesheets and interactive animations to ensure responsive usability.',
      descriptionUa:
        'Впроваджено кастомні таблиці стилів та інтерактивні анімації для забезпечення адаптивної зручності користування.',
      descriptionEs:
        'Se implementaron hojas de estilo personalizadas y animaciones interactivas para garantizar una usabilidad responsiva.',
      descriptionDe:
        'Implementierung individueller Stylesheets und interaktiver Animationen zur Sicherstellung einer responsiven Benutzerfreundlichkeit.',
    },
    {
      title: 'Contact & Lead Capture Forms',
      titleUa: 'Форми контакту та збору лідів',
      titleEs: 'Formularios de contacto y captación de leads',
      titleDe: 'Kontakt- und Lead-Erfassungsformulare',
      description:
        'Customized contact forms and lead funnels to maximize course booking inquiries.',
      descriptionUa:
        'Адаптовано контактні форми та воронки лідів для максимізації запитів на бронювання курсів.',
      descriptionEs:
        'Se personalizaron los formularios de contacto y embudos de captación para maximizar las solicitudes de reserva de cursos.',
      descriptionDe:
        'Maßgeschneiderte Kontaktformulare und Lead-Funnels zur Maximierung von Kursbuchungsanfragen.',
    },
  ],
  challenges: [
    'Integrating WPBakery page builder without bloating page sizes and reducing load speed.',
    'Ensuring security and GDPR compliance for lead forms in the German DACH market.',
  ],
  challengesUa: [
    'Інтеграція конструктора сторінок WPBakery без роздування розміру сторінок та зниження швидкості завантаження.',
    'Забезпечення безпеки та відповідності вимогам GDPR для лід-форм на німецькому ринку DACH.',
  ],
  challengesEs: [
    'Integrar el constructor de páginas WPBakery sin sobrecargar el tamaño de las páginas ni reducir la velocidad de carga.',
    'Garantizar la seguridad y el cumplimiento del RGPD (GDPR) en los formularios de captación para el mercado alemán DACH.',
  ],
  challengesDe: [
    'Integration des WPBakery Page Builders ohne Aufblähen der Seitengröße und ohne Einbußen bei der Ladegeschwindigkeit.',
    'Gewährleistung von Sicherheit und DSGVO-Konformität für Lead-Formulare im deutschen DACH-Markt.',
  ],
  solutions: [
    'Implemented aggressive file minification, deferred page builder CSS, and optimized media assets.',
    'Configured secure HTTPS forms, local storage options, and strict privacy controls matching GDPR regulations.',
  ],
  solutionsUa: [
    'Впроваджено агресивну мініфікацію файлів, відкладене завантаження CSS конструктора сторінок та оптимізацію медіаресурсів.',
    'Налаштовано захищені HTTPS-форми, локальні параметри зберігання та суворий контроль конфіденційності відповідно до норм GDPR.',
  ],
  solutionsEs: [
    'Se implementó una minificación intensiva de archivos, carga diferida del CSS del constructor y optimización de recursos multimedia.',
    'Se configuraron formularios HTTPS seguros, opciones de almacenamiento local y controles estrictos de privacidad conformes al RGPD.',
  ],
  solutionsDe: [
    'Umsetzung einer konsequenten Dateiminimierung, verzögertes Laden von Page-Builder-CSS sowie Optimierung sämtlicher Medien-Assets.',
    'Konfiguration sicherer HTTPS-Formulare, lokaler Speicheroptionen und strenger Datenschutzkontrollen gemäß den DSGVO-Vorgaben.',
  ],
  liveUrl: 'https://callcenter-akademie.de/telefontrainingskoffer/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default telefonTrainingskoffer
