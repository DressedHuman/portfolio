import HireMeForm from "../../components/Shared/FormComponents/HireMeForm";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';

const HireMe = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center py-20 px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Contact Details */}
                <div className="space-y-12 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-light">
                            Let's work <br />
                            <span className="text-primary">together.</span>
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            I'm always open to discussing product design work or partnership opportunities.
                            It's my duty to provide you with more than you desire.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                                <AiOutlinePhone />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-light mb-1">Phone</h3>
                                <a href="tel:+8801315243425" className="text-text-secondary hover:text-primary transition-colors">
                                    +880 1315 243 425
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                                <AiOutlineMail />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-light mb-1">Email</h3>
                                <a href="mailto:motiur.rahman.mizan@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                                    motiur.rahman.mizan@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                                <AiOutlineEnvironment />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-light mb-1">Address</h3>
                                <p className="text-text-secondary">
                                    Rangpur, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="order-1 lg:order-2">
                    <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
                        <HireMeForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMe;