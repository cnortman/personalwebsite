export const disciplines = [
  {
    id: 'finance',
    label: 'Finance',
    items: ['Valuation', 'Accounting', 'Investment Analysis', 'Audit', 'Markets', 'Financial Modeling'],
  },
  {
    id: 'data',
    label: 'Data',
    items: ['SQL', 'Analytics', 'Data Modeling', 'Visualization', 'Statistics'],
  },
  {
    id: 'software',
    label: 'Software',
    items: ['Python', 'TypeScript', 'React', 'Astro', 'APIs', 'Automation'],
  },
];

/** Each step is a stage in the flow; steps with several entries run in parallel. */
export const systemFlow = [['Finance'], ['SQL'], ['Python', 'APIs'], ['PostgreSQL'], ['React'], ['Analytics']];

export const learningLoop = ['Question', 'Research', 'Build', 'Test', 'Break', 'Learn', 'Iterate'];
