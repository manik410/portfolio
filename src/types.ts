export interface Project {
  id: string;
  title: string;
  role: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  video?: string;
  tags: string[];
  accentColor: string; // Tailwind class background color
  borderColor: string;
  textColor: string;
  comingSoon?: boolean;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name or svg
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
