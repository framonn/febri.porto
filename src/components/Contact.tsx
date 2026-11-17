import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, InstagramIcon } from './common/Icons';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast('success', t.contact.copiedEmail);
    setTimeout(() => setCopied(false), 2500);
  };

  const showToast = (type: 'success' | 'error', text: string) => {
    setToastMessage({ type, text });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('error', t.contact.sendError);
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('success', t.contact.sendSuccess);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38BDF8', '#2563EB', '#06B6D4', '#6366F1'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-slate-900 bg-navy-950/40">
      {/* Background ambient illumination */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border font-mono text-xs font-semibold ${
              toastMessage.type === 'success'
                ? 'bg-navy-900/95 border-emerald-500/50 text-emerald-300 shadow-emerald-950/40'
                : 'bg-navy-900/95 border-rose-500/50 text-rose-300 shadow-rose-950/40'
            }`}
          >
            <Sparkles className="w-4 h-4 text-electric-sky" />
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-electric-sky/20 text-electric-sky text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <span>{t.contact.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy button */}
            <div className="p-7 rounded-3xl bg-navy-900/70 border border-electric-sky/25 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {t.contact.quickEmailTitle}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/30">
                  Fast Response
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-navy-950/90 border border-slate-800">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-electric-blue/15 text-electric-sky shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm text-slate-200 truncate select-all">
                    {personalInfo.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shrink-0 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-4">
              {/* GitHub Card */}
              <a
                href={personalInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-electric-sky/40 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-slate-800 flex items-center justify-center text-slate-200 group-hover:text-electric-sky group-hover:border-electric-sky/40 transition-all">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-space group-hover:text-electric-sky transition-colors">
                      GitHub
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      @{personalInfo.github.username} — {t.contact.githubDesc}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-electric-sky group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Instagram Card */}
              <a
                href={personalInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-pink-500/40 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-slate-800 flex items-center justify-center text-pink-400 group-hover:border-pink-500/40 transition-all">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-space group-hover:text-pink-400 transition-colors">
                      Instagram
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {personalInfo.instagram.handle} — {t.contact.instagramDesc}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="p-5 rounded-2xl bg-navy-900/40 border border-slate-850 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-electric-sky" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>GMT+7 (WIB)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-900/70 border border-electric-sky/20 backdrop-blur-xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.formNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-800 focus:border-electric-sky/60 focus:outline-none focus:ring-1 focus:ring-electric-sky/40 text-sm text-slate-100 placeholder:text-slate-500 font-sans transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                      {t.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.formEmailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-800 focus:border-electric-sky/60 focus:outline-none focus:ring-1 focus:ring-electric-sky/40 text-sm text-slate-100 placeholder:text-slate-500 font-sans transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                    {t.contact.formSubject}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.formSubjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-800 focus:border-electric-sky/60 focus:outline-none focus:ring-1 focus:ring-electric-sky/40 text-sm text-slate-100 placeholder:text-slate-500 font-sans transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.formMessagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-800 focus:border-electric-sky/60 focus:outline-none focus:ring-1 focus:ring-electric-sky/40 text-sm text-slate-100 placeholder:text-slate-500 font-sans transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-blue via-electric-cyan to-indigo-600 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendMessage}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
