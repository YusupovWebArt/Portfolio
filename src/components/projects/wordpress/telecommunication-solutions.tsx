import { Project } from '../project-types'

const telecommunicationSolutions: Project = {
  id: 10920,
  title: 'Telecommunication Solutions for Business',
  description: 'USA (+ localization Spain).',
  descriptionUa: 'США (+ локалізація для Іспанії).',
  descriptionEs: 'EE. UU. (+ localización para España).',
  descriptionDe: 'USA (+ Lokalisierung für Spanien).',
  fullDescription:
    'Telecommunication Solutions for Business is a bilingual landing page (US English and Spanish localization) built on a custom WordPress theme from scratch using the Bootstrap 5 CSS framework. The project targeted US businesses with virtual telecommunication services, featuring a modern responsive layout, SEO optimization, and a lead-generation contact form.',
  fullDescriptionUa:
    'Telecommunication Solutions for Business - це двомовна посадкова сторінка (англійська США та іспанська локалізація), побудована на унікальній темі WordPress з нуля з використанням CSS-фреймворку Bootstrap 5. Проєкт орієнтований на компанії в США, що потребують віртуальних телекомунікаційних послуг, та має сучасний адаптивний макет, SEO-оптимізацію та форму генерації лідів.',
  fullDescriptionEs:
    'Telecommunication Solutions for Business es una página de aterrizaje bilingüe (inglés de EE. UU. y localización en español) construida sobre un tema de WordPress personalizado desde cero con el framework CSS Bootstrap 5. El proyecto está orientado a empresas estadounidenses con necesidades de servicios de telecomunicación virtual, con un diseño responsivo moderno, optimización SEO y un formulario de captación de leads.',
  fullDescriptionDe:
    'Telecommunication Solutions for Business ist eine zweisprachige Landingpage (US-Englisch und spanische Lokalisierung), die von Grund auf mit einem individuellen WordPress-Theme und dem CSS-Framework Bootstrap 5 entwickelt wurde. Das Projekt richtet sich an US-Unternehmen mit Bedarf an virtuellen Telekommunikationsdiensten und bietet ein modernes responsives Layout, SEO-Optimierung sowie ein Kontaktformular zur Lead-Generierung.',
  detailHeroLine: 'CUSTOM WORDPRESS · TELECOM LANDING PAGE',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: 'Bootstrap 5', label: 'CSS Framework', accent: 'darkGreen' },
    { value: 'EN + ES', label: 'Localization', accent: 'neutral' },
    { value: 'US Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'Bootstrap 5 + CSS3/JS', highlight: true },
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
      'A custom WordPress theme built from scratch uses Bootstrap 5 as the layout foundation, ensuring consistent, modern responsive design patterns. Custom CSS3 and JavaScript extend Bootstrap for brand-specific styling. PHP handles form submissions and server-side logic, while Cloudflare CDN delivers the bilingual landing page to US and Spanish-speaking audiences.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена з нуля, використовує Bootstrap 5 як основу макета, забезпечуючи послідовні сучасні адаптивні патерни дизайну. Кастомні CSS3 та JavaScript розширюють Bootstrap для фірмової стилізації. PHP обробляє відправлення форм та серверну логіку, а Cloudflare CDN швидко доставляє двомовну посадкову сторінку американській та іспаномовній аудиторіям.',
    descriptionEs:
      'Un tema de WordPress personalizado creado desde cero utiliza Bootstrap 5 como base de diseño, asegurando patrones responsivos modernos y consistentes. El CSS3 y JavaScript personalizados amplían Bootstrap con estilos propios de la marca. PHP gestiona el envío de formularios y la lógica del servidor, mientras que Cloudflare CDN entrega la página bilingüe a audiencias de EE. UU. y de habla hispana.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme nutzt Bootstrap 5 als Layout-Fundament und gewährleistet konsistente, moderne und responsive Designmuster. Individuelles CSS3 und JavaScript erweitern Bootstrap um markenspezifisches Styling. PHP verarbeitet Formularübermittlungen und serverseitige Logik, während das Cloudflare CDN die zweisprachige Landingpage schnell an US-amerikanische und spanischsprachige Zielgruppen ausliefert.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/telecommunication-solutions_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/telecommunication-solutions_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/telecommunication-solutions_thumb.webp',
      caption: 'Home section with telecom services value proposition and primary CTA',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telecommunication-solutions/telecommunication-solutions_slide2.webp',
      caption: 'Services section detailing virtual telecommunication solutions for US businesses',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/telecommunication-solutions/telecommunication-solutions_slide3.webp',
      caption: 'Spanish localization section with lead generation contact form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible, bilingual landing page structure' },
      { short: 'CSS3', full: 'Custom CSS3 extending Bootstrap with brand-specific styling and responsive overrides' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive components and form validation' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 CSS framework for modern, consistent responsive layout structure' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic and lead capture form processing' },
      { short: 'MySQL', full: 'MySQL database storing page content and contact form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS for content management of the bilingual landing page' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch with Bootstrap integration' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN delivering the landing page fast to US and Spanish-speaking audiences' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all visitor connections and lead form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress landing page performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying business location for US service area clarity' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking lead form conversions and traffic across English and Spanish audiences' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Bilingual SEO with hreflang tags and targeted meta content for US and Spanish markets' },
      { short: 'Schema.org Markup', full: 'Service and Organization JSON-LD structured data for enhanced search appearance' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals for the landing page' },
      { short: 'WebP Images', full: 'WebP images for fast loading of all landing page visual assets' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for lead tracking and campaign performance measurement' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with Bootstrap 5',
      titleUa: 'Індивідуальна тема WordPress із Bootstrap 5',
      titleEs: 'Tema de WordPress personalizado con Bootstrap 5',
      titleDe: 'Individuelles WordPress-Theme mit Bootstrap 5',
      description:
        'A custom WordPress theme built from scratch using Bootstrap 5 as the layout framework ensures modern, consistent responsive design with faster development and reliable cross-browser compatibility.',
      descriptionUa:
        'Кастомна тема WordPress, створена з нуля з використанням Bootstrap 5 як фреймворку макета, забезпечує сучасний послідовний адаптивний дизайн, швидшу розробку та надійну кросбраузерну сумісність.',
      descriptionEs:
        'Un tema de WordPress personalizado construido desde cero con Bootstrap 5 como framework de diseño garantiza una estructura responsiva moderna y consistente con compatibilidad fiable entre navegadores.',
      descriptionDe:
        'Ein von Grund auf mit Bootstrap 5 als Layout-Framework entwickeltes WordPress-Theme sorgt für ein modernes, konsistentes responsives Design, effiziente Entwicklung und zuverlässige Cross-Browser-Kompatibilität.',
    },
    {
      title: 'Bilingual Localization (EN + ES)',
      titleUa: 'Двомовна локалізація (EN + ES)',
      titleEs: 'Localización bilingüe (EN + ES)',
      titleDe: 'Zweisprachige Lokalisierung (EN + ES)',
      description:
        'The landing page supports both English (US) and Spanish localization, allowing the business to reach both English-speaking and Spanish-speaking business audiences across the United States.',
      descriptionUa:
        'Посадкова сторінка підтримує англійську (США) та іспанську локалізації, що дозволяє компанії охоплювати як англомовну, так і іспаномовну бізнес-аудиторії у США.',
      descriptionEs:
        'La página de aterrizaje admite tanto inglés (EE. UU.) como localización en español, permitiendo a la empresa llegar a audiencias empresariales anglófonas e hispanohablantes en Estados Unidos.',
      descriptionDe:
        'Die Landingpage unterstützt sowohl US-Englisch als auch Spanisch und ermöglicht es dem Unternehmen, englisch- und spanischsprachige Geschäftskunden in den gesamten Vereinigten Staaten anzusprechen.',
    },
    {
      title: 'Lead Generation Contact Form',
      titleUa: 'Контактна форма для генерації лідів',
      titleEs: 'Formulario de contacto para captación de leads',
      titleDe: 'Kontaktformular zur Lead-Generierung',
      description:
        'A conversion-optimized contact form captures business inquiries directly, with PHP-backed server-side validation and email routing to the sales team.',
      descriptionUa:
        'Оптимізована для конверсії контактна форма збирає бізнес-запити напряму із серверною PHP-валідацією та маршрутизацією листів до відділу продажу.',
      descriptionEs:
        'Un formulario de contacto optimizado para la conversión capta consultas comerciales directamente, con validación PHP en el servidor y envío de correos al equipo de ventas.',
      descriptionDe:
        'Ein konversionsoptimiertes Kontaktformular erfasst Geschäftsanfragen direkt, inklusive serverseitiger PHP-Validierung und E-Mail-Weiterleitung an das Vertriebsteam.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The Bootstrap-based layout ensures the landing page is fully responsive across all screen sizes, from mobile devices to large desktop monitors.',
      descriptionUa:
        'Макет на базі Bootstrap гарантує повну адаптивність посадкової сторінки на екранах будь-якого розміру - від мобільних пристроїв до великих настільних моніторів.',
      descriptionEs:
        'El diseño basado en Bootstrap garantiza que la página de aterrizaje sea totalmente responsiva en todos los tamaños de pantalla, desde dispositivos móviles hasta grandes monitores de escritorio.',
      descriptionDe:
        'Das auf Bootstrap basierende Layout stellt sicher, dass die Landingpage auf allen Bildschirmgrößen - vom Smartphone bis zum großen Desktop-Monitor - vollständig responsiv dargestellt wird.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Bilingual SEO with hreflang tags, Schema.org Service markup, and optimized meta content improves search visibility for telecommunication solution queries in US markets.',
      descriptionUa:
        'Двомовне SEO з тегами hreflang, розміткою Schema.org Service та оптимізованими мета-даними покращує пошукову видимість за запитами телекомунікаційних рішень на ринку США.',
      descriptionEs:
        'El SEO bilingüe con etiquetas hreflang, marcado Schema.org Service y metadatos optimizados mejora la visibilidad en buscadores para consultas sobre soluciones de telecomunicaciones en EE. UU.',
      descriptionDe:
        'Zweisprachiges SEO mit hreflang-Tags, Schema.org-Service-Markup und optimierten Meta-Inhalten verbessert die Suchsichtbarkeit für Telekommunikationslösungen auf dem US-Markt.',
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
    'https://frontdeskhelpers.com/remote-virtual-services/innovative-telecommunication-solutions-for-business/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default telecommunicationSolutions
