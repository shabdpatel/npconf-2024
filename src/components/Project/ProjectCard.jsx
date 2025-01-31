import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ photo, name, position, description }) => {
    const [imageError, setImageError] = useState(false);
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [-15, 15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;
        x.set(cardX - rect.width / 2);
        y.set(cardY - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Function to handle image loading errors
    const handleImageError = () => {
        setImageError(true);
    };

    // Simple function to get image source
    const getImageSource = () => {
        if (imageError) {
            // Use a generic placeholder image
            return "https://placehold.co/400x300/black/grey";
        }
        return photo;
    };

    return (
        <motion.div
            ref={cardRef}
            className="border border-zinc-400 rounded-lg relative w-full md:w-80 h-auto md:h-96 bg-black hover:bg-black p-1 overflow-hidden shadow-lg flex flex-col items-center flex-shrink-0 transition-colors duration-300"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-32 h-32 md:w-48 md:h-48 rounded overflow-hidden mb-4 mt-3"
                style={{ rotateX, rotateY }}
            >
                <img
                    src={getImageSource()}
                    alt={name}
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div className="text-center mb-4">
                <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
                <p className="text-purple-400 text-sm">{position}</p>
            </div>
            <div className="text-center px-3">
                <p className="text-slate-300 line-clamp-3">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;