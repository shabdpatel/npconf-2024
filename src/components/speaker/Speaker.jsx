import React, { useState, useEffect } from 'react';
import SpeakerCard from './SpeakerCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import speakersData from './Speakers.json';

const Speakers = () => {
    const [visibleCards, setVisibleCards] = useState(3);
    const [selectedYear, setSelectedYear] = useState('all');
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1); // Show 1 card on mobile
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2); // Show 2 cards on tablets
            } else {
                setVisibleCards(3); // Show 3 cards on desktop
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                delay: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0 0 25px rgba(138, 43, 226, 0.6)',
        }
    };

    // Group speakers by year
    const groupedData = speakersData.reduce((acc, speaker) => {
        if (!acc[speaker.year]) {
            acc[speaker.year] = [];
        }
        acc[speaker.year].push(speaker);
        return acc;
    }, {});

    // Flatten the grouped data into a single array for "All Years" with 7 cards per year
    const allYearsData = ['2023', '2024', '2025'].reduce((acc, year) => {
        const yearData = groupedData[year] || [];
        return [...acc, ...yearData.slice(0, 7)]; // Take only the first 7 cards for each year
    }, []);

    // Filter data based on selected year
    const filteredData = selectedYear === 'all' 
        ? allYearsData 
        : (groupedData[selectedYear] || []).slice(0, 7); // Show only 7 cards for the selected year

    // Calculate drag constraints based on filtered data
    const cardWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth - 32 : 320;
    const dragConstraintsRight = 0;
    const dragConstraintsLeft = -(filteredData.length - visibleCards) * (cardWidth + 16);

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 w-full max-w-screen-xl mx-auto py-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Title */}
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-14 text-center" variants={cardVariants}>
                Our{" "} 
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    Projects
                </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p className="text-center text-gray-300 text-lg sm:text-xl mb-8 md:mb-10" variants={cardVariants}>
                Check out our great projects from the last few years.
            </motion.p>

            {/* Year Filter Buttons */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12" variants={cardVariants}>
                <motion.button
                    onClick={() => setSelectedYear('all')}
                    variants={buttonVariants}
                    whileHover="hover"
                    className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300
                        ${selectedYear === 'all' 
                            ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                            : 'border-2 border-purple-500 text-purple-400 hover:text-purple-300'
                        } relative overflow-hidden`}
                >
                    All Years
                </motion.button>
                {['2025', '2024', '2023'].map((year) => (
                    <motion.button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        variants={buttonVariants}
                        whileHover="hover"
                        className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300
                            ${selectedYear === year 
                                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                                : 'border-2 border-purple-500 text-purple-400 hover:text-purple-300'
                            } relative overflow-hidden`}
                    >
                        {year}
                    </motion.button>
                ))}
            </motion.div>

            {/* Cards Container */}
            <div className="w-full overflow-x-auto overflow-y-hidden rounded-lg hide-scrollbar">
                <motion.div
                    className="flex space-x-4 sm:space-x-6 px-4"
                    drag="x"
                    dragConstraints={{ right: dragConstraintsRight, left: dragConstraintsLeft }}
                    variants={containerVariants}
                >
                    {filteredData.map((speaker, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants} 
                            className="flex-shrink-0 w-64 sm:w-72 md:w-80"
                        >
                            <SpeakerCard
                                photo={speaker.photo}
                                name={speaker.name}
                                position={speaker.position}
                                description={speaker.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Speakers;