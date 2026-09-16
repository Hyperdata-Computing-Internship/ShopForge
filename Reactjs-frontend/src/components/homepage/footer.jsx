import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-black tracking-wider text-white mb-4">
              SHOPFORGE
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mb-6">
              Refined essentials crafted for modern living. Designed with premium materials, uncompromising craftsmanship, and timeless aesthetics.
            </p>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Official Store
              </span>
              <span>•</span>
              <span>Worldwide Shipping</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Shop Collections</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="text-zinc-400 hover:text-white transition">All Products</Link>
              </li>
              <li>
                <Link to="/shoes" className="text-zinc-400 hover:text-white transition">Footwear & Shoes</Link>
              </li>
              <li>
                <Link to="/shirts" className="text-zinc-400 hover:text-white transition">Shirts & Tees</Link>
              </li>
              <li>
                <Link to="/pants" className="text-zinc-400 hover:text-white transition">Pants & Trousers</Link>
              </li>
              <li>
                <Link to="/offers" className="text-zinc-400 hover:text-rose-400 transition flex items-center gap-1.5">
                  Exclusive Offers
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold">SALE</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/cart" className="text-zinc-400 hover:text-white transition">My Shopping Bag</Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <a href="#tracking" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition">Track Your Order</a>
              </li>
              <li>
                <a href="#shipping" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#returns" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition">30-Day Easy Returns</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Stay In Touch</h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Subscribe for insider drops, private sales, and seasonal lookbooks.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-white hover:bg-zinc-200 text-black text-xs font-semibold rounded-lg transition duration-150 cursor-pointer"
              >
                Join Strata Club
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 STRATA / ShopForge. Crafted for peak design & performance.</p>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">VISA</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">PAYPAL</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">STRIPE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;