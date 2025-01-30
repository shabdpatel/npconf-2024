import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import Menu from '../hero/Menu'
import Atom from '../hero/Atom'

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Hero = () => {
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Animated stars background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>

            {/* Main content */}
            <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8"
            >
                <div className="w-full max-w-7xl mx-auto">
                    {/* Moon Phases Image */}
                    <motion.div 
                        variants={fadeInUp} 
                        className="text-center mb-6 sm:mb-8 lg:mb-12 flex justify-center"
                    >
                        <Atom/>
                    </motion.div>

                    {/* Team Name */}
                    <motion.div 
                        variants={fadeInUp} 
                        className="text-center mb-6 sm:mb-8 lg:mb-16"
                    >
                        <div className="inline-block">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300">
                                TEAM ABRAXAS
                            </h2>
                            <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></div>
                        </div>
                    </motion.div>

                    

                    {/* Main Content */}
                    <motion.div 
                        variants={fadeInUp}
                        className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-16"
                    >
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-8 lg:mb-12 px-4 sm:px-0">
                            Immerse yourself in the world of physics at our Annual Physics Conference. 
                            From quantum mechanics to cosmic phenomena, join us as we explore the fundamental 
                            forces that shape our universe and push the boundaries of human knowledge.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
                            <motion.a
                                href="https://www.instagram.com/team_abraxas"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                            >
                                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/company/abraxas-nith/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Animated bottom strip */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 overflow-hidden"
                style={{
                    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                }}
            >
                <motion.div
                    className="absolute top-0 left-0 w-[200%] h-full flex"
                    style={{ transform: `translateX(${-scrollY * 0.5}px)` }}
                >
                    <img src="/design2.png" alt="Decorative strip" className="w-1/2 h-full object-cover opacity-50" />
                    <img src="/design2.png" alt="Decorative strip" className="w-1/2 h-full object-cover opacity-50" />
                </motion.div>
            </motion.div>

            {/* Animated stars styles */}
            <style jsx>{`
                @keyframes animStar {
                    from {
                        transform: translateY(0);
                    }
                    to {
                        transform: translateY(-2000px);
                    }
                }

                .stars {
                    width: 1px;
                    height: 1px;
                    background: transparent;
                    box-shadow: ${generateStars(700)};
                    animation: animStar 50s linear infinite;
                }

                .stars2 {
                    width: 2px;
                    height: 2px;
                    background: transparent;
                    box-shadow: ${generateStars(200)};
                    animation: animStar 100s linear infinite;
                }

                .stars3 {
                    width: 3px;
                    height: 3px;
                    background: transparent;
                    box-shadow: ${generateStars(100)};
                    animation: animStar 150s linear infinite;
                }

                @media (max-width: 640px) {
                    .stars {
                        box-shadow: ${generateStars(400)};
                    }
                    .stars2 {
                        box-shadow: ${generateStars(100)};
                    }
                    .stars3 {
                        box-shadow: ${generateStars(50)};
                    }
                }
            `}</style>
        </div>
    );
};

// Helper function to generate random star positions
function generateStars(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        stars += `${x}px ${y}px #FFF${i === count - 1 ? '' : ','} `;
    }
    return stars;
}

export default Hero;