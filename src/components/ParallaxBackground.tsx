import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 - Slowest */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-[15%] w-80 h-80 bg-gradient-to-l from-teal-400/20 to-blue-400/20 rounded-full blur-3xl" />
      </div>

      {/* Layer 2 - Medium speed */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-60 right-[20%] w-64 h-64 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-[25%] w-72 h-72 bg-gradient-to-tr from-indigo-400/30 to-blue-400/30 rounded-full blur-2xl" />
      </div>

      {/* Layer 3 - Fastest */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/40 to-cyan-400/40 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-l from-blue-400/40 to-indigo-400/40 rounded-full blur-xl" />
      </div>
    </div>
  );
};

export default ParallaxBackground;
