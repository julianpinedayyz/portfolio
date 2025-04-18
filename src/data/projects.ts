// projects.ts - Centralized data for portfolio projects

// Project data structure interface
export interface Project {
  year: string;
  project: string;
  madeAt: string;
  serviceProvided: string[];
  link?: string;
  confidential?: boolean;
  canadaOnly?: boolean;
  authRequired?: boolean;
}

// Bauhaus palette
export const bauhausColors = {
  deepNavy: '#0E0E2C',
  crimsonRed: '#C8102E',
  ochreYellow: '#F4A100',
  forestGreen: '#004851',
  warmBeige: '#D6C6A5',
  pureWhite: '#FFFFFF',
};

// Project data
export const projects: Project[] = [
  {
    year: '2025',
    project: 'Fintech Product Architecture',
    madeAt: 'Lab 829',
    serviceProvided: ['Frontend Development', 'AI integration'],
    link: '',
    confidential: true,
  },
  {
    year: '2025',
    project: 'Lab 829 Project',
    madeAt: 'Lab 829',
    serviceProvided: ['Chrome Extension', 'AI integration'],
    link: '',
    confidential: true,
  },
  {
    year: '2024',
    project: 'Meta Product Architecture Research',
    madeAt: 'Lab 829',
    serviceProvided: ['Product Architecture', 'Research', 'API Design'],
    link: 'https://meta.com/',
  },
  {
    year: '2023',
    project: 'Klarna Product Roadmap',
    madeAt: 'Lab 829',
    serviceProvided: ['Product Roadmap', 'Research'],
    link: 'https://klarna.com',
  },
  {
    year: '2022',
    project: 'Inifiniti QX60 Landing Page',
    madeAt: 'Critical Mass',
    serviceProvided: ['Technical Direction', 'Personalization'],
    link: 'https://infinitiusa.com/vehicles/crossovers/qx60.html',
  },
  {
    year: '2022',
    project: 'Inifiniti Owners Portal',
    madeAt: 'Critical Mass',
    serviceProvided: ['Technical Direction', 'Personalization'],
    link: 'https://infinitiusa.com/owners.html',
  },
  {
    year: '2022',
    project: 'Nissan ARIYA Launch',
    madeAt: 'Critical Mass',
    serviceProvided: ['Technical Direction', 'Frontend Development'],
    link: 'https://nissan.ca/vehicles/electric-cars/ariya.html',
  },
  {
    year: '2021',
    project: 'Nissan and Infiniti Onboarding Platform',
    madeAt: 'Critical Mass',
    serviceProvided: ['Process Optimization', 'Data Visualization'],
    link: '',
  },
  {
    year: '2021',
    project: 'Kredit Fintech Research',
    madeAt: 'Lab 829',
    serviceProvided: ['Research', 'Product Architecture'],
    link: '',
  },
  {
    year: '2020',
    project: 'System Design',
    madeAt: 'Lab 829',
    serviceProvided: ['Sports Data Integration', 'Interactive Components'],
    link: '',
    confidential: true,
  },
  {
    year: '2019',
    project: 'PC Express',
    madeAt: 'Deloitte Digital',
    serviceProvided: ['Design System Development', 'Component Library'],
    link: 'https://pcexpress.ca/',
    canadaOnly: true,
  },
  {
    year: '2019',
    project: 'Shoppers Drug Mart Marketing Campaigns',
    madeAt: 'Deloitte Digital',
    serviceProvided: [
      'Design System Development',
      'Component Library',
      'Frontend Development',
    ],
    link: 'https://shoppersdrugmart.ca/',
    canadaOnly: true,
  },
  {
    year: '2018',
    project: 'TD Canada Trust System Design & Product Architecture',
    madeAt: 'Deloitte Digital',
    serviceProvided: ['System Design', 'Product Architecture', 'Research'],
    link: 'https://td.com/ca/en/personal-banking',
    authRequired: true,
  },
  {
    year: '2018',
    project: 'Honda Canada Green Dealers',
    madeAt: 'Deloitte Digital',
    serviceProvided: ['Product Architecture', 'Frontend Development'],
    link: 'https://www.hondacanada.ca/greendealers',
    canadaOnly: true,
  },
  {
    year: '2018',
    project: 'Canadian Olympic Committee Website',
    madeAt: 'Deloitte Digital',
    serviceProvided: ['Product Architecture', 'Frontend Development'],
    link: 'https://olympic.ca',
  },
  {
    year: '2018',
    project: 'Coca Cola USA Accessibility Audit',
    madeAt: 'Deloitte Digital',
    serviceProvided: ['Accessibility Audit', 'Research'],
    link: 'https://coca-colahellenic.com/en/accessibility',
  },
  {
    year: '2018',
    project: 'RBC Omnichannel Banking',
    madeAt: 'RBC',
    serviceProvided: [
      'Tech Direction',
      'Product Architecture',
      'Frontend Development',
    ],
    link: 'https://rbcroyalbank.com/ways-to-bank/online-banking/index.html',
    authRequired: true,
  },
  {
    year: '2017',
    project: 'RBC Mortgage Calculators and Tools',
    madeAt: 'RBC',
    serviceProvided: [
      'Tech Direction',
      'Product Architecture',
      'Frontend Development',
    ],
    link: 'https://rbcroyalbank.com/mortgages/mortgage-calculators.html',
    authRequired: true,
  },
  {
    year: '2017',
    project: 'RBC My Advisor',
    madeAt: 'RBC',
    serviceProvided: [
      'Tech Advisor',
      'Product Architecture',
      'Frontend Development',
    ],
    link: 'https://rbcroyalbank.com/investments/myadvisor.html',
    authRequired: true,
  },
  {
    year: '16/18',
    project: 'RBC Mobile App',
    madeAt: 'RBC',
    serviceProvided: [
      'Tech Advisor',
      'Cross Functional Collaboration',
      'Frontend Development',
    ],
    link: 'https://www.rbcroyalbank.com/ways-to-bank/mobile/rbc-mobile-app/index.html',
    authRequired: true,
  },
  {
    year: '14/18',
    project: 'RBC Personal Online Banking',
    madeAt: 'Lab 829/RBC',
    serviceProvided: [
      'Tech Direction',
      'Cross Functional Collaboration',
      'Frontend Development',
    ],
    link: 'https://rbcroyalbank.com/personal.html',
    authRequired: true,
  },
  {
    year: '11/14',
    project: 'Ontario.ca',
    madeAt: 'Government of Ontario',
    serviceProvided: [
      'Product Architecture',
      'Design System Development',
      'Frontend Development',
      'a11y',
    ],
    link: 'https://ontario.ca',
  },
  {
    year: '11/14',
    project: 'Newsroom Ontario',
    madeAt: 'Government of Ontario',
    serviceProvided: [
      'Product Architecture',
      'Design System Development',
      'Frontend Development',
      'a11y',
    ],
    link: 'https://news.ontario.ca/en',
  },
];

// Social media URLs
export const socialMediaLinks = {
  linkedIn: 'https://linkedin.com/in/julianpinedayyz',
  github: 'https://github.com/julianpinedayyz',
};