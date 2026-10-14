import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle2,
  X,
  TrendingUp,
  Zap,
  ArrowRight,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const STAGGERED_REVIEWS = [
  {
    id: 'anna',
    name: 'Anna Lee',
    role: 'Growth Lead',
    company: 'FinScale Ventures',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    quote: 'Dolore magnam aliquam quaerat voluptatem dt enim ad minima veniam quis nostrum exercitationem.',
    fullStory: 'Our quarterly conversion pipeline increased by 140% within 30 days of integrating these high-performance section layouts. Clean code and effortless brand personalization.',
    metric: '+140% Pipeline Velocity'
  },
  {
    id: 'max',
    name: 'Max Turner',
    role: 'Chief Technology Officer',
    company: 'Quantum Logic Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    quote: 'Dolore magnam aliquam quaerat voluptatem dt enim ad minima veniam quis nostrum exercitationem.',
    fullStory: 'Zero runtime bugs, lightning-fast Vite compilation, and flawless responsive viewport adaptations across mobile, tablet, and desktop monitors.',
    metric: '99.98% Crash-Free Rate'
  },
  {
    id: 'eva',
    name: 'Eva Brown',
    role: 'Product Operations Director',
    company: 'Apex Cloud Logistics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/shoppable-video-model.jpg',
    quote: 'Dolore magnam aliquam quaerat voluptatem dt enim ad minima veniam quis nostrum exercitationem.',
    fullStory: 'The modular UI architecture allowed our non-technical marketing specialists to iterate and deploy client landing pages in under an hour without dev bottlenecks.',
    metric: '3x Faster Deployment'
  }
];

export const Testimonials_StaggeredJourney = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeCardId, setActiveCardId] = useState('max');
  const [selectedStoryModal, setSelectedStoryModal] = useState(null);

  const handleCardClick = (item) => {
    setActiveCardId(item.id);
    setSelectedStoryModal(item);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200 bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[640px] flex flex-col justify-center">
      {/* Subtle Dotted World Map Graphic in the background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
        <svg className="w-full max-w-4xl h-auto" viewBox="0 0 800 400" fill="currentColor">
          <circle cx="200" cy="140" r="16" />
          <circle cx="240" cy="120" r="14" />
          <circle cx="260" cy="170" r="18" />
          <circle cx="480" cy="150" r="22" />
          <circle cx="520" cy="130" r="16" />
          <circle cx="560" cy="190" r="20" />
          <circle cx="680" cy="160" r="24" />
          <circle cx="720" cy="220" r="18" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Heading, Bio & Metrics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-black text-[#EA580C] uppercase tracking-[0.24em] block">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Unveiling Success,<br />Journey Through<br />Client Testimonials
            </h2>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci.
          </p>

          {/* 3 Metrics Row */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#EA580C] leading-none">
                Rapid
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-tight">
                Quis autem vel eum reprehenderit
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#EA580C] leading-none">
                +200
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-tight">
                Quis autem vel eum reprehenderit
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#EA580C] leading-none">
                3x
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-tight">
                Quis autem vel eum reprehenderit
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Staggered Floating Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
          {STAGGERED_REVIEWS.map((item, idx) => {
            const isActive = activeCardId === item.id;
            // Stagger horizontal alignment
            const offsetClass = idx === 0 
              ? 'sm:translate-x-6' 
              : idx === 1 
              ? 'sm:-translate-x-2' 
              : 'sm:translate-x-8';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => handleCardClick(item)}
                className={`relative bg-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 border flex items-start gap-4 sm:gap-5 cursor-pointer overflow-hidden ${offsetClass} ${
                  isActive 
                    ? 'border-transparent ring-2 ring-purple-500/30 shadow-purple-500/10' 
                    : 'border-slate-100'
                }`}
              >
                {/* Purple-to-blue gradient vertical accent bar on left */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8B5CF6] via-[#6366F1] to-[#3B82F6]" />
                )}

                {/* Circular Avatar with crisp border */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src = item.fallbackAvatar;
                  }}
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-slate-100 shrink-0 shadow-sm"
                />

                {/* Review Body */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.company}
                      </span>
                    </div>

                    {/* Double Quote Mark (Purple if active, grey otherwise) */}
                    <span className={`text-2xl font-serif font-black select-none ${
                      isActive ? 'text-[#8B5CF6]' : 'text-slate-300'
                    }`}>
                      ”
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setSelectedStoryModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src={selectedStoryModal.avatar}
                  alt={selectedStoryModal.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-400 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {selectedStoryModal.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedStoryModal.role} • {selectedStoryModal.company}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full mt-1 border border-purple-200/60">
                    <CheckCircle2 className="w-3 h-3" /> Verified Enterprise Metric
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-4 rounded-2xl border border-purple-100 mb-5">
                <div className="text-[10px] uppercase font-black tracking-wider text-slate-400 mb-0.5">
                  Verified Outcome
                </div>
                <div className="text-base font-extrabold text-[#EA580C]">
                  {selectedStoryModal.metric}
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                "{selectedStoryModal.fullStory}"
              </blockquote>

              <button
                onClick={() => setSelectedStoryModal(null)}
                className="w-full py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white transition shadow-lg shadow-purple-600/25 cursor-pointer"
              >
                Close Case Study
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
