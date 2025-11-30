import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
import MenuIcon from './menu.svg';
import DownloadIcon from '../../assets/download.svg';
import { Scroller } from "../../javascripts/Scroller/Scroller";
import { useEffect, useRef, useState } from "react";
import { fileDownloadFunction } from "../../javascripts/FileDownloader/FileDownloader";
import { aboutAPI } from "../../utils/api";

export interface NavLinkType {
    name: string;
    sectId: string;
    size: "medium" | "small" | "large" | "xlarge";
};

export const navLinksInfo: NavLinkType[] = [
    {
        name: 'About',
        sectId: '#about',
        size: 'medium',
    },
    {
        name: 'Skills',
        sectId: '#skills',
        size: 'medium',
    },
    {
        name: 'Projects',
        sectId: '#projects',
        size: 'medium',
    },
    /* {
        name: 'Experience',
        sectId: '#experience',
        size: 'medium',
    }, */
    /* {
        name: 'Contact',
        sectId: '#contact',
        size: 'medium',
    }, */
]

const Header = () => {
    const nav = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navLinkClickHandler = async (sectId: string) => {
        if (window.location.origin + "/" !== window.location.href) {
            await nav("/");
        }
        Scroller(sectId, 1257);
        setIsMenuOpen(false);
    }

    const [resumeUrl, setResumeUrl] = useState<string>("");

    useEffect(() => {
        const fetchResume = async () => {
            try {
                // Assuming 'aboutAPI' is imported or defined elsewhere, e.g., from a service file
                // For this example, I'll mock it or assume it's available.
                // If aboutAPI is not defined, this will cause a runtime error.
                // For a complete solution, aboutAPI needs to be imported or defined.
                // Example: import * as aboutAPI from '../../services/aboutAPI';
                const data = await aboutAPI.get(); // This line assumes aboutAPI exists
                if (data.resume) {
                    setResumeUrl(data.resume);
                }
            } catch (error) {
                console.error("Failed to fetch resume", error);
            }
        };
        fetchResume();
    }, []);

    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.addEventListener("wheel", (e) => {
                e.preventDefault();
            }, { passive: false });

            menuRef.current.addEventListener("touchmove", (e) => {
                e.preventDefault();
            }, { passive: false });

            menuRef.current.addEventListener("scroll", (e) => {
                e.preventDefault();
            }, { passive: false });
        }
    })

    return (
        <div className="h-20 sticky top-0 left-0 right-0 border-b-2 border-[#f5950a] z-[750] bg-slate-800">
            <div className="w-full h-full relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 right-0 px-2 py-2 flex justify-between items-center backdrop-blur-3xl z-[750]">
                    <Link to={'/'} className="font-caveat text-3xl font-medium hover:scale-[101%] duration-700 text-center">Motiur Rahman Mizan</Link>

                    {/* nav buttons */}
                    <>
                        {/* for desktop view only */}
                        <div className="hidden lg:flex justify-center items-center gap-7">
                            <Button label={'Hire Me'} size={'medium'} borderVisibility={'semiTransparent'} negate onClick={nav} onClickParams={['/hire-me']} />
                            <Button label={'Blog'} size={'small'} borderVisibility={'semiTransparent'} onClick={(url: string) => window.open(url, "_blank")} onClickParams={["https://howtodsa.com/"]} />
                        </div>

                        {/* for mobile and tablet views */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden focus:border-2 border-blue-400 p-[2px] rounded-sm"
                        >
                            <img
                                src={MenuIcon}
                                className="w-5"
                                alt="menu button"
                            />
                        </button>
                    </>

                </div>

                {/* background glowing effect */}
                <div className="absolute -bottom-[13px] left-0 right-0 z-[740] flex justify-between items-center">
                    <h2 className="text-2xl font-medium ml-20 rotate-7 bg-[blue]/75 select-none" draggable='false'>Motiur Rahman Mizan</h2>
                </div>
            </div>

            {/* mobile and tablet menu */}
            <div
                className={`${isMenuOpen ? "" : "hidden"} flex justify-end items-start w-[100vw] h-[100vh] bg-black/35`}
                ref={menuRef}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`flex flex-col w-max items-end px-7 md:px-12 py-3 z-50 bg-slate-800 text-lg font-mono font-medium`}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {/* download my resume */}
                    <button
                        key={"my-resume"}
                        onClick={() => {
                            if (resumeUrl) {
                                fileDownloadFunction(resumeUrl);
                            } else {
                                console.error("Resume URL not available");
                            }
                            setIsMenuOpen(false);
                        }}
                        className="w-full hover:bg-[gray] flex justify-end gap-2 p-1"
                    >
                        <img src={DownloadIcon} alt="download cv icon" className="w-6" />
                        My Resume
                    </button>

                    {/* hire me */}
                    <button
                        key={"hire-me"}
                        onClick={() => {
                            nav("/hire-me");
                            setIsMenuOpen(false);
                        }}
                        className="w-full hover:bg-[gray] text-right p-1"
                    >
                        Hire Me
                    </button>

                    {/* nav links */}
                    {
                        navLinksInfo.map((navLink, idx) => <button
                            key={idx}
                            onClick={() => navLinkClickHandler(navLink.sectId)}
                            className="w-full hover:bg-[gray] text-right p-1"
                        >
                            {navLink.name}
                        </button>)
                    }

                    {/* my blog */}
                    <button
                        key={"blog"}
                        onClick={() => {
                            window.open("https://howtodsa.com/", "_blank");
                            setIsMenuOpen(false);
                        }}
                        className="w-full hover:bg-[gray] text-right"
                    >
                        Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;