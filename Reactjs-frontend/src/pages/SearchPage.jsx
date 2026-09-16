import { useState, useMemo } from 'react';
import Productcards from '../components/productspage/Productcards';

const searchCatalog = [
  {
    id: 1,
    title: 'Oxford Leather Brogues',
    description: 'Handcrafted Italian calfskin leather with durable Blake welt stitching.',
    category: 'shoes',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 2,
    title: 'Chelsea Suede Boots',
    description: 'Water-resistant supple suede with dual elastic side gussets for all-day comfort.',
    category: 'shoes',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 3,
    title: 'Minimalist White Sneakers',
    description: 'Ultra-clean low top silhouette with ergonomic memory-foam cushioned insole.',
    category: 'shoes',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 4,
    title: 'Derby Casual Shoes',
    description: 'Versatile open-laced derby crafted with premium grain leather and non-slip sole.',
    category: 'shoes',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 5,
    title: 'Oxford Cotton Shirt',
    description: '100% long-staple organic cotton with tailored collar and mother-of-pearl buttons.',
    category: 'shirts',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 6,
    title: 'Linen Vacation Shirt',
    description: 'Lightweight breathable European linen with relaxed Cuban camp collar.',
    category: 'shirts',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 7,
    title: 'Tailored Stretch Chinos',
    description: '4-way flexibility twill with concealed stash pocket and tapered ankle fit.',
    category: 'pants',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 8,
    title: 'Pleated Wool Trousers',
    description: 'Super-120s virgin wool with classic front pleats and adjustable side waist tabs.',
    category: 'pants',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
  },
];

const quickKeywords = ['Brogues', 'Chelsea Boots', 'Sneakers', 'Oxford Shirt', 'Linen', 'Chinos', 'Wool'];

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return searchCatalog;
    const q = query.toLowerCase().trim();
    return searchCatalog.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-3">
            Search Our Collection
          </h1>
          <p className="text-sm text-neutral-500 mb-6">
            Find the perfect footwear, shirts, and tailored trousers across the STRATA catalog.
          </p>

          <div className="relative shadow-sm rounded-2xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name, category, or style (e.g. Leather, Boots)..."
              className="w-full pl-12 pr-12 py-4 bg-white border border-neutral-300 rounded-2xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
            <svg
              className="w-5 h-5 text-neutral-400 absolute left-4 top-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
            </svg>

            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-4 text-xs font-bold text-neutral-400 hover:text-black transition"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs text-neutral-400 font-medium">Popular searches:</span>
            {quickKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 transition cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-8">
          <h2 className="text-base font-bold text-neutral-900">
            {query.trim() ? `Search Results for "${query}"` : 'All Available Items'}
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            {searchResults.length} {searchResults.length === 1 ? 'item' : 'items'} found
          </span>
        </div>

        {searchResults.length > 0 ? (
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {searchResults.map((product) => (
              <Productcards
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 p-8 max-w-lg mx-auto">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">No items found matching "{query}"</h3>
            <p className="text-xs text-neutral-500 mb-5">
              Check your spelling or try searching for another term like "Shoes", "Brogues", or "Chinos".
            </p>
            <button
              onClick={() => setQuery('')}
              className="px-6 py-2.5 bg-black text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition"
            >
              View Full Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
