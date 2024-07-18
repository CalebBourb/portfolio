import React from "react";
import { motion } from "framer-motion";
import SkillItem from "../components/SkillItem";
import { skills } from "../data/skills";
import { experiences } from "../data/experiences";
import Resume from "../components/Resume";

const Skills = () => {
    return (
        <div className="h-full w-screen">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
                className="flex justify-center pb-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold pb-10">My Experience</h1>               
                    <div className="flex justify-center max-sm:flex-col">
                        {experiences.map((experience) => (
                            <div className="flex flex-col pb-2 px-14 max-w-[50vh]">
                                <experience.icon className="h-15 w-15 self-center mb-2"/>
                                <h2 className="text-xl font-bold">{experience.title}</h2>
                                <p className="text-lg">{experience.company}</p>
                                <p className="text-sm"><i>{experience.time}</i></p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                delay: 0.25,
                }}
            >
                <Resume />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.5,
                }}
                className="flex justify-center pt-6">
                <h1 className="text-4xl font-bold py-4">My Skills</h1>
            </motion.div>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center w-[75vh] pb-6 ">
                {skills.map((skill, i) => (
                    <motion.div 
                        key = {i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            delay: 0.25 + i*0.1,
                        }}
                        className="flex mx-1 my-1">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="h-fit w-fit"
                        >
                            <SkillItem
                            title={skill}
                            />
                        </motion.div>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;