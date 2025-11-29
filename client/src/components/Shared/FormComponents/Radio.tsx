interface Props {
    id: string;
    value: string | number;
    bgColor?: string;
    bgColorOnChecked?: string;
    textColor?: string;
    textColorOnChecked?: string;
    checkedValue: string | null;
    handlerOnChange: Function;
};

const Radio = ({ id, value, bgColor, bgColorOnChecked, textColor, textColorOnChecked, checkedValue, handlerOnChange }: Props) => {
    return (
        <input
            type='button'
            id={id}
        className={`flex-grow w-[91px] md:w-[100px] lg:w-[112px] h-12 flex justify-center items-center rounded-xl ${textColor || 'text-white'} ${checkedValue === value ? (bgColorOnChecked || 'bg-[forestgreen]') :  (bgColor || 'bg-[green]/25')} ${checkedValue === value && (textColorOnChecked || 'text-white')} z-0 cursor-pointer`}
            onClick={() => handlerOnChange(value)}
            value={value}
        />
    );
};

export default Radio;