
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, GraduationCap, FileText, Eye, Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Text Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="text-white/40">Securing Systems,</span> <br />
              <span className="text-white">Engineering The Future</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed"
          >
            <p>
              Hey, I'm <span className="text-violet-400 font-bold">Lokesh Venkata Vinay Bhavana</span>, a Cyber Security student at Godavari Institute of Engineering and Technology (GIET).
            </p>
            <p>
              Currently pursuing a B.Tech in Cyber Security with a CGPA of 8.95/10 at GIET, I have hands-on experience with Java, Spring Boot, Node.js, Express.js, Angular, MySQL, REST APIs, Git, and AWS Fundamentals through academic and personal projects. I am continuously expanding my knowledge in <span className="text-violet-400 font-bold">Full Stack Development,</span> <span className="text-violet-400 font-bold">Cybersecurity</span> and <span className="text-violet-400 font-bold">Cloud Technologies</span>.
            </p>

            <div className="space-y-2 pt-4">
              <p className="font-bold text-white text-base sm:text-lg">My Philosophy:</p>
              <p className="italic text-white/80 leading-relaxed text-xs sm:text-base">
                "I believe technology should solve real-world problems with security at its core. Every project I build is an opportunity to learn, innovate, and create solutions that people can trust."
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-2xl font-bold text-white underline decoration-violet-500/50">
              Building secure, intelligent, and impactful digital solutions.
            </p>
          </motion.div>

          {/* My Resume Section with Hover Reveal (Always accessible on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative max-w-md p-4 sm:p-5 rounded-3xl glass border border-white/5 bg-black/20 backdrop-blur-xl hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Header Content */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">My Resume</span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-400 transition-colors duration-500">View / Download</h3>
                </div>
              </div>

              {/* Interactive Indicator */}
              <div className="text-[10px] font-bold uppercase tracking-wider text-violet-400/60 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-500 pr-1">
                <span className="group-hover:hidden hidden sm:inline">Hover to Access</span>
                <span className="hidden group-hover:inline">Select Action</span>
              </div>
            </div>

            {/* Revealed Actions: Always visible on touch/mobile, hoverable on desktop */}
            <div className="mt-4 sm:mt-0 sm:h-0 sm:opacity-0 sm:overflow-hidden sm:group-hover:mt-6 sm:group-hover:h-20 sm:group-hover:opacity-100 transition-all duration-500 ease-out grid grid-cols-2 gap-3 sm:gap-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 sm:py-0 rounded-xl border border-white/10 bg-white/[0.05] sm:bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/10 transition-all text-white/80 sm:text-white/60 hover:text-white group/btn relative z-20 cursor-pointer"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 mb-1 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider">View</span>
              </a>

              <a
                href="/Resume.pdf"
                download="Resume_Lokesh_Bhavana.pdf"
                className="flex flex-col items-center justify-center py-2.5 sm:py-0 rounded-xl border border-white/10 bg-white/[0.05] sm:bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all text-white/80 sm:text-white/60 hover:text-white group/btn relative z-20 cursor-pointer"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mb-1 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Download</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] relative z-20 text-sm sm:text-base"
            >
              Start A Conversation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </div>

        {/* Image/Visual Side */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl max-w-sm mx-auto lg:max-w-none"
          >
            <img
              src="Profile.png"
              alt="Profile"
              className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Responsive Floating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-2 right-2 sm:top-6 sm:-right-2 z-20 glass px-4 sm:px-6 py-1 rounded-2xl flex items-center gap-2 sm:gap-3 border border-white/20 shadow-xl max-w-[85%]"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">8.95 CGPA | Cyber Security</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute top-36 left-2 sm:top-44 sm:-left-1 z-20 glass px-3 py-1.5 sm:py-2 rounded-xl flex items-center gap-2 border border-white/20 shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-white/80">GIET, Rajahmundry</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-2 right-2 sm:-bottom-6 sm:right-10 z-20 glass px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center gap-2 sm:gap-3 border border-white/20 shadow-xl"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">Cybersecurity Specialist</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute top-1/2 right-10 z-20 glass p-3 rounded-full border border-white/20 shadow-xl"
          >
            <Cpu className="w-6 h-8 text-violet-500 animate-spin [animation-duration:10s]" />
          </motion.div>

          {/* Background dots decoration */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-30 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
        </div>
      </div>
    </SectionWrapper>
  );
};
