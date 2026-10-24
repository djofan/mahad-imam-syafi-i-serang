import React from 'react';
import { FEATURES_ZIGZAG } from '../data/mahadData';
import { CheckCircle2, Sparkles, Shield, BookCheck, HeartHandshake, Compass } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const FeaturesZigZag: React.FC = () => {
  const assuranceCards = [
    {
      icon: <Shield className="w-5 h-5 text-[#F5B700]" />,
      title: "Sanad Qira'ah Bersambung",
      desc: "Sanad riwayat Hafs 'an 'Ashim bersambung hingga Rasulullah shallallahu 'alaihi wa sallam.",
    },
    {
      icon: <BookCheck className="w-5 h-5 text-[#F5B700]" />,
      title: "Ijazah Formal Kemenag RI",
      desc: "Lulusan memegang ijazah formal negara dan dapat melanjutkan ke sekolah umum atau PTN/Madinah.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#F5B700]" />,
      title: "Lingkungan Bebas Gadget",
      desc: "Steril dari intervensi smartphone untuk menjaga kejernihan akal dan kefokusan hafalan santri.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#F5B700]" />,
      title: "Asrama Higienis & Asri",
      desc: "Fasilitas asrama bersih, makanan bergizi 3x sehari, dan pengasuhan musyrif 24 jam penuh kasih sayang.",
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#FFF8E6] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Keunggulan & Karakteristik
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Mengapa Memilih Ma'had Imam Syafi'i Serang?
          </h2>
          <p className="mt-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            Kombinasi kurikulum terpadu yang dirancang spesifik untuk membina intelektual, hafalan Al-Qur'an mutqin, serta adab mulia santri putra bermanhaj Salafush Shalih.
          </p>
        </div>

        {/* ZIG-ZAG FEATURE BLOCKS */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURES_ZIGZAG.map((feat) => (
            <div
              key={feat.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                feat.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Image Box */}
              <div className={`lg:col-span-6 ${feat.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#EADBBA] shadow-lg group bg-white">
                  <div className="aspect-16/10 sm:aspect-16/11 w-full overflow-hidden bg-stone-200">
                    <img
                      src={feat.imageUrl}
                      alt={feat.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Floating Metric Callout Pill */}
                  <div className="absolute bottom-4 left-4 bg-[#1C1C1C]/90 backdrop-blur-md text-[#FFF8E6] px-4 py-2 rounded-2xl border border-[#F5B700]/70 flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-xl bg-[#F5B700] text-[#1C1C1C] flex items-center justify-center font-bold text-xs">
                      {feat.number}
                    </div>
                    <div>
                      <div className="text-2xs text-stone-300 font-semibold uppercase tracking-wider">{feat.metricLabel}</div>
                      <div className="text-xs sm:text-sm font-bold text-[#F5B700]">{feat.metricValue}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Description Content */}
              <div className={`lg:col-span-6 ${feat.reverse ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono font-bold text-xs text-[#F5B700] bg-[#1C1C1C] px-3 py-1 rounded-full border border-[#333333]">
                    Pilar {feat.number}
                  </span>
                  <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    {feat.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1C1C] mt-2 mb-4 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                  {feat.description}
                </p>

                {/* Bullets List */}
                <div className="space-y-3 pt-2 border-t border-[#EADBBA]">
                  {feat.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#FFF3CC] border border-[#FCD566] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1C1C1C]" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 4-CARD INSTITUTIONAL ASSURANCE GRID */}
        <div className="mt-20 pt-16 border-t border-[#EADBBA]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C1C]">
              Jaminan Kualitas & Kenyamanan Pendidikan
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Standar terpercaya yang kami terapkan untuk memastikan keamanan ruhani dan fisik santri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assuranceCards.map((card, idx) => (
              <Card
                key={idx}
                className="bg-white border-[#EADBBA] hover:border-[#F5B700] hover:shadow-lg transition-all rounded-2xl group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1C1C] border border-[#333333] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    {card.icon}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1C1C1C] mb-2 group-hover:text-[#F5B700] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {card.desc}
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
