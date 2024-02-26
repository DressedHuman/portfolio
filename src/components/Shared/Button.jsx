import PropTypes from 'prop-types';

const Button = ({ buttonText }) => {
    return (
        <button className="font-open_sans text-lg font-medium w-[175px] px-5 py-2 border-2 rounded-[90px_32px] shadow-[inset_5px_0_goldenrod] hover:shadow-[inset_135px_0_goldenrod] hover:rounded-[32px_90px] duration-300">{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
}

export default Button;