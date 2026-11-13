import { Project } from '../project-types'

const simpleJavascriptListUsers: Project = {
  id: 4700,
  title: 'Javascript Simple List of Users',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  descriptionDe: 'Lern- und Übungsprojekt zur Vertiefung von JavaScript.',
  fullDescription:
    'A lightweight user list application built with vanilla JavaScript, HTML5, and CSS3. The app fetches and renders a list of users, demonstrating core JavaScript skills including array iteration, DOM manipulation, and dynamic HTML generation from data objects.',
  fullDescriptionUa:
    'Легкий застосунок списку користувачів, створений на чистому JavaScript, HTML5 та CSS3. Застосунок отримує та рендерить список користувачів, демонструючи ключові навички JavaScript, включаючи ітерацію масивів, маніпуляції з DOM та динамічну генерацію HTML з об’єктів даних.',
  fullDescriptionEs:
    'Una aplicación ligera de lista de usuarios construida con JavaScript puro, HTML5 y CSS3. La app obtiene y renderiza una lista de usuarios, demostrando habilidades esenciales de JavaScript como la iteración de arrays, la manipulación del DOM y la generación dinámica de HTML a partir de objetos de datos.',
  fullDescriptionDe:
    'Eine leichtgewichtige Benutzerlisten-Anwendung, entwickelt mit reinem JavaScript, HTML5 und CSS3. Die App lädt und rendert eine Liste von Benutzern und demonstriert zentrale JavaScript-Kenntnisse wie Array-Iteration, DOM-Manipulation und dynamische HTML-Generierung aus Datenobjekten.',
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
      'A fully static project with no dependencies - HTML5 provides the shell container, vanilla JavaScript generates user list items dynamically from a data array using DOM APIs, and CSS3 styles the rendered list. Deployed as a static demo on GitHub Pages.',
    descriptionUa:
      'Повністю статичний проєкт без залежностей - HTML5 надає базовий контейнер, чистий JavaScript динамічно генерує елементи списку користувачів із масиву даних через DOM API, а CSS3 стилізує відрендерений список. Розгорнуто як статичне демо на GitHub Pages.',
    descriptionEs:
      'Un proyecto totalmente estático sin dependencias: HTML5 proporciona el contenedor base, JavaScript puro genera dinámicamente los elementos de la lista de usuarios a partir de un array de datos mediante las API del DOM, y CSS3 estiliza la lista renderizada. Desplegado como demo estática en GitHub Pages.',
    descriptionDe:
      'Ein vollständig statisches Projekt ohne Abhängigkeiten - HTML5 stellt den Basis-Container bereit, reines JavaScript erzeugt die Einträge der Benutzerliste dynamisch aus einem Daten-Array über DOM-APIs, und CSS3 gestaltet die gerenderte Liste. Bereitgestellt als statische Demo auf GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/list-of-users_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/list-of-users_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/list-of-users_thumb.webp',
      caption: 'General view of Simple List of Users',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'HTML5 providing the container structure for the dynamically rendered user list' },
      { short: 'CSS3', full: 'Custom CSS3 styling the user list cards with a clean, readable layout' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript iterating over user data and rendering list items dynamically in the DOM' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the static app as a publicly accessible live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS ensuring the user list displays correctly across mobile and desktop devices' },
    ],
  },
  features: [
    {
      title: 'Dynamic List Rendering',
      titleUa: 'Динамічний рендеринг списку',
      titleEs: 'Renderizado dinámico de lista',
      titleDe: 'Dynamisches Listen-Rendering',
      description:
        'JavaScript iterates over a user data array and dynamically creates and inserts HTML elements into the DOM to render the complete user list.',
      descriptionUa:
        'JavaScript ітерує масив даних користувачів та динамічно створює й вставляє HTML-елементи в DOM для відображення повного списку.',
      descriptionEs:
        'JavaScript itera sobre un array de datos de usuarios y crea e inserta dinámicamente elementos HTML en el DOM para mostrar la lista completa.',
      descriptionDe:
        'JavaScript iteriert über ein Benutzerdaten-Array und erstellt sowie fügt HTML-Elemente dynamisch in das DOM ein, um die vollständige Benutzerliste darzustellen.',
    },
    {
      title: 'ES6+ Array Methods',
      titleUa: 'Методи масивів ES6+',
      titleEs: 'Métodos de arrays ES6+',
      titleDe: 'ES6+ Array-Methoden',
      description:
        'Demonstrates modern JavaScript array methods such as map and forEach for clean, readable data-to-DOM transformation without a framework.',
      descriptionUa:
        'Демонструє сучасні методи масивів JavaScript, такі як map та forEach, для чистого й зрозумілого перетворення даних у DOM без фреймворків.',
      descriptionEs:
        'Demuestra métodos modernos de arrays en JavaScript como map y forEach para una transformación limpia y legible de datos al DOM sin un framework.',
      descriptionDe:
        'Demonstriert moderne JavaScript-Array-Methoden wie map und forEach für eine saubere, gut lesbare Transformation von Daten in das DOM ohne Framework.',
    },
    {
      title: 'Clean Card Layout',
      titleUa: 'Чиста карткова верстка',
      titleEs: 'Diseño limpio de tarjetas',
      titleDe: 'Übersichtliches Karten-Layout',
      description:
        'Each user is presented in a styled card with their name and details, using CSS3 Flexbox for a responsive and organized list view.',
      descriptionUa:
        'Кожен користувач представлений у стилізованій картці з ім\'ям та деталями з використанням CSS3 Flexbox для адаптивного й впорядкованого вигляду.',
      descriptionEs:
        'Cada usuario se presenta en una tarjeta estilizada con su nombre y detalles, utilizando CSS3 Flexbox para una vista de lista organizada y responsiva.',
      descriptionDe:
        'Jeder Benutzer wird in einer gestalteten Karte mit Namen und Details dargestellt, wobei CSS3 Flexbox für eine responsive und geordnete Listenansicht sorgt.',
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
  liveUrl: 'https://yusupovwebart.github.io/list-of-users-javascript/',
  githubUrl: 'https://github.com/YusupovWebArt/list-of-users-javascript',
  category: ['javascript'],
}

export default simpleJavascriptListUsers
