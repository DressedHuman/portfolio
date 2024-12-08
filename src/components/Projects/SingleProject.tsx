import github from '../../assets/icons/Github.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import TechnologyIcon from './TechnologyIcon';
import Marquee from 'react-fast-marquee';
import BlinkingLight from '../Shared/BlinkingLight/BlinkingLight';

export interface TechnologyType {
    img?: string;
    bgColor?: string;
    name?: string;
};

export interface PropjectTechnologiesType {
    Frontend: TechnologyType[];
    Backend?: TechnologyType[];
    Databases?: TechnologyType[];
};

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
}

const SingleProject = ({ projectName, projectType, projectDetails, projectFeatures, projectTechnologies, projectMockup, projectGithubSourceLink, projectGithubFrontendLink, projectGithubBackendLink, projectLiveLink }: Props) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-max gap-7 p-2'>
            <div className='p-1'>
                <div className='border-b border-white/57 border-dashed pb-2 mb-3'>
                    {/* project name */}
                    <h2 className='text-lg md:text-xl lg:text-2xl font-medium font-ubuntu text-[#5D8AA8]'>{projectName}</h2>

                    <div className='flex justify-start items-center gap-7'>
                        {/* project type */}
                        <p className='text-base font-normal text-[green]'>{projectType}</p>

                        {/* project links */}
                        <div className='flex justify-center items-center gap-3 relative'>
                            {/* project github source link */}
                            <a href={projectGithubSourceLink} target='_blank'>
                                <img src={github} className='w-7 h-7 p-1 hover:p-0' alt={`github source code link of - ${projectName}`} />
                            </a>
                            {/* project live link */}
                            <a href={projectLiveLink} target='_blank'>
                                <img src={arrowIcon} className='w-7 h-7 p-1 hover:p-0 -rotate-45' alt={`live link of - ${projectName}`} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* project details */}
                <p className='text-base font-normal font-open_sans text-slate-400 mb-3'>{projectDetails}</p>

                {/* project features */}
                <div className='flex justify-center items-start flex-col mb-3 text-[goldenrod]'>
                    <div className='flex justify-start items-center gap-1'>
                        <BlinkingLight size={21} customDivStyles={{ left: '-50%' }} />
                        <h2 className='text-[17px] lg:text-xl font-medium text-[#5D8AA8]'>Key Features</h2>
                    </div>
                    <div className='flex justify-start items-center flex-wrap gap-2'>
                        {
                            projectFeatures.map((feature, idx) => <div
                                key={idx}
                                className='flex justify-center items-start gap-2 text-sm md:text-base lg:text-lg md:font-medium'
                            >
                                <span className='text-[green]'>&#9679;</span>
                                <p className='font-open_sans'>{feature}</p>
                            </div>)
                        }
                    </div>
                </div>

                {/* technologies used */}
                <div className='flex justify-center items-start flex-col gap-2'>
                    <div className='flex justify-start items-center gap-1'>
                        <BlinkingLight size={21} customDivStyles={{ left: '-50%' }} />
                        <h2 className='text-[17px] md:text-lg lg:text-xl font-medium text-[#5D8AA8]'>Technologies Used</h2>
                    </div>

                    <Marquee
                        autoFill
                        speed={35}
                        pauseOnHover
                        style={{
                            border: '4px solid slateblue',
                            borderStyle: 'none solid',
                            padding: '3px'
                        }}
                    >
                        <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-7 px-[6px] md:px-[10px] lg:px-[14px]'>
                            {/* Frontend technologies */}
                            {
                                projectTechnologies && projectTechnologies.Frontend.length > 0 && <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-7'>
                                    {
                                        projectTechnologies.Frontend?.map((technology, idx) => <TechnologyIcon key={idx} technology={technology} />)
                                    }
                                </div>
                            }

                            {/* Backend technologies */}
                            {
                                projectTechnologies?.Backend && projectTechnologies.Backend.length > 0 && <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-7'>
                                    {
                                        projectTechnologies.Backend?.map((technology, idx) => <TechnologyIcon key={idx} technology={technology} />)
                                    }
                                </div>
                            }

                            {/* Database technologies */}
                            {
                                projectTechnologies?.Databases && projectTechnologies.Databases.length > 0 && <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-7'>
                                    {
                                        projectTechnologies.Databases?.map((technology, idx) => <TechnologyIcon key={idx} technology={technology} />)
                                    }
                                </div>
                            }
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* project mockup image */}
            <div className='w-full aspect-[16/9] lg:aspect-auto lg:h-full border-[5px] border-[green] rounded-lg relative overflow-scroll'>
                {/* actual mockup image of project */}
                <img src={projectMockup} loading='lazy' className='absolute top-0 left-0 w-full h-full object-cover rounded' alt={projectName} draggable='true' />

                {/* mouseover overlay */}
                <div className='absolute top-0 bottom-0 left-0 right-0 text-white bg-transparent hover:bg-[#000000bb] duration-300 group'>
                    <div className='w-full h-full hidden group-hover:flex justify-center items-center gap-5 text-base md:text-lg lg:text-xl font-medium font-ubuntu text-[white]'>
                        {/* source code links */}
                        <div className='flex justify-center items-center gap-5'>
                            {/* frontend */}
                            <a
                                href={projectGithubFrontendLink || projectGithubSourceLink}
                                className='flex flex-col justify-center items-center gap-[2px] p-2 bg-transparent hover:bg-[green]/75 rounded-xl'
                                target='_blank'
                            >
                                <img src={github} className='w-11 h-11 duration-300' alt={`frontend source code link of - ${projectName}`} />
                                <h2>Frontend</h2>
                            </a>

                            {/* backend */}
                            <a
                                href={projectGithubBackendLink || projectGithubSourceLink}
                                className='flex flex-col justify-center items-center gap-[2px] p-2 bg-transparent hover:bg-[green]/75 rounded-xl'
                                target='_blank'
                            >
                                <img src={github} className='w-11 h-11 duration-300' alt={`frontend source code link of - ${projectName}`} />
                                <h2>Backend</h2>
                            </a>
                        </div>
                        {/* live link */}
                        <a
                            href={projectLiveLink}
                            className='flex flex-col justify-center items-center gap-[2px] p-2 bg-transparent hover:bg-[green]/75 rounded-xl'
                            target='_blank'
                        >
                            <img src={arrowIcon} className='w-11 h-11 -rotate-45 duration-300' alt={`frontend source code link of - ${projectName}`} />
                            <h2>Live Site</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;