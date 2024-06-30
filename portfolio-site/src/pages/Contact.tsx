import React from "react";
import "../styles/global.css";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div 
        key={"home"}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        }}
        >
            <h1>Contact</h1>
        </motion.div>
    );
}

export default Contact;