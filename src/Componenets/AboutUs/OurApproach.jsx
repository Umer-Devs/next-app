import React from 'react'
import { motion } from 'framer-motion'
import { About2, About3, About4, Line1, Line2 } from '../../assets'

const OurApproach = () => {
    const badgeText = "WE ARE # IT SERVICES # PROVIDED # ";

    return (
        <section className='  custom-padding md:px-10 overflow-hidden relative py-12 md:py-20'>
            <img src={Line1} className='absolute top-0 left-0 hidden md:block' alt="" />
            <img src={Line2} className='absolute -bottom-40 -right-10 hidden md:block' alt="" />

            <div className='grid grid-cols-1 xl:grid-cols-5 gap-12 lg:gap-16'>
                {/* Left Content Area */}
                <div className='col-span-1 xl:col-span-4 space-y-12 lg:space-y-16'>
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='space-y-6'
                    >
                        <h2 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-primary-black leading-tight'>
                            Our Approach
                        </h2>
                        <p className='text-primary-gray text-base md:text-xl leading-relaxed max-w-3xl'>
                            Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.
                        </p>
                    </motion.div>

                    {/* Sub Content with Image */}
                    <div className='flex flex-col lg:flex-row items-start gap-10 lg:gap-16'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative shrink-0 w-full lg:w-1/3"
                        >
                            <img src={About3} alt="Team" className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5] lg:aspect-[3/4]" />
                        </motion.div>

                        <div className='space-y-8 lg:space-y-10 flex-1'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='text-2xl md:text-4xl lg:text-5xl font-semibold text-primary-black leading-tight'
                            >
                                Unlock the potential <br className="hidden md:block" /> of your business.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className='text-primary-gray text-base md:text-lg leading-relaxed'
                            >
                                We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <img src={About4} alt="Workflow" className="w-full rounded-xl" />
                            </motion.div>

                            {/* Features Grid */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4'>
                                {[
                                    { title: "Custom Solutions", sub: "Services are professional offerings provided to meet your specific needs." },
                                    { title: "Quality Reliability", sub: "Services are professional offerings provided with more consistent quality." }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        className="space-y-3 text-center sm:text-left"
                                    >
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                                            <h3 className='text-xl md:text-2xl font-semibold text-primary-black'>{item.title}</h3>
                                        </div>
                                        <p className='text-primary-gray text-sm md:text-base leading-relaxed'>{item.sub}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Image & Badge */}
                <div className='col-span-1 xl:col-span-1 flex flex-col items-center xl:items-end gap-16 xl:gap-20 mt-8 xl:mt-0'>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-md xl:max-w-full"
                    >
                        <img src={About2} alt="Office" className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/5] xl:aspect-auto" />
                    </motion.div>

                    <div className='relative w-full flex justify-center xl:justify-end'>
                        {/* Rotating "10 Years" Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center cursor-pointer overflow-visible"
                        >
                            {/* Rotating outer text ring */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                    <defs>
                                        <path
                                            id="badgePath"
                                            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                        />
                                    </defs>
                                    <text className="text-[7.5px] fill-primary-red font-black tracking-[0.25em] uppercase">
                                        <textPath xlinkHref="#badgePath">
                                            {badgeText.repeat(2)}
                                        </textPath>
                                    </text>
                                </svg>
                            </motion.div>

                            {/* Inner circle with "10 Years" */}
                            <motion.div
                                animate={{
                                    boxShadow: ["0 0 20px rgba(237,28,36,0.2)", "0 0 40px rgba(237,28,36,0.5)", "0 0 20px rgba(237,28,36,0.2)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-32 h-32 md:w-40 md:h-40 bg-primary-red rounded-full flex flex-col items-center justify-center text-white z-10 border-[4px] md:border-[6px] border-white shadow-2xl"
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-5xl md:text-7xl font-black leading-none drop-shadow-lg"
                                >
                                    10
                                </motion.span>
                                <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] mt-1 drop-shadow-md">
                                    years
                                </span>
                            </motion.div>

                            {/* Outer Glow Effect */}
                            <div className="absolute inset-0 bg-primary-red/10 rounded-full scale-125 blur-3xl -z-0 pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurApproach