import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

// 3D Education Card Component
const EducationCard: React.FC<{ item: any; index: number; isVisible: boolean }> = ({ item, index, isVisible }) => {
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return; // Disable 3D effect on mobile
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{ 
        transform: isHovering ? transform : (isVisible ? 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0)' : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(50px)'),
        transition: isVisible 
          ? `all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`
          : 'all 0.5s ease-out',
        transformStyle: 'preserve-3d',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* 3D Glow Effect */}
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl blur-2xl opacity-40 animate-pulse`}></div>
      </div>
      
      {/* Rotating Border */}
      <div className="absolute -inset-2 rounded-3xl border-2 border-blue-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-white/20 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500"
           style={{ transform: 'translateZ(20px)' }}>
        
        {/* Gradient Top Bar */}
        <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
        
        {/* Card Content */}
        <div className="p-8">
          {/* Icon and Title */}
          <div className="flex items-start gap-6 mb-6">
            {/* 3D Icon */}
            <div className="flex-shrink-0 relative" style={{ transform: 'translateZ(30px)' }}>
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-50`}></div>
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Description/Details */}
          <div className="space-y-3">
            {item.details.map((detail: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 group/item p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300">
                <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200 shadow-lg`}></div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-bl ${item.color} rounded-bl-[100px]`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-tr-[100px]`}></div>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
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

  // Education Data in 3D Frame Cards
  const educationData = [
    {
      id: 1,
      title: 'B.Tech CSE (AI/ML)',
      subtitle: 'Amity University • 2024-2028 • CGPA: 9.02',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      details: [
        'Specializing in Artificial Intelligence & Machine Learning',
        'Strong foundation in Data Structures & Algorithms',
        'Machine Learning and Deep Learning coursework',
        'Database Management and System Design',
        'Active in coding competitions and tech workshops'
      ]
    },
    {
      id: 2,
      title: 'Higher Secondary Education',
      subtitle: 'Central Academy School • 2023-2024 • Science Stream',
      icon: GraduationCap,
      color: 'from-teal-500 to-emerald-500',
      details: [
        'Focused on Mathematics, Physics, and Computer Science',
        'Strong foundation in Mathematics and Physics',
        'Started programming journey with Python and C++',
        'Participated in science exhibitions and competitions',
        'Developed interest in AI and automation technologies'
      ]
    },
    {
      id: 3,
      title: 'Secondary Education',
      subtitle: 'Central Academy School • 2021-2022 • Class 10th',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Built strong academic foundation across all subjects',
        'Excellent performance in Mathematics and Science',
        'Developed analytical and problem-solving skills',
        'Participated in inter-school competitions',
        'Discovered passion for technology and computers'
      ]
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Academic journey and educational background
          </p>
        </div>

        {/* 3D Cards Grid with Timeline Connection */}
        <div className="max-w-7xl mx-auto relative">
          {/* Timeline Labels */}
          <div className="hidden lg:block absolute left-1/2 top-16 transform -translate-x-1/2 z-10">
            <div className="px-4 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full shadow-lg">
              2024-2028
            </div>
          </div>
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="px-4 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full shadow-lg">
              2023-2024
            </div>
          </div>
          <div className="hidden lg:block absolute left-1/2 bottom-16 transform -translate-x-1/2 z-10">
            <div className="px-4 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-lg">
              2021-2022
            </div>
          </div>
          
          {/* Connecting Line - Vertical with glow */}
          <div className="hidden lg:block absolute left-1/2 top-28 bottom-28 w-2 bg-gradient-to-b from-indigo-500 via-teal-400 to-blue-500 transform -translate-x-1/2 z-0 shadow-2xl rounded-full"></div>
          
          {/* Timeline Dots with pulse animation */}
          <div className="hidden lg:block absolute left-1/2 top-28 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10 shadow-2xl animate-pulse">
            <div className="absolute inset-0 rounded-full bg-indigo-400 opacity-50 animate-ping"></div>
          </div>
          <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-teal-400 opacity-30"></div>
          </div>
          <div className="hidden lg:block absolute left-1/2 bottom-28 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10 shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30"></div>
          </div>
          
          {/* Connecting arrows */}
          <div className="hidden lg:block absolute left-1/2 top-40 transform -translate-x-1/2 z-10">
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-purple-500">
              <path d="M10 2 L10 18 M10 18 L6 14 M10 18 L14 14" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="hidden lg:block absolute left-1/2 bottom-40 transform -translate-x-1/2 z-10">
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-teal-500">
              <path d="M10 2 L10 18 M10 18 L6 14 M10 18 L14 14" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
            {educationData.map((item, index) => (
              <EducationCard
                key={item.id}
                item={item}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;