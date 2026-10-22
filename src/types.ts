export type ProjectCategory = 'all' | 'rf' | 'power' | 'analog' | 'robotics';

export interface ProjectMedia {
  src: string;
  alt: string;
  caption: string;
  type?: 'schematic' | 'scope' | 'cad' | 'hardware' | 'bode';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: 'ongoing' | 'completed';
  team?: string;
  description: string;
  specs: string;
  tags: string[];
  mediaLayout: 'single' | 'audio-3col' | 'boost-stack' | 'robot-2x2';
  media: ProjectMedia[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}
