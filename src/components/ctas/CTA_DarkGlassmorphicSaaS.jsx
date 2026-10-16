import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  X, 
  Calendar,
  Lock,
  Layers,
  Star
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const CTA_DarkGlassmorphicSaaS = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('team');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden font-sans border border-indigo-500/20 bg-[#0c0e17] text-white shadow-2xl p-8 sm:p-14 lg:p-16 select-none min-h-[380px] flex flex-col justify-center">
      {/* Dynamic ambient gradient mesh */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Overline pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Zero-Friction Cloud Migration</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
          Supercharge your team's <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
            delivery velocity today.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-400 font-normal max-w-xl leading-relaxed">
          Join over 2,400 fast-growing engineering teams automating builds, edge routing, and continuous rollbacks in minutes.
        </p>

        {/* Social Proof Avatars */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Developer avatar"
                className="w-7 h-7 rounded-full border-2 border-[#0c0e17] object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs text-neutral-300 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9/5 from 850+ GitHub developers</span>
          </div>
        </div>

        {/* Action Row / Inline Form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter work email..."
            className="w-full bg-neutral-900/90 border border-white/10 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-400 shadow-inner"
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsSubmitted(false);
            }}
            className="w-full sm:w-auto shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start 14-Day Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Guarantees */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> SOC-2 Type II Certified
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Instant 2-minute setup
          </span>
        </div>
      </div>

      {/* Trial Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#111320] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 mb-2 text-indigo-400">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Free Developer Sandbox
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Create Workspace</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Instant access to edge compute, automated CI/CD, and global preview deployments.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-2">
                        Select Workspace Tier
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'team', name: 'Team Plan', desc: '14 Days Free • Unlimited' },
                          { id: 'enterprise', name: 'Enterprise POC', desc: 'Custom VPC & SLA' }
                        ].map((plan) => (
                          <button
                            type="button"
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                              selectedPlan === plan.id
                                ? 'bg-indigo-600/20 border-indigo-400 text-white'
                                : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                            }`}
                          >
                            <div className="text-xs font-bold text-white">{plan.name}</div>
                            <div className="text-[10px] text-neutral-400">{plan.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg transition active:scale-95 cursor-pointer"
                    >
                      Deploy Production Cluster
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cluster Initialized!</h3>
                  <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
                    Check your inbox at <strong className="text-white">{email}</strong> to activate your root token and begin zero-downtime deployment.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer"
                  >
                    Close Setup
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
