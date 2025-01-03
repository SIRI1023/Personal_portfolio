import React from 'react';
import { FileText, Code, Database, Brain, Rocket } from 'lucide-react';

export function About() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#FFE169]">About Me</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Code size={24} className="text-[#FFE169] mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-lg leading-relaxed">
                As a passionate Full Stack Developer and Data Engineer, I bring a unique blend of web development expertise and data engineering capabilities. Recently graduated in Master's in Computer Science at Texas State University, I specialize in creating scalable web applications and implementing robust data solutions that drive business value.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Database size={24} className="text-[#FFE169] mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-lg leading-relaxed">
                My professional journey spans from developing interactive web applications to architecting complex data pipelines. At The University Star, I led the complete redesign of their digital platform, resulting in a 35% increase in organic traffic. Previously, as a Data Engineer at Pyramid IT Solutions, I enhanced data pipeline efficiency by 30% through optimized Hadoop and Spark workflows.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Brain size={24} className="text-[#FFE169] mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-lg leading-relaxed">
                I thrive in full-stack development using React.js, Node.js, and Express.js, while my expertise in data engineering encompasses AWS, Hadoop, and Apache Kafka. My passion lies in bridging the gap between robust backend systems and intuitive front-end experiences, creating solutions that are both powerful and user-friendly.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Rocket size={24} className="text-[#FFE169] mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm particularly interested in leveraging modern technologies to build scalable applications that solve real-world challenges. Whether it's optimizing database performance, implementing machine learning solutions, or creating responsive web interfaces, I'm committed to delivering high-quality solutions that exceed expectations.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:965294d2-1d9a-44e7-8ab1-caa959158a16" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFE169] text-gray-900 px-6 py-3 rounded-lg hover:bg-[#FFD93D] transition-colors"
            >
              <FileText size={20} />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
