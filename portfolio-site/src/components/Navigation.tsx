import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
    const location = useLocation();

    return (
        <nav 
            className="mx-auto flex w-fit h-[6vh] pl-0.5 pr-0.5 items-center justify-between bg-white shadow-lg rounded-full mt-10">
            <ul className="flex items-center space-x-2 text-lg mx-auto">
                <motion.li whileTap={{ scale: 0.9 }}>
                    <Link
                        className={`relative inline-block px-4 py-2 ${
                            location.pathname === "/"
                                ? "border bg-[#e2e2e2] rounded-full"
                                : ""
                        }`}
                        to="/"
                    >
                        Home
                    </Link>
                </motion.li>

                <motion.li whileTap={{ scale: 0.9 }}>
                    <Link
                        className={`relative inline-block px-4 py-2 ${
                            location.pathname === "/about"
                                ? "border bg-[#e2e2e2] rounded-full"
                                : ""
                        }`}
                        to="/about"
                    >
                        About
                    </Link>
                </motion.li>

                <motion.li whileTap={{ scale: 0.9 }}>
                    <Link
                        className={`relative inline-block px-4 py-2 ${
                            location.pathname === "/projects"
                                ? "border bg-[#e2e2e2] rounded-full "
                                : ""
                        }`}
                        to="/projects"
                    >
                        Projects
                    </Link>
                </motion.li>

                <motion.li whileTap={{ scale: 0.9 }}>
                    <Link
                        className={`relative inline-block px-4 py-2 ${
                            location.pathname === "/contact"
                                ? "border bg-[#e2e2e2] rounded-full"
                                : ""
                        }`}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </motion.li>
            </ul>
        </nav>
    );
};

export default Navigation;
