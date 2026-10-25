import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Shield, 
  Sparkles,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
RENALDI NAINGGOLAN
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Address: ${personalInfo.address}
LinkedIn: Renaldi Nainggolan
Instagram: @rei_nainggolan

SUMMARY:
I am a junior working in the field of cybersecurity with over a year of experience analyzing cyberattacks. I have a proven track record from my time at PT Neptus Teknologi Indonesia. I am currently seeking an opportunity to contribute to the company's growth in the role of Layer 1 Engineer.

TECHNICAL SKILLS:
- Microsoft Office
- Cloud Security (Imperva)
- Security Monitoring
- Detail-Oriented
- Log Analysis

PROFESSIONAL EXPERIENCE:
PT Neptus Teknologi Indonesia | Layer 1 Engineer | Soc Operation (March 2025 - June 2026)
- Layer 1 Engineer with experience in monitoring data traffic to servers
- Analyzing the handling of issues in the case
- Preparing monthly reports on security incidents and changes requested by clients
- Handle and respond to every client request quickly and accurately

EDUCATION:
Universitas Bina Sarana Informatika | Cipulir, DKI Jakarta
D3 - Sistem Informasi (2020 – 2024)
IPK: 3.22 / 4.00

INTERNSHIP:
Digitalent ft Menkomdigi & Micromentor (10/2022 - 12/2022)
- Micromentor collaboration with Ministry of Communication and Information for mentoring UMKM
- Mentoring UMKM on how to do business effectively in the industrial era 4.0
- Jakarta, Indonesia

ADDITIONAL INFORMATION:
- Languages: Indonesia (Masif), English (Pasif)
- Certifications: Cyber security training Digitalent ft Kominfo
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Modal Controls (Hidden in Print) */}
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between print:hidden shrink-0">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-sm sm:text-base font-display">
                Curriculum Vitae &bull; Renaldi Nainggolan
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <a
                id="modal-download-cv-file-btn"
                href={personalInfo.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow-xs"
                title="Unduh file CV asli dari Google Drive"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh CV Asli (PDF)</span>
              </a>

              <button
                id="modal-copy-cv-btn"
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Tersalin!' : 'Salin Teks CV'}</span>
              </button>

              <button
                id="modal-print-cv-btn"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cetak</span>
              </button>

              <button
                id="modal-close-cv-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable CV Document View (Exact Replica of original CV) */}
          <div className="overflow-y-auto p-6 sm:p-10 bg-white font-sans text-slate-800 space-y-6 print:p-0">
            
            {/* Header: Name + Red background photo style */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b-2 border-slate-800">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                  RENALDI NAINGGOLAN
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-900 hover:text-[#0A66C2] transition-colors group"
                    title="Buka Profil LinkedIn Renaldi Nainggolan"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
                    <span>LinkedIn: <strong className="group-hover:underline">{personalInfo.linkedin}</strong></span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <a
                    href={personalInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-900 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>{personalInfo.instagram}</span>
                  </a>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>Jl Duku VI, Srengseng Jakarta Barat</span>
                  </div>
                </div>
              </div>

              {/* Official Pass Photo in CV */}
              <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-lg overflow-hidden shadow-md shrink-0 border-2 border-slate-300 bg-slate-100 flex items-center justify-center">
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
            </div>

            {/* SUMMARY Section */}
            <div>
              <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-xs mb-2.5">
                SUMMARY
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                I am a junior working in the field of cybersecurity with over a year of experience analyzing cyberattacks. I have a proven track record from my time at PT Neptus Teknologi Indonesia. I am currently seeking an opportunity to contribute to the company's growth in the role of Layer 1 Engineer.
              </p>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-xs mb-2.5">
                TECHNICAL SKILLS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs font-medium text-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Microsoft Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Cloud Security (Imperva)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Security Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Detail-Oriented</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Log Analysis</span>
                </div>
              </div>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div>
              <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-xs mb-2.5">
                PROFESSIONAL EXPERIENCE
              </div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                  <span>PT Neptus Teknologi Indonesia | Layer 1 Engineer | Soc Operation</span>
                  <span className="text-slate-600 font-semibold">March 2025 – June 2026</span>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1 leading-relaxed">
                  <li>Layer 1 Engineer with experience in monitoring data traffic to servers,</li>
                  <li>Analyzing the handling of issues in the case,</li>
                  <li>preparing monthly reports on security incidents and changes requested by clients.</li>
                  <li>Merespons serta menangani setiap permintaan dan keluhan keamanan dari klien secara cepat, tanggap, sesuai dengan SOP dan Mengekskalasikan Kepada L2/L3</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-xs mb-2.5">
                EDUCATION
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-slate-800">
                <div className="font-bold text-slate-900">Universitas Bina Sarana Informatika</div>
                <div className="text-slate-700">Universitas Bina Sarana Informatika | Cipulir, DKI Jakarta</div>
                <div className="font-medium text-slate-700">D3 - Sistem Informasi (2020 – 2024)</div>
                <div className="font-bold text-blue-800">IPK: 3.22 / 4.00</div>
              </div>
            </div>

            {/* INTERNSHIP */}
            <div>
              <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-xs mb-2.5">
                INTERNSHIP
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-slate-800">
                <div className="font-bold text-slate-900">Digitalent ft Menkomdigi</div>
                <div className="italic text-slate-600">
                  Micromentor collaboration with Ministry of Communication and Information for mentoring UMKM
                </div>
                <p className="text-slate-700">
                  Mentoring umkm on how to do business effectively in the industrial era 4.0
                </p>
                <div className="text-xs text-slate-500 font-medium">
                  Jakarta, Indonesia (10/2022–12/2022)
                </div>
              </div>
            </div>

            {/* ADDITIONAL INFORMATION */}
            <div>
              <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider rounded-xs mb-2.5">
                ADDITIONAL INFORMATION
              </div>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1 leading-relaxed">
                <li><strong>Languages:</strong> Indonesia (Masif) , English (Pasif)</li>
              </ul>
            </div>

          </div>

          {/* Footer of modal */}
          <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 print:hidden shrink-0">
            <span>Terverifikasi sesuai dokumen Curriculum Vitae Renaldi Nainggolan</span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={personalInfo.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File PDF</span>
              </a>
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
