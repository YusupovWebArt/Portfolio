import { Project } from '../project-types'

const webartReactPortfolio: Project = {
  id: 3950,
  title: 'My React Portfolio Website',
  description:
    'Personal portfolio site of Artur Yusupov, showcasing his professional skills and completed projects as a WordPress and React developer',
  fullDescription:
    'This portfolio website was built with React.js and TypeScript to ensure a scalable, component-based architecture, styled with Tailwind CSS for efficient and responsive design. It leverages Vite for fast development and optimized builds, with React Icons for clean, ready-to-use iconography. Version control is managed via GitHub and the site is deployed publicly through GitHub Pages.',
  detailHeroLine: 'REACT · TYPESCRIPT · PORTFOLIO',
  detailMetrics: [
    { value: 'React 19', label: 'UI Framework', accent: 'green' },
    { value: 'TypeScript', label: 'Type Safety', accent: 'green' },
    { value: 'Vite', label: 'Build Tool', accent: 'darkGreen' },
    { value: 'GitHub Pages', label: 'Hosting', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'FRONTEND',
        steps: [
          { label: 'React Components' },
          { label: 'State Management', highlight: true },
          { label: 'Tailwind CSS' },
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
      'The portfolio is built as a React SPA with TypeScript, broken into reusable components for each section. Vite powers the build pipeline, outputting optimized static assets deployed to GitHub Pages for zero-cost, globally available hosting.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/react/webart-react-portfolio_thumb.webp',
      caption: 'Hero section and project grid overview of the React portfolio',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide2.webp',
      caption: 'Light and Dark Mode',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide3.webp',
      caption: 'About section with skills and experience summary',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide4.webp',
      caption: 'Project cards grid with category filter navigation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide5.webp',
      caption: 'Project detail modal with technology stack and screenshots',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide6.webp',
      caption: 'Contact section with social links and contact form',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide7.webp',
      caption: 'Mobile-responsive layout on small screen devices',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide8.webp',
      caption: 'Dark mode theme applied across all portfolio sections',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/react/webart-react-portfolio/webart-react-portfolio_slide9.webp',
      caption: 'Footer with navigation links and social media icons',
    },
  ],
  technologies: {
    frontend: [
      { short: 'React.js', full: 'React 19 component-based UI with hooks for state and side-effects' },
      { short: 'TypeScript', full: 'Static type checking across all components for safer, maintainable code' },
      { short: 'Tailwind CSS', full: 'Utility-first CSS framework for rapid, responsive UI styling' },
      { short: 'React Icons', full: 'Curated icon library integrated throughout the UI for visual clarity' },
      { short: 'JavaScript (ES6+)', full: 'Modern ES6+ JavaScript powering application logic and interactions' },
    ],
    contentManagement: [],
    devopsSecurity: [
      { short: 'Vite', full: 'Next-generation build tool providing instant HMR and optimized production bundles' },
      { short: 'GitHub Pages', full: 'Free static hosting serving the portfolio directly from the GitHub repository' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    analytics: [
      { short: 'Google Analytics 4', full: 'Visitor traffic analytics and engagement tracking integration' },
      { short: 'Search Console', full: 'Monitoring indexing status and search performance metrics' },
    ],
    seo: [
      { short: 'Meta Tags', full: 'Custom meta title and description tags for improved search engine indexing' },
      { short: 'Open Graph', full: 'Open Graph tags enabling rich link previews when shared on social media' },
    ],
  },
  features: [
    {
      title: 'Component-Based Architecture',
      description:
        'Built with React 19 and TypeScript, the portfolio is structured as a collection of reusable, typed components ensuring consistency and ease of future maintenance.',
    },
    {
      title: 'Light & Dark Mode',
      description:
        'A fully implemented theme switcher lets visitors toggle between light and dark modes, with preferences persisted across sessions.',
    },
    {
      title: 'Filterable Project Gallery',
      description:
        'Projects are displayed in a responsive card grid with category-based filters, allowing recruiters and clients to quickly browse relevant work.',
    },
    {
      title: 'Optimized Build & Deployment',
      description:
        'Vite compiles and tree-shakes the project into minimal static assets deployed to GitHub Pages, achieving fast page loads without any server infrastructure.',
    },
    {
      title: 'Fully Responsive Design',
      description:
        'Tailwind CSS breakpoint utilities ensure a seamless experience from mobile phones to large desktop monitors.',
    },
  ],
  challenges: [
    'Optimizing build assets and image delivery to secure near-instant load times on static hosting platforms like GitHub Pages.',
    'Structuring a scalable, component-based React 19 architecture that cleanly separates page sections while sharing global state.',
    'Ensuring full EAA/ADA accessibility compliance (WCAG 2.2 AA) across interactive components, sliders, and modal views.',
  ],
  solutions: [
    'Leveraged Vite for advanced tree-shaking and asset minification, and compressed all media resources into next-generation WebP/AVIF formats.',
    'Designed a modular component hierarchy using React context for theme management, and implemented dynamic imports for heavy detail components.',
    'Integrated semantic HTML5 elements, configured comprehensive ARIA attributes, and verified keyboard focus trapping in modals.',
  ],
  liveUrl: 'https://yusupovwebart.github.io/Portfolio/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio',
  category: ['react'],
}

export default webartReactPortfolio
