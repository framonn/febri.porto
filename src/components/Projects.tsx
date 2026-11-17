import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Building2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectImage } from './common/ProjectImage';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'industry' | 'webapp' | 'uiux'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'industry', label: t.projects.filterIndustry },
    { id: 'webapp', label: t.projects.filterWebapp },
    { id: 'uiux', label: t.projects.filterUiux },
  ] as const;

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
              <span>{t.projects.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
              {t.projects.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center p-1.5 rounded-2xl bg-navy-900/90 border border-electric-sky/20 backdrop-blur-md">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="activeTabBadge"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-blue to-electric-cyan shadow-glow-sm"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => {
              const isTopTier = project.featured;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-3xl overflow-hidden bg-navy-900/60 border cursor-pointer backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                    isTopTier
                      ? 'border-electric-sky/25 hover:border-electric-sky/60 hover:shadow-glow-md'
                      : 'border-slate-800 hover:border-slate-600 hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* 16:9 Thumbnail Container */}
                    <div className="relative overflow-hidden aspect-[16/9] bg-navy-950">
                      <ProjectImage
                        src={project.images[0]}
                        fallbackSrc={project.fallbackImages[0]}
                        alt={project.title}
                        title={project.title}
                        badge={language === 'EN' ? project.categoryBadge.en : project.categoryBadge.id}
                        aspectRatio="16/9"
                        className="group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-navy-950/85 backdrop-blur-md text-electric-sky border border-electric-sky/30">
                          {language === 'EN' ? project.categoryBadge.en : project.categoryBadge.id}
                        </span>

                        {isTopTier && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
                            <Sparkles className="w-3 primary-amber text-amber-300" />
                            <span>FEATURED</span>
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {project.partner && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                          <Building2 className="w-3.5 h-3.5 text-electric-sky" />
                          <span className="truncate">{project.partner}</span>
                        </div>
                      )}

                      <h3 className="text-lg font-bold text-white font-space mb-2 group-hover:text-electric-sky transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                        {language === 'EN' ? project.summary.en : project.summary.id}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-navy-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-navy-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: View Case Study Trigger */}
                  <div className="px-6 py-4 bg-navy-950/60 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-electric-sky group-hover:text-white transition-colors">
                      {t.projects.viewCaseStudy}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-navy-900 border border-slate-700 group-hover:border-electric-sky/60 flex items-center justify-center text-slate-400 group-hover:text-electric-sky group-hover:translate-x-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
