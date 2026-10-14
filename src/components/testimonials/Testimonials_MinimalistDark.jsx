import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  ThumbsUp,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const MINIMALIST_TESTIMONIALS = [
  {
    id: 'javier',
    name: 'Javier Gomez',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    fallbackAvatar: './assets/impact-stories-man.jpg',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
    project: 'Next-Gen Mobile Fintech App',
    rating: 5,
    likes: 84
  },
  {
    id: 'kavita',
    name: 'Kavita Patel',
    role: 'Product Lead',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    fallbackAvatar: './assets/avatar-sophia.jpg',
    quote: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    project: 'Cloud Security Platform',
    rating: 5,
    likes: 129
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    fallbackAvatar: './assets/avatar-matthew.jpg',
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
    project: 'Luxury Brand Identity',
    rating: 5,
    likes: 96
  }
];

export const Testimonials_MinimalistDark = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [likes, setLikes] = useState({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeItem = MINIMALIST_TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % MINIMALIST_TESTIMONIALS.length);
    setIsPlayingAudio(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + MINIMALIST_TESTIMONIALS.length) % MINIMALIST_TESTIMONIALS.length);
    setIsPlayingAudio(false);
  };

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || activeItem.likes) + 1
    }));
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-neutral-800 bg-[#121417] text-white py-16 sm:py-24 px-6 sm:px-12 md:px-16 shadow-2xl min-h-[560px] flex flex-col justify-center select-none">
      {/* Giant subtle watermark text on the bottom right */}
      <div className="absolute right-4 bottom-2 text-neutral-800/20 font-black text-6xl sm:text-8xl md:text-9xl tracking-tight select-none pointer-events-none uppercase">
        Testimonial
      </div>

      {/* Ambient gradient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-14"
          >
            {/* Circular Portrait with Warm Tone */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-neutral-700/80 shadow-2xl p-1 bg-gradient-to-tr from-amber-600/30 to-red-600/30">
                <img
                  src={activeItem.avatar}
                  alt={activeItem.name}
                  onError={(e) => {
                    e.currentTarget.src = activeItem.fallbackAvatar;
                  }}
                  className="w-full h-full object-cover rounded-full filter contrast-105"
                />
              </div>
              {/* Verified Pill */}
              <div className="absolute bottom-1 right-2 bg-neutral-900 border border-neutral-700 rounded-full px-2 py-0.5 text-[10px] font-bold text-amber-400 flex items-center gap-1 shadow-md">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Verified</span>
              </div>
            </div>

            {/* Testimonial Quote & Author Info */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* Outline Double Quotation Icon */}
              <div className="flex justify-center md:justify-start">
                <svg
                  className="w-12 h-10 text-neutral-400 stroke-current stroke-1 fill-none"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 11h4a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a4 4 0 004 4h1a1 1 0 001-1v-2a1 1 0 00-1-1H7a2 2 0 01-2-2v-1zm10 0h4a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a4 4 0 004 4h1a1 1 0 001-1v-2a1 1 0 00-1-1h-2a2 2 0 01-2-2v-1z" />
                </svg>
              </div>

              {/* Bold Quote Text */}
              <blockquote className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed font-normal">
                “{activeItem.quote}”
              </blockquote>

              {/* Author & Role */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-sm">
                <span className="font-extrabold text-white tracking-wide">
                  {activeItem.name}
                </span>
                <span className="text-neutral-500 font-bold">–</span>
                <span className="text-neutral-400 font-medium">
                  {activeItem.role}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Interactive Controls */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
          {/* Audio voice playback trigger */}
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-300 transition cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{isPlayingAudio ? 'Voice Playing...' : 'Listen to Voice Clip'}</span>
            {isPlayingAudio && (
              <span className="flex items-center gap-0.5 ml-1">
                <span className="w-1 h-3 bg-amber-400 animate-pulse rounded-full" />
                <span className="w-1 h-4 bg-amber-400 animate-pulse delay-100 rounded-full" />
                <span className="w-1 h-2 bg-amber-400 animate-pulse delay-200 rounded-full" />
              </span>
            )}
          </button>

          {/* Previous / Next Carousels */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLike(activeItem.id)}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white transition cursor-pointer"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-rose-400" />
              <span>Helpful ({likes[activeItem.id] || activeItem.likes})</span>
            </button>

            <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-full border border-neutral-800">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition cursor-pointer"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-neutral-400">
                {currentIndex + 1} / {MINIMALIST_TESTIMONIALS.length}
              </span>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition cursor-pointer"
                title="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
