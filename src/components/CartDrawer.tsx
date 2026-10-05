import React, { useState } from 'react';
import { CartItem } from '../types/juice';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, Clock, Bike, Store } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  fulfillmentType: 'delivery' | 'pickup';
  onSetFulfillmentType: (type: 'delivery' | 'pickup') => void;
  deliveryTimeSlot: string;
  onSetDeliveryTimeSlot: (slot: string) => void;
  promoCode: string;
  promoDiscount: number;
  promoError: string;
  onApplyPromoCode: (code: string) => void;
  tipPercent: number;
  onSetTipPercent: (tip: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  fulfillmentType,
  onSetFulfillmentType,
  deliveryTimeSlot,
  onSetDeliveryTimeSlot,
  promoCode,
  promoDiscount,
  promoError,
  onApplyPromoCode,
  tipPercent,
  onSetTipPercent
}) => {
  const [promoInput, setPromoInput] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = fulfillmentType === 'delivery' ? (subtotal >= 45 ? 0 : 4.50) : 0;
  const discountAmount = subtotal * promoDiscount;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const estimatedTax = taxableAmount * 0.0825;
  const tipAmount = taxableAmount * (tipPercent / 100);
  const grandTotal = Math.max(0, taxableAmount + deliveryFee + estimatedTax + tipAmount);

  const freeDeliveryThreshold = 45;
  const distanceToFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  const timeSlots = [
    'Morning Run (7:30 AM – 9:30 AM)',
    'Midday Fresh (12:00 PM – 2:00 PM)',
    'Evening Rush (4:30 PM – 6:30 PM)'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E2DFD4] shadow-2xl flex flex-col justify-between text-[#1A261D] animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-5 border-b border-[#E8E5DC] flex items-center justify-between bg-[#FAF9F5]">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-[#14281B]">
                Your Botanical Bag
              </span>
              <span className="text-xs text-[#5D6B60] font-mono tabular-nums">
                ({cart.reduce((a, b) => a + b.quantity, 0)} items)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5D6B60] hover:bg-[#EFECE4] hover:text-[#14281B] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            {/* Free Delivery Meter */}
            {fulfillmentType === 'delivery' && (
              <div className="bg-[#F4F3EE] p-3 rounded-xl border border-[#E6E3D8] text-xs">
                {distanceToFreeDelivery > 0 ? (
                  <>
                    <div className="flex justify-between text-[#4D5C50] mb-1.5 font-medium">
                      <span>Add <strong className="font-mono text-[#183120]">${distanceToFreeDelivery.toFixed(2)}</strong> for Free Delivery</span>
                      <span className="font-mono">{Math.round((subtotal / freeDeliveryThreshold) * 100)}%</span>
                    </div>
                    <div className="h-1.5 bg-[#DDD9CE] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#206939] rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-1.5 text-[#194E2C] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#206939]" />
                    <span>Unlocked Free Cold-Chain Delivery!</span>
                  </div>
                )}
              </div>
            )}

            {/* Empty state */}
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-[#F4F2EA] mx-auto flex items-center justify-center text-[#7E8D81] mb-3">
                  <Bike className="w-7 h-7" />
                </div>
                <h4 className="font-display text-base font-bold text-[#14281B]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-[#5E6D61] mt-1 max-w-xs mx-auto">
                  Explore our cold-pressed green, citrus, and root blends or craft your own personalized tonic.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-[#183120] hover:bg-[#112417] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Explore Today's Menu
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[#EFECE3]">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="py-3.5 flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-[#14281B] leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#14281B] tabular-nums ml-2">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-[#69796D] mt-0.5 font-medium">
                        <span>{item.size}</span>
                        {item.details && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="line-clamp-1 italic">{item.details}</span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2.5">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#DDD9CE] rounded-md bg-[#FAF9F5] overflow-hidden text-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                            className="px-2 py-0.5 text-[#304134] hover:bg-[#EAE6DC] transition-colors"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-mono font-bold text-[#14281B] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                            className="px-2 py-0.5 text-[#304134] hover:bg-[#EAE6DC] transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Action */}
                        <button
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-[#96A498] hover:text-[#B91C1C] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Fulfillment and Timing Details when cart has items */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-[#EAE6DD] space-y-4">
                
                {/* Method selector */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#142A1C] block mb-1.5">
                    Fulfillment Method
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSetFulfillmentType('delivery')}
                      className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all cursor-pointer ${
                        fulfillmentType === 'delivery'
                          ? 'border-[#183120] bg-[#F1F6F2] text-[#183120] font-semibold'
                          : 'border-[#DDD9CE] text-[#556458]'
                      }`}
                    >
                      <Bike className="w-4 h-4 text-[#206939]" />
                      <div className="text-xs">
                        <div>Cold-Chain</div>
                        <div className="text-[10px] text-[#69796C] font-mono">
                          {subtotal >= 45 ? 'Free' : '$4.50'}
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => onSetFulfillmentType('pickup')}
                      className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all cursor-pointer ${
                        fulfillmentType === 'pickup'
                          ? 'border-[#183120] bg-[#F1F6F2] text-[#183120] font-semibold'
                          : 'border-[#DDD9CE] text-[#556458]'
                      }`}
                    >
                      <Store className="w-4 h-4 text-[#206939]" />
                      <div className="text-xs">
                        <div>Store Pickup</div>
                        <div className="text-[10px] text-[#69796C] font-mono">Free (15m)</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Target Window Selector */}
                <div>
                  <label className="text-xs font-semibold text-[#4E5D51] flex items-center gap-1 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#206939]" />
                    <span>Select Time Slot:</span>
                  </label>
                  <select
                    value={deliveryTimeSlot}
                    onChange={(e) => onSetDeliveryTimeSlot(e.target.value)}
                    className="w-full text-xs bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg p-2 text-[#182C1E] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                  >
                    {timeSlots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Promo Code Input */}
                <div>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#738477] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                        placeholder="Promo code (e.g. FIRSTPRESS)"
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#152B1B] uppercase placeholder:normal-case placeholder:text-[#88948B] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                      />
                    </div>
                    <button
                      onClick={() => {
                        if (promoInput.trim()) onApplyPromoCode(promoInput.trim());
                      }}
                      className="px-3 py-1.5 bg-[#EFECE3] hover:bg-[#E3DFD4] text-[#162D1D] rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoDiscount > 0 && (
                    <p className="text-[11px] text-[#1E5D34] font-medium mt-1">
                      Code applied: {promoCode} ({(promoDiscount * 100)}% off)
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-[#B91C1C] font-medium mt-1">
                      {promoError}
                    </p>
                  )}
                </div>

                {/* Botanical Support Tip */}
                <div>
                  <span className="text-xs font-semibold text-[#526154] block mb-1">
                    Pressery Crew Tip:
                  </span>
                  <div className="grid grid-cols-4 gap-1.5 text-xs">
                    {[0, 10, 15, 20].map((pct) => (
                      <button
                        key={pct}
                        onClick={() => onSetTipPercent(pct)}
                        className={`py-1.5 rounded border text-center font-mono transition-colors cursor-pointer ${
                          tipPercent === pct
                            ? 'bg-[#183120] text-white border-[#183120] font-bold'
                            : 'bg-[#FAF9F5] border-[#DDD9CE] text-[#4F5E52] hover:border-[#183120]'
                        }`}
                      >
                        {pct === 0 ? 'None' : `${pct}%`}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Footer & Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 bg-[#FAF9F5] border-t border-[#E8E5DC] space-y-3">
              <div className="space-y-1.5 text-xs text-[#526055]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#182C1D] tabular-nums">${subtotal.toFixed(2)}</span>
                </div>

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-[#1E5D34]">
                    <span>Promo Discount</span>
                    <span className="font-mono tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>{fulfillmentType === 'delivery' ? 'Cold-Chain Delivery' : 'Store Pickup'}</span>
                  <span className="font-mono text-[#182C1D] tabular-nums">
                    {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Est. Sales Tax (8.25%)</span>
                  <span className="font-mono text-[#182C1D] tabular-nums">${estimatedTax.toFixed(2)}</span>
                </div>

                {tipAmount > 0 && (
                  <div className="flex justify-between">
                    <span>Pressery Crew Tip</span>
                    <span className="font-mono text-[#182C1D] tabular-nums">${tipAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-[#E2DFD5] flex justify-between text-sm font-bold text-[#14281B]">
                  <span>Total</span>
                  <span className="font-mono text-base tabular-nums">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 bg-[#183120] hover:bg-[#112417] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#718073]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#24613B]" />
                <span>100% Satisfaction Guarantee · Chilled Cold-Chain Guaranteed</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
