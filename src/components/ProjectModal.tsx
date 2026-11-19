import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  Layers,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Building2,
  UserCheck,
} from 'lucide-react';
import { GithubIcon } from './common/Icons';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ProjectImage } from './common/ProjectImage';
import { useProjectMedia } from '../utils/projectMedia';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto-detect project photos (1, 2, 3, 4... etc.)
  const { images, fallbacks } = useProjectMedia(project);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project || images.length <= 1) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose, images.length]);

  if (!isOpen || !project) return null;

  const currentImage = images[activeImageIndex] || images[0] || project.images[0];
  const currentFallback = fallbacks[activeImageIndex] || fallbacks[0] || project.fallbackImages[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-navy-900 border border-electric-sky/30 shadow-2xl z-10 text-slate-100 flex flex-col"
        >
          {/* Header Sticky Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-navy-900/95 backdrop-blur-md border-b border-electric-sky/15">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-electric-blue/15 text-electric-sky border border-electric-sky/30">
                {language === 'EN' ? project.categoryBadge.en : project.categoryBadge.id}
              </span>
              {project.partner && (
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Building2 className="w-3.5 h-3.5 text-electric-sky" />
                  <span>{project.partner}</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-navy-800/80 hover:bg-navy-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label={t.projects.modal.closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & High-level Role */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-space mb-3 leading-tight">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'EN' ? project.description.en : project.description.id}
              </p>
            </div>

            {/* Multi-Image Gallery Carousel */}
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-electric-sky/20 bg-navy-950 shadow-inner group">
                <ProjectImage
                  src={currentImage}
                  fallbackSrc={currentFallback}
                  alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                  title={project.title}
                  badge={language === 'EN' ? project.categoryBadge.en : project.categoryBadge.id}
                  aspectRatio="16/9"
                  className="rounded-2xl"
                />

                {/* Left/Right Carousel Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) => (prev - 1 + images.length) % images.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-electric-sky/30 text-white shadow-lg backdrop-blur-md opacity-90 hover:opacity-100 transition-all hover:scale-110"
                      aria-label={t.projects.modal.prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev + 1) % images.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-electric-sky/30 text-white shadow-lg backdrop-blur-md opacity-90 hover:opacity-100 transition-all hover:scale-110"
                      aria-label={t.projects.modal.nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300">
                      {activeImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails row — uses actual photo src, NOT the svg fallback */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={`${img}-${idx}`}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative shrink-0 w-24 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-electric-sky scale-105 shadow-glow-sm'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} preview ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (fallbacks[idx] && target.src !== fallbacks[idx]) {
                            target.src = fallbacks[idx];
                          }
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Metadata Box (Role, Partner, Tech) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-navy-950/60 border border-slate-800">
              <div>
                <span className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-electric-sky" />
                  <span>{t.projects.modal.roleLabel}</span>
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {language === 'EN' ? project.role.en : project.role.id}
                </span>
              </div>

              <div>
                <span className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-electric-sky" />
                  <span>{t.projects.modal.clientLabel}</span>
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {project.partner || 'Independent Engineering'}
                </span>
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <span className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-electric-sky" />
                  <span>{t.projects.modal.techLabel}</span>
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-navy-900 border border-slate-700/60 text-[11px] font-mono text-electric-sky"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Column */}
              <div className="p-6 rounded-2xl bg-navy-950/40 border border-red-500/20">
                <div className="flex items-center gap-2 text-rose-400 mb-3">
                  <AlertCircle className="w-5 h-5" />
                  <h3 className="text-base font-bold font-space text-white">
                    {t.projects.modal.problemTitle}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {language === 'EN' ? project.problem.en : project.problem.id}
                </p>
              </div>

              {/* Solution Column */}
              <div className="p-6 rounded-2xl bg-navy-950/40 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-base font-bold font-space text-white">
                    {t.projects.modal.solutionTitle}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {language === 'EN' ? project.solution.en : project.solution.id}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="p-6 rounded-2xl bg-navy-950/40 border border-electric-sky/15">
              <h3 className="text-base font-bold font-space text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-electric-sky" />
                <span>{t.projects.modal.featuresTitle}</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'EN' ? project.features.en : project.features.id).map(
                  (feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-sky mt-2 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Action Bar (Live Demo / GitHub / Proprietary Notice) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-cyan text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all"
                  >
                    <span>{t.projects.liveDemo}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white text-xs font-semibold transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t.projects.viewCode}</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.projects.confidentialCode}</span>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              >
                {t.projects.modal.closeModal}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
