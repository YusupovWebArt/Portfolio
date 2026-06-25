import { Project } from '../project-types'

const reactSimpleCostAccounting: Project = {
  id: 3800,
  title: 'Simple React Cost Accounting App',
  description: 'Pet project for learning and practicing React.js.',
  fullDescription:
    'A beginner-friendly React cost accounting app that allows users to track income and expenses, calculate balances, and manage financial entries. Built with React.js and Vite to practice component-based architecture and state management with hooks.',
  detailHeroLine: 'REACT · JAVASCRIPT · FINANCE DEMO',
  detailMetrics: [
    { value: 'React.js', label: 'UI Library', accent: 'green' },
    { value: 'Vite', label: 'Build Tool', accent: 'green' },
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
          { label: 'CSS3 Styles' },
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
      'The app is structured as modular React components sharing state through useState hooks for income/expense entries and balance computation. Vite compiles and bundles the project for static deployment on GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/react-js-basic-cost-accounting_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/react-js-basic-cost-accounting_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/react-js-basic-cost-accounting_thumb.webp',
      caption: 'General view of the Simple React Cost Accounting App',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React.js', full: 'React functional components managing income and expense entry forms' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript for balance calculation logic and data manipulation' },
      { short: 'CSS3', full: 'Custom CSS3 styling for the accounting dashboard layout' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite', full: 'Vite build tool powering the fast development environment and production bundle' },
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static app as a publicly accessible demo' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    analytics: [],
  },
  features: [
    {
      title: 'Income & Expense Tracking',
      description:
        'Users can add labelled income and expense transactions, with the app automatically calculating and displaying the running balance.',
    },
    {
      title: 'React Component Architecture',
      description:
        'The project is split into focused components for the transaction form, transaction list, and balance summary, demonstrating clear separation of concerns.',
    },
    {
      title: 'Dynamic State Updates',
      description:
        'useState hooks ensure the balance and transaction list update instantly in the UI as new entries are added or removed.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/react-js-basic-cost-accounting/',
  githubUrl: 'https://github.com/YusupovWebArt/react-js-basic-cost-accounting',
  category: ['react'],
}

export default reactSimpleCostAccounting
