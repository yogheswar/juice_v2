import React from 'react';
import { STORE_LOCATIONS } from '../data/juiceData';
import { MapPin, Phone, Clock, Sparkles, Navigation, Recycle } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D5A3A] mb-2">
            <span>Neighborhood Botanical Bars</span>
            <span aria-hidden="true" className="text-[#8FA594]">·</span>
            <span>Express Mobile Pickup</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#132719] [text-wrap:balance]">
            Visit Our Local Presseries
          </h2>
          <p className="text-sm text-[#546257] mt-2">
            Stop by for fresh glass bottle pours, ginger shots on tap, or pick up your mobile app orders in under fifteen minutes.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {STORE_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-white border border-[#E0DDD2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#ECE8DF]">
                  <h3 className="font-display text-xl font-bold text-[#14281B]">
                    {loc.name}
                  </h3>
                  <span className="flex items-center gap-1.5 text-xs text-[#206939] font-semibold bg-[#EAF5ED] px-2.5 py-1 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-[#206939] animate-pulse" />
                    Open Now
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-xs text-[#4E5C51]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#206939] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#182C1D]">{loc.address}</p>
                      <p className="text-[#657367]">{loc.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#206939] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#182C1D]">Operating Hours</p>
                      <p className="text-[#657367]">{loc.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#206939] shrink-0" />
                    <span className="text-[#182C1D] font-mono">{loc.phone}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#ECE8DF] flex items-center justify-between">
                <span className="text-xs text-[#5D6B60]">
                  Pickup ready in ~{loc.pickupReadyMinutes} mins
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const query = encodeURIComponent(`${loc.address}, ${loc.city}`);
                    window.open(`https://maps.google.com/?q=${query}`, '_blank');
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#EFECE3] hover:bg-[#E4E0D5] text-[#14291B] rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#206939]" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Glass Bottle Return Banner */}
        <div className="bg-[#EBF3EC] border border-[#CDE1D0] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#17321F] text-white rounded-xl shrink-0">
              <Recycle className="w-6 h-6 text-[#9AE6B4]" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-[#142B1B]">
                The Closed-Loop Glass Bottle Return Program
              </h4>
              <p className="text-xs sm:text-sm text-[#465749] mt-1 max-w-xl leading-relaxed">
                Bring back your rinsed SOLTERRA flint & amber glass bottles on your next visit. We thoroughly sanitize them with medical-grade heat and apply a $0.50 store credit directly to your juice account for every bottle returned.
              </p>
            </div>
          </div>

          <div className="shrink-0 bg-white border border-[#BCD4C0] px-4 py-3 rounded-xl text-center">
            <span className="text-[11px] text-[#556959] block">Over 14,200 bottles reused in 2026</span>
            <span className="font-mono text-sm font-bold text-[#183622] block mt-0.5">
              100% Zero Single-Use Plastic
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
