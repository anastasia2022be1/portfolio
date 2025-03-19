import project01 from './../img/projects/01.jpg';
import project01Big from './../img/projects/01-big.jpg'

import project02 from './../img/projects/02.jpg';
import project02Big from './../img/projects/02-big.jpg'

import project03 from './../img/projects/03.jpg';
import project03Big from './../img/projects/03-big.jpg'

import project04 from './../img/projects/04.jpg';
import project04Big from './../img/projects/04-big.jpg'

import project05 from './../img/projects/05.jpg';
import project05Big from './../img/projects/05-big.jpg'

import project06 from './../img/projects/06.jpg';
import project06Big from './../img/projects/06-big.jpg'

export const projects = [
    {
        title: 'Gaming streaming portal',
        description: 'Description',
        skills: 'User authentication, Live streaming, Community engagement',
        technologies: 'React, Node.js, MongoDB, WebSockets',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com',
        deployLink: 'https://gaming-streaming.com', // Ссылка на развернутый проект
        id: 1,
    },
    {
        title: 'Video service',
        description: 'Description',
        skills: 'Video streaming, User management, Content moderation',
        technologies: 'React, PHP, MySQL, AWS S3',
        img: project02,
        imgBig: project02Big,
        gitHubLink: 'https://github.com',
        deployLink: 'https://video-service.com',
        id: 2
    },
    {
        title: 'Video portal',
        description: 'Description',
        skills: 'Video streaming, User management, Content moderation',
        technologies: 'React, PHP, MySQL, AWS S3',
        img: project03,
        imgBig: project03Big,
        gitHubLink: 'https://github.com',
        deployLink: 'https://video-portal.com',
        id: 3
    },
    {
        title: 'Dating app',
        description: 'Description',
        skills: 'Video streaming, User management, Content moderation',
        technologies: 'React, PHP, MySQL, AWS S3',
        img: project04,
        imgBig: project04Big,
        gitHubLink: 'https://github.com',
        deployLink: 'https://dating-app.com',
        id: 4
    },
    {
        title: 'Landing Page',
        description: 'Description',
        skills: 'Responsive design, User authentication, Payment processing',
        technologies: 'HTML5, CSS, JavaScript',
        img: project05,
        imgBig: project05Big,
        gitHubLink: 'https://github.com/anastasia2022be1/dior',
        deployLink: 'https://anastasia2022be1.github.io/dior/',
        id: 5
    },
    {
        title: 'Meal Plan Generator',
        description: 'An AI-powered meal planning app that generates personalized meal plans based on user preferences and dietary restrictions.',
        skills: 'AI-driven recommendations, Payment processing, User authentication',
        technologies: 'Next.js, TypeScript, TailwindCSS, PostgreSQL, Clerk, Stripe, OpenAI API, Prisma, React Query',
        img: project06,
        imgBig: project06Big,
        gitHubLink: 'https://github.com/anastasia2022be1/meal-plan',
        id: 6
    }
];
