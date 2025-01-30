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
        if (windowWidth < 640) return 1;      // Mobile
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
        const cardWidth = Math.min((windowWidth - 64) / visibleCards, 320);
        const totalWidth = teamData[year].length * (cardWidth + 24);
        const dragConstraints = {
            right: 0,
            left: -Math.max(totalWidth - windowWidth + 48, 0)
        };

        return (
            <section id={year} className="w-full max-w-7xl mx-auto mb-16 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 px-4 md:px-6">
                    {year.replace(/-/g, ' ')}
                </h2>
                <InView threshold={0.1} onChange={(inView) => inView && controls.start("visible")}>
                    <div className="relative overflow-hidden px-4 md:px-6">
                        <motion.div
                            className="flex space-x-6 cursor-grab active:cursor-grabbing"
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            drag="x"
                            dragConstraints={dragConstraints}
                            dragElastic={0.1}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        >
                            {teamData[year].map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0"
                                    style={{ width: cardWidth }}
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
                </InView>
            </section>
        );
    };

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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
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