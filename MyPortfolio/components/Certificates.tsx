
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { Award, Eye } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 1,
    image: "Oracle.jpg",
    title: "Oracle Certification",
    issuer: "Oracle",
    date: "2025",
    link: "https://bhavanalokeshvenkatavinay.github.io/Oracle-Certifications/"
  },


  {
    id: 2,
    image: "Cisco.webp",
    title: "Cisco Networking",
    issuer: "Cisco",
    date: "2024-2026",
    link: "https://bhavanalokeshvenkatavinay.github.io/CiscoCertification/"
  },
  {
    id: 4,
    image: "AWS logo.jpeg",
    title: "AWS",
    issuer: "Amazon Web Services",
    date: "2026",
    link: "https://bhavanalokeshvenkatavinay.github.io/AWS-Certifications/"
  },

  {
    id: 3,
    image: "postman-logo.png",
    title: "Postman Certification",
    issuer: "Postman",
    date: "2025",
    link: "https://bhavanalokeshvenkatavinay.github.io/Postman-Certificates/"
  },


  {
    id: 5,
    image: "Internships.jpg",
    title: "Individual Internships",
    issuer: "Organisations",
    date: "-",
    link: "https://bhavanalokeshvenkatavinay.github.io/Internships-Certificates/"
  },
  {
    id: 6,
    image: "Hackathon logo.webp",
    title: "Hackathon Certificates",
    issuer: "Organisations",
    date: "2026",
    link: "https://bhavanalokeshvenkatavinay.github.io/Hackathon-Certificates/"
  },
];

export const Certificates: React.FC = () => {
  return (
    <SectionWrapper id="certificates" title="Recognition">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass rounded-2xl p-4 hover:border-violet-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 sm:mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 sm:opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm hidden sm:flex">
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-violet-500 hover:text-white transition-colors cursor-pointer"
                      aria-label={`View ${cert.title}`}
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="px-1 pb-2">
                <div className="flex items-center gap-2 text-violet-400 mb-2">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{cert.issuer}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold group-hover:text-violet-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-white/40 text-xs mt-1">{cert.date}</p>
              </div>
            </div>

            {/* Mobile View Certificate Link (Visible on small screens) */}
            {cert.link && (
              <div className="mt-3 pt-3 border-t border-white/10 flex sm:hidden justify-between items-center">
                <span className="text-[11px] font-bold text-violet-400">View Certificate</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-violet-600/30 border border-violet-500/30 rounded-lg text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
