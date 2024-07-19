import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';
import { motion } from 'framer-motion';
import '../styles/global.css';
import '../styles/ProjectItems.module.css';

const ProjectItem = (props: Project) => {
    const img = `/images/${props.image}`;
    return (
        <div className="w-[50vh] max-sm:w-[40vh] h-fit bg-slate-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={img} alt={props.title} className="w-full h-auto rounded-lg mb-4" />
            <div className="text-center">
                <h1 className="text-xl font-bold">{props.title}</h1>
                <p className="text-gray-700">{props.description}</p>
            </div>
            <motion.div
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="w-fit h-fit mt-2"
            >
                <Link to={`/projects/${props.id}`}>
                    <div className="w-fit h-fit bg-gray-200 border border-gray-300 rounded-lg shadow-md p-2 flex flex-col items-center">
                        <div className="text-center">
                            <h1 className="text-lg">Learn more</h1>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}

export default ProjectItem;