import React from "react";
import "../styles/global.css";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="w-full h-full">
        <div>
        <div className="flex justify-center h-[5vh] max-sm:h-[10vh]">
            <h1 className="text-center text-4xl max-sm:text-2xl font-bold pb-2 font-roboto ">What I'm currently Working on</h1>
        </div>
        </div>
        <div className="justify-center">
        <div
        className="flex flex-row flex-wrap justify-center">
        {projects.map((project, i) => (
                <div className="flex flex-col m-8 max-sm:m-6">
                    <ProjectItem 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    />
                </div>
            ))}
        </div>
        </div>
        </div>    
    );
}

export default Projects;