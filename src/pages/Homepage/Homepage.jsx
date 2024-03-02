import Intro from "../../components/Homepage/Intro";
import AuthorImg from '../../assets/MotiurRahmanMizanFromBangladesh.png';
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";

const Homepage = () => {
    return (
        <div className="space-y-28">
            {/* banner section */}
            <section className="flex justify-between items-center border-2 border-black pl-7 rounded-[7px_0_7px_7px]">
                <Intro />
                <img src={AuthorImg} alt="Motiur Rahman Mizan from Bangladesh" className="h-[570px] grayscale-[57%] select-none" draggable='false' />
            </section>

            {/* about section */}
            <section id="about" className="py-3">
                <About />
            </section>

            {/* skills section */}
            <section id="skills" className="py-3">
                <Skills />
            </section>
        </div>
    );
};

export default Homepage;