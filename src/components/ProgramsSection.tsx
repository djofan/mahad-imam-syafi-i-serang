import React, { useState } from 'react';
import { CheckCircle2, Award, Clock, GraduationCap, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../data/mahadData';
import { EducationLevel } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProgramsSectionProps {
  onSelectProgram: (level: EducationLevel) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activeTab, setActiveTab] = useState<EducationLevel>('wustha');

  const selectedProgram = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  return (
    <section id="program" className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Jenjang & Kurikulum
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Program Pendidikan Santri Putra
          </h2>
          <p className="mt-3 text-stone-700 leading-relaxed text-base sm:text-lg">
            Kurikulum terintegrasi memadukan pendidikan formal berijazah resmi negara dengan pendalaman ilmu syar'i dan tahfidzul Qur'an mutqin.
          </p>
        </div>

        {/* Segmented Program Filter Tabs using shadcn Tabs */}
        <div className="mt-8">
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as EducationLevel)}>
            <TabsList className="bg-[#FFF8E6] border border-[#EADBBA] p-1.5 flex flex-wrap max-w-fit">
              {PROGRAMS.map((prog) => (
                <TabsTrigger
                  key={prog.id}
                  value={prog.id}
                  className="data-[state=active]:bg-[#1C1C1C] data-[state=active]:text-[#FFF8E6] text-xs sm:text-sm font-bold"
                >
                  {prog.name.split(' (')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Active Program Card Showcase */}
        <div className="mt-8 bg-[#FFF8E6] rounded-2xl border border-[#EADBBA] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info: Title, Description, and Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="dark" className="text-xs">
                  {selectedProgram.formalEquivalent}
                </Badge>
                <Badge variant="cream" className="text-xs flex items-center gap-1 text-stone-700">
                  <Clock className="w-3.5 h-3.5 text-[#F5B700]" />
                  {selectedProgram.duration}
                </Badge>
                <Badge variant="goldOutline" className="text-xs text-[#1C1C1C]">
                  Kuota: {selectedProgram.quota} Santri
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1C1C] mb-4">
                {selectedProgram.name}
              </h3>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                {selectedProgram.description}
              </p>

              {/* Target Hafalan Highlight */}
              <div className="p-5 bg-white border-2 border-[#F5B700] rounded-2xl mb-6 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-[#1C1C1C] font-extrabold mb-1.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F5B700]" />
                  Target Capaian Tahfidz
                </div>
                <div className="text-[#1C1C1C] font-bold text-base sm:text-lg">
                  {selectedProgram.targetHafalan}
                </div>
              </div>

              {/* Kurikulum Unggulan */}
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#1C1C1C] mb-3">
                Materi & Kurikulum Unggulan:
              </h4>
              <ul className="space-y-3">
                {selectedProgram.curriculumHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Info: Profil Kelulusan & Action Box with shadcn Card */}
            <Card className="lg:col-span-5 bg-white border-[#EADBBA] shadow-md flex flex-col justify-between">
              <CardContent className="p-6 sm:p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-1.5">
                  Profil Lulusan
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1C1C1C] mb-3">
                  Output & Standar Kompetensi Santri
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {selectedProgram.gradProfile}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#EADBBA] text-xs text-stone-700">
                  <div className="flex items-center justify-between">
                    <span>Sistem Asrama:</span>
                    <strong className="text-[#1C1C1C]">Boarding School 24 Jam</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Ijazah Kelulusan:</span>
                    <strong className="text-[#1C1C1C] font-bold">Formal Kemenag & Syahadah Ma'had</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Bahasa Pengantar:</span>
                    <strong className="text-[#1C1C1C]">Arab & Indonesia</strong>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#EADBBA] flex flex-col gap-3">
                  <Button
                    size="lg"
                    variant="default"
                    onClick={() => onSelectProgram(selectedProgram.id)}
                    className="w-full text-sm font-bold shadow-md hover:shadow-lg"
                  >
                    <GraduationCap className="w-4 h-4 text-[#1C1C1C]" />
                    <span>Daftar {selectedProgram.name.split(' (')[0]}</span>
                  </Button>

                  <div className="text-center text-xs text-stone-500 font-medium">
                    Pendaftaran Santri Baru TA 2025/2026 Gelombang I Dibuka
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
};
