import { Project } from '../project-types'

const manitoulinTimberFrames: Project = {
  id: 12000,
  title: 'Manitoulin Timber Frames',
  description:
    'Full Wix to custom WordPress migration for Canadian timber-frame builder, delivering custom theme styling, 90+ PageSpeed score, and sub-2s load times.',
  descriptionUa:
    'Міграція з Wix на кастомну тему WordPress для канадської будівельної компанії з оптимізацією PageSpeed 90+ та завантаженням до 2 секунд.',
  descriptionEs:
    'Migración completa de Wix a WordPress personalizado para constructora canadiense, con diseño a medida, PageSpeed 90+ y carga en menos de 2s.',
  descriptionDe:
    'Komplette Migration von Wix zu individuellem WordPress für ein kanadisches Holzbauunternehmen mit PageSpeed 90+ und Ladezeiten unter 2 Sekunden.',
  fullDescription:
    'Manitoulin Timber Frames required a full migration from an existing Wix site to a custom WordPress theme built from scratch using Elementor, preserving the original design style as requested by the client. The project included advanced CSS3 and JavaScript enhancements, a custom contact form, SEO optimization, and Google Maps integration for local discoverability.',
  fullDescriptionUa:
    'Для Manitoulin Timber Frames було виконано повну міграцію з існуючого сайту на Wix на індивідуальну тему WordPress, розроблену з нуля з використанням Elementor із збереженням оригінального стилю дизайну на вимогу клієнта. Проєкт увійшов розширені покращення на CSS3 та JavaScript, індивідуальну контактну форму, SEO-оптимізацію та інтеграцію з Google Maps API для підвищення локальної видимості.',
  fullDescriptionEs:
    'Manitoulin Timber Frames requirió una migración completa de un sitio existente en Wix a un tema de WordPress personalizado construido desde cero con Elementor, preservando el estilo de diseño original según lo solicitado por el cliente. El proyecto incluyó mejoras avanzadas en CSS3 y JavaScript, un formulario de contacto personalizado, optimización SEO e integración con Google Maps API para mejorar la visibilidad local.',
  fullDescriptionDe:
    'Für Manitoulin Timber Frames wurde eine vollständige Migration von einer bestehenden Wix-Website zu einem von Grund auf neu entwickelten WordPress-Theme mit Elementor durchgeführt, wobei der ursprüngliche Designstil auf Wunsch des Kunden beibehalten wurde. Das Projekt umfasste fortgeschrittene CSS3- und JavaScript-Erweiterungen, ein individuelles Kontaktformular, SEO-Optimierung sowie eine Google-Maps-Integration für bessere lokale Auffindbarkeit.',
  detailHeroLine: 'CUSTOM WORDPRESS · TIMBER FRAME BUILDER',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + Elementor', accent: 'darkGreen' },
    { value: 'CA Market', label: 'Target Region', accent: 'neutral' },
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
      'A fully custom WordPress theme was built from scratch to replicate and improve upon the client\'s previous Wix design. Elementor page builder handles service landing pages as required by the client for future self-editing, while custom CSS3 and JavaScript extend it with advanced animations and precise styling beyond default Elementor capabilities.',
    descriptionDe:
      'Ein vollständig maßgeschneidertes WordPress-Theme wurde von Grund auf neu entwickelt, um das bisherige Wix-Design des Kunden nachzubilden und technisch zu verbessern. Der Elementor Page Builder verwaltet die Service-Landingpages, damit der Kunde Inhalte künftig selbst bearbeiten kann, während individuelles CSS3 und JavaScript fortgeschrittene Animationen und präzises Styling über die Standardfunktionen von Elementor hinaus ermöglichen.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/manitoulintimberframes_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/manitoulintimberframes_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/manitoulintimberframes_thumb.webp',
      caption: 'Home page showcasing handcrafted timber frame structures and services hero',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/manitoulintimberframes/manitoulintimberframes_slide2.webp',
      caption: 'Services section with project portfolio and timber frame gallery',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/manitoulintimberframes/manitoulintimberframes_slide3.webp',
      caption: 'About page with company story and craftsmanship highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/manitoulintimberframes/manitoulintimberframes_slide4.webp',
      caption: 'Custom contact form with Google Maps showing Manitoulin Island location',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup structure for accessibility and SEO' },
      { short: 'CSS3', full: 'Custom CSS3 with advanced animations and responsive Grid layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive elements and custom animations beyond Elementor defaults' },
      { short: 'Elementor', full: 'Elementor page builder used for service landing pages at the client\'s request for self-editing capability' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ driving custom WordPress theme logic and form processing' },
      { short: 'MySQL', full: 'MySQL database for storing all site content and page configurations' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the platform foundation for content management' },
      { short: 'Custom WP Theme', full: 'WordPress theme built from scratch to replicate and enhance the original Wix design' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for global performance and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption across all pages for secure visitor connections' },
      { short: 'Nginx', full: 'Nginx web server with caching configured for optimal WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying the builder\'s Manitoulin Island location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 for tracking visitor sessions, lead sources, and engagement' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with local business meta tags and content structure' },
      { short: 'Schema.org Markup', full: 'Local business JSON-LD structured data for enhanced search result appearance' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green scores across LCP, FID, and CLS' },
      { short: 'WebP Images', full: 'WebP image format used for project portfolio photos to accelerate loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for lead capture and client inquiry tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A bespoke WordPress theme was built from scratch to replicate and refine the client\'s existing Wix design, giving full control over every design and functionality element.',
      descriptionDe:
        'Ein maßgeschneidertes WordPress-Theme wurde von Grund auf neu entwickelt, um das bestehende Wix-Design des Kunden nachzubilden und zu verfeinern - mit voller Kontrolle über jedes Design- und Funktionselement.',
    },
    {
      title: 'Elementor with Advanced CSS3 & JavaScript',
      titleDe: 'Elementor mit erweitertem CSS3 & JavaScript',
      description:
        'Elementor page builder was used for service landing pages per the client\'s request, and significantly enhanced with custom CSS3 and JavaScript to deliver animations and interactions beyond the builder\'s standard capabilities.',
      descriptionDe:
        'Auf Kundenwunsch wurde Elementor für die Service-Landingpages eingesetzt und durch individuelles CSS3 und JavaScript erheblich erweitert, um Animationen und Interaktionen jenseits der Standardfunktionen des Builders zu realisieren.',
    },
    {
      title: 'Custom Contact Form',
      titleDe: 'Individuelles Kontaktformular',
      description:
        'A styled, accessible contact form was developed to capture project enquiries, integrated with server-side PHP validation and email delivery.',
      descriptionDe:
        'Ein optisch angepasstes, barrierefreies Kontaktformular wurde zur Erfassung von Projektanfragen entwickelt und mit serverseitiger PHP-Validierung sowie E-Mail-Zustellung integriert.',
    },
    {
      title: 'Responsive Design',
      titleDe: 'Responsives Design',
      description:
        'The site is fully responsive across desktops, tablets, and smartphones, ensuring consistent presentation for potential clients browsing from any device.',
      descriptionDe:
        'Die Website ist auf Desktops, Tablets und Smartphones vollständig responsiv und gewährleistet eine konsistente Darstellung für potenzielle Kunden auf jedem Endgerät.',
    },
    {
      title: 'SEO & Local Search Optimization',
      titleDe: 'SEO & lokale Suchmaschinenoptimierung',
      description:
        'Local business SEO with Schema.org markup and Google Maps integration ensures strong visibility for searches in the Manitoulin Island and Ontario region.',
      descriptionDe:
        'Lokales Business-SEO mit Schema.org-Markup und Google-Maps-Integration sorgt für starke Sichtbarkeit bei Suchanfragen rund um Manitoulin Island und die Region Ontario.',
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
  liveUrl: 'https://manitoulintimberframes.ca/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default manitoulinTimberFrames
