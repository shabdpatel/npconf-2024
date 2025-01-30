import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import TeamCard from './TeamCard';
import teamData from './teamData.json';
import Starfield from '../star/Starfield';

const Team = () => {
    const controls = useAnimation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);

    const getVisibleCards = () => {
        if (windowWidth < 768) return 1;      // Mobile
        if (windowWidth < 1024) return 2;     // Tablet
        return 3;                             // Desktop
    };

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const renderTeamSection = (year) => {
        if (!teamData[year]) return null;

        const visibleCards = getVisibleCards();
        const containerPadding = windowWidth < 768 ? 32 : 48; // Adjust padding for different screens
        const cardWidth = Math.min((windowWidth - (containerPadding * 2)) / visibleCards, 320);

        return (
            <section id={year} className="w-full max-w-7xl mx-auto mb-16 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center px-4">
                    {year.replace(/-/g, ' ')}
                </h2>
                <InView threshold={0.1} onChange={(inView) => inView && controls.start("visible")}>
                    <div className="relative px-4 md:px-6">
                        <div className="overflow-x-auto hide-scrollbar">
                            <motion.div
                                className="flex space-x-6 pb-4"
                                initial="hidden"
                                animate={controls}
                                variants={variants}
                                style={{
                                    width: 'fit-content',
                                    minWidth: '100%',
                                    display: 'flex',
                                    justifyContent: windowWidth < 1024 ? 'flex-start' : 'center'
                                }}
                            >
                                {teamData[year].map((member, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex-shrink-0"
                                        style={{ 
                                            width: cardWidth,
                                            maxWidth: '100%'
                                        }}
                                        variants={variants}
                                    >
                                        <TeamCard
                                            photo={member.photo}
                                            name={member.name}
                                            social={member.social}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Scroll Indicators */}
                        {teamData[year].length > getVisibleCards() && (
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
                                <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                                <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                            </div>
                        )}
                    </div>
                </InView>
            </section>
        );
    };

    // Add custom scrollbar styles
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-behavior: smooth;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }
            .hide-scrollbar::-webkit-scrollbar {
                display: none;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const QuickNav = () => (
        <nav className="hidden lg:flex flex-col fixed right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm rounded-lg p-2">
            {Object.keys(teamData).map((year) => (
                <button
                    key={year}
                    onClick={() => {
                        const element = document.getElementById(year);
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-white px-3 py-2 text-sm transition-colors duration-200 hover:bg-white/10 rounded"
                >
                    {year.replace(/-/g, ' ')}
                </button>
            ))}
        </nav>
    );

    return (
        <main className="relative w-full bg-black">
            {/* Starfield Container */}
            <div className="fixed inset-0 z-0">
                <Starfield
                    starCount={6000}
                    starColor={[255, 255, 255]}
                    speedFactor={0.15}
                    backgroundColor="black"
                />
            </div>

            {/* Quick navigation menu */}
            <QuickNav />

            {/* Main content container */}
            <div className="relative z-10 min-h-screen pt-20">
                {/* Main heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16 px-4">
                    Our{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        Team Members
                    </span>
                </h1>

                {/* Team sections */}
                <div className="space-y-8">
                    {renderTeamSection('Club-Coordinators')}
                    {renderTeamSection('Our Alumni')}
                    {renderTeamSection('Final-Year')}
                    {renderTeamSection('Coordinators')}
                    {renderTeamSection('Executives')}
                    {renderTeamSection('Volunteers')}
                </div>
            </div>
        </main>
    );
};

export default Team;