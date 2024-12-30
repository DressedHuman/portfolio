import { HTMLAttributes } from 'react';

interface Props {
    type: string;
    name: string;
    id: string;
    label: string;
    placeholder: string;
    icon?: string;
    marginTop?: string;
    marginBottom?: string;
    inputPadding?: number;
    borderFull?: boolean;
    borderColor?: string;
    borderColorOnFocus?: string;
    customAtts?: HTMLAttributes<HTMLInputElement>;
    errorMessage?: string;
    focus?: boolean;
    isRequired?: boolean;
};

const InputField = ({ type, name, id, label, placeholder, icon, marginTop, marginBottom, inputPadding=12, borderFull=true, borderColor="border-[#0C46C4A7]", borderColorOnFocus="focus-within:border-[#0C46C4]", customAtts, errorMessage="", focus=false, isRequired=false }: Props) => {
    const containerStyle = { marginTop, marginBottom };
    const inputStyle = { padding: `${inputPadding}px` }

    return (
        <div
            className="flex flex-col items-start gap-3 group transition-all duration-500"
            style={containerStyle}
        >
            {/* label for the input field */}
            <div
                className="text-base md:text-lg group-focus-within:text-lg group-focus-within:md:text-xl transition-all duration-500 flex justify-between items-center w-full"
            >
                <h2>{label}{isRequired && <span className='text-red-500'>&nbsp;*</span>}</h2>{errorMessage && <h2 className='text-[red] text-sm md:text-base'>{errorMessage}</h2>}
            </div>

            {/* container for the input field and icon */}
            <div className={`flex w-full gap-2 ${borderFull ? "border-[2px] focus-within:border-[2.5px] rounded-xl" : "border-b-[3px]"} ${`${borderColor || 'border-[#B3B3B3]'} ${borderColorOnFocus || 'focus-within:border-[#575757]'}`} transition-all duration-500`}>
                {/* main input field with styles and custom attributes */}
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="font-mono flex-grow focus:outline-none bg-transparent placeholder:text-[gray] placeholder:font-mono"
                    placeholder={placeholder}
                    style={inputStyle}
                    {...customAtts}
                    autoFocus={focus}
                    required={isRequired}
                />
                {
                    // icon for the input field on the right side
                    icon && <img src={icon} className='w-4 select-none' draggable='false' alt={`${name} - icon`} />
                }
            </div>
        </div>
    );
};


export default InputField;