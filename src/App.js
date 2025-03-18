import React from 'react';
import './App.css';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Projects from './pages/Projects/index';
import ProjectPage from './pages/ProjectPage/Index';
import About from './pages/About/index';
import Videos from './pages/Videos/index'
import Contact from './pages/Contact';
import Login from './pages/Login/Index'
import Posts from './pages/Posts/Index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects/:projectId" element={<ProjectPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Blog" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
