import React from "react";

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechnologies {
  frontend: string[];
  backendApi: string[];
  contentManagement: string[];
  devopsSecurity: string[];
  analytics: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  fullScreenshot: string;
  images: ProjectImage[];
  technologies: ProjectTechnologies | string[];
  features: (string | React.ReactNode | ProjectFeature)[];
  challenges: string[];
  solutions: string[];
  liveUrl: string;
  githubUrl: string;
  category: string[];
}
