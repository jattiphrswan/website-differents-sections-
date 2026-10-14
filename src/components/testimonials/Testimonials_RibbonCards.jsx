import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Star,
  CheckCircle2,
  X,
  ThumbsUp,
  Volume2,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  MessageSquareQuote
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const TESTIMONIALS_DATA = [
  {
    id: 'benjamin',
    name: 'Benjamin Wright',
    role: 'Engineer',
    company: 'Vanguard Logistics & Freight',
    avatar: './assets/avatar-benjamin.jpg',
    rating: 5,
    date: 'March 2026',
    verified: true,
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    fullReview: 'The freight dispatch team cut our transit delay rates by over 42% in Q3. Telemetry tracking was completely flawless from initial pickup all the way through regional distribution hubs.',
    metric: '42% Transit Time Reduction',
    helpfulCount: 84
  },
  {
    id: 'sophia',
    name: 'Sophia Chen',
    role: 'Designer',
    company: 'Chen & Studio Industrial',
    avatar: './assets/avatar-sophia.jpg',
    rating: 5,
    date: 'February 2026',
    verified: true,
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    fullReview: 'Designing packaging and multi-modal logistics workflows with this platform was an absolute dream. Clean API interfaces, punctual drivers, and instant electronic bills of lading.',
    metric: '99.8% On-Time Delivery Rate',
    helpfulCount: 119
  },
  {
    id: 'matthew',
    name: 'Matthew Harper',
    role: 'Analyst',
    company: 'Apex Supply Intelligence',
    avatar: './assets/avatar-matthew.jpg',
    rating: 5,
    date: 'January 2026',
    verified: true,
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    fullReview: 'Our supply chain data variance dropped to near-zero. Route optimization algorithms saved our fleet approximately 18% in diesel consumption during peak volume weeks.',
    metric: '18% Fuel Consumption Saved',
    helpfulCount: 67
  }
];

export const Testimonials_RibbonCards = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedReview, setSelectedReview] = useState(null);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleHelpfulClick = (id) => {
    if (!helpfulVotes[id]) {
      setHelpfulVotes((prev) => ({ ...prev, [id]: true }));
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const handleOpenReview = (item) => {
    setSelectedReview(item);
    setIsPlayingAudio(false);
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200/80 shadow-2xl py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-slate-50 min-h-[640px] flex flex-col justify-center">
      {/* High-Key Truck Transportation Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
        style={{
          backgroundImage: "url('./assets/first-transport-truck.jpg')"
        }}
      />
      {/* Translucent Soft White Lighting Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95 backdrop-blur-[1px] pointer-events-none" />

      {/* Decorative ambient subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-2.5">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-[#C81E1E]">
              USER EXPERIENCES
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Customer testimonials
          </motion.h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto font-medium">
            Real feedback from engineering, design, and operations partners worldwide.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TESTIMONIALS_DATA.map((item, index) => {
            const hasVoted = helpfulVotes[item.id];
            const currentHelpful = item.helpfulCount + (hasVoted ? 1 : 0);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenReview(item)}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(200,30,30,0.12)] border border-slate-100 flex flex-col justify-between transition-all duration-300 cursor-pointer"
              >
                {/* Folded Red Bookmark Ribbon with Quotes */}
                <div className="absolute -top-3 right-6 z-20">
                  <div className="relative bg-[#C81E1E] text-white w-11 h-14 rounded-b-md shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
                    {/* 3D Fold Corner Shadow on right edge */}
                    <div className="absolute top-0 -right-2 w-0 h-0 border-t-[8px] border-l-[8px] border-t-transparent border-l-[#821313]" />
                    {/* Double Quote Marks */}
                    <svg
                      className="w-6 h-6 text-white fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>
                </div>

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FAB833] text-[#FAB833]"
                      />
                    ))}
                    <span className="text-[11px] font-bold text-slate-400 ml-1.5">
                      5.0
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom Warm Amber/Yellow Author Pill */}
                <div className="mt-auto pt-2">
                  <div className="w-full bg-[#FAB833] hover:bg-[#f5ad1f] transition-colors rounded-full p-1.5 pr-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                      />
                      <div className="text-left">
                        <h4 className="text-sm font-extrabold text-neutral-900 leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#A81717] block">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-neutral-800/80 bg-white/40 px-2 py-0.5 rounded-full border border-white/30 hidden sm:inline-block">
                      Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Social Trust Strip */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Over 1,400+ 5-star partner reviews</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>100% verified enterprise telemetry</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C81E1E]" />
            <span>Click any card for full case study &amp; metrics</span>
          </div>
        </div>
      </div>

      {/* Interactive Verified Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C81E1E] via-[#FAB833] to-[#C81E1E]" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Author Header */}
              <div className="flex items-center gap-4 mb-5 pt-2">
                <img
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FAB833] shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900">
                      {selectedReview.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#C81E1E]">
                    {selectedReview.role} • {selectedReview.company}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedReview.date}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating & Metric Callout */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(selectedReview.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FAB833] text-[#FAB833]"
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1">
                      5.0 Out of 5.0
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Verified through automated dispatch logs
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-[#C81E1E] bg-red-50 border border-red-200 px-2.5 py-1 rounded-xl block">
                    {selectedReview.metric}
                  </span>
                </div>
              </div>

              {/* Full Testimonial Story */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase">
                  Full Customer Story
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                  "{selectedReview.fullReview}"
                </p>
              </div>

              {/* Interactive Audio Player Simulator */}
              <div className="bg-slate-900 text-white rounded-2xl p-3.5 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-8 h-8 rounded-full bg-[#C81E1E] text-white flex items-center justify-center hover:scale-105 transition cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold">
                    {isPlayingAudio ? 'Playing Verified Audio...' : 'Listen to Voice Testimonial'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[4, 12, 8, 16, 6, 14, 10, 18, 9, 12].map((height, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full ${
                        isPlayingAudio
                          ? 'bg-[#FAB833] animate-pulse'
                          : 'bg-slate-700'
                      }`}
                      style={{
                        height: isPlayingAudio ? `${height}px` : '6px',
                        transition: 'height 0.2s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Helpful Button with Confetti */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">
                  Was this testimonial helpful?
                </span>
                <button
                  onClick={() => handleHelpfulClick(selectedReview.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    helpfulVotes[selectedReview.id]
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>
                    {helpfulVotes[selectedReview.id] ? 'Thank You!' : 'Helpful'}{' '}
                    ({selectedReview.helpfulCount + (helpfulVotes[selectedReview.id] ? 1 : 0)})
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
