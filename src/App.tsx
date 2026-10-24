import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSection } from './components/ProfileSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { DailyScheduleSection } from './components/DailyScheduleSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TeachersSection } from './components/TeachersSection';
import { CostSimulation } from './components/CostSimulation';
import { RegistrationPortal } from './components/RegistrationPortal';
import { FaqAndContactSection } from './components/FaqAndContactSection';
import { Footer } from './components/Footer';
import { EducationLevel } from './types';
import { MessageCircle, GraduationCap } from 'lucide-react';
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
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-800 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenRegistration={() => scrollToRegistration('form')}
        onOpenStatusCheck={() => scrollToRegistration('status')}
        activeSection="home"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenRegistration={() => scrollToRegistration('form')}
          onScrollToGallery={scrollToGallery}
        />

        {/* Profil Lembaga & Visi Misi */}
        <ProfileSection />

        {/* Program Pendidikan & Kurikulum */}
        <ProgramsSection
          onSelectProgram={(level) => scrollToRegistration('form', level)}
        />

        {/* Galeri Kegiatan Santri (KHUSUS PRIA / IKHWAN) */}
        <GallerySection />

        {/* Fasilitas Kampus */}
        <FacilitiesSection />

        {/* Jadwal Harian Santri 24 Jam */}
        <DailyScheduleSection />

        {/* Dewan Asatidz & Pengasuh */}
        <TeachersSection />

        {/* Biaya Pendidikan & Kalkulator Masuk */}
        <CostSimulation />

        {/* Portal Pendaftaran Santri Baru (PSB Online) & Cek Status */}
        <RegistrationPortal
          key={`${selectedLevelForPsb}-${portalMode}`}
          initialLevel={selectedLevelForPsb}
          initialMode={portalMode}
        />

        {/* FAQ & Kontak */}
        <FaqAndContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast Consultation Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={MAHAD_INFO.whatsappConsultation}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-xs sm:text-sm font-semibold group cursor-pointer"
          title="Tanya Panitia via WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">Tanya Panitia PSB</span>
        </a>
      </div>
    </div>
  );
}
