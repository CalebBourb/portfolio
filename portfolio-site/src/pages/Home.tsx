import React from "react";
import "../styles/global.css";
import { motion } from "framer-motion";


const Home = () => {
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
        <div className="flex justify-center items-center h-[50vh]">
        <div className="text-center">
        <h1 className="text-4xl mb-4 font-roboto">Hello, my name is <b>Caleb Bourbonnais!</b></h1>
        <p className="justify-end text-2xl">
            Welcome to my portfolio site!
        </p>
        </div>
        </div>
        </motion.div>
    );
}
export default Home;