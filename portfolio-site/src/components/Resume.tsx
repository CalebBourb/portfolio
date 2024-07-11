import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "framer-motion";
import Pdf from "../files/Caleb_bourbonnais.pdf";


const Resume = () => {
    return (
        <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-row justify-center px-4">
            <a 
            href={Pdf} 
            className="w-fit h-full bg-slate-100 rounded-lg shadow-md p-2 flex flex-row items-center text-sm">
                My Resume
                <DownloadIcon style={{ fontSize: 20 }} />
            </a>
        </motion.div>
    );
}

export default Resume;