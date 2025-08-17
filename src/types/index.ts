export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: 'UX' | 'UI' | 'Research' | 'UX/UI';
  year: number;
  duration: string;
  team?: string;
  problem: string;
  goals: string[];
  constraints?: string[];
  process: ProcessSection[];
  outcomes?: string[];
  tools: string[];
  coverImage: string;
  gallery: GalleryItem[];
  links?: ProjectLink[];
  body: string;
}

export interface ProcessSection {
  title: string;
  content: string;
  images?: string[];
}

export interface Project {
  slug: string;
  title: string;
  stack: string[];
  summary: string;
  coverImage: string;
  screens: string[];
  repo?: string;
  demo?: string;
  body: string;
  year: number;
  type: 'frontend' | 'backend' | 'fullstack' | 'design';
}

export interface Artwork {
  slug: string;
  title: string;
  type: 'photo' | 'oil' | 'illustration';
  year: number;
  dimensions?: string;
  medium?: string;
  location?: string;
  image: string;
  series?: string;
  caption?: string;
  tags?: string[];
}

export interface Writing {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
  coverImage?: string;
  body: string;
  published: boolean;
}

export interface GalleryItem {
  url: string;
  caption?: string;
  alt: string;
}

export interface ProjectLink {
  title: string;
  url: string;
  type: 'figma' | 'github' | 'demo' | 'case-study';
}

export interface SiteSettings {
  name: string;
  bio: string;
  email: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    behance?: string;
    dribbble?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
} 