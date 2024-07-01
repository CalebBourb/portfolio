import React from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0.5
        }}
        className="absolute bottom-0 flex flex-row h-[5vh] w-full"
        >
        <div className='absolute bottom-0 left-0 text-xs p-2'>
            <p>Built with React.js, Tailwind, Typescript, Material UI, Framer Motion, hosted with AWS.</p>
        </div>
        <div className="absolute bottom-0 right-0 text-xs p-2">
            <p>© 2024 Caleb Bourbonnais</p>
        </div>
        
        </motion.div>
    );
}
export default Watermark;