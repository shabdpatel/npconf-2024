import React from 'react'
import './Socialwall.css';
import escape_room from '../../assets/events/escape_room.png'
import physics_carnival from '../../assets/events/physics_carnival.jpg'
import guest_lecture_ranjan_chopra from '../../assets/events/guest_lecture_ranjan_chopra.jpg'
import threed_printing from '../../assets/events/threed_printing.jpg'
import threed from '../../assets/events/threed.jpg'
import guest from '../../assets/events/guest.jpg'
import { motion } from 'framer-motion'
import carnival from '../../assets/events/carnival.jpg'
import escape from '../../assets/events/escape.jpg'


const Socialwallcard = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    function handleFlip() {
        if (!isAnimated) {
            setIsFlipped(!isFlipped);
            setIsAnimated(true);
        }
    }
    return (
        <div>
            <div className='flip-card  w-[500px] h-[550px] rounded-md  cursor-pointer' onClick={handleFlip}>
                    <motion.div
                        className='flip-card-inner w-[100%] h-[100%]'
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{ duration: 0.6, animationDirection: "normal" }}
                        onAnimationComplete={() => setIsAnimated(false)}
                    >
                        <div
                            className='flip-card-front w-[100%] h-[100%] bg-contain bg-no-repeat text-white rounded p-4'
                            style={{ backgroundImage: `url(${physics_carnival})` }}>
                        </div>

                        <div
                            className='flip-card-back w-[100%] h-[100%]  bg-contain bg-no-repeat text-white rounded p-4'
                            style={{ backgroundImage: `url(${carnival})` }}>
                        </div>

                    </motion.div>
                </div>

        </div>
    )
}

export default Socialwallcard
