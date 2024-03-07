import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './TypedCursor.css';

const Intro = () => {
    const myTitle = useRef();


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
        </div>
    );
};

export default Intro;