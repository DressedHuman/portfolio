import { lazy, Suspense, useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { PropjectTechnologiesType } from './SingleProject';
import axios from 'axios';

interface ProjectInfo {
    id: number;
    name: string;
    type: string;
    github_link: string;
    github_frontend_link: string;
    github_backend_link?: string;
    live_link: string;
    description: string;
    features: Array<{ feature_text: string }>;
    technologies: PropjectTechnologiesType;
    mockup_image: string;
}

const SingleProject = lazy(() => import('./SingleProject'));

const Projects = () => {
    const [projects, setProjects] = useState<ProjectInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await axios.get(`${API_URL}/api/projects/`);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-[95%] mx-auto flex justify-center items-center h-64">
                <Loader />
            </div>
        );
    }

    return (
        <div className="w-[95%] mx-auto space-y-3 md:space-y-5 lg:space-y-12">
            <h2 className="font-ubuntu text-xl md:text-2xl lg:text-3xl font-medium text-center">Projects</h2>
            <div className='space-y-3 md:space-y-5 lg:space-y-12'>
                {projects.map((project) => (
                    <Suspense
                        key={project.id}
                        fallback={<div className='relative w-full h-full'><Loader /></div>}
                    >
                        <SingleProject
                            projectName={project.name}
                            projectType={project.type}
                            projectGithubSourceLink={project.github_link}
                            projectGithubFrontendLink={project.github_frontend_link}
                            projectGithubBackendLink={project.github_backend_link}
                            projectLiveLink={project.live_link}
                            projectDetails={project.description}
                            projectFeatures={project.features.map(f => f.feature_text)}
                            projectTechnologies={project.technologies}
                            projectMockup={project.mockup_image}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default Projects;