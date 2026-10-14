import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ChevronRight,
  X,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const VALUED_REVIEWS = [
  {
    id: 'david',
    name: 'David Johnson',
    role: 'Financial Analyst',
    company: 'Apex Global Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    quote: 'Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    metric: '48% Faster Financial Modeling'
  },
  {
    id: 'alex',
    name: 'Alex Williams',
    role: 'Software Engineer',
    company: 'Veloce Data Systems',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-matthew.jpg',
    quote: 'Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    metric: 'Zero Production Incident in 18 Months'
  }
];

export const Testimonials_ValuedBlue = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showValuedModal, setShowValuedModal] = useState(false);
  const [activeCardModal, setActiveCardModal] = useState(null);

  const handleReadMore = () => {
    setShowValuedModal(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200 bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[580px] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Header with Title and Royal Blue Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="inline-block">
              <span className="text-xs font-bold text-slate-900 tracking-wide border-b-2 border-slate-900 pb-0.5">
                Client Reviews
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Testimonials from Our<br />Valued Customers
            </h2>
          </div>

          <button
            onClick={handleReadMore}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black text-white bg-[#0052FF] hover:bg-[#0045d8] shadow-lg shadow-blue-500/25 active:scale-95 transition cursor-pointer self-start sm:self-auto"
          >
            <span>Read More</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2 Wide Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {VALUED_REVIEWS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveCardModal(item)}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="flex items-start gap-5">
                {/* Avatar with Royal Blue Double Quote Badge Overlapping */}
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackAvatar;
                    }}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                  />
                  {/* Royal Blue Double Quote Badge */}
                  <div className="absolute -bottom-2 -right-1.5 w-7 h-7 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-md">
                    <span className="text-base font-serif font-black leading-none select-none">
                      ❝
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal flex-1">
                  {item.quote}
                </p>
              </div>

              {/* Author Row with Orange Wavy Waves Icon */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm">
                {/* Orange Wavy Icon */}
                <div className="text-amber-500 font-bold select-none text-base">
                  ≈
                </div>
                <div>
                  <strong className="font-extrabold text-slate-900">
                    {item.name},
                  </strong>{' '}
                  <span className="text-[#0052FF] font-semibold">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Impact Modal */}
      <AnimatePresence>
        {showValuedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setShowValuedModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-[#0052FF]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Customer Trust Index</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Delivering Excellence for 1,200+ Enterprises
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Every client partnership is backed by guaranteed SLAs, dedicated technical account management, and zero vendor lock-in.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { metric: '99.4%', label: 'CSAT Customer Score' },
                  { metric: '<15 min', label: 'Average Support SLA' },
                  { metric: '100%', label: 'GDPR & SOC2 Certified' },
                  { metric: 'Zero', label: 'Vendor Lock-in' }
                ].map((stat, i) => (
                  <div key={i} className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100">
                    <div className="text-lg font-black text-slate-900">{stat.metric}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowValuedModal(false)}
                className="w-full py-2.5 rounded-xl text-xs font-black bg-[#0052FF] hover:bg-[#0045d8] text-white shadow-lg shadow-blue-500/25 transition cursor-pointer"
              >
                Download Customer Success Report
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Detail Modal */}
      <AnimatePresence>
        {activeCardModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setActiveCardModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src={activeCardModal.avatar}
                  alt={activeCardModal.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0052FF]"
                />
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {activeCardModal.name}
                  </h3>
                  <p className="text-xs text-[#0052FF] font-semibold">{activeCardModal.role} • {activeCardModal.company}</p>
                </div>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 mb-5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">
                  Demonstrated Metric
                </span>
                <strong className="text-sm font-extrabold text-slate-900">
                  {activeCardModal.metric}
                </strong>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                "{activeCardModal.quote}"
              </blockquote>

              <button
                onClick={() => setActiveCardModal(null)}
                className="w-full py-2.5 rounded-xl text-xs font-black bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer"
              >
                Close Customer Story
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
