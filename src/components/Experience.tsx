import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Boxes,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../data/portfolioData';
import type { Experience as ExperienceType } from '../types';

export const Experience: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'capstone' | 'internship'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.type === activeFilter;
  });

  return (
    <section id="experience" className="relative py-24 overflow-hidden border-t border-slate-900 bg-navy-950/40">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
              <span>{t.experience.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
              {t.experience.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center p-1.5 rounded-2xl bg-navy-900/90 border border-electric-sky/20 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-cyan text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.experience.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('capstone')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === 'capstone'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-cyan text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.experience.filterCapstone}
            </button>
            <button
              onClick={() => setActiveFilter('internship')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === 'internship'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-cyan text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.experience.filterInternship}
            </button>
          </div>
        </div>

        {/* Milestone Cards (Vertical Timeline / Split Grid) */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp: ExperienceType, index: number) => {
              const isCapstone = exp.type === 'capstone';
              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border transition-all duration-300 ${
                    isCapstone
                      ? 'bg-gradient-to-br from-navy-900/90 via-navy-900/60 to-navy-950/90 border-electric-sky/30 shadow-glow-sm hover:border-electric-sky/60'
                      : 'bg-gradient-to-br from-navy-900/80 via-navy-900/50 to-navy-950/80 border-indigo-500/25 shadow-sm hover:border-indigo-400/50'
                  }`}
                >
                  {/* Distinct Marker Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          isCapstone
                            ? 'bg-electric-blue/15 text-electric-sky border border-electric-sky/40 shadow-glow-sm'
                            : 'bg-indigo-500/15 text-indigo-300 border border-indigo-400/30'
                        }`}
                      >
                        {isCapstone ? <Boxes className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                      </div>
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase ${
                            isCapstone
                              ? 'bg-electric-blue/20 text-electric-sky border border-electric-sky/30'
                              : 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                          }`}
                        >
                          {language === 'EN' ? exp.typeBadge.en : exp.typeBadge.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-space mt-1">
                          {language === 'EN' ? exp.title.en : exp.title.id}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/80 border border-slate-800">
                        <Building2 className="w-3.5 h-3.5 text-electric-sky" />
                        <span className="text-slate-200 font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/80 border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{language === 'EN' ? exp.period.en : exp.period.id}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/80 border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {language === 'EN' ? exp.summary.en : exp.summary.id}
                  </p>

                  {/* Deliverables / Achievements */}
                  <div className="mb-6 bg-navy-950/50 rounded-2xl p-5 sm:p-6 border border-slate-800/80">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-electric-sky" />
                      <span>{t.experience.responsibilitiesLabel}</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {(language === 'EN' ? exp.achievements.en : exp.achievements.id).map(
                        (item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-electric-sky" />
                      <span>{t.experience.technologiesLabel}:</span>
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-navy-900/90 border border-slate-700/60 text-xs font-mono text-electric-sky"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
