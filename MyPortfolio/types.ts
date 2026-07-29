
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  Education = 'education',
  Skills = 'skills',
  Coding = 'coding',
  Projects = 'projects',
  Experience = 'experience',
  Certificates = 'certificates',
  Terminal = 'terminal',
  Contact = 'contact'
}
