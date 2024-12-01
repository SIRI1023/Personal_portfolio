import React from 'react';
import { Heart, Camera, Users, Plane, Code, Mountain } from 'lucide-react';

const interests = [
  {
    icon: <Code size={24} />,
    title: 'Coding Challenges',
    description:
      'Love solving algorithmic puzzles and participating in hackathons',
  },
  {
    icon: <Camera size={24} />,
    title: 'Photography',
    description: 'Capturing moments and exploring urban landscapes',
  },
  {
    icon: <Users size={24} />,
    title: 'Volunteer Activities',
    description:
      'Active member of Bobcat Bounty food pantry and Society of Women Engineers (SWE), promoting diversity in tech',
  },
  {
    icon: <Mountain size={24} />,
    title: 'Hiking/Trekking',
    description: 'Exploring nature trails and conquering new peaks',
  },
  {
    icon: <Plane size={24} />,
    title: 'Travel',
    description:
      'Exploring new cultures, tech communities and visiting Historical sites',
  },
  {
    icon: <Heart size={24} />,
    title: 'Community',
    description: 'Mentoring junior developers and organizing tech meetups',
  },
];

export function Interests() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#FFE169]">Beyond Code</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-[#FFE169] group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#FFE169] rounded-lg text-gray-900 group-hover:bg-[#FFD93D] transition-colors">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold ml-4 text-white">
                  {interest.title}
                </h3>
              </div>
              <p className="text-gray-400">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
