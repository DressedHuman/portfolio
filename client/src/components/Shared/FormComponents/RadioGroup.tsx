import Radio from './Radio';

interface Props {
    label: string;
    radioOptions: string[] | number[];
    handleRadioChange: Function;
    checkedRadio: string | null;
    isRequired: boolean;
    errorMessage?: string;
};

const RadioGroup = ({ label, radioOptions, handleRadioChange, checkedRadio, isRequired, errorMessage, }: Props) => {
    return (
        <div className="flex flex-col items-start gap-2 group transition-all duration-500">
            <div
                className="font-open-sans text-base md:text-lg group-focus-within:text-lg group-focus-within:md:text-xl transition-all duration-500 flex justify-between items-center w-full"
            >
                <h2>{label}{isRequired && <span className='text-[red]'>&nbsp;*</span>}</h2>{errorMessage && <h2 className='text-[red] text-sm md:text-base'>{errorMessage}</h2>}
            </div>
            <div className='w-full flex justify-between items-start gap-2 flex-wrap z-0'>
                {
                    radioOptions.map((option, idx) => <Radio
                        key={idx}
                        id={`${idx}`}
                        value={option}
                        checkedValue={checkedRadio}
                        handlerOnChange={handleRadioChange}
                    />)
                }
            </div>
        </div>
    );
};

export default RadioGroup;