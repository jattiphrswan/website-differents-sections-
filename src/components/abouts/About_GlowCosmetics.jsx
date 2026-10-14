import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  TrendingUp,
  Sparkles,
  ShoppingBag,
  Star,
  Check,
  X,
  ArrowRight,
  Heart,
  ShieldCheck,
  Leaf,
  Droplets,
  Award
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const REVIEWS_DATA = [
  { id: 1, name: 'Camille R.', emoji: '😍', text: 'My skin barrier healed in just 7 days. The scent is heavenly!' },
  { id: 2, name: 'Elena V.', emoji: '😊', text: 'Leaves such a natural dewy glow without feeling greasy at all.' },
  { id: 3, name: 'Maya S.', emoji: '🤩', text: '50% off made me buy 3 bottles — holy grail serum!' },
  { id: 4, name: 'Sophie L.', emoji: '🥰', text: 'Clean ingredients that actually work for sensitive skin.' }
];

export const About_GlowCosmetics = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);

  // States
  const [showShopModal, setShowShopModal] = useState(false);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeEmojiIndex, setActiveEmojiIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleCopyPromo = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    navigator.clipboard?.writeText('GLOW50');
    setCopiedCode(true);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 }
      });
    } catch {}
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleAddToCart = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCartCount((c) => c + 1);
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#fda4af', '#f472b6']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#fbf9f8] p-6 sm:p-10 lg:p-14 font-sans shadow-2xl border border-rose-950/5 text-slate-900 select-none overflow-hidden">
      
      {/* Ambient warm rose blush background blur */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-amber-50/50 rounded-full blur-2xl pointer-events-none -z-0" />

      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-10 lg:gap-14 items-center`}>
        
        {/* ================= LEFT COLUMN: 3-PHOTO EDITORIAL COLLAGE ================= */}
        <div className={`relative flex items-center justify-center ${isMobile ? '' : 'lg:col-span-6 xl:col-span-7'}`}>
          
          <div className="relative w-full max-w-[540px] grid grid-cols-12 gap-3.5 sm:gap-4.5 items-start">
            
            {/* Column A (Left): 2 Stacked Photo Cards */}
            <div className="col-span-6 flex flex-col gap-3.5 sm:gap-4.5 relative z-10">
              
              {/* Photo 1: Hand holding lavender & peony serum bottle */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-white/80 group">
                <img
                  src="/assets/skincare-serum-hand.jpg"
                  alt="Aura lavender and peony serum bottle held in feminine hand"
                  className="w-full h-[200px] sm:h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Signature Circular 'Buy now' Floating Badge */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShopModal(true)}
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-slate-900 shadow-2xl border border-slate-100 flex flex-col items-center justify-center font-extrabold text-[11px] sm:text-xs tracking-tight cursor-pointer z-30 hover:bg-rose-50 transition"
                  title="Quick View & Buy Now"
                >
                  <span className="leading-tight text-center">Buy<br />now</span>
                </motion.button>
              </div>

              {/* Photo 2 (Bottom): Hand applying botanical cleansing lotion */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-white/80 group">
                <img
                  src="/assets/skincare-cleanser-bottle.jpg"
                  alt="Botanical blossom facial lotion application"
                  className="w-full h-[180px] sm:h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

            {/* Column B (Right): Floating 30,000+ Stat Card + Flatlay Photo */}
            <div className="col-span-6 flex flex-col gap-3.5 sm:gap-4.5 relative z-20 pt-2 sm:pt-4">
              
              {/* Floating Top Card: 30,000+ Sales & Client Avatars */}
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-100/90 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    30,000+
                  </span>
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1 leading-snug">
                  Sales in July 2021 with 5 star ratings and happy clients.
                </p>

                {/* Divider Line */}
                <div className="my-2.5 h-px bg-slate-100" />

                {/* Client Avatar Pill Row */}
                <div className="flex items-center -space-x-1.5 overflow-hidden">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&auto=format&fit=crop&q=80'
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Happy customer avatar"
                      className="inline-block w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                  <span className="text-[10px] font-bold text-rose-600 pl-2">
                    4.9★
                  </span>
                </div>
              </motion.div>

              {/* Photo 3: Cosmetic jars flatlay with 50% OFF badge */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-white/80 group">
                <img
                  src="/assets/skincare-flatlay-jars.jpg"
                  alt="Lumière Botanica hydrating cream and toner flatlay with pink petals"
                  className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* 50% OFF Badge */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyPromo}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black text-slate-900 shadow-md border border-slate-100 cursor-pointer"
                  title="Click to copy promo code GLOW50"
                >
                  {copiedCode ? 'COPIED!' : '50% OFF'}
                </motion.button>
              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL CONTENT & CTA ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-6 xl:col-span-5'}`}>
          
          {/* Eyebrow Label */}
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#b85d69] mb-2 sm:mb-3">
            A B I T
          </span>

          {/* Main Display Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.12]">
            ABOUT US
          </h2>

          {/* Editorial Paragraph */}
          <p className="mt-5 sm:mt-6 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-md font-normal">
            Rooted in restorative botanical science, we formulate clean, dermatologically proven skincare rituals that harmonize with your skin’s natural rhythm. Every drop is crafted with cruelty-free floral actives to hydrate, protect, and illuminate your authentic glow.
          </p>

          {/* EXPLORE MORE Button */}
          <div className="mt-7 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowStoryModal(true)}
              className="bg-[#b85d69] hover:bg-[#a34e5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-[#b85d69]/25 transition cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>EXPLORE MORE</span>
              <ArrowRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Social Proof & Emoji Best Ratings */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/70">
            <span className="text-xs font-semibold text-slate-400 block mb-2">
              Best ratings
            </span>

            {/* Interactive Emoji Ratings Bar */}
            <div className="flex items-center gap-3">
              {REVIEWS_DATA.map((rev, index) => {
                const isActive = activeEmojiIndex === index;
                return (
                  <button
                    key={rev.id}
                    onClick={() => setActiveEmojiIndex(index)}
                    className={`text-2xl sm:text-3xl transition-transform cursor-pointer p-1 rounded-xl ${
                      isActive ? 'scale-125 -translate-y-1 bg-rose-100/60' : 'hover:scale-110 opacity-80'
                    }`}
                    title={`${rev.name}: ${rev.text}`}
                  >
                    {rev.emoji}
                  </button>
                );
              })}
            </div>

            {/* Active Review Quote Preview */}
            <motion.p
              key={activeEmojiIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-slate-600 mt-2.5 italic"
            >
              "{REVIEWS_DATA[activeEmojiIndex].text}" — <strong className="not-italic text-slate-800">{REVIEWS_DATA[activeEmojiIndex].name}</strong>
            </motion.p>
          </div>

        </div>

      </div>

      {/* ================= MODAL 1: BUY NOW QUICK SHOP DRAWER ================= */}
      <AnimatePresence>
        {showShopModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-sm font-bold">
                    🌸
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">Aura Botanical Reserve</h3>
                    <p className="text-[11px] text-slate-500">Limited Batch • Cold-Pressed Formula</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowShopModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 flex gap-4 items-center p-3 bg-rose-50/50 rounded-2xl border border-rose-100">
                <img
                  src="/assets/skincare-serum-hand.jpg"
                  alt="Aura Serum"
                  className="w-18 h-20 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Lavender &amp; Peony Elixir (30ml)</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-extrabold text-[#b85d69]">$38.00</span>
                    <span className="text-xs text-slate-400 line-through">$76.00</span>
                    <span className="text-[10px] bg-rose-600 text-white font-extrabold px-1.5 py-0.2 rounded">50% OFF</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Hydration, elasticity &amp; cellular repair</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Certified Organic Peony Petals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hypoallergenic &amp; Dermatologist Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Express Shipping on Orders Over $50</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#b85d69] hover:bg-[#a34e5a] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-rose-900/20 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag ({cartCount})</span>
                </button>
                <button
                  onClick={() => setShowShopModal(false)}
                  className="px-4 py-3.5 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 2: EXPLORE MORE BOTANICAL STORY ================= */}
      <AnimatePresence>
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-sm">
                    🌿
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">The Aura Botanical Standard</h3>
                    <p className="text-xs text-slate-500">Pure Florals • Ethical Science • Visible Transformation</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-5 space-y-3.5">
                {[
                  {
                    icon: <Leaf className="w-4 h-4 text-rose-700" />,
                    title: 'Provence Flower Petal Extraction',
                    desc: 'Harvested exclusively at dawn when botanical active concentration is at its peak.'
                  },
                  {
                    icon: <Droplets className="w-4 h-4 text-rose-700" />,
                    title: 'Triple Molecular Hyaluronic Acid',
                    desc: 'Penetrates deep into epidermis layers for sustained 72-hour moisture locking.'
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4 text-rose-700" />,
                    title: 'Clean Promise: 0% Fillers',
                    desc: 'No parabens, no synthetic sulfates, no artificial dyes — 100% biodegradable glass jars.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-rose-50/40 rounded-2xl border border-rose-100 flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100/80 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h5>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowStoryModal(false)}
                className="w-full mt-6 bg-[#b85d69] hover:bg-[#a34e5a] text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-rose-900/20"
              >
                Close Story
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
