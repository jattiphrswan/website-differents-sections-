import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  X, 
  BookOpen, 
  Layers,
  MapPin
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const CTA_EditorialMinimalist = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectScale, setProjectScale] = useState('residential');
  const [formData, setFormData] = useState({ name: '', email: '', location: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden font-sans border border-stone-200 bg-[#f7f6f2] text-stone-900 shadow-xl p-8 sm:p-14 lg:p-16 select-none min-h-[380px] flex flex-col justify-between">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Subtle organic gradient aura */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Monograph Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 border border-stone-300 text-xs font-semibold text-stone-700 tracking-wider uppercase mb-5">
          <Compass className="w-3.5 h-3.5 text-stone-600" />
          <span>Architectural Commission • 2026 Season</span>
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight leading-[1.18] max-w-2xl">
          Ready to create something <br />
          <span className="font-editorial-italic italic font-medium text-stone-800 text-4xl sm:text-5xl md:text-6xl">
            truly enduring?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-stone-600 font-normal max-w-lg leading-relaxed">
          From residential sanctuaries to bespoke civic spaces, we take on six commissions annually to guarantee absolute craftsmanship.
        </p>

        {/* Action Button Row */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsSubmitted(false);
            }}
            className="group inline-flex items-center gap-3 bg-stone-900 hover:bg-black text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Inquire About Commission</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsSubmitted(false);
            }}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-stone-800 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-stone-300 shadow-sm transition cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-stone-600" />
            <span>Download Monograph Vol. VIII</span>
          </button>
        </div>

        {/* Footer subtle specs */}
        <div className="mt-8 pt-6 border-t border-stone-300/60 w-full max-w-xl flex flex-wrap items-center justify-between text-xs text-stone-500">
          <span>Kyoto • Zurich • London</span>
          <span>Bespoke Timber &amp; Stone Focus</span>
          <span>Carbon-Negative Certified</span>
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#faf9f5] border border-stone-300 rounded-3xl p-6 sm:p-8 text-stone-900 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/60 hover:bg-stone-300 text-stone-600 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 mb-2 text-stone-600">
                    <Compass className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Architectural Docket
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Project Commission Ingestion</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Please provide an overview of your site location and projected timeframe.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-2">
                        Commission Scope
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'residential', label: 'Private Villa', desc: '400+ sq m' },
                          { id: 'cultural', label: 'Civic / Gallery', desc: 'Public Spaces' },
                          { id: 'hospitality', label: 'Boutique Resort', desc: 'Retreat Eco' }
                        ].map((scale) => (
                          <button
                            type="button"
                            key={scale.id}
                            onClick={() => setProjectScale(scale.id)}
                            className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                              projectScale === scale.id
                                ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                                : 'bg-white border-stone-300 text-stone-700 hover:border-stone-400'
                            }`}
                          >
                            <div className="text-xs font-bold">{scale.label}</div>
                            <div className={`text-[10px] ${projectScale === scale.id ? 'text-stone-300' : 'text-stone-500'}`}>
                              {scale.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Julian Wright"
                          className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="julian@ateliervillas.com"
                          className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Project Site Location</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Lake Como, Italy or Kyoto, Japan"
                          className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-3 bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition active:scale-95 cursor-pointer"
                    >
                      Dispatch Commission Dossier
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Dossier Registered</h3>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. Our principal partner will review your {projectScale} project site details and send Monograph Vol. VIII directly to <strong className="text-stone-900">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-black transition cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
