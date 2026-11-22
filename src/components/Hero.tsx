import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Sparkles,
  Mail,
  Layers,
  Code2,
  Terminal,
} from 'lucide-react';
import { GithubIcon, InstagramIcon } from './common/Icons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [imgSrc, setImgSrc] = useState(personalInfo.avatar.primary);
  const [imgFailed, setImgFailed] = useState(false);

  const handleAvatarError = () => {
    if (!imgFailed && imgSrc !== personalInfo.avatar.fallback) {
      setImgSrc(personalInfo.avatar.fallback);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content & CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pulsing Availability Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-electric-sky/30 shadow-glow-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-sky opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-sky" />
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                {t.hero.badge}
              </span>
            </div>

            {/* Headline - Optimized Scaling to Prevent Awkward Mobile Wrap */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.15] mb-4 break-words">
              {t.hero.greeting}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {personalInfo.displayName}
              </span>
              <span className="text-electric-cyan">.</span>
            </h1>

            {/* Sub-tagline with Animated Gradient Glow */}
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-electric-sky via-electric-cyan to-indigo-400 font-space mb-5 leading-snug">
              {t.hero.tagline}
            </h2>

            {/* Sub-headline Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-8">
              {t.hero.bio}
            </p>

            {/* Call To Action Buttons - Minimum 44px Touch Target & Restrained Motion */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-cyan text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md hover:border-sky-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{t.hero.exploreCta}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-electric-sky/20 hover:border-sky-400/40 text-slate-200 font-semibold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-electric-sky" />
                <span>{t.hero.contactCta}</span>
              </a>
            </div>

            {/* Social Link Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={personalInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900/60 hover:bg-navy-800 border border-slate-800 hover:border-electric-sky/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-electric-sky" />
                <span>GitHub: @framonn</span>
              </a>

              <a
                href={personalInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900/60 hover:bg-navy-800 border border-slate-800 hover:border-pink-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram: {personalInfo.instagram.handle}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column (Showcase Designer Profile Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Backlight for Profile Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 via-electric-cyan/20 to-indigo-600/10 rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none" />

            {/* Main Designer Showcase Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-electric-sky/30 via-slate-800/40 to-navy-900/80 border border-electric-sky/30 shadow-2xl backdrop-blur-xl group">
              
              {/* Inner Glass Card */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-950/90 border border-white/5">
                
                {/* Showcase Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-900/80 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3 h-3 text-electric-sky" />
                    <span>febri.porto / bio.tsx</span>
                  </div>
                  <div className="w-4" />
                </div>

                {/* Profile Image Viewport */}
                <div className="relative aspect-square w-full overflow-hidden bg-navy-900 flex items-center justify-center">
                  <img
                    src={imgSrc}
                    alt={personalInfo.fullName}
                    onError={handleAvatarError}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

                  {/* Name Overlay inside Frame */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-lg font-bold text-white font-space">
                      {personalInfo.fullName}
                    </h3>
                    <p className="text-xs text-electric-sky font-mono font-medium">
                      {language === 'EN' ? personalInfo.title.en : personalInfo.title.id}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Badges */}
              {/* Floating Badge 1: Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-4 sm:-left-6 px-3.5 py-1.5 rounded-xl bg-navy-900/90 border border-electric-sky/40 backdrop-blur-md shadow-glow-sm flex items-center gap-2 text-xs font-semibold text-slate-100"
              >
                <div className="p-1 rounded-md bg-electric-blue/20 text-electric-sky">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.floatingBadge1}</span>
              </motion.div>

              {/* Floating Badge 2: Middle Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 -right-4 sm:-right-6 px-3.5 py-1.5 rounded-xl bg-navy-900/90 border border-electric-cyan/40 backdrop-blur-md shadow-glow-sm flex items-center gap-2 text-xs font-semibold text-slate-100"
              >
                <div className="p-1 rounded-md bg-electric-cyan/20 text-electric-cyan">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.floatingBadge2}</span>
              </motion.div>

              {/* Floating Badge 3: Bottom Left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-3 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-navy-900/90 border border-indigo-500/40 backdrop-blur-md shadow-glow-sm flex items-center gap-2 text-xs font-semibold text-slate-100"
              >
                <div className="p-1 rounded-md bg-indigo-500/20 text-indigo-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.floatingBadge3}</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
