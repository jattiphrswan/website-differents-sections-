import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Play, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Sliders, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Cpu, 
  Lock,
  Layers,
  BarChart2
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const CTA_AlgorithmicTrading = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activeModal, setActiveModal] = useState(null); // 'demo' | 'connect' | null
  const [selectedStrategy, setSelectedStrategy] = useState('Momentum Breakout');
  const [riskTolerance, setRiskTolerance] = useState(3.5);
  const [simulatedPnL, setSimulatedPnL] = useState(14.82);
  const [exchange, setExchange] = useState('Interactive Brokers');
  const [isConnected, setIsConnected] = useState(false);

  // Micro-simulation effect for PnL counter
  useEffect(() => {
    if (activeModal === 'demo') {
      const interval = setInterval(() => {
        setSimulatedPnL((prev) => +(prev + (Math.random() * 0.14 - 0.04)).toFixed(2));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [activeModal]);

  const handleConnect = (e) => {
    e.preventDefault();
    setIsConnected(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden font-sans border border-white/10 bg-[#0e1624] text-white shadow-2xl p-8 sm:p-14 lg:p-16 select-none min-h-[380px] flex flex-col justify-between">
      {/* Background Circuit Microchip Grid Texture */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <img
          src="/assets/tech-circuit-slate.jpg"
          alt="Tech circuit slate texture"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Subtle radial glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Split Headline Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Headline */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
            The range of functionalities offered on the platforms includes the ability to connect
          </h2>
        </div>

        {/* Right Subtitle */}
        <div className="lg:col-span-5 lg:pt-2">
          <p className="text-sm sm:text-base text-slate-300/80 font-normal leading-relaxed">
            With existing algorithmic strategies that reduce risk and automatically execute buy and sell orders.
          </p>

          {/* Low-latency latency badge */}
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Sub-millisecond execution engine • 0.28ms</span>
          </div>
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="relative z-10 mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
        {/* Primary Action Button: "Get started ⁖" */}
        <button
          onClick={() => {
            setActiveModal('connect');
            setIsConnected(false);
          }}
          className="group bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5"
        >
          <span>Get started</span>
          {/* 3-Dot Cluster / Sparkle Icon */}
          <div className="flex items-center gap-0.5 text-slate-900">
            <span className="w-1 h-1 rounded-full bg-slate-900" />
            <div className="flex flex-col gap-0.5">
              <span className="w-1 h-1 rounded-full bg-slate-900" />
              <span className="w-1 h-1 rounded-full bg-slate-900" />
            </div>
          </div>
        </button>

        {/* Secondary Action: "▶ Watch how it works" */}
        <button
          onClick={() => setActiveModal('demo')}
          className="group text-white hover:text-cyan-300 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer flex items-center gap-2.5"
        >
          <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-cyan-500/20 text-white group-hover:text-cyan-400 flex items-center justify-center text-[10px] transition">
            ▶
          </span>
          <span>Watch how it works</span>
        </button>
      </div>

      {/* Interactive Modal: Demo or Connect */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0f1725] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {activeModal === 'demo' ? (
                <div>
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <BarChart2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Live Algorithmic Execution Simulator
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Automated Risk Mitigation Engine</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Watch our order routing logic execute hedge pairs across multiple liquidity venues simultaneously.
                  </p>

                  {/* Simulator Controls */}
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-2">
                        Active Strategy Algorithm
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Momentum Breakout', 'Mean Reversion', 'TWAP Hedging'].map((strat) => (
                          <button
                            key={strat}
                            onClick={() => setSelectedStrategy(strat)}
                            className={`p-2.5 rounded-xl border text-center text-xs font-bold transition cursor-pointer ${
                              selectedStrategy === strat
                                ? 'bg-cyan-500/20 border-cyan-400 text-white'
                                : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                            }`}
                          >
                            {strat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Risk Slider */}
                    <div className="bg-neutral-900/80 p-3.5 rounded-xl border border-white/5">
                      <div className="flex justify-between text-xs text-neutral-300 mb-2">
                        <span>Max Drawdown Risk Parameter:</span>
                        <strong className="text-cyan-400 font-mono">{riskTolerance}%</strong>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="0.5"
                        value={riskTolerance}
                        onChange={(e) => setRiskTolerance(parseFloat(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>

                    {/* Live Telemetry Display */}
                    <div className="p-4 rounded-xl bg-black/60 border border-cyan-500/20 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase font-mono">Simulated Net Yield</div>
                        <div className="text-2xl font-bold text-emerald-400 font-mono">+{simulatedPnL}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-neutral-400 uppercase font-mono">Fill Ratio</div>
                        <div className="text-sm font-bold text-white font-mono">99.98% Filled</div>
                        <div className="text-[10px] text-cyan-400">Zero Slippage Guarantee</div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveModal('connect');
                        setIsConnected(false);
                      }}
                      className="w-full mt-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg transition cursor-pointer"
                    >
                      Deploy Strategy to Live Exchange
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {!isConnected ? (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-cyan-400">
                        <Lock className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Exchange API Link
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Connect Trading Account</h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Read-only &amp; trade-execution permissions only. Withdrawal permissions are strictly disabled.
                      </p>

                      <form onSubmit={handleConnect} className="mt-5 space-y-4">
                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-2">
                            Select Institutional Venue
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {['Interactive Brokers', 'Binance Institutional', 'Coinbase Prime', 'Bybit VIP'].map((v) => (
                              <button
                                type="button"
                                key={v}
                                onClick={() => setExchange(v)}
                                className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition cursor-pointer ${
                                  exchange === v
                                    ? 'bg-cyan-500/20 border-cyan-400 text-white'
                                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                                }`}
                              >
                                {v}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-1">
                            API Key
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="pk_live_839201948291..."
                            className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-neutral-300 block mb-1">
                            API Secret
                          </label>
                          <input
                            type="password"
                            required
                            placeholder="••••••••••••••••••••••••••••••"
                            className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-black font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg transition active:scale-95 cursor-pointer"
                        >
                          Initialize Algorithmic Route
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Connected Successfully</h3>
                      <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
                        Algorithm node attached to <strong className="text-white">{exchange}</strong> with risk threshold capped at <strong className="text-cyan-400">{riskTolerance}%</strong>.
                      </p>
                      <button
                        onClick={() => setActiveModal(null)}
                        className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer"
                      >
                        Return to Dashboard
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
