import './App.scss';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="skills" element={<Skills />} />
       <Route path="projects" element={<Projects />} />
       <Route path="contact" element={<Contact />} />
       </Route>
    </Routes>
    </>

    
  )
}

export default App
