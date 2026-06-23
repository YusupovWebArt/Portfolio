import { Project } from '../project-types'

const jsVanillaSimpleTodoList: Project = {
  id: 4850,
  title: 'Javascript Simple To-Do List',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A lightweight To-Do List application built with vanilla JavaScript, HTML5, and CSS3. Users can add tasks, mark them as complete, and remove them — all without a framework. A clean learning project demonstrating DOM manipulation and event-driven programming with ES6+.',
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
      'A zero-dependency frontend project — HTML5 structures the task list UI, vanilla JavaScript handles all DOM manipulation and event listeners for adding, completing, and deleting tasks, and CSS3 provides the responsive styling. Deployed as a static site on GitHub Pages.',
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
      description:
        'Users can type a task into the input field, add it to the list, mark it as complete by clicking, and delete it with the remove button.',
    },
    {
      title: 'DOM Manipulation with Vanilla JS',
      description:
        'All interactions are handled through ES6+ JavaScript DOM APIs — querySelector, addEventListener, and classList — without any library or framework.',
    },
    {
      title: 'Responsive Layout',
      description:
        'The to-do list adapts to mobile and desktop screen sizes, remaining fully functional and readable on any device.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/js-simple-todo-list/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-todo-list',
  category: ['javascript'],
}

export default jsVanillaSimpleTodoList
