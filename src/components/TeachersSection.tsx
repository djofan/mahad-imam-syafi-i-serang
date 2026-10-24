import React from 'react';
import { TEACHERS } from '../data/mahadData';
import { GraduationCap, Award, BookCheck } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Tenaga Pendidik
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Dewan Asatidz & Pembina Pesantren
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed text-sm sm:text-base">
            Dibimbing langsung oleh para asatidz yang berkompeten di bidangnya, lulusan universitas Islam terkemuka dunia Islam dan pemegang sanad qira'ah Al-Qur'an.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-stone-50 rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-emerald-600/50 transition-colors shadow-2xs"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-emerald-200 font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-inner">
                  {teacher.name.split(' ')[1]?.[0] || 'U'}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                  {teacher.title}
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 mb-2 leading-snug">
                  {teacher.name}
                </h3>

                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  {teacher.education}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80 space-y-1.5 text-xs">
                <div className="text-stone-500">
                  Bidang: <strong className="text-stone-800">{teacher.specialty}</strong>
                </div>
                <div className="text-stone-500">
                  Pengalaman: <strong className="text-stone-800 tabular-nums">{teacher.experienceYears} Tahun</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
