import React, { useState } from 'react';
import Eventscard from './Eventscard';
import { motion } from 'framer-motion';

const Events = () => {
    // Animation variants for container
    const containerVariants = {
        hidden: { 
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    // Animation variants for children elements
    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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