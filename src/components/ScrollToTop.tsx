import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group cursor-hover animate-subtle-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-300" />
          
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
