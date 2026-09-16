import { Link } from 'react-router-dom';
import Crousal from './crousal';
import Productcards from '../productspage/Productcards';

const featuredProducts = [
  {
    id: 1,
    title: 'Oxford Leather Brogues',
    description: 'Handcrafted Italian calfskin leather with durable Blake welt stitching.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 2,
    title: 'Chelsea Suede Boots',
    description: 'Water-resistant supple suede with dual elastic side gussets for all-day comfort.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 3,
    title: 'Minimalist White Sneakers',
    description: 'Ultra-clean low top silhouette with ergonomic memory-foam cushioned insole.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 4,
    title: 'Derby Casual Shoes',
    description: 'Versatile open-laced derby crafted with premium grain leather and non-slip sole.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
];

const trendingDrops = [
  {
    id: 5,
    title: 'Monk Strap Loafers',
    description: 'Polished burnished toe with double brass buckle closures for refined tailoring.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 6,
    title: 'Combat Explorer Boots',
    description: 'Reinforced ballistic stitching with rugged lugged rubber outsole for durability.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 7,
    title: 'Velvet Evening Slip-ons',
    description: 'Plush midnight velvet upper with quilted satin interior for formal soirées.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 8,
    title: 'Trail Runner Pro',
    description: 'Lightweight high-abrasion mesh upper with reactive energy-return midsole.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
];

const categories = [
  {
    name: 'Footwear & Shoes',
    subtitle: 'From formal brogues to daily athletic sneakers',
    tag: 'EXPLORE SHOES',
    link: '/shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Shirts & Tops',
    subtitle: 'Crisp Oxford cotton, linen blends & tailored tees',
    tag: 'EXPLORE SHIRTS',
    link: '/shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Trousers & Pants',
    subtitle: 'Smart stretch chinos, denim & tailored relaxed fits',
    tag: 'EXPLORE PANTS',
    link: '/pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
  },
];

const valueProps = [
  {
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75A1.125 1.125 0 0 0 13.125 2.625H4.5A1.125 1.125 0 0 0 3.375 3.75v10.5M16.5 7.5V3.75" />
      </svg>
    ),
    title: 'Free Worldwide Shipping',
    desc: 'Complimentary express delivery on all qualified orders over $99.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Authentic Craftsmanship',
    desc: 'Hand-inspected materials with guaranteed durability and quality.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: '30-Day Easy Returns',
    desc: 'Not the right fit? Exchange or return with zero restocking fees.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 21Z" />
      </svg>
    ),
    title: 'Encrypted Security',
    desc: 'Bank-grade SSL checkout with Apple Pay, PayPal & Stripe support.',
  },
];

const Homepage = () => {
  return (
    <div className="w-full bg-neutral-50 text-neutral-900">
      {/* 1. HERO CAROUSEL */}
      <Crousal />

      {/* 2. VALUE PROPOSITIONS BAR */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200">
                  {prop.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900 mb-1">{prop.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Curated Catalog</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">Shop By Department</h2>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition inline-flex items-center gap-1"
          >
            View All Categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.link}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-8 border border-neutral-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1 block">
                  {cat.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-xs text-zinc-300 mb-4 line-clamp-2">{cat.subtitle}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md group-hover:bg-white group-hover:text-black transition">
                  Browse Collection &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (Using user's Productcards component!) */}
      <section className="bg-white py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Handpicked Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2">
              Featured Essentials
            </h2>
            <p className="text-sm text-neutral-500 mt-3">
              Explore our best-rated footwear engineered with 3D ergonomic support and authentic leather finishes.
            </p>
          </div>

          {/* Product Cards Grid rendering user's Productcards */}
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {featuredProducts.map((product) => (
              <Productcards
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-black hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl shadow-lg transition"
            >
              Browse Full Catalog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL SALE BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-neutral-900 to-black text-white p-8 sm:p-12 lg:p-16 border border-neutral-800 shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-rose-500 text-white font-bold text-xs uppercase tracking-wider mb-4">
              LIMITED TIME FLASH SALE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Up To 40% Off Footwear & Outerwear
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mb-8 leading-relaxed">
              Upgrade your seasonal wardrobe with exclusive member discounts. Apply code <code className="bg-white/20 px-2 py-1 rounded text-white font-mono font-bold">STRATA40</code> at checkout.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/offers"
                className="px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-neutral-100 transition shadow"
              >
                Claim Discount
              </Link>
              <Link
                to="/products"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-xl border border-white/20 transition backdrop-blur-sm"
              >
                View Terms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRENDING / NEW ARRIVALS GRID (Using user's Productcards component!) */}
      <section className="bg-white py-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Just Landed</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-1">Trending New Arrivals</h2>
            </div>
            <Link
              to="/products"
              className="mt-4 sm:mt-0 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition"
            >
              See All &rarr;
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {trendingDrops.map((product) => (
              <Productcards
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TRUST & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Trusted Community</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {'★★★★★'}
            </div>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              "The craftsmanship on the leather Oxford shoes blew me away. Superb fit right out of the box, zero breaking-in required."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                JD
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Julian Davies</p>
                <p className="text-[11px] text-emerald-600 font-medium">Verified Buyer</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {'★★★★★'}
            </div>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              "Delivery was prompt and packaging was immaculate. The shirts are breathable and maintain shape through washes."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                MR
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Marcus Reed</p>
                <p className="text-[11px] text-emerald-600 font-medium">Verified Buyer</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {'★★★★★'}
            </div>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              "Fast customer service and seamless return when I ordered one size too small. STRATA has earned a loyal customer."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                SL
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Sarah Lin</p>
                <p className="text-[11px] text-emerald-600 font-medium">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;