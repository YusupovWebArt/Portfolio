import { Project } from '../project-types'

const nokyc: Project = {
  id: 5800,
  title: 'Nokyc',
  description:
    'Lightweight static Web3 information portal engineered with pure semantic HTML5, modern CSS3, and vanilla JavaScript for sub-second performance.',
  descriptionUa:
    'Легкий статичний Web3 інформаційний портал на чистому семантичному HTML5, сучасному CSS3 та ванільному JavaScript із субсекундною швидкістю.',
  descriptionEs:
    'Portal informativo Web3 estático y ligero desarrollado con HTML5 semántico puro, CSS3 moderno y JavaScript vanilla para rendimiento sub-segundo.',
  descriptionDe:
    'Leichtgewichtiges statisches Web3-Informationsportal, entwickelt mit reinem semantischem HTML5, modernem CSS3 und Vanilla JavaScript für Sub-Sekunden-Ladezeiten.',
  fullDescription:
    'A static informational website built with pure HTML5, CSS3, and vanilla JavaScript. The site delivers a clean, fast-loading multi-section layout without any frameworks or CMS, showcasing efficient hand-coded frontend development deployed on GitHub Pages.',
  fullDescriptionUa:
    'Статичний інформаційний вебсайт, створений на чистому HTML5, CSS3 та JavaScript. Сайт забезпечує чистий, швидкий багатосекційний макет без будь-яких фреймворків чи CMS, демонструючи ефективну ручну frontend-розробку, розміщену на GitHub Pages.',
  fullDescriptionEs:
    'Un sitio web informativo estático desarrollado con HTML5 puro, CSS3 y JavaScript vanilla. El sitio ofrece una maquetación multisección limpia y de carga rápida sin ningún framework ni CMS, demostrando un desarrollo frontend eficiente y codificado a mano desplegado en GitHub Pages.',
  fullDescriptionDe:
    'Eine statische Informations-Website, entwickelt mit reinem HTML5, CSS3 und Vanilla JavaScript. Die Website bietet ein klares, schnell ladendes Mehrspalten- und Mehrsektions-Layout ohne Frameworks oder CMS und demonstriert effiziente handcodierte Frontend-Entwicklung mit Bereitstellung auf GitHub Pages.',
  detailHeroLine: 'STATIC HTML · CSS3 · JAVASCRIPT',
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
      'A zero-dependency static site - semantic HTML5 structures the content, custom CSS3 provides a responsive and styled layout, and vanilla JavaScript adds interactive behaviour. Deployed directly to GitHub Pages for cost-free global delivery via CDN.',
    descriptionUa:
      'Статичний сайт без залежностей - семантичний HTML5 структурує контент, кастомний CSS3 забезпечує адаптивний стилізований макет, а чистий JavaScript додає інтерактивну поведінку. Розгорнутий безпосередньо на GitHub Pages для безкоштовної глобальної доставки через CDN.',
    descriptionEs:
      'Un sitio estático sin dependencias: el HTML5 semántico estructura el contenido, el CSS3 personalizado proporciona un diseño responsivo y estilizado, y el JavaScript vanilla añade comportamiento interactivo. Desplegado directamente en GitHub Pages para una entrega global sin coste vía CDN.',
    descriptionDe:
      'Eine statische Website ohne Abhängigkeiten - semantisches HTML5 strukturiert den Inhalt, individuelles CSS3 sorgt für ein responsives Layout und Vanilla JavaScript fügt interaktives Verhalten hinzu. Direkt auf GitHub Pages bereitgestellt für kostenfreie globale Auslieferung über CDN.',
  },
  image: '/Portfolio/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp',
      caption: 'Homepage hero section and main navigation of the Nokyc website',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/nokyc/nokyc_slide2.webp',
      caption: 'Inner content section with informational layout and call-to-action',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 providing accessible and well-structured page content' },
      { short: 'CSS3', full: 'Custom CSS3 with Flexbox for a clean, responsive multi-section layout' },
      { short: 'JavaScript (ES6+)', full: 'Vanilla ES6+ JavaScript handling navigation and interactive UI elements' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages delivering the static site files via global CDN at no cost' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries adapting the layout to mobile and desktop screen sizes' },
      { short: 'Cross-browser Compatibility', full: 'Consistent rendering verified across modern major browsers' },
    ],
  },
  features: [
    {
      title: 'Pure Static Frontend',
      titleUa: 'Чистий статичний фронтенд',
      titleEs: 'Frontend estático puro',
      titleDe: 'Reines statisches Frontend',
      description:
        'Developed with no frameworks or build tools - raw HTML, CSS, and JavaScript produce a lightweight, fast-loading site with minimal dependencies.',
      descriptionUa:
        'Розроблено без фреймворків чи інструментів збірки - чисті HTML, CSS та JavaScript створюють легкий і швидкий сайт із мінімальними залежностями.',
      descriptionEs:
        'Desarrollado sin frameworks ni herramientas de compilación: HTML, CSS y JavaScript puros producen un sitio ligero y de carga rápida con dependencias mínimas.',
      descriptionDe:
        'Entwickelt ohne Frameworks oder Build-Tools - reines HTML, CSS und JavaScript erzeugen eine leichtgewichtige, schnell ladende Website mit minimalen Abhängigkeiten.',
    },
    {
      title: 'Responsive Multi-Section Layout',
      titleUa: 'Адаптивний багатосекційний макет',
      titleEs: 'Diseño multisección responsivo',
      titleDe: 'Responsives Mehrsektions-Layout',
      description:
        'CSS3 Flexbox and media queries create a fully responsive layout that adapts cleanly to mobile, tablet, and desktop viewports.',
      descriptionUa:
        'CSS3 Flexbox та медіа-запити створюють повністю адаптивний макет, який чітко підлаштовується під екрани мобільних пристроїв, планшетів та десктопів.',
      descriptionEs:
        'CSS3 Flexbox y las media queries crean un diseño totalmente responsivo que se adapta limpiamente a pantallas móviles, tabletas y escritorios.',
      descriptionDe:
        'CSS3 Flexbox und Media Queries schaffen ein vollständig responsives Layout, das sich sauber an Smartphone-, Tablet- und Desktop-Ansichten anpasst.',
    },
    {
      title: 'Interactive Navigation',
      titleUa: 'Інтерактивна навігація',
      titleEs: 'Navegación interactiva',
      titleDe: 'Interaktive Navigation',
      description:
        'Vanilla JavaScript powers the mobile hamburger menu and smooth scroll behaviour for an enhanced user experience without framework overhead.',
      descriptionUa:
        'Чистий JavaScript забезпечує роботу мобільного гамбургер-меню та плавної прокрутки для покращеного користувацького досвіду без навантаження фреймворків.',
      descriptionEs:
        'JavaScript vanilla impulsa el menú hamburguesa móvil y el desplazamiento suave para mejorar la experiencia de usuario sin la sobrecarga de un framework.',
      descriptionDe:
        'Vanilla JavaScript steuert das mobile Hamburger-Menü und das sanfte Scrollverhalten für eine verbesserte Benutzererfahrung ohne Framework-Overhead.',
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
  liveUrl: 'https://yusupovwebart.github.io/nokyc/',
  githubUrl: 'https://github.com/YusupovWebArt/nokyc',
  category: ['static'],
}

export default nokyc
