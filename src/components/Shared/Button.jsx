import PropTypes from 'prop-types';

/**
 * 
 * @param {string} buttonText - 'The text showing inside the button'
 * @param {string} size - ['small', 'medium', 'large', 'xlarge']
 * @param {string} customClasses - additional classes you want to use
 * @param {boolean} negate - true if you want negative border radius direction or false
 * @param {func} onClick - function you want to call on clicking the button
 * @param {Array} onClickParams - necessary params the onClick function need to work
 * @returns 
 */
const Button = ({ buttonText, size, customClasses, negate, onClick, onClickParams }) => {
    return (
        <button onClick={() => onClick(...onClickParams)} className={`font-open_sans text-lg font-medium ${size === 'small' ? 'w-[105px] px-3 shadow-[inset_3px_0_goldenrod] hover:shadow-[inset_81px_0_goldenrod]' : size === 'medium' ? 'w-[135px] px-4 shadow-[inset_4px_0_goldenrod] hover:shadow-[inset_112px_0_goldenrod]' : size === 'large' ? 'w-[175px] px-5 shadow-[inset_5px_0_goldenrod] hover:shadow-[inset_135px_0_goldenrod]' : size === 'xlarge' ? 'w-[205px] px-7 shadow-[inset_7px_0_goldenrod] hover:shadow-[inset_149px_0_goldenrod]' : 'w-[175px] px-5 shadow-[inset_5px_0_goldenrod] hover:shadow-[inset_135px_0_goldenrod]'} py-2 border-2 ${negate ? 'rounded-[32px_90px]  hover:rounded-[90px_32px]' : 'rounded-[90px_32px]  hover:rounded-[32px_90px]'} duration-300 ${customClasses || ''}`}>{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    size: PropTypes.string,
    customClasses: PropTypes.string,
    negate: PropTypes.bool,
    onClick: PropTypes.func,
    onClickParams: PropTypes.array,
}

export default Button;