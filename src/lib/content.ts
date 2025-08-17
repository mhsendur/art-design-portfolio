import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CaseStudy, Project, Artwork, Writing } from '@/types';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const caseStudiesDir = path.join(contentDirectory, 'case-studies');
  
  try {
    const filenames = await fs.readdir(caseStudiesDir);
    const caseStudies = await Promise.all(
      filenames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (filename) => {
          const filePath = path.join(caseStudiesDir, filename);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data, content } = matter(fileContents);
          
          return {
            ...data,
            slug: filename.replace(/\.mdx$/, ''),
            body: content,
          } as CaseStudy;
        })
    );
    
    return caseStudies.sort((a, b) => b.year - a.year);
  } catch {
    return [];
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const caseStudies = await getCaseStudies();
  return caseStudies.find((study) => study.slug === slug) || null;
}

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  try {
    const filenames = await fs.readdir(projectsDir);
    const projects = await Promise.all(
      filenames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (filename) => {
          const filePath = path.join(projectsDir, filename);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data, content } = matter(fileContents);
          
          return {
            ...data,
            slug: filename.replace(/\.mdx$/, ''),
            body: content,
          } as Project;
        })
    );
    
    return projects.sort((a, b) => b.year - a.year);
  } catch {
    return [];
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export async function getArtwork(): Promise<Artwork[]> {
  const artworkDir = path.join(contentDirectory, 'artwork');
  
  try {
    const filenames = await fs.readdir(artworkDir);
    const artwork = await Promise.all(
      filenames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (filename) => {
          const filePath = path.join(artworkDir, filename);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContents);
          
          return {
            ...data,
            slug: filename.replace(/\.mdx$/, ''),
          } as Artwork;
        })
    );
    
    return artwork.sort((a, b) => b.year - a.year);
  } catch {
    return [];
  }
}

export async function getArtworkByType(type: Artwork['type']): Promise<Artwork[]> {
  const artwork = await getArtwork();
  return artwork.filter((piece) => piece.type === type);
}

export async function getWritings(): Promise<Writing[]> {
  const writingsDir = path.join(contentDirectory, 'writings');
  
  try {
    const filenames = await fs.readdir(writingsDir);
    const writings = await Promise.all(
      filenames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (filename) => {
          const filePath = path.join(writingsDir, filename);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data, content } = matter(fileContents);
          
          return {
            ...data,
            slug: filename.replace(/\.mdx$/, ''),
            body: content,
          } as Writing;
        })
    );
    
    return writings
      .filter((writing) => writing.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getWriting(slug: string): Promise<Writing | null> {
  const writings = await getWritings();
  return writings.find((writing) => writing.slug === slug) || null;
} 