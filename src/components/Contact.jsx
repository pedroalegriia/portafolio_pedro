import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Zap, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Enlace directo de WhatsApp
    const whatsappNumber = "5213121417118"; // Número en formato internacional sin +
    const whatsappMessage = "Hola Pedro, me interesa contactarte para un proyecto. ¿Podrías proporcionarme más información?";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Teléfono",
            value: "+52 312 141 7718",
            href: "tel:+523121417718",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "pedro.alegriia@gmail.com",
            href: "mailto:pedro.alegriia@gmail.com",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Ubicación",
            value: "Colima, México",
            href: "#",
            gradient: "from-emerald-500 to-teal-500"
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/pedroalegriia",
            icon: <Github className="w-5 h-5" />,
            color: "hover:bg-cyan-500/20 hover:border-cyan-400/30 hover:text-cyan-300"
        },
        {
            name: "GitLab",
            href: "https://gitlab.com/pedro.alegriia",
            icon: <Github className="w-5 h-5" />,
            color: "hover:bg-purple-500/20 hover:border-purple-400/30 hover:text-purple-300"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/pedroalegria05/",
            icon: <Linkedin className="w-5 h-5" />,
            color: "hover:bg-blue-500/20 hover:border-blue-400/30 hover:text-blue-300"
        },
        {
            name: "WhatsApp",
            href: whatsappLink,
            icon: <MessageSquare className="w-5 h-5" />,
            color: "hover:bg-green-500/20 hover:border-green-400/30 hover:text-green-300"
        }
    ];

    return (
        <section
            id="contacto"
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 -right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Animated Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <MessageCircle className="w-8 h-8 text-cyan-400 animate-pulse" />
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                                Contacto
                            </span>
                        </h2>
                        <Zap className="w-8 h-8 text-purple-400 animate-bounce" />
                    </div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Information */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center space-x-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-${item.gradient.split('-')[1]}-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm">{item.label}</p>
                                        <p className="text-white font-semibold text-lg">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="text-center mb-12">
                            <h4 className="text-xl font-semibold text-white mb-6">Conectemos</h4>
                            <div className="flex justify-center space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 mb-12">
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <div className="text-center">
                                    <p className="text-white font-semibold">Disponible para nuevos proyectos</p>
                                    <p className="text-gray-400 text-sm">Respuesta en menos de 24 horas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp CTA Section */}
                    <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                            <MessageSquare className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                ¿Buscas <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">desarrollador</span>?
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
                                Si necesitas un desarrollador para tu equipo o un proyecto freelance,
                                envíame un mensaje por WhatsApp y hablemos sobre cómo puedo contribuir a tu éxito.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 text-lg"
                                >
                                    <MessageSquare className="w-6 h-6" />
                                    Contactar para Proyectos
                                    <Zap className="w-5 h-5 animate-bounce" />
                                </a>

                                <div className="text-center sm:text-left">
                                    <p className="text-green-300 font-semibold">⚡ Disponible inmediatamente</p>
                                    <p className="text-gray-400 text-sm">Contratación o freelance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Contact Methods */}
                    <div className={`text-center mt-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <p className="text-gray-400 mb-4">¿Prefieres otro método de contacto?</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:pedro.alegriia@gmail.com"
                                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-cyan-300 hover:text-cyan-200 px-4 py-2 rounded-xl border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                            <a
                                href="tel:+523121417118"
                                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-purple-300 hover:text-purple-200 px-4 py-2 rounded-xl border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                Llamar
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style>{`
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

export default Contact;