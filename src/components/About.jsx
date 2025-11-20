import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Rocket, Target, Zap, Sparkles, Cpu, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ years: 0, projects: 0 });
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Full Stack",
      description: "Especializado en crear aplicaciones completas desde el backend hasta la interfaz de usuario.",
      gradient: "from-cyan-500 to-blue-500",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Liderazgo Técnico",
      description: "Experiencia guiando equipos y tomando decisiones arquitectónicas clave.",
      gradient: "from-purple-500 to-pink-500",
      delay: 200
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Optimización",
      description: "Enfoque en mejorar rendimiento, escalabilidad y eficiencia de los sistemas.",
      gradient: "from-emerald-500 to-teal-500",
      delay: 400
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Orientado a Resultados",
      description: "Comprometido con entregar valor tangible y medible en cada proyecto.",
      gradient: "from-orange-500 to-red-500",
      delay: 600
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar contadores
          animateCounter(7, 'years', 2000);
          animateCounter(50, 'projects', 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (target, key, duration) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };

  return (
    <section 
      id="sobre-mi" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Header with Animation */}
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sobre Mí
                </span>
              </h2>
            </div>
            
            {/* Animated Text Content */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p className={`transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } text-gray-300`}>
                Soy un <strong className="text-cyan-300">Desarrollador Full Stack con más de 7 años de experiencia</strong> 
                {' '}en el diseño e implementación de soluciones tecnológicas innovadoras. 
                Mi pasión está en crear software que no solo funcione, sino que también 
                entregue valor real a los usuarios y al negocio.
              </p>
              
              <p className={`transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } text-gray-300`}>
                Me especializo en <strong className="text-purple-300">optimizar procesos</strong> y mejorar la 
                <strong className="text-emerald-300"> experiencia del usuario</strong> mediante la aplicación 
                de las mejores prácticas de desarrollo, arquitecturas limpias y tecnologías modernas.
              </p>
              
              <p className={`transform transition-all duration-700 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } text-gray-300`}>
                Estoy en constante actualización en <strong className="text-orange-300">inteligencia artificial y machine learning</strong>, 
                siempre buscando cómo incorporar estas tecnologías para crear productos más 
                avanzados y eficientes.
              </p>
              
              <p className={`transform transition-all duration-700 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } text-gray-300`}>
                Creo firmemente en el <strong className="text-blue-300">trabajo colaborativo</strong>, la mejora continua y la generación 
                de valor mediante soluciones eficientes, escalables y orientadas a resultados.
              </p>
            </div>

            {/* Enhanced Experience Highlights */}
            <div className={`grid grid-cols-2 gap-6 mt-8 transform transition-all duration-1000 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:animate-pulse">
                  {animatedStats.years}+
                </div>
                <div className="text-gray-400 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:animate-pulse">
                  {animatedStats.projects}+
                </div>
                <div className="text-gray-400 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Proyectos Completados
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-${feature.gradient.split('-')[1]}-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${feature.delay}ms`,
                  animationDelay: `${feature.delay}ms`
                }}
              >
                {/* Animated Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${feature.gradient} mt-4 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Badges */}
        <div className={`mt-16 flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-1300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { skill: "React.js", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
            { skill: "Laravel", color: "bg-red-500/20 text-red-300 border-red-500/30" },
            { skill: "Node.js", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
            { skill: "AWS", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
            { skill: "Python", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { skill: "PostgreSQL", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          ].map((tech, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${tech.color}`}
            >
              {tech.skill}
            </span>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;