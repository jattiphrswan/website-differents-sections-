import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Maximize2,
  Calendar,
  X,
  CheckCircle2,
  MapPin,
  Bed,
  Bath,
  ArrowRight
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const REAL_ESTATE_SUITES = [
  {
    id: 'deluxe',
    title: 'Deluxe room',
    category: 'Traveling',
    status: 'Sale',
    area: '120 sq. ft.',
    type: 'Apartment',
    price: '$1,450,000',
    img: './assets/luxury-deluxe-room.jpg',
    features: ['Raised Platform Bath', 'Walk-in Glass Wardrobe', 'Forest Canopy View']
  },
  {
    id: 'executive',
    title: 'Executive suite',
    category: 'Traveling',
    status: 'Sale',
    area: '180 sq. ft.',
    type: 'Apartment',
    price: '$2,200,000',
    img: './assets/luxury-executive-suite.jpg',
    features: ['Curved Panoramic Glazing', 'Fluted Gold LED Paneling', 'Skyline Panorama']
  },
  {
    id: 'luxury',
    title: 'Luxury suite',
    category: 'Traveling',
    status: 'Sale',
    area: '260 sq. ft.',
    type: 'Apartment',
    price: '$3,750,000',
    img: './assets/luxury-presidential-suite.jpg',
    features: ['Parquet Hardwood Flooring', 'Private Terrace Balcony', 'South-Facing Sunlight']
  }
];

export const Cards_LuxuryRealEstate = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [tourScheduled, setTourScheduled] = useState(false);

  const handleCardClick = (suite, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedSuite(suite);
    setTourScheduled(false);
  };

  const handleScheduleTour = () => {
    setTourScheduled(true);
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#e2b36b', '#d4af37', '#f3e5ab']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#121316] p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-white/10 text-white select-none overflow-hidden">
      
      {/* Background Subtle Geometric Architectural Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl text-left mb-10 sm:mb-14">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block mb-2">
          BESPOKE RESIDENCES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
          Curated Luxury Living Suites
        </h2>
      </div>

      {/* 3 Luxury Real Estate Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {REAL_ESTATE_SUITES.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8, scale: 1.015 }}
            onClick={(e) => handleCardClick(item, e)}
            className="bg-[#1a1c22] rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/40 shadow-2xl transition-all flex flex-col justify-between cursor-pointer group"
          >
            {/* Top Photo Container */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono text-amber-300 border border-white/10">
                {item.price}
              </div>
            </div>

            {/* Bottom Card Specs Table */}
            <div className="p-6 sm:p-7 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white mb-0.5">
                  {item.title}
                </h3>
                <span className="text-xs text-slate-400 font-mono block mb-4">
                  {item.category}
                </span>

                {/* Specs Rows */}
                <div className="space-y-2 border-t border-white/[0.08] pt-3 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Status</span>
                    <span className="text-white font-medium">{item.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Area</span>
                    <span className="text-white font-medium">{item.area}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Type</span>
                    <span className="text-white font-medium">{item.type}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Cue */}
              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                <span>View Floorplan</span>
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Suite Detail Modal */}
      <AnimatePresence>
        {selectedSuite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#181a20] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/20 text-left relative text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-serif text-white">{selectedSuite.title}</h3>
                  <p className="text-xs text-amber-400 font-mono">{selectedSuite.price} • {selectedSuite.area}</p>
                </div>
                <button
                  onClick={() => setSelectedSuite(null)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {tourScheduled ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white">Private Tour Reserved!</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    Our luxury concierge will greet you on-site for your private architectural walkthrough.
                  </p>
                  <button
                    onClick={() => setSelectedSuite(null)}
                    className="mt-6 bg-white text-black text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  <img
                    src={selectedSuite.img}
                    alt={selectedSuite.title}
                    className="w-full h-44 rounded-2xl object-cover"
                  />

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <span className="text-[11px] font-bold text-amber-400 font-mono block">Signature Finishes:</span>
                    {selectedSuite.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="text-amber-400">✦</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleScheduleTour}
                    className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-amber-500/20"
                  >
                    Schedule Private Architectural Tour
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
