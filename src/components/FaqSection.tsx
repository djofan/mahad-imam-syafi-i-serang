import React, { useState } from 'react';
import { FAQS, MAHAD_INFO } from '../data/mahadData';
import { ChevronDown, ChevronUp, Sparkles, Search, MessageCircle, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'Semua Pertanyaan' },
    { key: 'pendaftaran', label: 'Pendaftaran & Tes' },
    { key: 'asrama', label: 'Asrama & Gadget' },
    { key: 'akademik', label: 'Akademik & Sanad' },
    { key: 'biaya', label: 'Biaya & Beasiswa' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFF8E6] border-b border-[#EADBBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Tanya Jawab Lengkap
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1C1C] tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            Temukan jawaban atas pertanyaan yang paling sering diajukan orang tua dan calon wali santri mengenai kurikulum, asrama, dan pendaftaran.
          </p>

          {/* Quick Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Cari pertanyaan (misal: gadget, tes, beasiswa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[#EADBBA] bg-white text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700]/20 shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                size="sm"
                variant={activeCategory === cat.key ? "dark" : "secondary"}
                onClick={() => setActiveCategory(cat.key)}
                className="text-xs font-bold rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* ACCORDION LIST */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-2 border-[#F5B700] bg-white shadow-md'
                      : 'border-[#EADBBA] bg-[#FFFDF8] hover:border-stone-400'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-serif font-bold text-[#1C1C1C] cursor-pointer"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#F5B700] text-[#1C1C1C]' : 'bg-[#FFF8E6] text-stone-600'
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-[#EADBBA]/60 bg-[#FFFAEE]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#EADBBA] text-stone-600 text-sm">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </div>
          )}
        </div>

        {/* BOTTOM WHATSAPP DIRECT CONSULTATION BANNER */}
        <div className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-2xl border-2 border-[#EADBBA] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#FFF3CC] border border-[#FCD566] flex items-center justify-center shrink-0 text-[#1C1C1C]">
              <HelpCircle className="w-6 h-6 text-[#1C1C1C]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#1C1C1C]">
                Punya Pertanyaan Khusus Lainnya?
              </h4>
              <p className="text-xs text-stone-600">
                Tim panitia penerimaan santri baru kami siap melayani dan memberikan penjelasan detail.
              </p>
            </div>
          </div>

          <Button
            variant="default"
            size="default"
            asChild
            className="text-xs sm:text-sm font-bold shadow-md hover:shadow-lg shrink-0 gap-2"
          >
            <a
              href={MAHAD_INFO.whatsappConsultation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 text-[#1C1C1C]" />
              <span>Tanya Panitia via WA</span>
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};
