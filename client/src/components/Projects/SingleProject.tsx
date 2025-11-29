import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import TechnologyIcon from './TechnologyIcon';

export interface TechnologyType {
    img?: string;
    icon?: string;
    bgColor?: string;
    bg_color?: string;
    name?: string;
}

export interface PropjectTechnologiesType {
    Frontend: TechnologyType[];
    Backend?: TechnologyType[];
    Databases?: TechnologyType[];
}

interface Props {
    projectName: string;
    projectType: string;
    projectDetails: string;
    projectFeatures: string[];
    projectTechnologies?: PropjectTechnologiesType;
    projectMockup: string;
    projectGithubSourceLink: string;
    projectGithubFrontendLink: string;
    projectGithubBackendLink?: string;
    projectLiveLink: string;
    isEven?: boolean;
}

const SingleProject = ({
    projectName,
    projectType,
    projectDetails,
    projectFeatures,
    projectTechnologies,
    projectMockup,
    projectGithubSourceLink,
    projectGithubFrontendLink,
    projectGithubBackendLink,
    projectLiveLink,
    isEven
}: Props) => {

    return (
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
            {/* Project Image */}
            <div className="w-full lg:w-3/5 group relative">
                <div className={`absolute inset-0 bg-primary/20 rounded-xl transition-transform duration-300 ${isEven ? '-translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2' : 'translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2'}`}></div>
                <div className="relative rounded-xl overflow-hidden glass-card aspect-video">
                    <img
                        src={projectMockup}
                        alt={projectName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                        <a
                            href={projectGithubFrontendLink || projectGithubSourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-110"
                            title="Frontend Code"
                        >
                            <AiFillGithub size={24} />
                        </a>
                        {projectGithubBackendLink && (
                            <a
                                href={projectGithubBackendLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-110"
                                title="Backend Code"
                            >
                                <AiFillGithub size={24} />
                            </a>
                        )}
                        <a
                            href={projectLiveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-110"
                            title="Live Demo"
                        >
                            <AiOutlineLink size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className={`w-full lg:w-2/5 space-y-6 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                <div>
                    <p className="text-primary font-mono text-sm mb-2">{projectType}</p>
                    <h3 className="text-3xl font-bold text-light">{projectName}</h3>
                </div>

                <div className={`glass-panel p-6 rounded-xl text-text-secondary leading-relaxed ${isEven ? 'lg:-mr-16 lg:ml-0 relative z-10' : 'lg:-ml-16 lg:mr-0 relative z-10'}`}>
                    {projectDetails}
                </div>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {projectTechnologies?.Frontend?.map((tech, idx) => (
                        <span key={`fe-${idx}`} className="text-sm font-mono text-text-secondary hover:text-primary transition-colors">
                            {tech.name}
                        </span>
                    ))}
                    {projectTechnologies?.Backend?.map((tech, idx) => (
                        <span key={`be-${idx}`} className="text-sm font-mono text-text-secondary hover:text-primary transition-colors">
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* Features List */}
                <ul className={`space-y-2 text-sm text-text-secondary ${isEven ? 'lg:items-end' : 'lg:items-start'} flex flex-col`}>
                    {projectFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <span className="text-primary">▹</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SingleProject;