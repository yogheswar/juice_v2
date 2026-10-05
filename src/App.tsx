import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/juiceData';
import { Product, BottleSize, CartItem } from './types/juice';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuCatalog } from './components/MenuCatalog';
import { ProductModal } from './components/ProductModal';
import { CustomJuiceLab } from './components/CustomJuiceLab';
import { CleanseSection } from './components/CleanseSection';
import { PhilosophySection } from './components/PhilosophySection';
import { LocationsSection } from './components/LocationsSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { ShoppingBag, Check } from 'lucide-react';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('solterra_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default starter item for instant immersion
    return [
      {
        cartItemId: 'init-1',
        productId: 'emerald-vitality',
        name: 'Emerald Vitality No. 1',
        size: '16oz',
        unitPrice: 12.00,
        quantity: 2,
        details: '100% Raw · Celery · Kale · Cucumber · Ginger'
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState('Morning Run (7:30 AM – 9:30 AM)');
  const [activeSection, setActiveSection] = useState('hero');

  // Promo code & Tip state
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [tipPercent, setTipPercent] = useState(15);

  // Notification Toast for Cart additions
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('solterra_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add standard product to cart
  const handleAddToCart = (product: Product, size: BottleSize, quantity = 1) => {
    const existingIndex = cart.findIndex(
      (item) => item.productId === product.id && item.size === size && !item.isCustom
    );

    const price = product.prices[size];

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      const newItem: CartItem = {
        cartItemId: `${product.id}-${size}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        size,
        unitPrice: price,
        quantity,
        details: product.ingredients.slice(0, 3).join(', ')
      };
      setCart((prev) => [...prev, newItem]);
    }

    showToast(`Added ${quantity}x ${product.name} (${size}) to Bag`);
  };

  // Add custom juice or cleanse item
  const handleAddCustomOrCleanseItem = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
    showToast(`Added ${item.name} to Bag`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleApplyPromoCode = (code: string) => {
    const upper = code.trim().toUpperCase();
    if (upper === 'FIRSTPRESS') {
      setPromoCode('FIRSTPRESS');
      setPromoDiscount(0.15);
      setPromoError('');
    } else if (upper === 'FREESHIP') {
      setPromoCode('FREESHIP');
      setPromoDiscount(0.05);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "FIRSTPRESS" for 15% off.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Totals calculations
  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = fulfillmentType === 'delivery' ? (subtotal >= 45 ? 0 : 4.50) : 0;
  const discountAmount = subtotal * promoDiscount;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825;
  const tip = taxableAmount * (tipPercent / 100);
  const grandTotal = Math.max(0, taxableAmount + deliveryFee + tax + tip);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#19271E]">
      
      {/* Top Banner (Slim single promotional surface, compliant with anti-slop rules) */}
      <div className="bg-[#152F1D] text-[#E0EFE4] text-xs py-2 px-4 text-center font-medium border-b border-[#23452D] select-none flex items-center justify-center gap-2">
        <span className="font-semibold text-[#8CE3A9]">TODAY'S HARVEST:</span>
        <span>Batch #842 pressed cold at 38°F. Free cold-chain delivery on orders $45+ with code</span>
        <button
          onClick={() => handleApplyPromoCode('FIRSTPRESS')}
          className="underline decoration-[#72C78E] text-white font-mono hover:text-[#8CE3A9] cursor-pointer"
        >
          FIRSTPRESS
        </button>
      </div>

      {/* Header conforming to Top Bar Contract */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        fulfillmentType={fulfillmentType}
        onToggleFulfillment={() =>
          setFulfillmentType(fulfillmentType === 'delivery' ? 'pickup' : 'delivery')
        }
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onOpenCustomLab={() => scrollToSection('custom-lab')}
          onExploreCleanse={() => scrollToSection('cleanse')}
        />

        <MenuCatalog
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onOpenModal={(product) => setSelectedProduct(product)}
        />

        <CustomJuiceLab onAddCustomToCart={handleAddCustomOrCleanseItem} />

        <CleanseSection onAddCleanseToCart={handleAddCustomOrCleanseItem} />

        <PhilosophySection />

        <LocationsSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        fulfillmentType={fulfillmentType}
        onSetFulfillmentType={setFulfillmentType}
        deliveryTimeSlot={deliveryTimeSlot}
        onSetDeliveryTimeSlot={setDeliveryTimeSlot}
        promoCode={promoCode}
        promoDiscount={promoDiscount}
        promoError={promoError}
        onApplyPromoCode={handleApplyPromoCode}
        tipPercent={tipPercent}
        onSetTipPercent={setTipPercent}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        discount={discountAmount}
        tax={tax}
        tip={tip}
        grandTotal={grandTotal}
        fulfillmentType={fulfillmentType}
        deliveryTimeSlot={deliveryTimeSlot}
        onOrderComplete={() => {
          setCart([]);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16301F] text-white px-4 py-3 rounded-xl shadow-lg border border-[#2D5A3A] flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4 text-[#6EE7B7]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Mobile Floating Cart Trigger */}
      {cart.length > 0 && !isCartOpen && (
        <div className="md:hidden fixed bottom-5 left-4 right-4 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#183120] text-white py-3 px-4 rounded-xl shadow-xl flex items-center justify-between font-semibold text-xs border border-[#2E5838]"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
            </div>
            <div className="flex items-center gap-2 font-mono tabular-nums">
              <span>View Order</span>
              <span>·</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </button>
        </div>
      )}

    </div>
  );
}
