import { Project } from '../project-types'

const simpleJavascriptQuiz: Project = {
  id: 46,
  title: 'Simple Javascript Quiz App',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A lightweight quiz app built with vanilla JavaScript, HTML, and CSS. It features multiple-choice questions, interactive feedback, and a clean, responsive design—perfect for testing your knowledge in a fun way.',
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/js-simple-quiz-app_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/js-simple-quiz-app_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/js-simple-quiz-app_thumb.webp',
      caption: 'General view of Quiz App',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/javascript/js-simple-quiz-app/js-simple-quiz-app_slide2.webp',
      caption: '',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/javascript/js-simple-quiz-app/js-simple-quiz-app_slide3.webp',
      caption: '',
    },
  ],
  technologies: [
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'GitHub',
    'GitHub Pages',
  ],
  features: [
    <p>
      <strong>JavaScript &#40;ES6+&#41;: </strong> The programming language used
      for writing the application's logic, utilizing modern JavaScript features.
    </p>,
    <p>
      <strong>HTML5: </strong> Provides the structure and layout of the
      application.
    </p>,
    <p>
      <strong>CSS3: </strong> Used for styling, ensuring a responsive and
      visually appealing design.
    </p>,
    <p>
      <strong>GitHub: </strong> Version control systems used for managing the
      source code and hosting the project repository.
    </p>,
    <p>
      <strong>GitHub Pages: </strong> A service for hosting the static website,
      making the application accessible online.
    </p>,
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/js-simple-quiz-app/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-quiz-app',
  category: ['javascript'],
}

export default simpleJavascriptQuiz
