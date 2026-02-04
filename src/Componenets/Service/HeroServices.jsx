import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { HeroImg, HeroMini, WhyChoose1 } from '../../assets'

const HeroServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className='overflow-hidden bg-white'>
      <main className='grid custom-size:grid-cols-2 custom-padding min-h-screen items-center py-10 custom-size:py-0'>
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col justify-center space-y-6 lg:space-y-8'
        >
          <motion.h1
            variants={itemVariants}
            className='font-bold text-primary-black leading-[1.2] capitalize'
          >
           Get Automated With <br />
            <span className="capitalize">The Best CRM for Businesses</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-primary-gray font-medium leading-relaxed font-medium text-primary-black text-justify'
          >
           All the generators on the Internet tend to repeat predefined chunks as necessary, 
making this the first true generator on the Internet.
          </motion.p>

         

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap items-center gap-4 lg:gap-8'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border-2 border-primary-red text-primary-black px-10 py-3 rounded-full font-bold transition-all hover:bg-primary-red hover:text-white'
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-primary-black text-primary-red px-8 py-3 rounded-full font-bold flex items-center gap-2 border-2 border-primary-black transition-all hover:bg-transparent hover:text-primary-black'
            >
              Request a Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image & Animated Boxes */}
        <div className='relative flex justify-end custom-size:justify-end items-center mt-24 custom-size:mt-0'>
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            < motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
              className=' lg:max-h-[75vh] w-full lg:w-auto lg:object-contain drop-shadow-2xl'
              src={WhyChoose1}
              alt="HR Software Interface"
            />

          

            {/* Decorative Background Blur */}
            {/* <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-red/10 rounded-full blur-3xl" /> */}
          </motion.div>
        </div>
      </main>
    </section>
  )
}

export default HeroServices