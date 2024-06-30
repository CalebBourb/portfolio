import React from "react";
import "../styles/global.css";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 1.5,
            delay: 0.85,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: 0,
            }}
            className="flex items-center justify-center h-[40vh] mt-10 mb-6">
            <img 
                src={"/android-chrome-512x512.png"} 
                alt={"help me god"} 
                width={250}
            />
            </motion.div>
        
        <div className="flex justify-center h-[30vh]">
            <div className="text-center">
            <h1 className="text-4xl mb-4 font-roboto">Hello, my name is <b>Caleb Bourbonnais!</b></h1>
            <p className="justify-end text-2xl">
                Welcome to my portfolio site!
            </p>
            </div>
        </div>
        </>
    );
}
export default Home;