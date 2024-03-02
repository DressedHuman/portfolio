import PropTypes from 'prop-types';

/**
 * 
 * @param {string} buttonText - 'The text showing inside the button'
 * @param {string} size - ['small', 'medium', 'large', 'xlarge']
 * @param {string} customClasses - additional classes you want to use
 * @param {boolean} negate - true if you want negative border radius direction or false
 * @param {func} onClick - function you want to call on clicking the button
 * @param {Array} onClickParams - necessary params the onClick function need to work
 * @param {string} borderVisibility - transparent or semiTransparent or visible (default)
 * @returns 
 */
const Button = ({ buttonText, size, customClasses, negate, onClick, onClickParams, borderVisibility }) => {
    return (
        <button onClick={() => onClick(...onClickParams)} className={`font-open_sans text-lg font-medium ${size === 'small' ? 'w-[105px] px-3 shadow-[inset_3px_0_green] hover:shadow-[inset_81px_0_green]' : size === 'medium' ? 'w-[135px] px-4 shadow-[inset_4px_0_green] hover:shadow-[inset_112px_0_green]' : size === 'large' ? 'w-[175px] px-5 shadow-[inset_5px_0_green] hover:shadow-[inset_135px_0_green]' : size === 'xlarge' ? 'w-[205px] px-7 shadow-[inset_7px_0_green] hover:shadow-[inset_149px_0_green]' : 'w-[175px] px-5 shadow-[inset_5px_0_green] hover:shadow-[inset_135px_0_green]'} py-2 border-2 ${borderVisibility === 'transparent' ? 'border-transparent' : borderVisibility === 'semiTransparent' ? 'border-white/50' : 'border-white'} ${negate ? 'rounded-[32px_90px]  hover:rounded-[90px_32px]' : 'rounded-[90px_32px]  hover:rounded-[32px_90px]'} duration-300 ${customClasses || ''}`}>{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    size: PropTypes.string,
    customClasses: PropTypes.string,
    negate: PropTypes.bool,
    onClick: PropTypes.func,
    onClickParams: PropTypes.array,
    borderVisibility: PropTypes.string,
}

export default Button;