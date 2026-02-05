import React from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose }) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100">
                            <h2 className="text-2xl sm:text-3xl font-bold text-primary-red">Get Connected With Us</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary-red"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="p-6 sm:p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Job Position</label>
                                        <select className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors bg-white text-gray-700">
                                            <option value="" disabled selected>Select Position</option>
                                            <option value="hr">HR Manager</option>
                                            <option value="ceo">CEO / Director</option>
                                            <option value="manager">Manager</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Your Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your company Name"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Total Employees in Company</label>
                                        <input
                                            type="text"
                                            placeholder="Total Employees in Company"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Your Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Phone Number"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Full Width Fields */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-black">Best Time to Contact</label>
                                <input
                                    type="text"
                                    placeholder="E.g. 09:30 AM to 05:30 PM GMT"
                                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-black">Comments</label>
                                <textarea
                                    placeholder="Do you have any additional question?"
                                    rows="2"
                                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            {/* Checkboxes */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-primary-black">I Require</label>
                                <div className="flex flex-wrap gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-primary-red transition-colors">
                                            <input type="checkbox" className="peer w-0 h-0 opacity-0" />
                                            <div className="w-3 h-3 bg-primary-red rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-primary-black">Free Demo</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-primary-red transition-colors">
                                            <input type="checkbox" className="peer w-0 h-0 opacity-0" />
                                            <div className="w-3 h-3 bg-primary-red rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-primary-black">Price Quote</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-primary-red transition-colors">
                                            <input type="checkbox" className="peer w-0 h-0 opacity-0" />
                                            <div className="w-3 h-3 bg-primary-red rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-primary-black">Contact Me</span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-primary-red text-white font-bold py-3 px-10 rounded hover:bg-primary-black transition-colors duration-300 shadow-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default Modal