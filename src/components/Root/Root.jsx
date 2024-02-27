import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import VerticalNavbar from "../Shared/NavBar/VerticalNavbar/VerticalNavbar";

const Root = () => {
    return (
        <div className="space-y-7">
            <Header />
            <div className="flex">
                <VerticalNavbar />
                <div className="flex-grow ml-[57px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Root;