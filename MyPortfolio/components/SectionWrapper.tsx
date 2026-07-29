
import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', title }) => {
  return (
    <section id={id} className={`relative min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 flex flex-col overflow-x-hidden ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16 text-left"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-3 sm:mb-4">
            {title}<span className="text-violet-500">.</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-violet-600 rounded-full" />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </section>
  );
};
