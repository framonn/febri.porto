export type Language = 'EN' | 'ID';

export interface Project {
  id: string;
  title: string;
  category: 'industry' | 'webapp' | 'uiux';
  categoryBadge: {
    en: string;
    id: string;
  };
  summary: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  problem: {
    en: string;
    id: string;
  };
  solution: {
    en: string;
    id: string;
  };
  features: {
    en: string[];
    id: string[];
  };
  techStack: string[];
  role: {
    en: string;
    id: string;
  };
  partner?: string;
  images: string[];
  fallbackImages: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  type: 'internship' | 'capstone';
  typeBadge: {
    en: string;
    id: string;
  };
  title: {
    en: string;
    id: string;
  };
  company: string;
  location: string;
  period: {
    en: string;
    id: string;
  };
  summary: {
    en: string;
    id: string;
  };
  achievements: {
    en: string[];
    id: string[];
  };
  techStack: string[];
  icon: string;
}

export interface Certificate {
  id: string;
  title: {
    en: string;
    id: string;
  };
  issuer: string;
  category: {
    en: string;
    id: string;
  };
  date: string;
  image: string;
  fallbackImage: string;
  description: {
    en: string;
    id: string;
  };
  skills?: string[];
  credentialId?: string;
  credentialUrl?: string;
  verified?: boolean;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Core'
    icon?: string;
  }[];
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}
