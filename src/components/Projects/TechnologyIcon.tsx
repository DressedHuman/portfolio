import { TechnologyType } from './SingleProject';

interface Props {
    technology: TechnologyType;
};


const TechnologyIcon = ({ technology }: Props) => {
    return (
        <div>
            <img src={technology?.img} className={`w-6 md:w-7 lg:w-8 aspect-square rounded object-contain ${technology.bgColor ? 'p-1' : ''}`} style={{
                backgroundColor: technology.bgColor || 'transparent',
            }} alt={technology?.name} title={technology?.name} />
        </div>
    );
}

export default TechnologyIcon;