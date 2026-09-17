import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/homepage/navbar';
import Footer from './components/homepage/footer';
import Homepage from './components/homepage/homepage';
import Login from './components/loginpage/login';
import Signup from './components/loginpage/signup';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/Notfound';

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* User's Navbar component */}
      <Navbar cartCount={3} />

      {/* Main Content Area - with top padding so absolute navbar never clips content */}
      <main className={`flex-1 ${isAuthPage ? 'pt-16 flex items-center justify-center' : 'pt-16'}`}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage key="all" category="all" />} />
          <Route path="/shirts" element={<ProductsPage key="shirts" category="shirts" />} />
          <Route path="/pants" element={<ProductsPage key="pants" category="pants" />} />
          <Route path="/shoes" element={<ProductsPage key="shoes" category="shoes" />} />
          <Route path="/offers" element={<ProductsPage key="offers" category="offers" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />

          {/* User's authentication components */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer across store pages (excluding login/signup auth screens) */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;
