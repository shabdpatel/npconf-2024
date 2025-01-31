import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ photo, name, position, description }) => {
    const [expanded, setExpanded] = useState(false);
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [-15, 15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="border border-zinc-400 rounded-lg relative w-2/3 md:w-80 h-auto bg-black p-3 overflow-hidden shadow-lg flex flex-col items-center transition-colors duration-300"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-38 h-38  md:w-48 md:h-48 rounded overflow-hidden mb-3 mt-2 flex items-center justify-center"
            >
                {typeof photo === 'string' ? (
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = "https://placehold.co/400x300/black/grey")}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        {photo} {/* Renders React component if photo is JSX */}
                    </div>
                )}
            </motion.div>


            <div className="text-center mb-2">
                <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
                <p className="text-purple-400 text-sm">{position}</p>
            </div>

            <div className="text-center px-3">
                <p className={`text-slate-300 ${expanded ? "" : "line-clamp-3"}`}>
                    {description}
                </p>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                >
                    {expanded ? "Read Less" : "Read More"}
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
