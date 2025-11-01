import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { useTypewriter } from 'react-simple-typewriter';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTapped, setIsTapped] = useState(false);

  // Typewriter effect
  const [text] = useTypewriter({
    words: ['AI & Full-Stack Engineer', 'Voice AI Developer', 'System Automation Expert', 'UI/UX Enthusiast'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced parallax style with tap effect
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.003}px, ${mousePosition.y * 0.003}px) scale(${isTapped ? 1.05 : 1})`,
    transition: 'transform 0.3s ease-out'
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* New Modern Background Design */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-500"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-300/30 dark:border-blue-600/30 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-purple-300/30 dark:border-purple-600/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-pink-300/30 dark:border-pink-600/30 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 border-2 border-teal-300/30 dark:border-teal-600/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Sparkle Effect */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-gray-900/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center max-w-[90rem] mx-auto">
          {/* Left Side - Square Profile Photo */}
          <div className="flex flex-col items-center lg:items-end order-2 lg:order-1">
            <div className="relative group"
                 style={{ perspective: '1500px' }}
                 onMouseEnter={() => setIsTapped(true)}
                 onMouseLeave={() => setIsTapped(false)}>
              
              <div className="flex gap-3 md:gap-4 items-center">
              {/* LEFT PHOTO - Real Image (rotated right to face center) */}
              <div className="relative" style={{
                transformStyle: 'preserve-3d',
                transform: isTapped ? 'rotateY(25deg) translateX(-30px)' : 'rotateY(25deg)',
                transition: 'transform 0.8s ease-out'
              }}>
                {/* Elegant Decorative Frame for Left Photo */}
                <div className="absolute -inset-10 pointer-events-none z-20">
                  {/* Corner Ornaments - Top Left */}
                  <div className="absolute -top-8 -left-8 w-24 h-24">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                      <path d="M 5 95 Q 5 5, 95 5" stroke="url(#gradient1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M 10 90 Q 10 10, 90 10" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
                      <path d="M 15 85 Q 15 15, 85 15" stroke="url(#gradient1)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
                      <path d="M 20 80 Q 20 20, 80 20" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
                      
                      {/* Enhanced decorative dots with animations */}
                      <circle cx="8" cy="92" r="3" fill="url(#gradient1)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="20" cy="80" r="2.5" fill="url(#gradient1)" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="32" cy="68" r="2" fill="url(#gradient1)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="44" cy="56" r="1.5" fill="url(#gradient1)" opacity="0.6"/>
                      <circle cx="56" cy="44" r="1.5" fill="url(#gradient1)" opacity="0.6"/>
                      
                      <circle cx="92" cy="8" r="3" fill="url(#gradient1)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="80" cy="20" r="2.5" fill="url(#gradient1)" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="68" cy="32" r="2" fill="url(#gradient1)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Additional decorative dots along the curve */}
                      <circle cx="14" cy="86" r="1.5" fill="url(#gradient1)" opacity="0.5"/>
                      <circle cx="26" cy="74" r="1.5" fill="url(#gradient1)" opacity="0.5"/>
                      <circle cx="38" cy="62" r="1" fill="url(#gradient1)" opacity="0.4"/>
                      <circle cx="50" cy="50" r="1.5" fill="url(#gradient1)" opacity="0.6">
                        <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="62" cy="38" r="1" fill="url(#gradient1)" opacity="0.4"/>
                      <circle cx="74" cy="26" r="1.5" fill="url(#gradient1)" opacity="0.5"/>
                      <circle cx="86" cy="14" r="1.5" fill="url(#gradient1)" opacity="0.5"/>
                      
                      {/* Corner brackets */}
                      <path d="M 5 75 L 5 95 L 25 95" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M 8 70 L 8 88 L 20 88" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                      <path d="M 75 5 L 95 5 L 95 25" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M 70 8 L 88 8 L 88 20" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                      
                      {/* Filigree decorative flourishes */}
                      <path d="M 50 5 Q 40 10, 35 20" stroke="url(#gradient1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                      <path d="M 5 50 Q 10 40, 20 35" stroke="url(#gradient1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                      <path d="M 60 5 Q 50 8, 45 15" stroke="url(#gradient1)" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                      <path d="M 5 60 Q 8 50, 15 45" stroke="url(#gradient1)" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                      
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Enhanced floating particles for left photo */}
                  <div className="absolute top-1/4 left-0 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-float shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-teal-400 rounded-full opacity-70 animate-float shadow-lg shadow-teal-400/50" style={{animationDelay: '2s'}}></div>
                  <div className="absolute top-1/3 -left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-float shadow-md shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/3 -left-2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-float shadow-md shadow-blue-300/50" style={{animationDelay: '3s'}}></div>
                </div>
                
                {/* 3D Animated Photo Frame for real image */}
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl relative overflow-visible">
                  {/* Rotating 3D Border Rings */}
                  <div className="absolute -inset-4 rounded-3xl border-2 border-blue-400/30 animate-spin-slow"></div>
                  <div className="absolute -inset-6 rounded-3xl border border-purple-400/20" style={{ animation: 'spin 20s linear infinite reverse' }}></div>
                  
                  {/* Pulsing Glow Layers */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl opacity-25 blur-2xl group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-purple-400 to-teal-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-40 transition-all duration-700"></div>
                  
                  {/* 3D Depth Frame */}
                  <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-[4px] shadow-2xl group-hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-700"
                       style={{ 
                         transform: 'translateZ(20px)',
                         transformStyle: 'preserve-3d'
                       }}>
                    {/* Glass Layer with 3D effect */}
                    <div className="w-full h-full rounded-3xl bg-gradient-to-tl from-blue-400/20 via-purple-400/20 to-teal-400/20 p-[1px] backdrop-blur-sm"
                         style={{ transform: 'translateZ(10px)' }}>
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-[2px]">
                        <div className="relative w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-700 overflow-hidden z-10">
                          <img
                            src="/vaibhav fix.png"
                            alt="Vaibhav Singh Rajawat"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110 group-hover:scale-105"
                          />
                          {/* Animated Scan Line Effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-full w-full opacity-0 group-hover:opacity-100"
                               style={{ 
                                 animation: 'scan 2s ease-in-out infinite',
                                 backgroundSize: '100% 50px'
                               }}></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          
                          {/* Corner Highlights with 3D effect */}
                          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-3xl"></div>
                          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl" style={{ transitionDelay: '0.1s' }}></div>
                          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" style={{ transitionDelay: '0.2s' }}></div>
                          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-3xl" style={{ transitionDelay: '0.3s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 3D Floating Particles around frame */}
                  <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-float" style={{ animation: 'float 3s ease-in-out infinite' }}></div>
                  <div className="absolute -top-6 -right-6 w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-float" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-4 -left-6 w-2.5 h-2.5 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50 animate-float" style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-6 -right-4 w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50 animate-float" style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.5s' }}></div>
                </div>
              </div>

              {/* RIGHT PHOTO - Mirror Image (rotated left to face center) */}
              <div className="relative" style={{
                transformStyle: 'preserve-3d',
                transform: isTapped ? 'rotateY(-25deg) translateX(30px)' : 'rotateY(-25deg)',
                transition: 'transform 0.8s ease-out'
              }}>
                {/* Elegant Decorative Frame for Right Photo */}
                <div className="absolute -inset-10 pointer-events-none z-20">
                  {/* Corner Ornaments - Top Right */}
                  <div className="absolute -top-8 -right-8 w-24 h-24">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform rotate-90 group-hover:scale-110 group-hover:rotate-[93deg] transition-all duration-700">
                      <path d="M 5 95 Q 5 5, 95 5" stroke="url(#gradient2)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M 10 90 Q 10 10, 90 10" stroke="url(#gradient2)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
                      <path d="M 15 85 Q 15 15, 85 15" stroke="url(#gradient2)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
                      <path d="M 20 80 Q 20 20, 80 20" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
                      
                      {/* Enhanced decorative dots with animations */}
                      <circle cx="8" cy="92" r="3" fill="url(#gradient2)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="20" cy="80" r="2.5" fill="url(#gradient2)" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="32" cy="68" r="2" fill="url(#gradient2)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="44" cy="56" r="1.5" fill="url(#gradient2)" opacity="0.6"/>
                      <circle cx="56" cy="44" r="1.5" fill="url(#gradient2)" opacity="0.6"/>
                      
                      <circle cx="92" cy="8" r="3" fill="url(#gradient2)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="80" cy="20" r="2.5" fill="url(#gradient2)" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="68" cy="32" r="2" fill="url(#gradient2)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Additional decorative dots along the curve */}
                      <circle cx="14" cy="86" r="1.5" fill="url(#gradient2)" opacity="0.5"/>
                      <circle cx="26" cy="74" r="1.5" fill="url(#gradient2)" opacity="0.5"/>
                      <circle cx="38" cy="62" r="1" fill="url(#gradient2)" opacity="0.4"/>
                      <circle cx="50" cy="50" r="1.5" fill="url(#gradient2)" opacity="0.6">
                        <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="62" cy="38" r="1" fill="url(#gradient2)" opacity="0.4"/>
                      <circle cx="74" cy="26" r="1.5" fill="url(#gradient2)" opacity="0.5"/>
                      <circle cx="86" cy="14" r="1.5" fill="url(#gradient2)" opacity="0.5"/>
                      
                      {/* Corner brackets */}
                      <path d="M 5 75 L 5 95 L 25 95" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M 8 70 L 8 88 L 20 88" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                      <path d="M 75 5 L 95 5 L 95 25" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M 70 8 L 88 8 L 88 20" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                      
                      {/* Filigree decorative flourishes */}
                      <path d="M 50 5 Q 40 10, 35 20" stroke="url(#gradient2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                      <path d="M 5 50 Q 10 40, 20 35" stroke="url(#gradient2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                      <path d="M 60 5 Q 50 8, 45 15" stroke="url(#gradient2)" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                      <path d="M 5 60 Q 8 50, 15 45" stroke="url(#gradient2)" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                      
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#14b8a6" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Enhanced floating particles for right photo */}
                  <div className="absolute top-1/3 right-0 w-2 h-2 bg-purple-400 rounded-full opacity-70 animate-float shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-float shadow-lg shadow-blue-400/50" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/4 -right-4 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60 animate-float shadow-md shadow-teal-400/50" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-1/4 -right-2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-float shadow-md shadow-purple-300/50" style={{animationDelay: '2.5s'}}></div>
                </div>
                
                {/* Photo frame for mirror image */}
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl relative overflow-visible">
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 rounded-3xl opacity-25 blur-2xl group-hover:opacity-50 transition-all duration-700"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 via-purple-400 to-blue-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-40 transition-all duration-700"></div>
                  
                  <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-teal-500 via-purple-500 to-blue-500 p-[4px] shadow-2xl group-hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-700">
                    <div className="w-full h-full rounded-3xl bg-gradient-to-tl from-teal-400/20 via-purple-400/20 to-blue-400/20 p-[1px]">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-[2px]">
                        <div className="relative w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-700 overflow-hidden z-10">
                          <img
                            src="/vaibhav fix.png"
                            alt="Vaibhav Singh Rajawat - Mirror"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                            style={{ transform: 'scaleX(-1)' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-teal-500/20 mix-blend-overlay"></div>
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5"></div>
                          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
                          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-ping" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            {/* Tech Stack Logos - Appears on hover */}
            <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-2xl">
                {/* React */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#61DAFB">
                      <circle cx="12" cy="12" r="2"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
                    </svg>
                  </div>
                </div>

                {/* TypeScript */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#3178C6">
                      <rect width="24" height="24" rx="3" fill="#3178C6"/>
                      <text x="50%" y="70%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">TS</text>
                    </svg>
                  </div>
                </div>

                {/* Python */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-yellow-900/30 dark:to-blue-900/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
                      <path d="M12 2C9.8 2 8 2.8 8 4.5V7h4v.5H7C5.8 7.5 4 8.3 4 12s1.8 4.5 3 4.5h1.5v-2c0-1.1.9-2 2-2h5c1.1 0 2-.9 2-2V4.5C17.5 2.8 15.7 2 13.5 2H12z" fill="#3776AB"/>
                      <path d="M12 22c2.2 0 4-.8 4-2.5V17h-4v-.5h5c1.2 0 3-.8 3-4.5s-1.8-4.5-3-4.5h-1.5v2c0 1.1-.9 2-2 2h-5c-1.1 0-2 .9-2 2v5.5c0 1.7 1.8 2.5 4 2.5h1.5z" fill="#FFD43B"/>
                      <circle cx="10" cy="5" r="1" fill="#FFD43B"/>
                      <circle cx="14" cy="19" r="1" fill="#3776AB"/>
                    </svg>
                  </div>
                </div>

                {/* Node.js */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#339933">
                      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.51 16.5c-.09-.05-.14-.14-.14-.24V7.68c0-.1.05-.19.14-.24l7.44-4.3c.09-.05.19-.05.28 0l7.44 4.3c.09.05.14.14.14.24v8.58c0 .1-.05.19-.14.24l-7.44 4.3c-.09.05-.19.05-.28 0l-1.89-1.12c-.06-.03-.12-.04-.17-.02-.59.33-.7.38-1.25.58-.14.05-.35.12.07.35l2.45 1.45c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.3c.48-.28.78-.8.78-1.36V7.68c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
                      <path d="M14.01 10.13c-1.96 0-2.42.89-2.42 1.64 0 .11.09.2.2.2h.91c.1 0 .19-.07.2-.17.14-.93.55-1.4 1.91-1.4.93 0 1.33.21 1.33.71 0 .29-.11.5-.58.52l-1.95.13c-1.42.09-2.3.57-2.3 1.51 0 1 .84 1.59 2.24 1.59 1.54 0 2.41-.53 2.51-1.66.01-.05 0-.1-.03-.15-.03-.05-.07-.08-.12-.08h-.92c-.09 0-.17.07-.19.15-.21.93-.72 1.23-1.63 1.23-.95 0-1.05-.43-1.05-.75 0-.34.13-.44 1.15-.5l1.67-.11c1.4-.09 2.26-.56 2.26-1.5 0-1.12-.93-1.78-2.56-1.78z" fill="#339933"/>
                    </svg>
                  </div>
                </div>

                {/* TailwindCSS */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#06B6D4">
                      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
                    </svg>
                  </div>
                </div>

                {/* Git */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#F05032">
                      <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.282.163.407.289a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.32-.264.499-.334v-5.44a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"/>
                    </svg>
                  </div>
                </div>

                {/* Docker */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#2496ED">
                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.808-2.602-3.41-2.75-3.94-2.75H7.85c-.017 0-.033.008-.033.022l-.006 11.041c0 .014.016.022.032.022 1.268.057 2.544.086 3.809.086 3.453 0 6.3-.387 8.096-1.102 1.01-.375 1.8-.826 2.34-1.342.865-.862 1.325-1.885 1.325-2.965 0-.972-.37-1.78-1.096-2.405-.018-.016-.035-.03-.05-.043-.015-.01-.03-.018-.046-.025a.273.273 0 00-.06-.028c.034-.048.066-.097.097-.148.446-.766.51-1.712.15-2.44a1.714 1.714 0 00-.39-.592z"/>
                    </svg>
                  </div>
                </div>

                {/* AI/ML */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" fill="#8B5CF6"/>
                      <circle cx="6" cy="6" r="2" fill="#EC4899"/>
                      <circle cx="18" cy="6" r="2" fill="#EC4899"/>
                      <circle cx="6" cy="18" r="2" fill="#EC4899"/>
                      <circle cx="18" cy="18" r="2" fill="#EC4899"/>
                      <line x1="12" y1="9" x2="12" y2="6" stroke="#8B5CF6" strokeWidth="2"/>
                      <line x1="12" y1="15" x2="12" y2="18" stroke="#8B5CF6" strokeWidth="2"/>
                      <line x1="9" y1="12" x2="6" y2="12" stroke="#8B5CF6" strokeWidth="2"/>
                      <line x1="15" y1="12" x2="18" y2="12" stroke="#8B5CF6" strokeWidth="2"/>
                      <line x1="9.5" y1="10.5" x2="7" y2="8" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <line x1="14.5" y1="10.5" x2="17" y2="8" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <line x1="9.5" y1="13.5" x2="7" y2="16" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <line x1="14.5" y1="13.5" x2="17" y2="16" stroke="#8B5CF6" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/* Right Side - Text Content */}
          <div className="text-left space-y-6 order-1 lg:order-2">
            {/* Name and Title with text animations */}
            <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black animate-fade-up" style={{
              color: '#b0b0b0',
              letterSpacing: '0.02em',
              textShadow: `
                2px 2px 0 rgba(160, 160, 160, 0.6),
                4px 4px 0 rgba(130, 130, 130, 0.4),
                6px 6px 0 rgba(100, 100, 100, 0.3),
                8px 8px 0 rgba(70, 70, 70, 0.2),
                10px 10px 15px rgba(0, 0, 0, 0.2),
                0 0 20px rgba(120, 120, 120, 0.15)
              `,
              transform: 'perspective(800px) rotateX(3deg)',
              filter: 'drop-shadow(0 4px 8px rgba(80, 80, 80, 0.1))'
            }}>
              Vaibhav Singh Rajawat
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fade-up-delay-1 drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
              (He/Him)
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 animate-fade-up-delay-2 h-10 drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold" style={{
                filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.5))'
              }}>
                {text}
              </span>
              <span className="text-blue-500 animate-pulse drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">|</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-up-delay-3">
            <MagneticButton className="group">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full hover:from-blue-700 hover:to-teal-700 transform transition-all duration-300 shadow-[0_8px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.6)] flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Projects
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </a>
            </MagneticButton>
            <MagneticButton className="group">
              <a
                href="/Vaibhav-Resume.pdf"
                download="Vaibhav-Resume.pdf"
                className="relative px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transform transition-all duration-300 shadow-[0_8px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.5)] flex items-center gap-2 overflow-hidden"
              >
                {/* Gradient border glow effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </a>
            </MagneticButton>
          </div>
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
