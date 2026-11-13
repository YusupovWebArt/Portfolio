import { Project } from '../project-types'

const simpleJavascriptDateTime: Project = {
  id: 4750,
  title: 'Javascript Date and time app',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  descriptionDe: 'Lern- und Übungsprojekt zur Vertiefung von JavaScript.',
  fullDescription:
    'A lightweight date and time display application built with vanilla JavaScript, HTML5, and CSS3. The app shows the current date and time with live updates every second, practising the JavaScript Date object, setInterval, and real-time DOM manipulation.',
  fullDescriptionUa:
    'Легкий застосунок для відображення дати та часу, створений на чистому JavaScript, HTML5 та CSS3. Застосунок показує поточну дату та час з оновленням щосекунди, практикуючи роботу з об’єктом JavaScript Date, setInterval та маніпуляціями з DOM у реальному часі.',
  fullDescriptionEs:
    'Una aplicación ligera de visualización de fecha y hora construida con JavaScript puro, HTML5 y CSS3. La app muestra la fecha y hora actuales con actualizaciones en vivo cada segundo, practicando el objeto JavaScript Date, setInterval y la manipulación del DOM en tiempo real.',
  fullDescriptionDe:
    'Eine leichtgewichtige Anwendung zur Datums- und Uhrzeitanzeige, entwickelt mit reinem JavaScript, HTML5 und CSS3. Die App zeigt das aktuelle Datum und die Uhrzeit mit sekündlichen Live-Updates an und dient als Praxisprojekt für das JavaScript-Date-Objekt, setInterval und Echtzeit-DOM-Manipulation.',
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
      'A zero-dependency frontend project - HTML5 defines the time display elements, vanilla JavaScript uses the Date API and setInterval to push live time updates to the DOM every second, and CSS3 styles the clock face. Deployed as a static app on GitHub Pages.',
    descriptionUa:
      'Фронтенд-проєкт без залежностей - HTML5 визначає елементи відображення часу, чистий JavaScript використовує Date API та setInterval для щосекундного оновлення часу в DOM, а CSS3 стилізує циферблат. Розгорнуто як статичний застосунок на GitHub Pages.',
    descriptionEs:
      'Un proyecto frontend sin dependencias: HTML5 define los elementos de visualización de la hora, JavaScript puro utiliza la API Date y setInterval para enviar actualizaciones en vivo al DOM cada segundo, y CSS3 estiliza la esfera del reloj. Desplegado como aplicación estática en GitHub Pages.',
    descriptionDe:
      'Ein Frontend-Projekt ohne Abhängigkeiten - HTML5 definiert die Zeitanzeigeelemente, reines JavaScript nutzt die Date-API und setInterval, um jede Sekunde Live-Zeitaktualisierungen in das DOM zu schreiben, und CSS3 gestaltet das Zifferblatt. Bereitgestellt als statische App auf GitHub Pages.',
  },
  image: '/Portfolio/images/portfolio/thumbs/javascript/date-n-time_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/date-n-time_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/date-n-time_thumb.webp',
      caption: 'General view of the JavaScript Date and Time app showing live clock',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'HTML5 structuring the date and time display container elements' },
      { short: 'CSS3', full: 'Custom CSS3 styling the clock interface with a clean, readable layout' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript using Date API and setInterval for live one-second time updates' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the static app as a publicly accessible live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS layout ensuring the clock displays correctly on mobile and desktop devices' },
    ],
  },
  features: [
    {
      title: 'Live Real-Time Clock',
      titleUa: 'Живий годинник реального часу',
      titleEs: 'Reloj en vivo en tiempo real',
      titleDe: 'Live-Echtzeituhr',
      description:
        'The app displays the current time and updates it every second using JavaScript\'s setInterval, giving users a continuously accurate live clock.',
      descriptionUa:
        'Застосунок відображає поточний час та оновлює його щосекунди за допомогою setInterval у JavaScript, надаючи користувачам точний живий годинник.',
      descriptionEs:
        'La aplicación muestra la hora actual y la actualiza cada segundo mediante setInterval de JavaScript, ofreciendo un reloj en vivo continuamente preciso.',
      descriptionDe:
        'Die App zeigt die aktuelle Uhrzeit an und aktualisiert sie jede Sekunde über setInterval von JavaScript, sodass Nutzer eine durchgehend präzise Live-Uhr erhalten.',
    },
    {
      title: 'Date API Practice',
      titleUa: 'Практика роботи з Date API',
      titleEs: 'Práctica con la API Date',
      titleDe: 'Praxiseinsatz der Date-API',
      description:
        'Demonstrates use of the JavaScript Date object to extract and format hours, minutes, seconds, and the current date for display.',
      descriptionUa:
        'Демонструє використання об\'єкта JavaScript Date для отримання та форматування годин, хвилин, секунд і поточної дати для відображення.',
      descriptionEs:
        'Demuestra el uso del objeto Date de JavaScript para extraer y formatear horas, minutos, segundos y la fecha actual para su visualización.',
      descriptionDe:
        'Demonstriert die Verwendung des JavaScript-Date-Objekts zum Extrahieren und Formatieren von Stunden, Minuten, Sekunden und dem aktuellen Datum für die Anzeige.',
    },
    {
      title: 'Minimal & Clean Design',
      titleUa: 'Мінімалістичний та чистий дизайн',
      titleEs: 'Diseño limpio y minimalista',
      titleDe: 'Minimalistisches & klares Design',
      description:
        'A simple CSS3 interface presents the date and time clearly without visual clutter, focusing on readability across all device sizes.',
      descriptionUa:
        'Простий інтерфейс на CSS3 чітко відображає дату й час без візуального шуму, фокусуючись на зручності читання на всіх розмірах екранів.',
      descriptionEs:
        'Una interfaz sencilla en CSS3 presenta la fecha y la hora con claridad y sin ruido visual, centrándose en la legibilidad en todos los tamaños de dispositivo.',
      descriptionDe:
        'Eine schlichte CSS3-Oberfläche präsentiert Datum und Uhrzeit übersichtlich ohne visuelle Überladung und legt den Fokus auf optimale Lesbarkeit auf allen Gerätegrößen.',
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
  liveUrl: 'https://yusupovwebart.github.io/date_n_time/',
  githubUrl: 'https://github.com/YusupovWebArt/date_n_time',
  category: ['javascript'],
}

export default simpleJavascriptDateTime
