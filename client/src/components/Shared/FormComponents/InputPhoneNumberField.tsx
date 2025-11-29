import parsePhoneNumberFromString, { CountryCode } from 'libphonenumber-js';
import { HTMLAttributes, useState } from 'react';

interface Props {
    name: string;
    id: string;
    label: string;
    placeholder: string;
    isValid?: boolean;
    setIsValid?: React.Dispatch<React.SetStateAction<boolean>>;
    errorMessage: string | null;
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
    icon?: string;
    marginTop?: string;
    marginBottom?: string;
    inputPadding?: number;
    borderFull?: boolean;
    borderColor?: string;
    borderColorOnFocus?: string;
    customAtts?: HTMLAttributes<HTMLInputElement>;
    defaultCountry?: CountryCode;
    isRequired?: boolean;
};

const InputPhoneNumberField = ({ name, id, label, placeholder, isValid, setIsValid, errorMessage, setErrorMessage, icon, marginTop, marginBottom, inputPadding = 12, borderFull = true, borderColor = "border-[#0C46C4A7]", borderColorOnFocus = "focus-within:border-[#0C46C4]", customAtts, defaultCountry, isRequired = false }: Props) => {
    const containerStyle = { marginTop, marginBottom };
    const inputStyle = { padding: `${inputPadding}px` }
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();

        if(value.length > 0) {
            try{
                const parsedPhoneNumber = parsePhoneNumberFromString(value, {
                    defaultCountry: defaultCountry || "BD",
                });
                if(parsedPhoneNumber && parsedPhoneNumber.isValid()) {
                    setIsValid && setIsValid(true);
                    setErrorMessage(null);
                    e.target.value = parsedPhoneNumber.number;
                }
                else {
                    setIsValid && setIsValid(false);
                    setErrorMessage("Invalid phone number");
                }
            }
            catch (err) {
                setIsValid && setIsValid(false);
                setErrorMessage("Invalid phone number format")
            }
        }
        else {
            setIsValid && setIsValid(false);
            setErrorMessage(null);
        }
    }

    return (
        <div
            className="flex flex-col items-start gap-3 group transition-all duration-500"
            style={containerStyle}
        >
            {/* label for the input phone number field */}
            <div
                className="text-base md:text-lg group-focus-within:text-lg group-focus-within:md:text-xl transition-all duration-500 flex justify-between items-center w-full"
            >
                <h2>{label}{isRequired && <span className='text-red-500'>&nbsp;*</span>}</h2>{(!isValid && errorMessage) && <h2 className='text-[red] text-sm md:text-base'>{errorMessage}</h2>}
            </div>

            {/* container for the input phone number field and icon */}
            <div className={`flex w-full gap-2 ${borderFull ? "border-[2px] focus-within:border-[2.5px] rounded-xl" : "border-b-[3px]"} ${`${borderColor || 'border-[#B3B3B3]'} ${borderColorOnFocus || 'focus-within:border-[#575757]'}`} transition-all duration-500`}>
                {/* main input phone number field with styles and custom attributes */}
                <input
                    type={"text"}
                    name={name}
                    id={id}
                    onInput={onChangeHandler}
                    className="font-mono flex-grow focus:outline-none bg-transparent placeholder:text-[gray] placeholder:font-mono"
                    placeholder={placeholder}
                    style={inputStyle}
                    {...customAtts}
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


export default InputPhoneNumberField;