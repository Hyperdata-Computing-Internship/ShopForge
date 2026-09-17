import { useState } from 'react';
import { Link } from 'react-router-dom';

let initialItems = [
  {
    id: 1,
    title: 'Oxford Leather Brogues',
    size: 'EU 43 / US 10',
    color: 'Cognac Tan',
    price: 189,
    quantity: 1,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 2,
    title: 'Oxford Cotton Shirt',
    size: 'M / Slim Fit',
    color: 'Classic White',
    price: 85,
    quantity: 2,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 3,
    title: 'Tailored Stretch Chinos',
    size: '32W x 32L',
    color: 'Midnight Navy',
    price: 95,
    quantity: 1,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
];

export const addItem=(item)=>{
  initialItems
};

const CartPage = () => {
  const [items, setItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'SHOPFORGE25') {
      setDiscountPercent(25);
      setPromoMessage('25% discount applied successfully!');
    } else if (code === 'SHOPFORGE40') {
      setDiscountPercent(40);
      setPromoMessage('40% discount applied successfully!');
    } else {
      setPromoMessage('Invalid coupon code. Try STRATA25');
      setDiscountPercent(0);
    }
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 150 || items.length === 0 ? 0 : 15;
  const estimatedTax = Math.round(subtotal * 0.08);
  const total = Math.max(0, subtotal - discountAmount + shipping + (items.length ? estimatedTax : 0));

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-neutral-900">Your Shopping Bag</h1>
          <p className="text-sm text-neutral-500 mt-1">
            {items.length} {items.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200 shadow-sm max-w-xl mx-auto my-12">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
              🛍️
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Your Bag is Empty</h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Explore our new arrivals and find your next favorite piece of footwear and apparel.
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-black hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl transition shadow"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <div className="divide-y divide-neutral-200">
                {items.map((item) => (
                  <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="w-24 h-24 rounded-xl bg-neutral-100 p-2 flex items-center justify-center shrink-0 border border-neutral-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-neutral-900 truncate">{item.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mt-1">
                        <span>{item.size}</span>
                        <span>•</span>
                        <span>{item.color}</span>
                      </div>
                      <p className="text-sm font-bold text-neutral-900 mt-2">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden bg-neutral-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1.5 hover:bg-neutral-200 text-neutral-700 font-bold text-sm transition cursor-pointer"
                        >
                          −
                        </button>
                        <span className="px-3 py-1.5 text-xs font-semibold text-neutral-900 bg-white min-w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1.5 hover:bg-neutral-200 text-neutral-700 font-bold text-sm transition cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-neutral-400 hover:text-rose-600 transition cursor-pointer"
                        title="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/products"
                  className="text-xs font-semibold text-neutral-700 hover:text-black inline-flex items-center gap-1.5 transition"
                >
                  &larr; Continue Shopping
                </Link>
                <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  ✓ Free worldwide returns on all items
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-lg font-bold text-neutral-900 mb-5">Order Summary</h2>

              <div className="space-y-3.5 text-sm text-neutral-600 border-b border-neutral-200 pb-5 mb-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
                </div>

                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-neutral-900">
                    {shipping === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-semibold text-neutral-900">${estimatedTax.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handleApplyPromo} className="mb-6">
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">Have a Promo Code?</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. SHOPFORGE25"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 bg-neutral-100 border border-neutral-200 rounded-xl text-xs text-neutral-800 placeholder-neutral-400 uppercase font-mono focus:outline-none focus:bg-white focus:border-black"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] mt-1.5 ${discountPercent > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {promoMessage}
                  </p>
                )}
              </form>

              <div className="flex justify-between items-center text-lg font-black text-neutral-900 mb-6 pt-3 border-t border-neutral-200">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="w-full block text-center py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-black/10"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-2 gap-3 text-center text-[11px] text-neutral-500">
                <div className="p-2 rounded-lg bg-neutral-50">
                  <span className="block text-sm mb-0.5">🔒</span>
                  <span>256-Bit SSL Encrypted</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-50">
                  <span className="block text-sm mb-0.5">⚡</span>
                  <span>Fast Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
