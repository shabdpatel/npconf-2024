import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import escape_room from '../../assets/events/escape_room.png';
import physics_carnival from '../../assets/events/physics_carnival.jpg';
import guest_lecture_ranjan_chopra from '../../assets/events/guest_lecture_ranjan_chopra.jpg';
import threed_printing from '../../assets/events/threed_printing.jpg';
import threed from '../../assets/events/threed.jpg';
import guest from '../../assets/events/guest.jpg';
import carnival from '../../assets/events/carnival.jpg';
import escape from '../../assets/events/escape.jpg';

const Eventscard = () => {
    const [flippedCards, setFlippedCards] = useState({});
    const [isAnimated, setIsAnimated] = useState(false);
    const [activeTab, setActiveTab] = useState('workshops');
    const [hoveredCard, setHoveredCard] = useState(null);

    function handleFlip(cardId) {
        if (!isAnimated) {
            setFlippedCards(prev => ({
                ...prev,
                [cardId]: !prev[cardId]
            }));
            setIsAnimated(true);
        }
    }

    const workshopCards = [
        {
            id: 'workshop1',
            front: physics_carnival,
            back: carnival,
        },
        {
            id: 'workshop2',
            front: escape_room,
            back: escape,
        }
    ];

    const eventCards = [
        {
            id: 'event1',
            front: threed_printing,
            back: threed,
        },
        {
            id: 'event2',
            front: guest_lecture_ranjan_chopra,
            back: guest,
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            rotateX: 15,
            transition: {
                duration: 0.6
            }
        },
        hover: {
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            transition: {
                duration: 0.3
            }
        }
    };

    const renderCards = (cardsData) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 max-w-7xl mx-auto px-4">
                {cardsData.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredCard(card.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        className="flip-card w-full aspect-[3/4] rounded-lg cursor-pointer perspective-1000"
                        onClick={() => handleFlip(card.id)}
                    >
                        <motion.div
                            className="relative w-full h-full transition-all duration-700 transform-style-3d"
                            initial={false}
                            animate={{ 
                                rotateY: flippedCards[card.id] ? 180 : 0,
                                scale: flippedCards[card.id] ? 1.02 : 1,
                                z: hoveredCard === card.id ? 50 : 0
                            }}
                            transition={{ 
                                duration: 0.7,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            onAnimationComplete={() => setIsAnimated(false)}
                        >
                            {/* Card Front */}
                            <div
                                className="flip-card-front absolute w-full h-full bg-cover bg-center text-white rounded-lg shadow-2xl backface-hidden overflow-hidden"
                                style={{ 
                                    backgroundImage: `url(${card.front})`,
                                    transform: 'rotateY(0deg)',
                                }}
                            >
                                {/* 3D Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 mix-blend-overlay" />
                                
                                {/* Floating Eye Animation */}
                                {hoveredCard === card.id && !flippedCards[card.id] && (
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full bg-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Card Back */}
                            <div
                                className="flip-card-back absolute w-full h-full bg-cover bg-center text-white rounded-lg shadow-2xl backface-hidden overflow-hidden"
                                style={{ 
                                    backgroundImage: `url(${card.back})`,
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 mix-blend-overlay" />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <motion.div 
            className="h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black py-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-8 px-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button
                    onClick={() => setActiveTab('workshops')}
                    className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-500
                        ${activeTab === 'workshops' 
                        ? 'bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform' 
                        : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'}`}
                >
                    Workshops
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-500
                        ${activeTab === 'events' 
                        ? 'bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform' 
                        : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'}`}
                >
                    Events
                </button>
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                >
                    {activeTab === 'workshops' && renderCards(workshopCards)}
                    {activeTab === 'events' && renderCards(eventCards)}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Eventscard;