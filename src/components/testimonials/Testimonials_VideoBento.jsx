import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Star,
  Play,
  Quote,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  X,
  MessageCircle,
  ThumbsUp,
  Flame,
  Volume2
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const BENTO_TESTIMONIALS = [
  {
    id: 'bento-1',
    category: 'Founders',
    name: 'Elena Rostova',
    role: 'CEO & Co-Founder',
    company: 'Aetheria Cloud',
    avatar: './assets/dreamflux-portrait.jpg',
    metric: '+310% ARR in 6 Months',
    quote: 'Switching our multi-cloud deployment pipelines to this architecture felt like upgrading from a propeller plane to a supersonic jet.',
    rating: 5,
    tag: 'Enterprise Scaled',
    videoLength: '1:45 min',
    featured: true
  },
  {
    id: 'bento-2',
    category: 'Engineering',
    name: 'Marcus Brody',
    role: 'VP of Platform Engineering',
    company: 'HyperScale Systems',
    avatar: './assets/avatar-benjamin.jpg',
    metric: '99.999% SLA Uptime',
    quote: 'Our mean-time-to-resolution fell from 48 minutes to 4 minutes flat. The automated failover heuristics simply do not fail.',
    rating: 5,
    tag: 'Zero Downtime',
    videoLength: '2:10 min',
    featured: false
  },
  {
    id: 'bento-3',
    category: 'Design',
    name: 'Chloe Laurent',
    role: 'Head of Product Design',
    company: 'Lumina Spatial Labs',
    avatar: './assets/avatar-sophia.jpg',
    metric: '10x Faster Design Sprints',
    quote: 'The design tokens and micro-interaction libraries bridged the age-old gap between our Figma prototypes and production React components.',
    rating: 5,
    tag: 'Figma to Code',
    videoLength: '1:15 min',
    featured: false
  },
  {
    id: 'bento-4',
    category: 'Enterprise',
    name: 'David Vance',
    role: 'Chief Information Security Officer',
    company: 'Synex Financial Group',
    avatar: './assets/avatar-matthew.jpg',
    metric: 'SOC2 Type II in 14 Days',
    quote: 'Audit readiness used to take our compliance committee 3 stressful months. Now the continuous telemetry exports everything with 1 click.',
    rating: 5,
    tag: 'Audited & Compliant',
    videoLength: '2:30 min',
    featured: false
  }
];

const CATEGORIES = ['All', 'Founders', 'Engineering', 'Design', 'Enterprise'];

export const Testimonials_VideoBento = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const filtered = selectedCategory === 'All'
    ? BENTO_TESTIMONIALS
    : BENTO_TESTIMONIALS.filter((t) => t.category === selectedCategory);

  const handleOpenVideo = (item) => {
    setActiveVideoModal(item);
    setIsPlaying(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-neutral-800 bg-[#0B0F17] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 shadow-2xl">
      {/* Background Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TESTIMONIALS &amp; CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Trusted by leaders at high-growth companies
            </h2>
            <p className="text-sm text-slate-400 font-medium">
              See how modern teams transform operations, reduce latency, and scale revenue.
            </p>
          </div>

          {/* Interactive Category Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => {
            const isFeatured = item.featured && selectedCategory === 'All';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative bg-neutral-900/90 hover:bg-neutral-900 border border-white/10 hover:border-indigo-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-950/40 via-neutral-900 to-neutral-900' : ''
                }`}
              >
                <div>
                  {/* Top Row: Metric & Video Play Pill */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.metric}
                    </span>

                    <button
                      onClick={() => handleOpenVideo(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 hover:bg-indigo-600 text-white transition border border-white/10 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{item.videoLength}</span>
                    </button>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className={`text-slate-200 leading-relaxed font-medium mb-6 ${isFeatured ? 'text-lg sm:text-xl' : 'text-sm'}`}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {item.role} • <span className="text-indigo-400">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 border border-white/10 px-2 py-0.5 rounded-md hidden sm:inline-block">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Video Mockup Header */}
              <div className="relative aspect-video bg-neutral-950 flex flex-col justify-between p-6 overflow-hidden">
                <img
                  src={activeVideoModal.avatar}
                  alt={activeVideoModal.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                    REC • 4K HD Case Study
                  </span>
                  <button
                    onClick={() => setActiveVideoModal(null)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Center Play Indicator */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                  <p className="text-sm font-bold text-white drop-shadow">
                    {isPlaying ? 'Streaming Customer Story...' : 'Paused'}
                  </p>
                </div>

                {/* Video Controls Timeline */}
                <div className="relative z-10 space-y-2">
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-2/3 animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span>0:42 / {activeVideoModal.videoLength}</span>
                    <span>1080p 60fps</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {activeVideoModal.name} — {activeVideoModal.company}
                    </h3>
                    <p className="text-xs text-slate-400">{activeVideoModal.role}</p>
                  </div>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {activeVideoModal.metric}
                  </span>
                </div>
                <p className="text-sm text-slate-300 italic border-l-2 border-indigo-500 pl-3">
                  "{activeVideoModal.quote}"
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
