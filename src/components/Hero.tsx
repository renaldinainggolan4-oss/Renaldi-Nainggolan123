import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Terminal, 
  FileSpreadsheet, 
  CloudRain, 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Send,
  Linkedin,
  Instagram,
  ArrowDown,
  Sparkles,
  Server,
  Lock,
  Smartphone
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Subtle Cyber Grid & Glowing Accents */}
      <div className="absolute inset-0 bg-grid-blue pointer-events-none opacity-60" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wide mb-6 shadow-2xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Hire &bull; Layer 1 Engineer / SOC Analyst</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display mb-4"
            >
              Halo, Saya <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed mb-4 max-w-2xl"
            >
              Cybersecurity <span className="text-blue-600 font-semibold">Layer 1 Engineer</span> &amp; <span className="text-blue-600 font-semibold">SOC Operation</span> Specialist dengan keahlian mendalam pada <span className="font-semibold text-slate-900">Cloud Security (Imperva)</span>, <span className="font-semibold text-slate-900">Traffic Monitoring</span>, dan <span className="font-semibold text-slate-900">Log Analysis</span>.
            </motion.p>

            {/* Brief Context & Experience highlight */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/90 shadow-2xs"
            >
              {personalInfo.summaryId}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8"
            >
              <a
                id="hero-btn-whatsapp"
                href={`https://wa.me/6282260799287?text=${encodeURIComponent('Halo Mas Renaldi Nainggolan, saya tertarik untuk mendiskusikan peluang kerja Layer 1 Engineer / SOC Operation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <button
                id="hero-btn-view-cv"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-2xs active:scale-95"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Lihat &amp; Cetak CV</span>
              </button>

              <a
                id="hero-btn-linkedin"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#0A66C2] bg-blue-50/90 border border-blue-200/90 rounded-xl hover:bg-blue-100 hover:border-[#0A66C2] transition-all shadow-2xs active:scale-95"
                title="Buka profil LinkedIn: Renaldi Nainggolan"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn: {personalInfo.linkedin}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0A66C2]/80" />
              </a>

              <a
                id="hero-btn-explore-project"
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span>Lihat Proyek Mobile</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Quick Contact Chips with Copy feedback */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-xs text-slate-600"
            >
              {/* LinkedIn Chip */}
              <a
                id="hero-chip-linkedin"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors shadow-2xs font-medium text-slate-800 group"
                title="Profil LinkedIn: Renaldi Nainggolan"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn: <strong className="text-slate-900 group-hover:text-[#0A66C2]">{personalInfo.linkedin}</strong></span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0A66C2]" />
              </a>

              {/* Email Chip */}
              <button
                id="hero-copy-email"
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-2xs cursor-pointer group"
                title="Klik untuk salin Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{personalInfo.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-500" />
                )}
              </button>

              {/* Phone Chip */}
              <button
                id="hero-copy-phone"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-2xs cursor-pointer group"
                title="Klik untuk salin Nomor HP"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{personalInfo.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-500" />
                )}
              </button>

              {/* Location Chip */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-slate-200 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Jakarta Barat, DKI Jakarta</span>
              </span>

              {/* Instagram Link */}
              <div className="flex items-center gap-1">
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-2xs"
                  title="Instagram @rei_nainggolan"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Cyber Defense Card & Security Terminal Preview */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Floating Quick Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.4 },
                x: { duration: 0.6, delay: 0.4 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="absolute -top-4 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-emerald-200/90 shadow-lg flex items-center gap-2 text-xs font-bold text-slate-800 pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>1+ Thn SOC L1</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.5 },
                x: { duration: 0.6, delay: 0.5 },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute -bottom-4 -right-2 sm:-right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-blue-200/80 shadow-lg flex items-center gap-2 text-xs font-bold text-blue-700 pointer-events-none"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Analisis Log &amp; WAF</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.2 },
                scale: { duration: 0.7, delay: 0.2 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.01 }}
              className="relative w-full max-w-md"
            >
              {/* Outer Glow frame with animated rotation gradient */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-lg opacity-40 animate-subtle-pulse" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
                
                {/* Large Prominent Hero Photo Showcase */}
                <div className="relative w-full h-80 sm:h-96 bg-slate-900 overflow-hidden group">
                  <img
                    src={personalInfo.profilePhotoUrl}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== personalInfo.profilePhotoDriveUrl) {
                        target.src = personalInfo.profilePhotoDriveUrl;
                      }
                    }}
                  />

                  {/* Top Floating Glass Badges on Photo */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>SOC Monitoring 24/7</span>
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-blue-900/80 backdrop-blur-md border border-blue-400/40 text-blue-100 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                      <span>Imperva WAF</span>
                    </div>
                  </div>

                  {/* Gradient Overlay at Bottom of Photo */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-extrabold text-white text-xl sm:text-2xl font-display tracking-tight leading-tight drop-shadow-sm">
                          {personalInfo.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-blue-300 font-semibold mt-0.5 flex items-center gap-1.5">
                          <span>Layer 1 Engineer</span>
                          <span className="text-blue-400/60">&bull;</span>
                          <span>SOC Operation</span>
                        </p>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          PT Neptus Teknologi Indonesia
                        </p>
                      </div>

                      <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-inner">
                        <ShieldCheck className="w-6 h-6 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cyber Ops Metric Indicators */}
                <div className="p-5 sm:p-6 space-y-3 bg-white">
                  
                  {/* Traffic Monitoring */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 relative overflow-hidden group hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                        Server Traffic Monitoring
                      </span>
                      <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        NORMAL &bull; 99.98%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-2 rounded-full relative"
                      >
                        <span className="absolute right-0 top-0 bottom-0 w-2 bg-white/70 rounded-full animate-ping" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Cloud Security */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-blue-600" />
                        Cloud Security (Imperva WAF)
                      </span>
                      <span className="font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded text-[10px] border border-blue-200">
                        ACTIVE FILTERING
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 flex items-center justify-between">
                      <span>DDoS Shield &bull; Bot Protection &bull; Threat Defense</span>
                      <span className="font-semibold text-slate-800">100% Protection</span>
                    </div>
                  </div>

                  {/* Micro-Badge Info */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Server className="w-3.5 h-3.5 text-blue-600" />
                      <span>Lulusan UBSI (IPK 3.22)</span>
                    </div>
                    <span className="text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 text-[11px]">
                      D3 Sistem Informasi
                    </span>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-default relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-display group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
