import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#E5E5E5] text-primary-black">
            {/* Main Footer Content */}
            <div className="custom-padding py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">

                    {/* Column 1: Logo & Info */}
                    <div className="space-y-8">
                        <Link to="/">
                            <h2 className="text-6xl font-black tracking-tighter uppercase">LOGO</h2>
                        </Link>
                        <p className="text-primary-gray font-medium leading-relaxed max-w-">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                    </div>

                    {/* Column 2: Support Links */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold uppercase tracking-wider">Support</h4>
                        <ul className="space-y-4">
                            {['Home', 'Operations / Work', 'HR (Human Resources)', 'CRM', 'Contact us'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to="#"
                                        className="text-lg font-bold hover:text-primary-red transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Get in Touch */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold uppercase tracking-wider mb-6">Get In Touch</h4>
                            <p className="text-primary-gray font-medium mb-6">
                                Lorem ipsum dolor sit amet consectetur. Ut mauris fermentum consectetur.
                            </p>
                        </div>

                        {/* Subscription Form */}
                        <div className="relative flex items-center max-w-sm">
                            <input
                                type="email"
                                placeholder="Your E-Mail Address"
                                className="w-full bg-white px-6 py-4 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-red/20 placeholder:text-gray-400"
                            />
                            <button className="absolute right-2 bg-primary-red text-white p-2 rounded-lg hover:bg-primary-black transition-all duration-300">
                                <Send size={20} />
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4 group">
                                <Phone size={20} className="group-hover:text-primary-red transition-colors" />
                                <span className="font-bold">+1 281-874-8480</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <Mail size={20} className="group-hover:text-primary-red transition-colors" />
                                <span className="font-bold">Info@Autotrade.Com</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 py-8 custom-padding">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-bold text-center md:text-left text-sm md:text-base">
                        Copyright © 2026 Renexus Resource Group All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-sm md:text-base">
                        <Link to="#" className="hover:text-primary-red transition-colors">Privacy</Link>
                        <span>|</span>
                        <Link to="#" className="hover:text-primary-red transition-colors">Terms Of Use</Link>
                        <span>|</span>
                        <Link to="#" className="hover:text-primary-red transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
