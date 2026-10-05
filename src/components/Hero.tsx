import React from 'react';
import { HERO_IMAGE } from '../data/juiceData';
import { ArrowRight, Sparkles, ShieldCheck, ThermometerSnowflake, Leaf } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenCustomLab: () => void;
  onExploreCleanse: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOpenCustomLab,
  onExploreCleanse
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F5F4EE] border-b border-[#E8E5DC] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background gradient & radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E3EFE4]/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F7EEDC]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Subtitle / Kicker - Clean unboxed text with separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356142] mb-4">
          <span>Artisanal Hydraulic Pressery</span>
          <span aria-hidden="true" className="text-[#89A190]">·</span>
          <span>100% Certified Organic</span>
          <span aria-hidden="true" className="text-[#89A190]">·</span>
          <span>Zero Pasteurization</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#112417] leading-[1.08] [text-wrap:balance]">
              Pure living liquid nourishment, pressed at thirty-eight degrees.
            </h1>

            <p className="text-base sm:text-lg text-[#445348] leading-relaxed max-w-xl">
              Every bottle contains up to five pounds of regenerative California produce, 
              extracted under 10,000 pounds of hydraulic pressure to safeguard living enzymes, 
              micronutrients, and vivid botanical flavors.
            </p>

            {/* Direct Action Hub */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 bg-[#17321F] hover:bg-[#102416] text-white px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Order Fresh Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCustomLab}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2EFE8] text-[#1E3324] border border-[#D5D0C3] px-5 py-3.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#C27803]" />
                <span>Craft Custom Tonic</span>
              </button>

              <button
                onClick={onExploreCleanse}
                className="inline-flex items-center justify-center text-[#3D4C41] hover:text-[#14291B] px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap underline underline-offset-4 decoration-[#B0BAAF]"
              >
                Cleanse Bundles
              </button>
            </div>

            {/* Claim-to-Proof Adjacency: Real Metrics with concrete units */}
            <div className="pt-6 border-t border-[#DFDCD2] grid grid-cols-3 gap-4">
              <div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#152B1B] tabular-nums">5.2 lbs</p>
                <p className="text-xs text-[#5F6E62] mt-0.5">Organic produce per 16oz bottle</p>
              </div>
              <div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#152B1B] tabular-nums">10,000</p>
                <p className="text-xs text-[#5F6E62] mt-0.5">Lbs hydraulic cold force</p>
              </div>
              <div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#152B1B] tabular-nums">72 Hrs</p>
                <p className="text-xs text-[#5F6E62] mt-0.5">Living raw enzymatic window</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D8D4C7] bg-[#EBE7DD] shadow-lg group">
              <img
                src={HERO_IMAGE}
                alt="Three glass bottles of artisanal cold-pressed juices lined up on stone counter"
                className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Overlay trust indicators inside media card */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4F4DD] mb-1">
                    <ThermometerSnowflake className="w-3.5 h-3.5 text-[#6EE7B7]" />
                    <span>Sealed Cold at 38°F</span>
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Batch #842 · Pressed 5:00 AM Today
                  </p>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-xs text-white/80">Recyclable Amber & Flint Glass</span>
                  <p className="text-xs font-semibold text-[#FDE68A]">$0.50 Return Credit / Bottle</p>
                </div>
              </div>
            </div>

            {/* Quick Guarantees bar under image */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#4F5D52] px-1">
              <span className="flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-[#24633B]" />
                Zero High-Pressure Pasteurization (HPP)
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#24633B]" />
                Non-GMO & Certified Kosher
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
