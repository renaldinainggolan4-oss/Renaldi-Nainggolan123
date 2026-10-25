import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Linkedin, 
  Instagram, 
  MessageSquare, 
  ShieldCheck,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Renaldi Nainggolan,\n\nNama: ${senderName || 'Recruiter/Hiring Manager'}\nPerusahaan: ${senderCompany || '-'}\n\nPesan: ${senderMessage || 'Saya tertarik dengan profil portofolio Anda untuk posisi Layer 1 Engineer / SOC Operation. Mari berdiskusi lebih lanjut.'}`;
    const encoded = encodeURIComponent(text);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#3B82F6', '#60A5FA', '#10B981'],
    });

    setIsSent(true);
    setTimeout(() => {
      window.open(`https://wa.me/6282260799287?text=${encoded}`, '_blank');
      setIsSent(false);
    }, 600);
  };

  return (
    <section id="kontak" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Koneksi &amp; Peluang Karir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Mari Berdiskusi &amp; <span className="text-blue-600">Bekerja Sama</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Terbuka untuk peluang karir sebagai <strong className="text-slate-800">Layer 1 Engineer</strong>, <strong className="text-slate-800">SOC Analyst</strong>, atau spesialis operasional keamanan siber lainnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">WhatsApp &bull; Telepon</span>
                    <span className="font-bold text-slate-900 text-base">{personalInfo.phone}</span>
                  </div>
                </div>
                <button
                  id="contact-copy-phone"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Salin Nomor"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="contact-wa-link"
                href={`https://wa.me/6282260799287?text=${encodeURIComponent('Halo Renaldi Nainggolan, saya ingin mendiskusikan peluang kerja.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Buka WhatsApp Sekarang</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Email Resmi</span>
                    <span className="font-bold text-slate-900 text-sm break-all">{personalInfo.email}</span>
                  </div>
                </div>
                <button
                  id="contact-copy-email"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Salin Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="contact-email-link"
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Peluang Kerja - Layer 1 Engineer / SOC Analyst')}`}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Kirim Email Langsung</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white rounded-3xl p-6 border border-blue-200/90 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center border border-blue-100">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0A66C2] uppercase tracking-wider block">LinkedIn Resmi</span>
                    <span className="font-bold text-slate-900 text-base">{personalInfo.linkedin}</span>
                  </div>
                </div>
                <button
                  id="contact-copy-linkedin"
                  onClick={() => handleCopy(personalInfo.linkedinUrl, 'linkedin')}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Salin Link Profil LinkedIn"
                >
                  {copiedField === 'linkedin' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Terhubung di LinkedIn: {personalInfo.linkedin}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address & Socials */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Domisili</span>
                  <span className="text-sm font-semibold text-slate-800 leading-snug block">
                    {personalInfo.address}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-500">Kanal Media Sosial:</span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0A66C2] border border-blue-200/80 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    title="LinkedIn Renaldi Nainggolan"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>{personalInfo.linkedin}</span>
                  </a>
                  <a
                    href={personalInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200/60 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{personalInfo.instagram}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Fast Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Kirim Pesan Cepat ke WhatsApp
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Isi form di bawah untuk membuat draf pesan langsung yang siap dikirimkan ke WhatsApp Renaldi.
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Nama Anda / Rekruter *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Budi Santoso (HRD)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Nama Perusahaan / Organisasi
                  </label>
                  <input
                    type="text"
                    value={senderCompany}
                    onChange={(e) => setSenderCompany(e.target.value)}
                    placeholder="Contoh: PT Solusi Siber Pratama"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Isi Pesan / Rincian Peluang Kerja *
                </label>
                <textarea
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Halo Mas Renaldi, kami tertarik dengan kualifikasi Layer 1 Engineer Anda di PT Neptus Teknologi Indonesia..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                id="contact-form-submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{isSent ? 'Membuka WhatsApp...' : 'Kirim Pesan WhatsApp Langsung'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
