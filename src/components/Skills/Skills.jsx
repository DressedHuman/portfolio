import Skill from "./Skill";

const Skills = () => {
    const skillsInfo = [
        {
            skillName: 'Critical Thinking',
            progress: 75,
            textColor: 'green',
            fontSize: 0,
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'Problem Solving',
            progress: 70,
            textColor: 'green',
            fontSize: 0,
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'JavaScript',
            progress: 82,
            textColor: 'goldenrod',
            fontSize: 24,
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'React',
            progress: 85,
            textColor: 'goldenrod',
            fontSize: 24,
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'React Router DOM',
            progress: 80,
            textColor: '',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Tailwind CSS',
            progress: 95,
            textColor: '',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Python',
            progress: 92,
            textColor: 'green',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Django',
            progress: 75,
            textColor: 'green',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        },
        /* {
            skillName: 'Singing',
            progress: 75,
            textColor: 'skyblue',
            fontSize: 0,
            progressColor: 'skyblue',
            bgColor: '',
        } */
    ]
    return (
        <div className="w-[90%] mx-auto space-y-12">
            <h2 className="font-ubuntu text-3xl font-medium text-center">Skills</h2>
            <div className="grid grid-cols-4 auto-rows-max gap-7 scale-[90%]">
                {
                    skillsInfo.map((skillInfo, idx) => <Skill
                        key={idx}
                        skillName={skillInfo.skillName}
                        skillPercent={skillInfo.progress}
                        fontSize={skillInfo.fontSize}
                        textColor={skillInfo.textColor}
                        progressColor={skillInfo.progressColor}
                        bgColor={'#dddeee27'}
                    />)
                }
            </div>
        </div>
    );
};

export default Skills;