import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle2,
  X,
  ArrowRight,
  BookOpen,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const EDITORIAL_STORIES = [
  {
    id: 'rose',
    name: 'Rose Bennett',
    role: 'Client',
    company: 'Bennett Architecture',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    project: 'Bespoke Scandinavian Residential Design',
    year: '2026'
  },
  {
    id: 'david',
    name: 'David Thompson',
    role: 'Client',
    company: 'Thompson Contemporary Living',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-matthew.jpg',
    quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    project: 'Penthouse Commercial Development',
    year: '2026'
  }
];

export const Testimonials_EditorialClientStories = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showDiscoverModal, setShowDiscoverModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleDiscoverMore = () => {
    setShowDiscoverModal(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-300/80 bg-[#EAEFF2] text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[600px] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full space-y-12 sm:space-y-14">
        {/* Header with Serif Typography */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.28em] block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Client Stories
          </h2>
        </div>

        {/* 2 Clean White Rectangular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EDITORIAL_STORIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedClient(item)}
              className="bg-white rounded-none p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-8 cursor-pointer border border-slate-100"
            >
              <div className="space-y-4">
                {/* Dark Slate Quote Mark */}
                <div className="text-3xl font-serif text-slate-800 leading-none select-none">
                  ❝
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src = item.fallbackAvatar;
                  }}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Discover More Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handleDiscoverMore}
            className="px-8 py-3 bg-[#1E252B] hover:bg-[#12161A] text-white text-xs font-serif font-bold tracking-wider uppercase transition shadow-md active:scale-95 cursor-pointer"
          >
            Discover More
          </button>
        </div>
      </div>

      {/* Discover More Modal */}
      <AnimatePresence>
        {showDiscoverModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <button
                onClick={() => setShowDiscoverModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-slate-700">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Archive &amp; Monograph</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Client Stories Anthology
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Curated retrospective of architectural, residential, and corporate developments across North America and Europe.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { title: 'The Glass Pavilion at Lake Tahoe', client: 'Bennett Architecture' },
                  { title: 'Tribeca High-Rise Acoustic Suite', client: 'Thompson Living' },
                  { title: 'Stockholm Botanical Pavilion', client: 'Nordic Spatial' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 text-xs">
                    <span className="font-bold text-slate-800">{item.title}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{item.client}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowDiscoverModal(false)}
                className="w-full py-2.5 bg-[#1E252B] hover:bg-black text-white text-xs font-serif font-bold tracking-wider uppercase transition cursor-pointer"
              >
                Request Physical Lookbook
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Client Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src={selectedClient.avatar}
                  alt={selectedClient.name}
                  className="w-14 h-14 rounded-full object-cover border border-slate-300"
                />
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    {selectedClient.name}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedClient.company}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 border border-slate-200/80 mb-5 text-xs space-y-1.5">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Project Monograph</div>
                <div className="font-bold text-slate-900">{selectedClient.project}</div>
                <div className="text-slate-500 text-[11px]">Commissioned: {selectedClient.year}</div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                "{selectedClient.quote}"
              </blockquote>

              <button
                onClick={() => setSelectedClient(null)}
                className="w-full py-2.5 bg-[#1E252B] hover:bg-black text-white text-xs font-serif font-bold tracking-wider uppercase transition cursor-pointer"
              >
                Close Story
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
