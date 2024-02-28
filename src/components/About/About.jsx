const About = () => {
    const aboutInfo = [
        ['Name', 'Motiur Rahman Mizan'],
        ['Title', 'Programmer, Web Developer'],
        ['Address', 'Dimla, Nilphamari'],
        ['Email', 'dressed.human@gmail.com'],
        ['Phone', '+8801315243425']
    ]
    return (
        <div>
            <h2 className="font-ubuntu text-3xl font-medium text-center">About Me</h2>
            <div className="grid grid-cols-5 auto-rows-max mt-12">
                <div className="col-span-2 flex-1 p-10 flex flex-col justify-between items-start border-r-2 border-dashed border-[gray]/35 text-[#dddeee]/75">
                    {
                        aboutInfo.map((info, idx) => <p key={idx} className="flex items-center gap-5 font-ubuntu">
                            <span className="flex justify-center items-center gap-2">
                                <span className="w-[8px] h-[8px] rounded-[50%] bg-[green]/75"></span>
                                {info[0]}&nbsp;&nbsp;:
                            </span>
                            <span className="text-xl text-[yellowgreen]/75 font-medium">{info[1]}</span>
                        </p>)
                    }
                </div>
                <p className="col-span-3 flex-1 p-7 mt-7 font-open_sans text-[#dddeee] text-center">I&apos;m a passionate programmer and web developer with a hunger for <span className="text-xl font-medium text-[goldenrod]">efficient problem solving</span>. I have <span className="text-xl font-medium text-[goldenrod]">3+</span> years of personal programming experience with <span className="text-xl font-medium text-[goldenrod]">Python</span>! Though I&apos;m currently working with <strong className="text-2xl font-medium text-amber-300">React</strong> based frontend technology, I can <span className="text-xl font-medium text-[magenta]/50">learn any technology</span> within a <span className="text-xl font-medium text-[goldenrod]">short period of time</span> based upon my <strong className="text-xl font-medium text-[orange]">stronger</strong>💪🏿 <strong className="text-xl font-medium text-[greenyellow]/75">foundational</strong> programming and problem solving skill. So, you can simply put your <span className="text-xl font-medium text-[goldenrod]">trust</span> on me to take me in your next project for <strong className="text-xl font-medium text-[orange]">greater</strong> success! I hope, <span className="text-xl font-medium text-[yellowgreen]">something better is waiting</span>!🙂</p>
            </div>
        </div>
    );
};

export default About;