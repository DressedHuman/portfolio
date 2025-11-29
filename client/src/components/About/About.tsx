import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MotiurRahmanMizan from '../../assets/MotiurRahmanMizan.webp';
import facebook from '../../../src/assets/icons/facebook.svg';
import github from '../../../src/assets/icons/Github.svg';
import linkedin from '../../../src/assets/icons/linkedin.svg';
import twitter from '../../../src/assets/icons/Twitter.svg';
import ResumeDownloadButton from '../Shared/ResumeDownloadButton';
import axios from 'axios';

type AboutInfoType = [string, string];

interface AboutData {
    name: string;
    title: string;
    address: string;
    email: string;
    phone: string;
    bio: string;
    github_url: string;
    linkedin_url: string;
    facebook_url: string;
    twitter_url: string;
    profile_image: string | null;
}

const About = () => {
    const [aboutData, setAboutData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAboutData();
    }, []);

    const fetchAboutData = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await axios.get(`${API_URL}/api/about/`);
            setAboutData(response.data);
        } catch (error) {
            console.error('Error fetching about data:', error);
            // Fallback to default data if API fails
            setAboutData({
                name: 'Motiur Rahman Mizan',
                title: 'Web Developer',
                address: 'Rangpur, Bangladesh',
                email: 'motiur.rahman.mizan@gmail.com',
                phone: '+8801315243425',
                bio: "I'm a passionate programmer and web developer with a hunger for efficient problem solving. I have 3+ years of personal programming experience with Python! Though I'm currently working with React for frontend and Django for backend, I can learn any technology within a short period of time based upon my stronger💪🏿 foundational programming and problem solving skills. So, you can undoubtedly put your trust on me to take me in your next project for greater success! I hope,\nsomething better is waiting!🙂",
                github_url: 'https://github.com/DressedHuman',
                linkedin_url: 'https://www.linkedin.com/in/dressedhuman/',
                facebook_url: 'https://facebook.com/dressed.human',
                twitter_url: 'https://twitter.com/dressed_human',
                profile_image: null,
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-400">Loading...</p>
            </div>
        );
    }

    if (!aboutData) {
        return null;
    }

    const aboutInfo: AboutInfoType[] = [
        ['Name', aboutData.name],
        ['Title', aboutData.title],
        ['Address', aboutData.address],
        ['Email', aboutData.email],
        ['Phone', aboutData.phone]
    ];

    const socialInfo = [
        {
            name: "GitHub",
            url: aboutData.github_url || "https://github.com/DressedHuman",
            img: github,
            bgColor: ''
        },
        {
            name: 'LinkedIn',
            url: aboutData.linkedin_url || 'https://www.linkedin.com/in/dressedhuman/',
            img: linkedin,
            bgColor: ''
        },
        {
            name: "Facebook",
            url: aboutData.facebook_url || "https://facebook.com/dressed.human",
            img: facebook,
            bgColor: ''
        },
        {
            name: "Twitter",
            url: aboutData.twitter_url || 'https://twitter.com/dressed_human',
            img: twitter,
            bgColor: ''
        }
    ];


    return (
        <div>
            <h2 className="font-ubuntu text-xl md:text-2xl lg:text-3xl font-medium text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-5 auto-rows-max mt-3 md:mt-5 lg:mt-12">
                <div className='md:col-span-4 lg:col-span-3 px-3 md:px-5 lg:px-7 flex-1 flex flex-col justify-center items-start gap-3'>
                    <div className='w-full overflow-x-auto'>
                        <table className="text-lg lg:text-xl">
                            <tbody>
                                {aboutInfo.map((info, idx) => (
                                    <tr key={idx}>
                                        <td className="text-[forestgreen]">&#9679;&nbsp;</td>
                                        <td>{info[0]}</td>
                                        <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                        <td className="text-[greenyellow] font-medium">{info[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="hidden lg:flex justify-center items-center gap-7">
                        {socialInfo.map((social, idx) => (
                            <div key={idx} className='w-10 h-11 p-1 hover:p-0 duration-300'>
                                <a href={social.url} target='_blank' rel="noopener noreferrer">
                                    <img
                                        src={social.img}
                                        alt={social.name}
                                        className='w-full h-full rounded'
                                        style={{ backgroundColor: social.bgColor || 'transparent' }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="font-open_sans text-[#dddeee] text-justify first-letter:text-2xl first-letter:text-[magenta]">
                        {aboutData.bio}
                    </p>

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
                            src={aboutData.profile_image || MotiurRahmanMizan}
                            alt={aboutData.name}
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