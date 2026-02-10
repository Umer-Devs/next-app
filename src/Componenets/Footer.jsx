import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send, MapPinHouse, Facebook, Instagram } from 'lucide-react';
import { Logo } from '../assets';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter an email address');
            return;
        }
        setLoading(true);
        const loadingToast = toast.loading('Subscribing...');

        try {
            const response = await axios.post('https://processiqtech.com/php/send_email_dynamic.php', email);

            if (response.data.status === 'success' || response.status === 200) {
                toast.success('Successfully subscribed to newsletter!', { id: loadingToast });
                setEmail('');
            } else {
                toast.error(response.data.message || 'Something went wrong. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            toast.error('Failed to subscribe. Please try again.', { id: loadingToast });
            console.error('Subscription error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <footer className="bg-[#E5E5E5] text-primary-black font-outfit">
            {/* Main Footer Content */}
            <div className="custom-padding py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 custom-size:grid-cols-3 gap-12 custom-size:gap-24">

                    {/* Column 1: Logo & Info */}
                    <div className="space-y-8">
                        <Link to="/">
                            <img className='w-72' src={Logo} alt="" />
                        </Link>
                        <p className="text-primary-gray font-medium leading-relaxed max-w-sm">
                            Empowering global enterprises with intelligent IT solutions, strategic BPO, and next-gen customer engagement platforms. We streamline complexity to drive sustainable business growth.
                        </p>
                        <div className='flex items-center gap-4  '> <a href='https://www.facebook.com/processiqtech/' target="_blank" > <Facebook  size={30} /></a> <a href='https://www.instagram.com/processiqtech/' target="_blank"><Instagram  size={30} /></a> <a  href="https://www.trustpilot.com/review/processiqtech.com"><svg xmlns="http://www.w3.org/2000/svg" x="40px" y="70px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#00b67a" d="M45.023,18.995H28.991L24.039,3.737l-4.968,15.259L3.039,18.98l12.984,9.44l-4.968,15.243 l12.984-9.424l12.968,9.424L32.055,28.42L45.023,18.995z"></path><path fill="#005128" d="M33.169,31.871l-1.114-3.451l-8.016,5.819L33.169,31.871z"></path>
</svg></a> </div>

                    </div>

                    {/* Column 2: Support Links */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold uppercase tracking-wider text-primary-red">Support</h4> 
                        <ul className="space-y-4 text-primary-gray">
                            {[
                                { name: 'HOME', path: '/' },
                                { name: 'ABOUT', path: '/about' },
                                { name: 'HRMS', path: '/hrms' },
                                { name: 'SERVICES', path: '/service' },
                                { name: 'CONTACT US', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-lg font-bold hover:text-primary-red transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Get in Touch */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold uppercase tracking-wider mb-6 text-primary-red">Get In Touch</h4>
                            <p className="text-primary-gray font-medium mb-6">
                                Subscribe to our newsletter for the latest tech insights and business optimization strategies.
                            </p>
                        </div>
                        {/* Subscription Form */}
                        <form onSubmit={handleSubmit} className="relative flex items-center max-w-sm">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your E-Mail Address"
                                required
                                className="w-full bg-white px-6 py-4 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-red/20 placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="absolute right-2 bg-primary-red text-white p-2 rounded-lg hover:bg-primary-black transition-all duration-300 disabled:opacity-50"
                            >
                                <Send size={20} />
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-4 pt-2">
                            {/* <div className="flex items-center gap-4 group">
                                <Phone size={20} className="group-hover:text-primary-red transition-colors text-primary-red" />
                                <span className="font-bold">+1 281-874-8480</span>
                            </div> */}
                            <div className="flex items-center gap-4 group">
                                <Mail size={20} className="group-hover:text-primary-red transition-colors text-primary-red" />
                                <span className="font-bold">Info@processiqtech.com</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                               <MapPinHouse  size={20} className="group-hover:text-primary-red transition-colors text-primary-red" />
                                <span className="font-semibold">150 NW 72ND AVE TOWER 1 STE 455 #18787, MIAMI, FL 33126</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 py-8 custom-padding">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="font-bold text-center md:text-left text-sm md:text-base">
                        Copyright © 2026 ProcessIQ Tech All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
