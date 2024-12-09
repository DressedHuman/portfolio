import { Link } from 'react-router-dom';
import facebook from '../../../src/assets/icons/facebook.svg';
import github from '../../../src/assets/icons/Github.svg';
import linkedin from '../../../src/assets/icons/linkedin.svg';
import twitter from '../../../src/assets/icons/Twitter.svg';
import ResumeDownloadButton from '../Shared/ResumeDownloadButton';

const About = () => {
    const aboutInfo = [
        ['Name', 'Motiur Rahman Mizan'],
        ['Title', 'Web Developer'],
        ['Address', 'Rangpur, Bangladesh'],
        ['Email', 'dressed.human@gmail.com'],
        ['Phone', '+8801315243425']
    ]

    const socialInfo = [
        {
            name: "GitHub",
            url: "https://github.com/DressedHuman",
            img: github,
            bgColor: ''
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dressedhuman/',
            img: linkedin,
            bgColor: ''
        },
        {
            name: "Facebook",
            url: "https://facebook.com/dressed.human",
            img: facebook,
            bgColor: ''
        },
        {
            name: "Twitter",
            url: 'https://twitter.com/dressed_human',
            img: twitter,
            bgColor: ''
        }
    ]


    return (
        <div>
            <h2 className="font-ubuntu text-xl md:text-2xl lg:text-3xl font-medium text-center">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 auto-rows-max mt-3 md:mt-5 lg:mt-12">
                <div className='col-span-2 flex flex-col justify-between items-center border-b-2 pb-3 md:pb-0 md:border-b-0 border-dashed border-[gray]/35 space-y-3 md:space-y-5 lg:space-y-10'>
                    <div className="px-3 md:px-5 lg:px-10 flex-1 flex flex-col gap-1 md:gap-2 lg:gap-3 justify-between items-start lg:border-r-2 lg:border-dashed lg:border-[gray]/35 text-[#dddeee]/75">
                        {
                            aboutInfo.map((info, idx) => <p key={idx} className="flex justify-center items-center gap-5 font-ubuntu text-lg md:text-xl">
                                <span className="flex justify-center items-center gap-2 text-white">
                                    <span className="text-[green]">&#9679;</span>
                                    {info[0]}&nbsp;&nbsp;:
                                </span>
                                <span className="text-[greenyellow] font-medium">{info[1]}</span>
                            </p>)
                        }
                    </div>

                    <div className='flex justify-center items-center gap-3'>
                        {/* hire me button */}
                        <Link
                            to={"/hire-me"}
                            className='px-2 hover:px-3 py-1 border-2 border-red-700 text-lg text-white font-medium font-mono hover:scale-105 rounded-md duration-300'
                        >
                            Hire Me
                        </Link>
                        {/* resume download button */}
                        <ResumeDownloadButton resumeFilePath='' />
                    </div>
                </div>
                <div className='col-span-3 flex-1 flex flex-col justify-between items-center gap-3'>
                    <p className="p-3 md:p-5 lg:p-7 font-open_sans text-white] text-center first-letter:text-2xl first-letter:text-[magenta]">I&apos;m a passionate programmer and web developer with a hunger for <span className="font-medium text-[goldenrod]">efficient problem solving</span>. I have <span className="font-medium text-[goldenrod]">3+</span> years of personal programming experience with <span className="font-medium text-[goldenrod]">Python</span>! Though I&apos;m currently working with <strong className="font-medium text-amber-200">React</strong> for frontend and <strong className="font-medium text-amber-200">Django</strong> for backend, I can <span className="font-medium text-amber-200">learn any technology</span> within a <span className="font-medium text-[gold]">short period of time</span> based upon my <strong className="font-medium text-[orange]">stronger</strong>💪🏿 <strong className="font-medium text-[greenyellow]">foundational</strong> programming and problem solving skills. So, you can undoubtedly put your <span className="font-medium text-[goldenrod]">trust</span> on me to take me in your next project for <strong className="font-medium text-[orange]">greater</strong> success! I hope,<br />
                        <span className="text-xl font-medium font-ginora text-[yellowgreen]">something better is waiting</span>!🙂</p>

                    {/* contact links */}
                    <div className="flex justify-center items-center gap-7">
                        {
                            socialInfo.map((social, idx) => <div key={idx} className='w-10 h-11 p-1 hover:p-0 duration-300'>
                                <a href={social.url} target='_blank'>
                                    <img
                                        src={social.img}
                                        alt={social.name}
                                        className={`w-full h-full rounded`}
                                        style={{
                                            backgroundColor: `${social.bgColor || 'transparent'}`
                                        }}
                                    />
                                </a>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;