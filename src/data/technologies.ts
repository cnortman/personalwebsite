/** Evidence a skill links to: a work-experience role or a project. */
export const references = {
  'deloitte-audit': { kind: 'experience', label: 'Deloitte · Audit Senior Associate', href: '/experience#deloitte-2025' },
  'deloitte-ai': { kind: 'experience', label: 'Deloitte · Intelligent Automation & Analytics', href: '/experience#deloitte-2025' },
  hcvt: { kind: 'experience', label: 'HCVT · Audit and M&A Advisory', href: '/experience#hcvt-2024' },
  'deloitte-rpa': { kind: 'experience', label: 'Deloitte · Audit and Assurance (RPA)', href: '/experience#deloitte-2023' },
  uci: { kind: 'experience', label: 'UCI · Program Associate', href: '/experience#uci-2022' },
  blackwater: { kind: 'project', label: 'Blackwater Market Terminal', href: '/projects/blackwater-market-terminal' },
  'sql-analysis': { kind: 'project', label: 'SQL Financial Analysis', href: '/projects/sql-financial-analysis' },
  'investment-analytics': { kind: 'project', label: 'Investment Analytics', href: '/projects/investment-analytics' },
  site: { kind: 'project', label: 'This website', href: 'https://github.com/cnortman/personalwebsite' },
} as const satisfies Record<string, { kind: 'experience' | 'project'; label: string; href: string }>;

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
      { id: 'investment-analysis', label: 'Investment Analysis', refs: ['blackwater', 'investment-analytics'] },
      { id: 'audit', label: 'Audit', refs: ['deloitte-audit', 'hcvt', 'deloitte-rpa'] },
      { id: 'due-diligence', label: 'M&A Due Diligence', refs: ['hcvt'] },
      { id: 'markets', label: 'Markets', refs: ['blackwater'] },
      { id: 'financial-modeling', label: 'Financial Modeling', refs: ['investment-analytics'] },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    skills: [
      { id: 'sql', label: 'SQL', refs: ['uci', 'sql-analysis', 'investment-analytics'] },
      { id: 'analytics', label: 'Analytics', refs: ['uci', 'blackwater', 'investment-analytics'] },
      { id: 'data-modeling', label: 'Data Modeling', refs: ['sql-analysis'] },
      { id: 'visualization', label: 'Visualization', refs: ['uci', 'investment-analytics'] },
      { id: 'statistics', label: 'Statistics', refs: ['investment-analytics'] },
    ],
  },
  {
    id: 'software',
    label: 'Software',
    skills: [
      { id: 'python', label: 'Python', refs: ['deloitte-ai', 'deloitte-rpa', 'uci', 'blackwater', 'investment-analytics'] },
      { id: 'automation', label: 'Automation', refs: ['deloitte-ai', 'deloitte-rpa', 'uci'] },
      { id: 'ai', label: 'AI & LLMs', refs: ['deloitte-ai'] },
      { id: 'apis', label: 'APIs', refs: ['blackwater'] },
      { id: 'typescript', label: 'TypeScript', refs: ['site'] },
      { id: 'react', label: 'React', refs: ['site'] },
      { id: 'astro', label: 'Astro', refs: ['site'] },
    ],
  },
];

/** Each step is a stage in the flow; steps with several entries run in parallel. */
export const systemFlow = [['Finance'], ['SQL'], ['Python', 'APIs'], ['PostgreSQL'], ['React'], ['Analytics']];

export const learningLoop = ['Question', 'Research', 'Build', 'Test', 'Break', 'Learn', 'Iterate'];
