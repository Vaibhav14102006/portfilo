import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Update the educationData array with the correct years
  const educationData = [
    {
      id: 1,
      institution: "Amity University",
      degree: "B.Tech in Computer Science",
      duration: "2024-2028",
      description: "CGPA: 9.02/10",
      color: "from-blue-500 to-blue-600",
      status: "Current",
      highlights: ["Focusing on Computer Science fundamentals", "Participating in coding competitions", "Learning modern web development"]
    },
    {
      id: 2,
      institution: "Central Academy School",
      degree: "Higher Secondary Education",
      duration: "2023-2024",
      description: "Focused on Science and Mathematics",
      color: "from-teal-500 to-teal-600",
      status: "Completed",
      highlights: ["Excelled in Mathematics and Computer Science", "Participated in science exhibitions", "Developed strong analytical skills"]
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50/50 to-white dark:from-gray-900/50 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent dark:via-teal-800"></div>
        
        {/* Elegant diagonal lines */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #3b82f6,
              #3b82f6 1px,
              transparent 1px,
              transparent 80px
            )`
          }}></div>
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-teal-200/10 dark:from-blue-800/5 dark:to-teal-800/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-gradient-to-tr from-teal-200/10 to-blue-200/10 dark:from-teal-800/5 dark:to-blue-800/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-on-scroll relative z-10">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-on-scroll relative z-10"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 shadow-lg"></div>

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r ${item.color} border-4 border-white dark:border-gray-900 z-10`}></div>

                {/* Content Card */}
                <div className="ml-20 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${item.color}`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                          {item.degree}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                      {item.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{item.description}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;