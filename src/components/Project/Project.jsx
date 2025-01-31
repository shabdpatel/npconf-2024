import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './modalpopup';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectsData from './projects.json';  // Make sure to import your projects data

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState('all');
    const { ref, inView } = useInView({ triggerOnce: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                delay: 0.5,
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: 'spring', 
                stiffness: 50,
            } 
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0 0 25px rgba(138, 43, 226, 0.6)',
        }
    };

    // Group projects by year
    const groupedData = projectsData.reduce((acc, project) => {
        if (!acc[project.year]) {
            acc[project.year] = [];
        }
        acc[project.year].push(project);
        return acc;
    }, {});

    const allYearsData = ['2023', '2024', '2025'].reduce((acc, year) => {
        const yearData = groupedData[year] || [];
        return [...acc, ...yearData.slice(0, 7)];
    }, []);

    const filteredData = selectedYear === 'all' 
        ? allYearsData 
        : (groupedData[selectedYear] || []).slice(0, 7);

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-black flex flex-col items-center md:items-center justify-start md:justify-center px-4 md:px-8 w-full max-w-screen-xl mx-auto py-8 md:py-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-14 text-left md:text-center" variants={cardVariants}>
                Our{" "} 
                <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
                    Projects
                </span>
            </motion.h1>
            
            <motion.p className="text-left md:text-center text-gray-300 text-base md:text-xl mb-4 md:mb-10" variants={cardVariants}>
                Check out our great projects from the last few years.
            </motion.p>

            <motion.div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-12" variants={cardVariants}>
                <motion.button
                    onClick={() => setSelectedYear('all')}
                    variants={buttonVariants}
                    whileHover="hover"
                    className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-500
                        ${selectedYear === 'all' 
                            ? 'bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform' 
                            : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'
                        }`}
                >
                    All Years
                </motion.button>
                {['2025', '2024', '2023'].map((year) => (
                    <motion.button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        variants={buttonVariants}
                        whileHover="hover"
                        className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-500
                            ${selectedYear === year 
                                ?  "bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform"
                    : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'
                            }`}
                    >
                        {year}
                    </motion.button>
                ))}
            </motion.div>

            <div className="w-full">
                <div className="relative">
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
                        <div className="flex gap-4 md:gap-6 pb-4">
                            <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
                                {filteredData.map((project, index) => (
                                    <div 
                                        key={`${selectedYear}-${index}`}
                                        className="snap-start flex-shrink-0 first:pl-0 last:pr-4
                                            w-[calc(100vw-32px)] 
                                            md:w-[calc(50vw-48px)] 
                                            lg:w-80"
                                    >
                                        <ProjectCard
                                            photo={project.photo}
                                            name={project.name}
                                            position={project.position}
                                            description={project.description}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;