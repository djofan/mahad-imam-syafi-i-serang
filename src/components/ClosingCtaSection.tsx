import React from 'react';
import { ArrowRight, PhoneCall, Download, GraduationCap, ShieldCheck, Sparkles, BookOpen, Clock } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ClosingCtaProps {
  onOpenRegistration: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaProps> = ({ onOpenRegistration }) => {
  return (
    <section className="relative bg-[#1C1C1C] text-[#FFF8E6] py-20 sm:py-28 overflow-hidden border-t border-[#333333]">
      
      {/* Golden Ambient Gradients in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F5B700]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#F5B700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Urgent Live Kuota Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#242424] border border-[#F5B700]/60 text-xs text-[#FFF8E6] font-bold mb-6 shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5B700] animate-ping" />
          <span className="text-[#F5B700]">Penerimaan Santri Baru TA 2025/2026</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Gelombang I Sedang Dibuka</span>
        </div>

        {/* Hadith Banner */}
        <div className="mb-6">
          <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-[#F5B700] tracking-wide font-normal leading-relaxed" dir="rtl">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>
          <p className="text-xs text-stone-400 italic mt-1 font-medium">
            "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya." (HR. Al-Bukhari)
          </p>
        </div>

        {/* Closing Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight sm:leading-tight">
          Investasi Terbaik untuk Masa Depan Akhlak & Al-Qur'an Ananda
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
          Berikan bekal terbaik bagi putra Anda dengan bimbingan akidah salafush shalih, hafalan Al-Qur'an 30 Juz bersanad, serta kemandirian hidup yang kokoh di Ma'had Imam Syafi'i Serang.
        </p>

        {/* Main Dual CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            onClick={onOpenRegistration}
            className="h-14 px-8 text-sm sm:text-base font-extrabold shadow-2xl hover:shadow-[#F5B700]/30 hover:scale-105 transition-all gap-3"
          >
            <GraduationCap className="w-5 h-5 text-[#1C1C1C]" />
            <span>Daftar Santri Baru (PSB Online)</span>
            <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
          </Button>

          <Button
            size="lg"
            variant="dark"
            asChild
            className="h-14 px-8 text-sm sm:text-base border-2 border-[#444444] text-[#FFF8E6] hover:border-[#F5B700] hover:text-[#F5B700] transition-colors gap-2.5"
          >
            <a
              href={MAHAD_INFO.whatsappConsultation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall className="w-4 h-4 text-[#F5B700]" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </Button>
        </div>

        {/* Secondary Download Action */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <a
            href="#biaya"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-400 hover:text-[#F5B700] transition-colors py-1 underline-offset-4 hover:underline"
          >
            <Download className="w-4 h-4 text-[#F5B700]" />
            <span>Lihat Rincian Biaya & Brosur PDF Lengkap</span>
          </a>
        </div>

        {/* 4 Guarantees Strip */}
        <div className="mt-14 pt-10 border-t border-[#333333] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-white">Akreditasi A</div>
              <div className="text-2xs text-stone-400 mt-0.5">Ijazah Resmi Kemenag RI</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-white">Sanad Qira'ah</div>
              <div className="text-2xs text-stone-400 mt-0.5">Riwayat Hafs 'an 'Ashim</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-white">Bebas Gadget</div>
              <div className="text-2xs text-stone-400 mt-0.5">Lingkungan Fokus Menghafal</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-white">Asrama 24 Jam</div>
              <div className="text-2xs text-stone-400 mt-0.5">Rasio Pembina 1:12 Santri</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
