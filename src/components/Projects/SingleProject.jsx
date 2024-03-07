import PropTypes from 'prop-types';

const SingleProject = ({ projectName, projectType, projectDetails, projectFeatures, projectTechnologies, projectMockup }) => {
    return (
        <div className='grid grid-cols-2 auto-rows-max gap-7 p-2'>
            <div className='p-5'>
                <div className='border-b border-white/57 border-dashed pb-2 mb-3'>
                    {/* project name */}
                    <h2 className='text-2xl font-medium font-ubuntu text-[#5D8AA8]'>{projectName}</h2>

                    {/* project type */}
                    <p className='text-base font-normal text-[green]'>{projectType}</p>
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
                <img src={projectMockup} className='absolute top-0 left-0 w-full h-full object-cover rounded' alt={projectName} draggable='true' />
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
}

export default SingleProject;