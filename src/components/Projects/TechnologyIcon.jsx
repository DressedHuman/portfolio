import PropTypes from 'prop-types';

const TechnologyIcon = ({ technology}) => {
    return (
        <div>
            <img src={technology?.img} className={`w-8 h-8 rounded object-contain ${technology.bgColor ? 'p-1' : ''}`} style={{
                backgroundColor: technology.bgColor || 'transparent',
            }} alt={technology?.name} title={technology?.name} />
        </div>
    );
};

TechnologyIcon.propTypes = {
    technology: PropTypes.object,
}

export default TechnologyIcon;