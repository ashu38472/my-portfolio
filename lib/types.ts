export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechStack {
  category: string;
  technologies: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image?: string;
  demoLink?: string;
  codeLink?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
