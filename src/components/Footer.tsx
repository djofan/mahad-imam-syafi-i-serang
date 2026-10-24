import React from 'react';
import { BookOpen, ShieldCheck } from 'lucide-react';
import { MAHAD_INFO } from '../data/mahadData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#FFF8E6] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Identity & Legal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5B700] border border-[#DF9F00] flex items-center justify-center text-[#1C1C1C] shadow-sm">
                <BookOpen className="w-5 h-5 font-bold" />
              </div>
              <span className="font-serif font-bold text-lg text-white">
                Ma'had Imam Syafi'i Serang
              </span>
            </div>

            <p className="font-arabic text-xl text-[#F5B700] leading-relaxed drop-shadow-xs" dir="rtl">
              مَعْهَدُ الإِمَامِ الشَّافِعِيِّ الإِسْلاَمِيّ - سِيرَانْج بَانْتِن
            </p>

            <p className="text-xs text-stone-300 leading-relaxed max-w-md">
              Pondok Pesantren Islam Modern Bermanhaj Salafush Shalih dengan kurikulum terpadu Tahfidzul Qur'an Mutqin 30 Juz, Dirosah Islamiyyah, Bahasa Arab Aktif, dan Ijazah Formal Negara. Khusus membina Santri Putra (Ikhwan).
            </p>

            <div className="text-2xs text-stone-400 space-y-1">
              <div>Izin Operasional Kemenag: <strong className="text-white">{MAHAD_INFO.skKemenag}</strong></div>
              <div>Nomor Statistik Pesantren: <strong className="text-white">{MAHAD_INFO.nspp}</strong></div>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Tautan Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#profil" className="hover:text-[#F5B700] transition-colors">Profil & Sejarah Ma'had</a></li>
              <li><a href="#program" className="hover:text-[#F5B700] transition-colors">Salafiyah Wustha & Ulya</a></li>
              <li><a href="#galeri" className="hover:text-[#F5B700] transition-colors">Galeri Kegiatan Santri Putra</a></li>
              <li><a href="#asrama" className="hover:text-[#F5B700] transition-colors">Jadwal Harian 24 Jam</a></li>
              <li><a href="#biaya" className="hover:text-[#F5B700] transition-colors">Rincian Biaya & Beasiswa</a></li>
              <li><a href="#kontak" className="hover:text-[#F5B700] transition-colors">Lokasi & Kontak WhatsApp</a></li>
            </ul>
          </div>

          {/* Col 3: Legalitas & Kebijakan Syar'i */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Komitmen Pesantren
            </h4>
            <div className="p-4 bg-[#262626] rounded-xl border border-[#3A3A3A] text-xs text-stone-300 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-[#F5B700] mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F5B700]" />
                <span>Prinsip Syar'i & Mahram</span>
              </div>
              Seluruh kegiatan, fasilitas asrama, dan publikasi media resmi Ma'had Imam Syafi'i Serang didedikasikan secara khusus untuk pendidikan santri putra dan asatidz ikhwan, menjaga kehormatan dan adab syari'at Islam.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean copyright */}
        <div className="mt-12 pt-6 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Ma'had Imam Syafi'i Serang. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span>Kota Serang, Banten</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <a href="#psb-portal" className="text-[#F5B700] hover:underline font-semibold">
              Penerimaan Santri Baru TA 2025/2026
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
