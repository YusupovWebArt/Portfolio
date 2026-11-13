import { Project } from '../project-types'

const reactSimpleCostAccounting: Project = {
  id: 3800,
  title: 'Simple React Cost Accounting App',
  description: 'Pet project for learning and practicing React.js.',
  descriptionUa: 'Пет-проєкт для вивчення та практики React.js.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de React.js.',
  descriptionDe: 'Praxisprojekt zum Erlernen und Vertiefen von React.js.',
  fullDescription:
    'A beginner-friendly React cost accounting app that allows users to track income and expenses, calculate balances, and manage financial entries. Built with React.js and Vite to practice component-based architecture and state management with hooks.',
  fullDescriptionUa:
    'Зрозумілий для початківців додаток обліку витрат на React, який дозволяє користувачам відстежувати доходи та витрати, розраховувати баланс і керувати фінансовими записами. Створений на React.js та Vite для практики компонентної архітектури та управління станом за допомогою хуків.',
  fullDescriptionEs:
    'Una aplicación de contabilidad de costes en React accesible para principiantes, que permite a los usuarios registrar ingresos y gastos, calcular saldos y gestionar asientos financieros. Desarrollada con React.js y Vite para practicar la arquitectura basada en componentes y la gestión del estado con hooks.',
  fullDescriptionDe:
    'Eine einsteigerfreundliche Kostenrechnungs-App in React, mit der Nutzer Einnahmen und Ausgaben erfassen, Salden berechnen und Finanzbuchungen verwalten können. Entwickelt mit React.js und Vite zur praktischen Anwendung komponentenbasierter Architektur und State-Management mit Hooks.',
  detailHeroLine: 'REACT · JAVASCRIPT · FINANCE DEMO',
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
      'The app is structured as modular React components sharing state through useState hooks for income/expense entries and balance computation. Vite compiles and bundles the project for static deployment on GitHub Pages.',
    descriptionUa:
      'Додаток структуровано у вигляді модульних React-компонентів, що використовують хуки useState для записів доходів і витрат та обчислення балансу. Vite компілює та збирає проєкт для статичного розгортання на GitHub Pages.',
    descriptionEs:
      'La aplicación está estructurada en componentes modulares de React que comparten estado mediante hooks useState para los registros de ingresos y gastos y el cálculo del saldo. Vite compila y empaqueta el proyecto para su despliegue estático en GitHub Pages.',
    descriptionDe:
      'Die App besteht aus modularen React-Komponenten, die den Zustand über useState-Hooks für Einnahmen-/Ausgabenbuchungen und die Saldoberechnung teilen. Vite kompiliert und bündelt das Projekt für das statische Deployment auf GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/react-js-basic-cost-accounting_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/react-js-basic-cost-accounting_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/react-js-basic-cost-accounting_thumb.webp',
      caption: 'General view of the Simple React Cost Accounting App',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React.js', full: 'React functional components managing income and expense entry forms' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for balance calculation logic and data manipulation' },
      { short: 'CSS3', full: 'Custom CSS3 styling for the accounting dashboard layout' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite', full: 'Vite build tool powering the fast development environment and production bundle' },
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static app as a publicly accessible demo' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    analytics: [],
  },
  features: [
    {
      title: 'Income & Expense Tracking',
      titleUa: 'Облік доходів і витрат',
      titleEs: 'Seguimiento de ingresos y gastos',
      titleDe: 'Einnahmen- und Ausgabenerfassung',
      description:
        'Users can add labelled income and expense transactions, with the app automatically calculating and displaying the running balance.',
      descriptionUa:
        'Користувачі можуть додавати позначені транзакції доходів і витрат, а додаток автоматично обчислює та відображає поточний баланс.',
      descriptionEs:
        'Los usuarios pueden añadir transacciones etiquetadas de ingresos y gastos, mientras la aplicación calcula y muestra automáticamente el saldo actualizado.',
      descriptionDe:
        'Nutzer können benannte Einnahmen- und Ausgabentransaktionen hinzufügen, wobei die App automatisch den aktuellen Kontostand berechnet und anzeigt.',
    },
    {
      title: 'React Component Architecture',
      titleUa: 'Компонентна архітектура React',
      titleEs: 'Arquitectura de componentes React',
      titleDe: 'React-Komponentenarchitektur',
      description:
        'The project is split into focused components for the transaction form, transaction list, and balance summary, demonstrating clear separation of concerns.',
      descriptionUa:
        'Проєкт розділено на спеціалізовані компоненти для форми транзакцій, списку операцій та підсумку балансу, демонструючи чітке розділення відповідальності.',
      descriptionEs:
        'El proyecto se divide en componentes específicos para el formulario de transacciones, la lista de movimientos y el resumen de saldo, demostrando una clara separación de responsabilidades.',
      descriptionDe:
        'Das Projekt ist in fokussierte Komponenten für Buchungsformular, Transaktionsliste und Saldoübersicht unterteilt und demonstriert eine klare Trennung der Zuständigkeiten.',
    },
    {
      title: 'Dynamic State Updates',
      titleUa: 'Динамічне оновлення стану',
      titleEs: 'Actualizaciones dinámicas de estado',
      titleDe: 'Dynamische State-Aktualisierungen',
      description:
        'useState hooks ensure the balance and transaction list update instantly in the UI as new entries are added or removed.',
      descriptionUa:
        'Хуки useState забезпечують миттєве оновлення балансу та списку транзакцій в інтерфейсі при додаванні або видаленні записів.',
      descriptionEs:
        'Los hooks useState garantizan que el saldo y la lista de transacciones se actualicen al instante en la interfaz al añadir o eliminar registros.',
      descriptionDe:
        'useState-Hooks sorgen dafür, dass Kontostand und Transaktionsliste in der Benutzeroberfläche sofort aktualisiert werden, sobald Einträge hinzugefügt oder entfernt werden.',
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
  liveUrl: 'https://yusupovwebart.github.io/react-js-basic-cost-accounting/',
  githubUrl: 'https://github.com/YusupovWebArt/react-js-basic-cost-accounting',
  category: ['react'],
}

export default reactSimpleCostAccounting
