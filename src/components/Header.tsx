import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="relative container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="absolute inset-0 animated-bg"></div>
      <div className="relative md:w-3/5 text-center md:text-left mb-8 md:mb-0 animate-fadeIn">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
            <span className="text-[#FFE169] animate-slideIn">Sri Naga Sri Govvala</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-slideInUp">
            Full Stack Web Developer | Data Engineer & Analyst | Graduate Student at Texas State University
          </p>
        </div>
        <div className="flex space-x-6 justify-center md:justify-start animate-fadeInUp">
          <a 
            href="https://www.linkedin.com/in/sri-naga-sri-govvala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-[#FFE169] rounded-full hover:bg-[#FFD93D] transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
          >
            <Linkedin size={24} className="text-gray-900" />
          </a>
          <a 
            href="https://github.com/SIRI1023?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-[#FFE169] rounded-full hover:bg-[#FFD93D] transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
          >
            <Github size={24} className="text-gray-900" />
          </a>
          <a 
            href="mailto:shri23.govvala@gmail.com"
            className="p-4 bg-[#FFE169] rounded-full hover:bg-[#FFD93D] transition-all duration-300 transform hover:scale-110 hover:-rotate-6 shadow-lg"
          >
            <Mail size={24} className="text-gray-900" />
          </a>
        </div>
      </div>
      <div className="relative md:w-2/5 flex justify-center animate-fadeIn">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#FFE169] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <img 
            src="https://i.ibb.co/NZb3TYY/profile.jpg"
            alt="Sri Naga Sri Govvala" 
            className="relative rounded-full w-72 h-72 object-cover border-4 border-[#FFE169] shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3"
          />
        </div>
      </div>
    </header>
  );
}
