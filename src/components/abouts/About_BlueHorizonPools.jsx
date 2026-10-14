import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Waves,
  Wrench,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  Phone,
  Compass,
  Calendar,
  Layers
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const About_BlueHorizonPools = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [activePoolType, setActivePoolType] = useState('infinity'); // 'infinity' | 'indoor' | 'plunge'

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-14 font-jakarta shadow-xl border border-slate-200/70 text-slate-900 select-none overflow-hidden">
      
      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-8 lg:gap-14 items-center`}>
        
        {/* ================= LEFT COLUMN: DUAL POOL PHOTO COMPOSITION ================= */}
        <div className={`relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center ${isMobile ? '' : 'lg:col-span-5 xl:col-span-5'}`}>
          
          {/* Subtle Water Reflection Gradient Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/60 via-blue-50/40 to-transparent rounded-3xl -z-0" />

          {/* Top-Left Photo: Sunlit Resort Pool Deck */}
          <motion.div
            whileHover={{ y: -4 }}
            className="absolute top-0 left-0 sm:left-2 z-20 w-[200px] sm:w-[250px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group"
          >
            <img
              src="./assets/luxury-resort-pool.jpg"
              alt="Luxury resort swimming pool with wooden sun loungers and ocean view"
              className="w-full h-[240px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-2 sm:p-2.5 bg-white text-left">
              <div className="text-[11px] font-bold text-slate-900">Mayfair Private Estate</div>
              <div className="text-[10px] text-blue-600 font-semibold">Bespoke Infinity Design</div>
            </div>
          </motion.div>

          {/* Bottom-Right Photo: Pool Ladder with Mosaic Water */}
          <motion.div
            whileHover={{ y: -4 }}
            className="absolute bottom-2 right-0 sm:right-2 z-20 w-[190px] sm:w-[230px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group"
          >
            <img
              src="./assets/pool-ladder-tiles.jpg"
              alt="Stainless steel swimming pool ladder immersed in clear azure blue mosaic water"
              className="w-full h-[220px] sm:h-[270px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-2 sm:p-2.5 bg-white text-left">
              <div className="text-[11px] font-bold text-slate-900">Precision Hydro-Tech</div>
              <div className="text-[10px] text-emerald-600 font-semibold">316 Marine Grade Stainless</div>
            </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN: BLUE HORIZON DETAILS ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-7 xl:col-span-7'}`}>
          
          {/* Label with Blue Line */}
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-8 h-0.5 bg-[#0066cc]" />
            <span className="text-xs sm:text-sm font-bold text-[#0066cc] tracking-wide">
              The Blue Horizon Pools
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.2]">
            Experience a worry-free <br className="hidden sm:inline" />
            summer with your pool.
          </h2>

          {/* Body Paragraphs */}
          <div className="mt-4 sm:mt-5 space-y-3 text-slate-600 text-xs sm:text-sm lg:text-[0.915rem] leading-relaxed max-w-xl">
            <p>
              <strong className="text-slate-900 font-semibold">Blue Horizon Pools</strong>, based in London, crafts luxurious aquatic retreats tailored to your desires. With meticulous design and top-tier craftsmanship, we turn ordinary spaces into havens of relaxation and style.
            </p>
            <p>
              Our team collaborates closely with you to ensure every detail reflects your vision. From sleek modern designs to timeless classics, we create pools that elevate your lifestyle. Using premium materials and advanced techniques, our installations stand the test of time. Experience the epitome of luxury with Blue Horizon Pools, where your oasis awaits.
            </p>
          </div>

          {/* Two Outlined Feature Items */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-100">
                <Waves className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  Your Dream, Your Pool
                </h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  We customize every pool to match your style, creating a unique oasis just for you.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-100">
                <Wrench className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  Built to Last, Built for You
                </h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  With the best materials and expert craftsmanship, our pools promise enduring quality for years of enjoyment.
                </p>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="mt-8 pt-2 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowConsultModal(true)}
              className="bg-[#0066cc] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-lg shadow-blue-600/20 transition cursor-pointer flex items-center gap-2"
            >
              <span>Book Design Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <button
              onClick={() => setShowConsultModal(true)}
              className="text-xs font-bold text-slate-700 hover:text-[#0066cc] transition flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#0066cc]" />
              <span>Explore 2026 Portfolio</span>
            </button>
          </div>

        </div>

      </div>

      {/* ================= DESIGN ESTIMATOR MODAL ================= */}
      <AnimatePresence>
        {showConsultModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConsultModal(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Blue Horizon Design Studio</h3>
                  <p className="text-[11px] text-slate-500">London Architecture & Aquatic Engineering</p>
                </div>
                <button
                  onClick={() => setShowConsultModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4 text-xs text-slate-600">
                <p>
                  Every Blue Horizon pool is built using our proprietary leak-proof concrete monolith engineering, automated UV filtration, and smart thermal heating.
                </p>

                {/* Pool Style Selector */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                    Select Your Pool Vision
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'infinity', name: 'Infinity Edge' },
                      { id: 'indoor', name: 'Indoor Spa' },
                      { id: 'plunge', name: 'Thermal Plunge' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setActivePoolType(t.id)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          activePoolType === t.id
                            ? 'bg-[#0066cc] text-white shadow-sm'
                            : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200/60'
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span><strong>15-Year Structural Shell Warranty</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span><strong>Full Planning Permission Handled</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span><strong>Automated Saltwater Mineral Balance</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0066cc]">
                  Site Surveys Available This Week
                </span>
                <button
                  onClick={() => setShowConsultModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0066cc] hover:bg-blue-700 transition cursor-pointer"
                >
                  Confirm Request
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
