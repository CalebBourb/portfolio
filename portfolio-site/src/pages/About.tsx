import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div 
            
            className="flex items-center justify-center h-[75vh]">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 font-roboto">About Me</h1>
                <p className="justify-end">
                    blah blah blah
                </p>
            </div>
        </motion.div>
    );
}

export default About;