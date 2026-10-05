import React, { useState, useMemo } from 'react';
import {
  CUSTOM_BASES,
  CUSTOM_GREENS,
  CUSTOM_ROOTS,
  CUSTOM_BOOSTERS
} from '../data/juiceData';
import { CustomJuiceIngredient, BottleSize, CartItem } from '../types/juice';
import { Sparkles, Check, RefreshCw, Droplets, Info } from 'lucide-react';

interface CustomJuiceLabProps {
  onAddCustomToCart: (customJuice: CartItem) => void;
}

export const CustomJuiceLab: React.FC<CustomJuiceLabProps> = ({ onAddCustomToCart }) => {
  const [selectedBase, setSelectedBase] = useState<CustomJuiceIngredient>(CUSTOM_BASES[1]); // Cucumber Celery default
  const [selectedGreens, setSelectedGreens] = useState<CustomJuiceIngredient[]>([CUSTOM_GREENS[0], CUSTOM_GREENS[2]]); // Kale & Mint
  const [selectedRoots, setSelectedRoots] = useState<CustomJuiceIngredient[]>([CUSTOM_ROOTS[0], CUSTOM_ROOTS[2]]); // Ginger & Lemon
  const [selectedBoosters, setSelectedBoosters] = useState<CustomJuiceIngredient[]>([]);
  const [customName, setCustomName] = useState('My Signature Elixir');
  const [bottleSize, setBottleSize] = useState<BottleSize>('16oz');
  const [justAdded, setJustAdded] = useState(false);

  // Toggle helper for multi-select
  const toggleSelection = (
    item: CustomJuiceIngredient,
    list: CustomJuiceIngredient[],
    setList: (arr: CustomJuiceIngredient[]) => void,
    maxLimit: number
  ) => {
    const exists = list.some((i) => i.id === item.id);
    if (exists) {
      setList(list.filter((i) => i.id !== item.id));
    } else {
      if (list.length < maxLimit) {
        setList([...list, item]);
      }
    }
  };

  // Base price calculation by bottle size
  const basePriceBySize: Record<BottleSize, number> = {
    '12oz': 8.50,
    '16oz': 11.00,
    '32oz': 19.50
  };

  const totalPrice = useMemo(() => {
    let price = basePriceBySize[bottleSize];
    price += selectedBase.extraPrice;
    selectedGreens.forEach((g) => (price += g.extraPrice));
    selectedRoots.forEach((r) => (price += r.extraPrice));
    selectedBoosters.forEach((b) => (price += b.extraPrice));
    return price;
  }, [bottleSize, selectedBase, selectedGreens, selectedRoots, selectedBoosters]);

  // Live nutritional calculation
  const totalCalories = useMemo(() => {
    let cal = selectedBase.calories;
    selectedGreens.forEach((g) => (cal += g.calories));
    selectedRoots.forEach((r) => (cal += r.calories));
    selectedBoosters.forEach((b) => (cal += b.calories));
    // Scale for bottle size
    const multiplier = bottleSize === '12oz' ? 1 : bottleSize === '16oz' ? 1.33 : 2.5;
    return Math.round(cal * multiplier);
  }, [bottleSize, selectedBase, selectedGreens, selectedRoots, selectedBoosters]);

  const totalSugar = useMemo(() => {
    let s = selectedBase.sugar;
    selectedGreens.forEach((g) => (s += g.sugar));
    selectedRoots.forEach((r) => (s += r.sugar));
    selectedBoosters.forEach((b) => (s += b.sugar));
    const multiplier = bottleSize === '12oz' ? 1 : bottleSize === '16oz' ? 1.33 : 2.5;
    return Math.round(s * multiplier);
  }, [bottleSize, selectedBase, selectedGreens, selectedRoots, selectedBoosters]);

  const totalVitC = useMemo(() => {
    let vc = selectedBase.vitaminC;
    selectedGreens.forEach((g) => (vc += g.vitaminC));
    selectedRoots.forEach((r) => (vc += r.vitaminC));
    selectedBoosters.forEach((b) => (vc += b.vitaminC));
    return Math.min(250, vc);
  }, [selectedBase, selectedGreens, selectedRoots, selectedBoosters]);

  // Determine bottle visual color blend
  const dominantColor = useMemo(() => {
    if (selectedBoosters.some((b) => b.id === 'bo-spirulina')) return '#0369A1';
    if (selectedRoots.some((r) => r.id === 'r-beet')) return '#881337';
    if (selectedRoots.some((r) => r.id === 'r-turmeric')) return '#D97706';
    if (selectedGreens.length > 0) return '#166534';
    return selectedBase.color;
  }, [selectedBase, selectedGreens, selectedRoots, selectedBoosters]);

  const handleAddCustomJuice = () => {
    const allIngredients = [
      selectedBase.name,
      ...selectedGreens.map((g) => g.name),
      ...selectedRoots.map((r) => r.name),
      ...selectedBoosters.map((b) => b.name)
    ];

    const customCartItem: CartItem = {
      cartItemId: `custom-${Date.now()}`,
      isCustom: true,
      name: customName.trim() || 'Custom Cold-Pressed Blend',
      size: bottleSize,
      unitPrice: totalPrice,
      quantity: 1,
      details: allIngredients.join(' · ')
    };

    onAddCustomToCart(customCartItem);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleReset = () => {
    setSelectedBase(CUSTOM_BASES[1]);
    setSelectedGreens([CUSTOM_GREENS[0], CUSTOM_GREENS[2]]);
    setSelectedRoots([CUSTOM_ROOTS[0], CUSTOM_ROOTS[2]]);
    setSelectedBoosters([]);
    setCustomName('My Signature Elixir');
  };

  return (
    <section id="custom-lab" className="py-16 sm:py-24 bg-[#F5F4EE] border-y border-[#E6E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D5A3A] mb-2">
            <span>Hydraulic Custom Blender</span>
            <span aria-hidden="true" className="text-[#8FA594]">·</span>
            <span>Made to Order in 15 Minutes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#132619] [text-wrap:balance]">
            Craft Your Custom Botanical Tonic
          </h2>
          <p className="text-sm text-[#546257] mt-2 leading-relaxed">
            Select your single-origin cold-pressed base, load seasonal greens, balance with roots & citrus, 
            and fortify with adaptogens. We press it raw specifically for your bottle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Ingredient Customizer */}
          <div className="lg:col-span-8 bg-white border border-[#E1DDD1] rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
            
            {/* Step 1: Base */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142A1B]">
                  01. Choose Your Base Fluid (Select 1)
                </span>
                <span className="text-[11px] text-[#69786C]">100% Raw extracted</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CUSTOM_BASES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBase(b)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                      selectedBase.id === b.id
                        ? 'border-[#183120] bg-[#F1F6F2] shadow-xs'
                        : 'border-[#E4E0D5] bg-[#FAFAF8] hover:border-[#CAD4CC]'
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-xs text-[#162C1E] block">{b.name}</span>
                      <span className="text-[11px] text-[#657367] mt-0.5 block leading-snug">{b.description}</span>
                    </div>
                    {b.extraPrice > 0 && (
                      <span className="text-xs font-mono font-medium text-[#255234] ml-2 shrink-0">
                        +${b.extraPrice.toFixed(2)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fresh Leafy Greens */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142A1B]">
                  02. Living Leafy Greens (Pick up to 3)
                </span>
                <span className="text-[11px] text-[#69786C] tabular-nums font-mono">
                  {selectedGreens.length}/3 Selected
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CUSTOM_GREENS.map((g) => {
                  const isSelected = selectedGreens.some((i) => i.id === g.id);
                  return (
                    <button
                      key={g.id}
                      onClick={() => toggleSelection(g, selectedGreens, setSelectedGreens, 3)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#194E2C] bg-[#194E2C] text-white shadow-xs'
                          : 'border-[#E2DDD2] bg-[#FAFAF8] text-[#203225] hover:border-[#BBC7BD]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{g.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </div>
                      <span className={`text-[10px] mt-1 block font-mono ${isSelected ? 'text-[#D2F2DB]' : 'text-[#69776C]'}`}>
                        +${g.extraPrice.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Roots & Citrus */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142A1B]">
                  03. Roots & Citrus Zing (Pick up to 2)
                </span>
                <span className="text-[11px] text-[#69786C] tabular-nums font-mono">
                  {selectedRoots.length}/2 Selected
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CUSTOM_ROOTS.map((r) => {
                  const isSelected = selectedRoots.some((i) => i.id === r.id);
                  return (
                    <button
                      key={r.id}
                      onClick={() => toggleSelection(r, selectedRoots, setSelectedRoots, 2)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#854D0E] bg-[#FEF3C7] text-[#713F12] shadow-xs'
                          : 'border-[#E2DDD2] bg-[#FAFAF8] text-[#203225] hover:border-[#CAD4CC]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{r.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#854D0E]" />}
                      </div>
                      <span className="text-[10px] text-[#718073] mt-1 block font-mono">
                        +${r.extraPrice.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Adaptogenic Superfood Boosters */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142A1B]">
                  04. Adaptogenic & Sea Boosters (Optional)
                </span>
                <span className="text-[11px] text-[#69786C]">Concentrated micro-powders</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CUSTOM_BOOSTERS.map((b) => {
                  const isSelected = selectedBoosters.some((i) => i.id === b.id);
                  return (
                    <button
                      key={b.id}
                      onClick={() => toggleSelection(b, selectedBoosters, setSelectedBoosters, 4)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#0369A1] bg-[#F0F9FF] shadow-xs'
                          : 'border-[#E2DDD2] bg-[#FAFAF8] hover:border-[#BAC6BC]'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-semibold text-[#182C1E] block">{b.name}</span>
                        <span className="text-[10px] text-[#617164]">{b.description}</span>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className="text-xs font-mono font-bold text-[#0369A1]">
                          +${b.extraPrice.toFixed(2)}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#0369A1] ml-auto mt-0.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Bottle Preview & Contiguous Order Station */}
          <div className="lg:col-span-4 bg-white border border-[#E0DDD2] rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
            
            {/* Visual Glass Bottle Representation */}
            <div className="bg-[#F8F7F2] p-6 rounded-xl border border-[#E6E3D8] text-center flex flex-col items-center">
              
              {/* Bottle SVG Graphic with dynamic fill */}
              <div className="relative w-28 h-48 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 180"
                  className="w-full h-full drop-shadow-md transition-all duration-500"
                >
                  {/* Bottle Cap */}
                  <rect x="38" y="10" width="24" height="12" rx="2" fill="#292524" />
                  {/* Bottle Neck */}
                  <path d="M42 22 L42 45 L20 65 L20 165 A 10 10 0 0 0 30 175 L70 175 A 10 10 0 0 0 80 165 L80 65 L58 45 L58 22 Z" fill="#E8EDEA" opacity="0.6" />
                  {/* Liquid Fill */}
                  <path
                    d="M22 80 L78 80 L78 165 A 8 8 0 0 1 70 173 L30 173 A 8 8 0 0 1 22 165 Z"
                    fill={dominantColor}
                    className="transition-colors duration-500"
                  />
                  {/* Glass Reflection Highlight */}
                  <path d="M26 85 L26 160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                  {/* Label Band */}
                  <rect x="25" y="100" width="50" height="40" rx="3" fill="#FFFFFF" opacity="0.9" />
                  <text x="50" y="118" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#14291B">
                    SOLTERRA
                  </text>
                  <text x="50" y="128" fontSize="4.5" textAnchor="middle" fill="#58675B">
                    CUSTOM TONIC
                  </text>
                </svg>
              </div>

              {/* Custom Blend Name Input */}
              <div className="w-full mt-4">
                <label className="text-[11px] font-semibold text-[#5B6A5F] block mb-1">
                  Name Your Tonic Formula:
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Dawn Dynamo"
                  className="w-full text-center px-3 py-1.5 text-xs font-bold text-[#14291B] bg-white border border-[#D5D1C5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                />
              </div>

            </div>

            {/* Live Nutritional Scoreboard */}
            <div className="bg-[#FAF9F5] p-3.5 rounded-xl border border-[#E8E5DC] text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-[#162D1D]">Calculated Nutrition</span>
                <span className="text-[11px] text-[#617164] flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-[#0284C7]" />
                  Raw Press
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                  <span className="block text-[10px] text-[#718074]">Calories</span>
                  <span className="font-mono font-bold text-[#14281B] tabular-nums">{totalCalories}</span>
                </div>
                <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                  <span className="block text-[10px] text-[#718074]">Sugars</span>
                  <span className="font-mono font-bold text-[#14281B] tabular-nums">{totalSugar}g</span>
                </div>
                <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                  <span className="block text-[10px] text-[#718074]">Vit C % DV</span>
                  <span className="font-mono font-bold text-[#14281B] tabular-nums">{totalVitC}%</span>
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <span className="text-xs font-semibold text-[#526155] block mb-1.5">Select Size:</span>
              <div className="grid grid-cols-3 gap-1.5 bg-[#EFECE3] p-1 rounded-lg">
                {(['12oz', '16oz', '32oz'] as BottleSize[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setBottleSize(s)}
                    className={`py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      bottleSize === s
                        ? 'bg-white text-[#152B1B] shadow-xs'
                        : 'text-[#5C6B5F] hover:text-[#152B1B]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Primary CTA */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#5D6B60]">Craft Total</span>
                <span className="font-mono text-xl font-bold text-[#132719] tabular-nums">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddCustomJuice}
                disabled={justAdded}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                  justAdded
                    ? 'bg-[#22683C]'
                    : 'bg-[#183120] hover:bg-[#112417] hover:shadow-md'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                    <span>Bottle & Add to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="w-full mt-2 py-1.5 text-xs text-[#6F7E72] hover:text-[#172D1E] flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Ingredients
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
