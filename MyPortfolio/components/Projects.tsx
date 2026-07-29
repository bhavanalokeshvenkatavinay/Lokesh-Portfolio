
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Works">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="overflow-hidden h-full flex flex-col relative rounded-2xl glass border border-white/10 group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-500">
              <div className="relative aspect-[2/1] md:aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-violet-600 transition-colors shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-4 md:p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 border border-white/10 rounded-full text-white/50 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target={project.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn text-violet-400 hover:text-violet-300 transition-colors cursor-pointer inline-flex"
                  >
                    {project.link !== '#' ? 'Live Project 🚀' : 'Case Study'}
                    <div className="w-8 h-[1px] bg-violet-500/40 group-hover/btn:w-12 group-hover/btn:bg-violet-400 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
