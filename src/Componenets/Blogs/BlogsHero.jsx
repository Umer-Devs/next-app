import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { About1, HeroImg, HeroMini, Line2, WhyChoose1 } from '../../assets'

const BlogsHero = () => {
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
    <section className='overflow-hidden bg-white my-[8%] relative'>
       <img src={Line2} className='absolute -top-0 -right-0' alt="" />
      <main className='grid custom-size:grid-cols-2 custom-padding  items-center py-20 custom-size:py-0'>
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
           Exploring The lorem

<br className='hidden custom-size:block' />
            <span className="capitalize">ipsum Blog</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-primary-gray font-medium leading-relaxed font-medium text-primary-black text-justify'
          >
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
             Get Started Now
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
        <div className=' hidden  relative custom-size:flex justify-center  ` custom-size:justify-end items-center  custom-size:mt-0'>
         
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
              className='  w-full max-w-md custom-size-two:max-w-2xl  drop-shadow-2xl'
              src={About1}
              alt="HR Software Interface"
            /> 
          </motion.div>
        </div>
      </main>
    </section>
  )
}

export default BlogsHero