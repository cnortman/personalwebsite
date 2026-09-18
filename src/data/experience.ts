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
          'Redesigned and delivered v2 of "Unicus," an internal AI-powered IPO readiness assessment tool, raising its internal performance rating from 1.2/5 to 4.6/5.',
          'Engineered a multi-stage LLM-to-LLM prompt architecture that converts unstructured M&A interview transcripts into 30+ page structured reports covering FP&A, tax, controls, and reporting risk.',
          'Led transaction testing and ASC 820 fair value workstreams across $1T+ AUM fund complexes spanning mutual funds, ETFs, hedge funds, fund-of-funds, and private credit.',
          'Validated valuation inputs and data integrity for complex Level II/III holdings, derivatives, and alternative investments within multi-entity fund structures.',
          'Diagnosed and resolved accounting issues with C-suite leaders and fund administrators through structured working sessions, accelerating close timelines.',
          'Supervised and coached junior staff and interns, reviewing workpaper documentation for accuracy and streamlining testing procedures to improve team efficiency.',
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
          'Developed an Excel VBA macro automating preprocessing of QuickBooks trial balances into quality of earnings databooks, saving 3+ hours per engagement.',
          'Consolidated monthly trial balances and mapped accounts into standardized groupings to build income statements, balance sheets, and three-year monthly working capital schedules.',
          'Performed quality of earnings diligence on 4 middle-market buy-side and sell-side transactions, analyzing EBITDA bridges, working capital seasonality, and customer concentration.',
          'Quantified management, pro forma, and diligence adjustments and tied out cash proofs, supporting sell-side adjusted EBITDA of $5.7M, up from $4.0M reported.',
          'Reconciled cost flows across 427 international containers and 65+ SKUs, validating inventory pricing data and margin integrity for a global e-commerce client.',
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
          'Selected for the Controllership Transformation team within Accounting & Reporting Advisory to support UiPath Robotic Process Automation (RPA) deployments.',
          'Built an automation assessment workflow that captured business process details through intake forms and generated client-ready PowerPoint reports on automation potential.',
          'Scored automation candidates on a three-dimensional framework weighing build difficulty against ROI, enabling clients to prioritize RPA build-out opportunities.',
          'Leveraged SharePoint, Copilot Studio, and Excel VBA to automate assessment reporting, cutting preparation time by 2+ hours per engagement.',
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
          'Designed an executive dashboard for Board oversight of LIFEvest program performance and outreach metrics.',
          'Automated applicant tracking for 300+ candidates using Python, improving data management efficiency.',
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
