import lab829Image from '../assets/experience/lab829.jpg';
import criticalmassImage from '../assets/experience/criticalmass.png';
import deloitteImage from '../assets/experience/deloittedigital.png';
import rbcImage from '../assets/experience/rbc.jpg';
import type { ImageMetadata } from 'astro:assets'; // Import the type

// Define the type for the status object
interface Status {
  type: 'active' | 'previous';
  label: string;
}

// Define the type for each experience object
export interface Experience {
  year: string;
  role: string;
  company: string;
  period: string;
  position: string;
  subtitle: string;
  status: Status;
  description: string[];
  skills: string[];
  impact: string[];
  imageUrl: ImageMetadata;
}

// LinkedIn URL and resume file path
export const linkedInUrl = 'https://linkedin.com/in/julianpinedayyz';
export const resumeFilePath = '/Julian Pineda - 5v4.pdf'; // Keep the path relative to the public folder

// Experiences data array with type annotation
export const experiences: Experience[] = [
  {
    year: '05/25',
    role: 'Lab 829',
    company: 'Canada/Worldwide',
    period: 'September 2005 - Present',
    position: 'Director of Technology',
    subtitle: 'Formerly Miroamarillo Studio',
    status: { type: 'active', label: 'Active' },
    description: [
      'Partnered with clients worldwide, including leading fintech and retail organizations, to deliver transformative digital solutions tailored to their business needs.',
      'Spearheaded projects such as marketing data-driven personalization initiatives, enrollment wizards for fintech platforms, and the seamless integration of innovative AI-based solutions into existing client infrastructures.',
      'Directed initiatives that reached over 5 million users, significantly enhancing customer retention rates and unlocking over $10 million in new annual revenue streams.',
      'Championed accessibility and inclusive design to strengthen brand-audience connections, fostering trust and loyalty.',
      'Oversaw end-to-end implementation and deployment of digital solutions.',
    ],
    skills: [
      'Global Client Collaboration',
      'AI Integration',
      'Customer Retention Strategies',
      'Revenue Growth',
      'Accessibility Consulting',
      'Market Activation Strategies',
      'Solution Deployment',
    ],
    impact: [
      '5M+ Users Reached',
      '$10M+ Revenue Generated',
      'Multiple Global Markets',
      'Enhanced Customer Retention',
    ],
    imageUrl: lab829Image,
  },
  {
    year: '21/22',
    role: 'Critical Mass',
    company: 'Canada/UK/Central America/US',
    period: 'July 2021 - June 2022',
    position: 'Director of Technology',
    subtitle: '',
    status: { type: 'previous', label: 'Previous' },
    description: [
      'Directed high-impact personalization and lease renewal projects for Nissan and Infiniti, engaging over 1 million customers and driving brand loyalty.',
      'Led the successful launch of the Nissan Ariya campaign, orchestrating cross-functional teams of 50 members across the UK, Central America, Canada, and the US.',
      'Spearheaded the hiring, onboarding, and retention strategy for new team members, including developing an innovative onboarding platform that reduced onboarding time by 50%.',
      'Partnered with marketing, design, and revenue teams to align customer-focused initiatives with business objectives.',
      'Led product management and innovation initiatives with internal and external stakeholders.',
    ],
    skills: [
      'Front-End Direction',
      'Global Team Leadership',
      'Campaign Management',
      'Customer Personalization',
      'Onboarding Optimization',
      'Cross-Functional Collaboration',
      'Digital Strategy',
      'Revenue Growth',
    ],
    impact: [
      '1M+ Customers Engaged',
      '50% Reduced Onboarding Time',
      '50+ Team Members Led',
      'Multiple Global Regions',
    ],
    imageUrl: criticalmassImage,
  },
  {
    year: '18/19',
    role: 'Deloitte Digital',
    company: 'Canada/US',
    period: 'May 2018 - July 2019',
    position:
      'Director of Front End Engineering, Accessibility Strategy and Digital Integration',
    subtitle: '',
    status: { type: 'previous', label: 'Previous' },
    description: [
      'Directed the launch of PcExpress, a digital platform that reached over 4 million users monthly, driving significant engagement and customer retention.',
      'Led TD Canada Trust personalization initiative designed to connect with over 6 million users across Canada.',
      'Orchestrated marketing campaigns for Loblaws, achieving seasonal outreach to over 2 million users per campaign.',
      'Championed innovation by integrating accessibility strategies into high-profile projects.',
      'Oversaw budgeting and resource allocation for an annual portfolio valued at $2.5 million.',
    ],
    skills: [
      'Campaign Leadership',
      'Personalization Strategy',
      'User Engagement',
      'Accessibility Integration',
      'Budget Management',
      'Digital Platforms',
    ],
    impact: [
      '4M+ Monthly Users',
      '6M+ Canadians Reached',
      '2M+ Campaign Reach',
      '$2.5M Budget Managed',
    ],
    imageUrl: deloitteImage,
  },
  {
    year: '16/18',
    role: 'Royal Bank of Canada',
    company: 'Canada',
    period: 'July 2016 - May 2018',
    position:
      'Director of Front-End Development - Online Banking & Omnichannel',
    subtitle: '',
    status: { type: 'previous', label: 'Previous' },
    description: [
      'Scaled the front-end development team from 2 to 20 members, managing 18 concurrent projects for over 8 million users.',
      'Delivered a strategic front-end roadmap that improved development efficiency, integrating multiple technology platforms.',
      'Reduced accessibility bugs by 90% before the first QA cycle through best practices implementation.',
      'Accelerated product delivery timelines by developing an in-house framework and optimizing processes.',
      'Led cross-functional collaboration to define customer journeys and enhance user experience across desktop and mobile.',
      'Managed a $2.5 million annual budget, optimizing resource allocation and driving product management initiatives.',
    ],
    skills: [
      'Enterprise Strategy',
      'Team Scaling',
      'Accessibility',
      'Platform Integration',
      'Agile Development',
      'Budget Optimization',
    ],
    impact: [
      '8M+ Users Impacted',
      '90% Fewer Accessibility Bugs',
      '18 Concurrent Projects',
      '$2.5M Budget Managed',
    ],
    imageUrl: rbcImage,
  },
];