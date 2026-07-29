import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { Code2, Database, Shield, Wrench, Cpu, Layout, Cloud } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "C++", "C"]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "Angular"]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Spring Boot", "Spring MVC", "Node.js", "Express.js", "REST APIs", "MySQL"]
  },
  {
    title: "Security & Networking",
    icon: Shield,
    skills: ["TCP/IP", "OSI Model", "DNS", "HTTP/HTTPS", "Routing & Switching", "Network Security Basics"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Maven", "Postman", "Spring Tool Suite (STS)", "Visual Studio Code"]
  },
  {
    title: "Cloud & Fundamentals",
    icon: Cloud,
    skills: ["AWS Cloud & Prompt Engineering", "Linux", "Windows", "Operating Systems", "Data Structures & Algorithms", "OOPs", "DBMS", "Computer Networks"]
  }
];

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-5 sm:p-6 md:p-8 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 bg-black/40 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Glow decoration */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500" />
              
              <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 group-hover:text-white transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-violet-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3.5 py-2 bg-white/5 rounded-xl border border-white/5 text-white/70 hover:text-white hover:border-violet-500/20 hover:bg-violet-500/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
