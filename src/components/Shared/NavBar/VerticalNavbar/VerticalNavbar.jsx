import { Scroller } from "../../../../javascripts/Scroller/Scroller";
import Nav from "./Nav";

const VerticalNavbar = () => {
    const navLinksInfo = [
        {
            name: 'Skills',
            sectId: 'skills',
            size: 'medium',
        },
        {
            name: 'Projects',
            sectId: 'projects',
            size: 'medium',
        },
        {
            name: 'About',
            sectId: 'about',
            size: 'medium',
        },
        {
            name: 'Contact',
            sectId: 'contact',
            size: 'medium',
        },
    ]
    return (
        <div className="fixed top-20 left-0 h-[calc(100vh-80px)] flex flex-col justify-center items-center">
            {/* <h2>This is the vertical Navbar</h2> */}
            {
                navLinksInfo.map((navLink, idx) => <Nav key={idx} text={navLink.name} onClick={Scroller} params={[navLink.sectId]} size={navLink.size} />) // toLink={navLink.pageLink}
            }
        </div>
    );
};

export default VerticalNavbar;