import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Eye,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  Volume2,
  Share2,
  TrendingUp,
  BarChart3,
  Megaphone,
  Layers,
  Sliders,
  Check,
  Zap,
  Play
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

// Pre-configured campaign metrics presets
const METRIC_PRESETS = [
  {
    id: 'omni',
    tag: 'Omni-Channel Mix',
    impressions: '400K',
    engagement: '57,25%',
    reachLabel: 'Impressions',
    rateLabel: 'Engagement Rate',
    ctr: '14.2%',
    conversions: '28,450'
  },
  {
    id: 'viral',
    tag: 'Shorts & Reels Viral',
    impressions: '1.2M',
    engagement: '68,40%',
    reachLabel: 'Video Views',
    rateLabel: 'Completion Rate',
    ctr: '18.9%',
    conversions: '89,120'
  },
  {
    id: 'b2b',
    tag: 'Enterprise B2B Blitz',
    impressions: '185K',
    engagement: '42,10%',
    reachLabel: 'Qualified Reach',
    rateLabel: 'Decision Rate',
    ctr: '9.8%',
    conversions: '12,600'
  }
];

// Partner Stack Info
const PARTNER_STACK = [
  {
    id: 'windows',
    name: 'Windows',
    tagline: 'Enterprise Cloud Infrastructure',
    description: 'Ultra-low latency edge CDN and high-throughput media encoding powered by Microsoft Azure.',
    stat: '99.99% Uptime'
  },
  {
    id: 'google',
    name: 'Google',
    tagline: 'Performance Max & Search Intent',
    description: 'Algorithmic multi-touch attribution and real-time YouTube shorts programmatic placement.',
    stat: '3.8x ROAS'
  },
  {
    id: 'meta',
    name: 'Meta',
    tagline: 'Advantage+ AI Campaign Routing',
    description: 'Dynamic creative optimization across Instagram Reels, WhatsApp channels, and Facebook feeds.',
    stat: '+140% Virality'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    tagline: 'GPT-4o Vision & Story Synthesis',
    description: 'Hyper-personalized ad scripting, multi-lingual voiceover generation, and predictive visual hooks.',
    stat: '10x Speed'
  }
];

export const About_ImpactfulStories = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);

  // States
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [activePartnerModal, setActivePartnerModal] = useState(null);
  const [shoutBubbles, setShoutBubbles] = useState([]);
  const [budgetSlider, setBudgetSlider] = useState(5000);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeMetric = METRIC_PRESETS[activePresetIndex];

  // Joyful audio synthesizer chime
  const playChimeSound = (type = 'success') => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'shout') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.18);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.3);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.32);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch {
      // AudioCtx fallback
    }
  };

  // Trigger cheerful megaphone shout animation + sound
  const handleMegaphoneShout = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    playChimeSound('shout');

    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { x: 0.72, y: 0.55 },
        colors: ['#2dd4bf', '#10b981', '#34d399', '#f59e0b', '#3b82f6']
      });
    } catch {
      // safe fallback
    }

    const phrases = [
      '🚀 +240% Reach!',
      '📣 Loud & Clear!',
      '🔥 Viral Breakthrough!',
      '✨ Audience Captivated!',
      '📈 +64% Conversions!'
    ];
    const newBubble = {
      id: Date.now() + Math.random(),
      text: phrases[Math.floor(Math.random() * phrases.length)],
      x: Math.random() * 40 - 20,
      y: Math.random() * 20 - 10
    };

    setShoutBubbles((prev) => [...prev.slice(-3), newBubble]);
    setTimeout(() => {
      setShoutBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 2200);
  };

  // Cycle through metrics on clicking the stats card
  const handleToggleMetrics = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    playChimeSound('success');
    setActivePresetIndex((prev) => (prev + 1) % METRIC_PRESETS.length);
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#fbfdfc] p-6 sm:p-10 lg:p-14 font-jakarta shadow-2xl border border-emerald-950/10 text-slate-900 select-none overflow-hidden">
      
      {/* Background Architectural Grid Pattern (Left side subtle tiles fade) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 55, 36, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 55, 36, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 25% 45%, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 25% 45%, black 40%, transparent 75%)'
        }}
      />

      {/* Ambient soft glow backdrop accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-50/60 rounded-full blur-2xl pointer-events-none -z-0" />

      {/* Main 2-Column Responsive Grid */}
      <div className={`relative z-10 grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-10 lg:gap-14 items-center`}>
        
        {/* ================= LEFT COLUMN: EDITORIAL CONTENT & CTA ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-6 xl:col-span-6'}`}>
          
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#112a1d] tracking-[-0.03em] leading-[1.12]">
            Crafting Impactful <br />
            Stories, Inspiring <br />
            Audiences
          </h2>

          {/* Subtitle Paragraph */}
          <p className="mt-6 sm:mt-7 text-slate-600 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-lg font-normal">
            Elevate your brand through cutting-edge Advertising &amp; Media Solutions that redefine innovation, captivate audiences, and drive transformative success.
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            {/* Primary Dark Button */}
            <motion.button
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                playChimeSound('success');
                setShowGetStartedModal(true);
              }}
              className="bg-[#153426] hover:bg-[#0f271c] text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-[#153426]/20 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Clean White Button */}
            <motion.button
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                playChimeSound('success');
                setShowLearnMoreModal(true);
              }}
              className="bg-white hover:bg-slate-50 text-[#153426] font-semibold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Learn More
            </motion.button>
          </div>

          {/* ================= TOOLS AND PARTNERS SECTION ================= */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/60 flex flex-col gap-4">
            <span className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
              Tools And Partners
            </span>

            {/* Partner Logos Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-slate-800">
              
              {/* 1. Windows Logo */}
              <button
                onClick={() => setActivePartnerModal(PARTNER_STACK[0])}
                className="group flex items-center gap-2 text-slate-800 hover:text-[#0078d4] transition-colors cursor-pointer"
                title="Windows / Microsoft Partner Details"
              >
                {/* Windows 4-Square Flag Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.902" />
                </svg>
                <span className="font-semibold text-base tracking-tight text-slate-900 group-hover:text-[#0078d4] transition-colors">
                  Windows
                </span>
              </button>

              {/* 2. Google Logo */}
              <button
                onClick={() => setActivePartnerModal(PARTNER_STACK[1])}
                className="group flex items-center gap-1.5 text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer"
                title="Google Partner Details"
              >
                <span className="font-bold text-lg tracking-tight font-sans text-slate-900 group-hover:text-emerald-800 transition-colors">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </button>

              {/* 3. Meta Logo */}
              <button
                onClick={() => setActivePartnerModal(PARTNER_STACK[2])}
                className="group flex items-center gap-2 text-slate-800 hover:text-[#0081fb] transition-colors cursor-pointer"
                title="Meta Partner Details"
              >
                {/* Meta Infinity Loop */}
                <svg className="w-6 h-5 fill-current text-slate-900 group-hover:text-[#0081fb] transition-colors" viewBox="0 0 24 24">
                  <path d="M16.92 6c-2.47 0-4.06 1.4-4.92 2.65C11.14 7.4 9.55 6 7.08 6 3.65 6 1 8.87 1 12.5c0 3.63 2.65 6.5 6.08 6.5 2.47 0 4.06-1.4 4.92-2.65.86 1.25 2.45 2.65 4.92 2.65 3.43 0 6.08-2.87 6.08-6.5C23 8.87 20.35 6 16.92 6zm0 10.3c-2.18 0-3.8-1.78-4.5-3.8.7-2.02 2.32-3.8 4.5-3.8 2.05 0 3.58 1.63 3.58 3.8 0 2.17-1.53 3.8-3.58 3.8zM7.08 16.3c-2.05 0-3.58-1.63-3.58-3.8 0-2.17 1.53-3.8 3.58-3.8 2.18 0 3.8 1.78 4.5 3.8-.7 2.02-2.32 3.8-4.5 3.8z" />
                </svg>
                <span className="font-semibold text-base tracking-tight text-slate-900 group-hover:text-[#0081fb] transition-colors">
                  Meta
                </span>
              </button>

              {/* 4. OpenAI Logo */}
              <button
                onClick={() => setActivePartnerModal(PARTNER_STACK[3])}
                className="group flex items-center gap-2 text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer"
                title="OpenAI Partner Details"
              >
                {/* OpenAI Rosette Emblem */}
                <svg className="w-5 h-5 fill-current text-slate-900 group-hover:text-emerald-700 transition-colors" viewBox="0 0 24 24">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6601zm-12.6413 4.1348l-2.0199-1.1638a.0804.0804 0 0 1-.038-.052V6.0668a4.4992 4.4992 0 0 1 7.37-3.4537l-.1372.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369zm1.2587-2.1293l2.8055-1.6186 2.8055 1.6186v3.2372l-2.8055 1.6186-2.8055-1.6186z" />
                </svg>
                <span className="font-semibold text-base tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  OpenAI
                </span>
              </button>

            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: SAGE GREEN HERO VISUAL CARD ================= */}
        <div className={`relative flex items-center justify-center ${isMobile ? '' : 'lg:col-span-6 xl:col-span-6'}`}>
          
          {/* Main Rounded Light Sage Green Background Container */}
          <div className="relative w-full aspect-square max-w-[530px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#cde8da] overflow-hidden shadow-2xl border border-emerald-900/10 group">
            
            {/* The leaping man image */}
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src="./assets/impact-stories-man.jpg"
              alt="Excited brand ambassador leaping with megaphone"
              className="w-full h-full object-cover object-center cursor-pointer select-none"
              onClick={handleMegaphoneShout}
            />

            {/* Click to Shout Megaphone Tooltip Badge */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleMegaphoneShout}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#153426] shadow-lg border border-white/70 flex items-center gap-1.5 cursor-pointer z-20 hover:bg-white transition"
            >
              <Megaphone className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
              <span>Click to Shout!</span>
            </motion.button>

            {/* Floating shout reaction speech bubbles */}
            <AnimatePresence>
              {shoutBubbles.map((bubble) => (
                <motion.div
                  key={bubble.id}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1.1, y: -45 }}
                  exit={{ opacity: 0, scale: 0.8, y: -90 }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                  style={{ left: `calc(50% + ${bubble.x}px)`, top: `calc(40% + ${bubble.y}px)` }}
                  className="absolute z-30 pointer-events-none bg-[#112a1d] text-emerald-300 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-2xl border border-emerald-400/30 whitespace-nowrap"
                >
                  {bubble.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* ================= FLOATING METRICS WIDGET BAR ================= */}
            <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 z-20">
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                onClick={handleToggleMetrics}
                title="Click to cycle campaign performance modes"
                className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/80 flex items-center justify-between gap-3 sm:gap-6 cursor-pointer hover:bg-white transition-all group/stats"
              >
                {/* Left Metric: Impressions */}
                <div className="flex items-center gap-3 sm:gap-4 pl-1 sm:pl-2">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#dcf4e7] flex items-center justify-center shrink-0 text-[#174e35] shadow-inner">
                    <Eye className="w-5 h-5 sm:w-5 sm:h-5 text-[#1b5e3f]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base sm:text-xl font-extrabold text-[#112a1d] tracking-tight">
                        {activeMetric.impressions}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded hidden sm:inline">
                        LIVE
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                      {activeMetric.reachLabel}
                    </span>
                  </div>
                </div>

                {/* Subtle Vertical Divider */}
                <div className="h-8 w-px bg-slate-200/80" />

                {/* Right Metric: Engagement Rate */}
                <div className="flex items-center gap-3 sm:gap-4 pr-1 sm:pr-2">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#dcf4e7] flex items-center justify-center shrink-0 text-[#174e35] shadow-inner">
                    <ArrowUpRight className="w-5 h-5 sm:w-5 sm:h-5 text-[#1b5e3f]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-base sm:text-xl font-extrabold text-[#112a1d] tracking-tight">
                      {activeMetric.engagement}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                      {activeMetric.rateLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= MODAL 1: GET STARTED (CAMPAIGN LAUNCH CALCULATOR) ================= */}
      <AnimatePresence>
        {showGetStartedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 to-teal-500" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#112a1d]">Launch Your Campaign</h3>
                    <p className="text-xs text-slate-500">Instant Media Plan &amp; ROI Simulator</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowGetStartedModal(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Media Brief Submitted!</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-sm">
                    Our Creative Directors will prepare your custom multi-channel storytelling deck within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setShowGetStartedModal(false);
                    }}
                    className="mt-6 bg-[#153426] text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  {/* Monthly Budget Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                      <span>Monthly Media Budget:</span>
                      <span className="text-emerald-700 text-sm font-extrabold">
                        ${budgetSlider.toLocaleString()} / mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={budgetSlider}
                      onChange={(e) => setBudgetSlider(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>$1,000</span>
                      <span>$25,000</span>
                      <span>$50,000+</span>
                    </div>
                  </div>

                  {/* Estimated Output Metrics */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium">Est. Impressions:</span>
                      <p className="text-base font-extrabold text-[#112a1d]">
                        {(budgetSlider * 85).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium">Est. Engagement:</span>
                      <p className="text-base font-extrabold text-emerald-700">
                        {(budgetSlider * 0.12).toFixed(1)}k interactions
                      </p>
                    </div>
                  </div>

                  {/* Channel Multi-Picker */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Audience Channels:
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['Instagram & Reels', 'YouTube Shorts', 'Meta Advantage+', 'TikTok Creator Network'].map((ch) => (
                        <div key={ch} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-medium text-slate-700">{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={() => {
                      playChimeSound('success');
                      setFormSubmitted(true);
                      try {
                        confetti({ particleCount: 70, spread: 60 });
                      } catch {}
                    }}
                    className="w-full mt-2 bg-[#153426] hover:bg-[#0f271c] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-950/20 transition cursor-pointer"
                  >
                    Generate Custom Media Proposal
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 2: LEARN MORE (CREATIVE STORYTELLING METHODOLOGY) ================= */}
      <AnimatePresence>
        {showLearnMoreModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    📖
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#112a1d]">The Impact Storytelling Engine</h3>
                    <p className="text-xs text-slate-500">4-Pillar High-Conversion Framework</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLearnMoreModal(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-3.5">
                {[
                  {
                    num: '01',
                    title: 'Audience Empathy Mapping',
                    desc: 'We decode real emotional pain points through social sentiment clustering and search trend velocity.'
                  },
                  {
                    num: '02',
                    title: 'Narrative Architecture',
                    desc: 'Story scripts built with 3-second visual hooks, tension release, and organic brand integration.'
                  },
                  {
                    num: '03',
                    title: 'High-Retention Creative Production',
                    desc: 'Cinematic commercials, authentic creator UGC, and interactive dynamic formats tested at scale.'
                  },
                  {
                    num: '04',
                    title: 'Algorithmic Omni-Channel Amplification',
                    desc: 'Autonomous budget routing across Meta, Google, and TikTok to maximize marginal ROAS.'
                  }
                ].map((pillar) => (
                  <div key={pillar.num} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 flex gap-3.5">
                    <span className="text-sm font-extrabold text-emerald-700 font-mono">
                      {pillar.num}
                    </span>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900">{pillar.title}</h5>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowLearnMoreModal(false)}
                className="w-full mt-5 bg-[#153426] text-white text-xs font-bold py-3 rounded-xl cursor-pointer hover:bg-[#0e2218] transition"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 3: PARTNER ECOSYSTEM DETAIL ================= */}
      <AnimatePresence>
        {activePartnerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-left relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                    ⚡
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#112a1d]">{activePartnerModal.name} Integration</h3>
                    <p className="text-[11px] text-slate-500">{activePartnerModal.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActivePartnerModal(null)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activePartnerModal.description}
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Verified Performance:</span>
                  <span className="font-extrabold text-emerald-800">{activePartnerModal.stat}</span>
                </div>
              </div>

              <button
                onClick={() => setActivePartnerModal(null)}
                className="w-full mt-5 bg-[#153426] text-white text-xs font-bold py-2.5 rounded-xl cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
