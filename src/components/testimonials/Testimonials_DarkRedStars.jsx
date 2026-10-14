import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Star,
  CheckCircle2,
  X,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ThumbsUp
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const SIX_REVIEWS = [
  {
    id: 'alex',
    name: 'Alex Mitchell',
    role: 'Web Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    rating: 5,
    quote: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat pariatur excepteur.',
    project: 'E-commerce Brand Redesign',
    likes: 54
  },
  {
    id: 'chris',
    name: 'Chris Bennett',
    role: 'Web Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-matthew.jpg',
    rating: 5,
    quote: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat pariatur excepteur.',
    project: 'SaaS Design System',
    likes: 88
  },
  {
    id: 'ethan',
    name: 'Ethan Anderson',
    role: 'Web Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    rating: 5,
    quote: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat pariatur excepteur.',
    project: 'Fintech Mobile Dashboard',
    likes: 42
  },
  {
    id: 'marcus',
    name: 'Marcus Carter',
    role: 'Web Designer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/impact-stories-man.jpg',
    rating: 5,
    quote: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat pariatur excepteur.',
    project: 'AI Copilot Studio',
    likes: 67
  },
  {
    id: 'dylan',
    name: 'Dylan Thompson',
    role: 'Web Designer',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/dentist-treating-patient.jpg',
    rating: 5,
    quote: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat pariatur excepteur.',
    project: 'HealthTech Patient Portal',
    likes: 91
  },
  {
    id: 'antonio',
    name: 'Antonio Carter',
    role: 'Web Designer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    rating: 5,
    quote: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat pariatur excepteur.',
    project: 'Cryptocurrency Analytics',
    likes: 73
  }
];

export const Testimonials_DarkRedStars = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedReview, setSelectedReview] = useState(null);
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-neutral-900 bg-black text-white py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[640px] flex flex-col justify-center">
      {/* Ambient subtle red glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12 sm:space-y-16">
        {/* Centered Headline */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-xl mx-auto">
            Favorable reviews<br />and testimonials
          </h2>
        </div>

        {/* 6-Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIX_REVIEWS.map((item, idx) => {
            const currentLikes = item.likes + (likes[item.id] || 0);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedReview(item)}
                className="bg-[#0D0F12] hover:bg-[#12151B] border border-white/5 hover:border-red-500/30 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-300 cursor-pointer group"
              >
                <div>
                  {/* 5 Vibrant Red Stars */}
                  <div className="flex items-center gap-1.5 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#DC2626] text-[#DC2626] filter drop-shadow-[0_0_6px_rgba(220,38,38,0.4)]"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-8">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackAvatar;
                    }}
                    className="w-11 h-11 rounded-full object-cover border border-neutral-700 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Review Inspector Modal */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-white"
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-neutral-400 flex items-center justify-center hover:bg-white/20 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {selectedReview.name}
                  </h3>
                  <p className="text-xs text-neutral-400">{selectedReview.role}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-1 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Verified Portfolio Review
                  </span>
                </div>
              </div>

              {/* Red Stars */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-red-500 text-red-500"
                  />
                ))}
                <span className="text-xs font-mono text-neutral-400 ml-1">5.0 / 5.0</span>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-2 mb-5 text-xs text-neutral-300">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Project Type:</span>
                  <strong className="text-white">{selectedReview.project}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Audit Status:</span>
                  <span className="text-emerald-400 font-bold">100% Cryptographically Verified</span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-neutral-200 italic bg-red-950/20 border border-red-500/20 p-4 rounded-xl mb-6">
                "{selectedReview.quote}"
              </blockquote>

              <button
                onClick={() => handleLike(selectedReview.id)}
                className="w-full py-2.5 rounded-xl text-xs font-black bg-red-600 hover:bg-red-500 text-white transition shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Mark Helpful ({selectedReview.likes + (likes[selectedReview.id] || 0)})</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
