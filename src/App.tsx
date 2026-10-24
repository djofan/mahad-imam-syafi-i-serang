import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesZigZag } from './components/FeaturesZigZag';
import { ProfileSection } from './components/ProfileSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { DailyScheduleSection } from './components/DailyScheduleSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TeachersSection } from './components/TeachersSection';
import { CostSimulation } from './components/CostSimulation';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { RegistrationPortal } from './components/RegistrationPortal';
import { FaqSection } from './components/FaqSection';
import { ClosingCtaSection } from './components/ClosingCtaSection';
import { Footer } from './components/Footer';
import { EducationLevel } from './types';
import { MessageCircle } from 'lucide-react';
import { MAHAD_INFO } from './data/mahadData';

export default function App() {
  const [selectedLevelForPsb, setSelectedLevelForPsb] = useState<EducationLevel>('wustha');
  const [portalMode, setPortalMode] = useState<'form' | 'status'>('form');

  const scrollToRegistration = (mode: 'form' | 'status' = 'form', level?: EducationLevel) => {
    setPortalMode(mode);
    if (level) {
      setSelectedLevelForPsb(level);
    }
    const element = document.getElementById('psb-portal');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById('galeri');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFF8E6] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#F5B700] selection:text-[#1C1C1C]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenRegistration={() => scrollToRegistration('form')}
        onOpenStatusCheck={() => scrollToRegistration('status')}
        activeSection="home"
      />

      <main className="flex-1">
        {/* 1. HERO SPLIT SCREEN */}
        <Hero
          onOpenRegistration={() => scrollToRegistration('form')}
          onScrollToGallery={scrollToGallery}
        />

        {/* 2. FITUR DENGAN GRID KARTU & ZIG-ZAG */}
        <FeaturesZigZag />

        {/* Profil Lembaga & Visi Misi */}
        <ProfileSection />

        {/* Program Pendidikan & Kurikulum */}
        <ProgramsSection
          onSelectProgram={(level) => scrollToRegistration('form', level)}
        />

        {/* Galeri Kegiatan Santri (KHUSUS PRIA / IKHWAN) */}
        <GallerySection />

        {/* Jadwal Harian Santri 24 Jam */}
        <DailyScheduleSection />

        {/* Fasilitas Kampus */}
        <FacilitiesSection />

        {/* Dewan Asatidz & Pengasuh */}
        <TeachersSection />

        {/* Biaya Pendidikan & Kalkulator Masuk */}
        <CostSimulation />

        {/* 3. TESTIMONI CAROUSEL */}
        <TestimonialCarousel />

        {/* Portal Pendaftaran Santri Baru (PSB Online) & Cek Status */}
        <RegistrationPortal
          key={`${selectedLevelForPsb}-${portalMode}`}
          initialLevel={selectedLevelForPsb}
          initialMode={portalMode}
        />

        {/* 4. FAQ ACCORDION */}
        <FaqSection />

        {/* 5. CTA PENUTUP */}
        <ClosingCtaSection
          onOpenRegistration={() => scrollToRegistration('form')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast Consultation Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={MAHAD_INFO.whatsappConsultation}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 bg-[#F5B700] hover:bg-[#DF9F00] text-[#1C1C1C] rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 text-xs sm:text-sm font-bold group cursor-pointer border border-[#DF9F00]/50 hover:scale-105 active:scale-95"
          title="Tanya Panitia via WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current text-[#1C1C1C]" />
          <span className="hidden sm:inline font-bold">Tanya Panitia PSB</span>
        </a>
      </div>
    </div>
  );
}
