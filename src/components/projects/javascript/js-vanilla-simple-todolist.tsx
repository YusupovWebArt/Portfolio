import { Project } from '../project-types'

const jsVanillaSimpleTodoList: Project = {
  id: 4850,
  title: 'Javascript Simple To-Do List',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  descriptionDe: 'Lern- und Übungsprojekt zur Vertiefung von JavaScript.',
  fullDescription:
    'A lightweight To-Do List application built with vanilla JavaScript, HTML5, and CSS3. Users can add tasks, mark them as complete, and remove them - all without a framework. A clean learning project demonstrating DOM manipulation and event-driven programming with ES6+.',
  fullDescriptionUa:
    'Легкий застосунок Список справ (To-Do List), створений на чистому JavaScript, HTML5 та CSS3. Користувачі можуть додавати завдання, позначати їх як виконані та видаляти їх - все це без використання фреймворків. Навчальний проєкт, що демонструє маніпуляції з DOM та подійно-орієнтоване програмування на ES6+.',
  fullDescriptionEs:
    'Una aplicación To-Do List ligera desarrollada con JavaScript puro, HTML5 y CSS3. Los usuarios pueden añadir tareas, marcarlas como completadas y eliminarlas, todo ello sin necesidad de un framework. Un proyecto de aprendizaje limpio que demuestra la manipulación del DOM y la programación orientada a eventos con ES6+.',
  fullDescriptionDe:
    'Eine leichtgewichtige To-Do-Listen-Anwendung, entwickelt mit reinem JavaScript, HTML5 und CSS3. Nutzer können Aufgaben hinzufügen, als erledigt markieren und löschen - ganz ohne Framework. Ein sauberes Lernprojekt, das DOM-Manipulation und ereignisgesteuerte Programmierung mit ES6+ demonstriert.',
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
      'A zero-dependency frontend project - HTML5 structures the task list UI, vanilla JavaScript handles all DOM manipulation and event listeners for adding, completing, and deleting tasks, and CSS3 provides the responsive styling. Deployed as a static site on GitHub Pages.',
    descriptionUa:
      'Фронтенд-проєкт без сторонніх залежностей - HTML5 структурує інтерфейс списку завдань, чистий JavaScript відповідає за всі маніпуляції з DOM та обробники подій для додавання, завершення й видалення завдань, а CSS3 забезпечує адаптивну стилізацію. Розгорнуто як статичний сайт на GitHub Pages.',
    descriptionEs:
      'Un proyecto frontend sin dependencias: HTML5 estructura la interfaz de la lista de tareas, JavaScript puro gestiona toda la manipulación del DOM y los event listeners para añadir, completar y eliminar tareas, y CSS3 proporciona el diseño responsivo. Desplegado como sitio estático en GitHub Pages.',
    descriptionDe:
      'Ein Frontend-Projekt ohne externe Abhängigkeiten - HTML5 strukturiert die Benutzeroberfläche der Aufgabenliste, reines JavaScript übernimmt die gesamte DOM-Manipulation sowie Event-Listener zum Hinzufügen, Abschließen und Löschen von Aufgaben, und CSS3 sorgt für das responsive Styling. Bereitgestellt als statische Website auf GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/js-simple-todo-list_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/js-simple-todo-list_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/js-simple-todo-list_thumb.webp',
      caption: 'General view of Simple To-Do List',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring the task list form and item elements' },
      { short: 'CSS3', full: 'Custom CSS3 styling the task list layout with responsive design' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript managing task creation, completion toggling, and deletion via DOM events' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static app as a publicly accessible live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries ensuring the to-do list is usable on mobile and desktop' },
    ],
  },
  features: [
    {
      title: 'Task Management',
      titleUa: 'Управління завданнями',
      titleEs: 'Gestión de tareas',
      titleDe: 'Aufgabenverwaltung',
      description:
        'Users can type a task into the input field, add it to the list, mark it as complete by clicking, and delete it with the remove button.',
      descriptionUa:
        'Користувачі можуть ввести завдання в поле вводу, додати його до списку, позначити як виконане кліком та видалити за допомогою кнопки видалення.',
      descriptionEs:
        'Los usuarios pueden escribir una tarea en el campo de entrada, añadirla a la lista, marcarla como completada haciendo clic y eliminarla con el botón de borrado.',
      descriptionDe:
        'Nutzer können eine Aufgabe in das Eingabefeld eingeben, zur Liste hinzufügen, per Klick als erledigt markieren und über die Schaltfläche zum Entfernen löschen.',
    },
    {
      title: 'DOM Manipulation with Vanilla JS',
      titleUa: 'Маніпуляції з DOM на чистому JS',
      titleEs: 'Manipulación del DOM con Vanilla JS',
      titleDe: 'DOM-Manipulation mit Vanilla JS',
      description:
        'All interactions are handled through ES6+ JavaScript DOM APIs - querySelector, addEventListener, and classList - without any library or framework.',
      descriptionUa:
        'Усі взаємодії обробляються через DOM API стандарту ES6+ JavaScript - querySelector, addEventListener та classList - без жодних бібліотек чи фреймворків.',
      descriptionEs:
        'Todas las interacciones se gestionan mediante las API del DOM de JavaScript ES6+ - querySelector, addEventListener y classList - sin ninguna librería ni framework.',
      descriptionDe:
        'Alle Interaktionen werden über ES6+ JavaScript DOM-APIs - querySelector, addEventListener und classList - komplett ohne Bibliothek oder Framework gesteuert.',
    },
    {
      title: 'Responsive Layout',
      titleUa: 'Адаптивна верстка',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Layout',
      description:
        'The to-do list adapts to mobile and desktop screen sizes, remaining fully functional and readable on any device.',
      descriptionUa:
        'Список завдань адаптується до екранів мобільних пристроїв та десктопів, залишаючись повністю функціональним і зручним для читання на будь-якому пристрої.',
      descriptionEs:
        'La lista de tareas se adapta a tamaños de pantalla móviles y de escritorio, manteniéndose totalmente funcional y legible en cualquier dispositivo.',
      descriptionDe:
        'Die To-Do-Liste passt sich an Mobil- und Desktop-Bildschirmgrößen an und bleibt auf jedem Gerät voll funktionsfähig und gut lesbar.',
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
  liveUrl: 'https://yusupovwebart.github.io/js-simple-todo-list/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-todo-list',
  category: ['javascript'],
}

export default jsVanillaSimpleTodoList
