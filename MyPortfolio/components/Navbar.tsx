
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';
import { Menu, X, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music, MoreHorizontal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<Section>(Section.Home);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowTooltip(false);
      }).catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    setIsMuted(newVol === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioRef.current.muted = nextMute;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = Object.values(Section);
      // Determine which section is currently in view
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for detection
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenu(false); // Close menu first

    setTimeout(() => { // Small delay to allow menu to close
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', id: Section.Home },
    { name: 'About', id: Section.About },
    { name: 'Skills', id: Section.Skills },
    { name: 'Experience', id: Section.Experience },
    { name: 'Profiles', id: Section.Coding },
    { name: 'Projects', id: Section.Projects },
    { name: 'Certificates', id: Section.Certificates },
    { name: 'Contact', id: Section.Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[50] flex flex-col">
      <div
        className={`w-full transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-4 md:py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl sm:text-2xl font-black tracking-tighter cursor-pointer flex-shrink-0"
            onClick={(e) => scrollToSection(e as any, Section.Home)}
          >
            LV<span className="text-violet-500">VB</span>
          </motion.div>

          {/* Desktop Nav Links (Centered with Minimum Margins) */}
          <div className="hidden lg:flex items-center justify-center gap-3 lg:gap-4 xl:gap-5 mx-6 lg:mx-10 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-[11px] xl:text-xs font-semibold tracking-widest uppercase transition-colors relative px-2 py-1 ${active === link.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
              >
                {link.name}
                {active === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-violet-500"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Audio Player (Right) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Vertical Divider */}
            <div className="h-6 w-[1px] bg-white/10 mr-1" />

            {/* Audio Player Controls */}
            <div className="relative flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
              <button 
                onClick={skipBackward} 
                className="text-white/60 hover:text-white transition-colors"
                title="Rewind 10s"
              >
                <SkipBack size={14} />
              </button>

              <button 
                onClick={togglePlay}
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-all shadow-md animate-pulse-subtle"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={12} fill="black" /> : <Play size={12} className="ml-[1px]" fill="black" />}
              </button>

              <button 
                onClick={skipForward} 
                className="text-white/60 hover:text-white transition-colors"
                title="Forward 10s"
              >
                <SkipForward size={14} />
              </button>

              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[10px] text-white/50 font-mono w-8 text-right">{formatTime(currentTime)}</span>
                <input 
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-16 lg:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
              </div>

              {/* More / Volume slider trigger */}
              <div className="relative">
                <button 
                  onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                  className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  title="Volume settings"
                >
                  <MoreHorizontal size={12} />
                </button>

                {/* Floating Volume Slider popup */}
                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-9 right-0 p-3 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl flex flex-col items-center gap-2 z-50 min-w-[80px]"
                    >
                      <button onClick={toggleMute} className="text-white/80 hover:text-white transition-colors">
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                      <input 
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-14 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-violet-500"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Audio Onboarding Experience Tooltip */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-4 right-4 lg:absolute lg:top-14 lg:bottom-auto lg:right-0 w-[calc(100vw-32px)] sm:w-80 bg-white text-black p-4 rounded-2xl shadow-2xl flex items-start gap-4 border border-neutral-100 z-[100] origin-bottom lg:origin-top-right overflow-hidden font-sans"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0">
                      <Music size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-neutral-900 leading-tight">Audio Experience</h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Turn on audio to enjoy the music while browsing the portfolio.</p>
                    </div>
                    <button 
                      onClick={() => setShowTooltip(false)}
                      className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
                    >
                      <X size={16} />
                    </button>
                    {/* Bottom purple indicator bar */}
                    <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-violet-500 rounded-t-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Toggle & Simple Audio Play/Pause */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={12} fill="black" /> : <Play size={12} className="ml-[1px]" fill="black" />}
            </button>
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-5 gap-2 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`text-base font-bold tracking-wider uppercase py-2.5 px-4 rounded-xl transition-all ${
                      active === link.id ? 'text-violet-400 bg-violet-500/10 border border-violet-500/20' : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Announcement Bar */}
      <div className="w-full bg-black/90 py-1.5 sm:py-2 overflow-hidden whitespace-nowrap border-t border-white/10">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="inline-block text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-wide whitespace-nowrap px-4"
        >
          Building a Cybersecurity platform for students with topics, playgrounds, and hands-on challenges. Launching soon 🚀
        </motion.div>
      </div>

      {/* HTML5 Audio Element */}
      <audio 
        ref={audioRef}
        src="/sundaribgm.mpeg" 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        loop
      />
    </nav>
  );
};
