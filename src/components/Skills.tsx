import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-electric-sky" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-cyan-400" />;
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

        {/* 4 Clean, Structured Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
              className="rounded-3xl p-6 sm:p-8 bg-navy-900/60 border border-electric-sky/15 hover:border-sky-400/40 backdrop-blur-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} Technologies
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-2">
                  {language === 'EN' ? category.title.en : category.title.id}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {language === 'EN' ? category.description.en : category.description.id}
                </p>

                {/* Crisp, high-contrast skill pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-950/80 border border-slate-800 hover:border-sky-400/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/chip:text-white transition-colors">
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
                  <span>Production & Verified Stack</span>
                </span>
                <span className="text-slate-400">Core</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
