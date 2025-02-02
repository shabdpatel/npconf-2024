import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import escape_room from '../../assets/events/escape_room.png';
import physics_carnival from '../../assets/events/physics_carnival.jpg';
import guest_lecture_ranjan_chopra from '../../assets/events/guest_lecture_ranjan_chopra.jpg';
import threed_printing from '../../assets/events/threed_printing.jpg';

const Eventscard = () => {
    const [flippedCards, setFlippedCards] = useState({});
    const [isAnimated, setIsAnimated] = useState(false);
    const [activeTab, setActiveTab] = useState('workshops');

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
            title: "Physics Carnival",
            description: "An interactive workshop showcasing various physics experiments and demonstrations. Students get hands-on experience with practical applications of physics concepts in an engaging carnival atmosphere."
        },
        {
            id: 'workshop2',
            front: escape_room,
            title: "Physics Escape Room",
            description: "A unique problem-solving experience where participants use physics concepts to solve puzzles and escape the room. Perfect blend of entertainment and education."
        }
    ];

    const eventCards = [
        {
            id: 'event1',
            front: threed_printing,
            title: "3D Printing Workshop",
            description: "Learn the fundamentals of 3D printing technology, from design to execution. Participants will understand the principles behind additive manufacturing and its applications."
        },
        {
            id: 'event2',
            front: guest_lecture_ranjan_chopra,
            title: "Guest Lecture Series",
            description: "Distinguished speakers share their expertise and experiences in physics and related fields. An opportunity to learn from industry experts and academic leaders."
        }
    ];

    const containerVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 1,
                staggerChildren: 0.15
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 1,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.8,
            rotateX: -25,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 1,
                duration: 0.5,
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            rotateX: 25,
            y: -50,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 1,
                duration: 0.4
            }
        },
        hover: {
            scale: 1.05,
            rotateX: 5,
            rotateY: 5,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const renderCards = (cardsData) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-11/12 max-w-6xl mx-auto">
                {cardsData.map((card, index) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                        custom={index}
                        className="flip-card aspect-[4/5] rounded-xl cursor-pointer perspective-1000 transform-gpu"
                        onClick={() => handleFlip(card.id)}
                    >
                        <motion.div
                            className="relative w-full h-full transition-all duration-700 transform-style-3d"
                            initial={false}
                            animate={{ 
                                rotateY: flippedCards[card.id] ? 180 : 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 12,
                                    duration: 0.8
                                }
                            }}
                            onAnimationComplete={() => setIsAnimated(false)}
                        >
                            {/* Card Front */}
                            <div
                                className="flip-card-front absolute w-full h-full bg-cover bg-center text-white rounded-xl shadow-2xl backface-hidden overflow-hidden"
                                style={{ 
                                    backgroundImage: `url(${card.front})`,
                                    transform: 'rotateY(0deg)',
                                }}
                            />

                            {/* Card Back */}
                            <div
                                className="flip-card-back absolute w-full h-full bg-slate-900 text-white rounded-xl shadow-2xl backface-hidden overflow-hidden"
                                style={{ 
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <div className="flex flex-col h-full justify-center items-center text-center p-8 space-y-6">
                                    <h3 className="text-3xl font-bold text-white">
                                        {card.title}
                                    </h3>
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <motion.div 
            className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black py-16 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-8 mb-20 px-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                <button
                    onClick={() => setActiveTab('workshops')}
                    className={`px-10 py-4 rounded-xl text-lg font-medium transition-all duration-300
                        ${activeTab === 'workshops' 
                        ? 'bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform' 
                        : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'}`}
                >
                    Workshops
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    className={`px-10 py-4 rounded-xl text-lg font-medium transition-all duration-300
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