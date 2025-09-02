import React, { useEffect, useRef } from 'react';
import { Database, Globe, Palette, Bot, Rocket, Code } from 'lucide-react';

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

  const highlights = [
    {
      icon: Database,
      title: 'MySQL',
      description: 'Database design, queries, optimization',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'HTML, CSS, JavaScript, React',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX',
      description: 'Clean and user-centric interfaces',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      title: 'AI & ML Foundations',
      description: 'Artificial Intelligence & Machine Learning',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Rocket,
      title: 'Innovative Solutions',
      description: 'Creative problem-solving approach',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end application development',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50/50 dark:from-gray-800 dark:to-gray-900/50 transition-colors duration-500 relative overflow-hidden" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-teal-100/20 dark:from-blue-900/10 dark:to-teal-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-100/20 to-blue-100/20 dark:from-teal-900/10 dark:to-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-on-scroll relative z-10">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-on-scroll relative z-10"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl mb-16 animate-on-scroll">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              I'm currently pursuing a{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                B.Tech in Computer Science
              </span>{' '}
              with a specialization in{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                Artificial Intelligence and Machine Learning
              </span>
              . As a passionate developer, I strive to build solutions that are innovative, impactful, and scalable. 
              I work extensively with{' '}
              <span className="font-semibold text-orange-600 dark:text-orange-400">MySQL</span>,{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, 
              and modern UI/UX practices to create user-friendly and data-driven applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll border border-gray-100 dark:border-gray-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;