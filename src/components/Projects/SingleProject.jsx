import PropTypes from 'prop-types';
import github from '../../assets/icons/Github.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

const SingleProject = ({ projectName, projectType, projectDetails, projectFeatures, projectTechnologies, projectMockup, projectGithubSourceLink, projectLiveLink, }) => {
    return (
        <div className='grid grid-cols-2 auto-rows-max gap-7 p-2'>
            <div className='p-5'>
                <div className='border-b border-white/57 border-dashed pb-2 mb-3'>
                    {/* project name */}
                    <h2 className='text-2xl font-medium font-ubuntu text-[#5D8AA8]'>{projectName}</h2>

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
                <div className='flex justify-start items-center gap-3 flex-wrap mb-7'>
                    {
                        projectFeatures.map((feature, idx) => <div key={idx} className='flex justify-center items-center gap-2'>
                            <div className='w-2 h-2 rounded-[50%] bg-[green]'></div>
                            <p className='text-xl font-medium font-open_sans text-[#FF7F50]'>{feature}</p>
                        </div>)
                    }
                </div>

                {/* technologies used */}
                <div className='flex justify-center items-center gap-7'>
                    {/* Frontend technologies */}
                    <div className='flex justify-center items-center gap-7'>
                        {
                            projectTechnologies.Frontend?.map((technology, idx) => <div key={idx}>
                                <img src={technology?.img} className={`w-12 h-12 rounded object-contain ${technology.bgColor ? 'p-1' : ''}`} style={{
                                    backgroundColor: technology.bgColor || 'transparent',
                                }} alt={technology?.name} title={technology?.name} />
                            </div>)
                        }
                    </div>

                    {/* Backend technologies */}
                    <div className='flex justify-center items-center gap-7'>
                        {
                            projectTechnologies.Backend?.map((technology, idx) => <div key={idx}>
                                <img src={technology?.img} alt={technology?.name} title={technology?.name} className={`w-12 h-12 rounded object-contain ${technology.bgColor ? 'p-1' : ''}`} style={{
                                    backgroundColor: technology.bgColor || 'transparent',
                                }} />
                            </div>)
                        }
                    </div>

                    {/* Database technologies */}
                    <div className='flex justify-center items-center gap-7'>
                        {
                            projectTechnologies.Databases?.map((technology, idx) => <div key={idx}>
                                <img src={technology?.img} alt={technology?.name} title={technology?.name} className={`w-12 h-12 rounded object-contain ${technology.bgColor ? 'p-1' : ''}`} style={{
                                    backgroundColor: technology.bgColor || 'transparent',
                                }} />
                            </div>)
                        }
                    </div>
                </div>
            </div>

            {/* project mockup image */}
            <div className='w-full h-full border-[5px] border-[green] rounded-lg relative overflow-scroll'>
                {/* actual mockup image of project */}
                <img src={projectMockup} className='absolute top-0 left-0 w-full h-full object-cover rounded' alt={projectName} draggable='true' />

                {/* mouseover overlay */}
                <div className='absolute top-0 bottom-0 left-0 right-0 text-white bg-transparent hover:bg-[#000000bb] duration-300 group'>
                    <div className='w-full h-full hidden group-hover:flex justify-center items-center gap-5 text-xl font-medium font-ubuntu text-[white]'>
                        {/* source code links */}
                        <div className='flex justify-center items-center gap-5'>
                            {/* frontend */}
                            <a
                                href={projectGithubSourceLink}
                                className='flex flex-col justify-center items-center gap-[2px] p-2 bg-transparent hover:bg-[#E2725B] rounded-xl'
                            >
                                <img src={github} className='w-11 h-11 duration-300' alt={`frontend source code link of - ${projectName}`} />
                                <h2>Frontend</h2>
                            </a>

                            {/* backend */}
                            <a
                                href={projectGithubSourceLink}
                                className='flex flex-col justify-center items-center gap-[2px] p-2 bg-transparent hover:bg-[#E2725B] rounded-xl'
                            >
                                <img src={github} className='w-11 h-11 duration-300' alt={`frontend source code link of - ${projectName}`} />
                                <h2>Backend</h2>
                            </a>
                        </div>
                        {/* live link */}
                        <a
                            href={projectLiveLink}
                            className='flex flex-col justify-center items-center gap-[2px] p-2 bg-transparent hover:bg-[#E2725B] rounded-xl'
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

SingleProject.propTypes = {
    projectName: PropTypes.string,
    projectType: PropTypes.string,
    projectDetails: PropTypes.string,
    projectFeatures: PropTypes.array,
    projectTechnologies: PropTypes.object,
    projectMockup: PropTypes.string,
    projectGithubSourceLink: PropTypes.string,
    projectLiveLink: PropTypes.string,
}

export default SingleProject;