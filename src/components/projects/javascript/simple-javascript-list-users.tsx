import { Project } from '../project-types'

const simpleJavascriptListUsers: Project = {
  id: 4700,
  title: 'Javascript Simple List of Users',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A lightweight user list application built with vanilla JavaScript, HTML5, and CSS3. The app fetches and renders a list of users, demonstrating core JavaScript skills including array iteration, DOM manipulation, and dynamic HTML generation from data objects.',
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
      'A fully static project with no dependencies — HTML5 provides the shell container, vanilla JavaScript generates user list items dynamically from a data array using DOM APIs, and CSS3 styles the rendered list. Deployed as a static demo on GitHub Pages.',
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
      description:
        'JavaScript iterates over a user data array and dynamically creates and inserts HTML elements into the DOM to render the complete user list.',
    },
    {
      title: 'ES6+ Array Methods',
      description:
        'Demonstrates modern JavaScript array methods such as map and forEach for clean, readable data-to-DOM transformation without a framework.',
    },
    {
      title: 'Clean Card Layout',
      description:
        'Each user is presented in a styled card with their name and details, using CSS3 Flexbox for a responsive and organized list view.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/list-of-users-javascript/',
  githubUrl: 'https://github.com/YusupovWebArt/list-of-users-javascript',
  category: ['javascript'],
}

export default simpleJavascriptListUsers
