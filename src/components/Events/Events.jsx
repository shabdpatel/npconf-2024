import React from 'react';
import Eventscard from './Eventscard';
import { motion } from 'framer-motion';

const Events = () => {
    // Comprehensive animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    // Enhanced bottom-to-top reveal variants
    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 100  // Start further down for more pronounced effect
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",  // Adds a slight bounce effect
                stiffness: 50,   // Controls spring intensity
                damping: 10,     // Controls bounce
                duration: 0.8
            }
        }
    };

    return (
        <motion.div 
            className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-5 text-center"
                variants={itemVariants}
            >
                Our{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
                    Events and Workshops
                </span>
            </motion.h2>

            <motion.p
                className="text-center text-gray-300 text-xl md:text-2xl mb-6 md:mb-8"
                variants={itemVariants}
            >
                Get updated on our latest events and workshops
            </motion.p>

            <motion.div
                variants={itemVariants}
            >
                <Eventscard />
            </motion.div>
        </motion.div>
    );
};

export default Events;