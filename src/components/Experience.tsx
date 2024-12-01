import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Digital Product Developer",
    company: "The University Star",
    location: "San Marcos, TX",
    period: "February 2023 - Present",
    description: [
      "Managed end-to-end redesign and migration of The University Star's website to WordPress platform",
      "Led design of wireframes and UI/UX layouts, winning first place at 2024 National College Media Association Pinnacle Awards",
      "Implemented SEO best practices resulting in 35% increase in organic search traffic",
      "Integrated Google Analytics to track user engagement and guide site improvements",
      "Collaborated with teams to improve user workflows, driving 20% boost in engagement"
    ]
  },
  {
    title: "Data Engineer",
    company: "Pyramid IT Solutions PVT LTD",
    location: "Hyderabad, India",
    period: "September 2020 - December 2022",
    description: [
      "Enhanced data pipeline efficiency by 30% using Hadoop, Spark, and Kafka on AWS",
      "Automated ETL processes using Python and PySpark on AWS Glue",
      "Developed interactive Tableau and Python dashboards for financial insights",
      "Designed clustering algorithms with Spark and Scala on GCP",
      "Architected data models and ER diagrams for improved system efficiency"
    ]
  },
  {
    title: "IT Analyst",
    company: "Pyramid IT Solutions PVT LTD",
    location: "Hyderabad, India",
    period: "November 2017 - August 2020",
    description: [
      "Designed and optimized database systems on AWS Redshift",
      "Created Tableau dashboards for real-time operational reporting",
      "Implemented clustering and principal component analysis",
      "Managed data validation and repository optimization",
      "Collaborated across teams to maintain high data integrity"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#FFE169]">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 border-l-4 border-[#FFE169] hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-[#FFE169] font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}