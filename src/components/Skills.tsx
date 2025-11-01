import React, { useRef, useEffect, useState } from 'react';
import { Code, Globe, Bot, Database, Layers, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
      gradient: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'C & C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      ]
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Framer Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
        { name: 'Radix UI', logo: 'https://avatars.githubusercontent.com/u/75042455?s=200&v=4' },
      ]
    },
    {
      id: 3,
      title: 'Backend & Databases',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      gradient: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'REST APIs', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
      ]
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      ]
    },
    {
      id: 5,
      title: 'Tools & Deployment',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ]
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-500 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
            <Sparkles className={`w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 transition-all duration-400 ${
              isVisible ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
            }`} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              Skills & Expertise
            </h2>
            <Sparkles className={`w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 transition-all duration-400 ${
              isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
            }`} />
          </div>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full transition-all duration-500 ${
            isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}></div>
          <p className={`mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Comprehensive technical expertise across modern development stacks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const cardDelay = index * 80; // Fast cascading like water
            
            return (
              <div
                key={category.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700`}
                style={{
                  transform: isVisible 
                    ? 'translate(0, 0) scale(1) rotate(0deg)' 
                    : 'translate(-150vw, -150vh) scale(0.05) rotate(-360deg)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease-out',
                  transitionDelay: isVisible ? `${cardDelay}ms` : '0ms'
                }}
              >
                {/* Subtle Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gray-100 dark:bg-gray-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                {/* Animated particles on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                {/* Category Header with Background Image */}
                <div className={`relative h-40 mb-6 overflow-hidden pointer-events-none`}
                style={{
                  transform: isVisible ? 'scale(1)' : 'scale(0.2)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  transitionDelay: isVisible ? `${cardDelay + 50}ms` : '0ms'
                }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 to-gray-800/85"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center gap-4 px-6">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 relative z-10 px-8 pb-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex flex-col items-center gap-3 cursor-default`}
                      style={{
                        transform: isVisible 
                          ? 'translate(0, 0) scale(1) rotate(0deg)' 
                          : 'translate(-150vw, -150vh) scale(0.01) rotate(-720deg)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-out',
                        transitionDelay: isVisible ? `${cardDelay + 120 + skillIndex * 35}ms` : '0ms'
                      }}
                    >
                      {/* Logo Container */}
                      <div className="relative group/skill">
                        <div className="absolute inset-0 rounded-xl bg-gray-400 dark:bg-gray-500 blur-xl opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-2.5 transform group-hover/skill:scale-125 group-hover/skill:-translate-y-2 transition-all duration-300 shadow-md group-hover/skill:shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-600 group-hover/skill:border-gray-300 dark:group-hover/skill:border-gray-500">
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-full h-full object-contain pointer-events-none select-none filter group-hover/skill:brightness-110 transition-all duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover/skill:text-gray-900 dark:group-hover/skill:text-white group-hover/skill:font-semibold transition-all duration-300 select-none">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '27+', label: 'Technologies', icon: '💻' },
            { value: '10+', label: 'Projects', icon: '🚀' },
            { value: '5+', label: 'Tech Stacks', icon: '🎯' },
            { value: '3+', label: 'Hackathons', icon: '🏆' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`relative text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 hover:border-gray-300 dark:hover:border-gray-600 shadow-lg hover:shadow-2xl overflow-hidden group/stat`}
              style={{
                transform: isVisible 
                  ? 'translate(0, 0) scale(1) rotate(0deg)' 
                  : 'translate(-150vw, -150vh) scale(0.05) rotate(-270deg)',
                opacity: isVisible ? 1 : 0,
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-out',
                transitionDelay: isVisible ? `${500 + index * 50}ms` : '0ms'
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="text-3xl mb-2 transform group-hover/stat:scale-125 group-hover/stat:rotate-12 transition-all duration-300">
                {stat.icon}
              </div>
              
              {/* Value */}
              <div className="relative text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover/stat:text-gray-900 dark:group-hover/stat:text-white transition-colors">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="relative text-sm font-medium text-gray-600 dark:text-gray-400 group-hover/stat:text-gray-700 dark:group-hover/stat:text-gray-300 transition-colors">
                {stat.label}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transform scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
