import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mahadData';
import { GalleryCategory, GalleryItem } from '../types';
import { Maximize2, X, Calendar, MapPin, Shield, CheckCircle, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'Semua Kegiatan' },
    { key: 'tahfidz', label: "Tahfidzul Qur'an" },
    { key: 'olahraga', label: 'Olahraga & Panahan' },
    { key: 'kelas', label: 'Kelas & Bahasa Arab' },
    { key: 'wisuda', label: 'Wisuda & Prestasi' },
    { key: 'kampus', label: 'Fasilitas & Kampus' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-[#FFF8E6] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Dokumentasi Pesantren
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
              Galeri Kegiatan Santri Putra
            </h2>
            <p className="mt-2 text-stone-700 leading-relaxed text-sm sm:text-base">
              Potret keseharian para santri ikhwan dan dewan asatidz dalam menimba ilmu syar'i, menghafal Al-Qur'an, berlatih kemandirian, dan berolahraga sunnah di kampus Serang.
            </p>
          </div>

          {/* Syar'i Notice Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFF3CC] border border-[#FCD566] rounded-xl text-xs font-semibold text-[#1C1C1C] self-start lg:self-auto shrink-0 shadow-2xs">
            <Shield className="w-4 h-4 text-[#F5B700] shrink-0" />
            <span>Dokumentasi Resmi Khusus Santri Putra & Asatidz</span>
          </div>
        </div>

        {/* Filter Controls (Interactive Buttons) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={selectedCategory === cat.key ? "dark" : "secondary"}
              size="sm"
              onClick={() => setSelectedCategory(cat.key)}
              className="text-xs sm:text-sm font-semibold whitespace-nowrap"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white border-[#EADBBA] hover:border-[#F5B700] hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Image Box */}
              <div className="relative aspect-4/3 bg-stone-200 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1C1C1C]/30 group-hover:bg-[#1C1C1C]/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-3 bg-[#F5B700] rounded-full text-[#1C1C1C] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                    <Maximize2 className="w-5 h-5 font-bold" />
                  </div>
                </div>

                {/* Inline category indicator */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1C1C1C]/90 backdrop-blur-xs text-[#FFF8E6] text-xs font-bold uppercase tracking-wider rounded-md border border-[#333333]">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Meta & Title */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#F5B700]" />
                      {item.date}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1 truncate font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F5B700] shrink-0" />
                      {item.location.split(',')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1C1C] group-hover:text-[#F5B700] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EADBBA] flex items-center justify-between text-xs text-[#1C1C1C] font-bold">
                  <span className="group-hover:text-[#F5B700] transition-colors">Lihat Selengkapnya</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[#F5B700]">→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Syar'i Privacy Commitment Banner */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-[#EADBBA] text-xs sm:text-sm text-stone-700 flex items-start gap-3.5 shadow-sm">
          <CheckCircle className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#1C1C1C]">Prinsip Syar'i Dokumentasi:</strong> Ma'had Imam Syafi'i Serang berkomitmen menjaga batasan syar'i dalam seluruh publikasi media resmi. Seluruh galeri kegiatan yang dipublikasikan hanya menampilkan santri putra (ikhwan), dewan asatidz pembina, dan infrastruktur lingkungan pesantren.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#1C1C1C]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="bg-[#FFFDF8] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-[#F5B700] relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-[#1C1C1C]/80 hover:bg-[#1C1C1C] text-[#FFF8E6] rounded-full transition-colors cursor-pointer border border-[#333333]"
              aria-label="Tutup jendela galeri"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#1C1C1C]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="default" className="text-xs font-bold">
                  {activeItem.categoryLabel}
                </Badge>
                <Badge variant="cream" className="text-xs flex items-center gap-1 text-stone-700">
                  <Calendar className="w-3.5 h-3.5 text-[#F5B700]" />
                  {activeItem.date}
                </Badge>
                <Badge variant="cream" className="text-xs flex items-center gap-1 text-stone-700">
                  <MapPin className="w-3.5 h-3.5 text-[#F5B700]" />
                  {activeItem.location}
                </Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C1C] mb-3">
                {activeItem.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                {activeItem.description}
              </p>

              <div className="p-4 bg-[#FFF8E6] rounded-xl border border-[#EADBBA] text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-bold text-[#1C1C1C] block mb-1">Catatan Kegiatan:</span>
                {activeItem.captionDetail}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
