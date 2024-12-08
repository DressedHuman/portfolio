interface Props {
    buttonText: string;
    size?: "small" | "medium" | "large" | "xlarge";
    customClasses?: string;
    negate?: Boolean;
    onClick?: Function;
    onClickParams?: unknown[];
    borderVisibility?: "transparent" | "semiTransparent" | "visible";
};

const Button = ({ buttonText, size="medium", customClasses, negate, onClick, onClickParams=[], borderVisibility="visible" }: Props) => {
    return (
        <button onClick={() => onClick && onClick(...onClickParams)} className={`font-open_sans text-lg font-medium ${size === 'small' ? 'w-[105px] px-3 shadow-[inset_3px_0_green] hover:shadow-[inset_81px_0_green]' : size === 'medium' ? 'w-[135px] px-4 shadow-[inset_4px_0_green] hover:shadow-[inset_112px_0_green]' : size === 'large' ? 'w-[175px] px-5 shadow-[inset_5px_0_green] hover:shadow-[inset_135px_0_green]' : size === 'xlarge' ? 'w-[205px] px-7 shadow-[inset_7px_0_green] hover:shadow-[inset_149px_0_green]' : 'w-[175px] px-5 shadow-[inset_5px_0_green] hover:shadow-[inset_135px_0_green]'} py-2 border-2 ${borderVisibility === 'transparent' ? 'border-transparent' : borderVisibility === 'semiTransparent' ? 'border-white/50' : 'border-white'} ${negate ? 'rounded-[32px_90px]  hover:rounded-[90px_32px]' : 'rounded-[90px_32px]  hover:rounded-[32px_90px]'} duration-300 ${customClasses || ''}`}>{buttonText}</button>
    );
};

export default Button;