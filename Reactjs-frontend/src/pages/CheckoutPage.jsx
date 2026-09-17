import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="w-full bg-neutral-50 min-h-screen py-16 flex items-center justify-center font-sans">
        <div className="max-w-md w-full mx-4 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 text-center shadow-xl">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            ✓
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Order Confirmed</span>
          <h2 className="text-2xl font-black text-neutral-900 mt-2 mb-3">Thank You For Your Order!</h2>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            Order <span className="font-mono font-bold text-neutral-800">#SF-849204</span> has been successfully placed. We've sent a detailed confirmation receipt with tracking information to your email.
          </p>

          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-left text-xs space-y-2 mb-6 text-neutral-600">
            <div className="flex justify-between">
              <span className="text-neutral-400">Payment:</span>
              <span className="font-semibold text-neutral-800 uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Estimated Delivery:</span>
              <span className="font-semibold text-neutral-800">3 - 5 Business Days</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/products"
              className="block w-full py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="block w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs rounded-xl transition"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Link to="/cart" className="hover:text-black">Shopping Bag</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Checkout</span>
          </div>
          <h1 className="text-3xl font-black text-neutral-900 tracking-tight">Express Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Left Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Contact Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">1</span>
                  Contact Information
                </h2>
                <span className="text-xs text-neutral-500">
                  Already a member? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">2</span>
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Julian"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Davies"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="742 Evergreen Terrace"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Springfield"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">State / Province</label>
                  <input
                    type="text"
                    required
                    placeholder="Oregon"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">Postal Code</label>
                  <input
                    type="text"
                    required
                    placeholder="97477"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:bg-white focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Shipping Method */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">3</span>
                Delivery Method
              </h2>

              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                    shippingMethod === 'standard' ? 'border-black bg-neutral-50' : 'border-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                      className="accent-black"
                    />
                    <div>
                      <p className="text-xs font-bold text-neutral-900">Standard Delivery (3-5 Business Days)</p>
                      <p className="text-[11px] text-neutral-500">Delivered via registered national parcel service</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">FREE</span>
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                    shippingMethod === 'express' ? 'border-black bg-neutral-50' : 'border-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                      className="accent-black"
                    />
                    <div>
                      <p className="text-xs font-bold text-neutral-900">Express Priority Courier (Next Day)</p>
                      <p className="text-[11px] text-neutral-500">Fast-tracked courier with live GPS tracking</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-900">$18.00</span>
                </label>
              </div>
            </div>

            {/* Step 4: Payment */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">4</span>
                Payment Options
              </h2>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition cursor-pointer ${
                    paymentMethod === 'card' ? 'border-black bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-700 bg-neutral-50'
                  }`}
                >
                  <span>💳</span>
                  Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition cursor-pointer ${
                    paymentMethod === 'paypal' ? 'border-black bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-700 bg-neutral-50'
                  }`}
                >
                  <span>🅿️</span>
                  PayPal
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition cursor-pointer ${
                    paymentMethod === 'cod' ? 'border-black bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-700 bg-neutral-50'
                  }`}
                >
                  <span>💵</span>
                  Cash On Delivery
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="4000 1234 5678 9010"
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 font-mono focus:bg-white focus:outline-none focus:border-black transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">Expiry Date</label>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 font-mono focus:bg-white focus:outline-none focus:border-black transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">Security Code (CVC)</label>
                      <input
                        type="text"
                        required
                        placeholder="CVC"
                        maxLength="4"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 font-mono focus:bg-white focus:outline-none focus:border-black transition"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 text-center">
                  You will be securely redirected to PayPal to authorize the transaction when placing your order.
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center">
                  Pay with cash upon physical delivery. Please prepare the exact invoice total.
                </div>
              )}
            </div>
          </div>

          {/* Order Review Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-neutral-900 mb-5">Order Review</h2>

            {/* Item Previews */}
            <div className="space-y-3 pb-5 border-b border-neutral-200 mb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-600">Oxford Leather Brogues (x1)</span>
                <span className="font-bold text-neutral-900">$189.00</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-600">Oxford Cotton Shirt (x2)</span>
                <span className="font-bold text-neutral-900">$170.00</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-600">Tailored Stretch Chinos (x1)</span>
                <span className="font-bold text-neutral-900">$95.00</span>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-3 text-sm text-neutral-600 border-b border-neutral-200 pb-5 mb-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-neutral-900">$454.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-neutral-900">
                  {shippingMethod === 'express' ? '$18.00' : 'FREE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Duties</span>
                <span className="font-semibold text-neutral-900">$36.32</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center text-lg font-black text-neutral-900 mb-6">
              <span>Grand Total</span>
              <span>${(454 + 36.32 + (shippingMethod === 'express' ? 18 : 0)).toFixed(2)}</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-black/10 cursor-pointer"
            >
              Confirm & Place Order
            </button>

            <p className="text-[11px] text-neutral-400 text-center mt-4">
              By confirming, you agree to STRATA's terms of sale & return policies.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
