import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Play,
  ThumbsUp,
  PieChart,
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle2,
  X,
  Volume2,
  VolumeX,
  ShieldAlert,
  Award
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const About_TeamTrust = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showMetricModal, setShowMetricModal] = useState(null); // 'growth' | 'revenue' | null
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleConfetti = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-4 sm:p-6 lg:p-8 font-jakarta shadow-xl border border-slate-200/70 text-slate-900 select-none">
      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-6 lg:gap-8 items-stretch`}>
        
        {/* ================= LEFT COLUMN: CONTENT CARD ================= */}
        <div className={`bg-[#f6f8fb] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-lg shadow-slate-900/5 border border-slate-200/60 ${isMobile ? '' : 'lg:col-span-6 xl:col-span-6'}`}>
          <div>
            {/* Top Badge: About Company */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-amber-500 shadow-sm shadow-rose-500/20 mb-4 sm:mb-6">
              <span>About Company</span>
              <span>🔑</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-[1.15]">
              We believe in doing <br className="hidden sm:inline" />
              the right thing
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="mt-4 sm:mt-5 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-lg">
              Foster a supportive and inclusive environment where our team can thrive. We believe in doing the right thing, always.
            </p>

            {/* Two White Metric Feature Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Growth */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowMetricModal('growth')}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-left cursor-pointer group"
              >
                {/* Amber Thumbs-up Square Icon */}
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-400/25 group-hover:scale-105 transition-transform">
                  <ThumbsUp className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-1">
                  Growth
                </h3>
                <p className="text-slate-500 text-xs sm:text-[0.82rem] leading-relaxed">
                  Our mission's to drive grow & improve progress.
                </p>
              </motion.div>

              {/* Card 2: Revenue */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowMetricModal('revenue')}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-left cursor-pointer group"
              >
                {/* Mint Pie-Chart Square Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#22c55e] text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                  <PieChart className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-1">
                  Revenue
                </h3>
                <p className="text-slate-500 text-xs sm:text-[0.82rem] leading-relaxed">
                  Our mission's to drive grow & improve progress.
                </p>
              </motion.div>

            </div>
          </div>

          {/* Learn More Dark Pill Button */}
          <div className="mt-8 sm:mt-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMetricModal('growth')}
              className="inline-flex items-center gap-2.5 bg-[#181d27] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-2xl shadow-lg shadow-slate-900/20 transition cursor-pointer group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: TEAM HUDDLE PHOTO CARD WITH PLAY BUTTON ================= */}
        <div className={`relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] shadow-lg shadow-slate-900/5 bg-slate-100 flex items-center justify-center group ${isMobile ? '' : 'lg:col-span-6 xl:col-span-6'}`}>
          {/* Main Background Image */}
          <img
            src="./assets/team-hands-huddle.jpg"
            alt="Creative team colleagues stacking hands together in collaboration over an office meeting table"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Ambient Lighting Gradient */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors pointer-events-none" />

          {/* Central Pulsing Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowVideoModal(true)}
            className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md text-slate-900 flex items-center justify-center shadow-2xl shadow-black/30 hover:bg-white transition cursor-pointer border border-white/60"
            aria-label="Play culture video reel"
          >
            {/* Animated Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-white/60 animate-ping opacity-30 pointer-events-none" />
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-900 ml-1 text-slate-900" />
          </motion.button>

          {/* Floating Corner Culture Badge */}
          <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-slate-800 shadow-lg border border-white/80 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Culture Reel • 01:45 min</span>
          </div>
        </div>

      </div>

      {/* ================= MODAL: VIDEO CULTURE REEL ================= */}
      <AnimatePresence>
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideoModal(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                    <Play className="w-4 h-4 fill-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Our Culture & Ethos</h3>
                    <p className="text-[11px] text-slate-500">Filmed at our Global Headquarters</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Interactive Video Screen */}
              <div className="relative mt-4 rounded-2xl overflow-hidden bg-slate-900 aspect-video flex flex-col justify-between p-4 text-white">
                <img
                  src="./assets/team-hands-huddle.jpg"
                  alt="Team reel preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                    LIVE STREAM REPLAY • 4K
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 transition"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="relative z-10 text-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 mx-auto rounded-full bg-white/90 text-slate-900 flex items-center justify-center hover:scale-105 transition"
                  >
                    <Play className="w-6 h-6 fill-slate-900 ml-1" />
                  </button>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs font-semibold bg-black/50 p-2 rounded-xl backdrop-blur-sm">
                  <span>"Doing the right thing, even when no one is looking."</span>
                  <span className="font-mono text-emerald-400">01:45</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handleConfetti}
                  className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Cheer for the Team 🎉</span>
                </button>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  Close Reel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL: GROWTH & REVENUE BREAKDOWN ================= */}
      <AnimatePresence>
        {showMetricModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMetricModal(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-white ${showMetricModal === 'growth' ? 'bg-amber-400' : 'bg-emerald-500'}`}>
                    {showMetricModal === 'growth' ? <ThumbsUp className="w-4 h-4" /> : <PieChart className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {showMetricModal === 'growth' ? 'Sustainable Team Growth' : 'Revenue Performance'}
                    </h3>
                    <p className="text-[11px] text-slate-500">Corporate Transparency Pillar</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMetricModal(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                {showMetricModal === 'growth' ? (
                  <>
                    <p>
                      We measure growth not just by headcount, but by internal promotion rate, psychological safety, and team retention:
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200/60">
                        <div className="text-xl font-bold text-amber-700">94.2%</div>
                        <div className="text-[11px] text-amber-800">Retention Rate</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <div className="text-xl font-bold text-slate-800">4.9 / 5</div>
                        <div className="text-[11px] text-slate-500">Team Satisfaction</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Responsible financial engineering reinvested into employee development and sustainable client outcomes:
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200/60">
                        <div className="text-xl font-bold text-emerald-700">+142%</div>
                        <div className="text-[11px] text-emerald-800">YoY Organic Run-Rate</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <div className="text-xl font-bold text-slate-800">100%</div>
                        <div className="text-[11px] text-slate-500">Self-Sustaining</div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-right">
                <button
                  onClick={() => setShowMetricModal(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
