import { useState } from "react";
import InputField from "./InputField";
import InputPhoneNumberField from "./InputPhoneNumberField";
import RadioGroup from "./RadioGroup";
import TextAreaField from "./TextAreaField";
import axios from "axios";
import { toast } from "react-toastify";

const HireMeForm = () => {
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState<boolean>(false);
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState<string | null>(null);
    const [checkedPriority, setCheckedPriority] = useState<string | null>(null);
    const [priorityError, setPriorityError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            setPhoneNumberErrorMessage(null);
            setPriorityError("");
            setIsSubmitting(true);

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
                toast.error("Something went wrong. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    const inputStyles = {
        borderColor: "border-white/10",
        borderColorOnFocus: "focus-within:border-primary",
        className: "bg-dark-lighter/50 backdrop-blur-sm text-light placeholder-text-secondary/50 rounded-lg transition-all duration-300"
    };

    return (
        <form onSubmit={handleFormSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-light mb-6">Send a Message</h2>

            <div className="space-y-5">
                <InputField
                    type="text"
                    name="name"
                    id="name"
                    label="Your Name"
                    placeholder="John Doe"
                    {...inputStyles}
                    focus
                    isRequired
                />

                <InputField
                    type="email"
                    name="email"
                    id="email"
                    label="Your Email"
                    placeholder="john@example.com"
                    {...inputStyles}
                    isRequired
                />

                <InputPhoneNumberField
                    name="phone_number"
                    id="phone_number"
                    label="Your Phone Number"
                    placeholder="+8801315......"
                    isValid={phoneNumberIsValid}
                    setIsValid={setPhoneNumberIsValid}
                    errorMessage={phoneNumberErrorMessage}
                    setErrorMessage={setPhoneNumberErrorMessage}
                    {...inputStyles}
                    isRequired
                />

                <InputField
                    type="text"
                    name="address"
                    id="address"
                    label="Your Address"
                    placeholder="City, Country"
                    {...inputStyles}
                    isRequired
                />

                <RadioGroup
                    label="Priority"
                    radioOptions={["Low", "Medium", "High"]}
                    checkedRadio={checkedPriority}
                    handleRadioChange={setCheckedPriority}
                    errorMessage={priorityError}
                    isRequired
                />

                <TextAreaField
                    name="project_description"
                    id="project_description"
                    label="Project Description"
                    placeholder="Tell me about your project..."
                    {...inputStyles}
                    isRequired
                />

                <button
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary text-dark font-bold rounded-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default HireMeForm;