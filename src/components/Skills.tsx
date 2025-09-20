import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Bot, 
  Calculator, 
  BookOpen, 
  Palette, 
  Users, 
  Database,
  Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(9).fill(false));

  // Individual item refs for intersection observation
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'bg-indigo-500',
      skills: [
        'C++ (OOP, problem-solving, DSA)',
        'Python (automation, AI assistants, scripting)',
        'TypeScript (scalable Next.js apps)',
        'JavaScript (modern ES6+)'
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'bg-blue-500',
      skills: [
        'ReactJS (component-based architecture)',
        'Next.js (full-stack applications)',
        'TailwindCSS (responsive design)',
        'Radix UI (accessible components)',
        'Framer Motion (animations)',
        'Firebase (backend services)',
        'Vercel (deployment & hosting)'
      ]
    },
    {
      title: 'AI & Automation',
      icon: Bot,
      color: 'bg-emerald-500',
      skills: [
        'Jarvis AI assistant development',
        'SARAS automation systems',
        'October AI assistants',
        'LiveKit real-time communication',
        'Gemini API integration',
        'DeepSeek API implementation',
        'Real-time system automation'
      ]
    },
    {
      title: 'Mathematics & Problem Solving',
      icon: Calculator,
      color: 'bg-purple-500',
      skills: [
        'Partial Differential Equations (PDEs)',
        'Fourier series analysis',
        'Laplace transforms',
        'Engineering problem-solving',
        'Logical algorithms design',
        'Mathematical modeling'
      ]
    },
    {
      title: 'Academic & Writing Skills',
      icon: BookOpen,
      color: 'bg-amber-500',
      skills: [
        'Technical report writing',
        'Case study analysis',
        'English & French writing',
        'Structured assignments',
        'Research documentation',
        'Academic presentation'
      ]
    },
    {
      title: 'Creative & Design',
      icon: Palette,
      color: 'bg-pink-500',
      skills: [
        'UI/UX wireframes design',
        'Interactive UI mockups',
        'Gamified platforms (AmiQuiz)',
        'Archive systems (Ami Archive)',
        'User-centric interfaces',
        'Responsive design patterns'
      ]
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'bg-orange-500',
      skills: [
        'MySQL (design, queries, optimization)',
        'Database architecture',
        'Query optimization',
        'Data modeling',
        'Backend API development'
      ]
    },
    {
      title: 'Full-Stack Development',
      icon: Layers,
      color: 'bg-cyan-500',
      skills: [
        'End-to-end application development',
        'Frontend + Backend integration',
        'RESTful API design',
        'Authentication systems',
        'Deployment strategies'
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'bg-teal-500',
      skills: [
        'Project management',
        'Team collaboration',
        'Adaptability',
        'Debugging & troubleshooting',
        'Continuous learning mindset',
        'Creative problem-solving approach'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Enhanced Background Elements with Real-time Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-800"></div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #6366f1 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Real-time Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-floating-particles"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-xl animate-floating-particles" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-teal-400/6 to-indigo-400/6 rounded-full blur-3xl animate-floating-particles" style={{ animationDelay: '2s' }}></div>
        
        {/* Continuously Moving Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-particle-drift"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-particle-drift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400/35 rounded-full animate-particle-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-indigo-300/25 rounded-full animate-particle-drift" style={{ animationDelay: '3s' }}></div>
        
        {/* Orbiting Elements Around Timeline */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
          <div className="w-3 h-3 bg-purple-500/20 rounded-full animate-floating-orbit"></div>
        </div>
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-indigo-500/25 rounded-full animate-floating-orbit" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        </div>
        
        {/* Shimmer Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/[0.01] to-transparent animate-background-shimmer"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills and expertise across various domains
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Extended Central Vertical Line - Main Tree Trunk */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 rounded-full origin-top overflow-hidden shadow-2xl shadow-purple-500/50"
            style={{ height: `${skillCategories.length * 320 + 100}px` }}
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Enhanced flowing energy effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-energy-flow"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-300/50 to-transparent animate-energy-flow" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent animate-energy-flow" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/25 to-transparent animate-energy-flow" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
            
            {/* Pulsing core */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 via-indigo-400/30 to-purple-400/20 animate-pulse"></div>
            
            {/* Real-time Energy Pulses */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-white via-purple-300 to-transparent animate-energy-pulse rounded-full"></div>
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-white via-indigo-400 to-transparent animate-energy-pulse rounded-full" style={{ animationDelay: '1s' }}></div>
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1.5 h-5 bg-gradient-to-b from-white via-purple-400 to-transparent animate-energy-pulse rounded-full" style={{ animationDelay: '2s' }}></div>
          </motion.div>

          {/* Root Network System - Background layer */}
          <div className="absolute inset-0 pointer-events-none">
            {skillCategories.map((_, index) => (
              <div key={`root-${index}`} className="absolute">
                {/* Main Root Branch */}
                <motion.div
                  className={`absolute top-0 ${index % 2 === 0 ? 'md:left-1/2 left-8' : 'md:right-1/2 md:left-1/2 left-8'} transform ${index % 2 === 0 ? '' : 'md:scale-x-[-1]'}`}
                  style={{ 
                    top: `${index * 320 + 160}px`,
                    zIndex: 5
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={visibleItems[index] ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  {/* Primary Root */}
                  <div className="relative">
                    <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full transform rotate-12 origin-left shadow-lg shadow-purple-500/30 animate-root-glow-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-pulse"></div>
                      {/* Real-time connection wave */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full animate-connection-wave"></div>
                    </div>
                    
                    {/* Secondary Branch */}
                    <div className="absolute top-0 left-12 md:left-16 w-12 md:w-20 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-300 rounded-full transform -rotate-6 origin-left animate-root-glow-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-connection-wave" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                    
                    {/* Tertiary Branch */}
                    <div className="absolute top-1 left-8 md:left-12 w-8 md:w-12 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full transform rotate-25 origin-left animate-root-glow-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-connection-wave" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  </div>
                  
                  {/* Root End Connector */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-16 md:left-28' : 'left-16 md:left-28'} w-2 h-2 bg-purple-500 rounded-full shadow-lg animate-pulse`}>
                    <div className="absolute -inset-1 bg-purple-500/50 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Flowing particles along roots */}
                  {visibleItems[index] && (
                    <>
                      <div className="absolute top-0 left-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}></div>
                      <div className="absolute top-0 left-8 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-ping" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                      <div className="absolute top-1 left-12 w-0.5 h-0.5 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2 + 1}s` }}></div>
                    </>
                  )}
                </motion.div>
                
                {/* Organic Root Tendrils */}
                <div 
                  className="absolute"
                  style={{ 
                    top: `${index * 320 + 140}px`,
                    left: index % 2 === 0 ? 'calc(50% + 20px)' : 'calc(50% - 40px)',
                    transform: index % 2 === 0 ? 'none' : 'scaleX(-1)',
                    zIndex: 4
                  }}
                >
                  {[...Array(3)].map((_, tendrilIndex) => (
                    <motion.div
                      key={`tendril-${index}-${tendrilIndex}`}
                      className={`absolute w-8 md:w-12 h-px bg-gradient-to-r from-purple-400/60 to-transparent rounded-full`}
                      style={{
                        top: `${tendrilIndex * 8 + 10}px`,
                        left: `${tendrilIndex * 4}px`,
                        transform: `rotate(${15 + tendrilIndex * 10}deg)`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={visibleItems[index] ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + tendrilIndex * 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" style={{ animationDelay: `${tendrilIndex * 0.3}s` }}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Items */}
          <motion.div
            className="space-y-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-center"
                variants={itemVariants}
                ref={(el) => (itemRefs.current[index] = el)}
                style={{ marginBottom: '40px' }}
              >
                {/* Enhanced Connection Hub */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-30">
                  <div className="relative">
                    {/* Real-time Orbiting Elements */}
                    <div className="absolute -inset-8">
                      <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-floating-orbit"></div>
                    </div>
                    <div className="absolute -inset-8">
                      <div className="w-0.5 h-0.5 bg-indigo-400/50 rounded-full animate-floating-orbit" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
                    </div>
                    
                    {/* Connection Hub Ring */}
                    <div className="absolute -inset-4 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
                      <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                      <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-indigo-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                    </div>
                    
                    {/* Real-time Energy Ring */}
                    <div className="absolute -inset-6 border border-purple-400/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                    
                    {/* Conditional pulse rings - only show when item is visible */}
                    {visibleItems[index] && (
                      <>
                        <div className={`absolute -inset-6 ${category.color} rounded-full opacity-10 animate-ping`}></div>
                        <div className={`absolute -inset-4 ${category.color} rounded-full opacity-20 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
                        <div className={`absolute -inset-2 ${category.color} rounded-full opacity-30 animate-ping`} style={{ animationDelay: '1s' }}></div>
                      </>
                    )}
                    
                    {/* Main connector bulb with enhanced effects */}
                    <motion.div 
                      className={`relative w-8 h-8 ${category.color} rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10 transition-all duration-300`}
                      animate={visibleItems[index] ? {
                        boxShadow: [
                          '0 0 0px rgba(139, 92, 246, 0.4)',
                          '0 0 30px rgba(139, 92, 246, 0.8)',
                          '0 0 0px rgba(139, 92, 246, 0.4)',
                        ],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: visibleItems[index] ? Infinity : 0 }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                        boxShadow: '0 0 40px rgba(139, 92, 246, 1)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      {visibleItems[index] && (
                        <>
                          <div className="absolute inset-2 bg-white/60 rounded-full animate-pulse"></div>
                          <div className="absolute inset-1 bg-white/30 rounded-full animate-ping"></div>
                          {/* Real-time sparkle effect */}
                          <div className="absolute -inset-2 opacity-0 group-hover:opacity-100">
                            <div className="absolute top-0 left-1/2 w-px h-2 bg-white animate-ping transform -translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-1/2 w-px h-2 bg-white animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.2s' }}></div>
                            <div className="absolute left-0 top-1/2 w-2 h-px bg-white animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.4s' }}></div>
                            <div className="absolute right-0 top-1/2 w-2 h-px bg-white animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.6s' }}></div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Card Container with Root Connection Point */}
                <div className={`w-full max-w-md ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 lg:pr-12' : 'md:ml-auto md:pl-8 lg:pl-12'} relative`}>
                  
                  {/* Card Root Connection Point */}
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? 'md:-left-8 -left-8' : 'md:-right-8 -left-8'} w-4 h-4 bg-purple-500/80 rounded-full border-2 border-white shadow-lg z-20`}>
                    {visibleItems[index] && (
                      <div className="absolute -inset-2 bg-purple-500/30 rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <motion.div
                    className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-purple-500/20 dark:border-purple-400/20"
                    whileHover={{ 
                      y: -12, 
                      scale: 1.03,
                      boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.3)',
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    {/* Real-time Border Animation */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm animate-background-shimmer"></div>
                    
                    {/* Continuous Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400/40 rounded-full animate-particle-drift"></div>
                      <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-indigo-400/30 rounded-full animate-particle-drift" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute bottom-4 left-2 w-1.5 h-1.5 bg-pink-400/25 rounded-full animate-particle-drift" style={{ animationDelay: '2s' }}></div>
                    </div>
                    
                    {/* Root-like decorative elements with animation */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
                      <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-r from-purple-400/20 to-transparent rotate-45 animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-px bg-gradient-to-r from-indigo-400/20 to-transparent -rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 right-0 w-4 h-px bg-gradient-to-l from-purple-300/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    {/* Card content container */}
                    <div className="relative bg-white/98 dark:bg-gray-800/98 backdrop-blur-xl rounded-xl p-6 border border-purple-100/50 dark:border-purple-500/10">
                      {/* Real-time Organic floating elements */}
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-floating-orbit" style={{ animationDuration: '4s' }}></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-indigo-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-floating-orbit" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>

                      {/* Enhanced energy sweep */}
                      <div className="absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-purple-500/8 to-transparent rotate-45 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out"></div>
                      
                      {/* Real-time Sparkle Effects on Hover */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-1/4 left-1/4 w-px h-px bg-white animate-ping" style={{ animationDelay: '0.1s' }}></div>
                        <div className="absolute top-3/4 right-1/4 w-px h-px bg-white animate-ping" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute top-1/2 left-3/4 w-px h-px bg-white animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>

                      {/* Card Header */}
                      <div className="flex items-center mb-6 relative z-10">
                        <motion.div 
                          className={`flex items-center justify-center w-14 h-14 ${category.color} rounded-xl mr-4 shadow-lg relative overflow-hidden`}
                          whileHover={{ rotate: [0, 180, 360], scale: 1.15 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <category.icon className="w-7 h-7 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -inset-1 bg-white/5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <ul className="space-y-3 relative z-10">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.li
                            key={skillIndex}
                            className="flex items-start text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ 
                              delay: (index * 0.2) + (skillIndex * 0.1) + 0.5,
                              duration: 0.4 
                            }}
                            whileHover={{ x: 6, transition: { duration: 0.2 } }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"
                              whileHover={{ 
                                scale: 1.8, 
                                backgroundColor: "#ec4899",
                                boxShadow: '0 0 8px rgba(236, 72, 153, 0.6)'
                              }}
                              transition={{ duration: 0.2 }}
                            ></motion.div>
                            <span className="text-sm leading-relaxed">{skill}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;