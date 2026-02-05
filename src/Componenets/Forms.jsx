import React from 'react'
import { Contact1, Line1, Line2 } from '../assets'
import { Mail, Phone, Clock } from 'lucide-react'

const Forms = () => {
    const contactInfo = [
        {
            id: 1,
            icon: <Mail className="w-6 h-6" />,
            title: "Our Email",
            subtitle: "Lorem Ipsum@gmail.com",
            
        },
        {
            id: 2,
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            subtitle: "+111-222-333"
        },
        {
            id: 3,
            icon: <Clock className="w-6 h-6" />,
            title: "Schedule",
            subtitle: "Sunday-Fri: 9 AM - 6 PM"
        }
    ]

    return (
        <section className="custom-padding py-16 bg-white relative">
            <img src={Line1} alt="" className='absolute top-0 left-0' />
            <img src={Line2} alt="" className='absolute bottom-0 right-0' />
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-black">Let's Discuss Your IT Needs</h2>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 ">
                {contactInfo.map((info) => (
                    <div
                        key={info.id}
                        className={`flex z-10 items-center gap-4 p-6 rounded-2xl transition-all duration-300 cursor-pointer
                        ${info.active
                                ? 'bg-primary-red text-white transform scale-105 z-10'
                                : 'bg-gray-100 text-primary-black hover:bg-primary-red z-10 hover:text-white group hover:scale-105 hover:shadow-xl'
                            } 
                    `}
                    >
                        <div className={`p-3 rounded-full flex items-center justify-center w-12 h-12 ${info.active ? 'bg-white text-primary-red' : 'bg-white text-primary-red'}`}>
                            {info.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">{info.title}</h3>
                            <p className={`text-sm font-medium ${info.active ? 'text-white/90' : 'text-gray-500 group-hover:text-white/90'}`}>{info.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div className="w-full h-full overflow-hidden flex justify-center md:justify-end">
                    <img src={Contact1} alt="Team meeting" className="w-[80%] object-cover transform hover:scale-105 transition-transform duration-700 rounded-xl " />
                </div>

                {/* Form */}
                <div className="bg-gray-100 p-6 md:p-10 rounded-3xl z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary-black">Get In Touch Now</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <input type="text" placeholder="First Name" className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black" />
                            <input type="text" placeholder="Last Name" className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <input type="tel" placeholder="Phone Number" className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black" />
                        </div>
                        <input type="text" placeholder="Service Type" className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black" />
                        <textarea rows="5" placeholder="Your Message" className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black resize-none"></textarea>

                        <button type="submit" className="w-full bg-primary-red text-white title text-xl font-bold py-4 rounded-xl hover:bg-primary-black transition-all shadow-lg hover:shadow-xl">
                            Get Started Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forms