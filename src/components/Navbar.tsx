import React, { useState } from 'react';
import { Menu, X, BookOpen, GraduationCap, PhoneCall, CheckCircle } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';

interface NavbarProps {
  onOpenRegistration: () => void;
  onOpenStatusCheck: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegistration,
  onOpenStatusCheck,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Profil Ma\'had', href: '#profil' },
    { label: 'Program', href: '#program' },
    { label: 'Galeri Santri', href: '#galeri' },
    { label: 'Jadwal & Asrama', href: '#asrama' },
    { label: 'Biaya', href: '#biaya' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all">
      {/* Strict 3-zone top bar contract: Brand, single-line nav links, 1 primary action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-stone-50 hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-800 border border-emerald-600/50 flex items-center justify-center text-emerald-300 shadow-inner group-hover:bg-emerald-700 transition-colors">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-white leading-tight">
              Ma'had Imam Syafi'i
            </span>
            <span className="text-xs text-emerald-400 tracking-wider uppercase font-medium">
              Kota Serang · Banten
            </span>
          </div>
        </a>

        {/* Zone 2: Single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenStatusCheck}
            className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-xs uppercase tracking-wider py-1 font-semibold"
            title="Cek Pengumuman & Berkas Pendaftaran"
          >
            <CheckCircle className="w-4 h-4 text-amber-400" />
            Cek Status PSB
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={MAHAD_INFO.whatsappConsultation}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-md transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>WA Panitia</span>
          </a>

          <button
            onClick={onOpenRegistration}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Daftar Santri Baru (PSB)</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-stone-200 hover:bg-stone-800 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStatusCheck();
              }}
              className="flex items-center gap-2 text-left px-3 py-2 rounded-md text-sm font-medium text-amber-300 hover:bg-stone-800 transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-amber-400" />
              Cek Status Pendaftaran / Hasil Seleksi
            </button>
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              Form Pendaftaran Santri Baru (PSB Online)
            </button>
            <a
              href={MAHAD_INFO.whatsappConsultation}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              Konsultasi WhatsApp PSB
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
