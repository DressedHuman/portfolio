import ProgressBar from "../Shared/ProgressBar";

interface Props {
    skillName: string;
    skillPercent: number;
    fontSize: string;
    textColor: string;
    progressColor: string;
    bgColor: string;
    width?: string;
};


const Skill = ({ skillName, skillPercent, fontSize, textColor, progressColor, bgColor, width }: Props) => {

    return (
        <div
            className={`${width || 'w-[275px]'} mx-auto flex flex-col justify-center items-center gap-2`}
        >
            {/* skill name */}
            <div
                className={`font-medium font-ubuntu flex-1 flex justify-center items-center`}
                style={{ 
                    color: textColor ? textColor : 'white',
                 }}
            >
                <p className={`${fontSize || "text-lg"}`}>{skillName}</p>
            </div>

            {/* progressbar */}
            <ProgressBar label={skillName} progress={skillPercent} bgColor={bgColor} progressColor={progressColor} />
        </div>
    );
}

export default Skill;