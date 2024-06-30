import React from 'react';
import { Project } from '../types/Project';
import '../styles/global.css';
import '../styles/ProjectItems.module.css';

const ProjectItem = (props: Project) => {
    return (
        <div className="w-[40vh] h-[40vh] bg-slate-100 rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={props.image} alt={props.title} className="w-full h-auto rounded-t-lg mb-4" />
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">{props.title}</h1>
                <p className="text-gray-700">{props.description}</p>
            </div>
        </div>
    );
}

export default ProjectItem;