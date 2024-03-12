import Schooler from '../../assets/Projects/Schooler.png';
import Portfolio from '../../assets/Projects/Portfolio.png';
import SingleProject from './SingleProject';
import javascript from '../../assets/icons/javascript.svg';
import react from '../../assets/icons/react.svg';
import reactRouter from '../../assets/icons/react-router.svg';
import html from '../../assets/icons/HTML5.svg';
import css from '../../assets/icons/CSS3.svg';
import tailwindcss from '../../assets/icons/tailwind-css.svg';
import python from '../../assets/icons/python.svg';
import django from '../../assets/icons/django.svg';
import djangoRest from '../../assets/icons/DjangoREST.svg';
import sqlite3 from '../../assets/icons/sqlite3.svg';

const Projects = () => {
    const projectsInfo = [
        {
            name: "Schooler | Let's School from Online",
            type: 'School Management System',
            githubLink: 'https://github.com/DressedHuman/Schooler',
            githubFrontendLink: 'https://github.com/DressedHuman/Schooler/tree/client',
            githubBackendLink: 'https://github.com/DressedHuman/Schooler/tree/backend-django',
            liveLink: 'https://assorted-elbow.surge.sh',
            details: "A complete school management project, developed for my high school, 'Nautara Abiunnessa B.L. High School'. The application's frontend part was developed with mainly React, React Router DOM, TailwindCSS and Vanilla JavaScript while the backend part was developed with Django, a Python based web framework along with DjangoRestFramework for flexible api development. Currently, it's using Sqlite3 as database",
            features: [
                'Different Dashboards for Teachers, Students and Parents',
                'Attendance',
                'Homework',
                'Result',
                'Routine',
                'Notice',
            ],
            technologies: {
                Frontend: [
                    {
                        name: 'Vanilla Javascript',
                        img: javascript,
                    },
                    {
                        name: 'React',
                        img: react,
                    },
                    {
                        name: 'React Router Dom',
                        img: reactRouter,
                    },
                    {
                        name: 'HTML5',
                        img: html,
                    },
                    {
                        name: 'CSS3',
                        img: css,
                    },
                    {
                        name: 'Tailwindcss',
                        img: tailwindcss,
                    },
                ],
                Backend: [
                    {
                        name: 'Python',
                        img: python,
                    },
                    {
                        name: 'Django',
                        img: django,
                    },
                    {
                        name: 'Django Rest Framework',
                        img: djangoRest,
                        bgColor: '#FFFFFF',
                    },
                ],
                Databases: [
                    {
                        name: 'Sqlite3',
                        img: sqlite3,
                    },
                ]
            },
            mockup: Schooler,
        },
        {
            name: "Motiur Rahman Mizan | Frontend Developer",
            type: 'Portfolio Web',
            githubLink: 'https://github.com/DressedHuman/Portfolio',
            githubFrontendLink: 'https://github.com/DressedHuman/portfolio/tree/master',
            liveLink: 'https://mrmizan.surge.sh',
            details: "A portfolio website that can be used for showcasing skills, projects, experience and other useful information, completely developed using reusable React components. We believe that, reusability of components can give developers the power of efficient and faster development experience.",
            features: [
                'Custom Cursor',
                'Side Navbar',
                'Button Hover Effects',
                'Multi-sized Buttons',
                'Go To Top Button',
                'Showcasing Projects',
                'Showcasing Skills',
                'Professional Look',
                'About Section',
            ],
            technologies: {
                Frontend: [
                    {
                        name: 'Vanilla Javascript',
                        img: javascript,
                    },
                    {
                        name: 'React',
                        img: react,
                    },
                    {
                        name: 'React Router Dom',
                        img: reactRouter,
                    },
                    {
                        name: 'HTML5',
                        img: html,
                    },
                    {
                        name: 'CSS3',
                        img: css,
                    },
                    {
                        name: 'Tailwindcss',
                        img: tailwindcss,
                    },
                ],
                Backend: [
                    /* {
                        name: 'Python',
                        img: python,
                    },
                    {
                        name: 'Django',
                        img: django,
                    },
                    {
                        name: 'Django Rest Framework',
                        img: djangoRest,
                        bgColor: '#FFFFFF',
                    }, */
                ],
                Databases: [
                    // {
                    //     name: 'Sqlite3',
                    //     img: sqlite3,
                    // },
                ]
            },
            mockup: Portfolio,
        },
    ]

    return (
        <div className="w-[95%] mx-auto space-y-12">
            <h2 className="font-ubuntu text-3xl font-medium text-center">Projects</h2>
            <div className='space-y-12'>
                {
                    projectsInfo.map((project, idx) => <SingleProject
                        key={idx}
                        projectName={project.name}
                        projectType={project.type}
                        projectGithubSourceLink={project.githubLink}
                        projectGithubFrontendLink={project.githubFrontendLink}
                        projectGithubBackendLink={project.githubBackendLink}
                        projectLiveLink={project.liveLink}
                        projectDetails={project.details}
                        projectFeatures={project.features}
                        projectTechnologies={project.technologies}
                        projectMockup={project.mockup}
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;