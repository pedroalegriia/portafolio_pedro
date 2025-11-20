import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Star, Zap, Code, Database } from 'lucide-react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTech, setCurrentTech] = useState(0);

    const technologies = ['React.js', 'Laravel', 'Angular', 'Nest.js', 'Node.js', 'AWS', 'Vue.js', 'Python', 'PostgreSQL'];
    const floatingShapes = Array.from({ length: 15 }, (_, i) => i);

    useEffect(() => {
        setIsVisible(true);

        const techInterval = setInterval(() => {
            setCurrentTech((prev) => (prev + 1) % technologies.length);
        }, 2000);

        return () => clearInterval(techInterval);
    }, []);

    const scrollToProjects = () => {
        document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>

                {/* Floating Shapes */}
                {floatingShapes.map((i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-white rounded-full opacity-20 ${i % 3 === 0 ? 'animate-float-slow' : i % 3 === 1 ? 'animate-float-medium' : 'animate-float-fast'
                            }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    ></div>
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Animated Avatar con Foto */}
                <div className={`w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/25 transform transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-45'
                    }`}>
                    <div className="w-36 h-36 rounded-full bg-slate-900 flex items-center justify-center border-4 border-white/10 overflow-hidden">
                        {/* Reemplaza la URL con tu foto */}
                        <img
                            src="assets/img/perfil.jpeg"
                            alt="Pedro Antonio Cruz Alegria"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping-slow"></div>
                </div>

                {/* Resto del componente permanece igual */}
                {/* Main Heading with Stagger Animation */}
                <div className={`space-y-4 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                            Pedro Antonio
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient delay-500">
                            Cruz Alegria
                        </span>
                    </h1>

                    {/* Animated Title */}
                    <div className={`flex items-center justify-center gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                        <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                            Desarrollador Full Stack & Líder Técnico
                        </h2>
                        <Code className="w-8 h-8 text-cyan-400 animate-bounce delay-1000" />
                    </div>
                </div>

                {/* Animated Description */}
                <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    Especializado en crear{' '}
                    <span className="text-cyan-300 font-semibold">soluciones tecnológicas innovadoras</span>,
                    optimizando procesos y mejorando la{' '}
                    <span className="text-purple-300 font-semibold">experiencia del usuario</span>
                    {' '}mediante tecnologías modernas y mejores prácticas.
                </p>

                {/* Tech Stack Carousel */}
                <div className={`max-w-2xl mx-auto mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center justify-center gap-4 text-lg text-gray-300 mb-4">
                        <Database className="w-6 h-6 text-emerald-400 animate-pulse" />
                        <span>Especialista en:</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-2xl">
                        <div className="text-2xl font-bold text-cyan-300 animate-fade-in">
                            {technologies[currentTech]}
                        </div>
                    </div>
                </div>

                {/* Enhanced Stats */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {[
                        { number: '7+', label: 'Años de Experiencia', icon: Star, color: 'text-yellow-400' },
                        { number: '50+', label: 'Proyectos Completados', icon: Zap, color: 'text-cyan-400' },
                        { number: '15+', label: 'Tecnologías Dominadas', icon: Code, color: 'text-purple-400' },
                        { number: '100%', label: 'Comprometido', icon: Database, color: 'text-emerald-400' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                        >
                            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color} animate-bounce`} style={{ animationDelay: `${index * 200}ms` }} />
                            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <a
                        href="#proyectos"
                        className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                        <Zap className="w-5 h-5 group-hover:animate-pulse" />
                        Ver Proyectos
                        <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
                    </a>

                    <a
                        href="#contacto"
                        className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/25"
                    >
                        Contactar
                    </a>

                    <a
                        href="/assets/documents/PEDRO_ALEGRIA_CV.pdf"
                        download="CV_Pedro_Antonio_Cruz_Alegria.pdf"
                        className="group border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-500/25"
                    >
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        Descargar CV
                    </a>
                </div>

                {/* Enhanced Social Links */}
                <div className={`flex justify-center space-x-6 mb-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {[
                        { href: "https://github.com/pedroalegriia", icon: Github, color: "hover:text-cyan-400" },
                        { href: "https://gitlab.com/pedro.alegriia", icon: Github, color: "hover:text-purple-400" },
                        { href: "https://www.linkedin.com/in/pedroalegria05/", icon: Linkedin, color: "hover:text-blue-400" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-current/30 hover:shadow-2xl`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>

                {/* Enhanced Scroll Indicator */}
                <button
                    onClick={scrollToProjects}
                    className={`animate-bounce text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/25 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <ChevronDown size={32} />
                </button>
            </div>

            {/* Custom CSS for animations */}
            <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%; 
          animation: gradient 4s ease infinite; 
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>
        </section>
    );
};

export default Hero;