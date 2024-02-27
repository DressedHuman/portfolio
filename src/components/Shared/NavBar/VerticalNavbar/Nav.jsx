import { Link } from "react-router-dom";
import Button from "../../Button";
import PropTypes from 'prop-types';

const Nav = ({ text, toLink, size }) => {
    return (
        <div className="flex-1 group relative">
            <div className="-rotate-90 -translate-x-9 group-hover:translate-x-2 group-hover:rotate-0 fixed left-0 duration-700 text-nowrap flex translate-y-7">
                <Link to={toLink || '/'}>
                    <Button buttonText={text} size={size || 'medium'} />
                </Link>
            </div>
        </div>
    );
};

Nav.propTypes = {
    text: PropTypes.string,
    toLink: PropTypes.string,
    size: PropTypes.string,
}

export default Nav;