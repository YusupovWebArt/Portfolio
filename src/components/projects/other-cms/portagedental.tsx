import { Project } from '../project-types'

const portageDental: Project = {
  id: 8750,
  title: 'Portage',
  description: 'US-based Dental Clinic',
  descriptionUa: 'Стоматологічна клініка в США',
  descriptionEs: 'Clínica dental en Estados Unidos',
  descriptionDe: 'Zahnklinik in den USA',
  fullDescription:
    'A professional website for a US-based dental clinic, built on Joomla CMS with a fully custom template. The project delivered a clean, patient-friendly digital presence with service pages, doctor information, appointment contact points, Google Maps integration, and on-page SEO optimization.',
  fullDescriptionUa:
    'Професійний вебсайт для стоматологічної клініки в США, створений на Joomla CMS з унікальним кастомним шаблоном. Проєкт забезпечив чисту, зручну для пацієнтів онлайн-присутність із сторінками послуг, інформацією про лікарів, формою запису на прийом, інтеграцією Google Maps та внутрішньою SEO-оптимізацією.',
  fullDescriptionEs:
    'Un sitio web profesional para una clínica dental estadounidense, construido en Joomla CMS con una plantilla completamente personalizada. El proyecto proporcionó una presencia digital limpia y amigable para el paciente, con páginas de servicios, información sobre los doctores, puntos de contacto para citas, integración de Google Maps y optimización SEO on-page.',
  fullDescriptionDe:
    'Eine professionelle Website für eine US-amerikanische Zahnklinik, entwickelt auf Joomla CMS mit einem vollständig maßgeschneiderten Template. Das Projekt schuf eine übersichtliche, patientenfreundliche Online-Präsenz mit Leistungsseiten, Ärzteinformationen, Kontaktmöglichkeiten zur Terminvereinbarung, Google-Maps-Integration und On-Page-SEO-Optimierung.',
  detailHeroLine: 'JOOMLA · CUSTOM TEMPLATE · DENTAL CLINIC',
  detailMetrics: [
    { value: 'Joomla', label: 'CMS Platform', accent: 'green' },
    { value: 'Custom Theme', label: 'Template Dev', accent: 'green' },
    { value: 'Google Maps', label: 'Location', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Optimized', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'Joomla Core' },
          { label: 'Custom Template', highlight: true },
          { label: 'Modules & Extensions' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'PHP Engine', highlight: true },
          { label: 'Web Server' },
        ],
      },
    ],
    description:
      'The dental clinic site runs on Joomla CMS with a custom PHP template built from scratch. Joomla modules handle contact forms, navigation, and the Google Maps location widget. MySQL stores all content, served through PHP on a cPanel hosting environment with SSL.',
    descriptionUa:
      'Сайт стоматологічної клініки працює на Joomla CMS із кастомним PHP-шаблоном, розробленим з нуля. Модулі Joomla відповідають за контактні форми, навігацію та віджет розташування Google Maps. MySQL зберігає весь контент, що обслуговується через PHP на хостингу cPanel із SSL.',
    descriptionEs:
      'El sitio de la clínica dental funciona sobre Joomla CMS con una plantilla PHP personalizada creada desde cero. Los módulos de Joomla gestionan los formularios de contacto, la navegación y el widget de ubicación de Google Maps. MySQL almacena todo el contenido, servido mediante PHP en un alojamiento cPanel con SSL.',
    descriptionDe:
      'Die Website der Zahnklinik läuft auf Joomla CMS mit einem von Grund auf neu entwickelten PHP-Template. Joomla-Module steuern Kontaktformulare, Navigation und das Google-Maps-Standort-Widget. MySQL speichert sämtliche Inhalte, ausgeliefert über PHP in einer cPanel-Hosting-Umgebung mit SSL.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/other-cms/portagedental_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/other-cms/portagedental_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/other-cms/portagedental_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/other-cms/portagedental/portagedental_slide2.webp',
      caption: 'Dental services page listing available treatments and procedures',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring service pages, doctor profiles, and contact sections' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a professional, trustworthy medical aesthetic with responsive layouts' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript powering navigation behaviour and interactive UI components' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP driving Joomla CMS server-side rendering and page generation' },
      { short: 'MySQL', full: 'MySQL database storing all site content, service descriptions, and contact data' },
    ],
    contentManagement: [
      { short: 'Joomla CMS', full: 'Joomla CMS managing all site content, menus, and extension configuration' },
      { short: 'Custom Template Development', full: 'Fully custom Joomla PHP template built to reflect the dental clinic brand' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel web hosting environment managing the Joomla application and database' },
      { short: 'SSL/TLS', full: 'HTTPS encryption building patient trust and securing form submissions' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking patient-journey metrics and appointment inquiry conversions' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Clean URLs, meta tags, and semantic structure configured for local search visibility' },
      { short: 'Google Maps API', full: 'Google Maps embedded for clinic location display and patient navigation' },
    ],
  },
  features: [
    {
      title: 'Custom Joomla Template',
      titleUa: 'Кастомний шаблон Joomla',
      titleEs: 'Plantilla personalizada en Joomla',
      titleDe: 'Maßgeschneidertes Joomla-Template',
      description:
        'A fully custom PHP template was designed and developed to give the dental clinic a professional, brand-consistent web presence with complete layout control.',
      descriptionUa:
        'Повністю кастомний PHP-шаблон був спроєктований та розроблений для створення професійного, узгодженого з брендом вебпредставництва клініки з повним контролем над версткою.',
      descriptionEs:
        'Se diseñó y desarrolló una plantilla PHP totalmente personalizada para dotar a la clínica dental de una presencia web profesional, coherente con su marca y con control total del diseño.',
      descriptionDe:
        'Ein vollständig individuell entwickeltes PHP-Template verleiht der Zahnklinik einen professionellen, markenkonsistenten Webauftritt mit voller Layout-Kontrolle.',
    },
    {
      title: 'Service Pages',
      titleUa: 'Сторінки стоматологічних послуг',
      titleEs: 'Páginas de servicios dentales',
      titleDe: 'Leistungsseiten für Zahnbehandlungen',
      description:
        'Dedicated pages for each dental service provide patients with clear treatment information, helping them make informed decisions before booking.',
      descriptionUa:
        'Окремі сторінки для кожної стоматологічної послуги надають пацієнтам чітку інформацію про лікування та допомагають прийняти зважене рішення перед записом.',
      descriptionEs:
        'Páginas dedicadas a cada servicio dental que ofrecen a los pacientes información clara sobre los tratamientos, ayudándoles a tomar decisiones informadas antes de reservar.',
      descriptionDe:
        'Eigene Unterseiten für jede zahnmedizinische Leistung bieten Patienten verständliche Behandlungsinformationen und unterstützen sie bei einer fundierten Entscheidung vor der Terminbuchung.',
    },
    {
      title: 'Google Maps Integration',
      titleUa: 'Інтеграція Google Maps',
      titleEs: 'Integración de Google Maps',
      titleDe: 'Google-Maps-Integration',
      description:
        'An interactive Google Maps widget displays the clinic\'s location, making it easy for patients to find directions directly from the website.',
      descriptionUa:
        'Інтерактивний віджет Google Maps відображає розташування клініки, дозволяючи пацієнтам легко прокласти маршрут прямо з вебсайту.',
      descriptionEs:
        'Un widget interactivo de Google Maps muestra la ubicación de la clínica, facilitando a los pacientes cómo llegar directamente desde el sitio web.',
      descriptionDe:
        'Ein interaktives Google-Maps-Widget zeigt den Standort der Klinik an und erleichtert Patienten die direkte Routenplanung über die Website.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Joomla SEO settings were configured with clean URLs, optimized meta tags, and semantic HTML to improve local search engine visibility for the dental practice.',
      descriptionUa:
        'Налаштовано параметри SEO в Joomla з чистими URL-адресами, оптимізованими метатегами та семантичним HTML для покращення локальної видимості клініки в пошукових системах.',
      descriptionEs:
        'Se configuraron los ajustes SEO de Joomla con URLs limpias, metaetiquetas optimizadas y HTML semántico para mejorar la visibilidad local de la clínica dental en buscadores.',
      descriptionDe:
        'Die Joomla-SEO-Einstellungen wurden mit sprechenden URLs, optimierten Meta-Tags und semantischem HTML konfiguriert, um die lokale Sichtbarkeit der Zahnarztpraxis in Suchmaschinen zu stärken.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The custom template adapts to all device sizes, ensuring patients browsing on mobile phones receive the same professional experience as desktop visitors.',
      descriptionUa:
        'Кастомний шаблон адаптується до всіх розмірів екранів, гарантуючи пацієнтам на смартфонах такий самий професійний досвід, як і на десктопах.',
      descriptionEs:
        'La plantilla personalizada se adapta a todos los tamaños de pantalla, garantizando que los pacientes que navegan desde el móvil reciban la misma experiencia profesional que en escritorio.',
      descriptionDe:
        'Das individuelle Template passt sich allen Bildschirmgrößen an und stellt sicher, dass Patienten auf dem Smartphone dasselbe professionelle Nutzererlebnis erhalten wie am Desktop.',
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
  liveUrl: '#',
  githubUrl: '#',
  category: ['other-cms'],
}

export default portageDental
