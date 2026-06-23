import { Project } from '../project-types'

const nokyc: Project = {
  id: 5800,
  title: 'Nokyc',
  description: 'Pure HTML/CSS/JS code.',
  fullDescription:
    'A static informational website built with pure HTML5, CSS3, and vanilla JavaScript. The site delivers a clean, fast-loading multi-section layout without any frameworks or CMS, showcasing efficient hand-coded frontend development deployed on GitHub Pages.',
  detailHeroLine: 'STATIC HTML · CSS3 · JAVASCRIPT',
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
      'A zero-dependency static site — semantic HTML5 structures the content, custom CSS3 provides a responsive and styled layout, and vanilla JavaScript adds interactive behaviour. Deployed directly to GitHub Pages for cost-free global delivery via CDN.',
  },
  image: '/Portfolio/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/html-css-js/nokyc_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp',
      caption: 'Homepage hero section and main navigation of the Nokyc website',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/nokyc/nokyc_slide2.webp',
      caption: 'Inner content section with informational layout and call-to-action',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 providing accessible and well-structured page content' },
      { short: 'CSS3', full: 'Custom CSS3 with Flexbox for a clean, responsive multi-section layout' },
      { short: 'JavaScript (ES6+)', full: 'Vanilla ES6+ JavaScript handling navigation and interactive UI elements' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages delivering the static site files via global CDN at no cost' },
      { short: 'SSL/TLS', full: 'HTTPS encryption automatically provided by GitHub Pages' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries adapting the layout to mobile and desktop screen sizes' },
      { short: 'Cross-browser Compatibility', full: 'Consistent rendering verified across modern major browsers' },
    ],
  },
  features: [
    {
      title: 'Pure Static Frontend',
      description:
        'Developed with no frameworks or build tools — raw HTML, CSS, and JavaScript produce a lightweight, fast-loading site with minimal dependencies.',
    },
    {
      title: 'Responsive Multi-Section Layout',
      description:
        'CSS3 Flexbox and media queries create a fully responsive layout that adapts cleanly to mobile, tablet, and desktop viewports.',
    },
    {
      title: 'Interactive Navigation',
      description:
        'Vanilla JavaScript powers the mobile hamburger menu and smooth scroll behaviour for an enhanced user experience without framework overhead.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/nokyc/',
  githubUrl: 'https://github.com/YusupovWebArt/nokyc',
  category: ['static'],
}

export default nokyc
