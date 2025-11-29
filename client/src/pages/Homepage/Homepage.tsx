import Intro from "../../components/Homepage/Intro";
import AuthorImg from '../../assets/MotiurRahmanMizanFromBangladesh.webp';
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

const Homepage = () => {
    return (
        <div className=" space-y-7 md:space-x-12 lg:space-y-28">
            {/* banner section */}
            <section className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-4 border-2 border-black px-3 md:px-0 md:pl-7 pt-3 md:pt-0 rounded-[7px_0_7px_7px]">
                <Intro />
                <img src={AuthorImg} alt="Motiur Rahman Mizan from Bangladesh" className="w-[100%] md:w-auto md:h-[457px] lg:h-[570px] grayscale-[57%]" />
            </section>

            {/* about section */}
            <section id="about" className="py-0">
                <About />
            </section>

            {/* skills section */}
            <section id="skills" className="py-0">
                <Skills />
            </section>

            {/* projects section */}
            <section id="projects" className="py-0">
                <Projects />
            </section>
        </div>
    );
};

export default Homepage;