import React from 'react';
import { motion } from 'framer-motion';

const CtaOne = () => {
    return (
        <section className="custom-padding py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='bg-primary-red rounded-xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary-red/30 border border-black border-4'
            >
                {/* Left Content */}
                <div className="flex-1 text-white space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                        Lorem Ipsum Is Simply <br /> Dummy Text Of
                    </h2>
                    <p className="text-white/80 font-medium text-lg max-w-xl">
                        Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A
                    </p>
                </div>

                {/* Right Form */}
                <div className="w-full lg:w-auto min-w-[320px] md:min-w-[450px] space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                            Lorem Ipsum Is Simply <br /> Dummy Text Of
                        </h3>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white text-primary-black px-6 py-4 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white text-primary-black px-6 py-4 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-gray-400"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-primary-black text-primary-red font-bold text-xl py-4 rounded-full shadow-xl transition-all hover:bg-black/90 tracking-wide"
                        >
                            Send
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default CtaOne;
