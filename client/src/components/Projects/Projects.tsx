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
            <div className="flex justify-center items-center h-64">
                <Loader />
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-24">
                {projects.map((project, idx) => (
                    <Suspense
                        key={project.id}
                        fallback={<div className="h-96 glass-card rounded-xl animate-pulse"></div>}
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
                            isEven={idx % 2 === 0}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default Projects;