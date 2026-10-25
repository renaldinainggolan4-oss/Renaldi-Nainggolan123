import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, Download, FileText, PhoneCall, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'tentang', 'pengalaman', 'keahlian', 'proyek', 'pendidikan', 'kontak'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang', id: 'tentang' },
    { label: 'Pengalaman', href: '#pengalaman', id: 'pengalaman' },
    { label: 'Keahlian', href: '#keahlian', id: 'keahlian' },
    { label: 'Proyek Mobile', href: '#proyek', id: 'proyek' },
    { label: 'Pendidikan', href: '#pendidikan', id: 'pendidikan' },
    { label: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          id="navbar-brand-logo"
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-blue-500/40 shadow-xs group-hover:scale-105 transition-transform duration-200 bg-slate-100">
              <img
                src={personalInfo.profilePhotoUrl}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== personalInfo.profilePhotoDriveUrl) {
                    target.src = personalInfo.profilePhotoDriveUrl;
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-[9px] shadow-xs">
              <Shield className="w-2.5 h-2.5" />
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-1.5 font-display">
              {personalInfo.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for hire" />
            </div>
            <p className="text-xs text-blue-600 font-medium tracking-wide">Layer 1 Engineer &bull; SOC Specialist</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 backdrop-blur-xs p-1.5 rounded-full border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-xs shadow-blue-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="nav-btn-cv-modal"
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Lihat CV Resmi</span>
          </button>
          
          <a
            id="nav-btn-hire-whatsapp"
            href={`https://wa.me/6282260799287?text=${encodeURIComponent('Halo Renaldi, saya melihat portofolio Anda dan tertarik berdiskusi terkait peluang Layer 1 Engineer / SOC Analyst.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm shadow-blue-500/25 hover:shadow-md hover:shadow-blue-500/35 active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-btn-cv-mobile"
            onClick={onOpenCvModal}
            className="p-2 text-slate-700 bg-white border border-slate-200 rounded-lg text-xs font-medium"
            title="Lihat CV"
          >
            <FileText className="w-4 h-4 text-blue-600" />
          </button>
          <button
            id="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:text-blue-600 bg-slate-100/90 border border-slate-200/80 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 rounded-xl flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Lihat Dokumen CV Lengkap</span>
                </button>
                <a
                  href={`https://wa.me/6282260799287?text=${encodeURIComponent('Halo Renaldi, saya melihat portofolio Anda dan ingin berdiskusi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-blue-600 rounded-xl flex items-center justify-center gap-2 shadow-xs shadow-blue-500/30"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Kirim Pesan WhatsApp (0822-6079-9287)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
