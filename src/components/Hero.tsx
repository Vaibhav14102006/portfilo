import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { useTypewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTapped, setIsTapped] = useState(false);

  // Typewriter effect
  const [text] = useTypewriter({
    words: ['AI & ML Enthusiast', 'Full-Stack Developer', 'UI/UX Designer', 'Problem Solver'],
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
      {/* Enhanced Colorful Background Design */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-gray-900 dark:to-blue-950/50 transition-colors duration-500"></div>
        
        {/* Enhanced Colorful Background */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #14b8a6 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, #6366f1 1px, transparent 1px),
              radial-gradient(circle at 20% 80%, #ec4899 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/12 to-blue-400/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/[0.05] to-purple-500/[0.05]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Photo with professional tap effect */}
          <div className="mb-8 relative inline-block">
            <div className="relative group"
                 onMouseDown={() => setIsTapped(true)}
                 onMouseUp={() => setIsTapped(false)}
                 onTouchStart={() => setIsTapped(true)}
                 onTouchEnd={() => setIsTapped(false)}>
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-1 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/Screenshot 2025-09-02 184914.png"
                    alt="Vaibhav Singh Rajawat"
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={parallaxStyle}
                  />
                </div>
              </div>
              {/* Enhanced gradient border glow effect */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-70 blur-sm group-hover:blur transition-all duration-300"></div>
              
              {/* Add shine effect on hover */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-30">
                <div className="absolute -inset-[100%] top-0 bg-white rotate-45 transform translate-x-0 -translate-y-full group-hover:translate-y-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>

          {/* Name and Title with text animations */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white animate-fade-up">
              Vaibhav Singh Rajawat
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fade-up-delay-1">
              (He/Him)
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 animate-fade-up-delay-2 h-10">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                {text}
              </span>
              <span className="text-blue-500 animate-pulse">|</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up-delay-3">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Projects
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
            <a
              href="/Modern Minimalist Professional CV Resume.pdf"
              download="Vaibhav_Singh_Rajawat_Resume.pdf"
              className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 overflow-hidden"
            >
              {/* Gradient border glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
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