import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

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

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-all duration-150 ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
      </div>
      
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      >
        <div className={`w-10 h-10 border-2 border-blue-500 rounded-full transition-all duration-300 ${
          isHovering ? 'scale-150 border-teal-500' : 'scale-100'
        } ${isClicking ? 'scale-75 border-purple-500' : ''}`}></div>
      </div>
      
      {/* Spotlight effect */}
      <div
        className="fixed pointer-events-none z-40 transition-opacity duration-300"
        style={{
          left: position.x - 150,
          top: position.y - 150,
          opacity: isHovering ? 0.15 : 0.08,
        }}
      >
        <div className="w-[300px] h-[300px] bg-gradient-radial from-blue-400/30 via-teal-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>
    </>
  );
};

export default CustomCursor;