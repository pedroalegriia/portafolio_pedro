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
      gradient: "from-cyan-500 to-blue-500"
    },
    { 
      category: "Backend", 
      skills: ["Laravel", "Node.js", "Python", "PHP", "Express.js"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      category: "Bases de Datos", 
      skills: ["MySQL", "PostgreSQL", "Redis", "DynamoDB", "SQL Server","RethinkDB"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      category: "Cloud & DevOps", 
      skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Lambda", "EC2", "S3","RDS","CloudWatch",
        "SES","SQS","API GATEWAY","Cognito"
      ],
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    { 
      category: "APIs & Seguridad", 
      skills: ["RESTful APIs","Graphql", "JWT", "OAuth2", "HIPAA", "Swagger"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      category: "Mobile", 
      skills: ["Ionic", "React Native"],
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const softSkills = [
    { skill: "Liderazgo Técnico", icon: <Target className="w-5 h-5" /> },
    { skill: "Gestión de Proyectos", icon: <Rocket className="w-5 h-5" /> },
    { skill: "Trabajo en Equipo", icon: <Users className="w-5 h-5" /> },
    { skill: "Resolución de Problemas", icon: <Puzzle className="w-5 h-5" /> },
    { skill: "Comunicación Efectiva", icon: <MessageCircle className="w-5 h-5" /> },
    { skill: "Metodologías Ágiles", icon: <Zap className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-500 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Habilidades Técnicas
              </span>
            </h2>
            <Cpu className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stack tecnológico y competencias desarrolladas a lo largo de 
            <span className="text-cyan-300 font-semibold"> más de 7 años</span> de experiencia 
            en el desarrollo de software
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {technicalSkills.map((category, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-${category.gradient.split('-')[1]}-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${300 + (index * 100)}ms`
              }}
            >
              {/* Category Header */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                {category.category}
              </h3>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-white/10 text-gray-300 hover:text-white px-3 py-2 rounded-xl text-sm border border-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Habilidades <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Blandas</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Competencias interpersonales que complementan mi expertise técnico y 
                contribuyen al éxito de los proyectos
              </p>
            </div>
            
            {/* Soft Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((softSkill, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {softSkill.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                      {softSkill.skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className={`mt-12 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <span className="text-gray-400 font-semibold">Tecnologías Principales:</span>
            {["React.js", "Vue.js","Laravel", "Node.js", "AWS",
            "Angular","Ionic", "Python", "PostgreSQL","Mysql"].map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
              >
                {tech}
              </span>
            ))}
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

export default Skills;