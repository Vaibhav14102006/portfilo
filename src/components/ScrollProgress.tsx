import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 dark:bg-gray-800/30 z-50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 transition-all duration-150 ease-out shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Scroll Percentage Indicator */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
};

export default ScrollProgress;
