import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="space-y-7">
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;