import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle2,
  X,
  Droplet,
  Heart,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const SKINCARE_TESTIMONIALS = [
  {
    id: 'emily',
    name: 'Emily Rose',
    role: 'Patient',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/shoppable-video-model.jpg',
    quote: 'Corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.',
    heroImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    fallbackHero: './assets/shoppable-video-model.jpg',
    treatment: 'Bio-Cellular Peony Hydration Therapy',
    hydrationBoost: '+84% Barrier Moisture',
    duration: '4-Week Botanical Cycle'
  },
  {
    id: 'camille',
    name: 'Camille Dupont',
    role: 'Aesthetician',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    quote: 'Nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit.',
    heroImage: 'https://images.unsplash.com/photo-1512290900672-1f55b9a89d38?auto=format&fit=crop&w=1200&q=80',
    fallbackHero: './assets/skincare-serum-hand.jpg',
    treatment: 'Retinol Gentle Rebalancing Ritual',
    hydrationBoost: '+92% Collagen Resilience',
    duration: '6-Week Routine'
  }
];

export const Testimonials_SkincareSplit = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showRoutineModal, setShowRoutineModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const activeReview = SKINCARE_TESTIMONIALS[activeIdx];

  const handleOpenRoutine = () => {
    setShowRoutineModal(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-amber-100/80 shadow-2xl bg-[#FAF5F0] text-neutral-900 min-h-[620px] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px] items-stretch">
        {/* Left Half: Soft Cream / Blush Review Column */}
        <div className="p-8 sm:p-14 lg:p-16 flex flex-col justify-center items-center text-center relative z-10 bg-gradient-to-b from-[#FDF9F5] to-[#F7EFE8]">
          <div className="max-w-md w-full space-y-6">
            {/* Category Tag */}
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#C97A63] uppercase block">
              REVIEWS
            </span>

            {/* Editorial Serif Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
              Client testimonials
            </h2>

            {/* Blush Rose Double Quote Glyph */}
            <div className="flex justify-center select-none">
              <span className="text-3xl sm:text-4xl font-serif text-[#D8A495] leading-none">
                ❝
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {activeReview.quote}
            </blockquote>

            {/* Author Portrait & Info */}
            <div className="pt-4 flex flex-col items-center space-y-2">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md p-0.5 bg-amber-100">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  onError={(e) => {
                    e.currentTarget.src = activeReview.fallbackAvatar;
                  }}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h4 className="text-base font-serif font-bold text-neutral-900">
                  {activeReview.name}
                </h4>
                <p className="text-xs text-neutral-400 font-sans tracking-wide">
                  {activeReview.role}
                </p>
              </div>
            </div>

            {/* Interactive Clinical Spec & Routine Button */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleOpenRoutine}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C97A63] hover:text-[#9c513e] bg-white px-4 py-2 rounded-full border border-amber-200/60 shadow-sm transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>View Hydration Results</span>
              </button>

              {SKINCARE_TESTIMONIALS.length > 1 && (
                <button
                  onClick={() => setActiveIdx((prev) => (prev + 1) % SKINCARE_TESTIMONIALS.length)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-neutral-900 px-3 py-2 rounded-full border border-neutral-200/60 transition cursor-pointer"
                >
                  <span>Next Story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Half: High-Resolution Beauty Portrait */}
        <div className="relative min-h-[380px] lg:min-h-full overflow-hidden bg-amber-100/50">
          <img
            src={activeReview.heroImage}
            alt={activeReview.name}
            onError={(e) => {
              e.currentTarget.src = activeReview.fallbackHero;
            }}
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105"
          />
          {/* Subtle gradient vignette on left edge for smooth blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF9F5]/40 via-transparent to-transparent hidden lg:block" />

          {/* Floating Clinical Hydration Pill */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/90 backdrop-blur-md border border-white/60 p-3.5 px-5 rounded-2xl shadow-xl flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#C97A63] flex items-center justify-center shrink-0">
              <Droplet className="w-4 h-4 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                Dermatology Proven
              </span>
              <strong className="text-xs font-extrabold text-neutral-900">
                {activeReview.hydrationBoost}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Routine & Hydration Modal */}
      <AnimatePresence>
        {showRoutineModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-100"
            >
              <button
                onClick={() => setShowRoutineModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-[#C97A63]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Clinical Case Study</span>
              </div>
              <h3 className="text-xl font-serif font-black text-neutral-900 mb-2">
                {activeReview.treatment}
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                Verified outcome recorded over a {activeReview.duration} under clinical supervision.
              </p>

              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 space-y-3 mb-6 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Subject:</span>
                  <strong className="text-neutral-900">{activeReview.name}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Hydration Surge:</span>
                  <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {activeReview.hydrationBoost}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Skin Barrier Score:</span>
                  <strong className="text-neutral-900">98.6 / 100 Restored</strong>
                </div>
              </div>

              <button
                onClick={() => setShowRoutineModal(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#C97A63] hover:bg-[#a65d48] text-white transition shadow-lg shadow-[#C97A63]/25 cursor-pointer"
              >
                Explore Formulation Ingredients
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
