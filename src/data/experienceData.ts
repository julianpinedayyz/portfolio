import lab829Image from '../assets/experience/lab829.jpg';
import criticalmassImage from '../assets/experience/criticalmass.png';
import deloitteImage from '../assets/experience/deloittedigital.png';
import rbcImage from '../assets/experience/rbc.jpg';
import type { ImageMetadata } from 'astro:assets'; // Import the type

// Define the type for each impact metric
export interface ImpactMetric {
  value: string;
  label: string;
  type: 'users' | 'revenue' | 'percentage' | 'standard';
  details?: string;
}

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
  impact: ImpactMetric[];
  imageUrl: ImageMetadata;
}

// LinkedIn URL and resume file path
export const linkedInUrl = 'https://linkedin.com/in/julianpinedayyz';
// Hardcode the full GitHub Pages URL for the resume with the new filename
export const resumeFilePath =
  'https://julianpinedayyz.github.io/portfolio/Julian_Pineda.pdf';

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
    intro:
      'A global digital transformation consultancy specializing in tailored development and activation strategies.',
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
      {
        value: '5M+',
        label: 'Users Reached',
        type: 'users',
        details: 'Global impact across multiple markets'
      },
      {
        value: '$10M+',
        label: 'Revenue Generated',
        type: 'revenue',
        details: 'New annual revenue streams'
      },
      {
        value: '3+',
        label: 'Global Markets',
        type: 'standard',
        details: 'International reach and impact'
      },
      {
        value: '18%',
        label: 'Customer Retention',
        type: 'percentage',
        details: 'Increased retention rate'
      }
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
    intro:
      'A global digital experience design agency specializing in strategic advisory, design, and marketing solutions.',
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
      {
        value: '1M+',
        label: 'Customers Engaged',
        type: 'users',
        details: 'Through personalization initiatives'
      },
      {
        value: '50%',
        label: 'Reduced Onboarding',
        type: 'percentage',
        details: 'Faster team integration'
      },
      {
        value: '50+',
        label: 'Team Members Led',
        type: 'standard',
        details: 'Across global regions'
      },
      {
        value: '4',
        label: 'Global Regions',
        type: 'standard',
        details: 'UK, Central America, Canada, US'
      }
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
    intro:
      'Collaborated with industry leaders, including Loblaws, PcExpress, Shoppers Drug Mart, Honda, Coca-Cola, and TD Canada Trust to deliver transformative digital solutions.',
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
      {
        value: '4M+',
        label: 'Monthly Users',
        type: 'users',
        details: 'PcExpress platform engagement'
      },
      {
        value: '6M+',
        label: 'Canadians Reached',
        type: 'users',
        details: 'TD Canada Trust personalization'
      },
      {
        value: '2M+',
        label: 'Campaign Reach',
        type: 'users',
        details: 'Per marketing campaign'
      },
      {
        value: '$2.5M',
        label: 'Budget Managed',
        type: 'revenue',
        details: 'Annual portfolio value'
      }
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
    intro:
      'As the Director of Front-End Development - Online Banking and Omnichannel, I:',
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
      {
        value: '8M+',
        label: 'Users Impacted',
        type: 'users',
        details: 'Online banking customers'
      },
      {
        value: '90%',
        label: 'Fewer A11y Bugs',
        type: 'percentage',
        details: 'Improved accessibility'
      },
      {
        value: '18',
        label: 'Concurrent Projects',
        type: 'standard',
        details: 'Managed simultaneously'
      },
      {
        value: '$2.5M',
        label: 'Budget Managed',
        type: 'revenue',
        details: 'Annual allocation'
      }
    ],
    imageUrl: rbcImage,
  },
];
