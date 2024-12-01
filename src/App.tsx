import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;