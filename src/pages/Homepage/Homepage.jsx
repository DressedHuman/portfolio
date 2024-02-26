import Intro from "../../components/Homepage/Intro";
import AuthorImg from '../../assets/MotiurRahmanMizanFromBangladesh.png';

const Homepage = () => {
    return (
        <div>
            {/* <p>This is Motiur Rahman Mizan</p> */}
            <div className="flex justify-between items-center mx-12 bg-[#f5950a12] pl-7 rounded-[7px_0_7px_7px]">
                <Intro />
                <img src={AuthorImg} alt="Motiur Rahman Mizan from Bangladesh" className="h-[570px] grayscale-[57%] select-none" draggable='false' />
            </div>
        </div>
    );
};

export default Homepage;