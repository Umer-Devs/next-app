import React from 'react'
import { motion } from 'framer-motion'
import { WhyChoose1 } from '../assets'

const WhyChooseUs = () => {
    const features = [
        "Fastest Growing HR Software",
        "Single Click Payroll",
        "Customized User Role",
        "Automated Alerts & Notifications",
        "On-Cloud & On-Premises",
        "Mobile Application",
        "Dynamic Workflow & Approvals",
        "Employee Self Service",
        "Dynamic & Customizable Reports",
        "Analytical & Dynamic HR Dashboards",
        "AI Based Voice Drive HCMS/HRMS",
        "Geo Fencing Capabilities"
    ];

    return (
        <section className='custom-padding py-20 bg-white overflow-hidden'>
            <div className='grid custom-size:grid-cols-2 items-center'>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex flex-col space-y-6'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-primary-black tracking-tight'>
                        Why Choose Us
                    </h2>

                    <p className='text-primary-black font-medium text-justify  custom-size:min-w-4xl'>
                        FlowHCM Stands Out Due To Its Comprehensive HRMS Features Designed To Streamline Human Resource Management. It Offers Robust Functionalities For Managing Employee Data, Payroll Processing,  Evaluations All Within A User-Friendly Interface. With Its Emphasis On Scalability And Efficiency, FlowHCM Empowers Organizations To Optimize Their HR Processes And Enhance Overall Productivity Seamlessly.
                    </p>

                    <div className='w-full max-w-md h-[2px] bg-primary-red relative my-4'>
                        <div className='absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-red rotate-45' />
                    </div>

                    <div className='grid md:grid-cols-2 gap-x-8 gap-y-4 pt-4'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className='flex items-center gap-3 group'
                            >
                                <div className='w-2 h-2 rounded-full bg-primary-red flex-shrink-0 group-hover:scale-150 transition-transform' />
                                <span className='text-primary-black font-bold text-[15px] leading-tight'>
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='relative flex justify-center custom-size:justify-end items-center'
                >
                    {/* Red decorative shape in background */}
                  

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src={WhyChoose1}
                            alt="HR Software Interface on Laptop"
                            className='w-full max-w-[600px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
