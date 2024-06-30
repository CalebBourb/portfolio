import React from 'react';
import { Project } from '../types/Project';
import '../styles/global.css';
import '../styles/ProjectItems.module.css';

const ProjectItem = (props: Project) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
        </div>
    );
}

export default ProjectItem;