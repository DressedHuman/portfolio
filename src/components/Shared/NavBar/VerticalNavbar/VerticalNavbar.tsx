import { useNavigate } from "react-router-dom";
import { Scroller } from "../../../../javascripts/Scroller/Scroller";
import { navLinksInfo } from "../../../Header/Header";
import Nav from "./Nav";

const VerticalNavbar = () => {
    const nav = useNavigate();

    const verticalNavLinkClickHandler = async (sectId: string, duration?: number) => {
        if (window.location.origin + "/" !== window.location.href) {
            await nav("/");
        }
        Scroller(sectId, duration || 1257);
    }

    return (
        <div className="hidden lg:flex flex-col justify-center items-center z-50 fixed top-20 left-0 h-[calc(100vh-80px)]">
            {/* <h2>This is the vertical Navbar</h2> */}
            {
                navLinksInfo.map((navLink, idx) => <Nav key={idx} text={navLink.name} onClick={verticalNavLinkClickHandler} params={[navLink.sectId, 1257]} size={navLink.size} />) // toLink={navLink.pageLink}
            }
        </div>
    );
};

export default VerticalNavbar;