import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';  

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section intro" id="intro">
        <Intro />
      </div>
      <div className="section about" id="about">
        <About />
      </div>
      <div className="section projects" id="projects">
        <Projects />
      </div>
      <div className="section contact" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
