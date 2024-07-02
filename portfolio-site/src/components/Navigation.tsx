import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
    const location = useLocation();

    const tabs = [
        { path: "/", label: "Home" },
        { path: "/skills", label: "Skills" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ y: { type: "spring", delay: 0.5, stiffness:25, duration: 5 } }}
            className="mx-auto flex w-fit max-sm:w-full h-12 max-sm:h-20 items-center justify-between bg-slate-100 shadow-lg rounded-xl max-sm:rounded-none">
            <ul className="flex items-center space-x-2 max-sm:space-x-0 text-lg max-sm:text-md mx-auto">
                {tabs.map((tab) => (
                    <motion.li
                        key={tab.path}
                        className="relative inline-block max-sm:px-4 px-5 py-2"
                        
                    >
                        <Link
                            className={`relative inline-block max-sm:px-0 px-4 py-2 x-1 z-10 ${
                                location.pathname === tab.path ? "text-black" : "text-default"
                            }`}
                            to={tab.path}
                        >
                            {tab.label}
                        </Link>
                        {location.pathname === tab.path && (
                            <motion.div
                                layoutId="highlight"
                                className="absolute inset-3 bg-gray-200 rounded-xl"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navigation;