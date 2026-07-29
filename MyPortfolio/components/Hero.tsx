
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { Section } from '../types';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the gaze effect
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const [text, setText] = useState("");
  const fullText = "LOKESH VENKATA VINAY BHAVANA";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust speed here

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position relative to window center (-1 to 1 range)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Map mouse position to rotation and movement for the character's head/eyes
  const headRotateY = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const headRotateX = useTransform(smoothMouseY, [-1, 1], [15, -15]);
  const eyeMoveX = useTransform(smoothMouseX, [-1, 1], [-4, 4]);
  const eyeMoveY = useTransform(smoothMouseY, [-1, 1], [-2, 2]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 pb-24 sm:pb-32 overflow-hidden relative px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-violet-500 font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 text-[11px] sm:text-xs md:text-base">
            Security Engineer
          </h2>

          <div className="w-full overflow-hidden mb-6 px-1">
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight sm:leading-none break-words lg:whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-violet-400">
                {text}
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[0.8em] bg-violet-500 ml-1 align-middle"
              />
            </h1>
          </div>
        </motion.div>
      </div>

      {/* The "Guardian" - Character at the bottom looking at the cursor */}
      <div className="absolute bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-sm flex justify-center pointer-events-none">
        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Stylized Character Body */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 sm:w-48 h-32 sm:h-40 bg-gradient-to-t from-violet-950/40 to-white/5 rounded-t-full border-t border-white/10 blur-[2px]" />

          {/* Head Container */}
          <motion.div
            style={{
              rotateY: headRotateY,
              rotateX: headRotateX,
              transformStyle: 'preserve-3d'
            }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto"
          >
            {/* Face Base */}
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-full border border-white/20 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center overflow-hidden">
              {/* Inner details */}
              <div className="absolute inset-2 border border-white/5 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-white/5" />

              {/* Eyes Container */}
              <div className="flex gap-6 sm:gap-8 md:gap-12">
                {/* Left Eye */}
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-white/5 border border-white/20 relative">
                  <motion.div
                    style={{ x: eyeMoveX, y: eyeMoveY }}
                    className="absolute inset-1 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                  />
                </div>
                {/* Right Eye */}
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-white/5 border border-white/20 relative">
                  <motion.div
                    style={{ x: eyeMoveX, y: eyeMoveY }}
                    className="absolute inset-1 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                  />
                </div>
              </div>
            </div>

            {/* Halo ring around head */}
            <motion.div
              className="absolute -inset-4 border border-violet-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Shadow/Glow at base */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-10 bg-violet-600/20 blur-[40px] rounded-full" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 cursor-pointer hidden sm:block z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          const el = document.getElementById(Section.About);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-violet-500 rounded-full"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 text-center z-20 px-4"
      >

      </motion.div>
    </section>
  );
};
