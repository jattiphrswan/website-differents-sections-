import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Terminal,
  Play,
  ArrowRight,
  CheckCircle2,
  X,
  Code2,
  GitBranch,
  Cpu,
  Sparkles,
  BarChart,
  Copy,
  Check
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const Cards_AILabAgents = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);

  // States
  const [activeCliNode, setActiveCliNode] = useState('INIT');
  const [copiedCli, setCopiedCli] = useState(false);
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const [selectedEval, setSelectedEval] = useState('prime');
  const [evaluating, setEvaluating] = useState(false);
  const [evalScore, setEvalScore] = useState(88.4);

  const CLI_COMMANDS = {
    INIT: '$ prime env init logic-puzzle-v1',
    DEVELOP: '$ uv pip install -e .',
    EVAL: '$ uv run vf-eval --model prime-8b-instruct',
    PUSH: '$ prime env push hub.primeintellect.ai/logic-v1'
  };

  const handleRunEval = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setEvaluating(true);
    setTimeout(() => {
      setEvaluating(false);
      setEvalScore((prev) => +(prev + (Math.random() * 2 - 0.5)).toFixed(1));
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 1200);
  };

  const handleCopyCli = () => {
    navigator.clipboard?.writeText(CLI_COMMANDS[activeCliNode]);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-[#0c0d0e] p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-white/10 text-slate-100 select-none overflow-hidden">
      
      {/* Subtle top spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.04] blur-3xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white">
          <span className="font-serif italic font-normal text-slate-300 mr-2">Lab.</span>
          <span className="font-medium">Post-train your own self improving agents</span>
        </h2>

        {/* Dual CTA buttons */}
        <div className="mt-7 flex items-center justify-center gap-3.5">
          <button
            onClick={() => setShowTrainingModal(true)}
            className="bg-white hover:bg-slate-100 text-black font-mono font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg transition cursor-pointer"
          >
            START TRAINING →
          </button>
          <button
            onClick={() => setShowTrainingModal(true)}
            className="bg-white/5 hover:bg-white/10 text-slate-300 font-mono font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg border border-white/15 transition cursor-pointer"
          >
            BOOK A DEMO
          </button>
        </div>
      </div>

      {/* 2 Primary Lab Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
        
        {/* ================= CARD 1: RL ENVIRONMENTS ================= */}
        <div className="bg-[#141618] rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-2xl text-left group">
          
          {/* Top Interactive Diamond Node Diagram */}
          <div className="relative w-full h-56 sm:h-64 bg-[#0a0b0c] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            
            {/* Ambient graph lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-36 h-36 border border-white/40 rotate-45 rounded-xl" />
              <div className="absolute w-48 h-48 border border-white/20 rounded-full" />
            </div>

            {/* Diamond Node Buttons */}
            <div className="relative z-10 h-full flex flex-col justify-between items-center py-2">
              {/* Top Node: INIT */}
              <button
                onClick={() => setActiveCliNode('INIT')}
                className={`text-[11px] font-mono px-3 py-1 rounded-md transition cursor-pointer ${
                  activeCliNode === 'INIT' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                INIT <span className="text-emerald-400">$ prime env init</span>
              </button>

              {/* Mid Row: PUSH & DEVELOP */}
              <div className="w-full flex items-center justify-between px-2">
                <button
                  onClick={() => setActiveCliNode('PUSH')}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition cursor-pointer ${
                    activeCliNode === 'PUSH' ? 'bg-white text-black font-bold' : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  PUSH <span className="text-emerald-400">$ prime push</span>
                </button>
                <button
                  onClick={() => setActiveCliNode('DEVELOP')}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition cursor-pointer ${
                    activeCliNode === 'DEVELOP' ? 'bg-white text-black font-bold' : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  DEVELOP <span className="text-emerald-400">$ uv pip install</span>
                </button>
              </div>

              {/* Bottom Node: EVAL */}
              <button
                onClick={() => setActiveCliNode('EVAL')}
                className={`text-[11px] font-mono px-3 py-1 rounded-md transition cursor-pointer ${
                  activeCliNode === 'EVAL' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                EVAL <span className="text-emerald-400">$ uv run vf-eval</span>
              </button>
            </div>

            {/* Active Command Output Strip */}
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="truncate text-emerald-300">{CLI_COMMANDS[activeCliNode]}</span>
              <button onClick={handleCopyCli} className="hover:text-white cursor-pointer ml-2">
                {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-3">
              RL Environments
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Turn any task into an RL environment. Init, develop, eval, and push with the Prime CLI. 
              <span className="text-slate-200"> 11. Built on the open-source Verifiers library.</span>
              <span className="text-slate-200"> 12. One CLI loop: init, develop, eval, push.</span>
              <span className="text-slate-200"> 13. 2,500+ community environments on the Hub</span>
            </p>

            <button
              onClick={() => setShowTrainingModal(true)}
              className="mt-6 bg-white hover:bg-slate-100 text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-lg transition cursor-pointer inline-flex items-center gap-2"
            >
              <span>CREATE ENVIRONMENTS →</span>
            </button>
          </div>

        </div>

        {/* ================= CARD 2: EVALUATIONS ================= */}
        <div className="bg-[#141618] rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-2xl text-left group">
          
          {/* Top Interactive Evaluation Selector Box */}
          <div className="relative w-full h-56 sm:h-64 bg-[#0a0b0c] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            
            <div className="space-y-2.5">
              {/* Row 1: Prime Intellect Logic Env */}
              <div 
                onClick={() => setSelectedEval('prime')}
                className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                  selectedEval === 'prime' ? 'bg-white/10 border-white/30' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-white block">prime intellect/logic-env</span>
                  <span className="text-[10px] font-mono text-slate-500">0.2.21 • PRIME INTELLECT</span>
                </div>
                <button
                  onClick={handleRunEval}
                  disabled={evaluating}
                  className="bg-white hover:bg-slate-200 text-black font-mono font-bold text-[10px] px-3 py-1.5 rounded transition cursor-pointer"
                >
                  {evaluating ? 'EVALUATING...' : 'EVALUATE →'}
                </button>
              </div>

              {/* Row 2: Arcee-ai/ifeval */}
              <div 
                onClick={() => setSelectedEval('arcee')}
                className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                  selectedEval === 'arcee' ? 'bg-white/10 border-white/30' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-white block">arcee-ai/ifeval</span>
                  <span className="text-[10px] font-mono text-slate-500">00.11 • ARCEE-AI</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Score: 92.4%</span>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Benchmark Status: <strong className="text-emerald-400">PASSED</strong></span>
              <span className="text-white">Active Accuracy: <strong className="text-emerald-300 font-bold">{evalScore}%</strong></span>
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-3">
              Evaluations
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Hosted evaluations for you to benchmark the performance of your models. 
              <span className="text-slate-200"> 21. 100+ open-source models.</span>
              <span className="text-slate-200"> 22. No commitment, just performance.</span>
              <span className="text-slate-200"> 23. Compete, improve, and dominate the leaderboard.</span>
            </p>

            <button
              onClick={() => setShowTrainingModal(true)}
              className="mt-6 bg-white hover:bg-slate-100 text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-lg transition cursor-pointer inline-flex items-center gap-2"
            >
              <span>RUN YOUR FIRST EVAL →</span>
            </button>
          </div>

        </div>

      </div>

      {/* Training / Eval Modal */}
      <AnimatePresence>
        {showTrainingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121416] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/20 text-left relative text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold font-mono">Agent Post-Training Cluster</h3>
                </div>
                <button
                  onClick={() => setShowTrainingModal(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-4 font-mono text-xs">
                <div className="p-3 bg-black/50 rounded-xl border border-white/10 text-emerald-400 leading-relaxed">
                  ✓ Verified: Prime CLI v2.4.0 connected<br />
                  ✓ GPU Nodes Allocated: 8x H100 SXM5 80GB<br />
                  ✓ Training Objective: RL with Verifiable Rewards
                </div>
                <p className="text-slate-300 font-sans text-xs">
                  Your customized self-improving agent run will execute RL iterations with programmatic verification on every step.
                </p>
              </div>

              <button
                onClick={() => setShowTrainingModal(false)}
                className="w-full mt-6 bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs py-3.5 rounded-xl cursor-pointer transition"
              >
                Close Environment Hub
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
