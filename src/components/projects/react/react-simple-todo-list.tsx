import { Project } from '../project-types'

const reactSimpleTodoList: Project = {
  id: 3900,
  title: 'Simple To-Do App',
  description: 'In the process of learning React.js technology.',
  fullDescription:
    'A beginner-friendly To-Do application built with React.js, Bootstrap 5, and Vite. The app lets users add, complete, and remove tasks in real time, practising core React concepts such as component composition, useState hooks, and React-Bootstrap UI integration.',
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
      description:
        'Users can add new tasks via an input field, mark them as complete with a checkbox, and delete them with a trash icon button.',
    },
    {
      title: 'React-Bootstrap UI Components',
      description:
        'Pre-built Bootstrap components wrapped as React elements deliver accessible form inputs, buttons, and list groups without custom CSS overhead.',
    },
    {
      title: 'Real-Time State Updates',
      description:
        'The useState hook keeps the task list reactive — adding or removing a task immediately updates the rendered list without page reloads.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/react-js-basic-todo-list/',
  githubUrl: 'https://github.com/YusupovWebArt/react-js-basic-todo-list',
  category: ['react'],
}

export default reactSimpleTodoList
