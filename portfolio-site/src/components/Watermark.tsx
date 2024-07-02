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
        className="flex flex-row h-full w-full justify-center text-xs padding p-2"
        >
        <div>
            <p>© 2024 Caleb Bourbonnais</p>
        </div>
        
        </motion.div>
    );
}
export default Watermark;