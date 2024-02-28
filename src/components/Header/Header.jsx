import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Header = () => {
    return (
        <div className="h-20 sticky top-0 left-0 right-0 border-b-2 border-[#f5950a] z-[750] bg-slate-800">
            <div className="w-full h-full relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 right-0 px-2 py-2 flex justify-between items-center backdrop-blur-3xl z-[750]">
                    <Link to={'/'} className="font-caveat text-3xl font-medium hover:scale-[101%] duration-700 select-none" draggable='false'>Motiur Rahman Mizan</Link>
                    <div className="flex justify-center items-center gap-7">
                        <Link><Button buttonText={'Hire Me'} size={'medium'} borderVisibility={'semiTransparent'} negate /></Link>
                        <Link><Button buttonText={'Blog'} size={'small'} borderVisibility={'semiTransparent'} /></Link>
                    </div>
                </div>
                <div className="absolute -bottom-[13px] left-0 right-0 z-[740] flex justify-between items-center">
                    <h2 className="text-3xl font-medium ml-20 rotate-7">Motiur Rahman Mizan</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;