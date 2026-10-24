import React from 'react';
import { ArrowRight, Image as ImageIcon, ShieldCheck, Download, Award, Users, BookOpen } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';

interface HeroProps {
  onOpenRegistration: () => void;
  onScrollToGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegistration,
  onScrollToGallery,
}) => {
  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-hidden">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/pesantren_campus_view_1792804369593.jpg"
          alt="Lansekap Kampus Ma'had Imam Syafi'i Serang"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        
        {/* Unboxed Metadata Header: No pill boxes, clean text with separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6 font-medium">
          <span className="text-emerald-400 font-semibold">{MAHAD_INFO.accreditation}</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>{MAHAD_INFO.nspp}</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="text-amber-300">Khusus Santri Putra (Ikhwan)</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Serang, Banten</span>
        </div>

        {/* Arabic Calligraphy Header */}
        <div className="mb-4">
          <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-amber-200/90 tracking-wide font-normal" dir="rtl">
            {MAHAD_INFO.arabicName}
          </p>
        </div>

        {/* Main Display Headline with text-wrap: balance */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight lg:leading-tight">
            Mencetak Generasi Rabbani, Berakhlak Salaf & Berwawasan Luas
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-3xl">
            Pondok Pesantren Islam Modern terpadu di Serang, Banten. Memadukan kemurnian manhaj Salafush Shalih dengan target <strong>Tahfidzul Qur'an 30 Juz Mutqin Bersanad</strong>, penguasaan <strong>Bahasa Arab aktif</strong>, telaah <strong>Kutubut Turats Fiqih Syafi'i</strong>, serta kurikulum formal berijazah resmi negara.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenRegistration}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all cursor-pointer"
          >
            <span>Daftar Santri Baru TA 2025/2026</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToGallery}
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            <span>Lihat Galeri Santri Putra</span>
          </button>

          <a
            href="#biaya"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium text-stone-400 hover:text-stone-200 transition-colors"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Brosur & Rincian Biaya</span>
          </a>
        </div>

        {/* Operational / Trust Utility Strip: Claim-to-proof adjacency */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {MAHAD_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-300 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-stone-400 mt-0.5">
                {stat.unit}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
