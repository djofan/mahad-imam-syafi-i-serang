import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, CheckCircle2, ShieldCheck, GraduationCap, Award, Users } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface HeroProps {
  onOpenRegistration: () => void;
  onScrollToGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegistration,
  onScrollToGallery,
}) => {
  return (
    <div className="relative bg-[#1C1C1C] text-[#FFF8E6] overflow-hidden border-b border-[#333333]">
      {/* Subtle Background Mesh with Gold Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5B700]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F5B700]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
        {/* SPLIT SCREEN HERO: 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN (Content, Headline, Badges, CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Badges / Accreditations Header */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="default" className="text-2xs sm:text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {MAHAD_INFO.accreditation.split(' &')[0]}
              </Badge>
              <Badge variant="goldOutline" className="text-2xs sm:text-xs font-bold text-[#F5B700] border-[#F5B700] bg-[#1C1C1C]">
                Khusus Santri Putra (Ikhwan)
              </Badge>
              <span className="text-xs text-stone-400 font-medium">
                Kota Serang · Banten
              </span>
            </div>

            {/* Arabic Calligraphy Subtitle */}
            <div className="mb-2.5">
              <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-[#F5B700] tracking-wide font-normal leading-relaxed drop-shadow-sm" dir="rtl">
                {MAHAD_INFO.arabicName}
              </p>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Mencetak Generasi Rabbani, <span className="text-[#F5B700] underline decoration-[#F5B700]/40 decoration-wavy decoration-2">Hafizh 30 Juz</span> & Berakhlak Salaf
            </h1>

            {/* Value Proposition Description */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Pesantren Islam terpadu di Serang, Banten. Memadukan kemurnian aqidah Salafush Shalih dengan target <strong>Tahfidzul Qur'an 30 Juz Mutqin Bersanad</strong>, lingkungan <strong>Bahasa Arab aktif 24 jam</strong>, telaah <strong>Kutubut Turats Fiqih Syafi'i</strong>, dan <strong>ijazah formal resmi negara</strong>.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button
                size="lg"
                variant="default"
                onClick={onOpenRegistration}
                className="gap-2.5 text-sm sm:text-base font-extrabold shadow-xl hover:shadow-[#F5B700]/30 hover:scale-102 transition-transform"
              >
                <GraduationCap className="w-5 h-5 text-[#1C1C1C]" />
                <span>Daftar PSB TA 2025/2026</span>
                <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
              </Button>

              <Button
                size="lg"
                variant="dark"
                asChild
                className="gap-2 text-sm sm:text-base border-[#444444] text-stone-200 hover:text-white hover:border-[#F5B700]"
              >
                <a
                  href={MAHAD_INFO.whatsappConsultation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCall className="w-4 h-4 text-[#F5B700]" />
                  <span>Konsultasi Panitia</span>
                </a>
              </Button>
            </div>

            {/* Micro Trust Points Adjacency */}
            <div className="mt-8 pt-6 border-t border-[#333333] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-1.5 font-medium text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Ijazah Formal Kemenag RI</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Lingkungan Steril Bebas Gadget</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Sanad Riwayat Hafs 'an 'Ashim</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE VISUAL & LIVE ADMISSION CARD */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame with Image & Overlays */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#333333] bg-[#222222] shadow-2xl group">
              
              {/* Campus Visual */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
                <img
                  src="/images/pesantren_campus.jpg"
                  alt="Lansekap Kampus Ma'had Imam Syafi'i Serang"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent" />
                
                {/* Floating Top Chip: Live Admission Status */}
                <div className="absolute top-4 left-4 bg-[#1C1C1C]/90 backdrop-blur-md border border-[#F5B700]/60 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5B700] animate-pulse" />
                  <span className="text-2xs font-bold text-white uppercase tracking-wider">
                    PSB Gelombang I: Dibuka
                  </span>
                </div>

                {/* Floating Bottom Badge on Image */}
                <div className="absolute bottom-4 right-4 bg-[#F5B700] text-[#1C1C1C] px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Target 30 Juz Mutqin</span>
                </div>
              </div>

              {/* Lower Card Content: Quick Admission Simulator & Stats */}
              <div className="p-6 bg-[#222222] text-[#FFF8E6] space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#333333]">
                  <div>
                    <h3 className="font-serif font-bold text-base text-white">
                      Penerimaan Santri Baru TA 2025/2026
                    </h3>
                    <p className="text-xs text-stone-400">
                      Khusus Santri Putra · Kuota Terbatas
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F5B700] bg-[#1C1C1C] px-2.5 py-1 rounded-md border border-[#333333]">
                    Gel. I
                  </span>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#1C1C1C] rounded-xl border border-[#333333]">
                    <div className="text-stone-400 text-2xs uppercase tracking-wider font-semibold">Salafiyah Wustha</div>
                    <div className="font-bold text-white mt-0.5">Setara SMP-IT (3 Thn)</div>
                    <div className="text-[#F5B700] text-2xs mt-1 font-semibold">Target 15 Juz Mutqin</div>
                  </div>
                  <div className="p-3 bg-[#1C1C1C] rounded-xl border border-[#333333]">
                    <div className="text-stone-400 text-2xs uppercase tracking-wider font-semibold">Salafiyah Ulya</div>
                    <div className="font-bold text-white mt-0.5">Setara SMA-IT (3 Thn)</div>
                    <div className="text-[#F5B700] text-2xs mt-1 font-semibold">Target 30 Juz Bersanad</div>
                  </div>
                </div>

                {/* Fast Action inside Hero Visual */}
                <Button
                  variant="default"
                  onClick={onOpenRegistration}
                  className="w-full text-xs sm:text-sm font-extrabold shadow-md"
                >
                  <span>Daftar Sekarang & Cek Persyaratan</span>
                  <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
                </Button>

              </div>
            </div>

            {/* Floating Decorative Metric Pill */}
            <div className="hidden sm:flex absolute -bottom-3.5 left-4 bg-[#1C1C1C] border border-[#F5B700] p-3 rounded-2xl shadow-xl items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#F5B700] flex items-center justify-center text-[#1C1C1C] font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Rasio Pembimbing 1:12</div>
                <div className="text-2xs text-[#F5B700] font-medium">Bimbingan Halaqah Intensif</div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM STAT STRIP: 4 METRIC COUNTERS */}
        <div className="mt-14 pt-8 border-t border-[#333333] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {MAHAD_INFO.stats.map((stat, idx) => (
            <div key={idx} className="bg-[#242424]/70 p-4 rounded-2xl border border-[#333333] flex flex-col justify-between hover:border-[#F5B700]/50 transition-colors">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5B700] tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-stone-400 mt-0.5 font-medium">
                {stat.unit}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
