import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Maximize2,
  X,
  Calendar,
  Building2,
  ShieldCheck,
  Tag,
  Hash,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificatesData } from '../data/portfolioData';
import type { Certificate } from '../types';
import { ProjectImage } from './common/ProjectImage';

export const Certificates: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  const isSingle = certificatesData.length === 1;

  return (
    <section id="certificates" className="relative py-24 overflow-hidden border-t border-slate-900 bg-navy-950/60">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-electric-sky" />
            <span>{t.certificates.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            {t.certificates.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Dynamic Certificates Showcase Container */}
        <div
          className={
            isSingle
              ? 'max-w-5xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          }
        >
          {certificatesData.map((cert) => {
            const title = language === 'EN' ? cert.title.en : cert.title.id;
            const category = language === 'EN' ? cert.category.en : cert.category.id;
            const description = language === 'EN' ? cert.description.en : cert.description.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900/90 via-navy-900/60 to-navy-950/90 border border-electric-sky/25 hover:border-electric-sky/60 backdrop-blur-xl shadow-lg hover:shadow-glow-md transition-all duration-300 group ${
                  isSingle ? 'p-6 sm:p-8 lg:p-10' : 'p-6 flex flex-col justify-between'
                }`}
              >
                {/* Single Featured Spotlight Layout (Split 2-Column Desktop) */}
                <div className={isSingle ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center' : 'space-y-6'}>
                  
                  {/* Certificate Thumbnail with Aspect [3/4] & Hover Zoom */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className={`relative rounded-2xl overflow-hidden border border-electric-sky/20 bg-navy-950 cursor-pointer shadow-inner group/thumb max-w-sm mx-auto lg:max-w-none ${
                      isSingle ? 'lg:col-span-5' : 'w-full'
                    }`}
                  >
                    <ProjectImage
                      src={cert.image}
                      fallbackSrc={cert.fallbackImage}
                      alt={title}
                      title={title}
                      badge={category}
                      aspectRatio="3/4"
                      objectFit="contain"
                      className="group-hover/thumb:scale-105 transition-transform duration-500 bg-navy-950/90"
                    />

                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-40 group-hover/thumb:opacity-20 transition-opacity pointer-events-none" />

                    {/* Verified Ribbon Badge Top Left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.certificates.verifiedBadge}</span>
                      </span>
                    </div>

                    {/* Click to Enlarge Floating Badge Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 bg-navy-950/50 backdrop-blur-[2px]">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900/90 border border-electric-sky/50 text-white text-xs font-semibold shadow-glow-sm">
                        <Maximize2 className="w-3.5 h-3.5 text-electric-sky" />
                        <span>{t.certificates.clickToEnlarge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details Column */}
                  <div className={isSingle ? 'lg:col-span-7 flex flex-col justify-between' : 'space-y-4'}>
                    <div>
                      {/* Category & Status Pills */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-electric-blue/15 text-electric-sky border border-electric-sky/30 flex items-center gap-1.5">
                          <Tag className="w-3 h-3" />
                          <span>{category}</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-navy-950/90 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{cert.date}</span>
                        </span>
                      </div>

                      {/* Certificate Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-3 leading-snug group-hover:text-electric-sky transition-colors">
                        {title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                        {description}
                      </p>

                      {/* Issuer & Metadata Box */}
                      <div className="p-4 rounded-2xl bg-navy-950/70 border border-slate-800 mb-6 space-y-2.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-electric-sky shrink-0" />
                            <span>{t.certificates.issuedBy}:</span>
                          </span>
                          <span className="font-semibold text-slate-200">{cert.issuer}</span>
                        </div>

                        {cert.credentialId && (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80 gap-1">
                            <span className="text-slate-400 flex items-center gap-1.5">
                              <Hash className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span>No. Sertifikat:</span>
                            </span>
                            <span className="text-electric-sky font-semibold">{cert.credentialId}</span>
                          </div>
                        )}

                        {cert.registrationId && (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80 gap-1">
                            <span className="text-slate-400 flex items-center gap-1.5">
                              <Hash className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span>No. Reg:</span>
                            </span>
                            <span className="text-slate-300 font-semibold">{cert.registrationId}</span>
                          </div>
                        )}
                      </div>

                      {/* Competencies Tags */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-lg bg-navy-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Trigger Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-cyan text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{t.certificates.clickToEnlarge}</span>
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-navy-950/90 backdrop-blur-2xl"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-3xl bg-navy-900 border border-electric-sky/30 shadow-2xl z-10 text-slate-100 flex flex-col"
            >
              {/* Sticky Modal Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-navy-900/95 backdrop-blur-md border-b border-electric-sky/15">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.certificates.verifiedBadge}</span>
                  </span>
                  <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
                    {selectedCert.issuer} • {selectedCert.date}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-navy-800/80 hover:bg-navy-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label={t.certificates.closeLightbox}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Certificate Image */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-2">
                    {language === 'EN' ? selectedCert.title.en : selectedCert.title.id}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {language === 'EN' ? selectedCert.description.en : selectedCert.description.id}
                  </p>
                </div>

                {/* Full-view Portrait Certificate Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-electric-sky/25 bg-navy-950/80 shadow-2xl flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={selectedCert.image}
                    alt={language === 'EN' ? selectedCert.title.en : selectedCert.title.id}
                    className="max-h-[76vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
                    onError={(e) => {
                      if ((e.target as HTMLImageElement).src !== selectedCert.fallbackImage) {
                        (e.target as HTMLImageElement).src = selectedCert.fallbackImage;
                      }
                    }}
                  />
                </div>

                {/* Footer details in modal */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-slate-300 font-semibold">{selectedCert.issuer}</span>
                    <span>•</span>
                    <span className="text-electric-sky font-mono">{selectedCert.credentialId || 'Verified Credential'}</span>
                    {selectedCert.registrationId && (
                      <>
                        <span>•</span>
                        <span className="text-slate-400">{selectedCert.registrationId}</span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                  >
                    {t.certificates.closeLightbox}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
