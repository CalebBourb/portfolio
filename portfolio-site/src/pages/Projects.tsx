import React from "react";
import "../styles/global.css";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
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
        <div className="flex justify-center items-center h-[20vh] mt-10">
            <h1 className="text-center text-4xl font-bold mb-4 font-roboto ">What I'm currently Working on</h1>
        </div>
        </motion.div>
        <div
        className="flex flex-row flex-wrap justify-center">
        {projects.map((project, i) => (
                <motion.div 
                    initial={{ y: 600 }}
                    animate={{ y: 0 }}
                    transition={{ y: { type: "spring", delay: 0.1 + i*0.25, stiffness:25, duration: 5 } }}
                    className="flex flex-col m-10 ">
                    <ProjectItem 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    url={project.url}
                    github={project.github}
                    />
                </motion.div>
            ))}
        </div>
        </>
    
    );
}

export default Projects;