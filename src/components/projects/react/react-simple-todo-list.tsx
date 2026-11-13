import { Project } from '../project-types'

const reactSimpleTodoList: Project = {
  id: 3900,
  title: 'Simple To-Do App',
  description: 'In the process of learning React.js technology.',
  descriptionUa: 'Створено в процесі вивчення технології React.js.',
  descriptionEs: 'Desarrollado durante el proceso de aprendizaje de la tecnología React.js.',
  descriptionDe: 'Entstanden im Rahmen des Lernprozesses der React.js-Technologie.',
  fullDescription:
    'A beginner-friendly To-Do application built with React.js, Bootstrap 5, and Vite. The app lets users add, complete, and remove tasks in real time, practising core React concepts such as component composition, useState hooks, and React-Bootstrap UI integration.',
  fullDescriptionUa:
    'Зрозумілий для початківців To-Do додаток, створений за допомогою React.js, Bootstrap 5 та Vite. Додаток дозволяє користувачам додавати, відмічати виконаними та видаляти завдання в реальному часі, практикуючи основні концепції React, такі як композиція компонентів, хук useState та інтеграція React-Bootstrap UI.',
  fullDescriptionEs:
    'Una aplicación To-Do accesible para principiantes, desarrollada con React.js, Bootstrap 5 y Vite. La app permite a los usuarios añadir, completar y eliminar tareas en tiempo real, practicando conceptos esenciales de React como la composición de componentes, el hook useState y la integración de la interfaz React-Bootstrap.',
  fullDescriptionDe:
    'Eine einsteigerfreundliche To-Do-Anwendung, entwickelt mit React.js, Bootstrap 5 und Vite. Mit der App können Nutzer Aufgaben in Echtzeit hinzufügen, als erledigt markieren und löschen - zur praktischen Übung zentraler React-Konzepte wie Komponentenkomposition, useState-Hooks und React-Bootstrap-UI-Integration.',
  detailHeroLine: 'REACT · BOOTSTRAP · TASK MANAGER',
  detailMetrics: [
    { value: 'React.js', label: 'UI Library', accent: 'green' },
    { value: 'Bootstrap 5', label: 'UI Framework', accent: 'green' },
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
          { label: 'Bootstrap 5' },
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
      'The app is composed of React functional components using useState for task list management. React-Bootstrap provides pre-built accessible UI components styled with Bootstrap 5. Vite bundles the project into a static output deployed on GitHub Pages.',
    descriptionUa:
      'Додаток складається з функціональних компонентів React, які використовують useState для керування списком завдань. React-Bootstrap надає готові доступні UI-компоненти зі стилізацією Bootstrap 5. Vite збирає проєкт у статичний бандл, розгорнутий на GitHub Pages.',
    descriptionEs:
      'La aplicación está compuesta por componentes funcionales de React que utilizan useState para gestionar la lista de tareas. React-Bootstrap proporciona componentes de interfaz accesibles estilizados con Bootstrap 5. Vite empaqueta el proyecto para su despliegue estático en GitHub Pages.',
    descriptionDe:
      'Die App besteht aus funktionalen React-Komponenten, die useState zur Verwaltung der Aufgabenliste nutzen. React-Bootstrap liefert vorgefertigte, barrierefreie UI-Komponenten im Bootstrap-5-Design. Vite bündelt das Projekt in ein statisches Paket auf GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/react-js-basic-todo-list_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/react-js-basic-todo-list_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/react-js-basic-todo-list_thumb.webp',
      caption: 'General view of the To-Do App',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React.js', full: 'React functional components managing the task list with real-time updates' },
      { short: 'Bootstrap 5', full: 'Bootstrap 5 grid and component library for a clean, responsive layout' },
      { short: 'React-Bootstrap', full: 'React-Bootstrap library wrapping Bootstrap components as native React elements' },
      { short: 'React Icons', full: 'React Icons providing accessible icon buttons for task actions' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript powering task creation, completion, and removal logic' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite', full: 'Vite build tool enabling fast HMR during development and optimized static output' },
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the compiled To-Do app as a free public demo' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    analytics: [],
  },
  features: [
    {
      title: 'Task Management',
      titleUa: 'Управління завданнями',
      titleEs: 'Gestión de tareas',
      titleDe: 'Aufgabenverwaltung',
      description:
        'Users can add new tasks via an input field, mark them as complete with a checkbox, and delete them with a trash icon button.',
      descriptionUa:
        'Користувачі можуть додавати нові завдання через поле вводу, відмічати їх як виконані за допомогою чекбокса та видаляти кнопкою з іконкою кошика.',
      descriptionEs:
        'Los usuarios pueden añadir nuevas tareas mediante un campo de entrada, marcarlas como completadas con una casilla de verificación y eliminarlas con un botón de papelera.',
      descriptionDe:
        'Nutzer können über ein Eingabefeld neue Aufgaben hinzufügen, diese per Checkbox als erledigt markieren und über ein Papierkorb-Symbol löschen.',
    },
    {
      title: 'React-Bootstrap UI Components',
      titleUa: 'UI-компоненти React-Bootstrap',
      titleEs: 'Componentes UI de React-Bootstrap',
      titleDe: 'React-Bootstrap-UI-Komponenten',
      description:
        'Pre-built Bootstrap components wrapped as React elements deliver accessible form inputs, buttons, and list groups without custom CSS overhead.',
      descriptionUa:
        'Готові компоненти Bootstrap, обгорнуті як React-елементи, забезпечують доступні поля форм, кнопки та списки без зайвого кастомного CSS.',
      descriptionEs:
        'Los componentes preconstruidos de Bootstrap envueltos como elementos de React ofrecen campos de formulario, botones y listas accesibles sin sobrecarga de CSS personalizado.',
      descriptionDe:
        'Vorgefertigte Bootstrap-Komponenten als native React-Elemente bieten barrierefreie Formulareingaben, Buttons und Listengruppen ohne zusätzlichen CSS-Aufwand.',
    },
    {
      title: 'Real-Time State Updates',
      titleUa: 'Оновлення стану в реальному часі',
      titleEs: 'Actualizaciones de estado en tiempo real',
      titleDe: 'State-Aktualisierungen in Echtzeit',
      description:
        'The useState hook keeps the task list reactive - adding or removing a task immediately updates the rendered list without page reloads.',
      descriptionUa:
        'Хук useState підтримує реактивність списку завдань - додавання або видалення завдання миттєво оновлює список без перезавантаження сторінки.',
      descriptionEs:
        'El hook useState mantiene la lista de tareas reactiva - añadir o eliminar una tarea actualiza inmediatamente la lista renderizada sin recargar la página.',
      descriptionDe:
        'Der useState-Hook hält die Aufgabenliste reaktiv - das Hinzufügen oder Entfernen einer Aufgabe aktualisiert die dargestellte Liste sofort ohne Neuladen der Seite.',
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
  liveUrl: 'https://yusupovwebart.github.io/react-js-basic-todo-list/',
  githubUrl: 'https://github.com/YusupovWebArt/react-js-basic-todo-list',
  category: ['react'],
}

export default reactSimpleTodoList
