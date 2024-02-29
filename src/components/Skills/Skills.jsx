import Skill from "./Skill";

const Skills = () => {
    const skillsInfo = [
        {
            skillName: 'Critical Thinking',
            progress: 75,
            textColor: 'green',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Problem Solving',
            progress: 70,
            textColor: 'green',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'JavaScript',
            progress: 82,
            textColor: '',
            fontSize: 21,
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'React',
            progress: 85,
            textColor: '',
            fontSize: 21,
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
        {
            skillName: 'Singing',
            progress: 75,
            textColor: 'green',
            fontSize: 0,
            progressColor: 'green',
            bgColor: '',
        }
    ]
    return (
        <div className="space-y-12">
            <h2 className="font-ubuntu text-3xl font-medium text-center">Skills</h2>
            <div className="flex flex-wrap justify-center items-center gap-7">
                {
                    skillsInfo.map((skillInfo, idx) => <Skill key={idx} skillName={skillInfo.skillName} skillPercent={skillInfo.progress} fontSize={skillInfo.fontSize} textColor={skillInfo.textColor} progressColor={skillInfo.progressColor} bgColor={'#dddeee27'} />)
                }
            </div>
        </div>
    );
};

export default Skills;