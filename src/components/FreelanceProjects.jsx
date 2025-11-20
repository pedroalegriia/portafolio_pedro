import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { freelanceProjects } from '../data/projects';
import { Sparkles, Briefcase, Users, Globe } from 'lucide-react';

const FreelanceProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
    const [clients, setClients] = useState(0);
  const sectionRef = useRef(null);

    // Intersection Observer optimizado
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
            animateCount(freelanceProjects.length);
            observer.disconnect();
        }
      },
        { threshold: 0.15 }
    );

      if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

    // ✅ Fallback para móviles (IntersectionObserver falla en Safari/Android)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isVisible) {
                setIsVisible(true);
                animateCount(freelanceProjects.length);
      }
        }, 900); // 0.9s → suficiente para no interferir con desktop

        return () => clearTimeout(timer);
    }, [isVisible]);

    // requestAnimationFrame → contador suave y eficiente
    const animateCount = (target) => {
        let start = 0;
        const duration = 900;
        const startTime = performance.now();

        const update = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            setClients(value);

            if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
  };

  return (
      <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
          {/* Background optimizado */}
          <div className="absolute inset-0 pointer-events-none motion-safe:animate-none">
              <div className="absolute top-20 -left-20 w-56 h-56 bg-pink-500/20 rounded-full blur-xl opacity-20"></div>
              <div className="absolute bottom-20 -right-20 w-56 h-56 bg-cyan-500/20 rounded-full blur-xl opacity-20"></div>

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
              {/* Header */}
              <div
                  className={`text-center mb-16 transition-all duration-700 motion-safe:duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}
              >
                  <div className="flex items-center justify-center gap-3 mb-6">
                      <Briefcase className="w-7 h-7 text-pink-400 motion-safe:animate-pulse" />
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Consultoría & Freelance
            </h2>
                      <Users className="w-7 h-7 text-cyan-400 motion-safe:animate-bounce" />
          </div>

                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                      Soluciones creadas para{' '}
                      <span className="text-cyan-300 font-semibold">clientes diversos</span>, demostrando
                      <span className="text-purple-300 font-semibold"> adaptabilidad</span> y
                      <span className="text-pink-300 font-semibold"> expertise técnico.</span>
          </p>

                  {/* Contador */}
                  <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-pink-400" />
                          <span className="text-gray-300">Clientes:</span>
            </div>
                      <div className="text-3xl font-bold text-cyan-400">{clients}+</div>
          </div>
        </div>

              {/* Projects */}
              <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 motion-safe:duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
              >
          {freelanceProjects.map((project, index) => (
              <div
              key={project.id}
                  className="transition-opacity duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

              {/* Industries */}
              <div
                  className={`mt-16 transition-all duration-700 motion-safe:duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
              >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
                          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4 motion-safe:animate-pulse" />
                          <h3 className="text-2xl font-bold text-white mb-4">Experiencia Multisectorial</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                              Soluciones adaptadas a distintas industrias y modelos de negocio.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                              { name: 'Fintech & Pagos', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/20' },
                              { name: 'E-commerce', color: 'text-purple-300 border-purple-500/30 bg-purple-500/20' },
                              { name: 'Logística', color: 'text-pink-300 border-pink-500/30 bg-pink-500/20' },
                              { name: 'Movilidad', color: 'text-blue-300 border-blue-500/30 bg-blue-500/20' },
                              { name: 'Educación', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/20' },
                              { name: 'Salud', color: 'text-red-300 border-red-500/30 bg-red-500/20' },
                          ].map((sector, idx) => (
                              <span
                                  key={idx}
                                  className={`px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${sector.color}`}
                >
                                  {sector.name}
                </span>
              ))}
            </div>
          </div>
        </div>
          </div>
    </section>
  );
};

export default FreelanceProjects;
