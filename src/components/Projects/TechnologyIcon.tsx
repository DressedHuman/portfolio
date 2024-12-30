import { useEffect } from 'react';
import { TechnologyType } from './SingleProject';

interface Props {
    technology: TechnologyType;
};


const TechnologyIcon = ({ technology }: Props) => {
    useEffect(() => {
        if (technology.img) {
            const img = new Image();
            img.src = technology.img;

            img.onload = () => console.log("image preloaded successfully");
            img.onerror = (err) => console.error("failed to preload image", err);
        }
    }, [])

    return (
        <div>
            <img src={technology?.img} className={`w-6 md:w-7 lg:w-8 aspect-square rounded object-contain ${technology.bgColor ? 'p-1' : ''}`} style={{
                backgroundColor: technology.bgColor || 'transparent',
            }} alt={technology?.name} title={technology?.name} />
        </div>
    );
}

export default TechnologyIcon;