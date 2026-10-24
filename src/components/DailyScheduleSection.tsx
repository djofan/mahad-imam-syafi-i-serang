import React, { useState } from 'react';
import { DAILY_SCHEDULE } from '../data/mahadData';
import { Clock, Sun, Moon, BookOpen, Dumbbell, Coffee } from 'lucide-react';

export const DailyScheduleSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ibadah' | 'akademik' | 'ekskul' | 'istirahat'>('all');

  const filteredSchedule = filter === 'all'
    ? DAILY_SCHEDULE
    : DAILY_SCHEDULE.filter((item) => item.category === filter);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'ibadah':
        return { label: 'Ibadah & Dzikir', color: 'text-emerald-700' };
      case 'akademik':
        return { label: 'Tahfidz & Pelajaran', color: 'text-amber-800' };
      case 'ekskul':
        return { label: 'Olahraga & Ekskul', color: 'text-blue-700' };
      case 'istirahat':
        return { label: 'Istirahat & Makan', color: 'text-stone-600' };
      default:
        return { label: 'Kegiatan', color: 'text-stone-600' };
    }
  };

  return (
    <section id="asrama" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Disiplin & Kehidupan Asrama
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Jadwal Harian Santri Putra (24 Jam)
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed text-sm sm:text-base">
            Membiasakan santri hidup teratur, disiplin waktu, menjaga sholat lima waktu berjamaah di masjid, serta memaksimalkan waktu untuk menghafal Al-Qur'an dan menuntut ilmu syar'i.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl max-w-fit border border-stone-200/80">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Semua Waktu ({DAILY_SCHEDULE.length})
          </button>
          <button
            onClick={() => setFilter('ibadah')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'ibadah' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Ibadah Berjamaah
          </button>
          <button
            onClick={() => setFilter('akademik')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'akademik' ? 'bg-white text-amber-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Halaqah & Kelas
          </button>
          <button
            onClick={() => setFilter('ekskul')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'ekskul' ? 'bg-white text-blue-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Olahraga & Ekskul
          </button>
          <button
            onClick={() => setFilter('istirahat')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'istirahat' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Makan & Istirahat
          </button>
        </div>

        {/* Schedule Timeline Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSchedule.map((item, index) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div
                key={index}
                className="bg-stone-50 hover:bg-stone-100/80 p-5 rounded-xl border border-stone-200/90 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <span className="font-mono font-bold text-emerald-800 tabular-nums">
                      {item.time} WIB
                    </span>
                    <span className={`text-2xs font-semibold uppercase tracking-wider ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
