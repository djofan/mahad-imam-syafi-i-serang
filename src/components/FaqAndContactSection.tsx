import React, { useState } from 'react';
import { FAQS, MAHAD_INFO } from '../data/mahadData';
import { ChevronDown, ChevronUp, MapPin, Phone, Mail, MessageSquare, Send, Clock, Navigation, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const FaqAndContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [consultName, setConsultName] = useState('');
  const [consultMessage, setConsultMessage] = useState('');
  const [consultLevel, setConsultLevel] = useState('SMP-IT');

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalamu'alaikum Warahmatullah, nama saya ${encodeURIComponent(consultName || 'Wali Santri')}. Saya bermaksud berkonsultasi mengenai pendaftaran santri baru jenjang ${encodeURIComponent(consultLevel)} di Ma'had Imam Syafi'i Serang. Pertanyaan: ${encodeURIComponent(consultMessage || 'Mohon informasi alur pendaftaran dan jadwal survei kampus.')}`;
    window.open(`https://wa.me/6281288776650?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: FAQ ACCORDION */}
        <div className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Pusat Informasi & Tanya Jawab
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-3 text-stone-700 text-sm sm:text-base leading-relaxed">
            Jawaban lengkap seputar sistem penerimaan santri putra, ketentuan asrama, kurikulum tahfidz, dan legalitas pesantren.
          </p>
        </div>

        <div className="max-w-4xl space-y-3.5 mb-20">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#EADBBA] rounded-2xl overflow-hidden transition-all bg-white shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-serif font-bold text-[#1C1C1C] hover:text-[#DF9F00] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#F5B700] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-[#EADBBA]/60 bg-[#FFFAEE]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SECTION 2: KONTAK & LOKASI KAMPUS DI SERANG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-[#EADBBA]">
          
          {/* Left Info: Alamat, Telepon, Jam Layanan */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <Badge variant="cream" className="mb-2 text-[#1C1C1C] font-bold">
                Lokasi Kampus
              </Badge>
              <h3 className="text-2xl font-serif font-bold text-[#1C1C1C]">
                Kunjungi Ma'had Kami di Kota Serang
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                Kampus Ma'had Imam Syafi'i Serang berlokasi strategis di kawasan asri Curug Serang, mudah diakses sekitar 15 menit dari Pintu Tol Serang Timur atau Pintu Tol Serang Barat.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <Card className="bg-white border-[#EADBBA] shadow-2xs">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF3CC] flex items-center justify-center shrink-0 border border-[#FCD566]">
                    <MapPin className="w-5 h-5 text-[#F5B700]" />
                  </div>
                  <div>
                    <strong className="text-[#1C1C1C] block mb-0.5 text-sm">Alamat Lengkap:</strong>
                    <span className="text-stone-700 leading-relaxed">
                      {MAHAD_INFO.location}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#EADBBA] shadow-2xs">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF3CC] flex items-center justify-center shrink-0 border border-[#FCD566]">
                    <Clock className="w-5 h-5 text-[#F5B700]" />
                  </div>
                  <div>
                    <strong className="text-[#1C1C1C] block mb-0.5 text-sm">Jam Layanan Tamu & Panitia PSB:</strong>
                    <span className="text-stone-700 leading-relaxed">
                      Setiap Hari (Senin - Ahad): 08.00 - 16.30 WIB (Kecuali waktu sholat fardhu)
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-white border-[#EADBBA] shadow-2xs">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3CC] flex items-center justify-center shrink-0 border border-[#FCD566]">
                      <Phone className="w-4 h-4 text-[#F5B700]" />
                    </div>
                    <div>
                      <span className="text-2xs text-stone-500 font-semibold block">WhatsApp PSB:</span>
                      <strong className="text-[#1C1C1C]">{MAHAD_INFO.whatsapp}</strong>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#EADBBA] shadow-2xs">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3CC] flex items-center justify-center shrink-0 border border-[#FCD566]">
                      <Mail className="w-4 h-4 text-[#F5B700]" />
                    </div>
                    <div>
                      <span className="text-2xs text-stone-500 font-semibold block">Email Resmi:</span>
                      <strong className="text-[#1C1C1C]">{MAHAD_INFO.email}</strong>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative rounded-2xl overflow-hidden border border-[#EADBBA] shadow-sm h-56 bg-stone-200">
              <iframe
                title="Peta Lokasi Mahad Imam Syafii Serang"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63464.71762145396!2d106.140000!3d-6.150000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418a666e133f81%3A0x6b63c959b8d96071!2sSerang%2C%20Serang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-[#1C1C1C]/90 text-[#FFF8E6] text-xs px-3 py-1.5 rounded-lg backdrop-blur-xs flex items-center gap-1.5 font-semibold border border-[#333333]">
                <Navigation className="w-3.5 h-3.5 text-[#F5B700]" />
                <span>Curug, Kota Serang, Banten</span>
              </div>
            </div>
          </div>

          {/* Right Info: Form Kirim Pesan & Konsultasi */}
          <Card className="lg:col-span-6 bg-white border-[#EADBBA] shadow-md rounded-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                <MessageSquare className="w-4 h-4 text-[#F5B700]" />
                Layanan Konsultasi Online
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C1C] mb-2">
                Tanya Jawab dengan Panitia PSB
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Ada pertanyaan terkait kurikulum, tes tahfidz, atau ingin menjadwalkan kunjungan silaturahmi ke asrama? Tuliskan pesan Anda di bawah ini:
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] mb-1.5">
                    Nama Anda (Orang Tua / Calon Wali Santri)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bapak Hendra Kusuma"
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EADBBA] bg-[#FFFDF8] focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700]/20 text-sm text-[#1C1C1C] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] mb-1.5">
                    Peminatan Jenjang Santri
                  </label>
                  <select
                    value={consultLevel}
                    onChange={(e) => setConsultLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EADBBA] bg-[#FFFDF8] focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700]/20 text-sm text-[#1C1C1C] transition-all"
                  >
                    <option value="Salafiyah Wustha (SMP-IT)">Salafiyah Wustha (SMP-IT Putra)</option>
                    <option value="Salafiyah Ulya (SMA-IT)">Salafiyah Ulya (SMA-IT Putra)</option>
                    <option value="I'dad Lughawi (Matrikulasi)">I'dad Lughawi (Persiapan Bahasa)</option>
                    <option value="Takhassus Tahfidz 30 Juz">Takhassus Tahfidz 30 Juz Bersanad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] mb-1.5">
                    Pesan atau Pertanyaan Khusus
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tuliskan pertanyaan Anda seputar kurikulum, biaya, atau jadwal tes seleksi..."
                    value={consultMessage}
                    onChange={(e) => setConsultMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EADBBA] bg-[#FFFDF8] focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700]/20 text-sm text-[#1C1C1C] transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full text-sm font-bold shadow-md hover:shadow-lg gap-2"
                >
                  <Send className="w-4 h-4 text-[#1C1C1C]" />
                  <span>Kirim Pesan ke WhatsApp Panitia PSB</span>
                </Button>

                <p className="text-2xs text-stone-500 text-center font-medium">
                  Pesan akan langsung diteruskan ke WhatsApp Customer Service Panitia PSB Ma'had Imam Syafi'i Serang.
                </p>
              </form>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
};
