import React, { useState } from 'react'
import './Socialwall.css';
import escape_room from '../../assets/events/escape_room.png'
import physics_carnival from '../../assets/events/physics_carnival.jpg'
import guest_lecture_ranjan_chopra from '../../assets/events/guest_lecture_ranjan_chopra.jpg'
import threed_printing from '../../assets/events/threed_printing.jpg'
import threed from '../../assets/events/threed.jpg'
import guest from '../../assets/events/guest.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import carnival from '../../assets/events/carnival.jpg'
import escape from '../../assets/events/escape.jpg'

const Socialwallcard = () => {
    const [flippedCards, setFlippedCards] = useState({}); // Track flip state for each card
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
        return cardsData.map((card) => (
            <motion.div
                key={card.id}
                variants={cardVariants}
                className='flip-card w-full md:w-[400px] lg:w-[500px] h-[400px] lg:h-[550px] rounded-md cursor-pointer m-4 perspective-1000'
                onClick={() => handleFlip(card.id)}
            >
                <motion.div
                    className='relative w-full h-full transition-transform duration-700 transform-style-3d'
                    initial={false}
                    animate={{ 
                        rotateY: flippedCards[card.id] ? 180 : 0,
                        scale: flippedCards[card.id] ? 1.05 : 1,
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
                        className='flip-card-front absolute w-full h-full bg-contain bg-no-repeat text-white rounded-lg p-4 shadow-2xl backface-hidden'
                        style={{ 
                            backgroundImage: `url(${card.front})`,
                            transform: 'rotateY(0deg)',
                        }}>
                    </div>
                    <div
                        className='flip-card-back absolute w-full h-full bg-contain bg-no-repeat text-white rounded-lg p-4 shadow-2xl backface-hidden'
                        style={{ 
                            backgroundImage: `url(${card.back})`,
                            transform: 'rotateY(180deg)',
                        }}>
                    </div>
                </motion.div>
            </motion.div>
        ));
    };

    return (
        <motion.div 
            className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div 
                className="flex justify-center gap-4 mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button
                    onClick={() => setActiveTab('workshops')}
                    className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 
                        ${activeTab === 'workshops' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                        : 'border-2 border-purple-500 text-purple-400 hover:text-purple-300'}`}
                >
                    Workshops
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 
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
                    className='flex justify-center items-center flex-wrap'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {activeTab === 'workshops' && renderCards(workshopCards)}
                    {activeTab === 'events' && renderCards(eventCards)}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default Socialwallcard