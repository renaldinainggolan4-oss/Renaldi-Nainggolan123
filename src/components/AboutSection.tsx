import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  ShieldCheck, 
  Activity, 
  Target, 
  CheckCircle, 
  Search, 
  Award, 
  FileSpreadsheet, 
  Lock, 
  Layers,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Activity,
      title: "Monitoring Lalu Lintas Server",
      desc: "Pengalaman langsung dalam mengamati pola data traffic server real-time dan mendeteksi anomali lonjakan bandwidth.",
    },
    {
      icon: Search,
      title: "Investigasi Log Serangan Siber",
      desc: "Ketelitian tinggi dalam menelusuri jutaan baris log untuk mendeteksi vektor serangan siber (DDoS, SQLi, XSS, Brute Force).",
    },
    {
      icon: Lock,
      title: "Cloud Security (Imperva)",
      desc: "Memahami implementasi Web Application Firewall (WAF) dan bot protection pada platform Imperva.",
    },
    {
      icon: FileSpreadsheet,
      title: "Penyusunan Laporan Bulanan",
      desc: "Menyajikan rekapitulasi insiden keamanan dan request perubahan klien secara terstruktur dengan Microsoft Office.",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profil Junior</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Mengenal Lebih Dekat <span className="text-blue-600">Renaldi Nainggolan</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Dedikasi pada keamanan siber, ketelitian analisis log insiden, dan komitmen memberikan pelayanan prima bagi keamanan infrastruktur server klien.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Summary & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 pb-5 border-b border-slate-200/80">
                <div className="relative shrink-0">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-lg bg-slate-200 group">
                    <img
                      src={personalInfo.profilePhotoUrl}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== personalInfo.profilePhotoDriveUrl) {
                          target.src = personalInfo.profilePhotoDriveUrl;
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-md border-2 border-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                    <span>{personalInfo.name}</span>
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">{personalInfo.role}</p>
                  <p className="text-xs text-slate-500 mt-1">Spesialis Keamanan Siber &amp; Monitoring Server</p>
                </div>
              </div>
              
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Saya adalah Junior di bidang <strong className="text-slate-900">Cybersecurity</strong> dengan pengalaman lebih dari satu tahun menganalisis serangan siber, memantau trafik server, dan menangani insiden keamanan di <strong className="text-blue-700">PT Neptus Teknologi Indonesia (SOC Operation)</strong>.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Berbekal latar belakang pendidikan <strong className="text-slate-900">D3 Sistem Informasi</strong> dari Universitas Bina Sarana Informatika (IPK 3.22), saya memiliki fondasi teori dan keterampilan praktis yang solid untuk berkontribusi sebagai <strong className="text-blue-600">Layer 1 Engineer</strong>.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Lokasi:</span>
                  <span className="font-semibold text-slate-800">Srengseng, Jakarta Barat</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Status Ketersediaan:</span>
                  <span className="font-semibold text-emerald-600">Siap Bergabung Segera</span>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">LinkedIn Resmi:</span>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#0A66C2] hover:text-[#004182] hover:underline"
                    title="Buka Profil LinkedIn Renaldi Nainggolan"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>{personalInfo.linkedin}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Competency Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 border border-blue-100/80">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 font-display">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Terbukti di Lapangan</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
