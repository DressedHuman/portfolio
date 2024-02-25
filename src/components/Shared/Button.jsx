import PropTypes from 'prop-types';

const Button = ({ buttonText }) => {
    return (
        <button className="font-open_sans text-lg font-medium px-3 py-2 border-2 rounded-[90px_32px] hover:bg-[#f5950a] hover:rounded-[32px_90px] duration-300">{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
}

export default Button;