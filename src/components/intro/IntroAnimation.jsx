import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [textOpacity, setTextOpacity] = useState(0);
  const [textBlur, setTextBlur] = useState(true); // Start with blur
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fade in text while blurred
    const fadeInTimer = setTimeout(() => {
      setTextOpacity(1);
    }, 1000);

    // Remove blur effect to reveal clear text
    const removeBlurTimer = setTimeout(() => {
      setTextBlur(false);
    }, 2000);

    // Add blur effect again
    const addBlurTimer = setTimeout(() => {
      setTextBlur(true);
    }, 4000);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    // Complete animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(removeBlurTimer);
      clearTimeout(addBlurTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black
        ${fadeOut ? 'opacity-0' : 'opacity-100'}
        transition-opacity duration-1000`}
    >
      {/* Stars background */}
      <div className="stars absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Text container */}
      <div 
        className={`absolute inset-0 flex items-center justify-center
          transition-all duration-1000
          ${textBlur ? 'blur-xl' : 'blur-0'}`}
      >
        <div 
          className={`text-center transition-opacity duration-1000`}
          style={{ opacity: textOpacity }}
        >
          <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300
            tracking-wider font-mono mb-4"
          >
            Diving into the world of
          </p>
          <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400
            tracking-widest font-mono"
          >
            PHYSICS
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;