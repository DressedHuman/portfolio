import { useState } from "react";
import InputField from "./InputField";
import InputPhoneNumberField from "./InputPhoneNumberField";
import RadioGroup from "./RadioGroup";
import TextAreaField from "./TextAreaField";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const HireMeForm = () => {
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState<boolean>(false);
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState<string | null>(null);
    const [checkedPriority, setCheckedPriority] = useState<string | null>(null);
    const [priorityError, setPriorityError] = useState<string>("");

    const handleFormReset = (form: HTMLFormElement) => {
        form.reset();
        setCheckedPriority(null);
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumberIsValid) {

            return setPhoneNumberErrorMessage("Correct phone number must be given.");
        }
        else if (checkedPriority === null) {
            return setPriorityError("Priority must be set!");
        }
        else {
            // removing error messages
            setPhoneNumberErrorMessage(null);
            setPriorityError("");

            // collecting given information
            const form = new FormData(e.target as HTMLFormElement);
            const info = {
                name: form.get("name"),
                email: form.get("email"),
                phone: form.get("phone_number"),
                address: form.get("address"),
                priority: checkedPriority,
                description: form.get("project_description"),
            };

            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                await axios.post(`${API_URL}/api/receive_message/`, info);
                handleFormReset(e.target as HTMLFormElement);
                toast.success("Message received successfully. I will contact you soon.")
            }
            catch (err) {
                console.error("error occurred", err);
            }
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
        >
            <h2 className="font-ubuntu text-white text-lg md:text-xl lg:text-2xl text-center mb-2">Hire Me</h2>

            <div
                className="space-y-3"
            >
                {/* Client's Name Field */}
                <InputField type="text" name="name" id="name" label={"Your Name"} placeholder={"type your name..."} borderColor="border-[#005700]" borderColorOnFocus="focus-within:border-[#008000]" focus isRequired />

                {/* Client's Email Field */}
                <InputField type="email" name="email" id="email" label="Your Email" placeholder={"type your email..."} borderColor="border-[#005700]" borderColorOnFocus="focus-within:border-[#008000]" isRequired />

                {/* Client's Phone Number Field */}
                <InputPhoneNumberField name="phone_number" id="phone_number" label="Your Phone Number" placeholder={"+8801315......"} isValid={phoneNumberIsValid} setIsValid={setPhoneNumberIsValid} errorMessage={phoneNumberErrorMessage} setErrorMessage={setPhoneNumberErrorMessage} borderColor="border-[#005700]" borderColorOnFocus="focus-within:border-[#008000]" isRequired />

                {/* Client's Address */}
                <InputField type="text" name="address" id="address" label="Your Address" placeholder={"type your address..."} borderColor="border-[#005700]" borderColorOnFocus="focus-within:border-[#008000]" isRequired />

                {/* Project Priority */}
                <RadioGroup label="Priority" radioOptions={["Low", "Medium", "High"]} checkedRadio={checkedPriority} handleRadioChange={setCheckedPriority} errorMessage={priorityError} isRequired />

                {/* Message Field */}
                <TextAreaField name="project_description" id="project_description" label="Project Description" placeholder={"project description here..."} borderColor="border-[#005700]" borderColorOnFocus="focus-within:border-[#008000]" isRequired />

                {/* Submit Button */}
                <div
                    className="flex justify-center items-center"
                >
                    <button
                        className="border-2 border-orange-700 px-5 py-2 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default HireMeForm;