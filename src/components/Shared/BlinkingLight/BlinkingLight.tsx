import { CSSProperties } from 'react';
import './BlinkingLight.css';

interface Props {
    size: number;
    bgColor?: string;
    customDivStyles?: CSSProperties;
};

const BlinkingLight = ({ size, bgColor, customDivStyles }: Props) => {
    const styles = {
        width: `${size || 12}px`,
        height: `${size || 12}px`,
        backgroundColor: bgColor || 'magenta',
        ...customDivStyles,
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
            <span style={styles} className={`absolute top-0 left-0 rounded-[50%] blinkingLight`}></span>
            <span style={styles} className={`absolute top-0 left-0 rounded-[50%] blinkingLight blinkingLast`}></span>
        </div>
    );
}

export default BlinkingLight;