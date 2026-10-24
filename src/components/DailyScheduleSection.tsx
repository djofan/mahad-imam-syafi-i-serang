import React, { useState } from 'react';
import { DAILY_SCHEDULE } from '../data/mahadData';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const DailyScheduleSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ibadah' | 'akademik' | 'ekskul' | 'istirahat'>('all');

  const filteredSchedule = filter === 'all'
    ? DAILY_SCHEDULE
    : DAILY_SCHEDULE.filter((item) => item.category === filter);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'ibadah':
        return { label: 'Ibadah & Dzikir', variant: 'default' as const };
      case 'akademik':
        return { label: 'Tahfidz & Pelajaran', variant: 'dark' as const };
      case 'ekskul':
        return { label: 'Olahraga & Ekskul', variant: 'gold' as const };
      case 'istirahat':
        return { label: 'Istirahat & Makan', variant: 'cream' as const };
      default:
        return { label: 'Kegiatan', variant: 'cream' as const };
    }
  };

  return (
    <section id="asrama" className="py-16 sm:py-24 bg-[#FFF8E6] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Disiplin & Kehidupan Asrama
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Jadwal Harian Santri Putra (24 Jam)
          </h2>
          <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            Membiasakan santri hidup teratur, disiplin waktu, menjaga sholat lima waktu berjamaah di masjid, serta memaksimalkan waktu untuk menghafal Al-Qur'an dan menuntut ilmu syar'i.
          </p>
        </div>

        {/* Filter Bar with shadcn Button */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? "dark" : "secondary"}
            size="sm"
            onClick={() => setFilter('all')}
            className="text-xs font-bold"
          >
            Semua Waktu ({DAILY_SCHEDULE.length})
          </Button>
          <Button
            variant={filter === 'ibadah' ? "dark" : "secondary"}
            size="sm"
            onClick={() => setFilter('ibadah')}
            className="text-xs font-bold"
          >
            Ibadah Berjamaah
          </Button>
          <Button
            variant={filter === 'akademik' ? "dark" : "secondary"}
            size="sm"
            onClick={() => setFilter('akademik')}
            className="text-xs font-bold"
          >
            Halaqah & Kelas
          </Button>
          <Button
            variant={filter === 'ekskul' ? "dark" : "secondary"}
            size="sm"
            onClick={() => setFilter('ekskul')}
            className="text-xs font-bold"
          >
            Olahraga & Ekskul
          </Button>
          <Button
            variant={filter === 'istirahat' ? "dark" : "secondary"}
            size="sm"
            onClick={() => setFilter('istirahat')}
            className="text-xs font-bold"
          >
            Makan & Istirahat
          </Button>
        </div>

        {/* Schedule Timeline Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSchedule.map((item, index) => {
            const badge = getCategoryBadge(item.category);
            return (
              <Card
                key={index}
                className="bg-white hover:bg-[#FFFDF8] border-[#EADBBA] hover:border-[#F5B700] hover:shadow-md transition-all flex flex-col justify-between rounded-xl"
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono font-bold text-xs text-[#F5B700] bg-[#1C1C1C] px-2.5 py-1 rounded-md tabular-nums tracking-wide shadow-2xs">
                      {item.time} WIB
                    </span>
                    <Badge variant={badge.variant} className="text-2xs py-0.5 px-2">
                      {badge.label}
                    </Badge>
                  </div>

                  <h3 className="font-serif font-bold text-[#1C1C1C] text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
