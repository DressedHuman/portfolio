import { useEffect } from "react";
import HireMeForm from "../../components/Shared/FormComponents/HireMeForm";
import AuthorImg from '../../assets/MotiurRahmanMizanFromBangladesh.webp';
import PhoneIcon from './icons/phone.svg';
import EmailIcon from './icons/email.svg';

const HireMe = () => {
    useEffect(() => {
        const img = new Image();
        img.src = AuthorImg;

        img.onload = () => console.log("image preloaded successfully");
        img.onerror = (err) => console.error("failed to preload image", err);
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max gap-7">
            {/* hire me form here */}
            <div className="w-full px-[10%]">
                <HireMeForm />
            </div>

            {/* contact details */}
            <div className="flex flex-col justify-center items-start gap-1 md:gap-2 lg:gap-3 px-[10%]">
                <h2 className="font-mono text-[dodgerblue] lg:text-lg font-medium pl-2 mb-4 border-l-4 border-green-700 flex justify-start items-start italic">Thanks for hiring me!<br />It&apos;s my duty to provide you with more than you desire.</h2>
                <div
                    className="bg-[#1b6485] p-3 space-y-2"
                >
                    {/* phone number */}
                    <div
                        className="flex flex-col justify-start items-start gap-1"
                    >
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium flex justify-center items-center gap-1">
                            <img src={PhoneIcon} className="w-[18px] md:w-[20px] lg:w-[24px]" alt="phone icon" />
                            Call
                        </h3>
                        <a
                            href="tel:+8801315243425"
                            className="md:text-lg lg:text-xl font-mono text-white ml-[22px] md:ml-[24px] lg:ml-[28px]"
                        >
                            +8801315243425
                        </a>
                    </div>

                    {/* email address */}
                    <div
                        className="flex flex-col justify-start items-start gap-1"
                    >
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium flex justify-center items-center gap-1">
                            <img src={EmailIcon} className="w-[18px] md:w-[20px] lg:w-[24px]" alt="email icon" />
                            Email
                        </h3>
                        <a
                            href="mailto:motiur.rahman.mizan@gmail.com"
                            className="md:text-lg lg:text-xl font-mono text-white ml-[22px] md:ml-[24px] lg:ml-[28px]"
                        >
                            motiur.rahman.mizan@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMe;