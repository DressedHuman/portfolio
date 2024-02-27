import Nav from "./Nav";

const VerticalNavbar = () => {
    const navLinksInfo = [
        {
            name: 'Skills',
            pageLink: '/skills',
            size: 'medium',
        },
        {
            name: 'Projects',
            pageLink: '/projects',
            size: 'medium',
        },
        {
            name: 'About',
            pageLink: '/about',
            size: 'medium',
        },
        {
            name: 'Contact',
            pageLink: '/contact',
            size: 'medium',
        },
    ]
    return (
        <div className="fixed top-20 left-0 h-[calc(100vh-80px)] flex flex-col justify-center items-center">
            {/* <h2>This is the vertical Navbar</h2> */}
            {
                navLinksInfo.map((navLink, idx) => <Nav key={idx} text={navLink.name} toLink={navLink.pageLink} size={navLink.size} />)
            }
        </div>
    );
};

export default VerticalNavbar;