import { Skill } from '@/types/skill';

const trimLen: number = -1;

const skills: Skill[] = [
  {
    name: 'Software Engineering',
    thumbnail: '/images/skills/software-engineering.jpg',
    description: `I specialize in building scalable web systems and creating robust architectures for integrations. I focus on front-end development with React.js and Next.js while collaborating closely with back-end teams for smooth service communication.`
  },
  {
    name: 'Web Development',
    thumbnail: '/images/skills/web-development.jpg',
    description: `I develop responsive, user-friendly web applications with TypeScript, React.js, and GraphQL, optimizing front-end performance and ensuring seamless user experiences.`
  },
  {
    name: 'Back-End Development',
    thumbnail: '/images/skills/back-end-development.jpg',
    description: `I build and maintain server-side systems using Node.js and Laravel, optimizing APIs and ensuring performance, including real-time data handling with GraphQL.`
  },
  {
    name: 'Architecture & Integration',
    thumbnail: '/images/skills/integration.jpg',
    description: `I design scalable systems and integrations, such as Adyen payment systems, ensuring smooth data flow and performance.`
  },
  {
    name: 'Leadership & Collaboration',
    thumbnail: '/images/skills/leadership.jpg',
    description: `I lead several teams, mentor junior developers, conduct code reviews, and collaborate with stakeholders to ensure alignment with project goals.`
  }
];

export { trimLen, skills };
