import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    { icon: Code, number: '10+', label: 'Projects' },
    { icon: Lightbulb, number: '5+', label: 'Tech Stacks' },
    { icon: Rocket, number: '3+', label: 'Hackathons' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50/50 dark:from-gray-800 dark:to-gray-900/50 transition-colors duration-500 relative overflow-hidden" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-teal-100/20 dark:from-blue-900/10 dark:to-teal-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-100/20 to-blue-100/20 dark:from-teal-900/10 dark:to-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-on-scroll relative z-10">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-on-scroll relative z-10"></div>
        </div>

        {/* Profile Section with Image */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-700"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 dark:border-gray-700/50 shadow-2xl">
                  <img
                    src="/vaibhav fix.png"
                    alt="Vaibhav Singh Rajawat"
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <stat.icon className="w-5 h-5 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                          <div className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">{stat.number}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Motivational Quote */}
              <div className="mt-8 sm:mt-12 text-center animate-on-scroll">
                <div className="inline-block bg-gray-800 dark:bg-gray-700 p-[2px] rounded-2xl shadow-lg">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 italic">
                      "Mission-driven. Code-powered. Relentlessly pushing boundaries to deploy intelligent solutions."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="animate-on-scroll space-y-4 sm:space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                  Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Vaibhav</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-3 sm:mb-4">
                  A passionate <span className="font-semibold text-teal-600 dark:text-teal-400">AI & Full-Stack Engineering student</span> specializing in intelligent automation, voice-driven systems, and scalable web applications.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-3 sm:mb-4">
                  I build <span className="font-semibold text-purple-600 dark:text-purple-400">futuristic, human-centric technologies</span> including offline AI assistants, 
                  real-time automation systems, and modern Next.js platforms with immersive UI.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  With a strong foundation in <span className="font-semibold text-orange-600 dark:text-orange-400">C++, Python, TypeScript</span>, and AI system design, 
                  I turn ideas into high-impact digital experiences that are <span className="font-semibold text-blue-600 dark:text-blue-400">smart, interactive, and intuitive</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;