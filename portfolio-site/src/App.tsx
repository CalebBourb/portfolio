import React from 'react';
import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <div className="font-neurialgrotesk	min-h-screen text-[#333333] text-lg bg-fixed overflow-hidden bg-gradient-to-tr from-indigo-200 via-red-100 to-gray-200">
    
    <motion.div 
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ y: { type: "spring", stiffness:25, duration: 5 } }}
      >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </motion.div>
    </div>
    </>
  );
}

export default App;
