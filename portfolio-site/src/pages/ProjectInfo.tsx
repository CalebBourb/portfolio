import React from 'react';
import { Project } from '../types/Project';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const ProjectInfo = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);
    const project: Project | undefined = projects.find((project) => project.id === projectId);
    const nav = useNavigate();

    if (!project) {
        return (
            <div className="h-full w-full flex justify-center">
                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        duration: 0.5,
                        }}
                        className="text-center"
                        >
                        <h1>Project not found</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        delay: 0.7,
                        }}
                        className="self-center w-fit h-full mt-4 bg-slate-100 rounded-lg shadow-md p-2 flex flex-row items-center text-sm"
                        >
                        <button onClick={() => {nav(-1)}}>
                            <h1>Go back</h1>
                        </button>                        
                    </motion.div>
                </div>
            </div>
        );
    }

    const img = `/images/${project.image}`;
    return (
        <div className="h-full w-full flex justify-center">
                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        duration: 0.5,
                        }}
                        className="flex-col text-center"
                        >
                        <div className="flex flex-row justify-center items-center">
                        <h1 className="text-4xl max-sm:text-2xl font-bold pb-4 pr-6 max-sm:pr-2">{project.title}</h1>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={project.site} target="_blank" rel="noreferrer" className='w-fit'>
                                <ExitToAppIcon style={{ fontSize:35 }}/>
                            </motion.a>
                        </div>
                        <div className="flex justify-center px-4">
                            <img src={img} alt={project.title} className="w-5/12 max-sm:w-3/4 rounded-lg"/>
                        </div>
                        <div className="flex justify-center px-4">
                            <p className="text-lg max-sm:text-md p-4 w-3/5 max-sm:w-full">{project.description}</p>
                        </div>
                       
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        delay: 0.3,
                        }}
                        className="self-center w-fit h-full mt-4 mb-10"
                        >
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => {nav(-1)}}
                            className="bg-slate-100 rounded-lg shadow-md p-2 flex flex-row items-center text-lg"
                            >
                            <h1>Go back</h1>
                        </motion.button>                        
                    </motion.div>
                </div>
            </div>
    );
}

export default ProjectInfo;
