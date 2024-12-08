import Button from "../../Button";

interface Props {
    text: string;
    // toLink: string;
    size: "small" | "medium" | "large" | "xlarge";
    onClick: Function;
    params: unknown[];
};

const Nav = ({ text, size, onClick, params }: Props) => { // toLink
    return (
        <div className="flex-1 group relative">
            <div className="-rotate-90 -translate-x-9 group-hover:translate-x-2 group-hover:rotate-0 fixed left-0 duration-700 text-nowrap flex translate-y-7">
                {/* <Link to={toLink || '/'}> */}
                <Button buttonText={text} size={size || 'medium'} onClick={onClick} onClickParams={params} borderVisibility={'transparent'} />
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Nav;