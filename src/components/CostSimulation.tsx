import React, { useState } from 'react';
import { TUITION_FEES } from '../data/mahadData';
import { Calculator, CheckCircle2, HeartHandshake, HelpCircle } from 'lucide-react';

export const CostSimulation: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'wustha' | 'ulya'>('wustha');
  const [optionalInfaq, setOptionalInfaq] = useState<number>(500000);

  const fees = selectedLevel === 'wustha' ? TUITION_FEES.wustha : TUITION_FEES.ulya;
  const levelName = selectedLevel === 'wustha' ? 'Salafiyah Wustha (SMP-IT Putra)' : 'Salafiyah Ulya (SMA-IT Putra)';

  const totalAwalMasuk =
    TUITION_FEES.registrationForm +
    fees.uangPangkal +
    fees.sppBulanan +
    fees.seragamDanKitab +
    optionalInfaq;

  const formatRupiah = (num: number) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  return (
    <section id="biaya" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Transparansi Pembiayaan
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Biaya Pendidikan & Simulasi Masuk
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed text-sm sm:text-base">
            Biaya pendidikan dikelola secara amanah, transparan, dan inklusif. Sudah mencakup pembinaan asrama 24 jam, makan 3 kali sehari, buku paket kurikulum, dan sarana pesantren.
          </p>
        </div>

        {/* 2-Column: Tabel Rincian & Kalkulator Interaktif */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detail Rincian Biaya */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs text-stone-500 font-medium">Tahun Ajaran:</span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                  {TUITION_FEES.academicYear}
                </h3>
              </div>
              <div className="inline-flex p-1 bg-stone-100 rounded-lg border border-stone-200">
                <button
                  onClick={() => setSelectedLevel('wustha')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    selectedLevel === 'wustha' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-600'
                  }`}
                >
                  Jenjang SMP-IT
                </button>
                <button
                  onClick={() => setSelectedLevel('ulya')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    selectedLevel === 'ulya' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-600'
                  }`}
                >
                  Jenjang SMA-IT
                </button>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-2 border-b border-stone-100">
                <span className="text-stone-600">Biaya Formulir Pendaftaran:</span>
                <span className="font-mono font-bold text-stone-900 tabular-nums">
                  {formatRupiah(TUITION_FEES.registrationForm)}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-stone-100">
                <div>
                  <span className="text-stone-800 font-semibold block">Uang Pangkal / Sarana Gedung:</span>
                  <span className="text-2xs text-stone-500">Dibayarkan 1x saat diterima menjadi santri</span>
                </div>
                <span className="font-mono font-bold text-stone-900 tabular-nums">
                  {formatRupiah(fees.uangPangkal)}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-stone-100">
                <div>
                  <span className="text-stone-800 font-semibold block">SPP Bulanan (Termasuk Asrama & Konsumsi):</span>
                  <span className="text-2xs text-emerald-800 font-medium">Sudah termasuk makan 3x sehari, laundry, & fasilitas asrama</span>
                </div>
                <span className="font-mono font-bold text-emerald-800 tabular-nums">
                  {formatRupiah(fees.sppBulanan)} / bln
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-stone-100">
                <div>
                  <span className="text-stone-800 font-semibold block">Seragam, Perlengkapan & Kitab Kuning:</span>
                  <span className="text-2xs text-stone-500">4 stel seragam, kasur, lemari, mushaf, dan kitab rujukan</span>
                </div>
                <span className="font-mono font-bold text-stone-900 tabular-nums">
                  {formatRupiah(fees.seragamDanKitab)}
                </span>
              </div>
            </div>

            {/* Beasiswa Note Box */}
            <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-emerald-950">
                <strong>Program Beasiswa Santri Berprestasi & Yatim Dhu'afa:</strong>
                <p className="mt-1 text-emerald-900/90 leading-relaxed">
                  {TUITION_FEES.beasiswaNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Simulasi Total Biaya Awal */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Calculator className="w-4 h-4" />
              Kalkulator Biaya Masuk Awal
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white mb-2">
              Estimasi Investasi Pendidikan
            </h3>
            <p className="text-xs text-stone-300 mb-6">
              Perkiraan total biaya awal saat pendaftaran & daftar ulang {levelName}.
            </p>

            <div className="space-y-3 pb-6 border-b border-stone-800 text-xs sm:text-sm">
              <div className="flex justify-between text-stone-300">
                <span>Formulir PSB:</span>
                <span className="font-mono">{formatRupiah(TUITION_FEES.registrationForm)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Uang Pangkal:</span>
                <span className="font-mono">{formatRupiah(fees.uangPangkal)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>SPP Bulan Pertama:</span>
                <span className="font-mono">{formatRupiah(fees.sppBulanan)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Kitab & Seragam:</span>
                <span className="font-mono">{formatRupiah(fees.seragamDanKitab)}</span>
              </div>

              {/* Infaq Sukarela Selector */}
              <div className="pt-3 border-t border-stone-800">
                <label className="block text-2xs uppercase tracking-wider text-stone-400 mb-2">
                  Infaq Pengembangan Pesantren (Opsional/Sukarela):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 500000, 1000000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setOptionalInfaq(amt)}
                      className={`py-1.5 px-2 rounded text-2xs font-mono font-medium transition-colors cursor-pointer ${
                        optionalInfaq === amt
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                      }`}
                    >
                      {amt === 0 ? 'Rp 0' : `+${(amt / 1000).toLocaleString('id-ID')}rb`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="pt-6">
              <div className="text-xs text-stone-400">Total Biaya Awal (Termasuk SPP Bulan I):</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-300 tabular-nums mt-1">
                {formatRupiah(totalAwalMasuk)}
              </div>
              <p className="text-2xs text-stone-400 mt-2">
                *Pembayaran uang pangkal dapat diangsur hingga 3 kali selama masa orientasi santri baru.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
