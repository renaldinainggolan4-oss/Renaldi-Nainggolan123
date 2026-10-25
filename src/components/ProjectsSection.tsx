import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  ExternalLink, 
  Database, 
  Bot, 
  CheckCircle2, 
  Globe, 
  ArrowUpRight, 
  Server, 
  Cpu 
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="proyek" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Featured Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Pengembangan <span className="text-blue-600">Aplikasi Mobile</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Proyek aplikasi modern yang dirancang menggunakan integrasi Artificial Intelligence (AI) dan didukung backend Supabase untuk performa tinggi.
          </p>
        </div>

        {/* Project Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80 transition-all p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
            >
              {/* Top Accent bar with subtle pulse */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Dibuat dengan AI</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Database className="w-3.5 h-3.5" />
                  <span>Backend Supabase</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Fitur Utama &amp; Implementasi Teknis:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Summary */}
              <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-600" />
                  <span>Arsitektur Sistem &amp; Layanan Backend:</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Backend:</span>
                    <span className="font-semibold text-slate-800">Supabase</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Database:</span>
                    <span className="font-semibold text-slate-800">PostgreSQL</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Metode:</span>
                    <span className="font-semibold text-purple-700">AI Generated</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Hosting:</span>
                    <span className="font-semibold text-slate-800">Vercel</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-lg border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  id={`project-btn-${project.id}`}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-indigo-800 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 group"
                >
                  <Globe className="w-4 h-4" />
                  <span>Kunjungi Aplikasi Live</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors font-mono"
                >
                  <span>{project.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
