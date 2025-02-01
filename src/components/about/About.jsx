import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import RoverCanvas from './Rover';

const About = () => {
    const { scrollY } = useViewportScroll();
    const textX = useTransform(scrollY, [0, 700], [-500, 0]);
    const textXOut = useTransform(scrollY, [300, 1000], [0, 500]);

    return (
        <div className="min-h-screen relative flex flex-col justify-start items-center bg-black text-white py-16 sm:py-20 lg:py-24">
            {/* Main Content */}
            <motion.div
                className="z-10 flex flex-col w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="flex flex-col w-full lg:w-1/2">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-normal font-bold font-sans bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text mb-4 sm:mb-6">
                            Who we are
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg  max-w-prose tracking-normal text-gray-300 leading-relaxed">
                            Team Abraxas is the engineering physics branch's departmental club - a vibrant community driven by passion for technology and discovery. We explore diverse physics disciplines from quantum computing to particle physics, creating technological innovations while unraveling universal mysteries. As physics enthusiasts, we've built a space where curiosity thrives and knowledge grows. Through engaging discussions, demonstrations, and groundbreaking discoveries, we're building a legacy that combines scientific exploration with practical innovation, inviting fellow enthusiasts to join us in pushing the boundaries of what's possible.
                        </p>
                    </div>

                    {/* <RoverCanvas/> */}
                </div>

                {/* CountUp Section */}
                <motion.div
                    className="mt-12 sm:mt-16 lg:mt-24 w-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, delay: 1 }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-gradient-to-r from-blue-400 to-slate-900 rounded-xl">
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                                <CountUp end={19} duration={5} />
                            </h3>
                            <p className="text-sm sm:text-base lg:text-xl font-medium text-gray-200">Projects</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                                <CountUp end={46} duration={5} />
                            </h3>
                            <p className="text-sm sm:text-base lg:text-xl font-medium text-gray-200">Members</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                                <CountUp end={1} duration={5} />
                            </h3>
                            <p className="text-sm sm:text-base lg:text-xl font-medium text-gray-200">Wins</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                                <CountUp end={2} duration={5} />
                            </h3>
                            <p className="text-sm sm:text-base lg:text-xl font-medium text-gray-200">Events</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;