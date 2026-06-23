import { Project } from '../project-types'

const simpleJavascriptDateTime: Project = {
  id: 4750,
  title: 'Javascript Date and time app',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A lightweight date and time display application built with vanilla JavaScript, HTML5, and CSS3. The app shows the current date and time with live updates every second, practising the JavaScript Date object, setInterval, and real-time DOM manipulation.',
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
