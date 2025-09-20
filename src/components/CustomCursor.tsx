import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      >
        <div className={`w-10 h-10 border-2 border-blue-500 rounded-full transition-all duration-300 ${
          isHovering ? 'scale-150 border-teal-500' : 'scale-100'
        }`}></div>
      </div>
    </>
  );
};

export default CustomCursor;