import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sun,
  Compass,
  Zap,
  BatteryCharging,
  ArrowUpRight,
  ArrowRight,
  X,
  CheckCircle2,
  Leaf,
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const CLEAN_ENERGY_SERVICES = [
  {
    id: 'audits',
    title: 'Energy Audits',
    description: 'Comprehensive thermal imaging, load profiling, and power consumption analysis to pinpoint waste.',
    icon: Sun,
    stat: 'Up to 38% Waste Cut',
    highlights: ['Infrared Thermal Scans', 'Load Factor Optimization', 'Peak Demand Shaving']
  },
  {
    id: 'design',
    title: 'Project Design',
    description: 'Engineered CAD blueprints, sun-path solar irradiation modeling, and structural rooftop feasibility.',
    icon: Compass,
    stat: '100% Custom Engineering',
    highlights: ['3D LiDAR Shading Analysis', 'Permit-Ready Blueprints', 'Structural Calculations']
  },
  {
    id: 'solar',
    title: 'Solar Installation',
    description: 'Tier-1 bifacial monocrystalline photovoltaic arrays with micro-inverters and rapid-shutdown safety.',
    icon: Zap,
    stat: '25-Year Power Guarantee',
    highlights: ['Tier-1 N-Type Cells', 'Enphase Micro-Inverters', 'Zero-Roof-Leak Seal']
  },
  {
    id: 'battery',
    title: 'Battery Storage',
    description: 'Next-gen Lithium Iron Phosphate (LiFePO4) storage systems for uninterrupted whole-home backup.',
    icon: BatteryCharging,
    stat: '10ms Backup Transfer',
    highlights: ['LiFePO4 Chemistry', '10,000 Cycle Life', 'Grid Independence']
  }
];

export const Cards_CleanEnergySuite = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [monthlyElectricBill, setMonthlyElectricBill] = useState(250);

  const handleOpenService = (svc, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveServiceModal(svc);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#84cc16', '#65a30d', '#a3e635', '#4d7c0f']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-slate-200/80 text-slate-900 select-none overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-lime-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-500">
            OUR EXPERTISE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Our Full Suite of Services
        </h2>
      </div>

      {/* 4 Clean Energy Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {CLEAN_ENERGY_SERVICES.map((item) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={(e) => handleOpenService(item, e)}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#84cc16]/50 transition-all flex flex-col justify-between items-center text-center cursor-pointer group"
            >
              {/* Illustrated Icon Badge */}
              <div className="w-18 h-18 rounded-2xl bg-lime-50/80 text-[#84cc16] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <IconComp className="w-9 h-9 stroke-[1.8] text-[#65a30d]" />
              </div>

              {/* Title & Description */}
              <div className="my-auto">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Circular Arrow Button */}
              <div className="mt-8 pt-4 border-t border-slate-100 w-full flex justify-center">
                <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#84cc16] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Footer Action Strip */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-100 flex items-center justify-center">
        <button
          onClick={() => setShowQuoteModal(true)}
          className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer group"
        >
          <span>Our focus is delivering excellence for you.</span>
          <span className="font-extrabold text-[#65a30d] group-hover:underline flex items-center gap-1.5">
            Get Started
            <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </span>
        </button>
      </div>

      {/* Modal 1: Service Detail */}
      <AnimatePresence>
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#84cc16]" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-lime-50 text-[#65a30d] flex items-center justify-center">
                    <activeServiceModal.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{activeServiceModal.title}</h3>
                    <p className="text-xs text-slate-400">Clean Energy Service Spec</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeServiceModal.description}
                </p>

                <div className="p-3 bg-lime-50/70 rounded-2xl border border-lime-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Standard Guarantee:</span>
                  <span className="font-extrabold text-[#4d7c0f]">{activeServiceModal.stat}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Key Deliverables:</span>
                  {activeServiceModal.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65a30d]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveServiceModal(null)}
                className="w-full mt-6 bg-[#65a30d] hover:bg-[#4d7c0f] text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-lime-900/20"
              >
                Close Specification
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal 2: 25-Year Clean Energy Calculator */}
      <AnimatePresence>
        {showQuoteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#84cc16]" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-lime-50 text-[#65a30d] flex items-center justify-center font-bold text-sm">
                    ⚡
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">25-Year Solar Savings</h3>
                    <p className="text-xs text-slate-400">Instant Clean Energy Estimate</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1">
                    <span>Monthly Power Bill:</span>
                    <span className="text-[#65a30d] font-extrabold text-sm">${monthlyElectricBill} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="800"
                    step="10"
                    value={monthlyElectricBill}
                    onChange={(e) => setMonthlyElectricBill(Number(e.target.value))}
                    className="w-full accent-[#84cc16] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 p-3.5 bg-lime-50/70 rounded-2xl border border-lime-100">
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium">Est. 25-Year Savings:</span>
                    <p className="text-base font-black text-[#4d7c0f]">
                      ${(monthlyElectricBill * 12 * 25 * 0.72).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium">CO2 Offset:</span>
                    <p className="text-base font-black text-slate-900">
                      {(monthlyElectricBill * 0.4).toFixed(0)} Tons
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowQuoteModal(false);
                    try { confetti({ particleCount: 50, spread: 60 }); } catch {}
                  }}
                  className="w-full bg-[#182110] hover:bg-black text-white text-xs font-bold py-3.5 rounded-xl transition cursor-pointer shadow-lg"
                >
                  Book Free Site Survey
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
