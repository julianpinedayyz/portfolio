import {
  UsersIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline';

// Define the type for an icon component (adjust as needed based on Heroicons)
type IconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Define the type for the benefits data
export interface Benefit {
  number: string;
  title: string;
  description: string;
  icon: keyof typeof iconComponents; // Use keys of iconComponents for type safety
}

// Update icon mapping with type annotation
export const iconComponents: Record<string, IconComponentType> = {
  rocket: RocketLaunchIcon,
  sparkles: SparklesIcon,
  badge: CheckBadgeIcon,
  universal: GlobeAltIcon,
  cube: CubeTransparentIcon,
  users: UsersIcon,
};

// Update benefits data array with type annotation
export const benefits: Benefit[] = [
  {
    number: '01',
    title: 'Strategic Acceleration Mindset',
    description:
      'Accelerate time-to-value through strategic alignment and proven leadership.',
    icon: 'rocket',
  },
  {
    number: '02',
    title: 'Transformative Partnership',
    description:
      'Partner on impactful solutions designed to significantly boost customer retention and drive revenue growth.',
    icon: 'sparkles',
  },
  {
    number: '03',
    title: 'Proven Enterprise Expertise',
    description:
      'Leverage stable leadership experienced in complex enterprise projects across diverse sectors.',
    icon: 'badge',
  },
  {
    number: '04',
    title: 'Accessible & Inclusive UI/UX',
    description:
      'Champion accessible and inclusive UI/UX design from the start for compliance and enhanced user experience.',
    icon: 'universal',
  },
  {
    number: '05',
    title: 'Future-Ready Experiences',
    description:
      'Build scalable, engaging digital experiences using user-centered strategies, AI insights, and omnichannel principles.',
    icon: 'cube',
  },
  {
    number: '06',
    title: 'Cross-Functional Collab',
    description:
      'Integrate seamlessly with your existing marketing, design, and technology teams to ensure cohesive execution and shared success.',
    icon: 'users',
  },
];