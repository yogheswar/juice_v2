import React from 'react';
import { TESTIMONIALS } from '../data/juiceData';
import { Check, X, ShieldAlert, Award, Star, Sprout, HeartHandshake } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="craft" className="py-16 sm:py-24 bg-[#F5F4EE] border-t border-[#E6E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#305C3C] mb-2">
            <span>The Science of Cold-Pressed Liquid</span>
            <span aria-hidden="true" className="text-[#8FA594]">·</span>
            <span>Zero Compromise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14281B] [text-wrap:balance]">
            Why 10,000 Pounds of Hydraulic Force Changes Everything
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D52] mt-3 leading-relaxed">
            Conventional juice bars use fast-spinning blades that whip oxygen into produce and generate heat that destroys sensitive enzymes. We crush organic whole crops slowly, then apply ten thousand pounds of pure hydraulic force at 38°F.
          </p>
        </div>

        {/* Cold-Press vs Conventional Comparison Matrix */}
        <div className="bg-white border border-[#DDD9CE] rounded-2xl overflow-hidden shadow-xs mb-16">
          <div className="p-6 bg-[#17321F] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A7D4B4]">Extraction Comparison</span>
              <h3 className="font-display text-xl font-bold mt-0.5">SOLTERRA Hydraulic Press vs. Typical Store Juices</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#D8EADB]">
              <Award className="w-4 h-4 text-[#FDE68A]" />
              <span>Certified 100% Raw living enzymes</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#EAE6DD] bg-[#FAF9F5] text-[#556458] uppercase font-semibold text-[11px]">
                  <th className="py-3.5 px-6">Criteria</th>
                  <th className="py-3.5 px-6 text-[#17321F] bg-[#EFF6F0]">SOLTERRA Hydraulic Cold-Press</th>
                  <th className="py-3.5 px-6 text-[#854D0E]">Centrifugal Fast Juicer</th>
                  <th className="py-3.5 px-6 text-[#7F1D1D]">Grocery Shelf Pasteurization (HPP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE6DD] text-[#314135]">
                <tr>
                  <td className="py-4 px-6 font-semibold">Heat Exposure</td>
                  <td className="py-4 px-6 bg-[#F6FAF7] font-medium text-[#1E4D2B]">
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#206939]" /> 0°F heat added (Kept strictly at 38°F)</span>
                  </td>
                  <td className="py-4 px-6 text-[#705018]">Up to 120°F blade friction heat</td>
                  <td className="py-4 px-6 text-[#7F1D1D]">Extreme heat or 87,000 psi shock</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Live Enzymes & Vitamins</td>
                  <td className="py-4 px-6 bg-[#F6FAF7] font-medium text-[#1E4D2B]">
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#206939]" /> 100% active living biodynamics</span>
                  </td>
                  <td className="py-4 px-6 text-[#705018]">50-70% enzyme loss from heat/air</td>
                  <td className="py-4 px-6 text-[#7F1D1D]">Substantially deactivated enzymes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Produce Density</td>
                  <td className="py-4 px-6 bg-[#F6FAF7] font-medium text-[#1E4D2B]">
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#206939]" /> 5.2 lbs produce per bottle</span>
                  </td>
                  <td className="py-4 px-6 text-[#705018]">~2.0 lbs produce (high pulp waste)</td>
                  <td className="py-4 px-6 text-[#7F1D1D]">Diluted with apple juice puree</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Packaging</td>
                  <td className="py-4 px-6 bg-[#F6FAF7] font-medium text-[#1E4D2B]">
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#206939]" /> Reusable flint & amber glass</span>
                  </td>
                  <td className="py-4 px-6 text-[#705018]">Single-use thin plastic cups</td>
                  <td className="py-4 px-6 text-[#7F1D1D]">PET Plastic bottles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Regenerative Farm Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#E1DDD1]">
            <Sprout className="w-6 h-6 text-[#24613B] mb-3" />
            <h4 className="font-display text-lg font-bold text-[#14281B]">Salinas Organic Valley</h4>
            <p className="text-xs text-[#5D6B60] mt-1.5 leading-relaxed">
              Family-cultivated dinosaur kale, crisp romaine, and wild spearmint grown with zero synthetic fertilizers and rainwater catchment systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E1DDD1]">
            <HeartHandshake className="w-6 h-6 text-[#D97706] mb-3" />
            <h4 className="font-display text-lg font-bold text-[#14281B]">Ojai Solar Citrus Ranch</h4>
            <p className="text-xs text-[#5D6B60] mt-1.5 leading-relaxed">
              Old-grove Meyer lemons, Star Ruby grapefruits, and sun-ripened Valencia oranges hand-picked at peak brix sugar balance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E1DDD1]">
            <Award className="w-6 h-6 text-[#881337] mb-3" />
            <h4 className="font-display text-lg font-bold text-[#14281B]">Watsonville Heritage Orchards</h4>
            <p className="text-xs text-[#5D6B60] mt-1.5 leading-relaxed">
              Heirloom Gala and Granny Smith apples paired with mineral-dense Chioggia beets harvested weekly to guarantee fresh earthiness.
            </p>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Attributable Testimonials */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#305C3C]">
              Real Everyday Rituals
            </span>
            <h3 className="font-display text-2xl font-bold text-[#14281B] mt-1">
              Voices From Our Pressery Community
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E1DDD1] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E08A27] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E4F42] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#EDEAE1]">
                  <div className="font-bold text-xs text-[#14281B]">{t.author}</div>
                  <div className="text-[11px] text-[#6A786E]">{t.role}</div>
                  <div className="text-[10px] text-[#29683F] font-medium mt-1">
                    Favorite: {t.favorite}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
