import React from 'react';
import { motion } from 'framer-motion';
import {
  GitFork,
  Star,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './common/Icons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, githubRepos } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
              <span>{t.github.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
              {t.github.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              {t.github.subtitle}
            </p>
          </div>

          <a
            href={personalInfo.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 border border-electric-sky/30 hover:border-electric-sky/60 text-white font-semibold text-xs tracking-wide shadow-glow-sm hover:shadow-glow-md transition-all self-start md:self-auto group"
          >
            <GithubIcon className="w-4 h-4 text-electric-sky group-hover:scale-110 transition-transform" />
            <span>{t.github.visitGithub}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-electric-sky transition-colors" />
          </a>
        </div>

        {/* Developer GitHub Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Developer Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-electric-sky/25 shadow-lg backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">bash — framonn@github</span>
              </div>

              {/* Profile Avatar & Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-electric-blue to-electric-cyan p-[2px] shadow-glow-sm">
                  <div className="w-full h-full rounded-[14px] bg-navy-950 flex items-center justify-center overflow-hidden">
                    <img
                      src={personalInfo.avatar.primary}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      alt={personalInfo.fullName}
                      className="w-full h-full object-cover"
                    />
                    <GithubIcon className="w-8 h-8 text-electric-sky" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-space">
                    {personalInfo.fullName}
                  </h3>
                  <a
                    href={personalInfo.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-electric-sky hover:underline"
                  >
                    <span>{t.github.username}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Developer philosophy quote */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-slate-800/80 mb-6">
                <p className="text-xs font-mono text-slate-300 italic leading-relaxed">
                  {t.github.openSourceQuote}
                </p>
              </div>

              {/* Code stats highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                  <span className="block text-[11px] font-mono text-slate-400 mb-1">
                    Primary Stack
                  </span>
                  <span className="text-xs font-semibold text-electric-sky">
                    React & TypeScript
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                  <span className="block text-[11px] font-mono text-slate-400 mb-1">
                    Code Quality
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Modular & Typed
                  </span>
                </div>
              </div>
            </div>

            <a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-xs font-semibold text-white transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore @framonn Repositories</span>
            </a>
          </motion.div>

          {/* Right: Selected Repositories Showcase */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {githubRepos.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-electric-sky/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-electric-sky">
                      <Code2 className="w-4 h-4" />
                      <span className="font-mono text-xs font-bold truncate max-w-[200px] text-white group-hover:text-electric-sky transition-colors">
                        {repo.name.replace('framonn/', '')}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-electric-sky group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div>
                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded bg-navy-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>

                  {/* Language and Metrics */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 hover:text-amber-300">
                        <Star className="w-3 h-3 text-amber-400" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1 hover:text-slate-200">
                        <GitFork className="w-3 h-3" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
