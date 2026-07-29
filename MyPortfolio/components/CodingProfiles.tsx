import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ShieldAlert, Terminal, Trophy } from 'lucide-react';

interface CodingPlatform {
  name: string;
  username: string;
  role: string;
  category: string;
  url: string;
  color: string;
  borderColor: string;
  hoverGlow: string;
  icon: React.ReactNode;
}

const PLATFORMS: CodingPlatform[] = [
  {
    name: "LeetCode",
    username: "bhavanalokeshvenakatavinay",
    role: "DSA & Problem Solving",
    category: "Data Structures",
    url: "https://leetcode.com/u/bhavanalokeshvenakatavinay/",
    color: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
    hoverGlow: "group-hover:border-amber-500/70 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
    icon: <Code2 className="w-6 h-6 text-amber-400" />
  },
  {
    name: "GeeksforGeeks",
    username: "bhavanalokeshf3ql",
    role: "Algorithms & Practice",
    category: "Core Computer Science",
    url: "https://www.geeksforgeeks.org/profile/bhavanalokeshf3ql",
    color: "from-emerald-500/20 to-green-500/10",
    borderColor: "border-emerald-500/30",
    hoverGlow: "group-hover:border-emerald-500/70 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    icon: <Trophy className="w-6 h-6 text-emerald-400" />
  },
  {
    name: "Codeforces",
    username: "Lokeshbhavana",
    role: "Competitive Programming",
    category: "Speed & Math Logic",
    url: "https://codeforces.com/profile/Lokeshbhavana",
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    hoverGlow: "group-hover:border-blue-500/70 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    icon: <Terminal className="w-6 h-6 text-blue-400" />
  },
  {
    name: "CodeChef",
    username: "aloft_dust_67",
    role: "Coding Contests",
    category: "Starters & Long Challenges",
    url: "https://www.codechef.com/users/aloft_dust_67",
    color: "from-amber-700/20 to-yellow-600/10",
    borderColor: "border-amber-600/30",
    hoverGlow: "group-hover:border-amber-400/70 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.25)]",
    icon: <Code2 className="w-6 h-6 text-amber-500" />
  },
  {
    name: "HackerRank",
    username: "bhavanalokeshve1",
    role: "Problem Solving & SQL",
    category: "Language Certifications",
    url: "https://www.hackerrank.com/profile/bhavanalokeshve1",
    color: "from-teal-500/20 to-emerald-600/10",
    borderColor: "border-teal-500/30",
    hoverGlow: "group-hover:border-teal-400/70 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.25)]",
    icon: <Trophy className="w-6 h-6 text-teal-400" />
  },
  {
    name: "TryHackMe",
    username: "bhavanalokeshvenkatavinay",
    role: "Cyber Security & CTFs",
    category: "Penetration Testing & Labs",
    url: "https://tryhackme.com/p/bhavanalokeshvenkatavinay",
    color: "from-red-500/20 to-rose-600/10",
    borderColor: "border-red-500/30",
    hoverGlow: "group-hover:border-red-500/70 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]",
    icon: <ShieldAlert className="w-6 h-6 text-rose-400" />
  }
];

export const CodingProfiles: React.FC = () => {
  return (
    <SectionWrapper id="coding" title="Coding Profiles">
      <p className="text-white/60 text-sm md:text-base max-w-2xl -mt-8 mb-10">
        Active competitive programming and cyber security profiles showcasing problem-solving rigor, data structures expertise, and CTF challenges.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PLATFORMS.map((platform, idx) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <div className={`h-full glass rounded-2xl p-6 md:p-7 border ${platform.borderColor} bg-gradient-to-br ${platform.color} ${platform.hoverGlow} transition-all duration-500 flex flex-col justify-between relative overflow-hidden`}>
              
              {/* Background ambient light */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {platform.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-white/50 font-mono mt-1 mb-3">
                  @{platform.username}
                </p>

                <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6">
                  {platform.role}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white/40 group-hover:text-white/80 transition-colors">
                  View Profile
                </span>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/10 group-hover:bg-violet-600 rounded-full text-white transition-all duration-300 flex items-center justify-center shadow-lg"
                  aria-label={`Visit ${platform.name} profile`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
