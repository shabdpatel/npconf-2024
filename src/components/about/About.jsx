import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
    const { scrollY } = useViewportScroll();
    const textX = useTransform(scrollY, [0, 700], [-500, 0]);
    const textXOut = useTransform(scrollY, [300, 1000], [0, 500]);

    return (
        <div className="min-h-screen relative flex flex-col justify-center items-center text-white bg-black">
            {/* Main Content */}
            <motion.div
                className="z-10 flex flex-col mt-20 h-full w-full px-4 md:px-10 md:flex-row"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
            >
                {/* Text Section */}
                <div className="flex flex-col md:justify-start justify-center items-center md:items-start text-left w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:w-full md:text-center md:mb-6">Who are we</h1>
                    <p className="text-sm md:text-lg font-sans mx-2 md:mx-0 mt-2 w-96 md:w-full text-center">
                        The engineering physics branch's departmental club is Team Abraxas - a vibrant community of individuals fueled by passion, creativity, and technology. We embark on a journey to unravel the secrets of the universe, while at the same time, creating technological wonders that defy imagination. Our research encompasses a kaleidoscope of physics disciplines - from the frontier of quantum computing to the timeless theories of particle physics. Physics enthusiasts, come and join us in a world of discovery, where the universe is your playground and knowledge is your compass. Let's ignite your curiosity, spark new ideas and demonstrate your expertise. With discussions, demonstrations, and discoveries, we will create a captivating atmosphere that will leave a lasting impression on all who join us. Though we may be new, we are determined to make our mark and leave a legacy that will be remembered for years to come.
                    </p>
                </div>

                {/* Image Section (Placeholder for RoverCanvas or other content) */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div>
                        {/* Placeholder for RoverCanvas or other content */}
                        <div className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">Rover Canvas</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CountUp Section */}
            <motion.div
                className="flex flex-col md:flex-row justify-around w-full mt-8 md:mt-24 py-8 md:py-10 bg-gradient-to-r from-blue-400 to-slate-900"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 1 }}
            >
                <div className="text-center mb-6 md:mb-0">
                    <h3 className="text-3xl md:text-5xl font-bold">
                        <CountUp end={15} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Projects</p>
                </div>
                <div className="text-center mb-6 md:mb-0">
                    <h3 className="text-3xl md:text-5xl font-bold">
                        <CountUp end={46} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Members</p>
                </div>
                <div className="text-center mb-6 md:mb-0">
                    <h3 className="text-3xl md:text-5xl font-bold">
                        <CountUp end={1} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Wins</p>
                </div>
                <div className="text-center mb-6 md:mb-0">
                    <h3 className="text-3xl md:text-5xl font-bold">
                        <CountUp end={2} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Events</p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;