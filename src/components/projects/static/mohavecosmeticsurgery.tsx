import { Project } from '../project-types'

const mohaveCosmeticSurgery: Project = {
  id: 5850,
  title: 'Mohave Cosmetic Surgery',
  description:
    'Las Vegas-based practice led by board-certified plastic surgeon Dr. Bryson Richards.',
  fullDescription:
    'A professional website for Mohave Cosmetic Surgery, a Las Vegas-based plastic surgery practice led by board-certified surgeon Dr. Bryson Richards. Built with semantic HTML5, CSS3, and vanilla JavaScript, the site presents surgical procedures, patient information, and contact details in a clean, trustworthy design optimized for medical lead generation.',
  detailHeroLine: 'STATIC HTML · MEDICAL PRACTICE · LAS VEGAS',
  detailMetrics: [
    { value: 'HTML5', label: 'Semantic Markup', accent: 'green' },
    { value: 'CSS3', label: 'Responsive Styles', accent: 'green' },
    { value: 'Vanilla JS', label: 'Interactivity', accent: 'darkGreen' },
    { value: 'Medical CRO', label: 'Lead-focused', accent: 'neutral' },
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
          { label: 'cPanel Hosting' },
          { label: 'CDN', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'A hand-coded static site with no CMS dependencies — HTML5 defines accessible content structure, CSS3 delivers a professional medical aesthetic with responsive layouts, and JavaScript handles contact form interactions and navigation. Hosted on a cPanel web server with SSL.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/projects/html-css-js/mohavecosmeticsurgery_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/html-css-js/mohavecosmeticsurgery/mohavecosmeticsurgery_slide2.webp',
      caption: 'Surgical procedures listing page with service descriptions',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structuring procedure pages, doctor profiles, and contact sections' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a professional, trust-inspiring medical site aesthetic' },
      { short: 'JavaScript (ES6+)', full: 'Vanilla JavaScript managing navigation, contact interactions, and smooth scrolling' },
    ],
    devopsSecurity: [
      { short: 'cPanel Hosting', full: 'cPanel-managed web hosting serving the static site files reliably' },
      { short: 'SSL/TLS', full: 'HTTPS encryption building patient trust and meeting security requirements' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries ensuring the site is fully usable on mobile and desktop' },
      { short: 'Cross-browser Compatibility', full: 'Consistent layout tested across Chrome, Firefox, Safari, and Edge' },
    ],
  },
  features: [
    {
      title: 'Procedure Pages',
      description:
        'Dedicated pages for each surgical procedure with detailed descriptions, helping prospective patients understand their options before booking a consultation.',
    },
    {
      title: 'Doctor Profile & Credentials',
      description:
        'A prominent section showcasing Dr. Bryson Richards\'s board certifications, qualifications, and professional background to build patient trust.',
    },
    {
      title: 'Lead-Optimized Contact Section',
      description:
        'Clear call-to-action buttons and a contact form guide visitors toward booking consultations, supporting the practice\'s patient acquisition goals.',
    },
    {
      title: 'Responsive Medical Design',
      description:
        'A clean, professional visual design with a restrained colour palette and readable typography ensures the site conveys trust across all devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://mohavecosmeticsurgery.com/',
  githubUrl: '#',
  category: ['static'],
}

export default mohaveCosmeticSurgery
