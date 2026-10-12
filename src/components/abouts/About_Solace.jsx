import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  ShieldCheck,
  Accessibility,
  Heart,
  Users,
  Sparkles,
  Check,
  X,
  Lock,
  Smile,
  Eye,
  Volume2,
  Share2,
  Calendar,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const COMMUNITY_AVATARS = [
  {
    name: 'Sarah Chen',
    role: 'Mindfulness Guide',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    fallback: 'SC'
  },
  {
    name: 'David Morales',
    role: 'Parent & Runner',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    fallback: 'DM'
  },
  {
    name: 'Elena Rostova',
    role: 'Wellness Author',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    fallback: 'ER'
  }
];

const STORY_BLOSSOMS = [
  {
    mood: 'Grateful',
    icon: '🌿',
    title: 'The Morning Veranda Moment',
    quote: '"Learning to pause with my son before our busy day transformed how we talk about our feelings."',
    author: 'Elena R. • Day 84 Streak'
  },
  {
    mood: 'Resilient',
    icon: '⚡',
    title: 'Finding Calm in the Chaos',
    quote: '"Solace gave me a judgment-free sanctuary to process grief into creative renewal."',
    author: 'Marcus K. • Day 120 Streak'
  },
  {
    mood: 'Joyful',
    icon: '☀️',
    title: 'Laughter That Echoes',
    quote: '"Recording the smallest funny moments with my toddler created a lifelong tapestry of smiles."',
    author: 'Sarah C. • Day 45 Streak'
  },
  {
    mood: 'Peaceful',
    icon: '🌊',
    title: 'Reclaiming Evening Serenity',
    quote: '"5 minutes of gratitude reflection replaced an hour of late-night doom-scrolling."',
    author: 'Aiden T. • Day 210 Streak'
  }
];

export const About_Solace = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [activeFeatureModal, setActiveFeatureModal] = useState(null); // 'confidentiality' | 'accessibility' | null
  const [activeBlossomMood, setActiveBlossomMood] = useState(0);
  const [hasJoinedCommunity, setHasJoinedCommunity] = useState(false);

  const triggerConfetti = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    try {
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#4853ed', '#38bdf8', '#818cf8', '#ec4899', '#f59e0b']
      });
    } catch {
      // safe fallback
    }
  };

  const handleJoinClick = (e) => {
    e.stopPropagation();
    setHasJoinedCommunity(true);
    triggerConfetti(e);
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-4 sm:p-6 lg:p-8 font-jakarta shadow-xl border border-slate-200/70 text-slate-900 select-none">
      {/* 2-Column Responsive Grid */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-2'} gap-6 sm:gap-8 items-stretch`}>
        
        {/* ================= LEFT COLUMN: PHOTOREALISTIC IMAGE CARD ================= */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-end p-4 sm:p-7 group shadow-lg shadow-slate-900/5 bg-slate-100">
          {/* Main Background Image */}
          <img
            src="/assets/solace-story-family.jpg"
            alt="Mother and young child laughing joyously together on a bright sunlit porch"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Subtle Ambient Bottom Shadow for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* Floating Community Badge (Bottom-Left) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setShowCommunityModal(true)}
            className="relative z-20 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl shadow-slate-950/20 border border-white/80 max-w-[260px] sm:max-w-[280px] cursor-pointer hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all"
            role="button"
            tabIndex={0}
            aria-label="View our active community details"
          >
            {/* Avatars Row + 350+ Badge */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center -space-x-2.5">
                {COMMUNITY_AVATARS.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar.src}
                    alt={avatar.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-sm bg-slate-200"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>

              {/* 350+ Pill Badge */}
              <div className="bg-[#4853ed] text-white font-bold text-[11px] sm:text-xs px-2.5 py-1 rounded-full border-2 border-white shadow-sm flex items-center justify-center shrink-0">
                350+
              </div>
            </div>

            {/* Headline */}
            <h4 className="mt-2.5 text-slate-900 font-bold text-xs sm:text-sm leading-snug tracking-tight">
              Join our active healthy community
            </h4>

            {/* Micro Hint */}
            <div className="mt-1 flex items-center gap-1 text-[11px] text-indigo-600 font-semibold group-hover:underline">
              <span>Explore stories</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: CONTENT & FEATURE CARDS ================= */}
        <div className="bg-[#f5f6f9] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between shadow-lg shadow-slate-900/5 border border-slate-200/50">
          
          {/* Top Section: Centered Title, Paragraph, and Read More CTA */}
          <div className="flex flex-col items-center text-center">
            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-bold text-slate-900 tracking-tight leading-[1.18] max-w-lg">
              Where Smiles Blossom <br className="hidden sm:inline" />
              Into Stories
            </h2>

            {/* Paragraph Description */}
            <p className="mt-4 sm:mt-5 text-slate-600 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-md sm:max-w-lg mx-auto">
              Solace isn't just a space to track your moods and progress, it's a place where your well-being takes center stage. Here you can express yourself freely, track your journey, and witness those smiles blossom into stories that empower and inspire you.
            </p>

            {/* Read More Pill Button */}
            <div className="mt-6 sm:mt-7">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-2 bg-[#4853ed] hover:bg-[#3b45dc] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg shadow-indigo-600/25 transition-colors cursor-pointer group"
                aria-label="Read more about Solace"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

          {/* Bottom Section: Two White Feature Cards Side-by-Side */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Feature Card 1: Confidentiality */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveFeatureModal('confidentiality')}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100/80 text-left flex flex-col justify-start cursor-pointer group"
            >
              {/* Icon Container with Circular Light-Blue Badge */}
              <div className="w-11 h-11 rounded-full bg-[#eef2ff] text-[#4853ed] flex items-center justify-center mb-4 sm:mb-5 border border-indigo-100/70 group-hover:scale-105 transition-transform">
                {/* Shield / Security Lock SVG */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-1.5 flex items-center justify-between">
                <span>Confidentiality</span>
                <span className="text-[11px] font-semibold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more ↗
                </span>
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-[0.84rem] leading-relaxed">
                Your privacy is our priority. Discreet and secure space for your wellness journey.
              </p>
            </motion.div>

            {/* Feature Card 2: Accessibility */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveFeatureModal('accessibility')}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100/80 text-left flex flex-col justify-start cursor-pointer group"
            >
              {/* Icon Container with Circular Light-Blue Badge */}
              <div className="w-11 h-11 rounded-full bg-[#eef2ff] text-[#4853ed] flex items-center justify-center mb-4 sm:mb-5 border border-indigo-100/70 group-hover:scale-105 transition-transform">
                <Accessibility className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-1.5 flex items-center justify-between">
                <span>Accessibility</span>
                <span className="text-[11px] font-semibold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more ↗
                </span>
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-[0.84rem] leading-relaxed">
                Designed for everyone, with features that make self-care easy and inclusive.
              </p>
            </motion.div>

          </div>

        </div>

      </div>

      {/* ================= MODAL 1: INTERACTIVE "READ MORE" STORY READER ================= */}
      <AnimatePresence>
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStoryModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    The Solace Story & Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    Turning Everyday Smiles into Milestones
                  </h3>
                </div>
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Philosophy Body */}
              <div className="mt-5 space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  At Solace, we believe emotional well-being is not measured in checkboxes or clinical metrics—it lives in everyday micro-moments. A shared giggle with your child, an unhurried sunset, or the deep sigh of relief after a demanding week.
                </p>
                <p>
                  Our platform blends private reflection logs, AI-guided gentle prompts, and compassionate kindred support so that every smile isn't forgotten, but documented into an empowering personal story.
                </p>

                {/* Interactive Story Blossom Mood Explorer */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Interactive Mood Blossoms
                    </span>
                    <span className="text-[11px] text-slate-500">Pick a mood to explore</span>
                  </div>

                  {/* Mood Selector Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {STORY_BLOSSOMS.map((blossom, index) => (
                      <button
                        key={blossom.mood}
                        onClick={() => setActiveBlossomMood(index)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                          activeBlossomMood === index
                            ? 'bg-[#4853ed] text-white shadow-md shadow-indigo-500/20'
                            : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200/60'
                        }`}
                      >
                        <span>{blossom.icon}</span>
                        <span>{blossom.mood}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Mood Quote Card */}
                  <motion.div
                    key={activeBlossomMood}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-xl p-4 border border-indigo-100 shadow-sm"
                  >
                    <h5 className="font-bold text-slate-900 text-sm">
                      {STORY_BLOSSOMS[activeBlossomMood].title}
                    </h5>
                    <p className="italic text-slate-600 text-xs mt-1.5 leading-relaxed">
                      {STORY_BLOSSOMS[activeBlossomMood].quote}
                    </p>
                    <div className="mt-2 text-[11px] text-indigo-600 font-semibold">
                      {STORY_BLOSSOMS[activeBlossomMood].author}
                    </div>
                  </motion.div>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 text-xs mb-1">🌿 Mindful Cadence</div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Gentle check-ins designed around real emotional rhythms.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 text-xs mb-1">🔒 Zero Telemetry</div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Your reflections remain client-side encrypted and private.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 text-xs mb-1">♿ Universally Open</div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Tested with assistive tech, screen readers & high contrast.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    setShowStoryModal(false);
                    setShowCommunityModal(true);
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#4853ed] hover:bg-[#3b45dc] transition shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  Join Community Free
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 2: COMMUNITY HUB ================= */}
      <AnimatePresence>
        {showCommunityModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCommunityModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl z-10 text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Solace Community Hub</h3>
                    <p className="text-[11px] text-slate-500">350+ Active Healthy Members</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCommunityModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Members Carousel / List */}
              <div className="mt-4 space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join hundreds of parents, creators, and professionals nurturing mindfulness together every single morning.
                </p>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Active Spotlight Members
                  </span>
                  {COMMUNITY_AVATARS.map((m, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={m.src}
                          alt={m.name}
                          className="w-8 h-8 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <div className="font-semibold text-slate-900">{m.name}</div>
                          <div className="text-[11px] text-slate-500">{m.role}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        Active Today
                      </span>
                    </div>
                  ))}
                </div>

                {/* Join CTA */}
                <div className="bg-indigo-50/70 rounded-2xl p-4 border border-indigo-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-indigo-950 text-xs">
                      {hasJoinedCommunity ? '🎉 Welcome to the Family!' : 'Become Member #351'}
                    </div>
                    <div className="text-[11px] text-indigo-700">
                      {hasJoinedCommunity ? 'Your invitation link has been saved.' : 'Free instant access to daily prompt pods.'}
                    </div>
                  </div>
                  <button
                    onClick={handleJoinClick}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer ${
                      hasJoinedCommunity
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#4853ed] hover:bg-[#3b45dc] text-white'
                    }`}
                  >
                    {hasJoinedCommunity ? 'Joined!' : 'Join Now'}
                  </button>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-right">
                <button
                  onClick={() => setShowCommunityModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 3: CONFIDENTIALITY & ACCESSIBILITY DETAILS ================= */}
      <AnimatePresence>
        {activeFeatureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeatureModal(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#eef2ff] text-[#4853ed] flex items-center justify-center">
                    {activeFeatureModal === 'confidentiality' ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <Accessibility className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {activeFeatureModal === 'confidentiality' ? 'Confidentiality' : 'Accessibility'}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {activeFeatureModal === 'confidentiality' ? 'Privacy Guarantee' : 'Universal Design'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveFeatureModal(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                {activeFeatureModal === 'confidentiality' ? (
                  <>
                    <p>
                      Your mental health journey and mood logs are strictly your own. Solace is built with zero-knowledge cryptographic safeguards:
                    </p>
                    <ul className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>AES-256 Client Encryption:</strong> Logs are encrypted before leaving your browser.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Zero Ad-Tracking:</strong> No third-party data broker SDKs or tracking pixels.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Discreet Incognito Mode:</strong> Quick-hide key for private journaling in public.</span>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Self-care should never have barriers. Solace is built adhering to WCAG 2.2 AAA accessibility standards:
                    </p>
                    <ul className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Screen Reader Optimized:</strong> Full ARIA landmarks & semantic structure.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Dyslexia Friendly & Font Scaling:</strong> Dynamic typography & high contrast modes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Full Keyboard Navigation:</strong> Tab through every feature without touch or mouse.</span>
                      </li>
                    </ul>
                  </>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-right">
                <button
                  onClick={() => setActiveFeatureModal(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#4853ed] hover:bg-[#3b45dc] transition cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
