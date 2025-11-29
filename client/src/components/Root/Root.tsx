import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Scroller } from "../../javascripts/Scroller/Scroller";
import { useEffect, useState } from "react";
import UpArrow from '/UpArrow.svg';
import Footer from "../Footer/Footer";
import VerticalNavbar from "../Shared/NavBar/VerticalNavbar/VerticalNavbar";
import { Slide, ToastContainer } from "react-toastify";

const Root = () => {
    const [hideScrollBtn, setHideScrollBtn] = useState(true);

    useEffect(() => {
        let timeoutId: number;
        
        const handleScroll = () => {
            // Throttle scroll events
            if (timeoutId) return;
            
            timeoutId = window.setTimeout(() => {
                if (window.scrollX > 20 || window.scrollY > 0) {
                    setHideScrollBtn(false);
                } else {
                    setHideScrollBtn(true);
                }
                timeoutId = 0;
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to prevent memory leak
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [])


    return (
        <div className="space-y-7">
            <Header />
            <VerticalNavbar />
            <div className="flex-grow lg:ml-[75px]">
                <Outlet />

                {/* footer section */}
                <Footer />
            </div>

            {/* scroll to top button */}
            <button className={`fixed bottom-4 right-5 backdrop-blur-md w-10 md:w-14 h-10 md:h-14 rounded-[50%] text-[white] text-xl flex justify-center items-center md:hover:-translate-y-[17%] duration-75 ${hideScrollBtn && 'hidden'}`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                Scroller(`body`, 1257);
            }}>
                <img src={UpArrow} className="w-[110%] h-[110%]" alt="&uarr;" />
            </button>

            <div className="absolute">
                <ToastContainer
                    position="top-right"
                    autoClose={3500}
                    newestOnTop={false}
                    transition={Slide}
                    pauseOnFocusLoss={false}
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Root;