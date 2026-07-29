import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, Lock, Database, ShieldCheck } from 'lucide-react';

interface SecureBootProps {
  onComplete: () => void;
}

export const SecureBoot: React.FC<SecureBootProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<{ text: string; icon: React.ReactNode }[]>([]);
  const [bootTime, setBootTime] = useState('');
  const [isShuttingDown, setIsShuttingDown] = useState(false);

  useEffect(() => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setBootTime(timeStr);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 10) + 5;
        return next > 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const logs = [
      { text: "INITIALIZING KERNEL...", icon: <Settings className="w-4 h-4 text-emerald-400 animate-spin" /> },
      { text: "ESTABLISHING SECURE PROTOCOLS...", icon: <Lock className="w-4 h-4 text-emerald-400" /> },
      { text: "MOUNTING DATABASE MODULES...", icon: <Database className="w-4 h-4 text-emerald-400" /> },
      { text: "SCANNING FOR VULNERABILITIES...", icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> }
    ];

    if (progress >= 20 && visibleLogs.length === 0) {
      setVisibleLogs([logs[0]]);
    } else if (progress >= 45 && visibleLogs.length === 1) {
      setVisibleLogs([logs[0], logs[1]]);
    } else if (progress >= 70 && visibleLogs.length === 2) {
      setVisibleLogs([logs[0], logs[1], logs[2]]);
    } else if (progress >= 95 && visibleLogs.length === 3) {
      setVisibleLogs([logs[0], logs[1], logs[2], logs[3]]);
    }
  }, [progress, visibleLogs]);

  const handleStart = () => {
    setIsShuttingDown(true);
    setTimeout(() => {
      onComplete();
    }, 800); // Glitch transition delay
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isShuttingDown ? {
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px) brightness(1.5)',
      } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-[#030303] flex flex-col items-center justify-center font-mono select-none overflow-hidden"
    >
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Glitch Overlay Effect */}
      {isShuttingDown && (
        <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none z-[100000] mix-blend-color-dodge animate-pulse" />
      )}

      {/* Security Shield Logo Header */}
      <div className="flex flex-col items-center mb-8 relative z-10">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-[#040c08] border border-emerald-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.25)] relative group"
        >
          <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-md" />
          <Shield className="w-8 h-8 text-emerald-400 relative z-10" />
        </motion.div>
      </div>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-white text-lg md:text-xl font-black tracking-[0.25em] mb-1">
          SYSTEM <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">SECURE_BOOT</span>
        </h2>
        <p className="text-[10px] font-bold text-white/40 tracking-[0.3em]">
          HANDSHAKE IN PROGRESS
        </p>
      </div>

      {/* Terminal Log Console */}
      <div className="w-full max-w-lg bg-[#040a07]/90 border border-emerald-500/20 p-6 rounded-2xl shadow-[0_20px_50px_rgba(4,10,7,0.9)] backdrop-blur-xl relative z-10">
        <div className="space-y-4 min-h-[140px]">
          {visibleLogs.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 text-xs"
            >
              <span className="text-emerald-500/40">[{bootTime}]</span>
              <div className="flex items-center justify-center w-5 h-5 bg-emerald-500/10 rounded border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                {log.icon}
              </div>
              <span className="text-emerald-400/90 font-semibold uppercase tracking-wider">{log.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress & Entropy Display */}
      <div className="w-full max-w-lg mt-8 px-2 relative z-10">
        <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-white/40 mb-2">
          <span>KERNEL ENTROPY_LVL</span>
          <span className="text-emerald-400 font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-[#050f0b] border border-emerald-500/20 h-2.5 rounded-full p-[2px] overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_15px_#10b981]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-12 h-16 flex items-center justify-center relative z-10">
        {progress === 100 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="relative group bg-emerald-500 hover:bg-emerald-400 text-[#030303] font-black uppercase text-xs tracking-widest py-4 px-10 rounded-full shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 border border-emerald-200/30 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXECUTE SYSTEM.START()
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        )}
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-6 text-[9px] font-bold text-white/30 tracking-[0.25em]">
        ENHANCE EXPERIENCE: F11 -OR- FULL SCREEN
      </div>
    </motion.div>
  );
};
