export interface Experience {
  id: string;
  role: string;
  company: string;
  department?: string;
  period: string;
  duration: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  description: string[];
  skills: string[];
  keyAchievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  campus: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  maxGpa: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1 to 100
    badge?: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  collaborator?: string;
  date: string;
  skillsCovered: string[];
  badgeColor: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  displayUrl: string;
  architectureDetails: {
    frontend: string;
    backend: string;
    aiIntegration: string;
    database: string;
    hosting: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  scenario: string;
  actionTaken: string[];
  outcome: string;
  tools: string[];
}

export interface SecurityLog {
  id: string;
  timestamp: string;
  sourceIp: string;
  country: string;
  requestType: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  threatType: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  action: 'BLOCKED' | 'RATE_LIMITED' | 'FLAGGED' | 'ALLOWED';
  wafRule: string;
}
