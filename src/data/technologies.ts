/** Evidence a skill links to: a work-experience role or a project. */
export const references = {
  'deloitte-audit': { kind: 'experience', label: 'Deloitte · Audit Senior Associate', href: '/experience#deloitte-2025' },
  'deloitte-ai': { kind: 'experience', label: 'Deloitte · Intelligent Automation & Analytics', href: '/experience#deloitte-2025' },
  hcvt: { kind: 'experience', label: 'HCVT · Audit and M&A Advisory', href: '/experience#hcvt-2024' },
  'deloitte-rpa': { kind: 'experience', label: 'Deloitte · Audit and Assurance (RPA)', href: '/experience#deloitte-2023' },
  uci: { kind: 'experience', label: 'UCI · Program Associate', href: '/experience#uci-2022' },
  blackwater: { kind: 'project', label: 'Blackwater Market Terminal' },
  trace: { kind: 'project', label: 'TRACE', href: '/projects/trace' },
  site: { kind: 'project', label: 'This website', href: 'https://github.com/cnortman/personalwebsite' },
} as const satisfies Record<string, { kind: 'experience' | 'project'; label: string; href?: string }>;

export type ReferenceKey = keyof typeof references;

export interface Skill {
  id: string;
  label: string;
  refs: ReferenceKey[];
}

export interface Discipline {
  id: 'finance' | 'data' | 'software';
  label: string;
  skills: Skill[];
}

export const disciplines: Discipline[] = [
  {
    id: 'finance',
    label: 'Finance',
    skills: [
      { id: 'valuation', label: 'Valuation', refs: ['deloitte-audit', 'hcvt'] },
      { id: 'accounting', label: 'Accounting', refs: ['deloitte-audit', 'deloitte-rpa'] },
      { id: 'investment-analysis', label: 'Investment Analysis', refs: ['blackwater', 'trace'] },
      { id: 'audit', label: 'Audit', refs: ['deloitte-audit', 'hcvt', 'deloitte-rpa'] },
      { id: 'due-diligence', label: 'M&A Due Diligence', refs: ['hcvt'] },
      { id: 'markets', label: 'Markets', refs: ['blackwater'] },
      { id: 'financial-reporting', label: 'Financial Reporting', refs: ['deloitte-audit', 'trace'] },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    skills: [
      { id: 'sql', label: 'SQL', refs: ['uci', 'trace'] },
      { id: 'analytics', label: 'Analytics', refs: ['uci', 'blackwater', 'trace'] },
      { id: 'data-modeling', label: 'Data Modeling', refs: ['trace'] },
      { id: 'visualization', label: 'Visualization', refs: ['uci', 'trace'] },
      { id: 'geospatial', label: 'Geospatial', refs: ['trace'] },
    ],
  },
  {
    id: 'software',
    label: 'Software',
    skills: [
      { id: 'python', label: 'Python', refs: ['deloitte-ai', 'deloitte-rpa', 'uci', 'blackwater', 'trace'] },
      { id: 'automation', label: 'Automation', refs: ['deloitte-ai', 'deloitte-rpa', 'uci'] },
      { id: 'ai', label: 'AI & LLMs', refs: ['deloitte-ai', 'trace'] },
      { id: 'apis', label: 'APIs', refs: ['blackwater', 'trace'] },
      { id: 'typescript', label: 'TypeScript', refs: ['site', 'trace'] },
      { id: 'react', label: 'React', refs: ['site', 'trace'] },
      { id: 'astro', label: 'Astro', refs: ['site', 'trace'] },
    ],
  },
];

/** Each step is a stage in the flow; steps with several entries run in parallel. */
export const systemFlow = [['Finance'], ['SQL'], ['Python', 'APIs'], ['PostgreSQL'], ['React'], ['Analytics']];

export const learningLoop = ['Question', 'Research', 'Build', 'Test', 'Break', 'Learn', 'Iterate'];
