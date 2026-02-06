import React from 'react'
import { motion } from 'framer-motion'
import { CrmBlogs, CrmOne, CrmService, CrmTools, CrmesCta, Footer, Header, SliderOne, VideoIcon } from '../Componenets'
import { CrmMain, Line1, Line2 } from '../assets'

const Crm = () => {
   
    // Animation variants for container to stagger children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    // Animation for individual items (text, buttons)
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className='overflow-x-hidden'>
            {/* header  */}
            <Header />

            {/* main content  */}
            <main className='custom-padding py-20 relative min-h-[80vh] flex flex-col justify-center overflow-hidden'>
                {/* Decorative Elements - Animated Entrance */}
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    viewport={{ once: true }}
                    className='absolute top-20 md:top-40 left-0 w-[25%] md:w-[18%] -z-10'
                    src={Line1}
                    alt="Decorative Line"
                />
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    viewport={{ once: true }}
                    className='absolute bottom-0 right-0 w-[25%] md:w-[18%] -z-10'
                    src={Line2}
                    alt="Decorative Line"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='flex flex-col items-center justify-center gap-6 md:gap-8 z-10'
                >
                    <motion.h4 variants={itemVariants} className='text-xl md:text-2xl font-semibold text-primary-black text-center tracking-wide'>
                        CRM made simple
                    </motion.h4>

                    <motion.h2 variants={itemVariants} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl custom-size-two:text-6xl xl:text-7xl font-bold text-primary-black text-center capitalize leading-tight'>
                        all in one CRM for <br className='hidden md:block' /> modern teams
                    </motion.h2>

                    <motion.p variants={itemVariants} className='text-center mx-auto max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt deleniti est quo, quisquam harum similique esse quia aperiam distinctio!
                    </motion.p>

                    <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mt-2'>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(237, 28, 36, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-primary-red text-white px-8 py-3 rounded-full capitalize text-lg font-medium cursor-pointer transition-all duration-300 w-full sm:w-auto'
                        >
                            request a demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#ED1C24", boxShadow: "0px 10px 20px rgba(12, 12, 12, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-primary-black text-white px-8 py-3 rounded-full capitalize text-lg font-medium cursor-pointer transition-all duration-300 w-full sm:w-auto'
                        >
                            request a demo
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='flex justify-center items-center mt-12 md:mt-20 w-full'
                >
                    <img className='w-full max-w-6xl object-contain drop-shadow-xl hover:drop-shadow-2xl transition-all duration-500' src={CrmMain} alt="CRM Interface" />
                </motion.div>

            </main>
            {/* slider  */}
            <SliderOne/>
            {/* crm one  */}
            <CrmOne/>
            {/* crm service  */}
            <CrmService/>
            {/* crm cta  */}
            <CrmesCta/>
            {/* crm tools  */}
            <CrmTools/>
            {/* crm blogs  */}
            <CrmBlogs/>
            {/* video icon  */}
           
            {/* footer  */}
            <Footer />
        </div>
    )
}

export default Crm