import React from "react";
import "../styles/global.css";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <motion.div 
        className="flex items-center justify-center h-[75vh]">
        <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 font-roboto">My Projects</h1>
        {projects.map((project) => (
                <div>
                    <ProjectItem 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    url={project.url}
                    github={project.github}
                    />
                </div>
            ))}
        </div>
    </motion.div>
    );
}

export default Projects;