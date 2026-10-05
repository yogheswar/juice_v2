import React, { useState } from 'react';
import { Product, BottleSize } from '../types/juice';
import { Plus, Check, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: BottleSize) => void;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenModal
}) => {
  const [selectedSize, setSelectedSize] = useState<BottleSize>('16oz');
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const currentPrice = product.prices[selectedSize];

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group flex flex-col justify-between bg-white border border-[#E4E1D7] hover:border-[#B5C2B7] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {/* Card Header & Visual Media Slot */}
      <div className="relative bg-[#F4F3EE] overflow-hidden aspect-[4/3] flex items-center justify-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Stylized fallback container in case of any loading variance
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Fallback color-matched gradient wash */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
          style={{ backgroundColor: product.colorHex }}
        />

        {/* Editorial Single Subtle Tag (Anti-slop: max 1 quiet tag) */}
        {product.featured && (
          <div className="absolute top-3 left-3 bg-[#132A1B] text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
            Signature
          </div>
        )}

        {/* Quick Info Hover Affordance */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs text-[#162D1D] p-1.5 rounded-md shadow-xs">
          <Info className="w-4 h-4" />
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata line: Category · Calories · Sugar */}
          <div className="flex items-center gap-2 text-xs text-[#627065] mb-1.5 font-medium">
            <span className="uppercase tracking-wider">{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums font-mono">{product.nutrition.calories} kcal</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums font-mono">{product.nutrition.sugarGrams}g sugar</span>
          </div>

          {/* Product Name */}
          <h3 className="font-display text-lg font-bold text-[#14281B] group-hover:text-[#235835] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-[#526055] mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Ingredients Teaser */}
          <p className="text-[11px] text-[#78857B] mt-2.5 line-clamp-1 italic">
            {product.ingredients.join(' · ')}
          </p>
        </div>

        {/* Size Selector & Price / CTA Unit */}
        <div className="pt-5 mt-4 border-t border-[#EFECE3]">
          
          {/* Size segmented tabs */}
          <div className="flex items-center justify-between gap-1 bg-[#F4F2EB] p-1 rounded-lg mb-3">
            {(['12oz', '16oz', '32oz'] as BottleSize[]).map((size) => (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`flex-1 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedSize === size
                    ? 'bg-white text-[#152B1B] shadow-xs'
                    : 'text-[#637166] hover:text-[#152B1B]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Price Baseline and Buy Action */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#718074] block">Price</span>
              <span className="text-base font-bold text-[#12281A] tabular-nums font-mono">
                ${currentPrice.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={justAdded}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                justAdded
                  ? 'bg-[#23683C] text-white shadow-xs'
                  : 'bg-[#183120] hover:bg-[#122418] text-white shadow-xs hover:shadow'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
