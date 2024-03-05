import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './TypedCursor.css';
import facebook from '../../../src/assets/icons/facebook.svg';
import github from '../../../src/assets/icons/Github.svg';
import linkedin from '../../../src/assets/icons/linkedin.svg';
import twitter from '../../../src/assets/icons/Twitter.svg';

const Intro = () => {
    const myTitle = useRef();

    const socialInfo = [
        {
            name: "GitHub",
            url: "https://github.com/DressedHuman",
            img: github,
        },
        {
            name: "Facebook",
            url: "https://facebook.com/dressed.human",
            img: facebook,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dressedhuman/',
            img: linkedin,
        },
        {
            name: "Twitter",
            url: 'https://twitter.com/dressed_human',
            img: twitter,
        }
    ]

    useEffect(() => {
        const typed = new Typed(myTitle.current, {
            strings: ['Programmer', 'Web Developer', 'Front-End Developer', 'React Developer',].map(str => str + '.'),
            typeSpeed: 175,
            backSpeed: 57,
            backDelay: 2257,
            loop: true,
            loopCount: Infinity,
            smartBackspace: true,
            // cursorChar: '⁞'
        });

        return () => typed.destroy();
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-open_sans text-[#dddeee]/75">
                Hi! I&apos;m <br />
                <span className="font-ubuntu text-5xl text-[#dddeee]">Motiur Rahman Mizan,</span>
            </h2>
            <h2 className="text-2xl font-medium font-ubuntu text-[green]">a passionate <span className="text-3xl font-medium font-ubuntu text-[goldenrod]" ref={myTitle}></span></h2>
            <div className="flex justify-center items-center gap-7">
                {
                    socialInfo.map((social, idx) => <a href={social.url} key={idx}>
                        <img src={social.img} alt={social.name} className="w-7 h-7" />
                    </a>)
                }
            </div>
        </div>
    );
};

export default Intro;