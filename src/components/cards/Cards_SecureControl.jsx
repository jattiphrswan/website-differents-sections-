import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  PhoneCall,
  Puzzle,
  Coins,
  Calendar,
  X,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const SECURE_FEATURES = [
  {
    id: 'access',
    title: 'Customizable user access levels',
    shortDesc: 'Granular RBAC permissions with dynamic policy enforcement.',
    icon: PhoneCall,
    specs: ['Zero-Trust RBAC', 'Biometric SSO', 'IP Geofencing'],
    details: 'Assign precise read, write, and admin privileges down to individual API endpoints. Enforce contextual multi-factor authentication based on user location and device posture.'
  },
  {
    id: 'storage',
    title: 'Scalable cloud storage solutions',
    shortDesc: 'Automated object tiering with instant multi-region replication.',
    icon: Puzzle,
    specs: ['AES-256 GCM', '99.999999999% Durability', 'Edge Caching'],
    details: 'Store and stream compliance documents and session audit replays with immutable write-once-read-many (WORM) storage guarantees across 180+ global edge locations.'
  },
  {
    id: 'dashboard',
    title: 'Interactive dashboard with insights',
    shortDesc: 'Real-time telemetry, threat alerts, and automated audit logs.',
    icon: Coins,
    specs: ['Sub-second Telemetry', 'AI Anomaly Scoring', 'SOC2 Export'],
    details: 'Visualize user authentication trends, rogue session spikes, and resource consumption through real-time streaming charts and custom alert webhooks.'
  },
  {
    id: 'multiplatform',
    title: 'Multi-platform support and compatibility',
    shortDesc: 'Native SDKs for Web, iOS, Android, and desktop enterprise apps.',
    icon: Calendar,
    specs: ['iOS & Android SDKs', 'REST & GraphQL', 'FIDO2 / WebAuthn'],
    details: 'Unify security governance across legacy on-prem directories, Active Directory, and modern cloud identity providers with plug-and-play middleware.'
  }
];

export const Cards_SecureControl = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeModalItem, setActiveModalItem] = useState(null);

  const handleCardClick = (item, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveModalItem(item);
    try {
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.6 },
        colors: ['#00875a', '#10b981', '#34d399']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-slate-200/80 text-slate-900 select-none overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* 2-Column Header Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end mb-12 sm:mb-16 text-left">
        <div className="lg:col-span-7">
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#00875a] block mb-2 sm:mb-3">
            INNOVATIVE PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.14]">
            Advanced system for <br />
            secure account control.
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Automate multi-factor verification, session telemetry, and role-based policy enforcement across all enterprise touchpoints. Built for high-compliance infrastructure with zero friction.
          </p>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 items-stretch">
        {SECURE_FEATURES.map((item) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={(e) => handleCardClick(item, e)}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#00875a]/40 transition-all flex flex-col justify-between items-center text-center cursor-pointer group"
            >
              {/* Centered Line-art Green Icon */}
              <div className="w-18 h-18 rounded-2xl bg-emerald-50/70 text-[#00875a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IconComp className="w-9 h-9 stroke-[1.8]" />
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Bottom pill cue */}
              <div className="mt-6 pt-3 border-t border-slate-100 w-full flex items-center justify-center text-[11px] font-semibold text-[#00875a] group-hover:translate-x-1 transition-transform">
                <span>Explore Specs ➔</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#00875a]" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00875a] flex items-center justify-center">
                    <activeModalItem.icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{activeModalItem.title}</h3>
                    <p className="text-xs text-slate-400">Security Architecture</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeModalItem.details}
                </p>

                <div className="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Key Capabilities:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalItem.specs.map((spec) => (
                      <span key={spec} className="text-[10px] font-semibold bg-white text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                className="w-full mt-6 bg-[#00875a] hover:bg-[#00704a] text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-emerald-950/20"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
