import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Code, Database, Cloud, Shield, Smartphone, Users, Zap, Target, Rocket, MessageCircle, Puzzle } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const technicalSkills = [
    { 
      category: "Frontend", 
      skills: ["React.js", "Vue.js", "JavaScript","Angular", "Tailwind CSS", "Livewire","SASS","CSS","HTML"],
      icon: <Code className="w-6 h-6" />,
          gradient: "from-cyan-500 to-blue-500",
          borderColor: "hover:border-cyan-400/30"
    },
    { 
      category: "Backend", 
      skills: ["Laravel", "Node.js", "Python", "PHP", "Express.js"],
      icon: <Cpu className="w-6 h-6" />,
        gradient: "from-purple-500 to-pink-500",
        borderColor: "hover:border-pink-400/30"
    },
    { 
      category: "Bases de Datos", 
      skills: ["MySQL", "PostgreSQL", "Redis", "DynamoDB", "SQL Server","RethinkDB"],
      icon: <Database className="w-6 h-6" />,
        gradient: "from-emerald-500 to-teal-500",
        borderColor: "hover:border-emerald-400/30"
    },
    { 
      category: "Cloud & DevOps", 
        skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Lambda", "EC2", "S3", "RDS", "CloudWatch", "SES", "SQS", "API GATEWAY", "Cognito"],
      icon: <Cloud className="w-6 h-6" />,
        gradient: "from-orange-500 to-red-500",
        borderColor: "hover:border-orange-400/30"
    },
    { 
      category: "APIs & Seguridad", 
      skills: ["RESTful APIs","Graphql", "JWT", "OAuth2", "HIPAA", "Swagger"],
      icon: <Shield className="w-6 h-6" />,
        gradient: "from-blue-500 to-indigo-500",
        borderColor: "hover:border-blue-400/30"
    },
    { 
      category: "Mobile", 
      skills: ["Ionic", "React Native"],
      icon: <Smartphone className="w-6 h-6" />,
        gradient: "from-violet-500 to-purple-500",
        borderColor: "hover:border-violet-400/30"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
      },
        { threshold: 0.05 } // mejor para móvil
    );

      if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
          {/* Fondo optimizado */}
          <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl"></div>

              {/* Grid sutil */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

              {/* Header */}
              <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
                  <div className="flex items-center justify-center gap-3 mb-6">
                      <Zap className="w-8 h-8 text-cyan-400 motion-safe:animate-pulse" />
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                          Habilidades Técnicas
            </h2>
                      <Cpu className="w-8 h-8 text-purple-400 motion-safe:animate-bounce" />
          </div>

                  <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                      Más de <span className="text-cyan-300 font-semibold">7 años</span> creando soluciones digitales.
          </p>
        </div>

              {/* Technical Skills */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
                  {technicalSkills.map((cat, i) => (
                      <div
                          key={i}
                          className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:scale-[1.03] ${cat.borderColor}`}
                          style={{ transitionDelay: `${i * 120}ms` }}
            >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cat.gradient} flex items-center justify-center mb-4`}>
                              {cat.icon}
              </div>

                          <h3 className="text-white text-xl font-semibold mb-3">{cat.category}</h3>

              <div className="flex flex-wrap gap-2">
                              {cat.skills.map((skill, idx) => (
                  <span 
                              key={idx}
                              className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-gray-300 text-sm hover:bg-white/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

              {/* Soft Skills */}
              <div className={`mt-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
                  <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-center mb-10">
                          <Users className="w-10 h-10 text-purple-300 mx-auto mb-3" />
                          <h3 className="text-3xl font-bold text-white">Habilidades Blandas</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                              "Liderazgo Técnico", "Gestión de Proyectos", "Trabajo en Equipo",
                              "Resolución de Problemas", "Comunicación Efectiva", "Metodologías Ágiles"
                          ].map((txt, i) => (
                              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                                  {txt}
                </div>
              ))}
            </div>
          </div>
        </div>

          </div>
    </section>
  );
};

export default Skills;
