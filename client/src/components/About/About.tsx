import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MotiurRahmanMizan from '../../assets/MotiurRahmanMizan.webp';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import ResumeDownloadButton from '../Shared/ResumeDownloadButton';
import axios from 'axios';

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
    resume: string | null;
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
            // Fallback data
            setAboutData({
                name: 'Motiur Rahman Mizan',
                title: 'Web Developer',
                address: 'Rangpur, Bangladesh',
                email: 'motiur.rahman.mizan@gmail.com',
                phone: '+8801315243425',
                bio: "I'm a passionate programmer and web developer with a hunger for efficient problem solving. I have 3+ years of personal programming experience with Python! Though I'm currently working with React for frontend and Django for backend, I can learn any technology within a short period of time based upon my stronger foundational programming and problem solving skills.",
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

    if (loading) return <div className="animate-pulse h-96 bg-dark-card rounded-xl"></div>;
    if (!aboutData) return null;

    const socialLinks = [
        { icon: AiFillGithub, url: aboutData.github_url, label: 'GitHub' },
        { icon: AiFillLinkedin, url: aboutData.linkedin_url, label: 'LinkedIn' },
        { icon: AiFillFacebook, url: aboutData.facebook_url, label: 'Facebook' },
        { icon: AiOutlineTwitter, url: aboutData.twitter_url, label: 'Twitter' },
    ];

    return (
        <div className="relative">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">About Me</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Profile Image */}
                <div className="lg:col-span-5 relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="relative rounded-xl overflow-hidden glass-card">
                        <img
                            src={aboutData.profile_image || MotiurRahmanMizan}
                            alt={aboutData.name}
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="glass-panel p-8 rounded-xl space-y-6">
                        <p className="text-text-secondary text-lg leading-relaxed">
                            {aboutData.bio}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-light">
                            <div className="space-y-2">
                                <p className="text-sm text-text-secondary">Name</p>
                                <p className="font-medium">{aboutData.name}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-text-secondary">Email</p>
                                <a href={`mailto:${aboutData.email}`} className="font-medium hover:text-primary transition-colors">
                                    {aboutData.email}
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-text-secondary">Location</p>
                                <p className="font-medium">{aboutData.address}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-text-secondary">Phone</p>
                                <p className="font-medium">{aboutData.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            to="/hire-me"
                            className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-all duration-300"
                        >
                            Hire Me
                        </Link>
                        <ResumeDownloadButton resumeFilePath={aboutData.resume || ""} resumeDownloadName="Motiur_Rahman_Mizan_Resume.pdf" />

                        <div className="flex gap-4 ml-auto">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;