import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import escape_room from '../../assets/events/escape_room.png';
import physics_carnival from '../../assets/events/physics_carnival.jpg';
import guest_lecture_ranjan_chopra from '../../assets/events/guest_lecture_ranjan_chopra.jpg';
import threed_printing from '../../assets/events/threed_printing.jpg';
import { ArrowLeft } from 'lucide-react';

const EventsCard = () => {
  const [activeTab, setActiveTab] = useState('workshops');

  const workshopCards = [
    {
      id: 'workshop1',
      title: "Physics Carnival",
      image: physics_carnival,
      description: "As the sun dipped below the horizon, casting a golden glow everywhere, Team Abraxas stood with pride, celebrating a remarkable milestone: one year of unwavering dedication to the enigmatic world of engineering physics. From the inception of the club, their mission had been clear—to bridge the gap between theoretical concepts and practical applications, fostering a community of passionate innovators. 🌅 With hearts brimming with this achievement, we are organizing a Physics Carnival, a spectacle where science and wonder would intertwine, echoing the club's triumphant journey through the halls of academia. 🎪 Team Abraxas had not just marked a year of existence but had ignited a spark of curiosity and innovation that illuminated the path towards boundless exploration in the realm of engineering physics. 🔥🔭✨"
    },
    {
      id: 'workshop2',
      title: "Physics Escape Room",
      image: escape_room,
      description: "Dive into a world where science meets excitement at Nimbus 2k24! 🚀 Team Abraxas is thrilled to present an exhilarating physics-based escape room extravaganza on Day 0! 🎉 Join us for an unforgettable experience that will challenge your intellect and ignite your sense of adventure! 💡Embark on a journey of discovery as you unravel cryptic puzzles, decode hidden messages, and unlock the secrets of the universe! 🌌 Gather your friends, gather your wits, and prepare to race against the clock in a pulse-pounding quest for scientific enlightenment! 🕰️Whether you're a seasoned escape room aficionado or a curious novice, our immersive adventure promises thrills, laughter, and unforgettable memories! 💫 Don't miss out on the chance to be part of the action – reserve your spot now and prepare to unleash your inner scientist! 🌟 #Nimbus2k24 #TeamAbraxas #EscapeRoomExtravaganza #ScienceMeetsAdventure 🔬✨"
    }
  ];

  const eventCards = [
    {
      id: 'event1',
      title: "3D Printing Workshop",
      image: threed_printing,
      description: "magine a world where your wildest creations materialize before your eyes at the mere touch of a button. Team Abraxas presents to you PRINTHUB- 3D Printing workshop.Delve into the mesmerising process of transforming digital designs into physical reality, where creativity knows no bounds. Whether you're a seasoned creator or a curious novice, join us on a journey where creativity meets technology and innovation meets fabrication. This workshop offers an unparalleled opportunity to explore the limitless possibilities of 3D printing technology. Unleash your imagination and revolutionize the way you bring ideas to life. Don't let this extraordinary opportunity pass you by—step into the future of fabrication and sculpt your dreams into existence!"
    },
    {
      id: 'event2',
      title: "Guest Lecture Series",
      image: guest_lecture_ranjan_chopra,
      description: "Embark on an enlightening journey through NIMBUS 2K24's guest lecture series, where Team Abraxas, in collaboration with Physteo, presents a captivating blend of physics education and content creation!✨️We are delighted to extend our warm invitation to you for an enlightening session featuring the esteemed Mr. Rajan Chopra. With his expertise in blending entertainment and education, Mr. Chopra captivates audiences with his unique approach to teaching physics. He excels in simplifying complex concepts, making them accessible to a wider audience. Let's delve into the integration of social community with modern education in what promises to be a fascinating discussion.Mark your calendars for April 4th at 2pm in the Mini Audi. We look forward to see you there!"
    }
  ];

  const Card = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
      e.stopPropagation();
      setIsFlipped(!isFlipped);
    };

    return (
      <motion.div 
        className="relative md:w-[360px] md:h-[470px] w-[300px] h-[400px] perspective-1000 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-full relative preserve-3d "
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
        >
          {/* Front of card */}
          <div 
            className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))' }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-cover object-center -z-10"
            />
            <div className="absolute bottom-0 w-full p-4 text-white">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm mb-3 opacity-90 line-clamp-2">{card.description}</p>
              <button 
                onClick={handleFlip}
                className="px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-sm font-medium transition-colors"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Back of card */}
          <div 
            className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-900/95 rounded-2xl p-4"
          >
            <div className="text-white h-full flex flex-col">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm leading-relaxed flex-grow overflow-y-auto">{card.description}</p>
              <button 
                onClick={handleFlip}
                className="mt-3 px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 w-fit"
              >
                <ArrowLeft size={16} />
                Back to Card
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0B1A] relative py-12 px-6 overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(2px 2px at calc(100% * var(--x)) calc(100% * var(--y)), white, transparent)`,
            backgroundSize: '200px 200px',
            transform: 'translate(0px, 0px)',
            '--x': 0.5,
            '--y': 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 
              ${activeTab === 'workshops' 
                ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg shadow-indigo-500/25' 
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'}`}
          >
            Workshops
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 
              ${activeTab === 'events' 
                ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg shadow-indigo-500/25' 
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'}`}
          >
            Events
          </button>
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            {(activeTab === 'workshops' ? workshopCards : eventCards).map(card => (
              <Card key={card.id} card={card} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsCard;