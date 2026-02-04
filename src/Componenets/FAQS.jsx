import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "How does it work?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            question: "How good is the call quality?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            question: "What countries can I call and text?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            question: "Can I use OpenPhone with my team?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            question: "Can I distinguish between business and personal calls?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            question: "What if I want to cancel my subscription?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            question: "What number will my customers see when I call?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ];

    return (
        <section className="custom-padding py-24 bg-white overflow-hidden">
            <div className="grid custom-size:grid-cols-2 gap-16  items-start">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h4 className="text-primary-black font-medium  text-lg uppercase">Renexus FAQ</h4>
                    <h2 className="text-4xl md:text-5xl font-semibold text-primary-black leading-tight">
                        Got Questions? <br /> We have Answers.
                    </h2>
                    <p className="text-primary-gray font-medium text-lg max-w-lg">
                        Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-red text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary-red/20 transition-all hover:bg-primary-black tracking-wider"
                    >
                        Contact Support
                    </motion.button>
                </motion.div>

                {/* Right Accordion */}
                <div className="flex flex-col space-y-6">
                    {faqData.map((faq, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-200 last:border-0  overflow-hidden">
                                <motion.div
                                    animate={{
                                        backgroundColor: isActive ? "#ED1C24" : "rgba(255, 255, 255, 0)",
                                        color: isActive ? "#FFFFFF" : "#000000"
                                    }}
                                    className={`cursor-pointer px-6 py-5 flex items-center justify-between transition-all duration-300 ${isActive ? 'rounded-t-xl' : ''}`}
                                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                                >
                                    <span className="text-lg font-bold">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={24} />
                                    </motion.div>
                                </motion.div>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="bg-primary-red rounded-b-xl"
                                        >
                                            <div className="px-6 pb-6 pt-2 text-white/90 font-medium leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQS;
