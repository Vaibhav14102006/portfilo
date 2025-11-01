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
      {/* Single main cursor dot (keeps pointer simple and singular) */}
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-all duration-150 ${
          isHovering ? 'scale-125' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          width: 16,
          height: 16,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
      </div>
      {/*
        NOTE: Removed outer ring and spotlight to avoid duplicate/secondary pointers.
        If you want the ring or spotlight only on hover, we can render them conditionally
        when `isHovering` is true instead of always showing them.
      */}
    </>
  );
};

export default CustomCursor;