import { Project } from '../project-types'

const simpleJavascriptCalculator: Project = {
  id: 4900,
  title: 'Modern Simple Javascript Calculator',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  fullDescription:
    'A modern-styled calculator built with vanilla JavaScript, HTML5, and CSS3. Supports all basic arithmetic operations with a clean, responsive interface and real-time display updates. A focused learning project demonstrating event handling and arithmetic logic in pure JavaScript.',
  fullDescriptionUa:
    'Сучасний калькулятор, створений на чистому JavaScript, HTML5 та CSS3. Підтримує всі базові арифметичні операції з чистим, адаптивним інтерфейсом та оновленням дисплея в реальному часі. Навчальний проєкт для практики обробки подій та арифметичної логіки на чистому JavaScript.',
  fullDescriptionEs:
    'Una calculadora de diseño moderno construida con JavaScript puro, HTML5 y CSS3. Soporta todas las operaciones aritméticas básicas con una interfaz limpia y responsiva, y actualizaciones de pantalla en tiempo real. Un proyecto de aprendizaje centrado en la gestión de eventos y la lógica aritmética en JavaScript puro.',
  detailHeroLine: 'VANILLA JS · HTML5 · DEMO APP',
  detailMetrics: [
    { value: 'Vanilla JS', label: 'No Framework', accent: 'green' },
    { value: 'ES6+', label: 'Modern JS', accent: 'green' },
    { value: 'Responsive', label: 'Mobile Ready', accent: 'darkGreen' },
    { value: 'Open Source', label: 'GitHub', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'BUILD',
        steps: [
          { label: 'HTML5' },
          { label: 'Vanilla JS', highlight: true },
          { label: 'CSS3' },
        ],
      },
      {
        rowLabel: 'DEPLOYMENT',
        steps: [
          { label: 'GitHub Repo' },
          { label: 'GitHub Pages', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'A fully static calculator with no dependencies — HTML5 defines the button grid and display, vanilla JavaScript handles all arithmetic logic and DOM updates through event listeners, and CSS3 provides the modern styled interface. Deployed on GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/simple-javascript-calculator_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/simple-javascript-calculator_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/simple-javascript-calculator_thumb.webp',
      caption: 'General view of Modern Simple Javascript Calculator',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 defining the calculator button grid and display element' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a modern styled interface with responsive layout' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript implementing arithmetic operations and real-time display updates' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the calculator as a free public live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS layout ensuring the calculator is usable on both mobile and desktop devices' },
    ],
  },
  features: [
    {
      title: 'Basic Arithmetic Operations',
      description:
        'Supports addition, subtraction, multiplication, and division with a clear display that updates as the user inputs numbers and operators.',
    },
    {
      title: 'Keyboard & Click Input',
      description:
        'All calculator buttons are clickable, with JavaScript event listeners capturing input and updating the display in real time.',
    },
    {
      title: 'Modern Styled Interface',
      description:
        'A clean CSS3-styled design gives the calculator a contemporary look that works across mobile and desktop screen sizes.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/js-simple-calculator/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-calculator',
  category: ['javascript'],
}

export default simpleJavascriptCalculator
