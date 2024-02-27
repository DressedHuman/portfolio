import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import VerticalNavbar from "../Shared/NavBar/VerticalNavbar/VerticalNavbar";

const Root = () => {
    return (
        <div className="space-y-7">
            <Header />
            <VerticalNavbar />
            <div className="flex-grow ml-[75px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;