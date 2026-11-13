import { Project } from '../project-types'

const reactSimpleCalculator: Project = {
  id: 3850,
  title: 'Simple React calculator App',
  description:
    'Simple pet-project demonstrates fundamental React concepts such as component structure.',
  descriptionUa:
    'Простий пет-проєкт, що демонструє фундаментальні концепції React, такі як структура компонентів.',
  descriptionEs:
    'Sencillo proyecto personal que demuestra conceptos fundamentales de React, como la estructura de componentes.',
  descriptionDe:
    'Einfaches Praxisprojekt, das grundlegende React-Konzepte wie die Komponentenstruktur demonstriert.',
  fullDescription:
    'A simple and intuitive calculator app built with React.js and Vite. It demonstrates core React concepts including functional components and useState hooks, allowing users to perform basic arithmetic operations with a clean, responsive interface deployed on GitHub Pages.',
  fullDescriptionUa:
    'Простий та інтуїтивно зрозумілий додаток-калькулятор, створений за допомогою React.js та Vite. Він демонструє ключові концепції React, зокрема функціональні компоненти та хук useState, дозволяючи користувачам виконувати базові арифметичні операції через чистий адаптивний інтерфейс, розгорнутий на GitHub Pages.',
  fullDescriptionEs:
    'Una aplicación de calculadora sencilla e intuitiva construida con React.js y Vite. Demuestra conceptos esenciales de React, incluidos los componentes funcionales y el hook useState, permitiendo a los usuarios realizar operaciones aritméticas básicas mediante una interfaz limpia y responsiva desplegada en GitHub Pages.',
  fullDescriptionDe:
    'Eine einfache und intuitive Taschenrechner-App, entwickelt mit React.js und Vite. Sie demonstriert zentrale React-Konzepte wie funktionale Komponenten und den useState-Hook und ermöglicht grundlegende Rechenoperationen über eine übersichtliche, responsive Benutzeroberfläche auf GitHub Pages.',
  detailHeroLine: 'REACT · JAVASCRIPT · DEMO APP',
  detailMetrics: [
    { value: 'React.js', label: 'UI Library', accent: 'green' },
    { value: 'Vite', label: 'Build Tool', accent: 'green' },
    { value: 'useState', label: 'State Hook', accent: 'darkGreen' },
    { value: 'GitHub Pages', label: 'Hosting', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'FRONTEND',
        steps: [
          { label: 'React Components' },
          { label: 'useState Hook', highlight: true },
          { label: 'CSS3 Styles' },
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
      'The calculator is structured as a single React component using the useState hook to manage the display value and pending operations. Vite bundles the project into optimized static assets deployed to GitHub Pages.',
    descriptionUa:
      'Калькулятор структуровано як React-компонент, що використовує хук useState для керування значенням на екрані та поточними операціями. Vite збирає проєкт в оптимізовані статичні файли, розгорнуті на GitHub Pages.',
    descriptionEs:
      'La calculadora está estructurada como un componente de React que utiliza el hook useState para gestionar el valor en pantalla y las operaciones pendientes. Vite empaqueta el proyecto en archivos estáticos optimizados desplegados en GitHub Pages.',
    descriptionDe:
      'Der Taschenrechner ist als React-Komponente aufgebaut und nutzt den useState-Hook zur Verwaltung des Anzeigewerts und ausstehender Rechenoperationen. Vite bündelt das Projekt in optimierte statische Assets, die über GitHub Pages bereitgestellt werden.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/react-js-simple-calculator_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/react-js-simple-calculator_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/react-js-simple-calculator_thumb.webp',
      caption: 'General view of the Simple React calculator App',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React.js', full: 'React functional components with hooks powering the calculator UI' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript implementing arithmetic logic and event handling' },
      { short: 'CSS3', full: 'Custom CSS3 styles for the calculator layout and button grid' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite', full: 'Vite build tool providing fast development server and optimized production build' },
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the compiled static app publicly for free' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    analytics: [],
  },
  features: [
    {
      title: 'Basic Arithmetic Operations',
      titleUa: 'Базові арифметичні операції',
      titleEs: 'Operaciones aritméticas básicas',
      titleDe: 'Grundlegende Rechenoperationen',
      description:
        'Supports addition, subtraction, multiplication, and division with a clean button-grid interface and real-time display updates.',
      descriptionUa:
        'Підтримує додавання, віднімання, множення та ділення через зручну сітку кнопок із миттєвим оновленням дисплея.',
      descriptionEs:
        'Admite suma, resta, multiplicación y división mediante una interfaz limpia de cuadrícula de botones con actualización de pantalla en tiempo real.',
      descriptionDe:
        'Unterstützt Addition, Subtraktion, Multiplikation und Division über ein übersichtliches Tastenraster mit Echtzeit-Aktualisierung der Anzeige.',
    },
    {
      title: 'React Hooks State Management',
      titleUa: 'Управління станом через React Hooks',
      titleEs: 'Gestión del estado con React Hooks',
      titleDe: 'State-Management mit React Hooks',
      description:
        'The useState hook manages the calculator display value and pending operator, demonstrating core React state patterns.',
      descriptionUa:
        'Хук useState керує значенням на екрані калькулятора та поточним оператором, демонструючи базові патерни стану в React.',
      descriptionEs:
        'El hook useState gestiona el valor mostrado en la calculadora y el operador pendiente, demostrando los patrones fundamentales de estado en React.',
      descriptionDe:
        'Der useState-Hook verwaltet den Anzeigewert des Rechners und den aktiven Operator und veranschaulicht grundlegende React-State-Muster.',
    },
    {
      title: 'Responsive Layout',
      titleUa: 'Адаптивна верстка',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Layout',
      description:
        'The calculator adapts to different screen sizes, remaining fully usable on mobile and desktop devices.',
      descriptionUa:
        'Калькулятор адаптується до різних розмірів екрана, залишаючись зручним як на мобільних пристроях, так і на десктопах.',
      descriptionEs:
        'La calculadora se adapta a diferentes tamaños de pantalla, manteniéndose totalmente funcional en dispositivos móviles y de escritorio.',
      descriptionDe:
        'Der Taschenrechner passt sich verschiedenen Bildschirmgrößen an und bleibt auf Mobil- sowie Desktop-Geräten uneingeschränkt nutzbar.',
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
  liveUrl: 'https://yusupovwebart.github.io/react-js-simple-calculator/',
  githubUrl: 'https://github.com/YusupovWebArt/react-js-simple-calculator',
  category: ['react'],
}

export default reactSimpleCalculator
