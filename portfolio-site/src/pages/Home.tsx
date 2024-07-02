import React from "react";
import "../styles/global.css";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from "../components/Resume";

const Home = () => {
    return (
        <>
        <div className="h-full">
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            }}
            >
            <div className="flex justify-center">
                <div className="text-center max-w-[120vh] px-5">
                    <h1 className="text-4xl max-sm:text-2xl mb-4 font-roboto">Hello, my name is <b>Caleb Bourbonnais!</b></h1>
                    <p className="justify-end text-2xl max-sm:text-lg p-2">
                        I'm a Software Engineering student at the University of Calgary with a minor in Enterprise Development.
                        I'm always looking for new opportunities to expand my knowlege as a software developer. Please feel free
                        to reach out to me if you have any questions! 
                    </p>
                    <p className="justify-end text-2xl max-sm:text-lg p-2">
                        I'm currently looking for a Software Engineering internship for May 2025. I believe that my creativity and
                        willingness to learn make me a great candidate for any team!
                    </p>
                    <p className="justify-end text-2xl max-sm:text-lg p-2">  
                        Thanks for visiting my site!
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
                <Resume />
            </motion.div>
        </div>
        </>

    );
}
export default Home;