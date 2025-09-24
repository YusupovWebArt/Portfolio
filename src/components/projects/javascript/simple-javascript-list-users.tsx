import { Project } from '../project-types'

const simpleJavascriptListUsers: Project = {
  id: 4700,
  title: 'Javascript Simple List of Users',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A lightweight Simple List of Users application developed using HTML5, CSS3, and vanilla JavaScript.',
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/list-of-users_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/list-of-users_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/list-of-users_thumb.webp',
      caption: 'General view of Simple List of Users',
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
  liveUrl: 'https://yusupovwebart.github.io/list-of-users-javascript/',
  githubUrl: 'https://github.com/YusupovWebArt/list-of-users-javascript',
  category: ['javascript'],
}

export default simpleJavascriptListUsers
