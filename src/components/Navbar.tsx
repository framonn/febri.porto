import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './common/Icons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.certificates, href: '#certificates' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-navy-950/85 backdrop-blur-xl border-b border-electric-sky/15 shadow-lg shadow-navy-950/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-blue to-electric-cyan p-[1px] shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
              <div className="w-full h-full bg-navy-950 rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-sky to-electric-cyan">
                  FK.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold tracking-tight text-base sm:text-lg text-slate-100 group-hover:text-electric-sky transition-colors">
                febri<span className="text-electric-cyan">.dev</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-electric-sky/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Cluster: Language Switcher + GitHub + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Bilingual Language Switcher Pill */}
            <div
              onClick={toggleLanguage}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleLanguage();
                }
              }}
              title={`Switch language to ${language === 'EN' ? 'Bahasa Indonesia' : 'English'}`}
              className="relative flex items-center p-1 bg-navy-900/90 rounded-full border border-electric-sky/20 cursor-pointer select-none transition-colors hover:border-electric-sky/50"
            >
              <div className="relative z-10 flex text-xs font-semibold">
                <span
                  className={`px-2.5 py-1 rounded-full transition-colors duration-200 ${
                    language === 'EN' ? 'text-navy-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  EN
                </span>
                <span
                  className={`px-2.5 py-1 rounded-full transition-colors duration-200 ${
                    language === 'ID' ? 'text-navy-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ID
                </span>
              </div>
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-electric-sky to-electric-cyan shadow-sm ${
                  language === 'EN' ? 'left-1' : 'left-[calc(50%+2px)]'
                }`}
              />
            </div>

            {/* GitHub Profile Button */}
            <a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile @framonn"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-900/90 border border-electric-sky/20 text-xs font-medium text-slate-300 hover:text-white hover:border-electric-sky/50 hover:bg-electric-blue/10 transition-all shadow-sm group"
            >
              <GithubIcon className="w-3.5 h-3.5 text-electric-sky group-hover:scale-110 transition-transform" />
              <span>@framonn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-electric-sky transition-colors" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-navy-900/80 border border-electric-sky/20 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-electric-sky/20 bg-navy-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={personalInfo.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-electric-sky font-medium py-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub: @framonn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
