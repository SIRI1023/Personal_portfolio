import React from 'react';
import { X, Github, ExternalLink, Play, AlertCircle, Rocket } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    links: {
      github: string;
      live: string;
      demo?: string;
    };
    details?: {
      features?: string[];
      technologies?: string[];
      challenges?: string[];
      impact?: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-content">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#FFE169]">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
              <p className="text-gray-300">{project.description}</p>
            </div>

            {project.details?.features && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Rocket size={20} className="text-[#FFE169]" />
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.details?.technologies && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-[#FFE169] rounded-full text-sm border border-[#FFE169]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.details?.challenges && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <AlertCircle size={20} className="text-[#FFE169]" />
                  Challenges & Solutions
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.details.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.details?.impact && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Impact & Results</h4>
                <p className="text-gray-300">{project.details.impact}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#FFE169] text-gray-900 rounded-lg hover:bg-[#FFD93D] transition-colors flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Live
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                View Code
              </a>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <Play size={20} />
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}