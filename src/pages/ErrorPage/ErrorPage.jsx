import Header from "../../components/Header/Header";

const ErrorPage = () => {
    return (
        <div>
            <div className="absolute w-full">
                <Header />
            </div>
            <div className="min-h-[100vh] h-full w-full flex justify-center items-center">
                <h2 className="text-5xl font-open_sans font-medium text-[goldenrod]">Oops! This page is not available!</h2>
            </div>
        </div>
    );
};

export default ErrorPage;