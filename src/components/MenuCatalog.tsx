import React, { useState, useMemo } from 'react';
import { Product, BottleSize, CategoryId } from '../types/juice';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';

interface MenuCatalogProps {
  products: Product[];
  onAddToCart: (product: Product, size: BottleSize) => void;
  onOpenModal: (product: Product) => void;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  products,
  onAddToCart,
  onOpenModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'sugar-asc'>('featured');

  const categories: Array<{ id: CategoryId; label: string }> = [
    { id: 'all', label: 'All Blends' },
    { id: 'greens', label: 'Leafy Greens' },
    { id: 'citrus', label: 'Citrus & Solar' },
    { id: 'roots', label: 'Earthy Roots' },
    { id: 'hydration', label: 'Hydration & Mylks' },
    { id: 'shots', label: 'Wellness Shots' }
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'Low Glycemic', label: 'Low Sugar (<5g)' },
    { id: 'Keto Friendly', label: 'Keto Friendly' },
    { id: 'Anti-Inflammatory', label: 'Anti-Inflammatory' },
    { id: 'Electrolyte Charged', label: 'Electrolytes' }
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Dietary tag filter
        if (dietaryFilter !== 'all' && !product.dietary.includes(dietaryFilter)) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchIng = product.ingredients.some((ing) => ing.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchIng) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
        if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
        if (sortBy === 'sugar-asc') return a.nutrition.sugarGrams - b.nutrition.sugarGrams;
        // Featured first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [products, selectedCategory, dietaryFilter, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E8E5DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#326140] mb-2">
              <span>Living Cold-Pressed Bottle Catalog</span>
              <span aria-hidden="true" className="text-[#9DB1A2]">·</span>
              <span>Pressed Daily at 5 AM</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14281B] [text-wrap:balance]">
              The Daily Harvest Press Menu
            </h2>
            <p className="text-sm text-[#546257] mt-1.5 max-w-xl">
              Zero water added. Zero pasteurization. Pure living enzymes in 100% recyclable glass bottles.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#738276] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kale, ginger, turmeric..."
              className="w-full pl-9.5 pr-4 py-2 bg-white border border-[#D7D3C7] rounded-lg text-xs placeholder:text-[#88948B] text-[#1B2F21] focus:outline-none focus:ring-1 focus:ring-[#1E4329] focus:border-[#1E4329] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#808E83] hover:text-[#182C1E]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row (Interactive button controls) */}
        <div className="space-y-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#183120] text-white shadow-xs'
                    : 'bg-[#EFECE3] text-[#556358] hover:bg-[#E4E0D5] hover:text-[#183120]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-Filters: Dietary & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#5D6B60]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#18301F] flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Target:
              </span>
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                    dietaryFilter === opt.id
                      ? 'bg-[#D2E4D5] text-[#164125] font-semibold'
                      : 'bg-white border border-[#DCD8CC] text-[#556358] hover:border-[#B5C2B7]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[#647267]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#D5D1C5] rounded-md px-2.5 py-1 text-xs text-[#1E3224] focus:outline-none focus:ring-1 focus:ring-[#1E4329] cursor-pointer"
              >
                <option value="featured">Signature & Featured</option>
                <option value="sugar-asc">Lowest Sugar First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Grid: 3-column desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white border border-[#E3DFD5] rounded-2xl">
            <p className="text-sm font-semibold text-[#162D1D]">No cold-pressed blends found matching your criteria</p>
            <p className="text-xs text-[#637266] mt-1 max-w-sm mx-auto">
              Try adjusting your dietary filter or search for core ingredients like kale, apple, ginger, or lemon.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#EFECE3] hover:bg-[#E4E0D5] text-[#193221] rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
