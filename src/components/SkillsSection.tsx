import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  FileSpreadsheet, 
  Search, 
  Activity, 
  Lock, 
  Cloud, 
  CheckCircle, 
  Flame, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudShield':
        return Cloud;
      case 'ShieldAlert':
        return ShieldCheck;
      case 'FileSpreadsheet':
        return FileSpreadsheet;
      default:
        return Cpu;
    }
  };

  return (
    <section id="keahlian" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian &amp; Toolset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Kompetensi Teknis &amp; <span className="text-blue-600">Spesialisasi</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Kombinasi mendalam antara keahlian teknis pemantauan keamanan siber, analisis log mendalam, dan kemampuan komunikasi pelaporan klien.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                id={`skill-tab-${idx}`}
                onClick={() => setActiveCategory(idx)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-md shadow-blue-500/25 scale-102'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTabPill"
                    className="absolute inset-0 bg-blue-600 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                <span className="relative z-10">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sIdx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-300 transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100/80 text-blue-800 border border-blue-200/60">
                    {skill.badge || 'Keahlian'}
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/50">
                    {skill.level}% Proficiency
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar with animated glowing tip */}
              <div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: sIdx * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 h-2 rounded-full relative"
                  >
                    <span className="absolute right-0 top-0 bottom-0 w-1.5 bg-white rounded-full animate-ping" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted Tool Arsenal Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate opacity-10 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/50 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Teknologi Kunci yang Digunakan Sehari-hari</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Ekosistem &amp; Standar Operasional Keamanan
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Terbiasa dengan alur penanganan respons cepat, verifikasi Incident , Mengidentifikasi Inciden dan Pemecahan masalah terhadap Isu yang terjadi dan membuat laporan Terhadap Serangan Incident atau Anomali setiap Bulannya.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end">
              {['Imperva Cloud Security', 'WAF Protection', 'Log Inspection', 'Syslog Analysis', 'Microsoft Excel', 'Traffic Monitor', 'SLA Response'].map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
