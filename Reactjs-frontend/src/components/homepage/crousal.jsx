import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    tag: 'NEW SEASON 2026',
    title: 'Crafted For Modern Living',
    subtitle: 'Discover timeless footwear, refined tailoring, and premium materials designed to elevate your everyday wardrobe.',
    primaryBtn: { text: 'Shop Collection', link: '/products' },
    secondaryBtn: { text: 'Explore Offers', link: '/offers' },
    badge: 'Up to 35% Off',
    accentColor: 'from-zinc-900 via-neutral-900 to-black',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    tag: 'ESSENTIAL APPAREL',
    title: 'Precision Cut Shirts & Tees',
    subtitle: 'Breathable organic fabrics crafted with meticulous precision. From crisp formal shirts to relaxed casual layers.',
    primaryBtn: { text: 'Shop Shirts', link: '/shirts' },
    secondaryBtn: { text: 'View Catalog', link: '/products' },
    badge: 'Trending Now',
    accentColor: 'from-blue-950 via-slate-900 to-black',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    tag: 'URBAN MOVEMENT',
    title: 'Tailored Pants & Chinos',
    subtitle: 'Engineered for flexibility and sharp silhouettes. Premium stretch fabrics made to move with your day.',
    primaryBtn: { text: 'Shop Pants', link: '/pants' },
    secondaryBtn: { text: 'Browse Shoes', link: '/shoes' },
    badge: 'Bestseller',
    accentColor: 'from-stone-900 via-neutral-900 to-black',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
  },
];

const Crousal = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <div className={`relative min-h-[540px] md:min-h-[620px] flex items-center bg-gradient-to-r ${slide.accentColor} transition-all duration-700 ease-in-out`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7 z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-blue-300 uppercase mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              {slide.tag}
              <span className="text-white/40">•</span>
              <span className="text-white/80">{slide.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              {slide.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={slide.primaryBtn.link}
                className="px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition duration-200 shadow-lg shadow-white/10 flex items-center gap-2"
              >
                {slide.primaryBtn.text}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                to={slide.secondaryBtn.link}
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition duration-200 backdrop-blur-sm"
              >
                {slide.secondaryBtn.text}
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-4/3 md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-zinc-900/60">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400">Featured Drop</p>
                  <p className="text-sm font-semibold text-white">Genuine Craftsmanship</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-blue-600 text-white font-medium">In Stock</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 border border-white/20 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition z-20 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 border border-white/20 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition z-20 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === index ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousal;