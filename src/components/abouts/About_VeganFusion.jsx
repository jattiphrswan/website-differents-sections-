import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Leaf,
  UtensilsCrossed,
  Heart,
  X,
  Check,
  Award
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const ORBIT_DISHES = [
  {
    id: 'soup',
    name: 'Roasted Pumpkin Velouté',
    angle: 30,
    radius: 135,
    size: 58,
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=120&auto=format&fit=crop&q=80',
    tag: 'Warm & Creamy'
  },
  {
    id: 'quinoa',
    name: 'Heirloom Quinoa Tabbouleh',
    angle: 85,
    radius: 175,
    size: 56,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&auto=format&fit=crop&q=80',
    tag: 'High Protein'
  },
  {
    id: 'curry',
    name: 'Coconut Palak Curry',
    angle: 140,
    radius: 180,
    size: 56,
    img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=120&auto=format&fit=crop&q=80',
    tag: 'Aromatic'
  },
  {
    id: 'dessert',
    name: 'Wild Berry Chia Cheesecake',
    angle: 210,
    radius: 190,
    size: 56,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&auto=format&fit=crop&q=80',
    tag: 'Raw Vegan'
  },
  {
    id: 'wings',
    name: 'Glazed Sesame Cauliflower',
    angle: 270,
    radius: 170,
    size: 58,
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=120&auto=format&fit=crop&q=80',
    tag: 'Crispy Snack'
  },
  {
    id: 'avotoast',
    name: 'Sourdough Smashed Avo',
    angle: 325,
    radius: 145,
    size: 54,
    img: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=120&auto=format&fit=crop&q=80',
    tag: 'Daily Fresh'
  }
];

export const About_VeganFusion = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedDish, setSelectedDish] = useState(null);
  const [showMenuModal, setShowMenuModal] = useState(false);

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-14 font-jakarta shadow-xl border border-slate-200/70 text-slate-900 select-none overflow-hidden">
      
      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-8 lg:gap-14 items-center`}>
        
        {/* ================= LEFT COLUMN: CONCENTRIC ORBIT PLANETARY PLATES ================= */}
        <div className={`relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center ${isMobile ? '' : 'lg:col-span-6 xl:col-span-6'}`}>
          
          {/* Orbital Concentric Circular Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1 (Inner) */}
            <div className="w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] rounded-full border border-emerald-400/30" />
            {/* Ring 2 (Middle) */}
            <div className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border border-emerald-400/25" />
            {/* Ring 3 (Outer) */}
            <div className="absolute w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] rounded-full border border-emerald-400/20" />
          </div>

          {/* Node Satellite Green Dots on Rings */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="absolute w-2 h-2 rounded-full bg-emerald-500 top-12 left-1/2 -translate-x-1/2 shadow-sm" />
            <span className="absolute w-2 h-2 rounded-full bg-emerald-500 bottom-16 left-1/3 shadow-sm" />
            <span className="absolute w-2 h-2 rounded-full bg-emerald-500 right-10 top-1/3 shadow-sm" />
            <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-600 left-8 top-1/2 shadow-sm" />
          </div>

          {/* Central Plate: Signature Vegan Buddha Bowl */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowMenuModal(true)}
            className="relative z-20 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full shadow-2xl border-4 border-white bg-slate-900 cursor-pointer overflow-hidden group"
          >
            <img
              src="./assets/vegan-buddha-bowl.jpg"
              alt="Central Gourmet Vegan Buddha Bowl with falafel, avocado and broccoli"
              className="w-full h-full object-cover group-hover:rotate-6 transition-transform duration-500"
            />
            {/* Center Hover Label */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-bold text-center px-2">
              Signature Bowl 🌿
            </div>
          </motion.div>

          {/* Surrounding Orbital Plates */}
          {!isMobile &&
            ORBIT_DISHES.map((dish) => {
              const rad = (dish.angle * Math.PI) / 180;
              const x = Math.cos(rad) * dish.radius;
              const y = Math.sin(rad) * dish.radius;

              return (
                <motion.div
                  key={dish.id}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setSelectedDish(dish)}
                  className="absolute z-20 rounded-full shadow-lg border-2 border-white bg-white cursor-pointer overflow-hidden group"
                  title={dish.name}
                >
                  <img
                    src={dish.img}
                    alt={dish.name}
                    style={{ width: `${dish.size}px`, height: `${dish.size}px` }}
                    className="object-cover rounded-full group-hover:brightness-105 transition"
                  />
                </motion.div>
              );
            })}

          {/* Mobile Fallback Dish Row */}
          {isMobile && (
            <div className="absolute bottom-2 flex items-center justify-center gap-2 z-20">
              {ORBIT_DISHES.slice(0, 4).map((dish) => (
                <img
                  key={dish.id}
                  src={dish.img}
                  alt={dish.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
              ))}
            </div>
          )}

        </div>

        {/* ================= RIGHT COLUMN: VEGAN FUSION CONTENT & STATS ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-6 xl:col-span-6'}`}>
          
          {/* Label */}
          <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wide mb-2">
            About Vegan Fusion
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.2]">
            Plant-Powered Paradise
          </h2>

          {/* Body Paragraph */}
          <p className="mt-4 sm:mt-5 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-xl">
            Indulge in a symphony of plant-based flavors at our vegan cafe, where each dish is crafted with passion and compassion. From savory delights to sweet surprises, we invite you to savor a culinary journey that nourishes both your palate and the planet.
          </p>

          {/* 3 Impact Stats Row */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 border-t border-b border-slate-100 py-6">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#65a30d] tracking-tight">
                50+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Delicious Foods
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#65a30d] tracking-tight">
                2K+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Happy Customers
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#65a30d] tracking-tight">
                4+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Know More Action */}
          <div className="mt-6">
            <button
              onClick={() => setShowMenuModal(true)}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#65a30d] hover:text-[#4d7c0f] transition cursor-pointer group"
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>

      {/* ================= MODAL: TASTING MENU & NUTRITION ================= */}
      <AnimatePresence>
        {(showMenuModal || selectedDish) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowMenuModal(false);
                setSelectedDish(null);
              }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-lime-100 text-[#65a30d] flex items-center justify-center font-bold">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {selectedDish ? selectedDish.name : 'The Vegan Fusion Tasting Menu'}
                    </h3>
                    <p className="text-[11px] text-slate-500">100% Plant-Based & Locally Sourced</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowMenuModal(false);
                    setSelectedDish(null);
                  }}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  We partner with organic micro-farms to ensure our plant-based dishes offer complete amino-acid profiles without compromising on texture or culinary delight.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 bg-lime-50 rounded-2xl border border-lime-100">
                    <div className="font-bold text-slate-900 text-xs">🌿 Zero Cholesterol</div>
                    <div className="text-[11px] text-slate-500">Naturally heart-healthy.</div>
                  </div>
                  <div className="p-3 bg-lime-50 rounded-2xl border border-lime-100">
                    <div className="font-bold text-slate-900 text-xs">⚡ Gut Friendly</div>
                    <div className="text-[11px] text-slate-500">Prebiotic & fiber-dense.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#65a30d]">
                  Table Reservations Open Today
                </span>
                <button
                  onClick={() => {
                    setShowMenuModal(false);
                    setSelectedDish(null);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#65a30d] hover:bg-[#4d7c0f] transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
