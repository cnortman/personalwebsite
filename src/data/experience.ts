export interface Metric {
  value: string;
  label: string;
}

export interface Role {
  title: string;
  /** Shown under the title in the detailed view, e.g. "Oct 2024 – Jun 2026". */
  dates?: string;
  location?: string;
  note?: string;
  metrics: Metric[];
  highlights: string[];
  tools: string[];
}

export interface ExperienceEntry {
  /** Anchor on the experience page, e.g. /experience#deloitte-2024. */
  id: string;
  year: number;
  organization: string;
  roles: Role[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'deloitte-2024',
    year: 2024,
    organization: 'Deloitte',
    roles: [
      {
        title: 'Audit Senior Associate',
        dates: 'Oct 2024 – Jun 2026',
        location: 'Costa Mesa, CA',
        metrics: [
          { value: '$1T+', label: 'AUM under fair value procedures' },
          { value: '1.2 → 4.6', label: 'Unicus rating (of 5)' },
          { value: '30+', label: 'Pages per structured report' },
        ],
        highlights: [
          'Analyzed ASC 820 valuation inputs for Level II/III holdings, derivatives, and alternatives across $1T+ AUM fund complexes.',
          'Led fair value and transaction testing across mutual funds, ETFs, hedge funds, fund-of-funds, and private credit vehicles.',
          'Rebuilt v2 of “Unicus,” a proprietary AI-powered IPO readiness tool, lifting its internal performance rating from 1.2/5 to 4.6/5.',
          'Engineered an LLM-to-LLM pipeline turning M&A interview transcripts into 30+ page reports on FP&A, tax, controls, and risk.',
          'Resolved accounting issues with C-suite leaders and fund administrators through working sessions, accelerating close timelines.',
          'Mentored junior staff and interns, reviewing workpapers and refining testing procedures to raise team efficiency.',
        ],
        tools: ['Fair Value (ASC 820)', 'Level II/III Investments', 'LLM Prompt Engineering', 'Python', 'Excel'],
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
        dates: 'Jan 2024 – Mar 2024',
        location: 'Irvine, CA',
        metrics: [
          { value: '$4.0M → $5.7M', label: 'Sell-side adjusted EBITDA' },
          { value: '4', label: 'Middle-market transactions' },
          { value: '3+ hrs', label: 'Saved per engagement' },
          { value: '427', label: 'Containers reconciled' },
        ],
        highlights: [
          'Ran QoE diligence on 4 middle-market deals, analyzing EBITDA bridges, working capital, and customer concentration.',
          'Quantified pro forma and diligence adjustments and tied out cash proofs, supporting $5.7M adjusted EBITDA vs. $4.0M reported',
          'Modeled income statements, balance sheets, and three-year monthly working capital from standardized trial balances.',
          'Automated QuickBooks trial balance preprocessing into QoE databooks via Excel VBA, saving 3+ hours per engagement.',
          'Reconciled cost flows across 427 containers and 65+ SKUs, validating inventory pricing and margins for an e-commerce client.',
        ],
        tools: ['Quality of Earnings', 'EBITDA Normalization', 'Net Working Capital', 'Excel VBA', 'QuickBooks'],
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
        dates: 'Jun 2023 – Aug 2023',
        location: 'Costa Mesa, CA',
        note: 'Controllership Transformation · RPA',
        metrics: [{ value: '2+ hrs', label: 'Saved per engagement' }],
        highlights: [
          'Selected for the Controllership Transformation team, supporting UiPath robotic process automation deployments for clients',
          'Designed a three-dimensional scoring framework weighing build difficulty against ROI to rank client automation opportunities.',
          'Automated client-ready PowerPoint reporting with SharePoint, Copilot Studio, and VBA, saving 2+ hours per engagement.',
        ],
        tools: ['UiPath (RPA)', 'SharePoint', 'Copilot Studio', 'Excel VBA'],
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
        dates: 'Oct 2022 – Jun 2023',
        location: 'Irvine, CA',
        metrics: [{ value: '300+', label: 'Candidates tracked' }],
        highlights: [
          'Designed an executive dashboard giving the Board oversight of LIFEvest program performance and outreach metrics.',
          'Automated applicant tracking for 300+ candidates in Python, streamlining data management and reporting.',
        ],
        tools: ['Python', 'Dashboard Design'],
      },
    ],
  },
];

/** From the resume; shown on the resume page. */
export const education = {
  school: 'University of California, Irvine',
  degree: 'Bachelor of Business Administration',
  graduated: 'June 2024',
  activities: ['Beta Alpha Psi', 'Accounting Association', 'Undergraduate Business Association'],
};

export const skills = [
  {
    label: 'Microsoft 365 & Automation',
    items: ['SharePoint', 'Copilot Studio', 'UiPath (RPA)', 'Advanced Excel (VBA)', 'QuickBooks', 'Word', 'PowerPoint'],
  },
  {
    label: 'Technical',
    items: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'XPath', 'RSS Feeds', 'LLM Prompt Engineering', 'Dashboard Design'],
  },
  {
    label: 'Domain',
    items: [
      'Mutual Funds',
      'ETFs',
      'Hedge Funds',
      'Private Credit',
      'Fair Value (ASC 820)',
      'Level II/III Investments',
      'Quality of Earnings',
      'EBITDA Normalization',
      'Net Working Capital Analysis',
      'Business Process Assessment',
    ],
  },
];

export const experienceByYear = [...new Set(experience.map((entry) => entry.year))].map((year) => ({
  year,
  entries: experience.filter((entry) => entry.year === year),
}));
