import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Terminal,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { FigmaIcon } from './common/Icons';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-electric-sky" />;
      case 'backend':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'uiux':
        return <FigmaIcon className="w-5 h-5 text-pink-400" />;
      case 'tools':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-electric-sky" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Mastery':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Advanced':
        return 'bg-electric-blue/15 text-electric-sky border-electric-sky/30';
      case 'Proficient':
        return 'bg-indigo-500/15 text-indigo-300 border-indigo-400/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-slate-900 bg-navy-950/50">
      {/* Background glow */}
      <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <span>{t.skills.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            {t.skills.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Core Stack Spotlight Banner: Python Primary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-electric-blue/15 via-navy-900/90 to-electric-cyan/15 border border-electric-sky/30 backdrop-blur-xl shadow-glow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/20 text-electric-sky border border-electric-sky/30 text-xs font-mono font-semibold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {language === 'EN' ? 'Primary Technical Stack' : 'Penguasaan Teknis Utama'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-space">
                {language === 'EN'
                  ? 'Python — Primary Language & Core Focus'
                  : 'Python — Bahasa Utama & Fokus Teknis'}
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {language === 'EN'
                  ? 'Specialized in Python for backend logic, data processing pipelines, and automated systems — the core of my technical identity.'
                  : 'Menguasai Python untuk logika backend, pipeline pemrosesan data, dan sistem otomasi — inti dari identitas teknis saya.'}
              </p>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Python Card — full width since it's the solo highlight */}
              <div className="flex-1 lg:w-72 p-5 rounded-2xl bg-navy-950/90 border border-electric-sky/40 shadow-inner flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-electric-blue/25 border border-electric-sky/40 flex items-center justify-center font-bold text-electric-sky text-xl shadow-glow-sm">
                  Py
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 block font-semibold">
                    {language === 'EN' ? '✦ Primary Focus' : '✦ Keahlian Utama'}
                  </span>
                  <span className="text-lg font-bold text-white font-space">Python</span>
                  <span className="text-xs text-slate-400 block font-mono mt-0.5">
                    Backend · Data Processing · Automation · Logic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Categorized Bento Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 sm:p-8 bg-navy-900/60 border border-electric-sky/15 hover:border-electric-sky/35 backdrop-blur-xl shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} Capabilities
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-2">
                  {language === 'EN' ? category.title.en : category.title.id}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {language === 'EN' ? category.description.en : category.description.id}
                </p>

                {/* Skill Chips with Proficiency Pills (No cliché % bars) */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-950/80 border border-slate-800 hover:border-electric-sky/50 transition-all shadow-sm"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/chip:text-white">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-electric-sky">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Production & Industry Ready</span>
                </span>
                <span className="text-slate-400">Standardized</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
