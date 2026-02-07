import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Account1, Account2, Account3, Account4, Account5, Account6, Line1 } from '../assets';

const Accounts = () => {
    const accountCards = [
        {
            id: 1,
            title: 'Core HR & Employee Management',
            desc: "Centralized employee database with digital profiles, document management, organizational structure, and complete employee lifecycle management from hiring to exit.",
            img: Account1,
            points: [
                "Centralized employee database",
                "Digital employee profiles",
                "Document & record management",
                "Organizational hierarchy view",
                "Employee lifecycle tracking",
                "Secure role-based access"
            ]
        },
        {
            id: 2,
            title: 'Attendance & Leave Management',
            desc: "Automated attendance tracking, shift management, leave applications, approvals, holiday calendars, and real-time leave balance monitoring.",
            img: Account2,
            points: [
                "Real-time attendance tracking",
                "Shift & roster management",
                "Online leave applications",
                "Automated approval workflows",
                "Leave balance tracking",
                "Holiday & overtime management"
            ]
        },
        {
            id: 3,
            title: 'Payroll & Compensation',
            desc: "Automated payroll processing with salary calculations, allowances, deductions, tax management, and secure online payslip access.",
            img: Account3,
            points: [
                "Automated salary processing",
                "Allowances & deductions handling",
                "Tax calculations",
                "Payslip generation & download",
                "Payroll history access",
                "Secure payroll reports"
            ]
        },
        {
            id: 4,
            title: 'Employee Self-Service Portal',
            desc: "Employees can update profiles, apply for leave, view attendance, download payslips, submit requests, and access HR services anytime.",
            img: Account4,
            points: [
                "Personal dashboard access",
                "Profile updates anytime",
                "Leave & attendance requests",
                "Payslip downloads",
                "HR service requests",
                "Company announcements"
            ]
        },
        {
            id: 5,
            title: 'Performance & Development',
            desc: "Goal setting, performance evaluations, appraisals, training management, and employee growth tracking to improve productivity and engagement.",
            img: Account5,
            points: [
                "Goal & KPI management",
                "Performance reviews",
                "Appraisal tracking",
                "Training management",
                "Skill development records",
                "Employee feedback system"
            ]
        },
        {
            id: 6,
            title: 'Reports, Analytics & Automation',
            desc: "Smart dashboards, HR analytics, automated workflows, approval processes, and integration-ready reporting for better decision-making.",
            img: Account6,
            points: [
                "Smart HR dashboards",
                "Real-time analytics",
                "Custom report generation",
                "Automated workflows",
                "Approval automation",
                "Data-driven insights"
            ]
        },
    ];

    return (
        <>
            <section className="custom-padding py-20 bg-white relative overflow-hidden font-outfit">
                <img src={Line1} alt="" className='absolute top-8 left-0 select-none pointer-events-none' />
                {/* Sketchy background decor */}
                <div className="absolute top-0 left-0 w-40 opacity-20 pointer-events-none select-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#343A40" strokeWidth="2" d="M10,10 C50,10 20,50 60,50 C100,50 70,100 110,100 C150,100 120,150 160,150" strokeDasharray="5,5" />
                        <path fill="none" stroke="#343A40" strokeWidth="2" d="M20,30 C60,30 30,70 70,70 C110,70 80,120 120,120" strokeDasharray="4,4" />
                    </svg>
                </div>

                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl text-primary-black font-bold mx-auto leading-tight"
                    >
                        Smart HRM & Employee <br className="hidden md:block" />  Self Service Portal
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accountCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-gray-50 border w-full mx-auto border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Base Content */}
                            <div className="relative z-0 group-hover:opacity-40 transition-opacity duration-500">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-primary-black leading-tight max-w-[80%]">
                                        {card.title}
                                    </h3>
                                    <div className="p-2 bg-white rounded-full text-primary-red shadow-sm">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                <p className="text-slate-500 text-[15px] mb-8 line-clamp-3">
                                    {card.desc}
                                </p>

                                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-white p-4">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Hover Box Overlay */}
                            <div className="absolute inset-x-0 bottom-0 top-1/4 bg-primary-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 p-8 flex flex-col justify-center">
                                <h4 className="text-white font-bold text-xl mb-6 border-b border-white/20 pb-4">
                                    Key Features
                                </h4>
                                <ul className="space-y-4">
                                    {card.points.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-white text-[15px] font-medium"
                                        >
                                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white text-primary-red flex items-center justify-center">
                                                <Check size={12} strokeWidth={4} />
                                            </div>
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Accounts;

