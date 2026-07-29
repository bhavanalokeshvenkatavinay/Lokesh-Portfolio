import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EDUCATION_DATA = [
  {
    id: "1",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Cyber Security",
    institution: "Godavari Institute of Engineering and Technology (GIET)",
    location: "Rajahmundry, Andhra Pradesh",
    period: "Expected 2027",
    gpa: "CGPA: 8.95/10",
    details: "Undergraduate student focusing on secure systems, computer networks, and full-stack software development. Gaining hands-on experience in Java, Spring Boot, REST APIs, and database management systems."
  },
  {
    id: "2",
    degree: "Diploma",
    branch: "Computer Science Engineering",
    institution: "BVC College of Engineering",
    location: "Palacharla, Andhra Pradesh",
    period: "2021 – 2024",
    gpa: "CGPA: 8.0/10",
    details: "Acquired a strong foundation in core computer science subjects, programming fundamentals, object-oriented principles, and data structures."
  }
];

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="max-w-4xl space-y-12 relative">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative pl-12 md:pl-0"
          >
            <div className="md:grid md:grid-cols-4 gap-8">
              <div className="mb-4 md:mb-0">
                <div className="text-violet-500 font-bold tracking-widest uppercase text-sm mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
                <div className="text-white/40 text-xs font-bold uppercase flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </div>
              </div>

              <div className="md:col-span-3 relative pb-12">
                {/* Visual Timeline Marker */}
                <div className="absolute left-[-44px] md:left-[-40px] top-1 w-8 h-8 rounded-full border-2 border-white/10 glass flex items-center justify-center z-10 group-hover:border-violet-500/50 transition-colors">
                  <GraduationCap className="w-4 h-4 text-white/30 group-hover:text-violet-500 transition-colors" />
                </div>
                {idx !== EDUCATION_DATA.length - 1 && (
                  <div className="absolute left-[-29px] md:left-[-25px] top-10 bottom-[-10px] w-[2px] bg-white/5 group-hover:bg-violet-500/20 transition-colors" />
                )}

                <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 bg-black/40 backdrop-blur-xl relative overflow-hidden">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors">{edu.degree}</h3>
                  <p className="text-base text-violet-300 font-medium mb-1">{edu.branch}</p>
                  <p className="text-white/60 text-sm font-semibold mb-4">{edu.institution}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {edu.details}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 text-violet-400 font-bold rounded-xl border border-violet-500/20 text-sm">
                    <Award className="w-4 h-4" />
                    {edu.gpa}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
