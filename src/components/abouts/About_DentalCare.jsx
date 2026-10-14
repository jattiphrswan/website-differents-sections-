import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Award,
  CheckCircle2,
  Phone,
  Sparkles,
  ArrowRight,
  X,
  Clock,
  MapPin,
  Star,
  Quote
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const About_DentalCare = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-14 font-jakarta shadow-xl border border-slate-200/70 text-slate-900 select-none overflow-hidden">
      
      {/* 2-Column Responsive Layout */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-8 lg:gap-14 items-center`}>
        
        {/* ================= LEFT COLUMN: LAYERED DENTAL PHOTO COLLAGE ================= */}
        <div className={`relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center ${isMobile ? '' : 'lg:col-span-5 xl:col-span-5'}`}>
          
          {/* Cyan Pastel Geometric Background Block */}
          <div className="absolute top-1/4 left-1/4 w-52 sm:w-64 h-52 sm:h-64 rounded-3xl bg-[#cbeff5] -z-0 opacity-80" />

          {/* Hollow Square Graphic Accent */}
          <div className="absolute top-12 right-6 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#22b3c7] rounded-xl -z-0 opacity-70" />

          {/* Halftone Dot Matrix Pattern Graphic (Bottom-Left) */}
          <div className="absolute bottom-2 left-2 z-10 w-28 h-28 pointer-events-none opacity-80">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#22b3c7]">
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 8 }).map((_, c) => {
                  const dist = Math.hypot(c - 3.5, r - 3.5);
                  const radius = Math.max(0.8, 3.2 - dist * 0.4);
                  return (
                    <circle
                      key={`${r}-${c}`}
                      cx={10 + c * 11}
                      cy={10 + r * 11}
                      r={radius}
                      fill="currentColor"
                      opacity={Math.max(0.15, 1 - dist * 0.18)}
                    />
                  );
                })
              )}
            </svg>
          </div>

          {/* Top-Left Photo Card: Female Dentist */}
          <motion.div
            whileHover={{ y: -4 }}
            className="absolute top-0 left-0 sm:left-4 z-20 w-[190px] sm:w-[230px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
          >
            <img
              src="./assets/dentist-female-clinic.jpg"
              alt="Professional female dentist in scrubs and mask holding dental instruments"
              className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-2 sm:p-2.5 bg-white text-left">
              <div className="text-[11px] font-bold text-slate-900 leading-tight">Dr. Sarah Jenkins</div>
              <div className="text-[10px] text-[#22b3c7] font-semibold">Chief Orthodontist</div>
            </div>
          </motion.div>

          {/* Bottom-Right Photo Card: Dentist Examining Patient */}
          <motion.div
            whileHover={{ y: -4 }}
            className="absolute bottom-4 right-0 sm:right-4 z-20 w-[190px] sm:w-[230px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
          >
            <img
              src="./assets/dentist-treating-patient.jpg"
              alt="Dentist performing dental checkup on a smiling patient reclining in dental chair"
              className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-2 sm:p-2.5 bg-white text-left">
              <div className="text-[11px] font-bold text-slate-900 leading-tight">London Smile Studio</div>
              <div className="text-[10px] text-emerald-600 font-semibold">Gentle Care Guaranteed</div>
            </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN: CONTENT, QUOTE CARD & READ MORE ================= */}
        <div className={`flex flex-col text-left ${isMobile ? '' : 'lg:col-span-7 xl:col-span-7'}`}>
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#102a43] tracking-tight">
            About Us
          </h2>

          {/* Description Paragraph */}
          <p className="mt-4 sm:mt-5 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-xl">
            We started back in 1999 with a motive to solve all the dental problems and give our patients an opportunity to smile brighter. Our specialists are counted among the best dentists in London and in the UK. Each one of them holds prestigious awards by organisations including American Dental Association, and The Dentistry award. Within our 20+ years of experience, we have helped over 12000 patients to restore their smile and enhance their confidence.
          </p>

          {/* Wayne Chirisa Quote Card with Teal Accent */}
          <div className="mt-6 sm:mt-8 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border-l-4 border-l-[#22b3c7] border-y border-r border-slate-100 flex items-start gap-4">
            <Quote className="w-8 h-8 text-[#22b3c7] shrink-0 fill-[#22b3c7]/20" />
            <div>
              <p className="italic text-slate-700 text-xs sm:text-sm leading-relaxed">
                "A genuine smile comes from the heart, but a healthy smile needs good dental care."
              </p>
              <div className="mt-2 text-xs font-bold text-slate-900">
                - Wayne Chirisa
              </div>
            </div>
          </div>

          {/* Metrics Pill Row */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22b3c7]" />
              <span><strong>12,000+</strong> Smiles Restored</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span><strong>20+ Years</strong> Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span><strong>Harley Street</strong> Certified</span>
            </div>
          </div>

          {/* READ MORE Cyan Button */}
          <div className="mt-8 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowBookingModal(true)}
              className="bg-[#22b3c7] hover:bg-[#1da1b8] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg shadow-lg shadow-[#22b3c7]/25 transition cursor-pointer"
            >
              READ MORE
            </motion.button>

            <button
              onClick={() => setShowBookingModal(true)}
              className="text-xs font-bold text-[#102a43] hover:text-[#22b3c7] transition flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#22b3c7]" />
              <span>Book Consultation</span>
            </button>
          </div>

        </div>

      </div>

      {/* ================= MODAL: PRACTICE CREDENTIALS & APPOINTMENT ================= */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingModal(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#cbeff5] text-[#1da1b8] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">London Dental Center of Excellence</h3>
                    <p className="text-[11px] text-slate-500">Established 1999 • Harley Street Accredited</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  Our multidisciplinary practice provides gentle aesthetic dentistry, dental implants, Invisalign orthodontic realignment, and pediatric oral health.
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">American Dental Association:</span>
                    <span className="text-emerald-600 font-semibold">Active Fellow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">The Dentistry Award (UK):</span>
                    <span className="text-[#22b3c7] font-semibold">Best Patient Care 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Emergency Appointments:</span>
                    <span className="text-slate-600">Same-Day Priority Slots</span>
                  </div>
                </div>

                {/* Instant Booking Form */}
                <div className="bg-[#eaf8fa] p-4 rounded-2xl border border-[#cbeff5] mt-4">
                  <h4 className="font-bold text-slate-900 text-xs mb-1">
                    Schedule a Consultation
                  </h4>
                  <p className="text-[11px] text-slate-600 mb-3">
                    Complimentary 3D smile scan included with first checkup.
                  </p>

                  {bookingSuccess ? (
                    <div className="p-3 bg-emerald-600 text-white rounded-xl text-xs font-bold text-center">
                      ✓ Consultation request received! Our patient concierge will call shortly.
                    </div>
                  ) : (
                    <button
                      onClick={() => setBookingSuccess(true)}
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#22b3c7] hover:bg-[#1da1b8] text-white transition shadow-sm cursor-pointer"
                    >
                      Book Free 15-Minute Scan
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-right">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
