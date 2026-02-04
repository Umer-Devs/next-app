import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'home', path: '/' },
        { name: 'about us', path: '/about' },
        { name: 'services', path: '/services' },
        { name: 'blog', path: '/blog' },
    ];
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="custom-padding py-6 sticky top-0 bg-white z-50  "
        >
            <div className="flex items-center justify-between ">

                {/* Logo */}
                <Link to="/">
                    <h2 className="text-4xl font-bold text-primary-black">LOGO</h2>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center bg-primary-black rounded-lg p-2 px-16 space-x-16">
                    <ul className="flex items-center space-x-10 capitalize text-white">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-primary-red' : 'text-white hover:text-primary-red'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {/* Active/Hover Line Animation */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeUnderline"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-red"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-red text-white px-6 py-2 rounded-full capitalize text-lg font-medium"
                        >
                            contact us
                        </motion.button>
                    </Link>
                </div>

                {/* Desktop Demo Button */}
                <div className="hidden lg:block">
                    <Link to="/request-demo">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-red px-6 py-2 rounded-full text-white capitalize text-lg font-medium"
                        >
                            request a demo
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-primary-black"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Navigation Mesh/Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                        />

                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] bg-primary-black z-50 lg:hidden flex flex-col p-8 pt-24"
                        >
                            <button
                                onClick={toggleMobileMenu}
                                className="absolute top-6 right-6 text-white"
                            >
                                <X size={32} />
                            </button>

                            <ul className="flex flex-col space-y-8 capitalize text-2xl font-semibold">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `transition-colors duration-300 ${isActive ? 'text-primary-red' : 'text-white hover:text-primary-red'
                                                }`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 flex flex-col space-y-4 w-full">
                                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                    <button className="w-full bg-primary-red text-white py-4 rounded-xl text-xl font-semibold">
                                        Contact Us
                                    </button>
                                </Link>
                                <Link to="/request-demo" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                    <button className="w-full border-2 border-primary-red text-primary-red py-4 rounded-xl text-xl font-semibold">
                                        Request a Demo
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Header;
