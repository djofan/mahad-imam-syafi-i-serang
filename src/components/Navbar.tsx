import React, { useState } from 'react';
import { Menu, X, BookOpen, GraduationCap, PhoneCall, CheckCircle } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onOpenRegistration: () => void;
  onOpenStatusCheck: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegistration,
  onOpenStatusCheck,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Profil Ma'had", href: '#profil' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Program', href: '#program' },
    { label: 'Galeri Santri', href: '#galeri' },
    { label: 'Biaya', href: '#biaya' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1C1C1C]/95 backdrop-blur-md border-b border-[#333333] text-[#FFF8E6] transition-all shadow-md">
      {/* 3-zone top bar contract: Brand, single-line nav links, primary action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 xl:gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F5B700] border border-[#DF9F00] flex items-center justify-center text-[#1C1C1C] shadow-md group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 font-bold" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-white leading-tight">
              Ma'had Imam Syafi'i
            </span>
            <span className="text-xs text-[#F5B700] tracking-wider uppercase font-semibold">
              Kota Serang · Banten
            </span>
          </div>
        </a>

        {/* Zone 2: Single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 text-xs xl:text-sm font-semibold text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-[#F5B700] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F5B700]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenStatusCheck}
            className="flex items-center gap-1 text-[#F5B700] hover:text-white transition-colors whitespace-nowrap shrink-0 text-2xs xl:text-xs uppercase tracking-wider py-1 font-bold cursor-pointer"
            title="Cek Pengumuman & Berkas Pendaftaran"
          >
            <CheckCircle className="w-3.5 h-3.5 text-[#F5B700]" />
            Cek Status PSB
          </button>
        </nav>

        {/* Zone 3: Actions with shadcn Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Button
            variant="dark"
            size="sm"
            asChild
            className="hidden xl:inline-flex border-[#444444] text-stone-200 hover:text-white hover:border-[#F5B700] h-9.5 px-3.5"
          >
            <a
              href={MAHAD_INFO.whatsappConsultation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5B700]" />
              <span>WA Panitia</span>
            </a>
          </Button>

          <Button
            variant="default"
            size="default"
            onClick={onOpenRegistration}
            className="text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#F5B700]/20 h-10 px-4"
          >
            <GraduationCap className="w-4 h-4 text-[#1C1C1C]" />
            <span>Daftar Santri Baru (PSB)</span>
          </Button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-[#2A2A2A] focus:outline-none cursor-pointer"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C1C1C] border-b border-[#333333] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-stone-200 hover:bg-[#2A2A2A] hover:text-[#F5B700] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStatusCheck();
              }}
              className="flex items-center gap-2 text-left px-3 py-2 rounded-lg text-sm font-bold text-[#F5B700] hover:bg-[#2A2A2A] transition-colors cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-[#F5B700]" />
              Cek Status Pendaftaran / Hasil Seleksi
            </button>
          </div>

          <div className="pt-3 border-t border-[#333333] flex flex-col gap-2">
            <Button
              variant="default"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full text-sm font-bold"
            >
              <GraduationCap className="w-4 h-4" />
              Form Pendaftaran Santri Baru (PSB Online)
            </Button>
            <Button
              variant="dark"
              asChild
              className="w-full text-xs"
            >
              <a
                href={MAHAD_INFO.whatsappConsultation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F5B700]" />
                Konsultasi WhatsApp PSB
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
