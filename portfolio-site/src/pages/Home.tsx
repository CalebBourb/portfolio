import React from "react";
import "../styles/global.css";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Watermark from "../components/Watermark";

const Home = () => {
    return (
        <>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        }}
        >
        <div className="flex justify-center items-end h-[50vh] max-sm:h-[60vh]">
        <div className="text-center">
        <h1 className="text-4xl max-sm:text-2xl mb-4 font-roboto">Hello, my name is <b>Caleb Bourbonnais!</b></h1>
        <p className="justify-end text-2xl pl-2 pr-2 pt-2">
            I'm a Software Engineering student at the University of Calgary
            who's always looking for new opportunities to learn and grow.
        </p>
        <p className="justify-end text-2xl max-sm:text-lg pl-2 pr-2 pt-2">
            I'm currently looking for an intersnship for May 2025.
        </p>
        </div>
        </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            delay: 0.5
            }}
            className="flex flex-row justify-center pt-8">
            <motion.div
            whileHover={{ scale: 1.1 }}
            >
            <a href="https://www.linkedin.com/in/caleb-bourbonnais-2a299897/" className="p-4">
                <LinkedInIcon style={{ fontSize: 40 }} />
            </a>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.1 }}
            >
            <a href="https://github.com/CalebBourb" className="p-4">
                <GitHubIcon style={{ fontSize: 40 }} />
            </a>
            </motion.div>

        </motion.div>
        <Watermark />
        </>

    );
}
export default Home;