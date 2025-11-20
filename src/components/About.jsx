import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Rocket, Target, Zap, Sparkles, TrendingUp } from 'lucide-react';

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
          border: "hover:border-cyan-400/30",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Liderazgo Técnico",
      description: "Experiencia guiando equipos y tomando decisiones arquitectónicas clave.",
      gradient: "from-purple-500 to-pink-500",
        border: "hover:border-purple-400/30",
      delay: 200
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Optimización",
      description: "Enfoque en mejorar rendimiento, escalabilidad y eficiencia de los sistemas.",
      gradient: "from-emerald-500 to-teal-500",
        border: "hover:border-emerald-400/30",
      delay: 400
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Orientado a Resultados",
      description: "Comprometido con entregar valor tangible y medible en cada proyecto.",
      gradient: "from-orange-500 to-red-500",
        border: "hover:border-orange-400/30",
      delay: 600
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
          animateCounter(7, 'years', 2000);
          animateCounter(50, 'projects', 2000);
        }
      },
      { threshold: 0.3 }
    );

      if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounter = (target, key, duration) => {
      let current = 0;
      const increment = target / (duration / 16);

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
          {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* LEFT TEXT */}
                  <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>

            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                              Sobre Mí
              </h2>
            </div>

                      <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                          <p className={`transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                              }`}>
                              Soy un <strong className="text-cyan-300">Desarrollador Full Stack con más de 7 años de experiencia</strong> creando soluciones innovadoras.
              </p>

                          <p className={`transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                              }`}>
                              Me especializo en <strong className="text-purple-300">optimizar procesos</strong> y mejorar la
                              <strong className="text-emerald-300"> experiencia del usuario</strong>.
              </p>

                          <p className={`transition-all duration-700 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                              }`}>
                              Estoy en constante actualización en <strong className="text-orange-300">IA y machine learning</strong>.
              </p>

                          <p className={`transition-all duration-700 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                              }`}>
                              Creo en el <strong className="text-blue-300">trabajo colaborativo</strong>, la mejora continua y soluciones escalables.
              </p>
            </div>

                      {/* Stats */}
                      <div className={`grid grid-cols-2 gap-6 mt-8 transition-all duration-1000 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all hover:scale-105">
                              <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {animatedStats.years}+
                </div>
                              <div className="text-gray-400 flex justify-center gap-2">
                                  <TrendingUp className="w-4 h-4" /> Años
                </div>
              </div>

                          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all hover:scale-105">
                              <div className="text-3xl font-bold text-purple-400 mb-2">
                  {animatedStats.projects}+
                </div>
                              <div className="text-gray-400 flex justify-center gap-2">
                                  <Zap className="w-4 h-4" /> Proyectos
                </div>
              </div>
            </div>
          </div>

                  {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {features.map((f, i) => (
                          <div
                              key={i}
                              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${f.border} transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                              style={{ transitionDelay: `${f.delay}ms` }}
              >
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${f.gradient} flex justify-center items-center mb-4 shadow-lg`}>
                                  <div className="text-white">{f.icon}</div>
                </div>

                              <h3 className="text-xl font-semibold text-white mb-2">
                                  {f.title}
                </h3>

                              <p className="text-gray-300">{f.description}</p>

                              <div className={`h-0.5 w-0 bg-gradient-to-r ${f.gradient} group-hover:w-full transition-all duration-500 mt-4`}></div>
              </div>
            ))}
                  </div>

        </div>
          </div>
    </section>
  );
};

export default About;
