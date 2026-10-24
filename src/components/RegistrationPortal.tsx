import React, { useState } from 'react';
import {
  GraduationCap,
  CheckCircle,
  FileText,
  User,
  Users,
  Search,
  ArrowRight,
  ArrowLeft,
  Printer,
  Download,
  AlertCircle,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { EducationLevel, RegistrationFormData, RegisteredStudent, RegistrationTrack } from '../types';
import { PROGRAMS, MOCK_STUDENTS_FOR_VERIFICATION, MAHAD_INFO } from '../data/mahadData';

interface RegistrationPortalProps {
  initialLevel?: EducationLevel;
  initialMode?: 'form' | 'status';
  onClose?: () => void;
}

export const RegistrationPortal: React.FC<RegistrationPortalProps> = ({
  initialLevel = 'wustha',
  initialMode = 'form',
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'status'>(initialMode);
  
  // Registration Form State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [allRegisteredStudents, setAllRegisteredStudents] = useState<RegisteredStudent[]>(
    MOCK_STUDENTS_FOR_VERIFICATION
  );
  const [registeredCard, setRegisteredCard] = useState<RegisteredStudent | null>(null);

  const [formData, setFormData] = useState<RegistrationFormData>({
    level: initialLevel,
    track: 'reguler',
    boardingType: 'asrama_penuh',
    fullName: '',
    nickname: '',
    nisn: '',
    nik: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    previousSchool: '',
    previousSchoolCity: '',
    currentJuzMemorized: 1,
    medicalNotes: '',
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    motherName: '',
    motherOccupation: '',
    parentWhatsApp: '',
    parentEmail: '',
    homeAddress: '',
    city: 'Serang',
    province: 'Banten',
    postalCode: '',
    hasKk: true,
    hasAkta: true,
    hasRapor: true,
    hasTahfidzCert: false,
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Status Check State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<RegisteredStudent | null>(
    MOCK_STUDENTS_FOR_VERIFICATION[0]
  );
  const [searchError, setSearchError] = useState<string | null>(null);

  // Validate current step
  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 2) {
      if (!formData.fullName.trim()) errors.fullName = 'Nama lengkap santri wajib diisi';
      if (!formData.nik.trim() || formData.nik.length < 8) errors.nik = 'NIK santri wajib diisi (minimal 8 digit)';
      if (!formData.birthPlace.trim()) errors.birthPlace = 'Tempat lahir wajib diisi';
      if (!formData.birthDate) errors.birthDate = 'Tanggal lahir wajib diisi';
      if (!formData.previousSchool.trim()) errors.previousSchool = 'Asal sekolah wajib diisi';
    } else if (step === 3) {
      if (!formData.fatherName.trim()) errors.fatherName = 'Nama ayah / wali wajib diisi';
      if (!formData.parentWhatsApp.trim() || formData.parentWhatsApp.length < 9) {
        errors.parentWhatsApp = 'Nomor WhatsApp aktif wajib diisi untuk info seleksi';
      }
      if (!formData.homeAddress.trim()) errors.homeAddress = 'Alamat domisili wajib diisi';
      if (!formData.city.trim()) errors.city = 'Kota/Kabupaten wajib diisi';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    // Generate formal Registration ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRegId = `PSB-MIS-2025-${randomNum}`;
    const today = new Date().toISOString().split('T')[0];

    const newStudent: RegisteredStudent = {
      ...formData,
      registrationId: newRegId,
      registeredAt: today,
      status: 'Terverifikasi',
      testDate: 'Gelombang I: 22 Februari 2025, 08.00 WIB',
      testLocation: "Ruang Penguji Lt. 2 - Ma'had Imam Syafi'i Serang",
      interviewer: "Ustadz Dewan Penguji PSB",
    };

    setAllRegisteredStudents((prev) => [newStudent, ...prev]);
    setRegisteredCard(newStudent);
    setCurrentStep(5); // Show success proof card
  };

  const handleSearchStatus = (queryToUse?: string) => {
    const q = (queryToUse || searchQuery).trim().toLowerCase();
    if (!q) {
      setSearchError('Silakan masukkan nomor pendaftaran atau nomor WhatsApp');
      return;
    }

    const found = allRegisteredStudents.find(
      (s) =>
        s.registrationId.toLowerCase() === q ||
        s.parentWhatsApp.includes(q) ||
        s.fullName.toLowerCase().includes(q)
    );

    if (found) {
      setSearchResult(found);
      setSearchError(null);
    } else {
      setSearchResult(null);
      setSearchError(`Data pendaftaran "${q}" tidak ditemukan. Pastikan nomor pendaftaran (contoh: PSB-MIS-2025-0101) atau nomor WA tepat.`);
    }
  };

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <section id="psb-portal" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 mb-2">
            Penerimaan Santri Baru (PSB) Online
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Portal Pendaftaran Santri Baru TA 2025/2026
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Daftarkan putra Anda untuk menjadi bagian dari generasi penghafal Al-Qur'an dan penuntut ilmu syar'i bermanhaj Salafush Shalih di Ma'had Imam Syafi'i Serang.
          </p>

          {/* Tab Navigation: Form vs Cek Status */}
          <div className="mt-8 inline-flex p-1 bg-stone-200/80 rounded-xl border border-stone-300/80">
            <button
              onClick={() => {
                setActiveTab('form');
                if (currentStep === 5) setCurrentStep(1);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Formulir Pendaftaran Baru</span>
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'status'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Cek Status / Hasil Seleksi</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FORMULIR PENDAFTARAN */}
        {activeTab === 'form' && (
          <div className="max-w-4xl mx-auto">
            
            {/* Step 5: SUCCESS PROOF CARD */}
            {currentStep === 5 && registeredCard && (
              <div className="bg-white rounded-2xl border-2 border-emerald-700 p-6 sm:p-10 shadow-lg animate-in fade-in zoom-in-95">
                <div className="text-center pb-6 border-b border-stone-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Pendaftaran Berhasil Dikirim
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                    Kartu Bukti Pendaftaran Santri Baru
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Ma'had Imam Syafi'i Serang · Tahun Ajaran 2025/2026
                  </p>
                </div>

                {/* Printable Slip Content */}
                <div className="mt-8 bg-stone-50 p-6 rounded-xl border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Nomor Pendaftaran Resmi:</div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-800 tracking-wider">
                      {registeredCard.registrationId}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-500 font-medium">Status Pendaftaran:</div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-bold mt-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {registeredCard.status}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs sm:text-sm text-stone-700">
                    <div><strong>Nama Lengkap:</strong> {registeredCard.fullName}</div>
                    <div><strong>Jenjang Dipilih:</strong> {PROGRAMS.find(p => p.id === registeredCard.level)?.name}</div>
                    <div><strong>Jalur:</strong> {registeredCard.track.toUpperCase()}</div>
                    <div><strong>Asal Sekolah:</strong> {registeredCard.previousSchool}</div>
                    <div><strong>Hafalan Awal:</strong> {registeredCard.currentJuzMemorized} Juz</div>
                  </div>

                  <div className="space-y-1 text-xs sm:text-sm text-stone-700">
                    <div><strong>Nama Orang Tua / Wali:</strong> {registeredCard.fatherName}</div>
                    <div><strong>WhatsApp Konfirmasi:</strong> {registeredCard.parentWhatsApp}</div>
                    <div><strong>Domisili:</strong> {registeredCard.city}, {registeredCard.province}</div>
                    <div><strong>Tanggal Mendaftar:</strong> {registeredCard.registeredAt}</div>
                  </div>
                </div>

                {/* Next Instructions Box */}
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900">
                  <h4 className="font-bold flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-amber-700" />
                    Jadwal Tes Seleksi Calon Santri:
                  </h4>
                  <p>
                    {registeredCard.testDate} bertempat di <strong>{registeredCard.testLocation}</strong>. Harap hadir 30 menit sebelum tes dengan membawa fotokopi berkas dan berpakaian koko/gamis putih sopan.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrintCard}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Cetak Bukti Pendaftaran</span>
                    </button>
                    <a
                      href={`https://wa.me/6281288776650?text=Assalamu%27alaikum%20Panitia%20PSB%20Ma%27had%20Imam%20Syafi%27i%20Serang,%20saya%20sudah%20mendaftar%20dengan%20No%20${registeredCard.registrationId}%20atas%20nama%20${encodeURIComponent(registeredCard.fullName)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Konfirmasi via WhatsApp Panitia</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setFormData({
                        ...formData,
                        fullName: '',
                        nickname: '',
                        nisn: '',
                        nik: '',
                        birthPlace: '',
                        birthDate: '',
                        previousSchool: '',
                        notes: '',
                      });
                    }}
                    className="text-xs text-stone-500 hover:text-stone-800 font-medium underline"
                  >
                    Daftarkan Santri Lainnya
                  </button>
                </div>
              </div>
            )}

            {/* Steps 1-4 FORM WIZARD */}
            {currentStep < 5 && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
                
                {/* Stepper Indicator */}
                <div className="mb-8 pb-6 border-b border-stone-200">
                  <div className="flex items-center justify-between max-w-2xl mx-auto">
                    {[
                      { num: 1, label: 'Program' },
                      { num: 2, label: 'Data Santri' },
                      { num: 3, label: 'Orang Tua' },
                      { num: 4, label: 'Konfirmasi' },
                    ].map((step) => (
                      <div key={step.num} className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                            currentStep === step.num
                              ? 'bg-emerald-800 text-white'
                              : currentStep > step.num
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-stone-200 text-stone-500'
                          }`}
                        >
                          {currentStep > step.num ? <CheckCircle className="w-4 h-4" /> : step.num}
                        </div>
                        <span className="hidden sm:inline text-xs font-medium text-stone-700">
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmitRegistration}>
                  
                  {/* STEP 1: PILIHAN PROGRAM */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-1">
                          Pilih Jenjang & Jalur Pendaftaran
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600">
                          Silakan tentukan jenjang pendidikan yang dituju untuk calon santri putra.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {PROGRAMS.map((prog) => (
                          <label
                            key={prog.id}
                            className={`p-4 rounded-xl border-2 flex flex-col justify-between cursor-pointer transition-all ${
                              formData.level === prog.id
                                ? 'border-emerald-700 bg-emerald-50/50'
                                : 'border-stone-200 hover:border-stone-300 bg-white'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <input
                                  type="radio"
                                  name="level"
                                  value={prog.id}
                                  checked={formData.level === prog.id}
                                  onChange={() => setFormData({ ...formData, level: prog.id })}
                                  className="text-emerald-700 focus:ring-emerald-700"
                                />
                                <span className="text-2xs uppercase tracking-wider font-bold text-emerald-800">
                                  {prog.formalEquivalent.split(' (')[0]}
                                </span>
                              </div>
                              <div className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                                {prog.name}
                              </div>
                              <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                                {prog.description}
                              </p>
                            </div>
                            <div className="mt-3 pt-2 border-t border-stone-100 text-xs text-stone-500">
                              Target: <strong className="text-stone-800">{prog.targetHafalan.split(' (')[0]}</strong>
                            </div>
                          </label>
                        ))}
                      </div>

                      {/* Jalur Pendaftaran */}
                      <div className="pt-4 border-t border-stone-200">
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                          Jalur Masuk Seleksi:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { id: 'reguler', label: 'Jalur Reguler', desc: 'Tes akademik, tahsin, & wawancara' },
                            { id: 'prestasi_tahfidz', label: 'Prestasi Tahfidz', desc: 'Memiliki hafalan min. 3 Juz' },
                            { id: 'beasiswa_dhuafa', label: 'Beasiswa Dhu\'afa', desc: 'Bebas SPP bagi yang berhak' },
                          ].map((track) => (
                            <label
                              key={track.id}
                              className={`p-3 rounded-lg border text-xs cursor-pointer ${
                                formData.track === track.id
                                  ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold'
                                  : 'border-stone-200 hover:border-stone-300 text-stone-700'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <input
                                  type="radio"
                                  name="track"
                                  value={track.id}
                                  checked={formData.track === track.id}
                                  onChange={() => setFormData({ ...formData, track: track.id as RegistrationTrack })}
                                  className="text-emerald-700 focus:ring-emerald-700"
                                />
                                <span>{track.label}</span>
                              </div>
                              <span className="text-stone-500 text-2xs block pl-5">{track.desc}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* STEP 2: DATA CALON SANTRI PUTRA */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-1">
                          Biodata Calon Santri Putra
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600">
                          Catatan: Ma'had Imam Syafi'i Serang dikhususkan untuk santri putra (ikhwan).
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Nama Lengkap Santri (Sesuai Akta Kelahiran) *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Muhammad Fatih Al-Bantani"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm"
                          />
                          {formErrors.fullName && (
                            <span className="text-2xs text-red-600 mt-1 block">{formErrors.fullName}</span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Nama Panggilan
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: Fatih"
                            value={formData.nickname}
                            onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Jenis Kelamin
                          </label>
                          <input
                            type="text"
                            disabled
                            value="Laki-laki (Ikhwan)"
                            className="w-full px-3.5 py-2.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-600 text-sm cursor-not-allowed font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Nomor Induk Kependudukan (NIK Santri) *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="16 Digit NIK di Kartu Keluarga"
                            value={formData.nik}
                            onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                          {formErrors.nik && (
                            <span className="text-2xs text-red-600 mt-1 block">{formErrors.nik}</span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            NISN (Bila ada dari sekolah asal)
                          </label>
                          <input
                            type="text"
                            placeholder="10 Digit NISN"
                            value={formData.nisn}
                            onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Tempat Lahir *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Serang / Cilegon / Jakarta"
                            value={formData.birthPlace}
                            onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Tanggal Lahir *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.birthDate}
                            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Asal Sekolah / Madrasah *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: SDIT Al-Madinah Serang"
                            value={formData.previousSchool}
                            onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Jumlah Hafalan Saat Ini (Juz)
                          </label>
                          <select
                            value={formData.currentJuzMemorized}
                            onChange={(e) => setFormData({ ...formData, currentJuzMemorized: Number(e.target.value) })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm bg-white"
                          >
                            <option value={0}>Belum ada hafalan khusus (Baru Juz 30 awal)</option>
                            <option value={1}>1 Juz (Juz 30 Mutqin)</option>
                            <option value={2}>2 Juz</option>
                            <option value={3}>3 Juz</option>
                            <option value={5}>5 Juz</option>
                            <option value={10}>10 Juz</option>
                            <option value={15}>15 Juz atau lebih</option>
                            <option value={30}>30 Juz Lengkap</option>
                          </select>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Riwayat Alergi / Catatan Kesehatan (Opsional)
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: Alergi seafood ringan / asma ringan saat udara sangat dingin"
                            value={formData.medicalNotes}
                            onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: DATA ORANG TUA / WALI */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-1">
                          Data Orang Tua / Wali Santri
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600">
                          Informasi kontak resmi untuk pengiriman jadwal seleksi dan konfirmasi penerimaan.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Nama Ayah / Wali *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Nama Lengkap Ayah"
                            value={formData.fatherName}
                            onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Pekerjaan Ayah
                          </label>
                          <input
                            type="text"
                            placeholder="PNS / Wiraswasta / Karyawan Swasta"
                            value={formData.fatherOccupation}
                            onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Nama Ibu Kandung
                          </label>
                          <input
                            type="text"
                            placeholder="Nama Lengkap Ibu"
                            value={formData.motherName}
                            onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            No. WhatsApp Aktif (Utama) *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: 081234567890"
                            value={formData.parentWhatsApp}
                            onChange={(e) => setFormData({ ...formData, parentWhatsApp: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                          {formErrors.parentWhatsApp && (
                            <span className="text-2xs text-red-600 mt-1 block">{formErrors.parentWhatsApp}</span>
                          )}
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Alamat Lengkap Tempat Tinggal *
                          </label>
                          <textarea
                            rows={2}
                            required
                            placeholder="Nama Jalan, RT/RW, Kelurahan/Desa, Kecamatan"
                            value={formData.homeAddress}
                            onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Kota / Kabupaten *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Kota Serang / Kab. Serang"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">
                            Provinsi
                          </label>
                          <input
                            type="text"
                            value={formData.province}
                            onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: BERKAS & KONFIRMASI */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-1">
                          Verifikasi Berkas & Pernyataan Orang Tua
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600">
                          Pastikan seluruh data yang dimasukkan benar sebelum mengirimkan formulir.
                        </p>
                      </div>

                      {/* Summary Review */}
                      <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 text-xs sm:text-sm space-y-2">
                        <div className="flex justify-between border-b border-stone-200 pb-2">
                          <span className="text-stone-500">Jenjang Dipilih:</span>
                          <strong className="text-stone-900">{PROGRAMS.find(p => p.id === formData.level)?.name}</strong>
                        </div>
                        <div className="flex justify-between border-b border-stone-200 pb-2">
                          <span className="text-stone-500">Nama Calon Santri:</span>
                          <strong className="text-stone-900">{formData.fullName} (Laki-laki)</strong>
                        </div>
                        <div className="flex justify-between border-b border-stone-200 pb-2">
                          <span className="text-stone-500">Tempat, Tanggal Lahir:</span>
                          <strong className="text-stone-900">{formData.birthPlace}, {formData.birthDate}</strong>
                        </div>
                        <div className="flex justify-between border-b border-stone-200 pb-2">
                          <span className="text-stone-500">Nama Wali & WhatsApp:</span>
                          <strong className="text-stone-900">{formData.fatherName} ({formData.parentWhatsApp})</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Domisili:</span>
                          <strong className="text-stone-900">{formData.city}, {formData.province}</strong>
                        </div>
                      </div>

                      {/* Checklist Berkas yang disiapkan */}
                      <div className="space-y-2.5 pt-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-stone-700">
                          Dokumen yang siap dibawa saat tes seleksi:
                        </div>
                        <label className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.hasKk}
                            onChange={(e) => setFormData({ ...formData, hasKk: e.target.checked })}
                            className="rounded text-emerald-700 focus:ring-emerald-700"
                          />
                          <span>Fotokopi Kartu Keluarga (KK) 2 lembar</span>
                        </label>
                        <label className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.hasAkta}
                            onChange={(e) => setFormData({ ...formData, hasAkta: e.target.checked })}
                            className="rounded text-emerald-700 focus:ring-emerald-700"
                          />
                          <span>Fotokopi Akta Kelahiran Santri 2 lembar</span>
                        </label>
                        <label className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.hasRapor}
                            onChange={(e) => setFormData({ ...formData, hasRapor: e.target.checked })}
                            className="rounded text-emerald-700 focus:ring-emerald-700"
                          />
                          <span>Fotokopi Rapor 2 semester terakhir yang dilegalisir</span>
                        </label>
                      </div>

                      {/* Pernyataan */}
                      <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 leading-relaxed">
                        Dengan mengirimkan formulir ini, saya selaku orang tua/wali menyatakan bahwa seluruh data di atas adalah benar, dan saya bersedia mengikuti tahapan tes seleksi santri putra serta mentaati ketentuan syar'i dan tata tertib Ma'had Imam Syafi'i Serang.
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <span>Langkah Selanjutnya</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Kirim & Terbitkan Bukti Pendaftaran</span>
                      </button>
                    )}
                  </div>

                </form>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: CEK STATUS / HASIL SELEKSI */}
        {activeTab === 'status' && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 mb-2">
                Pencarian Status Berkas & Hasil Seleksi PSB
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Ketik nomor pendaftaran (contoh: <code>PSB-MIS-2025-0101</code>) atau nomor WhatsApp wali santri untuk memantau status verifikasi dan jadwal ujian seleksi.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Masukkan No. Pendaftaran (PSB-MIS-2025-xxxx) atau No. WA"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchStatus()}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-600 text-sm"
                />
              </div>
              <button
                onClick={() => handleSearchStatus()}
                className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Cari Data
              </button>
            </div>

            {/* Quick Demo Pre-fill Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-6">
              <span>Coba Nomor Demo:</span>
              <button
                onClick={() => {
                  setSearchQuery('PSB-MIS-2025-0101');
                  handleSearchStatus('PSB-MIS-2025-0101');
                }}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-2xs font-mono font-medium"
              >
                PSB-MIS-2025-0101 (Lulus Utama)
              </button>
              <button
                onClick={() => {
                  setSearchQuery('PSB-MIS-2025-0142');
                  handleSearchStatus('PSB-MIS-2025-0142');
                }}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-2xs font-mono font-medium"
              >
                PSB-MIS-2025-0142 (Jadwal Tes)
              </button>
            </div>

            {searchError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-800 flex items-start gap-2 mb-6">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{searchError}</span>
              </div>
            )}

            {/* Result Card */}
            {searchResult && (
              <div className="border border-stone-200 rounded-xl p-6 bg-stone-50 animate-in fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-xs text-stone-500 font-mono font-semibold">
                      {searchResult.registrationId}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-stone-900">
                      {searchResult.fullName}
                    </h4>
                    <span className="text-xs text-stone-600">
                      Jenjang: {PROGRAMS.find(p => p.id === searchResult.level)?.name}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-2xs text-stone-500 block">Status Terkini:</span>
                    <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold mt-1 ${
                      searchResult.status === 'Lulus Utama'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : searchResult.status === 'Jadwal Tes Seleksi'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-blue-100 text-blue-800 border border-blue-300'
                    }`}>
                      {searchResult.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                  <div>
                    <span className="text-stone-500 block text-2xs">Asal Sekolah:</span>
                    <strong>{searchResult.previousSchool} ({searchResult.previousSchoolCity})</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-2xs">Orang Tua / No. WA:</span>
                    <strong>{searchResult.fatherName} ({searchResult.parentWhatsApp})</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-2xs">Jadwal & Waktu Ujian:</span>
                    <strong className="text-emerald-900">{searchResult.testDate || 'Menunggu penetapan gelombang'}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-2xs">Tempat Tes Seleksi:</span>
                    <strong>{searchResult.testLocation || "Ma'had Imam Syafi'i Serang"}</strong>
                  </div>
                </div>

                {searchResult.interviewer && (
                  <div className="mt-4 pt-3 border-t border-stone-200 text-xs text-stone-600">
                    Penguji Seleksi Tahfidz: <strong className="text-stone-800">{searchResult.interviewer}</strong>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
