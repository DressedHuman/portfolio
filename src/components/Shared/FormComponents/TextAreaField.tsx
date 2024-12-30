import { HTMLAttributes, ReactNode } from 'react';

interface Props {
    name: string;
    id: string;
    icon?: string;
    label: string;
    placeholder: string;
    rows?: number;
    columns?: number;
    marginTop?: string;
    marginBottom?: string;
    inputPadding?: number;
    borderFull?: boolean;
    borderColor?: string;
    borderColorOnFocus?: string;
    customAtts?: HTMLAttributes<HTMLTextAreaElement>;
    isRequired?: boolean;
    errorMessage?: string;
    children?: ReactNode;
}

const TextAreaField = ({ name, icon, id, label, placeholder, rows=7, columns, marginTop, marginBottom, inputPadding=12, borderFull=true, borderColor, borderColorOnFocus, customAtts, isRequired, errorMessage, children }: Props) => {
    const containerStyle = { marginTop, marginBottom };
    const inputStyle = { padding: `${inputPadding}px` }

    return (
        <div
            className="flex flex-col items-start group transition-all duration-500"
            style={containerStyle}
        >
            {/* label for the input field */}
            <label className="font-open-sans text-base md:text-lg group-focus-within:text-lg group-focus-within:md:text-xl transition-all duration-500" htmlFor={id}>
                {label}{isRequired && <span className='text-red-500'>&nbsp;*</span>} {errorMessage && <span className='text-[red]'>{errorMessage}</span>}
            </label>

            {/* container for the input field and icon */}
            <div
                className={`flex w-full gap-3 my-3 ${borderFull ? "border-[2px] focus-within:border-[3px] rounded-xl" : "border-b-[3px]"} ${`${borderColor || 'border-[#B3B3B3]'} ${borderColorOnFocus || 'focus-within:border-[#575757]'}`} transition-all duration-500`}
            >
                {/* main input field with styles and custom attributes */}
                <textarea
                    name={name}
                    id={id}
                    className="font-mono flex-grow focus:outline-none bg-transparent whitespace-pre-wrap placeholder:text-[gray] placeholder:font-mono"
                    placeholder={placeholder}
                    style={inputStyle}
                    rows={rows}
                    cols={columns}
                    required={isRequired}
                    {...customAtts}
                >
                    {children}
                </textarea>
                {
                    // icon for the input field on the right side
                    icon && <img
                        src={icon}
                        className='w-4 select-none'
                        draggable='false'
                        alt={`${name} - icon`}
                    />
                }
            </div>
        </div>
    );
};

export default TextAreaField;