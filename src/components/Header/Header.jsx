import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Header = () => {
    return (
        <div className="h-20 px-2 py-2 flex justify-between items-center sticky top-0 border-b-2 border-[#f5950a] backdrop-blur-3xl z-[750]">
            <Link to={'/'} className="font-caveat text-3xl font-medium">Motiur Rahman Mizan</Link>
            <Link><Button buttonText={'Hire Me'} /></Link>
        </div>
    );
};

export default Header;