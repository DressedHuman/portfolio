import Button from "../../Button";
import PropTypes from 'prop-types';

const Nav = ({ text, size, onClick, params }) => { // toLink
    return (
        <div className="flex-1 group relative">
            <div className="-rotate-90 -translate-x-9 group-hover:translate-x-2 group-hover:rotate-0 fixed left-0 duration-700 text-nowrap flex translate-y-7">
                {/* <Link to={toLink || '/'}> */}
                <Button buttonText={text} size={size || 'medium'} onClick={onClick} onClickParams={params} />
                {/* </Link> */}
            </div>
        </div>
    );
};

Nav.propTypes = {
    text: PropTypes.string,
    // toLink: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    params: PropTypes.array,
}

export default Nav;