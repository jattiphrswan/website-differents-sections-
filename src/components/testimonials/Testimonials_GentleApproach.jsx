import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ThumbsUp,
  Award,
  ChevronRight,
  X,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const GENTLE_REVIEWS = [
  {
    id: 'james',
    name: 'James Mitchell',
    role: 'Financial Analyst',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    treatment: 'Gentle Orthodontic Realignment',
    doctor: 'Dr. Sarah Jenkins, DDS',
    quote: 'Quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.'
  },
  {
    id: 'alex',
    name: 'Alex Reynolds',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-matthew.jpg',
    treatment: 'Zero-Pain Ultrasonic Cleaning',
    doctor: 'Dr. Wayne Chirisa, BDS',
    quote: 'Quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.'
  },
  {
    id: 'john',
    name: 'John Carter',
    role: 'Marketing Manager',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/dentist-treating-patient.jpg',
    treatment: 'Cosmetic Veneer Restoration',
    doctor: 'Dr. Elena Rostova, MD',
    quote: 'Quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.'
  }
];

export const Testimonials_GentleApproach = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedReview, setSelectedReview] = useState(null);
  const [showCredentialsModal, setShowCredentialsModal] = useState(false);

  const handleOpenCredentials = () => {
    setShowCredentialsModal(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200 bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl">
      {/* Giant subtle watermark text across the top */}
      <div className="absolute top-2 left-6 text-slate-100 font-black text-7xl sm:text-9xl md:text-[140px] tracking-tight select-none pointer-events-none">
        Feedback
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading, Bio & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-extrabold text-[#C81E1E] uppercase tracking-wider block">
              Patient Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Testimonials on Our Gentle Approach
            </h2>
            {/* Lime Accent Divider */}
            <div className="h-1 w-20 bg-gradient-to-r from-lime-500 to-emerald-400 rounded-full" />
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>

          <button
            onClick={handleOpenCredentials}
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C81E1E] hover:text-[#9c1414] transition cursor-pointer"
          >
            <span>Read More</span>
            <span className="text-xs font-black tracking-tighter">❯❯</span>
          </button>

          {/* Clinical Stats Row with Line-art Icons */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
            {/* Stat 1: 124+ Expert Doctors */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C81E1E] flex items-center justify-center shrink-0 border border-red-100">
                <ThumbsUp className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                  124+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Expert Doctors
                </div>
              </div>
            </div>

            {/* Stat 2: 210+ Global Partnerships */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C81E1E] flex items-center justify-center shrink-0 border border-red-100">
                <Award className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                  210+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Global Partnerships
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Stacked Testimonial Cards */}
        <div className="lg:col-span-7 space-y-4">
          {GENTLE_REVIEWS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedReview(item)}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex items-start gap-4 sm:gap-5 cursor-pointer group"
            >
              {/* Circular Patient Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.src = item.fallbackAvatar;
                }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-slate-100 shrink-0 shadow-sm"
              />

              {/* Review Content */}
              <div className="flex-1 space-y-2">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.quote}
                </p>

                {/* Double Quote & Author Row */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#C81E1E] transition-colors leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs font-medium text-slate-400">
                      {item.role}
                    </span>
                  </div>

                  {/* Red Quote Mark Icon */}
                  <span className="text-2xl font-serif font-black text-[#C81E1E] select-none">
                    ❝
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Patient Clinical Record Modal */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-lime-400 shadow-sm"
                />
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {selectedReview.name}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedReview.role}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Clinical Patient
                  </span>
                </div>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Treatment:</span>
                  <strong className="text-slate-900">{selectedReview.treatment}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Attending Clinician:</span>
                  <strong className="text-slate-900">{selectedReview.doctor}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Patient Comfort Score:</span>
                  <span className="font-extrabold text-lime-600 bg-lime-100 px-2 py-0.5 rounded-md">10 / 10 Zero Anxiety</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 italic bg-amber-50/60 p-3.5 rounded-xl border border-amber-100 mb-5">
                "{selectedReview.quote}"
              </p>

              <button
                onClick={() => setSelectedReview(null)}
                className="w-full py-2.5 rounded-xl text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer"
              >
                Close Patient Case File
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Credentials Modal */}
      <AnimatePresence>
        {showCredentialsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setShowCredentialsModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-[#C81E1E]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Clinical Standards</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Our Gentle Dental &amp; Surgical Protocol
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Every consultation adheres to bio-compatible, low-stress protocols to ensure anxiety-free care.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  'Computer-Guided Zero-Vibration Handpieces',
                  'Nitrous Oxide & Acoustic Sensory Calming Options',
                  'Biological Sterilization Protocol Exceeding ISO-9001',
                  'Post-Procedural 24/7 Direct Doctor Telehealth'
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowCredentialsModal(false)}
                className="w-full py-2.5 rounded-xl text-xs font-extrabold bg-[#C81E1E] hover:bg-[#9c1414] text-white transition shadow-lg shadow-red-600/20 cursor-pointer"
              >
                Schedule Gentle Consultation
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
