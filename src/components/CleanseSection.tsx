import React, { useState } from 'react';
import { CLEANSE_PROGRAMS } from '../data/juiceData';
import { CleanseProgram, CartItem } from '../types/juice';
import { Check, Sparkles, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface CleanseSectionProps {
  onAddCleanseToCart: (item: CartItem) => void;
}

export const CleanseSection: React.FC<CleanseSectionProps> = ({ onAddCleanseToCart }) => {
  const [selectedCleanse, setSelectedCleanse] = useState<CleanseProgram>(CLEANSE_PROGRAMS[1]); // 3-Day default
  const [isSubscription, setIsSubscription] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const discountMultiplier = isSubscription ? 0.85 : 1.0;
  const currentPrice = selectedCleanse.price * discountMultiplier;

  const handleAdd = () => {
    const item: CartItem = {
      cartItemId: `cleanse-${selectedCleanse.id}-${Date.now()}`,
      name: `${selectedCleanse.title} (${isSubscription ? 'Weekly Subscription' : 'One-Time'})`,
      size: '16oz',
      unitPrice: currentPrice,
      quantity: 1,
      details: `${selectedCleanse.bottleCount} cold-pressed bottles · ${selectedCleanse.days} Day Program`
    };

    onAddCleanseToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <section id="cleanse" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E5C3B] mb-2">
            <span>Enzymatic Reset Protocols</span>
            <span aria-hidden="true" className="text-[#8FA594]">·</span>
            <span>Chilled Cooler Delivery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#132719] [text-wrap:balance]">
            Guided Cold-Pressed Cleanse Programs
          </h2>
          <p className="text-sm text-[#526155] mt-2 leading-relaxed">
            Give your digestive system a deep vacation without fasting. Each bottle is chronologically designed 
            to optimize alkalinity, cell hydration, and natural detoxification cycles.
          </p>
        </div>

        {/* Cleanse Package Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CLEANSE_PROGRAMS.map((program) => {
            const isSelected = selectedCleanse.id === program.id;
            return (
              <div
                key={program.id}
                onClick={() => setSelectedCleanse(program)}
                className={`relative bg-white rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#183120] ring-2 ring-[#183120]/15 shadow-md'
                    : 'border-[#E4E1D7] hover:border-[#CAD4CC] shadow-xs'
                }`}
              >
                {program.id === 'cleanse-3-day' && (
                  <div className="absolute -top-3 left-6 bg-[#162E1D] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-xs">
                    Most Popular Reset
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-[#5E6D61] mb-2">
                    <span className="font-mono font-bold text-[#14281B]">{program.days} Days</span>
                    <span className="tabular-nums font-mono">{program.bottleCount} Bottles Total</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#14281B]">
                    {program.title}
                  </h3>
                  <p className="text-xs text-[#5D6B60] mt-1">
                    {program.subtext}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#EFECE3] space-y-2">
                    {program.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#3C4D40]">
                        <Check className="w-3.5 h-3.5 text-[#24613B] mt-0.5 shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFECE3] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#69796C] block">Program Price</span>
                    <span className="text-xl font-bold font-mono text-[#13281A] tabular-nums">
                      ${program.price.toFixed(2)}
                    </span>
                  </div>

                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    isSelected ? 'bg-[#183120] text-white' : 'bg-[#EFECE3] text-[#4F5E52]'
                  }`}>
                    {isSelected ? 'Selected' : 'View Schedule'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Cleanse Detail & Daily Schedule Breakdown */}
        <div className="bg-white border border-[#E0DCD1] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#ECE8DE]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A39]">
                Day-by-Day Timeline Schedule
              </span>
              <h3 className="font-display text-2xl font-bold text-[#14281B] mt-1">
                {selectedCleanse.title} Itinerary
              </h3>
              <p className="text-xs text-[#5B6A5E] mt-1">
                Follow this exact sequence every 2.5 hours for optimum absorption and steady glycemic balance.
              </p>
            </div>

            {/* Subscription vs One-Time Frequency Toggle */}
            <div className="flex items-center gap-2 bg-[#F3F1E9] p-1 rounded-xl self-start md:self-auto border border-[#E2DFD4]">
              <button
                onClick={() => setIsSubscription(false)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  !isSubscription ? 'bg-white text-[#152B1B] shadow-xs' : 'text-[#617064]'
                }`}
              >
                One-Time Cleanse
              </button>
              <button
                onClick={() => setIsSubscription(true)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  isSubscription ? 'bg-[#183120] text-white shadow-xs' : 'text-[#617064]'
                }`}
              >
                <span>Weekly Reset</span>
                <span className="text-[10px] bg-[#3B724D] text-white px-1.5 py-0.2 rounded font-mono">
                  -15%
                </span>
              </button>
            </div>
          </div>

          {/* Schedule Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {selectedCleanse.schedule.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#F8F7F2] border border-[#E8E5DC] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#637266] mb-1 font-mono">
                    <span className="flex items-center gap-1 font-bold text-[#183120]">
                      <Clock className="w-3 h-3 text-[#2C623E]" />
                      {item.time}
                    </span>
                    <span className="uppercase text-[10px] tracking-wider font-sans font-semibold text-[#8B5412]">
                      {item.label}
                    </span>
                  </div>

                  <h4 className="font-semibold text-sm text-[#14281B] mt-1">
                    {item.productName}
                  </h4>
                  <p className="text-xs text-[#5D6B60] mt-1">
                    {item.purpose}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#E7E4DB] text-[10px] text-[#7A887D]">
                  Bottle #{index + 1} of 6 daily
                </div>
              </div>
            ))}
          </div>

          {/* Cleanse Action Banner */}
          <div className="mt-8 pt-6 border-t border-[#ECE8DE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[#516154]">
              <ShieldCheck className="w-5 h-5 text-[#24613B] shrink-0" />
              <span>Includes insulated thermal cooler tote, guidance manual, and daily morning ginger shots.</span>
            </div>

            <button
              onClick={handleAdd}
              disabled={justAdded}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                justAdded ? 'bg-[#22683C]' : 'bg-[#183120] hover:bg-[#122417]'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Package Added</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                  <span>Order {selectedCleanse.title} · ${currentPrice.toFixed(2)}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
