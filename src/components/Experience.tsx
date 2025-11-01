import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Zap, Trophy, Calendar, Sparkles, Target } from 'lucide-react';

// 3D Experience Card Component
const ExperienceCard: React.FC<{ exp: any; index: number; isVisible: boolean }> = ({ exp, index, isVisible }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
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
          ? `all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`
          : 'all 0.5s ease-out',
        transformStyle: 'preserve-3d',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* 3D Frame Layers */}
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-2xl opacity-30 animate-pulse`}></div>
      </div>
      
      {/* Rotating Border Ring */}
      <div className="absolute -inset-2 rounded-3xl border-2 border-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500"></div>
      
      {/* Main Card Container with 3D depth */}
      <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-white/20 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500"
           style={{ transform: 'translateZ(20px)' }}>
        
        {/* Gradient Top Bar */}
        <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
        
        {/* Card Content */}
        <div className="p-8">
          {/* Header Section */}
          <div className="flex gap-6 mb-6">
            {/* 3D Icon Frame */}
            <div className="flex-shrink-0 relative" style={{ transform: 'translateZ(30px)' }}>
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-50`}></div>
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <exp.icon className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title and Meta */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {exp.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white shadow-md`}>
                  {exp.type}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-sm">
            {exp.description}
          </p>

          {/* Achievements Grid */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">Key Achievements</h4>
            <div className="grid gap-3">
              {exp.achievements.map((achievement: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 group/item p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300">
                  <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200 shadow-lg`}></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-bl ${exp.color} rounded-bl-[100px]`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-tr ${exp.color} rounded-tr-[100px]`}></div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
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

  const experiences = [
    {
      id: 1,
      title: 'AI & Automation Developer',
      company: 'Self-Driven Projects',
      duration: '2024 - Present',
      type: 'Personal Development',
      description: 'Building innovative AI solutions and automation systems',
      color: 'from-green-500 to-emerald-500',
      icon: Zap,
      achievements: [
        'Built SARAS & October AI - Offline intelligent assistants with context memory',
        'Developed voice-enabled systems with OS-level automation capabilities',
        'Created GUI overlay and workflow automation features',
        'Implemented real-time voice interaction and device control',
        'Integrated advanced NLP for natural user interactions'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Personal Projects',
      duration: '2023 - Present',
      type: 'Web Development',
      description: 'Designing and deploying production-ready web applications',
      color: 'from-blue-500 to-cyan-500',
      icon: Code,
      achievements: [
        'Built Investment Platform with financial visualization',
        'Developed CareerForgePro with AI-powered career guidance',
        'Created Satyapatra AI spam detection system',
        'Designed modern portfolios with advanced animations',
        'Implemented authentication workflows and clean UI/UX',
        'Deployed multiple apps on Vercel and Firebase'
      ]
    },
    {
      id: 3,
      title: 'Hackathon & Tech Participation',
      company: 'Various Events',
      duration: '2024',
      type: 'Competitions',
      description: 'Active participation in competitive coding and innovation challenges',
      color: 'from-purple-500 to-pink-500',
      icon: Trophy,
      achievements: [
        'Participated in Smart India Hackathon (SIH)',
        'Engaged in university tech events and workshops',
        'Attended AI/ML focused seminars and competitions',
        'Collaborated with teams on innovative problem-solving',
        'Enhanced practical skills through real-world challenges'
      ]
    },
  ];

  const highlights = [
    { icon: Target, label: 'Active Projects', value: '10+' },
    { icon: Sparkles, label: 'Tech Stacks', value: '5+' },
    { icon: Trophy, label: 'Hackathons', value: '3+' },
  ];

  return (
    <section 
      id="experience" 
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent dark:via-purple-800"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-purple-100/10 to-pink-100/10 dark:from-purple-900/5 dark:to-pink-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-tl from-blue-100/10 to-cyan-100/10 dark:from-blue-900/5 dark:to-cyan-900/5 rounded-full blur-3xl"></div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-on-scroll">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 animate-on-scroll"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto animate-on-scroll">
            Journey through my professional growth and technical accomplishments
          </p>
        </div>

        {/* Highlights Section */}
        <div className="max-w-6xl mx-auto mb-16 animate-on-scroll" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                {/* 3D Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-white/20 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
                     style={{ transformStyle: 'preserve-3d' }}>
                  <div className="relative" style={{ transform: 'translateZ(20px)' }}>
                    <item.icon className="w-10 h-10 mx-auto mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{item.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
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

export default Experience;
