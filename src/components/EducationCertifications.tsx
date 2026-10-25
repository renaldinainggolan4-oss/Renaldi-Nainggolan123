import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  Languages, 
  BookOpen, 
  CheckCircle2, 
  FileBadge, 
  MapPin, 
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { educationList, certifications, languages } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="pendidikan" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Pendidikan &amp; Kualifikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Pendidikan, <span className="text-blue-600">Sertifikasi &amp; Bahasa</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Fondasi akademis di bidang Sistem Informasi dan sertifikasi kompetensi resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education (UBSI) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900 font-display">Pendidikan Formal</h3>
            </div>

            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
              >
                {/* GPA Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="px-3 py-1 text-xs font-bold bg-blue-100/90 text-blue-800 rounded-full border border-blue-200 inline-block mb-2">
                      {edu.degree} &bull; {edu.major}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 font-display">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.campus}</span>
                      <span className="text-slate-400">&bull;</span>
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.period}</span>
                    </p>
                  </div>

                  {/* GPA Box */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shrink-0 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">IPK / GPA</span>
                    <span className="text-xl font-extrabold text-blue-600 font-display">
                      {edu.gpa}
                    </span>
                    <span className="text-[10px] text-slate-400 block">/ {edu.maxGpa}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                    Fokus &amp; Capaian Studi:
                  </h5>
                  <ul className="space-y-2">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Languages Card */}
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-slate-900 font-display">Kemampuan Bahasa (Languages)</h4>
              </div>

              <div className="space-y-4">
                {languages.map((lang, lIdx) => (
                  <div key={lIdx} className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-slate-900">{lang.name}</span>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{lang.note}</p>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Trainings */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900 font-display">Sertifikasi &amp; Pelatihan Resmi</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                        <FileBadge className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-semibold text-blue-700 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      Terverifikasi
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Materi &amp; Kompetensi yang Dikuasai:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, scIdx) => (
                        <span
                          key={scIdx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
