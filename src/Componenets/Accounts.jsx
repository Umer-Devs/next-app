import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Account1, Account2, Account3, Account4, Account5, Account6, Line1 } from '../assets';

const Accounts = () => {
    const accountCards = [
        { id: 1, title: 'Finance Management', img: Account1 },
        { id: 2, title: 'Budget Planning', img: Account2 },
        { id: 3, title: 'Tax Solutions', img: Account3 },
        { id: 4, title: 'Audit Services', img: Account4 },
        { id: 5, title: 'Investment Analysis', img: Account5 },
        { id: 6, title: 'Risk Assessment', img: Account6 },
    ];

    return (
        <>
        <section className="custom-padding py-20 bg-white relative overflow-hidden">
            <img src={Line1} alt="" className='absolute top-8 left-0   ' />
            {/* Sketchy background decor (approximated) */}
            <div className="absolute top-0 left-0 w-40 opacity-20 pointer-events-none select-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#343A40" strokeWidth="2" d="M10,10 C50,10 20,50 60,50 C100,50 70,100 110,100 C150,100 120,150 160,150" strokeDasharray="5,5" />
                    <path fill="none" stroke="#343A40" strokeWidth="2" d="M20,30 C60,30 30,70 70,70 C110,70 80,120 120,120" strokeDasharray="4,4" />
                </svg>
            </div>

            <div className="text-center mb-16 px-4">
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-primary-black font-bold text-lg mb-2"
                >
                    Accounts & Finance
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl text-primary-black font-semibold   mx-auto leading-tight"
                >
                    Lorem Ipsum Is Simply Dummy <br className="hidden md:block" /> Text Of The Printing
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {accountCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-gray-100 border w-[95%] mx-auto border-gray-100 px-6 pt-6 rounded-2xl shadow-md hover:bg-primary-red transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-primary-black group-hover:text-white transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-primary-gray group-hover:text-white/80 text-sm mt-1 transition-colors duration-300">
                                    Is Simply Dummy Text Of The Printing <br /> And Typesetting
                                </p>
                            </div>
                            <div className="p-1 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                                <ArrowUpRight className="text-primary-black  transition-colors" size={20} />
                            </div>
                        </div>

                        {/* Image Container with Red Overlay on Hover */}
                        <div className="mt-6 rounded-xl overflow-hidden aspect-[4/3] relative">
                            <div className="absolute inset-0 w-[80%] mx-auto bg-primary-red/40 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10" />
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-[80%] mx-auto h-full object-cover transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
        </>
    );
};

export default Accounts;

