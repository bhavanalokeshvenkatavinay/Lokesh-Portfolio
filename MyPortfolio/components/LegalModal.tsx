import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[85vh] glass rounded-3xl border border-white/10 bg-[#080808]/95 p-6 md:p-8 shadow-2xl overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-violet-400 border border-violet-500/20">
                {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
                <p className="text-xs text-white/40">
                  {isPrivacy ? 'Official Privacy Practices' : 'Website Usage Terms & Conditions'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-5 text-white/70 text-xs md:text-sm leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  Welcome to the official portfolio website of <strong className="text-white">Lokesh Venkata Vinay Bhavana</strong>. Your privacy is paramount. This policy outlines how information is handled on this site.
                </p>

                <h4 className="text-sm md:text-base font-bold text-white mt-4">1. Data Collection & Messaging</h4>
                <p>
                  Any information submitted through the contact form (name, email address, message) is used exclusively for direct professional communication regarding potential engineering opportunities, collaborations, or technical inquiries.
                </p>

                <h4 className="text-sm md:text-base font-bold text-white mt-4">2. Cookies & Analytics</h4>
                <p>
                  This portfolio does not sell or share user data with third-party advertisers. Static assets and modern web standards are utilized without invasive tracking software.
                </p>

                <h4 className="text-sm md:text-base font-bold text-white mt-4">3. Security</h4>
                <p>
                  As a Cyber Security specialist, technical measures are implemented to ensure secure data transmission and protect communication channels against unauthorized access.
                </p>
              </>
            ) : (
              <>
                <p>
                  By accessing and browsing the official portfolio of <strong className="text-white">Lokesh Venkata Vinay Bhavana</strong>, you agree to comply with these terms.
                </p>

                <h4 className="text-sm md:text-base font-bold text-white mt-4">1. Intellectual Property</h4>
                <p>
                  All project demonstrations, source code architectures, text, custom UI components, and media showcased on this site are intellectual property of Lokesh Venkata Vinay Bhavana unless stated otherwise.
                </p>

                <h4 className="text-sm md:text-base font-bold text-white mt-4">2. Permitted Use</h4>
                <p>
                  Visitors are welcome to view, explore, interact with the terminal and live project demonstrations, and reach out for technical hiring or collaboration purposes.
                </p>

                <h4 className="text-sm md:text-base font-bold text-white mt-4">3. External Links</h4>
                <p>
                  Links to external project deployments (such as Vercel, GitHub, LeetCode, etc.) are provided for verification and demonstration. External sites maintain their respective policies.
                </p>
              </>
            )}
          </div>

          {/* Footer Button */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              I Understand & Agree
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
