
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="max-w-4xl space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-4 gap-8">
              <div className="mb-4 md:mb-0">
                <div className="text-violet-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-1">{exp.period}</div>
                <div className="text-white/40 text-[10px] sm:text-xs font-bold uppercase">{exp.company}</div>
              </div>

              <div className="md:col-span-3 relative pb-8 md:pb-12">
                {/* Visual Timeline Marker */}
                <div className="absolute left-[-28px] md:left-[-40px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/10 glass flex items-center justify-center z-10 group-hover:border-violet-500/50 transition-colors">
                  <Briefcase className="w-3 h-3 text-white/30 group-hover:text-violet-500 transition-colors" />
                </div>
                {idx !== EXPERIENCES.length - 1 && (
                  <div className="absolute left-[-19px] md:left-[-25px] top-8 md:top-10 bottom-[-10px] w-[2px] bg-white/5 group-hover:bg-violet-500/20 transition-colors" />
                )}

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{exp.role}</h3>
                <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map(item => (
                    <span key={item} className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-white/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
