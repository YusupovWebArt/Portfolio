import { Project } from '../project-types'

const eximProperty: Project = {
  id: 10990,
  title: 'Exim Property',
  description:
    'Real estate services company based in Thailand, with a focus on helping foreign buyers-especially clients-discover, evaluate, and acquire property in Thailand.',
  descriptionUa:
    'Компанія з нерухомості в Таїланді, що спеціалізується на допомозі іноземним покупцям знаходити, оцінювати та купувати нерухомість у Таїланді.',
  descriptionEs:
    'Empresa inmobiliaria con sede en Tailandia especializada en ayudar a compradores extranjeros -especialmente clientes internacionales- a descubrir, evaluar y adquirir propiedades en Tailandia.',
  descriptionDe:
    'Immobilienunternehmen mit Sitz in Thailand, das internationale Käufer dabei unterstützt, Immobilien in Thailand zu entdecken, zu bewerten und zu erwerben.',
  fullDescription:
    'A custom Gutenberg blocks-based WordPress theme for a Thailand real estate agency serving international buyers. The project included multi-language support, a BookingPress appointment scheduling system, bespoke service pages, PDF export functionality for property listings, and comprehensive SEO - delivering a feature-rich platform tailored for cross-border property acquisition.',
  fullDescriptionUa:
    'Кастомна тема WordPress на основі блоків Gutenberg для агентства нерухомості в Таїланді, що обслуговує міжнародних покупців. Проєкт включав багатомовну підтримку, систему планування зустрічей BookingPress, індивідуальні сторінки послуг, функціонал експорту об’єктів нерухомості в PDF та комплексне SEO, забезпечуючи багатофункціональну платформу для міжнародної купівлі нерухомості.',
  fullDescriptionEs:
    'Tema WordPress personalizada basada en bloques Gutenberg para una agencia inmobiliaria en Tailandia que atiende a compradores internacionales. El proyecto incluyó soporte multilingüe, un sistema de programación de citas con BookingPress, páginas de servicios a medida, funcionalidad de exportación de listados de propiedades a PDF y un SEO integral, proporcionando una plataforma completa y enriquecida para la adquisición de propiedades transfronteriza.',
  fullDescriptionDe:
    'Ein maßgeschneidertes, auf Gutenberg-Blöcken basierendes WordPress-Theme für eine thailändische Immobilienagentur, die internationale Käufer betreut. Das Projekt umfasste Mehrsprachigkeit, ein BookingPress-Terminbuchungssystem, individuelle Serviceseiten, eine PDF-Exportfunktion für Immobilienexposés sowie umfassendes SEO - und bietet damit eine funktionsreiche Plattform für den grenzüberschreitenden Immobilienerwerb.',
  detailHeroLine: 'CUSTOM WORDPRESS · REAL ESTATE · THAILAND',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Gutenberg Blocks', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'Multi-language', label: 'International Ready', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom Gutenberg Theme + BookingPress', highlight: true },
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
      'A custom Gutenberg block-based WordPress theme provides precise editorial control over property listing and service pages. BookingPress handles appointment scheduling for property viewings. Multi-language support enables the agency to serve international buyers, and a PDF export feature allows clients to download property details. Cloudflare CDN ensures fast delivery across Asia and beyond.',
    descriptionUa:
      'Кастомна тема WordPress на основі блоків Gutenberg забезпечує точний редакторський контроль над сторінками об’єктів нерухомості та послуг. BookingPress відповідає за планування зустрічей для перегляду об’єктів. Багатомовна підтримка дозволяє агентству обслуговувати міжнародних покупців, а функція експорту в PDF дає змогу завантажувати деталі об’єктів. Cloudflare CDN гарантує швидку доставку в Азії та по всьому світу.',
    descriptionEs:
      'Un tema de WordPress personalizado basado en bloques Gutenberg ofrece un control editorial preciso sobre las páginas de propiedades y servicios. BookingPress gestiona la programación de citas para visitas a inmuebles. El soporte multilingüe permite a la agencia atender a compradores internacionales, y una función de exportación a PDF permite descargar los detalles de cada propiedad. Cloudflare CDN asegura una entrega rápida en Asia y en todo el mundo.',
    descriptionDe:
      'Ein maßgeschneidertes WordPress-Theme auf Basis von Gutenberg-Blöcken ermöglicht eine präzise redaktionelle Steuerung der Immobilien- und Serviceseiten. BookingPress übernimmt die Terminplanung für Besichtigungen. Die Mehrsprachigkeit unterstützt die Betreuung internationaler Käufer, während eine PDF-Exportfunktion das Herunterladen von Objektinformationen erlaubt. Das Cloudflare CDN sorgt für schnelle Ladezeiten in Asien und weltweit.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/exim-property_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/exim-property_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/exim-property_thumb.webp',
      caption: 'Home page presenting Thailand property services for international buyers',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/exim-property/exim-property_slide2.webp',
      caption: 'Property listing pages with multi-language support and search filters',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/exim-property/exim-property_slide3.webp',
      caption: 'BookingPress appointment scheduling system for property viewing reservations',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/exim-property/exim-property_slide4.webp',
      caption: 'PDF export feature allowing clients to download property listing details',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible property listing and service pages' },
      { short: 'CSS3', full: 'Custom CSS3 providing tailored styling for the real estate brand aesthetic' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive property filters, booking UI, and PDF generation' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ powering Gutenberg block theme logic and PDF export functionality' },
      { short: 'MySQL', full: 'MySQL database for property listings, booking data, and multilingual content' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all property pages, services, and media content' },
      { short: 'Custom Gutenberg Blocks', full: 'Bespoke Gutenberg blocks for flexible and structured property listing layouts' },
      { short: 'BookingPress Plugin', full: 'BookingPress for appointment scheduling and property viewing reservations' },
      { short: 'Multi-language Support', full: 'Multi-language configuration enabling content delivery in multiple languages for international buyers' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery to international buyers across Asia and globally' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing client data and booking transactions' },
      { short: 'Nginx', full: 'Nginx server optimized for multi-language WordPress performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for international visitor behavior and booking conversion analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for property location display on listing pages' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'International and local SEO targeting property-buying keywords for the Thailand market' },
      { short: 'Schema.org Markup', full: 'JSON-LD RealEstateListing schema for property rich results in search engines' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning for green Core Web Vitals across property and booking pages' },
      { short: 'WebP Images', full: 'WebP format for property photography ensuring fast loading for international visitors' },
    ],
    digitalMarketing: [
      { short: 'PDF Export', full: 'Custom WordPress-to-PDF export allowing clients to download and share property listings offline' },
    ],
  },
  features: [
    {
      title: 'Custom Gutenberg Block Theme',
      titleUa: 'Кастомна блокова тема Gutenberg',
      titleEs: 'Tema personalizado de bloques Gutenberg',
      titleDe: 'Maßgeschneidertes Gutenberg-Block-Theme',
      description:
        'A bespoke Gutenberg block-based WordPress theme provides full editorial control over property listing templates and service pages without relying on a traditional page builder.',
      descriptionUa:
        'Індивідуальна тема WordPress на основі блоків Gutenberg забезпечує повний редакторський контроль над шаблонами об’єктів нерухомості та сторінками послуг без використання традиційних конструкторів сторінок.',
      descriptionEs:
        'Un tema de WordPress a medida basado en bloques Gutenberg ofrece control editorial total sobre las plantillas de propiedades y páginas de servicios sin depender de un constructor tradicional.',
      descriptionDe:
        'Ein maßgeschneidertes WordPress-Theme auf Basis von Gutenberg-Blöcken bietet volle redaktionelle Kontrolle über Immobilienvorlagen und Serviceseiten, ganz ohne klassischen Page-Builder.',
    },
    {
      title: 'BookingPress Appointment Scheduling',
      titleUa: 'Планування зустрічей через BookingPress',
      titleEs: 'Programación de citas con BookingPress',
      titleDe: 'Terminbuchung mit BookingPress',
      description:
        'Integrated BookingPress plugin enables clients to schedule property viewing appointments directly on the site, streamlining the buyer journey for international customers.',
      descriptionUa:
        'Інтегрований плагін BookingPress дозволяє клієнтам бронювати зустрічі для огляду нерухомості безпосередньо на сайті, спрощуючи шлях покупця для міжнародних клієнтів.',
      descriptionEs:
        'El plugin integrado BookingPress permite a los clientes programar citas de visita a propiedades directamente en el sitio, agilizando el proceso de compra para clientes internacionales.',
      descriptionDe:
        'Das integrierte BookingPress-Plugin ermöglicht es Interessenten, Besichtigungstermine direkt über die Website zu vereinbaren, was die Customer Journey für internationale Käufer deutlich vereinfacht.',
    },
    {
      title: 'Multi-language Support',
      titleUa: 'Багатомовна підтримка',
      titleEs: 'Soporte multilingüe',
      titleDe: 'Mehrsprachige Unterstützung',
      description:
        'Multi-language configuration allows the agency to serve property listings and service content in multiple languages, reaching foreign buyers across different markets.',
      descriptionUa:
        'Багатомовна конфігурація дозволяє агентству представляти об’єкти нерухомості та опис послуг кількома мовами, охоплюючи іноземних покупців із різних країн.',
      descriptionEs:
        'La configuración multilingüe permite a la agencia ofrecer listados de propiedades y contenidos de servicios en varios idiomas, llegando a compradores extranjeros de distintos mercados.',
      descriptionDe:
        'Dank der mehrsprachigen Konfiguration kann die Agentur Immobilienangebote und Serviceinhalte in mehreren Sprachen bereitstellen und so ausländische Käufer in verschiedenen Märkten erreichen.',
    },
    {
      title: 'PDF Property Listing Export',
      titleUa: 'Експорт об’єктів нерухомості у PDF',
      titleEs: 'Exportación de propiedades a PDF',
      titleDe: 'PDF-Export für Immobilienexposés',
      description:
        'A custom PHP-powered feature allows visitors to export any property listing as a PDF document for offline review, sharing, and client presentations.',
      descriptionUa:
        'Кастомна PHP-функція дозволяє відвідувачам експортувати будь-який об’єкт нерухомості у формат PDF для офлайн-перегляду, поширення та клієнтських презентацій.',
      descriptionEs:
        'Una función personalizada en PHP permite a los visitantes exportar cualquier ficha de propiedad como documento PDF para su revisión sin conexión, uso compartido y presentaciones.',
      descriptionDe:
        'Eine individuell in PHP entwickelte Funktion ermöglicht es Besuchern, jedes Immobilienangebot als PDF-Exposé für die Offline-Ansicht, die Weitergabe und Kundenpräsentationen zu exportieren.',
    },
    {
      title: 'SEO & Real Estate Schema',
      titleUa: 'SEO та мікророзмітка нерухомості',
      titleEs: 'SEO y Schema inmobiliario',
      titleDe: 'SEO & Immobilien-Schema',
      description:
        'Technical SEO with RealEstateListing Schema.org markup and Google Maps integration drives visibility for Thailand property search terms among international buyers.',
      descriptionUa:
        'Технічне SEO з розміткою RealEstateListing Schema.org та інтеграцією Google Maps підвищує видимість за пошуковими запитами щодо нерухомості в Таїланді серед міжнародних покупців.',
      descriptionEs:
        'El SEO técnico con marcado RealEstateListing de Schema.org e integración con Google Maps impulsa la visibilidad en búsquedas de propiedades en Tailandia entre compradores internacionales.',
      descriptionDe:
        'Technisches SEO mit RealEstateListing-Schema.org-Markup und Google-Maps-Integration steigert die Sichtbarkeit für Suchanfragen zu Immobilien in Thailand bei internationalen Käufern.',
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
  liveUrl: 'https://www.eximproperty.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default eximProperty
