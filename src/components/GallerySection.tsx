import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mahadData';
import { GalleryCategory, GalleryItem } from '../types';
import { Maximize2, X, Calendar, MapPin, Shield, CheckCircle } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'Semua Kegiatan' },
    { key: 'tahfidz', label: 'Tahfidzul Qur\'an' },
    { key: 'olahraga', label: 'Olahraga & Panahan' },
    { key: 'kelas', label: 'Kelas & Bahasa Arab' },
    { key: 'wisuda', label: 'Wisuda & Prestasi' },
    { key: 'kampus', label: 'Fasilitas & Kampus' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
              Dokumentasi Pesantren
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Galeri Kegiatan Santri Putra
            </h2>
            <p className="mt-2 text-stone-600 leading-relaxed text-sm sm:text-base">
              Potret keseharian para santri ikhwan dan dewan asatidz dalam menimba ilmu syar'i, menghafal Al-Qur'an, berlatih kemandirian, dan berolahraga sunnah di kampus Serang.
            </p>
          </div>

          {/* Syar'i Notice Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 self-start lg:self-auto shrink-0">
            <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Dokumentasi Resmi Khusus Santri Putra & Asatidz</span>
          </div>
        </div>

        {/* Filter Controls (Interactive Buttons) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.key
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200/80 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative aspect-4/3 bg-stone-200 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-2.5 bg-white/90 backdrop-blur-xs rounded-full text-stone-900 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Quiet inline category indicator */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/80 backdrop-blur-xs text-white text-2xs font-semibold uppercase tracking-wider rounded">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {item.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      {item.location.split(',')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-800 font-medium">
                  <span>Lihat Selengkapnya</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Syar'i Privacy Commitment Banner */}
        <div className="mt-12 p-5 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-600 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <p>
            <strong>Prinsip Syar'i Dokumentasi:</strong> Ma'had Imam Syafi'i Serang berkomitmen menjaga batasan syar'i dalam seluruh publikasi media resmi. Seluruh galeri kegiatan yang dipublikasikan hanya menampilkan santri putra (ikhwan), dewan asatidz pembina, dan infrastruktur lingkungan pesantren.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Tutup jendela galeri"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-stone-900">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="font-semibold text-emerald-800">{activeItem.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeItem.date}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeItem.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-3">
                {activeItem.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                {activeItem.description}
              </p>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200/80 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <span className="font-semibold text-stone-900 block mb-1">Catatan Kegiatan:</span>
                {activeItem.captionDetail}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
