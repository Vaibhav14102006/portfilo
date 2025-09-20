import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Database, Globe, Bot } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'CarrerForgePro',
      description: 'A comprehensive career development platform with job listings, skill assessments, and personalized career guidance.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full-Stack',
      icon: Globe,
      link: 'https://carrerforgepro.vercel.app',
      gradient: 'from-blue-500 to-teal-500',
    },
    {
      title: 'H2O',
      description: 'A water supply management application that helps track water usage, schedule deliveries, and optimize distribution.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Firebase', 'Google Maps API'],
      category: 'Full-Stack',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Agent',
      description: 'An intelligent AI assistant that can perform various tasks, answer questions, and automate workflows.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'TensorFlow', 'NLP', 'React'],
      category: 'AI/ML',
      icon: Bot,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Express.js', 'MySQL', 'Stripe API'],
      category: 'Full-Stack',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with real-time updates and custom filters.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'D3.js', 'MySQL', 'Chart.js'],
      category: 'Database',
      icon: Database,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with advanced animations and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'UI/UX',
      icon: Globe,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive system for managing student records, grades, and academic performance tracking.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MySQL', 'JWT'],
      category: 'Full-Stack',
      icon: Database,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Weather Prediction App',
      description: 'ML-based weather prediction application with intuitive UI and location-based forecasting.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Python', 'TensorFlow', 'Weather API'],
      category: 'AI/ML',
      icon: Bot,
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50/50 dark:from-gray-800 dark:to-gray-900/50 transition-colors duration-500 relative overflow-hidden" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800"></div>
        
        {/* Elegant geometric shapes */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/10 to-teal-100/10 dark:from-blue-900/5 dark:to-teal-900/5 rounded-full blur-2xl transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100/10 to-blue-100/10 dark:from-teal-900/5 dark:to-blue-900/5 rounded-full blur-2xl transform -rotate-45"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #3b82f6 0.5px, transparent 0.5px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-on-scroll relative z-10">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-on-scroll relative z-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Removed Live Demo and Code buttons */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;