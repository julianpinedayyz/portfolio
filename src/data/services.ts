export interface Service {
  title: string;
  description: string;
}

export interface KeyValue {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Digital Transformation Strategy',
    description:
      'Development of comprehensive digital transformation roadmaps for organizations looking to modernize their digital presence and operations.',
  },
  {
    title: 'Technology Leadership',
    description:
      'Interim and consulting CTO services to help organizations build and scale their technology teams and infrastructure.',
  },
  {
    title: 'UI/UX Design & Development',
    description:
      'Creation of user-centered digital experiences with a focus on accessibility, usability, and conversion optimization.',
  },
  {
    title: 'Accessibility Implementation',
    description:
      'Implementation of web accessibility standards (WCAG) to ensure digital products are usable by people of all abilities.',
  },
  {
    title: 'AI & ML Integration',
    description:
      'Strategic integration of artificial intelligence and machine learning solutions to enhance product capabilities and user experiences.',
  },
  {
    title: 'Enterprise Platform Development',
    description:
      'End-to-end development of scalable enterprise platforms with robust architecture and optimized performance.',
  },
];

export const keyValues: KeyValue[] = [
  {
    number: '01',
    title: 'Strategic Vision',
    description:
      'Developing forward-thinking strategies that align technology initiatives with business objectives and industry trends.',
  },
  {
    number: '02',
    title: 'Technical Excellence',
    description:
      'Bringing technical fluency and hands-on expertise to deliver high-quality digital solutions that scale effectively.',
  },
  {
    number: '03',
    title: 'User-Centered Approach',
    description:
      'Focusing on creating accessible, intuitive digital experiences that prioritize user needs and business outcomes.',
  },
];