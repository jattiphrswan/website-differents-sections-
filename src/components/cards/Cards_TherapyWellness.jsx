import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Activity,
  Heart,
  Sparkles,
  ArrowRight,
  X,
  Calendar,
  Clock,
  CheckCircle2,
  UserCheck
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const THERAPY_SERVICES = [
  {
    id: 'sports',
    title: 'Sports Rehabilitation',
    subtitle: 'Exercitationem ullam corporis suscipit',
    img: './assets/wellness-sports-rehab.jpg',
    therapist: 'Dr. Marcus Vance, DPT',
    duration: '60 Min Session',
    focus: 'Spinal decompression, rotator cuff mobility, and sports athletic return-to-play protocols.'
  },
  {
    id: 'massage',
    title: 'Massage Therapy',
    subtitle: 'Exercitationem ullam corporis suscipit',
    img: './assets/wellness-massage-neck.jpg',
    therapist: 'Elena Rostova, LMT',
    duration: '45-90 Min Custom',
    focus: 'Deep tissue myofascial release, cervical posture alignment, and lymphatic tension drainage.'
  },
  {
    id: 'physical',
    title: 'Physical Therapy',
    subtitle: 'Exercitationem ullam corporis suscipit',
    img: './assets/wellness-physical-therapy.jpg',
    therapist: 'Sarah Chen, PT, OCS',
    duration: '50 Min Evaluation',
    focus: 'Craniosacral therapy, chronic pain neuro-modulation, and whole-body functional movement restoration.'
  }
];

export const Cards_TherapyWellness = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeService, setActiveService] = useState(null);
  const [showAllServicesModal, setShowAllServicesModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleCardClick = (svc, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveService(svc);
    setBookingSuccess(false);
  };

  const handleBookSlot = () => {
    setBookingSuccess(true);
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#8faea0', '#a3c2b4', '#557568']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#fbfcfb] p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-slate-200/80 text-slate-900 select-none overflow-hidden">
      
      {/* Background Soft Natural Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#edf5f0] rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Pediatric &amp; Physical Therapy
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-lg mx-auto">
          Quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
        </p>
      </div>

      {/* 3 Photographic Therapy Cards Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {THERAPY_SERVICES.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={(e) => handleCardClick(item, e)}
            className="relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 cursor-pointer group flex flex-col justify-between p-6"
          >
            {/* Background Photography Image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 -z-0"
            />

            {/* Gradient Dark Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none -z-0" />

            {/* Top Line-Art Icon Accent */}
            <div className="relative z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
              <Activity className="w-5 h-5 stroke-[2]" />
            </div>

            {/* Bottom Card Copy */}
            <div className="relative z-10 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-white/80 font-normal">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Center Pill CTA */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAllServicesModal(true)}
          className="bg-[#8faea0] hover:bg-[#7e9e90] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-[#8faea0]/25 transition cursor-pointer flex items-center gap-2"
        >
          <span>VIEW ALL SERVICES</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Modal 1: Service Detail & Appointment */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#8faea0]" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{activeService.title}</h3>
                  <p className="text-xs text-slate-400">{activeService.therapist}</p>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {bookingSuccess ? (
                <div className="py-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Session Confirmed!</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Your appointment with {activeService.therapist} has been reserved.
                  </p>
                  <button
                    onClick={() => setActiveService(null)}
                    className="mt-5 bg-[#8faea0] text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="mt-4 space-y-3.5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeService.focus}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#8faea0]" /> {activeService.duration}
                    </span>
                    <span className="font-bold text-[#8faea0]">$120 / session</span>
                  </div>

                  <button
                    onClick={handleBookSlot}
                    className="w-full mt-4 bg-[#8faea0] hover:bg-[#7e9e90] text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-[#8faea0]/20"
                  >
                    Schedule Treatment Session
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal 2: All Services Menu */}
      <AnimatePresence>
        {showAllServicesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-lg font-serif font-bold text-slate-900">Comprehensive Clinical Services</h3>
                <button
                  onClick={() => setShowAllServicesModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                {THERAPY_SERVICES.map((s) => (
                  <div key={s.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <strong className="text-slate-900 block">{s.title}</strong>
                      <span className="text-slate-500">{s.therapist}</span>
                    </div>
                    <span className="font-bold text-[#8faea0]">{s.duration}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAllServicesModal(false)}
                className="w-full mt-6 bg-[#8faea0] hover:bg-[#7e9e90] text-white text-xs font-bold py-3 rounded-xl cursor-pointer transition"
              >
                Close Menu
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
