import React, { useState } from 'react';
import { CheckCircle2, Award, Clock, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { PROGRAMS } from '../data/mahadData';
import { EducationLevel } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (level: EducationLevel) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activeTab, setActiveTab] = useState<EducationLevel>('wustha');

  const selectedProgram = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  return (
    <section id="program" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Jenjang & Kurikulum
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Program Pendidikan Santri Putra
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            Kurikulum terintegrasi memadukan pendidikan formal berijazah negara dengan pendalaman ilmu syar'i dan tahfidzul Qur'an mutqin.
          </p>
        </div>

        {/* Segmented Program Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl max-w-fit border border-stone-200/80">
          {PROGRAMS.map((prog) => {
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {prog.name.split(' (')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Program Card Showcase */}
        <div className="mt-8 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info: Title, Description, and Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 mb-3">
                <span className="text-emerald-800 font-semibold">{selectedProgram.formalEquivalent}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-stone-600">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedProgram.duration}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-600">Kuota: {selectedProgram.quota} Santri</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                {selectedProgram.name}
              </h3>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                {selectedProgram.description}
              </p>

              {/* Target Hafalan Highlight */}
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl mb-6">
                <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-700" />
                  Target Capaian Tahfidz
                </div>
                <div className="text-stone-900 font-semibold text-sm sm:text-base">
                  {selectedProgram.targetHafalan}
                </div>
              </div>

              {/* Kurikulum Unggulan */}
              <h4 className="text-xs uppercase tracking-wider font-bold text-stone-800 mb-3">
                Materi & Kurikulum Unggulan:
              </h4>
              <ul className="space-y-2.5">
                {selectedProgram.curriculumHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Info: Profil Kelulusan & Action Box */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Profil Lulusan
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900 mb-3">
                  Output & Standar Kompetensi Santri
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {selectedProgram.gradProfile}
                </p>

                <div className="space-y-3 pt-4 border-t border-stone-100 text-xs text-stone-600">
                  <div className="flex items-center justify-between">
                    <span>Sistem Asrama:</span>
                    <strong className="text-stone-800">Boarding School 24 Jam</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Ijazah Kelulusan:</span>
                    <strong className="text-emerald-800">Formal Kemenag & Syahadah Ma'had</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Bahasa Pengantar:</span>
                    <strong className="text-stone-800">Arab & Indonesia</strong>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-3">
                <button
                  onClick={() => onSelectProgram(selectedProgram.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Daftar {selectedProgram.name.split(' (')[0]}</span>
                </button>

                <div className="text-center text-xs text-stone-500">
                  Pendaftaran Santri Baru TA 2025/2026 Gelombang I Dibuka
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
