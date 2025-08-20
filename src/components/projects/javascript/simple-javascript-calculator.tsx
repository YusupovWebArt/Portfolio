import { Project } from "../project-types";

const simpleJavascriptCalculator: Project = {
  id: 45,
  title: "Modern Simple Javascript Calculator",
  description: "Pet project for learning and practicing JavaScript.",
  fullDescription:
    "A basic calculator built with vanilla JavaScript, HTML, and CSS. It supports simple arithmetic operations with a clean and easy-to-use interface.",
  image:
    "/images/portfolio/thumbs/javascript/simple-javascript-calculator_thumb.webp",
  fullScreenshot:
    "/images/portfolio/thumbs/javascript/simple-javascript-calculator_thumb.webp",
  images: [
    {
      src: "/images/portfolio/thumbs/javascript/simple-javascript-calculator_thumb.webp",
      caption: "General view of Modern Simple Javascript Calculator",
    },
  ],
  technologies: [
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "GitHub",
    "GitHub Pages",
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
  liveUrl: "https://yusupovwebart.github.io/js-simple-calculator/",
  githubUrl: "https://github.com/YusupovWebArt/js-simple-calculator",
  category: ["javascript"],
};

export default simpleJavascriptCalculator;
