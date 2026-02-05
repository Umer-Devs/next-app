import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Users, Briefcase, Clock, ShieldCheck, FileText, BarChart3 } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TopModules = () => {
    const modules = [
        { id: 1, title: 'Employee', desc: 'Streamline Workforce Data And Operations', icon: <Users size={32} /> },
        { id: 2, title: 'Recruitment', desc: 'Find and hire the best talent globally', icon: <Briefcase size={32} /> },
        { id: 3, title: 'Attendance', desc: 'Real-time tracking of employee presence', icon: <Clock size={32} /> },
        { id: 4, title: 'Payroll', desc: 'Automated salary and tax calculations', icon: <BarChart3 size={32} /> },
        { id: 5, title: 'Performance', desc: 'KPI tracking and performance reviews', icon: <ShieldCheck size={32} /> },
        { id: 6, title: 'Documents', desc: 'Secure storage for all company files', icon: <FileText size={32} /> },
    ];

    return (
        <section className="py-20 bg-white custom-padding mt-18 overflow-hidden">
            <div className="flex flex-col mb-12">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-primary-black uppercase tracking-tight"
                >
                    Renexus TOP MODULES
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-primary-gray font-medium mt-2 max-w-2xl"
                >
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                </motion.p>
            </div>

            <div className="relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-custom-bullet',
                        bulletActiveClass: 'swiper-custom-bullet-active',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-16"
                >
                    {modules.map((module) => (
                        <SwiperSlide key={module.id} className="py-4">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white border border-gray-300 p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-start gap-4 transition-all hover:shadow-2xl hover:border-primary-red/20 h-full"
                            >
                                <div className="p-4 bg-primary-gray text-white rounded-full transition-colors duration-300 hover:bg-primary-red">
                                    {module.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-primary-black">{module.title}</h3>
                                    <p className="text-primary-gray font-semibold text-sm leading-relaxed">
                                        {module.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom styling for pagination bullets */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .swiper-pagination {
                        position: relative !important;
                        bottom: 0 !important;
                        margin-top: 2rem;
                    }
                    .swiper-custom-bullet {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: #e5e7eb;
                        border-radius: 99px;
                        margin: 0 6px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .swiper-custom-bullet-active {
                        width: 32px;
                        background: #ED1C24;
                    }
                `}} />
            </div>
        </section>
    );
};

export default TopModules;
