import { Project } from '../project-types'

const adwoodsDesign: Project = {
  id: 13000,
  title: 'Adwoods Design',
  description:
    '3D Artists with experience in construction, architecture, and design, present ideas in visual language.',
  fullDescription:
    'A custom WordPress theme built from scratch using the Divi page builder at the client\'s request, enhanced with custom CSS3, JavaScript, and PHP for unique styling and extended functionality. The site showcases architectural 3D visualization work through a custom gallery, blog, and a multi-step contact form designed to streamline client inquiries.',
  detailHeroLine: 'CUSTOM WORDPRESS · ARCHITECTURE & 3D VISUALIZATION',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Divi Builder', label: 'Page Engine', accent: 'darkGreen' },
    { value: 'Multi-step Form', label: 'Lead Capture', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Divi Builder + Custom PHP', highlight: true },
          { label: 'MySQL Database' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Nginx Server' },
          { label: 'Cloudflare CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'The site uses WordPress with the Divi page builder as a client-editable content layer, while custom PHP, CSS3, and JavaScript extend it beyond Divi\'s default capabilities. A multi-step contact form drives lead generation, and Cloudflare CDN ensures fast global delivery of the high-resolution 3D visualization assets.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/adwoods-design_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/adwoods-design_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/adwoods-design_thumb.webp',
      caption: 'Home page highlighting 3D architectural visualization services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/adwoods-design/adwoods-design_gallery.webp',
      caption: 'Custom gallery page showcasing 3D renders and architectural projects',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/adwoods-design/adwoods-design_blog.webp',
      caption: 'Custom blog page for sharing industry insights and project updates',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/adwoods-design/adwoods-design_multistep-contact-form.webp',
      caption: 'Custom multi-step contact form for streamlined client project inquiries',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and well-organized content' },
      { short: 'CSS3', full: 'Custom CSS3 for unique animations and styling beyond Divi defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive elements including the multi-step contact form' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ code extending Divi functionality and powering dynamic features' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, gallery items, and blog posts' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation' },
      { short: 'Divi Builder', full: 'Divi page builder used per client requirement for self-managed content editing' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of high-resolution 3D image assets' },
      { short: 'SSL/TLS', full: 'HTTPS encryption for secure communication across all site pages' },
      { short: 'Nginx', full: 'Nginx web server configured for optimal performance and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 for tracking visitor behavior, gallery engagement, and form conversions' },
      { short: 'Google Maps API', full: 'Google Maps API for displaying the studio location on the contact page' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'On-page and technical SEO to improve visibility for architectural visualization searches' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimizations ensuring green Core Web Vitals scores' },
      { short: 'WebP Images', full: 'WebP format used for all 3D render gallery images to reduce load times' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme with Divi Builder',
      description:
        'The theme was built from scratch and enhanced with the Divi page builder at the client\'s request, allowing them to independently edit layouts while maintaining a polished, custom visual identity.',
    },
    {
      title: 'Multi-step Contact Form',
      description:
        'A custom multi-step contact form guides potential clients through a structured inquiry process, improving lead quality and conversion rates for the studio.',
    },
    {
      title: 'Custom Portfolio Gallery',
      description:
        'A bespoke gallery module displays 3D architectural renders in a visually immersive layout, tailored to showcase the studio\'s expertise in construction and interior design.',
    },
    {
      title: 'Blog & Content Management',
      description:
        'A custom-designed blog section enables the team to publish case studies, project updates, and industry insights, supporting SEO and client engagement.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      description:
        'Fully responsive design combined with image optimization and Cloudflare CDN ensures fast load times and a seamless experience on all devices.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://test.adwoods-design.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default adwoodsDesign
