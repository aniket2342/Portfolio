import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import GradientLayout from './Component/GradientLayout';
import Navbar from './Component/Navbar';

// Use React.lazy for component imports
const HeroSection = lazy(() => import('./Component/HeroSection'));
const About = lazy(() => import('./Component/About'));
const Skills = lazy(() => import('./Component/Skills'));
const Project = lazy(() => import('./Component/Project'));
const Contact = lazy(() => import('./Component/Contact'));

function App() {
  return (
    <Router>
      <div className="App">
        <GradientLayout>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </GradientLayout>
      </div>
    </Router>
  );
}

export default App;