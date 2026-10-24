import React from 'react';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      title: "Penanaman Adab & Akhlak Salaf",
      desc: "Memprioritaskan pembinaan adab penuntut ilmu (Ta'zhimul 'Ilm), birrul walidain, sholat berjamaah di shaf terdepan, dan keteladanan akhlak mulia.",
    },
    {
      number: "04",
      title: "Kemandirian & Olahraga Sunnah",
      desc: "Latihan rutin panahan (archery), olahraga fisik, kemandirian asrama, serta keterampilan teknologi informasi yang bermanfaat untuk dakwah.",
    },
  ];

  return (
    <section id="profil" className="py-16 sm:py-24 bg-[#FFF8E6] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1C1C1C]" />
            Tentang Lembaga
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Mengenal Ma'had Imam Syafi'i Serang
          </h2>
          <p className="mt-3 text-stone-700 leading-relaxed text-base sm:text-lg">
            Berdiri sejak tahun 2014 di Kota Serang, Banten, sebagai ikhtiar melahirkan kader ulama dan cendekiawan muslim yang beraqidah lurus, beradab mulia, dan siap memimpin peradaban umat.
          </p>
        </div>

        {/* 2-Column Split: Sejarah & Visi Misi */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sejarah & Identitas */}
          <Card className="lg:col-span-7 bg-white border-[#EADBBA] shadow-sm flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-[#1C1C1C]">
                Sejarah Singkat & Komitmen Lembaga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Ma'had Imam Syafi'i Serang didirikan oleh para asatidz alumni Universitas Islam Madinah dan LIPIA bersama para tokoh masyarakat Banten yang mendambakan lingkungan pendidikan Islam yang murni, teratur, dan steril dari pergaulan bebas.
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Nama besar <strong className="text-[#1C1C1C]">Al-Imam Muhammad bin Idris Asy-Syafi'i rahimahullah</strong> disematkan sebagai teladan ketekunan dalam menghafal Al-Qur'an sejak usia dini, kedalaman penguasaan bahasa Arab, keluasan fiqih, serta keagungan adab terhadap guru dan ilmu.
              </p>

              {/* Quote of Imam Syafi'i with Gold Accent */}
              <div className="bg-[#FFFAEE] border-l-4 border-[#F5B700] p-5 my-4 rounded-r-xl border-y border-r border-[#EADBBA]">
                <p className="font-arabic text-xl sm:text-2xl text-[#1C1C1C] text-right leading-loose" dir="rtl">
                  تَعَلَّمْ فَلَيْسَ الْمَرْءُ يُولَدُ عَالِمًا · وَلَيْسَ أَخُو عِلْمٍ كَمَنْ هُوَ جَاهِلُ
                </p>
                <p className="text-xs text-stone-600 italic mt-2.5 font-medium">
                  "Belajarlah, karena tidak ada seorang pun yang terlahir dalam keadaan berilmu; dan orang yang berilmu tidaklah sama dengan orang yang bodoh." — Diwan Al-Imam Asy-Syafi'i
                </p>
              </div>

              {/* Legalitas Box */}
              <div className="pt-4 border-t border-[#EADBBA] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-bold text-[#1C1C1C]">
                  <ShieldCheck className="w-4 h-4 text-[#F5B700] shrink-0" />
                  <span>Legalitas Resmi Kemenag RI</span>
                </div>
                <span className="font-medium">SK No. 421/Kd.28.01/PP.00.7/2016</span>
                <span className="font-medium">NSPP: 510036730042</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Visi & Misi (Rich Onyx Dark Card with Gold Accents) */}
          <Card variant="dark" className="lg:col-span-5 bg-[#1C1C1C] text-[#FFF8E6] border-[#333333] flex flex-col justify-between shadow-xl">
            <CardHeader>
              <Badge variant="gold" className="w-fit mb-2">
                Arah & Landasan
              </Badge>
              <CardTitle className="text-2xl sm:text-3xl text-white">
                Visi Pesantren
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed italic bg-[#262626] p-4 rounded-xl border border-[#3A3A3A]">
                "Menjadi lembaga pendidikan Islam unggulan dan rujukan dalam mencetak generasi hafizh Al-Qur'an bermanhaj Salafush Shalih, berkarakter mandiri, dan berkontribusi nyata bagi kejayaan Islam dan bangsa."
              </p>

              <div>
                <h4 className="text-base font-bold text-[#F5B700] mb-3 uppercase tracking-wider text-xs">
                  Misi Utama:
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-200">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                    <span>Membimbing santri putra menyelesaikan hafalan Al-Qur'an 30 Juz secara mutqin dan bersanad.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                    <span>Menanamkan aqidah ahlussunnah wal jama'ah yang selamat dari penyimpangan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                    <span>Membudayakan bahasa Arab lisan dan tulisan di lingkungan asrama pesantren.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                    <span>Membekali santri dengan adab islami, kemandirian hidup, dan olahraga sunnah.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#333333] text-xs text-[#F5B700] font-semibold flex items-center justify-between">
                <span>Khusus Santri Putra (Ikhwan)</span>
                <span>Serang, Banten</span>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* 4 Pilar Keunggulan using shadcn Card */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1C1C]">
              4 Pilar Pendidikan Ma'had
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Prinsip terpadu dalam membina mental, ruhani, dan intelektual para santri ikhwan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <Card 
                key={pillar.number} 
                className="bg-white border-[#EADBBA] hover:border-[#F5B700] hover:shadow-lg transition-all group duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF3CC] border border-[#FCD566] flex items-center justify-center text-xl font-serif font-bold text-[#1C1C1C] group-hover:bg-[#F5B700] transition-colors mb-3">
                    {pillar.number}
                  </div>
                  <CardTitle className="text-base sm:text-lg text-[#1C1C1C] font-bold group-hover:text-[#1C1C1C]">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
