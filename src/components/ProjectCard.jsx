import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap, Calendar, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-6 border-b border-white/10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <p className="text-cyan-400 font-semibold">{project.company} • {project.period}</p>
            </div>
          </div>
          <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm">
            {project.role}
          </span>
        </div>
        
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </div>

      <div className="p-6">
        {/* Technologies */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 text-purple-400" />
            <h4 className="font-semibold text-gray-300">Tecnologías principales:</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-white/10 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20 backdrop-blur-sm hover:bg-purple-500/20 hover:scale-110 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Details */}
        {!showDetails ? (
          <button
            onClick={() => setShowDetails(true)}
            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-purple-400 hover:text-purple-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn backdrop-blur-sm hover:border-purple-400/30"
          >
            <Zap className="w-4 h-4 group-hover/btn:animate-pulse" />
            Ver detalles del proyecto
            <ChevronDown className="w-4 h-4 group-hover/btn:animate-bounce" />
          </button>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {/* Challenge */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Desafío:
              </h4>
              <p className="text-gray-300 leading-relaxed bg-white/5 rounded-xl p-4 border border-white/10">
                {project.challenge}
              </p>
            </div>
            
            {/* Process */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-green-400" />
                Proceso:
              </h4>
              <ul className="space-y-2">
                {project.process.map((item, index) => (
                  <li key={index} className="text-gray-300 leading-relaxed flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/20 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Results */}
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                Resultados:
              </h4>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="text-gray-300 leading-relaxed flex items-start gap-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowDetails(false)}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:border-gray-400/30"
              >
                <ChevronUp className="w-4 h-4" />
                Mostrar menos
              </button>
              
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Proyecto
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
};

export default ProjectCard;