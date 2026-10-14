/**
 * Contratos y tipos de datos del Portfolio
 */

export interface NavLink {
  id: string;
  label: string;
  href?: string;
  path?: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}

export interface SidebarData {
  siteName: string;
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  navLinks: NavLink[];
  social: SocialLinks;
}

export interface AboutMe {
  title: string;
  paragraphs: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Technologies {
  subtitle: string;
  categories: SkillCategory[];
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
}

export interface ContactInfo {
  title: string;
  description: string;
  buttonText: string;
  email: string;
}

export interface KeyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  paragraphs: string[];
  tags: string[];
  image: string;
  keyFeaturesTitle: string;
  keyFeatures: KeyFeature[];
}

export interface ProjectsPageData {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
}
