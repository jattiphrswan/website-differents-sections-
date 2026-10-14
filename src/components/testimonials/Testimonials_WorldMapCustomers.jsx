import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Star,
  Globe,
  MapPin,
  X,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const WORLD_TESTIMONIALS = [
  {
    id: 'max',
    name: 'MAX TURNER',
    role: 'Developer',
    location: 'San Francisco, USA',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    rating: 5,
    quote: 'Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.',
    company: 'Nexus Software Systems',
    impact: 'Saved 280 Dev Hours/Sprint'
  },
  {
    id: 'mia',
    name: 'MIA JOHNSON',
    role: 'Designer',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    rating: 5,
    quote: 'Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.',
    company: 'Nordic Creative House',
    impact: '100% Component Reusability'
  }
];

const GLOBAL_NODES = [
  { city: 'San Francisco', top: '38%', left: '18%' },
  { city: 'London', top: '30%', left: '48%' },
  { city: 'Berlin', top: '32%', left: '52%' },
  { city: 'Tokyo', top: '42%', left: '82%' },
  { city: 'Singapore', top: '56%', left: '76%' },
  { city: 'Sydney', top: '75%', left: '88%' }
];

export const Testimonials_WorldMapCustomers = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showGlobalModal, setShowGlobalModal] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

  const handleReadMore = () => {
    setShowGlobalModal(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200 bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[580px] flex flex-col justify-center">
      {/* Background World Map Vector Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none select-none">
        <svg
          className="w-full max-w-5xl h-auto"
          viewBox="0 0 1000 500"
          fill="currentColor"
        >
          {/* Stylized geometric world map paths */}
          <path d="M150,120 Q180,100 240,110 T320,160 T280,240 T200,260 T140,200 Z" />
          <path d="M220,290 Q260,280 290,340 T270,440 T230,460 T200,380 Z" />
          <path d="M440,100 Q490,90 530,130 T510,200 T460,220 T420,160 Z" />
          <path d="M460,230 Q510,220 540,280 T520,380 T470,420 T440,320 Z" />
          <path d="M560,110 Q650,80 780,110 T860,180 T760,240 T620,220 Z" />
          <path d="M720,280 Q780,260 840,320 T810,410 T730,400 Z" />
        </svg>
      </div>

      {/* Pulsing Interactive Geo Pin Nodes */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {GLOBAL_NODES.map((node, i) => (
          <div
            key={i}
            style={{ top: node.top, left: node.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
            onMouseEnter={() => setActiveNode(node.city)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 shadow" />
            </span>
            {activeNode === node.city && (
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-20">
                {node.city}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        {/* Header with Title and READ MORE CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Hear from Our Customers
            </h2>
            {/* Orange Gradient Line */}
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full" />
          </div>

          <button
            onClick={handleReadMore}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 hover:opacity-95 shadow-lg shadow-orange-500/25 active:scale-95 transition cursor-pointer self-start sm:self-auto"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {WORLD_TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 space-y-5"
            >
              {/* Author & Rating Row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackAvatar;
                    }}
                    className="w-13 h-13 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-wide uppercase">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* 5 Orange Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
              </div>

              {/* Quote with Orange Quote Mark on Left */}
              <div className="flex items-start gap-3 pt-2">
                <span className="text-3xl font-serif font-black text-orange-500 leading-none shrink-0 select-none">
                  ❝
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Verified Location & Metric Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <span>{item.location}</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {item.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Coverage Modal */}
      <AnimatePresence>
        {showGlobalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setShowGlobalModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-orange-500">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">
                  Worldwide Reach
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Deploying Across 58+ Countries
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Our globally distributed nodes deliver sub-10ms response times for clients across North America, Europe, and Asia-Pacific.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { metric: '99.99%', label: 'Global Availability' },
                  { metric: '14,200+', label: 'Active Teams' },
                  { metric: '58 Countries', label: 'Worldwide Footprint' },
                  { metric: '<12ms', label: 'Average Edge Latency' }
                ].map((stat, i) => (
                  <div key={i} className="bg-orange-50/50 p-3.5 rounded-2xl border border-orange-100">
                    <div className="text-lg font-black text-slate-900">{stat.metric}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowGlobalModal(false)}
                className="w-full py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-orange-400 to-rose-500 text-white shadow-lg shadow-orange-500/25 transition cursor-pointer"
              >
                Join Global Network
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
