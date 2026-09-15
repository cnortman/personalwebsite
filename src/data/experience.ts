export interface Metric {
  value: string;
  label: string;
}

export interface Role {
  title: string;
  note?: string;
  metrics: Metric[];
  highlights: string[];
  tools: string[];
}

export interface ExperienceEntry {
  /** Anchor on the experience page, e.g. /experience#deloitte-2025. */
  id: string;
  year: number;
  organization: string;
  roles: Role[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'deloitte-2025',
    year: 2025,
    organization: 'Deloitte',
    roles: [
      {
        title: 'Audit Senior Associate',
        metrics: [{ value: '$1T+', label: 'AUM under valuation procedures' }],
        highlights: [
          'Perform quarterly fair value and ASC 820 valuation procedures across fund complexes exceeding $1T in AUM, spanning hedge funds, mutual funds, ETFs, fund-of-funds, and private credit vehicles.',
          'Reperform and validate complex portfolio valuations — including Level 2 and 3 assets, derivatives, and alternative investments — prepared by fund administrators and external valuation specialists.',
          'Communicate directly with C-suite executives and fund administrators to resolve valuation and accounting discrepancies, accelerating quarterly close timelines through structured working sessions.',
          'Prepare and review valuation and audit workpapers while supervising and developing junior staff and interns, strengthening documentation quality and testing efficiency.',
        ],
        tools: ['Deloitte Tools', 'Excel'],
      },
      {
        title: 'Intelligent Automation & Analytics Process Analyst',
        metrics: [
          { value: '1.2 → 4.6', label: 'Performance rating (of 5)' },
          { value: '30+', label: 'Pages per analysis' },
        ],
        highlights: [
          'Engineered an AI-driven reporting tool converting deal interview transcripts into 30+ page structured analyses on FP&A, tax, and controls risk, lifting internal performance ratings from 1.2 to 4.6 out of 5.',
        ],
        tools: ['Python', 'AWS', 'Claude'],
      },
    ],
  },
  {
    id: 'hcvt-2024',
    year: 2024,
    organization: 'HCVT',
    roles: [
      {
        title: 'Audit and M&A Advisory Intern',
        metrics: [
          { value: '4+', label: 'Middle-market transactions' },
          { value: '65+', label: 'SKUs price-tested' },
          { value: '427', label: 'Containers reconciled' },
        ],
        highlights: [
          'Conducted buy-side and sell-side financial due diligence on 4+ middle-market transactions, identifying cost discrepancies that materially impacted deal valuation.',
          'Led inventory price testing across 65+ SKUs, reconciling cost flows across 427 international containers to validate margin integrity for a global e-commerce client.',
        ],
        tools: ['Mergers and Acquisitions', 'QOEs', 'Buy-side Transactions', 'Sell-side Transactions', 'Middle-market'],
      },
    ],
  },
  {
    id: 'deloitte-2023',
    year: 2023,
    organization: 'Deloitte',
    roles: [
      {
        title: 'Audit and Assurance Intern',
        note: 'Moved to Robotic Process Automation',
        metrics: [
          { value: '1 of 2', label: 'Global RPA interns' },
          { value: '2+ hrs', label: 'Saved per engagement' },
        ],
        highlights: [
          'Resume selected from the starting class to be 1 of 2 global RPA interns.',
          'Supported Robotic Process Automation (RPA) implementations as a member of the Accounting & Reporting Advisory (Controllership Transformation) team.',
          'Developed a dynamic Excel VBA automation tool converting Process Quality Documents into client-ready presentations, reducing preparation time by 2+ hours per engagement.',
        ],
        tools: ['Python', 'Excel VBA', 'PQDs'],
      },
    ],
  },
  {
    id: 'uci-2022',
    year: 2022,
    organization: 'UCI Center for Investment and Wealth Management',
    roles: [
      {
        title: 'Program Associate',
        metrics: [{ value: '300+', label: 'Candidates tracked' }],
        highlights: [
          'Designed an executive dashboard in Power BI providing Board-level oversight of LIFEvest program performance and outreach metrics.',
          'Automated applicant tracking for 300+ candidates using Python, improving administrative efficiency within the existing Zengine and Constant Contact systems.',
        ],
        tools: ['Python', 'SQL', 'Power BI', 'Zengine', 'Constant Contact'],
      },
    ],
  },
];

export const experienceByYear = [...new Set(experience.map((entry) => entry.year))].map((year) => ({
  year,
  entries: experience.filter((entry) => entry.year === year),
}));
