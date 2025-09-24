import { Project } from '../project-types'

const fluffyNinja: Project = {
  id: 10910,
  title: 'Fluffy Ninja',
  description: 'Creative cloth store. France',
  fullDescription:
    'Wordpress theme from scratch. WooCommerce. Custom CSS3/JS/PHP.',
  image: '/Portfolio/images/portfolio/thumbs/wordpress/fluffy-ninja_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/fluffy-ninja_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/fluffy-ninja_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/fluffy-ninja/fluffy-ninja_slide2.webp',
      caption: 'Products',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/fluffy-ninja/fluffy-ninja_slide3.webp',
      caption: '',
    },
  ],
  technologies: [
    'WP custom theme from scratch',
    'Responsive design with CSS Grid',
    'WooCommerce',
    'Custom CSS3',
    'JavaScript ES6',
    'PHP 8+',
    'Technical optimization',
    'SEO-optimization',
    'Google Analytics',
    'Schema.org markup implementation',
    'Google Maps API',
    'Marketing Tools',
  ],
  features: [
    <p>
      <strong>Custom WordPress Theme Development:</strong> Built from scratch to
      meet specific business needs, ensuring complete control over design and
      functionality.
    </p>,
    <p>
      <strong>WooCommerce Integration:</strong> Seamlessly integrated with
      WooCommerce to provide robust eCommerce functionality, including product
      management, secure checkout, and payment gateway support.
    </p>,

    <p>
      <strong>Custom CSS3/JS & PHP: </strong> Designed for unique styling and
      dynamic functionality, ensuring a highly personalized user experience and
      smooth performance.
    </p>,
    <p>
      <strong>Responsive Design: </strong> Optimized for all devices, ensuring
      seamless navigation and user experience across desktops, tablets, and
      smartphones.
    </p>,
    <p>
      <strong>SEO Optimization: </strong> Built with best SEO practices in mind,
      including fast load times, clean code, and structure that boosts search
      engine visibility.
    </p>,
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://fluffy-ninja.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default fluffyNinja
