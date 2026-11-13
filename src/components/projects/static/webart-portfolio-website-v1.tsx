import { Project } from '../project-types'

const webartPortfolioWebsiteV1: Project = {
  id: 5900,
  title: 'My Portfolio Website v1',
  description: 'Personal portfolio site of Artur Yusupov.',
  descriptionUa: 'Особистий сайт-портфоліо Артура Юсупова.',
  descriptionEs: 'Sitio web de portafolio personal de Artur Yusupov.',
  descriptionDe: 'Persönliche Portfolio-Website von Artur Yusupov.',
  fullDescription:
    'The first version of Artur Yusupov\'s personal portfolio, built from scratch using semantic HTML5, CSS3, and vanilla JavaScript. It presents professional skills, project showcases, and contact information in a clean, fully responsive single-page layout hosted on GitHub Pages.',
  fullDescriptionUa:
    'Перша версія особистого портфоліо Артура Юсупова, створена з нуля з використанням семантичного HTML5, CSS3 та чистого JavaScript. Вона презентує професійні навички, демонстрацію проєктів та контактну інформацію в чистому, повністю адаптивному односторінковому макеті, розміщеному на GitHub Pages.',
  fullDescriptionEs:
    'La primera versión del portafolio personal de Artur Yusupov, desarrollada desde cero con HTML5 semántico, CSS3 y JavaScript vanilla. Presenta habilidades profesionales, proyectos destacados e información de contacto en una maquetación de una sola página limpia y totalmente responsiva alojada en GitHub Pages.',
  fullDescriptionDe:
    'Die erste Version des persönlichen Portfolios von Artur Yusupov, von Grund auf mit semantischem HTML5, CSS3 und Vanilla JavaScript entwickelt. Sie präsentiert berufliche Fähigkeiten, Projektarbeiten und Kontaktinformationen in einem klaren, vollständig responsiven Single-Page-Layout auf GitHub Pages.',
  detailHeroLine: 'STATIC HTML · CSS3 · PORTFOLIO V1',
  detailMetrics: [
    { value: 'HTML5', label: 'Semantic Markup', accent: 'green' },
    { value: 'CSS3', label: 'Responsive Styles', accent: 'green' },
    { value: 'Vanilla JS', label: 'Interactivity', accent: 'darkGreen' },
    { value: 'GitHub Pages', label: 'Hosting', accent: 'neutral' },
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
          { label: 'GitHub Repo' },
          { label: 'Pages CDN', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'The portfolio is a pure static site with no build step - semantic HTML5 structures the content, CSS3 handles layout and responsive breakpoints, and vanilla JavaScript adds scroll animations and interactive navigation. Files are served directly from GitHub Pages via CDN.',
    descriptionUa:
      'Портфоліо є чистим статичним сайтом без етапу збірки - семантичний HTML5 структурує контент, CSS3 відповідає за макет та адаптивні брейкпоінти, а чистий JavaScript додає анімації прокрутки й інтерактивну навігацію. Файли доставляються безпосередньо з GitHub Pages через CDN.',
    descriptionEs:
      'El portafolio es un sitio estático puro sin paso de compilación: el HTML5 semántico estructura el contenido, el CSS3 gestiona el diseño y los puntos de interrupción responsivos, y el JavaScript vanilla añade animaciones de desplazamiento y navegación interactiva. Los archivos se sirven directamente desde GitHub Pages vía CDN.',
    descriptionDe:
      'Das Portfolio ist eine rein statische Website ohne Build-Schritt - semantisches HTML5 strukturiert den Inhalt, CSS3 steuert das Layout und die responsiven Breakpoints, und Vanilla JavaScript sorgt für Scroll-Animationen sowie interaktive Navigation. Die Dateien werden direkt über das GitHub Pages CDN ausgeliefert.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
      caption: 'Hero and introduction section of the v1 portfolio homepage',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide2.webp',
      caption: 'Skills and expertise section listing frontend technologies',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide3.webp',
      caption: 'Portfolio projects section with project cards and links',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide4.webp',
      caption: 'About me section with professional background information',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_old-version/webart_old-version_slide5.webp',
      caption: 'Contact section with email and social media links',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 providing accessible, well-structured page content' },
      { short: 'CSS3', full: 'Custom CSS3 with Flexbox for responsive layouts and smooth transitions' },
      { short: 'JavaScript (ES6+)', full: 'Vanilla ES6+ JavaScript handling navigation interactions and scroll effects' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static portfolio files via CDN globally' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries ensuring a consistent layout across all device sizes' },
      { short: 'Cross-browser Compatibility', full: 'Tested across Chrome, Firefox, Safari, and Edge for consistent rendering' },
    ],
  },
  features: [
    {
      title: 'Single-Page Layout',
      titleUa: 'Односторінковий макет',
      titleEs: 'Diseño de una sola página',
      titleDe: 'Single-Page-Layout',
      description:
        'All portfolio sections - hero, about, skills, projects, and contact - are presented on a single scrollable page with smooth anchor navigation.',
      descriptionUa:
        'Усі розділи портфоліо - головний екран, про мене, навички, проєкти та контакти - представлені на одній сторінці з плавною якірною навігацією.',
      descriptionEs:
        'Todas las secciones del portafolio - inicio, sobre mí, habilidades, proyectos y contacto - se presentan en una sola página desplazable con navegación suave por anclas.',
      descriptionDe:
        'Alle Portfolio-Bereiche - Hero, Über mich, Fähigkeiten, Projekte und Kontakt - werden auf einer einzigen scrollbaren Seite mit sanfter Anker-Navigation präsentiert.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'CSS3 media queries adapt the layout for mobile phones, tablets, and desktops, ensuring readability and usability at any screen width.',
      descriptionUa:
        'Медіа-запити CSS3 адаптують макет для мобільних телефонів, планшетів та десктопів, забезпечуючи читабельність і зручність на будь-якій ширині екрана.',
      descriptionEs:
        'Las media queries de CSS3 adaptan el diseño para teléfonos móviles, tabletas y ordenadores de escritorio, garantizando la legibilidad y usabilidad en cualquier ancho de pantalla.',
      descriptionDe:
        'CSS3 Media Queries passen das Layout für Smartphones, Tablets und Desktops an und gewährleisten Lesbarkeit sowie Benutzerfreundlichkeit bei jeder Bildschirmbreite.',
    },
    {
      title: 'Vanilla JavaScript Interactions',
      titleUa: 'Інтерактивність на чистому JavaScript',
      titleEs: 'Interacciones en JavaScript vanilla',
      titleDe: 'Vanilla-JavaScript-Interaktionen',
      description:
        'Lightweight ES6+ JavaScript handles mobile menu toggling, scroll-based animations, and dynamic active-state highlighting in the navigation bar.',
      descriptionUa:
        'Легкий код ES6+ JavaScript керує перемиканням мобільного меню, анімаціями під час прокрутки та динамічним підсвічуванням активного пункту в панелі навігації.',
      descriptionEs:
        'El ligero JavaScript ES6+ gestiona la apertura del menú móvil, las animaciones basadas en el desplazamiento y el resaltado dinámico del estado activo en la barra de navegación.',
      descriptionDe:
        'Leichtgewichtiges ES6+ JavaScript steuert das Umschalten des mobilen Menüs, scrollbasierte Animationen und die dynamische Hervorhebung des aktiven Navigationspunkts.',
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
  category: ['static'],
}

export default webartPortfolioWebsiteV1
