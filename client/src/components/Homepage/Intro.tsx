import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './TypedCursor.css';
import ResumeDownloadButton from "../Shared/ResumeDownloadButton";
import EmailMe from "../Shared/EmailMe";

const Intro = () => {
    const myTitle = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const typed = new Typed(myTitle.current, {
            strings: ['Programmer', 'Web Developer', 'Problem Solver', 'Tech Enthusiast'],
            typeSpeed: 75,
            backSpeed: 57,
            backDelay: 2257,
            loop: true,
            loopCount: Infinity,
            smartBackspace: true,
            cursorChar: '|'
        });

        return () => typed.destroy();
    }, [])

    return (
        <div className="flex flex-col justify-center items-start gap-6 lg:gap-8 min-h-[60vh] lg:min-h-[80vh] relative z-10">
            <div className="space-y-2">
                <h3 className="text-primary text-lg md:text-xl font-mono tracking-wider animate-fade-in-up">
                    Hi, my name is
                </h3>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-light tracking-tight animate-fade-in-up animation-delay-100">
                    Motiur Rahman Mizan.
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-secondary animate-fade-in-up animation-delay-200">
                    I build things for the web.
                </h2>
            </div>

            <p className="max-w-xl text-text-secondary text-lg md:text-xl leading-relaxed animate-fade-in-up animation-delay-300">
                I'm a passionate <span className="text-primary font-semibold" ref={myTitle}></span> specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400 mt-4">
                <ResumeDownloadButton resumeFilePath="" resumeDownloadName="" />
                <EmailMe email="motiur.rahman.mizan@gmail.com" />
            </div>
        </div>
    );
};

export default Intro;