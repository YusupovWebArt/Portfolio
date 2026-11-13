import { Project } from '../project-types'

const frontDeskHelpers: Project = {
  id: 19000,
  title: 'Front Desk Helpers',
  description:
    'FDH provides skilled remote employees and advanced IT solutions to help businesses grow and thrive.',
  descriptionUa:
    'FDH надає кваліфікованих віддалених працівників та сучасні IT-рішення, щоб допомогти бізнесу зростати та розвиватися.',
  descriptionEs:
    'FDH proporciona empleados remotos cualificados y soluciones IT avanzadas para ayudar a las empresas a crecer y prosperar.',
  descriptionDe:
    'FDH stellt qualifizierte Remote-Mitarbeiter und fortschrittliche IT-Lösungen bereit, um Unternehmen beim Wachsen und Erfolgen zu unterstützen.',
  fullDescription:
    'Development of a corporate outsourcing and IT consulting portal for Front Desk Helpers. Built with a custom WordPress theme integrated with Elementor Pro, bespoke PHP structures, and Advanced Custom Fields (ACF). The portal localized services for US and ES markets with dynamic application/feedback forms. Implemented structured Schema.org JSON-LD definitions and technical SEO speed optimizations for maximum search visibility.',
  fullDescriptionUa:
    'Розробка корпоративного порталу аутсорсингу та IT-консалтингу для Front Desk Helpers. Побудовано на кастомній темі WordPress з інтеграцією Elementor Pro, кастомними PHP-структурами та ACF. Портал локалізовано для ринків США та Іспанії з динамічними формами заявок. Впроваджено структуровану мікророзмітку Schema.org JSON-LD та оптимізацію швидкості.',
  fullDescriptionEs:
    'Desarrollo de un portal corporativo de outsourcing y consultoría IT para Front Desk Helpers. Construido con un tema WordPress personalizado integrado con Elementor Pro, estructuras PHP propias y Advanced Custom Fields (ACF). El portal fue localizado para los mercados de EE. UU. y España con formularios dinámicos de solicitud y retroalimentación. Se implementaron definiciones estructuradas Schema.org JSON-LD y optimizaciones técnicas de velocidad para maximizar la visibilidad en buscadores.',
  fullDescriptionDe:
    'Entwicklung eines Unternehmensportals für Outsourcing und IT-Beratung für Front Desk Helpers. Realisiert mit einem maßgeschneiderten WordPress-Theme in Kombination mit Elementor Pro, individuellen PHP-Strukturen und Advanced Custom Fields (ACF). Das Portal bietet lokalisierte Dienstleistungen für den US-amerikanischen und spanischen Markt inklusive dynamischer Bewerbungs- und Feedbackformulare. Strukturierte Schema.org-JSON-LD-Definitionen und technische SEO-Geschwindigkeitsoptimierungen sorgen für maximale Sichtbarkeit in Suchmaschinen.',
  detailHeroLine: 'CUSTOM WORDPRESS · ENTERPRISE OUTSOURCING PORTAL',
  detailMetrics: [
    { value: '94+', label: 'PageSpeed', accent: 'green' },
    { value: '<1.5s', label: 'Page load', accent: 'green' },
    { value: 'PHP 8 / Elementor', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'US / ES Ready', label: 'Multi-language', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom Theme + Elementor Pro', highlight: true },
          { label: 'ACF Pro' },
        ],
      },
      {
        rowLabel: 'DELIVERY FLOW',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Apache/Nginx' },
          { label: 'Cloudflare CDN', highlight: true },
        ],
      },
    ],
    description:
      'A customized enterprise portal built using a custom WordPress theme combined with Elementor Pro for responsive layouts. Serves dynamic registration and feedback forms with Cloudflare caching for optimal performance.',
    descriptionDe:
      'Ein maßgeschneidertes Unternehmensportal auf Basis eines individuellen WordPress-Themes in Kombination mit Elementor Pro für responsive Layouts. Es stellt dynamische Registrierungs- und Feedbackformulare mit Cloudflare-Caching für optimale Performance bereit.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/frontdeskhelpers_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/wordpress/frontdeskhelpers.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/frontdeskhelpers_thumb.webp',
      caption: 'Home page showcasing business solutions and remote staffing channels',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/frontdeskhelpers/frontdeskhelpers_slide4.webp',
      caption: 'Custom design grids presenting service packages and core advantages',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/frontdeskhelpers/frontdeskhelpers_slide6.webp',
      caption: 'Corporate footer layout with integrated contact forms and site navigation',
    },
  ],
  technologies: {
    frontend: [
      'HTML5',
      'CSS3 (Flexbox/Grid)',
      'JavaScript (ES6)',
      'Elementor Pro',
    ],
    backend: ['PHP 8+', 'MySQL'],
    contentManagement: ['WordPress Core', 'Advanced Custom Fields (ACF)'],
    devopsSecurity: [
      'Cloudflare Edge DNS',
      'SSL/TLS Security',
      'Apache/Nginx Hosting',
    ],
    analytics: ['Google Analytics (GA4)', 'Google Maps API'],
    seo: [
      'Technical SEO',
      'Schema.org JSON-LD Structured Data',
      'Meta Tags Optimization',
    ],
    performanceOptimization: [
      'Core Web Vitals tuning',
      'Nginx Caching',
      'Browser caching',
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme Development',
      titleDe: 'Individuelle WordPress-Theme-Entwicklung',
      description:
        'Built a completely custom theme tailored specifically for Front Desk Helpers, ensuring complete design flexibility and high performance.',
      descriptionDe:
        'Entwicklung eines vollständig maßgeschneiderten Themes speziell für Front Desk Helpers, das maximale Designflexibilität und hohe Performance gewährleistet.',
    },
    {
      title: 'AI-generated Graphic Visuals',
      titleDe: 'KI-generierte Grafik-Visuals',
      description:
        'Created unique corporate illustrations and branding visuals using creative AI tools, integrating them seamlessly into the layout.',
      descriptionDe:
        'Erstellung einzigartiger Unternehmensillustrationen und Branding-Visuals mithilfe kreativer KI-Tools und deren nahtlose Integration in das Seitenlayout.',
    },
    {
      title: 'Multi-language US/ES Architecture',
      titleDe: 'Mehrsprachige US/ES-Architektur',
      description:
        'Designed localized paths for US and ES markets to serve regional marketing and client funnels.',
      descriptionDe:
        'Konzeption lokalisierter Pfade für den US-amerikanischen und spanischen Markt zur Unterstützung regionaler Marketing- und Kunden-Funnels.',
    },
    {
      title: 'Client & Candidate Feedback Funnels',
      titleDe: 'Kunden- und Kandidaten-Feedback-Funnels',
      description:
        'Custom-engineered intake forms and candidate application systems to connect clients with remote staffing channels.',
      descriptionDe:
        'Maßgeschneiderte Aufnahmeformulare und Bewerbungssysteme für Kandidaten, um Unternehmenskunden effizient mit Remote-Staffing-Kanälen zu verbinden.',
    },
  ],
  challenges: [
    'Maintaining fast page load speeds and high Core Web Vitals metrics on a WordPress site utilizing the Elementor page builder.',
    'Implementing search engine optimization and regional SEO indexing rules for both US (English) and Spain (Spanish) domains.',
  ],
  challengesUa: [
    'Підтримка високої швидкості завантаження сторінок та показників Core Web Vitals на сайті WordPress із використанням конструктора Elementor.',
    'Впровадження пошукової оптимізації та правил регіональної SEO-індексації одночасно для американського (англійська) та іспанського (іспанська) доменів.',
  ],
  challengesEs: [
    'Mantener tiempos de carga rápidos y métricas altas de Core Web Vitals en un sitio WordPress que utiliza el constructor de páginas Elementor.',
    'Implementar optimización para motores de búsqueda y reglas de indexación SEO regional tanto para el dominio de EE. UU. (inglés) como para el de España (español).',
  ],
  challengesDe: [
    'Aufrechterhaltung schneller Seitenladezeiten und hoher Core-Web-Vitals-Metriken auf einer WordPress-Website, die den Elementor Page Builder nutzt.',
    'Implementierung von Suchmaschinenoptimierung und regionalen SEO-Indexierungsregeln sowohl für US-amerikanische (Englisch) als auch für spanische (Spanisch) Domains.',
  ],
  solutions: [
    'Minified assets, deferred render-blocking CSS/JS files, and converted heavy media elements to next-gen WebP formats to achieve sub-second content rendering.',
    'Configured proper Hreflang attributes, optimized sitemaps, and injected localized Schema.org structured data to separate regional indexes.',
  ],
  solutionsUa: [
    'Мініфіковано ресурси, відкладено завантаження CSS/JS, що блокують рендеринг, та конвертовано медіафайли у сучасний формат WebP для рендерингу контенту менш ніж за секунду.',
    'Налаштовано коректні атрибути Hreflang, оптимізовано карти сайту та додано локалізовану структуровану розмітку Schema.org для розділення регіональних індексів.',
  ],
  solutionsEs: [
    'Se minificaron recursos, se aplazaron archivos CSS/JS que bloqueaban el renderizado y se convirtieron elementos multimedia pesados al formato WebP de nueva generación para lograr un renderizado en menos de un segundo.',
    'Se configuraron atributos Hreflang adecuados, se optimizaron los sitemaps y se inyectaron datos estructurados Schema.org localizados para separar los índices regionales.',
  ],
  solutionsDe: [
    'Assets wurden minimiert, renderblockierende CSS/JS-Dateien verzögert geladen und große Medienelemente in moderne WebP-Formate konvertiert, um ein Content-Rendering im Sub-Sekunden-Bereich zu erreichen.',
    'Korrekte Hreflang-Attribute wurden konfiguriert, Sitemaps optimiert und lokalisierte strukturierte Schema.org-Daten eingebunden, um regionale Suchindizes sauber zu trennen.',
  ],
  liveUrl: 'https://frontdeskhelpers.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default frontDeskHelpers
