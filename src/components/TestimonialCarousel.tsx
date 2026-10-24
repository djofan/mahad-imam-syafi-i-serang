import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/mahadData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = TESTIMONIALS.length;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const active = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimoni" 
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#EADBBA]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Pengalaman & Bukti Nyata
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Kata Mereka Tentang Ma'had Imam Syafi'i
          </h2>
          <p className="mt-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            Testimoni jujur dari para orang tua, wali santri, dan alumni yang telah mempercayakan pendidikan akidah dan Al-Qur'an putra mereka kepada kami.
          </p>
        </div>

        {/* FEATURED CAROUSEL CARD */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1C1C1C] text-[#FFF8E6] border-2 border-[#333333] shadow-2xl rounded-3xl overflow-hidden relative">
            
            {/* Ambient Background Gold Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5B700]/10 rounded-full blur-3xl pointer-events-none" />

            <CardContent className="p-8 sm:p-12 relative z-10">
              
              {/* Top Bar: Stars & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#333333]">
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1.5 text-[#F5B700]">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-white ml-2">
                    5.0 / 5.0
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="gold" className="text-2xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1C1C1C]" />
                    Wali Santri Terverifikasi
                  </Badge>
                  <Badge variant="dark" className="text-2xs text-[#F5B700] border-[#444444]">
                    {active.achievementBadge}
                  </Badge>
                </div>
              </div>

              {/* Quote Icon & Text */}
              <div className="my-8">
                <Quote className="w-10 h-10 text-[#F5B700]/30 mb-3" />
                <p className="font-serif text-lg sm:text-2xl text-white leading-relaxed italic">
                  "{active.quote}"
                </p>
              </div>

              {/* Author & Santri Details */}
              <div className="pt-6 border-t border-[#333333] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                <div className="flex items-center gap-4">
                  {/* Avatar Initials */}
                  <div className="w-13 h-13 rounded-2xl bg-[#F5B700] text-[#1C1C1C] font-serif font-bold text-xl flex items-center justify-center shrink-0 shadow-md">
                    {active.name.split(' ')[1]?.[0] || active.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                      {active.name}
                    </h4>
                    <p className="text-xs text-stone-300">
                      {active.role} · <strong className="text-[#F5B700]">{active.location}</strong>
                    </p>
                    <p className="text-2xs text-stone-400 mt-0.5">
                      Putra: <strong className="text-white">{active.santriName}</strong> ({active.santriLevel})
                    </p>
                  </div>
                </div>

                {/* Carousel Controls (Prev / Next Buttons) */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <Button
                    size="icon"
                    variant="dark"
                    onClick={prevTestimonial}
                    className="w-11 h-11 rounded-xl border-[#444444] text-[#FFF8E6] hover:border-[#F5B700] hover:text-[#F5B700] shadow-sm"
                    aria-label="Testimoni Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="dark"
                    onClick={nextTestimonial}
                    className="w-11 h-11 rounded-xl border-[#444444] text-[#FFF8E6] hover:border-[#F5B700] hover:text-[#F5B700] shadow-sm"
                    aria-label="Testimoni Selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

              </div>

            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-[#F5B700]'
                    : 'w-2.5 h-2.5 bg-[#EADBBA] hover:bg-stone-400'
                }`}
                aria-label={`Lihat testimoni ke-${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* MINI SUMMARY ROW OF OTHER TESTIMONIALS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <Card
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`border p-5 rounded-2xl cursor-pointer transition-all ${
                currentIndex === idx
                  ? 'border-2 border-[#F5B700] bg-white shadow-md'
                  : 'border-[#EADBBA] bg-[#FFF8E6] hover:bg-white hover:border-stone-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xs font-bold uppercase tracking-wider text-stone-500">
                  {item.location}
                </span>
                <span className="text-2xs font-bold text-[#1C1C1C] bg-[#FFF3CC] px-2 py-0.5 rounded border border-[#FCD566]">
                  {item.achievementBadge}
                </span>
              </div>
              <p className="text-xs text-stone-700 line-clamp-2 italic mb-3">
                "{item.quote}"
              </p>
              <div className="text-xs font-serif font-bold text-[#1C1C1C]">
                {item.name}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
