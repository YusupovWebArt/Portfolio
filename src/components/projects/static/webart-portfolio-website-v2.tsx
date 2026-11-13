import { Project } from '../project-types'

const webartPortfolioWebsiteV2: Project = {
  id: 5950,
  title: 'My Portfolio Website v2',
  description: 'Personal portfolio site of Artur Yusupov.',
  descriptionUa: 'Особистий сайт-портфоліо Артура Юсупова.',
  descriptionEs: 'Sitio web de portafolio personal de Artur Yusupov.',
  descriptionDe: 'Persönliche Portfolio-Website von Artur Yusupov.',
  fullDescription:
    'The second iteration of Artur Yusupov\'s personal portfolio website, rebuilt with improved design, expanded project showcases, and enhanced JavaScript interactions. Developed using semantic HTML5, CSS3, and vanilla JavaScript, it features a multi-section layout deployed on GitHub Pages.',
  fullDescriptionUa:
    'Друга ітерація особистого сайту-портфоліо Артура Юсупова, перероблена з покращеним дизайном, розширеною демонстрацією проєктів та вдосконаленою інтерактивністю на JavaScript. Розроблена з використанням семантичного HTML5, CSS3 та чистого JavaScript, вона має багатосекційний макет, розміщений на GitHub Pages.',
  fullDescriptionEs:
    'La segunda iteración del sitio web de portafolio personal de Artur Yusupov, reconstruida con un diseño mejorado, proyectos adicionales e interacciones JavaScript perfeccionadas. Desarrollada con HTML5 semántico, CSS3 y JavaScript vanilla, cuenta con una maquetación multisección desplegada en GitHub Pages.',
  fullDescriptionDe:
    'Die zweite Iteration der persönlichen Portfolio-Website von Artur Yusupov, neu aufgebaut mit verbessertem Design, erweiterter Projektpräsentation und optimierten JavaScript-Interaktionen. Entwickelt mit semantischem HTML5, CSS3 und Vanilla JavaScript bietet sie ein Mehrsektions-Layout auf GitHub Pages.',
  detailHeroLine: 'STATIC HTML · CSS3 · PORTFOLIO V2',
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
      'A pure static architecture with no build tooling - semantic HTML5 defines the structure, custom CSS3 drives the responsive multi-column layout, and vanilla JavaScript handles all interactivity. The site is deployed directly to GitHub Pages for instant global access.',
    descriptionUa:
      'Чиста статична архітектура без інструментів збірки - семантичний HTML5 визначає структуру, кастомний CSS3 керує адаптивним багатоколонковим макетом, а чистий JavaScript відповідає за всю інтерактивність. Сайт розгорнуто безпосередньо на GitHub Pages для миттєвого глобального доступу.',
    descriptionEs:
      'Una arquitectura estática pura sin herramientas de compilación: el HTML5 semántico define la estructura, el CSS3 personalizado impulsa el diseño responsivo multicolumna y el JavaScript vanilla gestiona toda la interactividad. El sitio se despliega directamente en GitHub Pages para un acceso global instantáneo.',
    descriptionDe:
      'Eine rein statische Architektur ohne Build-Tooling - semantisches HTML5 definiert die Struktur, individuelles CSS3 steuert das responsive Mehrspalten-Layout und Vanilla JavaScript übernimmt die gesamte Interaktivität. Die Website wird für sofortigen weltweiten Zugriff direkt auf GitHub Pages bereitgestellt.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/webart_old-version_thumb.webp',
      caption: 'Hero section and headline of the v2 portfolio homepage',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide2.webp',
      caption: 'About section with professional summary and photo',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide3.webp',
      caption: 'Skills section displaying frontend and backend technology proficiencies',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide4.webp',
      caption: 'Portfolio section showcasing completed client and personal projects',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide5.webp',
      caption: 'Testimonials and client feedback section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide6.webp',
      caption: 'Contact section with form and social media links',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 elements structuring all page sections accessibly' },
      { short: 'CSS3', full: 'Custom CSS3 with Flexbox and Grid for a modern, responsive multi-section layout' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ vanilla JavaScript for navigation, animations, and interactive elements' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the portfolio as a static site with global CDN delivery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries and fluid layouts ensuring usability on all device sizes' },
      { short: 'Cross-browser Compatibility', full: 'Consistent rendering tested across major modern browsers' },
    ],
  },
  features: [
    {
      title: 'Improved Design Over V1',
      titleUa: 'Покращений дизайн порівняно з V1',
      titleEs: 'Diseño mejorado respecto a la V1',
      titleDe: 'Verbessertes Design gegenüber V1',
      description:
        'Version 2 features a refined visual design with updated typography, improved colour palette, and more polished section layouts compared to the first version.',
      descriptionUa:
        'Друга версія вирізняється вдосконаленим візуальним дизайном з оновленою типографікою, покращеною кольоровою палітрою та більш відшліфованими макетами секцій порівняно з першою версією.',
      descriptionEs:
        'La versión 2 presenta un diseño visual refinado con tipografía actualizada, paleta de colores mejorada y diseños de sección más pulidos en comparación con la primera versión.',
      descriptionDe:
        'Version 2 bietet ein verfeinertes visuelles Design mit aktualisierter Typografie, optimierter Farbpalette und ausgefeilteren Sektions-Layouts im Vergleich zur ersten Version.',
    },
    {
      title: 'Expanded Project Showcase',
      titleUa: 'Розширена вітрина проєктів',
      titleEs: 'Escaparate de proyectos ampliado',
      titleDe: 'Erweiterte Projektpräsentation',
      description:
        'A larger portfolio section with more project cards, better categorization, and direct links to live sites and repositories.',
      descriptionUa:
        'Більший розділ портфоліо з додатковими картками проєктів, кращою категоризацією та прямими посиланнями на живі сайти й репозиторії.',
      descriptionEs:
        'Una sección de portafolio más amplia con más tarjetas de proyectos, mejor categorización y enlaces directos a sitios en vivo y repositorios.',
      descriptionDe:
        'Ein größerer Portfolio-Bereich mit mehr Projektkarten, besserer Kategorisierung und direkten Links zu Live-Websites und Repositories.',
    },
    {
      title: 'Enhanced JavaScript Interactions',
      titleUa: 'Розширена JavaScript-інтерактивність',
      titleEs: 'Interacciones JavaScript mejoradas',
      titleDe: 'Erweiterte JavaScript-Interaktionen',
      description:
        'Smooth scroll behaviour, animated section reveals, and an interactive mobile navigation hamburger menu enhance the user experience.',
      descriptionUa:
        'Плавна прокрутка, анімована поява секцій та інтерактивне мобільне гамбургер-меню покращують взаємодію користувача із сайтом.',
      descriptionEs:
        'El desplazamiento suave, las apariciones animadas de secciones y un menú hamburguesa móvil interactivo mejoran la experiencia del usuario.',
      descriptionDe:
        'Sanftes Scrollverhalten, animiertes Einblenden von Sektionen und ein interaktives mobiles Hamburger-Menü verbessern das Nutzererlebnis.',
    },
    {
      title: 'Fully Responsive Layout',
      titleUa: 'Повністю адаптивний макет',
      titleEs: 'Diseño totalmente responsivo',
      titleDe: 'Vollständig responsives Layout',
      description:
        'CSS Flexbox and Grid ensure all sections adapt gracefully from 320px mobile screens up to large widescreen monitors.',
      descriptionUa:
        'CSS Flexbox та Grid гарантують плавну адаптацію всіх секцій від мобільних екранів 320px до великих широкоформатних моніторів.',
      descriptionEs:
        'CSS Flexbox y Grid aseguran que todas las secciones se adapten perfectamente desde pantallas móviles de 320px hasta grandes monitores panorámicos.',
      descriptionDe:
        'CSS Flexbox und Grid stellen sicher, dass sich alle Sektionen nahtlos von 320px-Smartphone-Bildschirmen bis hin zu großen Breitbildmonitoren anpassen.',
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
  liveUrl: 'https://yusupovwebart.github.io/Portfolio-v2-static-vanilla-js/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio-v2-static-vanilla-js',
  category: ['static'],
}

export default webartPortfolioWebsiteV2
