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
        title: 'Nutrient App',
        description: 'A web application to track your diet, explore foods, and manage your weekly meal plan using real-time nutritional data.',
        skills: 'Food search, Nutrition tracking, Weekly meal planning, LocalStorage management',
        technologies: 'React, React Router, React Bootstrap, USDA FoodData API, LocalStorage',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com/anastasia2022be1/nutrient-counter',
        deployLink: 'https://nutrient-app.onrender.com/', 
        id: 1,
    },
    {
        title: 'Mehr Blog',
        description: 'Fullstack blog application with authentication, profile management, image uploads, and post CRUD operations.',
        skills: 'User authentication, CRUD posts, File upload, Profile editing, REST API, Swagger documentation',
        technologies: 'React, Node.js, Express, MongoDB, JWT, Swagger, Vercel, Render',
        img: project02,
        imgBig: project02Big,
        gitHubLink: 'https://github.com/anastasia2022be1/mehr-blog',
        deployLink: 'https://mehr-blog-frontend.vercel.app/',
        id: 2
    },
    {
        title: 'Talki- Chat App',
        description: 'A full-featured chat application with secure real-time messaging, group and private chats, file sharing, emoji reactions, and modern UI themes.',
        skills: 'Real-time communication, Group and private chats, File uploads, Read receipts, Emoji reactions, Authentication',
        technologies: 'React, Tailwind CSS, Node.js, Express, MongoDB, Socket.IO, JWT, Multer',
        img: project03,
        imgBig: project03Big,
        gitHubLink: 'https://github.com/anastasia2022be1/chat-app',
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
