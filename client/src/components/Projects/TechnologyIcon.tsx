import { TechnologyType } from "./SingleProject";

interface Props {
    technology: TechnologyType;
}

const TechnologyIcon = ({ technology }: Props) => {
    const iconSrc = technology.img || technology.icon || '';
    const bgColor = technology.bgColor || technology.bg_color || 'transparent';

    return (
        <div
            className='w-9 md:w-11 lg:w-14 aspect-square rounded-lg p-1 md:p-[6px] lg:p-2'
            style={{ backgroundColor: bgColor }}
        >
            <img
                src={iconSrc}
                alt={technology.name}
                className='w-full h-full object-contain'
            />
        </div>
    );
};

export default TechnologyIcon;