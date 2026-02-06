import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const VideoIcon = () => {
    return (
        <div className="relative flex items-center justify-center w-24 h-24">
            {/* Ripple 1 */}
            <motion.div
                className="absolute w-full h-full bg-primary-red rounded-full opacity-30"
                animate={{ scale: [1, 3], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0 }}
            />
            {/* Ripple 2 */}
            <motion.div
                className="absolute w-full h-full bg-primary-red rounded-full opacity-30"
                animate={{ scale: [1, 3], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            {/* Ripple 3 */}
            <motion.div
                className="absolute w-full h-full bg-primary-red rounded-full opacity-30"
                animate={{ scale: [1, 3], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
            />

            {/* Play Button */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary-red rounded-full shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 group">
                <Play className="w-6 h-6 text-white fill-white ml-1 group-hover:scale-110 transition-transform duration-300" />
            </div>
        </div>
    )
}

export default VideoIcon