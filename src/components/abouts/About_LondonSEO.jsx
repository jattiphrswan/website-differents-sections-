import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  TrendingUp,
  DollarSign,
  Search,
  Award,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronDown,
  BarChart2,
  Sparkles,
  Star,
  Globe2
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const MONTHLY_CHART_BARS = [
  { month: 'Jan', height: 42, traffic: '24.5K', keyword: 'London SEO' },
  { month: 'Feb', height: 58, traffic: '38.2K', keyword: 'SEO Agency London' },
  { month: 'Mar', height: 35, traffic: '19.8K', keyword: 'London Web Design' },
  { month: 'Apr', height: 75, traffic: '62.4K', keyword: 'Best SEO Firm UK' },
  { month: 'May', height: 48, traffic: '41.0K', keyword: 'Enterprise SEO' },
  { month: 'Jun', height: 88, traffic: '94.6K', keyword: 'Organic Rank #1' },
  { month: 'Jul', height: 62, traffic: '78.1K', keyword: 'SERP Domination' }
];

export const About_LondonSEO = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);

  // States
  const [activeBarIndex, setActiveBarIndex] = useState(5); // default Jun
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [donutMode, setDonutMode] = useState('budget'); // 'budget' | 'roi'
  const [auditWebsite, setAuditWebsite] = useState('');
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const activeBar = MONTHLY_CHART_BARS[activeBarIndex];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (!auditWebsite.trim()) return;
    setAuditSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-slate-200/80 text-slate-900 select-none overflow-hidden">
      
      {/* Background Soft Blue Ambient Mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-50/50 rounded-full blur-2xl pointer-events-none -z-0" />

      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-12 lg:gap-16 items-center`}>
        
        {/* ================= LEFT COLUMN: LAYERED ANALYTICS DASHBOARDS ================= */}
        <div className={`relative flex items-center justify-center min-h-[440px] sm:min-h-[480px] ${isMobile ? '' : 'lg:col-span-6 xl:col-span-7'}`}>
          
          {/* Subtle Dot Matrix Pattern (Bottom-Left Background) */}
          <div className="absolute bottom-4 left-2 sm:left-6 z-0 w-32 h-32 pointer-events-none opacity-40">
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 8 }).map((_, c) => (
                  <circle
                    key={`${r}-${c}`}
                    cx={8 + c * 12}
                    cy={8 + r * 12}
                    r={1.2}
                    fill="currentColor"
                  />
                ))
              )}
            </svg>
          </div>

          <div className="relative w-full max-w-[500px]">
            
            {/* LAYER 1: Background Monthly Bar Chart Card (Offset Top-Right) */}
            <div className="absolute top-6 sm:top-8 right-0 sm:-right-4 w-[280px] sm:w-[330px] bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 z-10 text-left">
              
              {/* Header Filters */}
              <div className="flex items-center justify-end gap-3 text-[11px] text-slate-400 font-medium mb-4">
                <span className="flex items-center gap-1 hover:text-slate-700 cursor-pointer">
                  Monthly <ChevronDown className="w-3 h-3" />
                </span>
                <span className="flex items-center gap-1 hover:text-slate-700 cursor-pointer">
                  Last Year <ChevronDown className="w-3 h-3" />
                </span>
              </div>

              {/* Bar Chart Bars */}
              <div className="flex items-end justify-between h-36 sm:h-40 pt-4 px-1 border-b border-slate-100">
                {MONTHLY_CHART_BARS.map((bar, idx) => {
                  const isSelected = activeBarIndex === idx;
                  return (
                    <div
                      key={bar.month}
                      onClick={() => setActiveBarIndex(idx)}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      {/* Interactive Bar */}
                      <div className="relative w-6 sm:w-7 bg-slate-100 rounded-t-lg h-28 sm:h-32 flex items-end overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${bar.height}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.08 }}
                          className={`w-full rounded-t-lg transition-colors ${
                            isSelected
                              ? 'bg-[#3361ff] shadow-md shadow-blue-500/30'
                              : 'bg-[#436bfb]/80 group-hover:bg-[#3361ff]'
                          }`}
                        />
                      </div>
                      <span className={`text-[10px] font-semibold ${
                        isSelected ? 'text-[#3361ff]' : 'text-slate-400 group-hover:text-slate-700'
                      }`}>
                        {bar.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Tooltip Callout */}
              <div className="mt-3 flex items-center justify-between text-[11px] bg-blue-50/70 p-2 rounded-xl text-slate-700">
                <span className="font-semibold text-[#3361ff]">{activeBar.month}: {activeBar.traffic} clicks</span>
                <span className="text-slate-500 text-[10px]">"{activeBar.keyword}"</span>
              </div>

            </div>

            {/* LAYER 2: Foreground Primary Financial & Budget Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="relative z-20 w-[260px] sm:w-[290px] bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-100/90 text-left"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Money</span>
                  <span className="text-xs font-semibold text-slate-700">Total Budget</span>
                </div>
                <span className="text-sm font-extrabold text-[#10b981] bg-emerald-50 px-2 py-0.5 rounded-md">
                  $50,000
                </span>
              </div>

              {/* Circular Donut Progress Chart */}
              <div className="relative my-6 flex items-center justify-center">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background Circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="46"
                    className="text-slate-100"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  {/* Progress Circle (48% Saved) */}
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="46"
                    className="text-[#94a3f8]"
                    strokeWidth="10"
                    strokeDasharray={289}
                    strokeDashoffset={289 * (1 - (donutMode === 'budget' ? 0.48 : 0.76))}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    initial={{ strokeDashoffset: 289 }}
                    animate={{ strokeDashoffset: 289 * (1 - (donutMode === 'budget' ? 0.48 : 0.76)) }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </svg>

                {/* Donut Center Text */}
                <div 
                  onClick={() => setDonutMode((m) => m === 'budget' ? 'roi' : 'budget')}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                  title="Click to toggle ROI mode"
                >
                  <span className="text-2xl font-black text-slate-900 tracking-tight">
                    {donutMode === 'budget' ? '48%' : '76%'}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {donutMode === 'budget' ? 'Saved' : 'ROI Boost'}
                  </span>
                </div>
              </div>

              {/* Left Floating Revenue Pill Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -left-6 sm:-left-8 top-28 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 flex items-center gap-2.5 cursor-pointer z-30"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#3361ff] flex items-center justify-center font-bold">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-xs font-extrabold text-slate-900">$50,000</span>
                  <span className="text-[9px] font-semibold text-slate-400">Total Revenue</span>
                </div>
              </motion.div>

              {/* Breakdown Stats Legend */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-slate-300" /> Total Spent
                  </span>
                  <span className="font-bold text-slate-700">$18,570</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#94a3f8]" /> Money Saved
                  </span>
                  <span className="font-bold text-slate-900">$31,430</span>
                </div>
              </div>

              {/* View Full Report Trigger */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <button
                  onClick={() => setShowReportModal(true)}
                  className="text-xs font-bold text-[#3361ff] hover:text-blue-700 transition cursor-pointer"
                >
                  View Full Report
                </button>
              </div>
            </motion.div>

            {/* LAYER 3: Floating Green Growth Card (Top-Right) */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="absolute -top-3 right-8 sm:right-12 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-xl border border-slate-100 flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-emerald-600">+2.0%</span>
                <span className="text-[10px] font-medium text-slate-400">Growth</span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL CONTENT & CTA ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-6 xl:col-span-5'}`}>
          
          {/* Eyebrow Label */}
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#3361ff] mb-2 sm:mb-3">
            ABOUT US
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.14]">
            We are The Best <br />
            SEO Company
          </h2>

          {/* Editorial Paragraph */}
          <p className="mt-5 sm:mt-6 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed font-normal">
            Whether you do a search for "London seo", "London web" or a variety of other highly competitive terms in our industry you will find that we completely dominate our competitors at our own game. Further, you will see we are the top rated firm with 67 reviews on Google giving us 4.8 stars.
          </p>

          {/* MORE ABOUT US Button */}
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAuditModal(true)}
              className="bg-[#3361ff] hover:bg-[#254fd8] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-blue-600/25 transition cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

        </div>

      </div>

      {/* ================= MODAL 1: FREE SEO AUDIT / MORE ABOUT US ================= */}
      <AnimatePresence>
        {showAuditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              {/* Blue accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#3361ff] flex items-center justify-center font-bold">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Dominate London Search</h3>
                    <p className="text-xs text-slate-500">Free Instant Technical Audit &amp; Competitor Gap Report</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAuditModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {auditSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Audit Dispatched!</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-sm">
                    Scanning keywords for <span className="font-semibold text-slate-900">{auditWebsite}</span>. Our London SEO strategists will deliver your comprehensive ranking dossier in 15 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setAuditSubmitted(false);
                      setShowAuditModal(false);
                    }}
                    className="mt-6 bg-[#3361ff] text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAuditSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Domain URL:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. yourcompany.co.uk"
                      value={auditWebsite}
                      onChange={(e) => setAuditWebsite(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3361ff]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium">Google UK Rating:</span>
                      <p className="text-sm font-extrabold text-slate-900 flex items-center gap-1 mt-0.5">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>4.8 Stars (67 Reviews)</span>
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium">Avg. Client Lift:</span>
                      <p className="text-sm font-extrabold text-[#3361ff] mt-0.5">
                        +340% Organic Traffic
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3361ff] hover:bg-[#254fd8] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition cursor-pointer"
                  >
                    Run Free London SEO Audit
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 2: FULL FINANCIAL REPORT ================= */}
      <AnimatePresence>
        {showReportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 text-left relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#3361ff] font-bold flex items-center justify-center text-sm">
                    📊
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">SEO Financial Efficiency</h3>
                    <p className="text-[11px] text-slate-500">Live Cost-per-Acquisition vs Paid Search</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600">Organic Acquisition (SEO):</span>
                  <span className="font-extrabold text-emerald-600">$18,570 Total</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600">Equivalent PPC Ad Spend:</span>
                  <span className="font-extrabold text-slate-900">$50,000 Estimated</span>
                </div>
                <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Net Capital Saved:</span>
                  <span className="font-extrabold text-[#3361ff] text-sm">$31,430 (48%)</span>
                </div>
              </div>

              <button
                onClick={() => setShowReportModal(false)}
                className="w-full mt-5 bg-[#3361ff] text-white text-xs font-bold py-2.5 rounded-xl cursor-pointer"
              >
                Close Report
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
