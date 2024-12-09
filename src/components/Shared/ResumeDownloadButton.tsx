import DownloadIcon from '../../assets/download.svg';
import { fileDownloadFunction } from "../../javascripts/FileDownloader/FileDownloader";

interface Props {
    resumeFilePath: string;
    resumeDownloadName?: string;
};

const ResumeDownloadButton = ({resumeFilePath, resumeDownloadName}: Props) => {
    return (
        <>
            {/* resume download button */}
            <button
                className="flex justify-center items-center gap-1 font-mono border-0 border-transparent px-2 py-1 rounded-md relative overflow-clip hover:bg-[slateblue]/35 group"
                onClick={() => fileDownloadFunction(resumeFilePath || "/Motiur_Rahman_Mizan_Resume.pdf", resumeDownloadName)}
            >
                <div className="absolute w-2 -top-[2px] -left-[4px] -bottom-[2px] bg-orange-700"></div>
                <img
                    src={DownloadIcon}
                    alt="resume download icon"
                    className="h-4 animate-bounce group-hover:animate-none"
                />
                <p className="text-orange-500 group-hover:text-white">Download Resume</p>
                <div className="absolute w-2 -top-[2px] -right-[4px] -bottom-[2px] bg-orange-700"></div>
            </button>
        </>
    );
};

export default ResumeDownloadButton;