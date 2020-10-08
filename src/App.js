import React from 'react';
import PageWrapper from './Components/PageWrapper';
import Hero from './Components/pages/Hero';
import About from './Components/pages/About'
import Skills from './Components/pages/Skills';
import Resume from './Components/pages/Resume';
import Portfolio from './Components/pages/Portfolio';
import Services from './Components/pages/Services';
import Contact from './Components/pages/Contact';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  return (
    <PageWrapper>
      <Hero />
      <Router>
      </Router>
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </PageWrapper> 
  );
}

export default App;
