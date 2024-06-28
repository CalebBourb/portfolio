import React from "react";
import "../styles/global.css";
import { Project } from "../types/Project";

const ProjectListItem = ({ project }: { project: Project }) => {
    return (
        <div className="w-screen h-screen">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectListItem;