import { Project } from '../project-types'

const mohaveCosmeticSurgery: Project = {
  id: 5850,
  title: 'Mohave Cosmetic Surgery',
  description:
    'Las Vegas-based practice led by board-certified plastic surgeon Dr. Bryson Richards.',
  descriptionUa:
    'Клініка в Лас-Вегасі під керівництвом сертифікованого пластичного хірурга доктора Брайсона Річардса.',
  descriptionEs:
    'Clínica en Las Vegas dirigida por el cirujano plástico certificado Dr. Bryson Richards.',
  descriptionDe:
    'Praxis in Las Vegas unter der Leitung des zertifizierten plastischen Chirurgen Dr. Bryson Richards.',
  fullDescription:
    'A professional website for Mohave Cosmetic Surgery, a Las Vegas-based plastic surgery practice led by board-certified surgeon Dr. Bryson Richards. Built with semantic HTML5, CSS3, and vanilla JavaScript, the site presents surgical procedures, patient information, and contact details in a clean, trustworthy design optimized for medical lead generation.',
  fullDescriptionUa:
    'Професійний вебсайт для Mohave Cosmetic Surgery, клініки пластичної хірургії в Лас-Вегасі під керівництвом сертифікованого хірурга доктора Брайсона Річардса. Створений за допомогою семантичного HTML5, CSS3 та чистого JavaScript, сайт представляє хірургічні процедури, інформацію для пацієнтів та контактні дані у чистому, надійному дизайні, оптимізованому для залучення медичних лідів.',
  fullDescriptionEs:
    'Sitio web profesional para Mohave Cosmetic Surgery, una clínica de cirugía plástica en Las Vegas dirigida por el cirujano certificado Dr. Bryson Richards. Desarrollado con HTML5 semántico, CSS3 y JavaScript puro, el sitio presenta los procedimientos quirúrgicos, información para pacientes y datos de contacto en un diseño limpio y de confianza optimizado para la captación de leads médicos.',
  fullDescriptionDe:
    'Eine professionelle Website für Mohave Cosmetic Surgery, eine Praxis für plastische Chirurgie in Las Vegas unter der Leitung des zertifizierten Chirurgen Dr. Bryson Richards. Entwickelt mit semantischem HTML5, CSS3 und reinem JavaScript präsentiert die Seite chirurgische Eingriffe, Patienteninformationen und Kontaktdaten in einem klaren, vertrauenswürdigen Design, das für die medizinische Lead-Generierung optimiert ist.',
  detailHeroLine: 'STATIC HTML · MEDICAL PRACTICE · LAS VEGAS',
  detailMetrics: [
    { value: 'HTML5', label: 'Semantic Markup', accent: 'green' },
    { value: 'CSS3', label: 'Responsive Styles', accent: 'green' },
    { value: 'Vanilla JS', label: 'Interactivity', accent: 'darkGreen' },
    { value: 'Medical CRO', label: 'Lead-focused', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'BUILD',
        steps: [
          { label: 'HTML5' },
          { label: 'CSS3', highlight: true },
          { label: 'JavaScript' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'cPanel Hosting' },
          { label: 'CDN', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'A hand-coded static site with no CMS dependencies - HTML5 defines accessible content structure, CSS3 delivers a professional medical aesthetic with responsive layouts, and JavaScript handles contact form interactions and navigation. Hosted on a cPanel web server with SSL.',
    descriptionUa:
      'Рукописний статичний сайт без залежностей від CMS - HTML5 визначає доступну структуру контенту, CSS3 забезпечує професійну медичну естетику з адаптивними макетами, а JavaScript керує взаємодією контактних форм та навігацією. Розміщений на вебсервері cPanel із SSL.',
    descriptionEs:
      'Un sitio estático codificado a mano sin dependencias de CMS: HTML5 define una estructura de contenido accesible, CSS3 ofrece una estética médica profesional con diseños responsivos y JavaScript gestiona las interacciones del formulario de contacto y la navegación. Alojado en un servidor web cPanel con SSL.',
    descriptionDe:
      'Eine handcodierte statische Website ohne CMS-Abhängigkeiten - HTML5 definiert eine barrierefreie Inhaltsstruktur, CSS3 sorgt für eine professionelle medizinische Ästhetik mit responsiven Layouts und JavaScript steuert Kontaktformular-Interaktionen sowie die Navigation. Gehostet auf einem cPanel-Webserver mit SSL.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/mohavecosmeticsurgery/mohavecosmeticsurgery_slide2.webp',
      caption: 'Surgical procedures listing page with service descriptions',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring procedure pages, doctor profiles, and contact sections' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a professional, trust-inspiring medical site aesthetic' },
      { short: 'JavaScript (ES6+)', full: 'Vanilla JavaScript managing navigation, contact interactions, and smooth scrolling' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed web hosting serving the static site files reliably' },
      { short: 'SSL/TLS', full: 'HTTPS encryption building patient trust and meeting security requirements' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries ensuring the site is fully usable on mobile and desktop' },
      { short: 'Cross-browser Compatibility', full: 'Consistent layout tested across Chrome, Firefox, Safari, and Edge' },
    ],
  },
  features: [
    {
      title: 'Procedure Pages',
      titleUa: 'Сторінки процедур',
      titleEs: 'Páginas de procedimientos',
      titleDe: 'Behandlungsseiten',
      description:
        'Dedicated pages for each surgical procedure with detailed descriptions, helping prospective patients understand their options before booking a consultation.',
      descriptionUa:
        'Окремі сторінки для кожної хірургічної процедури з детальними описами, які допомагають потенційним пацієнтам зрозуміти доступні варіанти перед записом на консультацію.',
      descriptionEs:
        'Páginas dedicadas para cada procedimiento quirúrgico con descripciones detalladas que ayudan a los futuros pacientes a comprender sus opciones antes de reservar una consulta.',
      descriptionDe:
        'Eigene Seiten für jeden chirurgischen Eingriff mit detaillierten Beschreibungen, die potenziellen Patienten helfen, ihre Optionen vor der Buchung eines Beratungstermins zu verstehen.',
    },
    {
      title: 'Doctor Profile & Credentials',
      titleUa: 'Профіль та кваліфікація лікаря',
      titleEs: 'Perfil y credenciales del médico',
      titleDe: 'Arztprofil und Qualifikationen',
      description:
        'A prominent section showcasing Dr. Bryson Richards\'s board certifications, qualifications, and professional background to build patient trust.',
      descriptionUa:
        'Виділений розділ, що демонструє сертифікації, кваліфікацію та професійний досвід доктора Брайсона Річардса для формування довіри пацієнтів.',
      descriptionEs:
        'Una sección destacada que muestra las certificaciones, cualificaciones y trayectoria profesional del Dr. Bryson Richards para generar confianza en los pacientes.',
      descriptionDe:
        'Ein prominenter Bereich, der die Facharztzertifizierungen, Qualifikationen und den beruflichen Werdegang von Dr. Bryson Richards präsentiert, um Patientenvertrauen aufzubauen.',
    },
    {
      title: 'Lead-Optimized Contact Section',
      titleUa: 'Оптимізована для лідів контактна секція',
      titleEs: 'Sección de contacto optimizada para leads',
      titleDe: 'Lead-optimierter Kontaktbereich',
      description:
        'Clear call-to-action buttons and a contact form guide visitors toward booking consultations, supporting the practice\'s patient acquisition goals.',
      descriptionUa:
        'Чіткі кнопки заклику до дії та контактна форма спрямовують відвідувачів до запису на консультацію, підтримуючи цілі клініки щодо залучення пацієнтів.',
      descriptionEs:
        'Botones claros de llamada a la acción y un formulario de contacto guían a los visitantes hacia la reserva de consultas, apoyando los objetivos de captación de pacientes.',
      descriptionDe:
        'Klare Call-to-Action-Buttons und ein Kontaktformular führen Besucher gezielt zur Buchung von Beratungsterminen und unterstützen die Patientengewinnung der Praxis.',
    },
    {
      title: 'Responsive Medical Design',
      titleUa: 'Адаптивний медичний дизайн',
      titleEs: 'Diseño médico responsivo',
      titleDe: 'Responsives medizinisches Design',
      description:
        'A clean, professional visual design with a restrained colour palette and readable typography ensures the site conveys trust across all devices.',
      descriptionUa:
        'Чистий, професійний візуальний дизайн зі стриманою кольоровою палітрою та зручною типографікою забезпечує відчуття надійності на всіх пристроях.',
      descriptionEs:
        'Un diseño visual limpio y profesional con una paleta de colores sobria y tipografía legible garantiza que el sitio transmita confianza en todos los dispositivos.',
      descriptionDe:
        'Ein klares, professionelles visuelles Design mit zurückhaltender Farbpalette und gut lesbarer Typografie sorgt dafür, dass die Website auf allen Geräten Vertrauen vermittelt.',
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
  liveUrl: 'https://mohavecosmeticsurgery.com/',
  githubUrl: '#',
  category: ['static'],
}

export default mohaveCosmeticSurgery
