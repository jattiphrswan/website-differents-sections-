import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  FlaskConical, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Microscope,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const CTA_OrangeRipple = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeModal, setActiveModal] = useState(null); // 'discovery' | 'samples' | null
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState('HPLC-MS');
  const [selectedSampleType, setSelectedSampleType] = useState('Bio-Pharma');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenDiscovery = () => {
    setToggle1(true);
    setTimeout(() => {
      setActiveModal('discovery');
      setIsSubmitted(false);
    }, 150);
  };

  const handleOpenSamples = () => {
    setToggle2(true);
    setTimeout(() => {
      setActiveModal('samples');
      setIsSubmitted(false);
    }, 150);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden font-sans bg-gradient-to-br from-[#FF6B00] via-[#FF5800] to-[#E64D00] text-white shadow-2xl p-8 sm:p-14 lg:p-16 select-none min-h-[380px] flex items-center">
      {/* 3D Concentric Layered Wave Rings (Radiating from the right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 sm:translate-x-1/4 pointer-events-none w-[700px] h-[700px] sm:w-[850px] sm:h-[850px] flex items-center justify-center">
        {/* Ring 1 - Outer */}
        <div className="absolute w-[680px] h-[680px] rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_50px_rgba(0,0,0,0.06)]" />
        
        {/* Ring 2 */}
        <div className="absolute w-[560px] h-[560px] rounded-full border border-white/12 bg-white/[0.06] shadow-[0_0_40px_rgba(0,0,0,0.07)]" />
        
        {/* Ring 3 */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-white/15 bg-white/[0.08] shadow-[0_0_35px_rgba(0,0,0,0.08)]" />
        
        {/* Ring 4 */}
        <div className="absolute w-[320px] h-[320px] rounded-full border border-white/20 bg-white/[0.12] shadow-[0_0_30px_rgba(0,0,0,0.09)]" />
        
        {/* Ring 5 - Inner Core */}
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/25 bg-gradient-to-tr from-white/20 to-white/40 shadow-[0_0_40px_rgba(255,255,255,0.4)] backdrop-blur-sm" />
        
        {/* Bright Core Orb */}
        <div className="absolute w-[100px] h-[100px] rounded-full bg-white/70 blur-xl" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
          Let's Get In Touch.
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-xl">
          Your laboratory instruments should serve you, not the other way around. We're happy to help you.
        </p>

        {/* Buttons / Tactile Pill Controls */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          {/* Button 1: Discovery Call */}
          <button
            onClick={handleOpenDiscovery}
            onMouseEnter={() => setToggle1(true)}
            onMouseLeave={() => setToggle1(false)}
            className="group relative bg-[#0c0d10] hover:bg-black text-white px-5 sm:px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-black/40 cursor-pointer"
          >
            <span>Book a discovery call</span>

            {/* Tactile 3D Metallic Toggle Orb Knob */}
            <span className="relative w-6 h-6 rounded-full bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 p-[1px] shadow-inner shrink-0 flex items-center justify-center">
              <span className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-300 via-white to-neutral-200 shadow-md flex items-center justify-center">
                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${toggle1 ? 'bg-[#FF6B00]' : 'bg-neutral-400'}`} />
              </span>
            </span>
          </button>

          {/* Button 2: Test Your Samples */}
          <button
            onClick={handleOpenSamples}
            onMouseEnter={() => setToggle2(true)}
            onMouseLeave={() => setToggle2(false)}
            className="group relative bg-[#0c0d10] hover:bg-black text-white px-5 sm:px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-black/40 cursor-pointer"
          >
            <span>Test Your Samples</span>

            {/* Tactile 3D Metallic Toggle Orb Knob */}
            <span className="relative w-6 h-6 rounded-full bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 p-[1px] shadow-inner shrink-0 flex items-center justify-center">
              <span className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-300 via-white to-neutral-200 shadow-md flex items-center justify-center">
                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${toggle2 ? 'bg-[#FF6B00]' : 'bg-neutral-400'}`} />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Interactive Modal / Drawer for Discovery Call or Samples */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#14161a] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setActiveModal(null);
                  setToggle1(false);
                  setToggle2(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <div>
                  {activeModal === 'discovery' ? (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-[#FF6B00]">
                        <PhoneCall className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Instrument Consultation
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Book Discovery Session</h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Connect directly with an analytical instrumentation engineer for workflow optimization.
                      </p>

                      <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-2">
                            Select Laboratory Instrument Stack
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {['HPLC-MS', 'NMR 600MHz', 'GC-MS / Triple Quad'].map((item) => (
                              <button
                                type="button"
                                key={item}
                                onClick={() => setSelectedInstrument(item)}
                                className={`p-2.5 rounded-xl border text-center text-xs font-bold transition cursor-pointer ${
                                  selectedInstrument === item
                                    ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-white'
                                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-1">
                            Work Email (University / Pharma / Biotech)
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="principal.investigator@lab.edu"
                            className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00]"
                          />
                        </div>

                        <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5 flex items-center gap-3 text-xs text-neutral-300">
                          <Clock className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span>Guaranteed 30-minute turnaround with a senior instrument scientist.</span>
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 bg-gradient-to-r from-[#FF6B00] to-[#E64D00] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg hover:brightness-110 transition active:scale-95 cursor-pointer"
                        >
                          Confirm Discovery Slot
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-[#FF6B00]">
                        <FlaskConical className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Analytical Sample Intake
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Submit Samples for Testing</h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Send specimens to our ISO 17025 accredited core facility for validation.
                      </p>

                      <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-2">
                            Assay & Sample Matrix
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {['Bio-Pharma', 'Small Molecules', 'Proteomics'].map((item) => (
                              <button
                                type="button"
                                key={item}
                                onClick={() => setSelectedSampleType(item)}
                                className={`p-2.5 rounded-xl border text-center text-xs font-bold transition cursor-pointer ${
                                  selectedSampleType === item
                                    ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-white'
                                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-1">
                            Lab Manager Email
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="labmanager@institution.org"
                            className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00]"
                          />
                        </div>

                        <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5 flex items-center gap-3 text-xs text-neutral-300">
                          <Microscope className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span>Includes automated temperature-controlled courier shipping kit.</span>
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 bg-gradient-to-r from-[#FF6B00] to-[#E64D00] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg hover:brightness-110 transition active:scale-95 cursor-pointer"
                        >
                          Request Specimen Shipping Kit
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00] text-[#FF6B00] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request Dispatched</h3>
                  <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
                    Confirmation has been sent to <strong className="text-white">{email}</strong>. Our instrumentation specialist is preparing your docket.
                  </p>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      setToggle1(false);
                      setToggle2(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer"
                  >
                    Close Window
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
