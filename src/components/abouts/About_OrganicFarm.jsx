import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Package,
  Carrot,
  Check,
  ArrowRight,
  Sparkles,
  Leaf,
  Apple,
  Award,
  Users,
  X,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const About_OrganicFarm = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [variant, setVariant] = useState('farmer'); // 'farmer' | 'harvest'
  const [showCertModal, setShowCertModal] = useState(false);
  const [activeProduceTab, setActiveProduceTab] = useState('berries');

  const isFarmer = variant === 'farmer';

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-5 sm:p-8 lg:p-12 font-jakarta shadow-xl border border-emerald-100/80 text-slate-900 overflow-hidden select-none">
      
      {/* Background Decorative Organic Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50 pointer-events-none -ml-20 -mb-20" />

      {/* Top Variant Toggle Pill (Discreet & Elegant) */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
            100% Certified Organic Agriculture
          </span>
        </div>

        {/* Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full text-xs">
          <button
            onClick={() => setVariant('farmer')}
            className={`px-3 py-1 rounded-full font-bold transition cursor-pointer ${
              isFarmer
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Farmer Variant
          </button>
          <button
            onClick={() => setVariant('harvest')}
            className={`px-3 py-1 rounded-full font-bold transition cursor-pointer ${
              !isFarmer
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Harvest Variant
          </button>
        </div>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-8 lg:gap-12 items-center`}>
        
        {/* ================= LEFT COLUMN: FARMER ARCH & BADGES ================= */}
        <div className={`relative flex items-center justify-center ${isMobile ? '' : 'lg:col-span-5 xl:col-span-5'}`}>
          
          {/* Decorative Leaf Graphic Backdrop */}
          <div className="absolute -top-6 -left-6 z-0 w-44 h-44 rounded-full bg-emerald-100/60 blur-xl pointer-events-none" />

          {/* Large "25 YEARS EXPERIENCE" Vertical/Top Badge */}
          <div className="absolute top-2 right-4 sm:right-6 z-20 flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-[#2e7d32] tracking-tighter leading-none">
              25
            </span>
            <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase [writing-mode:vertical-lr] rotate-180 mt-1">
              YEARS EXPERIENCE
            </span>
          </div>

          {/* Main Arched Photo Container */}
          <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] h-[440px] sm:h-[490px] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-emerald-50">
            <AnimatePresence mode="wait">
              <motion.img
                key={variant}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                src={isFarmer ? '/assets/organic-farmer.jpg' : '/assets/female-farmer-strawberries.jpg'}
                alt={isFarmer ? 'Organic farmer standing proudly in green fields' : 'Farmer holding fresh strawberry harvest basket'}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle Gradient Shade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Floating Client Count Badge */}
          <motion.div
            key={variant + '-badge'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-6 sm:left-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-emerald-100 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                {isFarmer ? '1200+' : '1495+'}
              </div>
              <div className="text-[11px] font-semibold text-slate-500">
                {isFarmer ? 'Happy Clients' : 'Happy Customers'}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: HEADLINE, HIGHLIGHTS & BULLETS ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-7 xl:col-span-7'}`}>
          
          {/* Category Tag */}
          <span className="text-xs sm:text-sm font-bold text-[#2e7d32] uppercase tracking-wider mb-2">
            {isFarmer ? 'About Our Organic Food' : 'ABOUT US'}
          </span>

          {/* Heading with leafy green accents */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.2]">
            {isFarmer ? (
              <>
                Better you will feel if <span className="text-[#388e3c]">you</span> eat a{' '}
                <span className="text-[#388e3c]">healthy</span> meal
              </>
            ) : (
              <>
                It's always better when it's{' '}
                <span className="text-[#388e3c]">natural</span>
              </>
            )}
          </h2>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-5 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-xl">
            Eating organic is said to have multiple benefits, including fresher fruits and veggies and more antioxidants. If you are looking to taste-test organic options or simply transition your diet to being completely organic, these options are clean, nutrient-dense, and delicious.
          </p>

          {/* Two Green Circular Feature Items */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5 bg-emerald-50/50 p-3 sm:p-4 rounded-2xl border border-emerald-100/60">
              <div className="w-12 h-12 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                <Package className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  Delivering best products
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Direct from certified soil to your family table.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5 bg-emerald-50/50 p-3 sm:p-4 rounded-2xl border border-emerald-100/60">
              <div className="w-12 h-12 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                <Carrot className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  Healthy food from farm
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Zero chemical sprays, non-GMO heirloom crops.
                </p>
              </div>
            </div>

          </div>

          {/* Checkmark Bullets */}
          <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#2e7d32] stroke-[3] shrink-0" />
              <span>Phasellus euismod hendrerit elit. Maecenas dapibus ligula</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#2e7d32] stroke-[3] shrink-0" />
              <span>Phasellus euismod hendrerit elit. Maecenas dapibus</span>
            </div>
          </div>

          {/* Bottom Action Pill Button */}
          <div className="mt-8 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowCertModal(true)}
              className="bg-[#181d27] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg shadow-slate-900/15 transition cursor-pointer flex items-center gap-2"
            >
              <span>More About</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <button
              onClick={() => setShowCertModal(true)}
              className="text-xs font-bold text-[#2e7d32] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>USDA Organic Certificate ↗</span>
            </button>
          </div>

        </div>

      </div>

      {/* ================= CERTIFICATE & FARM STANDARDS MODAL ================= */}
      <AnimatePresence>
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertModal(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">25 Years of Organic Purity</h3>
                    <p className="text-[11px] text-slate-500">Bio-Dynamic Farming Certification</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  Every strawberry, leafy green, and heirloom vegetable harvested on our acreage complies with strict soil conservation and zero-synthetic fertilizer charters.
                </p>

                <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>100% Regenerative Soil:</strong> Mineral-rich living compost rotated seasonally.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Farm-to-Door in 24 Hours:</strong> Harvested at dawn, packaged and delivered chilled.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Fair Farmer Living Wages:</strong> Transparent cooperative equity for all field hands.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-bold">
                  Accredited by Organic Growers Council
                </span>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
