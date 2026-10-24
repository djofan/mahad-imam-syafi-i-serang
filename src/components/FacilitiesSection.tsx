import React from 'react';
import { FACILITIES } from '../data/mahadData';
import { Compass, Home, BookOpen, Target, Laptop, Coffee } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-700" />;
      case 'Home':
        return <Home className="w-6 h-6 text-emerald-700" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-700" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-emerald-700" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-emerald-700" />;
      default:
        return <Home className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Sarana & Prasarana
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Fasilitas Penunjang Pendidikan Santri
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed text-sm sm:text-base">
            Infrastruktur yang dirancang representatif, asri, dan bersih untuk mendukung kelancaran ibadah, kenyamanan menghafal Al-Qur'an, dan pembinaan karakter islami.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-2xs hover:border-emerald-600/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  {getIcon(fac.iconName)}
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                  {fac.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {fac.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs font-medium text-emerald-800">
                {fac.spec}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
