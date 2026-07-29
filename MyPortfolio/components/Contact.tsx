
import React, { useState, useRef } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2, X } from 'lucide-react';

import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');
    setErrorMessage('');

    // 1. Send Admin Notification (To You)
    const sendAdmin = emailjs.sendForm(
      'service_68rj5no',
      'template_hzmllut', // Admin Template ID
      formRef.current,
      'SmTtQNEkFtmIRVIQl'
    );

    // 2. Send Auto-Reply (To Visitor)
    const sendAutoReply = emailjs.sendForm(
      'service_68rj5no',
      'template_2eew735', // Auto-Reply Template ID
      formRef.current,
      'SmTtQNEkFtmIRVIQl'
    );

    Promise.allSettled([sendAdmin, sendAutoReply])
      .then((results) => {
        const adminResult = results[0];
        const autoReplyResult = results[1];

        if (adminResult.status === 'rejected') {
          console.error("Admin Email Failed:", adminResult.reason);
          setErrorMessage(`Admin Template Error: ${adminResult.reason.text || "Unknown error"}`);
          setStatus('error');
        } else if (autoReplyResult.status === 'rejected') {
          console.error("Auto-Reply Failed:", autoReplyResult.reason);
          setErrorMessage(`Auto-Reply Error: ${autoReplyResult.reason.text || "Unknown error"}`);
          setStatus('error');
        } else {
          // Both succeeded
          setStatus('success');
          setTimeout(() => setStatus('idle'), 3000);
          if (formRef.current) formRef.current.reset();
        }
      });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" className="pb-48">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-2xl text-white/60 font-light mb-12">
            Have a project in mind? Let's build something <span className="text-white font-medium italic">extraordinary</span> together.
          </p>

          <div className="space-y-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhavanalokeshvenkatavinay@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group cursor-pointer relative z-20"
            >
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email Me</div>
                <div className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">bhavanalokeshvenkatavinay@gmail.com</div>
              </div>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Socials</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/lokesh-venkata-vinay-bhavana-84385a354/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white text-blue-500 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/bhavanalokeshvenkatavinay"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center h-[400px] text-center space-y-4"
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center h-[400px] text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                  <X className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Something went wrong</h3>
                <p className="text-white/60 text-sm max-w-[80%] break-words">Error: {errorMessage}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-white/10 rounded-full text-sm font-bold mt-4 hover:bg-white/20 transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <motion.form
                ref={formRef}
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Your Name</label>
                    <input
                      required
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 focus:outline-none transition-colors"
                      onChange={(e) => {
                        const form = formRef.current;
                        if (form) {
                          const hiddenName = form.querySelector('input[name="name"]') as HTMLInputElement;
                          if (hiddenName) hiddenName.value = e.target.value;
                        }
                      }}
                    />
                    <input type="hidden" name="name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                    <input
                      required
                      type="email"
                      name="from_email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 focus:outline-none transition-colors"
                      onChange={(e) => {
                        const form = formRef.current;
                        if (form) {
                          const hiddenEmail = form.querySelector('input[name="email"]') as HTMLInputElement;
                          if (hiddenEmail) hiddenEmail.value = e.target.value;
                        }
                      }}
                    />
                    <input type="hidden" name="email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-violet-500 transition-all shadow-lg shadow-violet-900/20 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
