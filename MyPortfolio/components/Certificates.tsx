
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
    link: "https://bhavanalokeshvenkatavinay.github.io/Interships-Certificates/"
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass rounded-2xl p-4 hover:border-violet-500/40 transition-all"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-violet-500 hover:text-white transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="px-2 pb-2">
              <div className="flex items-center gap-2 text-violet-500 mb-2">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">{cert.issuer}</span>
              </div>
              <h3 className="text-lg font-bold group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-white/40 text-xs mt-1">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
