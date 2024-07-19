import React from "react";
import "../styles/global.css";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="w-full h-fit">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
        duration: 0.5,
        }}
        >
        <div className="flex justify-center h-[5vh] max-sm:h-[6vh]">
            <h1 className="text-center text-4xl max-sm:text-2xl font-bold pb-2 font-roboto ">What I'm currently Working on</h1>
        </div>
        </motion.div>
        <div className="justify-center">
        <div
        className="flex flex-row flex-wrap justify-center pt-6">
        {projects.map((project, i) => (
                
                <motion.div 
                    key = {i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        delay: 0.2 + i*0.25,
                        duration: 0.5,
                    }}
                    className="flex flex-col px-6 py-3 w-fit">
                    <ProjectItem 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    site={project.site}
                    id={project.id}
                    />
                </motion.div>
            ))}
        </div>
        </div>
        </div>    
    );
}

export default Projects;