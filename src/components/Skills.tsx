import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'Scala',
      'C++',
      'React.js',
      'Express.js',
      'Node.js',
      'Shell Scripting',
    ],
  },
  {
    title: 'Big Data Technologies',
    skills: ['Hadoop', 'Spark', 'Apache Kafka', 'HDFS'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MySQL', 'MongoDB', 'Oracle', 'Microsoft SQL Server'],
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS S3', 'AWS Redshift', 'AWS EMR', 'AWS Glue', 'GCP'],
  },
  {
    title: 'ETL & Data Tools',
    skills: [
      'Informatica',
      'Tableau',
      'Power BI',
      'Pandas',
      'NumPy',
      'Seaborn',
    ],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'Jenkins', 'Jira', 'Lucid Chart', 'VSCode'],
  },
  {
    title: 'Web Management',
    skills: ['WordPress', 'HTML5', 'CSS3', 'UI/UX Design'],
  },
  {
    title: 'Analytics & Optimization',
    skills: [
      'Google Analytics',
      'A/B Testing',
      'SEO Optimization',
      'Google Search Console',
    ],
  },
];

export function Skills() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#FFE169]">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 rounded-xl p-6 border border-[#FFE169]"
            >
              <h3 className="text-xl font-bold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-gray-800 text-[#FFE169] rounded-full border border-[#FFE169]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
