import React from 'react';
import { motion } from 'framer-motion';

interface CubeProps {
  size: number;
  left: string;
  top: string;
}

const Cube: React.FC<CubeProps> = ({ size, left, top }) => {
  const halfSize = size / 2;
  const faceColor = 'bg-violet-600/35 border-2 border-violet-400/85 shadow-[0_0_15px_rgba(139,92,246,0.6)]';

  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size,
        left,
        top,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        y: [0, -140, 0],
        x: [0, Math.random() * 50 - 25, 0],
        z: [-150, 150, -150],
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
        opacity: [0.4, 0.9, 0.4],
      }}
      transition={{
        duration: Math.random() * 20 + 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* 3D Cube Faces */}
      <div className={`absolute inset-0 ${faceColor}`} style={{ transform: `translateZ(${halfSize}px)` }} />
      <div className={`absolute inset-0 ${faceColor}`} style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }} />
      <div className={`absolute inset-0 ${faceColor}`} style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }} />
      <div className={`absolute inset-0 ${faceColor}`} style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }} />
      <div className={`absolute inset-0 ${faceColor}`} style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }} />
      <div className={`absolute inset-0 ${faceColor}`} style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }} />
    </motion.div>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]" style={{ perspective: '1000px' }}>
      {/* Abstract Gradients - Darker and subtler for higher contrast */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-950/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-950/10 blur-[120px] rounded-full" />

      {/* Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Tiny Starfield (Twinkling Pixel Dots) */}
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 3 + 1.5;
        const isViolet = Math.random() > 0.5;
        return (
          <motion.div
            key={`star-${i}`}
            className={`absolute rounded-none ${isViolet ? 'bg-violet-500/40' : 'bg-violet-500/40'}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Floating 3D Cubes - Violet cubes only, smaller size (8px to 16px) */}
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 8 + 8; // Smaller size range: 8px to 16px
        return (
          <Cube
            key={`cube-${i}`}
            size={size}
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
          />
        );
      })}

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
