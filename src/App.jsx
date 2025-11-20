import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const FreelanceProjects = lazy(() => import('./components/FreelanceProjects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <Suspense fallback={<div className="py-10 text-center text-gray-500">Cargando...</div>}>
        <About />
        <Projects />
        <FreelanceProjects />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
