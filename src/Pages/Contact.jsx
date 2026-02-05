import React from 'react'
import { Footer, Forms, Header } from '../Componenets'
import { ContactBg } from '../assets'

const Contact = () => {
    return (
        <>
            <Header />
            <main className='custom-padding w-full flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover min-h-[60vh] relative' style={{ backgroundImage: `url(${ContactBg})` }}>
                <div className='flex flex-col justify-center items-center w-full space-y-8 z-10'>
                    <h2 className=' text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center capitalize'>Contact Us</h2>
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 capitalize'>
                        <button className=' border-2 border-primary-red text-white px-10 py-3 rounded-full capitalize  transition-all duration-300  hover:text-primary-red'>
                            get started now
                        </button>
                        <button className='bg-primary-black border-2 border-primary-black text-white px-10 py-3  capitalize rounded-full transition-all duration-300  '>
                           learn more
                        </button>
                    </div>
                </div>
            </main>
            <Forms/>
            <Footer />
        </>
    )
}

export default Contact