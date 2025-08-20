export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  fullScreenshot: string;
  images: ProjectImage[];
  technologies: string[];
  features: (string | JSX.Element)[];
  challenges: string[];
  solutions: string[];
  liveUrl: string;
  githubUrl: string;
  category: string[];
}
