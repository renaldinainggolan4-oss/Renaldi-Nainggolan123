import React from 'react';
import { Shield, ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800 items-start">
          
          {/* Brand & Role */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white font-display">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              Layer 1 Engineer &bull; SOC Operation Specialist
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Berpengalaman dalam analisis insiden keamanan siber, proteksi cloud Imperva, pemantauan trafik server, dan penyusunan laporan bulanan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block mb-3">Navigasi Cepat</span>
            <ul className="space-y-2">
              <li><a href="#tentang" className="hover:text-blue-400 transition-colors">Tentang Saya</a></li>
              <li><a href="#pengalaman" className="hover:text-blue-400 transition-colors">Pengalaman Kerja (PT Neptus)</a></li>
              <li><a href="#keahlian" className="hover:text-blue-400 transition-colors">Keahlian (Imperva &amp; Logs)</a></li>
              <li><a href="#proyek" className="hover:text-blue-400 transition-colors">Proyek Mobile (NXTGEN Youth)</a></li>
              <li><a href="#pendidikan" className="hover:text-blue-400 transition-colors">Pendidikan &amp; Sertifikasi</a></li>
              <li><a href="#kontak" className="hover:text-blue-400 transition-colors">Hubungi / Rekrut</a></li>
            </ul>
          </div>

          {/* Contacts Summary */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block mb-3">Kontak Resmi</span>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">{personalInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  LinkedIn: {personalInfo.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <a href={personalInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  {personalInfo.instagram}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 text-center sm:text-left">
            &copy; 2026 Renaldi Nainggolan. All Rights Reserved
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-xs"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
