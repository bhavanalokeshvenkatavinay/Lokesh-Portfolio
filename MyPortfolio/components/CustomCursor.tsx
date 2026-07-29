
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.hover === 'true'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/60 pointer-events-none z-[9999999] shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999999] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
          scale: isHovering ? 0 : 1,
        }}
      />
    </div>
  );
};
