import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Wallet, ClipboardList, CalendarCheck, Layout, Banknote, Headset } from 'lucide-react';
import { Line1 } from '../../assets';

const ServicesOne = () => {
    const servicesData = [
        {
            id: 1,
            title: 'EMPLOYEE CRM',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <Users size={32} />,
            path: '/crm'
        },
        {
            id: 2,
            title: 'ACCOUNTS',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <Wallet size={32} />,
            path: '/service'
        },
        {
            id: 3,
            title: 'TASK MANAGEMENT',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <ClipboardList size={32} />,
            path: '/service'
        },
        {
            id: 4,
            title: 'ATTENDANCE',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <CalendarCheck size={32} />,
            path: '/service'
        },
        {
            id: 5,
            title: 'COMPLETE HRM',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <Layout size={32} />,
            path: '/hrms'
        },
        {
            id: 6,
            title: 'PAYROLL',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <Banknote size={32} />,
            path: '/service'
        },
        {
            id: 7,
            title: 'CALLCENTER SOLUTIONS',
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
            icon: <Headset size={32} />,
            path: '/service/call-center'
        }
    ];

    return (
        <section className="custom-padding py-24 bg-white relative overflow-hidden">
            <img src={Line1} alt="" className='absolute top-10 left-0 ' />
            {/* Sketchy background decor */}
            <div className="absolute top-20 left-0 w-32 md:w-60 opacity-10 pointer-events-none select-none">
                <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000" strokeWidth="2" d="M10,10 C50,10 20,50 60,50 C100,50 70,100 110,100 C150,100 120,150 160,150" strokeDasharray="5,5" />
                    <path fill="none" stroke="#000" strokeWidth="2" d="M20,30 C60,30 30,70 70,70 C110,70 80,120 120,120" strokeDasharray="4,4" />
                    <path fill="none" stroke="#000" strokeWidth="2" d="M5,100 C40,110 30,160 80,170 C130,180 100,240 150,250" strokeDasharray="6,3" />
                </svg>
            </div>

            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-primary-black mb-6"
                >
                    Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-primary-gray font-medium max-w-3xl mx-auto leading-relaxed"
                >
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 custom-size:grid-cols-3 gap-10">
                {servicesData.map((service, index) => (
                    <Link to={service.path} key={service.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white border border-gray-50 p-10 rounded-3xl hover:bg-primary-red transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            <div className="flex flex-col space-y-6">
                                {/* Icon Container */}
                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-primary-black group-hover:bg-white transition-colors duration-500">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black text-primary-black group-hover:text-white transition-colors duration-500">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-primary-gray font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                                    {service.description}
                                </p>

                                {/* Read More */}
                                <div className="flex items-center gap-2 group/btn">
                                    <span className="text-primary-black font-bold group-hover:text-white transition-colors duration-500">
                                        Read More
                                    </span>
                                    <ArrowRight size={18} className="text-primary-black group-hover:text-white transform group-hover/btn:translate-x-1 transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServicesOne;
