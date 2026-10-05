import React, { useState } from 'react';
import { CartItem } from '../types/juice';
import { X, CheckCircle2, ShieldCheck, Clock, ArrowRight, Printer, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  tax: number;
  tip: number;
  grandTotal: number;
  fulfillmentType: 'delivery' | 'pickup';
  deliveryTimeSlot: string;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  subtotal,
  deliveryFee,
  discount,
  tax,
  tip,
  grandTotal,
  fulfillmentType,
  deliveryTimeSlot,
  onOrderComplete
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Maya Lin',
    email: 'maya.lin@example.com',
    phone: '(310) 555-8392',
    address: '840 S. Broadway, Apt 4B',
    city: 'Los Angeles',
    zipCode: '90014',
    instructions: 'Ring buzzer #402, leave at reception cooler',
    paymentMethod: 'card'
  });
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    const newOrderId = `SOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(newOrderId);

    setTimeout(() => {
      setStep('success');
      onOrderComplete();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white border border-[#DDD9CE] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl my-8 text-[#1A261D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E8E5DC] flex items-center justify-between bg-[#FAF9F5]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E5C3B] block">
              {fulfillmentType === 'delivery' ? 'Cold-Chain Delivery Checkout' : 'Express In-Store Pickup Checkout'}
            </span>
            <h3 className="font-display text-lg font-bold text-[#14281B]">
              {step === 'success' ? 'Order Confirmed & Slated' : 'Complete Your Order'}
            </h3>
          </div>

          {step !== 'processing' && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5D6B60] hover:bg-[#EFECE4] transition-colors"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          
          {step === 'details' && (
            <form onSubmit={handleSubmitOrder} className="space-y-4 text-xs">
              
              {/* Contact Information */}
              <div>
                <span className="font-bold text-[#14291B] uppercase tracking-wider block mb-2 text-[11px]">
                  01. Customer Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[#59685B] block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                    />
                  </div>
                  <div>
                    <label className="text-[#59685B] block mb-1">Mobile Phone (for SMS ETA)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[#59685B] block mb-1">Email (for Receipt & Sourcing Map)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                    />
                  </div>
                </div>
              </div>

              {/* Address / Location Details */}
              {fulfillmentType === 'delivery' ? (
                <div className="pt-3 border-t border-[#EAE6DD]">
                  <span className="font-bold text-[#14291B] uppercase tracking-wider block mb-2 text-[11px]">
                    02. Cold-Chain Delivery Address
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="sm:col-span-3">
                      <label className="text-[#59685B] block mb-1">Street Address</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[#59685B] block mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                      />
                    </div>
                    <div>
                      <label className="text-[#59685B] block mb-1">ZIP Code</label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="text-[#59685B] block mb-1">Courier Gate Code / Delivery Notes</label>
                      <input
                        type="text"
                        value={formData.instructions}
                        onChange={(e) => handleInputChange('instructions', e.target.value)}
                        placeholder="e.g. Leave in shaded porch insulated tote"
                        className="w-full p-2 bg-[#FAF9F5] border border-[#DDD9CE] rounded-lg text-[#162D1D] focus:outline-none focus:ring-1 focus:ring-[#1E4329]"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-3 border-t border-[#EAE6DD]">
                  <span className="font-bold text-[#14291B] uppercase tracking-wider block mb-2 text-[11px]">
                    02. Pickup Location & Readiness
                  </span>
                  <div className="p-3 bg-[#F4F6F3] rounded-lg border border-[#D5E3D8] text-xs">
                    <p className="font-bold text-[#162E1D]">SOLTERRA Downtown Flagship & Pressery</p>
                    <p className="text-[#57685B] mt-0.5">428 S. Spring Street · Ready in ~15 mins after confirmation</p>
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="pt-3 border-t border-[#EAE6DD]">
                <span className="font-bold text-[#14291B] uppercase tracking-wider block mb-2 text-[11px]">
                  03. Payment Method
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'card', label: 'Credit Card' },
                    { id: 'applepay', label: 'Apple Pay' },
                    { id: 'cod', label: fulfillmentType === 'delivery' ? 'COD' : 'Pay at Counter' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => handleInputChange('paymentMethod', m.id)}
                      className={`p-2 rounded-lg border text-center transition-all cursor-pointer font-medium ${
                        formData.paymentMethod === m.id
                          ? 'border-[#183120] bg-[#183120] text-white shadow-xs'
                          : 'border-[#DDD9CE] bg-[#FAF9F5] text-[#4F5E52] hover:border-[#183120]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Bar */}
              <div className="pt-4 border-t border-[#EAE6DD] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#637266] block">Window: {deliveryTimeSlot}</span>
                  <span className="text-base font-bold font-mono text-[#14281B] tabular-nums">
                    Total: ${grandTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#183120] hover:bg-[#112417] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  Confirm & Place Order
                </button>
              </div>

            </form>
          )}

          {step === 'processing' && (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 border-3 border-[#183120] border-t-transparent rounded-full animate-spin mx-auto" />
              <h4 className="font-display text-lg font-bold text-[#14281B]">
                Securing Fresh Batch Allocation...
              </h4>
              <p className="text-xs text-[#5C6B5E] max-w-xs mx-auto">
                Verifying cold-storage inventory and generating sanitized glass bottle ticket at 38°F.
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-[#EAF5ED] text-[#206939] rounded-full mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#14281B]">
                  Your Cold-Pressed Order is Active!
                </h4>
                <p className="text-xs text-[#536356] mt-1">
                  Order <strong className="font-mono text-[#14281B]">#{orderNumber}</strong> has been transmitted to our pressery kitchen.
                </p>
              </div>

              {/* Real-time Order Tracker Status Box */}
              <div className="bg-[#FAF9F5] border border-[#E4E1D7] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EBE7DF]">
                  <span className="font-bold text-[#152B1B]">Live Pressery Stage:</span>
                  <span className="flex items-center gap-1.5 text-[#206939] font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#206939] animate-ping" />
                    Bottling & Sealing at 38°F
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#526154]">
                  <div>
                    <span className="text-[10px] text-[#718174] block">Fulfillment</span>
                    <span className="font-medium text-[#182C1D]">
                      {fulfillmentType === 'delivery' ? 'Cold-Chain Van Dispatch' : 'Downtown Pressery Pickup'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#718174] block">Target Window</span>
                    <span className="font-medium text-[#182C1D]">{deliveryTimeSlot}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EBE7DF] text-xs">
                  <span className="text-[10px] text-[#718174] block">Bottles Slated:</span>
                  <p className="font-medium text-[#162D1E] truncate">
                    {cart.map((c) => `${c.quantity}x ${c.name} (${c.size})`).join(', ')}
                  </p>
                </div>
              </div>

              {/* Receipt Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 px-4 bg-[#EFECE3] hover:bg-[#E3DFD4] text-[#14291B] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 bg-[#183120] hover:bg-[#112417] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
