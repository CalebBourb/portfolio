import React from "react";
import "../styles/global.css";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <motion.div>
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
        </motion.div>
    );
}

export default Projects;