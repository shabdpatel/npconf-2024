import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Socialwall.css';
import escape_room from '../../assets/events/escape_room.png'
import physics_carnival from '../../assets/events/physics_carnival.jpg'
import guest_lecture_ranjan_chopra from '../../assets/events/guest_lecture_ranjan_chopra.jpg'
import threed_printing from '../../assets/events/threed_printing.jpg'
import threed from '../../assets/events/threed.jpg'
import guest from '../../assets/events/guest.jpg'

import carnival from '../../assets/events/carnival.jpg'
import escape from '../../assets/events/escape.jpg'


const Socialwallcard = () => {
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
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.4
            }
        }
    };

    const renderCards = (cardsData) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl mx-auto px-4">
                {cardsData.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        className="flip-card w-full aspect-[3/4] rounded-lg cursor-pointer perspective-1000"
                        onClick={() => handleFlip(card.id)}
                    >
                        <motion.div
                            className="relative w-full h-full transition-transform duration-700 transform-style-3d"
                            initial={false}
                            animate={{ 
                                rotateY: flippedCards[card.id] ? 180 : 0,
                                scale: flippedCards[card.id] ? 1.02 : 1,
                            }}
                            transition={{ 
                                duration: 0.7,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            onAnimationComplete={() => setIsAnimated(false)}
                        >
                            <div
                                className="flip-card-front absolute w-full h-full bg-cover bg-center text-white rounded-lg shadow-2xl backface-hidden"
                                style={{ 
                                    backgroundImage: `url(${card.front})`,
                                    transform: 'rotateY(0deg)',
                                }}
                            />
                            <div
                                className="flip-card-back absolute w-full h-full bg-cover bg-center text-white rounded-lg shadow-2xl backface-hidden"
                                style={{ 
                                    backgroundImage: `url(${card.back})`,
                                    transform: 'rotateY(180deg)',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <motion.div 
            className="min-h-screen bg-gradient-to-b  from-slate-900 via-slate-800 to-black py-8 px-4"
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
                    className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 w-full sm:w-auto
                        ${activeTab === 'workshops' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                        : 'border-2 border-purple-500 text-purple-400 hover:text-purple-300'}`}
                >
                    Workshops
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 w-full sm:w-auto
                        ${activeTab === 'events' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                        : 'border-2 border-purple-500 text-purple-400 hover:text-purple-300'}`}
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

export default Socialwallcard;