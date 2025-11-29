import { AiFillCode, AiFillDatabase, AiFillTool } from 'react-icons/ai';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', category: 'Frontend', level: 90 },
        { name: 'React', category: 'Frontend', level: 85 },
        { name: 'TypeScript', category: 'Frontend', level: 80 },
        { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
        { name: 'Python', category: 'Backend', level: 92 },
        { name: 'Django', category: 'Backend', level: 85 },
        { name: 'PostgreSQL', category: 'Database', level: 75 },
        { name: 'Git', category: 'Tools', level: 88 },
    ];

    return (
        <div className="relative">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">My Skills</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="glass-card p-6 rounded-xl flex flex-col items-center gap-4 group hover:bg-white/5 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                            {skill.category === 'Frontend' && <AiFillCode />}
                            {skill.category === 'Backend' && <AiFillCode />}
                            {skill.category === 'Database' && <AiFillDatabase />}
                            {skill.category === 'Tools' && <AiFillTool />}
                        </div>

                        <div className="text-center">
                            <h3 className="text-lg font-medium text-light mb-1">{skill.name}</h3>
                            <p className="text-sm text-text-secondary">{skill.category}</p>
                        </div>

                        <div className="w-full h-1.5 bg-dark-lighter rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;