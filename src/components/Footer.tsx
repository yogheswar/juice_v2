import React from 'react';
import { Leaf, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#122417] text-[#D8E6DB] border-t border-[#1D3B25] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#21412A]">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              SOLTERRA
            </span>
            <p className="text-xs text-[#9BB1A0] leading-relaxed max-w-sm">
              Artisanal cold-pressed botanicals extracted with 10,000 lbs of hydraulic force. 
              Pure, unpasteurized, and delivered cold in closed-loop recyclable glass.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#8BA190] pt-2">
              <span className="flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-[#54A86E]" />
                100% Organic
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#54A86E]" />
                Zero Pasteurization
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pressery</h4>
            <ul className="space-y-2 text-xs text-[#9BB1A0]">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bottled Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-lab')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Craft Custom Tonic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cleanse')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cleanse Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craft')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Cold Press Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Store Hours & Pickup
                </button>
              </li>
            </ul>
          </div>

          {/* Sourcing & Transparency */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Regenerative Farms</h4>
            <ul className="space-y-1.5 text-xs text-[#9BB1A0]">
              <li>Salinas Organic Greens Co-op</li>
              <li>Ojai Valley Citrus Groves</li>
              <li>Watsonville Heritage Orchards</li>
              <li>Capay Valley Organic Almonds</li>
              <li>Kauai Gold Fresh Turmeric</li>
            </ul>
          </div>

          {/* Newsletter / Seasonal Harvest Drops */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Seasonal Press Drops</h4>
            <p className="text-xs text-[#9BB1A0]">
              Receive notice when limited micro-lot seasonal fruits (like Blood Orange & Persimmon) arrive at our press.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to SOLTERRA seasonal harvest drops!');
              }}
              className="flex items-center gap-2 pt-1"
            >
              <div className="relative flex-1">
                <Mail className="w-3.5 h-3.5 text-[#6B8571] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full pl-8 pr-3 py-2 bg-[#1A3321] border border-[#274B30] rounded-lg text-xs text-white placeholder:text-[#67806D] focus:outline-none focus:border-[#4B8E5E]"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 bg-[#2B5E38] hover:bg-[#347345] text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#708575] gap-4">
          <div>
            © {new Date().getFullYear()} SOLTERRA Botanical Press Co. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Nutritional Transparency</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Bottle Return Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
