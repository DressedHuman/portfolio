import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './TypedCursor.css';

const Intro = () => {
    const myTitle = useRef<HTMLSpanElement | null>(null);


    useEffect(() => {
        const typed = new Typed(myTitle.current, {
            strings: ['Programmer', 'Web Developer', 'Problem Solver', 'Sudoku Solver', ], //.map(str => str + '.'),
            typeSpeed: 75,
            backSpeed: 57,
            backDelay: 2257,
            loop: true,
            loopCount: Infinity,
            smartBackspace: true,
            cursorChar: ' ·'
        });

        return () => typed.destroy();
    }, [])

    return (
        <div className="flex flex-col justify-start items-start">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-open_sans text-[#dddeee]/75">
                Hi! I&apos;m <br />
                <span className="font-ubuntu text-2xl md:text-3xl lg:text-5xl text-[#dddeee]">Motiur Rahman Mizan,</span>
            </h2>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium font-ubuntu text-[green]">a passionate <span className="text-xl md:text-2xl lg:text-3xl font-medium font-ubuntu text-[goldenrod]" ref={myTitle}></span></h2>
        </div>
    );
};

export default Intro;