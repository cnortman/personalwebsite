export const site = {
  name: 'Chase Nortman',
  handle: 'Chassixx',
  title: 'Chase Nortman — Finance × Data × Software',
  description:
    'Finance-oriented technologist who learns complex systems, understands the underlying business problem, and turns analysis into working software.',
  // Put the PDF in public/resume/ and set e.g. '/resume/chase-nortman-resume.pdf'.
  resumePdf: '/resume/chase-nortman-resume.pdf',
};

export const nav = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
];

// Leave a value empty to hide that link everywhere.
export const links = {
  github: 'https://github.com/cnortman',
  linkedin: 'https://www.linkedin.com/in/chase-nortman-550326184/',
  email: 'chase.nortman00@gmail.com',
};

export const contactLinks = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Email', href: links.email ? `mailto:${links.email}` : '' },
].filter((link) => link.href);
