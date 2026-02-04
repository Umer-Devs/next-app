import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { HeroImg, HeroMini } from '../../assets'

const Hero = () => {
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
            className='font-bold text-primary-black leading-[1.2]'
          >
            Best HR Software <br />
            <span className="">To Manage Your Employe</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-primary-gray font-medium leading-relaxed font-medium text-primary-black text-justify'
          >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vitae quidem pariatur ipsa necessitatibus reiciendis, vero rerum laborum quo, dolorum sunt. Provident facilis id impedit rerum commodi maxime ipsam ducimus libero aperiam nulla. Minima!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex items-center gap-4 bg-gray-50 p-3 rounded-2xl w-fit'
          >
            <img className='h-16' src={HeroMini} alt="Trusted Companies" />
            <p className='text-primary-red  md:text-lg font-bold'>
              Trusted by 1000+ companies
            </p>
          </motion.div>

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
            <img
              className=' lg:max-h-[75vh] w-full lg:w-auto lg:object-contain drop-shadow-2xl'
              src={HeroImg}
              alt="HR Software Interface"
            />

            {/* Box 1: Sign In Status */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{
                x: { delay: 0.5, duration: 0.8 },
                opacity: { delay: 0.5, duration: 1 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-10 -left-4 md:-left-60  bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 min-w-[200px] md:min-w-[280px] z-20"
            >
              
              <span className=" text-primary-black text-sm md:text-base font-semibold mb-1">
                You Signed In Today at 09:25:50 AM
              </span>
              <h3 className="text-primary-red text-xl  font-bold mb-3 md:mb-4 text-center">
                5:55:20
              </h3>
              <button className="w-full bg-primary-red text-white py-2 rounded-lg text-xs md:text-sm font-bold uppercase transition-transform hover:scale-105">
                SIGN OUT
              </button>
            </motion.div>

            {/* Box 2: Payslip */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, 10, 0]
              }}
              
              className="absolute bottom-4 -left-4 md:-left-40 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 min-w-[200px] md:min-w-[280px] z-20"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                
                <h4 className="text-primary-black text-sm md:text-lg text-center font-bold leading-tight">
                  Here is your last month <br /> payslip
                </h4>
              </div>
              <button className="w-full bg-primary-red text-white py-2 md:py-3 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                Download Payslip! <Download size={16} />
              </button>
              <div className=" absolute -top-1 -left-8 p-2 bg-primary-red/10 rounded-full border border-primary-red/20 shadow-sm">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-[10px] md:text-xs">
                    RX
                  </div>
                </div>
            </motion.div>

            {/* Decorative Background Blur */}
            {/* <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-red/10 rounded-full blur-3xl" /> */}
          </motion.div>
        </div>
      </main>
    </section>
  )
}

export default Hero