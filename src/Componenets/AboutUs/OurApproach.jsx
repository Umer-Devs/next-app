import React from 'react'
import { motion } from 'framer-motion'
import { About2, About3, About4, Line1, Line2 } from '../../assets'

const OurApproach = () => {
    const badgeText = "WE ARE # IT SERVICES # PROVIDED # ";

    return (
        <section className='custom-padding  overflow-hidden relative'>
            <img src={Line1} className='absolute -top-0 left-0 ' alt="" />
            <img src={Line2} className='absolute -bottom-40 -right-10 ' alt="" />
            <div className='grid grid-cols-1 custom-size:grid-cols-5 gap-12'>
                {/* Left Content Area */}
                <div className='col-span-1 custom-size:col-span-4 space-y-12'>
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='space-y-6'
                    >
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-black leading-tight'>
                            Our Approach
                        </h2>
                        <p className='text-primary-gray text-lg md:text-xl leading-relaxed max-w-3xl'>
                            Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.
                        </p>
                    </motion.div>

                    {/* Sub Content with Image */}
                    <div className='flex flex-col custom-size:flex-row items-start gap-10 lg:gap-16'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative shrink-0  w-full custom-size:w-auto"
                        >
                            <img src={About3} alt="Team" className="relative z-10 w-full   rounded-lg shadow-xl object-cover custom-size:aspect-[3/4]" />
                        </motion.div>

                        <div className='space-y-10'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-black leading-[1.1]'
                            >
                                Unlock the potential <br /> of your business.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className='text-primary-gray text-lg leading-relaxed'
                            >
                                We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <img src={About4} alt="Workflow" className="w-full rounded-xl " />
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
                                        className="space-y-3 text-center"
                                    >
                                        <div className="flex items-center gap-3">
                                            {/* <div className="w-2 h-2 rounded-full bg-primary-red"></div> */}
                                            <h3 className= ' w-full  text-xl md:text-2xl text-center font-semibold text-primary-black'>{item.title}</h3>
                                        </div>
                                        <p className='text-primary-gray text-base leading-relaxed text-center'>{item.sub}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Image & Badge */}
                <div className='col-span-1 flex  flex-col sm:flex-row md:flex-col sm:justify-center items-center lg:items-end gap-10'>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        <img src={About2} alt="Office" className="relative z-10 w-full rounded-lg shadow-2xl object-cover" />
                    </motion.div>

                    <div className='flex justify-center lg:justify-end w-full pr-0 lg:pr-10 relative'>
                        {/* Rotating "10 Years" Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-80 h-80  flex items-center justify-center cursor-pointer overflow-visible"
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
                                className="w-40 h-40 bg-primary-red rounded-full flex flex-col items-center justify-center text-white z-10 border-[6px] border-white shadow-2xl"
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-7xl font-black leading-none drop-shadow-lg"
                                >
                                    10
                                </motion.span>
                                <span className="text-sm font-black uppercase tracking-[0.3em] mt-1 drop-shadow-md">
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