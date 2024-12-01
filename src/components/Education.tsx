import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Texas State University",
    location: "San Marcos, TX",
    period: "January 2023 - December 2024",
    details: "Focusing on advanced software development and data analytics"
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "Jawaharlal Nehru Technological University",
    location: "India",
    period: "June 2013 - May 2017",
    details: "Foundation in computer science and software engineering principles"
  }
];

export function Education() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#FFE169]">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FFE169] hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <GraduationCap size={24} className="text-[#FFE169] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-[#FFE169] font-medium">{edu.school}</p>
                  <div className="flex items-center text-gray-400 mt-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mt-3">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}