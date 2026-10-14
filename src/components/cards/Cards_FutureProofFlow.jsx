import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  X,
  CheckCircle2,
  Lock,
  Cpu,
  BarChart3,
  Clock,
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const PILLARS_DATA = [
  {
    id: 'analytics',
    num: '01 / STRATEGY',
    title: 'Precision Analytics',
    description: "Beyond charts. AI-driven forecasting that anticipates your team's next bottleneck before it happens.",
    icon: TrendingUp,
    badgeBg: 'bg-[#e7f6ee]',
    badgeColor: 'text-[#00875a]',
    isHighlighted: false,
    specs: [
      { label: 'Forecast Accuracy', value: '99.4%' },
      { label: 'Proactive Alert Speed', value: '< 2.4s' },
      { label: 'Anomaly Retention', value: '365 Days' }
    ],
    deepDive: 'Neural regression engines scan thousands of asynchronous PRs, Jira tickets, and deployment commits to predict engineering roadblocks before they impact sprint velocity.'
  },
  {
    id: 'security',
    num: '02 / SECURITY',
    title: 'Ironclad Core',
    description: 'Zero-trust architecture built directly into the DNA of your workflows. Security that doesn\'t slow you down.',
    icon: ShieldCheck,
    badgeBg: 'bg-white/20',
    badgeColor: 'text-white',
    isHighlighted: true,
    specs: [
      { label: 'Encryption', value: 'Quantum Post-AES' },
      { label: 'SOC2 Type II', value: 'Continuous Audit' },
      { label: 'RBAC Latency', value: '0.12ms' }
    ],
    deepDive: 'Micro-segmented zero-trust authorization per individual payload packet. Every session is cryptographically attested with hardware security keys (FIDO2 / WebAuthn).'
  },
  {
    id: 'speed',
    num: '03 / OUTPUT',
    title: 'Kinetic Speed',
    description: 'The fastest collaboration engine ever built. Real-time syncing across continents with sub-ms latency.',
    icon: Zap,
    badgeBg: 'bg-[#e7f6ee]',
    badgeColor: 'text-[#00875a]',
    isHighlighted: false,
    specs: [
      { label: 'Global Edge Sync', value: '14ms' },
      { label: 'CRDT Consensus', value: 'Conflict-Free' },
      { label: 'Throughput', value: '250K ops/sec' }
    ],
    deepDive: 'State synchronization powered by state-of-the-art Conflict-free Replicated Data Types (CRDTs) over WebTransport and QUIC protocols for near-instant multi-continent editing.'
  }
];

export const Cards_FutureProofFlow = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeModalPillar, setActiveModalPillar] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleOpenPillar = (pillar, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveModalPillar(pillar);
    if (pillar.isHighlighted) {
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#00875a', '#10b981', '#34d399', '#6ee7b7']
        });
      } catch {}
    }
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#f2f8f4] p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-emerald-950/10 text-slate-900 select-none overflow-hidden">
      
      {/* Background Soft Mesh Ambient Lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl text-left mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#034d35] tracking-tight leading-[1.08]">
          Future-Proof Flow
        </h2>

        {/* Subtitle with vertical accent bar */}
        <div className="mt-5 sm:mt-6 flex items-start gap-4">
          <div className="w-1.5 h-12 sm:h-10 bg-[#00875a] rounded-full shrink-0" />
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal">
            We've distilled complexity into three core pillars. Experience the next generation of workspace engineering.
          </p>
        </div>
      </div>

      {/* 3 Pillar Bento Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {PILLARS_DATA.map((pillar) => {
          const IconComp = pillar.icon;
          const isCenter = pillar.isHighlighted;

          return (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -8, scale: 1.015 }}
              onHoverStart={() => setHoveredCardId(pillar.id)}
              onHoverEnd={() => setHoveredCardId(null)}
              onClick={(e) => handleOpenPillar(pillar, e)}
              className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-tl-[2.75rem] rounded-tr-2xl rounded-bl-2xl rounded-br-[2.75rem] shadow-xl transition-all cursor-pointer group ${
                isCenter
                  ? 'bg-[#00875a] text-white shadow-emerald-900/25 border-2 border-emerald-400/30'
                  : 'bg-white text-slate-900 shadow-slate-900/5 border border-slate-200/80 hover:border-emerald-500/40'
              }`}
            >
              {/* Top Row: Icon Circle Badge */}
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-full ${pillar.badgeBg} ${pillar.badgeColor} flex items-center justify-center shadow-inner`}>
                  <IconComp className="w-6 h-6" />
                </div>
              </div>

              {/* Middle: Title & Description */}
              <div className="my-8 sm:my-10 text-left">
                <h3 className={`text-2xl sm:text-[1.65rem] font-bold tracking-tight mb-3.5 leading-snug ${
                  isCenter ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillar.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isCenter ? 'text-emerald-50 font-normal' : 'text-slate-600 font-normal'
                }`}>
                  {pillar.description}
                </p>
              </div>

              {/* Bottom: Pillar Number & Circular Arrow Trigger */}
              <div className="pt-4 border-t flex items-center justify-between border-black/10">
                <span className={`text-xs font-mono font-bold tracking-wider ${
                  isCenter ? 'text-emerald-200' : 'text-[#00875a]'
                }`}>
                  {pillar.num}
                </span>

                <motion.div
                  whileHover={{ rotate: 45, scale: 1.15 }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isCenter
                      ? 'bg-emerald-700/80 text-white group-hover:bg-white group-hover:text-[#00875a]'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-[#00875a] group-hover:text-white'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pillar Deep Dive Modal */}
      <AnimatePresence>
        {activeModalPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 to-teal-500" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00875a] flex items-center justify-center font-bold">
                    <activeModalPillar.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{activeModalPillar.title}</h3>
                    <p className="text-xs text-slate-500 font-mono">{activeModalPillar.num}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalPillar(null)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeModalPillar.deepDive}
                </p>

                <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                  {activeModalPillar.specs.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <span className="text-[10px] text-slate-500 block truncate">{spec.label}</span>
                      <strong className="text-sm font-extrabold text-[#00875a]">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveModalPillar(null)}
                className="w-full mt-6 bg-[#00875a] hover:bg-[#00704a] text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-emerald-900/20"
              >
                Close Architecture View
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
