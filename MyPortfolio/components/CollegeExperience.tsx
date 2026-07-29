import React, { useRef } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { COLLEGE_EXPERIENCES } from '../constants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

export const CollegeExperience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
    const smoothX = useSpring(x, {
        stiffness: 150,
        damping: 25,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative h-[250vh]" id="college-experience">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-8 left-6 md:left-12 z-20">
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-2">
                        Achievements & Activities
                    </h2>
                    <div className="h-1 w-20 bg-violet-500 rounded-full" />
                </div>

                <motion.div style={{ x: smoothX }} className="flex gap-6 md:gap-16 px-6 md:px-16 items-center h-full relative pt-16">

                    {/* Wavy Path SVG Background */}
                    <svg className="absolute top-1/2 -translate-y-1/2 left-0 w-[3000px] h-[300px] pointer-events-none opacity-20" preserveAspectRatio="none">
                        <path
                            d="M0,150 Q250,50 500,150 T1000,150 T1500,150 T2000,150 T2500,150"
                            fill="none"
                            stroke="rgba(139, 92, 246, 0.4)"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* Spacer for title */}
                    <div className="w-[8vw] flex-shrink-0" />

                    {COLLEGE_EXPERIENCES.map((exp, idx) => (
                        <div
                            key={exp.id}
                            className={`flex-shrink-0 w-[82vw] md:w-[380px] relative ${idx % 2 === 0 ? 'mb-8 md:mb-32' : 'mt-8 md:mt-32'
                                }`}
                        >
                            <div className="group relative p-6 md:p-7 glass rounded-3xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 bg-black/60 backdrop-blur-md shadow-xl">

                                {/* Connector Dot */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-violet-500 border-4 border-black z-20 shadow-[0_0_15px_rgba(139,92,246,0.6)] ${idx % 2 === 0 ? 'bottom-[-50px]' : 'top-[-50px]'
                                    }`}></div>

                                {/* Connecting Line to Dot */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-500/0 via-violet-500 to-violet-500/0 ${idx % 2 === 0 ? 'bottom-[-40px] h-12' : 'top-[-40px] h-12'
                                    }`}></div>

                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-2xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                                        <Award className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {exp.period}
                                    </div>
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-violet-400 transition-colors">{exp.role}</h3>
                                <p className="text-sm md:text-base text-violet-300 font-medium mb-3">{exp.company}</p>

                                <p className="text-white/70 mb-4 leading-relaxed text-xs md:text-sm">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {exp.technologies.map(tech => (
                                        <span key={tech} className="text-[11px] px-2.5 py-1 bg-white/5 rounded-lg border border-white/5 text-white/50 group-hover:border-violet-500/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-[15vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
};
