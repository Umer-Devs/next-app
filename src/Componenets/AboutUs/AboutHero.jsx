import React from 'react'
import { motion } from 'framer-motion'
import { About1 } from '../../assets'

const AboutHero = () => {
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
    <section className='overflow-hidden bg-white py-12 md:py-20 lg:py-28'>
      <main className='custom-padding grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col justify-center space-y-6 lg:space-y-8'
        >
          <motion.h1
            variants={itemVariants}
            className='text-3xl md:text-5xl lg:text-6xl font-bold text-primary-black leading-tight capitalize text-center lg:text-left'
          >
            Get to know about
            <br className='hidden md:block' />
            <span className="capitalize"> CRM</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-primary-gray font-medium text-base md:text-lg leading-relaxed text-justify'
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap items-center justify-center lg:justify-start gap-4'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border-2 border-primary-red text-primary-black px-8 py-3 rounded-full font-bold transition-all hover:bg-primary-red hover:text-white w-full sm:w-auto flex justify-center'
            >
              Get Started Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-primary-black text-primary-red px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 border-2 border-primary-black transition-all hover:bg-transparent hover:text-primary-black w-full sm:w-auto'
            >
              Request a Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <div className='flex justify-center lg:justify-end items-center '>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-lg lg:max-w-2xl"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='w-full h-auto drop-shadow-2xl'
              src={About1}
              alt="HR Software Interface"
            />
          </motion.div>
        </div>
      </main>
    </section>
  )
}

export default AboutHero