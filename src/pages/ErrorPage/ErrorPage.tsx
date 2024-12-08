import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Shared/Button";

const ErrorPage = () => {
    const nav = useNavigate();
    
    return (
        <div>
            <div className="absolute w-full">
                <Header />
            </div>
            <div className="min-h-[100vh] h-full w-full flex flex-col justify-center items-center gap-7">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-ubuntu font-medium text-[#dddeee7f]">Oops! This page is not available!</h2>
                <Button onClick={() => nav("/")} buttonText={'Go Home'} />
            </div>
        </div>
    );
};

export default ErrorPage;