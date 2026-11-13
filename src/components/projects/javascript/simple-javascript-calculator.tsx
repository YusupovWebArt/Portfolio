import { Project } from '../project-types'

const simpleJavascriptCalculator: Project = {
  id: 4900,
  title: 'Modern Simple Javascript Calculator',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  descriptionDe: 'Lern- und Übungsprojekt zur Vertiefung von JavaScript.',
  fullDescription:
    'A modern-styled calculator built with vanilla JavaScript, HTML5, and CSS3. Supports all basic arithmetic operations with a clean, responsive interface and real-time display updates. A focused learning project demonstrating event handling and arithmetic logic in pure JavaScript.',
  fullDescriptionUa:
    'Сучасний калькулятор, створений на чистому JavaScript, HTML5 та CSS3. Підтримує всі базові арифметичні операції з чистим, адаптивним інтерфейсом та оновленням дисплея в реальному часі. Навчальний проєкт для практики обробки подій та арифметичної логіки на чистому JavaScript.',
  fullDescriptionEs:
    'Una calculadora de diseño moderno construida con JavaScript puro, HTML5 y CSS3. Soporta todas las operaciones aritméticas básicas con una interfaz limpia y responsiva, y actualizaciones de pantalla en tiempo real. Un proyecto de aprendizaje centrado en la gestión de eventos y la lógica aritmética en JavaScript puro.',
  fullDescriptionDe:
    'Ein modern gestalteter Taschenrechner, entwickelt mit reinem JavaScript, HTML5 und CSS3. Unterstützt alle grundlegenden Rechenoperationen über eine übersichtliche, responsive Benutzeroberfläche mit Echtzeit-Anzeigeaktualisierung. Ein fokussiertes Lernprojekt zur Demonstration von Event-Handling und arithmetischer Logik in reinem JavaScript.',
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
      'A fully static calculator with no dependencies - HTML5 defines the button grid and display, vanilla JavaScript handles all arithmetic logic and DOM updates through event listeners, and CSS3 provides the modern styled interface. Deployed on GitHub Pages.',
    descriptionUa:
      'Повністю статичний калькулятор без залежностей - HTML5 визначає сітку кнопок та дисплей, чистий JavaScript обробляє всю арифметичну логіку й оновлення DOM через слухачі подій, а CSS3 формує сучасний стилізований інтерфейс. Розгорнуто на GitHub Pages.',
    descriptionEs:
      'Una calculadora totalmente estática sin dependencias: HTML5 define la cuadrícula de botones y la pantalla, JavaScript puro gestiona toda la lógica aritmética y las actualizaciones del DOM mediante event listeners, y CSS3 proporciona la interfaz de estilo moderno. Desplegada en GitHub Pages.',
    descriptionDe:
      'Ein vollständig statischer Taschenrechner ohne externe Abhängigkeiten - HTML5 definiert das Tastenraster und das Display, reines JavaScript verarbeitet die gesamte arithmetische Logik und DOM-Aktualisierungen über Event-Listener, und CSS3 liefert die modern gestaltete Oberfläche. Bereitgestellt auf GitHub Pages.',
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
      titleUa: 'Базові арифметичні операції',
      titleEs: 'Operaciones aritméticas básicas',
      titleDe: 'Grundlegende Rechenoperationen',
      description:
        'Supports addition, subtraction, multiplication, and division with a clear display that updates as the user inputs numbers and operators.',
      descriptionUa:
        'Підтримує додавання, віднімання, множення та ділення зі зручним дисплеєм, що оновлюється під час введення чисел та операторів.',
      descriptionEs:
        'Soporta suma, resta, multiplicación y división con una pantalla clara que se actualiza a medida que el usuario introduce números y operadores.',
      descriptionDe:
        'Unterstützt Addition, Subtraktion, Multiplikation und Division mit einer übersichtlichen Anzeige, die sich bei der Eingabe von Zahlen und Operatoren sofort aktualisiert.',
    },
    {
      title: 'Keyboard & Click Input',
      titleUa: 'Введення кліками та з клавіатури',
      titleEs: 'Entrada por clic y teclado',
      titleDe: 'Tastatur- und Klickeingabe',
      description:
        'All calculator buttons are clickable, with JavaScript event listeners capturing input and updating the display in real time.',
      descriptionUa:
        'Усі кнопки калькулятора активні для натискання, а слухачі подій JavaScript перехоплюють введення та оновлюють дисплей у реальному часі.',
      descriptionEs:
        'Todos los botones de la calculadora son clicables, con event listeners de JavaScript que capturan la entrada y actualizan la pantalla en tiempo real.',
      descriptionDe:
        'Alle Tasten des Rechners sind anklickbar, wobei JavaScript-Event-Listener die Eingaben erfassen und die Anzeige in Echtzeit aktualisieren.',
    },
    {
      title: 'Modern Styled Interface',
      titleUa: 'Сучасний стилізований інтерфейс',
      titleEs: 'Interfaz de diseño moderno',
      titleDe: 'Modern gestaltete Benutzeroberfläche',
      description:
        'A clean CSS3-styled design gives the calculator a contemporary look that works across mobile and desktop screen sizes.',
      descriptionUa:
        'Чистий CSS3-дизайн надає калькулятору сучасного вигляду, який коректно працює на екранах мобільних пристроїв і десктопів.',
      descriptionEs:
        'Un diseño limpio con CSS3 le da a la calculadora un aspecto contemporáneo que funciona tanto en pantallas móviles como de escritorio.',
      descriptionDe:
        'Ein sauberes CSS3-Design verleiht dem Taschenrechner eine zeitgemäße Optik, die sowohl auf Mobilgeräten als auch auf Desktop-Bildschirmen optimal funktioniert.',
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
  liveUrl: 'https://yusupovwebart.github.io/js-simple-calculator/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-calculator',
  category: ['javascript'],
}

export default simpleJavascriptCalculator
