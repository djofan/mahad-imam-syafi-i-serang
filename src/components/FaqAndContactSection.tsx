import React, { useState } from 'react';
import { FAQS, MAHAD_INFO } from '../data/mahadData';
import { ChevronDown, ChevronUp, MapPin, Phone, Mail, MessageSquare, Send, Clock, Navigation } from 'lucide-react';

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
    <section id="kontak" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: FAQ ACCORDION */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Pusat Informasi & Tanya Jawab
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Jawaban lengkap seputar sistem penerimaan santri putra, ketentuan asrama, kurikulum tahfidz, dan legalitas pesantren.
          </p>
        </div>

        <div className="max-w-4xl space-y-3 mb-20">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden transition-colors bg-stone-50/50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-serif font-bold text-stone-900 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SECTION 2: KONTAK & LOKASI KAMPUS DI SERANG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-stone-200">
          
          {/* Left Info: Alamat, Telepon, Jam Layanan */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-1">
                Lokasi Kampus
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Kunjungi Ma'had Kami di Kota Serang
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Kampus Ma'had Imam Syafi'i Serang berlokasi strategis di kawasan asri Curug Serang, mudah diakses sekitar 15 menit dari Pintu Tol Serang Timur atau Pintu Tol Serang Barat.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block mb-0.5">Alamat Lengkap:</strong>
                  <span className="text-stone-600 leading-relaxed">
                    {MAHAD_INFO.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block mb-0.5">Jam Layanan Tamu & Panitia PSB:</strong>
                  <span className="text-stone-600 leading-relaxed">
                    Setiap Hari (Senin - Ahad): 08.00 - 16.30 WIB (Kecuali waktu sholat fardhu)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-2xs text-stone-500 block">WhatsApp PSB:</span>
                    <strong className="text-stone-900">{MAHAD_INFO.whatsapp}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-2xs text-stone-500 block">Email Resmi:</span>
                    <strong className="text-stone-900">{MAHAD_INFO.email}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed / Simulated Interactive Card */}
            <div className="relative rounded-xl overflow-hidden border border-stone-300 shadow-xs h-56 bg-stone-200">
              {/* Fallback styling with coordinates */}
              <iframe
                title="Peta Lokasi Mahad Imam Syafii Serang"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63464.71762145396!2d106.140000!3d-6.150000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418a666e133f81%3A0x6b63c959b8d96071!2sSerang%2C%20Serang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-stone-900/90 text-white text-2xs px-3 py-1.5 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-emerald-400" />
                <span>Curug, Kota Serang, Banten</span>
              </div>
            </div>
          </div>

          {/* Right Info: Form Kirim Pesan & Konsultasi */}
          <div className="lg:col-span-6 bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <MessageSquare className="w-4 h-4" />
              Layanan Konsultasi Online
            </div>
            
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
              Tanya Jawab dengan Panitia PSB
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              Ada pertanyaan terkait kurikulum, tes tahfidz, atau ingin menjadwalkan kunjungan silaturahmi ke asrama? Tuliskan pesan Anda di bawah ini:
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nama Anda (Orang Tua / Calon Wali Santri)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bapak Hendra Kusuma"
                  value={consultName}
                  onChange={(e) => setConsultName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Peminatan Jenjang Santri
                </label>
                <select
                  value={consultLevel}
                  onChange={(e) => setConsultLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 bg-white text-sm"
                >
                  <option value="Salafiyah Wustha (SMP-IT)">Salafiyah Wustha (SMP-IT Putra)</option>
                  <option value="Salafiyah Ulya (SMA-IT)">Salafiyah Ulya (SMA-IT Putra)</option>
                  <option value="I'dad Lughawi (Matrikulasi)">I'dad Lughawi (Persiapan Bahasa)</option>
                  <option value="Takhassus Tahfidz 30 Juz">Takhassus Tahfidz 30 Juz Bersanad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Pesan atau Pertanyaan Khusus
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tuliskan pertanyaan Anda seputar kurikulum, biaya, atau jadwal tes seleksi..."
                  value={consultMessage}
                  onChange={(e) => setConsultMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 bg-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan ke WhatsApp Panitia PSB</span>
              </button>

              <p className="text-2xs text-stone-500 text-center">
                Pesan akan langsung diteruskan ke WhatsApp Customer Service Panitia PSB Ma'had Imam Syafi'i Serang.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
