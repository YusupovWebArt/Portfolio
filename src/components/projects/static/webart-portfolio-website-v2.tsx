import { Project } from '../project-types'

const webartPortfolioWebsiteV2: Project = {
  id: 5950,
  title: 'My Portfolio Website v2',
  description: 'Personal portfolio site of Artur Yusupov.',
  fullDescription:
    'The second iteration of Artur Yusupov\'s personal portfolio website, rebuilt with improved design, expanded project showcases, and enhanced JavaScript interactions. Developed using semantic HTML5, CSS3, and vanilla JavaScript, it features a multi-section layout deployed on GitHub Pages.',
  detailHeroLine: 'STATIC HTML · CSS3 · PORTFOLIO V2',
  detailMetrics: [
    { value: 'HTML5', label: 'Semantic Markup', accent: 'green' },
    { value: 'CSS3', label: 'Responsive Styles', accent: 'green' },
    { value: 'Vanilla JS', label: 'Interactivity', accent: 'darkGreen' },
    { value: 'GitHub Pages', label: 'Hosting', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'BUILD',
        steps: [
          { label: 'HTML5' },
          { label: 'CSS3', highlight: true },
          { label: 'JavaScript' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'GitHub Repo' },
          { label: 'Pages CDN', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'A pure static architecture with no build tooling — semantic HTML5 defines the structure, custom CSS3 drives the responsive multi-column layout, and vanilla JavaScript handles all interactivity. The site is deployed directly to GitHub Pages for instant global access.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/html-css-js/webart_portfolio-website-v2_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/html-css-js/webart_portfolio-website-v2_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/webart_portfolio-website-v2_thumb.webp',
      caption: 'Hero section and headline of the v2 portfolio homepage',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide2.webp',
      caption: 'About section with professional summary and photo',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide3.webp',
      caption: 'Skills section displaying frontend and backend technology proficiencies',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide4.webp',
      caption: 'Portfolio section showcasing completed client and personal projects',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide5.webp',
      caption: 'Testimonials and client feedback section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/webart_portfolio-website-v2/webart_portfolio-website-v2_slide6.webp',
      caption: 'Contact section with form and social media links',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 elements structuring all page sections accessibly' },
      { short: 'CSS3', full: 'Custom CSS3 with Flexbox and Grid for a modern, responsive multi-section layout' },
      { short: 'JavaScript (ES6+)', full: 'ES6+ vanilla JavaScript for navigation, animations, and interactive elements' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the portfolio as a static site with global CDN delivery' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries and fluid layouts ensuring usability on all device sizes' },
      { short: 'Cross-browser Compatibility', full: 'Consistent rendering tested across major modern browsers' },
    ],
  },
  features: [
    {
      title: 'Improved Design Over V1',
      description:
        'Version 2 features a refined visual design with updated typography, improved colour palette, and more polished section layouts compared to the first version.',
    },
    {
      title: 'Expanded Project Showcase',
      description:
        'A larger portfolio section with more project cards, better categorization, and direct links to live sites and repositories.',
    },
    {
      title: 'Enhanced JavaScript Interactions',
      description:
        'Smooth scroll behaviour, animated section reveals, and an interactive mobile navigation hamburger menu enhance the user experience.',
    },
    {
      title: 'Fully Responsive Layout',
      description:
        'CSS Flexbox and Grid ensure all sections adapt gracefully from 320px mobile screens up to large widescreen monitors.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/Portfolio-v2-static-vanilla-js/',
  githubUrl: 'https://github.com/YusupovWebArt/Portfolio-v2-static-vanilla-js',
  category: ['static'],
}

export default webartPortfolioWebsiteV2
