import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./styles/navbar.module.css";

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `${style.navLink}${isActive ? ` ${style.active}` : ""}`;

  return (
    <nav className={style.navbar}>
      <div className={style.navbarInner}>
        <Link to="/" className={style.navbarLogo}>
          STRATA
        </Link>

        <div className={style.navbarLinks}>
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Shop</NavLink>

          <div
            className={style.dropdown}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              className={style.dropdownToggle}
              aria-expanded={categoriesOpen}
              onClick={() => setCategoriesOpen((v) => !v)}
            >
              Categories
              <svg
                className={`${style.chevron}${categoriesOpen ? ` ${style.open}` : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {categoriesOpen && (
              <div className={style.dropdownMenu}>
                <Link to="/shirts" className={style.dropdownItem} onClick={() => setCategoriesOpen(false)}>Shirts</Link>
                <Link to="/pants" className={style.dropdownItem} onClick={() => setCategoriesOpen(false)}>Pants</Link>
                <Link to="/shoes" className={style.dropdownItem} onClick={() => setCategoriesOpen(false)}>Shoes</Link>
              </div>
            )}
          </div>

          <NavLink to="/offers" className={linkClass}>Offers</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>

        <div className={style.navbarActions}>
          <Link to="/search" className={style.iconBtn} aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
            </svg>
          </Link>

          <Link to="/cart" className={style.iconBtn} aria-label={`Cart with ${cartCount} items`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
            {cartCount > 0 && <span className={style.cartBadge}>{cartCount}</span>}
          </Link>

          <Link to="/login" className={style.loginBtn}>Login</Link>
        </div>

        <div className={style.navbarMobileActions}>
          <Link to="/cart" className={style.iconBtn} aria-label={`Cart with ${cartCount} items`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
            {cartCount > 0 && <span className={style.cartBadge}>{cartCount}</span>}
          </Link>

          <button
            type="button"
            className={style.hamburgerBtn}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={style.mobileMenu}>
          <NavLink to="/" className={style.mobileLink} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={style.mobileLink} onClick={() => setMenuOpen(false)}>Shop</NavLink>

          <p className={style.mobileSectionLabel}>Categories</p>
          <NavLink to="/shirts" className={`${style.mobileLink} ${style.sub}`} onClick={() => setMenuOpen(false)}>Shirts</NavLink>
          <NavLink to="/pants" className={`${style.mobileLink} ${style.sub}`} onClick={() => setMenuOpen(false)}>Pants</NavLink>
          <NavLink to="/shoes" className={`${style.mobileLink} ${style.sub}`} onClick={() => setMenuOpen(false)}>Shoes</NavLink>

          <NavLink to="/offers" className={style.mobileLink} onClick={() => setMenuOpen(false)}>Offers</NavLink>
          <NavLink to="/about" className={style.mobileLink} onClick={() => setMenuOpen(false)}>About</NavLink>

          <Link to="/login" className={style.mobileLoginBtn} onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;