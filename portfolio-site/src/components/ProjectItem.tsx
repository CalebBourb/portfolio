import React from 'react';
import { Project } from '../types/Project';
import '../styles/global.css';
import '../styles/ProjectItems.module.css';

const ProjectItem = (props: Project) => {
    const img = `/images/${props.image}`;
    return (
        <div className="w-[50vh] h-fit bg-slate-100 rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={img} alt={props.title} className="w-full h-auto rounded-lg mb-4" />
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">{props.title}</h1>
                {props.url && (
                    <a href={props.url} className="text-blue-500 hover:underline">View Project</a>
                )}
                <p className="text-gray-700">{props.description}</p>
            </div>
        </div>
    );
}

export default ProjectItem;