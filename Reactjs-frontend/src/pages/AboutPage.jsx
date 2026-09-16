import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="w-full bg-neutral-50 text-neutral-900 font-sans">
      <section className="bg-black text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 inline-block">
            Our Heritage & Vision
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Crafting Essentials for the Thoughtful Modern Wardrobe
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            At STRATA & ShopForge, we believe great design is timeless, comfortable, and made to last. We unite traditional Italian footwear heritage with contemporary urban apparel.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-neutral-900">50K+</p>
              <p className="text-xs text-neutral-500 uppercase font-semibold mt-1">Discerning Clients</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-neutral-900">100%</p>
              <p className="text-xs text-neutral-500 uppercase font-semibold mt-1">Full-Grain Materials</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-neutral-900">30-Day</p>
              <p className="text-xs text-neutral-500 uppercase font-semibold mt-1">Home Trial Guarantee</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-neutral-900">4.9 ★</p>
              <p className="text-xs text-neutral-500 uppercase font-semibold mt-1">Average Trust Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">The Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-2 mb-6 leading-tight">
              Uncompromising Quality in Every Cut, Stitch & Sole
            </h2>
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                Fast fashion prioritizes obsolescence. We deliberately take the opposite approach: crafting pieces with durable construction, comfortable anatomy, and refined silhouettes that look as sharp years from now as they do today.
              </p>
              <p>
                Every pair of shoes undergoes multi-stage inspections, utilizing Blake-welted stitching and supple vegetable-tanned leathers that develop a rich, customized patina unique to your journey.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-xl transition shadow"
              >
                Explore The Collection &rarr;
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="Workshop atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Why Choose Us</span>
            <h2 className="text-3xl font-black text-neutral-900 mt-2">Principles That Guide Our Craft</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xl mb-5">
                ✦
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Master Craftsmanship</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We partner with seasoned artisan workshops specializing in heritage shoemaking and bespoke apparel tailoring.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xl mb-5">
                🌿
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Sustainable Materials</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Organic long-staple cottons, recycled linings, and eco-certified tanneries minimizing our global footprint.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xl mb-5">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Direct-To-Consumer</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                By cutting out intermediary markups, we deliver luxury-grade construction at honest, transparent prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
