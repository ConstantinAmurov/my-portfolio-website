import { Skill } from '@/types/skill';

const trimLen: number = -1;
const skills: Skill[] = [
  {
    name: 'Software Engineering',
    thumbnail: '/images/skills/software-engineering.jpg',
    description: `I design and develop scalable front-end architectures with a strong emphasis on performance, maintainability, and seamless API communication. My expertise includes TypeScript, React.js, and Next.js, where I leverage features like React Server Components, Next.js Middleware, and dynamic rendering strategies. I work closely with back-end teams to optimize GraphQL and REST API interactions, ensuring efficient data fetching, caching, and revalidation.`
  },
  {
    name: 'Web Development',
    thumbnail: '/images/skills/web-development.jpg',
    description: `I build responsive, high-performance web applications using TypeScript, React.js, GraphQL, and Apollo Client. I focus on improving SSR and ISR caching with Next.js, optimizing Lighthouse scores through lazy loading, preloading strategies, and image optimizations. I enhance user experience by implementing state management solutions like Zustand, Redux Toolkit for efficient data handling.`
  },
  {
    name: 'Back-End Development',
    thumbnail: '/images/skills/backend-development.png',
    description: `I have experience in back-end development using Node.js, Nest.js, and Laravel for building efficient, scalable APIs. I optimize API performance with caching mechanisms like Redis, improve database queries using Prisma and TypeORM, and handle real-time data through WebSockets and GraphQL subscriptions. My work includes authentication flows with JWT and OAuth, as well as integrating external services like Adyen for payment processing.`
  },
  {
    name: 'Architecture & Integration',
    thumbnail: '/images/skills/architecture.png',
    description: `I design and implement scalable system integrations, such as Adyen payment solutions for multiple markets, optimizing API consumption and front-end caching strategies. My experience includes implementing feature flags for A/B testing, designing microservices architectures, and leveraging serverless functions (AWS Lambda, Vercel Edge Functions) for performance optimization. I ensure smooth communication between services using message queues like RabbitMQ and event-driven architectures.`
  },
  {
    name: 'Software Quality',
    thumbnail: '/images/skills/software-testing.png',
    description: `I apply software quality principles by implementing testing strategies for both front-end and back-end applications. I use Jest and React Testing Library for unit and integration testing, Cypress and Playwright for end-to-end testing, and Selenium for automated browser testing. For mobile testing, I have experience using Espresso. I emphasize continuous integration (CI) with GitHub Actions and GitLab CI/CD to automate test execution and maintain robust codebases.`
  }
];


export { trimLen, skills };
