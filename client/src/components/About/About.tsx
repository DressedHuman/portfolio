import { Link } from 'react-router-dom';
import MotiurRahmanMizan from '../../assets/MotiurRahmanMizan.webp';
import facebook from '../../../src/assets/icons/facebook.svg';
import github from '../../../src/assets/icons/Github.svg';
import linkedin from '../../../src/assets/icons/linkedin.svg';
import twitter from '../../../src/assets/icons/Twitter.svg';
import ResumeDownloadButton from '../Shared/ResumeDownloadButton';

type AboutInfoType = [string, string];

const About = () => {
    const aboutInfo: AboutInfoType[] = [
        ['Name', 'Motiur Rahman Mizan'],
        ['Title', 'Web Developer'],
        ['Address', 'Rangpur, Bangladesh'],
        ['Email', 'motiur.rahman.mizan@gmail.com'],
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
            <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-5 auto-rows-max mt-3 md:mt-5 lg:mt-12">
                <div className='md:col-span-4 lg:col-span-3 px-3 md:px-5 lg:px-7 flex-1 flex flex-col justify-center items-start gap-3'>
                    {/* bio table */}
                    <div className='w-full overflow-x-auto'>
                        <table className="text-lg lg:text-xl">
                            <tbody>
                                {
                                    aboutInfo.map((info, idx) => <tr
                                        key={idx}
                                    >
                                        <td className="text-[forestgreen]">&#9679;&nbsp;</td>
                                        <td>{info[0]}</td>
                                        <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                        <td className="text-[greenyellow] font-medium">{info[1]}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* contact links */}
                    <div className="hidden lg:flex justify-center items-center gap-7">
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


                    {/* my brief message */}
                    <p className="font-open_sans text-[#dddeee] text-justify first-letter:text-2xl first-letter:text-[magenta]">I&apos;m a passionate programmer and web developer with a hunger for <span className="font-medium text-[goldenrod]">efficient problem solving</span>. I have <span className="font-medium text-[goldenrod]">3+</span> years of personal programming experience with <span className="font-medium text-[goldenrod]">Python</span>! Though I&apos;m currently working with <strong className="font-medium text-amber-200">React</strong> for frontend and <strong className="font-medium text-amber-200">Django</strong> for backend, I can <span className="font-medium text-amber-200">learn any technology</span> within a <span className="font-medium text-[gold]">short period of time</span> based upon my <strong className="font-medium text-[orange]">stronger</strong>💪🏿 <strong className="font-medium text-[greenyellow]">foundational</strong> programming and problem solving skills. So, you can undoubtedly put your <span className="font-medium text-[goldenrod]">trust</span> on me to take me in your next project for <strong className="font-medium text-[orange]">greater</strong> success! I hope,<br />
                        <span className="text-xl font-medium font-ginora text-[yellowgreen]">something better is waiting</span>!🙂</p>


                    {/* hire-me and resume download buttons */}
                    <div className='hidden lg:flex flex-wrap justify-center items-center gap-x-3 gap-y-1'>
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


                {/* right side with photo and socials */}
                <div className='md:col-span-3 lg:col-span-2 flex flex-col justify-between items-center pb-3 md:pb-0 space-y-3 md:space-y-5 lg:space-y-10'>
                    <div className="px-3 md:px-5 lg:px-10 flex-1 space-y-2">
                        <img
                            className='w-full hidden md:inline-block'
                            src={MotiurRahmanMizan}
                            alt="Motiur Rahman Mizan"
                        />

                        <div
                            className='space-y-2 lg:hidden'
                        >
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

                            <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-1'>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;