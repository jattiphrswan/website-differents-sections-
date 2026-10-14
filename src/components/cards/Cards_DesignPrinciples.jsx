import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  X,
  Eye,
  Sliders,
  Maximize2,
  MousePointer2
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const PRINCIPLES_LIST = [
  {
    id: 'contrast',
    name: 'Contrast',
    tag: 'Visual Weight',
    desc: 'Juxtaposing opposing elements (dark vs light, large vs small, bold vs thin) to create focal drama and immediate scannability.',
    demo: 'High contrast text and buttons increase conversion rates by 42% by guiding visual priority effortlessly.'
  },
  {
    id: 'hierarchy',
    name: 'Hierarchy',
    tag: 'Information Flow',
    desc: 'The intentional structuring of visual cues so the human eye naturally absorbs the most vital information first.',
    demo: 'Scale, weight, and color sequencing ensure users grasp your core value proposition within the initial 50 milliseconds.'
  },
  {
    id: 'balance',
    name: 'Balance',
    tag: 'Symmetry & Equilibrium',
    desc: 'Distributing visual elements evenly—either symmetrically for stability or asymmetrically for dynamic tension.',
    demo: 'Asymmetric layouts generate rhythmic excitement while maintaining visual resting points for effortless reading.'
  },
  {
    id: 'alignment',
    name: 'Alignment',
    tag: 'Grid Cohesion',
    desc: 'Every element should possess a visual connection with something else on the page for clean, deliberate polish.',
    demo: 'Rigorous 8pt baseline grids reduce cognitive load, making complex dashboards feel calm and intuitive.'
  },
  {
    id: 'repetition',
    name: 'Repetition',
    tag: 'Rhythm & Brand',
    desc: 'Repeating consistent colors, shapes, and font scales strengthens design unity and builds instant brand recognition.',
    demo: 'Predictable visual grammar turns unfamiliar workflows into second nature for your customers.'
  },
  {
    id: 'proximity',
    name: 'Proximity',
    tag: 'Spatial Relationship',
    desc: 'Grouping related items together visually communicates their semantic relationship before reading a single word.',
    demo: 'Micro-white space creates unmistakable grouping, preventing visual clutter in enterprise software.'
  }
];

export const Cards_DesignPrinciples = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedId, setSelectedId] = useState('hierarchy');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const activePrinciple = PRINCIPLES_LIST.find((p) => p.id === selectedId) || PRINCIPLES_LIST[1];

  const handleCardClick = (id) => {
    setSelectedId(id);
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.55 },
        colors: ['#a855f7', '#c084fc', '#e879f9', '#818cf8']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#0c061e] p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-purple-900/30 text-white select-none overflow-hidden">
      
      {/* Background Cyberpunk Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px'
        }}
      />

      {/* Top Spotlight Cone Beam Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-gradient-to-b from-purple-500/25 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          What are the Principles of Design?
        </h2>
        <p className="mt-4 sm:mt-5 text-purple-200/70 text-xs sm:text-sm lg:text-[0.935rem] leading-relaxed max-w-xl mx-auto font-normal">
          Although some people think that design is a branch of art, it stands out with its own rules and principles, as the design needs to look eye-appealing in most cases, unlike art.
        </p>
      </div>

      {/* Interactive Principles Cards Showcase */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          
          {PRINCIPLES_LIST.slice(0, 3).map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleCardClick(item.id)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#6b21a8]/90 via-[#4c1d95]/90 to-[#2e1065]/90 border-2 border-purple-400 shadow-2xl shadow-purple-600/40'
                    : 'bg-[#180f33]/80 hover:bg-[#211447]/90 border border-purple-500/20 text-purple-300'
                }`}
                style={isSelected ? {
                  backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(216, 180, 254, 0.25) 0%, transparent 70%), linear-gradient(to bottom, #581c87, #2e1065)'
                } : undefined}
              >
                {/* Top Row: Label & Arrow */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium tracking-wide ${isSelected ? 'text-purple-200' : 'text-purple-400'}`}>
                    Design Principles
                  </span>
                  <ArrowUpRight className={`w-7 h-7 sm:w-9 sm:h-9 ${isSelected ? 'text-white' : 'text-purple-400/60'}`} />
                </div>

                {/* Simulated Multiplayer Cursor Tooltip on active card */}
                {isSelected && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-400/40 text-[11px] font-bold text-white shadow-xl animate-pulse">
                    <MousePointer2 className="w-3 h-3 text-purple-400 fill-purple-400" />
                    <span>Hey!</span>
                  </div>
                )}

                {/* Bottom Title */}
                <div className="text-left mt-8">
                  <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-purple-200'}`}>
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Secondary Row of 3 Flanking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6 items-stretch">
          {PRINCIPLES_LIST.slice(3, 6).map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleCardClick(item.id)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#6b21a8]/90 via-[#4c1d95]/90 to-[#2e1065]/90 border-2 border-purple-400 shadow-2xl shadow-purple-600/40'
                    : 'bg-[#150d2e]/70 hover:bg-[#1d1240] border border-purple-500/15 text-purple-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${isSelected ? 'text-purple-200' : 'text-purple-400/70'}`}>
                    Design Principles
                  </span>
                  <ArrowUpRight className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-purple-400/50'}`} />
                </div>

                <div className="text-left mt-6">
                  <h4 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-purple-200/90'}`}>
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Principle Details Footer Callout */}
        <div className="mt-8 p-5 bg-[#1b103b]/80 border border-purple-500/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                ACTIVE: {activePrinciple.name.toUpperCase()}
              </span>
              <span className="text-xs text-purple-300/80 font-medium">{activePrinciple.tag}</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-100/90 mt-1 max-w-2xl leading-relaxed">
              {activePrinciple.desc}
            </p>
          </div>
          <button
            onClick={() => setShowDetailModal(true)}
            className="shrink-0 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-purple-600/30 transition cursor-pointer"
          >
            Explore Masterclass
          </button>
        </div>
      </div>

      {/* Masterclass Detail Modal */}
      <AnimatePresence>
        {showDetailModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#140b2e] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-purple-500/40 text-left relative text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-purple-600/30 text-purple-300 font-bold flex items-center justify-center text-sm border border-purple-500/30">
                    ✨
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{activePrinciple.name} in Digital UX</h3>
                    <p className="text-xs text-purple-300/70">{activePrinciple.tag}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="p-1 rounded-full hover:bg-purple-900/50 text-purple-300 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                  {activePrinciple.desc}
                </p>
                <div className="p-4 bg-purple-950/60 rounded-2xl border border-purple-500/30 text-xs">
                  <span className="text-purple-300 font-semibold block mb-1">Production Impact:</span>
                  <p className="text-purple-100">{activePrinciple.demo}</p>
                </div>
              </div>

              <button
                onClick={() => setShowDetailModal(false)}
                className="w-full mt-6 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-purple-600/30"
              >
                Close Rule
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
