import Intro from "../../components/Homepage/Intro";
import AuthorImg from '../../assets/MotiurRahmanMizanFromBangladesh.png';

const Homepage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mx-2 border-2 border-black pl-7 rounded-[7px_0_7px_7px]">
                <Intro />
                <img src={AuthorImg} alt="Motiur Rahman Mizan from Bangladesh" className="h-[570px] grayscale-[57%] select-none" draggable='false' />
            </div>
        </div>
    );
};

export default Homepage;