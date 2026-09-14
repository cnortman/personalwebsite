export interface Role {
  title: string;
  note?: string;
  tools: string[];
  highlights: string[];
  /** Slug of a related project in src/content/projects. */
  project?: string;
}

export interface ExperienceEntry {
  year: number;
  kind: 'employment' | 'project';
  organization: string;
  roles: Role[];
}

export const kindLabels: Record<ExperienceEntry['kind'], string> = {
  employment: 'Employment',
  project: 'Project',
};

export const experience: ExperienceEntry[] = [
  {
    year: 2025,
    kind: 'employment',
    organization: 'Deloitte',
    roles: [
      {
        title: 'Audit Senior Associate',
        tools: ['Deloitte Tools', 'Excel'],
        highlights: [
          'Perform quarterly fair value and ASC 820 valuation procedures across fund complexes exceeding $1T in AUM, spanning hedge funds, mutual funds, ETFs, fund-of-funds, and private credit vehicles.',
          'Reperform and validate complex portfolio valuations — including Level 2 and 3 assets, derivatives, and alternative investments — prepared by fund administrators and external valuation specialists.',
          'Communicate directly with C-suite executives and fund administrators to resolve valuation and accounting discrepancies, accelerating quarterly close timelines through structured working sessions.',
          'Prepare and review valuation and audit workpapers while supervising and developing junior staff and interns, strengthening documentation quality and testing efficiency.',
        ],
      },
      {
        title: 'Intelligent Automation & Analytics Process Analyst',
        tools: ['Python', 'AWS', 'Claude'],
        highlights: [
          'Engineered an AI-driven reporting tool converting deal interview transcripts into 30+ page structured analyses on FP&A, tax, and controls risk, lifting internal performance ratings from 1.2 to 4.6 out of 5.',
        ],
        project: 'deloitte-ai-ipo-platform',
      },
    ],
  },
  {
    year: 2024,
    kind: 'employment',
    organization: 'HCVT',
    roles: [
      {
        title: 'Audit and M&A Advisory Intern',
        tools: ['Mergers and Acquisitions', 'QOEs', 'Buy-side Transactions', 'Sell-side Transactions', 'Middle-market'],
        highlights: [
          'Conducted buy-side and sell-side financial due diligence on 4+ middle-market transactions, identifying cost discrepancies that materially impacted deal valuation.',
          'Led inventory price testing across 65+ SKUs, reconciling cost flows across 427 international containers to validate margin integrity for a global e-commerce client.',
        ],
      },
    ],
  },
  {
    year: 2023,
    kind: 'employment',
    organization: 'Deloitte',
    roles: [
      {
        title: 'Audit and Assurance Intern',
        note: 'Moved to Robotic Process Automation',
        tools: ['Python', 'Excel VBA', 'PQDs'],
        highlights: [
          'Resume selected from the starting class to be 1 of 2 global RPA interns.',
          'Supported Robotic Process Automation (RPA) implementations as a member of the Accounting & Reporting Advisory (Controllership Transformation) team.',
          'Developed a dynamic Excel VBA automation tool converting Process Quality Documents into client-ready presentations, reducing preparation time by 2+ hours per engagement.',
        ],
      },
    ],
  },
  {
    year: 2022,
    kind: 'employment',
    organization: 'UCI Center for Investment and Wealth Management',
    roles: [
      {
        title: 'Program Associate',
        tools: ['Python', 'SQL', 'Power BI', 'Zengine', 'Constant Contact'],
        highlights: [
          'Designed an executive dashboard in Power BI providing Board-level oversight of LIFEvest program performance and outreach metrics.',
          'Automated applicant tracking for 300+ candidates using Python, improving administrative efficiency within the existing Zengine and Constant Contact systems.',
        ],
      },
    ],
  },
  {
    year: 2020,
    kind: 'project',
    organization: 'Blackwater Market Terminal',
    roles: [
      {
        title: 'Creator',
        tools: ['Excel', 'Python', 'Quandl API', 'Yahoo Finance API', 'Web Scrapers', 'FINRA', 'SEC EDGAR'],
        highlights: [
          'Built a market terminal to help the wave of new retail investors during the 2020 pandemic understand company financial health and the overall market.',
        ],
        project: 'blackwater-market-terminal',
      },
    ],
  },
];

export const experienceByYear = [...new Set(experience.map((entry) => entry.year))].map((year) => ({
  year,
  entries: experience.filter((entry) => entry.year === year),
}));
