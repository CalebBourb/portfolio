import React from 'react';
import { Project } from '../types/Project';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectInfo = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);
    const project: Project | undefined = projects.find((project) => project.id === projectId);

    if (!project) {
        return (
            <div>
                <h2>Project not found</h2>
            </div>
        );
    }

    return (
        <div>
            <h1>Project Info</h1>
            <h2>{project.title}</h2>
        </div>
    );
}

export default ProjectInfo;
