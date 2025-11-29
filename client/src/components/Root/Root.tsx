import { Outlet } from "react-router-dom";
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

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [])


    return (
        <div className="relative min-h-screen bg-dark text-light overflow-hidden selection:bg-primary/20 selection:text-primary">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <VerticalNavbar />

            <div className="flex-grow pb-24 lg:pb-0 lg:pl-32 px-4 md:px-8">
                <Outlet />
                <Footer />
            </div>

            {/* Scroll to top button */}
            <button
                className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-dark-card border border-white/10 text-primary shadow-lg shadow-primary/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-primary/40 ${hideScrollBtn ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}
                onClick={() => Scroller(`body`, 1257)}
            >
                <img src={UpArrow} className="w-6 h-6" alt="Scroll to top" />
            </button>

            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
                toastClassName="!bg-dark-lighter !text-light !border !border-white/10 !rounded-lg !shadow-xl"
            />
        </div>
    );
};

export default Root;