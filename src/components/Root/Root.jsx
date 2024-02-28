import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import VerticalNavbar from "../Shared/NavBar/VerticalNavbar/VerticalNavbar";
import { Scroller } from "../../javascripts/Scroller/Scroller";
import { useEffect, useState } from "react";
import UpArrow from '/UpArrow.svg';

const Root = () => {
    const [hideScrollBtn, setHideScrollBtn] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollX > 20 || window.scrollY > 0){
                setHideScrollBtn(false);
            }
            else{
                setHideScrollBtn(true);
            }
        })
    }, [])
    return (
        <div className="space-y-7">
            <Header />
            <VerticalNavbar />
            <div className="flex-grow ml-[75px]">
                <Outlet />
            </div>

            {/* scroll to top button */}
            <button className={`fixed bottom-2 right-3 w-12 h-12 rounded-[50%] bg-black/75 text-[white] text-xl flex justify-center items-center ${hideScrollBtn && 'hidden'}`} onClick={Scroller}>
                <img src={UpArrow} className="w-[35px] h-[35px] animate-bounce hover:animate-none" alt="&uarr;" />
            </button>
        </div>
    );
};

export default Root;