import { Project } from '../project-types'

const reactSimpleCalculator: Project = {
  id: 3850,
  title: 'Simple React calculator App',
  description:
    'Simple pet-project demonstrates fundamental React concepts such as component structure.',
  fullDescription:
    'A simple and intuitive calculator app built with React.js and Vite. It demonstrates core React concepts including functional components and useState hooks, allowing users to perform basic arithmetic operations with a clean, responsive interface deployed on GitHub Pages.',
  detailHeroLine: 'REACT · JAVASCRIPT · DEMO APP',
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
      'The calculator is structured as a single React component using the useState hook to manage the display value and pending operations. Vite bundles the project into optimized static assets deployed to GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/react-js-simple-calculator_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/react-js-simple-calculator_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/react-js-simple-calculator_thumb.webp',
      caption: 'General view of the Simple React calculator App',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React.js', full: 'React functional components with hooks powering the calculator UI' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ JavaScript implementing arithmetic logic and event handling' },
      { short: 'CSS3', full: 'Custom CSS3 styles for the calculator layout and button grid' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite', full: 'Vite build tool providing fast development server and optimized production build' },
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the compiled static app publicly for free' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    analytics: [],
  },
  features: [
    {
      title: 'Basic Arithmetic Operations',
      description:
        'Supports addition, subtraction, multiplication, and division with a clean button-grid interface and real-time display updates.',
    },
    {
      title: 'React Hooks State Management',
      description:
        'The useState hook manages the calculator display value and pending operator, demonstrating core React state patterns.',
    },
    {
      title: 'Responsive Layout',
      description:
        'The calculator adapts to different screen sizes, remaining fully usable on mobile and desktop devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/react-js-simple-calculator/',
  githubUrl: 'https://github.com/YusupovWebArt/react-js-simple-calculator',
  category: ['react'],
}

export default reactSimpleCalculator
