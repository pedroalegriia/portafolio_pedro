import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { freelanceProjects } from '../data/projects';
import { Sparkles, Briefcase, Users, Globe } from 'lucide-react';

const FreelanceProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedClients, setAnimatedClients] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar contador de clientes
          animateCounter(freelanceProjects.length, 2000);
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
      setAnimatedClients(Math.floor(current));
    }, 16);
  };

  return (
    <section 
      id="proyectos-freelance" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Briefcase className="w-8 h-8 text-pink-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Consultoría & Freelance
              </span>
            </h2>
            <Users className="w-8 h-8 text-cyan-400 animate-bounce" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Soluciones especializadas desarrolladas para{' '}
            <span className="text-cyan-300 font-semibold">clientes diversos</span>, 
            demostrando <span className="text-purple-300 font-semibold">adaptabilidad</span> y 
            <span className="text-pink-300 font-semibold"> expertise técnico</span> across múltiples industrias
          </p>

          {/* Clients Counter */}
          <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-pink-400" />
              <span className="text-gray-300">Clientes Satisfechos:</span>
            </div>
            <div className="text-3xl font-bold text-cyan-400">
              {animatedClients}+
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {freelanceProjects.map((project, index) => (
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

        {/* Industries Section */}
        <div className={`mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Experiencia Multisectorial
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                He trabajado con diversas industrias, adaptando soluciones tecnológicas 
                a las necesidades específicas de cada sector.
              </p>
            </div>
            
            {/* Industry Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { industry: "Fintech & Pagos", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
                { industry: "E-commerce", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
                { industry: "Logística", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
                { industry: "Movilidad", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
                { industry: "Educación", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
                { industry: "Salud", color: "bg-red-500/20 text-red-300 border-red-500/30" },
              ].map((sector, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${sector.color}`}
                >
                  {sector.industry}
                </span>
              ))}
            </div>
          </div>
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

export default FreelanceProjects;