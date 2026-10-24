import React from 'react';
import { TEACHERS } from '../data/mahadData';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const TeachersSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tenaga Pendidik
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Dewan Asatidz & Pembina Pesantren
          </h2>
          <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            Dibimbing langsung oleh para asatidz yang berkompeten di bidangnya, lulusan universitas Islam terkemuka dunia Islam dan pemegang sanad qira'ah Al-Qur'an.
          </p>
        </div>

        {/* Teachers Grid with shadcn Card */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS.map((teacher) => (
            <Card
              key={teacher.id}
              className="bg-white rounded-2xl border-[#EADBBA] hover:border-[#F5B700] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <CardContent className="p-6">
                <div className="w-13 h-13 rounded-2xl bg-[#1C1C1C] border-2 border-[#F5B700] text-[#F5B700] font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  {teacher.name.split(' ')[1]?.[0] || 'U'}
                </div>

                <Badge variant="cream" className="text-2xs font-bold uppercase tracking-wider mb-2 text-[#1C1C1C]">
                  {teacher.title}
                </Badge>

                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1C1C] group-hover:text-[#F5B700] transition-colors mb-2 leading-snug">
                  {teacher.name}
                </h3>

                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  {teacher.education}
                </p>

                <div className="pt-4 border-t border-[#EADBBA] space-y-2 text-xs">
                  <div className="text-stone-600">
                    Bidang: <strong className="text-[#1C1C1C]">{teacher.specialty}</strong>
                  </div>
                  <div className="text-stone-600">
                    Pengalaman: <strong className="text-[#1C1C1C] tabular-nums font-bold">{teacher.experienceYears} Tahun</strong>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
