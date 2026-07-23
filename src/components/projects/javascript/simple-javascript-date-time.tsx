import { Project } from '../project-types'

const simpleJavascriptDateTime: Project = {
  id: 4750,
  title: 'Javascript Date and time app',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  fullDescription:
    'A lightweight date and time display application built with vanilla JavaScript, HTML5, and CSS3. The app shows the current date and time with live updates every second, practising the JavaScript Date object, setInterval, and real-time DOM manipulation.',
  fullDescriptionUa:
    'Легкий застосунок для відображення дати та часу, створений на чистому JavaScript, HTML5 та CSS3. Застосунок показує поточну дату та час з оновленням щосекунди, практикуючи роботу з об’єктом JavaScript Date, setInterval та маніпуляціями з DOM у реальному часі.',
  fullDescriptionEs:
    'Una aplicación ligera de visualización de fecha y hora construida con JavaScript puro, HTML5 y CSS3. La app muestra la fecha y hora actuales con actualizaciones en vivo cada segundo, practicando el objeto JavaScript Date, setInterval y la manipulación del DOM en tiempo real.',
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
      'A zero-dependency frontend project — HTML5 defines the time display elements, vanilla JavaScript uses the Date API and setInterval to push live time updates to the DOM every second, and CSS3 styles the clock face. Deployed as a static app on GitHub Pages.',
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
      description:
        'The app displays the current time and updates it every second using JavaScript\'s setInterval, giving users a continuously accurate live clock.',
    },
    {
      title: 'Date API Practice',
      description:
        'Demonstrates use of the JavaScript Date object to extract and format hours, minutes, seconds, and the current date for display.',
    },
    {
      title: 'Minimal & Clean Design',
      description:
        'A simple CSS3 interface presents the date and time clearly without visual clutter, focusing on readability across all device sizes.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/date_n_time/',
  githubUrl: 'https://github.com/YusupovWebArt/date_n_time',
  category: ['javascript'],
}

export default simpleJavascriptDateTime
