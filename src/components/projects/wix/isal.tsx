import { Project } from '../project-types'

const isal: Project = {
  id: 7850,
  title: 'ISAL',
  description: 'Learn English in Boston - US language school website.',
  descriptionUa: 'Вивчення англійської в Бостоні - вебсайт мовної школи в США.',
  descriptionEs: 'Aprende inglés en Boston - sitio web de una escuela de idiomas en EE. UU.',
  descriptionDe: 'Englisch lernen in Boston - Website einer US-Sprachschule.',
  fullDescription:
    'ISAL (International School of Languages) is a Boston-based English language school. The site was built using Wix Velo with pixel-perfect design control, including a custom payments and fees functionality, ZOHO CRM integration for student lead management, and a blog section for language learning content.',
  fullDescriptionUa:
    'ISAL (International School of Languages) - це мовна школа англійської мови в Бостоні. Вебсайт створено за допомогою Wix Velo з піксельно точним контролем дизайну, включаючи кастомний функціонал оплати та розрахунку вартості навчання, інтеграцію із ZOHO CRM для управління лідами студентів і розділ блогу для матеріалів із вивчення мови.',
  fullDescriptionEs:
    'ISAL (International School of Languages) es una escuela de idiomas en inglés con sede en Boston. El sitio fue desarrollado con Wix Velo con un control de diseño perfecto al píxel, que incluye una funcionalidad personalizada de pagos y tarifas, integración con ZOHO CRM para la gestión de leads de estudiantes y una sección de blog con contenido para el aprendizaje de idiomas.',
  fullDescriptionDe:
    'ISAL (International School of Languages) ist eine Sprachschule für Englisch mit Sitz in Boston. Die Website wurde mit Wix Velo und pixelgenauer Designkontrolle erstellt, einschließlich einer maßgeschneiderten Gebühren- und Zahlungsfunktion, ZOHO-CRM-Integration für das Lead-Management von Studierenden sowie einem Blog-Bereich für Inhalte zum Sprachenlernen.',
  detailHeroLine: 'WIX · EDUCATION & LANGUAGE SCHOOL',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Wix Velo', label: 'Site Engine', accent: 'darkGreen' },
    { value: 'ZOHO CRM', label: 'CRM Integration', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'SITE ENGINE',
        steps: [
          { label: 'Wix Editor' },
          { label: 'Velo (Custom Code)', highlight: true },
          { label: 'App Market' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Wix Hosting' },
          { label: 'CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'ISAL is powered by Wix with Velo custom code enabling advanced functionality beyond standard Wix capabilities - including dynamic payments logic and ZOHO CRM integration for student lead capture. The Wix App Market extends functionality with contact forms and marketing tools. All content is served via Wix\'s managed hosting and CDN with SSL encryption.',
    descriptionUa:
      'ISAL працює на платформі Wix із кастомним кодом Velo, що забезпечує розширений функціонал за межами стандартних можливостей Wix - включаючи динамічну логіку розрахунку оплати та інтеграцію із ZOHO CRM для збору лідів студентів. Wix App Market додає контактні форми та маркетингові інструменти. Увесь контент доставляється через керований хостинг і CDN Wix із SSL-шифруванням.',
    descriptionEs:
      'ISAL funciona con Wix y código personalizado Velo que permite funcionalidades avanzadas más allá de las capacidades estándar de Wix, incluyendo lógica dinámica de pagos e integración con ZOHO CRM para la captación de estudiantes. El Wix App Market amplía la funcionalidad con formularios de contacto y herramientas de marketing. Todo el contenido se sirve mediante el alojamiento gestionado y CDN de Wix con cifrado SSL.',
    descriptionDe:
      'ISAL basiert auf Wix mit benutzerdefiniertem Velo-Code, der erweiterte Funktionen über den Standardumfang von Wix hinaus ermöglicht - darunter dynamische Zahlungslogik und ZOHO-CRM-Integration zur Erfassung von Studieninteressenten. Der Wix App Market erweitert die Plattform um Kontaktformulare und Marketing-Tools. Alle Inhalte werden über das verwaltete Hosting und CDN von Wix mit SSL-Verschlüsselung ausgeliefert.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wix/isal_thumb.webp',
  fullScreenshot: '/Portfolio/images/portfolio/thumbs/wix/isal_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wix/isal_thumb.webp',
      caption: 'ISAL homepage showcasing the Boston language school and course offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide2.webp',
      caption: 'English language courses page with programme descriptions and enrolment options',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide3.webp',
      caption: 'Fees and payments page with custom Velo-powered pricing logic',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide4.webp',
      caption: 'About the school section highlighting ISAL\'s Boston campus and history',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide5.webp',
      caption: 'Student life and campus gallery section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide6.webp',
      caption: 'Contact and inquiry form integrated with ZOHO CRM',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide7.webp',
      caption: 'Blog section with English learning tips and school news',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wix/isal/isal_slide8.webp',
      caption: 'Mobile-optimized view of the ISAL language school website',
    },
  ],
  technologies: {
    frontend: [
      { short: 'Wix Editor', full: 'Wix Editor used for pixel-perfect visual design and layout of the ISAL website' },
      { short: 'Wix Velo', full: 'Velo (Wix\'s development platform) used to build custom payments logic and dynamic functionality' },
      { short: 'CSS3', full: 'Custom CSS3 for fine-tuned visual styling beyond the default Wix theme options' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript within Velo for custom business logic and interactive components' },
    ],
    contentManagement: [
      { short: 'Wix CMS', full: 'Wix CMS for managing course content, blog posts, and dynamic page data' },
      { short: 'Wix App Market', full: 'Wix App Market apps integrated for contact forms, live chat, and marketing tools' },
      { short: 'Blog Module', full: 'Wix Blog module set up for publishing English learning articles and school news' },
    ],
    devopsSecurity: [
      { short: 'Wix Hosting', full: 'Wix-managed hosting providing reliable uptime for the ISAL school website' },
      { short: 'SSL/TLS', full: 'SSL/TLS encryption securing all site pages and student inquiry forms' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'Google Analytics integrated to track visitor sessions, traffic sources, and enrolment inquiries' },
      { short: 'Wix Analytics', full: 'Wix built-in analytics for monitoring page performance and user behaviour' },
    ],
    seo: [
      { short: 'Wix SEO Tools', full: 'Wix SEO tools configured for course pages targeting Boston English school keywords' },
      { short: 'Meta Tags Optimization', full: 'Custom meta titles and descriptions on all key pages for improved search visibility' },
    ],
    digitalMarketing: [
      { short: 'ZOHO CRM', full: 'ZOHO CRM integrated via Velo to capture and manage student enrolment leads' },
      { short: 'Marketing Tools', full: 'Wix Marketing tools used for email campaigns and lead nurturing for prospective students' },
    ],
  },
  features: [
    {
      title: 'Custom Velo Payments Logic',
      titleUa: 'Кастомна логіка оплати на Velo',
      titleEs: 'Lógica de pagos personalizada en Velo',
      titleDe: 'Individuelle Velo-Zahlungslogik',
      description: 'Wix Velo was used to build a custom fees and payments functionality, allowing prospective students to view course-specific pricing structures dynamically on the site.',
      descriptionUa: 'Wix Velo було використано для створення кастомного функціоналу розрахунку вартості та оплати, що дозволяє майбутнім студентам динамічно переглядати ціни на конкретні курси.',
      descriptionEs: 'Se utilizó Wix Velo para desarrollar una funcionalidad personalizada de tarifas y pagos, permitiendo a los futuros estudiantes consultar dinámicamente las estructuras de precios por curso.',
      descriptionDe: 'Mit Wix Velo wurde eine maßgeschneiderte Gebühren- und Zahlungsfunktion entwickelt, mit der Studieninteressierte kursspezifische Preisstrukturen dynamisch auf der Website einsehen können.',
    },
    {
      title: 'ZOHO CRM Integration',
      titleUa: 'Інтеграція із ZOHO CRM',
      titleEs: 'Integración con ZOHO CRM',
      titleDe: 'ZOHO-CRM-Integration',
      description: 'Student inquiry forms were connected to ZOHO CRM via Velo custom code, enabling the ISAL team to automatically capture and manage leads from the website without manual data entry.',
      descriptionUa: 'Форми запитів студентів були підключені до ZOHO CRM через кастомний код Velo, що дозволяє команді ISAL автоматично збирати й обробляти ліди із сайту без ручного введення даних.',
      descriptionEs: 'Los formularios de consulta de estudiantes se conectaron a ZOHO CRM mediante código personalizado de Velo, permitiendo al equipo de ISAL captar y gestionar leads automáticamente.',
      descriptionDe: 'Anfrageformulare für Studierende wurden über benutzerdefinierten Velo-Code mit ZOHO CRM verbunden, sodass das ISAL-Team Leads von der Website automatisch und ohne manuelle Dateneingabe erfassen und verwalten kann.',
    },
    {
      title: 'Course & Programme Pages',
      titleUa: 'Сторінки курсів та програм',
      titleEs: 'Páginas de cursos y programas',
      titleDe: 'Kurs- und Programmseiten',
      description: 'Detailed programme pages were built for each English language course, covering entry requirements, class formats, duration, and enrolment steps to guide prospective students.',
      descriptionUa: 'Для кожного курсу англійської мови створено детальні сторінки програм із вимогами до вступу, форматами занять, тривалістю та кроками реєстрації для зручності абітурієнтів.',
      descriptionEs: 'Se crearon páginas detalladas para cada curso de inglés, cubriendo requisitos de admisión, formatos de clase, duración y pasos de inscripción para guiar a los futuros estudiantes.',
      descriptionDe: 'Für jeden Englischkurs wurden detaillierte Programmseiten mit Teilnahmevoraussetzungen, Unterrichtsformaten, Dauer und Anmeldeschritten erstellt, um Studieninteressierte optimal zu informieren.',
    },
    {
      title: 'Blog for Language Learning Content',
      titleUa: 'Блог із матеріалами для вивчення мови',
      titleEs: 'Blog de contenidos para aprender idiomas',
      titleDe: 'Blog für Sprachlerninhalte',
      description: 'A Wix Blog was set up and populated with English learning tips, school news, and student stories to support SEO and keep prospective students engaged with the school\'s brand.',
      descriptionUa: 'Налаштовано та наповнено блог Wix порадами з вивчення англійської мови, новинами школи та історіями студентів для підтримки SEO й залучення аудиторії.',
      descriptionEs: 'Se configuró un blog de Wix con consejos para aprender inglés, noticias de la escuela e historias de estudiantes para apoyar el SEO y mantener el interés en la marca.',
      descriptionDe: 'Ein Wix-Blog wurde eingerichtet und mit Tipps zum Englischlernen, Schulnachrichten und Erfahrungsberichten von Studierenden gefüllt, um die SEO zu unterstützen und Interessenten an die Marke zu binden.',
    },
    {
      title: 'SEO & Local Visibility',
      titleUa: 'SEO та локальна видимість',
      titleEs: 'SEO y visibilidad local',
      titleDe: 'SEO und lokale Sichtbarkeit',
      description: 'On-page SEO was configured across all course and location pages to improve ISAL\'s visibility in Boston-area English language school searches and international student queries.',
      descriptionUa: 'На всіх сторінках курсів і локацій налаштовано on-page SEO для покращення видимості ISAL у пошукових запитах мовних шкіл Бостона та серед іноземних студентів.',
      descriptionEs: 'Se configuró el SEO on-page en todas las páginas de cursos y ubicación para mejorar la visibilidad de ISAL en las búsquedas de escuelas de inglés en Boston y consultas internacionales.',
      descriptionDe: 'Auf allen Kurs- und Standortseiten wurde On-Page-SEO konfiguriert, um die Sichtbarkeit von ISAL bei Suchanfragen nach Englisch-Sprachschulen im Raum Boston sowie bei internationalen Studierenden zu steigern.',
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
  liveUrl: 'https://www.isalusa.com/',
  githubUrl: '#',
  category: ['wix'],
}

export default isal
