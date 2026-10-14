import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  FileText,
  DollarSign,
  BookOpen,
  Users,
  CheckCheck,
  ArrowLeftRight,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const PROCESS_ITEMS = [
  {
    id: 'ap',
    title: 'Accounts Payable',
    description: 'Utilize AI and ML to optimize invoice processing and supplier interactions.',
    icon: FileText,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#e0f7fa]',
    metric: '92% Faster Invoicing',
    details: 'Autonomous three-way PO matching, predictive GL code assignment, and fraud anomaly detection across global vendor invoices.'
  },
  {
    id: 'ar',
    title: 'Accounts Receivable',
    description: 'Optimize the ordering process for smoother, faster customer experience.',
    icon: DollarSign,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#e0f7fa]',
    metric: '18 Days Shorter DSO',
    details: 'Automated dunning reminders, self-service customer payment portals, and dynamic dispute resolution routing.'
  },
  {
    id: 'je',
    title: 'Journal Entries',
    description: 'Create customizable journals, automate creation, and expedite approvals.',
    icon: BookOpen,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#e0f7fa]',
    metric: '99.8% Audit Compliance',
    details: 'Scheduled recurring journal templates, multi-currency ledger adjustments, and automated multi-tier approval matrix.'
  },
  {
    id: 'hr',
    title: 'HR Procedures',
    description: 'Automate tasks, enhance collaboration, and empower employees.',
    icon: Users,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#e0f7fa]',
    metric: '5x Onboarding Speed',
    details: 'Zero-touch equipment provisioning, benefits self-enrollment, and automated lifecycle compliance document generation.'
  },
  {
    id: 'rec',
    title: 'Account Reconciliations',
    description: 'Automate account balancing, preparation process, and approvals.',
    icon: CheckCheck,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#e0f7fa]',
    metric: '1-Day Month-End Close',
    details: 'Real-time bank feed reconciliation, auto-clearing variance thresholds, and instant trial balance verification.'
  },
  {
    id: 'inter',
    title: 'Intercompany Transactions',
    description: 'Streamline intercompany charges for faster processing and accurate reconciliation.',
    icon: ArrowLeftRight,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#e0f7fa]',
    metric: '100% Elimination of Mismatches',
    details: 'Cross-entity netting agreements, automated transfer pricing documentation, and bilateral currency hedging.'
  }
];

export const Cards_ProcessDigitize = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeModalItem, setActiveModalItem] = useState(null);

  const handleLearnMore = (item, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveModalItem(item);
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#0891b2', '#00b4d8', '#38bdf8']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-slate-200/80 text-slate-900 select-none overflow-hidden">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-50/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          <span className="text-[#00acc1] bg-gradient-to-r from-[#00b4d8] to-[#009688] bg-clip-text text-transparent mr-2">
            Digitize
          </span>
          <span>Your Processes</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg mx-auto font-normal">
          Automate and standardize your processes and go paperless.
        </p>
      </div>

      {/* 6-Grid Process Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {PROCESS_ITEMS.map((item) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.015 }}
              onClick={(e) => handleLearnMore(item, e)}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-cyan-400/50 transition-all flex flex-col justify-between text-left cursor-pointer group"
            >
              <div>
                {/* Top Custom Illustrated Icon Badge */}
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-6 shadow-inner border border-cyan-100/70 group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-7 h-7 text-[#0891b2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Learn More Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-[#00acc1] group-hover:text-[#00838f] transition-colors flex items-center gap-1.5">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  Paperless
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Process Workflow Detail Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-teal-400" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                    <activeModalItem.icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{activeModalItem.title}</h3>
                    <p className="text-xs text-slate-400">Enterprise Workflow Automation</p>
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

                <div className="p-3 bg-cyan-50/70 rounded-2xl border border-cyan-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Documented Efficiency:</span>
                  <span className="font-extrabold text-cyan-800">{activeModalItem.metric}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                className="w-full mt-6 bg-[#00acc1] hover:bg-[#00838f] text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-cyan-900/20"
              >
                Close Workflow Overview
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
