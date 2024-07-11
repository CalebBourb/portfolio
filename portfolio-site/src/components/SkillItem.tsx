import React from "react";
import { Skill } from "../types/Skill";
import { Link } from "react-router-dom";


const SkillItem = (skill:Skill) => {
    return (
        <Link to="/projects">
            <div className="w-fit h-fit bg-slate-100 rounded-lg shadow-md p-2 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-lg">{skill.title}</h1>
                </div>
            </div>
        </Link>
    );
}

export default SkillItem;