import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import RoverCanvas from './Rover';

const About = () => {
    const { scrollY } = useViewportScroll();
    const textX = useTransform(scrollY, [0, 700], [-500, 0]);
    const textXOut = useTransform(scrollY, [300, 1000], [0, 500]);

    return (
        <div className="full-height relative flex flex-col justify-center items-center text-white">
            <motion.div
                className="absolute top-0 w-full flex justify-center mt-[595px] md:mt-[-115px] z-20"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
            >
                {/* <img
                    src="/mountains.png"
                    alt="Mountain"
                    className="w-full object-cover"
                /> */}
            </motion.div>
            <div className="z-10 flex flex-col mt-20 h-full w-full px-10 md:flex-row">
                <div className="flex flex-col justify-start items-start text-left w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Who are we</h1>
                    
                    <p className="text-sm md:text-xl font-sans mx-4 md:mx-2 mt-2">
                    The engineering physics branch's departmental club is Team Abraxas - a vibrant community of individuals fueled by passion, creativity, and technology. We embark on a journey to unravel the secrets of the universe, while at the same time, creating technological wonders that defy imagination. Our research encompasses a kaleidoscope of physics disciplines - from the frontier of quantum computing to the timeless theories of particle physics. Physics enthusiasts, come and join us in a world of discovery, where the universe is your playground and knowledge is your compass. Let's ignite your curiosity, spark new ideas and demonstrate your expertise. With discussions, demonstrations, and discoveries, we will create a captivating atmosphere that will leave a lasting impression on all who join us. Though we may be new, we are determined to make our mark and leave a legacy that will be remembered for years to come.                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <div>
                        
                    </div>
                </div>
            </div>
            <motion.div
                className="flex justify-around w-full mt-24 py-10 bg-gradient-to-r from-blue-400 to-slate-900"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 1 }}
            >
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={4} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Days</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={10} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Speakers</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={9} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Awards</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={10} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Activities</p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
