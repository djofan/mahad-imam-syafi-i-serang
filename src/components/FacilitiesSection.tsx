import React from 'react';
import { FACILITIES } from '../data/mahadData';
import { Compass, Home, BookOpen, Target, Laptop, Coffee, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#1C1C1C]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#1C1C1C]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#1C1C1C]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#1C1C1C]" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-[#1C1C1C]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#1C1C1C]" />;
      default:
        return <Home className="w-6 h-6 text-[#1C1C1C]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Sarana & Prasarana
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Fasilitas Penunjang Pendidikan Santri
          </h2>
          <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            Infrastruktur yang dirancang representatif, asri, dan bersih untuk mendukung kelancaran ibadah, kenyamanan menghafal Al-Qur'an, dan pembinaan karakter islami.
          </p>
        </div>

        {/* Facilities Grid with shadcn Card */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac) => (
            <Card
              key={fac.id}
              className="bg-white border-[#EADBBA] hover:border-[#F5B700] hover:shadow-lg transition-all flex flex-col justify-between group rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#FFF3CC] border border-[#FCD566] flex items-center justify-center mb-4 group-hover:bg-[#F5B700] transition-colors shadow-2xs">
                  {getIcon(fac.iconName)}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#1C1C1C] mb-2 group-hover:text-[#F5B700] transition-colors">
                  {fac.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {fac.description}
                </p>

                <div className="pt-3 border-t border-[#EADBBA] text-xs font-bold text-[#1C1C1C] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5B700]" />
                  <span>{fac.spec}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
