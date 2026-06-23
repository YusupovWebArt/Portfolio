import { Project } from '../project-types'

const simpleVanillaCalculator: Project = {
  id: 4800,
  title: 'Vanilla Javascript Simple Calculator',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A simple calculator application built with vanilla JavaScript, HTML5, and CSS3. Performs standard arithmetic operations with a straightforward button interface and real-time display — a focused learning project practising event listeners, operator logic, and DOM manipulation in pure JavaScript.',
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
      'A zero-dependency calculator — HTML5 defines the number pad and display elements, vanilla JavaScript captures button click events and handles all arithmetic evaluation and display updates, while CSS3 styles the responsive calculator layout. Deployed as a static app on GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/calculator-js_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/calculator-js_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/calculator-js_thumb.webp',
      caption: 'General view of Javascript Simple Calculator',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'HTML5 defining the calculator button grid and display element structure' },
      { short: 'CSS3', full: 'Custom CSS3 providing the calculator interface layout and button styling' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript handling button events, arithmetic logic, and display updates' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static calculator app as a public live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS layout ensuring the calculator works correctly on mobile and desktop devices' },
    ],
  },
  features: [
    {
      title: 'Standard Arithmetic Operations',
      description:
        'Performs addition, subtraction, multiplication, and division through a clickable number pad with a clear display showing inputs and results.',
    },
    {
      title: 'Event-Driven Logic',
      description:
        'JavaScript addEventListener captures each button click and routes the input through operator and evaluation logic, updating the display in real time.',
    },
    {
      title: 'Responsive Layout',
      description:
        'The calculator\'s CSS grid layout adapts to mobile and desktop screen sizes, keeping the button grid usable at any viewport width.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/js-calculator/',
  githubUrl: 'https://github.com/YusupovWebArt/js-calculator',
  category: ['javascript'],
}

export default simpleVanillaCalculator
