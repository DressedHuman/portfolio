import PropTypes from 'prop-types';

const Skill = ({ skillName, skillPercent, fontSize, textColor, progressColor, bgColor, width }) => {

    return (
        <div
            className={`${width || 'w-[275px]'} flex flex-col justify-center items-center gap-2`}
        >
            {/* skill name */}
            <p
                className={`font-medium font-ubuntu`}
                style={{ 
                    color: `${textColor || 'text-[green]'}`,
                    fontSize: `${fontSize && fontSize || 18}px`
                 }}
            >{skillName}</p>

            {/* progressbar */}
            <div
                className={`w-full h-full flex justify-center items-center p-5 rounded-full`}
                style={{ backgroundColor: `${bgColor || 'rgb(55,65,81)'}` }}
            >
                <div
                    className={`h-[7px] w-full bg-[black] rounded-full relative`}
                >
                    {/* the progress */}
                    <div
                        className={`absolute -top-[1px] -bottom-[1px] left-0 w-0 rounded-full duration-300`}
                        style={{
                            width: `${typeof (skillPercent) === 'number' ? skillPercent : 0}%`,
                            backgroundColor: `${progressColor || '#ffa500'}`
                        }}
                    >
                        <span
                            style={{
                                backgroundColor: `${progressColor || '#ffa500'}`,
                            }}
                            className='absolute top-0 bottom-0 right-0 aspect-square rotate-45 rounded-sm'
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Skill.propTypes = {
    skillName: PropTypes.string,
    skillPercent: PropTypes.number,
    fontSize: PropTypes.number,
    textColor: PropTypes.string,
    progressColor: PropTypes.string,
    bgColor: PropTypes.string,
    width: PropTypes.string,
}

export default Skill;