import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  BarChart2,
  MessageSquare,
  Cloud,
  Shield,
  Sparkles,
  Layout,
  X,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const HIGHLIGHT_CARDS = [
  {
    id: 'users',
    title: 'User management',
    description: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.',
    icon: BarChart2,
    badge: 'Multi-Tenant',
    deepDive: 'Manage enterprise organizations, user roles, permission sets, and cross-team workspaces with single sign-on (SAML/Okta) and automated SCIM provisioning.'
  },
  {
    id: 'mobile',
    title: 'Mobile integration',
    description: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.',
    icon: MessageSquare,
    badge: 'iOS & Android',
    deepDive: 'High-performance React Native & Swift SDKs with local-first offline syncing, background geofencing, and native push notification delivery.'
  },
  {
    id: 'storage',
    title: 'Cloud storage',
    description: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.',
    icon: Cloud,
    badge: 'AES-256',
    deepDive: 'Zero-knowledge client-side encrypted cloud buckets with automated lifecycle tiering, instant CDN caching, and redundant multi-cloud backups.'
  },
  {
    id: 'backup',
    title: 'Automated backup',
    description: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.',
    icon: Shield,
    badge: 'Continuous RPO',
    deepDive: 'Point-in-time recovery to the exact second. Continuous transaction log shipping guarantees zero data loss during regional outages.'
  },
  {
    id: 'updates',
    title: 'Instant updates',
    description: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.',
    icon: Sparkles,
    badge: 'Zero-Downtime',
    deepDive: 'Deploy hotfixes, database migrations, and UI upgrades without terminating active user connections or interrupting ongoing workflows.'
  },
  {
    id: 'templates',
    title: 'Custom templates',
    description: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.',
    icon: Layout,
    badge: '140+ Blueprints',
    deepDive: 'Pre-certified industry templates for FinTech, Healthcare, Logistics, and E-commerce designed to accelerate your go-to-market speed.'
  }
];

export const Cards_DarkKeyHighlights = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeModalItem, setActiveModalItem] = useState(null);

  const handleCardClick = (item, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveModalItem(item);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#22d3ee', '#38bdf8']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#090b0e] p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-white/10 text-white select-none overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        {/* Features Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-bold text-cyan-300">Features</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Key highlights
        </h2>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-lg mx-auto">
          Dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non eius tempora incidunt et dolore magnam.
        </p>
      </div>

      {/* 6-Grid Dark Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {HIGHLIGHT_CARDS.map((item) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.015 }}
              onClick={(e) => handleCardClick(item, e)}
              className="bg-[#12141a]/90 hover:bg-[#181b24] rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-cyan-400/40 shadow-xl transition-all flex flex-col justify-between text-left cursor-pointer group"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-slate-300 group-hover:text-cyan-400 flex items-center justify-center mb-5 border border-white/10 transition-colors">
                  <IconComp className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="text-cyan-400/80">{item.badge}</span>
                <span className="group-hover:text-white transition-colors">Details ➔</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Feature Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#12151c] rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-white/20 text-left relative text-white"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <activeModalItem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">{activeModalItem.title}</h3>
                    <p className="text-xs text-cyan-400 font-mono">{activeModalItem.badge}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalItem.deepDive}
                </p>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-cyan-500/20"
              >
                Close Feature
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
