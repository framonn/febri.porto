import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './common/Icons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.certificates, href: '#certificates' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="relative py-14 border-t border-slate-900 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Logo, Tagline & Smooth Back-to-Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-space font-bold tracking-tight text-lg sm:text-xl text-white">
                febri<span className="text-electric-cyan">.porto</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick social icons */}
            <a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-400 hover:text-white hover:border-electric-sky/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-electric-sky/20 hover:border-electric-sky/50 text-xs font-semibold text-slate-200 transition-all shadow-sm"
              title="Return to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-electric-sky" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Nav Links, Copyright & Tech credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center sm:text-right">
            <p className="text-slate-400">
              © 2026 {personalInfo.fullName} ({personalInfo.displayName}). {t.footer.rights}
            </p>
            <p className="text-slate-400 mt-1">
              Crafted with code & design.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
