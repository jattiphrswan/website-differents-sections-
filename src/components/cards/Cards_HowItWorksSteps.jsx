import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Check,
  Plus,
  Wand2,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  X,
  CheckCircle2,
  MousePointer2,
  Type,
  Store
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

export const Cards_HowItWorksSteps = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);

  // States
  const [selectedProducts, setSelectedProducts] = useState(['serum', 'cream']);
  const [customBrandName, setCustomBrandName] = useState('LUMINA');
  const [shopifyConnected, setShopifyConnected] = useState(false);
  const [activeStepModal, setActiveStepModal] = useState(null);

  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleConnectShopify = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setShopifyConnected(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#008060', '#95bf47', '#5e8e3e', '#30533a']
      });
    } catch {}
  };

  return (
    <section className="relative w-full rounded-[2.5rem] bg-white p-6 sm:p-10 lg:p-16 font-sans shadow-2xl border border-slate-200/80 text-slate-900 select-none overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-50/60 rounded-full blur-2xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl text-left mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-[#0f2c25] tracking-tight leading-tight">
          How it works
        </h2>
      </div>

      {/* 3 Step Visual Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        
        {/* ================= STEP 01: PICK YOUR PRODUCTS ================= */}
        <div className="flex flex-col text-left group">
          {/* Top Visual Container */}
          <div className="relative w-full h-72 sm:h-80 rounded-[2.5rem] bg-[#f4f7f8] p-6 flex flex-col justify-between overflow-hidden border border-slate-200/60 shadow-sm group-hover:shadow-md transition-all">
            
            {/* Step Number Badge */}
            <div className="w-10 h-10 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/60 flex items-center justify-center font-bold text-xs tracking-wider">
              01
            </div>

            {/* Interactive Cosmetic Products Stage */}
            <div className="relative my-auto flex items-end justify-center gap-3">
              {/* Product 1: Serum Bottle */}
              <div 
                onClick={() => toggleProduct('serum')}
                className="relative cursor-pointer group/item flex flex-col items-center"
              >
                <div className={`w-12 h-28 rounded-t-2xl rounded-b-lg border-2 transition-all flex items-center justify-center ${
                  selectedProducts.includes('serum') ? 'bg-white border-[#00acc1] shadow-lg scale-105' : 'bg-slate-200/80 border-slate-300'
                }`}>
                  <span className="text-[9px] font-bold text-slate-400 rotate-90">SERUM</span>
                </div>
                {selectedProducts.includes('serum') && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00875a] text-white flex items-center justify-center shadow">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              {/* Product 2: Cream Jar */}
              <div 
                onClick={() => toggleProduct('cream')}
                className="relative cursor-pointer group/item flex flex-col items-center"
              >
                <div className={`w-18 h-18 rounded-2xl border-2 transition-all flex items-center justify-center ${
                  selectedProducts.includes('cream') ? 'bg-white border-[#00acc1] shadow-lg scale-105' : 'bg-slate-200/80 border-slate-300'
                }`}>
                  <span className="text-[10px] font-bold text-slate-500">CREAM</span>
                </div>
                {selectedProducts.includes('cream') && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00875a] text-white flex items-center justify-center shadow">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              {/* Product 3: Cleanser Bottle */}
              <div 
                onClick={() => toggleProduct('cleanser')}
                className="relative cursor-pointer group/item flex flex-col items-center"
              >
                <div className={`w-14 h-32 rounded-t-2xl rounded-b-lg border-2 transition-all flex items-center justify-center ${
                  selectedProducts.includes('cleanser') ? 'bg-white border-[#00acc1] shadow-lg scale-105' : 'bg-slate-200/80 border-slate-300'
                }`}>
                  <span className="text-[9px] font-bold text-slate-400 rotate-90">CLEANSER</span>
                </div>
                {selectedProducts.includes('cleanser') && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00875a] text-white flex items-center justify-center shadow">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </div>

            {/* Simulated Plus Badge Cursor */}
            <div className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-[#4dd0e1] text-black font-extrabold text-xs px-3 py-1.5 rounded-full shadow-lg border border-white">
              <Plus className="w-3.5 h-3.5" />
              <span>{selectedProducts.length} Selected</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2c25] tracking-tight mb-2">
              Pick your products
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Launch your own brand or start selling with our in-house brand
            </p>
          </div>
        </div>

        {/* ================= STEP 02: BUILD YOUR BRAND FREE ================= */}
        <div className="flex flex-col text-left group">
          {/* Top Visual Container */}
          <div className="relative w-full h-72 sm:h-80 rounded-[2.5rem] bg-[#f4f7f8] p-6 flex flex-col justify-between overflow-hidden border border-slate-200/60 shadow-sm group-hover:shadow-md transition-all">
            
            {/* Step Number Badge */}
            <div className="w-10 h-10 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/60 flex items-center justify-center font-bold text-xs tracking-wider">
              02
            </div>

            {/* Skincare Tube Mockup with Logo Customizer */}
            <div className="relative my-auto flex flex-col items-center justify-center">
              {/* Orange Free Badge */}
              <div className="absolute -top-4 left-10 bg-[#ff6b00] text-white text-[10px] font-black px-2.5 py-0.5 rounded-md shadow rotate-[-8deg]">
                Free
              </div>

              {/* The Cosmetic Tube */}
              <div className="w-24 h-40 bg-white rounded-t-3xl rounded-b-xl border-2 border-slate-200 shadow-xl flex flex-col items-center justify-between p-3 relative overflow-hidden">
                <div className="w-full text-center mt-4 p-1.5 bg-cyan-50 rounded-lg border border-cyan-200">
                  <span className="text-[10px] font-extrabold text-[#00838f] tracking-wider block">
                    {customBrandName || 'YOUR LOGO'}
                  </span>
                  <span className="text-[7px] text-slate-400 font-mono">ORGANIC BOTANICALS</span>
                </div>

                <div className="w-10 h-3 bg-[#a7d9a0] rounded-b-md" />
              </div>

              {/* Interactive Name Changer Pill */}
              <div className="mt-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-md border border-slate-200">
                <Type className="w-3 h-3 text-[#00acc1]" />
                <input
                  type="text"
                  maxLength={10}
                  value={customBrandName}
                  onChange={(e) => setCustomBrandName(e.target.value.toUpperCase())}
                  className="w-20 text-[10px] font-bold text-slate-800 focus:outline-none uppercase bg-transparent"
                  placeholder="BRAND NAME"
                />
              </div>
            </div>

            {/* Badge Indicator */}
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>AI Auto Mockup Generator</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2c25] tracking-tight mb-2">
              Build your brand free
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              AI creates your name, logo, color palette, and product mockups in minutes.
            </p>
          </div>
        </div>

        {/* ================= STEP 03: START SELLING ================= */}
        <div className="flex flex-col text-left group">
          {/* Top Visual Container */}
          <div className="relative w-full h-72 sm:h-80 rounded-[2.5rem] bg-[#f4f7f8] p-6 flex flex-col justify-between overflow-hidden border border-slate-200/60 shadow-sm group-hover:shadow-md transition-all">
            
            {/* Step Number Badge */}
            <div className="w-10 h-10 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/60 flex items-center justify-center font-bold text-xs tracking-wider">
              03
            </div>

            {/* Shopify Store Connect Stage */}
            <div className="relative my-auto flex items-center justify-center gap-3">
              {/* Green Shopify Logo Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 rounded-2xl bg-[#008060] text-white flex items-center justify-center shadow-xl shadow-[#008060]/20"
              >
                {/* Shopify 'S' Shopping Bag */}
                <div className="flex flex-col items-center font-black text-xl">
                  <span>S</span>
                </div>
              </motion.div>

              {/* Your Store Live Card */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConnectShopify}
                className="bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex flex-col items-start gap-1 cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-black text-slate-900">
                    {shopifyConnected ? 'Store Connected!' : '+ Your Store'}
                  </span>
                </div>
                <span className="text-[9px] text-slate-400">1-Click Auto Sync</span>
              </motion.button>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="text-emerald-700">● 100% Automated Fulfillment</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2c25] tracking-tight mb-2">
              Start selling
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Your Shopify store goes live. We handle fulfillment. You focus on your followers.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
