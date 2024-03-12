import PropTypes from 'prop-types';
import './BlinkingLight.css';

const BlinkingLight = ({ size, bgColor }) => {
    const styles = {
        width: `${size || 12}px`,
        height: `${size || 12}px`,
        backgroundColor: bgColor || 'magenta',
    }
    return (
        <div
            className='relative'
            id='blinkingLight'
            style={{
                width: `${size || 12}px`,
                height: `${size || 12}px`,
            }}
        >
            <span style={styles} className='absolute top-0 left-0 rounded-[50%] blinkingLight'></span>
            <span style={styles} className='absolute top-0 left-0 rounded-[50%] blinkingLight blinkingLast'></span>
        </div>
    );
};

BlinkingLight.propTypes = {
    size: PropTypes.number,
    bgColor: PropTypes.string,
}

export default BlinkingLight;