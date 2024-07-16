import React from "react";
import "../styles/global.css";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="w-full h-full">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.5,
        }}
        >
        <div className="flex justify-center h-[5vh] max-sm:h-[10vh]">
            <h1 className="text-center text-4xl max-sm:text-2xl font-bold pb-2 font-roboto ">What I'm currently Working on</h1>
        </div>
        </motion.div>
        <div className="justify-center">
        <div
        className="flex flex-row flex-wrap justify-center">
        {projects.map((project, i) => (
                <motion.div 
                    key = {i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        delay: 0.5 + i*0.25,
                        duration: 0.5,
                    }}
                    className="flex flex-col m-8 max-sm:m-6">
                    <ProjectItem 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    />
                </motion.div>
            ))}
        </div>
        </div>
        </div>    
    );
}

export default Projects;