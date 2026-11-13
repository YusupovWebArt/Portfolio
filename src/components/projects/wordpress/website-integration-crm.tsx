import { Project } from '../project-types'

const websiteIntegrationCrm: Project = {
  id: 10840,
  title: 'Website integration with CRM',
  description: 'USA (+ localization Spain)',
  descriptionUa: 'США (+ локалізація для Іспанії)',
  descriptionEs: 'EE.UU. (+ localización para España)',
  descriptionDe: 'USA (+ Lokalisierung für Spanien)',
  fullDescription:
    'Website Integration with CRM is a bilingual landing page (US English and Spanish localization) built on a custom WordPress theme from scratch using Bootstrap 5. The page demonstrates CRM integration capabilities for US businesses, featuring a modern responsive layout, lead capture form, SEO optimization, and clear service value propositions targeting both English and Spanish-speaking business audiences.',
  fullDescriptionUa:
    'Website Integration with CRM - це двомовна посадкова сторінка (англійська США та іспанська локалізація), побудована на унікальній темі WordPress з нуля з використанням Bootstrap 5. Сторінка демонструє можливості інтеграції сайтів із CRM для американського бізнесу, маючи сучасний адаптивний макет, форму збору лідів, SEO-оптимізацію та чіткі ціннісні пропозиції послуг для англомовної та іспаномовної аудиторій.',
  fullDescriptionEs:
    'Website Integration with CRM es una página de aterrizaje bilingüe (inglés de EE.UU. y localización en español) construida sobre un tema WordPress personalizado desde cero con Bootstrap 5. La página muestra las capacidades de integración de sitios web con CRM para empresas estadounidenses, con un diseño moderno y adaptable, formulario de captación de leads, optimización SEO y propuestas de valor claras dirigidas tanto a audiencias empresariales anglófonas como hispanohablantes.',
  fullDescriptionDe:
    'Website Integration with CRM ist eine zweisprachige Landingpage (US-Englisch und spanische Lokalisierung), die von Grund auf mit einem individuellen WordPress-Theme und Bootstrap 5 entwickelt wurde. Die Seite präsentiert Möglichkeiten zur CRM-Website-Integration für US-Unternehmen und bietet ein modernes responsives Layout, ein Formular zur Lead-Erfassung, SEO-Optimierung sowie klare Nutzenversprechen für englisch- und spanischsprachige Geschäftskunden.',
  detailHeroLine: 'CUSTOM WORDPRESS · CRM INTEGRATION LANDING',
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
      'A custom WordPress theme built from scratch uses Bootstrap 5 as the responsive layout framework, ensuring consistent, modern design patterns with custom CSS3 overrides for brand-specific styling. PHP handles contact and lead form processing, while Cloudflare CDN delivers the bilingual page fast to US and Spanish-speaking business audiences.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена з нуля, використовує Bootstrap 5 як фреймворк адаптивного макета, забезпечуючи послідовні сучасні патерни дизайну з кастомними перевизначеннями CSS3 для фірмової стилізації. PHP відповідає за обробку контактних і лід-форм, а Cloudflare CDN швидко доставляє двомовну сторінку американській та іспаномовній бізнес-аудиторіям.',
    descriptionEs:
      'Un tema de WordPress personalizado construido desde cero utiliza Bootstrap 5 como framework de diseño responsivo, asegurando patrones modernos y consistentes con ajustes CSS3 personalizados para el estilo de la marca. PHP gestiona el procesamiento de formularios de contacto y leads, mientras que Cloudflare CDN entrega la página bilingüe con rapidez a audiencias empresariales en EE. UU. y de habla hispana.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme nutzt Bootstrap 5 als responsives Layout-Framework und gewährleistet konsistente, moderne Designmuster mit individuellen CSS3-Anpassungen für das Marken-Styling. PHP übernimmt die Verarbeitung der Kontakt- und Lead-Formulare, während das Cloudflare CDN die zweisprachige Seite schnell an US-amerikanische und spanischsprachige Geschäftskunden ausliefert.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/website-integration-crm_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/website-integration-crm_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/website-integration-crm_thumb.webp',
      caption: 'Home section presenting CRM integration services with primary lead capture CTA',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/website-integration-crm/website-integration-crm_slide2.webp',
      caption: 'CRM integration services and feature highlights for US business customers',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/website-integration-crm/website-integration-crm_slide3.webp',
      caption: 'Spanish localization section and business inquiry contact form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible, bilingual CRM landing page structure' },
      { short: 'CSS3', full: 'Custom CSS3 extending Bootstrap with brand-specific styling and layout overrides' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive components, animations, and form validation' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 CSS framework providing the responsive grid and component foundation' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme logic and lead capture form submission handling' },
      { short: 'MySQL', full: 'MySQL database for page content and lead form submission storage' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing the bilingual landing page content and structure' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch with Bootstrap 5 integration for the CRM service page' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN delivering the page fast to US and Spanish business audiences' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all visitor connections and lead form submissions' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress landing page delivery' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API providing location context for the US-based service provider' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking lead form conversions and audience behaviour across both language versions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Bilingual SEO with hreflang tags and targeted meta content for US and Spanish markets' },
      { short: 'Schema.org Markup', full: 'Service and Organization JSON-LD structured data for enhanced search appearance' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization ensuring green Core Web Vitals for the landing page' },
      { short: 'WebP Images', full: 'WebP images for fast loading of all landing page visual and illustration assets' },
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
        'A custom WordPress theme built from scratch using Bootstrap 5 ensures a modern, consistent responsive layout with reliable cross-browser compatibility and fast development.',
      descriptionUa:
        'Кастомна тема WordPress, створена з нуля з використанням Bootstrap 5, забезпечує сучасний послідовний адаптивний макет із надійною кросбраузерною сумісністю та швидкою розробкою.',
      descriptionEs:
        'Un tema de WordPress personalizado construido desde cero con Bootstrap 5 garantiza un diseño responsivo moderno y consistente con compatibilidad fiable entre navegadores.',
      descriptionDe:
        'Ein von Grund auf mit Bootstrap 5 entwickeltes WordPress-Theme gewährleistet ein modernes, konsistentes responsives Layout bei zuverlässiger Cross-Browser-Kompatibilität.',
    },
    {
      title: 'Bilingual Localization (EN + ES)',
      titleUa: 'Двомовна локалізація (EN + ES)',
      titleEs: 'Localización bilingüe (EN + ES)',
      titleDe: 'Zweisprachige Lokalisierung (EN + ES)',
      description:
        'The landing page supports English (US) and Spanish localization, enabling the service to engage both English and Spanish-speaking business audiences across the United States.',
      descriptionUa:
        'Посадкова сторінка підтримує англійську (США) та іспанську локалізації, що дозволяє сервісу залучати як англомовну, так і іспаномовну бізнес-аудиторії у США.',
      descriptionEs:
        'La página de aterrizaje admite localización en inglés (EE. UU.) y español, permitiendo al servicio conectar con audiencias empresariales anglófonas e hispanohablantes en Estados Unidos.',
      descriptionDe:
        'Die Landingpage unterstützt US-Englisch und Spanisch und ermöglicht es, sowohl englisch- als auch spanischsprachige Geschäftskunden in den Vereinigten Staaten zu erreichen.',
    },
    {
      title: 'Lead Generation Contact Form',
      titleUa: 'Контактна форма для генерації лідів',
      titleEs: 'Formulario de contacto para captación de leads',
      titleDe: 'Kontaktformular zur Lead-Generierung',
      description:
        'A conversion-focused contact form captures business CRM integration inquiries directly, with PHP-backed validation and email routing for efficient lead management.',
      descriptionUa:
        'Орієнтована на конверсію контактна форма збирає бізнес-запити щодо інтеграції CRM напряму із серверною PHP-валідацією та маршрутизацією електронної пошти для ефективного управління лідами.',
      descriptionEs:
        'Un formulario de contacto enfocado en la conversión capta consultas empresariales sobre integración de CRM directamente, con validación PHP y enrutamiento de correo para una gestión eficaz de leads.',
      descriptionDe:
        'Ein konversionsorientiertes Kontaktformular erfasst Anfragen zur CRM-Integration direkt, inklusive PHP-gestützter Validierung und E-Mail-Weiterleitung für ein effizientes Lead-Management.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'Bootstrap 5 ensures the page is fully responsive across mobile, tablet, and desktop screens, giving potential clients a seamless browsing experience on any device.',
      descriptionUa:
        'Bootstrap 5 гарантує повну адаптивність сторінки на екранах смартфонів, планшетів і комп\'ютерів, надаючи потенційним клієнтам бездоганний досвід перегляду на будь-якому пристрої.',
      descriptionEs:
        'Bootstrap 5 garantiza que la página sea totalmente responsiva en pantallas móviles, tabletas y ordenadores de escritorio, ofreciendo a los clientes potenciales una experiencia fluida en cualquier dispositivo.',
      descriptionDe:
        'Bootstrap 5 sorgt dafür, dass die Seite auf Smartphones, Tablets und Desktop-Bildschirmen vollständig responsiv ist und potenziellen Kunden auf jedem Gerät ein nahtloses Erlebnis bietet.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Bilingual SEO with hreflang attributes, Schema.org Service markup, and targeted meta content improves search visibility for CRM integration service queries in US markets.',
      descriptionUa:
        'Двомовне SEO з атрибутами hreflang, розміткою Schema.org Service та цільовими мета-даними покращує видимість у пошуку за запитами послуг інтеграції CRM на ринку США.',
      descriptionEs:
        'El SEO bilingüe con atributos hreflang, marcado Schema.org Service y metadatos específicos mejora la visibilidad en buscadores para consultas sobre integración de CRM en el mercado estadounidense.',
      descriptionDe:
        'Zweisprachiges SEO mit hreflang-Attributen, Schema.org-Service-Markup und zielgerichteten Meta-Inhalten verbessert die Suchsichtbarkeit für CRM-Integrationsdienste auf dem US-Markt.',
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
    'https://frontdeskhelpers.com/remote-virtual-services/website-integration-with-crm/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default websiteIntegrationCrm
