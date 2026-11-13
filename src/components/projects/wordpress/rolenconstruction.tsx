import { Project } from '../project-types'

const rolenConstruction: Project = {
  id: 17000,
  title: 'Rolen Construction',
  description:
    'Partner in ADUs, New Construction, and transformative Remodeling.',
  descriptionUa:
    'Партнер у сфері будівництва прибудов (ADU), нового будівництва та комплексного ремонту.',
  descriptionEs:
    'Socio especializado en unidades de vivienda adicionales (ADU), obra nueva y reformas integrales.',
  descriptionDe:
    'Partner für Einliegerwohnungen (ADUs), Neubau und umfassende Sanierungen.',
  fullDescription:
    'Rolen Construction is a US-based construction services website built on a fully custom WordPress theme using ACF (Advanced Custom Fields) for flexible content management. Inner service landing pages were built with Elementor at the client\'s request, while the main theme is powered by custom CSS3 and PHP. The site features project portfolio display, a contact form, SEO optimization, and Google Maps integration for local search visibility.',
  fullDescriptionUa:
    'Rolen Construction - це американський вебсайт будівельних послуг, розроблений на повністю унікальній темі WordPress із використанням ACF (Advanced Custom Fields) для гнучкого управління контентом. Внутрішні посадкові сторінки послуг створені на Elementor за запитом клієнта, а основна тема працює на кастомному CSS3 та PHP. Сайт містить портфоліо проєктів, контактну форму, SEO-оптимізацію та інтеграцію з Google Maps API для підвищення локальної видимості в пошуку.',
  fullDescriptionEs:
    'Rolen Construction es un sitio web de servicios de construcción para el mercado estadounidense, desarrollado sobre un tema de WordPress completamente personalizado con ACF (Advanced Custom Fields) para una gestión de contenido flexible. Las páginas de aterrizaje de servicios interiores se construyeron con Elementor a petición del cliente, mientras que el tema principal se apoya en CSS3 personalizado y PHP. El sitio incluye un portafolio de proyectos, formulario de contacto, optimización SEO e integración con Google Maps API para mejorar la visibilidad en búsquedas locales.',
  fullDescriptionDe:
    'Rolen Construction ist eine US-amerikanische Website für Baudienstleistungen, die auf einem vollständig maßgeschneiderten WordPress-Theme mit ACF (Advanced Custom Fields) für eine flexible Inhaltsverwaltung basiert. Die internen Leistungs-Landingpages wurden auf Kundenwunsch mit Elementor erstellt, während das Haupt-Theme durch individuelles CSS3 und PHP angetrieben wird. Die Website umfasst ein Projektportfolio, ein Kontaktformular, SEO-Optimierung sowie eine Google Maps-Integration für optimale Sichtbarkeit in der lokalen Suche.',
  detailHeroLine: 'CUSTOM WORDPRESS · CONSTRUCTION SERVICES',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme + ACF', label: 'WordPress Engine', accent: 'darkGreen' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme + ACF' },
          { label: 'Elementor Landing Pages', highlight: true },
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
      'The site is built on a fully custom WordPress theme using ACF for structured custom post types and flexible content. Inner service landing pages are handled by Elementor for client self-editing capability. Custom CSS3 and PHP deliver unique styling and server-side logic, with Cloudflare CDN ensuring fast delivery across the US.',
    descriptionUa:
      'Сайт побудовано на повністю кастомній темі WordPress із використанням ACF для структурованих довільних типів записів та гнучкого контенту. Внутрішні посадкові сторінки послуг реалізовані на Elementor для самостійного редагування клієнтом. Кастомний CSS3 та PHP забезпечують унікальну стилізацію таверну серверну логіку, а Cloudflare CDN гарантує швидку доставку по всій території США.',
    descriptionEs:
      'El sitio está construido sobre un tema de WordPress totalmente personalizado que utiliza ACF para tipos de contenido estructurados y flexibles. Las páginas de aterrizaje de servicios interiores se gestionan con Elementor para permitir la autoedición del cliente. El CSS3 personalizado y PHP aportan un estilo único y lógica del lado del servidor, con Cloudflare CDN asegurando una entrega rápida en todo EE. UU.',
    descriptionDe:
      'Die Website basiert auf einem vollständig individuellen WordPress-Theme unter Verwendung von ACF für strukturierte Custom Post Types und flexible Inhalte. Interne Leistungs-Landingpages werden über Elementor verwaltet, damit der Kunde sie selbstständig bearbeiten kann. Individuelles CSS3 und PHP liefern ein einzigartiges Design sowie serverseitige Logik, während das Cloudflare CDN für schnelle Ladezeiten in den gesamten USA sorgt.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/rolen-construction_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/rolen-construction_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/rolen-construction_thumb.webp',
      caption: 'Home page with construction services hero and project highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/rolen-construction/rolen-construction_slide2.webp',
      caption: 'Custom contact form with project inquiry fields and validation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/rolen-construction/rolen-construction_slide3.webp',
      caption: 'Services section using ACF custom post types for ADU and remodeling listings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/rolen-construction/rolen-construction_slide4.webp',
      caption: 'Custom CSS3, JavaScript, and PHP code powering dynamic service interactions',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and indexable construction service pages' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive Grid layouts and hover animations for portfolio items' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and smooth page interactions' },
      { short: 'Elementor', full: 'Elementor page builder used for inner service landing pages for client self-editing' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering custom WordPress theme functions and form processing logic' },
      { short: 'MySQL', full: 'MySQL database storing project portfolio, services, and contact form data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the platform foundation for all content and page management' },
      { short: 'Advanced Custom Fields', full: 'ACF enabling structured custom post types for services and portfolio management' },
      { short: 'Custom WP Theme', full: 'Fully custom WordPress theme built from scratch for complete design control' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast US delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure visitor connections and form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for high-performance WordPress hosting' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API showing the company\'s service area for local customers' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking project inquiry submissions, traffic sources, and user behaviour' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local construction SEO targeting ADU, new construction, and remodeling searches' },
      { short: 'Schema.org Markup', full: 'LocalBusiness and Service JSON-LD structured data for rich search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization achieving green scores across all Core Web Vitals' },
      { short: 'WebP Images', full: 'WebP format for project portfolio images ensuring fast loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for lead capture and project inquiry tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with ACF',
      titleUa: 'Індивідуальна тема WordPress з ACF',
      titleEs: 'Tema de WordPress personalizado con ACF',
      titleDe: 'Individuelles WordPress-Theme mit ACF',
      description:
        'A fully custom WordPress theme was developed from scratch using Advanced Custom Fields for structured service and portfolio content, giving the client full content management capability without developer involvement.',
      descriptionUa:
        'Повністю кастомна тема WordPress була розроблена з нуля з використанням Advanced Custom Fields для структурованого контенту послуг і портфоліо, що дає клієнту повний контроль над контентом без залучення розробників.',
      descriptionEs:
        'Se desarrolló un tema de WordPress totalmente personalizado desde cero utilizando Advanced Custom Fields para estructurar el contenido de servicios y portafolio, otorgando al cliente control total sin intervención de desarrolladores.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes WordPress-Theme wurde von Grund auf mit Advanced Custom Fields für strukturierte Leistungs- und Portfolio-Inhalte entwickelt, sodass der Kunde sämtliche Inhalte ohne Entwicklerhilfe verwalten kann.',
    },
    {
      title: 'Elementor Inner Service Landing Pages',
      titleUa: 'Внутрішні посадкові сторінки послуг на Elementor',
      titleEs: 'Páginas de aterrizaje de servicios interiores en Elementor',
      titleDe: 'Interne Leistungs-Landingpages mit Elementor',
      description:
        'Inner service pages for ADU, new construction, and remodeling were built with Elementor per the client\'s request, enabling intuitive drag-and-drop editing for future content updates.',
      descriptionUa:
        'Внутрішні сторінки послуг для ADU, нового будівництва та реконструкції були створені за допомогою Elementor на запит клієнта, забезпечуючи інтуїтивне drag-and-drop редагування для майбутніх оновлень.',
      descriptionEs:
        'Las páginas interiores de servicios para ADU, obra nueva y remodelación se crearon con Elementor a petición del cliente, permitiendo una edición intuitiva de arrastrar y soltar para futuras actualizaciones.',
      descriptionDe:
        'Die internen Leistungsseiten für ADUs, Neubau und Sanierung wurden auf Kundenwunsch mit Elementor umgesetzt, was eine intuitive Drag-and-Drop-Bearbeitung für künftige Inhaltsaktualisierungen ermöglicht.',
    },
    {
      title: 'Services Custom Post Types',
      titleUa: 'Довільні типи записів для послуг',
      titleEs: 'Tipos de publicaciones personalizadas para servicios',
      titleDe: 'Custom Post Types für Dienstleistungen',
      description:
        'ACF-powered custom post types organize construction services into structured, editable entries that display dynamically across service listing and detail pages.',
      descriptionUa:
        'Довільні типи записів на базі ACF організовують будівельні послуги у структуровані редаговані елементи, які динамічно відображаються у списках послуг та на детальних сторінках.',
      descriptionEs:
        'Los tipos de publicaciones personalizadas basados en ACF organizan los servicios de construcción en entradas estructuradas y editables que se muestran dinámicamente en las páginas de listado y detalle.',
      descriptionDe:
        'ACF-gestützte Custom Post Types strukturieren die Bauleistungen in bearbeitbare Einträge, die dynamisch auf Übersichts- und Detailseiten dargestellt werden.',
    },
    {
      title: 'Custom Contact Form',
      titleUa: 'Кастомна контактна форма',
      titleEs: 'Formulario de contacto personalizado',
      titleDe: 'Individuelles Kontaktformular',
      description:
        'A project inquiry contact form with PHP-backed validation and email routing captures leads directly from the website with secure form submission handling.',
      descriptionUa:
        'Контактна форма запиту проєкту з серверною PHP-валідацією та маршрутизацією електронної пошти збирає ліди безпосередньо з вебсайту із захищеною обробкою даних.',
      descriptionEs:
        'Un formulario de contacto para consultas de proyectos con validación PHP y enrutamiento de correo electrónico capta clientes potenciales directamente desde el sitio web de forma segura.',
      descriptionDe:
        'Ein Kontaktformular für Projektanfragen mit PHP-gestützter Validierung und E-Mail-Weiterleitung erfasst Leads direkt über die Website bei sicherer Datenübertragung.',
    },
    {
      title: 'Local SEO Optimization',
      titleUa: 'Локальна SEO-оптимізація',
      titleEs: 'Optimización SEO local',
      titleDe: 'Lokale SEO-Optimierung',
      description:
        'Local business SEO with Schema.org markup and Google Maps ensures strong visibility for construction service searches across the company\'s target service area.',
      descriptionUa:
        'Локальне бізнес-SEO з розміткою Schema.org та Google Maps забезпечує високу видимість за пошуковими запитами будівельних послуг у цільовому регіоні обслуговування компанії.',
      descriptionEs:
        'El SEO local para empresas con marcado Schema.org y Google Maps garantiza una sólida visibilidad en las búsquedas de servicios de construcción dentro del área de cobertura de la empresa.',
      descriptionDe:
        'Lokales Unternehmens-SEO mit Schema.org-Markup und Google Maps sorgt für eine starke Sichtbarkeit bei Suchanfragen nach Baudienstleistungen im gesamten Einzugsgebiet des Unternehmens.',
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
  liveUrl: 'https://rolenconstruction.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default rolenConstruction
