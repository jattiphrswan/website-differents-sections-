import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  X,
  Sparkles,
  Heart,
  ThumbsUp,
  Star
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const RED_BADGE_REVIEWS = [
  {
    id: 'liam',
    title: '“Superb Service!”',
    name: 'Liam Johnson',
    role: 'Financial Analyst',
    company: 'FinTrack Analytics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-benjamin.jpg',
    quote: 'Magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi.'
  },
  {
    id: 'olivia',
    title: '“Amazing Job!”',
    name: 'Olivia Adams',
    role: 'Marketing Assistant',
    company: 'BrightWave Creative',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    quote: 'Magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi.'
  },
  {
    id: 'ethan',
    title: '“Brilliant Work!”',
    name: 'Ethan Parker',
    role: 'HR Assistant',
    company: 'NextGen People Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    fallbackAvatar: './assets/avatar-matthew.jpg',
    quote: 'Magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi.'
  }
];

export const Testimonials_RedBadgeCards = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedReview, setSelectedReview] = useState(null);
  const [likes, setLikes] = useState({});

  const handleCardClick = (item) => {
    setSelectedReview(item);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200 bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[620px] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-14">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-black text-[#EA2A2A] uppercase tracking-[0.25em] block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Words from Our<br />Customers
          </h2>
        </div>

        {/* 3 White Cards with Red Circular Quote Bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {RED_BADGE_REVIEWS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              onClick={() => handleCardClick(item)}
              className="relative bg-white rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center cursor-pointer group"
            >
              {/* Circular Red Quote Badge Top Center */}
              <div className="flex justify-center -mt-14 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#EA2A2A] text-white flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-serif font-black leading-none select-none">
                    ❝
                  </span>
                </div>
              </div>

              {/* Bold Catchy Sub-Heading */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src = item.fallbackAvatar;
                  }}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                />
                <div className="text-left">
                  <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
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
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-center"
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-red-100 text-[#EA2A2A] mx-auto flex items-center justify-center mb-3">
                <span className="text-3xl font-serif font-black">❝</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                {selectedReview.title}
              </h3>
              <p className="text-xs text-[#EA2A2A] font-extrabold uppercase tracking-wider mb-4">
                Verified Customer Praise
              </p>

              <blockquote className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                "{selectedReview.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#EA2A2A]"
                />
                <div className="text-left">
                  <h4 className="text-sm font-black text-slate-900 leading-tight">
                    {selectedReview.name}
                  </h4>
                  <p className="text-xs text-slate-400">{selectedReview.role} • {selectedReview.company}</p>
                </div>
              </div>

              <button
                onClick={() => handleLike(selectedReview.id)}
                className="w-full py-2.5 rounded-xl text-xs font-black bg-[#EA2A2A] hover:bg-[#c91d1d] text-white shadow-lg shadow-red-500/25 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Helpful Feedback ({likes[selectedReview.id] || 48})</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
