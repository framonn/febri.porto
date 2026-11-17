import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Layers,
  Palette,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-slate-900">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <span>{t.about.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Main Story (Spans 2 columns, 2 rows) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-navy-900/60 border border-electric-sky/15 hover:border-electric-sky/35 backdrop-blur-xl shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-electric-blue/10 border border-electric-sky/30 flex items-center justify-center text-electric-sky shadow-glow-sm">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-navy-950/80 border border-slate-800">
                  {personalInfo.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-space mb-4">
                {t.about.storyTitle}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                {t.about.storyP1}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                {t.about.storyP2}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs font-mono text-slate-400 mb-1">
                  {t.about.degreeLabel}
                </span>
                <span className="text-sm font-semibold text-slate-100">
                  {t.about.degreeValue}
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-400 mb-1">
                  {t.about.statusLabel}
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.about.statusValue}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Education (RPL) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-3xl bg-navy-900/60 border border-electric-sky/15 hover:border-electric-sky/35 backdrop-blur-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-space mb-2">
                {t.about.bentoEduTitle}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.bentoEduSubtitle}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-mono">
                Algorithmic & OOP Grounding
              </span>
            </div>
          </motion.div>

          {/* Bento Card 3: Industry-Tested Experience */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-3xl bg-navy-900/60 border border-electric-sky/15 hover:border-electric-sky/35 backdrop-blur-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan mb-5">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-space mb-2">
                {t.about.bentoIndustryTitle}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.bentoIndustrySubtitle}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="inline-block px-2.5 py-1 rounded-md bg-electric-cyan/10 text-electric-cyan text-xs font-mono">
                PT. KIA & PT. MBB Tested
              </span>
            </div>
          </motion.div>

          {/* Bento Card 4: Technical Focus (React, REST, DB) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 p-6 sm:p-7 rounded-3xl bg-navy-900/60 border border-electric-sky/15 hover:border-electric-sky/35 backdrop-blur-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-electric-blue/10 border border-electric-sky/30 flex items-center justify-center text-electric-sky mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white font-space mb-2">
                {t.about.bentoFocusTitle}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {t.about.bentoFocusSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Frontend Architecture', 'TypeScript Safety', 'RESTful API Flow', 'MySQL Relational Schemas'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-navy-950/80 border border-slate-700/60 text-xs font-mono text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Bento Card 5: UI/UX & Interactive Sensitivity */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 lg:col-span-2 p-6 sm:p-7 rounded-3xl bg-navy-900/60 border border-electric-sky/15 hover:border-electric-sky/35 backdrop-blur-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-400 mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white font-space mb-2">
                {t.about.bentoDesignTitle}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {t.about.bentoDesignSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Framer Motion', 'Micro-interactions', 'Design Systems (Figma)', 'Responsive Accessibility'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-navy-950/80 border border-slate-700/60 text-xs font-mono text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
