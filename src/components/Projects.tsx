import React, { useEffect, useRef, useState } from 'react';
import { Globe, Bot } from 'lucide-react';

// 3D Tilt Project Card Component with Card Spread Animation
const ProjectCard: React.FC<{ project: any; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate card spread positions (like distributing playing cards)
  const getSpreadTransform = () => {
    if (!isVisible) {
      // All cards stacked at center when not visible
      return 'translate(0px, 0px) rotate(0deg) scale(0.8)';
    }
    
    // Disable rotation on mobile for better performance
    if (isMobile) {
      return 'translate(0px, 0px) rotate(0deg) scale(1)';
    }
    
    // Spread pattern - cards fan out in all directions from center
    const row = Math.floor(index / 3);
    const col = index % 3;
    
    // Create fan-out effect with rotation
    const rotateZ = (col - 1) * 3 + (row * 2); // Slight rotation for each card
    
    return `translate(0px, 0px) rotate(${rotateZ}deg) scale(1)`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return; // Disable 3D effect on mobile
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 card-spread"
      style={{ 
        transform: isHovering ? transform : getSpreadTransform(),
        transition: isVisible 
          ? `all 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12}s`
          : 'all 0.6s ease-in',
        transformStyle: 'preserve-3d',
        opacity: isVisible ? 1 : 0,
        zIndex: isHovering ? 50 : isVisible ? 10 : index,
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}>
          <project.icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-md`}>
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
          {project.tech.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:scale-110 transition-transform duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset animation when scrolling away
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Investment Platform',
      description: 'A portfolio analysis platform offering clean UI, financial visualization, and real-time performance insights for smart investment decisions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Firebase'],
      category: 'Full-Stack',
      icon: Globe,
      link: 'https://invested-mauve.vercel.app',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'CareerForgePro',
      description: 'Career-guidance app enabling roadmap building, skill discovery, and professional growth tracking with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML'],
      category: 'Full-Stack',
      icon: Globe,
      link: 'https://carrerforgepro.vercel.app',
      gradient: 'from-blue-500 to-teal-500',
    },
    {
      title: 'Satyapatra — AI Spam Detector',
      description: 'AI-powered email analyzer detecting spam and phishing using ML concepts and content signal evaluation for enhanced email security.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      tech: ['Python', 'Machine Learning', 'NLP', 'React', 'FastAPI'],
      category: 'AI/ML',
      icon: Bot,
      link: 'https://satyapatra-email.vercel.app',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern animated developer portfolio showcasing skills, projects, and achievements with stunning visual effects and smooth interactions.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'UI/UX',
      icon: Globe,
      link: 'https://vaibhav-rouge.vercel.app',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SARAS AI Assistant',
      description: 'Offline intelligent assistant with context memory, UI overlay, OS-level automation and voice interaction for seamless PC control.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tech: ['Python', 'Voice AI', 'PyAutoGUI', 'NLP', 'System Automation'],
      category: 'AI/ML',
      icon: Bot,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'October AI Assistant',
      description: 'Advanced offline AI assistant featuring GUI overlay, workflow automation, and intelligent voice-driven device control capabilities.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      tech: ['Python', 'AI/ML', 'Voice Recognition', 'GUI Automation', 'OS Integration'],
      category: 'AI/ML',
      icon: Bot,
      gradient: 'from-cyan-500 to-teal-500',
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
        <div className="text-center mb-16" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 relative z-10">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto relative z-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;