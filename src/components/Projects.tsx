import React, { useState } from 'react';
import { ExternalLink, Github, Play, ChevronRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: 'Newsify Web Application',
    description:
      'A modern news aggregation platform delivering personalized content, AI-powered summaries, and real-time sentiment analysis.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Node.js', 'Hugging Face', 'TF-IDF', 'NLP'],
    links: {
      github: 'https://github.com/SIRI1023/Newsify_webApp.git',
      live: 'https://newsify-web-app.vercel.app/',
      demo: 'https://go.screenpal.com/watch/cTVfc4neOre', 
    },
    details: {
      features: [
        'News Curation: Aggregate news from multiple sources and categorize by topic.',
        'AI-Powered Summarization: Generate concise summaries of long articles using Hugging Face.',
        'Personalized Recommendations: Recommend articles based on user preferences with TF-IDF.',
        'Sentiment Analysis: Filter articles by tone (positive, negative, neutral).',
        'Trending Topics: Display real-time trending news topics dynamically.',
        'AI Discussions: Enable interactive discussions with an AI assistant about news topics.',
      ],
      technologies: ['React', 'Supabase', 'Node.js', 'Tailwind CSS', 'Hugging Face', 'NLP', 'TF-IDF'],
      challenges: [
        'Integrated multiple AI tools for seamless user experience.',
        'Optimized performance for fetching and rendering real-time data.',
        'Developed modular and reusable React components for scalability.',
      ],
      impact:
        'Expected to enhance user engagement with personalized news delivery and reduce time spent finding relevant articles by 50% through efficient AI tools.',
    },
  },
  {
    title: 'Fighting Hunger Together',
    description:
      'A web-based platform designed to combat hunger and malnutrition by raising awareness, encouraging community involvement, and providing sustainable solutions.',
    tech: ['React', 'Node.js', 'Web Development'],
    links: {
      github: 'https://github.com/SIRI1023/Fighting-Hunger.git',
      live: 'https://fighting-hunger-git-main-siri1023s-projects.vercel.app/',
      demo: 'https://go.screenpal.com/watch/cZlVbDnncQh',
    },
    details: {
      features: [
        'Volunteer Opportunities: Sign up for community food drives and distribution events',
        'Donation Integration: Secure way to contribute funds to food security initiatives',
        'Educational Content: Compelling stories and statistics about food security',
        'Interactive Features: User-friendly forms for volunteer registration',
        'Sustainability Practices: Initiatives for reducing food waste',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      challenges: [
        'Developed responsive design for seamless mobile user experience',
        'Created efficient data synchronization between multiple service points',
      ],
      impact:
        'This platform is projected to connect over 500 volunteers with local food banks annually, facilitate distribution of 10,000+ meals monthly, and increase community awareness about food insecurity issues by 60% through ongoing educational initiatives.',
    },
  },
  {
    title: 'Smart Farmer Dashboard',
    description:
      'An integrated platform designed to assist farmers in making informed decisions by providing comprehensive analyses of crops, weather, and soil data.',
    tech: ['React.js', 'Node.js', 'TensorFlow', 'Docker', 'PostgreSQL'],
    links: {
      github: 'https://github.com/SIRI1023/smartFarmerDashboard.git',
      live: 'https://smart-farmer-dashboard.vercel.app/',
      demo: 'https://go.screenpal.com/u/gDMh/smartFarmer_videoDemo',
    },
    details: {
      features: [
        'Crop Analysis: ML-powered crop health assessment',
        'Weather Analysis: Real-time weather data and forecasts',
        'Soil Data Analysis: Recommendations for nutrient management',
        'History Feature: Track changes and assess strategies',
        'Machine Learning Integration: Disease detection models',
      ],
      technologies: [
        'React.js',
        'Express.js',
        'TensorFlow',
        'Docker',
        'PostgreSQL',
        'Node.js',
        'TypeScript',
      ],
      challenges: [
        'Developed complex ML models for accurate crop disease prediction',
        'Integrated multiple data sources for comprehensive weather analysis',
        'Implemented real-time data processing for instant insights',
        'Optimized application performance for low-bandwidth rural areas',
      ],
      impact:
        'This solution is expected to help farmers achieve up to 40% increase in crop yields, enable 50% reduction in water usage through smart irrigation, and significantly improve disease prevention through early detection, leading to more sustainable farming practices.',
    },
  },
  {
    title: 'University Star Parking Map',
    description:
      'Developed an interactive parking map feature to improve navigation and access to parking and shuttle information for Texas State University community.',
    tech: ['Leaflet.js', 'WordPress', 'JavaScript', 'HTML5', 'CSS'],
    links: {
      github: 'https://github.com/SIRI1023/Parking-maps.git',
      live: 'https://universitystar.com/26702/news/txst-transit-shifts-gears-from-parking-to-shuttles/',
      demo: 'https://go.screenpal.com/watch/cZlVbunnc6F',
    },
    details: {
      features: [
        'Interactive Map Interface: Intuitive parking zones visualization',
        'Standalone Page: Comprehensive parking information',
        'Embedded in News Stories: Contextual map integration',
        'Layered Parking Zones: Color-coded areas for different users',
        'Tooltip Details: Detailed zone information',
      ],
      technologies: ['Leaflet.js', 'WordPress', 'JavaScript', 'HTML5', 'CSS'],
      challenges: [
        'Implemented complex geospatial data visualization',
        'Optimized map loading for improved performance',
        'Created intuitive UI for diverse user base',
      ],
      impact:
        'This solution aims to reduce average parking search time by 80%, potentially saving 15,000+ student hours per semester. The data collected will drive future campus transportation planning and is expected to increase parking efficiency by 40%.',
    },
  },
  {
    title: 'Bobcat Bounty Web Application',
    description:
      'A web application for Bobcat Bounty, a student-run food pantry, providing real-time inventory tracking and AI-powered recipe suggestions.',
    tech: ['React', 'PostgreSQL', 'Node.js', 'Figma'],
    links: {
      github: '#',
      live: 'https://bobcat-bounty-app-1-tarive22.replit.app/',
      demo: 'https://go.screenpal.com/watch/cZlVbqnncQ4',
    },
    details: {
      features: [
        'Real-time Inventory Tracking: Live stock information',
        'AI-Powered Recipe Suggestions: Based on available items',
        'User-Driven Updates: Real-time inventory management',
        'Dietary Information: Details about food restrictions',
        'Volunteer Management: Staff and volunteer coordination',
      ],
      technologies: ['React', 'PostgreSQL', 'Node.js', 'Express', 'Figma'],
      challenges: [
        'Developed AI algorithm for personalized recipe suggestions',
        'Created efficient volunteer scheduling system',
        'Optimized database queries for quick inventory updates',
      ],
      impact:
        'The application is positioned to serve 5,000+ students annually, with projected reduction in food waste by 70% through smart inventory management. Expected to decrease wait times by 75% and improve resource allocation efficiency by 60% through data-driven insights.',
    },
  },
  {
    title: 'Personal Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my professional journey, projects, and technical expertise. Built with a focus on user experience and performance.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    links: {
      github: 'https://github.com/SIRI1023/portfolio',
    },
    details: {
      features: [
        'Responsive Design: Seamless experience across all devices',
        'Interactive UI: Smooth animations and transitions',
        'Project Showcase: Detailed project cards with modal views',
        'Contact Form: Integrated EmailJS for direct communication',
        'Performance Optimized: Fast loading and smooth scrolling',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'EmailJS',
        'Vite',
        'Lucide Icons',
        'CSS Animations',
      ],
      challenges: [
        'Implemented responsive design patterns for optimal viewing across devices',
        'Created smooth animations while maintaining performance',
        'Developed reusable components for maintainable code structure',
        'Integrated email functionality without backend dependencies',
      ],
      impact:
        'This portfolio is designed to showcase professional growth, technical expertise, and project achievements while providing an intuitive and engaging user experience for potential employers and collaborators.',
    },
  },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#FFE169]">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer border-2 relative group ${
                activeProject === index ? 'border-[#FFE169]' : 'border-gray-700'
              }`}
              onClick={() => {
                setActiveProject(index);
                setIsModalOpen(true);
              }}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} className="text-[#FFE169]" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[#FFE169] text-gray-900 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} className="text-white" />
                </a>
                {project.links.live &&
                  project.title !== 'Personal Portfolio' && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#FFE169] rounded-full hover:bg-[#FFD93D] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} className="text-gray-900" />
                    </a>
                  )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play size={20} className="text-white" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <ProjectModal
          project={projects[activeProject]}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
