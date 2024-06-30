import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
    const location = useLocation();

    const tabs = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav 
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ y: { type: "spring", delay: 0.5, stiffness:25, duration: 5 } }}
            className="mx-auto flex w-fit h-[6vh] pl-0.5 pr-0.5 items-center justify-between bg-slate-100 shadow-lg rounded-xl mt-10">
            <ul className="flex items-center space-x-2 text-lg mx-auto relative">
                {tabs.map((tab) => (
                    <motion.li
                        key={tab.path}
                        whileTap={{ scale: 0.8 }}
                        className="relative inline-block px-4 py-2"
                    >
                        <Link
                            className={`relative inline-block px-4 py-2 x-1 z-10 ${
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