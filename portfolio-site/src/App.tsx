import React from 'react';
import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import ProjectInfo from './pages/ProjectInfo';


function App() {
  return (
    <div className="font-neurialgrotesk	min-h-screen text-[#333333] text-lg bg-fixed overflow-hidden bg-gradient-to-br from-purple-100 via-red-100 to-purple-100">
      <div className="">
        <div className="h-[4vh] max-sm:h-0">
        </div>
        <div className="h-[12vh] z-10 items-center w-screen">
          <Navigation />
        </div>
        <div className="grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectInfo />} />
            <Route path="/Resume" element={""} />
          </Routes>
        </div>
      </div>
    </div>
);
}

export default App;
