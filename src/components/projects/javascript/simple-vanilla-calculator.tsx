import { Project } from "../project-types";

const simpleVanillaCalculator: Project = {
  id: 43,
  title: "Vanilla Javascript Simple Calculator",
  description: "Pet project for learning and practicing JavaScript.",
  fullDescription:
    "A lightweight Javascript Simple Calculator application developed using HTML5, CSS3, and vanilla JavaScript.",
  image: "/images/portfolio/thumbs/javascript/calculator-js_thumb.webp",
  fullScreenshot:
    "/images/portfolio/thumbs/javascript/calculator-js_thumb.webp",
  images: [
    {
      src: "/images/portfolio/thumbs/javascript/calculator-js_thumb.webp",
      caption: "General view of Javascript Simple Calculator",
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
  liveUrl: "https://yusupovwebart.github.io/js-calculator/",
  githubUrl: "https://github.com/YusupovWebArt/js-calculator",
  category: ["javascript"],
};

export default simpleVanillaCalculator;
