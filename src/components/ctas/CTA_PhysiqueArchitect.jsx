import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  X, 
  Dumbbell, 
  TrendingUp, 
  Award,
  Users
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const CTA_PhysiqueArchitect = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goal, setGoal] = useState('hypertrophy');
  const [experience, setExperience] = useState('intermediate');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden font-sans border border-neutral-800/80 bg-[#141517] text-white shadow-2xl select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C97354]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neutral-900/60 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px]">
        {/* Left Content Column */}
        <div className="lg:col-span-6 p-8 sm:p-12 md:p-14 flex flex-col justify-between z-10">
          <div>
            {/* Kicker / Overline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C97354] animate-ping" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#C97354]">
                The Final Step
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.12]">
              Ready to architect <br className="hidden sm:inline" />
              your <span className="font-editorial-italic text-[#D97757] font-semibold italic text-4xl sm:text-5xl md:text-6xl">physique?</span>
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="mt-5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-md">
              Applications are strictly reviewed to ensure we are the perfect fit. Commit to the standard. Elevate your life.
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-8 sm:mt-10 pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleApplyClick}
              className="group relative inline-flex items-center justify-center gap-3 bg-[#C97354] hover:bg-[#b86345] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg shadow-[#C97354]/25 hover:shadow-[#C97354]/45 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Apply for Roster</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Strict Intake Counter Tag */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/80 border border-white/5 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C97354]" />
              <span>Only 4 Spots / Month</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column (Athlete with Battle Ropes) */}
        <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full overflow-hidden bg-neutral-950">
          <img
            src="/assets/gym-battle-ropes.jpg"
            alt="Athlete training with heavy battle ropes in industrial gym"
            className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Gradient fade to integrate with dark card background */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#141517] via-transparent to-transparent opacity-95 pointer-events-none" />
          <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />

          {/* Floating Live Capacity Pill */}
          <div className="absolute bottom-6 right-6 bg-black/75 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="text-left">
              <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Cohort IV Intake</div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>88% Capacity Filled</span>
                <span className="text-[#C97354]">• 2 Left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Roster Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#18191d] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#C97354]" />
                    <span className="text-xs font-bold text-[#C97354] uppercase tracking-wider">
                      Elite Coaching Roster
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Questionnaire</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Complete your baseline evaluation. Our coaching director personally audits every candidate.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Goal Selection */}
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-2">
                        Primary Target Objective
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'hypertrophy', label: 'Hypertrophy', desc: 'Lean Muscle Mass' },
                          { id: 'strength', label: 'Strength', desc: 'Power & Output' },
                          { id: 'recomp', label: 'Recomp', desc: 'Fat Loss + Tone' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setGoal(item.id)}
                            className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                              goal === item.id
                                ? 'bg-[#C97354]/20 border-[#C97354] text-white shadow-md'
                                : 'bg-neutral-900 border-white/10 text-neutral-400 hover:border-white/20'
                            }`}
                          >
                            <div className="text-xs font-bold text-white">{item.label}</div>
                            <div className="text-[10px] text-neutral-400">{item.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-2">
                        Training Experience
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'novice', label: '1 - 2 Years' },
                          { id: 'intermediate', label: '3 - 5 Years' },
                          { id: 'advanced', label: '5+ Years' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setExperience(item.id)}
                            className={`py-2 px-3 rounded-xl border text-center text-xs font-semibold transition cursor-pointer ${
                              experience === item.id
                                ? 'bg-white text-black border-white'
                                : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-3 pt-1">
                      <div>
                        <label className="text-xs font-semibold text-neutral-300 block mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C97354]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-neutral-300 block mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C97354]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#C97354] hover:bg-[#b86345] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg transition active:scale-95 cursor-pointer"
                    >
                      Submit Application for Audit
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C97354]/20 border border-[#C97354] text-[#C97354] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Received</h3>
                  <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your dossier has been logged. Our head coach will review your {goal} requirements within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer"
                  >
                    Return to Showcase
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
