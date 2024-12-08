import Skill from "./Skill";

interface SkillInfoType {
    skillName: string;
    progress: number;
    textColor: string;
    fontSize: string;
    progressColor: string;
    bgColor: string;
};

const Skills = () => {
    const skillsInfo: SkillInfoType[] = [
        {
            skillName: 'Critical Thinking',
            progress: 75,
            textColor: 'green',
            fontSize: "text-base md:text-lg",
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'Problem Solving',
            progress: 70,
            textColor: 'green',
            fontSize: "text-base md:text-lg",
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'JavaScript',
            progress: 82,
            textColor: 'goldenrod',
            fontSize: "text-[18px] md:text-[22px] lg:text-[24px]",
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'React',
            progress: 85,
            textColor: 'goldenrod',
            fontSize: "text-[18px] md:text-[22px] lg:text-[24px]",
            progressColor: '',
            bgColor: '',
        },
        {
            skillName: 'React Router DOM',
            progress: 80,
            textColor: '',
            fontSize: "text-base md:text-lg",
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Tailwind CSS',
            progress: 95,
            textColor: '',
            fontSize: "text-base md:text-lg",
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Python',
            progress: 92,
            textColor: 'green',
            fontSize: "",
            progressColor: 'green',
            bgColor: '',
        },
        {
            skillName: 'Django',
            progress: 75,
            textColor: 'green',
            fontSize: "text-base md:text-lg",
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
        <div className="w-[90%] mx-auto space-y-3 md:space-y-5 lg:space-y-12">
            <h2 className="font-ubuntu text-xl md:text-2xl lg:text-3xl font-medium text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-1 md:gap-2 lg:gap-3 *:scale-90">
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