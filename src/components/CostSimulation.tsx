import React, { useState } from 'react';
import { TUITION_FEES } from '../data/mahadData';
import { Calculator, HeartHandshake, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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
    <section id="biaya" className="py-16 sm:py-24 bg-[#FFF8E6] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Transparansi Pembiayaan
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Biaya Pendidikan & Simulasi Masuk
          </h2>
          <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            Biaya pendidikan dikelola secara amanah, transparan, dan inklusif. Sudah mencakup pembinaan asrama 24 jam, makan 3 kali sehari, buku paket kurikulum, dan sarana pesantren.
          </p>
        </div>

        {/* 2-Column: Tabel Rincian & Kalkulator Interaktif */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detail Rincian Biaya with shadcn Card */}
          <Card className="lg:col-span-7 bg-white border-[#EADBBA] shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EADBBA]">
                <div>
                  <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Tahun Ajaran:</span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1C1C]">
                    {TUITION_FEES.academicYear}
                  </h3>
                </div>
                <div className="inline-flex p-1 bg-[#FFF8E6] rounded-xl border border-[#EADBBA]">
                  <Button
                    variant={selectedLevel === 'wustha' ? "dark" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedLevel('wustha')}
                    className="text-xs font-bold"
                  >
                    Jenjang SMP-IT
                  </Button>
                  <Button
                    variant={selectedLevel === 'ulya' ? "dark" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedLevel('ulya')}
                    className="text-xs font-bold"
                  >
                    Jenjang SMA-IT
                  </Button>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2.5 border-b border-[#EADBBA]/60">
                  <span className="text-stone-700">Biaya Formulir Pendaftaran:</span>
                  <span className="font-mono font-bold text-[#1C1C1C] tabular-nums text-sm">
                    {formatRupiah(TUITION_FEES.registrationForm)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 border-b border-[#EADBBA]/60">
                  <div>
                    <span className="text-[#1C1C1C] font-bold block">Uang Pangkal / Sarana Gedung:</span>
                    <span className="text-2xs text-stone-500">Dibayarkan 1x saat diterima menjadi santri</span>
                  </div>
                  <span className="font-mono font-bold text-[#1C1C1C] tabular-nums text-sm">
                    {formatRupiah(fees.uangPangkal)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 border-b border-[#EADBBA]/60">
                  <div>
                    <span className="text-[#1C1C1C] font-bold block">SPP Bulanan (Termasuk Asrama & Konsumsi):</span>
                    <span className="text-2xs text-[#1C1C1C] font-medium">Sudah termasuk makan 3x sehari, laundry, & fasilitas asrama</span>
                  </div>
                  <span className="font-mono font-bold text-[#1C1C1C] bg-[#FFF3CC] px-2.5 py-1 rounded-md tabular-nums text-sm border border-[#FCD566]">
                    {formatRupiah(fees.sppBulanan)} / bln
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5 border-b border-[#EADBBA]/60">
                  <div>
                    <span className="text-[#1C1C1C] font-bold block">Seragam, Perlengkapan & Kitab Kuning:</span>
                    <span className="text-2xs text-stone-500">4 stel seragam, kasur, lemari, mushaf, dan kitab rujukan</span>
                  </div>
                  <span className="font-mono font-bold text-[#1C1C1C] tabular-nums text-sm">
                    {formatRupiah(fees.seragamDanKitab)}
                  </span>
                </div>
              </div>

              {/* Beasiswa Note Box */}
              <div className="mt-8 p-5 bg-[#FFFAEE] rounded-2xl border-2 border-[#F5B700] flex items-start gap-3.5 shadow-sm">
                <HeartHandshake className="w-5 h-5 text-[#F5B700] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#1C1C1C]">
                  <strong className="block mb-1 text-sm">Program Beasiswa Santri Berprestasi & Yatim Dhu'afa:</strong>
                  <p className="text-stone-700 leading-relaxed">
                    {TUITION_FEES.beasiswaNotes}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right: Simulasi Total Biaya Awal (Onyx Black Card) */}
          <Card variant="dark" className="lg:col-span-5 bg-[#1C1C1C] text-[#FFF8E6] border-[#333333] shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5B700] mb-2">
                <Calculator className="w-4 h-4 text-[#F5B700]" />
                Kalkulator Biaya Masuk Awal
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                Estimasi Investasi Pendidikan
              </h3>
              <p className="text-xs text-stone-300 mb-6">
                Perkiraan total biaya awal saat pendaftaran & daftar ulang {levelName}.
              </p>

              <div className="space-y-3 pb-6 border-b border-[#333333] text-xs sm:text-sm">
                <div className="flex justify-between text-stone-300">
                  <span>Formulir PSB:</span>
                  <span className="font-mono text-white">{formatRupiah(TUITION_FEES.registrationForm)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Uang Pangkal:</span>
                  <span className="font-mono text-white">{formatRupiah(fees.uangPangkal)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>SPP Bulan Pertama:</span>
                  <span className="font-mono text-white">{formatRupiah(fees.sppBulanan)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Kitab & Seragam:</span>
                  <span className="font-mono text-white">{formatRupiah(fees.seragamDanKitab)}</span>
                </div>

                {/* Infaq Sukarela Selector */}
                <div className="pt-4 border-t border-[#333333]">
                  <label className="block text-2xs uppercase tracking-wider text-stone-300 font-bold mb-2">
                    Infaq Pengembangan Pesantren (Opsional/Sukarela):
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 500000, 1000000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setOptionalInfaq(amt)}
                        className={`py-2 px-2 rounded-xl text-2xs font-mono font-bold transition-all cursor-pointer border ${
                          optionalInfaq === amt
                            ? 'bg-[#F5B700] text-[#1C1C1C] border-[#DF9F00] shadow-md scale-102'
                            : 'bg-[#292929] text-stone-300 hover:bg-[#333333] border-[#444444]'
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
                <div className="text-xs text-stone-300 font-medium">Total Biaya Awal (Termasuk SPP Bulan I):</div>
                <div className="text-2xl sm:text-4xl font-mono font-bold text-[#F5B700] tabular-nums mt-1.5 drop-shadow-sm">
                  {formatRupiah(totalAwalMasuk)}
                </div>
                <p className="text-2xs text-stone-400 mt-2.5 leading-relaxed">
                  *Pembayaran uang pangkal dapat diangsur hingga 3 kali selama masa orientasi santri baru.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
};
