import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutPage from './pages/About/index';
import HomePage from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import SkillUpAcademyPage from './pages/SkillUpAcademy';
import ContactPage from './pages/Contact';
import Resources from './pages/Resources';
import ResourceDetails from './pages/ResourceDetails';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skill-up" element={<SkillUpAcademyPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resource/:id" element={<ResourceDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
};


export default App;