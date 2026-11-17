import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { SpotlightCursor } from './components/common/SpotlightCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-navy-950 text-slate-100 selection:bg-electric-blue/30 selection:text-electric-sky font-sans">
        {/* Subtle Ambient Spotlight Cursor */}
        <SpotlightCursor />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <GithubSection />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
