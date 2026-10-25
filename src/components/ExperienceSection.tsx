import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  Clock,
  Sparkles,
  Server
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="pengalaman" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak Karir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Pengalaman <span className="text-blue-600">Kerja &amp; Magang</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Pengalaman nyata dalam operasi SOC 24/7, mitigasi ancaman siber secara cepat dan tepat, serta kolaborasi program transformasi digital nasional.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all group overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                exp.type === 'Full-time' ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500' : 'bg-slate-300'
              }`} />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-bold bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                      {exp.role}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-full">
                      {exp.type}
                    </span>
                    {exp.department && (
                      <span className="text-xs text-slate-500 font-medium">
                        &bull; {exp.department}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-display flex items-center gap-2">
                    {exp.company}
                  </h3>
                </div>

                {/* Period & Location Badge */}
                <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-2 text-xs text-slate-600 shrink-0">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 font-semibold text-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                    <span className="text-slate-400">({exp.duration})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Descriptions from CV */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Tanggung Jawab Utama &amp; Lingkup Pekerjaan:
                </h4>
                <ul className="space-y-2.5">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 mr-1">Teknologi &amp; Kompetensi:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
