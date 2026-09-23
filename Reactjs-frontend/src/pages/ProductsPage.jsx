import { useState, useMemo} from 'react';
import Productcards from '../components/productspage/Productcards';
import allProducts from '../data/product'




// const allProducts = [
//   {
//     id: 1,
//     title: 'Oxford Leather Brogues',
//     description: 'Handcrafted Italian calfskin leather with durable Blake welt stitching.',
//     category: 'shoes',
//     price: 189,
//     rating: 4.9,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: false,
//   },
//   {
//     id: 2,
//     title: 'Chelsea Suede Boots',
//     description: 'Water-resistant supple suede with dual elastic side gussets.',
//     category: 'shoes',
//     price: 165,
//     rating: 4.8,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: true,
//   },
//   {
//     id: 3,
//     title: 'Minimalist White Sneakers',
//     description: 'Ultra-clean low top silhouette with ergonomic memory-foam insole.',
//     category: 'shoes',
//     price: 120,
//     rating: 4.7,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: false,
//   },
//   {
//     id: 4,
//     title: 'Derby Casual Shoes',
//     description: 'Versatile open-laced derby crafted with premium grain leather.',
//     category: 'shoes',
//     price: 145,
//     rating: 4.6,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: true,
//   },
//   {
//     id: 5,
//     title: 'Oxford Cotton Shirt',
//     description: '100% long-staple organic cotton with tailored collar and mother-of-pearl buttons.',
//     category: 'shirts',
//     price: 85,
//     rating: 4.8,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: true,
//   },
//   {
//     id: 6,
//     title: 'Linen Vacation Shirt',
//     description: 'Lightweight breathable European linen with relaxed Cuban camp collar.',
//     category: 'shirts',
//     price: 75,
//     rating: 4.6,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: false,
//   },
//   {
//     id: 7,
//     title: 'Tailored Stretch Chinos',
//     description: '4-way flexibility twill with concealed stash pocket and tapered ankle fit.',
//     category: 'pants',
//     price: 95,
//     rating: 4.9,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: false,
//   },
//   {
//     id: 8,
//     title: 'Pleated Wool Trousers',
//     description: 'Super-120s virgin wool with classic front pleats and adjustable side waist tabs.',
//     category: 'pants',
//     price: 135,
//     rating: 4.7,
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png',
//     isOffer: true,
//   },
// ];

const ProductsPage = ({ category: defaultCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(250);

  const activeCategory = selectedCategory;

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Category filter
      if (activeCategory === 'offers' && !product.isOffer) return false;
      if (activeCategory !== 'all' && activeCategory !== 'offers' && product.category !== activeCategory) {
        return false;
      }
      // Price filter
      if (product.price > maxPrice) return false;
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          product.title.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [activeCategory, maxPrice, searchQuery, sortBy]);

  const getPageTitle = () => {
    if (activeCategory === 'shirts') return 'Shirts & Tops Collection';
    if (activeCategory === 'pants') return 'Pants & Trousers Collection';
    if (activeCategory === 'shoes') return 'Footwear & Shoes Collection';
    if (activeCategory === 'offers') return 'Exclusive Special Offers';
    return 'All Products Catalog';
  };

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
            <span>/</span>
            <span className="text-neutral-900 font-semibold capitalize">{activeCategory}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            {getPageTitle()}
          </h1>
          <p className="text-sm text-neutral-500 mt-2">
            Showing {filteredProducts.length} premium crafted items designed for comfort and elegance.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {['all', 'shoes', 'shirts', 'pants', 'offers'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${activeCategory === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
              >
                {cat === 'offers' ? '🔥 Offers' : cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-neutral-100 border border-neutral-200 rounded-xl text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition"
              />
              <svg
                className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
              </svg>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <span>Max: ${maxPrice}</span>
              <input
                type="range"
                min="50"
                max="250"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-black cursor-pointer"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-neutral-100 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-700 focus:outline-none focus:border-black cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {filteredProducts.map((product) => (
              <Productcards
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 p-8">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-neutral-800 mb-1">No matching products found</h3>
            <p className="text-sm text-neutral-500 max-w-sm mx-auto mb-6">
              We couldn't find anything matching your filters. Try resetting the category or adjusting the search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setMaxPrice(250);
              }}
              className="px-6 py-2.5 bg-black text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
