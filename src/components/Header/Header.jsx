import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Header = () => {
    return (
        <div className="h-20 px-2 py-2 flex justify-between items-center sticky top-0 left-0 right-0 border-b-2 border-[#f5950a] backdrop-blur-3xl z-[750]">
            <Link to={'/'} className="font-caveat text-3xl font-medium hover:scale-[101%] duration-700 select-none" draggable='false'>Motiur Rahman Mizan</Link>
            <div className="flex justify-center items-center gap-7">
                <Link><Button buttonText={'Blog'} size={'small'} negate /></Link>
                <Link><Button buttonText={'Hire Me'} size={'small'} /></Link>
            </div>
        </div>
    );
};

export default Header;