import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Star,
  Check,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  X,
  Plus,
  TrendingUp,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const About_ShoppableVideo = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['Black', 'Fashion']);

  const handleAddToCart = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCartCount((prev) => prev + 1);
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-14 font-jakarta shadow-xl border border-slate-200/70 text-slate-900 select-none overflow-hidden">
      
      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-8 lg:gap-14 items-center`}>
        
        {/* ================= LEFT COLUMN: HERO CONVERSION COPY & ACTIONS ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-6 xl:col-span-5'}`}>
          
          {/* Trustpilot Review Badge */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <div className="w-5 h-5 rounded-md bg-[#00b67a] text-white flex items-center justify-center text-xs font-bold shadow-sm">
              ★
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              <strong>4.7</strong> on TrustPilot
            </span>
          </div>

          {/* Bold Punchy Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.08]">
            Boost your <br />
            conversions <br />
            instantly
          </h2>

          {/* Subtitle Paragraph */}
          <p className="mt-5 sm:mt-6 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-md">
            Packed with lightning-fast Shoppable videos, Interactive video quizzes, Live-stream shopping & more — All 3x faster than YouTube
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowDemoModal(true)}
              className="bg-[#111827] hover:bg-black text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 rounded-full shadow-lg shadow-black/15 transition cursor-pointer"
            >
              Get Started — For Free!
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowDemoModal(true)}
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 rounded-full border border-slate-300 shadow-sm transition cursor-pointer"
            >
              Book A Demo
            </motion.button>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE SHOPPABLE VIDEO PHONE MOCKUP ================= */}
        <div className={`relative min-h-[500px] sm:min-h-[560px] flex items-center justify-center ${isMobile ? '' : 'lg:col-span-6 xl:col-span-7'}`}>
          
          {/* Subtle Pink / Lilac Ambient Mesh Watercolor Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/40 via-purple-50/30 to-emerald-50/30 rounded-3xl -z-0 blur-2xl opacity-70 pointer-events-none" />

          {/* CENTRAL SMARTPHONE CONTAINER */}
          <div className="relative z-20 w-[240px] sm:w-[270px] h-[460px] sm:h-[500px] rounded-[2.5rem] bg-black p-2.5 shadow-2xl shadow-slate-900/30 border-4 border-slate-900 overflow-hidden flex flex-col justify-between">
            
            {/* Phone Screen Wallpaper Video */}
            <img
              src="/assets/shoppable-video-model.jpg"
              alt="Shoppable video model playing"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Gradient Overlays on Screen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

            {/* Top Bar of Phone */}
            <div className="relative z-10 flex items-center justify-between text-white text-[11px] font-bold px-2 pt-1">
              <span className="bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">2:01</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
              </button>
            </div>

            {/* In-Video Shoppable Product Card Drawer (Bottom of Phone) */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl text-left border border-white/60">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&auto=format&fit=crop&q=80"
                  alt="Dress thumbnail"
                  className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h5 className="text-[11px] font-bold text-slate-900 truncate">
                    SABINE Backless Maxi Dress
                  </h5>
                  <div className="text-[10px] text-slate-500 font-semibold">$100.00 USD</div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full mt-2 py-1.5 rounded-xl bg-black hover:bg-slate-900 text-white font-bold text-[11px] transition shadow-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Shop Now {cartCount > 0 ? `(${cartCount})` : ''}</span>
              </button>
            </div>

          </div>

          {/* FLOATING WIDGET 1 (Top-Left): 5 Pink Stars Badge */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-10 left-0 sm:left-4 z-30 bg-pink-100/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-pink-200/60 hidden sm:flex items-center gap-1 text-slate-900"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-black text-sm">★</span>
            ))}
          </motion.div>

          {/* FLOATING WIDGET 2 (Mid-Left): Hot Sauce Add-to-Cart Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-28 left-0 sm:left-2 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-100 hidden sm:block max-w-[125px] text-center"
          >
            <div className="relative rounded-xl overflow-hidden mb-1.5 bg-rose-50 p-1">
              <span className="absolute top-1 left-1 bg-black/60 text-white text-[9px] px-1 rounded-sm font-bold">2:01</span>
              <img
                src="https://images.unsplash.com/photo-1582515073490-39981397c445?w=120&auto=format&fit=crop&q=80"
                alt="Product"
                className="w-full h-16 object-contain"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full py-1 rounded-lg bg-black text-white text-[10px] font-bold shadow-sm hover:bg-slate-800 transition cursor-pointer"
            >
              Add to cart
            </button>
          </motion.div>

          {/* FLOATING WIDGET 3 (Bottom-Left): Add Tags To Your Video */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-0 sm:left-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 hidden sm:block max-w-[190px] text-left"
          >
            <div className="text-[11px] font-bold text-slate-900 mb-1.5">
              Add tags to your video
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Black', 'Trouser', 'Fashion'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition cursor-pointer ${
                    selectedTags.includes(tag)
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  + {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FLOATING WIDGET 4 (Top-Right): Verified Checkmarks */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-10 right-0 sm:right-4 z-30 space-y-2 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-900">
              <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px]">✓</span>
              <span>Increase Sales</span>
            </div>
            <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-900">
              <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px]">✓</span>
              <span>Add to-cart from video</span>
            </div>
          </motion.div>

          {/* FLOATING WIDGET 5 (Mid-Right): 20X Jump In Discovery Green Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-20 right-0 sm:right-4 z-30 bg-[#22a06b] text-white rounded-3xl p-4 sm:p-5 shadow-2xl max-w-[145px] text-left hidden sm:block"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">
              — UP TO
            </div>
            <div className="text-2xl sm:text-3xl font-black mt-0.5 leading-none">
              20X
            </div>
            <p className="text-[11px] text-white/90 font-medium leading-snug mt-1.5">
              Jump in product discovery
            </p>
          </motion.div>

        </div>

      </div>

      {/* ================= DEMO MODAL ================= */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDemoModal(false)}
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
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Shoppable Video Player Demo</h3>
                    <p className="text-[11px] text-slate-500">Sub-second Latency & 1-Click Checkout</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  Embed shoppable reels into Shopify, WooCommerce, or headless React frontends in under 5 minutes with zero performance impact.
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Average Video Load Speed:</span>
                    <span className="text-emerald-600 font-mono font-bold">48ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Direct In-Video Conversion:</span>
                    <span className="text-indigo-600 font-mono font-bold">8.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Bandwidth Compression:</span>
                    <span className="text-emerald-600 font-mono font-bold">-70% vs YouTube</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600">
                  Free 14-Day Full Access Trial
                </span>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-black hover:bg-slate-800 transition cursor-pointer"
                >
                  Start Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
