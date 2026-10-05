import React, { useState } from 'react';
import { Product, BottleSize } from '../types/juice';
import { X, Check, Droplets, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: BottleSize, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<BottleSize>('16oz');
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const pricePerUnit = product.prices[selectedSize];
  const totalPrice = pricePerUnit * quantity;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white border border-[#DDD9CE] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 text-[#1A261D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#203324] shadow-sm transition-colors cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Visual Showcase */}
          <div className="md:col-span-5 bg-[#F6F5F0] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E5DC]">
            <div className="relative rounded-xl overflow-hidden aspect-square bg-[#EFECE3] border border-[#DDD9CE]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
                style={{ backgroundColor: product.colorHex }}
              />
            </div>

            {/* Farm Origin Marker */}
            <div className="mt-5 space-y-2 text-xs text-[#526055]">
              <div className="flex items-center gap-1.5 font-semibold text-[#183120]">
                <MapPin className="w-3.5 h-3.5 text-[#24613B]" />
                <span>Single-Region Harvest</span>
              </div>
              <p className="italic text-[#6B796E]">
                {product.farmSource}
              </p>
              <div className="pt-2 border-t border-[#E2DFD4] flex items-center gap-2 text-[11px] text-[#637266]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#24613B]" />
                <span>Zero Heat · 10,000 lbs Hydraulic Cold Force</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module & Nutrition */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              {/* Category & Tags - unboxed typography with separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#356443] mb-2">
                <span>{product.category}</span>
                <span aria-hidden="true" className="text-[#96A89A]">·</span>
                <span>Cold Hydraulic Press</span>
                <span aria-hidden="true" className="text-[#96A89A]">·</span>
                <span>72-Hr Fresh</span>
              </div>

              {/* Title & Tagline */}
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14281B] leading-tight">
                {product.name}
              </h2>
              <p className="text-sm text-[#4E5C51] mt-1.5 font-medium">
                {product.tagline}
              </p>

              {/* Narrative Description */}
              <p className="text-xs sm:text-sm text-[#5D6B60] mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Ingredients List */}
              <div className="mt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142A1C] block mb-2">
                  Living Botanical Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#304134]">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="bg-[#EFECE4] px-2.5 py-1 rounded text-[#223627] font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Taste Profile Sliders */}
              <div className="mt-5 pt-4 border-t border-[#EDEAE1] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142A1C] block">
                  Flavor Profile
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="flex justify-between text-[#5C6B5F] mb-1">
                      <span>Sweetness</span>
                      <span className="font-mono">{product.tasteProfile.sweetness}/5</span>
                    </div>
                    <div className="h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#E08A27] rounded-full"
                        style={{ width: `${(product.tasteProfile.sweetness / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#5C6B5F] mb-1">
                      <span>Tartness</span>
                      <span className="font-mono">{product.tasteProfile.tartness}/5</span>
                    </div>
                    <div className="h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#EAB308] rounded-full"
                        style={{ width: `${(product.tasteProfile.tartness / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#5C6B5F] mb-1">
                      <span>Earthiness</span>
                      <span className="font-mono">{product.tasteProfile.earthiness}/5</span>
                    </div>
                    <div className="h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#18532F] rounded-full"
                        style={{ width: `${(product.tasteProfile.earthiness / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#5C6B5F] mb-1">
                      <span>Intensity</span>
                      <span className="font-mono">{product.tasteProfile.intensity}/5</span>
                    </div>
                    <div className="h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#831843] rounded-full"
                        style={{ width: `${(product.tasteProfile.intensity / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Nutrition Facts Table */}
              <div className="mt-5 p-3.5 bg-[#F6F5F0] rounded-xl border border-[#E5E2D8] text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#152B1B]">Nutrition per 12oz serving</span>
                  <span className="text-[#657367] flex items-center gap-1">
                    <Droplets className="w-3 h-3 text-[#0284C7]" />
                    Hydration Index: {product.nutrition.hydrationScore}/10
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                    <span className="block text-[10px] text-[#718074]">Calories</span>
                    <span className="font-mono font-bold text-[#14281B] tabular-nums">{product.nutrition.calories}</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                    <span className="block text-[10px] text-[#718074]">Sugars</span>
                    <span className="font-mono font-bold text-[#14281B] tabular-nums">{product.nutrition.sugarGrams}g</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                    <span className="block text-[10px] text-[#718074]">Vitamin C</span>
                    <span className="font-mono font-bold text-[#14281B] tabular-nums">{product.nutrition.vitaminCDailyPercent}%</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-[#E3DFC] shadow-2xs">
                    <span className="block text-[10px] text-[#718074]">Potassium</span>
                    <span className="font-mono font-bold text-[#14281B] tabular-nums">{product.nutrition.potassiumMg}mg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Buy Module in Modal */}
            <div className="pt-4 border-t border-[#E8E5DC] space-y-3">
              {/* Size Selector */}
              <div>
                <span className="text-xs font-semibold text-[#505F53] block mb-1.5">Select Bottle Size:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['12oz', '16oz', '32oz'] as BottleSize[]).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'border-[#183120] bg-[#183120] text-white shadow-xs'
                          : 'border-[#D9D6CC] bg-[#FAFAF7] text-[#223527] hover:border-[#183120]'
                      }`}
                    >
                      <div className="font-bold">{size}</div>
                      <div className="text-[11px] opacity-90 tabular-nums font-mono">
                        ${product.prices[size].toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Primary Action */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-[#D5D1C5] rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm font-bold text-[#2A3B2F] hover:bg-[#F0EEE6] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-mono font-bold text-[#162D1D] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm font-bold text-[#2A3B2F] hover:bg-[#F0EEE6] transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={justAdded}
                  className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                    justAdded ? 'bg-[#22683C]' : 'bg-[#17321F] hover:bg-[#112416]'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                      <span>Add to Bag · ${totalPrice.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
