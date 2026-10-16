import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  MapPin, 
  Search, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  X, 
  ShieldAlert, 
  Zap,
  Terminal,
  Activity
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const PINS = [
  { id: 'nyc', name: 'New York, NY', lat: '40.7128° N', ping: '8ms', records: '482K', x: '72%', y: '36%' },
  { id: 'chi', name: 'Chicago, IL', lat: '41.8781° N', ping: '12ms', records: '340K', x: '63%', y: '38%' },
  { id: 'la', name: 'Los Angeles, CA', lat: '34.0522° N', ping: '14ms', records: '510K', x: '42%', y: '52%' },
  { id: 'atx', name: 'Austin, TX', lat: '30.2672° N', ping: '9ms', records: '280K', x: '55%', y: '58%' },
  { id: 'mia', name: 'Miami, FL', lat: '25.7617° N', ping: '16ms', records: '190K', x: '73%', y: '68%' },
  { id: 'tor', name: 'Toronto, ON', lat: '43.6532° N', ping: '11ms', records: '295K', x: '68%', y: '30%' }
];

export const CTA_SkipTracingGlobe = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [activePin, setActivePin] = useState(PINS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleStartScan = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        name: searchQuery,
        matchRate: '99.8%',
        phones: ['(555) 234-8901', '(555) 890-1123'],
        addresses: ['742 Evergreen Terrace, Springfield', '10880 Wilshire Blvd, Los Angeles'],
        deeds: '3 Verified Deeds Found',
        ssnStatus: 'Verified (Last 4: 9812)'
      });
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.65 }
      });
    }, 1200);
  };

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden font-sans border border-neutral-800 bg-[#0a0a0e] text-white shadow-2xl select-none min-h-[420px] flex items-center">
      {/* Ambient bottom-left deep purple glow */}
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-purple-900/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-6 p-8 sm:p-12 md:p-14 flex flex-col justify-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 w-fit mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Tier-1 Telco Feeds Active</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
            Experience superior skip tracing
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal">
            150+ data points per search.
          </p>

          {/* Key Metrics Chips */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>99.4% Match Rate</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span>Real-Time Deeds &amp; LLCs</span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white hover:bg-neutral-100 text-black font-bold text-sm px-6 py-3 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="text-neutral-400 hover:text-white text-xs font-semibold transition px-3 py-2 cursor-pointer flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Inspect API Spec</span>
            </button>
          </div>
        </div>

        {/* Right Column: Glowing Dotted Particle Globe of North America */}
        <div className="lg:col-span-6 relative h-[340px] sm:h-[400px] lg:h-[420px] overflow-hidden flex items-center justify-center">
          {/* Globe Image with Rim Light */}
          <img
            src="/assets/particle-globe-dots.jpg"
            alt="Glowing 3D particle dot globe centered on North America"
            className="w-full h-full object-cover object-center scale-110 lg:scale-100 brightness-110 contrast-110"
          />

          {/* Gradient blend to the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0e] via-transparent to-transparent pointer-events-none" />

          {/* Interactive Floating Hotspot Pins across North America */}
          {PINS.map((pin) => {
            const isSelected = activePin.id === pin.id;
            return (
              <div
                key={pin.id}
                style={{ top: pin.y, left: pin.x }}
                onClick={() => setActivePin(pin)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              >
                {/* Pulsing ring */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  isSelected ? 'bg-cyan-400/20 ring-2 ring-cyan-400' : 'hover:scale-125'
                }`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-cyan-300 shadow-[0_0_10px_#22d3ee]' : 'bg-white/80 group-hover:bg-cyan-400'}`} />
                </div>

                {/* Tooltip on active or hover */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/20 text-[10px] text-white whitespace-nowrap shadow-xl transition-all pointer-events-none ${
                  isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                }`}>
                  <div className="font-bold text-cyan-300">{pin.name}</div>
                  <div className="text-neutral-400">{pin.records} Records • {pin.ping}</div>
                </div>
              </div>
            );
          })}

          {/* Active telemetry HUD pill */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/85 backdrop-blur-md border border-cyan-500/20 px-3.5 py-2 rounded-xl text-left shadow-2xl flex items-center gap-3">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <div className="text-[11px]">
              <span className="text-neutral-400 font-mono">LATENCY:</span> <span className="text-white font-bold font-mono">{activePin.ping}</span>
              <span className="text-neutral-500 mx-2">|</span>
              <span className="text-cyan-400 font-semibold">{activePin.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal: Skip Trace Instant Query Simulator */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#101217] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <Search className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Live Skip Trace Sandbox
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">150+ Data Points Search Engine</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Query individual or corporate entities across national deed repositories, cell carrier registries, and bankruptcy filings.
              </p>

              {/* Search Form */}
              <form onSubmit={handleStartScan} className="mt-5 flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter full name, company or 10-digit phone..."
                  className="flex-1 bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  disabled={isScanning}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs px-5 py-2.5 rounded-xl transition cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {isScanning ? 'Querying...' : 'Trace Entity'}
                </button>
              </form>

              {/* Preset Quick Search Chips */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-400">
                <span>Try sample:</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('Apex Horizon Holdings LLC')}
                  className="text-cyan-300 hover:underline cursor-pointer"
                >
                  Apex Horizon LLC
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('(310) 555-0199')}
                  className="text-cyan-300 hover:underline cursor-pointer"
                >
                  (310) 555-0199
                </button>
              </div>

              {/* Scanning Telemetry Output */}
              {isScanning && (
                <div className="mt-6 p-4 rounded-xl bg-black/60 border border-cyan-500/20 text-center space-y-2">
                  <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full animate-[pulse_1s_infinite] w-3/4" />
                  </div>
                  <div className="text-xs font-mono text-cyan-300">
                    Querying 50 state deed registries &amp; 3 national credit bureaus...
                  </div>
                </div>
              )}

              {/* Scan Results */}
              {scanResult && !isScanning && (
                <div className="mt-5 p-4 rounded-2xl bg-neutral-900/80 border border-cyan-500/30 text-left space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div>
                      <div className="text-xs font-bold text-white">{scanResult.name}</div>
                      <div className="text-[10px] text-neutral-400">Match Confidence: {scanResult.matchRate}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                      150 DATA POINTS UNLOCKED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-black/40 p-2.5 rounded-lg border border-white/5">
                      <div className="text-neutral-400 text-[10px]">Active Phone Carriers:</div>
                      {scanResult.phones.map((p) => (
                        <div key={p} className="text-cyan-300 font-mono font-semibold">{p}</div>
                      ))}
                    </div>
                    <div className="bg-black/40 p-2.5 rounded-lg border border-white/5">
                      <div className="text-neutral-400 text-[10px]">Property Deeds:</div>
                      <div className="text-white font-semibold">{scanResult.deeds}</div>
                      <div className="text-emerald-400 text-[10px]">{scanResult.ssnStatus}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Ready for full production API access?</span>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    confetti();
                  }}
                  className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer"
                >
                  Generate Free API Key
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
