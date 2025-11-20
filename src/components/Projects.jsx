import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { Sparkles, Zap, Code, Globe } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProjects, setAnimatedProjects] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar contador de proyectos
          animateCounter(projects.length, 2000);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (target, duration) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedProjects(Math.floor(current));
    }, 16);
  };

  return (
    <section 
      id="proyectos" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Proyectos Destacados
              </span>
            </h2>
            <Zap className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Más de <span className="text-cyan-300 font-semibold">7 años</span> transformando ideas en 
            <span className="text-purple-300 font-semibold"> soluciones tecnológicas robustas</span> y escalables
          </p>

          {/* Projects Counter */}
          <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">Experiencia Corporativa:</span>
            </div>
            <div className="text-3xl font-bold text-purple-400">
              {animatedProjects}+
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${300 + (index * 100)}ms`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { 
          background-size: 200% 200%; 
          animation: gradient 4s ease infinite; 
        }
      `}</style>
    </section>
  );
};

export default Projects;