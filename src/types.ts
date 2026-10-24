export type EducationLevel = 'wustha' | 'ulya' | 'idad' | 'takhassus';

export type RegistrationTrack = 'reguler' | 'prestasi_tahfidz' | 'beasiswa_dhuafa';

export interface ProgramInfo {
  id: EducationLevel;
  name: string;
  formalEquivalent: string;
  duration: string;
  targetHafalan: string;
  description: string;
  curriculumHighlights: string[];
  gradProfile: string;
  quota: number;
}

export interface TeacherProfile {
  id: string;
  name: string;
  title: string;
  education: string;
  role: string;
  specialty: string;
  experienceYears: number;
}

export type GalleryCategory = 'all' | 'tahfidz' | 'olahraga' | 'kelas' | 'wisuda' | 'kampus';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  date: string;
  location: string;
  description: string;
  captionDetail: string;
}

export interface DailyActivity {
  time: string;
  title: string;
  description: string;
  category: 'ibadah' | 'akademik' | 'istirahat' | 'ekskul';
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  spec: string;
  iconName: string;
}

export interface RegistrationFormData {
  // Step 1: Program
  level: EducationLevel;
  track: RegistrationTrack;
  boardingType: 'asrama_penuh' | 'fullday_khusus';

  // Step 2: Data Santri
  fullName: string;
  nickname: string;
  nisn: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  gender: 'Laki-laki'; // Enforced male only
  previousSchool: string;
  previousSchoolCity: string;
  currentJuzMemorized: number;
  medicalNotes: string;

  // Step 3: Data Wali / Orang Tua
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  parentWhatsApp: string;
  parentEmail: string;
  homeAddress: string;
  city: string;
  province: string;
  postalCode: string;

  // Step 4: Berkas
  hasKk: boolean;
  hasAkta: boolean;
  hasRapor: boolean;
  hasTahfidzCert: boolean;
  notes: string;
}

export interface RegisteredStudent extends RegistrationFormData {
  registrationId: string;
  registeredAt: string;
  status: 'Menunggu Berkas' | 'Terverifikasi' | 'Jadwal Tes Seleksi' | 'Lulus Bersyarat' | 'Lulus Utama';
  testDate?: string;
  testLocation?: string;
  interviewer?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'pendaftaran' | 'asrama' | 'akademik' | 'biaya';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  santriName: string;
  santriLevel: string;
  rating: number;
  quote: string;
  achievementBadge: string;
  highlight: string;
}

export interface FeatureZigZagItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  metricLabel: string;
  metricValue: string;
  imageUrl: string;
  reverse: boolean;
}

