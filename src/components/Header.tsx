import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { CartItem } from '../types/juice';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  fulfillmentType: 'delivery' | 'pickup';
  onToggleFulfillment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onNavigate,
  fulfillmentType,
  onToggleFulfillment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  const navLinks = [
    { label: 'Menu', id: 'menu' },
    { label: 'Custom Lab', id: 'custom-lab' },
    { label: 'Cleanse Packs', id: 'cleanse' },
    { label: 'The Craft', id: 'craft' },
    { label: 'Presseries', id: 'locations' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark in display face */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="font-display text-2xl font-bold tracking-tight text-[#162D1D] hover:opacity-90 transition-opacity"
          >
            SOLTERRA
          </a>

          {/* Fulfillment Mode Toggle (Compact, functional interactive control) */}
          <div className="hidden lg:flex items-center text-xs bg-[#EFECE4] rounded-lg p-0.5 border border-[#E3DFC] select-none">
            <button
              onClick={() => fulfillmentType !== 'delivery' && onToggleFulfillment()}
              className={`px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                fulfillmentType === 'delivery'
                  ? 'bg-white text-[#182C1D] shadow-xs'
                  : 'text-[#5E685F] hover:text-[#182C1D]'
              }`}
            >
              Cold-Chain Delivery
            </button>
            <button
              onClick={() => fulfillmentType !== 'pickup' && onToggleFulfillment()}
              className={`px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                fulfillmentType === 'pickup'
                  ? 'bg-white text-[#182C1D] shadow-xs'
                  : 'text-[#5E685F] hover:text-[#182C1D]'
              }`}
            >
              Express Pickup
            </button>
          </div>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#465349]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-[#142B1B] transition-colors relative py-1 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Pressery Status Quick Affordance */}
          <button
            onClick={() => handleLinkClick('locations')}
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#4E5C51] hover:text-[#142B1B] py-2 px-2.5 rounded-lg hover:bg-[#EFECE4] transition-colors"
            title="Check store hours & live status"
          >
            <MapPin className="w-3.5 h-3.5 text-[#24613B]" />
            <span className="hidden xl:inline">Downtown & Venice</span>
            <span className="text-[#20723F] font-medium">· Open</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-[#183120] text-white hover:bg-[#122418] px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="tabular-nums">Bag ({totalItems})</span>
            {totalItems > 0 && (
              <span className="hidden sm:inline border-l border-[#2B4B34] pl-2 tabular-nums font-mono text-[#D7E8DC]">
                ${cartSubtotal.toFixed(2)}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C3B30] hover:bg-[#EFECE4] rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E2D8] bg-[#F7F6F1] px-4 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E2D8]">
            <span className="text-xs text-[#5D6B60]">Fulfillment Option:</span>
            <div className="flex items-center text-xs bg-[#E5E2D8] p-0.5 rounded-md">
              <button
                onClick={() => onToggleFulfillment()}
                className={`px-2.5 py-1 rounded text-xs font-medium ${
                  fulfillmentType === 'delivery' ? 'bg-white text-[#182C1D]' : 'text-[#58645B]'
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => onToggleFulfillment()}
                className={`px-2.5 py-1 rounded text-xs font-medium ${
                  fulfillmentType === 'pickup' ? 'bg-white text-[#182C1D]' : 'text-[#58645B]'
                }`}
              >
                Pickup
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-2.5 px-3 rounded-md text-sm font-medium text-[#203125] hover:bg-[#EFECE4] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 text-xs text-[#637266] flex items-center justify-between">
            <span>Fresh Batch Pressed at 5:00 AM Today</span>
            <span className="text-[#20723F] font-semibold">100% Raw Certified</span>
          </div>
        </div>
      )}
    </header>
  );
};
