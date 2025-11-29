import { useNavigate, useLocation } from "react-router-dom";
import { Scroller } from "../../../../javascripts/Scroller/Scroller";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineTool } from 'react-icons/ai';
import { useState, useEffect } from "react";

const VerticalNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', icon: AiOutlineHome, label: 'Home', path: '/' },
        { id: 'about', icon: AiOutlineUser, label: 'About', path: '/#about' },
        { id: 'skills', icon: AiOutlineTool, label: 'Skills', path: '/#skills' },
        { id: 'projects', icon: AiOutlineProject, label: 'Projects', path: '/#projects' },
        { id: 'contact', icon: AiOutlineMail, label: 'Contact', path: '/hire-me' },
    ];

    const handleNavClick = async (item: typeof navItems[0]) => {
        if (item.path.startsWith('/#')) {
            if (location.pathname !== '/') {
                await navigate('/');
                setTimeout(() => Scroller(`#${item.id}`, 1000), 100);
            } else {
                Scroller(`#${item.id}`, 1000);
            }
        } else {
            navigate(item.path);
            window.scrollTo(0, 0);
        }
        setActiveSection(item.id);
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== '/') return;

            const sections = ['home', 'about', 'skills', 'projects'];
            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                const element = document.getElementById(section === 'home' ? 'root' : section);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:translate-x-0 z-50">
            <div className="glass-panel px-4 py-3 lg:px-3 lg:py-6 rounded-full flex flex-row lg:flex-col gap-6 lg:gap-8 shadow-2xl shadow-primary/10">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item)}
                        className="group relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12"
                    >
                        {/* Tooltip */}
                        <span className="absolute -top-10 lg:top-1/2 lg:left-14 lg:-translate-y-1/2 px-3 py-1 bg-dark-lighter border border-white/10 rounded-md text-xs font-medium text-light opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                            {item.label}
                        </span>

                        {/* Icon Container */}
                        <div className={`relative z-10 flex items-center justify-center w-full h-full rounded-full transition-all duration-300 ${activeSection === item.id
                                ? 'bg-primary text-dark shadow-[0_0_20px_rgba(0,242,255,0.5)] scale-110'
                                : 'text-text-secondary hover:text-primary hover:bg-white/5'
                            }`}>
                            <item.icon className="text-xl lg:text-2xl" />
                        </div>

                        {/* Active Indicator Dot (Mobile) */}
                        {activeSection === item.id && (
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full lg:hidden"></span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VerticalNavbar;