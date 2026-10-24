import React from 'react';
import { ShieldCheck, BookMarked, Check, HeartHandshake, Compass } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';

export const ProfileSection: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Tahfidzul Qur'an Mutqin Bersanad",
      desc: "Menghafal 30 Juz dengan tajwid makharijul huruf yang teliti melalui bimbingan para Masyaikh dan Ustadz pemegang sanad qira'ah riwayat Hafs 'an 'Ashim.",
    },
    {
      number: "02",
      title: "Bahasa Arab Aktif & Kitab Turats",
      desc: "Bahasa Arab sebagai bahasa percakapan harian di lingkungan pesantren serta penguasaan dasar nahwu shorof untuk mengkaji kitab para ulama secara mandiri.",
    },
    {
      number: "03",
      title: "Penanaman Adab & Akhlak Salafush Shalih",
      desc: "Memprioritaskan pembinaan adab penuntut ilmu (Ta'zhimul 'Ilm), birrul walidain, sholat berjamaah di shaf terdepan, dan keteladanan akhlak mulia.",
    },
    {
      number: "04",
      title: "Kemandirian & Olahraga Sunnah",
      desc: "Latihan rutin panahan (archery), olahraga fisik, kemandirian asrama, serta keterampilan teknologi informasi yang bermanfaat untuk dakwah.",
    },
  ];

  return (
    <section id="profil" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Tentang Lembaga
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Mengenal Ma'had Imam Syafi'i Serang
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            Berdiri sejak tahun 2014 di Serang, Banten, sebagai ikhtiar melahirkan kader ulama dan cendekiawan muslim yang beraqidah lurus, beradab mulia, dan siap memimpin peradaban umat.
          </p>
        </div>

        {/* 2-Column Split: Sejarah & Visi Misi */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sejarah & Identitas */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">
                Sejarah Singkat & Komitmen Lembaga
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                Ma'had Imam Syafi'i Serang didirikan oleh para asatidz alumni Universitas Islam Madinah dan LIPIA bersama para tokoh masyarakat Banten yang mendambakan lingkungan pendidikan Islam yang murni, teratur, dan steril dari pergaulan bebas.
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Nama besar <strong>Al-Imam Muhammad bin Idris Asy-Syafi'i rahimahullah</strong> disematkan sebagai teladan ketekunan dalam menghafal Al-Qur'an sejak usia dini, kedalaman penguasaan bahasa Arab, keluasan fiqih, serta keagungan adab terhadap guru dan ilmu.
              </p>

              {/* Quote of Imam Syafi'i */}
              <div className="bg-stone-50 border-y border-stone-200 py-4 px-5 my-4">
                <p className="font-arabic text-lg sm:text-xl text-stone-800 text-right leading-loose" dir="rtl">
                  تَعَلَّمْ فَلَيْسَ الْمَرْءُ يُولَدُ عَالِمًا · وَلَيْسَ أَخُو عِلْمٍ كَمَنْ هُوَ جَاهِلُ
                </p>
                <p className="text-xs text-stone-600 italic mt-2">
                  "Belajarlah, karena tidak ada seorang pun yang terlahir dalam keadaan berilmu; dan orang yang berilmu tidaklah sama dengan orang yang bodoh." — Diwan Al-Imam Asy-Syafi'i
                </p>
              </div>
            </div>

            {/* Legalitas Box */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-1.5 font-medium text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Legalitas Resmi Kemenag RI</span>
              </div>
              <span>SK No. 421/Kd.28.01/PP.00.7/2016</span>
              <span>NSPP: 510036730042</span>
            </div>
          </div>

          {/* Right Column: Visi & Misi */}
          <div className="lg:col-span-5 bg-emerald-900 text-emerald-50 p-6 sm:p-8 rounded-xl flex flex-col justify-between shadow-md">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                Arah & Landasan
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                Visi Pesantren
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed mb-6">
                "Menjadi lembaga pendidikan Islam unggulan dan rujukan dalam mencetak generasi hafizh Al-Qur'an bermanhaj Salafush Shalih, berkarakter mandiri, dan berkontribusi nyata bagi kejayaan Islam dan bangsa."
              </p>

              <h4 className="text-base font-semibold text-white mb-3">
                Misi Utama:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/85">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Membimbing santri putra menyelesaikan hafalan Al-Qur'an 30 Juz secara mutqin dan bersanad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Menanamkan aqidah ahlussunnah wal jama'ah yang selamat dari penyimpangan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Membudayakan bahasa Arab lisan dan tulisan di lingkungan asrama pesantren.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Membekali santri dengan adab islami, kemandirian hidup, dan olahraga sunnah.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-800 text-xs text-emerald-300/80">
              Khusus Santri Putra · Serang Banten
            </div>
          </div>

        </div>

        {/* 4 Pilar Keunggulan */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              4 Pilar Pendidikan Ma'had
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Prinsip terpadu dalam membina mental, ruhani, dan intelektual para santri ikhwan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div 
                key={pillar.number} 
                className="bg-white p-6 rounded-lg border border-stone-200/80 hover:border-emerald-600/50 transition-colors shadow-2xs"
              >
                <div className="text-xl font-serif font-bold text-emerald-800 mb-2">
                  {pillar.number}.
                </div>
                <h4 className="font-semibold text-stone-900 text-sm sm:text-base mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
